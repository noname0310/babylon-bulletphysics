import { Scene } from "@babylonjs/core/scene";
import type { Nullable } from "@babylonjs/core/types";

import type { BulletWasmInstance } from "./bulletWasmInstance";
import type { IRuntime } from "./IRuntime";
import { WasmSpinlock } from "./Misc/wasmSpinlock";
import { PhysicsRuntimeEvaluationType } from "./physicsRuntimeEvaluationType";
import { PhysicsWorld } from "./physicsWorld";

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

    /**
     * Creates a new physics runtime
     * @param wasmInstance The Bullet WASM instance
     */
    public constructor(wasmInstance: BulletWasmInstance) {
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

        const scene = this._scene;
        if (scene !== null) {
            deltaTime = scene.useConstantAnimationDeltaTime
                ? 16
                : Math.max(Scene.MinDeltaTime, Math.min(deltaTime, Scene.MaxDeltaTime));
        } else {
            deltaTime = Math.max(Scene.MinDeltaTime, Math.min(deltaTime, Scene.MaxDeltaTime));
        }

        // TODO: Implement physics runtime evaluation
        this._physicsWorld;
        this._evaluationType;
    }
}
