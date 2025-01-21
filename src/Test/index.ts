import type { ISceneBuilder } from "./baseRuntime";
import { buildSceneEntry } from "./buildSceneEntry";

const scenes: [string, () => Promise<ISceneBuilder>][] = [
    ["constraint test scene", async(): Promise<ISceneBuilder> => new (await import("@/Test/Scene/constraintTestScene")).SceneBuilder()],
    ["multi physics runtime shadow test scene", async(): Promise<ISceneBuilder> => new (await import("@/Test/Scene/multiPhysicsRuntimeShadowTestScene")).SceneBuilder()],
    ["multi physics runtime test scene", async(): Promise<ISceneBuilder> => new (await import("@/Test/Scene/multiPhysicsRuntimeTestScene")).SceneBuilder()],
    ["multi world600 body ammo bench", async(): Promise<ISceneBuilder> => new (await import("@/Test/Scene/multiWorld600BodyAmmoBench")).SceneBuilder()],
    ["multi world600 body bench", async(): Promise<ISceneBuilder> => new (await import("@/Test/Scene/multiWorld600BodyBench")).SceneBuilder()],
    ["multi world600 body bundle bench", async(): Promise<ISceneBuilder> => new (await import("@/Test/Scene/multiWorld600BodyBundleBench")).SceneBuilder()],
    ["physics runtime test scene", async(): Promise<ISceneBuilder> => new (await import("@/Test/Scene/physicsRuntimeTestScene")).SceneBuilder()],
    ["thread count bench", async(): Promise<ISceneBuilder> => new (await import("@/Test/Scene/threadCountBench")).SceneBuilder()]
];
buildSceneEntry(scenes);
