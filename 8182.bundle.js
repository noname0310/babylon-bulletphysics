"use strict";
(self["webpackChunkbabylon_bulletphysics"] = self["webpackChunkbabylon_bulletphysics"] || []).push([[8182],{

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

/***/ 67168:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   vC: () => (/* binding */ Generic6DofSpringConstraint)
/* harmony export */ });
/* unused harmony exports Constraint, Generic6DofConstraint */
class ConstraintInner {
    _wasmInstance;
    _ptr;
    _bodyReference;
    _referenceCount;
    constructor(wasmInstance, ptr, bodyReference) {
        this._wasmInstance = wasmInstance;
        this._ptr = ptr;
        this._bodyReference = bodyReference;
        if (Array.isArray(bodyReference)) {
            bodyReference[0].addReference();
            bodyReference[1].addReference();
        }
        else {
            bodyReference.addReference();
        }
        this._referenceCount = 0;
    }
    dispose() {
        if (this._referenceCount > 0) {
            throw new Error("Cannot dispose constraint while it still has references");
        }
        if (this._ptr === 0) {
            return;
        }
        // this operation is thread-safe because the constraint is not belong to any physics world
        this._wasmInstance.deref()?.destroyConstraint(this._ptr);
        this._ptr = 0;
        if (Array.isArray(this._bodyReference)) {
            this._bodyReference[0].removeReference();
            this._bodyReference[1].removeReference();
        }
        else {
            this._bodyReference.removeReference();
        }
        this._bodyReference = null;
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
    get hasReferences() {
        return 0 < this._referenceCount;
    }
}
function constraintFinalizer(inner) {
    inner.dispose();
}
const constraintRegistryMap = new WeakMap();
class Constraint {
    runtime;
    _inner;
    _worldReference;
    constructor(runtime, ptr, bodyReference) {
        if (Array.isArray(bodyReference)) {
            if (bodyReference[0].runtime !== runtime || bodyReference[1].runtime !== runtime) {
                throw new Error("Cannot create constraint between bodies from different runtimes");
            }
        }
        else {
            if (bodyReference.runtime !== runtime) {
                throw new Error("Cannot create constraint between body and bundle from different runtimes");
            }
        }
        this.runtime = runtime;
        this._inner = new ConstraintInner(new WeakRef(runtime.wasmInstance), ptr, bodyReference);
        this._worldReference = null;
        let registry = constraintRegistryMap.get(runtime.wasmInstance);
        if (registry === undefined) {
            registry = new FinalizationRegistry(constraintFinalizer);
            constraintRegistryMap.set(runtime.wasmInstance, registry);
        }
        registry.register(this, this._inner, this);
    }
    dispose() {
        if (this._inner.ptr === 0) {
            return;
        }
        this._inner.dispose();
        const registry = constraintRegistryMap.get(this.runtime.wasmInstance);
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
    /**
     * @internal
     */
    setWorldReference(worldReference) {
        if (this._worldReference !== null && worldReference !== null) {
            throw new Error("Cannot add constraint to multiple worlds");
        }
        if (this._worldReference === worldReference) {
            return;
        }
        this._worldReference = worldReference;
        if (worldReference !== null) {
            this._inner.addReference();
        }
        else {
            this._inner.removeReference();
        }
    }
}
const matrixBufferSize = 16 * Float32Array.BYTES_PER_ELEMENT;
class Generic6DofConstraint extends Constraint {
    constructor(runtime, bodyAOrBundle, bodyBOrIndices, frameA, frameB, useLinearReferenceFrameA) {
        const wasmInstance = runtime.wasmInstance;
        const frameABufferPtr = wasmInstance.allocateBuffer(matrixBufferSize);
        const frameABuffer = wasmInstance.createTypedArray(Float32Array, frameABufferPtr, matrixBufferSize / Float32Array.BYTES_PER_ELEMENT);
        frameA.copyToArray(frameABuffer.array);
        const frameBBufferPtr = wasmInstance.allocateBuffer(matrixBufferSize);
        const frameBBuffer = wasmInstance.createTypedArray(Float32Array, frameBBufferPtr, matrixBufferSize / Float32Array.BYTES_PER_ELEMENT);
        frameB.copyToArray(frameBBuffer.array);
        const isBundleParam = Array.isArray(bodyBOrIndices);
        const ptr = isBundleParam
            ? wasmInstance.createGeneric6DofConstraintFromBundle(bodyAOrBundle.ptr, bodyBOrIndices[0], bodyBOrIndices[1], frameABufferPtr, frameBBufferPtr, useLinearReferenceFrameA)
            : wasmInstance.createGeneric6DofConstraint(bodyAOrBundle.ptr, bodyBOrIndices.ptr, frameABufferPtr, frameBBufferPtr, useLinearReferenceFrameA);
        wasmInstance.deallocateBuffer(frameABufferPtr, matrixBufferSize);
        wasmInstance.deallocateBuffer(frameBBufferPtr, matrixBufferSize);
        const bodyReference = isBundleParam
            ? bodyAOrBundle
            : [bodyAOrBundle, bodyBOrIndices];
        super(runtime, ptr, bodyReference);
    }
    setLinearLowerLimit(limit) {
        if (this._inner.hasReferences) {
            this.runtime.lock.wait();
        }
        this.runtime.wasmInstance.constraintSetLinearLowerLimit(this._inner.ptr, limit.x, limit.y, limit.z);
    }
    setLinearUpperLimit(limit) {
        if (this._inner.hasReferences) {
            this.runtime.lock.wait();
        }
        this.runtime.wasmInstance.constraintSetLinearUpperLimit(this._inner.ptr, limit.x, limit.y, limit.z);
    }
    setAngularLowerLimit(limit) {
        if (this._inner.hasReferences) {
            this.runtime.lock.wait();
        }
        this.runtime.wasmInstance.constraintSetAngularLowerLimit(this._inner.ptr, limit.x, limit.y, limit.z);
    }
    setAngularUpperLimit(limit) {
        if (this._inner.hasReferences) {
            this.runtime.lock.wait();
        }
        this.runtime.wasmInstance.constraintSetAngularUpperLimit(this._inner.ptr, limit.x, limit.y, limit.z);
    }
}
class Generic6DofSpringConstraint extends Constraint {
    constructor(runtime, bodyAOrBundle, bodyBOrIndices, frameA, frameB, useLinearReferenceFrameA) {
        const wasmInstance = runtime.wasmInstance;
        const frameABufferPtr = wasmInstance.allocateBuffer(matrixBufferSize);
        const frameABuffer = wasmInstance.createTypedArray(Float32Array, frameABufferPtr, matrixBufferSize / Float32Array.BYTES_PER_ELEMENT);
        frameA.copyToArray(frameABuffer.array);
        const frameBBufferPtr = wasmInstance.allocateBuffer(matrixBufferSize);
        const frameBBuffer = wasmInstance.createTypedArray(Float32Array, frameBBufferPtr, matrixBufferSize / Float32Array.BYTES_PER_ELEMENT);
        frameB.copyToArray(frameBBuffer.array);
        const isBundleParam = Array.isArray(bodyBOrIndices);
        const ptr = isBundleParam
            ? wasmInstance.createGeneric6DofSpringConstraintFromBundle(bodyAOrBundle.ptr, bodyBOrIndices[0], bodyBOrIndices[1], frameABufferPtr, frameBBufferPtr, useLinearReferenceFrameA)
            : wasmInstance.createGeneric6DofSpringConstraint(bodyAOrBundle.ptr, bodyBOrIndices.ptr, frameABufferPtr, frameBBufferPtr, useLinearReferenceFrameA);
        wasmInstance.deallocateBuffer(frameABufferPtr, matrixBufferSize);
        wasmInstance.deallocateBuffer(frameBBufferPtr, matrixBufferSize);
        const bodyReference = isBundleParam
            ? bodyAOrBundle
            : [bodyAOrBundle, bodyBOrIndices];
        super(runtime, ptr, bodyReference);
    }
    setLinearLowerLimit(limit) {
        if (this._inner.hasReferences) {
            this.runtime.lock.wait();
        }
        this.runtime.wasmInstance.constraintSetLinearLowerLimit(this._inner.ptr, limit.x, limit.y, limit.z);
    }
    setLinearUpperLimit(limit) {
        if (this._inner.hasReferences) {
            this.runtime.lock.wait();
        }
        this.runtime.wasmInstance.constraintSetLinearUpperLimit(this._inner.ptr, limit.x, limit.y, limit.z);
    }
    setAngularLowerLimit(limit) {
        if (this._inner.hasReferences) {
            this.runtime.lock.wait();
        }
        this.runtime.wasmInstance.constraintSetAngularLowerLimit(this._inner.ptr, limit.x, limit.y, limit.z);
    }
    setAngularUpperLimit(limit) {
        if (this._inner.hasReferences) {
            this.runtime.lock.wait();
        }
        this.runtime.wasmInstance.constraintSetAngularUpperLimit(this._inner.ptr, limit.x, limit.y, limit.z);
    }
    enableSpring(index, onOff) {
        if (this._inner.hasReferences) {
            this.runtime.lock.wait();
        }
        this.runtime.wasmInstance.constraintEnableSpring(this._inner.ptr, index, onOff);
    }
    setStiffness(index, stiffness) {
        if (this._inner.hasReferences) {
            this.runtime.lock.wait();
        }
        this.runtime.wasmInstance.constraintSetStiffness(this._inner.ptr, index, stiffness);
    }
    setDamping(index, damping) {
        if (this._inner.hasReferences) {
            this.runtime.lock.wait();
        }
        this.runtime.wasmInstance.constraintSetDamping(this._inner.ptr, index, damping);
    }
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

/***/ 1592:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   U: () => (/* binding */ RigidBody)
/* harmony export */ });
/**
 * MotionState representations
 *
 * vtable: u32 : offset 0
 * padding: u32[3] : offset 4
 * matrix_rowx: f32[3] : offset 16
 * padding: u32 : offset 28
 * matrix_rowy: f32[3] : offset 32
 * padding: u32 : offset 44
 * matrix_rowz: f32[3] : offset 48
 * padding: u32 : offset 60
 * translation: f32[3] : offset 64
 * padding: u32 : offset 76
 *
 * --size: 80
 */
class RigidBodyInner {
    _wasmInstance;
    _ptr;
    _shapeReference;
    _referenceCount;
    _shadowCount;
    constructor(wasmInstance, ptr, shapeReference) {
        this._wasmInstance = wasmInstance;
        this._ptr = ptr;
        this._shapeReference = shapeReference;
        shapeReference.addReference();
        this._referenceCount = 0;
        this._shadowCount = 0;
    }
    dispose() {
        if (this._referenceCount > 0) {
            throw new Error("Cannot dispose rigid body while it still has references");
        }
        if (this._shadowCount > 0) {
            throw new Error("Cannot dispose rigid body while it still has shadows");
        }
        if (this._ptr === 0) {
            return;
        }
        // this operation is thread-safe because the rigid body is not belong to any physics world
        this._wasmInstance.deref()?.destroyRigidBody(this._ptr);
        this._ptr = 0;
        this._shapeReference.removeReference();
        this._shapeReference = null;
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
    get hasReferences() {
        return 0 < this._referenceCount;
    }
    addShadow() {
        this._shadowCount += 1;
    }
    removeShadow() {
        this._shadowCount -= 1;
    }
    get hasShadows() {
        return 0 < this._shadowCount;
    }
}
function rigidBodyFinalizer(inner) {
    inner.dispose();
}
const physicsRigidBodyRegistryMap = new WeakMap();
class RigidBody {
    runtime;
    _motionStatePtr;
    _bufferedMotionStatePtr;
    _inner;
    _worldReference;
    impl;
    isDynamic;
    constructor(runtime, info, n) {
        const infoPtr = n !== undefined ? info.getPtr(n) : info.ptr;
        if (infoPtr === 0) {
            throw new Error("Cannot create rigid body with null pointer");
        }
        let shape;
        if (n !== undefined) {
            shape = info.getShape(n);
        }
        else {
            shape = info.shape;
        }
        if (shape === null) {
            throw new Error("Cannot create rigid body with null shape");
        }
        if (shape.runtime !== runtime) {
            throw new Error("Cannot create rigid body with shapes from different runtimes");
        }
        this.runtime = runtime;
        const wasmInstance = runtime.wasmInstance;
        const ptr = wasmInstance.createRigidBody(infoPtr);
        const motionStatePtr = wasmInstance.rigidBodyGetMotionStatePtr(ptr);
        this._motionStatePtr = wasmInstance.createTypedArray(Float32Array, motionStatePtr, 20 /* Constants.MotionStateSizeInFloat32Array */);
        const bufferedMotionStatePtr = wasmInstance.rigidBodyGetBufferedMotionStatePtr(ptr);
        this._bufferedMotionStatePtr = wasmInstance.createTypedArray(Float32Array, bufferedMotionStatePtr, 20 /* Constants.MotionStateSizeInFloat32Array */);
        this._inner = new RigidBodyInner(new WeakRef(runtime.wasmInstance), ptr, shape);
        this._worldReference = null;
        let registry = physicsRigidBodyRegistryMap.get(wasmInstance);
        if (registry === undefined) {
            registry = new FinalizationRegistry(rigidBodyFinalizer);
            physicsRigidBodyRegistryMap.set(wasmInstance, registry);
        }
        registry.register(this, this._inner, this);
        this.impl = runtime.createRigidBodyImpl();
        this.isDynamic = n !== undefined
            ? info.getMotionType(n) === 0 /* MotionType.Dynamic */
            : info.motionType === 0 /* MotionType.Dynamic */;
    }
    dispose() {
        if (this._inner.ptr === 0) {
            return;
        }
        this._inner.dispose();
        const registry = physicsRigidBodyRegistryMap.get(this.runtime.wasmInstance);
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
    /**
     * @internal
     */
    addShadowReference() {
        this._inner.addShadow();
    }
    /**
     * @internal
     */
    removeShadowReference() {
        this._inner.removeShadow();
    }
    /**
     * @internal
     */
    get hasShadows() {
        return this._inner.hasShadows;
    }
    /**
     * @internal
     */
    setWorldReference(worldReference) {
        if (this._worldReference !== null && worldReference !== null) {
            throw new Error("Cannot add rigid body to multiple worlds");
        }
        if (this._worldReference === worldReference) {
            return;
        }
        this._worldReference = worldReference;
        if (this._worldReference !== null) {
            this._inner.addReference();
        }
        else {
            this._inner.removeReference();
        }
    }
    /**
     * @internal
     */
    getWorldReference() {
        return this._worldReference;
    }
    /**
     * @internal
     */
    updateBufferedMotionState(forceUseFrontBuffer) {
        this._nullCheck();
        if (forceUseFrontBuffer) {
            const motionStatePtr = this.runtime.wasmInstance.rigidBodyGetMotionStatePtr(this._inner.ptr);
            this._bufferedMotionStatePtr = this.runtime.wasmInstance.createTypedArray(Float32Array, motionStatePtr, 20 /* Constants.MotionStateSizeInFloat32Array */);
        }
        else {
            const bufferedMotionStatePtr = this.runtime.wasmInstance.rigidBodyGetBufferedMotionStatePtr(this._inner.ptr);
            this._bufferedMotionStatePtr = this.runtime.wasmInstance.createTypedArray(Float32Array, bufferedMotionStatePtr, 20 /* Constants.MotionStateSizeInFloat32Array */);
        }
    }
    _nullCheck() {
        if (this._inner.ptr === 0) {
            throw new Error("Cannot access disposed rigid body");
        }
    }
    makeKinematic() {
        this._nullCheck();
        if (this._inner.hasReferences) {
            this.runtime.lock.wait();
        }
        this.runtime.wasmInstance.rigidBodyMakeKinematic(this._inner.ptr);
    }
    restoreDynamic() {
        this._nullCheck();
        if (this._inner.hasReferences) {
            this.runtime.lock.wait();
        }
        this.runtime.wasmInstance.rigidBodyRestoreDynamic(this._inner.ptr);
    }
    getTransformMatrixToRef(result) {
        this._nullCheck();
        if (this._inner.hasReferences && this.impl.shouldSync) {
            this.runtime.lock.wait();
        }
        const m = this._bufferedMotionStatePtr.array;
        return result.set(m[4], m[8], m[12], 0, m[5], m[9], m[13], 0, m[6], m[10], m[14], 0, m[16], m[17], m[18], 1);
    }
    getTransformMatrixToArray(result, offset = 0) {
        this._nullCheck();
        if (this._inner.hasReferences && this.impl.shouldSync) {
            this.runtime.lock.wait();
        }
        const m = this._bufferedMotionStatePtr.array;
        result[offset] = m[4];
        result[offset + 1] = m[8];
        result[offset + 2] = m[12];
        result[offset + 3] = 0;
        result[offset + 4] = m[5];
        result[offset + 5] = m[9];
        result[offset + 6] = m[13];
        result[offset + 7] = 0;
        result[offset + 8] = m[6];
        result[offset + 9] = m[10];
        result[offset + 10] = m[14];
        result[offset + 11] = 0;
        result[offset + 12] = m[16];
        result[offset + 13] = m[17];
        result[offset + 14] = m[18];
        result[offset + 15] = 1;
    }
    setTransformMatrix(matrix) {
        this.setTransformMatrixFromArray(matrix.m, 0);
    }
    setTransformMatrixFromArray(array, offset = 0) {
        this._nullCheck();
        if (this._inner.hasReferences && this.impl.shouldSync) {
            this.runtime.lock.wait();
        }
        this.impl.setTransformMatrixFromArray(this._motionStatePtr, array, offset);
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


/***/ })

}]);