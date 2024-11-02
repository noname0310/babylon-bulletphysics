import type { BulletWasmInstance } from "./bulletWasmInstance";
import type { RigidBodyConstructionInfo } from "./rigidBodyConstructionInfo";
import type { RigidBodyConstructionInfoList } from "./rigidBodyConstructionInfoList";

function createRigidBodyFinalizer(wasmInstance: WeakRef<BulletWasmInstance>): (ptr: number) => void {
    return (ptr: number) => {
        const instance = wasmInstance.deref();
        instance?.destroyRigidBody(ptr);
    };
}

const physicsRigidBodyRegistryMap = new WeakMap<BulletWasmInstance, FinalizationRegistry<number>>();

export class RigidBody {
    private readonly _wasmInstance: BulletWasmInstance;
    private _ptr: number;

    private _referenceCount: number;

    public constructor(wasmInstance: BulletWasmInstance, info: RigidBodyConstructionInfo);

    public constructor(wasmInstance: BulletWasmInstance, info: RigidBodyConstructionInfoList, n: number);

    public constructor(wasmInstance: BulletWasmInstance, info: RigidBodyConstructionInfo | RigidBodyConstructionInfoList, n?: number) {
        const infoPtr = n !== undefined ? (info as RigidBodyConstructionInfoList).getPtr(n) : (info as RigidBodyConstructionInfo).ptr;

        if (infoPtr === 0) {
            throw new Error("Cannot create rigid body with null pointer");
        }

        if (n !== undefined) {
            if ((info as RigidBodyConstructionInfoList).getShape(n) === null) {
                throw new Error("Cannot create rigid body with null shape");
            }
        } else {
            if ((info as RigidBodyConstructionInfo).shape === null) {
                throw new Error("Cannot create rigid body with null shape");
            }
        }

        this._wasmInstance = wasmInstance;
        this._ptr = wasmInstance.createRigidBody(infoPtr);

        this._referenceCount = 0;

        let registry = physicsRigidBodyRegistryMap.get(wasmInstance);
        if (registry === undefined) {
            registry = new FinalizationRegistry(createRigidBodyFinalizer(new WeakRef(wasmInstance)));
            physicsRigidBodyRegistryMap.set(wasmInstance, registry);
        }

        registry.register(this, this._ptr, this);
    }

    public dispose(): void {
        if (this._referenceCount > 0) {
            throw new Error("Cannot dispose rigid body while it still has references");
        }

        if (this._ptr === 0) {
            return;
        }

        this._wasmInstance.destroyRigidBody(this._ptr);
        this._ptr = 0;

        const registry = physicsRigidBodyRegistryMap.get(this._wasmInstance);
        registry?.unregister(this);
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

    private _nullCheck(): void {
        if (this._ptr === 0) {
            throw new Error("Cannot access disposed rigid body");
        }
    }

    public makeKinematic(): void {
        this._nullCheck();
        this._wasmInstance.rigidBodyMakeKinematic(this._ptr);
    }

    public restoreDynamic(): void {
        this._nullCheck();
        this._wasmInstance.rigidBodyRestoreDynamic(this._ptr);
    }
}
