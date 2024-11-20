import type { Matrix } from "@babylonjs/core/Maths/math.vector";
import type { Nullable } from "@babylonjs/core/types";

import type { BulletWasmInstance } from "./bulletWasmInstance";
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
}

function rigidBodyBundleFinalizer(inner: RigidBodyBundleInner): void {
    inner.dispose();
}

const physicsRigidBodyBundleRegistryMap = new WeakMap<BulletWasmInstance, FinalizationRegistry<RigidBodyBundleInner>>();

export class RigidBodyBundle {
    private readonly _wasmInstance: BulletWasmInstance;

    private readonly _motionStatesPtr: IWasmTypedArray<Float32Array>;

    private readonly _inner: RigidBodyBundleInner;
    private readonly _count: number;

    private _worldReference: Nullable<object>;

    public constructor(wasmInstance: BulletWasmInstance, info: RigidBodyConstructionInfoList) {
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
            shapeReferences.add(shape);
        }

        this._wasmInstance = wasmInstance;
        const ptr = wasmInstance.createRigidBodyBundle(info.ptr, count);
        const motionStatesPtr = wasmInstance.rigidBodyBundleGetMotionStatesPtr(ptr);
        this._motionStatesPtr = wasmInstance.createTypedArray(Float32Array, motionStatesPtr, count * motionStateSize / Float32Array.BYTES_PER_ELEMENT);
        this._inner = new RigidBodyBundleInner(new WeakRef(wasmInstance), ptr, shapeReferences);
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

        const registry = physicsRigidBodyBundleRegistryMap.get(this._wasmInstance);
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

        this._wasmInstance.rigidBodyBundleMakeKinematic(this._inner.ptr, index);
    }

    public restoreDynamic(index: number): void {
        this._nullCheck();
        if (index < 0 || this._count <= index) {
            throw new RangeError("Index out of range");
        }

        this._wasmInstance.rigidBodyBundleRestoreDynamic(this._inner.ptr, index);
    }

    public getTransformMatrixToRef(index: number, result: Matrix): Matrix {
        this._nullCheck();
        if (index < 0 || this._count <= index) {
            throw new RangeError("Index out of range");
        }

        const motionStatesPtr = this._motionStatesPtr.array;
        const offset = index * motionStateSize / Float32Array.BYTES_PER_ELEMENT;
        result.setRowFromFloats(0, motionStatesPtr[offset + 4], motionStatesPtr[offset + 8], motionStatesPtr[offset + 12], 0);
        result.setRowFromFloats(1, motionStatesPtr[offset + 5], motionStatesPtr[offset + 9], motionStatesPtr[offset + 13], 0);
        result.setRowFromFloats(2, motionStatesPtr[offset + 6], motionStatesPtr[offset + 10], motionStatesPtr[offset + 14], 0);
        result.setRowFromFloats(3, motionStatesPtr[offset + 16], motionStatesPtr[offset + 17], motionStatesPtr[offset + 18], 1);
        return result;
    }

    public setTransformMatrix(index: number, matrix: Matrix): void {
        this._nullCheck();
        if (index < 0 || this._count <= index) {
            throw new RangeError("Index out of range");
        }

        const motionStatesPtr = this._motionStatesPtr.array;
        const offset = index * motionStateSize / Float32Array.BYTES_PER_ELEMENT;
        motionStatesPtr[offset + 4] = matrix.m[0];
        motionStatesPtr[offset + 8] = matrix.m[1];
        motionStatesPtr[offset + 12] = matrix.m[2];
        motionStatesPtr[offset + 5] = matrix.m[4];
        motionStatesPtr[offset + 9] = matrix.m[5];
        motionStatesPtr[offset + 13] = matrix.m[6];
        motionStatesPtr[offset + 6] = matrix.m[8];
        motionStatesPtr[offset + 10] = matrix.m[9];
        motionStatesPtr[offset + 14] = matrix.m[10];

        motionStatesPtr[offset + 16] = matrix.m[12];
        motionStatesPtr[offset + 17] = matrix.m[13];
        motionStatesPtr[offset + 18] = matrix.m[14];
    }
}
