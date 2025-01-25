import type { DeepImmutable, Tuple } from "@babylonjs/core/types";

import { Constants } from "@/Runtime/constants";
import type { IWasmTypedArray } from "@/Runtime/Misc/IWasmTypedArray";

import type { IRigidBodyBundleImpl } from "../IRigidBodyBundleImpl";

export class BufferedRigidBodyBundleImpl implements IRigidBodyBundleImpl {
    public readonly shouldSync: boolean;

    /**
     * for setTransformMatrix
     */
    private readonly _writeMatrices: Float32Array;
    private _isWriteMatricesDirty: boolean;
    private readonly _writeMatrixDirtyFlags: Uint8Array;

    private readonly _count: number;

    public constructor(count: number) {
        this.shouldSync = false;
        this._writeMatrices = new Float32Array(count * 16);
        this._isWriteMatricesDirty = false;
        this._writeMatrixDirtyFlags = new Uint8Array(count);
        this._count = count;
    }

    public commitToMotionState(motionStatesPtr: IWasmTypedArray<Float32Array>): void {
        if (!this._isWriteMatricesDirty) {
            return;
        }

        const n = this._writeMatrices;
        const m = motionStatesPtr.array;
        const writeMatrixDirtyFlags = this._writeMatrixDirtyFlags;

        const count = this._count;
        let nOffset = 0;
        let mOffset = 0;
        for (let i = 0; i < count; ++i) {
            if (writeMatrixDirtyFlags[i] === 0) {
                nOffset += 16;
                mOffset += Constants.MotionStateSizeInFloat32Array;
                continue;
            }

            m[mOffset + 4] = n[nOffset];
            m[mOffset + 8] = n[nOffset + 1];
            m[mOffset + 12] = n[nOffset + 2];

            m[mOffset + 5] = n[nOffset + 4];
            m[mOffset + 9] = n[nOffset + 5];
            m[mOffset + 13] = n[nOffset + 6];

            m[mOffset + 6] = n[nOffset + 8];
            m[mOffset + 10] = n[nOffset + 9];
            m[mOffset + 14] = n[nOffset + 10];

            m[mOffset + 16] = n[nOffset + 12];
            m[mOffset + 17] = n[nOffset + 13];
            m[mOffset + 18] = n[nOffset + 14];

            writeMatrixDirtyFlags[i] = 0;

            nOffset += 16;
            mOffset += Constants.MotionStateSizeInFloat32Array;
        }

        this._isWriteMatricesDirty = false;
    }

    public setTransformMatrixFromArray(_motionStatesPtr: IWasmTypedArray<Float32Array>, index: number, array: DeepImmutable<Tuple<number, 16>>, offset: number = 0): void {
        const m = this._writeMatrices;
        const writeMatrixDirtyFlags = this._writeMatrixDirtyFlags;
        const mOffset = index * 16;

        m[mOffset] = array[offset];
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

        writeMatrixDirtyFlags[index] = 1;
        this._isWriteMatricesDirty = true;
    }

    public setTransformMatricesFromArray(_motionStatesPtr: IWasmTypedArray<Float32Array>, array: DeepImmutable<ArrayLike<number>>, offset: number = 0): void {
        this._writeMatrices.set(array, offset);
        this._isWriteMatricesDirty = true;
    }
}
