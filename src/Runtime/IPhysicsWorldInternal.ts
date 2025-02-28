export const enum PhysicsWorldInternalKind {
    PhysicsWorld,
    MultiPhysicsWorld,
}

export interface IPhysicsWorldInternal {
    readonly worldKind: PhysicsWorldInternalKind;
    get ptr(): number;
}
