import type { BulletWasmInstance } from "../bulletWasmInstance";
import { RigidBodyConstructionInfo } from "../rigidBodyConstructionInfo";

export class PluginConstructionInfo extends RigidBodyConstructionInfo {
    public worldId: number;

    public constructor(wasmInstance: BulletWasmInstance) {
        super(wasmInstance);
        this.worldId = 0;
    }
}
