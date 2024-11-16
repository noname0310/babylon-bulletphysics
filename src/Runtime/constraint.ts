import type { Matrix, Vector3 } from "@babylonjs/core/Maths/math.vector";
import type { Nullable } from "@babylonjs/core/types";

import type { BulletWasmInstance } from "./bulletWasmInstance";
import type { RigidBody } from "./rigidBody";

class ConstraintInner {
    private readonly _wasmInstance: WeakRef<BulletWasmInstance>;
    private _ptr: number;
    private _bodyReference: Nullable<[RigidBody, RigidBody]>;
    private _referenceCount: number;

    public constructor(wasmInstance: WeakRef<BulletWasmInstance>, ptr: number, bodyReference: [RigidBody, RigidBody]) {
        this._wasmInstance = wasmInstance;
        this._ptr = ptr;
        this._bodyReference = bodyReference;
        bodyReference[0].addReference();
        bodyReference[1].addReference();
        this._referenceCount = 0;
    }

    public dispose(): void {
        if (this._referenceCount > 0) {
            throw new Error("Cannot dispose constraint while it still has references");
        }

        if (this._ptr === 0) {
            return;
        }

        this._wasmInstance.deref()?.destroyConstraint(this._ptr);
        this._ptr = 0;
        this._bodyReference![0].removeReference();
        this._bodyReference![1].removeReference();
        this._bodyReference = null;
    }

    public get ptr(): number {
        return this._ptr;
    }

    public addReference(): void {
        this._referenceCount += 1;
    }

    public removeReference(): void {
        this._referenceCount -= 1;
    }
}

function constraintFinalizer(inner: ConstraintInner): void {
    inner.dispose();
}

const constraintRegistryMap = new WeakMap<BulletWasmInstance, FinalizationRegistry<ConstraintInner>>();

export abstract class Constraint {
    protected readonly _wasmInstance: BulletWasmInstance;
    protected readonly _inner: ConstraintInner;

    protected constructor(wasmInstance: BulletWasmInstance, ptr: number, bodyReference: [RigidBody, RigidBody]) {
        this._wasmInstance = wasmInstance;
        this._inner = new ConstraintInner(new WeakRef(wasmInstance), ptr, bodyReference);

        let registry = constraintRegistryMap.get(wasmInstance);
        if (registry === undefined) {
            registry = new FinalizationRegistry(constraintFinalizer);
            constraintRegistryMap.set(wasmInstance, registry);
        }

        registry.register(this, this._inner, this);
    }

    public dispose(): void {
        if (this._inner.ptr === 0) {
            return;
        }

        this._inner.dispose();

        const registry = constraintRegistryMap.get(this._wasmInstance);
        registry?.unregister(this);
    }

    public get ptr(): number {
        return this._inner.ptr;
    }

    public addReference(): void {
        this._inner.addReference();
    }

    public removeReference(): void {
        this._inner.removeReference();
    }
}

export class Generic6DofConstraint extends Constraint {
    public constructor(
        wasmInstance: BulletWasmInstance,
        bodyA: RigidBody,
        bodyB: RigidBody,
        frameA: Matrix,
        frameB: Matrix,
        useLinearReferenceFrameA: boolean
    ) {
        const frameABufferPtr = wasmInstance.allocateBuffer(16);
        const frameABuffer = wasmInstance.createTypedArray(Float32Array, frameABufferPtr, 16);
        frameA.copyToArray(frameABuffer.array);

        const frameBBufferPtr = wasmInstance.allocateBuffer(16);
        const frameBBuffer = wasmInstance.createTypedArray(Float32Array, frameBBufferPtr, 16);
        frameB.copyToArray(frameBBuffer.array);

        const ptr = wasmInstance.createGeneric6DofConstraint(bodyA.ptr, bodyB.ptr, frameABufferPtr, frameBBufferPtr, useLinearReferenceFrameA);

        wasmInstance.deallocateBuffer(frameABufferPtr, 16);
        wasmInstance.deallocateBuffer(frameBBufferPtr, 16);
        super(wasmInstance, ptr, [bodyA, bodyB]);
    }

    public setLinearLowerLimit(limit: Vector3): void {
        this._wasmInstance.constraintSetLinearLowerLimit(this._inner.ptr, limit.x, limit.y, limit.z);
    }

    public setLinearUpperLimit(limit: Vector3): void {
        this._wasmInstance.constraintSetLinearUpperLimit(this._inner.ptr, limit.x, limit.y, limit.z);
    }

    public setAngularLowerLimit(limit: Vector3): void {
        this._wasmInstance.constraintSetAngularLowerLimit(this._inner.ptr, limit.x, limit.y, limit.z);
    }

    public setAngularUpperLimit(limit: Vector3): void {
        this._wasmInstance.constraintSetAngularUpperLimit(this._inner.ptr, limit.x, limit.y, limit.z);
    }
}

export class Generic6DofSpringConstraint extends Constraint {
    public constructor(
        wasmInstance: BulletWasmInstance,
        bodyA: RigidBody,
        bodyB: RigidBody,
        frameA: Matrix,
        frameB: Matrix,
        useLinearReferenceFrameA: boolean
    ) {
        const frameABufferPtr = wasmInstance.allocateBuffer(16);
        const frameABuffer = wasmInstance.createTypedArray(Float32Array, frameABufferPtr, 16);
        frameA.copyToArray(frameABuffer.array);

        const frameBBufferPtr = wasmInstance.allocateBuffer(16);
        const frameBBuffer = wasmInstance.createTypedArray(Float32Array, frameBBufferPtr, 16);
        frameB.copyToArray(frameBBuffer.array);

        const ptr = wasmInstance.createGeneric6DofSpringConstraint(bodyA.ptr, bodyB.ptr, frameABufferPtr, frameBBufferPtr, useLinearReferenceFrameA);

        wasmInstance.deallocateBuffer(frameABufferPtr, 16);
        wasmInstance.deallocateBuffer(frameBBufferPtr, 16);
        super(wasmInstance, ptr, [bodyA, bodyB]);
    }

    public setLinearLowerLimit(limit: Vector3): void {
        this._wasmInstance.constraintSetLinearLowerLimit(this._inner.ptr, limit.x, limit.y, limit.z);
    }

    public setLinearUpperLimit(limit: Vector3): void {
        this._wasmInstance.constraintSetLinearUpperLimit(this._inner.ptr, limit.x, limit.y, limit.z);
    }

    public setAngularLowerLimit(limit: Vector3): void {
        this._wasmInstance.constraintSetAngularLowerLimit(this._inner.ptr, limit.x, limit.y, limit.z);
    }

    public setAngularUpperLimit(limit: Vector3): void {
        this._wasmInstance.constraintSetAngularUpperLimit(this._inner.ptr, limit.x, limit.y, limit.z);
    }

    public enableSpring(index: number, onOff: boolean): void {
        this._wasmInstance.constraintEnableSpring(this._inner.ptr, index, onOff);
    }

    public setStiffness(index: number, stiffness: number): void {
        this._wasmInstance.constraintSetStiffness(this._inner.ptr, index, stiffness);
    }

    public setDamping(index: number, damping: number): void {
        this._wasmInstance.constraintSetDamping(this._inner.ptr, index, damping);
    }
}
