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
