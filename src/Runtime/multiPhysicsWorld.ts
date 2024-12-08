import type { Vector3 } from "@babylonjs/core/Maths/math.vector";

import type { BulletWasmInstance } from "./bulletWasmInstance";
import type { Constraint } from "./constraint";
import type { RigidBody } from "./rigidBody";
import type { RigidBodyBundle } from "./rigidBodyBundle";

class MultiPhysicsWorldInner {
    private readonly _wasmInstance: WeakRef<BulletWasmInstance>;
    private _ptr: number;
    private readonly _rigidBodyReferences: Set<RigidBody>;
    private readonly _rigidBodyBundleReferences: Set<RigidBodyBundle>;
    private readonly _constraintReferences: Set<Constraint>;

    public constructor(wasmInstance: WeakRef<BulletWasmInstance>, ptr: number) {
        this._wasmInstance = wasmInstance;
        this._ptr = ptr;
        this._rigidBodyReferences = new Set<RigidBody>();
        this._rigidBodyBundleReferences = new Set<RigidBodyBundle>();
        this._constraintReferences = new Set<Constraint>();
    }

    public dispose(): void {
        if (this._ptr === 0) {
            return;
        }

        this._wasmInstance.deref()?.destroyPhysicsWorld(this._ptr);
        this._ptr = 0;

        for (const rigidBody of this._rigidBodyReferences) {
            rigidBody.setWorldReference(null);
        }
        this._rigidBodyReferences.clear();

        for (const rigidBodyBundle of this._rigidBodyBundleReferences) {
            rigidBodyBundle.setWorldReference(null);
        }
        this._rigidBodyBundleReferences.clear();

        for (const constraint of this._constraintReferences) {
            constraint.setWorldReference(null);
        }
        this._constraintReferences.clear();
    }

    public get ptr(): number {
        return this._ptr;
    }

    public addRigidBodyReference(rigidBody: RigidBody): boolean {
        if (this._rigidBodyReferences.has(rigidBody)) {
            return false;
        }

        rigidBody.setWorldReference(this);
        this._rigidBodyReferences.add(rigidBody);
        return true;
    }

    public removeRigidBodyReference(rigidBody: RigidBody): boolean {
        if (this._rigidBodyReferences.delete(rigidBody)) {
            rigidBody.setWorldReference(null);
            return true;
        }
        return false;
    }

    public addRigidBodyBundleReference(rigidBodyBundle: RigidBodyBundle): boolean {
        if (this._rigidBodyBundleReferences.has(rigidBodyBundle)) {
            return false;
        }

        rigidBodyBundle.setWorldReference(this);
        this._rigidBodyBundleReferences.add(rigidBodyBundle);
        return true;
    }

    public removeRigidBodyBundleReference(rigidBodyBundle: RigidBodyBundle): boolean {
        if (this._rigidBodyBundleReferences.delete(rigidBodyBundle)) {
            rigidBodyBundle.setWorldReference(null);
            return true;
        }
        return false;
    }

    public addRigidBodyGlobalReference(rigidBody: RigidBody): boolean {
        if (this._rigidBodyReferences.has(rigidBody)) {
            return false;
        }

        rigidBody.addReference();
        this._rigidBodyReferences.add(rigidBody);
        return true;
    }

    public removeRigidBodyGlobalReference(rigidBody: RigidBody): boolean {
        if (this._rigidBodyReferences.delete(rigidBody)) {
            rigidBody.removeReference();
            return true;
        }
        return false;
    }

    public addRigidBodyBundleGlobalReference(rigidBodyBundle: RigidBodyBundle): boolean {
        if (this._rigidBodyBundleReferences.has(rigidBodyBundle)) {
            return false;
        }

        rigidBodyBundle.addReference();
        this._rigidBodyBundleReferences.add(rigidBodyBundle);
        return true;
    }

    public removeRigidBodyBundleGlobalReference(rigidBodyBundle: RigidBodyBundle): boolean {
        if (this._rigidBodyBundleReferences.delete(rigidBodyBundle)) {
            rigidBodyBundle.removeReference();
            return true;
        }
        return false;
    }

    public addConstraintReference(constraint: Constraint): boolean {
        if (this._constraintReferences.has(constraint)) {
            return false;
        }

        constraint.setWorldReference(this);
        this._constraintReferences.add(constraint);
        return true;
    }

    public removeConstraintReference(constraint: Constraint): boolean {
        if (this._constraintReferences.delete(constraint)) {
            constraint.setWorldReference(null);
            return true;
        }
        return false;
    }
}

function multiPhysicsWorldFinalizer(inner: MultiPhysicsWorldInner): void {
    inner.dispose();
}

const multiPhysicsWorldRegistryMap = new WeakMap<BulletWasmInstance, FinalizationRegistry<MultiPhysicsWorldInner>>();

export class MultiPhysicsWorld {
    private readonly _wasmInstance: BulletWasmInstance;

    private readonly _inner: MultiPhysicsWorldInner;

    public constructor(wasmInstance: BulletWasmInstance) {
        this._wasmInstance = wasmInstance;

        const ptr = wasmInstance.createMultiPhysicsWorld();

        this._inner = new MultiPhysicsWorldInner(new WeakRef(wasmInstance), ptr);

        let registry = multiPhysicsWorldRegistryMap.get(wasmInstance);
        if (registry === undefined) {
            registry = new FinalizationRegistry(multiPhysicsWorldFinalizer);
            multiPhysicsWorldRegistryMap.set(wasmInstance, registry);
        }

        registry.register(this, this._inner, this);
    }

    public dispose(): void {
        if (this._inner.ptr === 0) {
            return;
        }

        this._inner.dispose();

        const registry = multiPhysicsWorldRegistryMap.get(this._wasmInstance);
        registry?.unregister(this);
    }

    public get ptr(): number {
        return this._inner.ptr;
    }

    private _nullCheck(): void {
        if (this._inner.ptr === 0) {
            throw new Error("Cannot access disposed physics world");
        }
    }

    public setGravity(gravity: Vector3): void {
        this._nullCheck();
        this._wasmInstance.multiPhysicsWorldSetGravity(this._inner.ptr, gravity.x, gravity.y, gravity.z);
    }

    public stepSimulation(timeStep: number, maxSubSteps: number, fixedTimeStep: number): void {
        this._nullCheck();
        this._wasmInstance.multiPhysicsWorldStepSimulation(this._inner.ptr, timeStep, maxSubSteps, fixedTimeStep);
    }

    public addRigidBody(rigidBody: RigidBody, worldId: number): boolean {
        this._nullCheck();
        if (this._inner.addRigidBodyReference(rigidBody)) {
            this._wasmInstance.multiPhysicsWorldAddRigidBody(this._inner.ptr, worldId, rigidBody.ptr);
            return true;
        }
        return false;
    }

    public removeRigidBody(rigidBody: RigidBody, worldId: number): boolean {
        this._nullCheck();
        if (this._inner.removeRigidBodyReference(rigidBody)) {
            this._wasmInstance.multiPhysicsWorldRemoveRigidBody(this._inner.ptr, worldId, rigidBody.ptr);
            return true;
        }
        return false;
    }

    public addRigidBodyBundle(rigidBodyBundle: RigidBodyBundle, worldId: number): boolean {
        this._nullCheck();
        if (this._inner.addRigidBodyBundleReference(rigidBodyBundle)) {
            this._wasmInstance.multiPhysicsWorldAddRigidBodyBundle(this._inner.ptr, worldId, rigidBodyBundle.ptr);
            return true;
        }
        return false;
    }

    public removeRigidBodyBundle(rigidBodyBundle: RigidBodyBundle, worldId: number): boolean {
        this._nullCheck();
        if (this._inner.removeRigidBodyBundleReference(rigidBodyBundle)) {
            this._wasmInstance.multiPhysicsWorldRemoveRigidBodyBundle(this._inner.ptr, worldId, rigidBodyBundle.ptr);
            return true;
        }
        return false;
    }

    public addRigidBodyToGlobal(rigidBody: RigidBody): boolean {
        this._nullCheck();
        if (this._inner.addRigidBodyGlobalReference(rigidBody)) {
            this._wasmInstance.multiPhysicsWorldAddRigidBodyToGlobal(this._inner.ptr, rigidBody.ptr);
            return true;
        }
        return false;
    }

    public removeRigidBodyFromGlobal(rigidBody: RigidBody): boolean {
        this._nullCheck();
        if (this._inner.removeRigidBodyGlobalReference(rigidBody)) {
            this._wasmInstance.multiPhysicsWorldRemoveRigidBodyFromGlobal(this._inner.ptr, rigidBody.ptr);
            return true;
        }
        return false;
    }

    public addConstraint(constraint: Constraint, worldId: number, disableCollisionsBetweenLinkedBodies: boolean): boolean {
        this._nullCheck();
        if (this._inner.addConstraintReference(constraint)) {
            this._wasmInstance.multiPhysicsWorldAddConstraint(this._inner.ptr, worldId, constraint.ptr, disableCollisionsBetweenLinkedBodies);
            return true;
        }
        return false;
    }

    public removeConstraint(constraint: Constraint, worldId: number): boolean {
        this._nullCheck();
        if (this._inner.removeConstraintReference(constraint)) {
            this._wasmInstance.multiPhysicsWorldRemoveConstraint(this._inner.ptr, worldId, constraint.ptr);
            return true;
        }
        return false;
    }
}
