import { Vector3 } from "@babylonjs/core/Maths/math.vector";
import type { DeepImmutable, Nullable, Tuple } from "@babylonjs/core/types";

import type { IWasmTypedArray } from "@/Runtime/Misc/IWasmTypedArray";

import type { BulletWasmInstance } from "../../bulletWasmInstance";
import { BtTransformOffsets, Constants, MotionStateOffsetsInFloat32Array, TemporalKinematicState } from "../../constants";
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
            case RigidBodyCommand.SetMassProps: {
                const localInertia = args[1] as Vector3;
                wasmInstance.rigidBodySetMassProps(bodyPtr, args[0], localInertia.x, localInertia.y, localInertia.z);
                break;
            }
            case RigidBodyCommand.Translate: {
                const translation = args[0] as Vector3;
                wasmInstance.rigidBodyTranslate(bodyPtr, translation.x, translation.y, translation.z);
                break;
            }
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

    public setDamping(
        _wasmInstance: BulletWasmInstance,
        _bodyPtr: number,
        linearDamping: number,
        angularDamping: number
    ): void {
        this._commandBuffer.set(RigidBodyCommand.SetDamping, [linearDamping, angularDamping]);
        this._isDirty = true;
    }

    // this member is not updated by wasm so no need to synchronization before read
    public getLinearDamping(wasmInstance: BulletWasmInstance, bodyPtr: number): number {
        return wasmInstance.rigidBodyGetLinearDamping(bodyPtr);
    }

    // this member is not updated by wasm so no need to synchronization before read
    public getAngularDamping(wasmInstance: BulletWasmInstance, bodyPtr: number): number {
        return wasmInstance.rigidBodyGetAngularDamping(bodyPtr);
    }

    public setMassProps(
        _wasmInstance: BulletWasmInstance,
        _bodyPtr: number,
        mass: number,
        localInertia: DeepImmutable<Vector3>
    ): void {
        this._commandBuffer.set(RigidBodyCommand.SetMassProps, [mass, localInertia.clone()]);
        this._isDirty = true;
    }

    // this member is not updated by wasm so no need to synchronization before read
    public getMass(wasmInstance: BulletWasmInstance, bodyPtr: number): number {
        return wasmInstance.rigidBodyGetMass(bodyPtr);
    }

    // this member is not updated by wasm so no need to synchronization before read
    public getLocalInertia(wasmInstance: BulletWasmInstance, bodyPtr: number): Vector3 {
        const outBufferPtr = wasmInstance.allocateBuffer(3 * Constants.A32BytesPerElement);
        const outBuffer = wasmInstance.createTypedArray(Float32Array, outBufferPtr, 3).array;
        wasmInstance.rigidBodyGetLocalInertia(bodyPtr, outBufferPtr);
        const result = new Vector3(outBuffer[0], outBuffer[1], outBuffer[2]);
        wasmInstance.deallocateBuffer(outBufferPtr, 3 * Constants.A32BytesPerElement);
        return result;
    }

    public translate(
        _wasmInstance: BulletWasmInstance,
        _bodyPtr: number,
        translation: DeepImmutable<Vector3>
    ): void {
        this._commandBuffer.set(RigidBodyCommand.Translate, [translation.clone()]);
        this._isDirty = true;
    }
}
