#pragma once

#include "btBulletDynamicsMinimal.h"

// Generic 6 DOF ctor and dtor

extern "C" void* bw_create_generic6dofconstraint(void* bodyA, void* bodyB, float* frameABuffer, float* frameBBuffer, uint8_t useLinearReferenceFrameA)
{
    btRigidBody* a = static_cast<btRigidBody*>(bodyA);
    btRigidBody* b = static_cast<btRigidBody*>(bodyB);
    btTransform frameA;
    frameA.setFromOpenGLMatrix(frameABuffer);
    btTransform frameB;
    frameB.setFromOpenGLMatrix(frameBBuffer);
    btGeneric6DofConstraint* constraint = new btGeneric6DofConstraint(*a, *b, frameA, frameB, useLinearReferenceFrameA);
    return constraint;
}

extern "C" void bw_destroy_generic6dofconstraint(void* constraint)
{
    btGeneric6DofConstraint* c = static_cast<btGeneric6DofConstraint*>(constraint);
    delete c;
}

// Generic 6 DOF constraint methods

extern "C" void bw_generic6dofconstraint_set_linear_lower_limit(void* constraint, float x, float y, float z)
{
    btGeneric6DofConstraint* c = static_cast<btGeneric6DofConstraint*>(constraint);
    c->setLinearLowerLimit(btVector3(x, y, z));
}

extern "C" void bw_generic6dofconstraint_set_linear_upper_limit(void* constraint, float x, float y, float z)
{
    btGeneric6DofConstraint* c = static_cast<btGeneric6DofConstraint*>(constraint);
    c->setLinearUpperLimit(btVector3(x, y, z));
}

extern "C" void bw_generic6dofconstraint_set_angular_lower_limit(void* constraint, float x, float y, float z)
{
    btGeneric6DofConstraint* c = static_cast<btGeneric6DofConstraint*>(constraint);
    c->setAngularLowerLimit(btVector3(x, y, z));
}

extern "C" void bw_generic6dofconstraint_set_angular_upper_limit(void* constraint, float x, float y, float z)
{
    btGeneric6DofConstraint* c = static_cast<btGeneric6DofConstraint*>(constraint);
    c->setAngularUpperLimit(btVector3(x, y, z));
}

// Generic 6 DOF spring ctor and dtor

extern "C" void* bw_create_generic6dofspringconstraint(void* bodyA, void* bodyB, float* frameABuffer, float* frameBBuffer, uint8_t useLinearReferenceFrameA)
{
    btRigidBody* a = static_cast<btRigidBody*>(bodyA);
    btRigidBody* b = static_cast<btRigidBody*>(bodyB);
    btTransform frameA;
    frameA.setFromOpenGLMatrix(frameABuffer);
    btTransform frameB;
    frameB.setFromOpenGLMatrix(frameBBuffer);
    btGeneric6DofSpringConstraint* constraint = new btGeneric6DofSpringConstraint(*a, *b, frameA, frameB, useLinearReferenceFrameA);
    return constraint;
}

extern "C" void bw_destroy_generic6dofspringconstraint(void* constraint)
{
    btGeneric6DofSpringConstraint* c = static_cast<btGeneric6DofSpringConstraint*>(constraint);
    delete c;
}

// Generic 6 DOF spring methods

extern "C" void bw_generic6dofspringconstraint_enable_spring(void* constraint, uint8_t index, uint8_t onOff)
{
    btGeneric6DofSpringConstraint* c = static_cast<btGeneric6DofSpringConstraint*>(constraint);
    c->enableSpring(index, onOff);
}

extern "C" void bw_generic6dofspringconstraint_set_stiffness(void* constraint, uint8_t index, float stiffness)
{
    btGeneric6DofSpringConstraint* c = static_cast<btGeneric6DofSpringConstraint*>(constraint);
    c->setStiffness(index, stiffness);
}

extern "C" void bw_generic6dofspringconstraint_set_damping(void* constraint, uint8_t index, float damping)
{
    btGeneric6DofSpringConstraint* c = static_cast<btGeneric6DofSpringConstraint*>(constraint);
    c->setDamping(index, damping);
}
