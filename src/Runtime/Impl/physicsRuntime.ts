import { Vector3 } from "@babylonjs/core/Maths/math.vector";
import { Observable } from "@babylonjs/core/Misc/observable";
import { Scene } from "@babylonjs/core/scene";
import type { Nullable } from "@babylonjs/core/types";

import type { BulletWasmInstance } from "../bulletWasmInstance";
import type { Constraint } from "../constraint";
import { WasmSpinlock } from "../Misc/wasmSpinlock";
import { PhysicsWorld } from "../physicsWorld";
import type { RigidBody } from "../rigidBody";
import type { RigidBodyBundle } from "../rigidBodyBundle";
import { BufferedRigidBodyBundleImpl } from "./Buffered/bufferedRigidBodyBundleImpl";
import { BufferedRigidBodyImpl } from "./Buffered/bufferedRigidBodyImpl";
import { ImmediateRigidBodyBundleImpl } from "./Immediate/immediateRigidBodyBundleImpl";
import { ImmediateRigidBodyImpl } from "./Immediate/immediateRigidBodyImpl";
import type { IRigidBodyBundleImpl } from "./IRigidBodyBundleImpl";
import type { IRigidBodyImpl } from "./IRigidBodyImpl";
import type { IRuntime } from "./IRuntime";
import { PhysicsRuntimeEvaluationType } from "./physicsRuntimeEvaluationType";

class PhysicsRuntimeInner {
    private readonly _lock: WasmSpinlock;
    private readonly _wasmInstance: WeakRef<BulletWasmInstance>;
    private _ptr: number;
    private _worldReference: Nullable<PhysicsWorld>;

    public constructor(lock: WasmSpinlock, wasmInstance: WeakRef<BulletWasmInstance>, ptr: number, worldReference: PhysicsWorld) {
        this._lock = lock;
        this._wasmInstance = wasmInstance;
        this._ptr = ptr;
        this._worldReference = worldReference;
        worldReference.addReference();
    }

    public dispose(): void {
        if (this._ptr === 0) {
            return;
        }

        this._lock.wait(); // ensure that the runtime is not evaluating the world
        this._wasmInstance.deref()?.destroyPhysicsRuntime(this._ptr);

        this._ptr = 0;
        this._worldReference!.removeReference();
        this._worldReference = null;
    }

    public get ptr(): number {
        return this._ptr;
    }
}

function physicsRuntimeFinalizer(inner: PhysicsRuntimeInner): void {
    inner.dispose();
}

const physicsRuntimeRegistryMap = new WeakMap<BulletWasmInstance, FinalizationRegistry<PhysicsRuntimeInner>>();

export class PhysicsRuntime implements IRuntime {
    public readonly onTickObservable: Observable<void>;

    /**
     * @internal
     */
    public readonly wasmInstance: BulletWasmInstance;

    /**
     * Spinlock for the physics runtime to synchronize access to the physics world state
     * @internal
     */
    public readonly lock: WasmSpinlock;

    private readonly _inner: PhysicsRuntimeInner;

    private readonly _physicsWorld: PhysicsWorld;

    private _scene: Nullable<Scene>;
    private _afterAnimationsBinded: Nullable<() => void>;

    private readonly _evaluationType: PhysicsRuntimeEvaluationType;

    public readonly useDeltaForWorldStep: boolean;
    public readonly timeStep: number;
    public readonly maxSubSteps: number;
    public readonly fixedTimeStep: number;

    private readonly _rigidBodyList: RigidBody[];
    private readonly _rigidBodyBundleList: RigidBodyBundle[];

    /**
     * Creates a new physics runtime
     * @param wasmInstance The Bullet WASM instance
     */
    public constructor(wasmInstance: BulletWasmInstance) {
        this.onTickObservable = new Observable<void>();

        this.wasmInstance = wasmInstance;

        const physicsWorld = new PhysicsWorld(this);
        const ptr = wasmInstance.createPhysicsRuntime(physicsWorld.ptr);

        const lockPtr = wasmInstance.physicsRuntimeGetLockStatePtr(ptr);
        this.lock = new WasmSpinlock(wasmInstance.createTypedArray(Uint8Array, lockPtr, 1));

        this._inner = new PhysicsRuntimeInner(this.lock, new WeakRef(wasmInstance), ptr, physicsWorld);
        this._physicsWorld = physicsWorld;

        let registry = physicsRuntimeRegistryMap.get(wasmInstance);
        if (registry === undefined) {
            registry = new FinalizationRegistry(physicsRuntimeFinalizer);
            physicsRuntimeRegistryMap.set(wasmInstance, registry);
        }

        registry.register(this, this._inner, this);

        this._scene = null;
        this._afterAnimationsBinded = null;

        this._evaluationType = PhysicsRuntimeEvaluationType.Immediate;

        this.useDeltaForWorldStep = true;
        this.timeStep = 1 / 60;
        this.maxSubSteps = 10;
        this.fixedTimeStep = 1 / 60;

        this._rigidBodyList = [];
        this._rigidBodyBundleList = [];
    }

    public dispose(): void {
        if (this._inner.ptr === 0) {
            return;
        }

        this._inner.dispose();

        const registry = physicsRuntimeRegistryMap.get(this.wasmInstance);
        registry?.unregister(this);
    }

    public get ptr(): number {
        return this._inner.ptr;
    }

    private _nullCheck(): void {
        if (this._inner.ptr === 0) {
            throw new Error("Cannot access disposed physics runtime");
        }
    }

    public createRigidBodyImpl(): IRigidBodyImpl {
        if (this._evaluationType === PhysicsRuntimeEvaluationType.Immediate) {
            return new ImmediateRigidBodyImpl();
        } else {
            return new BufferedRigidBodyImpl();
        }
    }

    public createRigidBodyBundleImpl(bundle: RigidBodyBundle): IRigidBodyBundleImpl {
        if (this._evaluationType === PhysicsRuntimeEvaluationType.Immediate) {
            return new ImmediateRigidBodyBundleImpl(bundle.count);
        } else {
            return new BufferedRigidBodyBundleImpl(bundle.count);
        }
    }

    public register(scene: Scene): void {
        if (this._afterAnimationsBinded !== null) return;
        this._nullCheck();

        this._afterAnimationsBinded = (): void => {
            this.afterAnimations(scene.getEngine().getDeltaTime());
        };
        this._scene = scene;
        scene.onAfterAnimationsObservable.add(this._afterAnimationsBinded);
    }

    public unregister(): void {
        if (this._afterAnimationsBinded === null) return;

        this._scene!.onAfterAnimationsObservable.removeCallback(this._afterAnimationsBinded);
        this._afterAnimationsBinded = null;
        this._scene = null;
    }

    public afterAnimations(deltaTime: number): void {
        if (this._inner.ptr === 0) {
            this.unregister();
            return;
        }

        if (this.useDeltaForWorldStep) {
            const scene = this._scene;
            if (scene !== null) {
                deltaTime = scene.useConstantAnimationDeltaTime
                    ? 16
                    : Math.max(Scene.MinDeltaTime, Math.min(deltaTime, Scene.MaxDeltaTime));
            } else {
                deltaTime = Math.max(Scene.MinDeltaTime, Math.min(deltaTime, Scene.MaxDeltaTime));
            }
            deltaTime /= 1000;
        } else {
            deltaTime = this.timeStep;
        }
        this._physicsWorld.stepSimulation(deltaTime, this.maxSubSteps, this.fixedTimeStep);

        this.onTickObservable.notifyObservers();
    }

    private readonly _gravity: Vector3 = new Vector3(0, -10, 0);

    public getGravityToRef(result: Vector3): void {
        result.copyFrom(this._gravity);
    }

    public setGravity(gravity: Vector3): void {
        this._nullCheck();
        this._gravity.copyFrom(gravity);
        this._physicsWorld.setGravity(gravity);
    }

    public addRigidBody(rigidBody: RigidBody): boolean {
        this._nullCheck();
        const result = this._physicsWorld.addRigidBody(rigidBody);
        if (result) {
            this._rigidBodyList.push(rigidBody);
        }
        return result;
    }

    public removeRigidBody(rigidBody: RigidBody): boolean {
        this._nullCheck();
        const result = this._physicsWorld.removeRigidBody(rigidBody);
        if (result) {
            const index = this._rigidBodyList.indexOf(rigidBody);
            if (index !== -1) {
                this._rigidBodyList.splice(index, 1);
            }
        }
        return result;
    }

    public addRigidBodyBundle(rigidBodyBundle: RigidBodyBundle): boolean {
        this._nullCheck();
        const result = this._physicsWorld.addRigidBodyBundle(rigidBodyBundle);
        if (result) {
            this._rigidBodyBundleList.push(rigidBodyBundle);
        }
        return result;
    }

    public removeRigidBodyBundle(rigidBodyBundle: RigidBodyBundle): boolean {
        this._nullCheck();
        const result = this._physicsWorld.removeRigidBodyBundle(rigidBodyBundle);
        if (result) {
            const index = this._rigidBodyBundleList.indexOf(rigidBodyBundle);
            if (index !== -1) {
                this._rigidBodyBundleList.splice(index, 1);
            }
        }
        return result;
    }

    public get rigidBodyList(): readonly RigidBody[] {
        return this._rigidBodyList;
    }

    public addConstraint(constraint: Constraint, disableCollisionsBetweenLinkedBodies: boolean): boolean {
        this._nullCheck();
        return this._physicsWorld.addConstraint(constraint, disableCollisionsBetweenLinkedBodies);
    }

    public removeConstraint(constraint: Constraint): boolean {
        this._nullCheck();
        return this._physicsWorld.removeConstraint(constraint);
    }
}
