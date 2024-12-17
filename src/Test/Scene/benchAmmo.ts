import "@babylonjs/core/Meshes/thinInstanceMesh";
import "@babylonjs/core/Lights/Shadows/shadowGeneratorSceneComponent";
import "@babylonjs/core/Materials/standardMaterial";

import { ArcRotateCamera } from "@babylonjs/core/Cameras/arcRotateCamera";
import type { AbstractEngine } from "@babylonjs/core/Engines/abstractEngine";
import { DirectionalLight } from "@babylonjs/core/Lights/directionalLight";
import { HemisphericLight } from "@babylonjs/core/Lights/hemisphericLight";
import { ShadowGenerator } from "@babylonjs/core/Lights/Shadows/shadowGenerator";
import { Color3, Color4 } from "@babylonjs/core/Maths/math.color";
import { Matrix, Quaternion, Vector3 } from "@babylonjs/core/Maths/math.vector";
import { CreateBox } from "@babylonjs/core/Meshes/Builders/boxBuilder";
import { CreatePlane } from "@babylonjs/core/Meshes/Builders/planeBuilder";
import { Scene } from "@babylonjs/core/scene";

// eslint-disable-next-line @typescript-eslint/naming-convention
import Ammo from "@/External/ammo.wasm";

import type { ISceneBuilder } from "../baseRuntime";

export class SceneBuilder implements ISceneBuilder {
    public async build(_canvas: HTMLCanvasElement, engine: AbstractEngine): Promise<Scene> {
        const scene = new Scene(engine);
        scene.clearColor = new Color4(0.95, 0.95, 0.95, 1.0);

        const camera = new ArcRotateCamera("arcRotateCamera", 0, 0, 500, new Vector3(0, 0, 0), scene);
        camera.minZ = 1;
        camera.maxZ = 3000;
        camera.setPosition(new Vector3(60, 40, -50).scaleInPlace(10));
        camera.attachControl(undefined, false);
        camera.inertia = 0.8;
        camera.speed = 10;

        const hemisphericLight = new HemisphericLight("hemisphericLight", new Vector3(0, 1, 0), scene);
        hemisphericLight.intensity = 0.5;
        hemisphericLight.specular = new Color3(0, 0, 0);
        hemisphericLight.groundColor = new Color3(1, 1, 1);

        const directionalLight = new DirectionalLight("directionalLight", new Vector3(0.5, -1, 1), scene);
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

        const shadowGenerator = new ShadowGenerator(2048, directionalLight, true);
        shadowGenerator.transparencyShadow = true;
        shadowGenerator.usePercentageCloserFiltering = true;
        shadowGenerator.forceBackFacesOnly = false;
        shadowGenerator.bias = 0.004;
        shadowGenerator.filteringQuality = ShadowGenerator.QUALITY_MEDIUM;

        // Inspector.Show(scene, { enablePopup: false });

        const ammo = await Ammo();

        const worlds: Ammo.btDiscreteDynamicsWorld[] = [];
        for (let i = 0; i < 32; ++i) {
            const collisionConfiguration = new ammo.btDefaultCollisionConfiguration();
            const dispatcher = new ammo.btCollisionDispatcher(collisionConfiguration);
            const overlappingPairCache = new ammo.btDbvtBroadphase();
            const solver = new ammo.btSequentialImpulseConstraintSolver();
            const world = new ammo.btDiscreteDynamicsWorld(dispatcher, overlappingPairCache, solver, collisionConfiguration);
            world.setGravity(new ammo.btVector3(0, -9.8, 0));
            worlds.push(world);
        }

        const matrix = new Matrix();

        {
            const ground = CreatePlane("ground", { size: 500 }, scene);
            ground.rotationQuaternion = Quaternion.RotationAxis(new Vector3(1, 0, 0), Math.PI / 2);
            shadowGenerator.addShadowCaster(ground);
            ground.receiveShadows = true;

            const groundShape = new ammo.btStaticPlaneShape(new ammo.btVector3(0, 0, -1), 0);
            const motionState = new ammo.btDefaultMotionState();
            const groundRbInfo = new ammo.btRigidBodyConstructionInfo(0, motionState, groundShape);
            Matrix.FromQuaternionToRef(ground.rotationQuaternion, matrix);
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
        const baseBox = CreateBox("box", { size: 2 }, scene);
        shadowGenerator.addShadowCaster(baseBox);
        baseBox.receiveShadows = true;

        const rowCount = 4;
        const columnCount = 8;
        const margin = 60;

        const rigidbodyMatrixBuffer = new Float32Array(rbCount * 16 * rowCount * columnCount);
        baseBox.thinInstanceSetBuffer("matrix", rigidbodyMatrixBuffer, 16, false);

        const boxShape = new ammo.btBoxShape(new ammo.btVector3(1, 1, 1));

        const bodies: Ammo.btRigidBody[] = [];

        for (let i = 0; i < rowCount; ++i) for (let j = 0; j < columnCount; ++j) {
            const worldId = i * columnCount + j;
            const xOffset = (j - columnCount / 2) * margin + (margin / 2) * (columnCount % 2 ? 0 : 1);
            const zOffset = (i - rowCount / 2) * margin + (margin / 2) * (rowCount % 2 ? 0 : 1);

            const rbInfoList: Ammo.btRigidBodyConstructionInfo[] = [];
            for (let k = 0; k < rbCount; ++k) {
                const initialTransform = Matrix.TranslationToRef(xOffset, 1 + k * 2, zOffset, matrix);
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

            for (let k = 0; k < rbCount; k += 2) {
                const indices = [worldId * rbCount + k, worldId * rbCount + k + 1] as const;
                const transform1 = new ammo.btTransform();
                const transform2 = new ammo.btTransform();
                transform1.setFromOpenGLMatrix(Matrix.Translation(0, -1.2, 0).asArray());
                transform2.setFromOpenGLMatrix(Matrix.Translation(0, 1.2, 0).asArray());
                const constraint = new ammo.btGeneric6DofSpringConstraint(bodies[indices[0]], bodies[indices[1]], transform1, transform2, true);
                ammo.destroy(transform1);
                ammo.destroy(transform2);

                constraint.setLinearLowerLimit(new ammo.btVector3(0, 0, 0));
                constraint.setLinearUpperLimit(new ammo.btVector3(0, 0, 0));
                constraint.setAngularLowerLimit(new ammo.btVector3(Math.PI / 4, 0, 0));
                constraint.setAngularUpperLimit(new ammo.btVector3(0, 0, 0));
                for (let i = 0; i < 6; ++i) {
                    constraint.enableSpring(i, true);
                    constraint.setStiffness(i, 100);
                    constraint.setDamping(i, 1);
                }
                world.addConstraint(constraint, true);
            }
        }

        console.log("Rigid body count:", rbCount * rowCount * columnCount);

        const transform = new ammo.btTransform();
        const scale = new Vector3(1, 1, 1);
        const vector = new Vector3();
        const quaternion = new Quaternion();

        const sampledFps: number[] = [];
        const sampleCount = 600;
        for (let i = 0; i < sampleCount; ++i) {
            const start = performance.now();
            for (let i = 0; i < worlds.length; ++i) {
                worlds[i].stepSimulation(1 / 60, 10, 1 / 60);
            }
            for (let i = 0; i < bodies.length; ++i) {
                const body = bodies[i];
                body.getMotionState().getWorldTransform(transform);
                const origin = transform.getOrigin();
                const rotation = transform.getRotation();
                Matrix.ComposeToRef(
                    scale,
                    quaternion.set(rotation.x(), rotation.y(), rotation.z(), rotation.w()),
                    vector.set(origin.x(), origin.y(), origin.z()),
                    matrix
                );
                matrix.copyToArray(rigidbodyMatrixBuffer, i * 16);
            }
            baseBox.thinInstanceBufferUpdated("matrix");
            scene.render();
            const end = performance.now();
            const fps = 1000 / (end - start);
            sampledFps.push(fps);
        }
        let averageFps = 0;
        let result = "";
        for (let i = 0; i < sampleCount; ++i) {
            result += `(${i}, ${sampledFps[i]})`;
            if (i !== sampleCount - 1) {
                result += ", ";
            }
            averageFps += sampledFps[i];
        }
        console.log(`Result: ${result}, Average: ${averageFps / sampleCount}`);

        document.write(`Result: ${result}, Average: ${averageFps / sampleCount}`);

        // document.write(`Average FPS: [${result}]`);

        scene.onBeforeRenderObservable.add(() => {
            for (let i = 0; i < worlds.length; ++i) {
                worlds[i].stepSimulation(1 / 60, 10, 1 / 60);
            }

            for (let i = 0; i < bodies.length; ++i) {
                const body = bodies[i];
                body.getMotionState().getWorldTransform(transform);
                const origin = transform.getOrigin();
                const rotation = transform.getRotation();
                Matrix.ComposeToRef(
                    scale,
                    quaternion.set(rotation.x(), rotation.y(), rotation.z(), rotation.w()),
                    vector.set(origin.x(), origin.y(), origin.z()),
                    matrix
                );
                matrix.copyToArray(rigidbodyMatrixBuffer, i * 16);
            }
            baseBox.thinInstanceBufferUpdated("matrix");
        });

        return scene;
    }
}
