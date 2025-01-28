"use strict";
(self["webpackChunkbabylon_bulletphysics"] = self["webpackChunkbabylon_bulletphysics"] || []).push([[2],{

/***/ 7002:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  t: () => (/* binding */ BulletWasmInstanceTypeMD)
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

function _assertNum(n) {
    if (typeof(n) !== 'number') throw new Error(`expected a number argument, found ${typeof(n)}`);
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


/***/ }),

/***/ 9845:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b7a1fe5323f841660209.wasm";

/***/ })

}]);