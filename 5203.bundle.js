"use strict";(self.webpackChunkbabylon_bulletphysics=self.webpackChunkbabylon_bulletphysics||[]).push([[5203],{40912:(e,t,i)=>{i.d(t,{d:()=>s});class s{shouldSync;_writeMatrices;_isWriteMatricesDirty;_writeMatrixDirtyFlags;_count;constructor(e){this.shouldSync=!1,this._writeMatrices=new Float32Array(16*e),this._isWriteMatricesDirty=!1,this._writeMatrixDirtyFlags=new Uint8Array(e),this._count=e}commitToMotionState(e){if(!this._isWriteMatricesDirty)return;const t=this._writeMatrices,i=e.array,s=this._writeMatrixDirtyFlags,r=this._count;let n=0,o=0;for(let e=0;e<r;++e)0!==s[e]?(i[o+4+0]=t[n],i[o+8+0]=t[n+1],i[o+12+0]=t[n+2],i[o+4+1]=t[n+4],i[o+8+1]=t[n+5],i[o+12+1]=t[n+6],i[o+4+2]=t[n+8],i[o+8+2]=t[n+9],i[o+12+2]=t[n+10],i[o+16+0]=t[n+12],i[o+16+1]=t[n+13],i[o+16+2]=t[n+14],s[e]=0,n+=16,o+=20):(n+=16,o+=20);this._isWriteMatricesDirty=!1}setTransformMatrixFromArray(e,t,i,s=0){const r=this._writeMatrices,n=this._writeMatrixDirtyFlags,o=16*t;r[o+0]=i[s],r[o+1]=i[s+1],r[o+2]=i[s+2],r[o+3]=0,r[o+4]=i[s+4],r[o+5]=i[s+5],r[o+6]=i[s+6],r[o+7]=0,r[o+8]=i[s+8],r[o+9]=i[s+9],r[o+10]=i[s+10],r[o+11]=0,r[o+12]=i[s+12],r[o+13]=i[s+13],r[o+14]=i[s+14],r[o+15]=1,n[t]=1,this._isWriteMatricesDirty=!0}setTransformMatricesFromArray(e,t,i=0){this._writeMatrices.set(t,i),this._isWriteMatricesDirty=!0}}},23880:(e,t,i)=>{i.d(t,{V:()=>s});class s{shouldSync;_writeMatrix;_isWriteMatrixDirty;constructor(){this.shouldSync=!1,this._writeMatrix=new Float32Array(16),this._isWriteMatrixDirty=!1}commitToMotionState(e){if(!this._isWriteMatrixDirty)return;const t=this._writeMatrix,i=e.array;i[4]=t[0],i[8]=t[1],i[12]=t[2],i[5]=t[4],i[9]=t[5],i[13]=t[6],i[6]=t[8],i[10]=t[9],i[14]=t[10],i[16]=t[12],i[17]=t[13],i[18]=t[14],this._isWriteMatrixDirty=!1}setTransformMatrixFromArray(e,t,i=0){this._writeMatrix.set(t,i),this._isWriteMatrixDirty=!0}}},25203:(e,t,i)=>{i.d(t,{w:()=>y});var s=i(79923),r=i(99848),n=i(87491),o=i(30037),d=i(80472),a=i(40912),h=i(23880),c=i(5228),l=i(94444),u=i(29009);class _{_lock;_wasmInstance;_ptr;_worldReference;constructor(e,t,i,s){this._lock=e,this._wasmInstance=t,this._ptr=i,this._worldReference=s,s.addReference()}dispose(){0!==this._ptr&&(this._lock.wait(),this._wasmInstance.deref()?.destroyPhysicsRuntime(this._ptr),this._ptr=0,this._worldReference.removeReference(),this._worldReference=null)}get ptr(){return this._ptr}}function f(e){e.dispose()}const m=new WeakMap;class y{onTickObservable;wasmInstance;lock;_inner;_physicsWorld;_scene;_afterAnimationsBinded;_evaluationType;_usingWasmBackBuffer;useDeltaForWorldStep;timeStep;maxSubSteps;fixedTimeStep;_rigidBodyList;_rigidBodyBundleList;constructor(e){this.onTickObservable=new r.cP,this.wasmInstance=e;const t=new d.y(this),i=e.createPhysicsRuntime(t.ptr),s=e.physicsRuntimeGetLockStatePtr(i);this.lock=new o.o(e.createTypedArray(Uint8Array,s,1)),this._inner=new _(this.lock,new WeakRef(e),i,t),this._physicsWorld=t;let n=m.get(e);void 0===n&&(n=new FinalizationRegistry(f),m.set(e,n)),n.register(this,this._inner,this),this._scene=null,this._afterAnimationsBinded=null,this._evaluationType=u.q.Immediate,this._usingWasmBackBuffer=!1,this.useDeltaForWorldStep=!0,this.timeStep=1/60,this.maxSubSteps=10,this.fixedTimeStep=1/60,this._rigidBodyList=[],this._rigidBodyBundleList=[]}dispose(){if(0===this._inner.ptr)return;this._inner.dispose();const e=m.get(this.wasmInstance);e?.unregister(this)}get ptr(){return this._inner.ptr}_nullCheck(){if(0===this._inner.ptr)throw new Error("Cannot access disposed physics runtime")}createRigidBodyImpl(){return this._evaluationType===u.q.Immediate?new l.x:new h.V}createRigidBodyBundleImpl(e){return this._evaluationType===u.q.Immediate?new c.R(e.count):new a.d(e.count)}register(e){null===this._afterAnimationsBinded&&(this._nullCheck(),this._afterAnimationsBinded=()=>{this.afterAnimations(e.getEngine().getDeltaTime())},this._scene=e,e.onAfterAnimationsObservable.add(this._afterAnimationsBinded))}unregister(){null!==this._afterAnimationsBinded&&(this._scene.onAfterAnimationsObservable.removeCallback(this._afterAnimationsBinded),this._afterAnimationsBinded=null,this._scene=null)}afterAnimations(e){if(0!==this._inner.ptr){if(this.useDeltaForWorldStep){const t=this._scene;e=null!==t&&t.useConstantAnimationDeltaTime?16:Math.max(n.Z.MinDeltaTime,Math.min(e,n.Z.MaxDeltaTime)),e/=1e3}else e=this.timeStep;if(this._evaluationType===u.q.Buffered){if(void 0===this.wasmInstance.physicsRuntimeBufferedStepSimulation&&this._physicsWorld.stepSimulation(e,this.maxSubSteps,this.fixedTimeStep),this.lock.wait(),!1===this._usingWasmBackBuffer){this._usingWasmBackBuffer=!0,this.wasmInstance.physicsWorldUseMotionStateBuffer(this._physicsWorld.ptr,!0);const e=this._rigidBodyList;for(let t=0;t<e.length;++t)e[t].updateBufferedMotionState(!1);const t=this._rigidBodyBundleList;for(let e=0;e<t.length;++e)t[e].updateBufferedMotionStates(!1)}this.wasmInstance.physicsRuntimeBufferedStepSimulation(this._inner.ptr,e,this.maxSubSteps,this.fixedTimeStep)}else{if(!0===this._usingWasmBackBuffer){this.lock.wait(),this._usingWasmBackBuffer=!1,this.wasmInstance.physicsWorldUseMotionStateBuffer(this._physicsWorld.ptr,!1);const e=this._rigidBodyList;for(let t=0;t<e.length;++t)e[t].updateBufferedMotionState(!1);const t=this._rigidBodyBundleList;for(let e=0;e<t.length;++e)t[e].updateBufferedMotionStates(!1)}this._physicsWorld.stepSimulation(e,this.maxSubSteps,this.fixedTimeStep)}this.onTickObservable.notifyObservers()}else this.unregister()}get evaluationType(){return this._evaluationType}set evaluationType(e){if(this._evaluationType!==e)if(u.q.Buffered,this._evaluationType=e,e===u.q.Buffered){const e=this._rigidBodyList;for(let t=0;t<e.length;++t)e[t].impl=new h.V;const t=this._rigidBodyBundleList;for(let e=0;e<t.length;++e)t[e].impl=new a.d(t[e].count)}else{const e=this._rigidBodyList;for(let t=0;t<e.length;++t)e[t].impl=new l.x;const t=this._rigidBodyBundleList;for(let e=0;e<t.length;++e)t[e].impl=new c.R(t[e].count)}}_gravity=new s.Pq(0,-10,0);getGravityToRef(e){e.copyFrom(this._gravity)}setGravity(e){this._nullCheck(),this._gravity.copyFrom(e),this._physicsWorld.setGravity(e)}addRigidBody(e){this._nullCheck();const t=this._physicsWorld.addRigidBody(e);return t&&this._rigidBodyList.push(e),t}removeRigidBody(e){this._nullCheck();const t=this._physicsWorld.removeRigidBody(e);if(t){const t=this._rigidBodyList.indexOf(e);-1!==t&&this._rigidBodyList.splice(t,1)}return t}addRigidBodyBundle(e){this._nullCheck();const t=this._physicsWorld.addRigidBodyBundle(e);return t&&this._rigidBodyBundleList.push(e),t}removeRigidBodyBundle(e){this._nullCheck();const t=this._physicsWorld.removeRigidBodyBundle(e);if(t){const t=this._rigidBodyBundleList.indexOf(e);-1!==t&&this._rigidBodyBundleList.splice(t,1)}return t}get rigidBodyList(){return this._rigidBodyList}addConstraint(e,t){return this._nullCheck(),this._physicsWorld.addConstraint(e,t)}removeConstraint(e){return this._nullCheck(),this._physicsWorld.removeConstraint(e)}makeBodyKinematic(e){this._nullCheck(),this._physicsWorld.makeBodyKinematic(e)}restoreBodyDynamic(e){this._nullCheck(),this._physicsWorld.restoreBodyDynamic(e)}}},29009:(e,t,i)=>{var s;i.d(t,{q:()=>s}),function(e){e[e.Immediate=0]="Immediate",e[e.Buffered=1]="Buffered"}(s||(s={}))},30037:(e,t,i)=>{i.d(t,{o:()=>s});class s{_lock;constructor(e){this._lock=e}wait(){const e=this._lock.array,t=performance.now();for(;0!==Atomics.load(e,0);)if(performance.now()-t>1e4)throw new Error("Spinlock timeout")}}},80472:(e,t,i)=>{i.d(t,{y:()=>o});class s{_runtime;_ptr;_rigidBodyReferences;_rigidBodyBundleReferences;_constraintReferences;_referenceCount;constructor(e,t){this._runtime=e,this._ptr=t,this._rigidBodyReferences=new Set,this._rigidBodyBundleReferences=new Set,this._constraintReferences=new Set,this._referenceCount=0}dispose(){if(this._referenceCount>0)throw new Error("Cannot dispose physics world while it still has references");if(0===this._ptr)return;const e=this._runtime.deref();void 0!==e&&(e.lock.wait(),e.wasmInstance.destroyPhysicsWorld(this._ptr)),this._ptr=0;for(const e of this._rigidBodyReferences)e.setWorldReference(null);this._rigidBodyReferences.clear();for(const e of this._rigidBodyBundleReferences)e.setWorldReference(null);this._rigidBodyBundleReferences.clear();for(const e of this._constraintReferences)e.setWorldReference(null);this._constraintReferences.clear()}get ptr(){return this._ptr}addReference(){this._referenceCount+=1}removeReference(){this._referenceCount-=1}addRigidBodyReference(e){return!this._rigidBodyReferences.has(e)&&(e.setWorldReference(this),this._rigidBodyReferences.add(e),!0)}removeRigidBodyReference(e){return!!this._rigidBodyReferences.delete(e)&&(e.setWorldReference(null),!0)}addRigidBodyBundleReference(e){return!this._rigidBodyBundleReferences.has(e)&&(e.setWorldReference(this),this._rigidBodyBundleReferences.add(e),!0)}removeRigidBodyBundleReference(e){return!!this._rigidBodyBundleReferences.delete(e)&&(e.setWorldReference(null),!0)}addConstraintReference(e){return!this._constraintReferences.has(e)&&(e.setWorldReference(this),this._constraintReferences.add(e),!0)}removeConstraintReference(e){return!!this._constraintReferences.delete(e)&&(e.setWorldReference(null),!0)}}function r(e){e.dispose()}const n=new WeakMap;class o{_runtime;_inner;constructor(e){this._runtime=e;const t=e.wasmInstance.createPhysicsWorld();this._inner=new s(new WeakRef(e),t);let i=n.get(e.wasmInstance);void 0===i&&(i=new FinalizationRegistry(r),n.set(e.wasmInstance,i)),i.register(this,this._inner,this)}dispose(){if(0===this._inner.ptr)return;this._inner.dispose();const e=n.get(this._runtime.wasmInstance);e?.unregister(this)}get ptr(){return this._inner.ptr}addReference(){this._inner.addReference()}removeReference(){this._inner.removeReference()}_nullCheck(){if(0===this._inner.ptr)throw new Error("Cannot access disposed physics world")}setGravity(e){this._nullCheck(),this._runtime.lock.wait(),this._runtime.wasmInstance.physicsWorldSetGravity(this._inner.ptr,e.x,e.y,e.z)}stepSimulation(e,t,i){this._nullCheck(),this._runtime.lock.wait(),this._runtime.wasmInstance.physicsWorldStepSimulation(this._inner.ptr,e,t,i)}addRigidBody(e){if(e.runtime!==this._runtime)throw new Error("Cannot add rigid body from different runtime");return this._nullCheck(),!!this._inner.addRigidBodyReference(e)&&(this._runtime.lock.wait(),this._runtime.wasmInstance.physicsWorldAddRigidBody(this._inner.ptr,e.ptr),!0)}removeRigidBody(e){return this._nullCheck(),!!this._inner.removeRigidBodyReference(e)&&(this._runtime.lock.wait(),this._runtime.wasmInstance.physicsWorldRemoveRigidBody(this._inner.ptr,e.ptr),!0)}addRigidBodyBundle(e){if(e.runtime!==this._runtime)throw new Error("Cannot add rigid body bundle from different runtime");return this._nullCheck(),!!this._inner.addRigidBodyBundleReference(e)&&(this._runtime.lock.wait(),this._runtime.wasmInstance.physicsWorldAddRigidBodyBundle(this._inner.ptr,e.ptr),!0)}removeRigidBodyBundle(e){return this._nullCheck(),!!this._inner.removeRigidBodyBundleReference(e)&&(this._runtime.lock.wait(),this._runtime.wasmInstance.physicsWorldRemoveRigidBodyBundle(this._inner.ptr,e.ptr),!0)}addConstraint(e,t){if(e.runtime!==this._runtime)throw new Error("Cannot add constraint from different runtime");return this._nullCheck(),!!this._inner.addConstraintReference(e)&&(this._runtime.lock.wait(),this._runtime.wasmInstance.physicsWorldAddConstraint(this._inner.ptr,e.ptr,t),!0)}removeConstraint(e){return this._nullCheck(),!!this._inner.removeConstraintReference(e)&&(this._runtime.lock.wait(),this._runtime.wasmInstance.physicsWorldRemoveConstraint(this._inner.ptr,e.ptr),!0)}makeBodyKinematic(e){this._nullCheck(),this._runtime.lock.wait(),this._runtime.wasmInstance.physicsWorldMakeBodyKinematic(this._inner.ptr,e.ptr)}restoreBodyDynamic(e){this._nullCheck(),this._runtime.lock.wait(),this._runtime.wasmInstance.physicsWorldRestoreBodyDynamic(this._inner.ptr,e.ptr)}}}}]);