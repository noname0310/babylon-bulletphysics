import type { IWasmTypedArray } from "./Misc/IWasmTypedArray";

export class RigidBodyStateBuffer {
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
    }

    public getTransformMatrixToArray(result: Float32Array, offset: number): void {
        result.set(this._readMatrix, offset);
    }

    public setTransformMatrix(matrix: Float32Array): void {
        this._writeMatrix.set(matrix);
        this._isWriteMatrixDirty = true;
    }
}
