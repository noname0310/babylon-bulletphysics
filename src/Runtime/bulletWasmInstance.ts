import type { IWasmTypedArray } from "./Misc/IWasmTypedArray";
import { WasmSharedTypedArray } from "./Misc/wasmSharedTypedArray";
import type { TypedArray, TypedArrayConstructor } from "./Misc/wasmTypedArray";
import { WasmTypedArray } from "./Misc/wasmTypedArray";

/* eslint-disable @typescript-eslint/consistent-type-imports */
export type BulletWasmType =
    typeof import("../wasm/mr") |
    typeof import("../wasm/md") |
    typeof import("../wasm/sr") |
    typeof import("../wasm/sd");
/* eslint-enable @typescript-eslint/consistent-type-imports */

/**
 * Bullet WASM instance
 *
 * entry point of the Bullet WASM
 */
export interface BulletWasmInstance extends BulletWasmType {
    memory: WebAssembly.Memory;

    createTypedArray<T extends TypedArray>(typedArrayConstructor: TypedArrayConstructor<T>, byteOffset: number, length: number): IWasmTypedArray<T>;
}

export interface BulletWasmInstanceType {
    /**
     * Get Bullet wasm-bindgen instance
     * @returns Bullet wasm-bindgen instance
     */
    getWasmInstanceInner(): BulletWasmType;
}

const wasmInstanceMap = new WeakMap<BulletWasmType, Promise<BulletWasmInstance>>();

/**
 * Load Bullet WASM instance
 *
 * Wasm instance type is determined by the argument instanceType
 *
 * For example, if you want to use most stable Bullet WASM instance, pass BulletWasmDebugInstanceType to instanceType
 * @param instanceType Bullet WASM instance type
 * @param threadCount Thread count for WASM threading (default: navigator.hardwareConcurrency). threadCount must be greater than 0
 * @returns Bullet WASM instance
 */
export async function getBulletWasmInstance(
    instanceType: BulletWasmInstanceType,
    threadCount = navigator.hardwareConcurrency
): Promise<BulletWasmInstance> {
    const wasmBindgen = instanceType.getWasmInstanceInner();

    {
        const instance = wasmInstanceMap.get(wasmBindgen);
        if (instance !== undefined) return instance;
    }

    let resolvePromise: (instance: BulletWasmInstance | PromiseLike<BulletWasmInstance>) => void = null!;
    wasmInstanceMap.set(wasmBindgen, new Promise<BulletWasmInstance>(resolve => resolvePromise = resolve));

    const bulletWasmInstance = {...wasmBindgen} as BulletWasmInstance;

    const initOutput = await bulletWasmInstance.default({});

    bulletWasmInstance.init();
    const memory = initOutput.memory;

    function createTypedArray<T extends TypedArray>(typedArrayConstructor: TypedArrayConstructor<T>, byteOffset: number, length: number): IWasmTypedArray<T> {
        return new WasmTypedArray(typedArrayConstructor, memory, byteOffset, length);
    }

    function createSharedTypedArray<T extends TypedArray>(typedArrayConstructor: TypedArrayConstructor<T>, byteOffset: number, length: number): IWasmTypedArray<T> {
        return new WasmSharedTypedArray(typedArrayConstructor, memory, byteOffset, length);
    }

    bulletWasmInstance.memory = memory;
    if (memory.buffer instanceof ArrayBuffer) {
        bulletWasmInstance.createTypedArray = createTypedArray;
    } else {
        bulletWasmInstance.createTypedArray = createSharedTypedArray;
    }

    await bulletWasmInstance.initThreadPool?.(threadCount);

    resolvePromise(bulletWasmInstance);

    return bulletWasmInstance;
}
