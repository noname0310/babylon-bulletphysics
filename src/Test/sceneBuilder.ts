import "@babylonjs/core/Meshes/thinInstanceMesh";
import "@babylonjs/core/Lights/Shadows/shadowGeneratorSceneComponent";
import "@babylonjs/core/Materials/standardMaterial";

import { ArcRotateCamera } from "@babylonjs/core/Cameras/arcRotateCamera";
import type { AbstractEngine } from "@babylonjs/core/Engines/abstractEngine";
import { DirectionalLight } from "@babylonjs/core/Lights/directionalLight";
import { HemisphericLight } from "@babylonjs/core/Lights/hemisphericLight";
import { ShadowGenerator } from "@babylonjs/core/Lights/Shadows/shadowGenerator";
import { Color3, Color4 } from "@babylonjs/core/Maths/math.color";
import { Vector3 } from "@babylonjs/core/Maths/math.vector";
import { Scene } from "@babylonjs/core/scene";

import { getBulletWasmInstance } from "@/Runtime/bulletWasmInstance";
import { BulletWasmInstanceTypeMD } from "@/Runtime/InstanceType/multiDebug";
import { PhysicsBoxShape } from "@/Runtime/physicsShape";
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

        const camera = new ArcRotateCamera("arcRotateCamera", 0, 0, 500, new Vector3(0, -50, 0), scene);
        camera.minZ = 1;
        camera.maxZ = 5000;
        camera.setPosition(new Vector3(300, 500, -500));
        camera.attachControl(undefined, false);
        camera.inertia = 0.8;
        camera.speed = 10;

        const hemisphericLight = new HemisphericLight("hemisphericLight", new Vector3(0, 1, 0), scene);
        hemisphericLight.intensity = 0.5;
        hemisphericLight.specular = new Color3(0, 0, 0);
        hemisphericLight.groundColor = new Color3(1, 1, 1);

        const directionalLight = new DirectionalLight("directionalLight", new Vector3(0.5, -1, 1), scene);
        directionalLight.intensity = 0.5;
        directionalLight.shadowMaxZ = 300;
        directionalLight.shadowMinZ = -300;

        const shadowGenerator = new ShadowGenerator(2048, directionalLight, true);
        shadowGenerator.transparencyShadow = true;
        shadowGenerator.usePercentageCloserFiltering = true;
        shadowGenerator.forceBackFacesOnly = false;
        shadowGenerator.bias = 0.004;
        shadowGenerator.filteringQuality = ShadowGenerator.QUALITY_MEDIUM;

        const wasmInstance = await getBulletWasmInstance(new BulletWasmInstanceTypeMD());

        const boxShape = new PhysicsBoxShape(wasmInstance, new Vector3(50, 50, 50));
        boxShape;

        const rbInfo = new RigidBodyConstructionInfo(wasmInstance);
        rbInfo.shape = boxShape;

        const rigidBody = new RigidBody(wasmInstance, rbInfo);
        rigidBody;

        const rbInfoList = new RigidBodyConstructionInfoList(wasmInstance, 2);
        rbInfoList.setShape(0, boxShape);
        rbInfoList.setShape(1, boxShape);

        const rigidBodyBundle = new RigidBodyBundle(wasmInstance, rbInfoList);
        rigidBodyBundle;

        const world = new PhysicsWorld(wasmInstance);

        world.addRigidBody(rigidBody);
        for (let i = 0; i < 100; ++i) {
            world.stepSimulation(1 / 60, 10, 1 / 60);
        }

        return scene;
    }
}
