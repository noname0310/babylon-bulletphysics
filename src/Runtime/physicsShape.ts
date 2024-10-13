import type { Vector3 } from "@babylonjs/core/Maths/math.vector";

import type { BulletWasmInstance } from "./bulletWasmInstance";

export abstract class PhysicsShape {
    protected readonly _wasmInstance: BulletWasmInstance;
    protected _ptr: number;

    public constructor(wasmInstance: BulletWasmInstance, ptr: number) {
        this._wasmInstance = wasmInstance;
        this._ptr = ptr;
    }

    public abstract dispose(): void;

    public get ptr(): number {
        return this._ptr;
    }
}

function createBoxShapeFinalizer(wasmInstance: WeakRef<BulletWasmInstance>): (ptr: number) => void {
    return (ptr: number) => {
        const instance = wasmInstance.deref();
        instance?.destroyShape(ptr);
    };
}

const physicsBoxShapeRegistryMap = new WeakMap<BulletWasmInstance, FinalizationRegistry<number>>();

export class PhysicsBoxShape extends PhysicsShape {
    public constructor(wasmInstance: BulletWasmInstance, size: Vector3) {
        const ptr = wasmInstance.createBoxShape(size.x, size.y, size.z);
        super(wasmInstance, ptr);

        let registry = physicsBoxShapeRegistryMap.get(wasmInstance);
        if (registry === undefined) {
            registry = new FinalizationRegistry(createBoxShapeFinalizer(new WeakRef(wasmInstance)));
            physicsBoxShapeRegistryMap.set(wasmInstance, registry);
        }

        registry.register(this, this._ptr, this);
    }

    public dispose(): void {
        if (this._ptr === 0) {
            return;
        }

        this._wasmInstance.destroyShape(this._ptr);
        this._ptr = 0;

        const registry = physicsBoxShapeRegistryMap.get(this._wasmInstance);
        registry?.unregister(this);
    }
}

function createSphereShapeFinalizer(wasmInstance: WeakRef<BulletWasmInstance>): (ptr: number) => void {
    return (ptr: number) => {
        const instance = wasmInstance.deref();
        instance?.destroyShape(ptr);
    };
}

const physicsSphereShapeRegistryMap = new WeakMap<BulletWasmInstance, FinalizationRegistry<number>>();

export class PhysicsSphereShape extends PhysicsShape {
    public constructor(wasmInstance: BulletWasmInstance, radius: number) {
        const ptr = wasmInstance.createSphereShape(radius);
        super(wasmInstance, ptr);

        let registry = physicsSphereShapeRegistryMap.get(wasmInstance);
        if (registry === undefined) {
            registry = new FinalizationRegistry(createSphereShapeFinalizer(new WeakRef(wasmInstance)));
            physicsSphereShapeRegistryMap.set(wasmInstance, registry);
        }

        registry.register(this, this._ptr, this);
    }

    public dispose(): void {
        if (this._ptr === 0) {
            return;
        }

        this._wasmInstance.destroyShape(this._ptr);
        this._ptr = 0;

        const registry = physicsSphereShapeRegistryMap.get(this._wasmInstance);
        registry?.unregister(this);
    }
}

function createCapsuleShapeFinalizer(wasmInstance: WeakRef<BulletWasmInstance>): (ptr: number) => void {
    return (ptr: number) => {
        const instance = wasmInstance.deref();
        instance?.destroyShape(ptr);
    };
}

const physicsCapsuleShapeRegistryMap = new WeakMap<BulletWasmInstance, FinalizationRegistry<number>>();

export class PhysicsCapsuleShape extends PhysicsShape {
    public constructor(wasmInstance: BulletWasmInstance, radius: number, height: number) {
        const ptr = wasmInstance.createCapsuleShape(radius, height);
        super(wasmInstance, ptr);

        let registry = physicsCapsuleShapeRegistryMap.get(wasmInstance);
        if (registry === undefined) {
            registry = new FinalizationRegistry(createCapsuleShapeFinalizer(new WeakRef(wasmInstance)));
            physicsCapsuleShapeRegistryMap.set(wasmInstance, registry);
        }

        registry.register(this, this._ptr, this);
    }

    public dispose(): void {
        if (this._ptr === 0) {
            return;
        }

        this._wasmInstance.destroyShape(this._ptr);
        this._ptr = 0;

        const registry = physicsCapsuleShapeRegistryMap.get(this._wasmInstance);
        registry?.unregister(this);
    }
}

function createStaticPlaneShapeFinalizer(wasmInstance: WeakRef<BulletWasmInstance>): (ptr: number) => void {
    return (ptr: number) => {
        const instance = wasmInstance.deref();
        instance?.destroyShape(ptr);
    };
}

const physicsStaticPlaneShapeRegistryMap = new WeakMap<BulletWasmInstance, FinalizationRegistry<number>>();

export class PhysicsStaticPlaneShape extends PhysicsShape {
    public constructor(wasmInstance: BulletWasmInstance, normal: Vector3, planeConstant: number) {
        const ptr = wasmInstance.createStaticPlaneShape(normal.x, normal.y, normal.z, planeConstant);
        super(wasmInstance, ptr);

        let registry = physicsStaticPlaneShapeRegistryMap.get(wasmInstance);
        if (registry === undefined) {
            registry = new FinalizationRegistry(createStaticPlaneShapeFinalizer(new WeakRef(wasmInstance)));
            physicsStaticPlaneShapeRegistryMap.set(wasmInstance, registry);
        }

        registry.register(this, this._ptr, this);
    }

    public dispose(): void {
        if (this._ptr === 0) {
            return;
        }

        this._wasmInstance.destroyShape(this._ptr);
        this._ptr = 0;

        const registry = physicsStaticPlaneShapeRegistryMap.get(this._wasmInstance);
        registry?.unregister(this);
    }
}
