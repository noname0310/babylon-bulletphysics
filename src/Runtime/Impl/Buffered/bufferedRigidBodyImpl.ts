import type { Matrix } from "@babylonjs/core/Maths/math.vector";
import type { DeepImmutable, Tuple } from "@babylonjs/core/types";

import type { IWasmTypedArray } from "@/Runtime/Misc/IWasmTypedArray";

import type { IRigidBodyImpl } from "../IRigidBodyImpl";

export class BufferedRigidBodyImpl implements IRigidBodyImpl {
    public readonly shouldSync: boolean;

    /**
     * for getTransformMatrixToRef
     */
    private readonly _readMatrix: Float32Array;

    /**
     * for setTransformMatrix
     */
    private readonly _writeMatrix: Float32Array;
    private _isWriteMatrixDirty: boolean;

    public constructor() {
        this.shouldSync = false;
        this._readMatrix = new Float32Array(16);
        this._writeMatrix = new Float32Array(16);
        this._isWriteMatrixDirty = false;
    }

    public commitFromMotionState(motionStatePtr: IWasmTypedArray<Float32Array>): void {
        const m = this._readMatrix;
        const n = motionStatePtr.array;

        m[0] = n[4];
        m[1] = n[8];
        m[2] = n[12];
        m[3] = 0;

        m[4] = n[5];
        m[5] = n[9];
        m[6] = n[13];
        m[7] = 0;

        m[8] = n[6];
        m[9] = n[10];
        m[10] = n[14];
        m[11] = 0;

        m[12] = n[16];
        m[13] = n[17];
        m[14] = n[18];
        m[15] = 1;
    }

    public commitToMotionState(motionStatePtr: IWasmTypedArray<Float32Array>): void {
        if (!this._isWriteMatrixDirty) {
            return;
        }

        const m = this._writeMatrix;
        const n = motionStatePtr.array;

        n[4] = m[0];
        n[8] = m[1];
        n[12] = m[2];

        n[5] = m[4];
        n[9] = m[5];
        n[13] = m[6];

        n[6] = m[8];
        n[10] = m[9];
        n[14] = m[10];

        n[16] = m[12];
        n[17] = m[13];
        n[18] = m[14];

        this._isWriteMatrixDirty = false;
    }

    public getTransformMatrixToRef(_motionStatePtr: IWasmTypedArray<Float32Array>, result: Matrix): Matrix {
        const m = this._readMatrix;
        result.set(
            m[0], m[1], m[2], 0,
            m[4], m[5], m[6], 0,
            m[8], m[9], m[10], 0,
            m[12], m[13], m[14], 1
        );
        return result;
    }

    public getTransformMatrixToArray(_motionStatePtr: IWasmTypedArray<Float32Array>, result: Float32Array, offset: number = 0): void {
        result.set(this._readMatrix, offset);
    }

    public setTransformMatrixFromArray(_motionStatePtr: IWasmTypedArray<Float32Array>, array: DeepImmutable<Tuple<number, 16>>, offset: number = 0): void {
        this._writeMatrix.set(array, offset);
        this._isWriteMatrixDirty = true;
    }
}
