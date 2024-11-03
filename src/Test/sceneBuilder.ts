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
import { Inspector } from "@babylonjs/inspector";

import { getBulletWasmInstance } from "@/Runtime/bulletWasmInstance";
import { BulletWasmInstanceTypeMD } from "@/Runtime/InstanceType/multiDebug";
import { PhysicsBoxShape, PhysicsStaticPlaneShape } from "@/Runtime/physicsShape";
import { PhysicsWorld } from "@/Runtime/physicsWorld";
import { RigidBody } from "@/Runtime/rigidBody";
import { RigidBodyBundle } from "@/Runtime/rigidBodyBundle";
import { RigidBodyConstructionInfo } from "@/Runtime/rigidBodyConstructionInfo";
import { RigidBodyConstructionInfoList } from "@/Runtime/rigidBodyConstructionInfoList";

// import { Inspector } from "@babylonjs/inspector";
import type { ISceneBuilder } from "./baseRuntime";

export class SceneBuilder implements ISceneBuilder {
    public async build(_canvas: HTMLCanvasElement, engine: AbstractEngine): Promise<Scene> {
        const scene = new Scene(engine);
        scene.clearColor = new Color4(0.95, 0.95, 0.95, 1.0);

        const camera = new ArcRotateCamera("arcRotateCamera", 0, 0, 500, new Vector3(0, 0, 0), scene);
        camera.minZ = 1;
        camera.maxZ = 500;
        camera.setPosition(new Vector3(30, 50, -50));
        camera.attachControl(undefined, false);
        camera.inertia = 0.8;
        camera.speed = 10;

        const hemisphericLight = new HemisphericLight("hemisphericLight", new Vector3(0, 1, 0), scene);
        hemisphericLight.intensity = 0.5;
        hemisphericLight.specular = new Color3(0, 0, 0);
        hemisphericLight.groundColor = new Color3(1, 1, 1);

        const directionalLight = new DirectionalLight("directionalLight", new Vector3(0.5, -1, 1), scene);
        directionalLight.intensity = 0.5;
        directionalLight.shadowMaxZ = 30;
        directionalLight.shadowMinZ = -30;

        const shadowGenerator = new ShadowGenerator(2048, directionalLight, true);
        shadowGenerator.transparencyShadow = true;
        shadowGenerator.usePercentageCloserFiltering = true;
        shadowGenerator.forceBackFacesOnly = false;
        shadowGenerator.bias = 0.004;
        shadowGenerator.filteringQuality = ShadowGenerator.QUALITY_MEDIUM;

        Inspector.Show(scene, { enablePopup: false });

        const wasmInstance = await getBulletWasmInstance(new BulletWasmInstanceTypeMD());
        const world = new PhysicsWorld(wasmInstance);

        const matrix = new Matrix();

        {
            const ground = CreatePlane("ground", { size: 600 }, scene);
            ground.rotationQuaternion = Quaternion.RotationAxis(new Vector3(1, 0, 0), Math.PI / 2);
            shadowGenerator.addShadowCaster(ground);
            ground.receiveShadows = true;

            const groundShape = new PhysicsStaticPlaneShape(wasmInstance, new Vector3(0, 1, 0), 0);
            const groundRbInfo = new RigidBodyConstructionInfo(wasmInstance);
            groundRbInfo.shape = groundShape;
            groundRbInfo.setInitialTransform(Matrix.FromQuaternionToRef(ground.rotationQuaternion, matrix));

            const groundRigidBody = new RigidBody(wasmInstance, groundRbInfo);
            world.addRigidBody(groundRigidBody);
        }

        {
            const baseBox = CreateBox("box", { size: 2 }, scene);
            // baseBox.isEnabled(false);
            baseBox.scaling.set(1, 1, 1);
            shadowGenerator.addShadowCaster(baseBox);
            baseBox.receiveShadows = true;
            const boxShape = new PhysicsBoxShape(wasmInstance, new Vector3(50, 50, 0));

            const rbCount = 1024;
            const rbInfoList = new RigidBodyConstructionInfoList(wasmInstance, rbCount);
            for (let i = 0; i < rbCount; ++i) {
                rbInfoList.setShape(i, boxShape);
                rbInfoList.setInitialTransform(i, Matrix.Translation(0, i * 2, 0));
            }

            const bundle = new RigidBodyBundle(wasmInstance, rbInfoList);
            world.addRigidBodyBundle(bundle);
        }

        scene.onBeforeRenderObservable.add(() => {
            world.stepSimulation(1 / 60, 10, 1 / 60);
        });

        return scene;
    }
}
