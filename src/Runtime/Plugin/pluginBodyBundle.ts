import { RigidBodyBundle } from "../rigidBodyBundle";

export class PluginbodyBundle extends RigidBodyBundle {
    public get length(): number {
        return this.count;
    }
}
