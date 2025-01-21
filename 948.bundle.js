"use strict";
(self["webpackChunkbabylon_bulletphysics"] = self["webpackChunkbabylon_bulletphysics"] || []).push([[948],{

/***/ 912:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   d: () => (/* binding */ BufferedRigidBodyBundleImpl)
/* harmony export */ });
class BufferedRigidBodyBundleImpl {
    shouldSync;
    /**
     * for setTransformMatrix
     */
    _writeMatrices;
    _isWriteMatricesDirty;
    _writeMatrixDirtyFlags;
    _count;
    constructor(count) {
        this.shouldSync = false;
        this._writeMatrices = new Float32Array(count * 16);
        this._isWriteMatricesDirty = false;
        this._writeMatrixDirtyFlags = new Uint8Array(count);
        this._count = count;
    }
    commitToMotionState(motionStatesPtr) {
        if (!this._isWriteMatricesDirty) {
            return;
        }
        const n = this._writeMatrices;
        const m = motionStatesPtr.array;
        const writeMatrixDirtyFlags = this._writeMatrixDirtyFlags;
        const count = this._count;
        let nOffset = 0;
        let mOffset = 0;
        for (let i = 0; i < count; ++i) {
            if (writeMatrixDirtyFlags[i] === 0) {
                nOffset += 16;
                mOffset += 20 /* Constants.MotionStateSizeInFloat32Array */;
                continue;
            }
            m[mOffset + 4] = n[nOffset];
            m[mOffset + 8] = n[nOffset + 1];
            m[mOffset + 12] = n[nOffset + 2];
            m[mOffset + 5] = n[nOffset + 4];
            m[mOffset + 9] = n[nOffset + 5];
            m[mOffset + 13] = n[nOffset + 6];
            m[mOffset + 6] = n[nOffset + 8];
            m[mOffset + 10] = n[nOffset + 9];
            m[mOffset + 14] = n[nOffset + 10];
            m[mOffset + 16] = n[nOffset + 12];
            m[mOffset + 17] = n[nOffset + 13];
            m[mOffset + 18] = n[nOffset + 14];
            writeMatrixDirtyFlags[i] = 0;
            nOffset += 16;
            mOffset += 20 /* Constants.MotionStateSizeInFloat32Array */;
        }
        this._isWriteMatricesDirty = false;
    }
    setTransformMatrixFromArray(_motionStatesPtr, index, array, offset = 0) {
        const m = this._writeMatrices;
        const writeMatrixDirtyFlags = this._writeMatrixDirtyFlags;
        const mOffset = index * 16;
        m[mOffset] = array[offset];
        m[mOffset + 1] = array[offset + 1];
        m[mOffset + 2] = array[offset + 2];
        m[mOffset + 3] = 0;
        m[mOffset + 4] = array[offset + 4];
        m[mOffset + 5] = array[offset + 5];
        m[mOffset + 6] = array[offset + 6];
        m[mOffset + 7] = 0;
        m[mOffset + 8] = array[offset + 8];
        m[mOffset + 9] = array[offset + 9];
        m[mOffset + 10] = array[offset + 10];
        m[mOffset + 11] = 0;
        m[mOffset + 12] = array[offset + 12];
        m[mOffset + 13] = array[offset + 13];
        m[mOffset + 14] = array[offset + 14];
        m[mOffset + 15] = 1;
        writeMatrixDirtyFlags[index] = 1;
        this._isWriteMatricesDirty = true;
    }
    setTransformMatricesFromArray(_motionStatesPtr, array, offset = 0) {
        this._writeMatrices.set(array, offset);
        this._isWriteMatricesDirty = true;
    }
}


/***/ }),

/***/ 3880:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   V: () => (/* binding */ BufferedRigidBodyImpl)
/* harmony export */ });
class BufferedRigidBodyImpl {
    shouldSync;
    /**
     * for setTransformMatrix
     */
    _writeMatrix;
    _isWriteMatrixDirty;
    constructor() {
        this.shouldSync = false;
        this._writeMatrix = new Float32Array(16);
        this._isWriteMatrixDirty = false;
    }
    commitToMotionState(motionStatePtr) {
        if (!this._isWriteMatrixDirty) {
            return;
        }
        const m = this._writeMatrix;
        const n = motionStatePtr.array;
        n[4] = m[0];
        n[8] = m[1];
        n[12] = m[2];
        n[5] = m[4];
        n[9] = m[5];
        n[13] = m[6];
        n[6] = m[8];
        n[10] = m[9];
        n[14] = m[10];
        n[16] = m[12];
        n[17] = m[13];
        n[18] = m[14];
        this._isWriteMatrixDirty = false;
    }
    setTransformMatrixFromArray(_motionStatePtr, array, offset = 0) {
        this._writeMatrix.set(array, offset);
        this._isWriteMatrixDirty = true;
    }
}


/***/ }),

/***/ 3948:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   h: () => (/* binding */ MultiPhysicsRuntime)
/* harmony export */ });
/* harmony import */ var _babylonjs_core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9923);
/* harmony import */ var _babylonjs_core_Misc_observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9848);
/* harmony import */ var _babylonjs_core_scene__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(554);
/* harmony import */ var _Misc_wasmSpinlock__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(37);
/* harmony import */ var _multiPhysicsWorld__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5733);
/* harmony import */ var _Buffered_bufferedRigidBodyBundleImpl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(912);
/* harmony import */ var _Buffered_bufferedRigidBodyImpl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3880);
/* harmony import */ var _Immediate_immediateRigidBodyBundleImpl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5228);
/* harmony import */ var _Immediate_immediateRigidBodyImpl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4444);
/* harmony import */ var _physicsRuntimeEvaluationType__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9009);










class MultiPhysicsRuntimeInner {
    _lock;
    _wasmInstance;
    _ptr;
    _worldReference;
    constructor(lock, wasmInstance, ptr, worldReference) {
        this._lock = lock;
        this._wasmInstance = wasmInstance;
        this._ptr = ptr;
        this._worldReference = worldReference;
        worldReference.addReference();
    }
    dispose() {
        if (this._ptr === 0) {
            return;
        }
        this._lock.wait(); // ensure that the runtime is not evaluating the world
        this._wasmInstance.deref()?.destroyMultiPhysicsRuntime(this._ptr);
        this._ptr = 0;
        this._worldReference.removeReference();
        this._worldReference = null;
    }
    get ptr() {
        return this._ptr;
    }
}
function multiPhysicsRuntimeFinalizer(runtime) {
    runtime.dispose();
}
const multiPhysicsRuntimeRegistryMap = new WeakMap();
class MultiPhysicsRuntime {
    onTickObservable;
    /**
     * @internal
     */
    wasmInstance;
    /**
     * Spinlock for the physics runtime to synchronize access to the physics world state
     * @internal
     */
    lock;
    _inner;
    _physicsWorld;
    _scene;
    _afterAnimationsBinded;
    _evaluationType;
    _usingWasmBackBuffer;
    _rigidBodyUsingBackBuffer;
    _preserveBackBuffer;
    _dynamicShadowCount;
    useDeltaForWorldStep;
    timeStep;
    maxSubSteps;
    fixedTimeStep;
    _rigidBodyList;
    _rigidBodyBundleList;
    /**
     * Creates a new physics runtime
     * @param wasmInstance The Bullet WASM instance
     * @param options The creation options
     */
    constructor(wasmInstance, options = {}) {
        const { allowDynamicShadow = false, preserveBackBuffer = false } = options;
        this.onTickObservable = new _babylonjs_core_Misc_observable__WEBPACK_IMPORTED_MODULE_1__/* .Observable */ .cP();
        this.wasmInstance = wasmInstance;
        const physicsWorld = new _multiPhysicsWorld__WEBPACK_IMPORTED_MODULE_3__/* .MultiPhysicsWorld */ .F(this, allowDynamicShadow);
        const ptr = wasmInstance.createMultiPhysicsRuntime(physicsWorld.ptr);
        const lockPtr = wasmInstance.multiPhysicsRuntimeGetLockStatePtr(ptr);
        this.lock = new _Misc_wasmSpinlock__WEBPACK_IMPORTED_MODULE_4__/* .WasmSpinlock */ .o(wasmInstance.createTypedArray(Uint8Array, lockPtr, 1));
        if (preserveBackBuffer) {
            wasmInstance.multiPhysicsWorldUseMotionStateBuffer(physicsWorld.ptr, true);
        }
        this._inner = new MultiPhysicsRuntimeInner(this.lock, new WeakRef(wasmInstance), ptr, physicsWorld);
        this._physicsWorld = physicsWorld;
        let registry = multiPhysicsRuntimeRegistryMap.get(wasmInstance);
        if (registry === undefined) {
            registry = new FinalizationRegistry(multiPhysicsRuntimeFinalizer);
            multiPhysicsRuntimeRegistryMap.set(wasmInstance, registry);
        }
        registry.register(this, this._inner, this);
        this._scene = null;
        this._afterAnimationsBinded = null;
        this._evaluationType = _physicsRuntimeEvaluationType__WEBPACK_IMPORTED_MODULE_5__/* .PhysicsRuntimeEvaluationType */ .q.Immediate;
        this._usingWasmBackBuffer = preserveBackBuffer;
        this._rigidBodyUsingBackBuffer = false;
        this._preserveBackBuffer = preserveBackBuffer;
        this._dynamicShadowCount = 0;
        this.useDeltaForWorldStep = true;
        this.timeStep = 1 / 60;
        this.maxSubSteps = 10;
        this.fixedTimeStep = 1 / 60;
        this._rigidBodyList = [];
        this._rigidBodyBundleList = [];
    }
    dispose() {
        if (this._inner.ptr === 0) {
            return;
        }
        this._inner.dispose();
        const registry = multiPhysicsRuntimeRegistryMap.get(this.wasmInstance);
        registry?.unregister(this);
    }
    get ptr() {
        return this._inner.ptr;
    }
    _nullCheck() {
        if (this._inner.ptr === 0) {
            throw new Error("Cannot access disposed physics runtime");
        }
    }
    createRigidBodyImpl() {
        if (this._evaluationType === _physicsRuntimeEvaluationType__WEBPACK_IMPORTED_MODULE_5__/* .PhysicsRuntimeEvaluationType */ .q.Immediate) {
            return new _Immediate_immediateRigidBodyImpl__WEBPACK_IMPORTED_MODULE_6__/* .ImmediateRigidBodyImpl */ .x();
        }
        else {
            return new _Buffered_bufferedRigidBodyImpl__WEBPACK_IMPORTED_MODULE_7__/* .BufferedRigidBodyImpl */ .V();
        }
    }
    createRigidBodyBundleImpl(bundle) {
        if (this._evaluationType === _physicsRuntimeEvaluationType__WEBPACK_IMPORTED_MODULE_5__/* .PhysicsRuntimeEvaluationType */ .q.Immediate) {
            return new _Immediate_immediateRigidBodyBundleImpl__WEBPACK_IMPORTED_MODULE_8__/* .ImmediateRigidBodyBundleImpl */ .R(bundle.count);
        }
        else {
            return new _Buffered_bufferedRigidBodyBundleImpl__WEBPACK_IMPORTED_MODULE_9__/* .BufferedRigidBodyBundleImpl */ .d(bundle.count);
        }
    }
    register(scene) {
        if (this._afterAnimationsBinded !== null)
            return;
        this._nullCheck();
        this._afterAnimationsBinded = () => {
            this.afterAnimations(scene.getEngine().getDeltaTime());
        };
        this._scene = scene;
        scene.onAfterAnimationsObservable.add(this._afterAnimationsBinded);
    }
    unregister() {
        if (this._afterAnimationsBinded === null)
            return;
        this._scene.onAfterAnimationsObservable.removeCallback(this._afterAnimationsBinded);
        this._afterAnimationsBinded = null;
        this._scene = null;
    }
    afterAnimations(deltaTime) {
        if (this._inner.ptr === 0) {
            this.unregister();
            return;
        }
        // compute delta time
        if (this.useDeltaForWorldStep) {
            const scene = this._scene;
            if (scene !== null) {
                deltaTime = scene.useConstantAnimationDeltaTime
                    ? 16
                    : Math.max(_babylonjs_core_scene__WEBPACK_IMPORTED_MODULE_2__/* .Scene */ .Z.MinDeltaTime, Math.min(deltaTime, _babylonjs_core_scene__WEBPACK_IMPORTED_MODULE_2__/* .Scene */ .Z.MaxDeltaTime));
            }
            else {
                deltaTime = Math.max(_babylonjs_core_scene__WEBPACK_IMPORTED_MODULE_2__/* .Scene */ .Z.MinDeltaTime, Math.min(deltaTime, _babylonjs_core_scene__WEBPACK_IMPORTED_MODULE_2__/* .Scene */ .Z.MaxDeltaTime));
            }
            deltaTime /= 1000;
        }
        else {
            deltaTime = this.timeStep;
        }
        if (this._evaluationType === _physicsRuntimeEvaluationType__WEBPACK_IMPORTED_MODULE_5__/* .PhysicsRuntimeEvaluationType */ .q.Buffered) {
            if (this.wasmInstance.multiPhysicsRuntimeBufferedStepSimulation === undefined) { // single thread environment fallback
                this._physicsWorld.stepSimulation(deltaTime, this.maxSubSteps, this.fixedTimeStep);
            }
            this.lock.wait(); // ensure that the runtime is not evaluating the world
            // desync buffer
            if (!this._preserveBackBuffer && !this._usingWasmBackBuffer) {
                this.wasmInstance.multiPhysicsWorldUseMotionStateBuffer(this._physicsWorld.ptr, true);
                this._usingWasmBackBuffer = true;
            }
            if (this._rigidBodyUsingBackBuffer === false) {
                this._rigidBodyUsingBackBuffer = true;
                const rigidBodyList = this._rigidBodyList;
                for (let i = 0; i < rigidBodyList.length; ++i) {
                    rigidBodyList[i].updateBufferedMotionState(false);
                }
                const rigidBodyBundleList = this._rigidBodyBundleList;
                for (let i = 0; i < rigidBodyBundleList.length; ++i) {
                    rigidBodyBundleList[i].updateBufferedMotionStates(false);
                }
            }
            this.wasmInstance.multiPhysicsRuntimeBufferedStepSimulation(this._inner.ptr, deltaTime, this.maxSubSteps, this.fixedTimeStep);
        }
        else {
            if (this._preserveBackBuffer) {
                this.lock.wait(); // ensure that the runtime is not evaluating animations
            }
            // sync buffer
            if (!this._preserveBackBuffer && this._usingWasmBackBuffer && this._dynamicShadowCount === 0) {
                this.lock.wait(); // ensure that the runtime is not evaluating animations
                this.wasmInstance.multiPhysicsWorldUseMotionStateBuffer(this._physicsWorld.ptr, false);
                this._usingWasmBackBuffer = false;
            }
            if (this._rigidBodyUsingBackBuffer === true) {
                this.lock.wait(); // ensure that the runtime is not evaluating animations
                this._rigidBodyUsingBackBuffer = false;
                const rigidBodyList = this._rigidBodyList;
                for (let i = 0; i < rigidBodyList.length; ++i) {
                    rigidBodyList[i].updateBufferedMotionState(true);
                }
                const rigidBodyBundleList = this._rigidBodyBundleList;
                for (let i = 0; i < rigidBodyBundleList.length; ++i) {
                    rigidBodyBundleList[i].updateBufferedMotionStates(true);
                }
            }
            this._physicsWorld.stepSimulation(deltaTime, this.maxSubSteps, this.fixedTimeStep);
        }
        this.onTickObservable.notifyObservers();
    }
    /**
     * Animation evaluation type
     */
    get evaluationType() {
        return this._evaluationType;
    }
    set evaluationType(value) {
        if (this._evaluationType === value)
            return;
        if (value === _physicsRuntimeEvaluationType__WEBPACK_IMPORTED_MODULE_5__/* .PhysicsRuntimeEvaluationType */ .q.Buffered) {
            this._evaluationType = value;
        }
        else {
            this._evaluationType = value;
        }
        if (value === _physicsRuntimeEvaluationType__WEBPACK_IMPORTED_MODULE_5__/* .PhysicsRuntimeEvaluationType */ .q.Buffered) {
            const rigidBodyList = this._rigidBodyList;
            for (let i = 0; i < rigidBodyList.length; ++i) {
                rigidBodyList[i].impl = new _Buffered_bufferedRigidBodyImpl__WEBPACK_IMPORTED_MODULE_7__/* .BufferedRigidBodyImpl */ .V();
            }
            const rigidBodyBundleList = this._rigidBodyBundleList;
            for (let i = 0; i < rigidBodyBundleList.length; ++i) {
                rigidBodyBundleList[i].impl = new _Buffered_bufferedRigidBodyBundleImpl__WEBPACK_IMPORTED_MODULE_9__/* .BufferedRigidBodyBundleImpl */ .d(rigidBodyBundleList[i].count);
            }
        }
        else {
            const rigidBodyList = this._rigidBodyList;
            for (let i = 0; i < rigidBodyList.length; ++i) {
                rigidBodyList[i].impl = new _Immediate_immediateRigidBodyImpl__WEBPACK_IMPORTED_MODULE_6__/* .ImmediateRigidBodyImpl */ .x();
            }
            const rigidBodyBundleList = this._rigidBodyBundleList;
            for (let i = 0; i < rigidBodyBundleList.length; ++i) {
                rigidBodyBundleList[i].impl = new _Immediate_immediateRigidBodyBundleImpl__WEBPACK_IMPORTED_MODULE_8__/* .ImmediateRigidBodyBundleImpl */ .R(rigidBodyBundleList[i].count);
            }
        }
    }
    _gravity = new _babylonjs_core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__/* .Vector3 */ .Pq(0, -10, 0);
    getGravityToRef(result) {
        result.copyFrom(this._gravity);
    }
    setGravity(gravity) {
        this._nullCheck();
        this._gravity.copyFrom(gravity);
        this._physicsWorld.setGravity(gravity);
    }
    addRigidBody(rigidBody, worldId) {
        this._nullCheck();
        const result = this._physicsWorld.addRigidBody(rigidBody, worldId);
        if (result) {
            this._rigidBodyList.push(rigidBody);
            if (this._rigidBodyUsingBackBuffer) {
                rigidBody.updateBufferedMotionState(false);
            }
        }
        return result;
    }
    removeRigidBody(rigidBody, worldId) {
        this._nullCheck();
        const result = this._physicsWorld.removeRigidBody(rigidBody, worldId);
        if (result) {
            const index = this._rigidBodyList.indexOf(rigidBody);
            if (index !== -1) {
                this._rigidBodyList.splice(index, 1);
            }
            rigidBody.updateBufferedMotionState(false);
        }
        return result;
    }
    addRigidBodyBundle(rigidBodyBundle, worldId) {
        this._nullCheck();
        const result = this._physicsWorld.addRigidBodyBundle(rigidBodyBundle, worldId);
        if (result) {
            this._rigidBodyBundleList.push(rigidBodyBundle);
            if (this._rigidBodyUsingBackBuffer) {
                rigidBodyBundle.updateBufferedMotionStates(false);
            }
        }
        return result;
    }
    removeRigidBodyBundle(rigidBodyBundle, worldId) {
        this._nullCheck();
        const result = this._physicsWorld.removeRigidBodyBundle(rigidBodyBundle, worldId);
        if (result) {
            const index = this._rigidBodyBundleList.indexOf(rigidBodyBundle);
            if (index !== -1) {
                this._rigidBodyBundleList.splice(index, 1);
            }
            rigidBodyBundle.updateBufferedMotionStates(false);
        }
        return result;
    }
    addRigidBodyToGlobal(rigidBody) {
        this._nullCheck();
        const result = this._physicsWorld.addRigidBodyToGlobal(rigidBody);
        if (result) {
            this._rigidBodyList.push(rigidBody);
        }
        return result;
    }
    removeRigidBodyFromGlobal(rigidBody) {
        this._nullCheck();
        const result = this._physicsWorld.removeRigidBodyFromGlobal(rigidBody);
        if (result) {
            const index = this._rigidBodyList.indexOf(rigidBody);
            if (index !== -1) {
                this._rigidBodyList.splice(index, 1);
            }
        }
        return result;
    }
    addRigidBodyBundleToGlobal(rigidBodyBundle) {
        this._nullCheck();
        const result = this._physicsWorld.addRigidBodyBundleToGlobal(rigidBodyBundle);
        if (result) {
            this._rigidBodyBundleList.push(rigidBodyBundle);
        }
        return result;
    }
    removeRigidBodyBundleFromGlobal(rigidBodyBundle) {
        this._nullCheck();
        const result = this._physicsWorld.removeRigidBodyBundleFromGlobal(rigidBodyBundle);
        if (result) {
            const index = this._rigidBodyBundleList.indexOf(rigidBodyBundle);
            if (index !== -1) {
                this._rigidBodyBundleList.splice(index, 1);
            }
        }
        return result;
    }
    addRigidBodyShadow(rigidBody, worldId) {
        this._nullCheck();
        let backBufferUpdated = false;
        if (!this._usingWasmBackBuffer) {
            this.lock.wait(); // ensure that the runtime is not evaluating animations
            this.wasmInstance.multiPhysicsWorldUseMotionStateBuffer(this._physicsWorld.ptr, true);
            this._usingWasmBackBuffer = true;
            backBufferUpdated = true;
        }
        const result = this._physicsWorld.addRigidBodyShadow(rigidBody, worldId);
        if (result) {
            this._rigidBodyList.push(rigidBody);
            this._dynamicShadowCount += 1;
        }
        else {
            if ( /* !this._preserveBackBuffer && */this._dynamicShadowCount === 0 && backBufferUpdated) {
                this.wasmInstance.multiPhysicsWorldUseMotionStateBuffer(this._physicsWorld.ptr, false);
                this._usingWasmBackBuffer = false;
            }
        }
        // we don't need updateBufferedMotionState immediately
        // because the buffered motion state has same value with the immediate motion state in the time of adding shadow
        return result;
    }
    removeRigidBodyShadow(rigidBody, worldId) {
        this._nullCheck();
        const result = this._physicsWorld.removeRigidBodyShadow(rigidBody, worldId);
        if (result) {
            const index = this._rigidBodyList.indexOf(rigidBody);
            if (index !== -1) {
                this._rigidBodyList.splice(index, 1);
            }
            this._dynamicShadowCount -= 1;
        }
        let backBufferUpdated = false;
        if (!this._preserveBackBuffer && // if back buffer is preserved, we should not desync it
            this._dynamicShadowCount === 0 &&
            this._usingWasmBackBuffer &&
            this._evaluationType !== _physicsRuntimeEvaluationType__WEBPACK_IMPORTED_MODULE_5__/* .PhysicsRuntimeEvaluationType */ .q.Buffered // if the evaluation type is buffered, we should not desync it
        ) {
            this.wasmInstance.multiPhysicsWorldUseMotionStateBuffer(this._physicsWorld.ptr, false);
            this._usingWasmBackBuffer = false;
            backBufferUpdated = true;
        }
        if (backBufferUpdated && this._rigidBodyUsingBackBuffer) {
            this._rigidBodyUsingBackBuffer = false;
            const rigidBodyList = this._rigidBodyList;
            for (let i = 0; i < rigidBodyList.length; ++i) {
                rigidBodyList[i].updateBufferedMotionState(true);
            }
            const rigidBodyBundleList = this._rigidBodyBundleList;
            for (let i = 0; i < rigidBodyBundleList.length; ++i) {
                rigidBodyBundleList[i].updateBufferedMotionStates(true);
            }
        }
        return result;
    }
    addRigidBodyBundleShadow(rigidBodyBundle, worldId) {
        this._nullCheck();
        let backBufferUpdated = false;
        if (!this._usingWasmBackBuffer) {
            this.lock.wait(); // ensure that the runtime is not evaluating animations
            this.wasmInstance.multiPhysicsWorldUseMotionStateBuffer(this._physicsWorld.ptr, true);
            this._usingWasmBackBuffer = true;
            backBufferUpdated = true;
        }
        const result = this._physicsWorld.addRigidBodyBundleShadow(rigidBodyBundle, worldId);
        if (result) {
            this._rigidBodyBundleList.push(rigidBodyBundle);
            this._dynamicShadowCount += 1;
        }
        else {
            if ( /* !this._preserveBackBuffer && */this._dynamicShadowCount === 0 && backBufferUpdated) {
                this.wasmInstance.multiPhysicsWorldUseMotionStateBuffer(this._physicsWorld.ptr, false);
                this._usingWasmBackBuffer = false;
            }
        }
        return result;
    }
    removeRigidBodyBundleShadow(rigidBodyBundle, worldId) {
        this._nullCheck();
        const result = this._physicsWorld.removeRigidBodyBundleShadow(rigidBodyBundle, worldId);
        if (result) {
            const index = this._rigidBodyBundleList.indexOf(rigidBodyBundle);
            if (index !== -1) {
                this._rigidBodyBundleList.splice(index, 1);
            }
            this._dynamicShadowCount -= 1;
        }
        let backBufferUpdated = false;
        if (!this._preserveBackBuffer && // if back buffer is preserved, we should not desync it
            this._dynamicShadowCount === 0 &&
            this._usingWasmBackBuffer &&
            this._evaluationType !== _physicsRuntimeEvaluationType__WEBPACK_IMPORTED_MODULE_5__/* .PhysicsRuntimeEvaluationType */ .q.Buffered // if the evaluation type is buffered, we should not desync it
        ) {
            this.wasmInstance.multiPhysicsWorldUseMotionStateBuffer(this._physicsWorld.ptr, false);
            this._usingWasmBackBuffer = false;
            backBufferUpdated = true;
        }
        if (backBufferUpdated && this._rigidBodyUsingBackBuffer) {
            this._rigidBodyUsingBackBuffer = false;
            const rigidBodyList = this._rigidBodyList;
            for (let i = 0; i < rigidBodyList.length; ++i) {
                rigidBodyList[i].updateBufferedMotionState(true);
            }
            const rigidBodyBundleList = this._rigidBodyBundleList;
            for (let i = 0; i < rigidBodyBundleList.length; ++i) {
                rigidBodyBundleList[i].updateBufferedMotionStates(true);
            }
        }
        return result;
    }
    get rigidBodyList() {
        return this._rigidBodyList;
    }
    addConstraint(constraint, worldId, disableCollisionsBetweenLinkedBodies) {
        this._nullCheck();
        return this._physicsWorld.addConstraint(constraint, worldId, disableCollisionsBetweenLinkedBodies);
    }
    removeConstraint(constraint, worldId) {
        this._nullCheck();
        return this._physicsWorld.removeConstraint(constraint, worldId);
    }
}


/***/ }),

/***/ 9009:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   q: () => (/* binding */ PhysicsRuntimeEvaluationType)
/* harmony export */ });
var PhysicsRuntimeEvaluationType;
(function (PhysicsRuntimeEvaluationType) {
    PhysicsRuntimeEvaluationType[PhysicsRuntimeEvaluationType["Immediate"] = 0] = "Immediate";
    PhysicsRuntimeEvaluationType[PhysicsRuntimeEvaluationType["Buffered"] = 1] = "Buffered";
})(PhysicsRuntimeEvaluationType || (PhysicsRuntimeEvaluationType = {}));


/***/ }),

/***/ 37:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   o: () => (/* binding */ WasmSpinlock)
/* harmony export */ });
/**
 * Spinlock for WASM runtime synchronization
 */
class WasmSpinlock {
    _lock;
    /**
     * Creates a new WasmSpinlock with the 1 byte length lock array
     * @param lock Lock array
     */
    constructor(lock) {
        this._lock = lock;
    }
    /**
     * waits for the lock to be released
     */
    wait() {
        const lock = this._lock.array;
        // let locked = false;
        const lockStartTime = performance.now();
        while (Atomics.load(lock, 0) !== 0) {
            if (performance.now() - lockStartTime > 10000 /* SpinLockConstants.Timeout */) {
                throw new Error("Spinlock timeout");
            }
            // locked = true;
            // spin
        }
        // if (locked) {
        //     const lockTime = performance.now() - lockStartTime;
        //     console.trace(`Spinlock wait time: ${lockTime}ms`);
        // }
    }
}


/***/ }),

/***/ 5733:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   F: () => (/* binding */ MultiPhysicsWorld)
/* harmony export */ });
class MultiPhysicsWorldInner {
    _runtime;
    _ptr;
    _rigidBodyReferences; // [RigidBody, worldId]
    _rigidBodyBundleReferences; // [RigidBodyBundle, worldId]
    _rigidBodyGlobalReferences;
    _rigidBodyBundleGlobalReferences;
    _rigidBodyShadowReferences; // [worldId, Set<RigidBody>]
    _rigidBodyBundleShadowReferences; // [worldId, Set<RigidBodyBundle>]
    _constraintReferences;
    _referenceCount;
    constructor(runtime, ptr) {
        this._runtime = runtime;
        this._ptr = ptr;
        this._rigidBodyReferences = new Map();
        this._rigidBodyBundleReferences = new Map();
        this._rigidBodyGlobalReferences = new Set();
        this._rigidBodyBundleGlobalReferences = new Set();
        this._rigidBodyShadowReferences = new Map();
        this._rigidBodyBundleShadowReferences = new Map();
        this._constraintReferences = new Set();
        this._referenceCount = 0;
    }
    dispose() {
        if (this._referenceCount > 0) {
            throw new Error("Cannot dispose physics world while it still has references");
        }
        if (this._ptr === 0) {
            return;
        }
        const runtime = this._runtime.deref();
        if (runtime !== undefined) {
            runtime.lock.wait();
            runtime.wasmInstance.destroyMultiPhysicsWorld(this._ptr);
        }
        this._ptr = 0;
        for (const [rigidBody, _] of this._rigidBodyReferences) {
            rigidBody.setWorldReference(null);
        }
        this._rigidBodyReferences.clear();
        for (const [rigidBodyBundle, _] of this._rigidBodyBundleReferences) {
            rigidBodyBundle.setWorldReference(null);
        }
        this._rigidBodyBundleReferences.clear();
        for (const rigidBody of this._rigidBodyGlobalReferences) {
            rigidBody.removeReference();
        }
        this._rigidBodyGlobalReferences.clear();
        for (const rigidBodyBundle of this._rigidBodyBundleGlobalReferences) {
            rigidBodyBundle.removeReference();
        }
        this._rigidBodyBundleGlobalReferences.clear();
        for (const shadowReferences of this._rigidBodyShadowReferences.values()) {
            for (const rigidBody of shadowReferences) {
                rigidBody.removeReference();
            }
        }
        this._rigidBodyShadowReferences.clear();
        for (const shadowReferences of this._rigidBodyBundleShadowReferences.values()) {
            for (const rigidBodyBundle of shadowReferences) {
                rigidBodyBundle.removeReference();
            }
        }
        this._rigidBodyBundleShadowReferences.clear();
        for (const constraint of this._constraintReferences) {
            constraint.setWorldReference(null);
        }
        this._constraintReferences.clear();
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
    addRigidBodyReference(rigidBody, worldId) {
        if (this._rigidBodyGlobalReferences.has(rigidBody)) {
            throw new Error("Rigid body is already added to the world as a global reference");
        }
        const shadowReferences = this._rigidBodyShadowReferences.get(worldId);
        if (shadowReferences !== undefined && shadowReferences.has(rigidBody)) {
            throw new Error("Rigid body is already added to the world as a shadow reference");
        }
        if (this._rigidBodyReferences.has(rigidBody)) {
            return false;
        }
        rigidBody.setWorldReference(this);
        this._rigidBodyReferences.set(rigidBody, worldId);
        return true;
    }
    removeRigidBodyReference(rigidBody) {
        if (this._rigidBodyReferences.delete(rigidBody)) {
            rigidBody.setWorldReference(null);
            return true;
        }
        return false;
    }
    addRigidBodyBundleReference(rigidBodyBundle, worldId) {
        if (this._rigidBodyBundleGlobalReferences.has(rigidBodyBundle)) {
            throw new Error("Rigid body bundle is already added to the world as a global reference");
        }
        const shadowReferences = this._rigidBodyBundleShadowReferences.get(worldId);
        if (shadowReferences !== undefined && shadowReferences.has(rigidBodyBundle)) {
            throw new Error("Rigid body bundle is already added to the world as a shadow reference");
        }
        if (this._rigidBodyBundleReferences.has(rigidBodyBundle)) {
            return false;
        }
        rigidBodyBundle.setWorldReference(this);
        this._rigidBodyBundleReferences.set(rigidBodyBundle, worldId);
        return true;
    }
    removeRigidBodyBundleReference(rigidBodyBundle) {
        if (this._rigidBodyBundleReferences.delete(rigidBodyBundle)) {
            rigidBodyBundle.setWorldReference(null);
            return true;
        }
        return false;
    }
    addRigidBodyGlobalReference(rigidBody) {
        if (rigidBody.getWorldReference() !== null) {
            throw new Error("Rigid body is already added to the world as a strong reference");
        }
        // we are not handling the case where the rigid body is added as a shadow reference
        // wasm side should handle this case
        if (this._rigidBodyGlobalReferences.has(rigidBody)) {
            return false;
        }
        rigidBody.addReference();
        this._rigidBodyGlobalReferences.add(rigidBody);
        return true;
    }
    removeRigidBodyGlobalReference(rigidBody) {
        if (this._rigidBodyGlobalReferences.delete(rigidBody)) {
            rigidBody.removeReference();
            return true;
        }
        return false;
    }
    addRigidBodyBundleGlobalReference(rigidBodyBundle) {
        if (rigidBodyBundle.getWorldReference() !== null) {
            throw new Error("Rigid body bundle is already added to the world as a strong reference");
        }
        // we are not handling the case where the rigid body bundle is added as a shadow reference
        // wasm side should handle this case
        if (this._rigidBodyBundleGlobalReferences.has(rigidBodyBundle)) {
            return false;
        }
        rigidBodyBundle.addReference();
        this._rigidBodyBundleGlobalReferences.add(rigidBodyBundle);
        return true;
    }
    removeRigidBodyBundleGlobalReference(rigidBodyBundle) {
        if (this._rigidBodyBundleGlobalReferences.delete(rigidBodyBundle)) {
            rigidBodyBundle.removeReference();
            return true;
        }
        return false;
    }
    addRigidBodyShadowReference(rigidBody, worldId) {
        const currentWorldId = this._rigidBodyReferences.get(rigidBody);
        if (currentWorldId !== undefined && currentWorldId === worldId) {
            return false;
        }
        if (this._rigidBodyGlobalReferences.has(rigidBody)) {
            throw new Error("Rigid body is already added to the world as a global reference");
        }
        let shadowReferences = this._rigidBodyShadowReferences.get(worldId);
        if (shadowReferences === undefined) {
            shadowReferences = new Set();
            this._rigidBodyShadowReferences.set(worldId, shadowReferences);
        }
        if (shadowReferences.has(rigidBody)) {
            return false;
        }
        rigidBody.addReference();
        shadowReferences.add(rigidBody);
        return true;
    }
    removeRigidBodyShadowReference(rigidBody, worldId) {
        const shadowReferences = this._rigidBodyShadowReferences.get(worldId);
        if (shadowReferences === undefined || !shadowReferences.delete(rigidBody)) {
            return false;
        }
        if (shadowReferences.size === 0) {
            this._rigidBodyShadowReferences.delete(worldId);
        }
        rigidBody.removeReference();
        return true;
    }
    addRigidBodyBundleShadowReference(rigidBodyBundle, worldId) {
        const currentWorldId = this._rigidBodyBundleReferences.get(rigidBodyBundle);
        if (currentWorldId !== undefined && currentWorldId === worldId) {
            return false;
        }
        if (this._rigidBodyBundleGlobalReferences.has(rigidBodyBundle)) {
            throw new Error("Rigid body bundle is already added to the world as a global reference");
        }
        let shadowReferences = this._rigidBodyBundleShadowReferences.get(worldId);
        if (shadowReferences === undefined) {
            shadowReferences = new Set();
            this._rigidBodyBundleShadowReferences.set(worldId, shadowReferences);
        }
        if (shadowReferences.has(rigidBodyBundle)) {
            return false;
        }
        rigidBodyBundle.addReference();
        shadowReferences.add(rigidBodyBundle);
        return true;
    }
    removeRigidBodyBundleShadowReference(rigidBodyBundle, worldId) {
        const shadowReferences = this._rigidBodyBundleShadowReferences.get(worldId);
        if (shadowReferences === undefined || !shadowReferences.delete(rigidBodyBundle)) {
            return false;
        }
        if (shadowReferences.size === 0) {
            this._rigidBodyBundleShadowReferences.delete(worldId);
        }
        rigidBodyBundle.removeReference();
        return true;
    }
    addConstraintReference(constraint) {
        if (this._constraintReferences.has(constraint)) {
            return false;
        }
        constraint.setWorldReference(this);
        this._constraintReferences.add(constraint);
        return true;
    }
    removeConstraintReference(constraint) {
        if (this._constraintReferences.delete(constraint)) {
            constraint.setWorldReference(null);
            return true;
        }
        return false;
    }
}
function multiPhysicsWorldFinalizer(inner) {
    inner.dispose();
}
const multiPhysicsWorldRegistryMap = new WeakMap();
class MultiPhysicsWorld {
    _runtime;
    _inner;
    constructor(runtime, allowDynamicShadow) {
        this._runtime = runtime;
        const ptr = runtime.wasmInstance.createMultiPhysicsWorld(allowDynamicShadow);
        this._inner = new MultiPhysicsWorldInner(new WeakRef(runtime), ptr);
        let registry = multiPhysicsWorldRegistryMap.get(runtime.wasmInstance);
        if (registry === undefined) {
            registry = new FinalizationRegistry(multiPhysicsWorldFinalizer);
            multiPhysicsWorldRegistryMap.set(runtime.wasmInstance, registry);
        }
        registry.register(this, this._inner, this);
    }
    dispose() {
        if (this._inner.ptr === 0) {
            return;
        }
        this._inner.dispose();
        const registry = multiPhysicsWorldRegistryMap.get(this._runtime.wasmInstance);
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
    _nullCheck() {
        if (this._inner.ptr === 0) {
            throw new Error("Cannot access disposed physics world");
        }
    }
    setGravity(gravity) {
        this._nullCheck();
        this._runtime.lock.wait();
        this._runtime.wasmInstance.multiPhysicsWorldSetGravity(this._inner.ptr, gravity.x, gravity.y, gravity.z);
    }
    stepSimulation(timeStep, maxSubSteps, fixedTimeStep) {
        this._nullCheck();
        this._runtime.lock.wait();
        this._runtime.wasmInstance.multiPhysicsWorldStepSimulation(this._inner.ptr, timeStep, maxSubSteps, fixedTimeStep);
    }
    addRigidBody(rigidBody, worldId) {
        if (rigidBody.runtime !== this._runtime) {
            throw new Error("Cannot add rigid body from a different runtime");
        }
        this._nullCheck();
        if (this._inner.addRigidBodyReference(rigidBody, worldId)) {
            this._runtime.lock.wait();
            this._runtime.wasmInstance.multiPhysicsWorldAddRigidBody(this._inner.ptr, worldId, rigidBody.ptr);
            return true;
        }
        return false;
    }
    removeRigidBody(rigidBody, worldId) {
        if (rigidBody.hasShadows) {
            throw new Error("Cannot remove rigid body that has shadows");
        }
        this._nullCheck();
        if (this._inner.removeRigidBodyReference(rigidBody)) {
            this._runtime.lock.wait();
            this._runtime.wasmInstance.multiPhysicsWorldRemoveRigidBody(this._inner.ptr, worldId, rigidBody.ptr);
            return true;
        }
        return false;
    }
    addRigidBodyBundle(rigidBodyBundle, worldId) {
        if (rigidBodyBundle.runtime !== this._runtime) {
            throw new Error("Cannot add rigid body bundle from a different runtime");
        }
        this._nullCheck();
        if (this._inner.addRigidBodyBundleReference(rigidBodyBundle, worldId)) {
            this._runtime.lock.wait();
            this._runtime.wasmInstance.multiPhysicsWorldAddRigidBodyBundle(this._inner.ptr, worldId, rigidBodyBundle.ptr);
            return true;
        }
        return false;
    }
    removeRigidBodyBundle(rigidBodyBundle, worldId) {
        if (rigidBodyBundle.hasShadows) {
            throw new Error("Cannot remove rigid body bundle that has shadows");
        }
        this._nullCheck();
        if (this._inner.removeRigidBodyBundleReference(rigidBodyBundle)) {
            this._runtime.lock.wait();
            this._runtime.wasmInstance.multiPhysicsWorldRemoveRigidBodyBundle(this._inner.ptr, worldId, rigidBodyBundle.ptr);
            return true;
        }
        return false;
    }
    addRigidBodyToGlobal(rigidBody) {
        if (rigidBody.runtime !== this._runtime) {
            throw new Error("Cannot add rigid body from a different runtime");
        }
        if (rigidBody.isDynamic) {
            throw new Error("Cannot add dynamic rigid body to global");
        }
        this._nullCheck();
        if (this._inner.addRigidBodyGlobalReference(rigidBody)) {
            this._runtime.lock.wait();
            this._runtime.wasmInstance.multiPhysicsWorldAddRigidBodyToGlobal(this._inner.ptr, rigidBody.ptr);
            return true;
        }
        return false;
    }
    removeRigidBodyFromGlobal(rigidBody) {
        this._nullCheck();
        if (this._inner.removeRigidBodyGlobalReference(rigidBody)) {
            this._runtime.lock.wait();
            this._runtime.wasmInstance.multiPhysicsWorldRemoveRigidBodyFromGlobal(this._inner.ptr, rigidBody.ptr);
            return true;
        }
        return false;
    }
    addRigidBodyBundleToGlobal(rigidBodyBundle) {
        if (rigidBodyBundle.runtime !== this._runtime) {
            throw new Error("Cannot add rigid body bundle from a different runtime");
        }
        if (rigidBodyBundle.isContainsDynamic) {
            throw new Error("Cannot add dynamic rigid body bundle to global");
        }
        this._nullCheck();
        if (this._inner.addRigidBodyBundleGlobalReference(rigidBodyBundle)) {
            this._runtime.lock.wait();
            this._runtime.wasmInstance.multiPhysicsWorldAddRigidBodyBundleToGlobal(this._inner.ptr, rigidBodyBundle.ptr);
            return true;
        }
        return false;
    }
    removeRigidBodyBundleFromGlobal(rigidBodyBundle) {
        this._nullCheck();
        if (this._inner.removeRigidBodyBundleGlobalReference(rigidBodyBundle)) {
            this._runtime.lock.wait();
            this._runtime.wasmInstance.multiPhysicsWorldRemoveRigidBodyBundleFromGlobal(this._inner.ptr, rigidBodyBundle.ptr);
            return true;
        }
        return false;
    }
    addRigidBodyShadow(rigidBody, worldId) {
        if (rigidBody.runtime !== this._runtime) {
            throw new Error("Cannot add rigid body from a different runtime");
        }
        if (rigidBody.isDynamic && rigidBody.getWorldReference() === null) {
            throw new Error("You must add dynamic rigid body first to the world before adding it as a shadow");
        }
        this._nullCheck();
        if (this._inner.addRigidBodyShadowReference(rigidBody, worldId)) {
            this._runtime.lock.wait();
            this._runtime.wasmInstance.multiPhysicsWorldAddRigidBodyShadow(this._inner.ptr, worldId, rigidBody.ptr);
            rigidBody.addShadowReference();
            return true;
        }
        return false;
    }
    removeRigidBodyShadow(rigidBody, worldId) {
        this._nullCheck();
        if (this._inner.removeRigidBodyShadowReference(rigidBody, worldId)) {
            this._runtime.lock.wait();
            this._runtime.wasmInstance.multiPhysicsWorldRemoveRigidBodyShadow(this._inner.ptr, worldId, rigidBody.ptr);
            rigidBody.removeShadowReference();
            return true;
        }
        return false;
    }
    addRigidBodyBundleShadow(rigidBodyBundle, worldId) {
        if (rigidBodyBundle.runtime !== this._runtime) {
            throw new Error("Cannot add rigid body bundle from a different runtime");
        }
        if (rigidBodyBundle.isContainsDynamic && rigidBodyBundle.getWorldReference() === null) {
            throw new Error("You must add dynamic rigid body bundle first to the world before adding it as a shadow");
        }
        this._nullCheck();
        if (this._inner.addRigidBodyBundleShadowReference(rigidBodyBundle, worldId)) {
            this._runtime.lock.wait();
            this._runtime.wasmInstance.multiPhysicsWorldAddRigidBodyBundleShadow(this._inner.ptr, worldId, rigidBodyBundle.ptr);
            rigidBodyBundle.addShadowReference();
            return true;
        }
        return false;
    }
    removeRigidBodyBundleShadow(rigidBodyBundle, worldId) {
        this._nullCheck();
        if (this._inner.removeRigidBodyBundleShadowReference(rigidBodyBundle, worldId)) {
            this._runtime.lock.wait();
            this._runtime.wasmInstance.multiPhysicsWorldRemoveRigidBodyBundleShadow(this._inner.ptr, worldId, rigidBodyBundle.ptr);
            rigidBodyBundle.removeShadowReference();
            return true;
        }
        return false;
    }
    addConstraint(constraint, worldId, disableCollisionsBetweenLinkedBodies) {
        if (constraint.runtime !== this._runtime) {
            throw new Error("Cannot add constraint from a different runtime");
        }
        this._nullCheck();
        if (this._inner.addConstraintReference(constraint)) {
            this._runtime.lock.wait();
            this._runtime.wasmInstance.multiPhysicsWorldAddConstraint(this._inner.ptr, worldId, constraint.ptr, disableCollisionsBetweenLinkedBodies);
            return true;
        }
        return false;
    }
    removeConstraint(constraint, worldId) {
        this._nullCheck();
        if (this._inner.removeConstraintReference(constraint)) {
            this._runtime.lock.wait();
            this._runtime.wasmInstance.multiPhysicsWorldRemoveConstraint(this._inner.ptr, worldId, constraint.ptr);
            return true;
        }
        return false;
    }
}


/***/ })

}]);