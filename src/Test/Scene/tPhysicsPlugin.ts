import "@babylonjs/core/Meshes/thinInstanceMesh";
import "@babylonjs/core/Lights/Shadows/shadowGeneratorSceneComponent";
import "@babylonjs/core/Materials/standardMaterial";
import "@babylonjs/core/Physics/joinedPhysicsEngineComponent";

import { ArcRotateCamera } from "@babylonjs/core/Cameras/arcRotateCamera";
import type { AbstractEngine } from "@babylonjs/core/Engines/abstractEngine";
import { DirectionalLight } from "@babylonjs/core/Lights/directionalLight";
import { HemisphericLight } from "@babylonjs/core/Lights/hemisphericLight";
import { ShadowGenerator } from "@babylonjs/core/Lights/Shadows/shadowGenerator";
import { Color3, Color4 } from "@babylonjs/core/Maths/math.color";
import { Quaternion, Vector3 } from "@babylonjs/core/Maths/math.vector";
import { CreateBox } from "@babylonjs/core/Meshes/Builders/boxBuilder";
import { CreatePlane } from "@babylonjs/core/Meshes/Builders/planeBuilder";
import { PhysicsMotionType } from "@babylonjs/core/Physics/v2/IPhysicsEnginePlugin";
import { PhysicsBody } from "@babylonjs/core/Physics/v2/physicsBody";
import { PhysicsShapeBox } from "@babylonjs/core/Physics/v2/physicsShape";
import { Scene } from "@babylonjs/core/scene";

// import { Inspector } from "@babylonjs/inspector";
import { getBulletWasmInstance } from "@/Runtime/bulletWasmInstance";
import { BulletWasmInstanceTypeMD } from "@/Runtime/InstanceType/multiDebug";
import { BulletPlugin } from "@/Runtime/Plugin/bulletPlugin";

import type { ISceneBuilder } from "../baseRuntime";

export class SceneBuilder implements ISceneBuilder {
    public async build(_canvas: HTMLCanvasElement, engine: AbstractEngine): Promise<Scene> {
        const scene = new Scene(engine);
        scene.clearColor = new Color4(0.95, 0.95, 0.95, 1.0);

        const camera = new ArcRotateCamera("arcRotateCamera", 0, 0, 500, new Vector3(0, 0, 0), scene);
        camera.minZ = 1;
        camera.maxZ = 1000;
        camera.setPosition(new Vector3(60, 40, -50));
        camera.attachControl(undefined, false);
        camera.inertia = 0.8;
        camera.speed = 10;

        const hemisphericLight = new HemisphericLight("hemisphericLight", new Vector3(0, 1, 0), scene);
        hemisphericLight.intensity = 0.5;
        hemisphericLight.specular = new Color3(0, 0, 0);
        hemisphericLight.groundColor = new Color3(1, 1, 1);

        const directionalLight = new DirectionalLight("directionalLight", new Vector3(0.5, -1, 1), scene);
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

        const shadowGenerator = new ShadowGenerator(2048, directionalLight, true);
        shadowGenerator.transparencyShadow = true;
        shadowGenerator.usePercentageCloserFiltering = true;
        shadowGenerator.forceBackFacesOnly = false;
        shadowGenerator.bias = 0.004;
        shadowGenerator.filteringQuality = ShadowGenerator.QUALITY_MEDIUM;

        // Inspector.Show(scene, { enablePopup: false });

        const wasmInstance = await getBulletWasmInstance(new BulletWasmInstanceTypeMD(), 2);
        scene.enablePhysics(new Vector3(0, -9.8, 0), new BulletPlugin(wasmInstance));

        {
            const ground = CreatePlane("ground", { size: 120 }, scene);
            ground.rotationQuaternion = Quaternion.RotationAxis(new Vector3(1, 0, 0), Math.PI / 2);
            shadowGenerator.addShadowCaster(ground);
            ground.receiveShadows = true;
            ground.position.y = 0;

            const groundShape = new PhysicsShapeBox(
                new Vector3(0, 0, 100),
                Quaternion.Identity(),
                new Vector3(1000, 1000, 200),
                scene
            );
            groundShape.material = {
                friction: 10,
                restitution: 0.5
            };
            groundShape.filterCollideMask = 0xFFFF;
            groundShape.filterMembershipMask = 1 << 0;

            const body = new PhysicsBody(ground, PhysicsMotionType.STATIC, false, scene);
            body.setMassProperties({ mass: 0 });

            body.setLinearDamping(0.3);
            body.setAngularDamping(0.3);
            body.shape = groundShape;
        }

        const box = CreateBox("box", { size: 2 }, scene);
        shadowGenerator.addShadowCaster(box);
        box.receiveShadows = true;
        box.position.y = 10;

        const boxShape = new PhysicsShapeBox(
            new Vector3(0, 0, 0),
            Quaternion.Identity(),
            new Vector3(2, 2, 2),
            scene
        );
        boxShape.material = {
            friction: 1,
            restitution: 0.5
        };
        boxShape.filterCollideMask = 0xFFFF;
        boxShape.filterMembershipMask = 1 << 1;

        const body = new PhysicsBody(box, PhysicsMotionType.DYNAMIC, false, scene);
        body.setMassProperties({ mass: 1 });
        body.setLinearDamping(0.3);
        body.setAngularDamping(0.3);
        body.shape = boxShape;

        // const rbCount = 512 * 2;

        // const baseBox = CreateBox("box", { size: 2 }, scene);
        // shadowGenerator.addShadowCaster(baseBox);
        // baseBox.receiveShadows = true;

        // const rigidbodyMatrixBuffer = new Float32Array(rbCount * 16);
        // baseBox.thinInstanceSetBuffer("matrix", rigidbodyMatrixBuffer, 16, false);

        // const boxShape = new PhysicsBoxShape(runtime, new Vector3(1, 1, 1));
        // const rbInfoList = new RigidBodyConstructionInfoList(wasmInstance, rbCount);
        // for (let i = 0; i < rbCount; ++i) {
        //     rbInfoList.setShape(i, boxShape);
        //     const initialTransform = Matrix.TranslationToRef(0, 1 + i * 2, 0, matrix);
        //     rbInfoList.setInitialTransform(i, initialTransform);
        //     rbInfoList.setFriction(i, 1.0);
        //     rbInfoList.setLinearDamping(i, 0.3);
        //     rbInfoList.setAngularDamping(i, 0.3);
        // }
        // const boxRigidBodyBundle = new RigidBodyBundle(runtime, rbInfoList);
        // runtime.addRigidBodyBundle(boxRigidBodyBundle);

        // for (let i = 0; i < rbCount; i += 2) {
        //     const indices = [i, i + 1] as const;
        //     const constraint = new Generic6DofSpringConstraint(runtime, boxRigidBodyBundle, indices, Matrix.Translation(0, -1.2, 0), Matrix.Translation(0, 1.2, 0), true);
        //     constraint.setLinearLowerLimit(new Vector3(0, 0, 0));
        //     constraint.setLinearUpperLimit(new Vector3(0, 0, 0));
        //     constraint.setAngularLowerLimit(new Vector3(Math.PI / 4, 0, 0));
        //     constraint.setAngularUpperLimit(new Vector3(0, 0, 0));
        //     for (let i = 0; i < 6; ++i) {
        //         constraint.enableSpring(i, true);
        //         constraint.setStiffness(i, 100);
        //         constraint.setDamping(i, 1);
        //     }
        //     runtime.addConstraint(constraint, false);
        // }

        return scene;
    }
}
