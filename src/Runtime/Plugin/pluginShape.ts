import type { Quaternion} from "@babylonjs/core/Maths/math.vector";
import { Matrix, Vector3 } from "@babylonjs/core/Maths/math.vector";
import type { DeepImmutable, Nullable } from "@babylonjs/core/types";

import type { IRuntime } from "../Impl/IRuntime";
import { PhysicsBoxShape } from "../physicsShape";

const tempVector3 = new Vector3();

function localTransformMatrixFromTranslationRotationToRef(center?: Vector3, rotation?: Quaternion, matrix?: Matrix): Nullable<Matrix> {
    if (
        center?.equalsToFloats(0, 0, 0) === false ||
        rotation?.equalsToFloats(0, 0, 0, 1) === false
    ) {
        if (rotation !== undefined) {
            if (matrix === undefined) {
                matrix = new Matrix();
            }
            matrix = Matrix.FromQuaternionToRef(rotation, matrix);
            if (center !== undefined) {
                matrix.setTranslation(center);
            }
        } else if (center !== undefined) {
            if (matrix === undefined) {
                matrix = Matrix.Identity();
            } else {
                Matrix.IdentityToRef(matrix);
            }
            matrix.setTranslation(center);
        } else {
            if (matrix === undefined) {
                matrix = Matrix.Identity();
            } else {
                Matrix.IdentityToRef(matrix);
            }
        }
        return matrix;
    } else {
        return null;
    }
}

export type PluginShapeMaterial = DeepImmutable<{
    friction: number;
    restitution: number;
}>;

export interface IPluginShape {
    readonly localTransform: Nullable<DeepImmutable<Matrix>>;
    collisionGroup: number;
    collisionMask: number;
    setMaterial(friction: number, restitution: number): void;
    get material(): Nullable<PluginShapeMaterial>;
}

export class PluginBoxShape extends PhysicsBoxShape implements IPluginShape {
    public readonly localTransform: Nullable<DeepImmutable<Matrix>>;
    public collisionGroup: number = 1;
    public collisionMask: number = 0xFFFF;
    private _material: Nullable<PluginShapeMaterial> = null;

    public constructor(
        runtime: IRuntime,
        center?: Vector3,
        rotation?: Quaternion,
        extents?: Vector3
    ) {
        super(runtime, extents?.scaleToRef(0.5, tempVector3) ?? tempVector3.setAll(0.5));
        this.localTransform = localTransformMatrixFromTranslationRotationToRef(center, rotation);
    }

    public setMaterial(friction: number, restitution: number): void {
        this._material = { friction, restitution };
    }

    public get material(): Nullable<PluginShapeMaterial> {
        return this._material;
    }
}
