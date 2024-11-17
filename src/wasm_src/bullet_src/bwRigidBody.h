#pragma once

#include "btBulletDynamicsMinimal.h"
#include "bwMotionState.h"

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
    void* m_motionState; // bwMotionState

    // for rigid body
    uint8_t m_motionType; // bwRigidBodyMotionType
    float m_mass;
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

class bwRigidBody final
{
private:
    btCollisionShape* m_shape;
    bwMotionState* m_motionState;
    btRigidBody m_body;
    uint16_t m_collisionGroup;
    uint16_t m_collisionMask;

private:
    static btRigidBody::btRigidBodyConstructionInfo createRigidBodyConstructionInfo(bwRigidBodyConstructionInfo* info)
    {
        btCollisionShape* shape = static_cast<btCollisionShape*>(info->m_shape);
        bwMotionState* motionState = static_cast<bwMotionState*>(info->m_motionState);

        btScalar mass = 0.0f;
        if (info->m_motionType == static_cast<uint8_t>(bwRigidBodyMotionType::DYNAMIC))
        {
            mass = info->m_mass;
        }

        btVector3 localInertia(0.0f, 0.0f, 0.0f);
        if (mass != 0.0f)
        {
            shape->calculateLocalInertia(mass, localInertia);
        }

        btRigidBody::btRigidBodyConstructionInfo rbInfo(mass, motionState, shape, localInertia);
        rbInfo.m_linearDamping = info->m_linearDamping;
        rbInfo.m_angularDamping = info->m_angularDamping;
        rbInfo.m_friction = info->m_friction;
        rbInfo.m_restitution = info->m_restitution;
        rbInfo.m_additionalDamping = info->m_additionalDamping;

        return rbInfo;
    }

public:
    bwRigidBody(bwRigidBodyConstructionInfo* info):
        m_shape(static_cast<btCollisionShape*>(info->m_shape)),
        m_motionState(static_cast<bwMotionState*>(info->m_motionState)),
        m_body(createRigidBodyConstructionInfo(info))
    {
        m_body.setSleepingThresholds(info->m_linearSleepingThreshold, info->m_angularSleepingThreshold);
        if (info->m_disableDeactivation)
        {
            m_body.setActivationState(DISABLE_DEACTIVATION);
        }

        if (info->m_motionType == static_cast<uint8_t>(bwRigidBodyMotionType::KINEMATIC))
        {
            m_body.setCollisionFlags(m_body.getCollisionFlags() | btCollisionObject::CF_KINEMATIC_OBJECT);
            m_body.setActivationState(DISABLE_DEACTIVATION);
        }
        else if (info->m_motionType == static_cast<uint8_t>(bwRigidBodyMotionType::STATIC))
        {
            m_body.setCollisionFlags(m_body.getCollisionFlags() | btCollisionObject::CF_STATIC_OBJECT);
        }

        if (info->m_noContactResponse)
        {
            m_body.setCollisionFlags(m_body.getCollisionFlags() | btCollisionObject::CF_NO_CONTACT_RESPONSE);
        }

        m_collisionGroup = info->m_collisionGroup;
        m_collisionMask = info->m_collisionMask;
    }

    bwRigidBody(bwRigidBody const&) = delete;
    bwRigidBody& operator=(bwRigidBody const&) = delete;

    // ~bwRigidBody()
    // {
        // noting to do
    // }

    btRigidBody* getBody()
    {
        return &m_body;
    }

    const btRigidBody* getBody() const
    {
        return &m_body;
    }

    uint16_t getCollisionGroup() const
    {
        return m_collisionGroup;
    }

    uint16_t getCollisionMask() const
    {
        return m_collisionMask;
    }

    void makeKinematic()
    {
        m_body.setCollisionFlags(m_body.getCollisionFlags() | btCollisionObject::CF_KINEMATIC_OBJECT);
    }

    void restoreDynamic()
    {
        m_body.setLinearVelocity(btVector3(0.0f, 0.0f, 0.0f));
        m_body.setAngularVelocity(btVector3(0.0f, 0.0f, 0.0f));
        m_body.setCollisionFlags(m_body.getCollisionFlags() & ~btCollisionObject::CF_KINEMATIC_OBJECT);
    }
};

extern "C" void* bw_create_rigidbody(void* info)
{
    bwRigidBodyConstructionInfo* i = static_cast<bwRigidBodyConstructionInfo*>(info);
    bwRigidBody* body = new bwRigidBody(i);
    return body;
}

extern "C" void bw_destroy_rigidbody(void* body)
{
    bwRigidBody* b = static_cast<bwRigidBody*>(body);
    delete b;
}

extern "C" void bw_rigidbody_make_kinematic(void* body)
{
    bwRigidBody* b = static_cast<bwRigidBody*>(body);
    b->makeKinematic();
}

extern "C" void bw_rigidbody_restore_dynamic(void* body)
{
    bwRigidBody* b = static_cast<bwRigidBody*>(body);
    b->restoreDynamic();
}