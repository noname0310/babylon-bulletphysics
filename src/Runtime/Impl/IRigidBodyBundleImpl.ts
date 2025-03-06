import type { DeepImmutable, Nullable, Tuple } from "@babylonjs/core/types";

import type { IWasmTypedArray } from "../Misc/IWasmTypedArray";

export interface IRigidBodyBundleImpl {
    readonly shouldSync: boolean;
    setTransformMatrixFromArray(motionStatesPtr: IWasmTypedArray<Float32Array>, temporalKinematicStatesPtr: IWasmTypedArray<Uint8Array>, index: number, array: DeepImmutable<Tuple<number, 16>>, offset: number): void;
    setTransformMatricesFromArray(motionStatesPtr: IWasmTypedArray<Float32Array>, temporalKinematicStatesPtr: IWasmTypedArray<Uint8Array>, array: DeepImmutable<ArrayLike<number>>, offset: number): void;
    setDynamicTransformMatrixFromArray(worldTransformPtrArray: Nullable<IWasmTypedArray<Float32Array>>[], index: number, array: DeepImmutable<Tuple<number, 16>>, offset: number): void;
    readonly needToCommit?: boolean;
    commitToWasm?(motionStatesPtr: IWasmTypedArray<Float32Array>, temporalKinematicStatesPtr: IWasmTypedArray<Uint8Array>, worldTransformPtrArray: Nullable<IWasmTypedArray<Float32Array>>[]): void;
}
