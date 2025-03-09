import { Vector3 } from "@babylonjs/core/Maths/math.vector";
import type { DeepImmutable, Tuple } from "@babylonjs/core/types";

import type { BulletWasmInstance } from "@/Runtime/bulletWasmInstance";
import { BtTransformOffsets, Constants, MotionStateOffsetsInFloat32Array, TemporalKinematicState } from "@/Runtime/constants";
import type { IWasmTypedArray } from "@/Runtime/Misc/IWasmTypedArray";

import type { IRigidBodyImpl } from "../IRigidBodyImpl";

export class ImmediateRigidBodyImpl implements IRigidBodyImpl {
    public readonly shouldSync: boolean;

    public constructor() {
        this.shouldSync = true;
    }

    public setTransformMatrixFromArray(
        motionStatePtr: IWasmTypedArray<Float32Array>,
        temporalKinematicStatePtr: IWasmTypedArray<Uint8Array>,
        array: DeepImmutable<Tuple<number, 16>>,
        offset: number
    ): void {
        const m = motionStatePtr.array;

        m[MotionStateOffsetsInFloat32Array.MatrixRowX + 0] = array[offset];
        m[MotionStateOffsetsInFloat32Array.MatrixRowY + 0] = array[offset + 1];
        m[MotionStateOffsetsInFloat32Array.MatrixRowZ + 0] = array[offset + 2];

        m[MotionStateOffsetsInFloat32Array.MatrixRowX + 1] = array[offset + 4];
        m[MotionStateOffsetsInFloat32Array.MatrixRowY + 1] = array[offset + 5];
        m[MotionStateOffsetsInFloat32Array.MatrixRowZ + 1] = array[offset + 6];

        m[MotionStateOffsetsInFloat32Array.MatrixRowX + 2] = array[offset + 8];
        m[MotionStateOffsetsInFloat32Array.MatrixRowY + 2] = array[offset + 9];
        m[MotionStateOffsetsInFloat32Array.MatrixRowZ + 2] = array[offset + 10];

        m[MotionStateOffsetsInFloat32Array.Translation + 0] = array[offset + 12];
        m[MotionStateOffsetsInFloat32Array.Translation + 1] = array[offset + 13];
        m[MotionStateOffsetsInFloat32Array.Translation + 2] = array[offset + 14];

        const temporalKinematicState = temporalKinematicStatePtr.array;
        if (temporalKinematicState[0] !== TemporalKinematicState.Disabled) {
            temporalKinematicState[0] = TemporalKinematicState.WaitForRestore;
        }
    }

    public setDynamicTransformMatrixFromArray(
        worldTransformPtr: IWasmTypedArray<Float32Array>,
        array: DeepImmutable<Tuple<number, 16>>,
        offset: number
    ): void {
        const m = worldTransformPtr.array;

        m[BtTransformOffsets.MatrixRowX + 0] = array[offset];
        m[BtTransformOffsets.MatrixRowY + 0] = array[offset + 1];
        m[BtTransformOffsets.MatrixRowZ + 0] = array[offset + 2];

        m[BtTransformOffsets.MatrixRowX + 1] = array[offset + 4];
        m[BtTransformOffsets.MatrixRowY + 1] = array[offset + 5];
        m[BtTransformOffsets.MatrixRowZ + 1] = array[offset + 6];

        m[BtTransformOffsets.MatrixRowX + 2] = array[offset + 8];
        m[BtTransformOffsets.MatrixRowY + 2] = array[offset + 9];
        m[BtTransformOffsets.MatrixRowZ + 2] = array[offset + 10];

        m[BtTransformOffsets.Translation + 0] = array[offset + 12];
        m[BtTransformOffsets.Translation + 1] = array[offset + 13];
        m[BtTransformOffsets.Translation + 2] = array[offset + 14];
    }

    public setDamping(
        wasmInstance: BulletWasmInstance,
        bodyPtr: number,
        linearDamping: number,
        angularDamping: number
    ): void {
        wasmInstance.rigidBodySetDamping(bodyPtr, linearDamping, angularDamping);
    }

    public getLinearDamping(wasmInstance: BulletWasmInstance, bodyPtr: number): number {
        return wasmInstance.rigidBodyGetLinearDamping(bodyPtr);
    }

    public getAngularDamping(wasmInstance: BulletWasmInstance, bodyPtr: number): number {
        return wasmInstance.rigidBodyGetAngularDamping(bodyPtr);
    }

    public setMassProps(
        wasmInstance: BulletWasmInstance,
        bodyPtr: number,
        mass: number,
        localInertia: DeepImmutable<Vector3>
    ): void {
        wasmInstance.rigidBodySetMassProps(bodyPtr, mass, localInertia.x, localInertia.y, localInertia.z);
    }

    public getMass(wasmInstance: BulletWasmInstance, bodyPtr: number): number {
        return wasmInstance.rigidBodyGetMass(bodyPtr);
    }

    public getLocalInertia(wasmInstance: BulletWasmInstance, bodyPtr: number): DeepImmutable<Vector3> {
        const outBufferPtr = wasmInstance.allocateBuffer(3 * Constants.A32BytesPerElement);
        const outBuffer = wasmInstance.createTypedArray(Float32Array, outBufferPtr, 3).array;
        wasmInstance.rigidBodyGetLocalInertia(bodyPtr, outBufferPtr);
        const result = new Vector3(outBuffer[0], outBuffer[1], outBuffer[2]);
        wasmInstance.deallocateBuffer(outBufferPtr, 3 * Constants.A32BytesPerElement);
        return result;
    }
    
    public translate(wasmInstance: BulletWasmInstance, bodyPtr: number, translation: DeepImmutable<Vector3>): void {
        wasmInstance.rigidBodyTranslate(bodyPtr, translation.x, translation.y, translation.z);
    }
}
