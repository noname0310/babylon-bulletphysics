import "@babylonjs/core/Meshes/thinInstanceMesh";
import "@babylonjs/core/Lights/Shadows/shadowGeneratorSceneComponent";
import "@babylonjs/core/Materials/standardMaterial";

import { ArcRotateCamera } from "@babylonjs/core/Cameras/arcRotateCamera";
import type { AbstractEngine } from "@babylonjs/core/Engines/abstractEngine";
import { Constants } from "@babylonjs/core/Engines/constants";
import { DirectionalLight } from "@babylonjs/core/Lights/directionalLight";
import { HemisphericLight } from "@babylonjs/core/Lights/hemisphericLight";
import { StandardMaterial } from "@babylonjs/core/Materials/standardMaterial";
import { Color3, Color4 } from "@babylonjs/core/Maths/math.color";
import { Matrix, Quaternion, Vector3 } from "@babylonjs/core/Maths/math.vector";
import { CreateBox } from "@babylonjs/core/Meshes/Builders/boxBuilder";
import type { Mesh } from "@babylonjs/core/Meshes/mesh";
import { Scene } from "@babylonjs/core/scene";

import { getBulletWasmInstance } from "@/Runtime/bulletWasmInstance";
import { MotionStateOffsetsInFloat32Array } from "@/Runtime/constants";
import { MultiPhysicsRuntime } from "@/Runtime/Impl/multiPhysicsRuntime";
import { PhysicsRuntimeEvaluationType } from "@/Runtime/Impl/physicsRuntimeEvaluationType";
import { BulletWasmInstanceTypeMD } from "@/Runtime/InstanceType/multiDebug";
import type { IWasmTypedArray } from "@/Runtime/Misc/IWasmTypedArray";
import { MotionType } from "@/Runtime/motionType";
import { PhysicsBoxShape } from "@/Runtime/physicsShape";
import { RigidBody } from "@/Runtime/rigidBody";
import { RigidBodyConstructionInfo } from "@/Runtime/rigidBodyConstructionInfo";

import type { ISceneBuilder } from "../baseRuntime";

export class SceneBuilder implements ISceneBuilder {
    public async build(canvas: HTMLCanvasElement, engine: AbstractEngine): Promise<Scene> {
        const scene = new Scene(engine);
        scene.clearColor = new Color4(1.0, 1.0, 1.0, 1.0);

        const camera = new ArcRotateCamera("arcRotateCamera", 0, 0, 500, new Vector3(0, 0, 0), scene);
        camera.minZ = 1;
        camera.maxZ = 3000;
        canvas;
        Constants;
        camera.mode = Constants.ORTHOGRAPHIC_CAMERA;
        camera.orthoBottom = -12;
        camera.orthoTop = 12;
        function setOrthoCamera(): void {
            const aspect = canvas.width / canvas.height;
            camera.orthoLeft = -camera.orthoTop! * aspect;
            camera.orthoRight = camera.orthoTop! * aspect;
        }
        setOrthoCamera();
        engine.onResizeObservable.add(() => setOrthoCamera());
        camera.setPosition(new Vector3(0, 100, 0));
        camera.attachControl(undefined, false);
        camera.inertia = 0.8;
        camera.speed = 10;

        const mode = parseInt(prompt("mode") ?? "0", 10) === 0 ? "multi" : "single";
        console.log("mode", mode);

        const hemisphericLight = new HemisphericLight("hemisphericLight", new Vector3(0, 1, 0), scene);
        hemisphericLight.intensity = 0.7;
        hemisphericLight.specular = new Color3(0, 0, 0);
        hemisphericLight.groundColor = new Color3(1, 1, 1);
        const directionalLight = new DirectionalLight("directionalLight", new Vector3(0.5, -5, 1), scene);
        directionalLight.intensity = 0.3;

        const wasmInstance = await getBulletWasmInstance(new BulletWasmInstanceTypeMD(), 2);
        const runtime = new MultiPhysicsRuntime(wasmInstance, {
            allowDynamicShadow: true,
            preserveBackBuffer: false
        });
        runtime.evaluationType = mode === "multi"
            ? PhysicsRuntimeEvaluationType.Buffered
            : PhysicsRuntimeEvaluationType.Immediate;
        runtime.setGravity(new Vector3(0, 0, 0));

        const matrix = Matrix.Identity();

        const bufferedMeshes: Mesh[] = [];
        const meshes: Mesh[] = [];
        const bodies: RigidBody[] = [];
        {
            const baseBox = CreateBox("box", { size: 1 }, scene);
            const material = baseBox.material = new StandardMaterial("boxMat", scene);
            material.diffuseColor = new Color3(0, 1, 0);
            baseBox.rotationQuaternion = new Quaternion();
            baseBox.scaling = new Vector3(10, 1, 1);
            if (mode === "multi") {
                baseBox.visibility = 0.5;
                bufferedMeshes.push(baseBox);
                const trailBox = baseBox.clone();
                trailBox.visibility = 1.0;
                meshes.push(trailBox);
            } else {
                meshes.push(baseBox);
            }

            const boxShape = new PhysicsBoxShape(runtime, new Vector3(0.5, 0.5, 0.5).multiplyInPlace(baseBox.scaling!));
            const boxRbInfo = new RigidBodyConstructionInfo(wasmInstance);
            boxRbInfo.shape = boxShape;
            boxRbInfo.motionType = MotionType.Dynamic;
            matrix.setTranslationFromFloats(17, 0, 0);
            boxRbInfo.setInitialTransform(matrix);
            boxRbInfo.mass = 1.0;
            boxRbInfo.restitution = 0.5;
            boxRbInfo.friction = 0.5;

            const boxRigidBody = new RigidBody(runtime, boxRbInfo);
            boxRigidBody.setLinearVelocity(new Vector3(-100, 0, 0));
            if (mode === "multi") {
                runtime.addRigidBody(boxRigidBody, 0);
                runtime.addRigidBodyShadow(boxRigidBody, 1);
            } else {
                runtime.addRigidBody(boxRigidBody, 0);
            }
            bodies.push(boxRigidBody);
        }
        {
            const baseBox = CreateBox("box", { size: 1 }, scene);
            const material = baseBox.material = new StandardMaterial("boxMat", scene);
            material.diffuseColor = new Color3(1, 0, 0);
            baseBox.rotationQuaternion = new Quaternion();
            if (mode === "multi") {
                baseBox.visibility = 0.5;
                bufferedMeshes.push(baseBox);
                const trailBox = baseBox.clone();
                trailBox.visibility = 1.0;
                meshes.push(trailBox);
            } else {
                meshes.push(baseBox);
            }

            const boxShape = new PhysicsBoxShape(runtime, new Vector3(0.5, 0.5, 0.5));
            const boxRbInfo = new RigidBodyConstructionInfo(wasmInstance);
            boxRbInfo.shape = boxShape;
            boxRbInfo.motionType = MotionType.Dynamic;
            matrix.setTranslationFromFloats(0, 0, 10);
            boxRbInfo.setInitialTransform(matrix);
            boxRbInfo.mass = 1.0;
            boxRbInfo.restitution = 0.5;
            boxRbInfo.friction = 0.5;

            const boxRigidBody = new RigidBody(runtime, boxRbInfo);
            boxRigidBody.setLinearVelocity(new Vector3(0, 0, -100));
            if (mode === "multi") {
                runtime.addRigidBody(boxRigidBody, 1);
                runtime.addRigidBodyShadow(boxRigidBody, 0);
            } else {
                runtime.addRigidBody(boxRigidBody, 0);
            }
            bodies.push(boxRigidBody);
        }

        runtime.onTickObservable.add(() => {
            runtime.lock.wait(); // for access motion state

            for (let i = 0; i < bodies.length; ++i) {
                const body = bodies[i];
                const mesh = bufferedMeshes[i];
                if (mesh) {
                    body.getTransformMatrixToRef(matrix);
                    Quaternion.FromRotationMatrixToRef(matrix, mesh.rotationQuaternion!);
                    matrix.getTranslationToRef(mesh.position);
                }

                {
                    const motionStatePtr = (body as any)._motionStatePtr as IWasmTypedArray<Float32Array>;
                    const m = motionStatePtr.array;
                    matrix.set(
                        m[MotionStateOffsetsInFloat32Array.MatrixRowX + 0],
                        m[MotionStateOffsetsInFloat32Array.MatrixRowY + 0],
                        m[MotionStateOffsetsInFloat32Array.MatrixRowZ + 0],
                        0,
                        m[MotionStateOffsetsInFloat32Array.MatrixRowX + 1],
                        m[MotionStateOffsetsInFloat32Array.MatrixRowY + 1],
                        m[MotionStateOffsetsInFloat32Array.MatrixRowZ + 1],
                        0,
                        m[MotionStateOffsetsInFloat32Array.MatrixRowX + 2],
                        m[MotionStateOffsetsInFloat32Array.MatrixRowY + 2],
                        m[MotionStateOffsetsInFloat32Array.MatrixRowZ + 2],
                        0,
                        m[MotionStateOffsetsInFloat32Array.Translation + 0],
                        m[MotionStateOffsetsInFloat32Array.Translation + 1],
                        m[MotionStateOffsetsInFloat32Array.Translation + 2],
                        1
                    );
                }
                const trailMesh = meshes[i];
                Quaternion.FromRotationMatrixToRef(matrix, trailMesh.rotationQuaternion!);
                matrix.getTranslationToRef(trailMesh.position);
            }
        });

        runtime.maxSubSteps = 100;
        runtime.fixedTimeStep = 1 / 600;
        runtime.afterAnimations(0);
        document.addEventListener("keydown", (ev) => {
            if (ev.key === " ") {
                runtime.afterAnimations(1000 / 60);
            }
        });
        // runtime.register(scene);

        return scene;
    }
}
