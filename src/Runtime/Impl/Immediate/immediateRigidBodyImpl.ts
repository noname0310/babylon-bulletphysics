import type { DeepImmutable, Tuple } from "@babylonjs/core";

import { MotionStateOffsetsInFloat32Array } from "@/Runtime/constants";
import type { IWasmTypedArray } from "@/Runtime/Misc/IWasmTypedArray";

import type { IRigidBodyImpl } from "../IRigidBodyImpl";

export class ImmediateRigidBodyImpl implements IRigidBodyImpl {
    public readonly shouldSync: boolean;

    public constructor() {
        this.shouldSync = true;
    }

    public setTransformMatrixFromArray(motionStatePtr: IWasmTypedArray<Float32Array>, array: DeepImmutable<Tuple<number, 16>>, offset: number): void {
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
    }
}
