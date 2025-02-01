"use strict";
(self["webpackChunkbabylon_bulletphysics"] = self["webpackChunkbabylon_bulletphysics"] || []).push([[541],{

/***/ 32541:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SceneBuilder: () => (/* binding */ SceneBuilder)
/* harmony export */ });
/* harmony import */ var _babylonjs_core_Meshes_thinInstanceMesh__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90203);
/* harmony import */ var _babylonjs_core_Meshes_instancedMesh__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61440);
/* harmony import */ var _babylonjs_core_Lights_Shadows_shadowGeneratorSceneComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(33832);
/* harmony import */ var _babylonjs_core_Materials_standardMaterial__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2093);
/* harmony import */ var _babylonjs_core_Cameras_arcRotateCamera__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7839);
/* harmony import */ var _babylonjs_core_Lights_directionalLight__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(52046);
/* harmony import */ var _babylonjs_core_Lights_hemisphericLight__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(71513);
/* harmony import */ var _babylonjs_core_Lights_Shadows_shadowGenerator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(18595);
/* harmony import */ var _babylonjs_core_Maths_math_color__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(26041);
/* harmony import */ var _babylonjs_core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(79923);
/* harmony import */ var _babylonjs_core_Meshes_Builders_boxBuilder__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(96793);
/* harmony import */ var _babylonjs_core_Meshes_Builders_planeBuilder__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(58144);
/* harmony import */ var _babylonjs_core_Meshes_Builders_sphereBuilder__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(78121);
/* harmony import */ var _babylonjs_core_scene__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(87491);
/* harmony import */ var _External_ammo_wasm__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(67774);
/* harmony import */ var _Util_benchHelper__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(89800);
/* harmony import */ var _Util_mulberry32__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(32399);














// eslint-disable-next-line @typescript-eslint/naming-convention



class SceneBuilder {
    async build(_canvas, engine) {
        const scene = new _babylonjs_core_scene__WEBPACK_IMPORTED_MODULE_13__/* .Scene */ .Z(engine);
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
        const ammo = await (0,_External_ammo_wasm__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A)();
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
        const matrix = new _babylonjs_core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_9__/* .Matrix */ .uq();
        {
            const ground = (0,_babylonjs_core_Meshes_Builders_planeBuilder__WEBPACK_IMPORTED_MODULE_11__/* .CreatePlane */ .x)("ground", { size: 500 }, scene);
            ground.rotationQuaternion = _babylonjs_core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_9__/* .Quaternion */ .PT.RotationAxis(new _babylonjs_core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_9__/* .Vector3 */ .Pq(1, 0, 0), Math.PI / 2);
            shadowGenerator.addShadowCaster(ground);
            ground.receiveShadows = true;
            const planeNormal = new ammo.btVector3(0, 0, -1);
            const groundShape = new ammo.btStaticPlaneShape(planeNormal, 0);
            ammo.destroy(planeNormal);
            const motionState = new ammo.btDefaultMotionState();
            const groundRbInfo = new ammo.btRigidBodyConstructionInfo(0, motionState, groundShape);
            _babylonjs_core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_9__/* .Matrix */ .uq.FromQuaternionToRef(ground.rotationQuaternion, matrix);
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
        const rowCount = 4;
        const columnCount = 8;
        const margin = 60;
        const shapes = [];
        const shapeInfoList = [];
        const shapeType = prompt("Shape type (u, r) uniform box, random", "u");
        if (shapeType === "u") {
            const boxShapeSize = new _babylonjs_core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_9__/* .Vector3 */ .Pq(1, 1, 1);
            const boxShapeSizeBt = new ammo.btVector3(boxShapeSize.x, boxShapeSize.y, boxShapeSize.z);
            const boxShape = new ammo.btBoxShape(boxShapeSizeBt);
            ammo.destroy(boxShapeSizeBt);
            const boxShapeInfo = { type: "box", size: boxShapeSize };
            for (let i = 0; i < rbCount; ++i) {
                shapes.push(boxShape);
                shapeInfoList.push(boxShapeInfo);
            }
        }
        else {
            const rng = new _Util_mulberry32__WEBPACK_IMPORTED_MODULE_15__/* .Mulberry32 */ .q(0);
            for (let i = 0; i < rbCount; ++i) {
                const type = rng.next() * 2 | 0;
                if (type === 0) {
                    const sizeX = rng.next() * 2 + 0.5;
                    const sizeY = rng.next() * 2 + 0.5;
                    const sizeZ = rng.next() * 2 + 0.5;
                    const size = new _babylonjs_core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_9__/* .Vector3 */ .Pq(sizeX, sizeY, sizeZ);
                    const sizeBt = new ammo.btVector3(size.x, size.y, size.z);
                    shapes.push(new ammo.btBoxShape(sizeBt));
                    ammo.destroy(sizeBt);
                    shapeInfoList.push({ type: "box", size });
                }
                else if (type === 1) {
                    const radius = rng.next() * 2 + 1;
                    shapes.push(new ammo.btSphereShape(radius));
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
                    const initialTransform = _babylonjs_core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_9__/* .Matrix */ .uq.TranslationToRef(xOffset, 1 + k * 2, zOffset, matrix);
                    const motionState = new ammo.btDefaultMotionState();
                    const transform = new ammo.btTransform();
                    transform.setFromOpenGLMatrix(initialTransform.asArray());
                    motionState.setWorldTransform(transform);
                    ammo.destroy(transform);
                    const localInertia = new ammo.btVector3(0, 0, 0);
                    shapes[k].calculateLocalInertia(1, localInertia);
                    const rbInfo = new ammo.btRigidBodyConstructionInfo(1, motionState, shapes[k], localInertia);
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
                if (shapeType === "u") {
                    for (let k = 0; k < rbCount; k += 2) {
                        const indices = [worldId * rbCount + k, worldId * rbCount + k + 1];
                        const transform1 = new ammo.btTransform();
                        const transform2 = new ammo.btTransform();
                        transform1.setFromOpenGLMatrix(_babylonjs_core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_9__/* .Matrix */ .uq.Translation(0, -1.2, 0).asArray());
                        transform2.setFromOpenGLMatrix(_babylonjs_core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_9__/* .Matrix */ .uq.Translation(0, 1.2, 0).asArray());
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
            }
        console.log("Rigid body count:", rbCount * rowCount * columnCount);
        const meshes = [];
        const baseBox = (0,_babylonjs_core_Meshes_Builders_boxBuilder__WEBPACK_IMPORTED_MODULE_10__/* .CreateBox */ .an)("baseBox", { size: 1 }, scene);
        const baseSphere = (0,_babylonjs_core_Meshes_Builders_sphereBuilder__WEBPACK_IMPORTED_MODULE_12__/* .CreateSphere */ ._6)("baseSphere", { diameter: 1 }, scene);
        baseBox.setEnabled(false);
        baseSphere.setEnabled(false);
        baseBox.receiveShadows = true;
        baseSphere.receiveShadows = true;
        for (let i = 0; i < rbCount * rowCount * columnCount; ++i) {
            const shapeInfo = shapeInfoList[i % shapeInfoList.length];
            const mesh = shapeInfo.type === "box" ? baseBox.createInstance(`boxInstance${i}`) : baseSphere.createInstance(`sphereInstance${i}`);
            shadowGenerator.addShadowCaster(mesh);
            mesh.scaling.copyFrom(shapeInfo.type === "box" ? shapeInfo.size.scale(2) : new _babylonjs_core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_9__/* .Vector3 */ .Pq(shapeInfo.radius, shapeInfo.radius, shapeInfo.radius).scale(2));
            mesh.rotationQuaternion = _babylonjs_core_Maths_math_vector__WEBPACK_IMPORTED_MODULE_9__/* .Quaternion */ .PT.Identity();
            meshes.push(mesh);
        }
        const transform = new ammo.btTransform();
        const benchHelper = new _Util_benchHelper__WEBPACK_IMPORTED_MODULE_16__/* .BenchHelper */ .X(() => {
            for (let i = 0; i < worlds.length; ++i)
                worlds[i].stepSimulation(1 / 60, 10, 1 / 60);
            for (let i = 0; i < bodies.length; ++i) {
                const body = bodies[i];
                body.getMotionState().getWorldTransform(transform);
                const origin = transform.getOrigin();
                const rotation = transform.getRotation();
                const mesh = meshes[i];
                mesh.position.set(origin.x(), origin.y(), origin.z());
                mesh.rotationQuaternion.set(rotation.x(), rotation.y(), rotation.z(), rotation.w());
            }
            scene.render();
        });
        benchHelper.runBench();
        scene.onBeforeRenderObservable.add(() => {
            for (let i = 0; i < worlds.length; ++i)
                worlds[i].stepSimulation(1 / 60, 10, 1 / 60);
            for (let i = 0; i < bodies.length; ++i) {
                const body = bodies[i];
                body.getMotionState().getWorldTransform(transform);
                const origin = transform.getOrigin();
                const rotation = transform.getRotation();
                const mesh = meshes[i];
                mesh.position.set(origin.x(), origin.y(), origin.z());
                mesh.rotationQuaternion.set(rotation.x(), rotation.y(), rotation.z(), rotation.w());
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