import type { Matrix } from "@babylonjs/core/Maths/math.vector";
import type { DeepImmutable, Nullable, Tuple } from "@babylonjs/core/types";

import type { BulletWasmInstance } from "./bulletWasmInstance";
import { Constants, MotionStateOffsetsInFloat32Array } from "./constants";
import type { IRigidBodyImpl } from "./Impl/IRigidBodyImpl";
import type { IRuntime } from "./Impl/IRuntime";
import type { IPhysicsWorldInternal } from "./IPhysicsWorldInternal";
import type { IWasmTypedArray } from "./Misc/IWasmTypedArray";
import { MotionType } from "./motionType";
import type { PhysicsShape } from "./physicsShape";
import type { RigidBodyConstructionInfo } from "./rigidBodyConstructionInfo";
import type { RigidBodyConstructionInfoList } from "./rigidBodyConstructionInfoList";

class RigidBodyInner {
    private readonly _wasmInstance: WeakRef<BulletWasmInstance>;
    private _ptr: number;
    private _shapeReference: Nullable<PhysicsShape>;
    private _referenceCount: number;
    private _shadowCount: number;

    public constructor(wasmInstance: WeakRef<BulletWasmInstance>, ptr: number, shapeReference: PhysicsShape) {
        this._wasmInstance = wasmInstance;
        this._ptr = ptr;
        this._shapeReference = shapeReference;
        shapeReference.addReference();
        this._referenceCount = 0;
        this._shadowCount = 0;
    }

    public dispose(): void {
        if (this._referenceCount > 0) {
            throw new Error("Cannot dispose rigid body while it still has references");
        }

        if (this._shadowCount > 0) {
            throw new Error("Cannot dispose rigid body while it still has shadows");
        }

        if (this._ptr === 0) {
            return;
        }

        // this operation is thread-safe because the rigid body is not belong to any physics world
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

    public get hasReferences(): boolean {
        return 0 < this._referenceCount;
    }

    public addShadow(): void {
        this._shadowCount += 1;
    }

    public removeShadow(): void {
        this._shadowCount -= 1;
    }

    public get hasShadows(): boolean {
        return 0 < this._shadowCount;
    }
}

function rigidBodyFinalizer(inner: RigidBodyInner): void {
    inner.dispose();
}

const physicsRigidBodyRegistryMap = new WeakMap<BulletWasmInstance, FinalizationRegistry<RigidBodyInner>>();

export class RigidBody {
    public readonly runtime: IRuntime;

    private readonly _motionStatePtr: IWasmTypedArray<Float32Array>;
    private _bufferedMotionStatePtr: IWasmTypedArray<Float32Array>;

    private readonly _inner: RigidBodyInner;

    private _worldReference: Nullable<IPhysicsWorldInternal>;

    public impl: IRigidBodyImpl;
    public readonly isDynamic: boolean;

    public constructor(runtime: IRuntime, info: RigidBodyConstructionInfo);

    public constructor(runtime: IRuntime, info: RigidBodyConstructionInfoList, n: number);

    public constructor(runtime: IRuntime, info: RigidBodyConstructionInfo | RigidBodyConstructionInfoList, n?: number) {
        const infoPtr = n !== undefined ? (info as RigidBodyConstructionInfoList).getPtr(n) : (info as RigidBodyConstructionInfo).ptr;

        if (infoPtr === 0) {
            throw new Error("Cannot create rigid body with null pointer");
        }

        let shape: Nullable<PhysicsShape>;
        if (n !== undefined) {
            shape = (info as RigidBodyConstructionInfoList).getShape(n);
        } else {
            shape = (info as RigidBodyConstructionInfo).shape;
        }
        if (shape === null) {
            throw new Error("Cannot create rigid body with null shape");
        }
        if (shape.runtime !== runtime) {
            throw new Error("Cannot create rigid body with shapes from different runtimes");
        }

        this.runtime = runtime;
        const wasmInstance = runtime.wasmInstance;
        const ptr = wasmInstance.createRigidBody(infoPtr);
        const motionStatePtr = wasmInstance.rigidBodyGetMotionStatePtr(ptr);
        this._motionStatePtr = wasmInstance.createTypedArray(Float32Array, motionStatePtr, Constants.MotionStateSizeInFloat32Array);
        const bufferedMotionStatePtr = wasmInstance.rigidBodyGetBufferedMotionStatePtr(ptr);
        this._bufferedMotionStatePtr = wasmInstance.createTypedArray(Float32Array, bufferedMotionStatePtr, Constants.MotionStateSizeInFloat32Array);
        this._inner = new RigidBodyInner(new WeakRef(runtime.wasmInstance), ptr, shape);
        this._worldReference = null;

        let registry = physicsRigidBodyRegistryMap.get(wasmInstance);
        if (registry === undefined) {
            registry = new FinalizationRegistry(rigidBodyFinalizer);
            physicsRigidBodyRegistryMap.set(wasmInstance, registry);
        }

        registry.register(this, this._inner, this);

        this.impl = runtime.createRigidBodyImpl();
        this.isDynamic = n !== undefined
            ? (info as RigidBodyConstructionInfoList).getMotionType(n) === MotionType.Dynamic
            : (info as RigidBodyConstructionInfo).motionType === MotionType.Dynamic;
    }

    public dispose(): void {
        if (this._inner.ptr === 0) {
            return;
        }

        this._inner.dispose();

        const registry = physicsRigidBodyRegistryMap.get(this.runtime.wasmInstance);
        registry?.unregister(this);
    }

    /**
     * @internal
     */
    public get ptr(): number {
        return this._inner.ptr;
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
    public addShadowReference(): void {
        this._inner.addShadow();
    }

    /**
     * @internal
     */
    public removeShadowReference(): void {
        this._inner.removeShadow();
    }

    /**
     * @internal
     */
    public get hasShadows(): boolean {
        return this._inner.hasShadows;
    }

    /**
     * @internal
     */
    public setWorldReference(worldReference: Nullable<IPhysicsWorldInternal>): void {
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

    /**
     * @internal
     */
    public getWorldReference(): Nullable<IPhysicsWorldInternal> {
        return this._worldReference;
    }

    /**
     * @internal
     */
    public updateBufferedMotionState(forceUseFrontBuffer: boolean): void {
        this._nullCheck();
        if (forceUseFrontBuffer) {
            const motionStatePtr = this.runtime.wasmInstance.rigidBodyGetMotionStatePtr(this._inner.ptr);
            this._bufferedMotionStatePtr = this.runtime.wasmInstance.createTypedArray(Float32Array, motionStatePtr, Constants.MotionStateSizeInFloat32Array);
        } else {
            const bufferedMotionStatePtr = this.runtime.wasmInstance.rigidBodyGetBufferedMotionStatePtr(this._inner.ptr);
            this._bufferedMotionStatePtr = this.runtime.wasmInstance.createTypedArray(Float32Array, bufferedMotionStatePtr, Constants.MotionStateSizeInFloat32Array);
        }
    }

    private _nullCheck(): void {
        if (this._inner.ptr === 0) {
            throw new Error("Cannot access disposed rigid body");
        }
    }

    public getTransformMatrixToRef(result: Matrix): Matrix {
        this._nullCheck();
        if (this._inner.hasReferences && this.impl.shouldSync) {
            this.runtime.lock.wait();
        }

        const m = this._bufferedMotionStatePtr.array;
        return result.set(
            m[MotionStateOffsetsInFloat32Array.MatrixRowX + 0],
            m[MotionStateOffsetsInFloat32Array.MatrixRowY + 0],
            m[MotionStateOffsetsInFloat32Array.MatrixRowZ + 0],
            0,
            m[MotionStateOffsetsInFloat32Array.MatrixRowX + 1],
            m[MotionStateOffsetsInFloat32Array.MatrixRowY + 1],
            m[MotionStateOffsetsInFloat32Array.MatrixRowZ + 1],
            0,
            m[MotionStateOffsetsInFloat32Array.MatrixRowX + 2],
            m[MotionStateOffsetsInFloat32Array.MatrixRowY + 2],
            m[MotionStateOffsetsInFloat32Array.MatrixRowZ + 2],
            0,
            m[MotionStateOffsetsInFloat32Array.Translation + 0],
            m[MotionStateOffsetsInFloat32Array.Translation + 1],
            m[MotionStateOffsetsInFloat32Array.Translation + 2],
            1
        );
    }

    public getTransformMatrixToArray(result: Float32Array, offset: number = 0): void {
        this._nullCheck();
        if (this._inner.hasReferences && this.impl.shouldSync) {
            this.runtime.lock.wait();
        }

        const m = this._bufferedMotionStatePtr.array;

        result[offset + 0] = m[MotionStateOffsetsInFloat32Array.MatrixRowX + 0];
        result[offset + 1] = m[MotionStateOffsetsInFloat32Array.MatrixRowY + 0];
        result[offset + 2] = m[MotionStateOffsetsInFloat32Array.MatrixRowZ + 0];
        result[offset + 3] = 0;

        result[offset + 4] = m[MotionStateOffsetsInFloat32Array.MatrixRowX + 1];
        result[offset + 5] = m[MotionStateOffsetsInFloat32Array.MatrixRowY + 1];
        result[offset + 6] = m[MotionStateOffsetsInFloat32Array.MatrixRowZ + 1];
        result[offset + 7] = 0;

        result[offset + 8] = m[MotionStateOffsetsInFloat32Array.MatrixRowX + 2];
        result[offset + 9] = m[MotionStateOffsetsInFloat32Array.MatrixRowY + 2];
        result[offset + 10] = m[MotionStateOffsetsInFloat32Array.MatrixRowZ + 2];
        result[offset + 11] = 0;

        result[offset + 12] = m[MotionStateOffsetsInFloat32Array.Translation + 0];
        result[offset + 13] = m[MotionStateOffsetsInFloat32Array.Translation + 1];
        result[offset + 14] = m[MotionStateOffsetsInFloat32Array.Translation + 2];
        result[offset + 15] = 1;
    }

    public setTransformMatrix(matrix: Matrix): void {
        this.setTransformMatrixFromArray(matrix.m, 0);
    }

    public setTransformMatrixFromArray(array: DeepImmutable<Tuple<number, 16>>, offset: number = 0): void {
        this._nullCheck();
        if (this._inner.hasReferences && this.impl.shouldSync) {
            this.runtime.lock.wait();
        }
        this.impl.setTransformMatrixFromArray(this._motionStatePtr, array, offset);
    }
}
