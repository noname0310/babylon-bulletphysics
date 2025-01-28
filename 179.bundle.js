"use strict";
(self["webpackChunkbabylon_bulletphysics"] = self["webpackChunkbabylon_bulletphysics"] || []).push([[179],{

/***/ 84179:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SceneBuilder: () => (/* binding */ SceneBuilder)
/* harmony export */ });
/* harmony import */ var _babylonjs_core_Meshes_thinInstanceMesh__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90203);
/* harmony import */ var _babylonjs_core_Lights_Shadows_shadowGeneratorSceneComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(33832);
/* harmony import */ var _babylonjs_core_Materials_standardMaterial__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2093);
/* harmony import */ var _babylonjs_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(67861);
/* harmony import */ var _babylonjs_core_Cameras_arcRotateCamera__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7839);
/* harmony import */ var _babylonjs_core_Lights_directionalLight__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(52046);
/* harmony import */ var _babylonjs_core_Lights_hemisphericLight__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(71513);
/* harmony import */ var _babylonjs_core_Lights_Shadows_shadowGenerator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(18595);
/* harmony import */ var _babylonjs_core_Maths_math_color__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(26041);
/* harmony import */ var _babylonjs_core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(79923);
/* harmony import */ var _babylonjs_core_Meshes_Builders_boxBuilder__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(96793);
/* harmony import */ var _babylonjs_core_Meshes_Builders_planeBuilder__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(58144);
/* harmony import */ var _babylonjs_core_scene__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(87491);
/* harmony import */ var _Runtime_bulletWasmInstance__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(46738);
/* harmony import */ var _Runtime_constraint__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(67168);
/* harmony import */ var _Runtime_Impl_nullPhysicsRuntime__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(2090);
/* harmony import */ var _Runtime_InstanceType_multiRelease__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(27744);
/* harmony import */ var _Runtime_InstanceType_singleRelease__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(91167);
/* harmony import */ var _Runtime_multiPhysicsWorld__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(15733);
/* harmony import */ var _Runtime_physicsShape__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(26405);
/* harmony import */ var _Runtime_rigidBody__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(1592);
/* harmony import */ var _Runtime_rigidBodyConstructionInfo__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(35901);
/* harmony import */ var _Util_benchHelper__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(89800);
/* harmony import */ var _Util_mulberry32__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(32399);
























class SceneBuilder {
    async build(_canvas, engine) {
        const scene = new _babylonjs_core_scene__WEBPACK_IMPORTED_MODULE_12__/* .Scene */ .Z(engine);
        scene.clearColor = new _babylonjs_core_Maths_math_color__WEBPACK_IMPORTED_MODULE_8__/* .Color4 */ .ov(0.95, 0.95, 0.95, 1.0);
        const camera = new _babylonjs_core_Cameras_arcRotateCamera__WEBPACK_IMPORTED_MODULE_4__/* .ArcRotateCamera */ .L("arcRotateCamera", 0, 0, 500, new _babylonjs_core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_9__/* .Vector3 */ .Pq(0, 0, 0), scene);
        camera.minZ = 1;
        camera.maxZ = 3000;
        camera.setPosition(new _babylonjs_core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_9__/* .Vector3 */ .Pq(60, 40, -50).scaleInPlace(10));
        camera.attachControl(undefined, false);
        camera.inertia = 0.8;
        camera.speed = 10;
        const hemisphericLight = new _babylonjs_core_Lights_hemisphericLight__WEBPACK_IMPORTED_MODULE_6__/* .HemisphericLight */ .g("hemisphericLight", new _babylonjs_core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_9__/* .Vector3 */ .Pq(0, 1, 0), scene);
        hemisphericLight.intensity = 0.5;
        hemisphericLight.specular = new _babylonjs_core_Maths_math_color__WEBPACK_IMPORTED_MODULE_8__/* .Color3 */ .v9(0, 0, 0);
        hemisphericLight.groundColor = new _babylonjs_core_Maths_math_color__WEBPACK_IMPORTED_MODULE_8__/* .Color3 */ .v9(1, 1, 1);
        const directionalLight = new _babylonjs_core_Lights_directionalLight__WEBPACK_IMPORTED_MODULE_5__/* .DirectionalLight */ .Z("directionalLight", new _babylonjs_core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_9__/* .Vector3 */ .Pq(0.5, -1, 1), scene);
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
        const shadowGenerator = new _babylonjs_core_Lights_Shadows_shadowGenerator__WEBPACK_IMPORTED_MODULE_7__/* .ShadowGenerator */ .o(2048, directionalLight, true);
        shadowGenerator.transparencyShadow = true;
        shadowGenerator.usePercentageCloserFiltering = true;
        shadowGenerator.forceBackFacesOnly = false;
        shadowGenerator.bias = 0.004;
        shadowGenerator.filteringQuality = _babylonjs_core_Lights_Shadows_shadowGenerator__WEBPACK_IMPORTED_MODULE_7__/* .ShadowGenerator */ .o.QUALITY_MEDIUM;
        // Inspector.Show(scene, { enablePopup: false });
        const threadCount = parseInt(prompt("Thread count", "2"));
        console.log("Thread count:", threadCount);
        const wasmInstance = threadCount === 1
            ? await (0,_Runtime_bulletWasmInstance__WEBPACK_IMPORTED_MODULE_13__/* .getBulletWasmInstance */ .e)(new _Runtime_InstanceType_singleRelease__WEBPACK_IMPORTED_MODULE_14__/* .BulletWasmInstanceTypeSR */ .Z())
            : await (0,_Runtime_bulletWasmInstance__WEBPACK_IMPORTED_MODULE_13__/* .getBulletWasmInstance */ .e)(new _Runtime_InstanceType_multiRelease__WEBPACK_IMPORTED_MODULE_15__/* .BulletWasmInstanceTypeMR */ .t(), threadCount);
        const runtime = new _Runtime_Impl_nullPhysicsRuntime__WEBPACK_IMPORTED_MODULE_16__/* .NullPhysicsRuntime */ .D(wasmInstance);
        const world = new _Runtime_multiPhysicsWorld__WEBPACK_IMPORTED_MODULE_17__/* .MultiPhysicsWorld */ .F(runtime, true);
        const matrix = new _babylonjs_core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_9__/* .Matrix */ .uq();
        {
            const ground = (0,_babylonjs_core_Meshes_Builders_planeBuilder__WEBPACK_IMPORTED_MODULE_11__/* .CreatePlane */ .x)("ground", { size: 500 }, scene);
            ground.rotationQuaternion = _babylonjs_core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_9__/* .Quaternion */ .PT.RotationAxis(new _babylonjs_core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_9__/* .Vector3 */ .Pq(1, 0, 0), Math.PI / 2);
            shadowGenerator.addShadowCaster(ground);
            ground.receiveShadows = true;
            const groundShape = new _Runtime_physicsShape__WEBPACK_IMPORTED_MODULE_18__/* .PhysicsStaticPlaneShape */ .Ty(runtime, new _babylonjs_core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_9__/* .Vector3 */ .Pq(0, 0, -1), 0);
            const groundRbInfo = new _Runtime_rigidBodyConstructionInfo__WEBPACK_IMPORTED_MODULE_19__/* .RigidBodyConstructionInfo */ .t(wasmInstance);
            groundRbInfo.shape = groundShape;
            _babylonjs_core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_9__/* .Matrix */ .uq.FromQuaternionToRef(ground.rotationQuaternion, matrix);
            groundRbInfo.setInitialTransform(matrix);
            groundRbInfo.motionType = 1 /* MotionType.Static */;
            const groundRigidBody = new _Runtime_rigidBody__WEBPACK_IMPORTED_MODULE_20__/* .RigidBody */ .U(runtime, groundRbInfo);
            world.addRigidBodyToGlobal(groundRigidBody);
        }
        const rbCount = 256 * 2;
        const rowCount = 4;
        const columnCount = 8;
        const margin = 60;
        const shapes = [];
        const shapeInfoList = [];
        const shapeType = prompt("Shape type (u, r) uniform box, random", "u");
        if (shapeType === "u") {
            const boxShapeSize = new _babylonjs_core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_9__/* .Vector3 */ .Pq(1, 1, 1);
            const boxShape = new _Runtime_physicsShape__WEBPACK_IMPORTED_MODULE_18__/* .PhysicsBoxShape */ .SA(runtime, boxShapeSize);
            const boxShapeInfo = { type: "box", size: boxShapeSize };
            for (let i = 0; i < rbCount; ++i) {
                shapes.push(boxShape);
                shapeInfoList.push(boxShapeInfo);
            }
        }
        else {
            const rng = new _Util_mulberry32__WEBPACK_IMPORTED_MODULE_21__/* .Mulberry32 */ .q(0);
            for (let i = 0; i < rbCount; ++i) {
                const type = rng.next() * 2 | 0;
                if (type === 0) {
                    const sizeX = rng.next() * 2 + 0.5;
                    const sizeY = rng.next() * 2 + 0.5;
                    const sizeZ = rng.next() * 2 + 0.5;
                    const size = new _babylonjs_core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_9__/* .Vector3 */ .Pq(sizeX, sizeY, sizeZ);
                    shapes.push(new _Runtime_physicsShape__WEBPACK_IMPORTED_MODULE_18__/* .PhysicsBoxShape */ .SA(runtime, size));
                    shapeInfoList.push({ type: "box", size });
                }
                else if (type === 1) {
                    const radius = rng.next() * 2 + 1;
                    shapes.push(new _Runtime_physicsShape__WEBPACK_IMPORTED_MODULE_18__/* .PhysicsSphereShape */ .O4(runtime, radius));
                    shapeInfoList.push({ type: "sphere", radius });
                }
                else {
                    throw new Error("Invalid type");
                }
            }
        }
        const bodies = [];
        for (let i = 0; i < rowCount; ++i)
            for (let j = 0; j < columnCount; ++j) {
                const worldId = i * columnCount + j;
                const xOffset = (j - columnCount / 2) * margin + (margin / 2) * (columnCount % 2 ? 0 : 1);
                const zOffset = (i - rowCount / 2) * margin + (margin / 2) * (rowCount % 2 ? 0 : 1);
                const rbInfoList = [];
                for (let k = 0; k < rbCount; ++k) {
                    const rbInfo = new _Runtime_rigidBodyConstructionInfo__WEBPACK_IMPORTED_MODULE_19__/* .RigidBodyConstructionInfo */ .t(wasmInstance);
                    rbInfo.shape = shapes[k];
                    const initialTransform = _babylonjs_core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_9__/* .Matrix */ .uq.TranslationToRef(xOffset, 1 + k * 2, zOffset, matrix);
                    rbInfo.setInitialTransform(initialTransform);
                    rbInfo.friction = 1.0;
                    rbInfo.linearDamping = 0.3;
                    rbInfo.angularDamping = 0.3;
                    rbInfoList.push(rbInfo);
                }
                for (let k = 0; k < rbCount; ++k) {
                    const rbInfo = rbInfoList[k];
                    const rigidBody = new _Runtime_rigidBody__WEBPACK_IMPORTED_MODULE_20__/* .RigidBody */ .U(runtime, rbInfo);
                    world.addRigidBody(rigidBody, worldId);
                    bodies.push(rigidBody);
                }
                if (shapeType === "u") {
                    for (let k = 0; k < rbCount; k += 2) {
                        const indices = [worldId * rbCount + k, worldId * rbCount + k + 1];
                        const constraint = new _Runtime_constraint__WEBPACK_IMPORTED_MODULE_22__/* .Generic6DofSpringConstraint */ .vC(runtime, bodies[indices[0]], bodies[indices[1]], _babylonjs_core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_9__/* .Matrix */ .uq.Translation(0, -1.2, 0), _babylonjs_core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_9__/* .Matrix */ .uq.Translation(0, 1.2, 0), true);
                        constraint.setLinearLowerLimit(new _babylonjs_core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_9__/* .Vector3 */ .Pq(0, 0, 0));
                        constraint.setLinearUpperLimit(new _babylonjs_core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_9__/* .Vector3 */ .Pq(0, 0, 0));
                        constraint.setAngularLowerLimit(new _babylonjs_core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_9__/* .Vector3 */ .Pq(Math.PI / 4, 0, 0));
                        constraint.setAngularUpperLimit(new _babylonjs_core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_9__/* .Vector3 */ .Pq(0, 0, 0));
                        for (let l = 0; l < 6; ++l) {
                            constraint.enableSpring(l, true);
                            constraint.setStiffness(l, 100);
                            constraint.setDamping(l, 1);
                        }
                        world.addConstraint(constraint, worldId, false);
                    }
                }
            }
        console.log("Rigid body count:", rbCount * rowCount * columnCount);
        const meshes = [];
        const baseBox = (0,_babylonjs_core_Meshes_Builders_boxBuilder__WEBPACK_IMPORTED_MODULE_10__/* .CreateBox */ .an)("baseBox", { size: 1 }, scene);
        baseBox.receiveShadows = true;
        shadowGenerator.addShadowCaster(baseBox);
        const baseSphere = (0,_babylonjs_core__WEBPACK_IMPORTED_MODULE_3__/* .CreateSphere */ ._6X)("baseSphere", { diameter: 1 }, scene);
        baseSphere.receiveShadows = true;
        baseBox.setEnabled(false);
        baseSphere.setEnabled(false);
        for (let i = 0; i < rbCount * rowCount * columnCount; ++i) {
            const shapeInfo = shapeInfoList[i % shapeInfoList.length];
            const mesh = shapeInfo.type === "box" ? baseBox.createInstance(`boxInstance${i}`) : baseSphere.createInstance(`sphereInstance${i}`);
            mesh.scaling.copyFrom(shapeInfo.type === "box" ? shapeInfo.size.scale(2) : new _babylonjs_core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_9__/* .Vector3 */ .Pq(shapeInfo.radius, shapeInfo.radius, shapeInfo.radius).scale(2));
            mesh.rotationQuaternion = _babylonjs_core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_9__/* .Quaternion */ .PT.Identity();
            meshes.push(mesh);
        }
        const benchHelper = new _Util_benchHelper__WEBPACK_IMPORTED_MODULE_23__/* .BenchHelper */ .X(() => {
            world.stepSimulation(1 / 60, 10, 1 / 60);
            for (let i = 0; i < bodies.length; ++i) {
                bodies[i].getTransformMatrixToRef(matrix);
                const mesh = meshes[i];
                matrix.getTranslationToRef(mesh.position);
                _babylonjs_core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_9__/* .Quaternion */ .PT.FromRotationMatrixToRef(matrix, mesh.rotationQuaternion);
            }
            scene.render();
        });
        benchHelper.runBench();
        scene.onBeforeRenderObservable.add(() => {
            world.stepSimulation(1 / 60, 10, 1 / 60);
            for (let i = 0; i < bodies.length; ++i) {
                bodies[i].getTransformMatrixToRef(matrix);
                const mesh = meshes[i];
                matrix.getTranslationToRef(mesh.position);
                _babylonjs_core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_9__/* .Quaternion */ .PT.FromRotationMatrixToRef(matrix, mesh.rotationQuaternion);
            }
        });
        return scene;
    }
}


/***/ }),

/***/ 32399:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   q: () => (/* binding */ Mulberry32)
/* harmony export */ });
/**
 * mulberry32 random number generator
 */
class Mulberry32 {
    _a;
    /**
     *
     * @param seed random seed
     */
    constructor(seed) {
        this._a = seed;
    }
    /**
     * get next random number
     * @returns
     */
    next() {
        let t = this._a += 0x6D2B79F5;
        t = Math.imul(t ^ t >>> 15, t | 1);
        t ^= t + Math.imul(t ^ t >>> 7, t | 61);
        return ((t ^ t >>> 14) >>> 0) / 4294967296;
    }
}


/***/ })

}]);