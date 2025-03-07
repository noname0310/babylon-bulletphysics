import type { DeepImmutable, Nullable, Tuple } from "@babylonjs/core/types";

import type { BulletWasmInstance } from "../bulletWasmInstance";
import type { IWasmTypedArray } from "../Misc/IWasmTypedArray";

export interface IRigidBodyImpl {
    readonly shouldSync: boolean;
    readonly needToCommit?: boolean;
    commitToWasm?(
        wasmInstance: BulletWasmInstance,
        bodyPtr: number,
        motionStatePtr: IWasmTypedArray<Float32Array>,
        temporalKinematicStatePtr: IWasmTypedArray<Uint8Array>,
        worldTransformPtr: Nullable<IWasmTypedArray<Float32Array>>
    ): void;
    setTransformMatrixFromArray(
        motionStatePtr: IWasmTypedArray<Float32Array>,
        temporalKinematicStatePtr: IWasmTypedArray<Uint8Array>,
        array: DeepImmutable<Tuple<number, 16>>,
        offset: number
    ): void;
    setDynamicTransformMatrixFromArray(
        worldTransformPtr: IWasmTypedArray<Float32Array>,
        array: DeepImmutable<Tuple<number, 16>>,
        offset: number
    ): void;
    setDamping(
        wasmInstance: BulletWasmInstance,
        bodyPtr: number,
        linearDamping: number,
        angularDamping: number
    ): void;
    getLinearDamping(wasmInstance: BulletWasmInstance, bodyPtr: number): number;
    getAngularDamping(wasmInstance: BulletWasmInstance, bodyPtr: number): number;
}
