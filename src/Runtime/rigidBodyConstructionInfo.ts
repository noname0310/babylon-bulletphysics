import type { Nullable } from "@babylonjs/core/types";

import type { BulletWasmInstance } from "./bulletWasmInstance";
import type { IWasmTypedArray } from "./Misc/IWasmTypedArray";
import type { PhysicsShape } from "./physicsShape";

/**
 * RigidBodyConstructionInfo representations
 *
 * shape: *uint32 : offset 0
 * motionState: *uint32 : offset 4 -- auto filled on wasm side
 *
 * motionType: uint8 : offset 8
 *
 * padding: uint8[3] : offset 9
 *
 * mass: float32 : offset 12
 * linearDamping: float32 : offset 16
 * angularDamping: float32 : offset 20
 * friction: float32 : offset 24
 * restitution: float32 : offset 28
 * linearSleepingThreshold: float32 : offset 32
 * angularSleepingThreshold: float32 : offset 36
 * collisionGroup: uint16 : offset 40
 * collisionMask: uint16 : offset 42
 * additionalDamping: uint8 : offset 44
 * noContactResponse: uint8 : offset 45
 * disableDeactivation: uint8 : offset 46
 * padding: uint8 : offset 47
 *
 * --size: 48
 */

export class RigidBodyConstructionInfo {
    public readonly ptr: number;
    private readonly _uint32Ptr: IWasmTypedArray<Uint32Array>;
    private readonly _float32Ptr: IWasmTypedArray<Float32Array>;
    private readonly _uint8Ptr: IWasmTypedArray<Uint8Array>;
    private readonly _uint16Ptr: IWasmTypedArray<Uint16Array>;

    private readonly _shapeReference: Nullable<PhysicsShape>;

    public constructor(wasmInstance: BulletWasmInstance) {
        // Allocate buffer
        const ptr = this.ptr = wasmInstance.allocateBuffer(48);
        this._uint32Ptr = wasmInstance.createTypedArray(Uint32Array, ptr, 48 / Uint32Array.BYTES_PER_ELEMENT);
        this._float32Ptr = wasmInstance.createTypedArray(Float32Array, ptr, 48 / Float32Array.BYTES_PER_ELEMENT);
        this._uint8Ptr = wasmInstance.createTypedArray(Uint8Array, ptr, 48 / Uint8Array.BYTES_PER_ELEMENT);
        this._uint16Ptr = wasmInstance.createTypedArray(Uint16Array, ptr, 48 / Uint16Array.BYTES_PER_ELEMENT);

        this._shapeReference = null;

        // Initialize to default values
    }
}
