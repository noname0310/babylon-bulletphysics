import "@babylonjs/core/Meshes/thinInstanceMesh";
import "@babylonjs/core/Meshes/instancedMesh";
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
import { CreateSphere } from "@babylonjs/core/Meshes/Builders/sphereBuilder";
import type { InstancedMesh } from "@babylonjs/core/Meshes/instancedMesh";
import { Scene } from "@babylonjs/core/scene";

// eslint-disable-next-line @typescript-eslint/naming-convention
import Ammo from "@/External/ammo.wasm";

import type { ISceneBuilder } from "../baseRuntime";
import { BenchHelper } from "../Util/benchHelper";
import { Mulberry32 } from "../Util/mulberry32";

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
            world.setGravity(new ammo.btVector3(0, -10, 0));
            worlds.push(world);
        }

        const matrix = new Matrix();

        {
            const ground = CreatePlane("ground", { size: 500 }, scene);
            ground.rotationQuaternion = Quaternion.RotationAxis(new Vector3(1, 0, 0), Math.PI / 2);
            shadowGenerator.addShadowCaster(ground);
            ground.receiveShadows = true;

            const planeNormal = new ammo.btVector3(0, 0, -1);
            const groundShape = new ammo.btStaticPlaneShape(planeNormal, 0);
            ammo.destroy(planeNormal);
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

        const rowCount = 4;
        const columnCount = 8;
        const margin = 60;

        const shapes: Ammo.btCollisionShape[] = [];
        const shapeInfoList: ({
            type: "box";
            size: Vector3;
        } | {
            type: "sphere";
            radius: number;
        })[] = [];

        const shapeType = prompt("Shape type (u, r) uniform box, random", "u")!;
        if (shapeType === "u") {
            const boxShapeSize = new Vector3(1, 1, 1);
            const boxShapeSizeBt = new ammo.btVector3(boxShapeSize.x, boxShapeSize.y, boxShapeSize.z);
            const boxShape = new ammo.btBoxShape(boxShapeSizeBt);
            ammo.destroy(boxShapeSizeBt);
            const boxShapeInfo = { type: "box" as const, size: boxShapeSize };
            for (let i = 0; i < rbCount; ++i) {
                shapes.push(boxShape);
                shapeInfoList.push(boxShapeInfo);
            }
        } else {
            const rng = new Mulberry32(0);
            for (let i = 0; i < rbCount; ++i) {
                const type = rng.next() * 2 | 0;
                if (type === 0) {
                    const sizeX = rng.next() * 2 + 0.5;
                    const sizeY = rng.next() * 2 + 0.5;
                    const sizeZ = rng.next() * 2 + 0.5;
                    const size = new Vector3(sizeX, sizeY, sizeZ);
                    const sizeBt = new ammo.btVector3(size.x, size.y, size.z);
                    shapes.push(new ammo.btBoxShape(sizeBt));
                    ammo.destroy(sizeBt);
                    shapeInfoList.push({ type: "box", size });
                } else if (type === 1) {
                    const radius = rng.next() * 2 + 1;
                    shapes.push(new ammo.btSphereShape(radius));
                    shapeInfoList.push({ type: "sphere", radius });
                } else {
                    throw new Error("Invalid type");
                }
            }
        }

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
            for (let k = 0; k < rbInfoList.length; ++k) ammo.destroy(rbInfoList[k]);

            for (let k = 0; k < rbCount; k += 2) {
                const indices = [worldId * rbCount + k, worldId * rbCount + k + 1] as const;
                const transform1 = new ammo.btTransform();
                const transform2 = new ammo.btTransform();
                transform1.setFromOpenGLMatrix(Matrix.Translation(0, -1.2, 0).asArray());
                transform2.setFromOpenGLMatrix(Matrix.Translation(0, 1.2, 0).asArray());
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

        const meshes: InstancedMesh[] = [];

        const baseBox = CreateBox("baseBox", { size: 1 }, scene);
        const baseSphere = CreateSphere("baseSphere", { diameter: 1 }, scene);
        baseBox.setEnabled(false);
        baseSphere.setEnabled(false);
        baseBox.receiveShadows = true;
        baseSphere.receiveShadows = true;

        for (let i = 0; i < rbCount * rowCount * columnCount; ++i) {
            const shapeInfo = shapeInfoList[i % shapeInfoList.length];
            const mesh = shapeInfo.type === "box" ? baseBox.createInstance(`boxInstance${i}`) : baseSphere.createInstance(`sphereInstance${i}`);
            shadowGenerator.addShadowCaster(mesh);
            mesh.scaling.copyFrom(shapeInfo.type === "box" ? shapeInfo.size.scale(2) : new Vector3(shapeInfo.radius, shapeInfo.radius, shapeInfo.radius).scale(2));
            mesh.rotationQuaternion = Quaternion.Identity();
            meshes.push(mesh);
        }

        const transform = new ammo.btTransform();

        const benchHelper = new BenchHelper(() => {
            const simulationStart = performance.now();
            for (let i = 0; i < worlds.length; ++i) worlds[i].stepSimulation(1 / 60, 10, 1 / 60);
            for (let i = 0; i < bodies.length; ++i) {
                const body = bodies[i];
                body.getMotionState().getWorldTransform(transform);
                const origin = transform.getOrigin();
                const rotation = transform.getRotation();
                const mesh = meshes[i];
                mesh.position.set(origin.x(), origin.y(), origin.z());
                mesh.rotationQuaternion!.set(rotation.x(), rotation.y(), rotation.z(), rotation.w());
            }

            const renderStart = performance.now();
            const simulationTime = renderStart - simulationStart;
            scene.render();
            const renderTime = performance.now() - renderStart;
            return [simulationTime, renderTime];
        });
        benchHelper.runBench();

        scene.onBeforeRenderObservable.add(() => {
            for (let i = 0; i < worlds.length; ++i) worlds[i].stepSimulation(1 / 60, 10, 1 / 60);
            for (let i = 0; i < bodies.length; ++i) {
                const body = bodies[i];
                body.getMotionState().getWorldTransform(transform);
                const origin = transform.getOrigin();
                const rotation = transform.getRotation();
                const mesh = meshes[i];
                mesh.position.set(origin.x(), origin.y(), origin.z());
                mesh.rotationQuaternion!.set(rotation.x(), rotation.y(), rotation.z(), rotation.w());
            }
        });

        return scene;
    }
}
