"use strict";(self.webpackChunkbabylon_bulletphysics=self.webpackChunkbabylon_bulletphysics||[]).push([[5203],{40912:(t,i,e)=>{e.d(i,{d:()=>r});class r{shouldSync;_isDirty;_motionStateMatricesBuffer;_isMotionStateMatricesBufferDirty;_motionStateMatrixDirtyFlags;_dynamicTransformMatricesBuffer;_isDynamicTransformMatricesBufferDirty;_dynamicTransformMatrixDirtyFlags;_count;constructor(t){this.shouldSync=!1,this._isDirty=!1,this._motionStateMatricesBuffer=new Float32Array(16*t),this._isMotionStateMatricesBufferDirty=!1,this._motionStateMatrixDirtyFlags=new Uint8Array(t),this._dynamicTransformMatricesBuffer=null,this._isDynamicTransformMatricesBufferDirty=!1,this._dynamicTransformMatrixDirtyFlags=null,this._count=t}get needToCommit(){return this._isDirty}commitToWasm(t,i,e){if(this._isDirty){if(this._isMotionStateMatricesBufferDirty){const e=this._motionStateMatricesBuffer,r=t.array,s=this._motionStateMatrixDirtyFlags,n=i.array,o=this._count;let a=0,d=0;for(let t=0;t<o;++t)0!==s[t]?(r[d+4+0]=e[a],r[d+8+0]=e[a+1],r[d+12+0]=e[a+2],r[d+4+1]=e[a+4],r[d+8+1]=e[a+5],r[d+12+1]=e[a+6],r[d+4+2]=e[a+8],r[d+8+2]=e[a+9],r[d+12+2]=e[a+10],r[d+16+0]=e[a+12],r[d+16+1]=e[a+13],r[d+16+2]=e[a+14],0!==n[t]&&(n[t]=2),s[t]=0,a+=16,d+=20):(a+=16,d+=20);this._isMotionStateMatricesBufferDirty=!1}if(this._isDynamicTransformMatricesBufferDirty){const t=this._dynamicTransformMatricesBuffer,i=e,r=this._dynamicTransformMatrixDirtyFlags,s=this._count;let n=0;for(let e=0;e<s;++e){if(0===r[e]){n+=16;continue}const s=i[e].array;s[0]=t[n],s[16]=t[n+1],s[32]=t[n+2],s[1]=t[n+4],s[17]=t[n+5],s[33]=t[n+6],s[2]=t[n+8],s[18]=t[n+9],s[34]=t[n+10],s[48]=t[n+12],s[49]=t[n+13],s[50]=t[n+14],r[e]=0,n+=16}this._isDynamicTransformMatricesBufferDirty=!1}this._isDirty=!1}}setTransformMatrixFromArray(t,i,e,r,s){const n=this._motionStateMatricesBuffer,o=this._motionStateMatrixDirtyFlags,a=16*e;n[a+0]=r[s],n[a+1]=r[s+1],n[a+2]=r[s+2],n[a+3]=0,n[a+4]=r[s+4],n[a+5]=r[s+5],n[a+6]=r[s+6],n[a+7]=0,n[a+8]=r[s+8],n[a+9]=r[s+9],n[a+10]=r[s+10],n[a+11]=0,n[a+12]=r[s+12],n[a+13]=r[s+13],n[a+14]=r[s+14],n[a+15]=1,o[e]=1,this._isMotionStateMatricesBufferDirty=!0,this._isDirty=!0}setTransformMatricesFromArray(t,i,e,r){this._motionStateMatricesBuffer.set(e,r),this._motionStateMatrixDirtyFlags.fill(1),this._isMotionStateMatricesBufferDirty=!0,this._isDirty=!0}setDynamicTransformMatrixFromArray(t,i,e,r){null===this._dynamicTransformMatricesBuffer&&(this._dynamicTransformMatricesBuffer=new Float32Array(this._motionStateMatricesBuffer.length)),null===this._dynamicTransformMatrixDirtyFlags&&(this._dynamicTransformMatrixDirtyFlags=new Uint8Array(this._motionStateMatrixDirtyFlags.length));const s=this._dynamicTransformMatricesBuffer,n=16*i;s[n+0]=e[r],s[n+1]=e[r+1],s[n+2]=e[r+2],s[n+3]=0,s[n+4]=e[r+4],s[n+5]=e[r+5],s[n+6]=e[r+6],s[n+7]=0,s[n+8]=e[r+8],s[n+9]=e[r+9],s[n+10]=e[r+10],s[n+11]=0,s[n+12]=e[r+12],s[n+13]=e[r+13],s[n+14]=e[r+14],s[n+15]=1,this._dynamicTransformMatrixDirtyFlags[i]=1,this._isDynamicTransformMatricesBufferDirty=!0,this._isDirty=!0}}},23880:(t,i,e)=>{e.d(i,{V:()=>r});class r{shouldSync;_isDirty;_motionStateMatrixBuffer;_isMotionStateMatrixBufferDirty;_dynamicTransformMatrixBuffer;_isDynamicTransformMatrixBufferDirty;constructor(){this.shouldSync=!1,this._isDirty=!1,this._motionStateMatrixBuffer=new Float32Array(16),this._isMotionStateMatrixBufferDirty=!1,this._dynamicTransformMatrixBuffer=null,this._isDynamicTransformMatrixBufferDirty=!1}get needToCommit(){return this._isDirty}commitToWasm(t,i,e){if(this._isDirty){if(this._isMotionStateMatrixBufferDirty){const e=this._motionStateMatrixBuffer,r=t.array;r[4]=e[0],r[8]=e[1],r[12]=e[2],r[5]=e[4],r[9]=e[5],r[13]=e[6],r[6]=e[8],r[10]=e[9],r[14]=e[10],r[16]=e[12],r[17]=e[13],r[18]=e[14];const s=i.array;0!==s[0]&&(s[0]=2),this._isMotionStateMatrixBufferDirty=!1}if(this._isDynamicTransformMatrixBufferDirty){const t=this._dynamicTransformMatrixBuffer,i=e.array;i[0]=t[0],i[16]=t[1],i[32]=t[2],i[1]=t[4],i[17]=t[5],i[33]=t[6],i[2]=t[8],i[18]=t[9],i[34]=t[10],i[48]=t[12],i[49]=t[13],i[50]=t[14],this._isDynamicTransformMatrixBufferDirty=!1}this._isDirty=!1}}setTransformMatrixFromArray(t,i,e,r){this._motionStateMatrixBuffer.set(e,r),this._isMotionStateMatrixBufferDirty=!0,this._isDirty=!0}setDynamicTransformMatrixFromArray(t,i,e){null===this._dynamicTransformMatrixBuffer&&(this._dynamicTransformMatrixBuffer=new Float32Array(16)),this._dynamicTransformMatrixBuffer.set(i,e),this._isDynamicTransformMatrixBufferDirty=!0,this._isDirty=!0}}},25203:(t,i,e)=>{e.d(i,{w:()=>y});var r=e(79923),s=e(99848),n=e(87491),o=e(30037),a=e(80472),d=e(40912),h=e(23880),c=e(5228),f=e(94444),l=e(29009);class u{_lock;_wasmInstance;_ptr;_worldReference;constructor(t,i,e,r){this._lock=t,this._wasmInstance=i,this._ptr=e,this._worldReference=r,r.addReference()}dispose(){0!==this._ptr&&(this._lock.wait(),this._wasmInstance.deref()?.destroyPhysicsRuntime(this._ptr),this._ptr=0,this._worldReference.removeReference(),this._worldReference=null)}get ptr(){return this._ptr}}function _(t){t.dispose()}const m=new WeakMap;class y{onTickObservable;wasmInstance;lock;_inner;_physicsWorld;_scene;_afterAnimationsBinded;_evaluationType;_usingWasmBackBuffer;useDeltaForWorldStep;timeStep;maxSubSteps;fixedTimeStep;_rigidBodyList;_rigidBodyBundleList;constructor(t){this.onTickObservable=new s.cP,this.wasmInstance=t;const i=new a.y(this),e=t.createPhysicsRuntime(i.ptr),r=t.physicsRuntimeGetLockStatePtr(e);this.lock=new o.o(t.createTypedArray(Uint8Array,r,1)),this._inner=new u(this.lock,new WeakRef(t),e,i),this._physicsWorld=i;let n=m.get(t);void 0===n&&(n=new FinalizationRegistry(_),m.set(t,n)),n.register(this,this._inner,this),this._scene=null,this._afterAnimationsBinded=null,this._evaluationType=l.q.Immediate,this._usingWasmBackBuffer=!1,this.useDeltaForWorldStep=!0,this.timeStep=1/60,this.maxSubSteps=10,this.fixedTimeStep=1/60,this._rigidBodyList=[],this._rigidBodyBundleList=[]}dispose(){if(0===this._inner.ptr)return;this._inner.dispose();const t=m.get(this.wasmInstance);t?.unregister(this)}get ptr(){return this._inner.ptr}_nullCheck(){if(0===this._inner.ptr)throw new Error("Cannot access disposed physics runtime")}createRigidBodyImpl(){return this._evaluationType===l.q.Immediate?new f.x:new h.V}createRigidBodyBundleImpl(t){return this._evaluationType===l.q.Immediate?new c.R(t.count):new d.d(t.count)}register(t){null===this._afterAnimationsBinded&&(this._nullCheck(),this._afterAnimationsBinded=()=>{this.afterAnimations(t.getEngine().getDeltaTime())},this._scene=t,t.onAfterAnimationsObservable.add(this._afterAnimationsBinded))}unregister(){null!==this._afterAnimationsBinded&&(this._scene.onAfterAnimationsObservable.removeCallback(this._afterAnimationsBinded),this._afterAnimationsBinded=null,this._scene=null)}afterAnimations(t){if(0!==this._inner.ptr){if(this.useDeltaForWorldStep){const i=this._scene;t=null!==i&&i.useConstantAnimationDeltaTime?16:Math.max(n.Z.MinDeltaTime,Math.min(t,n.Z.MaxDeltaTime)),t/=1e3}else t=this.timeStep;if(this._evaluationType===l.q.Buffered){if(void 0===this.wasmInstance.physicsRuntimeBufferedStepSimulation&&this._physicsWorld.stepSimulation(t,this.maxSubSteps,this.fixedTimeStep),this.lock.wait(),!1===this._usingWasmBackBuffer){this._usingWasmBackBuffer=!0,this.wasmInstance.physicsWorldUseMotionStateBuffer(this._physicsWorld.ptr,!0);const t=this._rigidBodyList;for(let i=0;i<t.length;++i)t[i].updateBufferedMotionState(!1);const i=this._rigidBodyBundleList;for(let t=0;t<i.length;++t)i[t].updateBufferedMotionStates(!1)}{const t=this._rigidBodyList;for(let i=0;i<t.length;++i)t[i].commitToWasm();const i=this._rigidBodyBundleList;for(let t=0;t<i.length;++t)i[t].commitToWasm()}this.wasmInstance.physicsRuntimeBufferedStepSimulation(this._inner.ptr,t,this.maxSubSteps,this.fixedTimeStep)}else{if(!0===this._usingWasmBackBuffer){this.lock.wait(),this._usingWasmBackBuffer=!1,this.wasmInstance.physicsWorldUseMotionStateBuffer(this._physicsWorld.ptr,!1);const t=this._rigidBodyList;for(let i=0;i<t.length;++i)t[i].updateBufferedMotionState(!1);const i=this._rigidBodyBundleList;for(let t=0;t<i.length;++t)i[t].updateBufferedMotionStates(!1)}this._physicsWorld.stepSimulation(t,this.maxSubSteps,this.fixedTimeStep)}this.onTickObservable.notifyObservers()}else this.unregister()}get evaluationType(){return this._evaluationType}set evaluationType(t){if(this._evaluationType!==t)if(l.q.Buffered,this._evaluationType=t,t===l.q.Buffered){const t=this._rigidBodyList;for(let i=0;i<t.length;++i)t[i].impl=new h.V;const i=this._rigidBodyBundleList;for(let t=0;t<i.length;++t)i[t].impl=new d.d(i[t].count)}else{const t=this._rigidBodyList;for(let i=0;i<t.length;++i){const e=t[i];e.needToCommit&&(this.lock.wait(),e.commitToWasm()),e.impl=new f.x}const i=this._rigidBodyBundleList;for(let t=0;t<i.length;++t){const e=i[t];e.needToCommit&&(this.lock.wait(),e.commitToWasm()),e.impl=new c.R(e.count)}}}_gravity=new r.Pq(0,-10,0);getGravityToRef(t){t.copyFrom(this._gravity)}setGravity(t){this._nullCheck(),this._gravity.copyFrom(t),this._physicsWorld.setGravity(t)}addRigidBody(t){this._nullCheck();const i=this._physicsWorld.addRigidBody(t);return i&&this._rigidBodyList.push(t),i}removeRigidBody(t){this._nullCheck();const i=this._physicsWorld.removeRigidBody(t);if(i){const i=this._rigidBodyList.indexOf(t);-1!==i&&this._rigidBodyList.splice(i,1)}return i}addRigidBodyBundle(t){this._nullCheck();const i=this._physicsWorld.addRigidBodyBundle(t);return i&&this._rigidBodyBundleList.push(t),i}removeRigidBodyBundle(t){this._nullCheck();const i=this._physicsWorld.removeRigidBodyBundle(t);if(i){const i=this._rigidBodyBundleList.indexOf(t);-1!==i&&this._rigidBodyBundleList.splice(i,1)}return i}get rigidBodyList(){return this._rigidBodyList}addConstraint(t,i){return this._nullCheck(),this._physicsWorld.addConstraint(t,i)}removeConstraint(t){return this._nullCheck(),this._physicsWorld.removeConstraint(t)}}},29009:(t,i,e)=>{var r;e.d(i,{q:()=>r}),function(t){t[t.Immediate=0]="Immediate",t[t.Buffered=1]="Buffered"}(r||(r={}))},30037:(t,i,e)=>{e.d(i,{o:()=>r});class r{_lock;constructor(t){this._lock=t}wait(){const t=this._lock.array,i=performance.now();for(;0!==Atomics.load(t,0);)if(performance.now()-i>1e4)throw new Error("Spinlock timeout")}}},80472:(t,i,e)=>{e.d(i,{y:()=>o});class r{_runtime;_ptr;_rigidBodyReferences;_rigidBodyBundleReferences;_constraintReferences;_referenceCount;constructor(t,i){this._runtime=t,this._ptr=i,this._rigidBodyReferences=new Set,this._rigidBodyBundleReferences=new Set,this._constraintReferences=new Set,this._referenceCount=0}dispose(){if(this._referenceCount>0)throw new Error("Cannot dispose physics world while it still has references");if(0===this._ptr)return;const t=this._runtime.deref();void 0!==t&&(t.lock.wait(),t.wasmInstance.destroyPhysicsWorld(this._ptr)),this._ptr=0;for(const t of this._rigidBodyReferences)t.setWorldReference(null);this._rigidBodyReferences.clear();for(const t of this._rigidBodyBundleReferences)t.setWorldReference(null);this._rigidBodyBundleReferences.clear();for(const t of this._constraintReferences)t.setWorldReference(null);this._constraintReferences.clear()}get ptr(){return this._ptr}addReference(){this._referenceCount+=1}removeReference(){this._referenceCount-=1}addRigidBodyReference(t){return!this._rigidBodyReferences.has(t)&&(t.setWorldReference(this),this._rigidBodyReferences.add(t),!0)}removeRigidBodyReference(t){return!!this._rigidBodyReferences.delete(t)&&(t.setWorldReference(null),!0)}addRigidBodyBundleReference(t){return!this._rigidBodyBundleReferences.has(t)&&(t.setWorldReference(this),this._rigidBodyBundleReferences.add(t),!0)}removeRigidBodyBundleReference(t){return!!this._rigidBodyBundleReferences.delete(t)&&(t.setWorldReference(null),!0)}addConstraintReference(t){return!this._constraintReferences.has(t)&&(t.setWorldReference(this),this._constraintReferences.add(t),!0)}removeConstraintReference(t){return!!this._constraintReferences.delete(t)&&(t.setWorldReference(null),!0)}}function s(t){t.dispose()}const n=new WeakMap;class o{_runtime;_inner;constructor(t){this._runtime=t;const i=t.wasmInstance.createPhysicsWorld();this._inner=new r(new WeakRef(t),i);let e=n.get(t.wasmInstance);void 0===e&&(e=new FinalizationRegistry(s),n.set(t.wasmInstance,e)),e.register(this,this._inner,this)}dispose(){if(0===this._inner.ptr)return;this._inner.dispose();const t=n.get(this._runtime.wasmInstance);t?.unregister(this)}get ptr(){return this._inner.ptr}addReference(){this._inner.addReference()}removeReference(){this._inner.removeReference()}_nullCheck(){if(0===this._inner.ptr)throw new Error("Cannot access disposed physics world")}setGravity(t){this._nullCheck(),this._runtime.lock.wait(),this._runtime.wasmInstance.physicsWorldSetGravity(this._inner.ptr,t.x,t.y,t.z)}stepSimulation(t,i,e){this._nullCheck(),this._runtime.lock.wait(),this._runtime.wasmInstance.physicsWorldStepSimulation(this._inner.ptr,t,i,e)}addRigidBody(t){if(t.runtime!==this._runtime)throw new Error("Cannot add rigid body from different runtime");return this._nullCheck(),!!this._inner.addRigidBodyReference(t)&&(this._runtime.lock.wait(),this._runtime.wasmInstance.physicsWorldAddRigidBody(this._inner.ptr,t.ptr),!0)}removeRigidBody(t){return this._nullCheck(),!!this._inner.removeRigidBodyReference(t)&&(this._runtime.lock.wait(),this._runtime.wasmInstance.physicsWorldRemoveRigidBody(this._inner.ptr,t.ptr),!0)}addRigidBodyBundle(t){if(t.runtime!==this._runtime)throw new Error("Cannot add rigid body bundle from different runtime");return this._nullCheck(),!!this._inner.addRigidBodyBundleReference(t)&&(this._runtime.lock.wait(),this._runtime.wasmInstance.physicsWorldAddRigidBodyBundle(this._inner.ptr,t.ptr),!0)}removeRigidBodyBundle(t){return this._nullCheck(),!!this._inner.removeRigidBodyBundleReference(t)&&(this._runtime.lock.wait(),this._runtime.wasmInstance.physicsWorldRemoveRigidBodyBundle(this._inner.ptr,t.ptr),!0)}addConstraint(t,i){if(t.runtime!==this._runtime)throw new Error("Cannot add constraint from different runtime");return this._nullCheck(),!!this._inner.addConstraintReference(t)&&(this._runtime.lock.wait(),this._runtime.wasmInstance.physicsWorldAddConstraint(this._inner.ptr,t.ptr,i),!0)}removeConstraint(t){return this._nullCheck(),!!this._inner.removeConstraintReference(t)&&(this._runtime.lock.wait(),this._runtime.wasmInstance.physicsWorldRemoveConstraint(this._inner.ptr,t.ptr),!0)}}}}]);