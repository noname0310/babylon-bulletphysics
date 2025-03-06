import type { DeepImmutable, Tuple } from "@babylonjs/core/types";

import type { IWasmTypedArray } from "../Misc/IWasmTypedArray";

export interface IRigidBodyImpl {
    readonly shouldSync: boolean;
    setTransformMatrixFromArray(motionStatePtr: IWasmTypedArray<Float32Array>, array: DeepImmutable<Tuple<number, 16>>, offset: number): void;
}
