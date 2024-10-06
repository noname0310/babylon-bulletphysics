import * as wasmBindgen from "../../wasm/sd";
import type { BulletWasmInstanceType, BulletWasmType } from "../bulletWasmInstance";

/**
 * Singlethreaded debug build BulletWasmInstanceType
 *
 * Requirements for use:
 *
 * - Browser that supports WebAssembly
 */
export class BulletWasmInstanceTypeSD implements BulletWasmInstanceType {
    public getWasmInstanceInner(): BulletWasmType {
        return wasmBindgen as BulletWasmType;
    }
}
