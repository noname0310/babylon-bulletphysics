import * as wasmBindgen from "../../wasm/md";
import type { BulletWasmInstanceType, BulletWasmType } from "../bulletWasmInstance";

/**
 * Multithreaded debug build BulletWasmInstanceType
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
export class BulletWasmInstanceTypeMD implements BulletWasmInstanceType {
    public getWasmInstanceInner(): BulletWasmType {
        return wasmBindgen as BulletWasmType;
    }
}
