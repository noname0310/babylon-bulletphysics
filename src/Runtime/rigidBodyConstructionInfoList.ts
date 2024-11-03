import type { Matrix } from "@babylonjs/core/Maths/math.vector";
import type { Nullable } from "@babylonjs/core/types";

import type { BulletWasmInstance } from "./bulletWasmInstance";
import type { IWasmTypedArray } from "./Misc/IWasmTypedArray";
import { MotionType } from "./motionType";
import type { PhysicsShape } from "./physicsShape";

const size = 128;

class RigidBodyConstructionInfoListInner {
    private readonly _wasmInstance: WeakRef<BulletWasmInstance>;
    private _ptr: number;
    private readonly _count: number;
    private readonly _shapeReferences: Nullable<PhysicsShape>[];

    public constructor(wasmInstance: WeakRef<BulletWasmInstance>, ptr: number, count: number) {
        this._wasmInstance = wasmInstance;
        this._ptr = ptr;
        this._count = count;
        this._shapeReferences = new Array<Nullable<PhysicsShape>>(count).fill(null);
    }

    public dispose(): void {
        if (this._ptr === 0) {
            return;
        }

        this._wasmInstance.deref()?.deallocateBuffer(this._ptr, size * this._count);
        this._ptr = 0;
        for (let i = 0; i < this._shapeReferences.length; ++i) {
            const shape = this._shapeReferences[i];
            shape?.removeReference();
        }
        this._shapeReferences.fill(null);
    }

    public get ptr(): number {
        return this._ptr;
    }

    public get count(): number {
        return this._count;
    }

    public getShape(n: number): Nullable<PhysicsShape> {
        return this._shapeReferences[n] ?? null;
    }

    public setShape(n: number, value: Nullable<PhysicsShape>): void {
        if (n < 0 || this._count <= n) {
            throw new RangeError("Index out of range");
        }

        const previousShape = this._shapeReferences[n];
        if (previousShape) {
            previousShape.removeReference();
        }

        this._shapeReferences[n] = value;

        if (value) {
            value.addReference();
        }
    }
}

function rigidBodyConstructionInfoListFinalizer(inner: RigidBodyConstructionInfoListInner): void {
    inner.dispose();
}

const rigidBodyConstructionInfoListRegistryMap = new WeakMap<BulletWasmInstance, FinalizationRegistry<RigidBodyConstructionInfoListInner>>();

export class RigidBodyConstructionInfoList {
    private readonly _wasmInstance: BulletWasmInstance;

    private readonly _uint32Ptr: IWasmTypedArray<Uint32Array>;
    private readonly _float32Ptr: IWasmTypedArray<Float32Array>;
    private readonly _uint8Ptr: IWasmTypedArray<Uint8Array>;
    private readonly _uint16Ptr: IWasmTypedArray<Uint16Array>;

    private readonly _inner: RigidBodyConstructionInfoListInner;

    public constructor(wasmInstance: BulletWasmInstance, count: number) {
        this._wasmInstance = wasmInstance;

        const uint32Bytes = Uint32Array.BYTES_PER_ELEMENT;
        const float32Bytes = Float32Array.BYTES_PER_ELEMENT;
        const uint8Bytes = Uint8Array.BYTES_PER_ELEMENT;
        const uint16Bytes = Uint16Array.BYTES_PER_ELEMENT;

        // Allocate buffer
        const ptr = wasmInstance.allocateBuffer(size * count);
        this._uint32Ptr = wasmInstance.createTypedArray(Uint32Array, ptr, size / uint32Bytes * count);
        this._float32Ptr = wasmInstance.createTypedArray(Float32Array, ptr, size / float32Bytes * count);
        this._uint8Ptr = wasmInstance.createTypedArray(Uint8Array, ptr, size / uint8Bytes * count);
        this._uint16Ptr = wasmInstance.createTypedArray(Uint16Array, ptr, size / uint16Bytes * count);

        this._inner = new RigidBodyConstructionInfoListInner(new WeakRef(wasmInstance), ptr, count);

        // Initialize to default values
        const uint32Ptr = this._uint32Ptr.array;
        const float32Ptr = this._float32Ptr.array;
        const uint8Ptr = this._uint8Ptr.array;
        const uint16Ptr = this._uint16Ptr.array;

        for (let i = 0; i < count; ++i) {
            const offset = i * size;

            // shape
            uint32Ptr[(offset + 0x0) / uint32Bytes] = 0;

            // initial_transform
            float32Ptr[(offset + 0x10) / float32Bytes] = 1;
            float32Ptr[(offset + 0x14) / float32Bytes] = 0;
            float32Ptr[(offset + 0x18) / float32Bytes] = 0;
            float32Ptr[(offset + 0x1C) / float32Bytes] = 0;

            float32Ptr[(offset + 0x20) / float32Bytes] = 0;
            float32Ptr[(offset + 0x24) / float32Bytes] = 1;
            float32Ptr[(offset + 0x28) / float32Bytes] = 0;
            float32Ptr[(offset + 0x2C) / float32Bytes] = 0;

            float32Ptr[(offset + 0x30) / float32Bytes] = 0;
            float32Ptr[(offset + 0x34) / float32Bytes] = 0;
            float32Ptr[(offset + 0x38) / float32Bytes] = 1;
            float32Ptr[(offset + 0x3C) / float32Bytes] = 0;

            float32Ptr[(offset + 0x40) / float32Bytes] = 0;
            float32Ptr[(offset + 0x44) / float32Bytes] = 0;
            float32Ptr[(offset + 0x48) / float32Bytes] = 0;
            float32Ptr[(offset + 0x4C) / float32Bytes] = 1;

            // motionType
            uint8Ptr[(offset + 0x50) / uint8Bytes] = MotionType.Dynamic;

            // mass
            float32Ptr[(offset + 0x54) / float32Bytes] = 1.0;

            // linearDamping
            float32Ptr[(offset + 0x58) / float32Bytes] = 0;

            // angularDamping
            float32Ptr[(offset + 0x5C) / float32Bytes] = 0;

            // friction
            float32Ptr[(offset + 0x60) / float32Bytes] = 0.5;

            // restitution
            float32Ptr[(offset + 0x64) / float32Bytes] = 0.0;

            // linearSleepingThreshold
            float32Ptr[(offset + 0x68) / float32Bytes] = 0.0;

            // angularSleepingThreshold
            float32Ptr[(offset + 0x6C) / float32Bytes] = 1.0;

            // collisionGroup
            uint16Ptr[(offset + 0x70) / uint16Bytes] = 0;

            // collisionMask
            uint16Ptr[(offset + 0x72) / uint16Bytes] = 0;

            // additionalDamping
            uint8Ptr[(offset + 0x74) / uint8Bytes] = +false;

            // noContactResponse
            uint8Ptr[(offset + 0x75) / uint8Bytes] = +false;

            // disableDeactivation
            uint8Ptr[(offset + 0x76) / uint8Bytes] = +false;
        }


        // finalization registry
        let registry = rigidBodyConstructionInfoListRegistryMap.get(wasmInstance);
        if (registry === undefined) {
            registry = new FinalizationRegistry(rigidBodyConstructionInfoListFinalizer);
            rigidBodyConstructionInfoListRegistryMap.set(wasmInstance, registry);
        }

        registry.register(this, this._inner, this);
    }

    public dispose(): void {
        if (this._inner.ptr === 0) {
            return;
        }

        this._inner.dispose();

        const registry = rigidBodyConstructionInfoListRegistryMap.get(this._wasmInstance);
        registry?.unregister(this);
    }

    public get ptr(): number {
        return this._inner.ptr;
    }

    public get count(): number {
        return this._inner.count;
    }

    public getPtr(n: number): number {
        this._nullCheck();
        return this._inner.ptr + n * size;
    }

    private _nullCheck(): void {
        if (this._inner.ptr === 0) {
            throw new Error("Cannot access disposed RigidBodyConstructionInfo");
        }
    }

    public getShape(n: number): Nullable<PhysicsShape> {
        this._nullCheck();
        return this._inner.getShape(n);
    }

    public setShape(n: number, value: Nullable<PhysicsShape>): void {
        this._nullCheck();
        this._inner.setShape(n, value);

        const offset = n * size;
        this._uint32Ptr.array[(offset + 0x0) / Uint32Array.BYTES_PER_ELEMENT] = value ? value.ptr : 0;
    }

    public getInitialTransformToRef(n: number, result: Matrix): Matrix {
        this._nullCheck();
        const offset = n * size;
        const float32Ptr = this._float32Ptr.array;
        const float32Bytes = Float32Array.BYTES_PER_ELEMENT;

        result.set(
            float32Ptr[(offset + 0x10) / float32Bytes],
            float32Ptr[(offset + 0x14) / float32Bytes],
            float32Ptr[(offset + 0x18) / float32Bytes],
            float32Ptr[(offset + 0x1C) / float32Bytes],
            float32Ptr[(offset + 0x20) / float32Bytes],
            float32Ptr[(offset + 0x24) / float32Bytes],
            float32Ptr[(offset + 0x28) / float32Bytes],
            float32Ptr[(offset + 0x2C) / float32Bytes],
            float32Ptr[(offset + 0x30) / float32Bytes],
            float32Ptr[(offset + 0x34) / float32Bytes],
            float32Ptr[(offset + 0x38) / float32Bytes],
            float32Ptr[(offset + 0x3C) / float32Bytes],
            float32Ptr[(offset + 0x40) / float32Bytes],
            float32Ptr[(offset + 0x44) / float32Bytes],
            float32Ptr[(offset + 0x48) / float32Bytes],
            float32Ptr[(offset + 0x4C) / float32Bytes]
        );

        return result;
    }

    public setInitialTransform(n: number, value: Matrix): void {
        this._nullCheck();
        const offset = n * size;
        const float32Ptr = this._float32Ptr.array;
        const float32Bytes = Float32Array.BYTES_PER_ELEMENT;

        value.copyToArray(float32Ptr, (offset + 0x10) / float32Bytes);
    }

    public getMotionType(n: number): MotionType {
        this._nullCheck();
        const offset = n * size;
        return this._uint8Ptr.array[(offset + 0x50) / Uint8Array.BYTES_PER_ELEMENT];
    }

    public setMotionType(n: number, value: MotionType): void {
        this._nullCheck();
        const offset = n * size;
        this._uint8Ptr.array[(offset + 0x50) / Uint8Array.BYTES_PER_ELEMENT] = value;
    }

    public getMass(n: number): number {
        this._nullCheck();

        const offset = n * size;
        return this._float32Ptr.array[(offset + 0x54) / Float32Array.BYTES_PER_ELEMENT];
    }

    public setMass(n: number, value: number): void {
        this._nullCheck();
        const offset = n * size;
        this._float32Ptr.array[(offset + 0x54) / Float32Array.BYTES_PER_ELEMENT] = value;
    }

    public getLinearDamping(n: number): number {
        this._nullCheck();
        const offset = n * size;
        return this._float32Ptr.array[(offset + 0x58) / Float32Array.BYTES_PER_ELEMENT];
    }

    public setLinearDamping(n: number, value: number): void {
        this._nullCheck();
        const offset = n * size;
        this._float32Ptr.array[(offset + 0x58) / Float32Array.BYTES_PER_ELEMENT] = value;
    }

    public getAngularDamping(n: number): number {
        this._nullCheck();
        const offset = n * size;
        return this._float32Ptr.array[(offset + 0x5C) / Float32Array.BYTES_PER_ELEMENT];
    }

    public setAngularDamping(n: number, value: number): void {
        this._nullCheck();
        const offset = n * size;
        this._float32Ptr.array[(offset + 0x5C) / Float32Array.BYTES_PER_ELEMENT] = value;
    }

    public getFriction(n: number): number {
        this._nullCheck();
        const offset = n * size;
        return this._float32Ptr.array[(offset + 0x60) / Float32Array.BYTES_PER_ELEMENT];
    }

    public setFriction(n: number, value: number): void {
        this._nullCheck();
        const offset = n * size;
        this._float32Ptr.array[(offset + 0x60) / Float32Array.BYTES_PER_ELEMENT] = value;
    }

    public getRestitution(n: number): number {
        this._nullCheck();
        const offset = n * size;
        return this._float32Ptr.array[(offset + 0x64) / Float32Array.BYTES_PER_ELEMENT];
    }

    public setRestitution(n: number, value: number): void {
        this._nullCheck();
        const offset = n * size;
        this._float32Ptr.array[(offset + 0x64) / Float32Array.BYTES_PER_ELEMENT] = value;
    }

    public getLinearSleepingThreshold(n: number): number {
        this._nullCheck();
        const offset = n * size;
        return this._float32Ptr.array[(offset + 0x68) / Float32Array.BYTES_PER_ELEMENT];
    }

    public setLinearSleepingThreshold(n: number, value: number): void {
        this._nullCheck();
        const offset = n * size;
        this._float32Ptr.array[(offset + 0x68) / Float32Array.BYTES_PER_ELEMENT] = value;
    }

    public getAngularSleepingThreshold(n: number): number {
        this._nullCheck();
        const offset = n * size;
        return this._float32Ptr.array[(offset + 0x6C) / Float32Array.BYTES_PER_ELEMENT];
    }

    public setAngularSleepingThreshold(n: number, value: number): void {
        this._nullCheck();
        const offset = n * size;
        this._float32Ptr.array[(offset + 0x6C) / Float32Array.BYTES_PER_ELEMENT] = value;
    }

    public getCollisionGroup(n: number): number {
        this._nullCheck();
        const offset = n * size;
        return this._uint16Ptr.array[(offset + 0x70) / Uint16Array.BYTES_PER_ELEMENT];
    }

    public setCollisionGroup(n: number, value: number): void {
        this._nullCheck();
        const offset = n * size;
        this._uint16Ptr.array[(offset + 0x70) / Uint16Array.BYTES_PER_ELEMENT] = value;
    }

    public getCollisionMask(n: number): number {
        this._nullCheck();
        const offset = n * size;
        return this._uint16Ptr.array[(offset + 0x72) / Uint16Array.BYTES_PER_ELEMENT];
    }

    public setCollisionMask(n: number, value: number): void {
        this._nullCheck();
        const offset = n * size;
        this._uint16Ptr.array[(offset + 0x72) / Uint16Array.BYTES_PER_ELEMENT] = value;
    }

    public getAdditionalDamping(n: number): boolean {
        this._nullCheck();
        const offset = n * size;
        return !!this._uint8Ptr.array[(offset + 0x74) / Uint8Array.BYTES_PER_ELEMENT];
    }

    public setAdditionalDamping(n: number, value: boolean): void {
        this._nullCheck();
        const offset = n * size;
        this._uint8Ptr.array[(offset + 0x74) / Uint8Array.BYTES_PER_ELEMENT] = +value;
    }

    public getNoContactResponse(n: number): boolean {
        this._nullCheck();
        const offset = n * size;
        return !!this._uint8Ptr.array[(offset + 0x75) / Uint8Array.BYTES_PER_ELEMENT];
    }

    public setNoContactResponse(n: number, value: boolean): void {
        this._nullCheck();
        const offset = n * size;
        this._uint8Ptr.array[(offset + 0x75) / Uint8Array.BYTES_PER_ELEMENT] = +value;
    }

    public getDisableDeactivation(n: number): boolean {
        this._nullCheck();
        const offset = n * size;
        return !!this._uint8Ptr.array[(offset + 0x76) / Uint8Array.BYTES_PER_ELEMENT];
    }

    public setDisableDeactivation(n: number, value: boolean): void {
        this._nullCheck();
        const offset = n * size;
        this._uint8Ptr.array[(offset + 0x76) / Uint8Array.BYTES_PER_ELEMENT] = +value;
    }
}
