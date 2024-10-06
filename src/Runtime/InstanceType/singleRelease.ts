import * as wasmBindgen from "../../wasm/sr";
import type { BulletWasmInstanceType, BulletWasmType } from "../bulletWasmInstance";

/**
 * Singlethreaded release build BulletWasmInstanceType
 *
 * Requirements for use:
 *
 * - Browser that supports WebAssembly
 */
export class BulletWasmInstanceTypeSR implements BulletWasmInstanceType {
    public getWasmInstanceInner(): BulletWasmType {
        return wasmBindgen as BulletWasmType;
    }
}
