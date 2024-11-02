// for manual global memory initialization

extern "C" {
    extern void __wasm_call_ctors();
}

//

// override allocation functions

#include <stdlib.h>
#include <new>

void* operator new(size_t size) {
    return bw_malloc(size);
}

void* operator new[](size_t size) {
    return bw_malloc(size);
}

void operator delete(void* ptr) noexcept {
    bw_free(ptr);
}

void operator delete(void* ptr, size_t size) noexcept {
    bw_free(ptr);
}

void operator delete[](void* ptr) noexcept {
    bw_free(ptr);
}

void operator delete[](void* ptr, size_t size) noexcept {
    bw_free(ptr);
}

//

#include "btBulletDynamicsMinimal.h"

// extern functions

#include "bwCollisionShape.h"
#include "bwMotionState.h"
#include "bwRigidBody.h"
#include "bwPhysicsWorld.h"

// enum class bwConstraintType : uint8_t {
//     // POINT2POINT = 0,
//     // HINGE = 1,
//     // CONE_TWIST = 2,
//     GENERIC_6DOF = 3,
//     // SLIDER = 4,
//     GENERIC_6DOF_SPRING = 5,
//     // UNIVERSAL = 6,
//     // HINGE2 = 7,
//     // GEAR = 8,
//     // FIXED = 9
// };

// struct bwConstraintConstructionInfo final {
//     bwConstraintType m_type = bwConstraintType::GENERIC_6DOF;
//     btTransform m_frameA = btTransform::getIdentity();
//     btTransform m_frameB = btTransform::getIdentity();
//     bool m_useLinearReferenceFrameA = true;
//     bool m_disableCollisionsBetweenLinkedBodies = false;
//     btVector3 m_linearLowerLimit = btVector3(0.0f, 0.0f, 0.0f);
//     btVector3 m_linearUpperLimit = btVector3(0.0f, 0.0f, 0.0f);
//     btVector3 m_angularLowerLimit = btVector3(0.0f, 0.0f, 0.0f);
//     btVector3 m_angularUpperLimit = btVector3(0.0f, 0.0f, 0.0f);
//     btVector3 m_linearStiffness = btVector3(0.0f, 0.0f, 0.0f);
//     btVector3 m_angularStiffness = btVector3(0.0f, 0.0f, 0.0f);
// };

// extern "C" void* bt_create_constraint_construction_info() {
//     bwConstraintConstructionInfo* info = new bwConstraintConstructionInfo();
//     return info;
// }

// extern "C" void bt_destroy_constraint_construction_info(void* info) {
//     bwConstraintConstructionInfo* i = static_cast<bwConstraintConstructionInfo*>(info);
//     delete i;
// }

// extern "C" void bt_constraint_construction_info_set_type(void* info, uint8_t type) {
//     bwConstraintConstructionInfo* i = static_cast<bwConstraintConstructionInfo*>(info);
//     i->m_type = static_cast<bwConstraintType>(type);
// }

// extern "C" void bt_constraint_construction_info_set_frames(void* info, float* frameABuffer, float* frameBBuffer) {
//     bwConstraintConstructionInfo* i = static_cast<bwConstraintConstructionInfo*>(info);
//     i->m_frameA.setFromOpenGLMatrix(frameABuffer);
//     i->m_frameB.setFromOpenGLMatrix(frameBBuffer);
// }

// extern "C" void bt_constraint_construction_info_set_use_linear_reference_frame_a(void* info, uint8_t useLinearReferenceFrameA) {
//     bwConstraintConstructionInfo* i = static_cast<bwConstraintConstructionInfo*>(info);
//     i->m_useLinearReferenceFrameA = useLinearReferenceFrameA;
// }

// extern "C" void bt_constraint_construction_info_set_disable_collisions_between_linked_bodies(void* info, uint8_t disableCollisionsBetweenLinkedBodies) {
//     bwConstraintConstructionInfo* i = static_cast<bwConstraintConstructionInfo*>(info);
//     i->m_disableCollisionsBetweenLinkedBodies = disableCollisionsBetweenLinkedBodies;
// }

// extern "C" void bt_constraint_construction_info_set_linear_limits(void* info, float* lowerLimitBuffer, float* upperLimitBuffer) {
//     bwConstraintConstructionInfo* i = static_cast<bwConstraintConstructionInfo*>(info);
//     i->m_linearLowerLimit = btVector3(lowerLimitBuffer[0], lowerLimitBuffer[1], lowerLimitBuffer[2]);
//     i->m_linearUpperLimit = btVector3(upperLimitBuffer[0], upperLimitBuffer[1], upperLimitBuffer[2]);
// }

// extern "C" void bt_constraint_construction_info_set_angular_limits(void* info, float* lowerLimitBuffer, float* upperLimitBuffer) {
//     bwConstraintConstructionInfo* i = static_cast<bwConstraintConstructionInfo*>(info);
//     i->m_angularLowerLimit = btVector3(lowerLimitBuffer[0], lowerLimitBuffer[1], lowerLimitBuffer[2]);
//     i->m_angularUpperLimit = btVector3(upperLimitBuffer[0], upperLimitBuffer[1], upperLimitBuffer[2]);
// }

// extern "C" void bt_constraint_construction_info_set_stiffness(void* info, float* linearStiffnessBuffer, float* angularStiffnessBuffer) {
//     bwConstraintConstructionInfo* i = static_cast<bwConstraintConstructionInfo*>(info);
//     i->m_linearStiffness = btVector3(linearStiffnessBuffer[0], linearStiffnessBuffer[1], linearStiffnessBuffer[2]);
//     i->m_angularStiffness = btVector3(angularStiffnessBuffer[0], angularStiffnessBuffer[1], angularStiffnessBuffer[2]);
// }

// class bwConstraint final {
// private:
//     btTypedConstraint* m_constraint;
//     bool m_disableCollisionsBetweenLinkedBodies;

// public:
//     bwConstraint(bwConstraintConstructionInfo* info, bwRigidBody* bodyA, bwRigidBody* bodyB) {
//         switch (info->m_type) {
//             case bwConstraintType::GENERIC_6DOF:
//                 m_constraint = new btGeneric6DofConstraint(
//                     *bodyA->getBody(),
//                     *bodyB->getBody(),
//                     info->m_frameA,
//                     info->m_frameB,
//                     info->m_useLinearReferenceFrameA
//                 );
//                 break;
//             case bwConstraintType::GENERIC_6DOF_SPRING:
//                 m_constraint = new btGeneric6DofSpringConstraint(
//                     *bodyA->getBody(),
//                     *bodyB->getBody(),
//                     info->m_frameA,
//                     info->m_frameB,
//                     info->m_useLinearReferenceFrameA
//                 );
//                 break;
//             default:
//                 m_constraint = nullptr;
//                 break;
//         }

//         if (info->m_type == bwConstraintType::GENERIC_6DOF) {
//             btGeneric6DofConstraint* c = static_cast<btGeneric6DofConstraint*>(m_constraint);
//             c->setLinearLowerLimit(info->m_linearLowerLimit);
//             c->setLinearUpperLimit(info->m_linearUpperLimit);
//             c->setAngularLowerLimit(info->m_angularLowerLimit);
//             c->setAngularUpperLimit(info->m_angularUpperLimit);
//         } else if (info->m_type == bwConstraintType::GENERIC_6DOF_SPRING) {
//             btGeneric6DofSpringConstraint* c = static_cast<btGeneric6DofSpringConstraint*>(m_constraint);
//             c->setLinearLowerLimit(info->m_linearLowerLimit);
//             c->setLinearUpperLimit(info->m_linearUpperLimit);
//             c->setAngularLowerLimit(info->m_angularLowerLimit);
//             c->setAngularUpperLimit(info->m_angularUpperLimit);
            
//             if (info->m_linearStiffness.x() != 0.0f) {
//                 c->setStiffness(0, info->m_linearStiffness.x());
//                 c->enableSpring(0, true);
//             } else {
//                 c->enableSpring(0, false);
//             }

//             if (info->m_linearStiffness.y() != 0.0f) {
//                 c->setStiffness(1, info->m_linearStiffness.y());
//                 c->enableSpring(1, true);
//             } else {
//                 c->enableSpring(1, false);
//             }

//             if (info->m_linearStiffness.z() != 0.0f) {
//                 c->setStiffness(2, info->m_linearStiffness.z());
//                 c->enableSpring(2, true);
//             } else {
//                 c->enableSpring(2, false);
//             }

//             c->setStiffness(3, info->m_angularStiffness.x());
//             c->enableSpring(3, true);
//             c->setStiffness(4, info->m_angularStiffness.y());
//             c->enableSpring(4, true);
//             c->setStiffness(5, info->m_angularStiffness.z());
//             c->enableSpring(5, true);
//         }

//         m_disableCollisionsBetweenLinkedBodies = info->m_disableCollisionsBetweenLinkedBodies;
//     }

//     bwConstraint(bwConstraint const&) = delete;
//     bwConstraint& operator=(bwConstraint const&) = delete;

//     ~bwConstraint() {
//         delete m_constraint;
//     }

//     btTypedConstraint* getConstraint() {
//         return m_constraint;
//     }

//     const btTypedConstraint* getConstraint() const {
//         return m_constraint;
//     }

//     bool getDisableCollisionsBetweenLinkedBodies() const {
//         return m_disableCollisionsBetweenLinkedBodies;
//     }
// };

// extern "C" void* bt_create_constraint(void* info, void* bodyA, void* bodyB) {
//     bwConstraintConstructionInfo* i = static_cast<bwConstraintConstructionInfo*>(info);
//     bwRigidBody* a = static_cast<bwRigidBody*>(bodyA);
//     bwRigidBody* b = static_cast<bwRigidBody*>(bodyB);
//     bwConstraint* constraint = new bwConstraint(i, a, b);
//     return constraint;
// }

// extern "C" void bt_destroy_constraint(void* constraint) {
//     bwConstraint* c = static_cast<bwConstraint*>(constraint);
//     delete c;
// }

//
