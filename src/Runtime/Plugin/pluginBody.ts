import { IRuntime } from "../Impl/IRuntime";
import { MotionType } from "../motionType";
import { RigidBody } from "../rigidBody";
import { PluginConstructionInfo } from "./pluginConstructionInfo";

export class PluginBody extends RigidBody {
    public readonly worldId: number;
    public readonly motionType: MotionType;

    public constructor(runtime: IRuntime, info: PluginConstructionInfo) {
        super(runtime, info);
        this.worldId = info.worldId;
        this.motionType = info.motionType;
    }
}
