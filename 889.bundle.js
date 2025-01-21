"use strict";
(self["webpackChunkbabylon_bulletphysics"] = self["webpackChunkbabylon_bulletphysics"] || []).push([[889],{

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

/***/ 472:
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


/***/ }),

/***/ 1889:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  SceneBuilder: () => (/* binding */ SceneBuilder)
});

// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Meshes/thinInstanceMesh.js
var thinInstanceMesh = __webpack_require__(203);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Lights/Shadows/shadowGeneratorSceneComponent.js + 5 modules
var shadowGeneratorSceneComponent = __webpack_require__(1503);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Materials/standardMaterial.js + 8 modules
var standardMaterial = __webpack_require__(8227);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Cameras/arcRotateCamera.js + 13 modules
var arcRotateCamera = __webpack_require__(7456);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Lights/directionalLight.js + 1 modules
var Lights_directionalLight = __webpack_require__(5581);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Lights/hemisphericLight.js
var Lights_hemisphericLight = __webpack_require__(1513);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Lights/Shadows/shadowGenerator.js + 2 modules
var Shadows_shadowGenerator = __webpack_require__(9711);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Maths/math.color.js
var math_color = __webpack_require__(6041);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Maths/math.vector.js
var math_vector = __webpack_require__(9923);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Meshes/Builders/boxBuilder.js + 2 modules
var boxBuilder = __webpack_require__(9899);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Meshes/Builders/planeBuilder.js
var planeBuilder = __webpack_require__(8144);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/scene.js + 14 modules
var core_scene = __webpack_require__(554);
// EXTERNAL MODULE: ./src/Runtime/bulletWasmInstance.ts + 2 modules
var bulletWasmInstance = __webpack_require__(6738);
// EXTERNAL MODULE: ./src/Runtime/constraint.ts
var Runtime_constraint = __webpack_require__(7168);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Misc/observable.js
var observable = __webpack_require__(9848);
// EXTERNAL MODULE: ./src/Runtime/Misc/wasmSpinlock.ts
var wasmSpinlock = __webpack_require__(37);
// EXTERNAL MODULE: ./src/Runtime/physicsWorld.ts
var Runtime_physicsWorld = __webpack_require__(472);
// EXTERNAL MODULE: ./src/Runtime/Impl/Buffered/bufferedRigidBodyBundleImpl.ts
var bufferedRigidBodyBundleImpl = __webpack_require__(912);
// EXTERNAL MODULE: ./src/Runtime/Impl/Buffered/bufferedRigidBodyImpl.ts
var bufferedRigidBodyImpl = __webpack_require__(3880);
// EXTERNAL MODULE: ./src/Runtime/Impl/Immediate/immediateRigidBodyBundleImpl.ts
var immediateRigidBodyBundleImpl = __webpack_require__(5228);
// EXTERNAL MODULE: ./src/Runtime/Impl/Immediate/immediateRigidBodyImpl.ts
var immediateRigidBodyImpl = __webpack_require__(4444);
// EXTERNAL MODULE: ./src/Runtime/Impl/physicsRuntimeEvaluationType.ts
var physicsRuntimeEvaluationType = __webpack_require__(9009);
;// ./src/Runtime/Impl/physicsRuntime.ts










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
        this.onTickObservable = new observable/* Observable */.cP();
        this.wasmInstance = wasmInstance;
        const physicsWorld = new Runtime_physicsWorld/* PhysicsWorld */.y(this);
        const ptr = wasmInstance.createPhysicsRuntime(physicsWorld.ptr);
        const lockPtr = wasmInstance.physicsRuntimeGetLockStatePtr(ptr);
        this.lock = new wasmSpinlock/* WasmSpinlock */.o(wasmInstance.createTypedArray(Uint8Array, lockPtr, 1));
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
        this._evaluationType = physicsRuntimeEvaluationType/* PhysicsRuntimeEvaluationType */.q.Immediate;
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
        if (this._evaluationType === physicsRuntimeEvaluationType/* PhysicsRuntimeEvaluationType */.q.Immediate) {
            return new immediateRigidBodyImpl/* ImmediateRigidBodyImpl */.x();
        }
        else {
            return new bufferedRigidBodyImpl/* BufferedRigidBodyImpl */.V();
        }
    }
    createRigidBodyBundleImpl(bundle) {
        if (this._evaluationType === physicsRuntimeEvaluationType/* PhysicsRuntimeEvaluationType */.q.Immediate) {
            return new immediateRigidBodyBundleImpl/* ImmediateRigidBodyBundleImpl */.R(bundle.count);
        }
        else {
            return new bufferedRigidBodyBundleImpl/* BufferedRigidBodyBundleImpl */.d(bundle.count);
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
                    : Math.max(core_scene/* Scene */.Z.MinDeltaTime, Math.min(deltaTime, core_scene/* Scene */.Z.MaxDeltaTime));
            }
            else {
                deltaTime = Math.max(core_scene/* Scene */.Z.MinDeltaTime, Math.min(deltaTime, core_scene/* Scene */.Z.MaxDeltaTime));
            }
            deltaTime /= 1000;
        }
        else {
            deltaTime = this.timeStep;
        }
        if (this._evaluationType === physicsRuntimeEvaluationType/* PhysicsRuntimeEvaluationType */.q.Buffered) {
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
        if (value === physicsRuntimeEvaluationType/* PhysicsRuntimeEvaluationType */.q.Buffered) {
            this._evaluationType = value;
        }
        else {
            this._evaluationType = value;
        }
        if (value === physicsRuntimeEvaluationType/* PhysicsRuntimeEvaluationType */.q.Buffered) {
            const rigidBodyList = this._rigidBodyList;
            for (let i = 0; i < rigidBodyList.length; ++i) {
                rigidBodyList[i].impl = new bufferedRigidBodyImpl/* BufferedRigidBodyImpl */.V();
            }
            const rigidBodyBundleList = this._rigidBodyBundleList;
            for (let i = 0; i < rigidBodyBundleList.length; ++i) {
                rigidBodyBundleList[i].impl = new bufferedRigidBodyBundleImpl/* BufferedRigidBodyBundleImpl */.d(rigidBodyBundleList[i].count);
            }
        }
        else {
            const rigidBodyList = this._rigidBodyList;
            for (let i = 0; i < rigidBodyList.length; ++i) {
                rigidBodyList[i].impl = new immediateRigidBodyImpl/* ImmediateRigidBodyImpl */.x();
            }
            const rigidBodyBundleList = this._rigidBodyBundleList;
            for (let i = 0; i < rigidBodyBundleList.length; ++i) {
                rigidBodyBundleList[i].impl = new immediateRigidBodyBundleImpl/* ImmediateRigidBodyBundleImpl */.R(rigidBodyBundleList[i].count);
            }
        }
    }
    _gravity = new math_vector/* Vector3 */.Pq(0, -10, 0);
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

// EXTERNAL MODULE: ./src/Runtime/InstanceType/multiDebug.ts + 2 modules
var multiDebug = __webpack_require__(7002);
// EXTERNAL MODULE: ./src/Runtime/physicsShape.ts
var physicsShape = __webpack_require__(6405);
// EXTERNAL MODULE: ./src/Runtime/rigidBody.ts
var rigidBody = __webpack_require__(1592);
// EXTERNAL MODULE: ./src/Runtime/rigidBodyBundle.ts
var rigidBodyBundle = __webpack_require__(7648);
// EXTERNAL MODULE: ./src/Runtime/rigidBodyConstructionInfo.ts
var rigidBodyConstructionInfo = __webpack_require__(5901);
// EXTERNAL MODULE: ./src/Runtime/rigidBodyConstructionInfoList.ts
var rigidBodyConstructionInfoList = __webpack_require__(3477);
;// ./src/Test/Scene/tPhysicsRuntime.ts












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
        const wasmInstance = await (0,bulletWasmInstance/* getBulletWasmInstance */.e)(new multiDebug/* BulletWasmInstanceTypeMD */.t(), 1);
        const runtime = new PhysicsRuntime(wasmInstance);
        runtime.register(scene);
        runtime.evaluationType = physicsRuntimeEvaluationType/* PhysicsRuntimeEvaluationType */.q.Buffered;
        const matrix = new math_vector/* Matrix */.uq();
        {
            const ground = (0,planeBuilder/* CreatePlane */.x)("ground", { size: 120 }, scene);
            ground.rotationQuaternion = math_vector/* Quaternion */.PT.RotationAxis(new math_vector/* Vector3 */.Pq(1, 0, 0), Math.PI / 2);
            shadowGenerator.addShadowCaster(ground);
            ground.receiveShadows = true;
            const groundShape = new physicsShape/* PhysicsStaticPlaneShape */.Ty(runtime, new math_vector/* Vector3 */.Pq(0, 0, -1), 0);
            const groundRbInfo = new rigidBodyConstructionInfo/* RigidBodyConstructionInfo */.t(wasmInstance);
            groundRbInfo.shape = groundShape;
            math_vector/* Matrix */.uq.FromQuaternionToRef(ground.rotationQuaternion, matrix);
            groundRbInfo.setInitialTransform(matrix);
            groundRbInfo.motionType = 1 /* MotionType.Static */;
            const groundRigidBody = new rigidBody/* RigidBody */.U(runtime, groundRbInfo);
            runtime.addRigidBody(groundRigidBody);
        }
        const rbCount = 512 * 2;
        const baseBox = (0,boxBuilder/* CreateBox */.an)("box", { size: 2 }, scene);
        shadowGenerator.addShadowCaster(baseBox);
        baseBox.receiveShadows = true;
        const rigidbodyMatrixBuffer = new Float32Array(rbCount * 16);
        baseBox.thinInstanceSetBuffer("matrix", rigidbodyMatrixBuffer, 16, false);
        const boxShape = new physicsShape/* PhysicsBoxShape */.SA(runtime, new math_vector/* Vector3 */.Pq(1, 1, 1));
        const rbInfoList = new rigidBodyConstructionInfoList/* RigidBodyConstructionInfoList */.x(wasmInstance, rbCount);
        for (let i = 0; i < rbCount; ++i) {
            rbInfoList.setShape(i, boxShape);
            const initialTransform = math_vector/* Matrix */.uq.TranslationToRef(0, 1 + i * 2, 0, matrix);
            rbInfoList.setInitialTransform(i, initialTransform);
            rbInfoList.setFriction(i, 1.0);
            rbInfoList.setLinearDamping(i, 0.3);
            rbInfoList.setAngularDamping(i, 0.3);
        }
        const boxRigidBodyBundle = new rigidBodyBundle/* RigidBodyBundle */.Y(runtime, rbInfoList);
        runtime.addRigidBodyBundle(boxRigidBodyBundle);
        for (let i = 0; i < rbCount; i += 2) {
            const indices = [i, i + 1];
            const constraint = new Runtime_constraint/* Generic6DofSpringConstraint */.vC(runtime, boxRigidBodyBundle, indices, math_vector/* Matrix */.uq.Translation(0, -1.2, 0), math_vector/* Matrix */.uq.Translation(0, 1.2, 0), true);
            constraint.setLinearLowerLimit(new math_vector/* Vector3 */.Pq(0, 0, 0));
            constraint.setLinearUpperLimit(new math_vector/* Vector3 */.Pq(0, 0, 0));
            constraint.setAngularLowerLimit(new math_vector/* Vector3 */.Pq(Math.PI / 4, 0, 0));
            constraint.setAngularUpperLimit(new math_vector/* Vector3 */.Pq(0, 0, 0));
            for (let i = 0; i < 6; ++i) {
                constraint.enableSpring(i, true);
                constraint.setStiffness(i, 100);
                constraint.setDamping(i, 1);
            }
            runtime.addConstraint(constraint, false);
        }
        runtime.onTickObservable.add(() => {
            boxRigidBodyBundle.getTransformMatricesToArray(rigidbodyMatrixBuffer);
            baseBox.thinInstanceBufferUpdated("matrix");
        });
        return scene;
    }
}


/***/ })

}]);