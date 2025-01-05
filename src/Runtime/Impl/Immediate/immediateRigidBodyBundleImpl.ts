import type { Matrix } from "@babylonjs/core/Maths/math.vector";
import type { DeepImmutable, Tuple } from "@babylonjs/core/types";

import { Constants } from "@/Runtime/constants";
import type { IWasmTypedArray } from "@/Runtime/Misc/IWasmTypedArray";

import type { IRigidBodyBundleImpl } from "../IRigidBodyBundleImpl";

export class ImmediateRigidBodyBundleImpl implements IRigidBodyBundleImpl {
    public readonly shouldSync: boolean;

    private readonly _count: number;

    public constructor(count: number) {
        this.shouldSync = true;
        this._count = count;
    }

    public getTransformMatrixToRef(motionStatesPtr: IWasmTypedArray<Float32Array>, index: number, result: Matrix): Matrix {
        const m = motionStatesPtr.array;
        const offset = index * Constants.MotionStateSizeInFloat32Array;

        result.set(
            m[offset + 4], m[offset + 8], m[offset + 12], 0,
            m[offset + 5], m[offset + 9], m[offset + 13], 0,
            m[offset + 6], m[offset + 10], m[offset + 14], 0,
            m[offset + 16], m[offset + 17], m[offset + 18], 1
        );
        return result;
    }

    public getTransformMatrixToArray(motionStatesPtr: IWasmTypedArray<Float32Array>, index: number, result: Float32Array, offset: number = 0): void {
        const m = motionStatesPtr.array;
        const mOffset = index * Constants.MotionStateSizeInFloat32Array;

        result[offset] = m[mOffset + 4];
        result[offset + 1] = m[mOffset + 8];
        result[offset + 2] = m[mOffset + 12];
        result[offset + 3] = 0;

        result[offset + 4] = m[mOffset + 5];
        result[offset + 5] = m[mOffset + 9];
        result[offset + 6] = m[mOffset + 13];
        result[offset + 7] = 0;

        result[offset + 8] = m[mOffset + 6];
        result[offset + 9] = m[mOffset + 10];
        result[offset + 10] = m[mOffset + 14];
        result[offset + 11] = 0;

        result[offset + 12] = m[mOffset + 16];
        result[offset + 13] = m[mOffset + 17];
        result[offset + 14] = m[mOffset + 18];
        result[offset + 15] = 1;
    }

    public getTransformMatricesToArray(motionStatesPtr: IWasmTypedArray<Float32Array>, result: Float32Array, offset: number = 0): void {
        const m = motionStatesPtr.array;

        const count = this._count;
        let mOffset = 0;
        let rOffset = offset;
        for (let i = 0; i < count; ++i) {
            result[rOffset] = m[mOffset + 4];
            result[rOffset + 1] = m[mOffset + 8];
            result[rOffset + 2] = m[mOffset + 12];
            result[rOffset + 3] = 0;

            result[rOffset + 4] = m[mOffset + 5];
            result[rOffset + 5] = m[mOffset + 9];
            result[rOffset + 6] = m[mOffset + 13];
            result[rOffset + 7] = 0;

            result[rOffset + 8] = m[mOffset + 6];
            result[rOffset + 9] = m[mOffset + 10];
            result[rOffset + 10] = m[mOffset + 14];
            result[rOffset + 11] = 0;

            result[rOffset + 12] = m[mOffset + 16];
            result[rOffset + 13] = m[mOffset + 17];
            result[rOffset + 14] = m[mOffset + 18];
            result[rOffset + 15] = 1;

            mOffset += Constants.MotionStateSizeInFloat32Array;
            rOffset += 16;
        }
    }

    public setTransformMatrixFromArray(motionStatesPtr: IWasmTypedArray<Float32Array>, index: number, array: DeepImmutable<Tuple<number, 16>>, offset: number = 0): void {
        const m = motionStatesPtr.array;
        const mOffset = index * Constants.MotionStateSizeInFloat32Array;

        m[mOffset + 4] = array[offset];
        m[mOffset + 8] = array[offset + 1];
        m[mOffset + 12] = array[offset + 2];

        m[mOffset + 5] = array[offset + 4];
        m[mOffset + 9] = array[offset + 5];
        m[mOffset + 13] = array[offset + 6];

        m[mOffset + 6] = array[offset + 8];
        m[mOffset + 10] = array[offset + 9];
        m[mOffset + 14] = array[offset + 10];

        m[mOffset + 16] = array[offset + 12];
        m[mOffset + 17] = array[offset + 13];
        m[mOffset + 18] = array[offset + 14];
    }

    public setTransformMatricesFromArray(motionStatesPtr: IWasmTypedArray<Float32Array>, array: DeepImmutable<ArrayLike<number>>, offset: number = 0): void {
        const m = motionStatesPtr.array;

        const count = this._count;
        let mOffset = 0;
        let aOffset = offset;
        for (let i = 0; i < count; ++i) {
            m[mOffset + 4] = array[aOffset];
            m[mOffset + 8] = array[aOffset + 1];
            m[mOffset + 12] = array[aOffset + 2];

            m[mOffset + 5] = array[aOffset + 4];
            m[mOffset + 9] = array[aOffset + 5];
            m[mOffset + 13] = array[aOffset + 6];

            m[mOffset + 6] = array[aOffset + 8];
            m[mOffset + 10] = array[aOffset + 9];
            m[mOffset + 14] = array[aOffset + 10];

            m[mOffset + 16] = array[aOffset + 12];
            m[mOffset + 17] = array[aOffset + 13];
            m[mOffset + 18] = array[aOffset + 14];

            mOffset += Constants.MotionStateSizeInFloat32Array;
            aOffset += 16;
        }
    }
}
