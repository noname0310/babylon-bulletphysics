"use strict";(self.webpackChunkbabylon_bulletphysics=self.webpackChunkbabylon_bulletphysics||[]).push([[6594],{3477:(t,e,r)=>{r.d(e,{x:()=>o});class n{_wasmInstance;_ptr;_count;_shapeReferences;constructor(t,e,r){this._wasmInstance=t,this._ptr=e,this._count=r,this._shapeReferences=new Array(r).fill(null)}dispose(){if(0!==this._ptr){this._wasmInstance.deref()?.deallocateBuffer(this._ptr,144*this._count),this._ptr=0;for(let t=0;t<this._shapeReferences.length;++t){const e=this._shapeReferences[t];e?.removeReference()}this._shapeReferences.fill(null)}}get ptr(){return this._ptr}get count(){return this._count}getShape(t){return this._shapeReferences[t]??null}setShape(t,e){if(t<0||this._count<=t)throw new RangeError("Index out of range");const r=this._shapeReferences[t];r&&r.removeReference(),this._shapeReferences[t]=e,e&&e.addReference()}}function i(t){t.dispose()}const s=new WeakMap;class o{_wasmInstance;_uint32Ptr;_float32Ptr;_uint8Ptr;_uint16Ptr;_inner;constructor(t,e){this._wasmInstance=t;const r=t.allocateBuffer(144*e);this._uint32Ptr=t.createTypedArray(Uint32Array,r,36*e),this._float32Ptr=t.createTypedArray(Float32Array,r,36*e),this._uint8Ptr=t.createTypedArray(Uint8Array,r,144*e),this._uint16Ptr=t.createTypedArray(Uint16Array,r,72*e),this._inner=new n(new WeakRef(t),r,e);const o=this._uint32Ptr.array,a=this._float32Ptr.array,h=this._uint8Ptr.array,c=this._uint16Ptr.array;for(let t=0;t<e;++t){const e=144*t;o[(e+0)/4]=0,a[(e+16)/4+0]=1,a[(e+16)/4+1]=0,a[(e+16)/4+2]=0,a[(e+16)/4+3]=0,a[(e+16)/4+4]=0,a[(e+16)/4+5]=1,a[(e+16)/4+6]=0,a[(e+16)/4+7]=0,a[(e+16)/4+8]=0,a[(e+16)/4+9]=0,a[(e+16)/4+10]=1,a[(e+16)/4+11]=0,a[(e+16)/4+12]=0,a[(e+16)/4+13]=0,a[(e+16)/4+14]=0,a[(e+16)/4+15]=1,c[(e+80)/2]=0,h[(e+82)/1]=0,a[(e+84)/4]=1,a[(e+88)/4+0]=0,a[(e+88)/4+1]=0,a[(e+88)/4+2]=0,a[(e+100)/4]=0,a[(e+104)/4]=0,a[(e+108)/4]=.5,a[(e+112)/4]=0,a[(e+116)/4]=0,a[(e+120)/4]=1,c[(e+124)/2]=1,c[(e+126)/2]=65535,h[(e+128)/1]=0,h[(e+129)/1]=0,h[(e+130)/1]=0}let l=s.get(t);void 0===l&&(l=new FinalizationRegistry(i),s.set(t,l)),l.register(this,this._inner,this)}dispose(){if(0===this._inner.ptr)return;this._inner.dispose();const t=s.get(this._wasmInstance);t?.unregister(this)}get ptr(){return this._inner.ptr}get count(){return this._inner.count}getPtr(t){return this._nullCheck(),this._inner.ptr+144*t}_nullCheck(){if(0===this._inner.ptr)throw new Error("Cannot access disposed RigidBodyConstructionInfo")}getShape(t){return this._nullCheck(),this._inner.getShape(t)}setShape(t,e){this._nullCheck(),this._inner.setShape(t,e);const r=144*t;this._uint32Ptr.array[(r+0)/4]=e?e.ptr:0}getInitialTransformToRef(t,e){this._nullCheck();const r=144*t,n=this._float32Ptr.array;return e.set(n[(r+16)/4+0],n[(r+16)/4+1],n[(r+16)/4+2],n[(r+16)/4+3],n[(r+16)/4+4],n[(r+16)/4+5],n[(r+16)/4+6],n[(r+16)/4+7],n[(r+16)/4+8],n[(r+16)/4+9],n[(r+16)/4+10],n[(r+16)/4+11],n[(r+16)/4+12],n[(r+16)/4+13],n[(r+16)/4+14],n[(r+16)/4+15]),e}setInitialTransform(t,e){this._nullCheck();const r=144*t,n=this._float32Ptr.array;e.copyToArray(n,(r+16)/4)}getMotionType(t){this._nullCheck();const e=144*t;return this._uint8Ptr.array[(e+82)/1]}setMotionType(t,e){this._nullCheck();const r=144*t;this._uint8Ptr.array[(r+82)/1]=e}getMass(t){this._nullCheck();const e=144*t;return this._float32Ptr.array[(e+84)/4]}setMass(t,e){this._nullCheck();const r=144*t;this._float32Ptr.array[(r+84)/4]=e}getLocalInertiaToRef(t,e){this._nullCheck();const r=144*t;if(!(1&this._uint16Ptr.array[(r+80)/2]))return null;const n=this._float32Ptr.array;return e.set(n[(r+88)/4+0],n[(r+88)/4+1],n[(r+88)/4+2]),e}setLocalInertia(t,e){this._nullCheck();const r=144*t;if(null===e)return void(this._uint16Ptr.array[(r+80)/2]&=-2);this._uint16Ptr.array[(r+80)/2]|=1;const n=this._float32Ptr.array;n[(r+88)/4+0]=e.x,n[(r+88)/4+1]=e.y,n[(r+88)/4+2]=e.z}getLinearDamping(t){this._nullCheck();const e=144*t;return this._float32Ptr.array[(e+100)/4]}setLinearDamping(t,e){this._nullCheck();const r=144*t;this._float32Ptr.array[(r+100)/4]=e}getAngularDamping(t){this._nullCheck();const e=144*t;return this._float32Ptr.array[(e+104)/4]}setAngularDamping(t,e){this._nullCheck();const r=144*t;this._float32Ptr.array[(r+104)/4]=e}getFriction(t){this._nullCheck();const e=144*t;return this._float32Ptr.array[(e+108)/4]}setFriction(t,e){this._nullCheck();const r=144*t;this._float32Ptr.array[(r+108)/4]=e}getRestitution(t){this._nullCheck();const e=144*t;return this._float32Ptr.array[(e+112)/4]}setRestitution(t,e){this._nullCheck();const r=144*t;this._float32Ptr.array[(r+112)/4]=e}getLinearSleepingThreshold(t){this._nullCheck();const e=144*t;return this._float32Ptr.array[(e+116)/4]}setLinearSleepingThreshold(t,e){this._nullCheck();const r=144*t;this._float32Ptr.array[(r+116)/4]=e}getAngularSleepingThreshold(t){this._nullCheck();const e=144*t;return this._float32Ptr.array[(e+120)/4]}setAngularSleepingThreshold(t,e){this._nullCheck();const r=144*t;this._float32Ptr.array[(r+120)/4]=e}getCollisionGroup(t){this._nullCheck();const e=144*t;return this._uint16Ptr.array[(e+124)/2]}setCollisionGroup(t,e){this._nullCheck();const r=144*t;this._uint16Ptr.array[(r+124)/2]=e}getCollisionMask(t){this._nullCheck();const e=144*t;return this._uint16Ptr.array[(e+126)/2]}setCollisionMask(t,e){this._nullCheck();const r=144*t;this._uint16Ptr.array[(r+126)/2]=e}getAdditionalDamping(t){this._nullCheck();const e=144*t;return!!this._uint8Ptr.array[(e+128)/1]}setAdditionalDamping(t,e){this._nullCheck();const r=144*t;this._uint8Ptr.array[(r+128)/1]=+e}getNoContactResponse(t){this._nullCheck();const e=144*t;return!!this._uint8Ptr.array[(e+129)/1]}setNoContactResponse(t,e){this._nullCheck();const r=144*t;this._uint8Ptr.array[(r+129)/1]=+e}getDisableDeactivation(t){this._nullCheck();const e=144*t;return!!this._uint8Ptr.array[(e+130)/1]}setDisableDeactivation(t,e){this._nullCheck();const r=144*t;this._uint8Ptr.array[(r+130)/1]=+e}}},7648:(t,e,r)=>{r.d(e,{Y:()=>o});class n{_wasmInstance;_ptr;_vector3Buffer1;_vector3Buffer2;_shapeReferences;_referenceCount;_shadowCount;constructor(t,e,r){this._wasmInstance=new WeakRef(t),this._ptr=e;const n=t.allocateBuffer(12);this._vector3Buffer1=t.createTypedArray(Float32Array,n,3);const i=t.allocateBuffer(12);this._vector3Buffer2=t.createTypedArray(Float32Array,i,3),this._shapeReferences=r;for(const t of r)t.addReference();this._referenceCount=0,this._shadowCount=0}dispose(){if(this._referenceCount>0)throw new Error("Cannot dispose rigid body bundle while it still has references");if(0===this._ptr)return;const t=this._wasmInstance.deref();void 0!==t&&(t.deallocateBuffer(this._vector3Buffer1.array.byteOffset,12),t.deallocateBuffer(this._vector3Buffer2.array.byteOffset,12),t.destroyRigidBodyBundle(this._ptr)),this._ptr=0;for(const t of this._shapeReferences)t.removeReference();this._shapeReferences.clear()}get ptr(){return this._ptr}get vector3Buffer1(){return this._vector3Buffer1}get vector3Buffer2(){return this._vector3Buffer2}addReference(){this._referenceCount+=1}removeReference(){this._referenceCount-=1}get hasReferences(){return 0<this._referenceCount}addShadow(){this._shadowCount+=1}removeShadow(){this._shadowCount-=1}get hasShadows(){return 0<this._shadowCount}}function i(t){t.dispose()}const s=new WeakMap;class o{runtime;_motionStatesPtr;_bufferedMotionStatesPtr;_worldTransformPtrArray;_temporalKinematicStatesPtr;_inner;_count;_worldReference;impl;isContainsDynamic;constructor(t,e){if(0===e.ptr)throw new Error("Cannot create rigid body bundle with null pointer");const r=e.count,o=new Set;for(let n=0;n<r;++n){const r=e.getShape(n);if(null===r)throw new Error("Cannot create rigid body bundle with null shape");if(r.runtime!==t)throw new Error("Cannot create rigid body bundle with shapes from different runtimes");o.add(r)}this.runtime=t;const a=t.wasmInstance,h=a.createRigidBodyBundle(e.ptr,r),c=a.rigidBodyBundleGetMotionStatesPtr(h);this._motionStatesPtr=a.createTypedArray(Float32Array,c,20*r);const l=a.rigidBodyBundleGetBufferedMotionStatesPtr(h);this._bufferedMotionStatesPtr=a.createTypedArray(Float32Array,l,20*r);const u=[];let f=!1;for(let t=0;t<r;++t)if(0===e.getMotionType(t)){f=!0;const e=a.rigidBodyBundleGetWorldTransformPtr(h,t);u.push(a.createTypedArray(Float32Array,e,16))}else u.push(null);this._worldTransformPtrArray=u;const _=a.rigidBodyBundleGetTemporalKinematicStatesPtr(h);this._temporalKinematicStatesPtr=a.createTypedArray(Uint8Array,_,r),this._inner=new n(t.wasmInstance,h,o),this._count=r,this._worldReference=null;let d=s.get(a);void 0===d&&(d=new FinalizationRegistry(i),s.set(a,d)),d.register(this,this._inner,this),this.impl=t.createRigidBodyBundleImpl(this),this.isContainsDynamic=f}dispose(){if(0===this._inner.ptr)return;this._inner.dispose();const t=s.get(this.runtime.wasmInstance);t?.unregister(this)}get ptr(){return this._inner.ptr}get count(){return this._count}addReference(){this._inner.addReference()}removeReference(){this._inner.removeReference()}addShadowReference(){this._inner.addShadow()}removeShadowReference(){this._inner.removeShadow()}get hasShadows(){return this._inner.hasShadows}setWorldReference(t){if(null!==this._worldReference&&null!==t)throw new Error("Cannot add rigid body bundle to multiple worlds");this._worldReference!==t&&(this._worldReference=t,null!==t?this._inner.addReference():this._inner.removeReference())}getWorldReference(){return this._worldReference}updateBufferedMotionStates(t){if(this._nullCheck(),t){const t=this.runtime.wasmInstance.rigidBodyBundleGetMotionStatesPtr(this._inner.ptr);this._bufferedMotionStatesPtr=this.runtime.wasmInstance.createTypedArray(Float32Array,t,20*this._count)}else{const t=this.runtime.wasmInstance.rigidBodyBundleGetBufferedMotionStatesPtr(this._inner.ptr);this._bufferedMotionStatesPtr=this.runtime.wasmInstance.createTypedArray(Float32Array,t,20*this._count)}}_nullCheck(){if(0===this._inner.ptr)throw new Error("Cannot access disposed rigid body bundle")}getTransformMatrixToRef(t,e){if(this._nullCheck(),t<0||this._count<=t)throw new RangeError("Index out of range");this._inner.hasReferences&&this.impl.shouldSync&&this.runtime.lock.wait();const r=this._bufferedMotionStatesPtr.array,n=20*t;return e.set(r[n+4+0],r[n+8+0],r[n+12+0],0,r[n+4+1],r[n+8+1],r[n+12+1],0,r[n+4+2],r[n+8+2],r[n+12+2],0,r[n+16+0],r[n+16+1],r[n+16+2],1)}getTransformMatrixToArray(t,e,r=0){if(this._nullCheck(),t<0||this._count<=t)throw new RangeError("Index out of range");this._inner.hasReferences&&this.impl.shouldSync&&this.runtime.lock.wait();const n=this._bufferedMotionStatesPtr.array,i=20*t;e[r+0]=n[i+4+0],e[r+1]=n[i+8+0],e[r+2]=n[i+12+0],e[r+3]=0,e[r+4]=n[i+4+1],e[r+5]=n[i+8+1],e[r+6]=n[i+12+1],e[r+7]=0,e[r+8]=n[i+4+2],e[r+9]=n[i+8+2],e[r+10]=n[i+12+2],e[r+11]=0,e[r+12]=n[i+16+0],e[r+13]=n[i+16+1],e[r+14]=n[i+16+2],e[r+15]=1}getTransformMatricesToArray(t,e=0){this._nullCheck(),this._inner.hasReferences&&this.impl.shouldSync&&this.runtime.lock.wait();const r=this._bufferedMotionStatesPtr.array,n=this._count;let i=0,s=e;for(let e=0;e<n;++e)t[s+0]=r[i+4+0],t[s+1]=r[i+8+0],t[s+2]=r[i+12+0],t[s+3]=0,t[s+4]=r[i+4+1],t[s+5]=r[i+8+1],t[s+6]=r[i+12+1],t[s+7]=0,t[s+8]=r[i+4+2],t[s+9]=r[i+8+2],t[s+10]=r[i+12+2],t[s+11]=0,t[s+12]=r[i+16+0],t[s+13]=r[i+16+1],t[s+14]=r[i+16+2],t[s+15]=1,i+=20,s+=16}setTransformMatrix(t,e){this.setTransformMatrixFromArray(t,e.m,0)}setTransformMatrixFromArray(t,e,r=0){if(this._nullCheck(),t<0||this._count<=t)throw new RangeError("Index out of range");this._inner.hasReferences&&this.impl.shouldSync&&this.runtime.lock.wait(),this.impl.setTransformMatrixFromArray(this._motionStatesPtr,this._temporalKinematicStatesPtr,t,e,r)}setTransformMatricesFromArray(t,e=0){if(this._nullCheck(),t.length<16*this._count)throw new RangeError("Array is too short");this._inner.hasReferences&&this.impl.shouldSync&&this.runtime.lock.wait(),this.impl.setTransformMatricesFromArray(this._motionStatesPtr,this._temporalKinematicStatesPtr,t,e)}setDynamicTransformMatrix(t,e,r=!1){this.setDynamicTransformMatrixFromArray(t,e.m,0,r)}setDynamicTransformMatrixFromArray(t,e,r=0,n=!1){if(null===this._worldTransformPtrArray[t]){if(n)return void this.setTransformMatrixFromArray(t,e,r);throw new Error("Cannot set dynamic transform of non-dynamic body")}if(this._nullCheck(),t<0||this._count<=t)throw new RangeError("Index out of range");this._inner.hasReferences&&this.impl.shouldSync&&this.runtime.lock.wait(),this.impl.setDynamicTransformMatrixFromArray(this._worldTransformPtrArray,t,e,r)}setDamping(t,e,r){if(this._nullCheck(),t<0||this._count<=t)throw new RangeError("Index out of range");this._inner.hasReferences&&this.impl.shouldSync&&this.runtime.lock.wait(),this.impl.setDamping(this.runtime.wasmInstance,this._inner.ptr,t,e,r)}getLinearDamping(t){if(this._nullCheck(),t<0||this._count<=t)throw new RangeError("Index out of range");return this._inner.hasReferences&&this.impl.shouldSync&&this.runtime.lock.wait(),this.impl.getLinearDamping(this.runtime.wasmInstance,this._inner.ptr,t)}getAngularDamping(t){if(this._nullCheck(),t<0||this._count<=t)throw new RangeError("Index out of range");return this._inner.hasReferences&&this.impl.shouldSync&&this.runtime.lock.wait(),this.impl.getAngularDamping(this.runtime.wasmInstance,this._inner.ptr,t)}setMassProps(t,e,r){if(this._nullCheck(),t<0||this._count<=t)throw new RangeError("Index out of range");this._inner.hasReferences&&this.impl.shouldSync&&this.runtime.lock.wait(),this.impl.setMassProps(this.runtime.wasmInstance,this._inner.ptr,t,e,r)}getMass(t){if(this._nullCheck(),t<0||this._count<=t)throw new RangeError("Index out of range");return this._inner.hasReferences&&this.impl.shouldSync&&this.runtime.lock.wait(),this.impl.getMass(this.runtime.wasmInstance,this._inner.ptr,t)}getLocalInertia(t){if(this._nullCheck(),t<0||this._count<=t)throw new RangeError("Index out of range");return this._inner.hasReferences&&this.impl.shouldSync&&this.runtime.lock.wait(),this.impl.getLocalInertia(this.runtime.wasmInstance,this._inner.ptr,t)}translate(t,e){if(this._nullCheck(),t<0||this._count<=t)throw new RangeError("Index out of range");this._inner.hasReferences&&this.impl.shouldSync&&this.runtime.lock.wait(),this.impl.translate(this.runtime.wasmInstance,this._inner.ptr,t,e)}get needToCommit(){return this.impl.needToCommit??!1}commitToWasm(){if(void 0===this.impl.commitToWasm)throw new Error("commit only avalible on buffered evaluation mode");this._nullCheck(),this.runtime.lock.wait(),this.impl.commitToWasm(this.runtime.wasmInstance,this._inner.ptr,this._motionStatesPtr,this._temporalKinematicStatesPtr,this._worldTransformPtrArray)}getTotalForceToRef(t,e){if(this._nullCheck(),t<0||this._count<=t)throw new RangeError("Index out of range");this._inner.hasReferences&&this.runtime.lock.wait();const r=this._inner.vector3Buffer1.array;return this.runtime.wasmInstance.rigidBodyBundleGetTotalForce(this._inner.ptr,t,r.byteOffset),e.copyFromFloats(r[0],r[1],r[2])}getTotalTorqueToRef(t,e){if(this._nullCheck(),t<0||this._count<=t)throw new RangeError("Index out of range");this._inner.hasReferences&&this.runtime.lock.wait();const r=this._inner.vector3Buffer1.array;return this.runtime.wasmInstance.rigidBodyBundleGetTotalTorque(this._inner.ptr,t,r.byteOffset),e.copyFromFloats(r[0],r[1],r[2])}applyCentralForce(t,e){if(this._nullCheck(),t<0||this._count<=t)throw new RangeError("Index out of range");this._inner.hasReferences&&this.runtime.lock.wait(),this.runtime.wasmInstance.rigidBodyBundleApplyCentralForce(this._inner.ptr,t,e.x,e.y,e.z)}applyTorque(t,e){if(this._nullCheck(),t<0||this._count<=t)throw new RangeError("Index out of range");this._inner.hasReferences&&this.runtime.lock.wait(),this.runtime.wasmInstance.rigidBodyBundleApplyTorque(this._inner.ptr,t,e.x,e.y,e.z)}applyForce(t,e,r){if(this._nullCheck(),t<0||this._count<=t)throw new RangeError("Index out of range");this._inner.hasReferences&&this.runtime.lock.wait();const n=this._inner.vector3Buffer1.array;n[0]=e.x,n[1]=e.y,n[2]=e.z;const i=this._inner.vector3Buffer2.array;i[0]=r.x,i[1]=r.y,i[2]=r.z,this.runtime.wasmInstance.rigidBodyBundleApplyForce(this._inner.ptr,t,n.byteOffset,i.byteOffset)}applyCentralImpulse(t,e){if(this._nullCheck(),t<0||this._count<=t)throw new RangeError("Index out of range");this._inner.hasReferences&&this.runtime.lock.wait(),this.runtime.wasmInstance.rigidBodyBundleApplyCentralImpulse(this._inner.ptr,t,e.x,e.y,e.z)}applyTorqueImpulse(t,e){if(this._nullCheck(),t<0||this._count<=t)throw new RangeError("Index out of range");this._inner.hasReferences&&this.runtime.lock.wait(),this.runtime.wasmInstance.rigidBodyBundleApplyTorqueImpulse(this._inner.ptr,t,e.x,e.y,e.z)}applyImpulse(t,e,r){if(this._nullCheck(),t<0||this._count<=t)throw new RangeError("Index out of range");this._inner.hasReferences&&this.runtime.lock.wait();const n=this._inner.vector3Buffer1.array;n[0]=e.x,n[1]=e.y,n[2]=e.z;const i=this._inner.vector3Buffer2.array;i[0]=r.x,i[1]=r.y,i[2]=r.z,this.runtime.wasmInstance.rigidBodyBundleApplyImpulse(this._inner.ptr,t,n.byteOffset,i.byteOffset)}applyPushImpulse(t,e,r){if(this._nullCheck(),t<0||this._count<=t)throw new RangeError("Index out of range");this._inner.hasReferences&&this.runtime.lock.wait();const n=this._inner.vector3Buffer1.array;n[0]=e.x,n[1]=e.y,n[2]=e.z;const i=this._inner.vector3Buffer2.array;i[0]=r.x,i[1]=r.y,i[2]=r.z,this.runtime.wasmInstance.rigidBodyBundleApplyPushImpulse(this._inner.ptr,t,n.byteOffset,i.byteOffset)}getPushVelocityToRef(t,e){if(this._nullCheck(),t<0||this._count<=t)throw new RangeError("Index out of range");this._inner.hasReferences&&this.runtime.lock.wait();const r=this._inner.vector3Buffer1.array;return this.runtime.wasmInstance.rigidBodyBundleGetPushVelocity(this._inner.ptr,t,r.byteOffset),e.copyFromFloats(r[0],r[1],r[2])}getTurnVelocityToRef(t,e){if(this._nullCheck(),t<0||this._count<=t)throw new RangeError("Index out of range");this._inner.hasReferences&&this.runtime.lock.wait();const r=this._inner.vector3Buffer1.array;return this.runtime.wasmInstance.rigidBodyBundleGetTurnVelocity(this._inner.ptr,t,r.byteOffset),e.copyFromFloats(r[0],r[1],r[2])}setPushVelocity(t,e){if(this._nullCheck(),t<0||this._count<=t)throw new RangeError("Index out of range");this._inner.hasReferences&&this.runtime.lock.wait(),this.runtime.wasmInstance.rigidBodyBundleSetPushVelocity(this._inner.ptr,t,e.x,e.y,e.z)}setTurnVelocity(t,e){if(this._nullCheck(),t<0||this._count<=t)throw new RangeError("Index out of range");this._inner.hasReferences&&this.runtime.lock.wait(),this.runtime.wasmInstance.rigidBodyBundleSetTurnVelocity(this._inner.ptr,t,e.x,e.y,e.z)}applyCentralPushImpulse(t,e){if(this._nullCheck(),t<0||this._count<=t)throw new RangeError("Index out of range");this._inner.hasReferences&&this.runtime.lock.wait(),this.runtime.wasmInstance.rigidBodyBundleApplyCentralPushImpulse(this._inner.ptr,t,e.x,e.y,e.z)}applyTorqueTurnImpulse(t,e){if(this._nullCheck(),t<0||this._count<=t)throw new RangeError("Index out of range");this._inner.hasReferences&&this.runtime.lock.wait(),this.runtime.wasmInstance.rigidBodyBundleApplyTorqueTurnImpulse(this._inner.ptr,t,e.x,e.y,e.z)}clearForces(t){if(this._nullCheck(),t<0||this._count<=t)throw new RangeError("Index out of range");this._inner.hasReferences&&this.runtime.lock.wait(),this.runtime.wasmInstance.rigidBodyBundleClearForces(this._inner.ptr,t)}getLinearVelocityToRef(t,e){if(this._nullCheck(),t<0||this._count<=t)throw new RangeError("Index out of range");this._inner.hasReferences&&this.runtime.lock.wait();const r=this._inner.vector3Buffer1.array;return this.runtime.wasmInstance.rigidBodyBundleGetLinearVelocity(this._inner.ptr,t,r.byteOffset),e.copyFromFloats(r[0],r[1],r[2])}getAngularVelocityToRef(t,e){if(this._nullCheck(),t<0||this._count<=t)throw new RangeError("Index out of range");this._inner.hasReferences&&this.runtime.lock.wait();const r=this._inner.vector3Buffer1.array;return this.runtime.wasmInstance.rigidBodyBundleGetAngularVelocity(this._inner.ptr,t,r.byteOffset),e.copyFromFloats(r[0],r[1],r[2])}setLinearVelocity(t,e){if(this._nullCheck(),t<0||this._count<=t)throw new RangeError("Index out of range");this._inner.hasReferences&&this.runtime.lock.wait(),this.runtime.wasmInstance.rigidBodyBundleSetLinearVelocity(this._inner.ptr,t,e.x,e.y,e.z)}setAngularVelocity(t,e){if(this._nullCheck(),t<0||this._count<=t)throw new RangeError("Index out of range");this._inner.hasReferences&&this.runtime.lock.wait(),this.runtime.wasmInstance.rigidBodyBundleSetAngularVelocity(this._inner.ptr,t,e.x,e.y,e.z)}getVelocityInLocalPointToRef(t,e,r){if(this._nullCheck(),t<0||this._count<=t)throw new RangeError("Index out of range");this._inner.hasReferences&&this.runtime.lock.wait();const n=this._inner.vector3Buffer1.array,i=this._inner.vector3Buffer2.array;return n[0]=e.x,n[1]=e.y,n[2]=e.z,this.runtime.wasmInstance.rigidBodyBundleGetVelocityInLocalPoint(this._inner.ptr,t,n.byteOffset,i.byteOffset),r.set(i[0],i[1],i[2])}getPushVelocityInLocalPointToRef(t,e,r){if(this._nullCheck(),t<0||this._count<=t)throw new RangeError("Index out of range");this._inner.hasReferences&&this.runtime.lock.wait();const n=this._inner.vector3Buffer1.array,i=this._inner.vector3Buffer2.array;return n[0]=e.x,n[1]=e.y,n[2]=e.z,this.runtime.wasmInstance.rigidBodyBundleGetPushVelocityInLocalPoint(this._inner.ptr,t,n.byteOffset,i.byteOffset),r.set(i[0],i[1],i[2])}}}}]);