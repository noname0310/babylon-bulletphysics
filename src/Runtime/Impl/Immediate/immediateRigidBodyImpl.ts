import type { DeepImmutable, Tuple } from "@babylonjs/core";

import type { IWasmTypedArray } from "@/Runtime/Misc/IWasmTypedArray";

import type { IRigidBodyImpl } from "../IRigidBodyImpl";

export class ImmediateRigidBodyImpl implements IRigidBodyImpl {
    public readonly shouldSync: boolean;

    public constructor() {
        this.shouldSync = true;
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
