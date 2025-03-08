"use strict";(self.webpackChunkbabylon_bulletphysics=self.webpackChunkbabylon_bulletphysics||[]).push([[2966],{67648:(e,t,r)=>{r.d(t,{Y:()=>s});class n{_wasmInstance;_ptr;_shapeReferences;_referenceCount;_shadowCount;constructor(e,t,r){this._wasmInstance=e,this._ptr=t,this._shapeReferences=r;for(const e of r)e.addReference();this._referenceCount=0,this._shadowCount=0}dispose(){if(this._referenceCount>0)throw new Error("Cannot dispose rigid body bundle while it still has references");if(0!==this._ptr){this._wasmInstance.deref()?.destroyRigidBodyBundle(this._ptr),this._ptr=0;for(const e of this._shapeReferences)e.removeReference();this._shapeReferences.clear()}}get ptr(){return this._ptr}addReference(){this._referenceCount+=1}removeReference(){this._referenceCount-=1}get hasReferences(){return 0<this._referenceCount}addShadow(){this._shadowCount+=1}removeShadow(){this._shadowCount-=1}get hasShadows(){return 0<this._shadowCount}}function o(e){e.dispose()}const i=new WeakMap;class s{runtime;_motionStatesPtr;_bufferedMotionStatesPtr;_worldTransformPtrArray;_temporalKinematicStatesPtr;_inner;_count;_worldReference;impl;isContainsDynamic;constructor(e,t){if(0===t.ptr)throw new Error("Cannot create rigid body bundle with null pointer");const r=t.count,s=new Set;for(let n=0;n<r;++n){const r=t.getShape(n);if(null===r)throw new Error("Cannot create rigid body bundle with null shape");if(r.runtime!==e)throw new Error("Cannot create rigid body bundle with shapes from different runtimes");s.add(r)}this.runtime=e;const a=e.wasmInstance,h=a.createRigidBodyBundle(t.ptr,r),c=a.rigidBodyBundleGetMotionStatesPtr(h);this._motionStatesPtr=a.createTypedArray(Float32Array,c,20*r);const d=a.rigidBodyBundleGetBufferedMotionStatesPtr(h);this._bufferedMotionStatesPtr=a.createTypedArray(Float32Array,d,20*r);const l=[];let u=!1;for(let e=0;e<r;++e)if(0===t.getMotionType(e)){u=!0;const t=a.rigidBodyBundleGetWorldTransformPtr(h,e);l.push(a.createTypedArray(Float32Array,t,16))}else l.push(null);this._worldTransformPtrArray=l;const m=a.rigidBodyBundleGetTemporalKinematicStatesPtr(h);this._temporalKinematicStatesPtr=a.createTypedArray(Uint8Array,m,r),this._inner=new n(new WeakRef(e.wasmInstance),h,s),this._count=r,this._worldReference=null;let f=i.get(a);void 0===f&&(f=new FinalizationRegistry(o),i.set(a,f)),f.register(this,this._inner,this),this.impl=e.createRigidBodyBundleImpl(this),this.isContainsDynamic=u}dispose(){if(0===this._inner.ptr)return;this._inner.dispose();const e=i.get(this.runtime.wasmInstance);e?.unregister(this)}get ptr(){return this._inner.ptr}get count(){return this._count}addReference(){this._inner.addReference()}removeReference(){this._inner.removeReference()}addShadowReference(){this._inner.addShadow()}removeShadowReference(){this._inner.removeShadow()}get hasShadows(){return this._inner.hasShadows}setWorldReference(e){if(null!==this._worldReference&&null!==e)throw new Error("Cannot add rigid body bundle to multiple worlds");this._worldReference!==e&&(this._worldReference=e,null!==e?this._inner.addReference():this._inner.removeReference())}getWorldReference(){return this._worldReference}updateBufferedMotionStates(e){if(this._nullCheck(),e){const e=this.runtime.wasmInstance.rigidBodyBundleGetMotionStatesPtr(this._inner.ptr);this._bufferedMotionStatesPtr=this.runtime.wasmInstance.createTypedArray(Float32Array,e,20*this._count)}else{const e=this.runtime.wasmInstance.rigidBodyBundleGetBufferedMotionStatesPtr(this._inner.ptr);this._bufferedMotionStatesPtr=this.runtime.wasmInstance.createTypedArray(Float32Array,e,20*this._count)}}_nullCheck(){if(0===this._inner.ptr)throw new Error("Cannot access disposed rigid body bundle")}getTransformMatrixToRef(e,t){if(this._nullCheck(),e<0||this._count<=e)throw new RangeError("Index out of range");this._inner.hasReferences&&this.impl.shouldSync&&this.runtime.lock.wait();const r=this._bufferedMotionStatesPtr.array,n=20*e;return t.set(r[n+4+0],r[n+8+0],r[n+12+0],0,r[n+4+1],r[n+8+1],r[n+12+1],0,r[n+4+2],r[n+8+2],r[n+12+2],0,r[n+16+0],r[n+16+1],r[n+16+2],1)}getTransformMatrixToArray(e,t,r=0){if(this._nullCheck(),e<0||this._count<=e)throw new RangeError("Index out of range");this._inner.hasReferences&&this.impl.shouldSync&&this.runtime.lock.wait();const n=this._bufferedMotionStatesPtr.array,o=20*e;t[r+0]=n[o+4+0],t[r+1]=n[o+8+0],t[r+2]=n[o+12+0],t[r+3]=0,t[r+4]=n[o+4+1],t[r+5]=n[o+8+1],t[r+6]=n[o+12+1],t[r+7]=0,t[r+8]=n[o+4+2],t[r+9]=n[o+8+2],t[r+10]=n[o+12+2],t[r+11]=0,t[r+12]=n[o+16+0],t[r+13]=n[o+16+1],t[r+14]=n[o+16+2],t[r+15]=1}getTransformMatricesToArray(e,t=0){this._nullCheck(),this._inner.hasReferences&&this.impl.shouldSync&&this.runtime.lock.wait();const r=this._bufferedMotionStatesPtr.array,n=this._count;let o=0,i=t;for(let t=0;t<n;++t)e[i+0]=r[o+4+0],e[i+1]=r[o+8+0],e[i+2]=r[o+12+0],e[i+3]=0,e[i+4]=r[o+4+1],e[i+5]=r[o+8+1],e[i+6]=r[o+12+1],e[i+7]=0,e[i+8]=r[o+4+2],e[i+9]=r[o+8+2],e[i+10]=r[o+12+2],e[i+11]=0,e[i+12]=r[o+16+0],e[i+13]=r[o+16+1],e[i+14]=r[o+16+2],e[i+15]=1,o+=20,i+=16}setTransformMatrix(e,t){this.setTransformMatrixFromArray(e,t.m,0)}setTransformMatrixFromArray(e,t,r=0){if(this._nullCheck(),e<0||this._count<=e)throw new RangeError("Index out of range");this._inner.hasReferences&&this.impl.shouldSync&&this.runtime.lock.wait(),this.impl.setTransformMatrixFromArray(this._motionStatesPtr,this._temporalKinematicStatesPtr,e,t,r)}setTransformMatricesFromArray(e,t=0){if(this._nullCheck(),e.length<16*this._count)throw new RangeError("Array is too short");this._inner.hasReferences&&this.impl.shouldSync&&this.runtime.lock.wait(),this.impl.setTransformMatricesFromArray(this._motionStatesPtr,this._temporalKinematicStatesPtr,e,t)}setDynamicTransformMatrix(e){this.setTransformMatricesFromArray(e.m,0)}setDynamicTransformMatrixFromArray(e,t,r=0){if(null===this._worldTransformPtrArray[e])throw new Error("Cannot set dynamic transform of non-dynamic body");if(this._nullCheck(),e<0||this._count<=e)throw new RangeError("Index out of range");this._inner.hasReferences&&this.impl.shouldSync&&this.runtime.lock.wait(),this.impl.setDynamicTransformMatrixFromArray(this._worldTransformPtrArray,e,t,r)}get needToCommit(){return this.impl.needToCommit??!1}commitToWasm(){if(void 0===this.impl.commitToWasm)throw new Error("commit only avalible on buffered evaluation mode");this._nullCheck(),this.runtime.lock.wait(),this.impl.commitToWasm(this.runtime.wasmInstance,this._inner.ptr,this._motionStatesPtr,this._temporalKinematicStatesPtr,this._worldTransformPtrArray)}}},62966:(e,t,r)=>{r.r(t),r.d(t,{SceneBuilder:()=>C}),r(90203),r(33832),r(2093);var n=r(7839),o=r(52046),i=r(71513),s=r(18595),a=r(26041),h=r(79923),c=r(96793),d=r(58144),l=r(87491),u=r(46738),m=r(67168),f=r(2090),w=r(27744),_=r(91167),p=r(15733),y=r(26405),g=r(1592),S=r(67648),T=r(35901),R=r(3477),P=r(89800);class C{async build(e,t){const r=new l.Z(t);r.clearColor=new a.ov(.95,.95,.95,1);const C=new n.L("arcRotateCamera",0,0,500,new h.Pq(0,0,0),r);C.minZ=1,C.maxZ=3e3,C.setPosition(new h.Pq(60,40,-50).scaleInPlace(10)),C.attachControl(void 0,!1),C.inertia=.8,C.speed=10;const b=new i.g("hemisphericLight",new h.Pq(0,1,0),r);b.intensity=.5,b.specular=new a.v9(0,0,0),b.groundColor=new a.v9(1,1,1);const A=new o.Z("directionalLight",new h.Pq(.5,-1,1),r);A.intensity=.5;A.shadowMaxZ=250,A.shadowMinZ=-250,A.autoCalcShadowZBounds=!1,A.autoUpdateExtends=!1,A.shadowOrthoScale=0,A.orthoTop=250,A.orthoBottom=-250,A.orthoLeft=-250,A.orthoRight=250;const M=new s.o(2048,A,!0);M.transparencyShadow=!0,M.usePercentageCloserFiltering=!0,M.forceBackFacesOnly=!1,M.bias=.004,M.filteringQuality=s.o.QUALITY_MEDIUM;const B=parseInt(prompt("Thread count","2"));console.log("Thread count:",B);const I=1===B?await(0,u.e)(new _.Z):await(0,u.e)(new w.t,B),x=new f.D(I),k=new p.F(x,!0),v=new h.uq;{const e=(0,d.x)("ground",{size:500},r);e.rotationQuaternion=h.PT.RotationAxis(new h.Pq(1,0,0),Math.PI/2),M.addShadowCaster(e),e.receiveShadows=!0;const t=new y.Ty(x,new h.Pq(0,0,-1),0),n=new T.t(I);n.shape=t,h.uq.FromQuaternionToRef(e.rotationQuaternion,v),n.setInitialTransform(v),n.motionType=1;const o=new g.U(x,n);k.addRigidBodyToGlobal(o)}const F=512,q=(0,c.an)("box",{size:2},r);M.addShadowCaster(q),q.receiveShadows=!0;const E=new Float32Array(262144);q.thinInstanceSetBuffer("matrix",E,16,!1);const L=new y.SA(x,new h.Pq(1,1,1)),D=[];for(let e=0;e<4;++e)for(let t=0;t<8;++t){const r=8*e+t,n=60*(t-4)+30,o=60*(e-2)+30,i=new R.x(I,F);for(let e=0;e<F;++e){i.setShape(e,L);const t=h.uq.TranslationToRef(n,1+2*e,o,v);i.setInitialTransform(e,t),i.setFriction(e,1),i.setLinearDamping(e,.3),i.setAngularDamping(e,.3)}const s=new S.Y(x,i);k.addRigidBodyBundle(s,r);for(let e=0;e<F;e+=2){const t=[e,e+1],n=new m.vC(x,s,t,h.uq.Translation(0,-1.2,0),h.uq.Translation(0,1.2,0),!0);n.setLinearLowerLimit(new h.Pq(0,0,0)),n.setLinearUpperLimit(new h.Pq(0,0,0)),n.setAngularLowerLimit(new h.Pq(Math.PI/4,0,0)),n.setAngularUpperLimit(new h.Pq(0,0,0));for(let e=0;e<6;++e)n.enableSpring(e,!0),n.setStiffness(e,100),n.setDamping(e,1);k.addConstraint(n,r,!0)}D.push(s)}return console.log("Rigid body count:",16384),new P.X((()=>{const e=performance.now();k.stepSimulation(1/60,10,1/60);for(let e=0;e<D.length;++e){const t=D[e],r=e*F*16;for(let e=0;e<F;++e)t.getTransformMatrixToRef(e,v),v.copyToArray(E,16*e+r)}q.thinInstanceBufferUpdated("matrix");const t=performance.now(),n=t-e;return r.render(),[n,performance.now()-t]})).runBench(),r.onBeforeRenderObservable.add((()=>{k.stepSimulation(1/60,10,1/60);for(let e=0;e<D.length;++e)D[e].getTransformMatricesToArray(E,e*F*16);q.thinInstanceBufferUpdated("matrix")})),r}}}}]);