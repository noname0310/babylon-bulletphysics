import type { Matrix } from "@babylonjs/core/Maths/math.vector";
import type { DeepImmutable, Nullable, Tuple } from "@babylonjs/core/types";

import type { BulletWasmInstance } from "./bulletWasmInstance";
import { Constants } from "./constants";
import type { IRigidBodyBundleImpl } from "./Impl/IRigidBodyBundleImpl";
import type { IRuntime } from "./Impl/IRuntime";
import type { IWasmTypedArray } from "./Misc/IWasmTypedArray";
import type { PhysicsShape } from "./physicsShape";
import type { RigidBodyConstructionInfoList } from "./rigidBodyConstructionInfoList";

class RigidBodyBundleInner {
    private readonly _wasmInstance: WeakRef<BulletWasmInstance>;
    private _ptr: number;
    private readonly _shapeReferences: Set<PhysicsShape>;
    private _referenceCount: number;

    public constructor(wasmInstance: WeakRef<BulletWasmInstance>, ptr: number, shapeReferences: Set<PhysicsShape>) {
        this._wasmInstance = wasmInstance;
        this._ptr = ptr;
        this._shapeReferences = shapeReferences;
        for (const shape of shapeReferences) {
            shape.addReference();
        }
        this._referenceCount = 0;
    }

    public dispose(): void {
        if (this._referenceCount > 0) {
            throw new Error("Cannot dispose rigid body bundle while it still has references");
        }

        if (this._ptr === 0) {
            return;
        }

        // this operation is thread-safe because the rigid body bundle is not belong to any physics world
        this._wasmInstance.deref()?.destroyRigidBodyBundle(this._ptr);

        this._ptr = 0;
        for (const shape of this._shapeReferences) {
            shape.removeReference();
        }
        this._shapeReferences.clear();
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

    public get hasReferences(): boolean {
        return 0 < this._referenceCount;
    }
}

function rigidBodyBundleFinalizer(inner: RigidBodyBundleInner): void {
    inner.dispose();
}

const physicsRigidBodyBundleRegistryMap = new WeakMap<BulletWasmInstance, FinalizationRegistry<RigidBodyBundleInner>>();

export class RigidBodyBundle {
    public readonly runtime: IRuntime;

    private readonly _motionStatesPtr: IWasmTypedArray<Float32Array>;
    private _bufferedMotionStatesPtr: IWasmTypedArray<Float32Array>;

    private readonly _inner: RigidBodyBundleInner;
    private readonly _count: number;

    private _worldReference: Nullable<object>;

    public impl: IRigidBodyBundleImpl;

    public constructor(runtime: IRuntime, info: RigidBodyConstructionInfoList) {
        if (info.ptr === 0) {
            throw new Error("Cannot create rigid body bundle with null pointer");
        }
        const count = info.count;
        const shapeReferences = new Set<PhysicsShape>();
        for (let i = 0; i < count; ++i) {
            const shape = info.getShape(i);
            if (shape === null) {
                throw new Error("Cannot create rigid body bundle with null shape");
            }
            if (shape.runtime !== runtime) {
                throw new Error("Cannot create rigid body bundle with shapes from different runtimes");
            }
            shapeReferences.add(shape);
        }

        this.runtime = runtime;
        const wasmInstance = runtime.wasmInstance;
        const ptr = wasmInstance.createRigidBodyBundle(info.ptr, count);
        const motionStatesPtr = wasmInstance.rigidBodyBundleGetMotionStatesPtr(ptr);
        this._motionStatesPtr = wasmInstance.createTypedArray(Float32Array, motionStatesPtr, count * Constants.MotionStateSize / Float32Array.BYTES_PER_ELEMENT);
        const bufferedMotionStatesPtr = wasmInstance.rigidBodyBundleGetBufferedMotionStatesPtr(ptr);
        this._bufferedMotionStatesPtr = wasmInstance.createTypedArray(Float32Array, bufferedMotionStatesPtr, count * Constants.MotionStateSize / Float32Array.BYTES_PER_ELEMENT);
        this._inner = new RigidBodyBundleInner(new WeakRef(runtime.wasmInstance), ptr, shapeReferences);
        this._count = count;
        this._worldReference = null;

        let registry = physicsRigidBodyBundleRegistryMap.get(wasmInstance);
        if (registry === undefined) {
            registry = new FinalizationRegistry(rigidBodyBundleFinalizer);
            physicsRigidBodyBundleRegistryMap.set(wasmInstance, registry);
        }

        registry.register(this, this._inner, this);

        this.impl = runtime.createRigidBodyBundleImpl(this);
    }

    public dispose(): void {
        if (this._inner.ptr === 0) {
            return;
        }

        this._inner.dispose();

        const registry = physicsRigidBodyBundleRegistryMap.get(this.runtime.wasmInstance);
        registry?.unregister(this);
    }

    /**
     * @internal
     */
    public get ptr(): number {
        return this._inner.ptr;
    }

    public get count(): number {
        return this._count;
    }

    /**
     * @internal
     */
    public addReference(): void {
        this._inner.addReference();
    }

    /**
     * @internal
     */
    public removeReference(): void {
        this._inner.removeReference();
    }

    /**
     * @internal
     */
    public setWorldReference(worldReference: Nullable<object>): void {
        if (this._worldReference !== null && worldReference !== null) {
            throw new Error("Cannot add rigid body bundle to multiple worlds");
        }
        if (this._worldReference === worldReference) {
            return;
        }
        this._worldReference = worldReference;
        if (worldReference !== null) {
            this._inner.addReference();
        } else {
            this._inner.removeReference();
        }
    }

    /**
     * @internal
     */
    public getWorldReference(): Nullable<object> {
        return this._worldReference;
    }

    /**
     * @internal
     */
    public updateBufferedMotionStates(): void {
        this._nullCheck();
        const bufferedMotionStatesPtr = this.runtime.wasmInstance.rigidBodyBundleGetBufferedMotionStatesPtr(this._inner.ptr);
        this._bufferedMotionStatesPtr = this.runtime.wasmInstance.createTypedArray(Float32Array, bufferedMotionStatesPtr, this._count * Constants.MotionStateSize / Float32Array.BYTES_PER_ELEMENT);
    }


    private _nullCheck(): void {
        if (this._inner.ptr === 0) {
            throw new Error("Cannot access disposed rigid body bundle");
        }
    }

    public makeKinematic(index: number): void {
        this._nullCheck();
        if (index < 0 || this._count <= index) {
            throw new RangeError("Index out of range");
        }

        if (this._inner.hasReferences) {
            this.runtime.lock.wait();
        }
        this.runtime.wasmInstance.rigidBodyBundleMakeKinematic(this._inner.ptr, index);
    }

    public restoreDynamic(index: number): void {
        this._nullCheck();
        if (index < 0 || this._count <= index) {
            throw new RangeError("Index out of range");
        }

        if (this._inner.hasReferences) {
            this.runtime.lock.wait();
        }
        this.runtime.wasmInstance.rigidBodyBundleRestoreDynamic(this._inner.ptr, index);
    }

    public getTransformMatrixToRef(index: number, result: Matrix): Matrix {
        this._nullCheck();
        if (index < 0 || this._count <= index) {
            throw new RangeError("Index out of range");
        }

        if (this._inner.hasReferences && this.impl.shouldSync) {
            this.runtime.lock.wait();
        }

        const m = this._bufferedMotionStatesPtr.array;
        const offset = index * Constants.MotionStateSizeInFloat32Array;

        return result.set(
            m[offset + 4], m[offset + 8], m[offset + 12], 0,
            m[offset + 5], m[offset + 9], m[offset + 13], 0,
            m[offset + 6], m[offset + 10], m[offset + 14], 0,
            m[offset + 16], m[offset + 17], m[offset + 18], 1
        );
    }

    public getTransformMatrixToArray(index: number, result: Float32Array, offset: number = 0): void {
        this._nullCheck();
        if (index < 0 || this._count <= index) {
            throw new RangeError("Index out of range");
        }

        if (this._inner.hasReferences && this.impl.shouldSync) {
            this.runtime.lock.wait();
        }

        const m = this._bufferedMotionStatesPtr.array;
        const mOffset = index * Constants.MotionStateSizeInFloat32Array;

        result[offset] = m[mOffset + 4];
        result[offset + 1] = m[mOffset + 8];
        result[offset + 2] = m[mOffset + 12];
        result[offset + 3] = 0;

        result[offset + 4] = m[mOffset + 5];
        result[offset + 5] = m[mOffset + 9];
        result[offset + 6] = m[mOffset + 13];
        result[offset + 7] = 0;

        result[offset + 8] = m[mOffset + 6];
        result[offset + 9] = m[mOffset + 10];
        result[offset + 10] = m[mOffset + 14];
        result[offset + 11] = 0;

        result[offset + 12] = m[mOffset + 16];
        result[offset + 13] = m[mOffset + 17];
        result[offset + 14] = m[mOffset + 18];
        result[offset + 15] = 1;
    }

    public getTransformMatricesToArray(result: Float32Array, offset: number = 0): void {
        this._nullCheck();
        if (this._inner.hasReferences && this.impl.shouldSync) {
            this.runtime.lock.wait();
        }

        const m = this._bufferedMotionStatesPtr.array;

        const count = this._count;
        let mOffset = 0;
        let rOffset = offset;
        for (let i = 0; i < count; ++i) {
            result[rOffset] = m[mOffset + 4];
            result[rOffset + 1] = m[mOffset + 8];
            result[rOffset + 2] = m[mOffset + 12];
            result[rOffset + 3] = 0;

            result[rOffset + 4] = m[mOffset + 5];
            result[rOffset + 5] = m[mOffset + 9];
            result[rOffset + 6] = m[mOffset + 13];
            result[rOffset + 7] = 0;

            result[rOffset + 8] = m[mOffset + 6];
            result[rOffset + 9] = m[mOffset + 10];
            result[rOffset + 10] = m[mOffset + 14];
            result[rOffset + 11] = 0;

            result[rOffset + 12] = m[mOffset + 16];
            result[rOffset + 13] = m[mOffset + 17];
            result[rOffset + 14] = m[mOffset + 18];
            result[rOffset + 15] = 1;

            mOffset += Constants.MotionStateSizeInFloat32Array;
            rOffset += 16;
        }
    }

    public setTransformMatrix(index: number, matrix: Matrix): void {
        this.setTransformMatrixFromArray(index, matrix.m, 0);
    }

    public setTransformMatrixFromArray(index: number, array: DeepImmutable<Tuple<number, 16>>, offset: number = 0): void {
        this._nullCheck();
        if (index < 0 || this._count <= index) {
            throw new RangeError("Index out of range");
        }

        if (this._inner.hasReferences && this.impl.shouldSync) {
            this.runtime.lock.wait();
        }
        this.impl.setTransformMatrixFromArray(this._motionStatesPtr, index, array, offset);
    }

    public setTransformMatricesFromArray(array: DeepImmutable<ArrayLike<number>>, offset: number = 0): void {
        this._nullCheck();
        if (array.length < this._count * 16) {
            throw new RangeError("Array is too short");
        }

        if (this._inner.hasReferences && this.impl.shouldSync) {
            this.runtime.lock.wait();
        }
        this.impl.setTransformMatricesFromArray(this._motionStatesPtr, array, offset);
    }
}
