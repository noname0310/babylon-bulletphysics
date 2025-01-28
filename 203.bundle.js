"use strict";
(self["webpackChunkbabylon_bulletphysics"] = self["webpackChunkbabylon_bulletphysics"] || []).push([[203],{

/***/ 91167:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ BulletWasmInstanceTypeSR)
});

// NAMESPACE OBJECT: ./src/wasm/sr/index.js
var sr_namespaceObject = {};
__webpack_require__.r(sr_namespaceObject);
__webpack_require__.d(sr_namespaceObject, {
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
  "default": () => (sr),
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

;// ./src/wasm/sr/index.js
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
    wasm.destroyShape(ptr);
}

/**
* @param {number} info
* @returns {number}
*/
function createRigidBody(info) {
    const ret = wasm.createRigidBody(info);
    return ret >>> 0;
}

/**
* @param {number} ptr
*/
function destroyRigidBody(ptr) {
    wasm.destroyRigidBody(ptr);
}

/**
* @param {number} ptr
* @returns {number}
*/
function rigidBodyGetMotionStatePtr(ptr) {
    const ret = wasm.rigidBodyGetMotionStatePtr(ptr);
    return ret >>> 0;
}

/**
* @param {number} ptr
* @returns {number}
*/
function rigidBodyGetBufferedMotionStatePtr(ptr) {
    const ret = wasm.rigidBodyGetBufferedMotionStatePtr(ptr);
    return ret >>> 0;
}

/**
* @param {number} ptr
*/
function rigidBodyMakeKinematic(ptr) {
    wasm.rigidBodyMakeKinematic(ptr);
}

/**
* @param {number} ptr
*/
function rigidBodyRestoreDynamic(ptr) {
    wasm.rigidBodyRestoreDynamic(ptr);
}

/**
* @param {number} info_list
* @param {number} len
* @returns {number}
*/
function createRigidBodyBundle(info_list, len) {
    const ret = wasm.createRigidBodyBundle(info_list, len);
    return ret >>> 0;
}

/**
* @param {number} ptr
*/
function destroyRigidBodyBundle(ptr) {
    wasm.destroyRigidBodyBundle(ptr);
}

/**
* @param {number} ptr
* @returns {number}
*/
function rigidBodyBundleGetMotionStatesPtr(ptr) {
    const ret = wasm.rigidBodyBundleGetMotionStatesPtr(ptr);
    return ret >>> 0;
}

/**
* @param {number} ptr
* @returns {number}
*/
function rigidBodyBundleGetBufferedMotionStatesPtr(ptr) {
    const ret = wasm.rigidBodyBundleGetBufferedMotionStatesPtr(ptr);
    return ret >>> 0;
}

/**
* @param {number} ptr
* @param {number} index
*/
function rigidBodyBundleMakeKinematic(ptr, index) {
    wasm.rigidBodyBundleMakeKinematic(ptr, index);
}

/**
* @param {number} ptr
* @param {number} index
*/
function rigidBodyBundleRestoreDynamic(ptr, index) {
    wasm.rigidBodyBundleRestoreDynamic(ptr, index);
}

/**
* @param {boolean} allow_dynamic_shadow
* @returns {number}
*/
function createMultiPhysicsWorld(allow_dynamic_shadow) {
    const ret = wasm.createMultiPhysicsWorld(allow_dynamic_shadow);
    return ret >>> 0;
}

/**
* @param {number} world
*/
function destroyMultiPhysicsWorld(world) {
    wasm.destroyMultiPhysicsWorld(world);
}

/**
* @param {number} world
* @param {number} x
* @param {number} y
* @param {number} z
*/
function multiPhysicsWorldSetGravity(world, x, y, z) {
    wasm.multiPhysicsWorldSetGravity(world, x, y, z);
}

/**
* @param {number} world
* @param {number} time_step
* @param {number} max_sub_steps
* @param {number} fixed_time_step
*/
function multiPhysicsWorldStepSimulation(world, time_step, max_sub_steps, fixed_time_step) {
    wasm.multiPhysicsWorldStepSimulation(world, time_step, max_sub_steps, fixed_time_step);
}

/**
* @param {number} world
* @param {number} world_id
* @param {number} rigidbody
*/
function multiPhysicsWorldAddRigidBody(world, world_id, rigidbody) {
    wasm.multiPhysicsWorldAddRigidBody(world, world_id, rigidbody);
}

/**
* @param {number} world
* @param {number} world_id
* @param {number} rigidbody
*/
function multiPhysicsWorldRemoveRigidBody(world, world_id, rigidbody) {
    wasm.multiPhysicsWorldRemoveRigidBody(world, world_id, rigidbody);
}

/**
* @param {number} world
* @param {number} world_id
* @param {number} bundle
*/
function multiPhysicsWorldAddRigidBodyBundle(world, world_id, bundle) {
    wasm.multiPhysicsWorldAddRigidBodyBundle(world, world_id, bundle);
}

/**
* @param {number} world
* @param {number} world_id
* @param {number} bundle
*/
function multiPhysicsWorldRemoveRigidBodyBundle(world, world_id, bundle) {
    wasm.multiPhysicsWorldRemoveRigidBodyBundle(world, world_id, bundle);
}

/**
* @param {number} world
* @param {number} rigidbody
*/
function multiPhysicsWorldAddRigidBodyToGlobal(world, rigidbody) {
    wasm.multiPhysicsWorldAddRigidBodyToGlobal(world, rigidbody);
}

/**
* @param {number} world
* @param {number} rigidbody
*/
function multiPhysicsWorldRemoveRigidBodyFromGlobal(world, rigidbody) {
    wasm.multiPhysicsWorldRemoveRigidBodyFromGlobal(world, rigidbody);
}

/**
* @param {number} world
* @param {number} bundle
*/
function multiPhysicsWorldAddRigidBodyBundleToGlobal(world, bundle) {
    wasm.multiPhysicsWorldAddRigidBodyBundleToGlobal(world, bundle);
}

/**
* @param {number} world
* @param {number} bundle
*/
function multiPhysicsWorldRemoveRigidBodyBundleFromGlobal(world, bundle) {
    wasm.multiPhysicsWorldRemoveRigidBodyBundleFromGlobal(world, bundle);
}

/**
* @param {number} world
* @param {number} world_id
* @param {number} rigidbody
*/
function multiPhysicsWorldAddRigidBodyShadow(world, world_id, rigidbody) {
    wasm.multiPhysicsWorldAddRigidBodyShadow(world, world_id, rigidbody);
}

/**
* @param {number} world
* @param {number} world_id
* @param {number} rigidbody
*/
function multiPhysicsWorldRemoveRigidBodyShadow(world, world_id, rigidbody) {
    wasm.multiPhysicsWorldRemoveRigidBodyShadow(world, world_id, rigidbody);
}

/**
* @param {number} world
* @param {number} world_id
* @param {number} bundle
*/
function multiPhysicsWorldAddRigidBodyBundleShadow(world, world_id, bundle) {
    wasm.multiPhysicsWorldAddRigidBodyBundleShadow(world, world_id, bundle);
}

/**
* @param {number} world
* @param {number} world_id
* @param {number} bundle
*/
function multiPhysicsWorldRemoveRigidBodyBundleShadow(world, world_id, bundle) {
    wasm.multiPhysicsWorldRemoveRigidBodyBundleShadow(world, world_id, bundle);
}

/**
* @param {number} world
* @param {number} world_id
* @param {number} constraint
* @param {boolean} disable_collisions_between_linked_bodies
*/
function multiPhysicsWorldAddConstraint(world, world_id, constraint, disable_collisions_between_linked_bodies) {
    wasm.multiPhysicsWorldAddConstraint(world, world_id, constraint, disable_collisions_between_linked_bodies);
}

/**
* @param {number} world
* @param {number} world_id
* @param {number} constraint
*/
function multiPhysicsWorldRemoveConstraint(world, world_id, constraint) {
    wasm.multiPhysicsWorldRemoveConstraint(world, world_id, constraint);
}

/**
* @param {number} world
* @param {boolean} use_buffer
*/
function multiPhysicsWorldUseMotionStateBuffer(world, use_buffer) {
    wasm.multiPhysicsWorldUseMotionStateBuffer(world, use_buffer);
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
    wasm.destroyPhysicsWorld(world);
}

/**
* @param {number} world
* @param {number} x
* @param {number} y
* @param {number} z
*/
function physicsWorldSetGravity(world, x, y, z) {
    wasm.physicsWorldSetGravity(world, x, y, z);
}

/**
* @param {number} world
* @param {number} time_step
* @param {number} max_sub_steps
* @param {number} fixed_time_step
*/
function physicsWorldStepSimulation(world, time_step, max_sub_steps, fixed_time_step) {
    wasm.physicsWorldStepSimulation(world, time_step, max_sub_steps, fixed_time_step);
}

/**
* @param {number} world
* @param {number} rigidbody
*/
function physicsWorldAddRigidBody(world, rigidbody) {
    wasm.physicsWorldAddRigidBody(world, rigidbody);
}

/**
* @param {number} world
* @param {number} rigidbody
*/
function physicsWorldRemoveRigidBody(world, rigidbody) {
    wasm.physicsWorldRemoveRigidBody(world, rigidbody);
}

/**
* @param {number} world
* @param {number} bundle
*/
function physicsWorldAddRigidBodyBundle(world, bundle) {
    wasm.physicsWorldAddRigidBodyBundle(world, bundle);
}

/**
* @param {number} world
* @param {number} bundle
*/
function physicsWorldRemoveRigidBodyBundle(world, bundle) {
    wasm.physicsWorldRemoveRigidBodyBundle(world, bundle);
}

/**
* @param {number} world
* @param {number} constraint
* @param {boolean} disable_collisions_between_linked_bodies
*/
function physicsWorldAddConstraint(world, constraint, disable_collisions_between_linked_bodies) {
    wasm.physicsWorldAddConstraint(world, constraint, disable_collisions_between_linked_bodies);
}

/**
* @param {number} world
* @param {number} constraint
*/
function physicsWorldRemoveConstraint(world, constraint) {
    wasm.physicsWorldRemoveConstraint(world, constraint);
}

/**
* @param {number} world
* @param {boolean} use_buffer
*/
function physicsWorldUseMotionStateBuffer(world, use_buffer) {
    wasm.physicsWorldUseMotionStateBuffer(world, use_buffer);
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
    const ret = wasm.createGeneric6DofSpringConstraintFromBundle(body_bundle, body_a_index, body_b_index, frame_a, frame_b, use_linear_reference_frame_a);
    return ret >>> 0;
}

/**
* @param {number} ptr
*/
function destroyConstraint(ptr) {
    wasm.destroyConstraint(ptr);
}

/**
* @param {number} ptr
* @param {number} x
* @param {number} y
* @param {number} z
*/
function constraintSetLinearLowerLimit(ptr, x, y, z) {
    wasm.constraintSetLinearLowerLimit(ptr, x, y, z);
}

/**
* @param {number} ptr
* @param {number} x
* @param {number} y
* @param {number} z
*/
function constraintSetLinearUpperLimit(ptr, x, y, z) {
    wasm.constraintSetLinearUpperLimit(ptr, x, y, z);
}

/**
* @param {number} ptr
* @param {number} x
* @param {number} y
* @param {number} z
*/
function constraintSetAngularLowerLimit(ptr, x, y, z) {
    wasm.constraintSetAngularLowerLimit(ptr, x, y, z);
}

/**
* @param {number} ptr
* @param {number} x
* @param {number} y
* @param {number} z
*/
function constraintSetAngularUpperLimit(ptr, x, y, z) {
    wasm.constraintSetAngularUpperLimit(ptr, x, y, z);
}

/**
* @param {number} ptr
* @param {number} index
* @param {boolean} on_off
*/
function constraintEnableSpring(ptr, index, on_off) {
    wasm.constraintEnableSpring(ptr, index, on_off);
}

/**
* @param {number} ptr
* @param {number} index
* @param {number} stiffness
*/
function constraintSetStiffness(ptr, index, stiffness) {
    wasm.constraintSetStiffness(ptr, index, stiffness);
}

/**
* @param {number} ptr
* @param {number} index
* @param {number} damping
*/
function constraintSetDamping(ptr, index, damping) {
    wasm.constraintSetDamping(ptr, index, damping);
}

/**
* @param {number} physics_world
* @returns {number}
*/
function createMultiPhysicsRuntime(physics_world) {
    const ret = wasm.createMultiPhysicsRuntime(physics_world);
    return ret >>> 0;
}

/**
* @param {number} physics_runtime
*/
function destroyMultiPhysicsRuntime(physics_runtime) {
    wasm.destroyMultiPhysicsRuntime(physics_runtime);
}

/**
* @param {number} runtime
* @returns {number}
*/
function multiPhysicsRuntimeGetLockStatePtr(runtime) {
    const ret = wasm.multiPhysicsRuntimeGetLockStatePtr(runtime);
    return ret >>> 0;
}

/**
* @param {number} physics_world
* @returns {number}
*/
function createPhysicsRuntime(physics_world) {
    const ret = wasm.createMultiPhysicsRuntime(physics_world);
    return ret >>> 0;
}

/**
* @param {number} physics_runtime
*/
function destroyPhysicsRuntime(physics_runtime) {
    wasm.destroyMultiPhysicsRuntime(physics_runtime);
}

/**
* @param {number} physics_runtime
* @returns {number}
*/
function physicsRuntimeGetLockStatePtr(physics_runtime) {
    const ret = wasm.multiPhysicsRuntimeGetLockStatePtr(physics_runtime);
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
    wasm.deallocateBuffer(ptr, size);
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
    imports.wbg.__wbg_log_b103404cc5920657 = function(arg0) {
        console.log(getObject(arg0));
    };
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
        module_or_path = new URL(/* asset import */ __webpack_require__(48865), __webpack_require__.b);
    }
    const imports = __wbg_get_imports();

    if (typeof module_or_path === 'string' || (typeof Request === 'function' && module_or_path instanceof Request) || (typeof URL === 'function' && module_or_path instanceof URL)) {
        module_or_path = fetch(module_or_path);
    }

    __wbg_init_memory(imports);

    const { instance, module } = await __wbg_load(await module_or_path, imports);

    return __wbg_finalize_init(instance, module);
}


/* harmony default export */ const sr = (__wbg_init);

;// ./src/Runtime/InstanceType/singleRelease.ts

/**
 * Singlethreaded release build BulletWasmInstanceType
 *
 * Requirements for use:
 *
 * - Browser that supports WebAssembly
 */
class BulletWasmInstanceTypeSR {
    getWasmInstanceInner() {
        return sr_namespaceObject;
    }
}


/***/ }),

/***/ 15733:
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


/***/ }),

/***/ 48865:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "01db62e7ad31b5376620.wasm";

/***/ })

}]);