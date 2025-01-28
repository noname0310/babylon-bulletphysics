"use strict";
(self["webpackChunkbabylon_bulletphysics"] = self["webpackChunkbabylon_bulletphysics"] || []).push([[274],{

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

/***/ 6942:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SceneBuilder: () => (/* binding */ SceneBuilder)
/* harmony export */ });
/* harmony import */ var _babylonjs_core_Meshes_thinInstanceMesh__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90203);
/* harmony import */ var _babylonjs_core_Lights_Shadows_shadowGeneratorSceneComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(33832);
/* harmony import */ var _babylonjs_core_Materials_standardMaterial__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2093);
/* harmony import */ var _babylonjs_core_Cameras_arcRotateCamera__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7839);
/* harmony import */ var _babylonjs_core_Lights_directionalLight__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(52046);
/* harmony import */ var _babylonjs_core_Lights_hemisphericLight__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(71513);
/* harmony import */ var _babylonjs_core_Lights_Shadows_shadowGenerator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(18595);
/* harmony import */ var _babylonjs_core_Maths_math_color__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(26041);
/* harmony import */ var _babylonjs_core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(79923);
/* harmony import */ var _babylonjs_core_Meshes_Builders_boxBuilder__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(96793);
/* harmony import */ var _babylonjs_core_Meshes_Builders_planeBuilder__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(58144);
/* harmony import */ var _babylonjs_core_scene__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(87491);
/* harmony import */ var _Runtime_bulletWasmInstance__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(46738);
/* harmony import */ var _Runtime_constraint__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(67168);
/* harmony import */ var _Runtime_Impl_multiPhysicsRuntime__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(23948);
/* harmony import */ var _Runtime_Impl_physicsRuntimeEvaluationType__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(29009);
/* harmony import */ var _Runtime_InstanceType_multiDebug__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(47002);
/* harmony import */ var _Runtime_physicsShape__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(26405);
/* harmony import */ var _Runtime_rigidBody__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(1592);
/* harmony import */ var _Runtime_rigidBodyBundle__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(67648);
/* harmony import */ var _Runtime_rigidBodyConstructionInfo__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(35901);
/* harmony import */ var _Runtime_rigidBodyConstructionInfoList__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(3477);






















class SceneBuilder {
    async build(_canvas, engine) {
        const scene = new _babylonjs_core_scene__WEBPACK_IMPORTED_MODULE_11__/* .Scene */ .Z(engine);
        scene.clearColor = new _babylonjs_core_Maths_math_color__WEBPACK_IMPORTED_MODULE_7__/* .Color4 */ .ov(0.95, 0.95, 0.95, 1.0);
        const camera = new _babylonjs_core_Cameras_arcRotateCamera__WEBPACK_IMPORTED_MODULE_3__/* .ArcRotateCamera */ .L("arcRotateCamera", 0, 0, 500, new _babylonjs_core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_8__/* .Vector3 */ .Pq(0, 0, 0), scene);
        camera.minZ = 1;
        camera.maxZ = 3000;
        camera.setPosition(new _babylonjs_core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_8__/* .Vector3 */ .Pq(60, 40, -50).scaleInPlace(10));
        camera.attachControl(undefined, false);
        camera.inertia = 0.8;
        camera.speed = 10;
        const hemisphericLight = new _babylonjs_core_Lights_hemisphericLight__WEBPACK_IMPORTED_MODULE_5__/* .HemisphericLight */ .g("hemisphericLight", new _babylonjs_core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_8__/* .Vector3 */ .Pq(0, 1, 0), scene);
        hemisphericLight.intensity = 0.5;
        hemisphericLight.specular = new _babylonjs_core_Maths_math_color__WEBPACK_IMPORTED_MODULE_7__/* .Color3 */ .v9(0, 0, 0);
        hemisphericLight.groundColor = new _babylonjs_core_Maths_math_color__WEBPACK_IMPORTED_MODULE_7__/* .Color3 */ .v9(1, 1, 1);
        const directionalLight = new _babylonjs_core_Lights_directionalLight__WEBPACK_IMPORTED_MODULE_4__/* .DirectionalLight */ .Z("directionalLight", new _babylonjs_core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_8__/* .Vector3 */ .Pq(0.5, -1, 1), scene);
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
        const shadowGenerator = new _babylonjs_core_Lights_Shadows_shadowGenerator__WEBPACK_IMPORTED_MODULE_6__/* .ShadowGenerator */ .o(2048, directionalLight, true);
        shadowGenerator.transparencyShadow = true;
        shadowGenerator.usePercentageCloserFiltering = true;
        shadowGenerator.forceBackFacesOnly = false;
        shadowGenerator.bias = 0.004;
        shadowGenerator.filteringQuality = _babylonjs_core_Lights_Shadows_shadowGenerator__WEBPACK_IMPORTED_MODULE_6__/* .ShadowGenerator */ .o.QUALITY_MEDIUM;
        const wasmInstance = await (0,_Runtime_bulletWasmInstance__WEBPACK_IMPORTED_MODULE_12__/* .getBulletWasmInstance */ .e)(new _Runtime_InstanceType_multiDebug__WEBPACK_IMPORTED_MODULE_13__/* .BulletWasmInstanceTypeMD */ .t(), 4);
        const runtime = new _Runtime_Impl_multiPhysicsRuntime__WEBPACK_IMPORTED_MODULE_14__/* .MultiPhysicsRuntime */ .h(wasmInstance, {
            allowDynamicShadow: true,
            preserveBackBuffer: true
        });
        runtime.register(scene);
        runtime.evaluationType = _Runtime_Impl_physicsRuntimeEvaluationType__WEBPACK_IMPORTED_MODULE_15__/* .PhysicsRuntimeEvaluationType */ .q.Immediate;
        const matrix = new _babylonjs_core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_8__/* .Matrix */ .uq();
        {
            const ground = (0,_babylonjs_core_Meshes_Builders_planeBuilder__WEBPACK_IMPORTED_MODULE_10__/* .CreatePlane */ .x)("ground", { size: 500 }, scene);
            ground.rotationQuaternion = _babylonjs_core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_8__/* .Quaternion */ .PT.RotationAxis(new _babylonjs_core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_8__/* .Vector3 */ .Pq(1, 0, 0), Math.PI / 2);
            shadowGenerator.addShadowCaster(ground);
            ground.receiveShadows = true;
            const groundShape = new _Runtime_physicsShape__WEBPACK_IMPORTED_MODULE_16__/* .PhysicsStaticPlaneShape */ .Ty(runtime, new _babylonjs_core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_8__/* .Vector3 */ .Pq(0, 0, -1), 0);
            const groundRbInfo = new _Runtime_rigidBodyConstructionInfo__WEBPACK_IMPORTED_MODULE_17__/* .RigidBodyConstructionInfo */ .t(wasmInstance);
            groundRbInfo.shape = groundShape;
            _babylonjs_core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_8__/* .Matrix */ .uq.FromQuaternionToRef(ground.rotationQuaternion, matrix);
            groundRbInfo.setInitialTransform(matrix);
            groundRbInfo.motionType = 1 /* MotionType.Static */;
            const groundRigidBody = new _Runtime_rigidBody__WEBPACK_IMPORTED_MODULE_18__/* .RigidBody */ .U(runtime, groundRbInfo);
            runtime.addRigidBodyToGlobal(groundRigidBody);
        }
        const rbCount = 256 * 2;
        const baseBox = (0,_babylonjs_core_Meshes_Builders_boxBuilder__WEBPACK_IMPORTED_MODULE_9__/* .CreateBox */ .an)("box", { size: 2 }, scene);
        shadowGenerator.addShadowCaster(baseBox);
        baseBox.receiveShadows = true;
        const rowCount = 2;
        const columnCount = 2;
        const margin = 20;
        const rigidbodyMatrixBuffer = new Float32Array(rbCount * 16 * rowCount * columnCount);
        baseBox.thinInstanceSetBuffer("matrix", rigidbodyMatrixBuffer, 16, false);
        const rigidbodyColorBuffer = new Float32Array(rbCount * 4 * rowCount * columnCount);
        const colorTable = [
            "#ff0000",
            "#00ff00",
            "#0000ff",
            "#ffff00",
            "#ff00ff",
            "#00ffff"
        ];
        for (let i = 0; i < rowCount * columnCount; ++i) {
            const color = _babylonjs_core_Maths_math_color__WEBPACK_IMPORTED_MODULE_7__/* .Color4 */ .ov.FromHexString(colorTable[i % colorTable.length]);
            for (let j = 0; j < rbCount; ++j) {
                rigidbodyColorBuffer[i * rbCount * 4 + j * 4 + 0] = color.r;
                rigidbodyColorBuffer[i * rbCount * 4 + j * 4 + 1] = color.g;
                rigidbodyColorBuffer[i * rbCount * 4 + j * 4 + 2] = color.b;
                rigidbodyColorBuffer[i * rbCount * 4 + j * 4 + 3] = color.a;
            }
        }
        baseBox.thinInstanceSetBuffer("color", rigidbodyColorBuffer, 4, false);
        const boxShape = new _Runtime_physicsShape__WEBPACK_IMPORTED_MODULE_16__/* .PhysicsBoxShape */ .SA(runtime, new _babylonjs_core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_8__/* .Vector3 */ .Pq(1, 1, 1));
        const bundles = [];
        for (let i = 0; i < rowCount; ++i)
            for (let j = 0; j < columnCount; ++j) {
                const worldId = i * columnCount + j;
                const xOffset = (j - columnCount / 2) * margin + (margin / 2) * (columnCount % 2 ? 0 : 1);
                const zOffset = (i - rowCount / 2) * margin + (margin / 2) * (rowCount % 2 ? 0 : 1);
                const rbInfoList = new _Runtime_rigidBodyConstructionInfoList__WEBPACK_IMPORTED_MODULE_19__/* .RigidBodyConstructionInfoList */ .x(wasmInstance, rbCount);
                for (let k = 0; k < rbCount; ++k) {
                    rbInfoList.setShape(k, boxShape);
                    const initialTransform = _babylonjs_core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_8__/* .Matrix */ .uq.TranslationToRef(xOffset, 1 + k * 2, zOffset, matrix);
                    rbInfoList.setInitialTransform(k, initialTransform);
                    rbInfoList.setFriction(k, 1.0);
                    rbInfoList.setLinearDamping(k, 0.3);
                    rbInfoList.setAngularDamping(k, 0.3);
                }
                const boxRigidBodyBundle = new _Runtime_rigidBodyBundle__WEBPACK_IMPORTED_MODULE_20__/* .RigidBodyBundle */ .Y(runtime, rbInfoList);
                runtime.addRigidBodyBundle(boxRigidBodyBundle, worldId);
                for (let k = 0; k < rowCount * columnCount; ++k) {
                    if (k === worldId) {
                        continue;
                    }
                    runtime.addRigidBodyBundleShadow(boxRigidBodyBundle, k);
                }
                for (let k = 0; k < rbCount; k += 2) {
                    const indices = [k, k + 1];
                    const constraint = new _Runtime_constraint__WEBPACK_IMPORTED_MODULE_21__/* .Generic6DofSpringConstraint */ .vC(runtime, boxRigidBodyBundle, indices, _babylonjs_core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_8__/* .Matrix */ .uq.Translation(0, -1.2, 0), _babylonjs_core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_8__/* .Matrix */ .uq.Translation(0, 1.2, 0), true);
                    constraint.setLinearLowerLimit(new _babylonjs_core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_8__/* .Vector3 */ .Pq(0, 0, 0));
                    constraint.setLinearUpperLimit(new _babylonjs_core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_8__/* .Vector3 */ .Pq(0, 0, 0));
                    constraint.setAngularLowerLimit(new _babylonjs_core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_8__/* .Vector3 */ .Pq(Math.PI / 4, 0, 0));
                    constraint.setAngularUpperLimit(new _babylonjs_core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_8__/* .Vector3 */ .Pq(0, 0, 0));
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


/***/ })

}]);