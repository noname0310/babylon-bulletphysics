import { RigidBodyBundle } from "../rigidBodyBundle";

export class PluginBodyBundle extends RigidBodyBundle {
    public get length(): number {
        return this.count;
    }
}
