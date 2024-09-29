#pragma once

#include "btBulletDynamicsMinimal.h"

extern "C" void* bw_create_boxshape(float x, float y, float z)
{
    btBoxShape* shape = new btBoxShape(btVector3(x, y, z));
    return shape;
}

extern "C" void* bw_create_sphereshape(float radius)
{
    btSphereShape* shape = new btSphereShape(radius);
    return shape;
}

extern "C" void* bw_create_capsuleshape(float radius, float height)
{
    btCapsuleShape* shape = new btCapsuleShape(radius, height);
    return shape;
}

extern "C" void* bw_create_staticplaneshape(float x, float y, float z, float w)
{
    btStaticPlaneShape* shape = new btStaticPlaneShape(btVector3(x, y, z), w);
    return shape;
}
