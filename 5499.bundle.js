"use strict";(self.webpackChunkbabylon_bulletphysics=self.webpackChunkbabylon_bulletphysics||[]).push([[5499],{2399:(e,t,n)=>{n.d(t,{q:()=>r});class r{_a;constructor(e){this._a=e}next(){let e=this._a+=1831565813;return e=Math.imul(e^e>>>15,1|e),e^=e+Math.imul(e^e>>>7,61|e),((e^e>>>14)>>>0)/4294967296}}},5499:(e,t,n)=>{n.r(t),n.d(t,{SceneBuilder:()=>I}),n(203),n(1440),n(1503),n(8227);var r=n(7456),i=n(5581),s=n(1513),o=n(9711),a=n(6041),h=n(9923),c=n(9899),l=n(8144),u=n(8121),d=n(554),m=n(6738),f=n(7168),w=n(2090),p=n(7744),_=n(1167),g=n(5733),y=n(6405),R=n(1592),S=n(7648),T=n(5901),P=n(3477),C=n(9800),b=n(2399);class I{async build(e,t){const n=new d.Z(t);n.clearColor=new a.ov(.95,.95,.95,1);const I=new r.Lq("arcRotateCamera",0,0,500,new h.Pq(0,0,0),n);I.minZ=1,I.maxZ=3e3,I.setPosition(new h.Pq(60,40,-50).scaleInPlace(10)),I.attachControl(void 0,!1),I.inertia=.8,I.speed=10;const x=new s.g("hemisphericLight",new h.Pq(0,1,0),n);x.intensity=.5,x.specular=new a.v9(0,0,0),x.groundColor=new a.v9(1,1,1);const M=new i.Z("directionalLight",new h.Pq(.5,-1,1),n);M.intensity=.5;M.shadowMaxZ=250,M.shadowMinZ=-250,M.autoCalcShadowZBounds=!1,M.autoUpdateExtends=!1,M.shadowOrthoScale=0,M.orthoTop=250,M.orthoBottom=-250,M.orthoLeft=-250,M.orthoRight=250;const k=new o.o(2048,M,!0);k.transparencyShadow=!0,k.usePercentageCloserFiltering=!0,k.forceBackFacesOnly=!1,k.bias=.004,k.filteringQuality=o.o.QUALITY_MEDIUM;const A=parseInt(prompt("Thread count","2"));console.log("Thread count:",A);const B=1===A?await(0,m.e)(new _.Z):await(0,m.e)(new p.t,A),E=new w.D(B),v=new g.F(E,!0),F=new h.uq;{const e=(0,l.x)("ground",{size:500},n);e.rotationQuaternion=h.PT.RotationAxis(new h.Pq(1,0,0),Math.PI/2),k.addShadowCaster(e),e.receiveShadows=!0;const t=new y.Ty(E,new h.Pq(0,0,-1),0),r=new T.t(B);r.shape=t,h.uq.FromQuaternionToRef(e.rotationQuaternion,F),r.setInitialTransform(F),r.motionType=1;const i=new R.U(E,r);v.addRigidBodyToGlobal(i)}const q=512,L=[],D=[];if("u"===prompt("Shape type (u, r) uniform box, random","u")){const e=new h.Pq(1,1,1),t=new y.SA(E,e),n={type:"box",size:e};for(let e=0;e<q;++e)L.push(t),D.push(n)}else{const e=new b.q(0);for(let t=0;t<q;++t){const t=2*e.next()|0;if(0===t){const t=2*e.next()+.5,n=2*e.next()+.5,r=2*e.next()+.5,i=new h.Pq(t,n,r);L.push(new y.SA(E,i)),D.push({type:"box",size:i})}else{if(1!==t)throw new Error("Invalid type");{const t=2*e.next()+1;L.push(new y.O4(E,t)),D.push({type:"sphere",radius:t})}}}}const Q=[];for(let e=0;e<4;++e)for(let t=0;t<8;++t){const n=8*e+t,r=60*(t-4)+30,i=60*(e-2)+30,s=new P.x(B,q);for(let e=0;e<q;++e){s.setShape(e,L[e]);const t=h.uq.TranslationToRef(r,1+2*e,i,F);s.setInitialTransform(e,t),s.setFriction(e,1),s.setLinearDamping(e,.3),s.setAngularDamping(e,.3)}const o=new S.Y(E,s);v.addRigidBodyBundle(o,n);for(let e=0;e<q;e+=2){const t=[e,e+1],r=new f.vC(E,o,t,h.uq.Translation(0,-1.2,0),h.uq.Translation(0,1.2,0),!0);r.setLinearLowerLimit(new h.Pq(0,0,0)),r.setLinearUpperLimit(new h.Pq(0,0,0)),r.setAngularLowerLimit(new h.Pq(Math.PI/4,0,0)),r.setAngularUpperLimit(new h.Pq(0,0,0));for(let e=0;e<6;++e)r.enableSpring(e,!0),r.setStiffness(e,100),r.setDamping(e,1);v.addConstraint(r,n,!0)}Q.push(o)}console.log("Rigid body count:",16384);const W=[],Z=(0,c.an)("baseBox",{size:1},n),G=(0,u._6)("baseSphere",{diameter:1},n);Z.setEnabled(!1),G.setEnabled(!1),Z.receiveShadows=!0,G.receiveShadows=!0;for(let e=0;e<16384;++e){const t=D[e%D.length],n="box"===t.type?Z.createInstance(`boxInstance${e}`):G.createInstance(`sphereInstance${e}`);k.addShadowCaster(n),n.scaling.copyFrom("box"===t.type?t.size.scale(2):new h.Pq(t.radius,t.radius,t.radius).scale(2)),n.rotationQuaternion=h.PT.Identity(),W.push(n)}return new C.X((()=>{const e=performance.now();v.stepSimulation(1/60,10,1/60);for(let e=0;e<Q.length;++e){const t=Q[e];for(let n=0;n<q;++n){t.getTransformMatrixToRef(n,F);const r=W[e*q+n];F.getTranslationToRef(r.position),h.PT.FromRotationMatrixToRef(F,r.rotationQuaternion)}}const t=performance.now(),r=t-e;return n.render(),[r,performance.now()-t]})).runBench(),n.onBeforeRenderObservable.add((()=>{v.stepSimulation(1/60,10,1/60);for(let e=0;e<Q.length;++e){const t=Q[e];for(let n=0;n<q;++n){t.getTransformMatrixToRef(n,F);const r=W[e*q+n];F.getTranslationToRef(r.position),h.PT.FromRotationMatrixToRef(F,r.rotationQuaternion)}}})),n}}},7648:(e,t,n)=>{n.d(t,{Y:()=>o});class r{_wasmInstance;_ptr;_shapeReferences;_referenceCount;_shadowCount;constructor(e,t,n){this._wasmInstance=e,this._ptr=t,this._shapeReferences=n;for(const e of n)e.addReference();this._referenceCount=0,this._shadowCount=0}dispose(){if(this._referenceCount>0)throw new Error("Cannot dispose rigid body bundle while it still has references");if(0!==this._ptr){this._wasmInstance.deref()?.destroyRigidBodyBundle(this._ptr),this._ptr=0;for(const e of this._shapeReferences)e.removeReference();this._shapeReferences.clear()}}get ptr(){return this._ptr}addReference(){this._referenceCount+=1}removeReference(){this._referenceCount-=1}get hasReferences(){return 0<this._referenceCount}addShadow(){this._shadowCount+=1}removeShadow(){this._shadowCount-=1}get hasShadows(){return 0<this._shadowCount}}function i(e){e.dispose()}const s=new WeakMap;class o{runtime;_motionStatesPtr;_bufferedMotionStatesPtr;_worldTransformPtrArray;_temporalKinematicStatesPtr;_inner;_count;_worldReference;impl;isContainsDynamic;constructor(e,t){if(0===t.ptr)throw new Error("Cannot create rigid body bundle with null pointer");const n=t.count,o=new Set;for(let r=0;r<n;++r){const n=t.getShape(r);if(null===n)throw new Error("Cannot create rigid body bundle with null shape");if(n.runtime!==e)throw new Error("Cannot create rigid body bundle with shapes from different runtimes");o.add(n)}this.runtime=e;const a=e.wasmInstance,h=a.createRigidBodyBundle(t.ptr,n),c=a.rigidBodyBundleGetMotionStatesPtr(h);this._motionStatesPtr=a.createTypedArray(Float32Array,c,20*n);const l=a.rigidBodyBundleGetBufferedMotionStatesPtr(h);this._bufferedMotionStatesPtr=a.createTypedArray(Float32Array,l,20*n);const u=[];let d=!1;for(let e=0;e<n;++e)if(0===t.getMotionType(e)){d=!0;const t=a.rigidBodyBundleGetWorldTransformPtr(h,e);u.push(a.createTypedArray(Float32Array,t,16))}else u.push(null);this._worldTransformPtrArray=u;const m=a.rigidBodyBundleGetTemporalKinematicStatesPtr(h);this._temporalKinematicStatesPtr=a.createTypedArray(Uint8Array,m,n),this._inner=new r(new WeakRef(e.wasmInstance),h,o),this._count=n,this._worldReference=null;let f=s.get(a);void 0===f&&(f=new FinalizationRegistry(i),s.set(a,f)),f.register(this,this._inner,this),this.impl=e.createRigidBodyBundleImpl(this),this.isContainsDynamic=d}dispose(){if(0===this._inner.ptr)return;this._inner.dispose();const e=s.get(this.runtime.wasmInstance);e?.unregister(this)}get ptr(){return this._inner.ptr}get count(){return this._count}addReference(){this._inner.addReference()}removeReference(){this._inner.removeReference()}addShadowReference(){this._inner.addShadow()}removeShadowReference(){this._inner.removeShadow()}get hasShadows(){return this._inner.hasShadows}setWorldReference(e){if(null!==this._worldReference&&null!==e)throw new Error("Cannot add rigid body bundle to multiple worlds");this._worldReference!==e&&(this._worldReference=e,null!==e?this._inner.addReference():this._inner.removeReference())}getWorldReference(){return this._worldReference}updateBufferedMotionStates(e){if(this._nullCheck(),e){const e=this.runtime.wasmInstance.rigidBodyBundleGetMotionStatesPtr(this._inner.ptr);this._bufferedMotionStatesPtr=this.runtime.wasmInstance.createTypedArray(Float32Array,e,20*this._count)}else{const e=this.runtime.wasmInstance.rigidBodyBundleGetBufferedMotionStatesPtr(this._inner.ptr);this._bufferedMotionStatesPtr=this.runtime.wasmInstance.createTypedArray(Float32Array,e,20*this._count)}}_nullCheck(){if(0===this._inner.ptr)throw new Error("Cannot access disposed rigid body bundle")}getTransformMatrixToRef(e,t){if(this._nullCheck(),e<0||this._count<=e)throw new RangeError("Index out of range");this._inner.hasReferences&&this.impl.shouldSync&&this.runtime.lock.wait();const n=this._bufferedMotionStatesPtr.array,r=20*e;return t.set(n[r+4+0],n[r+8+0],n[r+12+0],0,n[r+4+1],n[r+8+1],n[r+12+1],0,n[r+4+2],n[r+8+2],n[r+12+2],0,n[r+16+0],n[r+16+1],n[r+16+2],1)}getTransformMatrixToArray(e,t,n=0){if(this._nullCheck(),e<0||this._count<=e)throw new RangeError("Index out of range");this._inner.hasReferences&&this.impl.shouldSync&&this.runtime.lock.wait();const r=this._bufferedMotionStatesPtr.array,i=20*e;t[n+0]=r[i+4+0],t[n+1]=r[i+8+0],t[n+2]=r[i+12+0],t[n+3]=0,t[n+4]=r[i+4+1],t[n+5]=r[i+8+1],t[n+6]=r[i+12+1],t[n+7]=0,t[n+8]=r[i+4+2],t[n+9]=r[i+8+2],t[n+10]=r[i+12+2],t[n+11]=0,t[n+12]=r[i+16+0],t[n+13]=r[i+16+1],t[n+14]=r[i+16+2],t[n+15]=1}getTransformMatricesToArray(e,t=0){this._nullCheck(),this._inner.hasReferences&&this.impl.shouldSync&&this.runtime.lock.wait();const n=this._bufferedMotionStatesPtr.array,r=this._count;let i=0,s=t;for(let t=0;t<r;++t)e[s+0]=n[i+4+0],e[s+1]=n[i+8+0],e[s+2]=n[i+12+0],e[s+3]=0,e[s+4]=n[i+4+1],e[s+5]=n[i+8+1],e[s+6]=n[i+12+1],e[s+7]=0,e[s+8]=n[i+4+2],e[s+9]=n[i+8+2],e[s+10]=n[i+12+2],e[s+11]=0,e[s+12]=n[i+16+0],e[s+13]=n[i+16+1],e[s+14]=n[i+16+2],e[s+15]=1,i+=20,s+=16}setTransformMatrix(e,t){this.setTransformMatrixFromArray(e,t.m,0)}setTransformMatrixFromArray(e,t,n=0){if(this._nullCheck(),e<0||this._count<=e)throw new RangeError("Index out of range");this._inner.hasReferences&&this.impl.shouldSync&&this.runtime.lock.wait(),this.impl.setTransformMatrixFromArray(this._motionStatesPtr,this._temporalKinematicStatesPtr,e,t,n)}setTransformMatricesFromArray(e,t=0){if(this._nullCheck(),e.length<16*this._count)throw new RangeError("Array is too short");this._inner.hasReferences&&this.impl.shouldSync&&this.runtime.lock.wait(),this.impl.setTransformMatricesFromArray(this._motionStatesPtr,this._temporalKinematicStatesPtr,e,t)}setDynamicTransformMatrix(e){this.setTransformMatricesFromArray(e.m,0)}setDynamicTransformMatrixFromArray(e,t,n=0){if(null===this._worldTransformPtrArray[e])throw new Error("Cannot set dynamic transform of non-dynamic body");if(this._nullCheck(),e<0||this._count<=e)throw new RangeError("Index out of range");this._inner.hasReferences&&this.impl.shouldSync&&this.runtime.lock.wait(),this.impl.setDynamicTransformMatrixFromArray(this._worldTransformPtrArray,e,t,n)}setDamping(e,t,n){if(this._nullCheck(),e<0||this._count<=e)throw new RangeError("Index out of range");this._inner.hasReferences&&this.impl.shouldSync&&this.runtime.lock.wait(),this.impl.setDamping(this.runtime.wasmInstance,this._inner.ptr,e,t,n)}getLinearDamping(e){if(this._nullCheck(),e<0||this._count<=e)throw new RangeError("Index out of range");return this._inner.hasReferences&&this.impl.shouldSync&&this.runtime.lock.wait(),this.impl.getLinearDamping(this.runtime.wasmInstance,this._inner.ptr,e)}getAngularDamping(e){if(this._nullCheck(),e<0||this._count<=e)throw new RangeError("Index out of range");return this._inner.hasReferences&&this.impl.shouldSync&&this.runtime.lock.wait(),this.impl.getAngularDamping(this.runtime.wasmInstance,this._inner.ptr,e)}setMassProps(e,t,n){if(this._nullCheck(),e<0||this._count<=e)throw new RangeError("Index out of range");this._inner.hasReferences&&this.impl.shouldSync&&this.runtime.lock.wait(),this.impl.setMassProps(this.runtime.wasmInstance,this._inner.ptr,e,t,n)}getMass(e){if(this._nullCheck(),e<0||this._count<=e)throw new RangeError("Index out of range");return this._inner.hasReferences&&this.impl.shouldSync&&this.runtime.lock.wait(),this.impl.getMass(this.runtime.wasmInstance,this._inner.ptr,e)}getLocalInertia(e){if(this._nullCheck(),e<0||this._count<=e)throw new RangeError("Index out of range");return this._inner.hasReferences&&this.impl.shouldSync&&this.runtime.lock.wait(),this.impl.getLocalInertia(this.runtime.wasmInstance,this._inner.ptr,e)}translate(e,t){if(this._nullCheck(),e<0||this._count<=e)throw new RangeError("Index out of range");this._inner.hasReferences&&this.impl.shouldSync&&this.runtime.lock.wait(),this.impl.translate(this.runtime.wasmInstance,this._inner.ptr,e,t)}get needToCommit(){return this.impl.needToCommit??!1}commitToWasm(){if(void 0===this.impl.commitToWasm)throw new Error("commit only avalible on buffered evaluation mode");this._nullCheck(),this.runtime.lock.wait(),this.impl.commitToWasm(this.runtime.wasmInstance,this._inner.ptr,this._motionStatesPtr,this._temporalKinematicStatesPtr,this._worldTransformPtrArray)}}}}]);