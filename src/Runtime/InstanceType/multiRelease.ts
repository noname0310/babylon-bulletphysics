import * as wasmBindgen from "../../wasm/mr";
import type { BulletWasmInstanceType, BulletWasmType } from "../bulletWasmInstance";

/**
 * Multithreaded release build BulletWasmInstanceType
 *
 * This wasm instance provides fast performance by performing worker-based multithreading
 *
 * Requirements for use:
 *
 * - Browser that supports WebAssembly and SharedArrayBuffer
 * - Serve page with https
 * - Use following headers in your server:
 *     ```http
 *     Cross-Origin-Opener-Policy: same-origin
 *     Cross-Origin-Embedder-Policy: require-corp
 *     ```
 */
export class BulletWasmInstanceTypeMR implements BulletWasmInstanceType {
    public getWasmInstanceInner(): BulletWasmType {
        return wasmBindgen as BulletWasmType;
    }
}
