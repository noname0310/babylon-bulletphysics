import type { Matrix } from "@babylonjs/core/Maths/math.vector";
import type { DeepImmutable, Tuple } from "@babylonjs/core/types";

import type { IWasmTypedArray } from "../Misc/IWasmTypedArray";

export interface IRigidBodyImpl {
    readonly shouldSync: boolean;
    getTransformMatrixToRef(motionStatePtr: IWasmTypedArray<Float32Array>, result: Matrix): Matrix;
    getTransformMatrixToArray(motionStatePtr: IWasmTypedArray<Float32Array>, result: Float32Array, offset?: number): void;
    setTransformMatrixFromArray(motionStatePtr: IWasmTypedArray<Float32Array>, array: DeepImmutable<Tuple<number, 16>>, offset?: number): void;
}
