import type { Matrix } from "@babylonjs/core/Maths/math.vector";
import type { DeepImmutable, Nullable, Tuple } from "@babylonjs/core/types";

import type { BulletWasmInstance } from "./bulletWasmInstance";
import type { IRigidBodyImpl } from "./Impl/IRigidBodyImpl";
import type { IRuntime } from "./Impl/IRuntime";
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
}

function rigidBodyFinalizer(inner: RigidBodyInner): void {
    inner.dispose();
}

const physicsRigidBodyRegistryMap = new WeakMap<BulletWasmInstance, FinalizationRegistry<RigidBodyInner>>();

export class RigidBody {
    public readonly runtime: IRuntime;

    private readonly _motionStatePtr: IWasmTypedArray<Float32Array>;

    private readonly _inner: RigidBodyInner;

    private _worldReference: Nullable<object>;

    public impl: IRigidBodyImpl;

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
        this._motionStatePtr = wasmInstance.createTypedArray(Float32Array, motionStatePtr, 80 / Float32Array.BYTES_PER_ELEMENT);
        this._inner = new RigidBodyInner(new WeakRef(runtime.wasmInstance), ptr, shape);
        this._worldReference = null;

        let registry = physicsRigidBodyRegistryMap.get(wasmInstance);
        if (registry === undefined) {
            registry = new FinalizationRegistry(rigidBodyFinalizer);
            physicsRigidBodyRegistryMap.set(wasmInstance, registry);
        }

        registry.register(this, this._inner, this);

        this.impl = runtime.createRigidBodyImpl();
    }

    public dispose(): void {
        if (this._inner.ptr === 0) {
            return;
        }

        this._inner.dispose();

        const registry = physicsRigidBodyRegistryMap.get(this.runtime.wasmInstance);
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
        if (this._inner.hasReferences) {
            this.runtime.lock.wait();
        }
        this.runtime.wasmInstance.rigidBodyMakeKinematic(this._inner.ptr);
    }

    public restoreDynamic(): void {
        this._nullCheck();
        if (this._inner.hasReferences) {
            this.runtime.lock.wait();
        }
        this.runtime.wasmInstance.rigidBodyRestoreDynamic(this._inner.ptr);
    }

    public getTransformMatrixToRef(result: Matrix): Matrix {
        this._nullCheck();
        if (this._inner.hasReferences && this.impl.shouldSync) {
            this.runtime.lock.wait();
        }
        this.impl.getTransformMatrixToRef(this._motionStatePtr, result);
        return result;
    }

    public getTransformMatrixToArray(result: Float32Array, offset: number = 0): void {
        this._nullCheck();
        if (this._inner.hasReferences && this.impl.shouldSync) {
            this.runtime.lock.wait();
        }
        this.impl.getTransformMatrixToArray(this._motionStatePtr, result, offset);
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
