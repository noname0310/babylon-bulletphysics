#pragma once

#include "btBulletDynamicsMinimal.h"

enum class bwRigidBodyMotionType : uint8_t
{
    DYNAMIC = 0,
    KINEMATIC = 1,
    STATIC = 2
};

struct bwRigidBodyConstructionInfo final
{
    // for shape
    void* m_shape; // btCollisionShape

    // for motion state
    uint8_t m_motionType; // bwRigidBodyMotionType
    float m_startTransform[12]; // basis[9], origin[3]

    // for rigid body
    float m_mass = 1.0f;
    // m_localInertia
    float m_linearDamping;
    float m_angularDamping;
    float m_friction;
    // m_rollingFriction
    // m_spinningFriction
    float m_restitution;
    float m_linearSleepingThreshold;
    float m_angularSleepingThreshold;
    uint16_t m_collisionGroup;
    uint16_t m_collisionMask;
    uint8_t m_additionalDamping; // bool
    // m_additionalDampingFactor
    // m_additionalLinearDampingThresholdSqr
    // m_additionalAngularDampingThresholdSqr
    // m_additionalAngularDampingFactor
    uint8_t m_noContactResponse; // bool
    uint8_t m_disableDeactivation; // bool
};

//extern "C" size_t bw_
