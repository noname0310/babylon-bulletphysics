#pragma once

#include "btBulletDynamicsMinimal.h"
#include "bwRigidBody.h"

class bwPhysicsWorld final
{
private:
    btDbvtBroadphase m_broadphase;
    btDefaultCollisionConfiguration m_collisionConfig;
    btCollisionDispatcher m_dispatcher;
    btSequentialImpulseConstraintSolver m_solver;
    btDiscreteDynamicsWorld m_world;

public:
    bwPhysicsWorld() : m_broadphase(), m_collisionConfig(), m_dispatcher(&m_collisionConfig), m_solver(), m_world(&m_dispatcher, &m_broadphase, &m_solver, &m_collisionConfig)
    {
    }

    bwPhysicsWorld(bwPhysicsWorld const&) = delete;
    bwPhysicsWorld& operator=(bwPhysicsWorld const&) = delete;

    // ~bwPhysicsWorld()
    // {
    //     delete m_world;
    //     delete m_solver;
    //     delete m_dispatcher;
    //     delete m_collisionConfig;
    //     delete m_broadphase;
    // }
    
    void setGravity(btScalar x, btScalar y, btScalar z)
    {
        m_world.setGravity(btVector3(x, y, z));
    }

    void stepSimulation(btScalar timeStep, int maxSubSteps, btScalar fixedTimeStep)
    {
        m_world.stepSimulation(timeStep, maxSubSteps, fixedTimeStep);
    }

    void addRigidBody(bwRigidBody* body)
    {
        m_world.addRigidBody(body->getBody(), body->getCollisionGroup(), body->getCollisionMask());
    }

    void removeRigidBody(bwRigidBody* body)
    {
        m_world.removeRigidBody(body->getBody());
    }

    void addRigidBodyShadow(bwRigidBodyShadow* shadow)
    {
        m_world.addRigidBody(shadow->getBody(), shadow->getCollisionGroup(), shadow->getCollisionMask());
    }

    void removeRigidBodyShadow(bwRigidBodyShadow* shadow)
    {
        m_world.removeRigidBody(shadow->getBody());
    }

    void addConstraint(btTypedConstraint* constraint, bool disableCollisionsBetweenLinkedBodies)
    {
        m_world.addConstraint(constraint, disableCollisionsBetweenLinkedBodies);
    }

    void removeConstraint(btTypedConstraint* constraint)
    {
        m_world.removeConstraint(constraint);
    }
};

extern "C" void* bw_create_world()
{
    bwPhysicsWorld* world = new bwPhysicsWorld();
    return world;
}

extern "C" void bw_destroy_world(void* world)
{
    bwPhysicsWorld* w = static_cast<bwPhysicsWorld*>(world);
    delete w;
}

extern "C" void bw_world_set_gravity(void* world, float x, float y, float z)
{
    bwPhysicsWorld* w = static_cast<bwPhysicsWorld*>(world);
    w->setGravity(x, y, z);
}

extern "C" void bw_world_step_simulation(void* world, float timeStep, int maxSubSteps, float fixedTimeStep)
{
    bwPhysicsWorld* w = static_cast<bwPhysicsWorld*>(world);
    w->stepSimulation(timeStep, maxSubSteps, fixedTimeStep);
}

extern "C" void bw_world_add_rigidbody(void* world, void* body)
{
    bwPhysicsWorld* w = static_cast<bwPhysicsWorld*>(world);
    bwRigidBody* b = static_cast<bwRigidBody*>(body);
    w->addRigidBody(b);
}

extern "C" void bw_world_remove_rigidbody(void* world, void* body)
{
    bwPhysicsWorld* w = static_cast<bwPhysicsWorld*>(world);
    bwRigidBody* b = static_cast<bwRigidBody*>(body);
    w->removeRigidBody(b);
}

extern "C" void bw_world_add_rigidbody_shadow(void* world, void* shadow)
{
    bwPhysicsWorld* w = static_cast<bwPhysicsWorld*>(world);
    bwRigidBodyShadow* s = static_cast<bwRigidBodyShadow*>(shadow);
    w->addRigidBodyShadow(s);
}

extern "C" void bw_world_remove_rigidbody_shadow(void* world, void* shadow)
{
    bwPhysicsWorld* w = static_cast<bwPhysicsWorld*>(world);
    bwRigidBodyShadow* s = static_cast<bwRigidBodyShadow*>(shadow);
    w->removeRigidBodyShadow(s);
}

extern "C" void bw_world_add_constraint(void* world, void* constraint, uint8_t disableCollisionsBetweenLinkedBodies)
{
    bwPhysicsWorld* w = static_cast<bwPhysicsWorld*>(world);
    btTypedConstraint* c = static_cast<btTypedConstraint*>(constraint);
    w->addConstraint(c, disableCollisionsBetweenLinkedBodies);
}

extern "C" void bw_world_remove_constraint(void* world, void* constraint)
{
    bwPhysicsWorld* w = static_cast<bwPhysicsWorld*>(world);
    btTypedConstraint* c = static_cast<btTypedConstraint*>(constraint);
    w->removeConstraint(c);
}
