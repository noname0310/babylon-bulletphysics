"use strict";(self.webpackChunkbabylon_bulletphysics=self.webpackChunkbabylon_bulletphysics||[]).push([[9297],{39297:(t,e,n)=>{n.r(e),n.d(e,{SceneBuilder:()=>re});var i={};n.r(i),n.d(i,{allocateBuffer:()=>M,constraintEnableSpring:()=>st,constraintSetAngularLowerLimit:()=>ot,constraintSetAngularUpperLimit:()=>rt,constraintSetDamping:()=>ct,constraintSetLinearLowerLimit:()=>nt,constraintSetLinearUpperLimit:()=>it,constraintSetStiffness:()=>dt,createBoxShape:()=>At,createCapsuleShape:()=>Mt,createGeneric6DofConstraint:()=>H,createGeneric6DofConstraintFromBundle:()=>N,createGeneric6DofSpringConstraint:()=>X,createGeneric6DofSpringConstraintFromBundle:()=>tt,createMultiPhysicsRuntime:()=>Wt,createMultiPhysicsWorld:()=>T,createPhysicsRuntime:()=>St,createPhysicsWorld:()=>Tt,createRigidBody:()=>at,createRigidBodyBundle:()=>mt,createSphereShape:()=>Lt,createStaticPlaneShape:()=>Ct,deallocateBuffer:()=>C,default:()=>Xt,destroyConstraint:()=>et,destroyMultiPhysicsRuntime:()=>vt,destroyMultiPhysicsWorld:()=>D,destroyPhysicsRuntime:()=>Rt,destroyPhysicsWorld:()=>Dt,destroyRigidBody:()=>ut,destroyRigidBodyBundle:()=>gt,destroyShape:()=>Gt,init:()=>A,initSync:()=>Ht,multiPhysicsRuntimeGetLockStatePtr:()=>_t,multiPhysicsWorldAddConstraint:()=>$,multiPhysicsWorldAddRigidBody:()=>q,multiPhysicsWorldAddRigidBodyBundle:()=>E,multiPhysicsWorldAddRigidBodyBundleShadow:()=>z,multiPhysicsWorldAddRigidBodyBundleToGlobal:()=>j,multiPhysicsWorldAddRigidBodyShadow:()=>Q,multiPhysicsWorldAddRigidBodyToGlobal:()=>F,multiPhysicsWorldRemoveConstraint:()=>J,multiPhysicsWorldRemoveRigidBody:()=>U,multiPhysicsWorldRemoveRigidBodyBundle:()=>I,multiPhysicsWorldRemoveRigidBodyBundleFromGlobal:()=>Z,multiPhysicsWorldRemoveRigidBodyBundleShadow:()=>Y,multiPhysicsWorldRemoveRigidBodyFromGlobal:()=>O,multiPhysicsWorldRemoveRigidBodyShadow:()=>K,multiPhysicsWorldSetGravity:()=>x,multiPhysicsWorldStepSimulation:()=>k,multiPhysicsWorldUseMotionStateBuffer:()=>V,physicsRuntimeGetLockStatePtr:()=>Pt,physicsWorldAddConstraint:()=>Ft,physicsWorldAddRigidBody:()=>qt,physicsWorldAddRigidBodyBundle:()=>Et,physicsWorldRemoveConstraint:()=>Ot,physicsWorldRemoveRigidBody:()=>Ut,physicsWorldRemoveRigidBodyBundle:()=>It,physicsWorldSetGravity:()=>xt,physicsWorldStepSimulation:()=>kt,physicsWorldUseMotionStateBuffer:()=>jt,rigidBodyBundleGetBufferedMotionStatesPtr:()=>wt,rigidBodyBundleGetMotionStatesPtr:()=>pt,rigidBodyBundleMakeKinematic:()=>Bt,rigidBodyBundleRestoreDynamic:()=>bt,rigidBodyGetBufferedMotionStatePtr:()=>ft,rigidBodyGetMotionStatePtr:()=>lt,rigidBodyMakeKinematic:()=>yt,rigidBodyRestoreDynamic:()=>ht}),n(90203),n(33832),n(2093);var o=n(7839),r=n(52046),s=n(71513),d=n(18595),c=n(26041),a=n(79923),u=n(96793),l=n(58144),f=n(87491),y=n(46738),h=n(67168),m=n(23948),g=n(29009),p=n(47002);let w;const B="undefined"!=typeof TextDecoder?new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0}):{decode:()=>{throw Error("TextDecoder not available")}};"undefined"!=typeof TextDecoder&&B.decode();let b=null;function S(){return null!==b&&0!==b.byteLength||(b=new Uint8Array(w.memory.buffer)),b}function R(t,e){return t>>>=0,B.decode(S().subarray(t,t+e))}const P=new Array(128).fill(void 0);P.push(void 0,null,!0,!1);let W=P.length;function v(t){W===P.length&&P.push(P.length+1);const e=W;if(W=P[e],"number"!=typeof W)throw new Error("corrupt heap");return P[e]=t,e}function _(t){return P[t]}function A(){w.init()}function L(t){if("number"!=typeof t)throw new Error("expected a number argument, found "+typeof t)}function M(t){return L(t),w.allocateBuffer(t)>>>0}function C(t,e){L(t),L(e),w.deallocateBuffer(t,e)}function G(t){if("boolean"!=typeof t)throw new Error("expected a boolean argument, found "+typeof t)}function T(t){return G(t),w.createMultiPhysicsWorld(t)>>>0}function D(t){L(t),w.destroyMultiPhysicsWorld(t)}function x(t,e,n,i){L(t),w.multiPhysicsWorldSetGravity(t,e,n,i)}function k(t,e,n,i){L(t),L(n),w.multiPhysicsWorldStepSimulation(t,e,n,i)}function q(t,e,n){L(t),L(e),L(n),w.multiPhysicsWorldAddRigidBody(t,e,n)}function U(t,e,n){L(t),L(e),L(n),w.multiPhysicsWorldRemoveRigidBody(t,e,n)}function E(t,e,n){L(t),L(e),L(n),w.multiPhysicsWorldAddRigidBodyBundle(t,e,n)}function I(t,e,n){L(t),L(e),L(n),w.multiPhysicsWorldRemoveRigidBodyBundle(t,e,n)}function F(t,e){L(t),L(e),w.multiPhysicsWorldAddRigidBodyToGlobal(t,e)}function O(t,e){L(t),L(e),w.multiPhysicsWorldRemoveRigidBodyFromGlobal(t,e)}function j(t,e){L(t),L(e),w.multiPhysicsWorldAddRigidBodyBundleToGlobal(t,e)}function Z(t,e){L(t),L(e),w.multiPhysicsWorldRemoveRigidBodyBundleFromGlobal(t,e)}function Q(t,e,n){L(t),L(e),L(n),w.multiPhysicsWorldAddRigidBodyShadow(t,e,n)}function K(t,e,n){L(t),L(e),L(n),w.multiPhysicsWorldRemoveRigidBodyShadow(t,e,n)}function z(t,e,n){L(t),L(e),L(n),w.multiPhysicsWorldAddRigidBodyBundleShadow(t,e,n)}function Y(t,e,n){L(t),L(e),L(n),w.multiPhysicsWorldRemoveRigidBodyBundleShadow(t,e,n)}function $(t,e,n,i){L(t),L(e),L(n),G(i),w.multiPhysicsWorldAddConstraint(t,e,n,i)}function J(t,e,n){L(t),L(e),L(n),w.multiPhysicsWorldRemoveConstraint(t,e,n)}function V(t,e){L(t),G(e),w.multiPhysicsWorldUseMotionStateBuffer(t,e)}function H(t,e,n,i,o){return L(t),L(e),L(n),L(i),G(o),w.createGeneric6DofConstraint(t,e,n,i,o)>>>0}function N(t,e,n,i,o,r){return L(t),L(e),L(n),L(i),L(o),G(r),w.createGeneric6DofConstraintFromBundle(t,e,n,i,o,r)>>>0}function X(t,e,n,i,o){return L(t),L(e),L(n),L(i),G(o),w.createGeneric6DofSpringConstraint(t,e,n,i,o)>>>0}function tt(t,e,n,i,o,r){return L(t),L(e),L(n),L(i),L(o),G(r),w.createGeneric6DofSpringConstraintFromBundle(t,e,n,i,o,r)>>>0}function et(t){L(t),w.destroyConstraint(t)}function nt(t,e,n,i){L(t),w.constraintSetLinearLowerLimit(t,e,n,i)}function it(t,e,n,i){L(t),w.constraintSetLinearUpperLimit(t,e,n,i)}function ot(t,e,n,i){L(t),w.constraintSetAngularLowerLimit(t,e,n,i)}function rt(t,e,n,i){L(t),w.constraintSetAngularUpperLimit(t,e,n,i)}function st(t,e,n){L(t),L(e),G(n),w.constraintEnableSpring(t,e,n)}function dt(t,e,n){L(t),L(e),w.constraintSetStiffness(t,e,n)}function ct(t,e,n){L(t),L(e),w.constraintSetDamping(t,e,n)}function at(t){return L(t),w.createRigidBody(t)>>>0}function ut(t){L(t),w.destroyRigidBody(t)}function lt(t){return L(t),w.rigidBodyGetMotionStatePtr(t)>>>0}function ft(t){return L(t),w.rigidBodyGetBufferedMotionStatePtr(t)>>>0}function yt(t){L(t),w.rigidBodyMakeKinematic(t)}function ht(t){L(t),w.rigidBodyRestoreDynamic(t)}function mt(t,e){return L(t),L(e),w.createRigidBodyBundle(t,e)>>>0}function gt(t){L(t),w.destroyRigidBodyBundle(t)}function pt(t){return L(t),w.rigidBodyBundleGetMotionStatesPtr(t)>>>0}function wt(t){return L(t),w.rigidBodyBundleGetBufferedMotionStatesPtr(t)>>>0}function Bt(t,e){L(t),L(e),w.rigidBodyBundleMakeKinematic(t,e)}function bt(t,e){L(t),L(e),w.rigidBodyBundleRestoreDynamic(t,e)}function St(t){return L(t),w.createPhysicsRuntime(t)>>>0}function Rt(t){L(t),w.destroyPhysicsRuntime(t)}function Pt(t){return L(t),w.physicsRuntimeGetLockStatePtr(t)>>>0}function Wt(t){return L(t),w.createMultiPhysicsRuntime(t)>>>0}function vt(t){L(t),w.destroyMultiPhysicsRuntime(t)}function _t(t){return L(t),w.multiPhysicsRuntimeGetLockStatePtr(t)>>>0}function At(t,e,n){return w.createBoxShape(t,e,n)>>>0}function Lt(t){return w.createSphereShape(t)>>>0}function Mt(t,e){return w.createCapsuleShape(t,e)>>>0}function Ct(t,e,n,i){return w.createStaticPlaneShape(t,e,n,i)>>>0}function Gt(t){L(t),w.destroyShape(t)}function Tt(){return w.createPhysicsWorld()>>>0}function Dt(t){L(t),w.destroyPhysicsWorld(t)}function xt(t,e,n,i){L(t),w.physicsWorldSetGravity(t,e,n,i)}function kt(t,e,n,i){L(t),L(n),w.physicsWorldStepSimulation(t,e,n,i)}function qt(t,e){L(t),L(e),w.physicsWorldAddRigidBody(t,e)}function Ut(t,e){L(t),L(e),w.physicsWorldRemoveRigidBody(t,e)}function Et(t,e){L(t),L(e),w.physicsWorldAddRigidBodyBundle(t,e)}function It(t,e){L(t),L(e),w.physicsWorldRemoveRigidBodyBundle(t,e)}function Ft(t,e,n){L(t),L(e),G(n),w.physicsWorldAddConstraint(t,e,n)}function Ot(t,e){L(t),L(e),w.physicsWorldRemoveConstraint(t,e)}function jt(t,e){L(t),G(e),w.physicsWorldUseMotionStateBuffer(t,e)}function Zt(t,e){try{return t.apply(this,e)}catch(t){let e=function(){try{return t instanceof Error?`${t.message}\n\nStack:\n${t.stack}`:t.toString()}catch(t){return"<failed to stringify thrown value>"}}();throw console.error("wasm-bindgen: imported JS function that was not marked as `catch` threw an error:",e),t}}let Qt=0;const Kt="undefined"!=typeof TextEncoder?new TextEncoder("utf-8"):{encode:()=>{throw Error("TextEncoder not available")}},zt="function"==typeof Kt.encodeInto?function(t,e){return Kt.encodeInto(t,e)}:function(t,e){const n=Kt.encode(t);return e.set(n),{read:t.length,written:n.length}};let Yt=null;function $t(){return(null===Yt||!0===Yt.buffer.detached||void 0===Yt.buffer.detached&&Yt.buffer!==w.memory.buffer)&&(Yt=new DataView(w.memory.buffer)),Yt}function Jt(){const t={wbg:{}};return t.wbg.__wbindgen_string_new=function(t,e){return v(R(t,e))},t.wbg.__wbindgen_object_drop_ref=function(t){!function(t){const e=_(t);(function(t){t<132||(P[t]=W,W=t)})(t)}(t)},t.wbg.__wbg_new_abda76e883ba8a5f=function(){return Zt((function(){return v(new Error)}),arguments)},t.wbg.__wbg_stack_658279fe44541cf6=function(){return Zt((function(t,e){const n=function(t,e,n){if("string"!=typeof t)throw new Error("expected a string argument, found "+typeof t);if(void 0===n){const n=Kt.encode(t),i=e(n.length,1)>>>0;return S().subarray(i,i+n.length).set(n),Qt=n.length,i}let i=t.length,o=e(i,1)>>>0;const r=S();let s=0;for(;s<i;s++){const e=t.charCodeAt(s);if(e>127)break;r[o+s]=e}if(s!==i){0!==s&&(t=t.slice(s)),o=n(o,i,i=s+3*t.length,1)>>>0;const e=S().subarray(o+s,o+i),r=zt(t,e);if(r.read!==t.length)throw new Error("failed to pass whole string");s+=r.written,o=n(o,i,s,1)>>>0}return Qt=s,o}(_(e).stack,w.__wbindgen_malloc,w.__wbindgen_realloc),i=Qt;$t().setInt32(t+4,i,!0),$t().setInt32(t+0,n,!0)}),arguments)},t.wbg.__wbg_error_f851667af71bcfc6=function(){return Zt((function(t,e){let n,i;try{n=t,i=e,console.error(R(t,e))}finally{w.__wbindgen_free(n,i,1)}}),arguments)},t.wbg.__wbg_error_09480e4aadca50ad=function(){return Zt((function(t){console.error(_(t))}),arguments)},t.wbg.__wbg_log_b103404cc5920657=function(){return Zt((function(t){console.log(_(t))}),arguments)},t.wbg.__wbindgen_throw=function(t,e){throw new Error(R(t,e))},t}function Vt(t,e){return w=t.exports,Nt.__wbindgen_wasm_module=e,Yt=null,b=null,w}function Ht(t){if(void 0!==w)return w;void 0!==t&&Object.getPrototypeOf(t)===Object.prototype?({module:t}=t):console.warn("using deprecated parameters for `initSync()`; pass a single object instead");const e=Jt();return t instanceof WebAssembly.Module||(t=new WebAssembly.Module(t)),Vt(new WebAssembly.Instance(t,e),t)}async function Nt(t){if(void 0!==w)return w;void 0!==t&&Object.getPrototypeOf(t)===Object.prototype?({module_or_path:t}=t):console.warn("using deprecated parameters for the initialization function; pass a single object instead"),void 0===t&&(t=new URL(n(24871),n.b));const e=Jt();("string"==typeof t||"function"==typeof Request&&t instanceof Request||"function"==typeof URL&&t instanceof URL)&&(t=fetch(t));const{instance:i,module:o}=await async function(t,e){if("function"==typeof Response&&t instanceof Response){if("function"==typeof WebAssembly.instantiateStreaming)try{return await WebAssembly.instantiateStreaming(t,e)}catch(e){if("application/wasm"==t.headers.get("Content-Type"))throw e;console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",e)}const n=await t.arrayBuffer();return await WebAssembly.instantiate(n,e)}{const n=await WebAssembly.instantiate(t,e);return n instanceof WebAssembly.Instance?{instance:n,module:t}:n}}(await t,e);return Vt(i,o)}const Xt=Nt;var te=n(26405),ee=n(1592),ne=n(67648),ie=n(35901),oe=n(3477);class re{async build(t,e){const n=new f.Z(e);n.clearColor=new c.ov(.95,.95,.95,1);const i=new o.L("arcRotateCamera",0,0,500,new a.Pq(0,0,0),n);i.minZ=1,i.maxZ=3e3,i.setPosition(new a.Pq(60,40,-50).scaleInPlace(10)),i.attachControl(void 0,!1),i.inertia=.8,i.speed=10;const w=new s.g("hemisphericLight",new a.Pq(0,1,0),n);w.intensity=.5,w.specular=new c.v9(0,0,0),w.groundColor=new c.v9(1,1,1);const B=new r.Z("directionalLight",new a.Pq(.5,-1,1),n);B.intensity=.5;B.shadowMaxZ=250,B.shadowMinZ=-250,B.autoCalcShadowZBounds=!1,B.autoUpdateExtends=!1,B.shadowOrthoScale=0,B.orthoTop=250,B.orthoBottom=-250,B.orthoLeft=-250,B.orthoRight=250;const b=new d.o(2048,B,!0);b.transparencyShadow=!0,b.usePercentageCloserFiltering=!0,b.forceBackFacesOnly=!1,b.bias=.004,b.filteringQuality=d.o.QUALITY_MEDIUM;const S=await(0,y.e)(new p.t,32),R=new m.h(S,{allowDynamicShadow:!0,preserveBackBuffer:!0});R.register(n),R.evaluationType=g.q.Buffered;const P=new a.uq;{const t=(0,l.x)("ground",{size:500},n);t.rotationQuaternion=a.PT.RotationAxis(new a.Pq(1,0,0),Math.PI/2),b.addShadowCaster(t),t.receiveShadows=!0;const e=new te.Ty(R,new a.Pq(0,0,-1),0),i=new ie.t(S);i.shape=e,a.uq.FromQuaternionToRef(t.rotationQuaternion,P),i.setInitialTransform(P),i.motionType=1;const o=new ee.U(R,i);R.addRigidBodyToGlobal(o)}const W=512,v=(0,u.an)("box",{size:2},n);b.addShadowCaster(v),v.receiveShadows=!0;const _=new Float32Array(262144);v.thinInstanceSetBuffer("matrix",_,16,!1);const A=new te.SA(R,new a.Pq(1,1,1)),L=[];for(let t=0;t<4;++t)for(let e=0;e<8;++e){const n=8*t+e,i=60*(e-4)+30,o=60*(t-2)+30,r=new oe.x(S,W);for(let t=0;t<W;++t){r.setShape(t,A);const e=a.uq.TranslationToRef(i,1+2*t,o,P);r.setInitialTransform(t,e),r.setFriction(t,1),r.setLinearDamping(t,.3),r.setAngularDamping(t,.3)}const s=new ne.Y(R,r);R.addRigidBodyBundle(s,n);for(let t=0;t<W;t+=2){const e=[t,t+1],i=new h.vC(R,s,e,a.uq.Translation(0,-1.2,0),a.uq.Translation(0,1.2,0),!0);i.setLinearLowerLimit(new a.Pq(0,0,0)),i.setLinearUpperLimit(new a.Pq(0,0,0)),i.setAngularLowerLimit(new a.Pq(Math.PI/4,0,0)),i.setAngularUpperLimit(new a.Pq(0,0,0));for(let t=0;t<6;++t)i.enableSpring(t,!0),i.setStiffness(t,100),i.setDamping(t,1);R.addConstraint(i,n,!1)}L.push(s)}return R.onTickObservable.add((()=>{for(let t=0;t<L.length;++t)L[t].getTransformMatricesToArray(_,t*W*16);v.thinInstanceBufferUpdated("matrix")})),n}}},24871:(t,e,n)=>{t.exports=n.p+"023eb6f0c9061d07a6c9.wasm"}}]);