import type { IRuntime } from "../Impl/IRuntime";
import type { MotionType } from "../motionType";
import { RigidBody } from "../rigidBody";
import type { PluginConstructionInfo } from "./pluginConstructionInfo";
import type { IPluginShape } from "./pluginShape";

export class PluginBody extends RigidBody {
    public readonly worldId: number;
    public readonly motionType: MotionType;

    public constructor(runtime: IRuntime, info: PluginConstructionInfo) {
        const material = (info.shape as unknown as IPluginShape)?.material;
        if (material) {
            info.friction = material.friction;
            info.restitution = material.restitution;
        }
        super(runtime, info);
        this.worldId = info.worldId;
        this.motionType = info.motionType;
    }
}
