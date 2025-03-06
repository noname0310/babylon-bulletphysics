import type { DeepImmutable, Nullable, Tuple } from "@babylonjs/core/types";

import { BtTransformOffsets, Constants, MotionStateOffsetsInFloat32Array, TemporalKinematicState } from "@/Runtime/constants";
import type { IWasmTypedArray } from "@/Runtime/Misc/IWasmTypedArray";

import type { IRigidBodyBundleImpl } from "../IRigidBodyBundleImpl";

export class BufferedRigidBodyBundleImpl implements IRigidBodyBundleImpl {
    public readonly shouldSync: boolean;

    /**
     * for setTransformMatrix
     */
    private readonly _motionStateMatricesBuffer: Float32Array;
    private _isMotionStateMatricesBufferDirty: boolean;
    private readonly _motionStateMatrixDirtyFlags: Uint8Array;

    /**
     * for setDynamicTransformMatrix
     */
    private _dynamicTransformMatricesBuffer: Nullable<Float32Array>;
    private _isDynamicTransformMatricesBufferDirty: boolean;
    private _dynamicTransformMatrixDirtyFlags: Nullable<Uint8Array>;

    private readonly _count: number;

    public constructor(count: number) {
        this.shouldSync = false;

        this._motionStateMatricesBuffer = new Float32Array(count * 16);
        this._isMotionStateMatricesBufferDirty = false;
        this._motionStateMatrixDirtyFlags = new Uint8Array(count);

        this._dynamicTransformMatricesBuffer = null;
        this._isDynamicTransformMatricesBufferDirty = false;
        this._dynamicTransformMatrixDirtyFlags = null;

        this._count = count;
    }

    public commitToWasm(motionStatesPtr: IWasmTypedArray<Float32Array>, temporalKinematicStatesPtr: IWasmTypedArray<Uint8Array>, worldTransformPtrArray: Nullable<IWasmTypedArray<Uint8Array>>[]): void {
        if (this._isMotionStateMatricesBufferDirty) {
            const n = this._motionStateMatricesBuffer;
            const m = motionStatesPtr.array;
            const motionStateMatrixDirtyFlags = this._motionStateMatrixDirtyFlags;
            const temporalKinematicStates = temporalKinematicStatesPtr.array;

            const count = this._count;
            let nOffset = 0;
            let mOffset = 0;
            for (let i = 0; i < count; ++i) {
                if (motionStateMatrixDirtyFlags[i] === 0) {
                    nOffset += 16;
                    mOffset += Constants.MotionStateSizeInFloat32Array;
                    continue;
                }

                m[mOffset + MotionStateOffsetsInFloat32Array.MatrixRowX + 0] = n[nOffset];
                m[mOffset + MotionStateOffsetsInFloat32Array.MatrixRowY + 0] = n[nOffset + 1];
                m[mOffset + MotionStateOffsetsInFloat32Array.MatrixRowZ + 0] = n[nOffset + 2];

                m[mOffset + MotionStateOffsetsInFloat32Array.MatrixRowX + 1] = n[nOffset + 4];
                m[mOffset + MotionStateOffsetsInFloat32Array.MatrixRowY + 1] = n[nOffset + 5];
                m[mOffset + MotionStateOffsetsInFloat32Array.MatrixRowZ + 1] = n[nOffset + 6];

                m[mOffset + MotionStateOffsetsInFloat32Array.MatrixRowX + 2] = n[nOffset + 8];
                m[mOffset + MotionStateOffsetsInFloat32Array.MatrixRowY + 2] = n[nOffset + 9];
                m[mOffset + MotionStateOffsetsInFloat32Array.MatrixRowZ + 2] = n[nOffset + 10];

                m[mOffset + MotionStateOffsetsInFloat32Array.Translation + 0] = n[nOffset + 12];
                m[mOffset + MotionStateOffsetsInFloat32Array.Translation + 1] = n[nOffset + 13];
                m[mOffset + MotionStateOffsetsInFloat32Array.Translation + 2] = n[nOffset + 14];

                if (temporalKinematicStates[i] !== TemporalKinematicState.Disabled) {
                    temporalKinematicStates[i] = TemporalKinematicState.WaitForRestore;
                }

                motionStateMatrixDirtyFlags[i] = 0;

                nOffset += 16;
                mOffset += Constants.MotionStateSizeInFloat32Array;
            }

            this._isMotionStateMatricesBufferDirty = false;
        }

        if (this._isDynamicTransformMatricesBufferDirty) {
            const n = this._dynamicTransformMatricesBuffer!;
            const m = worldTransformPtrArray;
            const dynamicTransformMatrixDirtyFlags = this._dynamicTransformMatrixDirtyFlags!;

            const count = this._count;
            let nOffset = 0;
            for (let i = 0; i < count; ++i) {
                if (dynamicTransformMatrixDirtyFlags[i] === 0) {
                    nOffset += 16;
                    continue;
                }

                const nthM = m[i]!.array;

                nthM[BtTransformOffsets.MatrixRowX + 0] = n[nOffset];
                nthM[BtTransformOffsets.MatrixRowY + 0] = n[nOffset + 1];
                nthM[BtTransformOffsets.MatrixRowZ + 0] = n[nOffset + 2];

                nthM[BtTransformOffsets.MatrixRowX + 1] = n[nOffset + 4];
                nthM[BtTransformOffsets.MatrixRowY + 1] = n[nOffset + 5];
                nthM[BtTransformOffsets.MatrixRowZ + 1] = n[nOffset + 6];

                nthM[BtTransformOffsets.MatrixRowX + 2] = n[nOffset + 8];
                nthM[BtTransformOffsets.MatrixRowY + 2] = n[nOffset + 9];
                nthM[BtTransformOffsets.MatrixRowZ + 2] = n[nOffset + 10];

                nthM[BtTransformOffsets.Translation + 0] = n[nOffset + 12];
                nthM[BtTransformOffsets.Translation + 1] = n[nOffset + 13];
                nthM[BtTransformOffsets.Translation + 2] = n[nOffset + 14];


                dynamicTransformMatrixDirtyFlags[i] = 0;

                nOffset += 16;
            }

            this._isDynamicTransformMatricesBufferDirty = false;
        }
    }

    public setTransformMatrixFromArray(_motionStatesPtr: IWasmTypedArray<Float32Array>, _temporalKinematicStatesPtr: IWasmTypedArray<Uint8Array>, index: number, array: DeepImmutable<Tuple<number, 16>>, offset: number): void {
        const m = this._motionStateMatricesBuffer;
        const motionStateMatrixDirtyFlags = this._motionStateMatrixDirtyFlags;
        const mOffset = index * 16;

        m[mOffset + 0] = array[offset];
        m[mOffset + 1] = array[offset + 1];
        m[mOffset + 2] = array[offset + 2];
        m[mOffset + 3] = 0;
        m[mOffset + 4] = array[offset + 4];
        m[mOffset + 5] = array[offset + 5];
        m[mOffset + 6] = array[offset + 6];
        m[mOffset + 7] = 0;
        m[mOffset + 8] = array[offset + 8];
        m[mOffset + 9] = array[offset + 9];
        m[mOffset + 10] = array[offset + 10];
        m[mOffset + 11] = 0;
        m[mOffset + 12] = array[offset + 12];
        m[mOffset + 13] = array[offset + 13];
        m[mOffset + 14] = array[offset + 14];
        m[mOffset + 15] = 1;

        motionStateMatrixDirtyFlags[index] = 1;
        this._isMotionStateMatricesBufferDirty = true;
    }

    public setTransformMatricesFromArray(_motionStatesPtr: IWasmTypedArray<Float32Array>, _temporalKinematicStatesPtr: IWasmTypedArray<Uint8Array>, array: DeepImmutable<ArrayLike<number>>, offset: number): void {
        this._motionStateMatricesBuffer.set(array, offset);

        this._motionStateMatrixDirtyFlags.fill(1);
        this._isMotionStateMatricesBufferDirty = true;
    }

    public setDynamicTransformMatrixFromArray(_worldTransformPtrArray: Nullable<IWasmTypedArray<Float32Array>>[], index: number, array: DeepImmutable<Tuple<number, 16>>, offset: number): void {
        if (this._dynamicTransformMatricesBuffer === null) {
            this._dynamicTransformMatricesBuffer = new Float32Array(this._motionStateMatricesBuffer.length);
        }
        if (this._dynamicTransformMatrixDirtyFlags === null) {
            this._dynamicTransformMatrixDirtyFlags = new Uint8Array(this._motionStateMatrixDirtyFlags.length);
        }

        const m = this._dynamicTransformMatricesBuffer;
        const mOffset = index * 16;

        m[mOffset + 0] = array[offset];
        m[mOffset + 1] = array[offset + 1];
        m[mOffset + 2] = array[offset + 2];
        m[mOffset + 3] = 0;
        m[mOffset + 4] = array[offset + 4];
        m[mOffset + 5] = array[offset + 5];
        m[mOffset + 6] = array[offset + 6];
        m[mOffset + 7] = 0;
        m[mOffset + 8] = array[offset + 8];
        m[mOffset + 9] = array[offset + 9];
        m[mOffset + 10] = array[offset + 10];
        m[mOffset + 11] = 0;
        m[mOffset + 12] = array[offset + 12];
        m[mOffset + 13] = array[offset + 13];
        m[mOffset + 14] = array[offset + 14];
        m[mOffset + 15] = 1;

        this._dynamicTransformMatrixDirtyFlags[index] = 1;
        this._isDynamicTransformMatricesBufferDirty = true;
    }
}
