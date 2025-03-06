import type { DeepImmutable, Tuple } from "@babylonjs/core/types";

import { Constants, MotionStateOffsetsInFloat32Array } from "@/Runtime/constants";
import type { IWasmTypedArray } from "@/Runtime/Misc/IWasmTypedArray";

import type { IRigidBodyBundleImpl } from "../IRigidBodyBundleImpl";

export class ImmediateRigidBodyBundleImpl implements IRigidBodyBundleImpl {
    public readonly shouldSync: boolean;

    private readonly _count: number;

    public constructor(count: number) {
        this.shouldSync = true;
        this._count = count;
    }

    public setTransformMatrixFromArray(motionStatesPtr: IWasmTypedArray<Float32Array>, index: number, array: DeepImmutable<Tuple<number, 16>>, offset: number): void {
        const m = motionStatesPtr.array;
        const mOffset = index * Constants.MotionStateSizeInFloat32Array;

        m[mOffset + MotionStateOffsetsInFloat32Array.MatrixRowX + 0] = array[offset];
        m[mOffset + MotionStateOffsetsInFloat32Array.MatrixRowY + 0] = array[offset + 1];
        m[mOffset + MotionStateOffsetsInFloat32Array.MatrixRowZ + 0] = array[offset + 2];

        m[mOffset + MotionStateOffsetsInFloat32Array.MatrixRowX + 1] = array[offset + 4];
        m[mOffset + MotionStateOffsetsInFloat32Array.MatrixRowY + 1] = array[offset + 5];
        m[mOffset + MotionStateOffsetsInFloat32Array.MatrixRowZ + 1] = array[offset + 6];

        m[mOffset + MotionStateOffsetsInFloat32Array.MatrixRowX + 2] = array[offset + 8];
        m[mOffset + MotionStateOffsetsInFloat32Array.MatrixRowY + 2] = array[offset + 9];
        m[mOffset + MotionStateOffsetsInFloat32Array.MatrixRowZ + 2] = array[offset + 10];

        m[mOffset + MotionStateOffsetsInFloat32Array.Translation + 0] = array[offset + 12];
        m[mOffset + MotionStateOffsetsInFloat32Array.Translation + 1] = array[offset + 13];
        m[mOffset + MotionStateOffsetsInFloat32Array.Translation + 2] = array[offset + 14];
    }

    public setTransformMatricesFromArray(motionStatesPtr: IWasmTypedArray<Float32Array>, array: DeepImmutable<ArrayLike<number>>, offset: number): void {
        const m = motionStatesPtr.array;

        const count = this._count;
        let mOffset = 0;
        let aOffset = offset;
        for (let i = 0; i < count; ++i) {
            m[mOffset + MotionStateOffsetsInFloat32Array.MatrixRowX + 0] = array[aOffset];
            m[mOffset + MotionStateOffsetsInFloat32Array.MatrixRowY + 0] = array[aOffset + 1];
            m[mOffset + MotionStateOffsetsInFloat32Array.MatrixRowZ + 0] = array[aOffset + 2];

            m[mOffset + MotionStateOffsetsInFloat32Array.MatrixRowX + 1] = array[aOffset + 4];
            m[mOffset + MotionStateOffsetsInFloat32Array.MatrixRowY + 1] = array[aOffset + 5];
            m[mOffset + MotionStateOffsetsInFloat32Array.MatrixRowZ + 1] = array[aOffset + 6];

            m[mOffset + MotionStateOffsetsInFloat32Array.MatrixRowX + 2] = array[aOffset + 8];
            m[mOffset + MotionStateOffsetsInFloat32Array.MatrixRowY + 2] = array[aOffset + 9];
            m[mOffset + MotionStateOffsetsInFloat32Array.MatrixRowZ + 2] = array[aOffset + 10];

            m[mOffset + MotionStateOffsetsInFloat32Array.Translation + 0] = array[aOffset + 12];
            m[mOffset + MotionStateOffsetsInFloat32Array.Translation + 1] = array[aOffset + 13];
            m[mOffset + MotionStateOffsetsInFloat32Array.Translation + 2] = array[aOffset + 14];

            mOffset += Constants.MotionStateSizeInFloat32Array;
            aOffset += 16;
        }
    }
}
