"use strict";
(self["webpackChunkbabylon_bulletphysics"] = self["webpackChunkbabylon_bulletphysics"] || []).push([[255],{

/***/ 2090:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   D: () => (/* binding */ NullPhysicsRuntime)
/* harmony export */ });
/* harmony import */ var _Immediate_immediateRigidBodyBundleImpl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5228);
/* harmony import */ var _Immediate_immediateRigidBodyImpl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4444);


class NullSpinlock {
    wait() { }
}
class NullPhysicsRuntime {
    /**
     * @internal
     */
    wasmInstance;
    /**
     * Spinlock for the physics runtime to synchronize access to the physics world state
     * @internal
     */
    lock;
    /**
     * Creates a new physics runtime
     * @param wasmInstance The Bullet WASM instance
     */
    constructor(wasmInstance) {
        this.wasmInstance = wasmInstance;
        this.lock = new NullSpinlock();
    }
    createRigidBodyImpl() {
        return new _Immediate_immediateRigidBodyImpl__WEBPACK_IMPORTED_MODULE_0__/* .ImmediateRigidBodyImpl */ .x();
    }
    createRigidBodyBundleImpl(bundle) {
        return new _Immediate_immediateRigidBodyBundleImpl__WEBPACK_IMPORTED_MODULE_1__/* .ImmediateRigidBodyBundleImpl */ .R(bundle.count);
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

/***/ 255:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SceneBuilder: () => (/* binding */ SceneBuilder)
/* harmony export */ });
/* harmony import */ var _babylonjs_core_Meshes_thinInstanceMesh__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(203);
/* harmony import */ var _babylonjs_core_Lights_Shadows_shadowGeneratorSceneComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1503);
/* harmony import */ var _babylonjs_core_Materials_standardMaterial__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8227);
/* harmony import */ var _babylonjs_core_Cameras_arcRotateCamera__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7456);
/* harmony import */ var _babylonjs_core_Lights_directionalLight__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5581);
/* harmony import */ var _babylonjs_core_Lights_hemisphericLight__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1513);
/* harmony import */ var _babylonjs_core_Lights_Shadows_shadowGenerator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9711);
/* harmony import */ var _babylonjs_core_Maths_math_color__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6041);
/* harmony import */ var _babylonjs_core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9923);
/* harmony import */ var _babylonjs_core_Meshes_Builders_boxBuilder__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9899);
/* harmony import */ var _babylonjs_core_Meshes_Builders_planeBuilder__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8144);
/* harmony import */ var _babylonjs_core_scene__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(554);
/* harmony import */ var _Runtime_bulletWasmInstance__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(6738);
/* harmony import */ var _Runtime_constraint__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(7168);
/* harmony import */ var _Runtime_Impl_nullPhysicsRuntime__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(2090);
/* harmony import */ var _Runtime_InstanceType_multiDebug__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(7002);
/* harmony import */ var _Runtime_physicsShape__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(6405);
/* harmony import */ var _Runtime_physicsWorld__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(472);
/* harmony import */ var _Runtime_rigidBody__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(1592);
/* harmony import */ var _Runtime_rigidBodyBundle__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(7648);
/* harmony import */ var _Runtime_rigidBodyConstructionInfo__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(5901);
/* harmony import */ var _Runtime_rigidBodyConstructionInfoList__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(3477);












// import { Inspector } from "@babylonjs/inspector";










class SceneBuilder {
    async build(_canvas, engine) {
        const scene = new _babylonjs_core_scene__WEBPACK_IMPORTED_MODULE_11__/* .Scene */ .Z(engine);
        scene.clearColor = new _babylonjs_core_Maths_math_color__WEBPACK_IMPORTED_MODULE_7__/* .Color4 */ .ov(0.95, 0.95, 0.95, 1.0);
        const camera = new _babylonjs_core_Cameras_arcRotateCamera__WEBPACK_IMPORTED_MODULE_3__/* .ArcRotateCamera */ .L("arcRotateCamera", 0, 0, 500, new _babylonjs_core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_8__/* .Vector3 */ .Pq(0, 0, 0), scene);
        camera.minZ = 1;
        camera.maxZ = 1000;
        camera.setPosition(new _babylonjs_core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_8__/* .Vector3 */ .Pq(60, 40, -50));
        camera.attachControl(undefined, false);
        camera.inertia = 0.8;
        camera.speed = 10;
        const hemisphericLight = new _babylonjs_core_Lights_hemisphericLight__WEBPACK_IMPORTED_MODULE_5__/* .HemisphericLight */ .g("hemisphericLight", new _babylonjs_core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_8__/* .Vector3 */ .Pq(0, 1, 0), scene);
        hemisphericLight.intensity = 0.5;
        hemisphericLight.specular = new _babylonjs_core_Maths_math_color__WEBPACK_IMPORTED_MODULE_7__/* .Color3 */ .v9(0, 0, 0);
        hemisphericLight.groundColor = new _babylonjs_core_Maths_math_color__WEBPACK_IMPORTED_MODULE_7__/* .Color3 */ .v9(1, 1, 1);
        const directionalLight = new _babylonjs_core_Lights_directionalLight__WEBPACK_IMPORTED_MODULE_4__/* .DirectionalLight */ .Z("directionalLight", new _babylonjs_core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_8__/* .Vector3 */ .Pq(0.5, -1, 1), scene);
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
        const shadowGenerator = new _babylonjs_core_Lights_Shadows_shadowGenerator__WEBPACK_IMPORTED_MODULE_6__/* .ShadowGenerator */ .o(2048, directionalLight, true);
        shadowGenerator.transparencyShadow = true;
        shadowGenerator.usePercentageCloserFiltering = true;
        shadowGenerator.forceBackFacesOnly = false;
        shadowGenerator.bias = 0.004;
        shadowGenerator.filteringQuality = _babylonjs_core_Lights_Shadows_shadowGenerator__WEBPACK_IMPORTED_MODULE_6__/* .ShadowGenerator */ .o.QUALITY_MEDIUM;
        // Inspector.Show(scene, { enablePopup: false });
        const wasmInstance = await (0,_Runtime_bulletWasmInstance__WEBPACK_IMPORTED_MODULE_12__/* .getBulletWasmInstance */ .e)(new _Runtime_InstanceType_multiDebug__WEBPACK_IMPORTED_MODULE_13__/* .BulletWasmInstanceTypeMD */ .t());
        const runtime = new _Runtime_Impl_nullPhysicsRuntime__WEBPACK_IMPORTED_MODULE_14__/* .NullPhysicsRuntime */ .D(wasmInstance);
        const world = new _Runtime_physicsWorld__WEBPACK_IMPORTED_MODULE_15__/* .PhysicsWorld */ .y(runtime);
        const matrix = new _babylonjs_core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_8__/* .Matrix */ .uq();
        {
            const ground = (0,_babylonjs_core_Meshes_Builders_planeBuilder__WEBPACK_IMPORTED_MODULE_10__/* .CreatePlane */ .x)("ground", { size: 120 }, scene);
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
            world.addRigidBody(groundRigidBody);
        }
        const rbCount = 512 * 2;
        const baseBox = (0,_babylonjs_core_Meshes_Builders_boxBuilder__WEBPACK_IMPORTED_MODULE_9__/* .CreateBox */ .an)("box", { size: 2 }, scene);
        shadowGenerator.addShadowCaster(baseBox);
        baseBox.receiveShadows = true;
        const rigidbodyMatrixBuffer = new Float32Array(rbCount * 16);
        baseBox.thinInstanceSetBuffer("matrix", rigidbodyMatrixBuffer, 16, false);
        const boxShape = new _Runtime_physicsShape__WEBPACK_IMPORTED_MODULE_16__/* .PhysicsBoxShape */ .SA(runtime, new _babylonjs_core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_8__/* .Vector3 */ .Pq(1, 1, 1));
        const rbInfoList = new _Runtime_rigidBodyConstructionInfoList__WEBPACK_IMPORTED_MODULE_19__/* .RigidBodyConstructionInfoList */ .x(wasmInstance, rbCount);
        for (let i = 0; i < rbCount; ++i) {
            rbInfoList.setShape(i, boxShape);
            const initialTransform = _babylonjs_core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_8__/* .Matrix */ .uq.TranslationToRef(0, 1 + i * 2, 0, matrix);
            rbInfoList.setInitialTransform(i, initialTransform);
            rbInfoList.setFriction(i, 1.0);
            rbInfoList.setLinearDamping(i, 0.3);
            rbInfoList.setAngularDamping(i, 0.3);
        }
        const boxRigidBodyBundle = new _Runtime_rigidBodyBundle__WEBPACK_IMPORTED_MODULE_20__/* .RigidBodyBundle */ .Y(runtime, rbInfoList);
        world.addRigidBodyBundle(boxRigidBodyBundle);
        for (let i = 0; i < rbCount; i += 2) {
            const indices = [i, i + 1];
            const constraint = new _Runtime_constraint__WEBPACK_IMPORTED_MODULE_21__/* .Generic6DofSpringConstraint */ .vC(runtime, boxRigidBodyBundle, indices, _babylonjs_core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_8__/* .Matrix */ .uq.Translation(0, -1.2, 0), _babylonjs_core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_8__/* .Matrix */ .uq.Translation(0, 1.2, 0), true);
            constraint.setLinearLowerLimit(new _babylonjs_core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_8__/* .Vector3 */ .Pq(0, 0, 0));
            constraint.setLinearUpperLimit(new _babylonjs_core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_8__/* .Vector3 */ .Pq(0, 0, 0));
            constraint.setAngularLowerLimit(new _babylonjs_core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_8__/* .Vector3 */ .Pq(Math.PI / 4, 0, 0));
            constraint.setAngularUpperLimit(new _babylonjs_core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_8__/* .Vector3 */ .Pq(0, 0, 0));
            for (let i = 0; i < 6; ++i) {
                constraint.enableSpring(i, true);
                constraint.setStiffness(i, 100);
                constraint.setDamping(i, 1);
            }
            world.addConstraint(constraint, false);
        }
        scene.onBeforeRenderObservable.add(() => {
            world.stepSimulation(1 / 60, 10, 1 / 60);
            boxRigidBodyBundle.getTransformMatricesToArray(rigidbodyMatrixBuffer);
            baseBox.thinInstanceBufferUpdated("matrix");
        });
        return scene;
    }
}


/***/ })

}]);