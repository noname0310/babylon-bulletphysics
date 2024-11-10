import type { BulletWasmInstance } from "./bulletWasmInstance";

export abstract class Constraint {
    protected readonly _wasmInstance: BulletWasmInstance;

    protected constructor(wasmInstance: BulletWasmInstance) {
        this._wasmInstance = wasmInstance;
    }
}
