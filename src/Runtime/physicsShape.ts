import type { Vector3 } from "@babylonjs/core/Maths/math.vector";

import type { BulletWasmInstance } from "./bulletWasmInstance";

class PhysicsShapeInner {
    private readonly _wasmInstance: WeakRef<BulletWasmInstance>;
    private _ptr: number;
    private _referenceCount: number;

    public constructor(wasmInstance: WeakRef<BulletWasmInstance>, ptr: number) {
        this._wasmInstance = wasmInstance;
        this._ptr = ptr;
        this._referenceCount = 0;
    }

    public dispose(): void {
        if (this._referenceCount > 0) {
            throw new Error("Cannot dispose shape while it still has references");
        }

        if (this._ptr === 0) {
            return;
        }

        this._wasmInstance.deref()?.destroyShape(this._ptr);
        this._ptr = 0;
    }

    public get ptr(): number {
        return this._ptr;
    }

    public addReference(): void {
        this._referenceCount += 1;
    }

    public removeReference(): void {
        this._referenceCount -= 1;
    }
}

function physicsShapeFinalizer(inner: PhysicsShapeInner): void {
    inner.dispose();
}

const physicsShapeRegistryMap = new WeakMap<BulletWasmInstance, FinalizationRegistry<PhysicsShapeInner>>();

export abstract class PhysicsShape {
    protected readonly _wasmInstance: BulletWasmInstance;
    protected readonly _inner: PhysicsShapeInner;

    protected constructor(wasmInstance: BulletWasmInstance, ptr: number) {
        this._wasmInstance = wasmInstance;
        this._inner = new PhysicsShapeInner(new WeakRef(wasmInstance), ptr);

        let registry = physicsShapeRegistryMap.get(wasmInstance);
        if (registry === undefined) {
            registry = new FinalizationRegistry(physicsShapeFinalizer);
            physicsShapeRegistryMap.set(wasmInstance, registry);
        }

        registry.register(this, this._inner, this);
    }

    public dispose(): void {
        if (this._inner.ptr === 0) {
            return;
        }

        this._inner.dispose();

        const registry = physicsShapeRegistryMap.get(this._wasmInstance);
        registry?.unregister(this);
    }

    public get ptr(): number {
        return this._inner.ptr;
    }

    public addReference(): void {
        this._inner.addReference();
    }

    public removeReference(): void {
        this._inner.removeReference();
    }
}

export class PhysicsBoxShape extends PhysicsShape {
    public constructor(wasmInstance: BulletWasmInstance, size: Vector3) {
        const ptr = wasmInstance.createBoxShape(size.x, size.y, size.z);
        super(wasmInstance, ptr);
    }
}

export class PhysicsSphereShape extends PhysicsShape {
    public constructor(wasmInstance: BulletWasmInstance, radius: number) {
        const ptr = wasmInstance.createSphereShape(radius);
        super(wasmInstance, ptr);
    }
}

export class PhysicsCapsuleShape extends PhysicsShape {
    public constructor(wasmInstance: BulletWasmInstance, radius: number, height: number) {
        const ptr = wasmInstance.createCapsuleShape(radius, height);
        super(wasmInstance, ptr);
    }
}

export class PhysicsStaticPlaneShape extends PhysicsShape {
    public constructor(wasmInstance: BulletWasmInstance, normal: Vector3, planeConstant: number) {
        const ptr = wasmInstance.createStaticPlaneShape(normal.x, normal.y, normal.z, planeConstant);
        super(wasmInstance, ptr);
    }
}
