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

// import { Inspector } from "@babylonjs/inspector";
import { getBulletWasmInstance } from "@/Runtime/bulletWasmInstance";
import { Generic6DofConstraint } from "@/Runtime/constraint";
import { PhysicsRuntime } from "@/Runtime/Impl/physicsRuntime";
import { PhysicsRuntimeEvaluationType } from "@/Runtime/Impl/physicsRuntimeEvaluationType";
import { BulletWasmInstanceTypeMD } from "@/Runtime/InstanceType/multiDebug";
import { MotionType } from "@/Runtime/motionType";
import { PhysicsBoxShape, PhysicsStaticPlaneShape } from "@/Runtime/physicsShape";
import { RigidBody } from "@/Runtime/rigidBody";
import { RigidBodyConstructionInfo } from "@/Runtime/rigidBodyConstructionInfo";

import type { ISceneBuilder } from "../baseRuntime";

export class SceneBuilder implements ISceneBuilder {
    public async build(_canvas: HTMLCanvasElement, engine: AbstractEngine): Promise<Scene> {
        const scene = new Scene(engine);
        scene.clearColor = new Color4(0.95, 0.95, 0.95, 1.0);

        const camera = new ArcRotateCamera("arcRotateCamera", 0, 0, 500, new Vector3(0, 0, 0), scene);
        camera.minZ = 1;
        camera.maxZ = 1000;
        camera.setPosition(new Vector3(10, 10, -5));
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

        const wasmInstance = await getBulletWasmInstance(new BulletWasmInstanceTypeMD(), 1);
        const runtime = new PhysicsRuntime(wasmInstance);
        runtime.register(scene);
        runtime.evaluationType = PhysicsRuntimeEvaluationType.Immediate;

        const matrix = new Matrix();

        {
            const ground = CreatePlane("ground", { size: 120 }, scene);
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
            runtime.addRigidBody(groundRigidBody);
        }


        const boxShape = new PhysicsBoxShape(runtime, new Vector3(1, 1, 1));
        const rbInfo = new RigidBodyConstructionInfo(wasmInstance);
        rbInfo.motionType = MotionType.Dynamic;
        rbInfo.shape = boxShape;
        rbInfo.setInitialTransform(Matrix.TranslationToRef(0, 3, 0, matrix));
        rbInfo.friction = 1.0;
        rbInfo.linearDamping = 0.3;
        rbInfo.angularDamping = 0.3;
        rbInfo.disableDeactivation = true;

        const box1 = CreateBox("box1", { size: 2 }, scene);
        shadowGenerator.addShadowCaster(box1);
        box1.receiveShadows = true;
        box1.rotationQuaternion = Quaternion.Identity();

        const box1RigidBody = new RigidBody(runtime, rbInfo);
        runtime.addRigidBody(box1RigidBody);

        const box2 = CreateBox("box2", { size: 2 }, scene);
        shadowGenerator.addShadowCaster(box2);
        box2.receiveShadows = true;
        box2.position.set(0, 6, 0);
        box2.rotationQuaternion = Quaternion.Identity();

        const box2RigidBody = new RigidBody(runtime, rbInfo);
        runtime.addRigidBody(box2RigidBody);

        const constraint = new Generic6DofConstraint(
            runtime,
            box1RigidBody,
            box2RigidBody,
            Matrix.Translation(0, 1, 0),
            Matrix.Translation(0, -1, 0),
            true
        );
        constraint.setLinearLowerLimit(new Vector3(0, 0, 0));
        constraint.setLinearUpperLimit(new Vector3(0, 0, 0));
        constraint.setAngularLowerLimit(new Vector3(Math.PI / 4, 0, 0));
        constraint.setAngularUpperLimit(new Vector3(0, 0, 0));

        runtime.addConstraint(constraint, true);

        let time = 0;
        runtime.onTickObservable.add(() => {
            box1RigidBody.getTransformMatrixToRef(matrix);
            matrix.getTranslationToRef(box1.position);
            Quaternion.FromRotationMatrixToRef(matrix, box1.rotationQuaternion!);

            box2RigidBody.getTransformMatrixToRef(matrix);
            matrix.getTranslationToRef(box2.position);
            Quaternion.FromRotationMatrixToRef(matrix, box2.rotationQuaternion!);

            time += engine.getDeltaTime();
            matrix.setTranslationFromFloats(0, Math.sin(time / 1000) * 3, 0);
            box1RigidBody.setTransformMatrix(matrix);
        });

        (window as any).runtime = runtime;
        (window as any).body1 = box1RigidBody;

        return scene;
    }
}
