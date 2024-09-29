#pragma once

#include "btBulletDynamicsMinimal.h"

ATTRIBUTE_ALIGNED16(struct)
bwMotionState final : public btMotionState
{
	btTransform m_graphicsWorldTrans;
	// btTransform m_startWorldTrans;

	BT_DECLARE_ALIGNED_ALLOCATOR();

	bwMotionState(const btTransform& startTrans = btTransform::getIdentity())
		: m_graphicsWorldTrans(startTrans)
		//   m_startWorldTrans(startTrans)
	{
	}

	///synchronizes world transform from user to physics
	virtual void getWorldTransform(btTransform& centerOfMassWorldTrans) const
	{
		centerOfMassWorldTrans = m_graphicsWorldTrans;
	}

	///synchronizes world transform from physics to user
	///Bullet only calls the update of worldtransform for active objects
	virtual void setWorldTransform(const btTransform& centerOfMassWorldTrans)
	{
		m_graphicsWorldTrans = centerOfMassWorldTrans;
	}
};

class bwMotionStateBundle final
{
private:
    btTransform* m_transforms;
};

extern "C" size_t bw_sizeof_motion_state() {
    return sizeof(bwMotionState);
}

extern "C" void* bw_create_motion_state(float* transformBuffer) {
    btTransform transform;
    transform.setFromOpenGLMatrix(transformBuffer);
    bwMotionState* motionState = new bwMotionState(transform);
    return motionState;
}
