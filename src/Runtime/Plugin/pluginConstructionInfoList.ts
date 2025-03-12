import type { BulletWasmInstance } from "../bulletWasmInstance";
import { RigidBodyConstructionInfoList } from "../rigidBodyConstructionInfoList";

export class PluginConstructionInfoList extends RigidBodyConstructionInfoList {
    public worldId: number;

    public constructor(wasmInstance: BulletWasmInstance, count: number) {
        super(wasmInstance, count);
        this.worldId = 0;
    }

    public get length(): number {
        return this.count;
    }
}
