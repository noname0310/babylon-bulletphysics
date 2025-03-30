"use strict";(self.webpackChunkbabylon_bulletphysics=self.webpackChunkbabylon_bulletphysics||[]).push([[5203],{37:(t,e,i)=>{i.d(e,{o:()=>r});class r{_lock;constructor(t){this._lock=t}wait(){const t=this._lock.array,e=performance.now();for(;0!==Atomics.load(t,0);)if(performance.now()-e>1e4)throw new Error("Spinlock timeout")}}},472:(t,e,i)=>{i.d(e,{y:()=>o});class r{_runtime;_ptr;_rigidBodyReferences;_rigidBodyBundleReferences;_constraintReferences;_referenceCount;constructor(t,e){this._runtime=t,this._ptr=e,this._rigidBodyReferences=new Set,this._rigidBodyBundleReferences=new Set,this._constraintReferences=new Set,this._referenceCount=0}dispose(){if(this._referenceCount>0)throw new Error("Cannot dispose physics world while it still has references");if(0===this._ptr)return;const t=this._runtime.deref();void 0!==t&&(t.lock.wait(),t.wasmInstance.destroyPhysicsWorld(this._ptr)),this._ptr=0;for(const t of this._rigidBodyReferences)t.setWorldReference(null);this._rigidBodyReferences.clear();for(const t of this._rigidBodyBundleReferences)t.setWorldReference(null);this._rigidBodyBundleReferences.clear();for(const t of this._constraintReferences)t.setWorldReference(null);this._constraintReferences.clear()}get ptr(){return this._ptr}addReference(){this._referenceCount+=1}removeReference(){this._referenceCount-=1}addRigidBodyReference(t){return!this._rigidBodyReferences.has(t)&&(t.setWorldReference(this),this._rigidBodyReferences.add(t),!0)}removeRigidBodyReference(t){return!!this._rigidBodyReferences.delete(t)&&(t.setWorldReference(null),!0)}addRigidBodyBundleReference(t){return!this._rigidBodyBundleReferences.has(t)&&(t.setWorldReference(this),this._rigidBodyBundleReferences.add(t),!0)}removeRigidBodyBundleReference(t){return!!this._rigidBodyBundleReferences.delete(t)&&(t.setWorldReference(null),!0)}addConstraintReference(t){return!this._constraintReferences.has(t)&&(t.setWorldReference(this),this._constraintReferences.add(t),!0)}removeConstraintReference(t){return!!this._constraintReferences.delete(t)&&(t.setWorldReference(null),!0)}}function s(t){t.dispose()}const n=new WeakMap;class o{_runtime;_inner;constructor(t){this._runtime=t;const e=t.wasmInstance.createPhysicsWorld();this._inner=new r(new WeakRef(t),e);let i=n.get(t.wasmInstance);void 0===i&&(i=new FinalizationRegistry(s),n.set(t.wasmInstance,i)),i.register(this,this._inner,this)}dispose(){if(0===this._inner.ptr)return;this._inner.dispose();const t=n.get(this._runtime.wasmInstance);t?.unregister(this)}get ptr(){return this._inner.ptr}addReference(){this._inner.addReference()}removeReference(){this._inner.removeReference()}_nullCheck(){if(0===this._inner.ptr)throw new Error("Cannot access disposed physics world")}setGravity(t){this._nullCheck(),this._runtime.lock.wait(),this._runtime.wasmInstance.physicsWorldSetGravity(this._inner.ptr,t.x,t.y,t.z)}stepSimulation(t,e,i){this._nullCheck(),this._runtime.lock.wait(),this._runtime.wasmInstance.physicsWorldStepSimulation(this._inner.ptr,t,e,i)}addRigidBody(t){if(t.runtime!==this._runtime)throw new Error("Cannot add rigid body from different runtime");return this._nullCheck(),!!this._inner.addRigidBodyReference(t)&&(this._runtime.lock.wait(),this._runtime.wasmInstance.physicsWorldAddRigidBody(this._inner.ptr,t.ptr),!0)}removeRigidBody(t){return this._nullCheck(),!!this._inner.removeRigidBodyReference(t)&&(this._runtime.lock.wait(),this._runtime.wasmInstance.physicsWorldRemoveRigidBody(this._inner.ptr,t.ptr),!0)}addRigidBodyBundle(t){if(t.runtime!==this._runtime)throw new Error("Cannot add rigid body bundle from different runtime");return this._nullCheck(),!!this._inner.addRigidBodyBundleReference(t)&&(this._runtime.lock.wait(),this._runtime.wasmInstance.physicsWorldAddRigidBodyBundle(this._inner.ptr,t.ptr),!0)}removeRigidBodyBundle(t){return this._nullCheck(),!!this._inner.removeRigidBodyBundleReference(t)&&(this._runtime.lock.wait(),this._runtime.wasmInstance.physicsWorldRemoveRigidBodyBundle(this._inner.ptr,t.ptr),!0)}addConstraint(t,e){if(t.runtime!==this._runtime)throw new Error("Cannot add constraint from different runtime");return this._nullCheck(),!!this._inner.addConstraintReference(t)&&(this._runtime.lock.wait(),this._runtime.wasmInstance.physicsWorldAddConstraint(this._inner.ptr,t.ptr,e),!0)}removeConstraint(t){return this._nullCheck(),!!this._inner.removeConstraintReference(t)&&(this._runtime.lock.wait(),this._runtime.wasmInstance.physicsWorldRemoveConstraint(this._inner.ptr,t.ptr),!0)}}},912:(t,e,i)=>{i.d(e,{d:()=>s});var r=i(9923);class s{shouldSync;_isDirty;_motionStateMatricesBuffer;_isMotionStateMatricesBufferDirty;_motionStateMatrixDirtyFlags;_dynamicTransformMatricesBuffer;_isDynamicTransformMatricesBufferDirty;_dynamicTransformMatrixDirtyFlags;_commandBuffer;_count;constructor(t){this.shouldSync=!1,this._isDirty=!1,this._motionStateMatricesBuffer=new Float32Array(16*t),this._isMotionStateMatricesBufferDirty=!1,this._motionStateMatrixDirtyFlags=new Uint8Array(t),this._dynamicTransformMatricesBuffer=null,this._isDynamicTransformMatricesBufferDirty=!1,this._dynamicTransformMatrixDirtyFlags=null;const e=this._commandBuffer=new Array(t);for(let i=0;i<t;++i)e[i]=new Map;this._count=t}get needToCommit(){return this._isDirty}commitToWasm(t,e,i,r,s){if(!this._isDirty)return;if(this._isMotionStateMatricesBufferDirty){const t=this._motionStateMatricesBuffer,e=i.array,s=this._motionStateMatrixDirtyFlags,n=r.array,o=this._count;let a=0,d=0;for(let i=0;i<o;++i)0!==s[i]?(e[d+4+0]=t[a],e[d+8+0]=t[a+1],e[d+12+0]=t[a+2],e[d+4+1]=t[a+4],e[d+8+1]=t[a+5],e[d+12+1]=t[a+6],e[d+4+2]=t[a+8],e[d+8+2]=t[a+9],e[d+12+2]=t[a+10],e[d+16+0]=t[a+12],e[d+16+1]=t[a+13],e[d+16+2]=t[a+14],0!==n[i]&&(n[i]=2),s[i]=0,a+=16,d+=20):(a+=16,d+=20);this._isMotionStateMatricesBufferDirty=!1}if(this._isDynamicTransformMatricesBufferDirty){const t=this._dynamicTransformMatricesBuffer,e=s,i=this._dynamicTransformMatrixDirtyFlags,r=this._count;let n=0;for(let s=0;s<r;++s){if(0===i[s]){n+=16;continue}const r=e[s].array;r[0]=t[n],r[16]=t[n+1],r[32]=t[n+2],r[1]=t[n+4],r[17]=t[n+5],r[33]=t[n+6],r[2]=t[n+8],r[18]=t[n+9],r[34]=t[n+10],r[48]=t[n+12],r[49]=t[n+13],r[50]=t[n+14],i[s]=0,n+=16}this._isDynamicTransformMatricesBufferDirty=!1}const n=this._commandBuffer;for(let i=0;i<this._count;++i)if(0!==n[i].size){for(const[r,s]of n[i])switch(r){case 0:t.rigidBodyBundleSetDamping(e,i,s[0],s[1]);break;case 1:{const r=s[1];t.rigidBodyBundleSetMassProps(e,i,s[0],r.x,r.y,r.z);break}case 2:{const r=s[0];t.rigidBodyBundleTranslate(e,i,r.x,r.y,r.z);break}}n[i].clear()}this._isDirty=!1}setTransformMatrixFromArray(t,e,i,r,s){const n=this._motionStateMatricesBuffer,o=this._motionStateMatrixDirtyFlags,a=16*i;n[a+0]=r[s],n[a+1]=r[s+1],n[a+2]=r[s+2],n[a+3]=0,n[a+4]=r[s+4],n[a+5]=r[s+5],n[a+6]=r[s+6],n[a+7]=0,n[a+8]=r[s+8],n[a+9]=r[s+9],n[a+10]=r[s+10],n[a+11]=0,n[a+12]=r[s+12],n[a+13]=r[s+13],n[a+14]=r[s+14],n[a+15]=1,o[i]=1,this._isMotionStateMatricesBufferDirty=!0,this._isDirty=!0}setTransformMatricesFromArray(t,e,i,r){this._motionStateMatricesBuffer.set(i,r),this._motionStateMatrixDirtyFlags.fill(1),this._isMotionStateMatricesBufferDirty=!0,this._isDirty=!0}setDynamicTransformMatrixFromArray(t,e,i,r){null===this._dynamicTransformMatricesBuffer&&(this._dynamicTransformMatricesBuffer=new Float32Array(this._motionStateMatricesBuffer.length)),null===this._dynamicTransformMatrixDirtyFlags&&(this._dynamicTransformMatrixDirtyFlags=new Uint8Array(this._motionStateMatrixDirtyFlags.length));const s=this._dynamicTransformMatricesBuffer,n=16*e;s[n+0]=i[r],s[n+1]=i[r+1],s[n+2]=i[r+2],s[n+3]=0,s[n+4]=i[r+4],s[n+5]=i[r+5],s[n+6]=i[r+6],s[n+7]=0,s[n+8]=i[r+8],s[n+9]=i[r+9],s[n+10]=i[r+10],s[n+11]=0,s[n+12]=i[r+12],s[n+13]=i[r+13],s[n+14]=i[r+14],s[n+15]=1,this._dynamicTransformMatrixDirtyFlags[e]=1,this._isDynamicTransformMatricesBufferDirty=!0,this._isDirty=!0}setDamping(t,e,i,r,s){this._commandBuffer[i].set(0,[r,s]),this._isDirty=!0}getLinearDamping(t,e,i){return t.rigidBodyBundleGetLinearDamping(e,i)}getAngularDamping(t,e,i){return t.rigidBodyBundleGetAngularDamping(e,i)}setMassProps(t,e,i,r,s){this._commandBuffer[i].set(1,[r,s.clone()]),this._isDirty=!0}getMass(t,e,i){return t.rigidBodyBundleGetMass(e,i)}getLocalInertia(t,e,i){const s=t.allocateBuffer(12),n=t.createTypedArray(Float32Array,s,3).array;t.rigidBodyBundleGetLocalInertia(e,i,s);const o=new r.Pq(n[0],n[1],n[2]);return t.deallocateBuffer(s,12),o}translate(t,e,i,r){this._commandBuffer[i].set(2,[r.clone()]),this._isDirty=!0}}},3880:(t,e,i)=>{i.d(e,{V:()=>s});var r=i(9923);class s{shouldSync;_isDirty;_motionStateMatrixBuffer;_isMotionStateMatrixBufferDirty;_dynamicTransformMatrixBuffer;_isDynamicTransformMatrixBufferDirty;_commandBuffer;constructor(){this.shouldSync=!1,this._isDirty=!1,this._motionStateMatrixBuffer=new Float32Array(16),this._isMotionStateMatrixBufferDirty=!1,this._dynamicTransformMatrixBuffer=null,this._isDynamicTransformMatrixBufferDirty=!1,this._commandBuffer=new Map}get needToCommit(){return this._isDirty}commitToWasm(t,e,i,r,s){if(this._isDirty){if(this._isMotionStateMatrixBufferDirty){const t=this._motionStateMatrixBuffer,e=i.array;e[4]=t[0],e[8]=t[1],e[12]=t[2],e[5]=t[4],e[9]=t[5],e[13]=t[6],e[6]=t[8],e[10]=t[9],e[14]=t[10],e[16]=t[12],e[17]=t[13],e[18]=t[14];const s=r.array;0!==s[0]&&(s[0]=2),this._isMotionStateMatrixBufferDirty=!1}if(this._isDynamicTransformMatrixBufferDirty){const t=this._dynamicTransformMatrixBuffer,e=s.array;e[0]=t[0],e[16]=t[1],e[32]=t[2],e[1]=t[4],e[17]=t[5],e[33]=t[6],e[2]=t[8],e[18]=t[9],e[34]=t[10],e[48]=t[12],e[49]=t[13],e[50]=t[14],this._isDynamicTransformMatrixBufferDirty=!1}for(const[i,r]of this._commandBuffer)switch(i){case 0:t.rigidBodySetDamping(e,r[0],r[1]);break;case 1:{const i=r[1];t.rigidBodySetMassProps(e,r[0],i.x,i.y,i.z);break}case 2:{const i=r[0];t.rigidBodyTranslate(e,i.x,i.y,i.z);break}}this._commandBuffer.clear(),this._isDirty=!1}}setTransformMatrixFromArray(t,e,i,r){this._motionStateMatrixBuffer.set(i,r),this._isMotionStateMatrixBufferDirty=!0,this._isDirty=!0}setDynamicTransformMatrixFromArray(t,e,i){null===this._dynamicTransformMatrixBuffer&&(this._dynamicTransformMatrixBuffer=new Float32Array(16)),this._dynamicTransformMatrixBuffer.set(e,i),this._isDynamicTransformMatrixBufferDirty=!0,this._isDirty=!0}setDamping(t,e,i,r){this._commandBuffer.set(0,[i,r]),this._isDirty=!0}getLinearDamping(t,e){return t.rigidBodyGetLinearDamping(e)}getAngularDamping(t,e){return t.rigidBodyGetAngularDamping(e)}setMassProps(t,e,i,r){this._commandBuffer.set(1,[i,r.clone()]),this._isDirty=!0}getMass(t,e){return t.rigidBodyGetMass(e)}getLocalInertia(t,e){const i=t.allocateBuffer(12),s=t.createTypedArray(Float32Array,i,3).array;t.rigidBodyGetLocalInertia(e,i);const n=new r.Pq(s[0],s[1],s[2]);return t.deallocateBuffer(i,12),n}translate(t,e,i){this._commandBuffer.set(2,[i.clone()]),this._isDirty=!0}}},5203:(t,e,i)=>{i.d(e,{w:()=>y});var r=i(9923),s=i(9848),n=i(554),o=i(37),a=i(472),d=i(912),c=i(3880),h=i(5228),f=i(4444),l=i(9009);class u{_lock;_wasmInstance;_ptr;_worldReference;constructor(t,e,i,r){this._lock=t,this._wasmInstance=e,this._ptr=i,this._worldReference=r,r.addReference()}dispose(){0!==this._ptr&&(this._lock.wait(),this._wasmInstance.deref()?.destroyPhysicsRuntime(this._ptr),this._ptr=0,this._worldReference.removeReference(),this._worldReference=null)}get ptr(){return this._ptr}}function m(t){t.dispose()}const _=new WeakMap;class y{onSyncObservable;onTickObservable;wasmInstance;lock;_inner;_physicsWorld;_scene;_afterAnimationsBinded;_evaluationType;_usingWasmBackBuffer;useDeltaForWorldStep;timeStep;maxSubSteps;fixedTimeStep;_rigidBodyList;_rigidBodyBundleList;constructor(t){this.onSyncObservable=new s.cP,this.onTickObservable=new s.cP,this.wasmInstance=t;const e=new a.y(this),i=t.createPhysicsRuntime(e.ptr),r=t.physicsRuntimeGetLockStatePtr(i);this.lock=new o.o(t.createTypedArray(Uint8Array,r,1)),this._inner=new u(this.lock,new WeakRef(t),i,e),this._physicsWorld=e;let n=_.get(t);void 0===n&&(n=new FinalizationRegistry(m),_.set(t,n)),n.register(this,this._inner,this),this._scene=null,this._afterAnimationsBinded=null,this._evaluationType=l.q.Immediate,this._usingWasmBackBuffer=!1,this.useDeltaForWorldStep=!0,this.timeStep=1/60,this.maxSubSteps=10,this.fixedTimeStep=1/60,this._rigidBodyList=[],this._rigidBodyBundleList=[]}dispose(){if(0===this._inner.ptr)return;this._inner.dispose(),this._physicsWorld.dispose();const t=_.get(this.wasmInstance);t?.unregister(this)}get ptr(){return this._inner.ptr}_nullCheck(){if(0===this._inner.ptr)throw new Error("Cannot access disposed physics runtime")}createRigidBodyImpl(){return this._evaluationType===l.q.Immediate?new f.x:new c.V}createRigidBodyBundleImpl(t){return this._evaluationType===l.q.Immediate?new h.R(t.count):new d.d(t.count)}register(t){null===this._afterAnimationsBinded&&(this._nullCheck(),this._afterAnimationsBinded=()=>{this.afterAnimations(t.getEngine().getDeltaTime())},this._scene=t,t.onAfterAnimationsObservable.add(this._afterAnimationsBinded))}unregister(){null!==this._afterAnimationsBinded&&(this._scene.onAfterAnimationsObservable.removeCallback(this._afterAnimationsBinded),this._afterAnimationsBinded=null,this._scene=null)}afterAnimations(t){if(0!==this._inner.ptr){if(this.useDeltaForWorldStep){const e=this._scene;t=null!==e&&e.useConstantAnimationDeltaTime?16:Math.max(n.Z.MinDeltaTime,Math.min(t,n.Z.MaxDeltaTime)),t/=1e3}else t=this.timeStep;if(this._evaluationType===l.q.Buffered){if(void 0===this.wasmInstance.physicsRuntimeBufferedStepSimulation&&this._physicsWorld.stepSimulation(t,this.maxSubSteps,this.fixedTimeStep),this.lock.wait(),!1===this._usingWasmBackBuffer){this._usingWasmBackBuffer=!0,this.wasmInstance.physicsWorldUseMotionStateBuffer(this._physicsWorld.ptr,!0);const t=this._rigidBodyList;for(let e=0;e<t.length;++e)t[e].updateBufferedMotionState(!1);const e=this._rigidBodyBundleList;for(let t=0;t<e.length;++t)e[t].updateBufferedMotionStates(!1)}{const t=this._rigidBodyList;for(let e=0;e<t.length;++e)t[e].commitToWasm();const e=this._rigidBodyBundleList;for(let t=0;t<e.length;++t)e[t].commitToWasm()}this.onSyncObservable.notifyObservers(),this.wasmInstance.physicsRuntimeBufferedStepSimulation(this._inner.ptr,t,this.maxSubSteps,this.fixedTimeStep)}else{if(!0===this._usingWasmBackBuffer){this.lock.wait(),this._usingWasmBackBuffer=!1,this.wasmInstance.physicsWorldUseMotionStateBuffer(this._physicsWorld.ptr,!1);const t=this._rigidBodyList;for(let e=0;e<t.length;++e)t[e].updateBufferedMotionState(!1);const e=this._rigidBodyBundleList;for(let t=0;t<e.length;++t)e[t].updateBufferedMotionStates(!1)}this._physicsWorld.stepSimulation(t,this.maxSubSteps,this.fixedTimeStep),this.onSyncObservable.notifyObservers()}this.onTickObservable.notifyObservers()}else this.unregister()}get evaluationType(){return this._evaluationType}set evaluationType(t){if(this._evaluationType!==t)if(l.q.Buffered,this._evaluationType=t,t===l.q.Buffered){const t=this._rigidBodyList;for(let e=0;e<t.length;++e)t[e].impl=new c.V;const e=this._rigidBodyBundleList;for(let t=0;t<e.length;++t)e[t].impl=new d.d(e[t].count)}else{const t=this._rigidBodyList;for(let e=0;e<t.length;++e){const i=t[e];i.needToCommit&&(this.lock.wait(),i.commitToWasm()),i.impl=new f.x}const e=this._rigidBodyBundleList;for(let t=0;t<e.length;++t){const i=e[t];i.needToCommit&&(this.lock.wait(),i.commitToWasm()),i.impl=new h.R(i.count)}}}_gravity=new r.Pq(0,-10,0);getGravityToRef(t){return t.copyFrom(this._gravity)}setGravity(t){this._nullCheck(),this._gravity.copyFrom(t),this._physicsWorld.setGravity(t)}addRigidBody(t){this._nullCheck();const e=this._physicsWorld.addRigidBody(t);if(e){this._rigidBodyList.push(t);const e=t.impl instanceof c.V;e!==(this._evaluationType===l.q.Buffered)&&(e&&t.needToCommit&&(this.lock.wait(),t.commitToWasm()),t.impl=this._evaluationType===l.q.Buffered?new c.V:new f.x)}return e}removeRigidBody(t){this._nullCheck();const e=this._physicsWorld.removeRigidBody(t);if(e){const e=this._rigidBodyList.indexOf(t);-1!==e&&this._rigidBodyList.splice(e,1)}return e}addRigidBodyBundle(t){this._nullCheck();const e=this._physicsWorld.addRigidBodyBundle(t);if(e){this._rigidBodyBundleList.push(t);const e=t.impl instanceof d.d;e!==(this._evaluationType===l.q.Buffered)&&(e&&t.needToCommit&&(this.lock.wait(),t.commitToWasm()),t.impl=this._evaluationType===l.q.Buffered?new d.d(t.count):new h.R(t.count))}return e}removeRigidBodyBundle(t){this._nullCheck();const e=this._physicsWorld.removeRigidBodyBundle(t);if(e){const e=this._rigidBodyBundleList.indexOf(t);-1!==e&&this._rigidBodyBundleList.splice(e,1)}return e}get rigidBodyList(){return this._rigidBodyList}addConstraint(t,e){return this._nullCheck(),this._physicsWorld.addConstraint(t,e)}removeConstraint(t){return this._nullCheck(),this._physicsWorld.removeConstraint(t)}}},9009:(t,e,i)=>{var r;i.d(e,{q:()=>r}),function(t){t[t.Immediate=0]="Immediate",t[t.Buffered=1]="Buffered"}(r||(r={}))}}]);