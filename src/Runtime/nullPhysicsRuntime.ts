import type { BulletWasmInstance } from "./bulletWasmInstance";
import type { IRuntime } from "./IRuntime";

class NullSpinlock {
    public wait(): void { }
}

export class NullPhysicsRuntime implements IRuntime {
    /**
     * @internal
     */
    public readonly wasmInstance: BulletWasmInstance;

    /**
     * Spinlock for the physics runtime to synchronize access to the physics world state
     * @internal
     */
    public readonly lock: NullSpinlock;

    /**
     * Creates a new physics runtime
     * @param wasmInstance The Bullet WASM instance
     */
    public constructor(wasmInstance: BulletWasmInstance) {
        this.wasmInstance = wasmInstance;
        this.lock = new NullSpinlock();
    }
}
