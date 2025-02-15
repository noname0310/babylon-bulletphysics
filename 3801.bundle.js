"use strict";
(self["webpackChunkbabylon_bulletphysics"] = self["webpackChunkbabylon_bulletphysics"] || []).push([[3801],{

/***/ 5228:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: () => (/* binding */ ImmediateRigidBodyBundleImpl)
/* harmony export */ });
class ImmediateRigidBodyBundleImpl {
    shouldSync;
    _count;
    constructor(count) {
        this.shouldSync = true;
        this._count = count;
    }
    setTransformMatrixFromArray(motionStatesPtr, index, array, offset = 0) {
        const m = motionStatesPtr.array;
        const mOffset = index * 20 /* Constants.MotionStateSizeInFloat32Array */;
        m[mOffset + 4] = array[offset];
        m[mOffset + 8] = array[offset + 1];
        m[mOffset + 12] = array[offset + 2];
        m[mOffset + 5] = array[offset + 4];
        m[mOffset + 9] = array[offset + 5];
        m[mOffset + 13] = array[offset + 6];
        m[mOffset + 6] = array[offset + 8];
        m[mOffset + 10] = array[offset + 9];
        m[mOffset + 14] = array[offset + 10];
        m[mOffset + 16] = array[offset + 12];
        m[mOffset + 17] = array[offset + 13];
        m[mOffset + 18] = array[offset + 14];
    }
    setTransformMatricesFromArray(motionStatesPtr, array, offset = 0) {
        const m = motionStatesPtr.array;
        const count = this._count;
        let mOffset = 0;
        let aOffset = offset;
        for (let i = 0; i < count; ++i) {
            m[mOffset + 4] = array[aOffset];
            m[mOffset + 8] = array[aOffset + 1];
            m[mOffset + 12] = array[aOffset + 2];
            m[mOffset + 5] = array[aOffset + 4];
            m[mOffset + 9] = array[aOffset + 5];
            m[mOffset + 13] = array[aOffset + 6];
            m[mOffset + 6] = array[aOffset + 8];
            m[mOffset + 10] = array[aOffset + 9];
            m[mOffset + 14] = array[aOffset + 10];
            m[mOffset + 16] = array[aOffset + 12];
            m[mOffset + 17] = array[aOffset + 13];
            m[mOffset + 18] = array[aOffset + 14];
            mOffset += 20 /* Constants.MotionStateSizeInFloat32Array */;
            aOffset += 16;
        }
    }
}


/***/ }),

/***/ 94444:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   x: () => (/* binding */ ImmediateRigidBodyImpl)
/* harmony export */ });
class ImmediateRigidBodyImpl {
    shouldSync;
    constructor() {
        this.shouldSync = true;
    }
    setTransformMatrixFromArray(motionStatePtr, array, offset = 0) {
        const m = motionStatePtr.array;
        m[4] = array[offset];
        m[8] = array[offset + 1];
        m[12] = array[offset + 2];
        m[5] = array[offset + 4];
        m[9] = array[offset + 5];
        m[13] = array[offset + 6];
        m[6] = array[offset + 8];
        m[10] = array[offset + 9];
        m[14] = array[offset + 10];
        m[16] = array[offset + 12];
        m[17] = array[offset + 13];
        m[18] = array[offset + 14];
    }
}


/***/ }),

/***/ 46738:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  e: () => (/* binding */ getBulletWasmInstance)
});

;// ./src/Runtime/Misc/wasmSharedTypedArray.ts
/**
 * Safe typed array pointer for WASM shared memory
 */
class WasmSharedTypedArray {
    array;
    /**
     * Create a safe typed array pointer for WASM shared memory
     *
     * @param typedArrayConstructor typed array constructor
     * @param memory WebAssembly memory
     * @param byteOffset byte offset of the typed array
     * @param length length of the typed array
     */
    constructor(typedArrayConstructor, memory, byteOffset, length) {
        this.array = new typedArrayConstructor(memory.buffer, byteOffset, length);
    }
}

;// ./src/Runtime/Misc/wasmTypedArray.ts
/**
 * Safe typed array pointer for WASM
 */
class WasmTypedArray {
    _memory;
    _byteOffset;
    _length;
    _array;
    /**
     * Create a safe typed array pointer for WASM
     *
     * @param typedArrayConstructor typed array constructor
     * @param memory WebAssembly memory
     * @param byteOffset byte offset of the typed array
     * @param length length of the typed array
     */
    constructor(typedArrayConstructor, memory, byteOffset, length) {
        this._memory = memory;
        this._byteOffset = byteOffset;
        this._length = length;
        this._array = length === 0
            ? new typedArrayConstructor(0)
            : new typedArrayConstructor(memory.buffer, byteOffset, length);
    }
    /**
     * Get the typed array
     */
    get array() {
        if (this._array.length !== this._length) {
            this._array = new this._array.constructor(this._memory.buffer, this._byteOffset, this._length);
        }
        return this._array;
    }
}

;// ./src/Runtime/bulletWasmInstance.ts


const wasmInstanceMap = new WeakMap();
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
async function getBulletWasmInstance(instanceType, threadCount = navigator.hardwareConcurrency) {
    const wasmBindgen = instanceType.getWasmInstanceInner();
    {
        const instance = wasmInstanceMap.get(wasmBindgen);
        if (instance !== undefined)
            return instance;
    }
    let resolvePromise = null;
    wasmInstanceMap.set(wasmBindgen, new Promise(resolve => resolvePromise = resolve));
    const bulletWasmInstance = { ...wasmBindgen };
    const initOutput = await bulletWasmInstance.default({});
    bulletWasmInstance.init();
    const memory = initOutput.memory;
    function createTypedArray(typedArrayConstructor, byteOffset, length) {
        return new WasmTypedArray(typedArrayConstructor, memory, byteOffset, length);
    }
    function createSharedTypedArray(typedArrayConstructor, byteOffset, length) {
        return new WasmSharedTypedArray(typedArrayConstructor, memory, byteOffset, length);
    }
    bulletWasmInstance.memory = memory;
    if (memory.buffer instanceof ArrayBuffer) {
        bulletWasmInstance.createTypedArray = createTypedArray;
    }
    else {
        bulletWasmInstance.createTypedArray = createSharedTypedArray;
    }
    await bulletWasmInstance.initThreadPool?.(threadCount);
    resolvePromise(bulletWasmInstance);
    return bulletWasmInstance;
}


/***/ }),

/***/ 26405:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   O4: () => (/* binding */ PhysicsSphereShape),
/* harmony export */   SA: () => (/* binding */ PhysicsBoxShape),
/* harmony export */   Ty: () => (/* binding */ PhysicsStaticPlaneShape)
/* harmony export */ });
/* unused harmony exports PhysicsShape, PhysicsCapsuleShape */
class PhysicsShapeInner {
    _wasmInstance;
    _ptr;
    _referenceCount;
    constructor(wasmInstance, ptr) {
        this._wasmInstance = wasmInstance;
        this._ptr = ptr;
        this._referenceCount = 0;
    }
    dispose() {
        if (this._referenceCount > 0) {
            throw new Error("Cannot dispose shape while it still has references");
        }
        if (this._ptr === 0) {
            return;
        }
        // this operation is thread-safe because the physics shape is not belong to any physics world
        this._wasmInstance.deref()?.destroyShape(this._ptr);
        this._ptr = 0;
    }
    get ptr() {
        return this._ptr;
    }
    addReference() {
        this._referenceCount += 1;
    }
    removeReference() {
        this._referenceCount -= 1;
    }
}
function physicsShapeFinalizer(inner) {
    inner.dispose();
}
const physicsShapeRegistryMap = new WeakMap();
class PhysicsShape {
    runtime;
    _inner;
    constructor(runtime, ptr) {
        this.runtime = runtime;
        this._inner = new PhysicsShapeInner(new WeakRef(runtime.wasmInstance), ptr);
        let registry = physicsShapeRegistryMap.get(runtime.wasmInstance);
        if (registry === undefined) {
            registry = new FinalizationRegistry(physicsShapeFinalizer);
            physicsShapeRegistryMap.set(runtime.wasmInstance, registry);
        }
        registry.register(this, this._inner, this);
    }
    dispose() {
        if (this._inner.ptr === 0) {
            return;
        }
        this._inner.dispose();
        const registry = physicsShapeRegistryMap.get(this.runtime.wasmInstance);
        registry?.unregister(this);
    }
    /**
     * @internal
     */
    get ptr() {
        return this._inner.ptr;
    }
    /**
     * @internal
     */
    addReference() {
        this._inner.addReference();
    }
    /**
     * @internal
     */
    removeReference() {
        this._inner.removeReference();
    }
}
class PhysicsBoxShape extends PhysicsShape {
    constructor(runtime, size) {
        const ptr = runtime.wasmInstance.createBoxShape(size.x, size.y, size.z);
        super(runtime, ptr);
    }
}
class PhysicsSphereShape extends PhysicsShape {
    constructor(runtime, radius) {
        const ptr = runtime.wasmInstance.createSphereShape(radius);
        super(runtime, ptr);
    }
}
class PhysicsCapsuleShape extends PhysicsShape {
    constructor(runtime, radius, height) {
        const ptr = runtime.wasmInstance.createCapsuleShape(radius, height);
        super(runtime, ptr);
    }
}
class PhysicsStaticPlaneShape extends PhysicsShape {
    constructor(runtime, normal, planeConstant) {
        const ptr = runtime.wasmInstance.createStaticPlaneShape(normal.x, normal.y, normal.z, planeConstant);
        super(runtime, ptr);
    }
}


/***/ }),

/***/ 35901:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   t: () => (/* binding */ RigidBodyConstructionInfo)
/* harmony export */ });
/**
 * RigidBodyConstructionInfo representations
 *
 * shape: *uint32 : offset 0
 * initial_transform: float32[16] : offset 16
 *
 * motionType: uint8 : offset 80
 *
 * padding: uint8[3] : offset 81
 *
 * mass: float32 : offset 84
 * linearDamping: float32 : offset 88
 * angularDamping: float32 : offset 92
 * friction: float32 : offset 96
 * restitution: float32 : offset 100
 * linearSleepingThreshold: float32 : offset 104
 * angularSleepingThreshold: float32 : offset 108
 * collisionGroup: uint16 : offset 112
 * collisionMask: uint16 : offset 114
 * additionalDamping: uint8 : offset 116
 * noContactResponse: uint8 : offset 117
 * disableDeactivation: uint8 : offset 118
 * padding: uint8[9] : offset 119
 *
 * --size: 128
 */
const size = 128;
class RigidBodyConstructionInfoInner {
    _wasmInstance;
    _ptr;
    _shapeReference;
    constructor(wasmInstance, ptr) {
        this._wasmInstance = wasmInstance;
        this._ptr = ptr;
        this._shapeReference = null;
    }
    dispose() {
        if (this._ptr === 0) {
            return;
        }
        this._wasmInstance.deref()?.deallocateBuffer(this._ptr, size);
        this._ptr = 0;
        if (this._shapeReference) {
            this._shapeReference.removeReference();
        }
        this._shapeReference = null;
    }
    get ptr() {
        return this._ptr;
    }
    get shape() {
        return this._shapeReference;
    }
    set shape(value) {
        if (this._shapeReference) {
            this._shapeReference.removeReference();
        }
        this._shapeReference = value;
        if (this._shapeReference) {
            this._shapeReference.addReference();
        }
    }
}
function rigidBodyConstructionInfoFinalizer(inner) {
    inner.dispose();
}
const rigidBodyConstructionInfoRegistryMap = new WeakMap();
class RigidBodyConstructionInfo {
    _wasmInstance;
    _uint32Ptr;
    _float32Ptr;
    _uint8Ptr;
    _uint16Ptr;
    _inner;
    constructor(wasmInstance) {
        this._wasmInstance = wasmInstance;
        const uint32Bytes = Uint32Array.BYTES_PER_ELEMENT;
        const float32Bytes = Float32Array.BYTES_PER_ELEMENT;
        const uint8Bytes = Uint8Array.BYTES_PER_ELEMENT;
        const uint16Bytes = Uint16Array.BYTES_PER_ELEMENT;
        // Allocate buffer
        const ptr = wasmInstance.allocateBuffer(size);
        this._uint32Ptr = wasmInstance.createTypedArray(Uint32Array, ptr, size / uint32Bytes);
        this._float32Ptr = wasmInstance.createTypedArray(Float32Array, ptr, size / float32Bytes);
        this._uint8Ptr = wasmInstance.createTypedArray(Uint8Array, ptr, size / uint8Bytes);
        this._uint16Ptr = wasmInstance.createTypedArray(Uint16Array, ptr, size / uint16Bytes);
        this._inner = new RigidBodyConstructionInfoInner(new WeakRef(wasmInstance), ptr);
        // Initialize to default values
        const uint32Ptr = this._uint32Ptr.array;
        const float32Ptr = this._float32Ptr.array;
        const uint8Ptr = this._uint8Ptr.array;
        const uint16Ptr = this._uint16Ptr.array;
        // shape
        uint32Ptr[0x0 / uint32Bytes] = 0;
        // initial_transform
        float32Ptr[0x10 / float32Bytes] = 1;
        float32Ptr[0x14 / float32Bytes] = 0;
        float32Ptr[0x18 / float32Bytes] = 0;
        float32Ptr[0x1C / float32Bytes] = 0;
        float32Ptr[0x20 / float32Bytes] = 0;
        float32Ptr[0x24 / float32Bytes] = 1;
        float32Ptr[0x28 / float32Bytes] = 0;
        float32Ptr[0x2C / float32Bytes] = 0;
        float32Ptr[0x30 / float32Bytes] = 0;
        float32Ptr[0x34 / float32Bytes] = 0;
        float32Ptr[0x38 / float32Bytes] = 1;
        float32Ptr[0x3C / float32Bytes] = 0;
        float32Ptr[0x40 / float32Bytes] = 0;
        float32Ptr[0x44 / float32Bytes] = 0;
        float32Ptr[0x48 / float32Bytes] = 0;
        float32Ptr[0x4C / float32Bytes] = 1;
        // motionType
        uint8Ptr[0x50 / uint8Bytes] = 0 /* MotionType.Dynamic */;
        // mass
        float32Ptr[0x54 / float32Bytes] = 1.0;
        // linearDamping
        float32Ptr[0x58 / float32Bytes] = 0;
        // angularDamping
        float32Ptr[0x5C / float32Bytes] = 0;
        // friction
        float32Ptr[0x60 / float32Bytes] = 0.5;
        // restitution
        float32Ptr[0x64 / float32Bytes] = 0.0;
        // linearSleepingThreshold
        float32Ptr[0x68 / float32Bytes] = 0.0;
        // angularSleepingThreshold
        float32Ptr[0x6C / float32Bytes] = 1.0;
        // collisionGroup
        uint16Ptr[0x70 / uint16Bytes] = 1 << 0;
        // collisionMask
        uint16Ptr[0x72 / uint16Bytes] = 0xFFFF;
        // additionalDamping
        uint8Ptr[0x74 / uint8Bytes] = +false;
        // noContactResponse
        uint8Ptr[0x75 / uint8Bytes] = +false;
        // disableDeactivation
        uint8Ptr[0x76 / uint8Bytes] = +false;
        // finalization registry
        let registry = rigidBodyConstructionInfoRegistryMap.get(wasmInstance);
        if (registry === undefined) {
            registry = new FinalizationRegistry(rigidBodyConstructionInfoFinalizer);
            rigidBodyConstructionInfoRegistryMap.set(wasmInstance, registry);
        }
        registry.register(this, this._inner, this);
    }
    dispose() {
        if (this._inner.ptr === 0) {
            return;
        }
        this._inner.dispose();
        const registry = rigidBodyConstructionInfoRegistryMap.get(this._wasmInstance);
        registry?.unregister(this);
    }
    /**
     * @internal
     */
    get ptr() {
        return this._inner.ptr;
    }
    _nullCheck() {
        if (this._inner.ptr === 0) {
            throw new Error("Cannot access disposed RigidBodyConstructionInfo");
        }
    }
    get shape() {
        this._nullCheck();
        return this._inner.shape;
    }
    set shape(value) {
        this._nullCheck();
        this._inner.shape = value;
        this._uint32Ptr.array[0x0 / Uint32Array.BYTES_PER_ELEMENT] = value ? value.ptr : 0;
    }
    getInitialTransformToRef(result) {
        this._nullCheck();
        const float32Ptr = this._float32Ptr.array;
        const float32Bytes = Float32Array.BYTES_PER_ELEMENT;
        result.set(float32Ptr[0x10 / float32Bytes], float32Ptr[0x14 / float32Bytes], float32Ptr[0x18 / float32Bytes], float32Ptr[0x1C / float32Bytes], float32Ptr[0x20 / float32Bytes], float32Ptr[0x24 / float32Bytes], float32Ptr[0x28 / float32Bytes], float32Ptr[0x2C / float32Bytes], float32Ptr[0x30 / float32Bytes], float32Ptr[0x34 / float32Bytes], float32Ptr[0x38 / float32Bytes], float32Ptr[0x3C / float32Bytes], float32Ptr[0x40 / float32Bytes], float32Ptr[0x44 / float32Bytes], float32Ptr[0x48 / float32Bytes], float32Ptr[0x4C / float32Bytes]);
        return result;
    }
    setInitialTransform(value) {
        this._nullCheck();
        const float32Ptr = this._float32Ptr.array;
        const float32Bytes = Float32Array.BYTES_PER_ELEMENT;
        value.copyToArray(float32Ptr, 0x10 / float32Bytes);
    }
    get motionType() {
        this._nullCheck();
        return this._uint8Ptr.array[0x50 / Uint8Array.BYTES_PER_ELEMENT];
    }
    set motionType(value) {
        this._nullCheck();
        this._uint8Ptr.array[0x50 / Uint8Array.BYTES_PER_ELEMENT] = value;
    }
    get mass() {
        this._nullCheck();
        return this._float32Ptr.array[0x54 / Float32Array.BYTES_PER_ELEMENT];
    }
    set mass(value) {
        this._nullCheck();
        this._float32Ptr.array[0x54 / Float32Array.BYTES_PER_ELEMENT] = value;
    }
    get linearDamping() {
        this._nullCheck();
        return this._float32Ptr.array[0x58 / Float32Array.BYTES_PER_ELEMENT];
    }
    set linearDamping(value) {
        this._nullCheck();
        this._float32Ptr.array[0x58 / Float32Array.BYTES_PER_ELEMENT] = value;
    }
    get angularDamping() {
        this._nullCheck();
        return this._float32Ptr.array[0x5C / Float32Array.BYTES_PER_ELEMENT];
    }
    set angularDamping(value) {
        this._nullCheck();
        this._float32Ptr.array[0x5C / Float32Array.BYTES_PER_ELEMENT] = value;
    }
    get friction() {
        this._nullCheck();
        return this._float32Ptr.array[0x60 / Float32Array.BYTES_PER_ELEMENT];
    }
    set friction(value) {
        this._nullCheck();
        this._float32Ptr.array[0x60 / Float32Array.BYTES_PER_ELEMENT] = value;
    }
    get restitution() {
        this._nullCheck();
        return this._float32Ptr.array[0x64 / Float32Array.BYTES_PER_ELEMENT];
    }
    set restitution(value) {
        this._nullCheck();
        this._float32Ptr.array[0x64 / Float32Array.BYTES_PER_ELEMENT] = value;
    }
    get linearSleepingThreshold() {
        this._nullCheck();
        return this._float32Ptr.array[0x68 / Float32Array.BYTES_PER_ELEMENT];
    }
    set linearSleepingThreshold(value) {
        this._nullCheck();
        this._float32Ptr.array[0x68 / Float32Array.BYTES_PER_ELEMENT] = value;
    }
    get angularSleepingThreshold() {
        this._nullCheck();
        return this._float32Ptr.array[0x6C / Float32Array.BYTES_PER_ELEMENT];
    }
    set angularSleepingThreshold(value) {
        this._nullCheck();
        this._float32Ptr.array[0x6C / Float32Array.BYTES_PER_ELEMENT] = value;
    }
    get collisionGroup() {
        this._nullCheck();
        return this._uint16Ptr.array[0x70 / Uint16Array.BYTES_PER_ELEMENT];
    }
    set collisionGroup(value) {
        this._nullCheck();
        this._uint16Ptr.array[0x70 / Uint16Array.BYTES_PER_ELEMENT] = value;
    }
    get collisionMask() {
        this._nullCheck();
        return this._uint16Ptr.array[0x72 / Uint16Array.BYTES_PER_ELEMENT];
    }
    set collisionMask(value) {
        this._nullCheck();
        this._uint16Ptr.array[0x72 / Uint16Array.BYTES_PER_ELEMENT] = value;
    }
    get additionalDamping() {
        this._nullCheck();
        return !!this._uint8Ptr.array[0x74 / Uint8Array.BYTES_PER_ELEMENT];
    }
    set additionalDamping(value) {
        this._nullCheck();
        this._uint8Ptr.array[0x74 / Uint8Array.BYTES_PER_ELEMENT] = +value;
    }
    get noContactResponse() {
        this._nullCheck();
        return !!this._uint8Ptr.array[0x75 / Uint8Array.BYTES_PER_ELEMENT];
    }
    set noContactResponse(value) {
        this._nullCheck();
        this._uint8Ptr.array[0x75 / Uint8Array.BYTES_PER_ELEMENT] = +value;
    }
    get disableDeactivation() {
        this._nullCheck();
        return !!this._uint8Ptr.array[0x76 / Uint8Array.BYTES_PER_ELEMENT];
    }
    set disableDeactivation(value) {
        this._nullCheck();
        this._uint8Ptr.array[0x76 / Uint8Array.BYTES_PER_ELEMENT] = +value;
    }
}


/***/ }),

/***/ 3477:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   x: () => (/* binding */ RigidBodyConstructionInfoList)
/* harmony export */ });
const size = 128;
class RigidBodyConstructionInfoListInner {
    _wasmInstance;
    _ptr;
    _count;
    _shapeReferences;
    constructor(wasmInstance, ptr, count) {
        this._wasmInstance = wasmInstance;
        this._ptr = ptr;
        this._count = count;
        this._shapeReferences = new Array(count).fill(null);
    }
    dispose() {
        if (this._ptr === 0) {
            return;
        }
        this._wasmInstance.deref()?.deallocateBuffer(this._ptr, size * this._count);
        this._ptr = 0;
        for (let i = 0; i < this._shapeReferences.length; ++i) {
            const shape = this._shapeReferences[i];
            shape?.removeReference();
        }
        this._shapeReferences.fill(null);
    }
    /**
     * @internal
     */
    get ptr() {
        return this._ptr;
    }
    get count() {
        return this._count;
    }
    getShape(n) {
        return this._shapeReferences[n] ?? null;
    }
    setShape(n, value) {
        if (n < 0 || this._count <= n) {
            throw new RangeError("Index out of range");
        }
        const previousShape = this._shapeReferences[n];
        if (previousShape) {
            previousShape.removeReference();
        }
        this._shapeReferences[n] = value;
        if (value) {
            value.addReference();
        }
    }
}
function rigidBodyConstructionInfoListFinalizer(inner) {
    inner.dispose();
}
const rigidBodyConstructionInfoListRegistryMap = new WeakMap();
class RigidBodyConstructionInfoList {
    _wasmInstance;
    _uint32Ptr;
    _float32Ptr;
    _uint8Ptr;
    _uint16Ptr;
    _inner;
    constructor(wasmInstance, count) {
        this._wasmInstance = wasmInstance;
        const uint32Bytes = Uint32Array.BYTES_PER_ELEMENT;
        const float32Bytes = Float32Array.BYTES_PER_ELEMENT;
        const uint8Bytes = Uint8Array.BYTES_PER_ELEMENT;
        const uint16Bytes = Uint16Array.BYTES_PER_ELEMENT;
        // Allocate buffer
        const ptr = wasmInstance.allocateBuffer(size * count);
        this._uint32Ptr = wasmInstance.createTypedArray(Uint32Array, ptr, size / uint32Bytes * count);
        this._float32Ptr = wasmInstance.createTypedArray(Float32Array, ptr, size / float32Bytes * count);
        this._uint8Ptr = wasmInstance.createTypedArray(Uint8Array, ptr, size / uint8Bytes * count);
        this._uint16Ptr = wasmInstance.createTypedArray(Uint16Array, ptr, size / uint16Bytes * count);
        this._inner = new RigidBodyConstructionInfoListInner(new WeakRef(wasmInstance), ptr, count);
        // Initialize to default values
        const uint32Ptr = this._uint32Ptr.array;
        const float32Ptr = this._float32Ptr.array;
        const uint8Ptr = this._uint8Ptr.array;
        const uint16Ptr = this._uint16Ptr.array;
        for (let i = 0; i < count; ++i) {
            const offset = i * size;
            // shape
            uint32Ptr[(offset + 0x0) / uint32Bytes] = 0;
            // initial_transform
            float32Ptr[(offset + 0x10) / float32Bytes] = 1;
            float32Ptr[(offset + 0x14) / float32Bytes] = 0;
            float32Ptr[(offset + 0x18) / float32Bytes] = 0;
            float32Ptr[(offset + 0x1C) / float32Bytes] = 0;
            float32Ptr[(offset + 0x20) / float32Bytes] = 0;
            float32Ptr[(offset + 0x24) / float32Bytes] = 1;
            float32Ptr[(offset + 0x28) / float32Bytes] = 0;
            float32Ptr[(offset + 0x2C) / float32Bytes] = 0;
            float32Ptr[(offset + 0x30) / float32Bytes] = 0;
            float32Ptr[(offset + 0x34) / float32Bytes] = 0;
            float32Ptr[(offset + 0x38) / float32Bytes] = 1;
            float32Ptr[(offset + 0x3C) / float32Bytes] = 0;
            float32Ptr[(offset + 0x40) / float32Bytes] = 0;
            float32Ptr[(offset + 0x44) / float32Bytes] = 0;
            float32Ptr[(offset + 0x48) / float32Bytes] = 0;
            float32Ptr[(offset + 0x4C) / float32Bytes] = 1;
            // motionType
            uint8Ptr[(offset + 0x50) / uint8Bytes] = 0 /* MotionType.Dynamic */;
            // mass
            float32Ptr[(offset + 0x54) / float32Bytes] = 1.0;
            // linearDamping
            float32Ptr[(offset + 0x58) / float32Bytes] = 0;
            // angularDamping
            float32Ptr[(offset + 0x5C) / float32Bytes] = 0;
            // friction
            float32Ptr[(offset + 0x60) / float32Bytes] = 0.5;
            // restitution
            float32Ptr[(offset + 0x64) / float32Bytes] = 0.0;
            // linearSleepingThreshold
            float32Ptr[(offset + 0x68) / float32Bytes] = 0.0;
            // angularSleepingThreshold
            float32Ptr[(offset + 0x6C) / float32Bytes] = 1.0;
            // collisionGroup
            uint16Ptr[(offset + 0x70) / uint16Bytes] = 1 << 0;
            // collisionMask
            uint16Ptr[(offset + 0x72) / uint16Bytes] = 0xFFFF;
            // additionalDamping
            uint8Ptr[(offset + 0x74) / uint8Bytes] = +false;
            // noContactResponse
            uint8Ptr[(offset + 0x75) / uint8Bytes] = +false;
            // disableDeactivation
            uint8Ptr[(offset + 0x76) / uint8Bytes] = +false;
        }
        // finalization registry
        let registry = rigidBodyConstructionInfoListRegistryMap.get(wasmInstance);
        if (registry === undefined) {
            registry = new FinalizationRegistry(rigidBodyConstructionInfoListFinalizer);
            rigidBodyConstructionInfoListRegistryMap.set(wasmInstance, registry);
        }
        registry.register(this, this._inner, this);
    }
    dispose() {
        if (this._inner.ptr === 0) {
            return;
        }
        this._inner.dispose();
        const registry = rigidBodyConstructionInfoListRegistryMap.get(this._wasmInstance);
        registry?.unregister(this);
    }
    get ptr() {
        return this._inner.ptr;
    }
    get count() {
        return this._inner.count;
    }
    getPtr(n) {
        this._nullCheck();
        return this._inner.ptr + n * size;
    }
    _nullCheck() {
        if (this._inner.ptr === 0) {
            throw new Error("Cannot access disposed RigidBodyConstructionInfo");
        }
    }
    getShape(n) {
        this._nullCheck();
        return this._inner.getShape(n);
    }
    setShape(n, value) {
        this._nullCheck();
        this._inner.setShape(n, value);
        const offset = n * size;
        this._uint32Ptr.array[(offset + 0x0) / Uint32Array.BYTES_PER_ELEMENT] = value ? value.ptr : 0;
    }
    getInitialTransformToRef(n, result) {
        this._nullCheck();
        const offset = n * size;
        const float32Ptr = this._float32Ptr.array;
        const float32Bytes = Float32Array.BYTES_PER_ELEMENT;
        result.set(float32Ptr[(offset + 0x10) / float32Bytes], float32Ptr[(offset + 0x14) / float32Bytes], float32Ptr[(offset + 0x18) / float32Bytes], float32Ptr[(offset + 0x1C) / float32Bytes], float32Ptr[(offset + 0x20) / float32Bytes], float32Ptr[(offset + 0x24) / float32Bytes], float32Ptr[(offset + 0x28) / float32Bytes], float32Ptr[(offset + 0x2C) / float32Bytes], float32Ptr[(offset + 0x30) / float32Bytes], float32Ptr[(offset + 0x34) / float32Bytes], float32Ptr[(offset + 0x38) / float32Bytes], float32Ptr[(offset + 0x3C) / float32Bytes], float32Ptr[(offset + 0x40) / float32Bytes], float32Ptr[(offset + 0x44) / float32Bytes], float32Ptr[(offset + 0x48) / float32Bytes], float32Ptr[(offset + 0x4C) / float32Bytes]);
        return result;
    }
    setInitialTransform(n, value) {
        this._nullCheck();
        const offset = n * size;
        const float32Ptr = this._float32Ptr.array;
        const float32Bytes = Float32Array.BYTES_PER_ELEMENT;
        value.copyToArray(float32Ptr, (offset + 0x10) / float32Bytes);
    }
    getMotionType(n) {
        this._nullCheck();
        const offset = n * size;
        return this._uint8Ptr.array[(offset + 0x50) / Uint8Array.BYTES_PER_ELEMENT];
    }
    setMotionType(n, value) {
        this._nullCheck();
        const offset = n * size;
        this._uint8Ptr.array[(offset + 0x50) / Uint8Array.BYTES_PER_ELEMENT] = value;
    }
    getMass(n) {
        this._nullCheck();
        const offset = n * size;
        return this._float32Ptr.array[(offset + 0x54) / Float32Array.BYTES_PER_ELEMENT];
    }
    setMass(n, value) {
        this._nullCheck();
        const offset = n * size;
        this._float32Ptr.array[(offset + 0x54) / Float32Array.BYTES_PER_ELEMENT] = value;
    }
    getLinearDamping(n) {
        this._nullCheck();
        const offset = n * size;
        return this._float32Ptr.array[(offset + 0x58) / Float32Array.BYTES_PER_ELEMENT];
    }
    setLinearDamping(n, value) {
        this._nullCheck();
        const offset = n * size;
        this._float32Ptr.array[(offset + 0x58) / Float32Array.BYTES_PER_ELEMENT] = value;
    }
    getAngularDamping(n) {
        this._nullCheck();
        const offset = n * size;
        return this._float32Ptr.array[(offset + 0x5C) / Float32Array.BYTES_PER_ELEMENT];
    }
    setAngularDamping(n, value) {
        this._nullCheck();
        const offset = n * size;
        this._float32Ptr.array[(offset + 0x5C) / Float32Array.BYTES_PER_ELEMENT] = value;
    }
    getFriction(n) {
        this._nullCheck();
        const offset = n * size;
        return this._float32Ptr.array[(offset + 0x60) / Float32Array.BYTES_PER_ELEMENT];
    }
    setFriction(n, value) {
        this._nullCheck();
        const offset = n * size;
        this._float32Ptr.array[(offset + 0x60) / Float32Array.BYTES_PER_ELEMENT] = value;
    }
    getRestitution(n) {
        this._nullCheck();
        const offset = n * size;
        return this._float32Ptr.array[(offset + 0x64) / Float32Array.BYTES_PER_ELEMENT];
    }
    setRestitution(n, value) {
        this._nullCheck();
        const offset = n * size;
        this._float32Ptr.array[(offset + 0x64) / Float32Array.BYTES_PER_ELEMENT] = value;
    }
    getLinearSleepingThreshold(n) {
        this._nullCheck();
        const offset = n * size;
        return this._float32Ptr.array[(offset + 0x68) / Float32Array.BYTES_PER_ELEMENT];
    }
    setLinearSleepingThreshold(n, value) {
        this._nullCheck();
        const offset = n * size;
        this._float32Ptr.array[(offset + 0x68) / Float32Array.BYTES_PER_ELEMENT] = value;
    }
    getAngularSleepingThreshold(n) {
        this._nullCheck();
        const offset = n * size;
        return this._float32Ptr.array[(offset + 0x6C) / Float32Array.BYTES_PER_ELEMENT];
    }
    setAngularSleepingThreshold(n, value) {
        this._nullCheck();
        const offset = n * size;
        this._float32Ptr.array[(offset + 0x6C) / Float32Array.BYTES_PER_ELEMENT] = value;
    }
    getCollisionGroup(n) {
        this._nullCheck();
        const offset = n * size;
        return this._uint16Ptr.array[(offset + 0x70) / Uint16Array.BYTES_PER_ELEMENT];
    }
    setCollisionGroup(n, value) {
        this._nullCheck();
        const offset = n * size;
        this._uint16Ptr.array[(offset + 0x70) / Uint16Array.BYTES_PER_ELEMENT] = value;
    }
    getCollisionMask(n) {
        this._nullCheck();
        const offset = n * size;
        return this._uint16Ptr.array[(offset + 0x72) / Uint16Array.BYTES_PER_ELEMENT];
    }
    setCollisionMask(n, value) {
        this._nullCheck();
        const offset = n * size;
        this._uint16Ptr.array[(offset + 0x72) / Uint16Array.BYTES_PER_ELEMENT] = value;
    }
    getAdditionalDamping(n) {
        this._nullCheck();
        const offset = n * size;
        return !!this._uint8Ptr.array[(offset + 0x74) / Uint8Array.BYTES_PER_ELEMENT];
    }
    setAdditionalDamping(n, value) {
        this._nullCheck();
        const offset = n * size;
        this._uint8Ptr.array[(offset + 0x74) / Uint8Array.BYTES_PER_ELEMENT] = +value;
    }
    getNoContactResponse(n) {
        this._nullCheck();
        const offset = n * size;
        return !!this._uint8Ptr.array[(offset + 0x75) / Uint8Array.BYTES_PER_ELEMENT];
    }
    setNoContactResponse(n, value) {
        this._nullCheck();
        const offset = n * size;
        this._uint8Ptr.array[(offset + 0x75) / Uint8Array.BYTES_PER_ELEMENT] = +value;
    }
    getDisableDeactivation(n) {
        this._nullCheck();
        const offset = n * size;
        return !!this._uint8Ptr.array[(offset + 0x76) / Uint8Array.BYTES_PER_ELEMENT];
    }
    setDisableDeactivation(n, value) {
        this._nullCheck();
        const offset = n * size;
        this._uint8Ptr.array[(offset + 0x76) / Uint8Array.BYTES_PER_ELEMENT] = +value;
    }
}


/***/ }),

/***/ 54179:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  SceneBuilder: () => (/* binding */ SceneBuilder)
});

// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Meshes/thinInstanceMesh.js
var thinInstanceMesh = __webpack_require__(90203);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Lights/Shadows/shadowGeneratorSceneComponent.js
var shadowGeneratorSceneComponent = __webpack_require__(33832);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Materials/standardMaterial.js
var standardMaterial = __webpack_require__(2093);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Physics/joinedPhysicsEngineComponent.js
var joinedPhysicsEngineComponent = __webpack_require__(42163);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Cameras/arcRotateCamera.js
var arcRotateCamera = __webpack_require__(7839);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Lights/directionalLight.js
var Lights_directionalLight = __webpack_require__(52046);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Lights/hemisphericLight.js
var Lights_hemisphericLight = __webpack_require__(71513);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Lights/Shadows/shadowGenerator.js
var Shadows_shadowGenerator = __webpack_require__(18595);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Maths/math.color.js
var math_color = __webpack_require__(26041);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Maths/math.vector.js
var math_vector = __webpack_require__(79923);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Meshes/Builders/planeBuilder.js
var planeBuilder = __webpack_require__(58144);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Physics/v2/IPhysicsEnginePlugin.js
var IPhysicsEnginePlugin = __webpack_require__(73490);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Physics/v2/physicsBody.js
var physicsBody = __webpack_require__(8014);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Physics/v2/physicsShape.js
var physicsShape = __webpack_require__(825);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/scene.js + 2 modules
var core_scene = __webpack_require__(87491);
// EXTERNAL MODULE: ./src/Runtime/bulletWasmInstance.ts + 2 modules
var bulletWasmInstance = __webpack_require__(46738);
// EXTERNAL MODULE: ./src/Runtime/InstanceType/multiDebug.ts + 2 modules
var multiDebug = __webpack_require__(47002);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Misc/logger.js
var logger = __webpack_require__(51137);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Misc/observable.js
var observable = __webpack_require__(99848);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Physics/v2/physicsMaterial.js
var physicsMaterial = __webpack_require__(55431);
// EXTERNAL MODULE: ./src/Runtime/Impl/multiPhysicsRuntime.ts
var multiPhysicsRuntime = __webpack_require__(23948);
// EXTERNAL MODULE: ./src/Runtime/rigidBodyConstructionInfo.ts
var rigidBodyConstructionInfo = __webpack_require__(35901);
// EXTERNAL MODULE: ./src/Runtime/rigidBodyConstructionInfoList.ts
var rigidBodyConstructionInfoList = __webpack_require__(3477);
// EXTERNAL MODULE: ./src/Runtime/physicsShape.ts
var Runtime_physicsShape = __webpack_require__(26405);
;// ./src/Runtime/Plugin/pluginShape.ts


const tempVector3 = new math_vector/* Vector3 */.Pq();
function localTransformMatrixFromTranslationRotationToRef(center, rotation, matrix) {
    if (center?.equalsToFloats(0, 0, 0) === false ||
        rotation?.equalsToFloats(0, 0, 0, 1) === false) {
        if (rotation !== undefined) {
            if (matrix === undefined) {
                matrix = new math_vector/* Matrix */.uq();
            }
            matrix = math_vector/* Matrix */.uq.FromQuaternionToRef(rotation, matrix);
            if (center !== undefined) {
                matrix.setTranslation(center);
            }
        }
        else if (center !== undefined) {
            if (matrix === undefined) {
                matrix = math_vector/* Matrix */.uq.Identity();
            }
            else {
                math_vector/* Matrix */.uq.IdentityToRef(matrix);
            }
            matrix.setTranslation(center);
        }
        else {
            if (matrix === undefined) {
                matrix = math_vector/* Matrix */.uq.Identity();
            }
            else {
                math_vector/* Matrix */.uq.IdentityToRef(matrix);
            }
        }
        return matrix;
    }
    else {
        return null;
    }
}
class PluginBoxShape extends Runtime_physicsShape/* PhysicsBoxShape */.SA {
    localTransform;
    collisionGroup = 1;
    collisionMask = 0xFFFF;
    _material = null;
    constructor(runtime, center, rotation, extents) {
        super(runtime, extents?.scaleToRef(0.5, tempVector3) ?? tempVector3.setAll(0.5));
        this.localTransform = localTransformMatrixFromTranslationRotationToRef(center, rotation);
    }
    setMaterial(friction, restitution) {
        this._material = { friction, restitution };
    }
    get material() {
        return this._material;
    }
}

;// ./src/Runtime/Plugin/bulletPlugin.ts









/**
 * The Bullet Physics plugin
 */
class BulletPlugin {
    /**
     * Created bullet physics runtime which physics bodies are added to
     */
    world;
    /**
     * Name of the plugin
     */
    name = "BulletPlugin";
    /**
     * Observable for collision started and collision continued events
     */
    onCollisionObservable = new observable/* Observable */.cP();
    /**
     * Observable for collision ended events
     */
    onCollisionEndedObservable = new observable/* Observable */.cP();
    /**
     * Observable for trigger entered and trigger exited events
     */
    onTriggerCollisionObservable = new observable/* Observable */.cP();
    constructor(wasmInstance) {
        this.world = new multiPhysicsRuntime/* MultiPhysicsRuntime */.h(wasmInstance);
    }
    /**
     * Sets the gravity of the physics world.
     *
     * @param gravity - The gravity vector to set.
     *
     */
    setGravity(gravity) {
        this.world.setGravity(gravity);
    }
    /**
     * Sets the fixed time step for the physics engine.
     *
     * @param timeStep - The fixed time step to use for the physics engine.
     *
     */
    setTimeStep(timeStep) {
        this.world.timeStep = timeStep;
    }
    /**
     * Gets the fixed time step used by the physics engine.
     *
     * @returns The fixed time step used by the physics engine.
     *
     */
    getTimeStep() {
        return this.world.timeStep;
    }
    /**
     * Executes a single step of the physics engine.
     *
     * @param delta The time delta in seconds since the last step.
     * @param physicsBodies An array of physics bodies to be simulated.
     *
     * This method is useful for simulating the physics engine. It sets the physics body transformation,
     * steps the world, syncs the physics body, and notifies collisions. This allows for the physics engine
     * to accurately simulate the physics bodies in the world.
     */
    executeStep(delta, bodies) {
        for (let i = 0; i < bodies.length; ++i) {
            const physicsBody = bodies[i];
            if (physicsBody.disablePreStep) {
                continue;
            }
            this.setPhysicsBodyTransformation(physicsBody, physicsBody.transformNode);
        }
        this.world.afterAnimations(delta);
        for (let i = 0; i < bodies.length; ++i) {
            const physicsBody = bodies[i];
            if (!physicsBody.disableSync) {
                this.sync(physicsBody);
            }
        }
        // notify collision events
        // notify trigger events
    }
    /**
     * Sets the transformation of the given physics body to the given transform node.
     * @param body The physics body to set the transformation for.
     * @param node The transform node to set the transformation from.
     * Sets the transformation of the given physics body to the given transform node.
     *
     * This function is useful for setting the transformation of a physics body to a
     * transform node, which is necessary for the physics engine to accurately simulate
     * the motion of the body. It also takes into account instances of the transform
     * node, which is necessary for accurate simulation of multiple bodies with the
     * same transformation.
     */
    setPhysicsBodyTransformation(body, node) {
        if (body.getPrestepType() == IPhysicsEnginePlugin/* PhysicsPrestepType */.f9.TELEPORT) {
            const transformNode = body.transformNode;
            if (body.numInstances > 0) {
                // instances
                const m = transformNode;
                const matrixData = m._thinInstanceDataStorage.matrixData;
                if (!matrixData) {
                    return; // TODO: error handling
                }
                // const instancesCount = body.numInstances;
                // this._createOrUpdateBodyInstances(body, body.getMotionType(), matrixData, 0, instancesCount, true);
            }
            else {
                // regular
                // this._hknp.HP_Body_SetQTransform(body._pluginData.hpBodyId, this._getTransformInfos(node));
            }
        }
        else if (body.getPrestepType() == IPhysicsEnginePlugin/* PhysicsPrestepType */.f9.ACTION) {
            this.setTargetTransform(body, node.absolutePosition, node.absoluteRotationQuaternion);
        }
        else if (body.getPrestepType() == IPhysicsEnginePlugin/* PhysicsPrestepType */.f9.DISABLED) {
            logger/* Logger */.V.Warn("Prestep type is set to DISABLED. Unable to set physics body transformation.");
        }
        else {
            logger/* Logger */.V.Warn("Invalid prestep type set to physics body.");
        }
    }
    /**
     * Returns the version of the physics engine plugin.
     *
     * @returns The version of the physics engine plugin.
     *
     * This method is useful for determining the version of the physics engine plugin that is currently running.
     */
    getPluginVersion() {
        return 2;
    }
    /**
     * Set the maximum allowed linear and angular velocities
     * @param maxLinearVelocity maximum allowed linear velocity
     * @param maxAngularVelocity maximum allowed angular velocity
     */
    setVelocityLimits(maxLinearVelocity, maxAngularVelocity) {
        maxLinearVelocity;
        maxAngularVelocity;
        // there is no support for setting velocity limits in bullet
        throw new Error("Method not implemented.");
    }
    /**
     * @returns maximum allowed linear velocity
     */
    getMaxLinearVelocity() {
        // there is no support for setting velocity limits in bullet
        throw new Error("Method not implemented.");
    }
    /**
     * @returns maximum allowed angular velocity
     */
    getMaxAngularVelocity() {
        // there is no support for setting velocity limits in bullet
        throw new Error("Method not implemented.");
    }
    static _TempMatrix = new math_vector/* Matrix */.uq();
    /**
     * Initializes a physics body with the given position and orientation.
     *
     * @param body - The physics body to initialize.
     * @param motionType - The motion type of the body.
     * @param position - The position of the body.
     * @param orientation - The orientation of the body.
     * This code is useful for initializing a physics body with the given position and orientation.
     * It creates a plugin data for the body and adds it to the world. It then converts the position
     * and orientation to a transform and sets the body's transform to the given values.
     */
    initBody(body, motionType, position, orientation) {
        const constructionInfo = body._pluginData = new rigidBodyConstructionInfo/* RigidBodyConstructionInfo */.t(this.world.wasmInstance);
        let bulletMotionType;
        switch (motionType) {
            case IPhysicsEnginePlugin/* PhysicsMotionType */.AH.DYNAMIC:
                bulletMotionType = 0 /* MotionType.Dynamic */;
                break;
            case IPhysicsEnginePlugin/* PhysicsMotionType */.AH.STATIC:
                bulletMotionType = 1 /* MotionType.Static */;
                break;
            case IPhysicsEnginePlugin/* PhysicsMotionType */.AH.ANIMATED:
                bulletMotionType = 2 /* MotionType.Kinematic */;
                break;
            default:
                throw new Error("Invalid motion type");
        }
        constructionInfo.motionType = bulletMotionType;
        const transform = math_vector/* Matrix */.uq.FromQuaternionToRef(orientation, BulletPlugin._TempMatrix);
        transform.setTranslation(position);
        constructionInfo.setInitialTransform(transform);
        // this._bodies.set(body._pluginData.hpBodyId[0], { body: body, index: 0 });
    }
    /**
     * Initializes the body instances for a given physics body and mesh.
     *
     * @param body - The physics body to initialize.
     * @param motionType - How the body will be handled by the engine
     * @param mesh - The mesh to initialize.
     *
     * This code is useful for creating a physics body from a mesh. It creates a
     * body instance for each instance of the mesh and adds it to the world. It also
     * sets the position of the body instance to the position of the mesh instance.
     * This allows for the physics engine to accurately simulate the mesh in the
     * world.
     */
    initBodyInstances(body, motionType, mesh) {
        body;
        motionType;
        mesh;
        throw new Error("Method not implemented.");
    }
    /**
     * Update the internal body instances for a given physics body to match the instances in a mesh.
     * @param body the body that will be updated
     * @param mesh the mesh with reference instances
     */
    updateBodyInstances(body, mesh) {
        body;
        mesh;
        throw new Error("Method not implemented.");
    }
    /**
     * Removes a body from the world. To dispose of a body, it is necessary to remove it from the world first.
     *
     * @param body - The body to remove.
     */
    removeBody(body) {
        body;
        throw new Error("Method not implemented.");
    }
    /**
     * Synchronizes the transform of a physics body with its transform node.
     * @param body - The physics body to synchronize.
     *
     * This function is useful for keeping the physics body's transform in sync with its transform node.
     * This is important for ensuring that the physics body is accurately represented in the physics engine.
     */
    sync(body) {
        body;
        throw new Error("Method not implemented.");
    }
    /**
     * Synchronizes the transform of a physics body with the transform of its
     * corresponding transform node.
     *
     * @param body - The physics body to synchronize.
     * @param transformNode - The destination Transform Node.
     *
     * This code is useful for synchronizing the position and orientation of a
     * physics body with the position and orientation of its corresponding
     * transform node. This is important for ensuring that the physics body and
     * the transform node are in the same position and orientation in the scene.
     * This is necessary for the physics engine to accurately simulate the
     * physical behavior of the body.
     */
    syncTransform(body, transformNode) {
        body;
        transformNode;
        throw new Error("Method not implemented.");
    }
    /**
     * Sets the shape of a physics body.
     * @param body - The physics body to set the shape for.
     * @param shape - The physics shape to set.
     *
     * This function is used to set the shape of a physics body. It is useful for
     * creating a physics body with a specific shape, such as a box or a sphere,
     * which can then be used to simulate physical interactions in a physics engine.
     * This function is especially useful for meshes with multiple instances, as it
     * will set the shape for each instance of the mesh.
     */
    setShape(body, shape) {
        body;
        shape;
        throw new Error("Method not implemented.");
    }
    /**
     * Gets the shape of a physics body. This will create a new shape object
     *
     * @param body - The physics body.
     * @returns The shape of the physics body.
     *
     */
    getShape(body) {
        body;
        throw new Error("Method not implemented.");
    }
    /**
     * Gets the type of a physics shape.
     * @param shape - The physics shape to get the type for.
     * @returns The type of the physics shape.
     *
     */
    getShapeType(shape) {
        shape;
        throw new Error("Method not implemented.");
    }
    /**
     * Sets the event mask of a physics body.
     * @param body - The physics body to set the event mask for.
     * @param eventMask - The event mask to set.
     * @param instanceIndex - The index of the instance to set the event mask for
     *
     * This function is useful for setting the event mask of a physics body, which is used to determine which events the body will respond to. This is important for ensuring that the physics engine is able to accurately simulate the behavior of the body in the game world.
     */
    setEventMask(body, eventMask, instanceIndex) {
        body;
        eventMask;
        instanceIndex;
        throw new Error("Method not implemented.");
    }
    /**
     * Retrieves the event mask of a physics body.
     *
     * @param body - The physics body to retrieve the event mask from.
     * @param instanceIndex - The index of the instance to retrieve the event mask from.
     * @returns The event mask of the physics body.
     *
     */
    getEventMask(body, instanceIndex) {
        body;
        instanceIndex;
        throw new Error("Method not implemented.");
    }
    /**
     * sets the motion type of a physics body.
     * @param body - The physics body to set the motion type for.
     * @param motionType - The motion type to set.
     * @param instanceIndex - The index of the instance to set the motion type for. If undefined, the motion type of all the bodies will be set.
     */
    setMotionType(body, motionType, instanceIndex) {
        body;
        motionType;
        instanceIndex;
        throw new Error("Method not implemented.");
    }
    getMotionType(body, instanceIndex) {
        body;
        instanceIndex;
        throw new Error("Method not implemented.");
    }
    computeMassProperties(body, instanceIndex) {
        body;
        instanceIndex;
        throw new Error("Method not implemented.");
    }
    /**
     * Sets the mass properties of a physics body.
     *
     * @param body - The physics body to set the mass properties of.
     * @param massProps - The mass properties to set.
     * @param instanceIndex - The index of the instance to set the mass properties of. If undefined, the mass properties of all the bodies will be set.
     * This function is useful for setting the mass properties of a physics body,
     * such as its mass, inertia, and center of mass. This is important for
     * accurately simulating the physics of the body in the physics engine.
     *
     */
    setMassProperties(body, massProps, instanceIndex) {
        const info = body._pluginData;
        if (info instanceof rigidBodyConstructionInfo/* RigidBodyConstructionInfo */.t) {
            if (massProps.mass !== undefined)
                info.mass = massProps.mass;
        }
        else if (info instanceof rigidBodyConstructionInfoList/* RigidBodyConstructionInfoList */.x) {
            if (instanceIndex === undefined) {
                for (let i = 0; i < info.count; i++) {
                    if (massProps.mass !== undefined)
                        info.setMass(massProps.mass, i);
                }
            }
            else if (massProps.mass !== undefined) {
                info.setMass(massProps.mass, instanceIndex);
            }
        }
        else {
            throw new Error("mass cannot be set after body is initialized");
        }
    }
    getMassProperties(body, instanceIndex) {
        body;
        instanceIndex;
        throw new Error("Method not implemented.");
    }
    setLinearDamping(body, damping, instanceIndex) {
        body;
        damping;
        instanceIndex;
        throw new Error("Method not implemented.");
    }
    getLinearDamping(body, instanceIndex) {
        body;
        instanceIndex;
        throw new Error("Method not implemented.");
    }
    setAngularDamping(body, damping, instanceIndex) {
        body;
        damping;
        instanceIndex;
        throw new Error("Method not implemented.");
    }
    getAngularDamping(body, instanceIndex) {
        body;
        instanceIndex;
        throw new Error("Method not implemented.");
    }
    setLinearVelocity(body, linVel, instanceIndex) {
        body;
        linVel;
        instanceIndex;
        throw new Error("Method not implemented.");
    }
    getLinearVelocityToRef(body, linVel, instanceIndex) {
        body;
        linVel;
        instanceIndex;
        throw new Error("Method not implemented.");
    }
    applyImpulse(body, impulse, location, instanceIndex) {
        body;
        impulse;
        location;
        instanceIndex;
        throw new Error("Method not implemented.");
    }
    applyAngularImpulse(body, angularImpulse, instanceIndex) {
        body;
        angularImpulse;
        instanceIndex;
        throw new Error("Method not implemented.");
    }
    applyForce(body, force, location, instanceIndex) {
        body;
        force;
        location;
        instanceIndex;
        throw new Error("Method not implemented.");
    }
    setAngularVelocity(body, angVel, instanceIndex) {
        body;
        angVel;
        instanceIndex;
        throw new Error("Method not implemented.");
    }
    getAngularVelocityToRef(body, angVel, instanceIndex) {
        body;
        angVel;
        instanceIndex;
        throw new Error("Method not implemented.");
    }
    getBodyGeometry(body) {
        body;
        throw new Error("Method not implemented.");
    }
    disposeBody(body) {
        body;
        throw new Error("Method not implemented.");
    }
    setCollisionCallbackEnabled(body, enabled, instanceIndex) {
        body;
        enabled;
        instanceIndex;
        throw new Error("Method not implemented.");
    }
    setCollisionEndedCallbackEnabled(body, enabled, instanceIndex) {
        body;
        enabled;
        instanceIndex;
        throw new Error("Method not implemented.");
    }
    addConstraint(body, childBody, constraint, instanceIndex, childInstanceIndex) {
        body;
        childBody;
        constraint;
        instanceIndex;
        childInstanceIndex;
        throw new Error("Method not implemented.");
    }
    getCollisionObservable(body, instanceIndex) {
        body;
        instanceIndex;
        throw new Error("Method not implemented.");
    }
    getCollisionEndedObservable(body, instanceIndex) {
        body;
        instanceIndex;
        throw new Error("Method not implemented.");
    }
    setGravityFactor(body, factor, instanceIndex) {
        body;
        factor;
        instanceIndex;
        throw new Error("Method not implemented.");
    }
    getGravityFactor(body, instanceIndex) {
        body;
        instanceIndex;
        throw new Error("Method not implemented.");
    }
    setTargetTransform(body, position, rotation, instanceIndex) {
        body;
        position;
        rotation;
        instanceIndex;
        throw new Error("Method not implemented.");
    }
    /**
     * Initializes a physics shape with the given type and parameters.
     * @param shape - The physics shape to initialize.
     * @param type - The type of shape to initialize.
     * @param options - The parameters for the shape.
     *
     * This code is useful for initializing a physics shape with the given type and parameters.
     * It allows for the creation of a sphere, box, capsule, container, cylinder, mesh, and heightfield.
     * Depending on the type of shape, different parameters are required.
     * For example, a sphere requires a radius, while a box requires extents and a rotation.
     */
    initShape(shape, type, options) {
        switch (type) {
            case IPhysicsEnginePlugin/* PhysicsShapeType */.DK.SPHERE:
                // use btSphereShape
                throw new Error("Sphere shape not supported.");
                break;
            case IPhysicsEnginePlugin/* PhysicsShapeType */.DK.BOX:
                shape._pluginData = new PluginBoxShape(this.world, options.center, options.rotation, options.extents);
                break;
            case IPhysicsEnginePlugin/* PhysicsShapeType */.DK.CAPSULE:
                // use btCapsuleShape
                throw new Error("Capsule shape not supported.");
                break;
            case IPhysicsEnginePlugin/* PhysicsShapeType */.DK.CONTAINER:
                // use btCompoundShape
                throw new Error("Container shape not supported.");
                break;
            case IPhysicsEnginePlugin/* PhysicsShapeType */.DK.CYLINDER:
                // use btCylinderShape
                throw new Error("Cylinder shape not supported.");
                break;
            case IPhysicsEnginePlugin/* PhysicsShapeType */.DK.CONVEX_HULL:
            case IPhysicsEnginePlugin/* PhysicsShapeType */.DK.MESH:
                // use btConvexHullShape
                // use btBvhTriangleMeshShape
                throw new Error("Convex hull and mesh shapes not supported.");
                break;
            case IPhysicsEnginePlugin/* PhysicsShapeType */.DK.HEIGHTFIELD:
                throw new Error("Heightfield shape not supported.");
                break;
            default:
                throw new Error("Unsupported Shape Type.");
        }
    }
    /**
     * Sets the shape filter membership mask of a body
     * @param shape - The physics body to set the shape filter membership mask for.
     * @param membershipMask - The shape filter membership mask to set.
     */
    setShapeFilterMembershipMask(shape, membershipMask) {
        shape._pluginData.collisionGroup = membershipMask;
    }
    /**
     * Gets the shape filter membership mask of a body
     * @param shape - The physics body to get the shape filter membership mask from.
     * @returns The shape filter membership mask of the given body.
     */
    getShapeFilterMembershipMask(shape) {
        return shape._pluginData.collisionGroup;
    }
    /**
     * Sets the shape filter collide mask of a body
     * @param shape - The physics body to set the shape filter collide mask for.
     * @param collideMask - The shape filter collide mask to set.
     */
    setShapeFilterCollideMask(shape, collideMask) {
        shape._pluginData.collisionMask = collideMask;
    }
    /**
     * Gets the shape filter collide mask of a body
     * @param shape - The physics body to get the shape filter collide mask from.
     * @returns The shape filter collide mask of the given body.
     */
    getShapeFilterCollideMask(shape) {
        return shape._pluginData.collisionMask;
    }
    /**
     * Sets the material of a physics shape.
     * @param shape - The physics shape to set the material of.
     * @param material - The material to set.
     *
     */
    setMaterial(shape, material) {
        const dynamicFriction = material.friction ?? 0.5;
        if (material.staticFriction) {
            logger/* Logger */.V.Warn("Static friction is not supported in bullet.");
        }
        const restitution = material.restitution ?? 0.0;
        if (material.frictionCombine && material.frictionCombine !== physicsMaterial/* PhysicsMaterialCombineMode */.F.MULTIPLY) {
            logger/* Logger */.V.Warn("Friction combine is fixed to MULTIPLY in bullet.");
        }
        if (material.restitutionCombine && material.restitutionCombine !== physicsMaterial/* PhysicsMaterialCombineMode */.F.MULTIPLY) {
            logger/* Logger */.V.Warn("Restitution combine is fixed to MULTIPLY in bullet.");
        }
        shape._pluginData.setMaterial(dynamicFriction, restitution);
    }
    getMaterial(shape) {
        shape;
        throw new Error("Method not implemented.");
    }
    setDensity(shape, density) {
        shape;
        density;
        throw new Error("Method not implemented.");
    }
    getDensity(shape) {
        shape;
        throw new Error("Method not implemented.");
    }
    addChild(shape, newChild, translation, rotation, scale) {
        shape;
        newChild;
        translation;
        rotation;
        scale;
        throw new Error("Method not implemented.");
    }
    removeChild(shape, childIndex) {
        shape;
        childIndex;
        throw new Error("Method not implemented.");
    }
    getNumChildren(shape) {
        shape;
        throw new Error("Method not implemented.");
    }
    getBoundingBox(shape) {
        shape;
        throw new Error("Method not implemented.");
    }
    getBodyBoundingBox(body) {
        body;
        throw new Error("Method not implemented.");
    }
    disposeShape(shape) {
        shape;
        throw new Error("Method not implemented.");
    }
    setTrigger(shape, isTrigger) {
        shape;
        isTrigger;
        throw new Error("Method not implemented.");
    }
    initConstraint(constraint, body, childBody) {
        constraint;
        body;
        childBody;
        throw new Error("Method not implemented.");
    }
    setEnabled(constraint, isEnabled) {
        constraint;
        isEnabled;
        throw new Error("Method not implemented.");
    }
    getEnabled(constraint) {
        constraint;
        throw new Error("Method not implemented.");
    }
    setCollisionsEnabled(constraint, isEnabled) {
        constraint;
        isEnabled;
        throw new Error("Method not implemented.");
    }
    getCollisionsEnabled(constraint) {
        constraint;
        throw new Error("Method not implemented.");
    }
    setAxisFriction(constraint, axis, friction) {
        constraint;
        axis;
        friction;
        throw new Error("Method not implemented.");
    }
    getAxisFriction(constraint, axis) {
        constraint;
        axis;
        throw new Error("Method not implemented.");
    }
    setAxisMode(constraint, axis, limitMode) {
        constraint;
        axis;
        limitMode;
        throw new Error("Method not implemented.");
    }
    getAxisMode(constraint, axis) {
        constraint;
        axis;
        throw new Error("Method not implemented.");
    }
    setAxisMinLimit(constraint, axis, minLimit) {
        constraint;
        axis;
        minLimit;
        throw new Error("Method not implemented.");
    }
    getAxisMinLimit(constraint, axis) {
        constraint;
        axis;
        throw new Error("Method not implemented.");
    }
    setAxisMaxLimit(constraint, axis, limit) {
        constraint;
        axis;
        limit;
        throw new Error("Method not implemented.");
    }
    getAxisMaxLimit(constraint, axis) {
        constraint;
        axis;
        throw new Error("Method not implemented.");
    }
    setAxisMotorType(constraint, axis, motorType) {
        constraint;
        axis;
        motorType;
        throw new Error("Method not implemented.");
    }
    getAxisMotorType(constraint, axis) {
        constraint;
        axis;
        throw new Error("Method not implemented.");
    }
    setAxisMotorTarget(constraint, axis, target) {
        constraint;
        axis;
        target;
        throw new Error("Method not implemented.");
    }
    getAxisMotorTarget(constraint, axis) {
        constraint;
        axis;
        throw new Error("Method not implemented.");
    }
    setAxisMotorMaxForce(constraint, axis, maxForce) {
        constraint;
        axis;
        maxForce;
        throw new Error("Method not implemented.");
    }
    getAxisMotorMaxForce(constraint, axis) {
        constraint;
        axis;
        throw new Error("Method not implemented.");
    }
    disposeConstraint(constraint) {
        constraint;
        throw new Error("Method not implemented.");
    }
    getBodiesUsingConstraint(constraint) {
        constraint;
        throw new Error("Method not implemented.");
    }
    raycast(from, to, result, query) {
        from;
        to;
        result;
        query;
        throw new Error("Method not implemented.");
    }
    dispose() {
        throw new Error("Method not implemented.");
    }
}

;// ./src/Test/Scene/tPhysicsPlugin.ts















// import { Inspector } from "@babylonjs/inspector";



class SceneBuilder {
    async build(_canvas, engine) {
        const scene = new core_scene/* Scene */.Z(engine);
        scene.clearColor = new math_color/* Color4 */.ov(0.95, 0.95, 0.95, 1.0);
        const camera = new arcRotateCamera/* ArcRotateCamera */.L("arcRotateCamera", 0, 0, 500, new math_vector/* Vector3 */.Pq(0, 0, 0), scene);
        camera.minZ = 1;
        camera.maxZ = 1000;
        camera.setPosition(new math_vector/* Vector3 */.Pq(60, 40, -50));
        camera.attachControl(undefined, false);
        camera.inertia = 0.8;
        camera.speed = 10;
        const hemisphericLight = new Lights_hemisphericLight/* HemisphericLight */.g("hemisphericLight", new math_vector/* Vector3 */.Pq(0, 1, 0), scene);
        hemisphericLight.intensity = 0.5;
        hemisphericLight.specular = new math_color/* Color3 */.v9(0, 0, 0);
        hemisphericLight.groundColor = new math_color/* Color3 */.v9(1, 1, 1);
        const directionalLight = new Lights_directionalLight/* DirectionalLight */.Z("directionalLight", new math_vector/* Vector3 */.Pq(0.5, -1, 1), scene);
        directionalLight.intensity = 0.5;
        const shadowBound = 60;
        directionalLight.shadowMaxZ = shadowBound;
        directionalLight.shadowMinZ = -shadowBound;
        directionalLight.autoCalcShadowZBounds = false;
        directionalLight.autoUpdateExtends = false;
        directionalLight.shadowOrthoScale = 0;
        directionalLight.orthoTop = shadowBound;
        directionalLight.orthoBottom = -shadowBound;
        directionalLight.orthoLeft = -shadowBound;
        directionalLight.orthoRight = shadowBound;
        const shadowGenerator = new Shadows_shadowGenerator/* ShadowGenerator */.o(2048, directionalLight, true);
        shadowGenerator.transparencyShadow = true;
        shadowGenerator.usePercentageCloserFiltering = true;
        shadowGenerator.forceBackFacesOnly = false;
        shadowGenerator.bias = 0.004;
        shadowGenerator.filteringQuality = Shadows_shadowGenerator/* ShadowGenerator */.o.QUALITY_MEDIUM;
        // Inspector.Show(scene, { enablePopup: false });
        const wasmInstance = await (0,bulletWasmInstance/* getBulletWasmInstance */.e)(new multiDebug/* BulletWasmInstanceTypeMD */.t(), 2);
        scene.enablePhysics(new math_vector/* Vector3 */.Pq(0, -9.8, 0), new BulletPlugin(wasmInstance));
        {
            const ground = (0,planeBuilder/* CreatePlane */.x)("ground", { size: 120 }, scene);
            ground.rotationQuaternion = math_vector/* Quaternion */.PT.RotationAxis(new math_vector/* Vector3 */.Pq(1, 0, 0), Math.PI / 2);
            shadowGenerator.addShadowCaster(ground);
            ground.receiveShadows = true;
            const groundShape = new physicsShape/* PhysicsShapeBox */.cL(new math_vector/* Vector3 */.Pq(0, 0, -100), math_vector/* Quaternion */.PT.Identity(), new math_vector/* Vector3 */.Pq(1000, 1000, 200), scene);
            groundShape.material = {
                friction: 10,
                restitution: 0.5
            };
            groundShape.filterCollideMask = 0xFFFF;
            groundShape.filterMembershipMask = 1 << 0;
            const body = new physicsBody/* PhysicsBody */.a(ground, IPhysicsEnginePlugin/* PhysicsMotionType */.AH.STATIC, false, scene);
            body.setMassProperties({ mass: 0 });
            body.setLinearDamping(0.3);
            body.setAngularDamping(0.3);
            body.computeMassProperties();
        }
        // const rbCount = 512 * 2;
        // const baseBox = CreateBox("box", { size: 2 }, scene);
        // shadowGenerator.addShadowCaster(baseBox);
        // baseBox.receiveShadows = true;
        // const rigidbodyMatrixBuffer = new Float32Array(rbCount * 16);
        // baseBox.thinInstanceSetBuffer("matrix", rigidbodyMatrixBuffer, 16, false);
        // const boxShape = new PhysicsBoxShape(runtime, new Vector3(1, 1, 1));
        // const rbInfoList = new RigidBodyConstructionInfoList(wasmInstance, rbCount);
        // for (let i = 0; i < rbCount; ++i) {
        //     rbInfoList.setShape(i, boxShape);
        //     const initialTransform = Matrix.TranslationToRef(0, 1 + i * 2, 0, matrix);
        //     rbInfoList.setInitialTransform(i, initialTransform);
        //     rbInfoList.setFriction(i, 1.0);
        //     rbInfoList.setLinearDamping(i, 0.3);
        //     rbInfoList.setAngularDamping(i, 0.3);
        // }
        // const boxRigidBodyBundle = new RigidBodyBundle(runtime, rbInfoList);
        // runtime.addRigidBodyBundle(boxRigidBodyBundle);
        // for (let i = 0; i < rbCount; i += 2) {
        //     const indices = [i, i + 1] as const;
        //     const constraint = new Generic6DofSpringConstraint(runtime, boxRigidBodyBundle, indices, Matrix.Translation(0, -1.2, 0), Matrix.Translation(0, 1.2, 0), true);
        //     constraint.setLinearLowerLimit(new Vector3(0, 0, 0));
        //     constraint.setLinearUpperLimit(new Vector3(0, 0, 0));
        //     constraint.setAngularLowerLimit(new Vector3(Math.PI / 4, 0, 0));
        //     constraint.setAngularUpperLimit(new Vector3(0, 0, 0));
        //     for (let i = 0; i < 6; ++i) {
        //         constraint.enableSpring(i, true);
        //         constraint.setStiffness(i, 100);
        //         constraint.setDamping(i, 1);
        //     }
        //     runtime.addConstraint(constraint, false);
        // }
        return scene;
    }
}


/***/ })

}]);