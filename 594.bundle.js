"use strict";
(self["webpackChunkbabylon_bulletphysics"] = self["webpackChunkbabylon_bulletphysics"] || []).push([[594],{

/***/ 67648:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Y: () => (/* binding */ RigidBodyBundle)
/* harmony export */ });
class RigidBodyBundleInner {
    _wasmInstance;
    _ptr;
    _shapeReferences;
    _referenceCount;
    _shadowCount;
    constructor(wasmInstance, ptr, shapeReferences) {
        this._wasmInstance = wasmInstance;
        this._ptr = ptr;
        this._shapeReferences = shapeReferences;
        for (const shape of shapeReferences) {
            shape.addReference();
        }
        this._referenceCount = 0;
        this._shadowCount = 0;
    }
    dispose() {
        if (this._referenceCount > 0) {
            throw new Error("Cannot dispose rigid body bundle while it still has references");
        }
        if (this._ptr === 0) {
            return;
        }
        // this operation is thread-safe because the rigid body bundle is not belong to any physics world
        this._wasmInstance.deref()?.destroyRigidBodyBundle(this._ptr);
        this._ptr = 0;
        for (const shape of this._shapeReferences) {
            shape.removeReference();
        }
        this._shapeReferences.clear();
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
function rigidBodyBundleFinalizer(inner) {
    inner.dispose();
}
const physicsRigidBodyBundleRegistryMap = new WeakMap();
class RigidBodyBundle {
    runtime;
    _motionStatesPtr;
    _bufferedMotionStatesPtr;
    _inner;
    _count;
    _worldReference;
    impl;
    isContainsDynamic;
    constructor(runtime, info) {
        if (info.ptr === 0) {
            throw new Error("Cannot create rigid body bundle with null pointer");
        }
        const count = info.count;
        const shapeReferences = new Set();
        for (let i = 0; i < count; ++i) {
            const shape = info.getShape(i);
            if (shape === null) {
                throw new Error("Cannot create rigid body bundle with null shape");
            }
            if (shape.runtime !== runtime) {
                throw new Error("Cannot create rigid body bundle with shapes from different runtimes");
            }
            shapeReferences.add(shape);
        }
        this.runtime = runtime;
        const wasmInstance = runtime.wasmInstance;
        const ptr = wasmInstance.createRigidBodyBundle(info.ptr, count);
        const motionStatesPtr = wasmInstance.rigidBodyBundleGetMotionStatesPtr(ptr);
        this._motionStatesPtr = wasmInstance.createTypedArray(Float32Array, motionStatesPtr, count * 20 /* Constants.MotionStateSizeInFloat32Array */);
        const bufferedMotionStatesPtr = wasmInstance.rigidBodyBundleGetBufferedMotionStatesPtr(ptr);
        this._bufferedMotionStatesPtr = wasmInstance.createTypedArray(Float32Array, bufferedMotionStatesPtr, count * 20 /* Constants.MotionStateSizeInFloat32Array */);
        this._inner = new RigidBodyBundleInner(new WeakRef(runtime.wasmInstance), ptr, shapeReferences);
        this._count = count;
        this._worldReference = null;
        let registry = physicsRigidBodyBundleRegistryMap.get(wasmInstance);
        if (registry === undefined) {
            registry = new FinalizationRegistry(rigidBodyBundleFinalizer);
            physicsRigidBodyBundleRegistryMap.set(wasmInstance, registry);
        }
        registry.register(this, this._inner, this);
        this.impl = runtime.createRigidBodyBundleImpl(this);
        let isContainsDynamic = false;
        for (let i = 0; i < count; ++i) {
            if (info.getMotionType(i) === 0 /* MotionType.Dynamic */) {
                isContainsDynamic = true;
                break;
            }
        }
        this.isContainsDynamic = isContainsDynamic;
    }
    dispose() {
        if (this._inner.ptr === 0) {
            return;
        }
        this._inner.dispose();
        const registry = physicsRigidBodyBundleRegistryMap.get(this.runtime.wasmInstance);
        registry?.unregister(this);
    }
    /**
     * @internal
     */
    get ptr() {
        return this._inner.ptr;
    }
    get count() {
        return this._count;
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
            throw new Error("Cannot add rigid body bundle to multiple worlds");
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
    /**
     * @internal
     */
    getWorldReference() {
        return this._worldReference;
    }
    /**
     * @internal
     */
    updateBufferedMotionStates(forceUseFrontBuffer) {
        this._nullCheck();
        if (forceUseFrontBuffer) {
            const motionStatesPtr = this.runtime.wasmInstance.rigidBodyBundleGetMotionStatesPtr(this._inner.ptr);
            this._bufferedMotionStatesPtr = this.runtime.wasmInstance.createTypedArray(Float32Array, motionStatesPtr, this._count * 20 /* Constants.MotionStateSizeInFloat32Array */);
        }
        else {
            const bufferedMotionStatesPtr = this.runtime.wasmInstance.rigidBodyBundleGetBufferedMotionStatesPtr(this._inner.ptr);
            this._bufferedMotionStatesPtr = this.runtime.wasmInstance.createTypedArray(Float32Array, bufferedMotionStatesPtr, this._count * 20 /* Constants.MotionStateSizeInFloat32Array */);
        }
    }
    _nullCheck() {
        if (this._inner.ptr === 0) {
            throw new Error("Cannot access disposed rigid body bundle");
        }
    }
    makeKinematic(index) {
        this._nullCheck();
        if (index < 0 || this._count <= index) {
            throw new RangeError("Index out of range");
        }
        if (this._inner.hasReferences) {
            this.runtime.lock.wait();
        }
        this.runtime.wasmInstance.rigidBodyBundleMakeKinematic(this._inner.ptr, index);
    }
    restoreDynamic(index) {
        this._nullCheck();
        if (index < 0 || this._count <= index) {
            throw new RangeError("Index out of range");
        }
        if (this._inner.hasReferences) {
            this.runtime.lock.wait();
        }
        this.runtime.wasmInstance.rigidBodyBundleRestoreDynamic(this._inner.ptr, index);
    }
    getTransformMatrixToRef(index, result) {
        this._nullCheck();
        if (index < 0 || this._count <= index) {
            throw new RangeError("Index out of range");
        }
        if (this._inner.hasReferences && this.impl.shouldSync) {
            this.runtime.lock.wait();
        }
        const m = this._bufferedMotionStatesPtr.array;
        const offset = index * 20 /* Constants.MotionStateSizeInFloat32Array */;
        return result.set(m[offset + 4], m[offset + 8], m[offset + 12], 0, m[offset + 5], m[offset + 9], m[offset + 13], 0, m[offset + 6], m[offset + 10], m[offset + 14], 0, m[offset + 16], m[offset + 17], m[offset + 18], 1);
    }
    getTransformMatrixToArray(index, result, offset = 0) {
        this._nullCheck();
        if (index < 0 || this._count <= index) {
            throw new RangeError("Index out of range");
        }
        if (this._inner.hasReferences && this.impl.shouldSync) {
            this.runtime.lock.wait();
        }
        const m = this._bufferedMotionStatesPtr.array;
        const mOffset = index * 20 /* Constants.MotionStateSizeInFloat32Array */;
        result[offset] = m[mOffset + 4];
        result[offset + 1] = m[mOffset + 8];
        result[offset + 2] = m[mOffset + 12];
        result[offset + 3] = 0;
        result[offset + 4] = m[mOffset + 5];
        result[offset + 5] = m[mOffset + 9];
        result[offset + 6] = m[mOffset + 13];
        result[offset + 7] = 0;
        result[offset + 8] = m[mOffset + 6];
        result[offset + 9] = m[mOffset + 10];
        result[offset + 10] = m[mOffset + 14];
        result[offset + 11] = 0;
        result[offset + 12] = m[mOffset + 16];
        result[offset + 13] = m[mOffset + 17];
        result[offset + 14] = m[mOffset + 18];
        result[offset + 15] = 1;
    }
    getTransformMatricesToArray(result, offset = 0) {
        this._nullCheck();
        if (this._inner.hasReferences && this.impl.shouldSync) {
            this.runtime.lock.wait();
        }
        const m = this._bufferedMotionStatesPtr.array;
        const count = this._count;
        let mOffset = 0;
        let rOffset = offset;
        for (let i = 0; i < count; ++i) {
            result[rOffset] = m[mOffset + 4];
            result[rOffset + 1] = m[mOffset + 8];
            result[rOffset + 2] = m[mOffset + 12];
            result[rOffset + 3] = 0;
            result[rOffset + 4] = m[mOffset + 5];
            result[rOffset + 5] = m[mOffset + 9];
            result[rOffset + 6] = m[mOffset + 13];
            result[rOffset + 7] = 0;
            result[rOffset + 8] = m[mOffset + 6];
            result[rOffset + 9] = m[mOffset + 10];
            result[rOffset + 10] = m[mOffset + 14];
            result[rOffset + 11] = 0;
            result[rOffset + 12] = m[mOffset + 16];
            result[rOffset + 13] = m[mOffset + 17];
            result[rOffset + 14] = m[mOffset + 18];
            result[rOffset + 15] = 1;
            mOffset += 20 /* Constants.MotionStateSizeInFloat32Array */;
            rOffset += 16;
        }
    }
    setTransformMatrix(index, matrix) {
        this.setTransformMatrixFromArray(index, matrix.m, 0);
    }
    setTransformMatrixFromArray(index, array, offset = 0) {
        this._nullCheck();
        if (index < 0 || this._count <= index) {
            throw new RangeError("Index out of range");
        }
        if (this._inner.hasReferences && this.impl.shouldSync) {
            this.runtime.lock.wait();
        }
        this.impl.setTransformMatrixFromArray(this._motionStatesPtr, index, array, offset);
    }
    setTransformMatricesFromArray(array, offset = 0) {
        this._nullCheck();
        if (array.length < this._count * 16) {
            throw new RangeError("Array is too short");
        }
        if (this._inner.hasReferences && this.impl.shouldSync) {
            this.runtime.lock.wait();
        }
        this.impl.setTransformMatricesFromArray(this._motionStatesPtr, array, offset);
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


/***/ })

}]);