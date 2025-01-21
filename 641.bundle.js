"use strict";
(self["webpackChunkbabylon_bulletphysics"] = self["webpackChunkbabylon_bulletphysics"] || []).push([[641],{

/***/ 8641:
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
/* harmony import */ var _Runtime_Impl_physicsRuntime__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(5203);
/* harmony import */ var _Runtime_Impl_physicsRuntimeEvaluationType__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(9009);
/* harmony import */ var _Runtime_InstanceType_multiDebug__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(7002);
/* harmony import */ var _Runtime_physicsShape__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(6405);
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
        const wasmInstance = await (0,_Runtime_bulletWasmInstance__WEBPACK_IMPORTED_MODULE_12__/* .getBulletWasmInstance */ .e)(new _Runtime_InstanceType_multiDebug__WEBPACK_IMPORTED_MODULE_13__/* .BulletWasmInstanceTypeMD */ .t(), 1);
        const runtime = new _Runtime_Impl_physicsRuntime__WEBPACK_IMPORTED_MODULE_14__/* .PhysicsRuntime */ .w(wasmInstance);
        runtime.register(scene);
        runtime.evaluationType = _Runtime_Impl_physicsRuntimeEvaluationType__WEBPACK_IMPORTED_MODULE_15__/* .PhysicsRuntimeEvaluationType */ .q.Buffered;
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
            runtime.addRigidBody(groundRigidBody);
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
        runtime.addRigidBodyBundle(boxRigidBodyBundle);
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