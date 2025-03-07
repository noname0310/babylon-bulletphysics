import type { DeepImmutable, Nullable, Tuple } from "@babylonjs/core/types";

import type { BulletWasmInstance } from "@/Runtime/bulletWasmInstance";
import { BtTransformOffsets, MotionStateOffsetsInFloat32Array, TemporalKinematicState } from "@/Runtime/constants";
import type { IWasmTypedArray } from "@/Runtime/Misc/IWasmTypedArray";

import type { IRigidBodyImpl } from "../IRigidBodyImpl";
import { RigidBodyCommand } from "./rigidBodyCommand";

export class BufferedRigidBodyImpl implements IRigidBodyImpl {
    public readonly shouldSync: boolean;

    private _isDirty: boolean;

    /**
     * for setTransformMatrix
     */
    private readonly _motionStateMatrixBuffer: Float32Array;
    private _isMotionStateMatrixBufferDirty: boolean;

    /**
     * for setDynamicTransformMatrix
     */
    private _dynamicTransformMatrixBuffer: Nullable<Float32Array>;
    private _isDynamicTransformMatrixBufferDirty: boolean;

    private readonly _commandBuffer: Map<RigidBodyCommand, any[]>;

    public constructor() {
        this.shouldSync = false;

        this._isDirty = false;

        this._motionStateMatrixBuffer = new Float32Array(16);
        this._isMotionStateMatrixBufferDirty = false;

        this._dynamicTransformMatrixBuffer = null;
        this._isDynamicTransformMatrixBufferDirty = false;

        this._commandBuffer = new Map();
    }

    public get needToCommit(): boolean {
        return this._isDirty;
    }

    public commitToWasm(
        wasmInstance: BulletWasmInstance,
        bodyPtr: number,
        motionStatePtr: IWasmTypedArray<Float32Array>,
        temporalKinematicStatePtr: IWasmTypedArray<Uint8Array>,
        worldTransformPtr: Nullable<IWasmTypedArray<Float32Array>>
    ): void {
        if (!this._isDirty) {
            return;
        }

        if (this._isMotionStateMatrixBufferDirty) {
            const m = this._motionStateMatrixBuffer;
            const n = motionStatePtr.array;

            n[MotionStateOffsetsInFloat32Array.MatrixRowX + 0] = m[0];
            n[MotionStateOffsetsInFloat32Array.MatrixRowY + 0] = m[1];
            n[MotionStateOffsetsInFloat32Array.MatrixRowZ + 0] = m[2];

            n[MotionStateOffsetsInFloat32Array.MatrixRowX + 1] = m[4];
            n[MotionStateOffsetsInFloat32Array.MatrixRowY + 1] = m[5];
            n[MotionStateOffsetsInFloat32Array.MatrixRowZ + 1] = m[6];

            n[MotionStateOffsetsInFloat32Array.MatrixRowX + 2] = m[8];
            n[MotionStateOffsetsInFloat32Array.MatrixRowY + 2] = m[9];
            n[MotionStateOffsetsInFloat32Array.MatrixRowZ + 2] = m[10];

            n[MotionStateOffsetsInFloat32Array.Translation + 0] = m[12];
            n[MotionStateOffsetsInFloat32Array.Translation + 1] = m[13];
            n[MotionStateOffsetsInFloat32Array.Translation + 2] = m[14];

            const temporalKinematicState = temporalKinematicStatePtr.array;
            if (temporalKinematicState[0] !== TemporalKinematicState.Disabled) {
                temporalKinematicState[0] = TemporalKinematicState.WaitForRestore;
            }

            this._isMotionStateMatrixBufferDirty = false;
        }

        if (this._isDynamicTransformMatrixBufferDirty) {
            const m = this._dynamicTransformMatrixBuffer!;
            const n = worldTransformPtr!.array;

            n[BtTransformOffsets.MatrixRowX + 0] = m[0];
            n[BtTransformOffsets.MatrixRowY + 0] = m[1];
            n[BtTransformOffsets.MatrixRowZ + 0] = m[2];

            n[BtTransformOffsets.MatrixRowX + 1] = m[4];
            n[BtTransformOffsets.MatrixRowY + 1] = m[5];
            n[BtTransformOffsets.MatrixRowZ + 1] = m[6];

            n[BtTransformOffsets.MatrixRowX + 2] = m[8];
            n[BtTransformOffsets.MatrixRowY + 2] = m[9];
            n[BtTransformOffsets.MatrixRowZ + 2] = m[10];

            n[BtTransformOffsets.Translation + 0] = m[12];
            n[BtTransformOffsets.Translation + 1] = m[13];
            n[BtTransformOffsets.Translation + 2] = m[14];

            this._isDynamicTransformMatrixBufferDirty = false;
        }

        for (const [command, args] of this._commandBuffer) {
            switch (command) {
            case RigidBodyCommand.SetDamping:
                wasmInstance.rigidBodySetDamping(bodyPtr, args[0], args[1]);
                break;
            }
        }
        this._commandBuffer.clear();

        this._isDirty = false;
    }

    public setTransformMatrixFromArray(
        _motionStatePtr: IWasmTypedArray<Float32Array>,
        _temporalKinematicStatePtr: IWasmTypedArray<Uint8Array>,
        array: DeepImmutable<Tuple<number, 16>>,
        offset: number
    ): void {
        this._motionStateMatrixBuffer.set(array, offset);
        this._isMotionStateMatrixBufferDirty = true;
        this._isDirty = true;
    }

    public setDynamicTransformMatrixFromArray(
        _worldTransformPtr: IWasmTypedArray<Float32Array>,
        array: DeepImmutable<Tuple<number, 16>>,
        offset: number
    ): void {
        if (this._dynamicTransformMatrixBuffer === null) {
            this._dynamicTransformMatrixBuffer = new Float32Array(16);
        }
        this._dynamicTransformMatrixBuffer.set(array, offset);
        this._isDynamicTransformMatrixBufferDirty = true;
        this._isDirty = true;
    }
}
