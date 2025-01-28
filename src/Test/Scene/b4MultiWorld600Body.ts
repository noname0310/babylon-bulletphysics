import "@babylonjs/core/Meshes/thinInstanceMesh";
import "@babylonjs/core/Lights/Shadows/shadowGeneratorSceneComponent";
import "@babylonjs/core/Materials/standardMaterial";

import { CreateSphere } from "@babylonjs/core";
import { ArcRotateCamera } from "@babylonjs/core/Cameras/arcRotateCamera";
import type { AbstractEngine } from "@babylonjs/core/Engines/abstractEngine";
import { DirectionalLight } from "@babylonjs/core/Lights/directionalLight";
import { HemisphericLight } from "@babylonjs/core/Lights/hemisphericLight";
import { ShadowGenerator } from "@babylonjs/core/Lights/Shadows/shadowGenerator";
import { Color3, Color4 } from "@babylonjs/core/Maths/math.color";
import { Matrix, Quaternion, Vector3 } from "@babylonjs/core/Maths/math.vector";
import { CreateBox } from "@babylonjs/core/Meshes/Builders/boxBuilder";
import { CreatePlane } from "@babylonjs/core/Meshes/Builders/planeBuilder";
import type { InstancedMesh } from "@babylonjs/core/Meshes/instancedMesh";
import { Scene } from "@babylonjs/core/scene";

import { getBulletWasmInstance } from "@/Runtime/bulletWasmInstance";
import { Generic6DofSpringConstraint } from "@/Runtime/constraint";
import { NullPhysicsRuntime } from "@/Runtime/Impl/nullPhysicsRuntime";
import { BulletWasmInstanceTypeMR } from "@/Runtime/InstanceType/multiRelease";
import { BulletWasmInstanceTypeSR } from "@/Runtime/InstanceType/singleRelease";
import { MotionType } from "@/Runtime/motionType";
import { MultiPhysicsWorld } from "@/Runtime/multiPhysicsWorld";
import type { PhysicsShape} from "@/Runtime/physicsShape";
import { PhysicsBoxShape, PhysicsSphereShape, PhysicsStaticPlaneShape } from "@/Runtime/physicsShape";
import { RigidBody } from "@/Runtime/rigidBody";
import { RigidBodyConstructionInfo } from "@/Runtime/rigidBodyConstructionInfo";

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

        const threadCount = parseInt(prompt("Thread count", "2")!);
        console.log("Thread count:", threadCount);

        const wasmInstance = threadCount === 1
            ? await getBulletWasmInstance(new BulletWasmInstanceTypeSR())
            : await getBulletWasmInstance(new BulletWasmInstanceTypeMR(), threadCount);
        const runtime = new NullPhysicsRuntime(wasmInstance);
        const world = new MultiPhysicsWorld(runtime, true);

        const matrix = new Matrix();

        {
            const ground = CreatePlane("ground", { size: 500 }, scene);
            ground.rotationQuaternion = Quaternion.RotationAxis(new Vector3(1, 0, 0), Math.PI / 2);
            shadowGenerator.addShadowCaster(ground);
            ground.receiveShadows = true;

            const groundShape = new PhysicsStaticPlaneShape(runtime, new Vector3(0, 0, -1), 0);
            const groundRbInfo = new RigidBodyConstructionInfo(wasmInstance);
            groundRbInfo.shape = groundShape;
            Matrix.FromQuaternionToRef(ground.rotationQuaternion, matrix);
            groundRbInfo.setInitialTransform(matrix);
            groundRbInfo.motionType = MotionType.Static;

            const groundRigidBody = new RigidBody(runtime, groundRbInfo);
            world.addRigidBodyToGlobal(groundRigidBody);
        }

        const rbCount = 256 * 2;

        const rowCount = 4;
        const columnCount = 8;
        const margin = 60;

        const shapes: PhysicsShape[] = [];
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
            const boxShape = new PhysicsBoxShape(runtime, boxShapeSize);
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
                    shapes.push(new PhysicsBoxShape(runtime, size));
                    shapeInfoList.push({ type: "box", size });
                } else if (type === 1) {
                    const radius = rng.next() * 2 + 1;
                    shapes.push(new PhysicsSphereShape(runtime, radius));
                    shapeInfoList.push({ type: "sphere", radius });
                } else {
                    throw new Error("Invalid type");
                }
            }
        }

        const bodies: RigidBody[] = [];

        for (let i = 0; i < rowCount; ++i) for (let j = 0; j < columnCount; ++j) {
            const worldId = i * columnCount + j;
            const xOffset = (j - columnCount / 2) * margin + (margin / 2) * (columnCount % 2 ? 0 : 1);
            const zOffset = (i - rowCount / 2) * margin + (margin / 2) * (rowCount % 2 ? 0 : 1);

            const rbInfoList: RigidBodyConstructionInfo[] = [];
            for (let k = 0; k < rbCount; ++k) {
                const rbInfo = new RigidBodyConstructionInfo(wasmInstance);
                rbInfo.shape = shapes[k];
                const initialTransform = Matrix.TranslationToRef(xOffset, 1 + k * 2, zOffset, matrix);
                rbInfo.setInitialTransform(initialTransform);
                rbInfo.friction = 1.0;
                rbInfo.linearDamping = 0.3;
                rbInfo.angularDamping = 0.3;
                rbInfoList.push(rbInfo);
            }
            for (let k = 0; k < rbCount; ++k) {
                const rbInfo = rbInfoList[k];
                const rigidBody = new RigidBody(runtime, rbInfo);
                world.addRigidBody(rigidBody, worldId);
                bodies.push(rigidBody);
            }

            if (shapeType === "u") {
                for (let k = 0; k < rbCount; k += 2) {
                    const indices = [worldId * rbCount + k, worldId * rbCount + k + 1] as const;
                    const constraint = new Generic6DofSpringConstraint(runtime, bodies[indices[0]], bodies[indices[1]], Matrix.Translation(0, -1.2, 0), Matrix.Translation(0, 1.2, 0), true);
                    constraint.setLinearLowerLimit(new Vector3(0, 0, 0));
                    constraint.setLinearUpperLimit(new Vector3(0, 0, 0));
                    constraint.setAngularLowerLimit(new Vector3(Math.PI / 4, 0, 0));
                    constraint.setAngularUpperLimit(new Vector3(0, 0, 0));
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

        const meshes: InstancedMesh[] = [];

        const baseBox = CreateBox("baseBox", { size: 1 }, scene);
        const baseSphere = CreateSphere("baseSphere", { diameter: 1 }, scene);
        baseBox.setEnabled(false);
        baseSphere.setEnabled(false);

        for (let i = 0; i < rbCount * rowCount * columnCount; ++i) {
            const shapeInfo = shapeInfoList[i % shapeInfoList.length];
            const mesh = shapeInfo.type === "box" ? baseBox.createInstance(`boxInstance${i}`) : baseSphere.createInstance(`sphereInstance${i}`);
            mesh.receiveShadows = true;
            shadowGenerator.addShadowCaster(mesh);
            mesh.scaling.copyFrom(shapeInfo.type === "box" ? shapeInfo.size.scale(2) : new Vector3(shapeInfo.radius, shapeInfo.radius, shapeInfo.radius).scale(2));
            mesh.rotationQuaternion = Quaternion.Identity();
            meshes.push(mesh);
        }

        const benchHelper = new BenchHelper(() => {
            world.stepSimulation(1 / 60, 10, 1 / 60);
            for (let i = 0; i < bodies.length; ++i) {
                bodies[i].getTransformMatrixToRef(matrix);
                const mesh = meshes[i];
                matrix.getTranslationToRef(mesh.position);
                Quaternion.FromRotationMatrixToRef(matrix, mesh.rotationQuaternion!);
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
                Quaternion.FromRotationMatrixToRef(matrix, mesh.rotationQuaternion!);
            }
        });

        return scene;
    }
}
