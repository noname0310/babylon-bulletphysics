"use strict";
(self["webpackChunkbabylon_bulletphysics"] = self["webpackChunkbabylon_bulletphysics"] || []).push([[5364],{

/***/ 55364:
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
/* harmony import */ var _External_ammo_wasm__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(67774);
/* harmony import */ var _Util_benchHelper__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(89800);












// eslint-disable-next-line @typescript-eslint/naming-convention


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
        // Inspector.Show(scene, { enablePopup: false });
        const ammo = await (0,_External_ammo_wasm__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A)();
        const worlds = [];
        for (let i = 0; i < 32; ++i) {
            const collisionConfiguration = new ammo.btDefaultCollisionConfiguration();
            const dispatcher = new ammo.btCollisionDispatcher(collisionConfiguration);
            const overlappingPairCache = new ammo.btDbvtBroadphase();
            const solver = new ammo.btSequentialImpulseConstraintSolver();
            const world = new ammo.btDiscreteDynamicsWorld(dispatcher, overlappingPairCache, solver, collisionConfiguration);
            world.setGravity(new ammo.btVector3(0, -10, 0));
            worlds.push(world);
        }
        const matrix = new _babylonjs_core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_8__/* .Matrix */ .uq();
        {
            const ground = (0,_babylonjs_core_Meshes_Builders_planeBuilder__WEBPACK_IMPORTED_MODULE_10__/* .CreatePlane */ .x)("ground", { size: 500 }, scene);
            ground.rotationQuaternion = _babylonjs_core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_8__/* .Quaternion */ .PT.RotationAxis(new _babylonjs_core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_8__/* .Vector3 */ .Pq(1, 0, 0), Math.PI / 2);
            shadowGenerator.addShadowCaster(ground);
            ground.receiveShadows = true;
            const planeNormal = new ammo.btVector3(0, 0, -1);
            const groundShape = new ammo.btStaticPlaneShape(planeNormal, 0);
            ammo.destroy(planeNormal);
            const motionState = new ammo.btDefaultMotionState();
            const groundRbInfo = new ammo.btRigidBodyConstructionInfo(0, motionState, groundShape);
            _babylonjs_core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_8__/* .Matrix */ .uq.FromQuaternionToRef(ground.rotationQuaternion, matrix);
            const transform = new ammo.btTransform();
            transform.setFromOpenGLMatrix(matrix.asArray());
            motionState.setWorldTransform(transform);
            ammo.destroy(transform);
            for (let i = 0; i < worlds.length; ++i) {
                const groundRigidBody = new ammo.btRigidBody(groundRbInfo);
                groundRigidBody.setDamping(0, 0);
                groundRigidBody.setFriction(0.5);
                groundRigidBody.setRestitution(0.0);
                groundRigidBody.setSleepingThresholds(0.0, 1.0);
                groundRigidBody.setCollisionFlags(groundRigidBody.getCollisionFlags() | 2);
                worlds[i].addRigidBody(groundRigidBody);
            }
            ammo.destroy(groundRbInfo);
        }
        const rbCount = 256 * 2;
        const baseBox = (0,_babylonjs_core_Meshes_Builders_boxBuilder__WEBPACK_IMPORTED_MODULE_9__/* .CreateBox */ .an)("box", { size: 2 }, scene);
        shadowGenerator.addShadowCaster(baseBox);
        baseBox.receiveShadows = true;
        const rowCount = 4;
        const columnCount = 8;
        const margin = 60;
        const rigidbodyMatrixBuffer = new Float32Array(rbCount * 16 * rowCount * columnCount);
        baseBox.thinInstanceSetBuffer("matrix", rigidbodyMatrixBuffer, 16, false);
        const boxHalfExtents = new ammo.btVector3(1, 1, 1);
        const boxShape = new ammo.btBoxShape(boxHalfExtents);
        ammo.destroy(boxHalfExtents);
        const bodies = [];
        for (let i = 0; i < rowCount; ++i)
            for (let j = 0; j < columnCount; ++j) {
                const worldId = i * columnCount + j;
                const xOffset = (j - columnCount / 2) * margin + (margin / 2) * (columnCount % 2 ? 0 : 1);
                const zOffset = (i - rowCount / 2) * margin + (margin / 2) * (rowCount % 2 ? 0 : 1);
                const rbInfoList = [];
                for (let k = 0; k < rbCount; ++k) {
                    const initialTransform = _babylonjs_core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_8__/* .Matrix */ .uq.TranslationToRef(xOffset, 1 + k * 2, zOffset, matrix);
                    const motionState = new ammo.btDefaultMotionState();
                    const transform = new ammo.btTransform();
                    transform.setFromOpenGLMatrix(initialTransform.asArray());
                    motionState.setWorldTransform(transform);
                    ammo.destroy(transform);
                    const localInertia = new ammo.btVector3(0, 0, 0);
                    boxShape.calculateLocalInertia(1, localInertia);
                    const rbInfo = new ammo.btRigidBodyConstructionInfo(1, motionState, boxShape, localInertia);
                    ammo.destroy(localInertia);
                    rbInfo.set_m_friction(1.0);
                    rbInfo.set_m_linearDamping(0.3);
                    rbInfo.set_m_angularDamping(0.3);
                    rbInfo.set_m_linearSleepingThreshold(0.0);
                    rbInfo.set_m_angularSleepingThreshold(1.0);
                    rbInfoList.push(rbInfo);
                }
                const world = worlds[worldId];
                for (let k = 0; k < rbCount; ++k) {
                    const rbInfo = rbInfoList[k];
                    const rigidBody = new ammo.btRigidBody(rbInfo);
                    world.addRigidBody(rigidBody);
                    bodies.push(rigidBody);
                }
                for (let k = 0; k < rbInfoList.length; ++k)
                    ammo.destroy(rbInfoList[k]);
                for (let k = 0; k < rbCount; k += 2) {
                    const indices = [worldId * rbCount + k, worldId * rbCount + k + 1];
                    const transform1 = new ammo.btTransform();
                    const transform2 = new ammo.btTransform();
                    transform1.setFromOpenGLMatrix(_babylonjs_core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_8__/* .Matrix */ .uq.Translation(0, -1.2, 0).asArray());
                    transform2.setFromOpenGLMatrix(_babylonjs_core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_8__/* .Matrix */ .uq.Translation(0, 1.2, 0).asArray());
                    const constraint = new ammo.btGeneric6DofSpringConstraint(bodies[indices[0]], bodies[indices[1]], transform1, transform2, true);
                    ammo.destroy(transform1);
                    ammo.destroy(transform2);
                    const limit = new ammo.btVector3(0, 0, 0);
                    limit.setValue(0, 0, 0);
                    constraint.setLinearLowerLimit(limit);
                    limit.setValue(0, 0, 0);
                    constraint.setLinearUpperLimit(limit);
                    limit.setValue(Math.PI / 4, 0, 0);
                    constraint.setAngularLowerLimit(limit);
                    limit.setValue(0, 0, 0);
                    constraint.setAngularUpperLimit(limit);
                    ammo.destroy(limit);
                    for (let l = 0; l < 6; ++l) {
                        constraint.enableSpring(l, true);
                        constraint.setStiffness(l, 100);
                        constraint.setDamping(l, 1);
                    }
                    world.addConstraint(constraint, true);
                }
            }
        console.log("Rigid body count:", rbCount * rowCount * columnCount);
        const transform = new ammo.btTransform();
        const scale = new _babylonjs_core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_8__/* .Vector3 */ .Pq(1, 1, 1);
        const vector = new _babylonjs_core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_8__/* .Vector3 */ .Pq();
        const quaternion = new _babylonjs_core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_8__/* .Quaternion */ .PT();
        const benchHelper = new _Util_benchHelper__WEBPACK_IMPORTED_MODULE_13__/* .BenchHelper */ .X(() => {
            for (let i = 0; i < worlds.length; ++i)
                worlds[i].stepSimulation(1 / 60, 10, 1 / 60);
            for (let i = 0; i < bodies.length; ++i) {
                const body = bodies[i];
                body.getMotionState().getWorldTransform(transform);
                const origin = transform.getOrigin();
                const rotation = transform.getRotation();
                _babylonjs_core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_8__/* .Matrix */ .uq.ComposeToRef(scale, quaternion.set(rotation.x(), rotation.y(), rotation.z(), rotation.w()), vector.set(origin.x(), origin.y(), origin.z()), matrix);
                matrix.copyToArray(rigidbodyMatrixBuffer, i * 16);
            }
            baseBox.thinInstanceBufferUpdated("matrix");
            scene.render();
        });
        benchHelper.runBench();
        scene.onBeforeRenderObservable.add(() => {
            for (let i = 0; i < worlds.length; ++i) {
                worlds[i].stepSimulation(1 / 60, 10, 1 / 60);
            }
            for (let i = 0; i < bodies.length; ++i) {
                const body = bodies[i];
                body.getMotionState().getWorldTransform(transform);
                const origin = transform.getOrigin();
                const rotation = transform.getRotation();
                _babylonjs_core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_8__/* .Matrix */ .uq.ComposeToRef(scale, quaternion.set(rotation.x(), rotation.y(), rotation.z(), rotation.w()), vector.set(origin.x(), origin.y(), origin.z()), matrix);
                matrix.copyToArray(rigidbodyMatrixBuffer, i * 16);
            }
            baseBox.thinInstanceBufferUpdated("matrix");
        });
        return scene;
    }
}


/***/ })

}]);