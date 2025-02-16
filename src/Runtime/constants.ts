export const enum Constants {
    A8BytesPerElement = 1,
    A16BytesPerElement = 2,
    A32BytesPerElement = 4,
    MotionStateSize = 80,
    MotionStateSizeInFloat32Array = MotionStateSize / A32BytesPerElement,
    RigidBodyConstructionInfoSize = 128
}

/**
 * RigidBodyConstructionInfo representations
 *
 * shape: *uint32 : offset 0
 * initial_transform: float32[16] : offset 16
 *
 * motionType: uint8 : offset 80
 *
 * padding: uint8[3] : offset 81
 *
 * mass: float32 : offset 84
 * linearDamping: float32 : offset 88
 * angularDamping: float32 : offset 92
 * friction: float32 : offset 96
 * restitution: float32 : offset 100
 * linearSleepingThreshold: float32 : offset 104
 * angularSleepingThreshold: float32 : offset 108
 * collisionGroup: uint16 : offset 112
 * collisionMask: uint16 : offset 114
 * additionalDamping: uint8 : offset 116
 * noContactResponse: uint8 : offset 117
 * disableDeactivation: uint8 : offset 118
 * padding: uint8[9] : offset 119
 *
 * --size: 128
 */
export const enum RigidBodyConstructionInfoOffsets {
    Shape = 0,
    InitialTransform = 16,
    MotionType = 80,
    Mass = 84,
    LinearDamping = 88,
    AngularDamping = 92,
    Friction = 96,
    Restitution = 100,
    LinearSleepingThreshold = 104,
    AngularSleepingThreshold = 108,
    CollisionGroup = 112,
    CollisionMask = 114,
    AdditionalDamping = 116,
    NoContactResponse = 117,
    DisableDeactivation = 118
}


/**
 * MotionState representations
 *
 * vtable: u32 : offset 0
 * padding: u32[3] : offset 4
 * matrix_rowx: f32[3] : offset 16
 * padding: u32 : offset 28
 * matrix_rowy: f32[3] : offset 32
 * padding: u32 : offset 44
 * matrix_rowz: f32[3] : offset 48
 * padding: u32 : offset 60
 * translation: f32[3] : offset 64
 * padding: u32 : offset 76
 *
 * --size: 80
 */
export const enum MotionStateOffsets {
    VTable = 0,
    MatrixRowX = 16,
    MatrixRowY = 32,
    MatrixRowZ = 48,
    Translation = 64
}
