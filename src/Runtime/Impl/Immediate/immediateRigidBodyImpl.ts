import type { DeepImmutable, Matrix, Tuple } from "@babylonjs/core";

import type { IWasmTypedArray } from "@/Runtime/Misc/IWasmTypedArray";

import type { IRigidBodyImpl } from "../IRigidBodyImpl";

export class ImmediateRigidBodyImpl implements IRigidBodyImpl {
    public readonly shouldSync: boolean;

    public constructor() {
        this.shouldSync = true;
    }

    public getTransformMatrixToRef(motionStatePtr: IWasmTypedArray<Float32Array>, result: Matrix): Matrix {
        const m = motionStatePtr.array;

        result.set(
            m[4], m[8], m[12], 0,
            m[5], m[9], m[13], 0,
            m[6], m[10], m[14], 0,
            m[16], m[17], m[18], 1
        );
        return result;
    }

    public getTransformMatrixToArray(motionStatePtr: IWasmTypedArray<Float32Array>, result: Float32Array, offset: number = 0): void {
        const m = motionStatePtr.array;

        result[offset] = m[4];
        result[offset + 1] = m[8];
        result[offset + 2] = m[12];
        result[offset + 3] = 0;

        result[offset + 4] = m[5];
        result[offset + 5] = m[9];
        result[offset + 6] = m[13];
        result[offset + 7] = 0;

        result[offset + 8] = m[6];
        result[offset + 9] = m[10];
        result[offset + 10] = m[14];
        result[offset + 11] = 0;

        result[offset + 12] = m[16];
        result[offset + 13] = m[17];
        result[offset + 14] = m[18];
        result[offset + 15] = 1;
    }

    public setTransformMatrixFromArray(motionStatePtr: IWasmTypedArray<Float32Array>, array: DeepImmutable<Tuple<number, 16>>, offset: number = 0): void {
        const m = motionStatePtr.array;

        m[4] = array[offset];
        m[8] = array[offset + 1];
        m[12] = array[offset + 2];

        m[5] = array[offset + 4];
        m[9] = array[offset + 5];
        m[13] = array[offset + 6];

        m[6] = array[offset + 8];
        m[10] = array[offset + 9];
        m[14] = array[offset + 10];

        m[16] = array[offset + 12];
        m[17] = array[offset + 13];
        m[18] = array[offset + 14];
    }
}
