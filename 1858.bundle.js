"use strict";(self.webpackChunkbabylon_bulletphysics=self.webpackChunkbabylon_bulletphysics||[]).push([[1858],{67648:(e,t,r)=>{r.d(t,{Y:()=>s});class n{_wasmInstance;_ptr;_shapeReferences;_referenceCount;_shadowCount;constructor(e,t,r){this._wasmInstance=e,this._ptr=t,this._shapeReferences=r;for(const e of r)e.addReference();this._referenceCount=0,this._shadowCount=0}dispose(){if(this._referenceCount>0)throw new Error("Cannot dispose rigid body bundle while it still has references");if(0!==this._ptr){this._wasmInstance.deref()?.destroyRigidBodyBundle(this._ptr),this._ptr=0;for(const e of this._shapeReferences)e.removeReference();this._shapeReferences.clear()}}get ptr(){return this._ptr}addReference(){this._referenceCount+=1}removeReference(){this._referenceCount-=1}get hasReferences(){return 0<this._referenceCount}addShadow(){this._shadowCount+=1}removeShadow(){this._shadowCount-=1}get hasShadows(){return 0<this._shadowCount}}function i(e){e.dispose()}const o=new WeakMap;class s{runtime;_motionStatesPtr;_bufferedMotionStatesPtr;_worldTransformPtrArray;_temporalKinematicStatesPtr;_inner;_count;_worldReference;impl;isContainsDynamic;constructor(e,t){if(0===t.ptr)throw new Error("Cannot create rigid body bundle with null pointer");const r=t.count,s=new Set;for(let n=0;n<r;++n){const r=t.getShape(n);if(null===r)throw new Error("Cannot create rigid body bundle with null shape");if(r.runtime!==e)throw new Error("Cannot create rigid body bundle with shapes from different runtimes");s.add(r)}this.runtime=e;const a=e.wasmInstance,h=a.createRigidBodyBundle(t.ptr,r),c=a.rigidBodyBundleGetMotionStatesPtr(h);this._motionStatesPtr=a.createTypedArray(Float32Array,c,20*r);const d=a.rigidBodyBundleGetBufferedMotionStatesPtr(h);this._bufferedMotionStatesPtr=a.createTypedArray(Float32Array,d,20*r);const l=[];let f=!1;for(let e=0;e<r;++e)if(0===t.getMotionType(e)){f=!0;const t=a.rigidBodyBundleGetWorldTransformPtr(h,e);l.push(a.createTypedArray(Float32Array,t,16))}else l.push(null);this._worldTransformPtrArray=l;const u=a.rigidBodyBundleGetTemporalKinematicStatesPtr(h);this._temporalKinematicStatesPtr=a.createTypedArray(Uint8Array,u,r),this._inner=new n(new WeakRef(e.wasmInstance),h,s),this._count=r,this._worldReference=null;let m=o.get(a);void 0===m&&(m=new FinalizationRegistry(i),o.set(a,m)),m.register(this,this._inner,this),this.impl=e.createRigidBodyBundleImpl(this),this.isContainsDynamic=f}dispose(){if(0===this._inner.ptr)return;this._inner.dispose();const e=o.get(this.runtime.wasmInstance);e?.unregister(this)}get ptr(){return this._inner.ptr}get count(){return this._count}addReference(){this._inner.addReference()}removeReference(){this._inner.removeReference()}addShadowReference(){this._inner.addShadow()}removeShadowReference(){this._inner.removeShadow()}get hasShadows(){return this._inner.hasShadows}setWorldReference(e){if(null!==this._worldReference&&null!==e)throw new Error("Cannot add rigid body bundle to multiple worlds");this._worldReference!==e&&(this._worldReference=e,null!==e?this._inner.addReference():this._inner.removeReference())}getWorldReference(){return this._worldReference}updateBufferedMotionStates(e){if(this._nullCheck(),e){const e=this.runtime.wasmInstance.rigidBodyBundleGetMotionStatesPtr(this._inner.ptr);this._bufferedMotionStatesPtr=this.runtime.wasmInstance.createTypedArray(Float32Array,e,20*this._count)}else{const e=this.runtime.wasmInstance.rigidBodyBundleGetBufferedMotionStatesPtr(this._inner.ptr);this._bufferedMotionStatesPtr=this.runtime.wasmInstance.createTypedArray(Float32Array,e,20*this._count)}}_nullCheck(){if(0===this._inner.ptr)throw new Error("Cannot access disposed rigid body bundle")}getTransformMatrixToRef(e,t){if(this._nullCheck(),e<0||this._count<=e)throw new RangeError("Index out of range");this._inner.hasReferences&&this.impl.shouldSync&&this.runtime.lock.wait();const r=this._bufferedMotionStatesPtr.array,n=20*e;return t.set(r[n+4+0],r[n+8+0],r[n+12+0],0,r[n+4+1],r[n+8+1],r[n+12+1],0,r[n+4+2],r[n+8+2],r[n+12+2],0,r[n+16+0],r[n+16+1],r[n+16+2],1)}getTransformMatrixToArray(e,t,r=0){if(this._nullCheck(),e<0||this._count<=e)throw new RangeError("Index out of range");this._inner.hasReferences&&this.impl.shouldSync&&this.runtime.lock.wait();const n=this._bufferedMotionStatesPtr.array,i=20*e;t[r+0]=n[i+4+0],t[r+1]=n[i+8+0],t[r+2]=n[i+12+0],t[r+3]=0,t[r+4]=n[i+4+1],t[r+5]=n[i+8+1],t[r+6]=n[i+12+1],t[r+7]=0,t[r+8]=n[i+4+2],t[r+9]=n[i+8+2],t[r+10]=n[i+12+2],t[r+11]=0,t[r+12]=n[i+16+0],t[r+13]=n[i+16+1],t[r+14]=n[i+16+2],t[r+15]=1}getTransformMatricesToArray(e,t=0){this._nullCheck(),this._inner.hasReferences&&this.impl.shouldSync&&this.runtime.lock.wait();const r=this._bufferedMotionStatesPtr.array,n=this._count;let i=0,o=t;for(let t=0;t<n;++t)e[o+0]=r[i+4+0],e[o+1]=r[i+8+0],e[o+2]=r[i+12+0],e[o+3]=0,e[o+4]=r[i+4+1],e[o+5]=r[i+8+1],e[o+6]=r[i+12+1],e[o+7]=0,e[o+8]=r[i+4+2],e[o+9]=r[i+8+2],e[o+10]=r[i+12+2],e[o+11]=0,e[o+12]=r[i+16+0],e[o+13]=r[i+16+1],e[o+14]=r[i+16+2],e[o+15]=1,i+=20,o+=16}setTransformMatrix(e,t){this.setTransformMatrixFromArray(e,t.m,0)}setTransformMatrixFromArray(e,t,r=0){if(this._nullCheck(),e<0||this._count<=e)throw new RangeError("Index out of range");this._inner.hasReferences&&this.impl.shouldSync&&this.runtime.lock.wait(),this.impl.setTransformMatrixFromArray(this._motionStatesPtr,this._temporalKinematicStatesPtr,e,t,r)}setTransformMatricesFromArray(e,t=0){if(this._nullCheck(),e.length<16*this._count)throw new RangeError("Array is too short");this._inner.hasReferences&&this.impl.shouldSync&&this.runtime.lock.wait(),this.impl.setTransformMatricesFromArray(this._motionStatesPtr,this._temporalKinematicStatesPtr,e,t)}setDynamicTransformMatrix(e){this.setTransformMatricesFromArray(e.m,0)}setDynamicTransformMatrixFromArray(e,t,r=0){if(null===this._worldTransformPtrArray[e])throw new Error("Cannot set dynamic transform of non-dynamic body");if(this._nullCheck(),e<0||this._count<=e)throw new RangeError("Index out of range");this._inner.hasReferences&&this.impl.shouldSync&&this.runtime.lock.wait(),this.impl.setDynamicTransformMatrixFromArray(this._worldTransformPtrArray,e,t,r)}get needToCommit(){return this.impl.needToCommit??!1}commitToWasm(){if(void 0===this.impl.commitToWasm)throw new Error("commit only avalible on buffered evaluation mode");this._nullCheck(),this.runtime.lock.wait(),this.impl.commitToWasm(this.runtime.wasmInstance,this._inner.ptr,this._motionStatesPtr,this._temporalKinematicStatesPtr,this._worldTransformPtrArray)}}},11858:(e,t,r)=>{r.r(t),r.d(t,{SceneBuilder:()=>P}),r(90203),r(33832),r(2093);var n=r(7839),i=r(52046),o=r(71513),s=r(18595),a=r(26041),h=r(79923),c=r(96793),d=r(58144),l=r(87491),f=r(46738),u=r(67168),m=r(23948),w=r(29009),_=r(27744),p=r(26405),y=r(1592),g=r(67648),S=r(35901),T=r(3477),R=r(89800);class P{async build(e,t){const r=new l.Z(t);r.clearColor=new a.ov(.95,.95,.95,1);const P=new n.L("arcRotateCamera",0,0,500,new h.Pq(0,0,0),r);P.minZ=1,P.maxZ=3e3,P.setPosition(new h.Pq(60,40,-50).scaleInPlace(10)),P.attachControl(void 0,!1),P.inertia=.8,P.speed=10;const C=new o.g("hemisphericLight",new h.Pq(0,1,0),r);C.intensity=.5,C.specular=new a.v9(0,0,0),C.groundColor=new a.v9(1,1,1);const b=new i.Z("directionalLight",new h.Pq(.5,-1,1),r);b.intensity=.5;b.shadowMaxZ=250,b.shadowMinZ=-250,b.autoCalcShadowZBounds=!1,b.autoUpdateExtends=!1,b.shadowOrthoScale=0,b.orthoTop=250,b.orthoBottom=-250,b.orthoLeft=-250,b.orthoRight=250;const A=new s.o(2048,b,!0);A.transparencyShadow=!0,A.usePercentageCloserFiltering=!0,A.forceBackFacesOnly=!1,A.bias=.004,A.filteringQuality=s.o.QUALITY_MEDIUM;const B=await(0,f.e)(new _.t,4),M=new m.h(B,{allowDynamicShadow:!0,preserveBackBuffer:!0});M.evaluationType=w.q.Immediate;const I=new h.uq;{const e=(0,d.x)("ground",{size:500},r);e.rotationQuaternion=h.PT.RotationAxis(new h.Pq(1,0,0),Math.PI/2),A.addShadowCaster(e),e.receiveShadows=!0;const t=new p.Ty(M,new h.Pq(0,0,-1),0),n=new S.t(B);n.shape=t,h.uq.FromQuaternionToRef(e.rotationQuaternion,I),n.setInitialTransform(I),n.motionType=1;const i=new y.U(M,n);M.addRigidBodyToGlobal(i)}const k=512,v=(0,c.an)("box",{size:2},r);A.addShadowCaster(v),v.receiveShadows=!0;const x=new Float32Array(32768);v.thinInstanceSetBuffer("matrix",x,16,!1);const F=new Float32Array(8192),q=["#ff0000","#00ff00","#0000ff","#ffff00","#ff00ff","#00ffff"];for(let e=0;e<4;++e){const t=a.ov.FromHexString(q[e%q.length]);for(let r=0;r<k;++r)F[e*k*4+4*r+0]=t.r,F[e*k*4+4*r+1]=t.g,F[e*k*4+4*r+2]=t.b,F[e*k*4+4*r+3]=t.a}v.thinInstanceSetBuffer("color",F,4,!1);const E=new p.SA(M,new h.Pq(1,1,1)),L=[];for(let e=0;e<2;++e)for(let t=0;t<2;++t){const r=2*e+t,n=20*(t-1)+10,i=20*(e-1)+10,o=new T.x(B,k);for(let e=0;e<k;++e){o.setShape(e,E);const t=h.uq.TranslationToRef(n,1+2*e,i,I);o.setInitialTransform(e,t),o.setFriction(e,1),o.setLinearDamping(e,.3),o.setAngularDamping(e,.3)}const s=new g.Y(M,o);M.addRigidBodyBundle(s,r);for(let e=0;e<4;++e)e!==r&&M.addRigidBodyBundleShadow(s,e);for(let e=0;e<k;e+=2){const t=[e,e+1],n=new u.vC(M,s,t,h.uq.Translation(0,-1.2,0),h.uq.Translation(0,1.2,0),!0);n.setLinearLowerLimit(new h.Pq(0,0,0)),n.setLinearUpperLimit(new h.Pq(0,0,0)),n.setAngularLowerLimit(new h.Pq(Math.PI/4,0,0)),n.setAngularUpperLimit(new h.Pq(0,0,0));for(let e=0;e<6;++e)n.enableSpring(e,!0),n.setStiffness(e,100),n.setDamping(e,1);M.addConstraint(n,r,!1)}L.push(s)}console.log("Rigid body count:",2048),M.onTickObservable.add((()=>{for(let e=0;e<L.length;++e)L[e].getTransformMatricesToArray(x,e*k*16);v.thinInstanceBufferUpdated("matrix")}));const D=new R.X((()=>{const e=performance.now();M.afterAnimations(1/60*1e3);const t=performance.now(),n=t-e;return r.render(),[n,performance.now()-t]}));return D.sampleCount=5e3,D.runBench(),M.register(r),r}}}}]);