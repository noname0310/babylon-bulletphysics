export const enum PhysicsWorldKind {
    PhysicsWorld,
    MultiPhysicsWorld,
}

export interface IPhysicsWorld {
    readonly worldKind: PhysicsWorldKind;
    get ptr(): number;
}
