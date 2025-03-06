import type { DeepImmutable, Tuple } from "@babylonjs/core/types";

import { MotionStateOffsetsInFloat32Array } from "@/Runtime/constants";
import type { IWasmTypedArray } from "@/Runtime/Misc/IWasmTypedArray";

import type { IRigidBodyImpl } from "../IRigidBodyImpl";

export class BufferedRigidBodyImpl implements IRigidBodyImpl {
    public readonly shouldSync: boolean;

    /**
     * for setTransformMatrix
     */
    private readonly _writeMatrix: Float32Array;
    private _isWriteMatrixDirty: boolean;

    public constructor() {
        this.shouldSync = false;
        this._writeMatrix = new Float32Array(16);
        this._isWriteMatrixDirty = false;
    }

    public commitToMotionState(motionStatePtr: IWasmTypedArray<Float32Array>): void {
        if (!this._isWriteMatrixDirty) {
            return;
        }

        const m = this._writeMatrix;
        const n = motionStatePtr.array;

        n[MotionStateOffsetsInFloat32Array.MatrixRowX + 0] = m[0];
        n[MotionStateOffsetsInFloat32Array.MatrixRowY + 0] = m[1];
        n[MotionStateOffsetsInFloat32Array.MatrixRowZ + 0] = m[2];

        n[MotionStateOffsetsInFloat32Array.MatrixRowX + 1] = m[4];
        n[MotionStateOffsetsInFloat32Array.MatrixRowY + 1] = m[5];
        n[MotionStateOffsetsInFloat32Array.MatrixRowZ + 1] = m[6];

        n[MotionStateOffsetsInFloat32Array.MatrixRowX + 2] = m[8];
        n[MotionStateOffsetsInFloat32Array.MatrixRowY + 2] = m[9];
        n[MotionStateOffsetsInFloat32Array.MatrixRowZ + 2] = m[10];

        n[MotionStateOffsetsInFloat32Array.Translation + 0] = m[12];
        n[MotionStateOffsetsInFloat32Array.Translation + 1] = m[13];
        n[MotionStateOffsetsInFloat32Array.Translation + 2] = m[14];

        this._isWriteMatrixDirty = false;
    }

    public setTransformMatrixFromArray(_motionStatePtr: IWasmTypedArray<Float32Array>, array: DeepImmutable<Tuple<number, 16>>, offset: number): void {
        this._writeMatrix.set(array, offset);
        this._isWriteMatrixDirty = true;
    }
}
