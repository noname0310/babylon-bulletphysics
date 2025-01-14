/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 9031:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  u: () => (/* binding */ SceneBuilder)
});

// NAMESPACE OBJECT: ./src/wasm/md/index.js
var md_namespaceObject = {};
__webpack_require__.r(md_namespaceObject);
__webpack_require__.d(md_namespaceObject, {
  allocateBuffer: () => (allocateBuffer),
  constraintEnableSpring: () => (constraintEnableSpring),
  constraintSetAngularLowerLimit: () => (constraintSetAngularLowerLimit),
  constraintSetAngularUpperLimit: () => (constraintSetAngularUpperLimit),
  constraintSetDamping: () => (constraintSetDamping),
  constraintSetLinearLowerLimit: () => (constraintSetLinearLowerLimit),
  constraintSetLinearUpperLimit: () => (constraintSetLinearUpperLimit),
  constraintSetStiffness: () => (constraintSetStiffness),
  createBoxShape: () => (createBoxShape),
  createCapsuleShape: () => (createCapsuleShape),
  createGeneric6DofConstraint: () => (createGeneric6DofConstraint),
  createGeneric6DofConstraintFromBundle: () => (createGeneric6DofConstraintFromBundle),
  createGeneric6DofSpringConstraint: () => (createGeneric6DofSpringConstraint),
  createGeneric6DofSpringConstraintFromBundle: () => (createGeneric6DofSpringConstraintFromBundle),
  createMultiPhysicsRuntime: () => (createMultiPhysicsRuntime),
  createMultiPhysicsWorld: () => (createMultiPhysicsWorld),
  createPhysicsRuntime: () => (createPhysicsRuntime),
  createPhysicsWorld: () => (createPhysicsWorld),
  createRigidBody: () => (createRigidBody),
  createRigidBodyBundle: () => (createRigidBodyBundle),
  createSphereShape: () => (createSphereShape),
  createStaticPlaneShape: () => (createStaticPlaneShape),
  deallocateBuffer: () => (deallocateBuffer),
  "default": () => (md),
  destroyConstraint: () => (destroyConstraint),
  destroyMultiPhysicsRuntime: () => (destroyMultiPhysicsRuntime),
  destroyMultiPhysicsWorld: () => (destroyMultiPhysicsWorld),
  destroyPhysicsRuntime: () => (destroyPhysicsRuntime),
  destroyPhysicsWorld: () => (destroyPhysicsWorld),
  destroyRigidBody: () => (destroyRigidBody),
  destroyRigidBodyBundle: () => (destroyRigidBodyBundle),
  destroyShape: () => (destroyShape),
  init: () => (init),
  initSync: () => (initSync),
  initThreadPool: () => (initThreadPool),
  multiPhysicsRuntimeBufferedStepSimulation: () => (multiPhysicsRuntimeBufferedStepSimulation),
  multiPhysicsRuntimeGetLockStatePtr: () => (multiPhysicsRuntimeGetLockStatePtr),
  multiPhysicsWorldAddConstraint: () => (multiPhysicsWorldAddConstraint),
  multiPhysicsWorldAddRigidBody: () => (multiPhysicsWorldAddRigidBody),
  multiPhysicsWorldAddRigidBodyBundle: () => (multiPhysicsWorldAddRigidBodyBundle),
  multiPhysicsWorldAddRigidBodyBundleShadow: () => (multiPhysicsWorldAddRigidBodyBundleShadow),
  multiPhysicsWorldAddRigidBodyBundleToGlobal: () => (multiPhysicsWorldAddRigidBodyBundleToGlobal),
  multiPhysicsWorldAddRigidBodyShadow: () => (multiPhysicsWorldAddRigidBodyShadow),
  multiPhysicsWorldAddRigidBodyToGlobal: () => (multiPhysicsWorldAddRigidBodyToGlobal),
  multiPhysicsWorldRemoveConstraint: () => (multiPhysicsWorldRemoveConstraint),
  multiPhysicsWorldRemoveRigidBody: () => (multiPhysicsWorldRemoveRigidBody),
  multiPhysicsWorldRemoveRigidBodyBundle: () => (multiPhysicsWorldRemoveRigidBodyBundle),
  multiPhysicsWorldRemoveRigidBodyBundleFromGlobal: () => (multiPhysicsWorldRemoveRigidBodyBundleFromGlobal),
  multiPhysicsWorldRemoveRigidBodyBundleShadow: () => (multiPhysicsWorldRemoveRigidBodyBundleShadow),
  multiPhysicsWorldRemoveRigidBodyFromGlobal: () => (multiPhysicsWorldRemoveRigidBodyFromGlobal),
  multiPhysicsWorldRemoveRigidBodyShadow: () => (multiPhysicsWorldRemoveRigidBodyShadow),
  multiPhysicsWorldSetGravity: () => (multiPhysicsWorldSetGravity),
  multiPhysicsWorldStepSimulation: () => (multiPhysicsWorldStepSimulation),
  multiPhysicsWorldUseMotionStateBuffer: () => (multiPhysicsWorldUseMotionStateBuffer),
  physicsRuntimeBufferedStepSimulation: () => (physicsRuntimeBufferedStepSimulation),
  physicsRuntimeGetLockStatePtr: () => (physicsRuntimeGetLockStatePtr),
  physicsWorldAddConstraint: () => (physicsWorldAddConstraint),
  physicsWorldAddRigidBody: () => (physicsWorldAddRigidBody),
  physicsWorldAddRigidBodyBundle: () => (physicsWorldAddRigidBodyBundle),
  physicsWorldRemoveConstraint: () => (physicsWorldRemoveConstraint),
  physicsWorldRemoveRigidBody: () => (physicsWorldRemoveRigidBody),
  physicsWorldRemoveRigidBodyBundle: () => (physicsWorldRemoveRigidBodyBundle),
  physicsWorldSetGravity: () => (physicsWorldSetGravity),
  physicsWorldStepSimulation: () => (physicsWorldStepSimulation),
  physicsWorldUseMotionStateBuffer: () => (physicsWorldUseMotionStateBuffer),
  rigidBodyBundleGetBufferedMotionStatesPtr: () => (rigidBodyBundleGetBufferedMotionStatesPtr),
  rigidBodyBundleGetMotionStatesPtr: () => (rigidBodyBundleGetMotionStatesPtr),
  rigidBodyBundleMakeKinematic: () => (rigidBodyBundleMakeKinematic),
  rigidBodyBundleRestoreDynamic: () => (rigidBodyBundleRestoreDynamic),
  rigidBodyGetBufferedMotionStatePtr: () => (rigidBodyGetBufferedMotionStatePtr),
  rigidBodyGetMotionStatePtr: () => (rigidBodyGetMotionStatePtr),
  rigidBodyMakeKinematic: () => (rigidBodyMakeKinematic),
  rigidBodyRestoreDynamic: () => (rigidBodyRestoreDynamic),
  wbg_rayon_PoolBuilder: () => (wbg_rayon_PoolBuilder),
  wbg_rayon_start_worker: () => (wbg_rayon_start_worker)
});

// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Meshes/thinInstanceMesh.js
var thinInstanceMesh = __webpack_require__(203);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Lights/Shadows/shadowGeneratorSceneComponent.js + 6 modules
var shadowGeneratorSceneComponent = __webpack_require__(483);
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

;// ./src/Runtime/constraint.ts
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

// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Misc/observable.js
var observable = __webpack_require__(9848);
;// ./src/Runtime/Misc/wasmSpinlock.ts
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

;// ./src/Runtime/multiPhysicsWorld.ts
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
        this._nullCheck();
        if (this._inner.addRigidBodyShadowReference(rigidBody, worldId)) {
            this._runtime.lock.wait();
            this._runtime.wasmInstance.multiPhysicsWorldAddRigidBodyShadow(this._inner.ptr, worldId, rigidBody.ptr);
            return true;
        }
        return false;
    }
    removeRigidBodyShadow(rigidBody, worldId) {
        this._nullCheck();
        if (this._inner.removeRigidBodyShadowReference(rigidBody, worldId)) {
            this._runtime.lock.wait();
            this._runtime.wasmInstance.multiPhysicsWorldRemoveRigidBodyShadow(this._inner.ptr, worldId, rigidBody.ptr);
            return true;
        }
        return false;
    }
    addRigidBodyBundleShadow(rigidBodyBundle, worldId) {
        if (rigidBodyBundle.runtime !== this._runtime) {
            throw new Error("Cannot add rigid body bundle from a different runtime");
        }
        this._nullCheck();
        if (this._inner.addRigidBodyBundleShadowReference(rigidBodyBundle, worldId)) {
            this._runtime.lock.wait();
            this._runtime.wasmInstance.multiPhysicsWorldAddRigidBodyBundleShadow(this._inner.ptr, worldId, rigidBodyBundle.ptr);
            return true;
        }
        return false;
    }
    removeRigidBodyBundleShadow(rigidBodyBundle, worldId) {
        this._nullCheck();
        if (this._inner.removeRigidBodyBundleShadowReference(rigidBodyBundle, worldId)) {
            this._runtime.lock.wait();
            this._runtime.wasmInstance.multiPhysicsWorldRemoveRigidBodyBundleShadow(this._inner.ptr, worldId, rigidBodyBundle.ptr);
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

;// ./src/Runtime/Impl/Buffered/bufferedRigidBodyBundleImpl.ts
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

;// ./src/Runtime/Impl/Buffered/bufferedRigidBodyImpl.ts
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

;// ./src/Runtime/Impl/Immediate/immediateRigidBodyBundleImpl.ts
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

;// ./src/Runtime/Impl/Immediate/immediateRigidBodyImpl.ts
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

;// ./src/Runtime/Impl/physicsRuntimeEvaluationType.ts
var PhysicsRuntimeEvaluationType;
(function (PhysicsRuntimeEvaluationType) {
    PhysicsRuntimeEvaluationType[PhysicsRuntimeEvaluationType["Immediate"] = 0] = "Immediate";
    PhysicsRuntimeEvaluationType[PhysicsRuntimeEvaluationType["Buffered"] = 1] = "Buffered";
})(PhysicsRuntimeEvaluationType || (PhysicsRuntimeEvaluationType = {}));

;// ./src/Runtime/Impl/multiPhysicsRuntime.ts










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
    useDeltaForWorldStep;
    timeStep;
    maxSubSteps;
    fixedTimeStep;
    _rigidBodyList;
    _rigidBodyBundleList;
    /**
     * Creates a new physics runtime
     * @param wasmInstance The Bullet WASM instance
     * @param allowDynamicShadow Whether to allow dynamic shadow
     */
    constructor(wasmInstance, allowDynamicShadow) {
        this.onTickObservable = new observable/* Observable */.cP();
        this.wasmInstance = wasmInstance;
        const physicsWorld = new MultiPhysicsWorld(this, allowDynamicShadow);
        const ptr = wasmInstance.createMultiPhysicsRuntime(physicsWorld.ptr);
        const lockPtr = wasmInstance.multiPhysicsRuntimeGetLockStatePtr(ptr);
        this.lock = new WasmSpinlock(wasmInstance.createTypedArray(Uint8Array, lockPtr, 1));
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
        this._evaluationType = PhysicsRuntimeEvaluationType.Immediate;
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
        if (this._evaluationType === PhysicsRuntimeEvaluationType.Immediate) {
            return new ImmediateRigidBodyImpl();
        }
        else {
            return new BufferedRigidBodyImpl();
        }
    }
    createRigidBodyBundleImpl(bundle) {
        if (this._evaluationType === PhysicsRuntimeEvaluationType.Immediate) {
            return new ImmediateRigidBodyBundleImpl(bundle.count);
        }
        else {
            return new BufferedRigidBodyBundleImpl(bundle.count);
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
        if (this._evaluationType === PhysicsRuntimeEvaluationType.Buffered) {
            if (this.wasmInstance.multiPhysicsRuntimeBufferedStepSimulation === undefined) { // single thread environment fallback
                this._physicsWorld.stepSimulation(deltaTime, this.maxSubSteps, this.fixedTimeStep);
            }
            this.lock.wait(); // ensure that the runtime is not evaluating the world
            // desync buffer
            if (this._usingWasmBackBuffer === false) {
                this._usingWasmBackBuffer = true;
                this.wasmInstance.multiPhysicsWorldUseMotionStateBuffer(this._physicsWorld.ptr, true);
                const rigidBodyList = this._rigidBodyList;
                for (let i = 0; i < rigidBodyList.length; ++i) {
                    rigidBodyList[i].updateBufferedMotionState();
                }
                const rigidBodyBundleList = this._rigidBodyBundleList;
                for (let i = 0; i < rigidBodyBundleList.length; ++i) {
                    rigidBodyBundleList[i].updateBufferedMotionStates();
                }
            }
            this.wasmInstance.multiPhysicsRuntimeBufferedStepSimulation(this._inner.ptr, deltaTime, this.maxSubSteps, this.fixedTimeStep);
        }
        else {
            // sync buffer
            if (this._usingWasmBackBuffer === true) {
                this.lock.wait(); // ensure that the runtime is not evaluating animations
                this._usingWasmBackBuffer = false;
                this.wasmInstance.multiPhysicsWorldUseMotionStateBuffer(this._physicsWorld.ptr, false);
                const rigidBodyList = this._rigidBodyList;
                for (let i = 0; i < rigidBodyList.length; ++i) {
                    rigidBodyList[i].updateBufferedMotionState();
                }
                const rigidBodyBundleList = this._rigidBodyBundleList;
                for (let i = 0; i < rigidBodyBundleList.length; ++i) {
                    rigidBodyBundleList[i].updateBufferedMotionStates();
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
        if (value === PhysicsRuntimeEvaluationType.Buffered) {
            this._evaluationType = value;
        }
        else {
            this._evaluationType = value;
        }
        if (value === PhysicsRuntimeEvaluationType.Buffered) {
            const rigidBodyList = this._rigidBodyList;
            for (let i = 0; i < rigidBodyList.length; ++i) {
                rigidBodyList[i].impl = new BufferedRigidBodyImpl();
            }
            const rigidBodyBundleList = this._rigidBodyBundleList;
            for (let i = 0; i < rigidBodyBundleList.length; ++i) {
                rigidBodyBundleList[i].impl = new BufferedRigidBodyBundleImpl(rigidBodyBundleList[i].count);
            }
        }
        else {
            const rigidBodyList = this._rigidBodyList;
            for (let i = 0; i < rigidBodyList.length; ++i) {
                rigidBodyList[i].impl = new ImmediateRigidBodyImpl();
            }
            const rigidBodyBundleList = this._rigidBodyBundleList;
            for (let i = 0; i < rigidBodyBundleList.length; ++i) {
                rigidBodyBundleList[i].impl = new ImmediateRigidBodyBundleImpl(rigidBodyBundleList[i].count);
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
    addRigidBody(rigidBody, worldId) {
        this._nullCheck();
        const result = this._physicsWorld.addRigidBody(rigidBody, worldId);
        if (result) {
            this._rigidBodyList.push(rigidBody);
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
        }
        return result;
    }
    addRigidBodyBundle(rigidBodyBundle, worldId) {
        this._nullCheck();
        const result = this._physicsWorld.addRigidBodyBundle(rigidBodyBundle, worldId);
        if (result) {
            this._rigidBodyBundleList.push(rigidBodyBundle);
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
        const result = this._physicsWorld.addRigidBodyShadow(rigidBody, worldId);
        if (result) {
            this._rigidBodyList.push(rigidBody);
        }
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
        }
        return result;
    }
    addRigidBodyBundleShadow(rigidBodyBundle, worldId) {
        this._nullCheck();
        const result = this._physicsWorld.addRigidBodyBundleShadow(rigidBodyBundle, worldId);
        if (result) {
            this._rigidBodyBundleList.push(rigidBodyBundle);
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

;// ./src/wasm/md/snippets/wasm-bindgen-rayon-9d40dbf53d170728/src/workerHelpers.js
/*
 * Copyright 2022 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// Note: this is never used, but necessary to prevent a bug in Firefox
// (https://bugzilla.mozilla.org/show_bug.cgi?id=1702191) where it collects
// Web Workers that have a shared WebAssembly memory with the main thread,
// but are not explicitly rooted via a `Worker` instance.
//
// By storing them in a variable, we can keep `Worker` objects around and
// prevent them from getting GC-d.
let _workers;

async function startWorkers(module, memory, builder) {
  if (builder.numThreads() === 0) {
    throw new Error(`num_threads must be > 0.`);
  }

  const workerInit = {
    module,
    memory,
    receiver: builder.receiver()
  };

  _workers = await Promise.all(
    Array.from({ length: builder.numThreads() }, async () => {
      // Self-spawn into a new Worker.
      //
      // TODO: while `new URL('...', import.meta.url) becomes a semi-standard
      // way to get asset URLs relative to the module across various bundlers
      // and browser, ideally we should switch to `import.meta.resolve`
      // once it becomes a standard.
      const worker = new Worker(
        new URL(/* worker import */ __webpack_require__.p + __webpack_require__.u(909), __webpack_require__.b),
        {
          type: undefined
        }
      );
      worker.postMessage(workerInit);
      await new Promise(resolve =>
        worker.addEventListener('message', resolve, { once: true })
      );
      return worker;
    })
  );
  builder.build();
}

;// ./src/wasm/md/index.js


let wasm;

const heap = new Array(128).fill(undefined);

heap.push(undefined, null, true, false);

function getObject(idx) { return heap[idx]; }

let heap_next = heap.length;

function dropObject(idx) {
    if (idx < 132) return;
    heap[idx] = heap_next;
    heap_next = idx;
}

function takeObject(idx) {
    const ret = getObject(idx);
    dropObject(idx);
    return ret;
}

const cachedTextDecoder = (typeof TextDecoder !== 'undefined' ? new TextDecoder('utf-8', { ignoreBOM: true, fatal: true }) : { decode: () => { throw Error('TextDecoder not available') } } );

if (typeof TextDecoder !== 'undefined') { cachedTextDecoder.decode(); };

let cachedUint8ArrayMemory0 = null;

function getUint8ArrayMemory0() {
    if (cachedUint8ArrayMemory0 === null || cachedUint8ArrayMemory0.buffer !== wasm.memory.buffer) {
        cachedUint8ArrayMemory0 = new Uint8Array(wasm.memory.buffer);
    }
    return cachedUint8ArrayMemory0;
}

function getStringFromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    return cachedTextDecoder.decode(getUint8ArrayMemory0().slice(ptr, ptr + len));
}

function addHeapObject(obj) {
    if (heap_next === heap.length) heap.push(heap.length + 1);
    const idx = heap_next;
    heap_next = heap[idx];

    if (typeof(heap_next) !== 'number') throw new Error('corrupt heap');

    heap[idx] = obj;
    return idx;
}

function _assertBoolean(n) {
    if (typeof(n) !== 'boolean') {
        throw new Error(`expected a boolean argument, found ${typeof(n)}`);
    }
}

function _assertNum(n) {
    if (typeof(n) !== 'number') throw new Error(`expected a number argument, found ${typeof(n)}`);
}
/**
* @param {number} physics_world
* @returns {number}
*/
function createMultiPhysicsRuntime(physics_world) {
    _assertNum(physics_world);
    const ret = wasm.createMultiPhysicsRuntime(physics_world);
    return ret >>> 0;
}

/**
* @param {number} physics_runtime
*/
function destroyMultiPhysicsRuntime(physics_runtime) {
    _assertNum(physics_runtime);
    wasm.destroyMultiPhysicsRuntime(physics_runtime);
}

/**
* @param {number} runtime
* @returns {number}
*/
function multiPhysicsRuntimeGetLockStatePtr(runtime) {
    _assertNum(runtime);
    const ret = wasm.multiPhysicsRuntimeGetLockStatePtr(runtime);
    return ret >>> 0;
}

/**
* @param {number} physics_runtime
* @param {number} time_step
* @param {number} max_sub_steps
* @param {number} fixed_time_step
*/
function multiPhysicsRuntimeBufferedStepSimulation(physics_runtime, time_step, max_sub_steps, fixed_time_step) {
    _assertNum(physics_runtime);
    _assertNum(max_sub_steps);
    wasm.multiPhysicsRuntimeBufferedStepSimulation(physics_runtime, time_step, max_sub_steps, fixed_time_step);
}

/**
* @param {number} x
* @param {number} y
* @param {number} z
* @returns {number}
*/
function createBoxShape(x, y, z) {
    const ret = wasm.createBoxShape(x, y, z);
    return ret >>> 0;
}

/**
* @param {number} radius
* @returns {number}
*/
function createSphereShape(radius) {
    const ret = wasm.createSphereShape(radius);
    return ret >>> 0;
}

/**
* @param {number} radius
* @param {number} height
* @returns {number}
*/
function createCapsuleShape(radius, height) {
    const ret = wasm.createCapsuleShape(radius, height);
    return ret >>> 0;
}

/**
* @param {number} normal_x
* @param {number} normal_y
* @param {number} normal_z
* @param {number} plane_constant
* @returns {number}
*/
function createStaticPlaneShape(normal_x, normal_y, normal_z, plane_constant) {
    const ret = wasm.createStaticPlaneShape(normal_x, normal_y, normal_z, plane_constant);
    return ret >>> 0;
}

/**
* @param {number} ptr
*/
function destroyShape(ptr) {
    _assertNum(ptr);
    wasm.destroyShape(ptr);
}

/**
* @param {boolean} allow_dynamic_shadow
* @returns {number}
*/
function createMultiPhysicsWorld(allow_dynamic_shadow) {
    _assertBoolean(allow_dynamic_shadow);
    const ret = wasm.createMultiPhysicsWorld(allow_dynamic_shadow);
    return ret >>> 0;
}

/**
* @param {number} world
*/
function destroyMultiPhysicsWorld(world) {
    _assertNum(world);
    wasm.destroyMultiPhysicsWorld(world);
}

/**
* @param {number} world
* @param {number} x
* @param {number} y
* @param {number} z
*/
function multiPhysicsWorldSetGravity(world, x, y, z) {
    _assertNum(world);
    wasm.multiPhysicsWorldSetGravity(world, x, y, z);
}

/**
* @param {number} world
* @param {number} time_step
* @param {number} max_sub_steps
* @param {number} fixed_time_step
*/
function multiPhysicsWorldStepSimulation(world, time_step, max_sub_steps, fixed_time_step) {
    _assertNum(world);
    _assertNum(max_sub_steps);
    wasm.multiPhysicsWorldStepSimulation(world, time_step, max_sub_steps, fixed_time_step);
}

/**
* @param {number} world
* @param {number} world_id
* @param {number} rigidbody
*/
function multiPhysicsWorldAddRigidBody(world, world_id, rigidbody) {
    _assertNum(world);
    _assertNum(world_id);
    _assertNum(rigidbody);
    wasm.multiPhysicsWorldAddRigidBody(world, world_id, rigidbody);
}

/**
* @param {number} world
* @param {number} world_id
* @param {number} rigidbody
*/
function multiPhysicsWorldRemoveRigidBody(world, world_id, rigidbody) {
    _assertNum(world);
    _assertNum(world_id);
    _assertNum(rigidbody);
    wasm.multiPhysicsWorldRemoveRigidBody(world, world_id, rigidbody);
}

/**
* @param {number} world
* @param {number} world_id
* @param {number} bundle
*/
function multiPhysicsWorldAddRigidBodyBundle(world, world_id, bundle) {
    _assertNum(world);
    _assertNum(world_id);
    _assertNum(bundle);
    wasm.multiPhysicsWorldAddRigidBodyBundle(world, world_id, bundle);
}

/**
* @param {number} world
* @param {number} world_id
* @param {number} bundle
*/
function multiPhysicsWorldRemoveRigidBodyBundle(world, world_id, bundle) {
    _assertNum(world);
    _assertNum(world_id);
    _assertNum(bundle);
    wasm.multiPhysicsWorldRemoveRigidBodyBundle(world, world_id, bundle);
}

/**
* @param {number} world
* @param {number} rigidbody
*/
function multiPhysicsWorldAddRigidBodyToGlobal(world, rigidbody) {
    _assertNum(world);
    _assertNum(rigidbody);
    wasm.multiPhysicsWorldAddRigidBodyToGlobal(world, rigidbody);
}

/**
* @param {number} world
* @param {number} rigidbody
*/
function multiPhysicsWorldRemoveRigidBodyFromGlobal(world, rigidbody) {
    _assertNum(world);
    _assertNum(rigidbody);
    wasm.multiPhysicsWorldRemoveRigidBodyFromGlobal(world, rigidbody);
}

/**
* @param {number} world
* @param {number} bundle
*/
function multiPhysicsWorldAddRigidBodyBundleToGlobal(world, bundle) {
    _assertNum(world);
    _assertNum(bundle);
    wasm.multiPhysicsWorldAddRigidBodyBundleToGlobal(world, bundle);
}

/**
* @param {number} world
* @param {number} bundle
*/
function multiPhysicsWorldRemoveRigidBodyBundleFromGlobal(world, bundle) {
    _assertNum(world);
    _assertNum(bundle);
    wasm.multiPhysicsWorldRemoveRigidBodyBundleFromGlobal(world, bundle);
}

/**
* @param {number} world
* @param {number} world_id
* @param {number} rigidbody
*/
function multiPhysicsWorldAddRigidBodyShadow(world, world_id, rigidbody) {
    _assertNum(world);
    _assertNum(world_id);
    _assertNum(rigidbody);
    wasm.multiPhysicsWorldAddRigidBodyShadow(world, world_id, rigidbody);
}

/**
* @param {number} world
* @param {number} world_id
* @param {number} rigidbody
*/
function multiPhysicsWorldRemoveRigidBodyShadow(world, world_id, rigidbody) {
    _assertNum(world);
    _assertNum(world_id);
    _assertNum(rigidbody);
    wasm.multiPhysicsWorldRemoveRigidBodyShadow(world, world_id, rigidbody);
}

/**
* @param {number} world
* @param {number} world_id
* @param {number} bundle
*/
function multiPhysicsWorldAddRigidBodyBundleShadow(world, world_id, bundle) {
    _assertNum(world);
    _assertNum(world_id);
    _assertNum(bundle);
    wasm.multiPhysicsWorldAddRigidBodyBundleShadow(world, world_id, bundle);
}

/**
* @param {number} world
* @param {number} world_id
* @param {number} bundle
*/
function multiPhysicsWorldRemoveRigidBodyBundleShadow(world, world_id, bundle) {
    _assertNum(world);
    _assertNum(world_id);
    _assertNum(bundle);
    wasm.multiPhysicsWorldRemoveRigidBodyBundleShadow(world, world_id, bundle);
}

/**
* @param {number} world
* @param {number} world_id
* @param {number} constraint
* @param {boolean} disable_collisions_between_linked_bodies
*/
function multiPhysicsWorldAddConstraint(world, world_id, constraint, disable_collisions_between_linked_bodies) {
    _assertNum(world);
    _assertNum(world_id);
    _assertNum(constraint);
    _assertBoolean(disable_collisions_between_linked_bodies);
    wasm.multiPhysicsWorldAddConstraint(world, world_id, constraint, disable_collisions_between_linked_bodies);
}

/**
* @param {number} world
* @param {number} world_id
* @param {number} constraint
*/
function multiPhysicsWorldRemoveConstraint(world, world_id, constraint) {
    _assertNum(world);
    _assertNum(world_id);
    _assertNum(constraint);
    wasm.multiPhysicsWorldRemoveConstraint(world, world_id, constraint);
}

/**
* @param {number} world
* @param {boolean} use_buffer
*/
function multiPhysicsWorldUseMotionStateBuffer(world, use_buffer) {
    _assertNum(world);
    _assertBoolean(use_buffer);
    wasm.multiPhysicsWorldUseMotionStateBuffer(world, use_buffer);
}

/**
* @param {number} body_a
* @param {number} body_b
* @param {number} frame_a
* @param {number} frame_b
* @param {boolean} use_linear_reference_frame_a
* @returns {number}
*/
function createGeneric6DofConstraint(body_a, body_b, frame_a, frame_b, use_linear_reference_frame_a) {
    _assertNum(body_a);
    _assertNum(body_b);
    _assertNum(frame_a);
    _assertNum(frame_b);
    _assertBoolean(use_linear_reference_frame_a);
    const ret = wasm.createGeneric6DofConstraint(body_a, body_b, frame_a, frame_b, use_linear_reference_frame_a);
    return ret >>> 0;
}

/**
* @param {number} body_bundle
* @param {number} body_a_index
* @param {number} body_b_index
* @param {number} frame_a
* @param {number} frame_b
* @param {boolean} use_linear_reference_frame_a
* @returns {number}
*/
function createGeneric6DofConstraintFromBundle(body_bundle, body_a_index, body_b_index, frame_a, frame_b, use_linear_reference_frame_a) {
    _assertNum(body_bundle);
    _assertNum(body_a_index);
    _assertNum(body_b_index);
    _assertNum(frame_a);
    _assertNum(frame_b);
    _assertBoolean(use_linear_reference_frame_a);
    const ret = wasm.createGeneric6DofConstraintFromBundle(body_bundle, body_a_index, body_b_index, frame_a, frame_b, use_linear_reference_frame_a);
    return ret >>> 0;
}

/**
* @param {number} body_a
* @param {number} body_b
* @param {number} frame_a
* @param {number} frame_b
* @param {boolean} use_linear_reference_frame_a
* @returns {number}
*/
function createGeneric6DofSpringConstraint(body_a, body_b, frame_a, frame_b, use_linear_reference_frame_a) {
    _assertNum(body_a);
    _assertNum(body_b);
    _assertNum(frame_a);
    _assertNum(frame_b);
    _assertBoolean(use_linear_reference_frame_a);
    const ret = wasm.createGeneric6DofSpringConstraint(body_a, body_b, frame_a, frame_b, use_linear_reference_frame_a);
    return ret >>> 0;
}

/**
* @param {number} body_bundle
* @param {number} body_a_index
* @param {number} body_b_index
* @param {number} frame_a
* @param {number} frame_b
* @param {boolean} use_linear_reference_frame_a
* @returns {number}
*/
function createGeneric6DofSpringConstraintFromBundle(body_bundle, body_a_index, body_b_index, frame_a, frame_b, use_linear_reference_frame_a) {
    _assertNum(body_bundle);
    _assertNum(body_a_index);
    _assertNum(body_b_index);
    _assertNum(frame_a);
    _assertNum(frame_b);
    _assertBoolean(use_linear_reference_frame_a);
    const ret = wasm.createGeneric6DofSpringConstraintFromBundle(body_bundle, body_a_index, body_b_index, frame_a, frame_b, use_linear_reference_frame_a);
    return ret >>> 0;
}

/**
* @param {number} ptr
*/
function destroyConstraint(ptr) {
    _assertNum(ptr);
    wasm.destroyConstraint(ptr);
}

/**
* @param {number} ptr
* @param {number} x
* @param {number} y
* @param {number} z
*/
function constraintSetLinearLowerLimit(ptr, x, y, z) {
    _assertNum(ptr);
    wasm.constraintSetLinearLowerLimit(ptr, x, y, z);
}

/**
* @param {number} ptr
* @param {number} x
* @param {number} y
* @param {number} z
*/
function constraintSetLinearUpperLimit(ptr, x, y, z) {
    _assertNum(ptr);
    wasm.constraintSetLinearUpperLimit(ptr, x, y, z);
}

/**
* @param {number} ptr
* @param {number} x
* @param {number} y
* @param {number} z
*/
function constraintSetAngularLowerLimit(ptr, x, y, z) {
    _assertNum(ptr);
    wasm.constraintSetAngularLowerLimit(ptr, x, y, z);
}

/**
* @param {number} ptr
* @param {number} x
* @param {number} y
* @param {number} z
*/
function constraintSetAngularUpperLimit(ptr, x, y, z) {
    _assertNum(ptr);
    wasm.constraintSetAngularUpperLimit(ptr, x, y, z);
}

/**
* @param {number} ptr
* @param {number} index
* @param {boolean} on_off
*/
function constraintEnableSpring(ptr, index, on_off) {
    _assertNum(ptr);
    _assertNum(index);
    _assertBoolean(on_off);
    wasm.constraintEnableSpring(ptr, index, on_off);
}

/**
* @param {number} ptr
* @param {number} index
* @param {number} stiffness
*/
function constraintSetStiffness(ptr, index, stiffness) {
    _assertNum(ptr);
    _assertNum(index);
    wasm.constraintSetStiffness(ptr, index, stiffness);
}

/**
* @param {number} ptr
* @param {number} index
* @param {number} damping
*/
function constraintSetDamping(ptr, index, damping) {
    _assertNum(ptr);
    _assertNum(index);
    wasm.constraintSetDamping(ptr, index, damping);
}

/**
*/
function init() {
    wasm.init();
}

/**
* @param {number} size
* @returns {number}
*/
function allocateBuffer(size) {
    _assertNum(size);
    const ret = wasm.allocateBuffer(size);
    return ret >>> 0;
}

/**
* Deallocate a buffer allocated by `allocateBuffer`.
* # Safety
* `ptr` must be a pointer to a buffer allocated by `allocateBuffer`.
* @param {number} ptr
* @param {number} size
*/
function deallocateBuffer(ptr, size) {
    _assertNum(ptr);
    _assertNum(size);
    wasm.deallocateBuffer(ptr, size);
}

/**
* @param {number} physics_world
* @returns {number}
*/
function createPhysicsRuntime(physics_world) {
    _assertNum(physics_world);
    const ret = wasm.createPhysicsRuntime(physics_world);
    return ret >>> 0;
}

/**
* @param {number} physics_runtime
*/
function destroyPhysicsRuntime(physics_runtime) {
    _assertNum(physics_runtime);
    wasm.destroyPhysicsRuntime(physics_runtime);
}

/**
* @param {number} physics_runtime
* @returns {number}
*/
function physicsRuntimeGetLockStatePtr(physics_runtime) {
    _assertNum(physics_runtime);
    const ret = wasm.physicsRuntimeGetLockStatePtr(physics_runtime);
    return ret >>> 0;
}

/**
* @param {number} physics_runtime
* @param {number} time_step
* @param {number} max_sub_steps
* @param {number} fixed_time_step
*/
function physicsRuntimeBufferedStepSimulation(physics_runtime, time_step, max_sub_steps, fixed_time_step) {
    _assertNum(physics_runtime);
    _assertNum(max_sub_steps);
    wasm.physicsRuntimeBufferedStepSimulation(physics_runtime, time_step, max_sub_steps, fixed_time_step);
}

/**
* @param {number} info
* @returns {number}
*/
function createRigidBody(info) {
    _assertNum(info);
    const ret = wasm.createRigidBody(info);
    return ret >>> 0;
}

/**
* @param {number} ptr
*/
function destroyRigidBody(ptr) {
    _assertNum(ptr);
    wasm.destroyRigidBody(ptr);
}

/**
* @param {number} ptr
* @returns {number}
*/
function rigidBodyGetMotionStatePtr(ptr) {
    _assertNum(ptr);
    const ret = wasm.rigidBodyGetMotionStatePtr(ptr);
    return ret >>> 0;
}

/**
* @param {number} ptr
* @returns {number}
*/
function rigidBodyGetBufferedMotionStatePtr(ptr) {
    _assertNum(ptr);
    const ret = wasm.rigidBodyGetBufferedMotionStatePtr(ptr);
    return ret >>> 0;
}

/**
* @param {number} ptr
*/
function rigidBodyMakeKinematic(ptr) {
    _assertNum(ptr);
    wasm.rigidBodyMakeKinematic(ptr);
}

/**
* @param {number} ptr
*/
function rigidBodyRestoreDynamic(ptr) {
    _assertNum(ptr);
    wasm.rigidBodyRestoreDynamic(ptr);
}

/**
* @param {number} info_list
* @param {number} len
* @returns {number}
*/
function createRigidBodyBundle(info_list, len) {
    _assertNum(info_list);
    _assertNum(len);
    const ret = wasm.createRigidBodyBundle(info_list, len);
    return ret >>> 0;
}

/**
* @param {number} ptr
*/
function destroyRigidBodyBundle(ptr) {
    _assertNum(ptr);
    wasm.destroyRigidBodyBundle(ptr);
}

/**
* @param {number} ptr
* @returns {number}
*/
function rigidBodyBundleGetMotionStatesPtr(ptr) {
    _assertNum(ptr);
    const ret = wasm.rigidBodyBundleGetMotionStatesPtr(ptr);
    return ret >>> 0;
}

/**
* @param {number} ptr
* @returns {number}
*/
function rigidBodyBundleGetBufferedMotionStatesPtr(ptr) {
    _assertNum(ptr);
    const ret = wasm.rigidBodyBundleGetBufferedMotionStatesPtr(ptr);
    return ret >>> 0;
}

/**
* @param {number} ptr
* @param {number} index
*/
function rigidBodyBundleMakeKinematic(ptr, index) {
    _assertNum(ptr);
    _assertNum(index);
    wasm.rigidBodyBundleMakeKinematic(ptr, index);
}

/**
* @param {number} ptr
* @param {number} index
*/
function rigidBodyBundleRestoreDynamic(ptr, index) {
    _assertNum(ptr);
    _assertNum(index);
    wasm.rigidBodyBundleRestoreDynamic(ptr, index);
}

/**
* @returns {number}
*/
function createPhysicsWorld() {
    const ret = wasm.createPhysicsWorld();
    return ret >>> 0;
}

/**
* @param {number} world
*/
function destroyPhysicsWorld(world) {
    _assertNum(world);
    wasm.destroyPhysicsWorld(world);
}

/**
* @param {number} world
* @param {number} x
* @param {number} y
* @param {number} z
*/
function physicsWorldSetGravity(world, x, y, z) {
    _assertNum(world);
    wasm.physicsWorldSetGravity(world, x, y, z);
}

/**
* @param {number} world
* @param {number} time_step
* @param {number} max_sub_steps
* @param {number} fixed_time_step
*/
function physicsWorldStepSimulation(world, time_step, max_sub_steps, fixed_time_step) {
    _assertNum(world);
    _assertNum(max_sub_steps);
    wasm.physicsWorldStepSimulation(world, time_step, max_sub_steps, fixed_time_step);
}

/**
* @param {number} world
* @param {number} rigidbody
*/
function physicsWorldAddRigidBody(world, rigidbody) {
    _assertNum(world);
    _assertNum(rigidbody);
    wasm.physicsWorldAddRigidBody(world, rigidbody);
}

/**
* @param {number} world
* @param {number} rigidbody
*/
function physicsWorldRemoveRigidBody(world, rigidbody) {
    _assertNum(world);
    _assertNum(rigidbody);
    wasm.physicsWorldRemoveRigidBody(world, rigidbody);
}

/**
* @param {number} world
* @param {number} bundle
*/
function physicsWorldAddRigidBodyBundle(world, bundle) {
    _assertNum(world);
    _assertNum(bundle);
    wasm.physicsWorldAddRigidBodyBundle(world, bundle);
}

/**
* @param {number} world
* @param {number} bundle
*/
function physicsWorldRemoveRigidBodyBundle(world, bundle) {
    _assertNum(world);
    _assertNum(bundle);
    wasm.physicsWorldRemoveRigidBodyBundle(world, bundle);
}

/**
* @param {number} world
* @param {number} constraint
* @param {boolean} disable_collisions_between_linked_bodies
*/
function physicsWorldAddConstraint(world, constraint, disable_collisions_between_linked_bodies) {
    _assertNum(world);
    _assertNum(constraint);
    _assertBoolean(disable_collisions_between_linked_bodies);
    wasm.physicsWorldAddConstraint(world, constraint, disable_collisions_between_linked_bodies);
}

/**
* @param {number} world
* @param {number} constraint
*/
function physicsWorldRemoveConstraint(world, constraint) {
    _assertNum(world);
    _assertNum(constraint);
    wasm.physicsWorldRemoveConstraint(world, constraint);
}

/**
* @param {number} world
* @param {boolean} use_buffer
*/
function physicsWorldUseMotionStateBuffer(world, use_buffer) {
    _assertNum(world);
    _assertBoolean(use_buffer);
    wasm.physicsWorldUseMotionStateBuffer(world, use_buffer);
}

function logError(f, args) {
    try {
        return f.apply(this, args);
    } catch (e) {
        let error = (function () {
            try {
                return e instanceof Error ? `${e.message}\n\nStack:\n${e.stack}` : e.toString();
            } catch(_) {
                return "<failed to stringify thrown value>";
            }
        }());
        console.error("wasm-bindgen: imported JS function that was not marked as `catch` threw an error:", error);
        throw e;
    }
}

let WASM_VECTOR_LEN = 0;

const cachedTextEncoder = (typeof TextEncoder !== 'undefined' ? new TextEncoder('utf-8') : { encode: () => { throw Error('TextEncoder not available') } } );

const encodeString = function (arg, view) {
    const buf = cachedTextEncoder.encode(arg);
    view.set(buf);
    return {
        read: arg.length,
        written: buf.length
    };
};

function passStringToWasm0(arg, malloc, realloc) {

    if (typeof(arg) !== 'string') throw new Error(`expected a string argument, found ${typeof(arg)}`);

    if (realloc === undefined) {
        const buf = cachedTextEncoder.encode(arg);
        const ptr = malloc(buf.length, 1) >>> 0;
        getUint8ArrayMemory0().subarray(ptr, ptr + buf.length).set(buf);
        WASM_VECTOR_LEN = buf.length;
        return ptr;
    }

    let len = arg.length;
    let ptr = malloc(len, 1) >>> 0;

    const mem = getUint8ArrayMemory0();

    let offset = 0;

    for (; offset < len; offset++) {
        const code = arg.charCodeAt(offset);
        if (code > 0x7F) break;
        mem[ptr + offset] = code;
    }

    if (offset !== len) {
        if (offset !== 0) {
            arg = arg.slice(offset);
        }
        ptr = realloc(ptr, len, len = offset + arg.length * 3, 1) >>> 0;
        const view = getUint8ArrayMemory0().subarray(ptr + offset, ptr + len);
        const ret = encodeString(arg, view);
        if (ret.read !== arg.length) throw new Error('failed to pass whole string');
        offset += ret.written;
        ptr = realloc(ptr, len, offset, 1) >>> 0;
    }

    WASM_VECTOR_LEN = offset;
    return ptr;
}

let cachedDataViewMemory0 = null;

function getDataViewMemory0() {
    if (cachedDataViewMemory0 === null || cachedDataViewMemory0.buffer !== wasm.memory.buffer) {
        cachedDataViewMemory0 = new DataView(wasm.memory.buffer);
    }
    return cachedDataViewMemory0;
}

function handleError(f, args) {
    try {
        return f.apply(this, args);
    } catch (e) {
        wasm.__wbindgen_exn_store(addHeapObject(e));
    }
}
/**
* @param {number} num_threads
* @returns {Promise<any>}
*/
function initThreadPool(num_threads) {
    _assertNum(num_threads);
    const ret = wasm.initThreadPool(num_threads);
    return takeObject(ret);
}

/**
* @param {number} receiver
*/
function wbg_rayon_start_worker(receiver) {
    _assertNum(receiver);
    wasm.wbg_rayon_start_worker(receiver);
}

const wbg_rayon_PoolBuilderFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_wbg_rayon_poolbuilder_free(ptr >>> 0, 1));
/**
*/
class wbg_rayon_PoolBuilder {

    constructor() {
        throw new Error('cannot invoke `new` directly');
    }

    static __wrap(ptr) {
        ptr = ptr >>> 0;
        const obj = Object.create(wbg_rayon_PoolBuilder.prototype);
        obj.__wbg_ptr = ptr;
        wbg_rayon_PoolBuilderFinalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        wbg_rayon_PoolBuilderFinalization.unregister(this);
        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_wbg_rayon_poolbuilder_free(ptr, 0);
    }
    /**
    * @returns {number}
    */
    numThreads() {
        if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
        _assertNum(this.__wbg_ptr);
        const ret = wasm.wbg_rayon_poolbuilder_numThreads(this.__wbg_ptr);
        return ret >>> 0;
    }
    /**
    * @returns {number}
    */
    receiver() {
        if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
        _assertNum(this.__wbg_ptr);
        const ret = wasm.wbg_rayon_poolbuilder_receiver(this.__wbg_ptr);
        return ret >>> 0;
    }
    /**
    */
    build() {
        if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
        _assertNum(this.__wbg_ptr);
        wasm.wbg_rayon_poolbuilder_build(this.__wbg_ptr);
    }
}

async function __wbg_load(module, imports) {
    if (typeof Response === 'function' && module instanceof Response) {
        if (typeof WebAssembly.instantiateStreaming === 'function') {
            try {
                return await WebAssembly.instantiateStreaming(module, imports);

            } catch (e) {
                if (module.headers.get('Content-Type') != 'application/wasm') {
                    console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", e);

                } else {
                    throw e;
                }
            }
        }

        const bytes = await module.arrayBuffer();
        return await WebAssembly.instantiate(bytes, imports);

    } else {
        const instance = await WebAssembly.instantiate(module, imports);

        if (instance instanceof WebAssembly.Instance) {
            return { instance, module };

        } else {
            return instance;
        }
    }
}

function __wbg_get_imports() {
    const imports = {};
    imports.wbg = {};
    imports.wbg.__wbindgen_object_drop_ref = function(arg0) {
        takeObject(arg0);
    };
    imports.wbg.__wbindgen_string_new = function(arg0, arg1) {
        const ret = getStringFromWasm0(arg0, arg1);
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_new_abda76e883ba8a5f = function() { return logError(function () {
        const ret = new Error();
        return addHeapObject(ret);
    }, arguments) };
    imports.wbg.__wbg_stack_658279fe44541cf6 = function() { return logError(function (arg0, arg1) {
        const ret = getObject(arg1).stack;
        const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len1 = WASM_VECTOR_LEN;
        getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
        getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
    }, arguments) };
    imports.wbg.__wbg_error_f851667af71bcfc6 = function() { return logError(function (arg0, arg1) {
        let deferred0_0;
        let deferred0_1;
        try {
            deferred0_0 = arg0;
            deferred0_1 = arg1;
            console.error(getStringFromWasm0(arg0, arg1));
        } finally {
            wasm.__wbindgen_free(deferred0_0, deferred0_1, 1);
        }
    }, arguments) };
    imports.wbg.__wbg_error_09480e4aadca50ad = function() { return logError(function (arg0) {
        console.error(getObject(arg0));
    }, arguments) };
    imports.wbg.__wbg_log_b103404cc5920657 = function() { return logError(function (arg0) {
        console.log(getObject(arg0));
    }, arguments) };
    imports.wbg.__wbg_instanceof_Window_5012736c80a01584 = function() { return logError(function (arg0) {
        let result;
        try {
            result = getObject(arg0) instanceof Window;
        } catch (_) {
            result = false;
        }
        const ret = result;
        _assertBoolean(ret);
        return ret;
    }, arguments) };
    imports.wbg.__wbg_newnoargs_76313bd6ff35d0f2 = function() { return logError(function (arg0, arg1) {
        const ret = new Function(getStringFromWasm0(arg0, arg1));
        return addHeapObject(ret);
    }, arguments) };
    imports.wbg.__wbg_call_1084a111329e68ce = function() { return handleError(function (arg0, arg1) {
        const ret = getObject(arg0).call(getObject(arg1));
        return addHeapObject(ret);
    }, arguments) };
    imports.wbg.__wbindgen_object_clone_ref = function(arg0) {
        const ret = getObject(arg0);
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_self_3093d5d1f7bcb682 = function() { return handleError(function () {
        const ret = self.self;
        return addHeapObject(ret);
    }, arguments) };
    imports.wbg.__wbg_window_3bcfc4d31bc012f8 = function() { return handleError(function () {
        const ret = window.window;
        return addHeapObject(ret);
    }, arguments) };
    imports.wbg.__wbg_globalThis_86b222e13bdf32ed = function() { return handleError(function () {
        const ret = globalThis.globalThis;
        return addHeapObject(ret);
    }, arguments) };
    imports.wbg.__wbg_global_e5a3fe56f8be9485 = function() { return handleError(function () {
        const ret = global.global;
        return addHeapObject(ret);
    }, arguments) };
    imports.wbg.__wbindgen_is_undefined = function(arg0) {
        const ret = getObject(arg0) === undefined;
        _assertBoolean(ret);
        return ret;
    };
    imports.wbg.__wbindgen_throw = function(arg0, arg1) {
        throw new Error(getStringFromWasm0(arg0, arg1));
    };
    imports.wbg.__wbindgen_module = function() {
        const ret = __wbg_init.__wbindgen_wasm_module;
        return addHeapObject(ret);
    };
    imports.wbg.__wbindgen_memory = function() {
        const ret = wasm.memory;
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_startWorkers_d587c7d659590d3c = function() { return logError(function (arg0, arg1, arg2) {
        const ret = startWorkers(takeObject(arg0), takeObject(arg1), wbg_rayon_PoolBuilder.__wrap(arg2));
        return addHeapObject(ret);
    }, arguments) };

    return imports;
}

function __wbg_init_memory(imports, memory) {
    imports.wbg.memory = memory || new WebAssembly.Memory({initial:19,maximum:16384,shared:true});
}

function __wbg_finalize_init(instance, module, thread_stack_size) {
    wasm = instance.exports;
    __wbg_init.__wbindgen_wasm_module = module;
    cachedDataViewMemory0 = null;
    cachedUint8ArrayMemory0 = null;

if (typeof thread_stack_size !== 'undefined' && (typeof thread_stack_size !== 'number' || thread_stack_size === 0 || thread_stack_size % 65536 !== 0)) { throw 'invalid stack size' }
wasm.__wbindgen_start(thread_stack_size);
return wasm;
}

function initSync(module, memory) {
    if (wasm !== undefined) return wasm;

    let thread_stack_size
    if (typeof module !== 'undefined' && Object.getPrototypeOf(module) === Object.prototype)
    ({module, memory, thread_stack_size} = module)
    else
    console.warn('using deprecated parameters for `initSync()`; pass a single object instead')

    const imports = __wbg_get_imports();

    __wbg_init_memory(imports, memory);

    if (!(module instanceof WebAssembly.Module)) {
        module = new WebAssembly.Module(module);
    }

    const instance = new WebAssembly.Instance(module, imports);

    return __wbg_finalize_init(instance, module, thread_stack_size);
}

async function __wbg_init(module_or_path, memory) {
    if (wasm !== undefined) return wasm;

    let thread_stack_size
    if (typeof module_or_path !== 'undefined' && Object.getPrototypeOf(module_or_path) === Object.prototype)
    ({module_or_path, memory, thread_stack_size} = module_or_path)
    else
    console.warn('using deprecated parameters for the initialization function; pass a single object instead')

    if (typeof module_or_path === 'undefined') {
        module_or_path = new URL(/* asset import */ __webpack_require__(9845), __webpack_require__.b);
    }
    const imports = __wbg_get_imports();

    if (typeof module_or_path === 'string' || (typeof Request === 'function' && module_or_path instanceof Request) || (typeof URL === 'function' && module_or_path instanceof URL)) {
        module_or_path = fetch(module_or_path);
    }

    __wbg_init_memory(imports, memory);

    const { instance, module } = await __wbg_load(await module_or_path, imports);

    return __wbg_finalize_init(instance, module, thread_stack_size);
}


/* harmony default export */ const md = (__wbg_init);

;// ./src/Runtime/InstanceType/multiDebug.ts

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
class BulletWasmInstanceTypeMD {
    getWasmInstanceInner() {
        return md_namespaceObject;
    }
}

;// ./src/Runtime/physicsShape.ts
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

;// ./src/Runtime/rigidBody.ts
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
    constructor(wasmInstance, ptr, shapeReference) {
        this._wasmInstance = wasmInstance;
        this._ptr = ptr;
        this._shapeReference = shapeReference;
        shapeReference.addReference();
        this._referenceCount = 0;
    }
    dispose() {
        if (this._referenceCount > 0) {
            throw new Error("Cannot dispose rigid body while it still has references");
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
    updateBufferedMotionState() {
        this._nullCheck();
        const bufferedMotionStatePtr = this.runtime.wasmInstance.rigidBodyGetBufferedMotionStatePtr(this._inner.ptr);
        this._bufferedMotionStatePtr = this.runtime.wasmInstance.createTypedArray(Float32Array, bufferedMotionStatePtr, 20 /* Constants.MotionStateSizeInFloat32Array */);
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

;// ./src/Runtime/rigidBodyBundle.ts
class RigidBodyBundleInner {
    _wasmInstance;
    _ptr;
    _shapeReferences;
    _referenceCount;
    constructor(wasmInstance, ptr, shapeReferences) {
        this._wasmInstance = wasmInstance;
        this._ptr = ptr;
        this._shapeReferences = shapeReferences;
        for (const shape of shapeReferences) {
            shape.addReference();
        }
        this._referenceCount = 0;
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
        this._motionStatesPtr = wasmInstance.createTypedArray(Float32Array, motionStatesPtr, count * 80 /* Constants.MotionStateSize */ / Float32Array.BYTES_PER_ELEMENT);
        const bufferedMotionStatesPtr = wasmInstance.rigidBodyBundleGetBufferedMotionStatesPtr(ptr);
        this._bufferedMotionStatesPtr = wasmInstance.createTypedArray(Float32Array, bufferedMotionStatesPtr, count * 80 /* Constants.MotionStateSize */ / Float32Array.BYTES_PER_ELEMENT);
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
    updateBufferedMotionStates() {
        this._nullCheck();
        const bufferedMotionStatesPtr = this.runtime.wasmInstance.rigidBodyBundleGetBufferedMotionStatesPtr(this._inner.ptr);
        this._bufferedMotionStatesPtr = this.runtime.wasmInstance.createTypedArray(Float32Array, bufferedMotionStatesPtr, this._count * 80 /* Constants.MotionStateSize */ / Float32Array.BYTES_PER_ELEMENT);
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

;// ./src/Runtime/rigidBodyConstructionInfo.ts
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

;// ./src/Runtime/rigidBodyConstructionInfoList.ts
const rigidBodyConstructionInfoList_size = 128;
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
        this._wasmInstance.deref()?.deallocateBuffer(this._ptr, rigidBodyConstructionInfoList_size * this._count);
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
        const ptr = wasmInstance.allocateBuffer(rigidBodyConstructionInfoList_size * count);
        this._uint32Ptr = wasmInstance.createTypedArray(Uint32Array, ptr, rigidBodyConstructionInfoList_size / uint32Bytes * count);
        this._float32Ptr = wasmInstance.createTypedArray(Float32Array, ptr, rigidBodyConstructionInfoList_size / float32Bytes * count);
        this._uint8Ptr = wasmInstance.createTypedArray(Uint8Array, ptr, rigidBodyConstructionInfoList_size / uint8Bytes * count);
        this._uint16Ptr = wasmInstance.createTypedArray(Uint16Array, ptr, rigidBodyConstructionInfoList_size / uint16Bytes * count);
        this._inner = new RigidBodyConstructionInfoListInner(new WeakRef(wasmInstance), ptr, count);
        // Initialize to default values
        const uint32Ptr = this._uint32Ptr.array;
        const float32Ptr = this._float32Ptr.array;
        const uint8Ptr = this._uint8Ptr.array;
        const uint16Ptr = this._uint16Ptr.array;
        for (let i = 0; i < count; ++i) {
            const offset = i * rigidBodyConstructionInfoList_size;
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
        return this._inner.ptr + n * rigidBodyConstructionInfoList_size;
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
        const offset = n * rigidBodyConstructionInfoList_size;
        this._uint32Ptr.array[(offset + 0x0) / Uint32Array.BYTES_PER_ELEMENT] = value ? value.ptr : 0;
    }
    getInitialTransformToRef(n, result) {
        this._nullCheck();
        const offset = n * rigidBodyConstructionInfoList_size;
        const float32Ptr = this._float32Ptr.array;
        const float32Bytes = Float32Array.BYTES_PER_ELEMENT;
        result.set(float32Ptr[(offset + 0x10) / float32Bytes], float32Ptr[(offset + 0x14) / float32Bytes], float32Ptr[(offset + 0x18) / float32Bytes], float32Ptr[(offset + 0x1C) / float32Bytes], float32Ptr[(offset + 0x20) / float32Bytes], float32Ptr[(offset + 0x24) / float32Bytes], float32Ptr[(offset + 0x28) / float32Bytes], float32Ptr[(offset + 0x2C) / float32Bytes], float32Ptr[(offset + 0x30) / float32Bytes], float32Ptr[(offset + 0x34) / float32Bytes], float32Ptr[(offset + 0x38) / float32Bytes], float32Ptr[(offset + 0x3C) / float32Bytes], float32Ptr[(offset + 0x40) / float32Bytes], float32Ptr[(offset + 0x44) / float32Bytes], float32Ptr[(offset + 0x48) / float32Bytes], float32Ptr[(offset + 0x4C) / float32Bytes]);
        return result;
    }
    setInitialTransform(n, value) {
        this._nullCheck();
        const offset = n * rigidBodyConstructionInfoList_size;
        const float32Ptr = this._float32Ptr.array;
        const float32Bytes = Float32Array.BYTES_PER_ELEMENT;
        value.copyToArray(float32Ptr, (offset + 0x10) / float32Bytes);
    }
    getMotionType(n) {
        this._nullCheck();
        const offset = n * rigidBodyConstructionInfoList_size;
        return this._uint8Ptr.array[(offset + 0x50) / Uint8Array.BYTES_PER_ELEMENT];
    }
    setMotionType(n, value) {
        this._nullCheck();
        const offset = n * rigidBodyConstructionInfoList_size;
        this._uint8Ptr.array[(offset + 0x50) / Uint8Array.BYTES_PER_ELEMENT] = value;
    }
    getMass(n) {
        this._nullCheck();
        const offset = n * rigidBodyConstructionInfoList_size;
        return this._float32Ptr.array[(offset + 0x54) / Float32Array.BYTES_PER_ELEMENT];
    }
    setMass(n, value) {
        this._nullCheck();
        const offset = n * rigidBodyConstructionInfoList_size;
        this._float32Ptr.array[(offset + 0x54) / Float32Array.BYTES_PER_ELEMENT] = value;
    }
    getLinearDamping(n) {
        this._nullCheck();
        const offset = n * rigidBodyConstructionInfoList_size;
        return this._float32Ptr.array[(offset + 0x58) / Float32Array.BYTES_PER_ELEMENT];
    }
    setLinearDamping(n, value) {
        this._nullCheck();
        const offset = n * rigidBodyConstructionInfoList_size;
        this._float32Ptr.array[(offset + 0x58) / Float32Array.BYTES_PER_ELEMENT] = value;
    }
    getAngularDamping(n) {
        this._nullCheck();
        const offset = n * rigidBodyConstructionInfoList_size;
        return this._float32Ptr.array[(offset + 0x5C) / Float32Array.BYTES_PER_ELEMENT];
    }
    setAngularDamping(n, value) {
        this._nullCheck();
        const offset = n * rigidBodyConstructionInfoList_size;
        this._float32Ptr.array[(offset + 0x5C) / Float32Array.BYTES_PER_ELEMENT] = value;
    }
    getFriction(n) {
        this._nullCheck();
        const offset = n * rigidBodyConstructionInfoList_size;
        return this._float32Ptr.array[(offset + 0x60) / Float32Array.BYTES_PER_ELEMENT];
    }
    setFriction(n, value) {
        this._nullCheck();
        const offset = n * rigidBodyConstructionInfoList_size;
        this._float32Ptr.array[(offset + 0x60) / Float32Array.BYTES_PER_ELEMENT] = value;
    }
    getRestitution(n) {
        this._nullCheck();
        const offset = n * rigidBodyConstructionInfoList_size;
        return this._float32Ptr.array[(offset + 0x64) / Float32Array.BYTES_PER_ELEMENT];
    }
    setRestitution(n, value) {
        this._nullCheck();
        const offset = n * rigidBodyConstructionInfoList_size;
        this._float32Ptr.array[(offset + 0x64) / Float32Array.BYTES_PER_ELEMENT] = value;
    }
    getLinearSleepingThreshold(n) {
        this._nullCheck();
        const offset = n * rigidBodyConstructionInfoList_size;
        return this._float32Ptr.array[(offset + 0x68) / Float32Array.BYTES_PER_ELEMENT];
    }
    setLinearSleepingThreshold(n, value) {
        this._nullCheck();
        const offset = n * rigidBodyConstructionInfoList_size;
        this._float32Ptr.array[(offset + 0x68) / Float32Array.BYTES_PER_ELEMENT] = value;
    }
    getAngularSleepingThreshold(n) {
        this._nullCheck();
        const offset = n * rigidBodyConstructionInfoList_size;
        return this._float32Ptr.array[(offset + 0x6C) / Float32Array.BYTES_PER_ELEMENT];
    }
    setAngularSleepingThreshold(n, value) {
        this._nullCheck();
        const offset = n * rigidBodyConstructionInfoList_size;
        this._float32Ptr.array[(offset + 0x6C) / Float32Array.BYTES_PER_ELEMENT] = value;
    }
    getCollisionGroup(n) {
        this._nullCheck();
        const offset = n * rigidBodyConstructionInfoList_size;
        return this._uint16Ptr.array[(offset + 0x70) / Uint16Array.BYTES_PER_ELEMENT];
    }
    setCollisionGroup(n, value) {
        this._nullCheck();
        const offset = n * rigidBodyConstructionInfoList_size;
        this._uint16Ptr.array[(offset + 0x70) / Uint16Array.BYTES_PER_ELEMENT] = value;
    }
    getCollisionMask(n) {
        this._nullCheck();
        const offset = n * rigidBodyConstructionInfoList_size;
        return this._uint16Ptr.array[(offset + 0x72) / Uint16Array.BYTES_PER_ELEMENT];
    }
    setCollisionMask(n, value) {
        this._nullCheck();
        const offset = n * rigidBodyConstructionInfoList_size;
        this._uint16Ptr.array[(offset + 0x72) / Uint16Array.BYTES_PER_ELEMENT] = value;
    }
    getAdditionalDamping(n) {
        this._nullCheck();
        const offset = n * rigidBodyConstructionInfoList_size;
        return !!this._uint8Ptr.array[(offset + 0x74) / Uint8Array.BYTES_PER_ELEMENT];
    }
    setAdditionalDamping(n, value) {
        this._nullCheck();
        const offset = n * rigidBodyConstructionInfoList_size;
        this._uint8Ptr.array[(offset + 0x74) / Uint8Array.BYTES_PER_ELEMENT] = +value;
    }
    getNoContactResponse(n) {
        this._nullCheck();
        const offset = n * rigidBodyConstructionInfoList_size;
        return !!this._uint8Ptr.array[(offset + 0x75) / Uint8Array.BYTES_PER_ELEMENT];
    }
    setNoContactResponse(n, value) {
        this._nullCheck();
        const offset = n * rigidBodyConstructionInfoList_size;
        this._uint8Ptr.array[(offset + 0x75) / Uint8Array.BYTES_PER_ELEMENT] = +value;
    }
    getDisableDeactivation(n) {
        this._nullCheck();
        const offset = n * rigidBodyConstructionInfoList_size;
        return !!this._uint8Ptr.array[(offset + 0x76) / Uint8Array.BYTES_PER_ELEMENT];
    }
    setDisableDeactivation(n, value) {
        this._nullCheck();
        const offset = n * rigidBodyConstructionInfoList_size;
        this._uint8Ptr.array[(offset + 0x76) / Uint8Array.BYTES_PER_ELEMENT] = +value;
    }
}

;// ./src/Test/Scene/multiPhysicsRuntimeShadowTestScene.ts






















class SceneBuilder {
    async build(_canvas, engine) {
        const scene = new core_scene/* Scene */.Z(engine);
        scene.clearColor = new math_color/* Color4 */.ov(0.95, 0.95, 0.95, 1.0);
        const camera = new arcRotateCamera/* ArcRotateCamera */.L("arcRotateCamera", 0, 0, 500, new math_vector/* Vector3 */.Pq(0, 0, 0), scene);
        camera.minZ = 1;
        camera.maxZ = 3000;
        camera.setPosition(new math_vector/* Vector3 */.Pq(60, 40, -50).scaleInPlace(10));
        camera.attachControl(undefined, false);
        camera.inertia = 0.8;
        camera.speed = 10;
        const hemisphericLight = new Lights_hemisphericLight/* HemisphericLight */.g("hemisphericLight", new math_vector/* Vector3 */.Pq(0, 1, 0), scene);
        hemisphericLight.intensity = 0.5;
        hemisphericLight.specular = new math_color/* Color3 */.v9(0, 0, 0);
        hemisphericLight.groundColor = new math_color/* Color3 */.v9(1, 1, 1);
        const directionalLight = new Lights_directionalLight/* DirectionalLight */.Z("directionalLight", new math_vector/* Vector3 */.Pq(0.5, -1, 1), scene);
        directionalLight.intensity = 0.5;
        const shadowBound = 250;
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
        const wasmInstance = await getBulletWasmInstance(new BulletWasmInstanceTypeMD(), 32);
        const runtime = new MultiPhysicsRuntime(wasmInstance, true);
        runtime.register(scene);
        runtime.evaluationType = PhysicsRuntimeEvaluationType.Buffered;
        const matrix = new math_vector/* Matrix */.uq();
        {
            const ground = (0,planeBuilder/* CreatePlane */.x)("ground", { size: 500 }, scene);
            ground.rotationQuaternion = math_vector/* Quaternion */.PT.RotationAxis(new math_vector/* Vector3 */.Pq(1, 0, 0), Math.PI / 2);
            shadowGenerator.addShadowCaster(ground);
            ground.receiveShadows = true;
            const groundShape = new PhysicsStaticPlaneShape(runtime, new math_vector/* Vector3 */.Pq(0, 0, -1), 0);
            const groundRbInfo = new RigidBodyConstructionInfo(wasmInstance);
            groundRbInfo.shape = groundShape;
            math_vector/* Matrix */.uq.FromQuaternionToRef(ground.rotationQuaternion, matrix);
            groundRbInfo.setInitialTransform(matrix);
            groundRbInfo.motionType = 1 /* MotionType.Static */;
            const groundRigidBody = new RigidBody(runtime, groundRbInfo);
            runtime.addRigidBodyToGlobal(groundRigidBody);
        }
        const rbCount = 256 * 2;
        const baseBox = (0,boxBuilder/* CreateBox */.an)("box", { size: 2 }, scene);
        shadowGenerator.addShadowCaster(baseBox);
        baseBox.receiveShadows = true;
        const rowCount = 2;
        const columnCount = 3;
        const margin = 40;
        const rigidbodyMatrixBuffer = new Float32Array(rbCount * 16 * rowCount * columnCount);
        baseBox.thinInstanceSetBuffer("matrix", rigidbodyMatrixBuffer, 16, false);
        const boxShape = new PhysicsBoxShape(runtime, new math_vector/* Vector3 */.Pq(1, 1, 1));
        const bundles = [];
        for (let i = 0; i < rowCount; ++i)
            for (let j = 0; j < columnCount; ++j) {
                const worldId = i * columnCount + j;
                const xOffset = (j - columnCount / 2) * margin + (margin / 2) * (columnCount % 2 ? 0 : 1);
                const zOffset = (i - rowCount / 2) * margin + (margin / 2) * (rowCount % 2 ? 0 : 1);
                const rbInfoList = new RigidBodyConstructionInfoList(wasmInstance, rbCount);
                for (let k = 0; k < rbCount; ++k) {
                    rbInfoList.setShape(k, boxShape);
                    const initialTransform = math_vector/* Matrix */.uq.TranslationToRef(xOffset, 1 + k * 2, zOffset, matrix);
                    rbInfoList.setInitialTransform(k, initialTransform);
                    rbInfoList.setFriction(k, 1.0);
                    rbInfoList.setLinearDamping(k, 0.3);
                    rbInfoList.setAngularDamping(k, 0.3);
                }
                const boxRigidBodyBundle = new RigidBodyBundle(runtime, rbInfoList);
                runtime.addRigidBodyBundle(boxRigidBodyBundle, worldId);
                for (let k = 0; k < rowCount * columnCount; ++k) {
                    if (k === worldId) {
                        continue;
                    }
                    runtime.addRigidBodyBundleShadow(boxRigidBodyBundle, k);
                }
                for (let k = 0; k < rbCount; k += 2) {
                    const indices = [k, k + 1];
                    const constraint = new Generic6DofSpringConstraint(runtime, boxRigidBodyBundle, indices, math_vector/* Matrix */.uq.Translation(0, -1.2, 0), math_vector/* Matrix */.uq.Translation(0, 1.2, 0), true);
                    constraint.setLinearLowerLimit(new math_vector/* Vector3 */.Pq(0, 0, 0));
                    constraint.setLinearUpperLimit(new math_vector/* Vector3 */.Pq(0, 0, 0));
                    constraint.setAngularLowerLimit(new math_vector/* Vector3 */.Pq(Math.PI / 4, 0, 0));
                    constraint.setAngularUpperLimit(new math_vector/* Vector3 */.Pq(0, 0, 0));
                    for (let l = 0; l < 6; ++l) {
                        constraint.enableSpring(l, true);
                        constraint.setStiffness(l, 100);
                        constraint.setDamping(l, 1);
                    }
                    runtime.addConstraint(constraint, worldId, false);
                }
                bundles.push(boxRigidBodyBundle);
            }
        runtime.onTickObservable.add(() => {
            for (let i = 0; i < bundles.length; ++i) {
                bundles[i].getTransformMatricesToArray(rigidbodyMatrixBuffer, i * rbCount * 16);
            }
            baseBox.thinInstanceBufferUpdated("matrix");
        });
        return scene;
    }
}


/***/ }),

/***/ 1478:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   y: () => (/* binding */ BaseRuntime)
/* harmony export */ });
class BaseRuntime {
    _canvas;
    _engine;
    _scene;
    _onTick;
    constructor(params) {
        this._canvas = params.canvas;
        this._engine = params.engine;
        this._scene = null;
        this._onTick = null;
    }
    static async Create(params) {
        const runtime = new BaseRuntime(params);
        runtime._scene = await runtime._initialize(params.sceneBuilder);
        runtime._onTick = runtime._makeOnTick();
        return runtime;
    }
    run() {
        const engine = this._engine;
        window.addEventListener("resize", this._onResize);
        engine.runRenderLoop(this._onTick);
    }
    dispose() {
        window.removeEventListener("resize", this._onResize);
        this._engine.dispose();
    }
    _onResize = () => {
        this._engine.resize();
    };
    async _initialize(sceneBuilder) {
        return await sceneBuilder.build(this._canvas, this._engine);
    }
    _makeOnTick() {
        const scene = this._scene;
        return () => scene.render();
    }
}


/***/ }),

/***/ 2089:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony import */ var _babylonjs_core_Engines_engine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3720);
/* harmony import */ var _baseRuntime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1478);
/* harmony import */ var _Scene_multiPhysicsRuntimeShadowTestScene__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9031);



await new Promise(resolve => window.onload = resolve);
const canvas = document.createElement("canvas");
canvas.style.width = "100%";
canvas.style.height = "100%";
canvas.style.display = "block";
document.body.appendChild(canvas);
const engine = new _babylonjs_core_Engines_engine__WEBPACK_IMPORTED_MODULE_0__/* .Engine */ .N(canvas, false, {
    preserveDrawingBuffer: false,
    stencil: true,
    antialias: true,
    alpha: false,
    premultipliedAlpha: false,
    powerPreference: "high-performance",
    doNotHandleTouchAction: false,
    doNotHandleContextLost: true,
    audioEngine: false,
    disableWebGL2Support: false
}, true);
_baseRuntime__WEBPACK_IMPORTED_MODULE_1__/* .BaseRuntime */ .y.Create({
    canvas,
    engine,
    sceneBuilder: new _Scene_multiPhysicsRuntimeShadowTestScene__WEBPACK_IMPORTED_MODULE_2__/* .SceneBuilder */ .u()
}).then(runtime => runtime.run());

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

/***/ }),

/***/ 9845:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4c501506f52e89e32fd9.wasm";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/async module */
/******/ 	(() => {
/******/ 		var webpackQueues = typeof Symbol === "function" ? Symbol("webpack queues") : "__webpack_queues__";
/******/ 		var webpackExports = typeof Symbol === "function" ? Symbol("webpack exports") : "__webpack_exports__";
/******/ 		var webpackError = typeof Symbol === "function" ? Symbol("webpack error") : "__webpack_error__";
/******/ 		var resolveQueue = (queue) => {
/******/ 			if(queue && queue.d < 1) {
/******/ 				queue.d = 1;
/******/ 				queue.forEach((fn) => (fn.r--));
/******/ 				queue.forEach((fn) => (fn.r-- ? fn.r++ : fn()));
/******/ 			}
/******/ 		}
/******/ 		var wrapDeps = (deps) => (deps.map((dep) => {
/******/ 			if(dep !== null && typeof dep === "object") {
/******/ 				if(dep[webpackQueues]) return dep;
/******/ 				if(dep.then) {
/******/ 					var queue = [];
/******/ 					queue.d = 0;
/******/ 					dep.then((r) => {
/******/ 						obj[webpackExports] = r;
/******/ 						resolveQueue(queue);
/******/ 					}, (e) => {
/******/ 						obj[webpackError] = e;
/******/ 						resolveQueue(queue);
/******/ 					});
/******/ 					var obj = {};
/******/ 					obj[webpackQueues] = (fn) => (fn(queue));
/******/ 					return obj;
/******/ 				}
/******/ 			}
/******/ 			var ret = {};
/******/ 			ret[webpackQueues] = x => {};
/******/ 			ret[webpackExports] = dep;
/******/ 			return ret;
/******/ 		}));
/******/ 		__webpack_require__.a = (module, body, hasAwait) => {
/******/ 			var queue;
/******/ 			hasAwait && ((queue = []).d = -1);
/******/ 			var depQueues = new Set();
/******/ 			var exports = module.exports;
/******/ 			var currentDeps;
/******/ 			var outerResolve;
/******/ 			var reject;
/******/ 			var promise = new Promise((resolve, rej) => {
/******/ 				reject = rej;
/******/ 				outerResolve = resolve;
/******/ 			});
/******/ 			promise[webpackExports] = exports;
/******/ 			promise[webpackQueues] = (fn) => (queue && fn(queue), depQueues.forEach(fn), promise["catch"](x => {}));
/******/ 			module.exports = promise;
/******/ 			body((deps) => {
/******/ 				currentDeps = wrapDeps(deps);
/******/ 				var fn;
/******/ 				var getResult = () => (currentDeps.map((d) => {
/******/ 					if(d[webpackError]) throw d[webpackError];
/******/ 					return d[webpackExports];
/******/ 				}))
/******/ 				var promise = new Promise((resolve) => {
/******/ 					fn = () => (resolve(getResult));
/******/ 					fn.r = 0;
/******/ 					var fnQueue = (q) => (q !== queue && !depQueues.has(q) && (depQueues.add(q), q && !q.d && (fn.r++, q.push(fn))));
/******/ 					currentDeps.map((dep) => (dep[webpackQueues](fnQueue)));
/******/ 				});
/******/ 				return fn.r ? promise : getResult();
/******/ 			}, (err) => ((err ? reject(promise[webpackError] = err) : outerResolve(exports)), resolveQueue(queue)));
/******/ 			queue && queue.d < 0 && (queue.d = 0);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + ({"71":"glslShaders","126":"wgslShaders"}[chunkId] || chunkId) + ".bundle.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "babylon-bulletphysics:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			792: 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkbabylon_bulletphysics"] = self["webpackChunkbabylon_bulletphysics"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [621], () => (__webpack_require__(2089)))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;