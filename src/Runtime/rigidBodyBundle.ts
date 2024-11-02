import type { BulletWasmInstance } from "./bulletWasmInstance";
import type { RigidBodyConstructionInfoList } from "./rigidBodyConstructionInfoList";

function createRigidBodyBundleFinalizer(wasmInstance: WeakRef<BulletWasmInstance>): (ptr: number) => void {
    return (ptr: number) => {
        const instance = wasmInstance.deref();
        instance?.destroyRigidBodyBundle(ptr);
    };
}

const physicsRigidBodyBundleRegistryMap = new WeakMap<BulletWasmInstance, FinalizationRegistry<number>>();

export class RigidBodyBundle {
    private readonly _wasmInstance: BulletWasmInstance;
    private _ptr: number;
    private readonly _count: number;

    private _referenceCount: number;

    public constructor(wasmInstance: BulletWasmInstance, info: RigidBodyConstructionInfoList) {
        if (info.ptr === 0) {
            throw new Error("Cannot create rigid body bundle with null pointer");
        }
        const count = info.count;
        for (let i = 0; i < count; ++i) {
            if (info.getShape(i) === null) {
                throw new Error("Cannot create rigid body bundle with null shape");
            }
        }

        this._wasmInstance = wasmInstance;
        this._ptr = wasmInstance.createRigidBodyBundle(info.ptr, info.count);
        this._count = count;

        this._referenceCount = 0;

        let registry = physicsRigidBodyBundleRegistryMap.get(wasmInstance);
        if (registry === undefined) {
            registry = new FinalizationRegistry(createRigidBodyBundleFinalizer(new WeakRef(wasmInstance)));
            physicsRigidBodyBundleRegistryMap.set(wasmInstance, registry);
        }

        registry.register(this, this._ptr, this);
    }

    public dispose(): void {
        if (this._referenceCount > 0) {
            throw new Error("Cannot dispose rigid body bundle while it still has references");
        }

        if (this._ptr === 0) {
            return;
        }

        this._wasmInstance.destroyRigidBodyBundle(this._ptr);
        this._ptr = 0;

        const registry = physicsRigidBodyBundleRegistryMap.get(this._wasmInstance);
        registry?.unregister(this);
    }

    public get ptr(): number {
        return this._ptr;
    }

    public get count(): number {
        return this._count;
    }

    public addReference(): void {
        this._referenceCount += 1;
    }

    public removeReference(): void {
        this._referenceCount -= 1;
    }

    private _nullCheck(): void {
        if (this._ptr === 0) {
            throw new Error("Cannot access disposed rigid body bundle");
        }
    }

    public makeKinematic(index: number): void {
        this._nullCheck();
        if (index < 0 || this._count <= index) {
            throw new RangeError("Index out of range");
        }

        this._wasmInstance.rigidBodyBundleMakeKinematic(this._ptr, index);
    }

    public restoreDynamic(index: number): void {
        this._nullCheck();
        if (index < 0 || this._count <= index) {
            throw new RangeError("Index out of range");
        }

        this._wasmInstance.rigidBodyBundleRestoreDynamic(this._ptr, index);
    }
}
