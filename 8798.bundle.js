"use strict";(self.webpackChunkbabylon_bulletphysics=self.webpackChunkbabylon_bulletphysics||[]).push([[8798],{67168:(e,t,r)=>{r.d(t,{o6:()=>c,vC:()=>h});class n{_wasmInstance;_ptr;_bodyReference;_referenceCount;constructor(e,t,r){this._wasmInstance=e,this._ptr=t,this._bodyReference=r,Array.isArray(r)?(r[0].addReference(),r[1].addReference()):r.addReference(),this._referenceCount=0}dispose(){if(this._referenceCount>0)throw new Error("Cannot dispose constraint while it still has references");0!==this._ptr&&(this._wasmInstance.deref()?.destroyConstraint(this._ptr),this._ptr=0,Array.isArray(this._bodyReference)?(this._bodyReference[0].removeReference(),this._bodyReference[1].removeReference()):this._bodyReference.removeReference(),this._bodyReference=null)}get ptr(){return this._ptr}addReference(){this._referenceCount+=1}removeReference(){this._referenceCount-=1}get hasReferences(){return 0<this._referenceCount}}function i(e){e.dispose()}const s=new WeakMap;class a{runtime;_inner;_worldReference;constructor(e,t,r){if(Array.isArray(r)){if(r[0].runtime!==e||r[1].runtime!==e)throw new Error("Cannot create constraint between bodies from different runtimes")}else if(r.runtime!==e)throw new Error("Cannot create constraint between body and bundle from different runtimes");this.runtime=e,this._inner=new n(new WeakRef(e.wasmInstance),t,r),this._worldReference=null;let a=s.get(e.wasmInstance);void 0===a&&(a=new FinalizationRegistry(i),s.set(e.wasmInstance,a)),a.register(this,this._inner,this)}dispose(){if(0===this._inner.ptr)return;this._inner.dispose();const e=s.get(this.runtime.wasmInstance);e?.unregister(this)}get ptr(){return this._inner.ptr}addReference(){this._inner.addReference()}removeReference(){this._inner.removeReference()}setWorldReference(e){if(null!==this._worldReference&&null!==e)throw new Error("Cannot add constraint to multiple worlds");this._worldReference!==e&&(this._worldReference=e,null!==e?this._inner.addReference():this._inner.removeReference())}}const o=64;class c extends a{constructor(e,t,r,n,i,s){const a=e.wasmInstance,c=a.allocateBuffer(o),h=a.createTypedArray(Float32Array,c,16);n.copyToArray(h.array);const d=a.allocateBuffer(o),l=a.createTypedArray(Float32Array,d,16);i.copyToArray(l.array);const f=Array.isArray(r),u=f?a.createGeneric6DofConstraintFromBundle(t.ptr,r[0],r[1],c,d,s):a.createGeneric6DofConstraint(t.ptr,r.ptr,c,d,s);a.deallocateBuffer(c,o),a.deallocateBuffer(d,o),super(e,u,f?t:[t,r])}setLinearLowerLimit(e){this._inner.hasReferences&&this.runtime.lock.wait(),this.runtime.wasmInstance.constraintSetLinearLowerLimit(this._inner.ptr,e.x,e.y,e.z)}setLinearUpperLimit(e){this._inner.hasReferences&&this.runtime.lock.wait(),this.runtime.wasmInstance.constraintSetLinearUpperLimit(this._inner.ptr,e.x,e.y,e.z)}setAngularLowerLimit(e){this._inner.hasReferences&&this.runtime.lock.wait(),this.runtime.wasmInstance.constraintSetAngularLowerLimit(this._inner.ptr,e.x,e.y,e.z)}setAngularUpperLimit(e){this._inner.hasReferences&&this.runtime.lock.wait(),this.runtime.wasmInstance.constraintSetAngularUpperLimit(this._inner.ptr,e.x,e.y,e.z)}}class h extends a{constructor(e,t,r,n,i,s){const a=e.wasmInstance,c=a.allocateBuffer(o),h=a.createTypedArray(Float32Array,c,16);n.copyToArray(h.array);const d=a.allocateBuffer(o),l=a.createTypedArray(Float32Array,d,16);i.copyToArray(l.array);const f=Array.isArray(r),u=f?a.createGeneric6DofSpringConstraintFromBundle(t.ptr,r[0],r[1],c,d,s):a.createGeneric6DofSpringConstraint(t.ptr,r.ptr,c,d,s);a.deallocateBuffer(c,o),a.deallocateBuffer(d,o),super(e,u,f?t:[t,r])}setLinearLowerLimit(e){this._inner.hasReferences&&this.runtime.lock.wait(),this.runtime.wasmInstance.constraintSetLinearLowerLimit(this._inner.ptr,e.x,e.y,e.z)}setLinearUpperLimit(e){this._inner.hasReferences&&this.runtime.lock.wait(),this.runtime.wasmInstance.constraintSetLinearUpperLimit(this._inner.ptr,e.x,e.y,e.z)}setAngularLowerLimit(e){this._inner.hasReferences&&this.runtime.lock.wait(),this.runtime.wasmInstance.constraintSetAngularLowerLimit(this._inner.ptr,e.x,e.y,e.z)}setAngularUpperLimit(e){this._inner.hasReferences&&this.runtime.lock.wait(),this.runtime.wasmInstance.constraintSetAngularUpperLimit(this._inner.ptr,e.x,e.y,e.z)}enableSpring(e,t){this._inner.hasReferences&&this.runtime.lock.wait(),this.runtime.wasmInstance.constraintEnableSpring(this._inner.ptr,e,t)}setStiffness(e,t){this._inner.hasReferences&&this.runtime.lock.wait(),this.runtime.wasmInstance.constraintSetStiffness(this._inner.ptr,e,t)}setDamping(e,t){this._inner.hasReferences&&this.runtime.lock.wait(),this.runtime.wasmInstance.constraintSetDamping(this._inner.ptr,e,t)}}},1592:(e,t,r)=>{r.d(t,{U:()=>a});class n{_wasmInstance;_ptr;_shapeReference;_referenceCount;_shadowCount;constructor(e,t,r){this._wasmInstance=e,this._ptr=t,this._shapeReference=r,r.addReference(),this._referenceCount=0,this._shadowCount=0}dispose(){if(this._referenceCount>0)throw new Error("Cannot dispose rigid body while it still has references");if(this._shadowCount>0)throw new Error("Cannot dispose rigid body while it still has shadows");0!==this._ptr&&(this._wasmInstance.deref()?.destroyRigidBody(this._ptr),this._ptr=0,this._shapeReference.removeReference(),this._shapeReference=null)}get ptr(){return this._ptr}addReference(){this._referenceCount+=1}removeReference(){this._referenceCount-=1}get hasReferences(){return 0<this._referenceCount}addShadow(){this._shadowCount+=1}removeShadow(){this._shadowCount-=1}get hasShadows(){return 0<this._shadowCount}}function i(e){e.dispose()}const s=new WeakMap;class a{runtime;_motionStatePtr;_bufferedMotionStatePtr;_inner;_worldReference;impl;isDynamic;constructor(e,t,r){const a=void 0!==r?t.getPtr(r):t.ptr;if(0===a)throw new Error("Cannot create rigid body with null pointer");let o;if(o=void 0!==r?t.getShape(r):t.shape,null===o)throw new Error("Cannot create rigid body with null shape");if(o.runtime!==e)throw new Error("Cannot create rigid body with shapes from different runtimes");this.runtime=e;const c=e.wasmInstance,h=c.createRigidBody(a),d=c.rigidBodyGetMotionStatePtr(h);this._motionStatePtr=c.createTypedArray(Float32Array,d,20);const l=c.rigidBodyGetBufferedMotionStatePtr(h);this._bufferedMotionStatePtr=c.createTypedArray(Float32Array,l,20),this._inner=new n(new WeakRef(e.wasmInstance),h,o),this._worldReference=null;let f=s.get(c);void 0===f&&(f=new FinalizationRegistry(i),s.set(c,f)),f.register(this,this._inner,this),this.impl=e.createRigidBodyImpl(),this.isDynamic=void 0!==r?0===t.getMotionType(r):0===t.motionType}dispose(){if(0===this._inner.ptr)return;this._inner.dispose();const e=s.get(this.runtime.wasmInstance);e?.unregister(this)}get ptr(){return this._inner.ptr}addReference(){this._inner.addReference()}removeReference(){this._inner.removeReference()}addShadowReference(){this._inner.addShadow()}removeShadowReference(){this._inner.removeShadow()}get hasShadows(){return this._inner.hasShadows}setWorldReference(e){if(null!==this._worldReference&&null!==e)throw new Error("Cannot add rigid body to multiple worlds");this._worldReference!==e&&(this._worldReference=e,null!==this._worldReference?this._inner.addReference():this._inner.removeReference())}getWorldReference(){return this._worldReference}updateBufferedMotionState(e){if(this._nullCheck(),e){const e=this.runtime.wasmInstance.rigidBodyGetMotionStatePtr(this._inner.ptr);this._bufferedMotionStatePtr=this.runtime.wasmInstance.createTypedArray(Float32Array,e,20)}else{const e=this.runtime.wasmInstance.rigidBodyGetBufferedMotionStatePtr(this._inner.ptr);this._bufferedMotionStatePtr=this.runtime.wasmInstance.createTypedArray(Float32Array,e,20)}}_nullCheck(){if(0===this._inner.ptr)throw new Error("Cannot access disposed rigid body")}getTransformMatrixToRef(e){this._nullCheck(),this._inner.hasReferences&&this.impl.shouldSync&&this.runtime.lock.wait();const t=this._bufferedMotionStatePtr.array;return e.set(t[4],t[8],t[12],0,t[5],t[9],t[13],0,t[6],t[10],t[14],0,t[16],t[17],t[18],1)}getTransformMatrixToArray(e,t=0){this._nullCheck(),this._inner.hasReferences&&this.impl.shouldSync&&this.runtime.lock.wait();const r=this._bufferedMotionStatePtr.array;e[t+0]=r[4],e[t+1]=r[8],e[t+2]=r[12],e[t+3]=0,e[t+4]=r[5],e[t+5]=r[9],e[t+6]=r[13],e[t+7]=0,e[t+8]=r[6],e[t+9]=r[10],e[t+10]=r[14],e[t+11]=0,e[t+12]=r[16],e[t+13]=r[17],e[t+14]=r[18],e[t+15]=1}setTransformMatrix(e){this.setTransformMatrixFromArray(e.m,0)}setTransformMatrixFromArray(e,t=0){this._nullCheck(),this._inner.hasReferences&&this.impl.shouldSync&&this.runtime.lock.wait(),this.impl.setTransformMatrixFromArray(this._motionStatePtr,e,t)}}},8798:(e,t,r)=>{r.r(t),r.d(t,{SceneBuilder:()=>C}),r(90203),r(33832),r(2093);var n=r(7839),i=r(52046),s=r(71513),a=r(18595),o=r(26041),c=r(79923),h=r(96793),d=r(58144),l=r(87491),f=r(46738),u=r(67168),w=r(2090),m=r(27744),p=r(91167),_=r(15733),y=r(26405),R=r(1592),g=r(35901),S=r(89800);class C{async build(e,t){const r=new l.Z(t);r.clearColor=new o.ov(.95,.95,.95,1);const C=new n.L("arcRotateCamera",0,0,500,new c.Pq(0,0,0),r);C.minZ=1,C.maxZ=3e3,C.setPosition(new c.Pq(60,40,-50).scaleInPlace(10)),C.attachControl(void 0,!1),C.inertia=.8,C.speed=10;const A=new s.g("hemisphericLight",new c.Pq(0,1,0),r);A.intensity=.5,A.specular=new o.v9(0,0,0),A.groundColor=new o.v9(1,1,1);const L=new i.Z("directionalLight",new c.Pq(.5,-1,1),r);L.intensity=.5;L.shadowMaxZ=250,L.shadowMinZ=-250,L.autoCalcShadowZBounds=!1,L.autoUpdateExtends=!1,L.shadowOrthoScale=0,L.orthoTop=250,L.orthoBottom=-250,L.orthoLeft=-250,L.orthoRight=250;const b=new a.o(2048,L,!0);b.transparencyShadow=!0,b.usePercentageCloserFiltering=!0,b.forceBackFacesOnly=!1,b.bias=.004,b.filteringQuality=a.o.QUALITY_MEDIUM;const I=parseInt(prompt("Thread count","2"));console.log("Thread count:",I);const T=1===I?await(0,f.e)(new p.Z):await(0,f.e)(new m.t,I),B=new w.D(T),P=new _.F(B,!0),v=new c.uq;{const e=(0,d.x)("ground",{size:500},r);e.rotationQuaternion=c.PT.RotationAxis(new c.Pq(1,0,0),Math.PI/2),b.addShadowCaster(e),e.receiveShadows=!0;const t=new y.Ty(B,new c.Pq(0,0,-1),0),n=new g.t(T);n.shape=t,c.uq.FromQuaternionToRef(e.rotationQuaternion,v),n.setInitialTransform(v),n.motionType=1;const i=new R.U(B,n);P.addRigidBodyToGlobal(i)}const k=512,M=(0,h.an)("box",{size:2},r);b.addShadowCaster(M),M.receiveShadows=!0;const x=new Float32Array(262144);M.thinInstanceSetBuffer("matrix",x,16,!1);const F=new y.SA(B,new c.Pq(1,1,1)),U=[];for(let e=0;e<4;++e)for(let t=0;t<8;++t){const r=8*e+t,n=60*(t-4)+30,i=60*(e-2)+30,s=[];for(let e=0;e<k;++e){const t=new g.t(T);t.shape=F;const r=c.uq.TranslationToRef(n,1+2*e,i,v);t.setInitialTransform(r),t.friction=1,t.linearDamping=.3,t.angularDamping=.3,s.push(t)}for(let e=0;e<k;++e){const t=s[e],n=new R.U(B,t);P.addRigidBody(n,r),U.push(n)}for(let e=0;e<k;e+=2){const t=[r*k+e,r*k+e+1],n=new u.vC(B,U[t[0]],U[t[1]],c.uq.Translation(0,-1.2,0),c.uq.Translation(0,1.2,0),!0);n.setLinearLowerLimit(new c.Pq(0,0,0)),n.setLinearUpperLimit(new c.Pq(0,0,0)),n.setAngularLowerLimit(new c.Pq(Math.PI/4,0,0)),n.setAngularUpperLimit(new c.Pq(0,0,0));for(let e=0;e<6;++e)n.enableSpring(e,!0),n.setStiffness(e,100),n.setDamping(e,1);P.addConstraint(n,r,!0)}}return console.log("Rigid body count:",16384),new S.X((()=>{const e=performance.now();P.stepSimulation(1/60,10,1/60);for(let e=0;e<U.length;++e){const t=16*e;U[e].getTransformMatrixToRef(v),v.copyToArray(x,t)}M.thinInstanceBufferUpdated("matrix");const t=performance.now(),n=t-e;return r.render(),[n,performance.now()-t]})).runBench(),r.onBeforeRenderObservable.add((()=>{P.stepSimulation(1/60,10,1/60);for(let e=0;e<U.length;++e)U[e].getTransformMatrixToArray(x,16*e);M.thinInstanceBufferUpdated("matrix")})),r}}}}]);