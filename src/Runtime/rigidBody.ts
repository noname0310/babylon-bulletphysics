import type { Matrix } from "@babylonjs/core/Maths/math.vector";
import type { Nullable } from "@babylonjs/core/types";

import type { BulletWasmInstance } from "./bulletWasmInstance";
import type { IWasmTypedArray } from "./Misc/IWasmTypedArray";
import type { PhysicsShape } from "./physicsShape";
import type { RigidBodyConstructionInfo } from "./rigidBodyConstructionInfo";
import type { RigidBodyConstructionInfoList } from "./rigidBodyConstructionInfoList";

/**
 * MotionState representations
 *
 * vtable: u32 : offset 0
 * padding: u32[3] : offset 4
 * matrix_rowx: f32[3] : offset 16
 * padding: u32 : offset 28
 * matrix_rowy: f32[3] : offset 32
 * padding: u32 : offset 44
 * matrix_rowz: f32[3] : offset 48
 * padding: u32 : offset 60
 * translation: f32[3] : offset 64
 * padding: u32 : offset 76
 *
 * --size: 80
 */

class RigidBodyInner {
    private readonly _wasmInstance: WeakRef<BulletWasmInstance>;
    private _ptr: number;
    private _shapeReference: Nullable<PhysicsShape>;
    private _referenceCount: number;

    public constructor(wasmInstance: WeakRef<BulletWasmInstance>, ptr: number, shapeReference: PhysicsShape) {
        this._wasmInstance = wasmInstance;
        this._ptr = ptr;
        this._shapeReference = shapeReference;
        shapeReference.addReference();
        this._referenceCount = 0;
    }

    public dispose(): void {
        if (this._referenceCount > 0) {
            throw new Error("Cannot dispose rigid body while it still has references");
        }

        if (this._ptr === 0) {
            return;
        }

        this._wasmInstance.deref()?.destroyRigidBody(this._ptr);
        this._ptr = 0;
        this._shapeReference!.removeReference();
        this._shapeReference = null;
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

function rigidBodyFinalizer(inner: RigidBodyInner): void {
    inner.dispose();
}

const physicsRigidBodyRegistryMap = new WeakMap<BulletWasmInstance, FinalizationRegistry<RigidBodyInner>>();

export class RigidBody {
    private readonly _wasmInstance: BulletWasmInstance;

    private readonly _motionStatePtr: IWasmTypedArray<Float32Array>;

    private readonly _inner: RigidBodyInner;

    private _worldReference: Nullable<object>;

    public constructor(wasmInstance: BulletWasmInstance, info: RigidBodyConstructionInfo);

    public constructor(wasmInstance: BulletWasmInstance, info: RigidBodyConstructionInfoList, n: number);

    public constructor(wasmInstance: BulletWasmInstance, info: RigidBodyConstructionInfo | RigidBodyConstructionInfoList, n?: number) {
        const infoPtr = n !== undefined ? (info as RigidBodyConstructionInfoList).getPtr(n) : (info as RigidBodyConstructionInfo).ptr;

        if (infoPtr === 0) {
            throw new Error("Cannot create rigid body with null pointer");
        }

        let shape: Nullable<PhysicsShape>;
        if (n !== undefined) {
            shape = (info as RigidBodyConstructionInfoList).getShape(n);
            if (shape === null) {
                throw new Error("Cannot create rigid body with null shape");
            }
        } else {
            shape = (info as RigidBodyConstructionInfo).shape;
            if (shape === null) {
                throw new Error("Cannot create rigid body with null shape");
            }
        }

        this._wasmInstance = wasmInstance;
        const ptr = wasmInstance.createRigidBody(infoPtr);
        const motionStatePtr = wasmInstance.rigidBodyGetMotionStatePtr(ptr);
        this._motionStatePtr = wasmInstance.createTypedArray(Float32Array, motionStatePtr, 80 / Float32Array.BYTES_PER_ELEMENT);
        this._inner = new RigidBodyInner(new WeakRef(wasmInstance), ptr, shape);
        this._worldReference = null;

        let registry = physicsRigidBodyRegistryMap.get(wasmInstance);
        if (registry === undefined) {
            registry = new FinalizationRegistry(rigidBodyFinalizer);
            physicsRigidBodyRegistryMap.set(wasmInstance, registry);
        }

        registry.register(this, this._inner, this);
    }

    public dispose(): void {
        if (this._inner.ptr === 0) {
            return;
        }

        this._inner.dispose();

        const registry = physicsRigidBodyRegistryMap.get(this._wasmInstance);
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

    public setWorldReference(worldReference: Nullable<object>): void {
        if (this._worldReference !== null && worldReference !== null) {
            throw new Error("Cannot add rigid body to multiple worlds");
        }
        if (this._worldReference === worldReference) {
            return;
        }
        this._worldReference = worldReference;
        if (this._worldReference !== null) {
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
            throw new Error("Cannot access disposed rigid body");
        }
    }

    public makeKinematic(): void {
        this._nullCheck();
        this._wasmInstance.rigidBodyMakeKinematic(this._inner.ptr);
    }

    public restoreDynamic(): void {
        this._nullCheck();
        this._wasmInstance.rigidBodyRestoreDynamic(this._inner.ptr);
    }

    public getTransformMatrixToRef(result: Matrix): Matrix {
        this._nullCheck();
        const motionStatePtr = this._motionStatePtr.array;
        result.setRowFromFloats(0, motionStatePtr[4], motionStatePtr[8], motionStatePtr[12], 0);
        result.setRowFromFloats(1, motionStatePtr[5], motionStatePtr[9], motionStatePtr[13], 0);
        result.setRowFromFloats(2, motionStatePtr[6], motionStatePtr[10], motionStatePtr[14], 0);
        result.setRowFromFloats(3, motionStatePtr[16], motionStatePtr[17], motionStatePtr[18], 1);
        return result;
    }

    public setTransformMatrix(matrix: Matrix): void {
        this._nullCheck();
        const motionStatePtr = this._motionStatePtr.array;
        motionStatePtr[4] = matrix.m[0];
        motionStatePtr[8] = matrix.m[1];
        motionStatePtr[12] = matrix.m[2];
        motionStatePtr[5] = matrix.m[4];
        motionStatePtr[9] = matrix.m[5];
        motionStatePtr[13] = matrix.m[6];
        motionStatePtr[6] = matrix.m[8];
        motionStatePtr[10] = matrix.m[9];
        motionStatePtr[14] = matrix.m[10];

        motionStatePtr[16] = matrix.m[12];
        motionStatePtr[17] = matrix.m[13];
        motionStatePtr[18] = matrix.m[14];
    }
}
