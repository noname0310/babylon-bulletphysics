import type { DeepImmutable, Nullable, Tuple } from "@babylonjs/core/types";

import type { IWasmTypedArray } from "../Misc/IWasmTypedArray";

export interface IRigidBodyImpl {
    readonly shouldSync: boolean;
    setTransformMatrixFromArray(motionStatePtr: IWasmTypedArray<Float32Array>, temporalKinematicStatePtr: IWasmTypedArray<Uint8Array>, array: DeepImmutable<Tuple<number, 16>>, offset: number): void;
    setDynamicTransformMatrixFromArray(worldTransformPtr: IWasmTypedArray<Float32Array>, array: DeepImmutable<Tuple<number, 16>>, offset: number): void;
    readonly needToCommit?: boolean;
    commitToWasm?(motionStatePtr: IWasmTypedArray<Float32Array>, temporalKinematicStatePtr: IWasmTypedArray<Uint8Array>, worldTransformPtr: Nullable<IWasmTypedArray<Float32Array>>): void;
}
