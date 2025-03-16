import type { Nullable } from "@babylonjs/core/types";

import type { IRuntime } from "../Impl/IRuntime";
import type { MotionType } from "../motionType";
import { RigidBody } from "../rigidBody";
import type { PluginConstructionInfo } from "./pluginConstructionInfo";
import type { IPluginShape } from "./pluginShape";

export class PluginBody extends RigidBody {
    public readonly worldId: number;
    public readonly motionType: MotionType;

    public constructor(runtime: IRuntime, info: PluginConstructionInfo) {
        const shape = info.shape as unknown as Nullable<IPluginShape>;
        if (shape !== null) {
            info.collisionGroup = shape.collisionGroup;
            info.collisionMask = shape.collisionMask;
            const material = shape.material;
            if (material) {
                info.friction = material.friction;
                info.restitution = material.restitution;
            }
        }
        super(runtime, info);
        this.worldId = info.worldId;
        this.motionType = info.motionType;
    }
}
