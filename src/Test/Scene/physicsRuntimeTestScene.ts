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
import { Generic6DofSpringConstraint } from "@/Runtime/constraint";
import { PhysicsRuntime } from "@/Runtime/Impl/physicsRuntime";
import { BulletWasmInstanceTypeMD } from "@/Runtime/InstanceType/multiDebug";
import { MotionType } from "@/Runtime/motionType";
import { PhysicsBoxShape, PhysicsStaticPlaneShape } from "@/Runtime/physicsShape";
import { RigidBody } from "@/Runtime/rigidBody";
import { RigidBodyBundle } from "@/Runtime/rigidBodyBundle";
import { RigidBodyConstructionInfo } from "@/Runtime/rigidBodyConstructionInfo";
import { RigidBodyConstructionInfoList } from "@/Runtime/rigidBodyConstructionInfoList";

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

        const wasmInstance = await getBulletWasmInstance(new BulletWasmInstanceTypeMD());
        const runtime = new PhysicsRuntime(wasmInstance);
        runtime.register(scene);

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

        const rbCount = 512 * 2;

        const baseBox = CreateBox("box", { size: 2 }, scene);
        shadowGenerator.addShadowCaster(baseBox);
        baseBox.receiveShadows = true;

        const rigidbodyMatrixBuffer = new Float32Array(rbCount * 16);
        baseBox.thinInstanceSetBuffer("matrix", rigidbodyMatrixBuffer, 16, false);

        const boxShape = new PhysicsBoxShape(runtime, new Vector3(1, 1, 1));
        const rbInfoList = new RigidBodyConstructionInfoList(wasmInstance, rbCount);
        for (let i = 0; i < rbCount; ++i) {
            rbInfoList.setShape(i, boxShape);
            const initialTransform = Matrix.TranslationToRef(0, 1 + i * 2, 0, matrix);
            rbInfoList.setInitialTransform(i, initialTransform);
            rbInfoList.setFriction(i, 1.0);
            rbInfoList.setLinearDamping(i, 0.3);
            rbInfoList.setAngularDamping(i, 0.3);
        }
        const boxRigidBodyBundle = new RigidBodyBundle(runtime, rbInfoList);
        runtime.addRigidBodyBundle(boxRigidBodyBundle);

        for (let i = 0; i < rbCount; i += 2) {
            const indices = [i, i + 1] as const;
            const constraint = new Generic6DofSpringConstraint(runtime, boxRigidBodyBundle, indices, Matrix.Translation(0, -1.2, 0), Matrix.Translation(0, 1.2, 0), true);
            constraint.setLinearLowerLimit(new Vector3(0, 0, 0));
            constraint.setLinearUpperLimit(new Vector3(0, 0, 0));
            constraint.setAngularLowerLimit(new Vector3(Math.PI / 4, 0, 0));
            constraint.setAngularUpperLimit(new Vector3(0, 0, 0));
            for (let i = 0; i < 6; ++i) {
                constraint.enableSpring(i, true);
                constraint.setStiffness(i, 100);
                constraint.setDamping(i, 1);
            }
            runtime.addConstraint(constraint, false);
        }

        runtime.onTickObservable.add(() => {
            boxRigidBodyBundle.getTransformMatricesToArray(rigidbodyMatrixBuffer);
            baseBox.thinInstanceBufferUpdated("matrix");
        });

        return scene;
    }
}
