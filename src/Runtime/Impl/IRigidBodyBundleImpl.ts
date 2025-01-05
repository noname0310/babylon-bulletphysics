import type { Matrix } from "@babylonjs/core/Maths/math.vector";
import type { DeepImmutable, Tuple } from "@babylonjs/core/types";

import type { IWasmTypedArray } from "../Misc/IWasmTypedArray";

export interface IRigidBodyBundleImpl {
    readonly shouldSync: boolean;
    getTransformMatrixToRef(motionStatesPtr: IWasmTypedArray<Float32Array>, index: number, result: Matrix): Matrix;
    getTransformMatrixToArray(motionStatesPtr: IWasmTypedArray<Float32Array>, index: number, result: Float32Array, offset?: number): void;
    getTransformMatricesToArray(motionStatesPtr: IWasmTypedArray<Float32Array>, result: Float32Array, offset?: number): void;
    setTransformMatrixFromArray(motionStatesPtr: IWasmTypedArray<Float32Array>, index: number, array: DeepImmutable<Tuple<number, 16>>, offset?: number): void;
    setTransformMatricesFromArray(motionStatesPtr: IWasmTypedArray<Float32Array>, array: DeepImmutable<ArrayLike<number>>, offset?: number): void;
}
