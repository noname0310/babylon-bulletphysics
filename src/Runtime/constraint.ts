import type { Matrix, Vector3 } from "@babylonjs/core/Maths/math.vector";
import type { Nullable } from "@babylonjs/core/types";

import type { BulletWasmInstance } from "./bulletWasmInstance";
import type { RigidBody } from "./rigidBody";
import type { RigidBodyBundle } from "./rigidBodyBundle";

class ConstraintInner {
    private readonly _wasmInstance: WeakRef<BulletWasmInstance>;
    private _ptr: number;
    private _bodyReference: Nullable<readonly [RigidBody, RigidBody] | RigidBodyBundle>;
    private _referenceCount: number;

    public constructor(wasmInstance: WeakRef<BulletWasmInstance>, ptr: number, bodyReference: readonly [RigidBody, RigidBody] | RigidBodyBundle) {
        this._wasmInstance = wasmInstance;
        this._ptr = ptr;
        this._bodyReference = bodyReference;
        if (Array.isArray(bodyReference)) {
            bodyReference[0].addReference();
            bodyReference[1].addReference();
        } else {
            (bodyReference as RigidBodyBundle).addReference();
        }
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
        if (Array.isArray(this._bodyReference)) {
            this._bodyReference[0].removeReference();
            this._bodyReference[1].removeReference();
        } else {
            (this._bodyReference as RigidBodyBundle).removeReference();
        }
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

    protected constructor(wasmInstance: BulletWasmInstance, ptr: number, bodyReference: readonly [RigidBody, RigidBody] | RigidBodyBundle) {
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
    );

    public constructor(
        wasmInstance: BulletWasmInstance,
        bodyBundle: RigidBodyBundle,
        bodyIndices: readonly [number, number],
        frameA: Matrix,
        frameB: Matrix,
        useLinearReferenceFrameA: boolean
    );

    public constructor(
        wasmInstance: BulletWasmInstance,
        bodyAOrBundle: RigidBody | RigidBodyBundle,
        bodyBOrIndices: RigidBody | readonly [number, number],
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

        const isBundleParam = Array.isArray(bodyBOrIndices);

        const ptr = isBundleParam
            ? wasmInstance.createGeneric6DofConstraintFromBundle(
                bodyAOrBundle.ptr,
                bodyBOrIndices[0],
                bodyBOrIndices[1],
                frameABufferPtr,
                frameBBufferPtr,
                useLinearReferenceFrameA
            )
            : wasmInstance.createGeneric6DofConstraint(
                bodyAOrBundle.ptr,
                (bodyBOrIndices as RigidBody).ptr,
                frameABufferPtr,
                frameBBufferPtr,
                useLinearReferenceFrameA
            );

        wasmInstance.deallocateBuffer(frameABufferPtr, 16);
        wasmInstance.deallocateBuffer(frameBBufferPtr, 16);

        const bodyReference = isBundleParam
            ? (bodyAOrBundle as RigidBodyBundle)
            : [bodyAOrBundle as RigidBody, bodyBOrIndices as RigidBody] as const;

        super(wasmInstance, ptr, bodyReference);
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
    );

    public constructor(
        wasmInstance: BulletWasmInstance,
        bodyBundle: RigidBodyBundle,
        bodyIndices: readonly [number, number],
        frameA: Matrix,
        frameB: Matrix,
        useLinearReferenceFrameA: boolean
    );

    public constructor(
        wasmInstance: BulletWasmInstance,
        bodyAOrBundle: RigidBody | RigidBodyBundle,
        bodyBOrIndices: RigidBody | readonly [number, number],
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

        const isBundleParam = Array.isArray(bodyBOrIndices);

        const ptr = isBundleParam
            ? wasmInstance.createGeneric6DofSpringConstraintFromBundle(
                bodyAOrBundle.ptr,
                bodyBOrIndices[0],
                bodyBOrIndices[1],
                frameABufferPtr,
                frameBBufferPtr,
                useLinearReferenceFrameA
            )
            : wasmInstance.createGeneric6DofSpringConstraint(
                bodyAOrBundle.ptr,
                (bodyBOrIndices as RigidBody).ptr,
                frameABufferPtr,
                frameBBufferPtr,
                useLinearReferenceFrameA
            );

        wasmInstance.deallocateBuffer(frameABufferPtr, 16);
        wasmInstance.deallocateBuffer(frameBBufferPtr, 16);

        const bodyReference = isBundleParam
            ? (bodyAOrBundle as RigidBodyBundle)
            : [bodyAOrBundle as RigidBody, bodyBOrIndices as RigidBody] as const;

        super(wasmInstance, ptr, bodyReference);
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
