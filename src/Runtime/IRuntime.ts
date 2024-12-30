import type { BulletWasmInstance } from "./bulletWasmInstance";
import type { IWasmSpinLock } from "./Misc/IWasmSpinLock";

/**
 * Represents the runtime for the physics engine
 */
export interface IRuntime {
    /**
     * The Bullet WASM instance
     */
    readonly wasmInstance: BulletWasmInstance;

    /**
     * Spinlock for the runtime to synchronize access to the state
     *
     */
    readonly lock: IWasmSpinLock;
}
