import type { DeepImmutable, Vector3 } from "@babylonjs/core";

import type { IRuntime } from "../Impl/IRuntime";
import { RigidBodyBundle } from "../rigidBodyBundle";
import type { PluginConstructionInfoList } from "./pluginConstructionInfoList";

export class PluginBodyBundle extends RigidBodyBundle {
    public readonly info: PluginConstructionInfoList;

    public constructor(runtime: IRuntime, info: PluginConstructionInfoList) {
        super(runtime, info);
        this.info = info;
    }

    public override setDamping(index: number, linearDamping: number, angularDamping: number): void {
        super.setDamping(index, linearDamping, angularDamping);
        this.info.setLinearDamping(index, linearDamping);
        this.info.setAngularDamping(index, angularDamping);
    }

    public override setMassProps(index: number, mass: number, localInertia: DeepImmutable<Vector3>): void {
        super.setMassProps(index, mass, localInertia);
        this.info.setMass(index, mass);
        this.info.setLocalInertia(index, localInertia);
    }

    public get length(): number {
        return this.count;
    }
}
