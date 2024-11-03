import type { Matrix } from "@babylonjs/core/Maths/math.vector";
import type { Nullable } from "@babylonjs/core/types";

import type { BulletWasmInstance } from "./bulletWasmInstance";
import type { IWasmTypedArray } from "./Misc/IWasmTypedArray";
import { MotionType } from "./motionType";
import type { PhysicsShape } from "./physicsShape";

/**
 * RigidBodyConstructionInfo representations
 *
 * shape: *uint32 : offset 0
 * initial_transform: float32[16] : offset 16
 *
 * motionType: uint8 : offset 80
 *
 * padding: uint8[3] : offset 81
 *
 * mass: float32 : offset 84
 * linearDamping: float32 : offset 88
 * angularDamping: float32 : offset 92
 * friction: float32 : offset 96
 * restitution: float32 : offset 100
 * linearSleepingThreshold: float32 : offset 104
 * angularSleepingThreshold: float32 : offset 108
 * collisionGroup: uint16 : offset 112
 * collisionMask: uint16 : offset 114
 * additionalDamping: uint8 : offset 116
 * noContactResponse: uint8 : offset 117
 * disableDeactivation: uint8 : offset 118
 * padding: uint8[9] : offset 119
 *
 * --size: 128
 */

const size = 128;

class RigidBodyConstructionInfoInner {
    private readonly _wasmInstance: WeakRef<BulletWasmInstance>;
    private _ptr: number;
    private _shapeReference: Nullable<PhysicsShape>;

    public constructor(wasmInstance: WeakRef<BulletWasmInstance>, ptr: number) {
        this._wasmInstance = wasmInstance;
        this._ptr = ptr;
        this._shapeReference = null;
    }

    public dispose(): void {
        if (this._ptr === 0) {
            return;
        }

        this._wasmInstance.deref()?.deallocateBuffer(this._ptr, size);
        this._ptr = 0;
        if (this._shapeReference) {
            this._shapeReference.removeReference();
        }
        this._shapeReference = null;
    }

    public get ptr(): number {
        return this._ptr;
    }

    public get shape(): Nullable<PhysicsShape> {
        return this._shapeReference;
    }

    public set shape(value: Nullable<PhysicsShape>) {
        if (this._shapeReference) {
            this._shapeReference.removeReference();
        }

        this._shapeReference = value;

        if (this._shapeReference) {
            this._shapeReference.addReference();
        }
    }
}

function rigidBodyConstructionInfoFinalizer(inner: RigidBodyConstructionInfoInner): void {
    inner.dispose();
}

const rigidBodyConstructionInfoRegistryMap = new WeakMap<BulletWasmInstance, FinalizationRegistry<RigidBodyConstructionInfoInner>>();

export class RigidBodyConstructionInfo {
    private readonly _wasmInstance: BulletWasmInstance;

    private readonly _uint32Ptr: IWasmTypedArray<Uint32Array>;
    private readonly _float32Ptr: IWasmTypedArray<Float32Array>;
    private readonly _uint8Ptr: IWasmTypedArray<Uint8Array>;
    private readonly _uint16Ptr: IWasmTypedArray<Uint16Array>;

    private readonly _inner: RigidBodyConstructionInfoInner;

    public constructor(wasmInstance: BulletWasmInstance) {
        this._wasmInstance = wasmInstance;

        const uint32Bytes = Uint32Array.BYTES_PER_ELEMENT;
        const float32Bytes = Float32Array.BYTES_PER_ELEMENT;
        const uint8Bytes = Uint8Array.BYTES_PER_ELEMENT;
        const uint16Bytes = Uint16Array.BYTES_PER_ELEMENT;

        // Allocate buffer
        const ptr = wasmInstance.allocateBuffer(size);
        this._uint32Ptr = wasmInstance.createTypedArray(Uint32Array, ptr, size / uint32Bytes);
        this._float32Ptr = wasmInstance.createTypedArray(Float32Array, ptr, size / float32Bytes);
        this._uint8Ptr = wasmInstance.createTypedArray(Uint8Array, ptr, size / uint8Bytes);
        this._uint16Ptr = wasmInstance.createTypedArray(Uint16Array, ptr, size / uint16Bytes);

        this._inner = new RigidBodyConstructionInfoInner(new WeakRef(wasmInstance), ptr);

        // Initialize to default values
        const uint32Ptr = this._uint32Ptr.array;
        const float32Ptr = this._float32Ptr.array;
        const uint8Ptr = this._uint8Ptr.array;
        const uint16Ptr = this._uint16Ptr.array;

        // shape
        uint32Ptr[0x0 / uint32Bytes] = 0;

        // initial_transform
        float32Ptr[0x10 / float32Bytes] = 1;
        float32Ptr[0x14 / float32Bytes] = 0;
        float32Ptr[0x18 / float32Bytes] = 0;
        float32Ptr[0x1C / float32Bytes] = 0;

        float32Ptr[0x20 / float32Bytes] = 0;
        float32Ptr[0x24 / float32Bytes] = 1;
        float32Ptr[0x28 / float32Bytes] = 0;
        float32Ptr[0x2C / float32Bytes] = 0;

        float32Ptr[0x30 / float32Bytes] = 0;
        float32Ptr[0x34 / float32Bytes] = 0;
        float32Ptr[0x38 / float32Bytes] = 1;
        float32Ptr[0x3C / float32Bytes] = 0;

        float32Ptr[0x40 / float32Bytes] = 0;
        float32Ptr[0x44 / float32Bytes] = 0;
        float32Ptr[0x48 / float32Bytes] = 0;
        float32Ptr[0x4C / float32Bytes] = 1;

        // motionType
        uint8Ptr[0x50 / uint8Bytes] = MotionType.Dynamic;

        // mass
        float32Ptr[0x54 / float32Bytes] = 1.0;

        // linearDamping
        float32Ptr[0x58 / float32Bytes] = 0;

        // angularDamping
        float32Ptr[0x5C / float32Bytes] = 0;

        // friction
        float32Ptr[0x60 / float32Bytes] = 0.5;

        // restitution
        float32Ptr[0x64 / float32Bytes] = 0.0;

        // linearSleepingThreshold
        float32Ptr[0x68 / float32Bytes] = 0.0;

        // angularSleepingThreshold
        float32Ptr[0x6C / float32Bytes] = 1.0;

        // collisionGroup
        uint16Ptr[0x70 / uint16Bytes] = 1 << 0;

        // collisionMask
        uint16Ptr[0x72 / uint16Bytes] = 0xFFFF;

        // additionalDamping
        uint8Ptr[0x74 / uint8Bytes] = +false;

        // noContactResponse
        uint8Ptr[0x75 / uint8Bytes] = +false;

        // disableDeactivation
        uint8Ptr[0x76 / uint8Bytes] = +false;


        // finalization registry
        let registry = rigidBodyConstructionInfoRegistryMap.get(wasmInstance);
        if (registry === undefined) {
            registry = new FinalizationRegistry(rigidBodyConstructionInfoFinalizer);
            rigidBodyConstructionInfoRegistryMap.set(wasmInstance, registry);
        }

        registry.register(this, this._inner, this);
    }

    public dispose(): void {
        if (this._inner.ptr === 0) {
            return;
        }

        this._inner.dispose();

        const registry = rigidBodyConstructionInfoRegistryMap.get(this._wasmInstance);
        registry?.unregister(this);
    }

    public get ptr(): number {
        return this._inner.ptr;
    }

    private _nullCheck(): void {
        if (this._inner.ptr === 0) {
            throw new Error("Cannot access disposed RigidBodyConstructionInfo");
        }
    }

    public get shape(): Nullable<PhysicsShape> {
        this._nullCheck();
        return this._inner.shape;
    }

    public set shape(value: Nullable<PhysicsShape>) {
        this._nullCheck();
        this._inner.shape = value;
        this._uint32Ptr.array[0x0 / Uint32Array.BYTES_PER_ELEMENT] = value ? value.ptr : 0;
    }

    public getInitialTransformToRef(result: Matrix): Matrix {
        this._nullCheck();
        const float32Ptr = this._float32Ptr.array;
        const float32Bytes = Float32Array.BYTES_PER_ELEMENT;

        result.set(
            float32Ptr[0x10 / float32Bytes],
            float32Ptr[0x14 / float32Bytes],
            float32Ptr[0x18 / float32Bytes],
            float32Ptr[0x1C / float32Bytes],
            float32Ptr[0x20 / float32Bytes],
            float32Ptr[0x24 / float32Bytes],
            float32Ptr[0x28 / float32Bytes],
            float32Ptr[0x2C / float32Bytes],
            float32Ptr[0x30 / float32Bytes],
            float32Ptr[0x34 / float32Bytes],
            float32Ptr[0x38 / float32Bytes],
            float32Ptr[0x3C / float32Bytes],
            float32Ptr[0x40 / float32Bytes],
            float32Ptr[0x44 / float32Bytes],
            float32Ptr[0x48 / float32Bytes],
            float32Ptr[0x4C / float32Bytes]
        );

        return result;
    }

    public setInitialTransform(value: Matrix): void {
        this._nullCheck();
        const float32Ptr = this._float32Ptr.array;
        const float32Bytes = Float32Array.BYTES_PER_ELEMENT;

        value.copyToArray(float32Ptr, 0x10 / float32Bytes);
    }

    public get motionType(): MotionType {
        this._nullCheck();
        return this._uint8Ptr.array[0x50 / Uint8Array.BYTES_PER_ELEMENT];
    }

    public set motionType(value: MotionType) {
        this._nullCheck();
        this._uint8Ptr.array[0x50 / Uint8Array.BYTES_PER_ELEMENT] = value;
    }

    public get mass(): number {
        this._nullCheck();
        return this._float32Ptr.array[0x54 / Float32Array.BYTES_PER_ELEMENT];
    }

    public set mass(value: number) {
        this._nullCheck();
        this._float32Ptr.array[0x54 / Float32Array.BYTES_PER_ELEMENT] = value;
    }

    public get linearDamping(): number {
        this._nullCheck();
        return this._float32Ptr.array[0x58 / Float32Array.BYTES_PER_ELEMENT];
    }

    public set linearDamping(value: number) {
        this._nullCheck();
        this._float32Ptr.array[0x58 / Float32Array.BYTES_PER_ELEMENT] = value;
    }

    public get angularDamping(): number {
        this._nullCheck();
        return this._float32Ptr.array[0x5C / Float32Array.BYTES_PER_ELEMENT];
    }

    public set angularDamping(value: number) {
        this._nullCheck();
        this._float32Ptr.array[0x5C / Float32Array.BYTES_PER_ELEMENT] = value;
    }

    public get friction(): number {
        this._nullCheck();
        return this._float32Ptr.array[0x60 / Float32Array.BYTES_PER_ELEMENT];
    }

    public set friction(value: number) {
        this._nullCheck();
        this._float32Ptr.array[0x60 / Float32Array.BYTES_PER_ELEMENT] = value;
    }

    public get restitution(): number {
        this._nullCheck();
        return this._float32Ptr.array[0x64 / Float32Array.BYTES_PER_ELEMENT];
    }

    public set restitution(value: number) {
        this._nullCheck();
        this._float32Ptr.array[0x64 / Float32Array.BYTES_PER_ELEMENT] = value;
    }

    public get linearSleepingThreshold(): number {
        this._nullCheck();
        return this._float32Ptr.array[0x68 / Float32Array.BYTES_PER_ELEMENT];
    }

    public set linearSleepingThreshold(value: number) {
        this._nullCheck();
        this._float32Ptr.array[0x68 / Float32Array.BYTES_PER_ELEMENT] = value;
    }

    public get angularSleepingThreshold(): number {
        this._nullCheck();
        return this._float32Ptr.array[0x6C / Float32Array.BYTES_PER_ELEMENT];
    }

    public set angularSleepingThreshold(value: number) {
        this._nullCheck();
        this._float32Ptr.array[0x6C / Float32Array.BYTES_PER_ELEMENT] = value;
    }

    public get collisionGroup(): number {
        this._nullCheck();
        return this._uint16Ptr.array[0x70 / Uint16Array.BYTES_PER_ELEMENT];
    }

    public set collisionGroup(value: number) {
        this._nullCheck();
        this._uint16Ptr.array[0x70 / Uint16Array.BYTES_PER_ELEMENT] = value;
    }

    public get collisionMask(): number {
        this._nullCheck();
        return this._uint16Ptr.array[0x72 / Uint16Array.BYTES_PER_ELEMENT];
    }

    public set collisionMask(value: number) {
        this._nullCheck();
        this._uint16Ptr.array[0x72 / Uint16Array.BYTES_PER_ELEMENT] = value;
    }

    public get additionalDamping(): boolean {
        this._nullCheck();
        return !!this._uint8Ptr.array[0x74 / Uint8Array.BYTES_PER_ELEMENT];
    }

    public set additionalDamping(value: boolean) {
        this._nullCheck();
        this._uint8Ptr.array[0x74 / Uint8Array.BYTES_PER_ELEMENT] = +value;
    }

    public get noContactResponse(): boolean {
        this._nullCheck();
        return !!this._uint8Ptr.array[0x75 / Uint8Array.BYTES_PER_ELEMENT];
    }

    public set noContactResponse(value: boolean) {
        this._nullCheck();
        this._uint8Ptr.array[0x75 / Uint8Array.BYTES_PER_ELEMENT] = +value;
    }

    public get disableDeactivation(): boolean {
        this._nullCheck();
        return !!this._uint8Ptr.array[0x76 / Uint8Array.BYTES_PER_ELEMENT];
    }

    public set disableDeactivation(value: boolean) {
        this._nullCheck();
        this._uint8Ptr.array[0x76 / Uint8Array.BYTES_PER_ELEMENT] = +value;
    }
}
