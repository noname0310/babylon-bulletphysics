import type { ISceneBuilder } from "./baseRuntime";
import { buildSceneEntry } from "./buildSceneEntry";

const scenes: [string, () => Promise<ISceneBuilder>][] = [
    ["b1 multi world600 body", async(): Promise<ISceneBuilder> => new (await import("@/Test/Scene/b1MultiWorld600Body")).SceneBuilder()],
    ["b1 multi world600 body ammo", async(): Promise<ISceneBuilder> => new (await import("@/Test/Scene/b1MultiWorld600BodyAmmo")).SceneBuilder()],
    ["b1 multi world600 body bundle", async(): Promise<ISceneBuilder> => new (await import("@/Test/Scene/b1MultiWorld600BodyBundle")).SceneBuilder()],
    ["b2 thread count", async(): Promise<ISceneBuilder> => new (await import("@/Test/Scene/b2ThreadCount")).SceneBuilder()],
    ["b3 buffered eval with shadow", async(): Promise<ISceneBuilder> => new (await import("@/Test/Scene/b3BufferedEvalWithShadow")).SceneBuilder()],
    ["t constraint", async(): Promise<ISceneBuilder> => new (await import("@/Test/Scene/tConstraint")).SceneBuilder()],
    ["t multi physics runtime", async(): Promise<ISceneBuilder> => new (await import("@/Test/Scene/tMultiPhysicsRuntime")).SceneBuilder()],
    ["t multi physics runtime shadow", async(): Promise<ISceneBuilder> => new (await import("@/Test/Scene/tMultiPhysicsRuntimeShadow")).SceneBuilder()],
    ["t physics runtime", async(): Promise<ISceneBuilder> => new (await import("@/Test/Scene/tPhysicsRuntime")).SceneBuilder()]
];
buildSceneEntry(scenes);
