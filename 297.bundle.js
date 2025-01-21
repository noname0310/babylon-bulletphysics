"use strict";
(self["webpackChunkbabylon_bulletphysics"] = self["webpackChunkbabylon_bulletphysics"] || []).push([[297],{

/***/ 9297:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  SceneBuilder: () => (/* binding */ SceneBuilder)
});

// NAMESPACE OBJECT: ./src/wasm/sd/index.js
var sd_namespaceObject = {};
__webpack_require__.r(sd_namespaceObject);
__webpack_require__.d(sd_namespaceObject, {
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
  "default": () => (sd),
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
  rigidBodyRestoreDynamic: () => (rigidBodyRestoreDynamic)
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
// EXTERNAL MODULE: ./src/Runtime/Impl/multiPhysicsRuntime.ts
var multiPhysicsRuntime = __webpack_require__(3948);
// EXTERNAL MODULE: ./src/Runtime/Impl/physicsRuntimeEvaluationType.ts
var physicsRuntimeEvaluationType = __webpack_require__(9009);
// EXTERNAL MODULE: ./src/Runtime/InstanceType/multiDebug.ts + 2 modules
var multiDebug = __webpack_require__(7002);
;// ./src/wasm/sd/index.js
let wasm;

const cachedTextDecoder = (typeof TextDecoder !== 'undefined' ? new TextDecoder('utf-8', { ignoreBOM: true, fatal: true }) : { decode: () => { throw Error('TextDecoder not available') } } );

if (typeof TextDecoder !== 'undefined') { cachedTextDecoder.decode(); };

let cachedUint8ArrayMemory0 = null;

function getUint8ArrayMemory0() {
    if (cachedUint8ArrayMemory0 === null || cachedUint8ArrayMemory0.byteLength === 0) {
        cachedUint8ArrayMemory0 = new Uint8Array(wasm.memory.buffer);
    }
    return cachedUint8ArrayMemory0;
}

function getStringFromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    return cachedTextDecoder.decode(getUint8ArrayMemory0().subarray(ptr, ptr + len));
}

const heap = new Array(128).fill(undefined);

heap.push(undefined, null, true, false);

let heap_next = heap.length;

function addHeapObject(obj) {
    if (heap_next === heap.length) heap.push(heap.length + 1);
    const idx = heap_next;
    heap_next = heap[idx];

    if (typeof(heap_next) !== 'number') throw new Error('corrupt heap');

    heap[idx] = obj;
    return idx;
}

function getObject(idx) { return heap[idx]; }

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

function _assertBoolean(n) {
    if (typeof(n) !== 'boolean') {
        throw new Error(`expected a boolean argument, found ${typeof(n)}`);
    }
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

function _assertNum(n) {
    if (typeof(n) !== 'number') throw new Error(`expected a number argument, found ${typeof(n)}`);
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

const encodeString = (typeof cachedTextEncoder.encodeInto === 'function'
    ? function (arg, view) {
    return cachedTextEncoder.encodeInto(arg, view);
}
    : function (arg, view) {
    const buf = cachedTextEncoder.encode(arg);
    view.set(buf);
    return {
        read: arg.length,
        written: buf.length
    };
});

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
    if (cachedDataViewMemory0 === null || cachedDataViewMemory0.buffer.detached === true || (cachedDataViewMemory0.buffer.detached === undefined && cachedDataViewMemory0.buffer !== wasm.memory.buffer)) {
        cachedDataViewMemory0 = new DataView(wasm.memory.buffer);
    }
    return cachedDataViewMemory0;
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
    imports.wbg.__wbindgen_string_new = function(arg0, arg1) {
        const ret = getStringFromWasm0(arg0, arg1);
        return addHeapObject(ret);
    };
    imports.wbg.__wbindgen_object_drop_ref = function(arg0) {
        takeObject(arg0);
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
    imports.wbg.__wbindgen_throw = function(arg0, arg1) {
        throw new Error(getStringFromWasm0(arg0, arg1));
    };

    return imports;
}

function __wbg_init_memory(imports, memory) {

}

function __wbg_finalize_init(instance, module) {
    wasm = instance.exports;
    __wbg_init.__wbindgen_wasm_module = module;
    cachedDataViewMemory0 = null;
    cachedUint8ArrayMemory0 = null;



    return wasm;
}

function initSync(module) {
    if (wasm !== undefined) return wasm;


    if (typeof module !== 'undefined' && Object.getPrototypeOf(module) === Object.prototype)
    ({module} = module)
    else
    console.warn('using deprecated parameters for `initSync()`; pass a single object instead')

    const imports = __wbg_get_imports();

    __wbg_init_memory(imports);

    if (!(module instanceof WebAssembly.Module)) {
        module = new WebAssembly.Module(module);
    }

    const instance = new WebAssembly.Instance(module, imports);

    return __wbg_finalize_init(instance, module);
}

async function __wbg_init(module_or_path) {
    if (wasm !== undefined) return wasm;


    if (typeof module_or_path !== 'undefined' && Object.getPrototypeOf(module_or_path) === Object.prototype)
    ({module_or_path} = module_or_path)
    else
    console.warn('using deprecated parameters for the initialization function; pass a single object instead')

    if (typeof module_or_path === 'undefined') {
        module_or_path = new URL(/* asset import */ __webpack_require__(4871), __webpack_require__.b);
    }
    const imports = __wbg_get_imports();

    if (typeof module_or_path === 'string' || (typeof Request === 'function' && module_or_path instanceof Request) || (typeof URL === 'function' && module_or_path instanceof URL)) {
        module_or_path = fetch(module_or_path);
    }

    __wbg_init_memory(imports);

    const { instance, module } = await __wbg_load(await module_or_path, imports);

    return __wbg_finalize_init(instance, module);
}


/* harmony default export */ const sd = (__wbg_init);

;// ./src/Runtime/InstanceType/singleDebug.ts

/**
 * Singlethreaded debug build BulletWasmInstanceType
 *
 * Requirements for use:
 *
 * - Browser that supports WebAssembly
 */
class BulletWasmInstanceTypeSD {
    getWasmInstanceInner() {
        return sd_namespaceObject;
    }
}

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
;// ./src/Test/Scene/tMultiPhysicsRuntime.ts























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
        // Inspector.Show(scene, { enablePopup: false });
        const threadCount = 32;
        const wasmInstance = threadCount === 1
            ? await (0,bulletWasmInstance/* getBulletWasmInstance */.e)(new BulletWasmInstanceTypeSD())
            : await (0,bulletWasmInstance/* getBulletWasmInstance */.e)(new multiDebug/* BulletWasmInstanceTypeMD */.t(), threadCount);
        const runtime = new multiPhysicsRuntime/* MultiPhysicsRuntime */.h(wasmInstance, {
            allowDynamicShadow: true,
            preserveBackBuffer: true
        });
        runtime.register(scene);
        runtime.evaluationType = physicsRuntimeEvaluationType/* PhysicsRuntimeEvaluationType */.q.Buffered;
        const matrix = new math_vector/* Matrix */.uq();
        {
            const ground = (0,planeBuilder/* CreatePlane */.x)("ground", { size: 500 }, scene);
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
            runtime.addRigidBodyToGlobal(groundRigidBody);
        }
        const rbCount = 256 * 2;
        const baseBox = (0,boxBuilder/* CreateBox */.an)("box", { size: 2 }, scene);
        shadowGenerator.addShadowCaster(baseBox);
        baseBox.receiveShadows = true;
        const rowCount = 4;
        const columnCount = 8;
        const margin = 60;
        const rigidbodyMatrixBuffer = new Float32Array(rbCount * 16 * rowCount * columnCount);
        baseBox.thinInstanceSetBuffer("matrix", rigidbodyMatrixBuffer, 16, false);
        const boxShape = new physicsShape/* PhysicsBoxShape */.SA(runtime, new math_vector/* Vector3 */.Pq(1, 1, 1));
        const bundles = [];
        for (let i = 0; i < rowCount; ++i)
            for (let j = 0; j < columnCount; ++j) {
                const worldId = i * columnCount + j;
                const xOffset = (j - columnCount / 2) * margin + (margin / 2) * (columnCount % 2 ? 0 : 1);
                const zOffset = (i - rowCount / 2) * margin + (margin / 2) * (rowCount % 2 ? 0 : 1);
                const rbInfoList = new rigidBodyConstructionInfoList/* RigidBodyConstructionInfoList */.x(wasmInstance, rbCount);
                for (let k = 0; k < rbCount; ++k) {
                    rbInfoList.setShape(k, boxShape);
                    const initialTransform = math_vector/* Matrix */.uq.TranslationToRef(xOffset, 1 + k * 2, zOffset, matrix);
                    rbInfoList.setInitialTransform(k, initialTransform);
                    rbInfoList.setFriction(k, 1.0);
                    rbInfoList.setLinearDamping(k, 0.3);
                    rbInfoList.setAngularDamping(k, 0.3);
                }
                const boxRigidBodyBundle = new rigidBodyBundle/* RigidBodyBundle */.Y(runtime, rbInfoList);
                runtime.addRigidBodyBundle(boxRigidBodyBundle, worldId);
                for (let k = 0; k < rbCount; k += 2) {
                    const indices = [k, k + 1];
                    const constraint = new Runtime_constraint/* Generic6DofSpringConstraint */.vC(runtime, boxRigidBodyBundle, indices, math_vector/* Matrix */.uq.Translation(0, -1.2, 0), math_vector/* Matrix */.uq.Translation(0, 1.2, 0), true);
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

/***/ 4871:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4b95c49cb7a696112ffa.wasm";

/***/ })

}]);