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

import { getBulletWasmInstance } from "@/Runtime/bulletWasmInstance";
import { Generic6DofSpringConstraint } from "@/Runtime/constraint";
import { BulletWasmInstanceTypeMR } from "@/Runtime/InstanceType/multiRelease";
import { BulletWasmInstanceTypeSR } from "@/Runtime/InstanceType/singleRelease";
import { MotionType } from "@/Runtime/motionType";
import { MultiPhysicsWorld } from "@/Runtime/multiPhysicsWorld";
import { PhysicsBoxShape, PhysicsStaticPlaneShape } from "@/Runtime/physicsShape";
import { RigidBody } from "@/Runtime/rigidBody";
import { RigidBodyBundle } from "@/Runtime/rigidBodyBundle";
import { RigidBodyConstructionInfo } from "@/Runtime/rigidBodyConstructionInfo";
import { RigidBodyConstructionInfoList } from "@/Runtime/rigidBodyConstructionInfoList";

import type { ISceneBuilder } from "../baseRuntime";
import { BenchHelper } from "../Util/benchHelper";

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
        const world = new MultiPhysicsWorld(wasmInstance);

        const matrix = new Matrix();

        {
            const ground = CreatePlane("ground", { size: 500 }, scene);
            ground.rotationQuaternion = Quaternion.RotationAxis(new Vector3(1, 0, 0), Math.PI / 2);
            shadowGenerator.addShadowCaster(ground);
            ground.receiveShadows = true;

            const groundShape = new PhysicsStaticPlaneShape(wasmInstance, new Vector3(0, 0, -1), 0);
            const groundRbInfo = new RigidBodyConstructionInfo(wasmInstance);
            groundRbInfo.shape = groundShape;
            Matrix.FromQuaternionToRef(ground.rotationQuaternion, matrix);
            groundRbInfo.setInitialTransform(matrix);
            groundRbInfo.motionType = MotionType.Static;

            const groundRigidBody = new RigidBody(wasmInstance, groundRbInfo);
            world.addRigidBodyToGlobal(groundRigidBody);
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

        const boxShape = new PhysicsBoxShape(wasmInstance, new Vector3(1, 1, 1));

        const bundles: RigidBodyBundle[] = [];

        for (let i = 0; i < rowCount; ++i) for (let j = 0; j < columnCount; ++j) {
            const worldId = i * columnCount + j;
            const xOffset = (j - columnCount / 2) * margin + (margin / 2) * (columnCount % 2 ? 0 : 1);
            const zOffset = (i - rowCount / 2) * margin + (margin / 2) * (rowCount % 2 ? 0 : 1);

            const rbInfoList = new RigidBodyConstructionInfoList(wasmInstance, rbCount);
            for (let k = 0; k < rbCount; ++k) {
                rbInfoList.setShape(k, boxShape);
                const initialTransform = Matrix.TranslationToRef(xOffset, 1 + k * 2, zOffset, matrix);
                rbInfoList.setInitialTransform(k, initialTransform);
                rbInfoList.setFriction(k, 1.0);
                rbInfoList.setLinearDamping(k, 0.3);
                rbInfoList.setAngularDamping(k, 0.3);
            }
            const boxRigidBodyBundle = new RigidBodyBundle(wasmInstance, rbInfoList);
            world.addRigidBodyBundle(boxRigidBodyBundle, worldId);

            for (let k = 0; k < rbCount; k += 2) {
                const indices = [k, k + 1] as const;
                const constraint = new Generic6DofSpringConstraint(wasmInstance, boxRigidBodyBundle, indices, Matrix.Translation(0, -1.2, 0), Matrix.Translation(0, 1.2, 0), true);
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

            bundles.push(boxRigidBodyBundle);
        }

        console.log("Rigid body count:", rbCount * rowCount * columnCount);

        const benchHelper = new BenchHelper(() => {
            world.stepSimulation(1 / 60, 10, 1 / 60);
            for (let i = 0; i < bundles.length; ++i) {
                const bundle = bundles[i];
                const startOffset = i * rbCount * 16;
                for (let j = 0; j < rbCount; ++j) {
                    bundle.getTransformMatrixToRef(j, matrix);
                    matrix.copyToArray(rigidbodyMatrixBuffer, j * 16 + startOffset);
                }
            }
            baseBox.thinInstanceBufferUpdated("matrix");
            scene.render();
        });
        benchHelper.runBench();

        scene.onBeforeRenderObservable.add(() => {
            world.stepSimulation(1 / 60, 10, 1 / 60);

            for (let i = 0; i < bundles.length; ++i) {
                const bundle = bundles[i];
                const startOffset = i * rbCount * 16;
                for (let j = 0; j < rbCount; ++j) {
                    bundle.getTransformMatrixToRef(j, matrix);
                    matrix.copyToArray(rigidbodyMatrixBuffer, j * 16 + startOffset);
                }
            }
            baseBox.thinInstanceBufferUpdated("matrix");
        });

        return scene;
    }
}
