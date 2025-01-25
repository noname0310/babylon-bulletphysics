import type { DeepImmutable, Tuple } from "@babylonjs/core/types";

import type { IWasmTypedArray } from "../Misc/IWasmTypedArray";

export interface IRigidBodyBundleImpl {
    readonly shouldSync: boolean;
    setTransformMatrixFromArray(motionStatesPtr: IWasmTypedArray<Float32Array>, index: number, array: DeepImmutable<Tuple<number, 16>>, offset?: number): void;
    setTransformMatricesFromArray(motionStatesPtr: IWasmTypedArray<Float32Array>, array: DeepImmutable<ArrayLike<number>>, offset?: number): void;
}
