import type { Matrix } from "@babylonjs/core/Maths/math.vector";
import type { DeepImmutable, Nullable, Tuple } from "@babylonjs/core/types";

import type { BulletWasmInstance } from "./bulletWasmInstance";
import type { IRuntime } from "./Impl/IRuntime";
import type { IWasmTypedArray } from "./Misc/IWasmTypedArray";
import type { PhysicsShape } from "./physicsShape";
import type { RigidBodyConstructionInfoList } from "./rigidBodyConstructionInfoList";

const motionStateSize = 80;

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

    private readonly _inner: RigidBodyBundleInner;
    private readonly _count: number;

    private _worldReference: Nullable<object>;

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
        this._motionStatesPtr = wasmInstance.createTypedArray(Float32Array, motionStatesPtr, count * motionStateSize / Float32Array.BYTES_PER_ELEMENT);
        this._inner = new RigidBodyBundleInner(new WeakRef(runtime.wasmInstance), ptr, shapeReferences);
        this._count = count;
        this._worldReference = null;

        let registry = physicsRigidBodyBundleRegistryMap.get(wasmInstance);
        if (registry === undefined) {
            registry = new FinalizationRegistry(rigidBodyBundleFinalizer);
            physicsRigidBodyBundleRegistryMap.set(wasmInstance, registry);
        }

        registry.register(this, this._inner, this);
    }

    public dispose(): void {
        if (this._inner.ptr === 0) {
            return;
        }

        this._inner.dispose();

        const registry = physicsRigidBodyBundleRegistryMap.get(this.runtime.wasmInstance);
        registry?.unregister(this);
    }

    public get ptr(): number {
        return this._inner.ptr;
    }

    public get count(): number {
        return this._count;
    }

    public addReference(): void {
        this._inner.addReference();
    }

    public removeReference(): void {
        this._inner.removeReference();
    }

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

    public getWorldReference(): Nullable<object> {
        return this._worldReference;
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

        if (this._inner.hasReferences) {
            this.runtime.lock.wait();
        }
        const motionStatesPtr = this._motionStatesPtr.array;
        const offset = index * motionStateSize / Float32Array.BYTES_PER_ELEMENT;
        result.setRowFromFloats(0, motionStatesPtr[offset + 4], motionStatesPtr[offset + 8], motionStatesPtr[offset + 12], 0);
        result.setRowFromFloats(1, motionStatesPtr[offset + 5], motionStatesPtr[offset + 9], motionStatesPtr[offset + 13], 0);
        result.setRowFromFloats(2, motionStatesPtr[offset + 6], motionStatesPtr[offset + 10], motionStatesPtr[offset + 14], 0);
        result.setRowFromFloats(3, motionStatesPtr[offset + 16], motionStatesPtr[offset + 17], motionStatesPtr[offset + 18], 1);
        return result;
    }

    public getTransformMatrixToArray(index: number, result: Float32Array, offset: number = 0): void {
        this._nullCheck();
        if (index < 0 || this._count <= index) {
            throw new RangeError("Index out of range");
        }

        if (this._inner.hasReferences) {
            this.runtime.lock.wait();
        }
        const motionStatesPtr = this._motionStatesPtr.array;
        const motionStateOffset = index * motionStateSize / Float32Array.BYTES_PER_ELEMENT;

        result[offset] = motionStatesPtr[motionStateOffset + 4];
        result[offset + 1] = motionStatesPtr[motionStateOffset + 8];
        result[offset + 2] = motionStatesPtr[motionStateOffset + 12];
        result[offset + 3] = 0;

        result[offset + 4] = motionStatesPtr[motionStateOffset + 5];
        result[offset + 5] = motionStatesPtr[motionStateOffset + 9];
        result[offset + 6] = motionStatesPtr[motionStateOffset + 13];
        result[offset + 7] = 0;

        result[offset + 8] = motionStatesPtr[motionStateOffset + 6];
        result[offset + 9] = motionStatesPtr[motionStateOffset + 10];
        result[offset + 10] = motionStatesPtr[motionStateOffset + 14];
        result[offset + 11] = 0;

        result[offset + 12] = motionStatesPtr[motionStateOffset + 16];
        result[offset + 13] = motionStatesPtr[motionStateOffset + 17];
        result[offset + 14] = motionStatesPtr[motionStateOffset + 18];
        result[offset + 15] = 1;
    }

    public getTransformMatricesToArray(result: Float32Array, offset: number = 0): void {
        this._nullCheck();
        if (this._inner.hasReferences) {
            this.runtime.lock.wait();
        }
        const motionStatesPtr = this._motionStatesPtr.array;
        for (let i = 0; i < this._count; ++i) {
            const motionStateOffset = i * motionStateSize / Float32Array.BYTES_PER_ELEMENT;

            result[offset] = motionStatesPtr[motionStateOffset + 4];
            result[offset + 1] = motionStatesPtr[motionStateOffset + 8];
            result[offset + 2] = motionStatesPtr[motionStateOffset + 12];
            result[offset + 3] = 0;

            result[offset + 4] = motionStatesPtr[motionStateOffset + 5];
            result[offset + 5] = motionStatesPtr[motionStateOffset + 9];
            result[offset + 6] = motionStatesPtr[motionStateOffset + 13];
            result[offset + 7] = 0;

            result[offset + 8] = motionStatesPtr[motionStateOffset + 6];
            result[offset + 9] = motionStatesPtr[motionStateOffset + 10];
            result[offset + 10] = motionStatesPtr[motionStateOffset + 14];
            result[offset + 11] = 0;

            result[offset + 12] = motionStatesPtr[motionStateOffset + 16];
            result[offset + 13] = motionStatesPtr[motionStateOffset + 17];
            result[offset + 14] = motionStatesPtr[motionStateOffset + 18];
            result[offset + 15] = 1;

            offset += 16;
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

        if (this._inner.hasReferences) {
            this.runtime.lock.wait();
        }
        const motionStatesPtr = this._motionStatesPtr.array;
        const motionStateOffset = index * motionStateSize / Float32Array.BYTES_PER_ELEMENT;

        motionStatesPtr[motionStateOffset + 4] = array[offset];
        motionStatesPtr[motionStateOffset + 8] = array[offset + 1];
        motionStatesPtr[motionStateOffset + 12] = array[offset + 2];

        motionStatesPtr[motionStateOffset + 5] = array[offset + 4];
        motionStatesPtr[motionStateOffset + 9] = array[offset + 5];
        motionStatesPtr[motionStateOffset + 13] = array[offset + 6];

        motionStatesPtr[motionStateOffset + 6] = array[offset + 8];
        motionStatesPtr[motionStateOffset + 10] = array[offset + 9];
        motionStatesPtr[motionStateOffset + 14] = array[offset + 10];

        motionStatesPtr[motionStateOffset + 16] = array[offset + 12];
        motionStatesPtr[motionStateOffset + 17] = array[offset + 13];
        motionStatesPtr[motionStateOffset + 18] = array[offset + 14];
    }

    public setTransformMatricesFromArray(array: DeepImmutable<number[]>, offset: number = 0): void {
        this._nullCheck();
        if (array.length < this._count * 16) {
            throw new RangeError("Array is too short");
        }

        if (this._inner.hasReferences) {
            this.runtime.lock.wait();
        }
        const motionStatesPtr = this._motionStatesPtr.array;
        for (let i = 0; i < this._count; ++i) {
            const motionStateOffset = i * motionStateSize / Float32Array.BYTES_PER_ELEMENT;

            motionStatesPtr[motionStateOffset + 4] = array[offset];
            motionStatesPtr[motionStateOffset + 8] = array[offset + 1];
            motionStatesPtr[motionStateOffset + 12] = array[offset + 2];

            motionStatesPtr[motionStateOffset + 5] = array[offset + 4];
            motionStatesPtr[motionStateOffset + 9] = array[offset + 5];
            motionStatesPtr[motionStateOffset + 13] = array[offset + 6];

            motionStatesPtr[motionStateOffset + 6] = array[offset + 8];
            motionStatesPtr[motionStateOffset + 10] = array[offset + 9];
            motionStatesPtr[motionStateOffset + 14] = array[offset + 10];

            motionStatesPtr[motionStateOffset + 16] = array[offset + 12];
            motionStatesPtr[motionStateOffset + 17] = array[offset + 13];
            motionStatesPtr[motionStateOffset + 18] = array[offset + 14];

            offset += 16;
        }
    }
}
