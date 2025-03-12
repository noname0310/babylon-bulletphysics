"use strict";(self.webpackChunkbabylon_bulletphysics=self.webpackChunkbabylon_bulletphysics||[]).push([[5635],{1592:(e,t,r)=>{r.d(t,{U:()=>a});class n{_wasmInstance;_ptr;_vector3Buffer1;_vector3Buffer2;_shapeReference;_referenceCount;_shadowCount;constructor(e,t,r){this._wasmInstance=new WeakRef(e),this._ptr=t;const n=e.allocateBuffer(12);this._vector3Buffer1=e.createTypedArray(Float32Array,n,3);const i=e.allocateBuffer(12);this._vector3Buffer2=e.createTypedArray(Float32Array,i,3),this._shapeReference=r,r.addReference(),this._referenceCount=0,this._shadowCount=0}dispose(){if(this._referenceCount>0)throw new Error("Cannot dispose rigid body while it still has references");if(this._shadowCount>0)throw new Error("Cannot dispose rigid body while it still has shadows");if(0===this._ptr)return;const e=this._wasmInstance.deref();void 0!==e&&(e.deallocateBuffer(this._vector3Buffer1.array.byteOffset,12),e.deallocateBuffer(this._vector3Buffer2.array.byteOffset,12),e.destroyRigidBody(this._ptr)),this._ptr=0,this._shapeReference.removeReference(),this._shapeReference=null}get ptr(){return this._ptr}get vector3Buffer1(){return this._vector3Buffer1}get vector3Buffer2(){return this._vector3Buffer2}addReference(){this._referenceCount+=1}removeReference(){this._referenceCount-=1}get hasReferences(){return 0<this._referenceCount}addShadow(){this._shadowCount+=1}removeShadow(){this._shadowCount-=1}get hasShadows(){return 0<this._shadowCount}}function i(e){e.dispose()}const s=new WeakMap;class a{runtime;_motionStatePtr;_bufferedMotionStatePtr;_worldTransformPtr;_temporalKinematicStatePtr;_inner;_worldReference;impl;isDynamic;constructor(e,t,r){const a=void 0!==r?t.getPtr(r):t.ptr;if(0===a)throw new Error("Cannot create rigid body with null pointer");let o;if(o=void 0!==r?t.getShape(r):t.shape,null===o)throw new Error("Cannot create rigid body with null shape");if(o.runtime!==e)throw new Error("Cannot create rigid body with shapes from different runtimes");const h=void 0!==r?0===t.getMotionType(r):0===t.motionType;this.runtime=e;const c=e.wasmInstance,l=c.createRigidBody(a),u=c.rigidBodyGetMotionStatePtr(l);this._motionStatePtr=c.createTypedArray(Float32Array,u,20);const f=c.rigidBodyGetBufferedMotionStatePtr(l);if(this._bufferedMotionStatePtr=c.createTypedArray(Float32Array,f,20),h){const e=c.rigidBodyGetWorldTransformPtr(l);this._worldTransformPtr=c.createTypedArray(Float32Array,e,16)}else this._worldTransformPtr=null;const m=c.rigidBodyGetTemporalKinematicStatePtr(l);this._temporalKinematicStatePtr=c.createTypedArray(Uint8Array,m,1),this._inner=new n(e.wasmInstance,l,o),this._worldReference=null;let _=s.get(c);void 0===_&&(_=new FinalizationRegistry(i),s.set(c,_)),_.register(this,this._inner,this),this.impl=e.createRigidBodyImpl(),this.isDynamic=h}dispose(){if(0===this._inner.ptr)return;this._inner.dispose();const e=s.get(this.runtime.wasmInstance);e?.unregister(this)}get ptr(){return this._inner.ptr}addReference(){this._inner.addReference()}removeReference(){this._inner.removeReference()}addShadowReference(){this._inner.addShadow()}removeShadowReference(){this._inner.removeShadow()}get hasShadows(){return this._inner.hasShadows}setWorldReference(e){if(null!==this._worldReference&&null!==e)throw new Error("Cannot add rigid body to multiple worlds");this._worldReference!==e&&(this._worldReference=e,null!==this._worldReference?this._inner.addReference():this._inner.removeReference())}getWorldReference(){return this._worldReference}updateBufferedMotionState(e){if(this._nullCheck(),e){const e=this.runtime.wasmInstance.rigidBodyGetMotionStatePtr(this._inner.ptr);this._bufferedMotionStatePtr=this.runtime.wasmInstance.createTypedArray(Float32Array,e,20)}else{const e=this.runtime.wasmInstance.rigidBodyGetBufferedMotionStatePtr(this._inner.ptr);this._bufferedMotionStatePtr=this.runtime.wasmInstance.createTypedArray(Float32Array,e,20)}}_nullCheck(){if(0===this._inner.ptr)throw new Error("Cannot access disposed rigid body")}getTransformMatrixToRef(e){this._nullCheck(),this._inner.hasReferences&&this.impl.shouldSync&&this.runtime.lock.wait();const t=this._bufferedMotionStatePtr.array;return e.set(t[4],t[8],t[12],0,t[5],t[9],t[13],0,t[6],t[10],t[14],0,t[16],t[17],t[18],1)}getTransformMatrixToArray(e,t=0){this._nullCheck(),this._inner.hasReferences&&this.impl.shouldSync&&this.runtime.lock.wait();const r=this._bufferedMotionStatePtr.array;e[t+0]=r[4],e[t+1]=r[8],e[t+2]=r[12],e[t+3]=0,e[t+4]=r[5],e[t+5]=r[9],e[t+6]=r[13],e[t+7]=0,e[t+8]=r[6],e[t+9]=r[10],e[t+10]=r[14],e[t+11]=0,e[t+12]=r[16],e[t+13]=r[17],e[t+14]=r[18],e[t+15]=1}setTransformMatrix(e){this.setTransformMatrixFromArray(e.m,0)}setTransformMatrixFromArray(e,t=0){this._nullCheck(),this._inner.hasReferences&&this.impl.shouldSync&&this.runtime.lock.wait(),this.impl.setTransformMatrixFromArray(this._motionStatePtr,this._temporalKinematicStatePtr,e,t)}setDynamicTransformMatrix(e,t=!1){this.setDynamicTransformMatrixFromArray(e.m,0,t)}setDynamicTransformMatrixFromArray(e,t=0,r=!1){if(null===this._worldTransformPtr){if(r)return void this.setTransformMatrixFromArray(e,t);throw new Error("Cannot set dynamic transform of non-dynamic body")}this._nullCheck(),this._inner.hasReferences&&this.impl.shouldSync&&this.runtime.lock.wait(),this.impl.setDynamicTransformMatrixFromArray(this._worldTransformPtr,e,t)}setDamping(e,t){this._nullCheck(),this._inner.hasReferences&&this.impl.shouldSync&&this.runtime.lock.wait(),this.impl.setDamping(this.runtime.wasmInstance,this._inner.ptr,e,t)}getLinearDamping(){return this._nullCheck(),this.impl.getLinearDamping(this.runtime.wasmInstance,this._inner.ptr)}getAngularDamping(){return this._nullCheck(),this.impl.getAngularDamping(this.runtime.wasmInstance,this._inner.ptr)}setMassProps(e,t){this._nullCheck(),this._inner.hasReferences&&this.impl.shouldSync&&this.runtime.lock.wait(),this.impl.setMassProps(this.runtime.wasmInstance,this._inner.ptr,e,t)}getMass(){return this._nullCheck(),this.impl.getMass(this.runtime.wasmInstance,this._inner.ptr)}getLocalInertia(){return this._nullCheck(),this.impl.getLocalInertia(this.runtime.wasmInstance,this._inner.ptr)}translate(e){this._nullCheck(),this._inner.hasReferences&&this.impl.shouldSync&&this.runtime.lock.wait(),this.impl.translate(this.runtime.wasmInstance,this._inner.ptr,e)}get needToCommit(){return this.impl.needToCommit??!1}commitToWasm(){if(void 0===this.impl.commitToWasm)throw new Error("commit only avalible on buffered evaluation mode");this._nullCheck(),this.runtime.lock.wait(),this.impl.commitToWasm(this.runtime.wasmInstance,this._inner.ptr,this._motionStatePtr,this._temporalKinematicStatePtr,this._worldTransformPtr)}getTotalForceToRef(e){this._nullCheck(),this._inner.hasReferences&&this.runtime.lock.wait();const t=this._inner.vector3Buffer1.array;return this.runtime.wasmInstance.rigidBodyGetTotalForce(this._inner.ptr,t.byteOffset),e.set(t[0],t[1],t[2])}getTotalTorqueToRef(e){this._nullCheck(),this._inner.hasReferences&&this.runtime.lock.wait();const t=this._inner.vector3Buffer1.array;return this.runtime.wasmInstance.rigidBodyGetTotalTorque(this._inner.ptr,t.byteOffset),e.set(t[0],t[1],t[2])}applyCentralForce(e){this._nullCheck(),this._inner.hasReferences&&this.runtime.lock.wait(),this.runtime.wasmInstance.rigidBodyApplyCentralForce(this._inner.ptr,e.x,e.y,e.z)}applyTorque(e){this._nullCheck(),this._inner.hasReferences&&this.runtime.lock.wait(),this.runtime.wasmInstance.rigidBodyApplyTorque(this._inner.ptr,e.x,e.y,e.z)}applyForce(e,t){this._nullCheck(),this._inner.hasReferences&&this.runtime.lock.wait();const r=this._inner.vector3Buffer1.array;r[0]=e.x,r[1]=e.y,r[2]=e.z;const n=this._inner.vector3Buffer2.array;n[0]=t.x,n[1]=t.y,n[2]=t.z,this.runtime.wasmInstance.rigidBodyApplyForce(this._inner.ptr,r.byteOffset,n.byteOffset)}applyCentralImpulse(e){this._nullCheck(),this._inner.hasReferences&&this.runtime.lock.wait(),this.runtime.wasmInstance.rigidBodyApplyCentralImpulse(this._inner.ptr,e.x,e.y,e.z)}applyTorqueImpulse(e){this._nullCheck(),this._inner.hasReferences&&this.runtime.lock.wait(),this.runtime.wasmInstance.rigidBodyApplyTorqueImpulse(this._inner.ptr,e.x,e.y,e.z)}applyImpulse(e,t){this._nullCheck(),this._inner.hasReferences&&this.runtime.lock.wait();const r=this._inner.vector3Buffer1.array;r[0]=e.x,r[1]=e.y,r[2]=e.z;const n=this._inner.vector3Buffer2.array;n[0]=t.x,n[1]=t.y,n[2]=t.z,this.runtime.wasmInstance.rigidBodyApplyImpulse(this._inner.ptr,r.byteOffset,n.byteOffset)}applyPushImpulse(e,t){this._nullCheck(),this._inner.hasReferences&&this.runtime.lock.wait();const r=this._inner.vector3Buffer1.array;r[0]=e.x,r[1]=e.y,r[2]=e.z;const n=this._inner.vector3Buffer2.array;n[0]=t.x,n[1]=t.y,n[2]=t.z,this.runtime.wasmInstance.rigidBodyApplyPushImpulse(this._inner.ptr,r.byteOffset,n.byteOffset)}getPushVelocityToRef(e){this._nullCheck(),this._inner.hasReferences&&this.runtime.lock.wait();const t=this._inner.vector3Buffer1.array;return this.runtime.wasmInstance.rigidBodyGetPushVelocity(this._inner.ptr,t.byteOffset),e.set(t[0],t[1],t[2])}getTurnVelocityToRef(e){this._nullCheck(),this._inner.hasReferences&&this.runtime.lock.wait();const t=this._inner.vector3Buffer1.array;return this.runtime.wasmInstance.rigidBodyGetTurnVelocity(this._inner.ptr,t.byteOffset),e.set(t[0],t[1],t[2])}setPushVelocity(e){this._nullCheck(),this._inner.hasReferences&&this.runtime.lock.wait(),this.runtime.wasmInstance.rigidBodySetPushVelocity(this._inner.ptr,e.x,e.y,e.z)}setTurnVelocity(e){this._nullCheck(),this._inner.hasReferences&&this.runtime.lock.wait(),this.runtime.wasmInstance.rigidBodySetTurnVelocity(this._inner.ptr,e.x,e.y,e.z)}applyCentralPushImpulse(e){this._nullCheck(),this._inner.hasReferences&&this.runtime.lock.wait(),this.runtime.wasmInstance.rigidBodyApplyCentralPushImpulse(this._inner.ptr,e.x,e.y,e.z)}applyTorqueTurnImpulse(e){this._nullCheck(),this._inner.hasReferences&&this.runtime.lock.wait(),this.runtime.wasmInstance.rigidBodyApplyTorqueTurnImpulse(this._inner.ptr,e.x,e.y,e.z)}clearForces(){this._nullCheck(),this._inner.hasReferences&&this.runtime.lock.wait(),this.runtime.wasmInstance.rigidBodyClearForces(this._inner.ptr)}getLinearVelocityToRef(e){this._nullCheck(),this._inner.hasReferences&&this.runtime.lock.wait();const t=this._inner.vector3Buffer1.array;return this.runtime.wasmInstance.rigidBodyGetLinearVelocity(this._inner.ptr,t.byteOffset),e.set(t[0],t[1],t[2])}getAngularVelocityToRef(e){this._nullCheck(),this._inner.hasReferences&&this.runtime.lock.wait();const t=this._inner.vector3Buffer1.array;return this.runtime.wasmInstance.rigidBodyGetAngularVelocity(this._inner.ptr,t.byteOffset),e.set(t[0],t[1],t[2])}setLinearVelocity(e){this._nullCheck(),this._inner.hasReferences&&this.runtime.lock.wait(),this.runtime.wasmInstance.rigidBodySetLinearVelocity(this._inner.ptr,e.x,e.y,e.z)}setAngularVelocity(e){this._nullCheck(),this._inner.hasReferences&&this.runtime.lock.wait(),this.runtime.wasmInstance.rigidBodySetAngularVelocity(this._inner.ptr,e.x,e.y,e.z)}getVelocityInLocalPointToRef(e,t){this._nullCheck(),this._inner.hasReferences&&this.runtime.lock.wait();const r=this._inner.vector3Buffer1.array,n=this._inner.vector3Buffer2.array;return r[0]=e.x,r[1]=e.y,r[2]=e.z,this.runtime.wasmInstance.rigidBodyGetVelocityInLocalPoint(this._inner.ptr,r.byteOffset,n.byteOffset),t.set(n[0],n[1],n[2])}getPushVelocityInLocalPointToRef(e,t){this._nullCheck(),this._inner.hasReferences&&this.runtime.lock.wait();const r=this._inner.vector3Buffer1.array,n=this._inner.vector3Buffer2.array;return r[0]=e.x,r[1]=e.y,r[2]=e.z,this.runtime.wasmInstance.rigidBodyGetPushVelocityInLocalPoint(this._inner.ptr,r.byteOffset,n.byteOffset),t.set(n[0],n[1],n[2])}}},7168:(e,t,r)=>{r.d(t,{o6:()=>h,vC:()=>c});class n{_wasmInstance;_ptr;_bodyReference;_referenceCount;constructor(e,t,r){this._wasmInstance=e,this._ptr=t,this._bodyReference=r,Array.isArray(r)?(r[0].addReference(),r[1].addReference()):r.addReference(),this._referenceCount=0}dispose(){if(this._referenceCount>0)throw new Error("Cannot dispose constraint while it still has references");0!==this._ptr&&(this._wasmInstance.deref()?.destroyConstraint(this._ptr),this._ptr=0,Array.isArray(this._bodyReference)?(this._bodyReference[0].removeReference(),this._bodyReference[1].removeReference()):this._bodyReference.removeReference(),this._bodyReference=null)}get ptr(){return this._ptr}addReference(){this._referenceCount+=1}removeReference(){this._referenceCount-=1}get hasReferences(){return 0<this._referenceCount}}function i(e){e.dispose()}const s=new WeakMap;class a{runtime;_inner;_worldReference;constructor(e,t,r){if(Array.isArray(r)){if(r[0].runtime!==e||r[1].runtime!==e)throw new Error("Cannot create constraint between bodies from different runtimes")}else if(r.runtime!==e)throw new Error("Cannot create constraint between body and bundle from different runtimes");this.runtime=e,this._inner=new n(new WeakRef(e.wasmInstance),t,r),this._worldReference=null;let a=s.get(e.wasmInstance);void 0===a&&(a=new FinalizationRegistry(i),s.set(e.wasmInstance,a)),a.register(this,this._inner,this)}dispose(){if(0===this._inner.ptr)return;this._inner.dispose();const e=s.get(this.runtime.wasmInstance);e?.unregister(this)}get ptr(){return this._inner.ptr}addReference(){this._inner.addReference()}removeReference(){this._inner.removeReference()}setWorldReference(e){if(null!==this._worldReference&&null!==e)throw new Error("Cannot add constraint to multiple worlds");this._worldReference!==e&&(this._worldReference=e,null!==e?this._inner.addReference():this._inner.removeReference())}}const o=64;class h extends a{constructor(e,t,r,n,i,s){const a=e.wasmInstance,h=a.allocateBuffer(o),c=a.createTypedArray(Float32Array,h,16);n.copyToArray(c.array);const l=a.allocateBuffer(o),u=a.createTypedArray(Float32Array,l,16);i.copyToArray(u.array);const f=Array.isArray(r),m=f?a.createGeneric6DofConstraintFromBundle(t.ptr,r[0],r[1],h,l,s):a.createGeneric6DofConstraint(t.ptr,r.ptr,h,l,s);a.deallocateBuffer(h,o),a.deallocateBuffer(l,o),super(e,m,f?t:[t,r])}setLinearLowerLimit(e){this._inner.hasReferences&&this.runtime.lock.wait(),this.runtime.wasmInstance.constraintSetLinearLowerLimit(this._inner.ptr,e.x,e.y,e.z)}setLinearUpperLimit(e){this._inner.hasReferences&&this.runtime.lock.wait(),this.runtime.wasmInstance.constraintSetLinearUpperLimit(this._inner.ptr,e.x,e.y,e.z)}setAngularLowerLimit(e){this._inner.hasReferences&&this.runtime.lock.wait(),this.runtime.wasmInstance.constraintSetAngularLowerLimit(this._inner.ptr,e.x,e.y,e.z)}setAngularUpperLimit(e){this._inner.hasReferences&&this.runtime.lock.wait(),this.runtime.wasmInstance.constraintSetAngularUpperLimit(this._inner.ptr,e.x,e.y,e.z)}}class c extends a{constructor(e,t,r,n,i,s){const a=e.wasmInstance,h=a.allocateBuffer(o),c=a.createTypedArray(Float32Array,h,16);n.copyToArray(c.array);const l=a.allocateBuffer(o),u=a.createTypedArray(Float32Array,l,16);i.copyToArray(u.array);const f=Array.isArray(r),m=f?a.createGeneric6DofSpringConstraintFromBundle(t.ptr,r[0],r[1],h,l,s):a.createGeneric6DofSpringConstraint(t.ptr,r.ptr,h,l,s);a.deallocateBuffer(h,o),a.deallocateBuffer(l,o),super(e,m,f?t:[t,r])}setLinearLowerLimit(e){this._inner.hasReferences&&this.runtime.lock.wait(),this.runtime.wasmInstance.constraintSetLinearLowerLimit(this._inner.ptr,e.x,e.y,e.z)}setLinearUpperLimit(e){this._inner.hasReferences&&this.runtime.lock.wait(),this.runtime.wasmInstance.constraintSetLinearUpperLimit(this._inner.ptr,e.x,e.y,e.z)}setAngularLowerLimit(e){this._inner.hasReferences&&this.runtime.lock.wait(),this.runtime.wasmInstance.constraintSetAngularLowerLimit(this._inner.ptr,e.x,e.y,e.z)}setAngularUpperLimit(e){this._inner.hasReferences&&this.runtime.lock.wait(),this.runtime.wasmInstance.constraintSetAngularUpperLimit(this._inner.ptr,e.x,e.y,e.z)}enableSpring(e,t){this._inner.hasReferences&&this.runtime.lock.wait(),this.runtime.wasmInstance.constraintEnableSpring(this._inner.ptr,e,t)}setStiffness(e,t){this._inner.hasReferences&&this.runtime.lock.wait(),this.runtime.wasmInstance.constraintSetStiffness(this._inner.ptr,e,t)}setDamping(e,t){this._inner.hasReferences&&this.runtime.lock.wait(),this.runtime.wasmInstance.constraintSetDamping(this._inner.ptr,e,t)}}}}]);