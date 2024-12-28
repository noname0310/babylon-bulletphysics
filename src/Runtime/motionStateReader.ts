import type { Quaternion, Vector3 } from "@babylonjs/core/Maths/math.vector";

import type { BulletWasmInstance } from "./bulletWasmInstance";
import type { IWasmTypedArray } from "./Misc/IWasmTypedArray";
import type { RigidBody } from "./rigidBody";
import type { RigidBodyBundle } from "./rigidBodyBundle";

const motionStateSize = 80;

class MotionStateReaderInner {
    private readonly _wasmInstance: WeakRef<BulletWasmInstance>;
    private _ptr: number;

    public constructor(wasmInstance: WeakRef<BulletWasmInstance>, ptr: number) {
        this._wasmInstance = wasmInstance;
        this._ptr = ptr;
    }

    public dispose(): void {
        if (this._ptr === 0) {
            return;
        }

        this._wasmInstance.deref()?.destroyMotionStateReader(this._ptr);
        this._ptr = 0;
    }

    public get ptr(): number {
        return this._ptr;
    }
}

function motionStateReaderFinalizer(inner: MotionStateReaderInner): void {
    inner.dispose();
}

const physicsMotionStateReaderRegistryMap = new WeakMap<BulletWasmInstance, FinalizationRegistry<MotionStateReaderInner>>();

export class MotionStateReader {
    private readonly _wasmInstance: BulletWasmInstance;

    private readonly _inner: MotionStateReaderInner;

    public constructor(wasmInstance: BulletWasmInstance) {
        this._wasmInstance = wasmInstance;
        const ptr = wasmInstance.createMotionStateReader();
        this._inner = new MotionStateReaderInner(new WeakRef(wasmInstance), ptr);

        let registry = physicsMotionStateReaderRegistryMap.get(wasmInstance);
        if (registry === undefined) {
            registry = new FinalizationRegistry(motionStateReaderFinalizer);
            physicsMotionStateReaderRegistryMap.set(wasmInstance, registry);
        }

        registry.register(this, this._inner, this);
    }

    public dispose(): void {
        if (this._inner.ptr === 0) {
            return;
        }

        this._inner.dispose();

        const registry = physicsMotionStateReaderRegistryMap.get(this._wasmInstance);
        registry?.unregister(this);
    }

    public get ptr(): number {
        return this._inner.ptr;
    }

    private _nullCheck(): void {
        if (this._inner.ptr === 0) {
            throw new Error("Cannot access disposed motion state reader");
        }
    }

    public setDataFromRigidBody(rigidBody: RigidBody): void {
        this._nullCheck();
        const motionStatePtr = (rigidBody as unknown as { _motionStatePtr: IWasmTypedArray<Float32Array> })._motionStatePtr.array;
        this._wasmInstance.motionStateReaderSet(this._inner.ptr, motionStatePtr.byteOffset);
    }

    public setDataFromRigidBodyBundle(rigidBodyBundle: RigidBodyBundle, n: number): void {
        this._nullCheck();
        const motionStatesPtr = (rigidBodyBundle as unknown as { _motionStatesPtr: IWasmTypedArray<Float32Array> })._motionStatesPtr.array;
        this._wasmInstance.motionStateReaderSet(this._inner.ptr, motionStatesPtr.byteOffset + n * motionStateSize);
    }

    public readDataToRef(position: Vector3, rotation: Quaternion): void {
        this._nullCheck();
        const wasmInstance = this._wasmInstance;
        const ptr = this._inner.ptr;

        const positionX = wasmInstance.motionStateReaderGetOriginX(ptr);
        const positionY = wasmInstance.motionStateReaderGetOriginY(ptr);
        const positionZ = wasmInstance.motionStateReaderGetOriginZ(ptr);
        position.set(positionX, positionY, positionZ);

        const rotationX = wasmInstance.motionStateReaderGetRotationX(ptr);
        const rotationY = wasmInstance.motionStateReaderGetRotationY(ptr);
        const rotationZ = wasmInstance.motionStateReaderGetRotationZ(ptr);
        const rotationW = wasmInstance.motionStateReaderGetRotationW(ptr);
        rotation.set(rotationX, rotationY, rotationZ, rotationW);
    }
}
