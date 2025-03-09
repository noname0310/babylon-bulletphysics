"use strict";(self.webpackChunkbabylon_bulletphysics=self.webpackChunkbabylon_bulletphysics||[]).push([[9013],{472:(e,n,t)=>{t.d(n,{y:()=>o});class r{_runtime;_ptr;_rigidBodyReferences;_rigidBodyBundleReferences;_constraintReferences;_referenceCount;constructor(e,n){this._runtime=e,this._ptr=n,this._rigidBodyReferences=new Set,this._rigidBodyBundleReferences=new Set,this._constraintReferences=new Set,this._referenceCount=0}dispose(){if(this._referenceCount>0)throw new Error("Cannot dispose physics world while it still has references");if(0===this._ptr)return;const e=this._runtime.deref();void 0!==e&&(e.lock.wait(),e.wasmInstance.destroyPhysicsWorld(this._ptr)),this._ptr=0;for(const e of this._rigidBodyReferences)e.setWorldReference(null);this._rigidBodyReferences.clear();for(const e of this._rigidBodyBundleReferences)e.setWorldReference(null);this._rigidBodyBundleReferences.clear();for(const e of this._constraintReferences)e.setWorldReference(null);this._constraintReferences.clear()}get ptr(){return this._ptr}addReference(){this._referenceCount+=1}removeReference(){this._referenceCount-=1}addRigidBodyReference(e){return!this._rigidBodyReferences.has(e)&&(e.setWorldReference(this),this._rigidBodyReferences.add(e),!0)}removeRigidBodyReference(e){return!!this._rigidBodyReferences.delete(e)&&(e.setWorldReference(null),!0)}addRigidBodyBundleReference(e){return!this._rigidBodyBundleReferences.has(e)&&(e.setWorldReference(this),this._rigidBodyBundleReferences.add(e),!0)}removeRigidBodyBundleReference(e){return!!this._rigidBodyBundleReferences.delete(e)&&(e.setWorldReference(null),!0)}addConstraintReference(e){return!this._constraintReferences.has(e)&&(e.setWorldReference(this),this._constraintReferences.add(e),!0)}removeConstraintReference(e){return!!this._constraintReferences.delete(e)&&(e.setWorldReference(null),!0)}}function i(e){e.dispose()}const s=new WeakMap;class o{_runtime;_inner;constructor(e){this._runtime=e;const n=e.wasmInstance.createPhysicsWorld();this._inner=new r(new WeakRef(e),n);let t=s.get(e.wasmInstance);void 0===t&&(t=new FinalizationRegistry(i),s.set(e.wasmInstance,t)),t.register(this,this._inner,this)}dispose(){if(0===this._inner.ptr)return;this._inner.dispose();const e=s.get(this._runtime.wasmInstance);e?.unregister(this)}get ptr(){return this._inner.ptr}addReference(){this._inner.addReference()}removeReference(){this._inner.removeReference()}_nullCheck(){if(0===this._inner.ptr)throw new Error("Cannot access disposed physics world")}setGravity(e){this._nullCheck(),this._runtime.lock.wait(),this._runtime.wasmInstance.physicsWorldSetGravity(this._inner.ptr,e.x,e.y,e.z)}stepSimulation(e,n,t){this._nullCheck(),this._runtime.lock.wait(),this._runtime.wasmInstance.physicsWorldStepSimulation(this._inner.ptr,e,n,t)}addRigidBody(e){if(e.runtime!==this._runtime)throw new Error("Cannot add rigid body from different runtime");return this._nullCheck(),!!this._inner.addRigidBodyReference(e)&&(this._runtime.lock.wait(),this._runtime.wasmInstance.physicsWorldAddRigidBody(this._inner.ptr,e.ptr),!0)}removeRigidBody(e){return this._nullCheck(),!!this._inner.removeRigidBodyReference(e)&&(this._runtime.lock.wait(),this._runtime.wasmInstance.physicsWorldRemoveRigidBody(this._inner.ptr,e.ptr),!0)}addRigidBodyBundle(e){if(e.runtime!==this._runtime)throw new Error("Cannot add rigid body bundle from different runtime");return this._nullCheck(),!!this._inner.addRigidBodyBundleReference(e)&&(this._runtime.lock.wait(),this._runtime.wasmInstance.physicsWorldAddRigidBodyBundle(this._inner.ptr,e.ptr),!0)}removeRigidBodyBundle(e){return this._nullCheck(),!!this._inner.removeRigidBodyBundleReference(e)&&(this._runtime.lock.wait(),this._runtime.wasmInstance.physicsWorldRemoveRigidBodyBundle(this._inner.ptr,e.ptr),!0)}addConstraint(e,n){if(e.runtime!==this._runtime)throw new Error("Cannot add constraint from different runtime");return this._nullCheck(),!!this._inner.addConstraintReference(e)&&(this._runtime.lock.wait(),this._runtime.wasmInstance.physicsWorldAddConstraint(this._inner.ptr,e.ptr,n),!0)}removeConstraint(e){return this._nullCheck(),!!this._inner.removeConstraintReference(e)&&(this._runtime.lock.wait(),this._runtime.wasmInstance.physicsWorldRemoveConstraint(this._inner.ptr,e.ptr),!0)}}},2090:(e,n,t)=>{t.d(n,{D:()=>o});var r=t(5228),i=t(4444);class s{wait(){}}class o{wasmInstance;lock;constructor(e){this.wasmInstance=e,this.lock=new s}createRigidBodyImpl(){return new i.x}createRigidBodyBundleImpl(e){return new r.R(e.count)}}},9013:(e,n,t)=>{t.r(n),t.d(n,{SceneBuilder:()=>C}),t(203),t(1503),t(8227);var r=t(7456),i=t(5581),s=t(1513),o=t(9711),d=t(6041),a=t(9923),c=t(9899),h=t(8144),l=t(554),u=t(6738),f=t(7168),w=t(2090),_=t(7002),m=t(6405),R=t(472),p=t(1592),y=t(7648),g=t(5901),B=t(3477);class C{async build(e,n){const t=new l.Z(n);t.clearColor=new d.ov(.95,.95,.95,1);const C=new r.Lq("arcRotateCamera",0,0,500,new a.Pq(0,0,0),t);C.minZ=1,C.maxZ=1e3,C.setPosition(new a.Pq(60,40,-50)),C.attachControl(void 0,!1),C.inertia=.8,C.speed=10;const v=new s.g("hemisphericLight",new a.Pq(0,1,0),t);v.intensity=.5,v.specular=new d.v9(0,0,0),v.groundColor=new d.v9(1,1,1);const k=new i.Z("directionalLight",new a.Pq(.5,-1,1),t);k.intensity=.5;k.shadowMaxZ=60,k.shadowMinZ=-60,k.autoCalcShadowZBounds=!1,k.autoUpdateExtends=!1,k.shadowOrthoScale=0,k.orthoTop=60,k.orthoBottom=-60,k.orthoLeft=-60,k.orthoRight=60;const I=new o.o(2048,k,!0);I.transparencyShadow=!0,I.usePercentageCloserFiltering=!0,I.forceBackFacesOnly=!1,I.bias=.004,I.filteringQuality=o.o.QUALITY_MEDIUM;const S=await(0,u.e)(new _.t),W=new w.D(S),P=new R.y(W),b=new a.uq;{const e=(0,h.x)("ground",{size:120},t);e.rotationQuaternion=a.PT.RotationAxis(new a.Pq(1,0,0),Math.PI/2),I.addShadowCaster(e),e.receiveShadows=!0;const n=new m.Ty(W,new a.Pq(0,0,-1),0),r=new g.t(S);r.shape=n,a.uq.FromQuaternionToRef(e.rotationQuaternion,b),r.setInitialTransform(b),r.motionType=1;const i=new p.U(W,r);P.addRigidBody(i)}const q=1024,L=(0,c.an)("box",{size:2},t);I.addShadowCaster(L),L.receiveShadows=!0;const T=new Float32Array(16384);L.thinInstanceSetBuffer("matrix",T,16,!1);const x=new m.SA(W,new a.Pq(1,1,1)),A=new B.x(S,q);for(let e=0;e<q;++e){A.setShape(e,x);const n=a.uq.TranslationToRef(0,1+2*e,0,b);A.setInitialTransform(e,n),A.setFriction(e,1),A.setLinearDamping(e,.3),A.setAngularDamping(e,.3)}const M=new y.Y(W,A);P.addRigidBodyBundle(M);for(let e=0;e<q;e+=2){const n=[e,e+1],t=new f.vC(W,M,n,a.uq.Translation(0,-1.2,0),a.uq.Translation(0,1.2,0),!0);t.setLinearLowerLimit(new a.Pq(0,0,0)),t.setLinearUpperLimit(new a.Pq(0,0,0)),t.setAngularLowerLimit(new a.Pq(Math.PI/4,0,0)),t.setAngularUpperLimit(new a.Pq(0,0,0));for(let e=0;e<6;++e)t.enableSpring(e,!0),t.setStiffness(e,100),t.setDamping(e,1);P.addConstraint(t,!1)}return t.onBeforeRenderObservable.add((()=>{P.stepSimulation(1/60,10,1/60),M.getTransformMatricesToArray(T),L.thinInstanceBufferUpdated("matrix")})),t}}}}]);