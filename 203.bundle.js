"use strict";
(self["webpackChunkbabylon_bulletphysics"] = self["webpackChunkbabylon_bulletphysics"] || []).push([[203],{

/***/ 40912:
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

/***/ 23880:
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

/***/ 25203:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   w: () => (/* binding */ PhysicsRuntime)
/* harmony export */ });
/* harmony import */ var _babylonjs_core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(79923);
/* harmony import */ var _babylonjs_core_Misc_observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(99848);
/* harmony import */ var _babylonjs_core_scene__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(87491);
/* harmony import */ var _Misc_wasmSpinlock__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(30037);
/* harmony import */ var _physicsWorld__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(80472);
/* harmony import */ var _Buffered_bufferedRigidBodyBundleImpl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(40912);
/* harmony import */ var _Buffered_bufferedRigidBodyImpl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(23880);
/* harmony import */ var _Immediate_immediateRigidBodyBundleImpl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5228);
/* harmony import */ var _Immediate_immediateRigidBodyImpl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(94444);
/* harmony import */ var _physicsRuntimeEvaluationType__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(29009);










class PhysicsRuntimeInner {
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
        this._wasmInstance.deref()?.destroyPhysicsRuntime(this._ptr);
        this._ptr = 0;
        this._worldReference.removeReference();
        this._worldReference = null;
    }
    get ptr() {
        return this._ptr;
    }
}
function physicsRuntimeFinalizer(inner) {
    inner.dispose();
}
const physicsRuntimeRegistryMap = new WeakMap();
class PhysicsRuntime {
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
    useDeltaForWorldStep;
    timeStep;
    maxSubSteps;
    fixedTimeStep;
    _rigidBodyList;
    _rigidBodyBundleList;
    /**
     * Creates a new physics runtime
     * @param wasmInstance The Bullet WASM instance
     */
    constructor(wasmInstance) {
        this.onTickObservable = new _babylonjs_core_Misc_observable__WEBPACK_IMPORTED_MODULE_1__/* .Observable */ .cP();
        this.wasmInstance = wasmInstance;
        const physicsWorld = new _physicsWorld__WEBPACK_IMPORTED_MODULE_3__/* .PhysicsWorld */ .y(this);
        const ptr = wasmInstance.createPhysicsRuntime(physicsWorld.ptr);
        const lockPtr = wasmInstance.physicsRuntimeGetLockStatePtr(ptr);
        this.lock = new _Misc_wasmSpinlock__WEBPACK_IMPORTED_MODULE_4__/* .WasmSpinlock */ .o(wasmInstance.createTypedArray(Uint8Array, lockPtr, 1));
        this._inner = new PhysicsRuntimeInner(this.lock, new WeakRef(wasmInstance), ptr, physicsWorld);
        this._physicsWorld = physicsWorld;
        let registry = physicsRuntimeRegistryMap.get(wasmInstance);
        if (registry === undefined) {
            registry = new FinalizationRegistry(physicsRuntimeFinalizer);
            physicsRuntimeRegistryMap.set(wasmInstance, registry);
        }
        registry.register(this, this._inner, this);
        this._scene = null;
        this._afterAnimationsBinded = null;
        this._evaluationType = _physicsRuntimeEvaluationType__WEBPACK_IMPORTED_MODULE_5__/* .PhysicsRuntimeEvaluationType */ .q.Immediate;
        this._usingWasmBackBuffer = false;
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
        const registry = physicsRuntimeRegistryMap.get(this.wasmInstance);
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
            if (this.wasmInstance.physicsRuntimeBufferedStepSimulation === undefined) { // single thread environment fallback
                this._physicsWorld.stepSimulation(deltaTime, this.maxSubSteps, this.fixedTimeStep);
            }
            this.lock.wait(); // ensure that the runtime is not evaluating the world
            // desync buffer
            if (this._usingWasmBackBuffer === false) {
                this._usingWasmBackBuffer = true;
                this.wasmInstance.physicsWorldUseMotionStateBuffer(this._physicsWorld.ptr, true);
                const rigidBodyList = this._rigidBodyList;
                for (let i = 0; i < rigidBodyList.length; ++i) {
                    rigidBodyList[i].updateBufferedMotionState(false);
                }
                const rigidBodyBundleList = this._rigidBodyBundleList;
                for (let i = 0; i < rigidBodyBundleList.length; ++i) {
                    rigidBodyBundleList[i].updateBufferedMotionStates(false);
                }
            }
            this.wasmInstance.physicsRuntimeBufferedStepSimulation(this._inner.ptr, deltaTime, this.maxSubSteps, this.fixedTimeStep);
        }
        else {
            // sync buffer
            if (this._usingWasmBackBuffer === true) {
                this.lock.wait(); // ensure that the runtime is not evaluating animations
                this._usingWasmBackBuffer = false;
                this.wasmInstance.physicsWorldUseMotionStateBuffer(this._physicsWorld.ptr, false);
                const rigidBodyList = this._rigidBodyList;
                for (let i = 0; i < rigidBodyList.length; ++i) {
                    rigidBodyList[i].updateBufferedMotionState(false);
                }
                const rigidBodyBundleList = this._rigidBodyBundleList;
                for (let i = 0; i < rigidBodyBundleList.length; ++i) {
                    rigidBodyBundleList[i].updateBufferedMotionStates(false);
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
    addRigidBody(rigidBody) {
        this._nullCheck();
        const result = this._physicsWorld.addRigidBody(rigidBody);
        if (result) {
            this._rigidBodyList.push(rigidBody);
        }
        return result;
    }
    removeRigidBody(rigidBody) {
        this._nullCheck();
        const result = this._physicsWorld.removeRigidBody(rigidBody);
        if (result) {
            const index = this._rigidBodyList.indexOf(rigidBody);
            if (index !== -1) {
                this._rigidBodyList.splice(index, 1);
            }
        }
        return result;
    }
    addRigidBodyBundle(rigidBodyBundle) {
        this._nullCheck();
        const result = this._physicsWorld.addRigidBodyBundle(rigidBodyBundle);
        if (result) {
            this._rigidBodyBundleList.push(rigidBodyBundle);
        }
        return result;
    }
    removeRigidBodyBundle(rigidBodyBundle) {
        this._nullCheck();
        const result = this._physicsWorld.removeRigidBodyBundle(rigidBodyBundle);
        if (result) {
            const index = this._rigidBodyBundleList.indexOf(rigidBodyBundle);
            if (index !== -1) {
                this._rigidBodyBundleList.splice(index, 1);
            }
        }
        return result;
    }
    get rigidBodyList() {
        return this._rigidBodyList;
    }
    addConstraint(constraint, disableCollisionsBetweenLinkedBodies) {
        this._nullCheck();
        return this._physicsWorld.addConstraint(constraint, disableCollisionsBetweenLinkedBodies);
    }
    removeConstraint(constraint) {
        this._nullCheck();
        return this._physicsWorld.removeConstraint(constraint);
    }
}


/***/ }),

/***/ 29009:
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

/***/ 30037:
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

/***/ 80472:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   y: () => (/* binding */ PhysicsWorld)
/* harmony export */ });
class PhysicsWorldInner {
    _runtime;
    _ptr;
    _rigidBodyReferences;
    _rigidBodyBundleReferences;
    _constraintReferences;
    _referenceCount;
    constructor(runtime, ptr) {
        this._runtime = runtime;
        this._ptr = ptr;
        this._rigidBodyReferences = new Set();
        this._rigidBodyBundleReferences = new Set();
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
            runtime.wasmInstance.destroyPhysicsWorld(this._ptr);
        }
        this._ptr = 0;
        for (const rigidBody of this._rigidBodyReferences) {
            rigidBody.setWorldReference(null);
        }
        this._rigidBodyReferences.clear();
        for (const rigidBodyBundle of this._rigidBodyBundleReferences) {
            rigidBodyBundle.setWorldReference(null);
        }
        this._rigidBodyBundleReferences.clear();
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
    addRigidBodyReference(rigidBody) {
        if (this._rigidBodyReferences.has(rigidBody)) {
            return false;
        }
        rigidBody.setWorldReference(this);
        this._rigidBodyReferences.add(rigidBody);
        return true;
    }
    removeRigidBodyReference(rigidBody) {
        if (this._rigidBodyReferences.delete(rigidBody)) {
            rigidBody.setWorldReference(null);
            return true;
        }
        return false;
    }
    addRigidBodyBundleReference(rigidBodyBundle) {
        if (this._rigidBodyBundleReferences.has(rigidBodyBundle)) {
            return false;
        }
        rigidBodyBundle.setWorldReference(this);
        this._rigidBodyBundleReferences.add(rigidBodyBundle);
        return true;
    }
    removeRigidBodyBundleReference(rigidBodyBundle) {
        if (this._rigidBodyBundleReferences.delete(rigidBodyBundle)) {
            rigidBodyBundle.setWorldReference(null);
            return true;
        }
        return false;
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
function physicsWorldFinalizer(inner) {
    inner.dispose();
}
const physicsWorldRegistryMap = new WeakMap();
class PhysicsWorld {
    _runtime;
    _inner;
    constructor(runtime) {
        this._runtime = runtime;
        const ptr = runtime.wasmInstance.createPhysicsWorld();
        this._inner = new PhysicsWorldInner(new WeakRef(runtime), ptr);
        let registry = physicsWorldRegistryMap.get(runtime.wasmInstance);
        if (registry === undefined) {
            registry = new FinalizationRegistry(physicsWorldFinalizer);
            physicsWorldRegistryMap.set(runtime.wasmInstance, registry);
        }
        registry.register(this, this._inner, this);
    }
    dispose() {
        if (this._inner.ptr === 0) {
            return;
        }
        this._inner.dispose();
        const registry = physicsWorldRegistryMap.get(this._runtime.wasmInstance);
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
        this._runtime.wasmInstance.physicsWorldSetGravity(this._inner.ptr, gravity.x, gravity.y, gravity.z);
    }
    stepSimulation(timeStep, maxSubSteps, fixedTimeStep) {
        this._nullCheck();
        this._runtime.lock.wait();
        this._runtime.wasmInstance.physicsWorldStepSimulation(this._inner.ptr, timeStep, maxSubSteps, fixedTimeStep);
    }
    addRigidBody(rigidBody) {
        if (rigidBody.runtime !== this._runtime) {
            throw new Error("Cannot add rigid body from different runtime");
        }
        this._nullCheck();
        if (this._inner.addRigidBodyReference(rigidBody)) {
            this._runtime.lock.wait();
            this._runtime.wasmInstance.physicsWorldAddRigidBody(this._inner.ptr, rigidBody.ptr);
            return true;
        }
        return false;
    }
    removeRigidBody(rigidBody) {
        this._nullCheck();
        if (this._inner.removeRigidBodyReference(rigidBody)) {
            this._runtime.lock.wait();
            this._runtime.wasmInstance.physicsWorldRemoveRigidBody(this._inner.ptr, rigidBody.ptr);
            return true;
        }
        return false;
    }
    addRigidBodyBundle(rigidBodyBundle) {
        if (rigidBodyBundle.runtime !== this._runtime) {
            throw new Error("Cannot add rigid body bundle from different runtime");
        }
        this._nullCheck();
        if (this._inner.addRigidBodyBundleReference(rigidBodyBundle)) {
            this._runtime.lock.wait();
            this._runtime.wasmInstance.physicsWorldAddRigidBodyBundle(this._inner.ptr, rigidBodyBundle.ptr);
            return true;
        }
        return false;
    }
    removeRigidBodyBundle(rigidBodyBundle) {
        this._nullCheck();
        if (this._inner.removeRigidBodyBundleReference(rigidBodyBundle)) {
            this._runtime.lock.wait();
            this._runtime.wasmInstance.physicsWorldRemoveRigidBodyBundle(this._inner.ptr, rigidBodyBundle.ptr);
            return true;
        }
        return false;
    }
    addConstraint(constraint, disableCollisionsBetweenLinkedBodies) {
        if (constraint.runtime !== this._runtime) {
            throw new Error("Cannot add constraint from different runtime");
        }
        this._nullCheck();
        if (this._inner.addConstraintReference(constraint)) {
            this._runtime.lock.wait();
            this._runtime.wasmInstance.physicsWorldAddConstraint(this._inner.ptr, constraint.ptr, disableCollisionsBetweenLinkedBodies);
            return true;
        }
        return false;
    }
    removeConstraint(constraint) {
        this._nullCheck();
        if (this._inner.removeConstraintReference(constraint)) {
            this._runtime.lock.wait();
            this._runtime.wasmInstance.physicsWorldRemoveConstraint(this._inner.ptr, constraint.ptr);
            return true;
        }
        return false;
    }
}


/***/ })

}]);