"use strict";(self.webpackChunkbabylon_bulletphysics=self.webpackChunkbabylon_bulletphysics||[]).push([[6459],{7744:(i,e,t)=>{t.d(e,{t:()=>Ee});var n={};let o,r;t.r(n),t.d(n,{allocateBuffer:()=>B,constraintEnableSpring:()=>W,constraintSetAngularLowerLimit:()=>R,constraintSetAngularUpperLimit:()=>A,constraintSetDamping:()=>T,constraintSetLinearLowerLimit:()=>P,constraintSetLinearUpperLimit:()=>S,constraintSetStiffness:()=>G,createBoxShape:()=>vi,createCapsuleShape:()=>Li,createGeneric6DofConstraint:()=>m,createGeneric6DofConstraintFromBundle:()=>h,createGeneric6DofSpringConstraint:()=>_,createGeneric6DofSpringConstraintFromBundle:()=>b,createMultiPhysicsRuntime:()=>Ii,createMultiPhysicsWorld:()=>v,createPhysicsRuntime:()=>qi,createPhysicsWorld:()=>Oi,createRigidBody:()=>N,createRigidBodyBundle:()=>Zi,createSphereShape:()=>Ci,createStaticPlaneShape:()=>Mi,deallocateBuffer:()=>p,default:()=>Oe,destroyConstraint:()=>w,destroyMultiPhysicsRuntime:()=>Vi,destroyMultiPhysicsWorld:()=>C,destroyPhysicsRuntime:()=>Ui,destroyPhysicsWorld:()=>Ei,destroyRigidBody:()=>Q,destroyRigidBodyBundle:()=>ie,destroyShape:()=>Fi,init:()=>f,initSync:()=>xe,initThreadPool:()=>Fe,multiPhysicsRuntimeBufferedStepSimulation:()=>ki,multiPhysicsRuntimeGetLockStatePtr:()=>Di,multiPhysicsWorldAddConstraint:()=>K,multiPhysicsWorldAddRigidBody:()=>F,multiPhysicsWorldAddRigidBodyBundle:()=>V,multiPhysicsWorldAddRigidBodyBundleShadow:()=>E,multiPhysicsWorldAddRigidBodyBundleToGlobal:()=>U,multiPhysicsWorldAddRigidBodyShadow:()=>j,multiPhysicsWorldAddRigidBodyToGlobal:()=>k,multiPhysicsWorldMakeBodyKinematic:()=>X,multiPhysicsWorldRemoveConstraint:()=>$,multiPhysicsWorldRemoveRigidBody:()=>I,multiPhysicsWorldRemoveRigidBodyBundle:()=>D,multiPhysicsWorldRemoveRigidBodyBundleFromGlobal:()=>x,multiPhysicsWorldRemoveRigidBodyBundleShadow:()=>z,multiPhysicsWorldRemoveRigidBodyFromGlobal:()=>q,multiPhysicsWorldRemoveRigidBodyShadow:()=>O,multiPhysicsWorldRestoreBodyDynamic:()=>H,multiPhysicsWorldSetGravity:()=>L,multiPhysicsWorldStepSimulation:()=>M,multiPhysicsWorldUseMotionStateBuffer:()=>J,physicsRuntimeBufferedStepSimulation:()=>ji,physicsRuntimeGetLockStatePtr:()=>xi,physicsWorldAddConstraint:()=>Ni,physicsWorldAddRigidBody:()=>$i,physicsWorldAddRigidBodyBundle:()=>Hi,physicsWorldRemoveConstraint:()=>Qi,physicsWorldRemoveRigidBody:()=>Xi,physicsWorldRemoveRigidBodyBundle:()=>Ji,physicsWorldSetGravity:()=>zi,physicsWorldStepSimulation:()=>Ki,physicsWorldUseMotionStateBuffer:()=>Yi,rigidBodyApplyCentralForce:()=>li,rigidBodyApplyCentralImpulse:()=>ai,rigidBodyApplyCentralPushImpulse:()=>_i,rigidBodyApplyForce:()=>ci,rigidBodyApplyImpulse:()=>gi,rigidBodyApplyPushImpulse:()=>fi,rigidBodyApplyTorque:()=>si,rigidBodyApplyTorqueImpulse:()=>yi,rigidBodyApplyTorqueTurnImpulse:()=>bi,rigidBodyBundleApplyCentralForce:()=>ae,rigidBodyBundleApplyCentralImpulse:()=>fe,rigidBodyBundleApplyCentralPushImpulse:()=>Pe,rigidBodyBundleApplyForce:()=>ge,rigidBodyBundleApplyImpulse:()=>pe,rigidBodyBundleApplyPushImpulse:()=>me,rigidBodyBundleApplyTorque:()=>ye,rigidBodyBundleApplyTorqueImpulse:()=>Be,rigidBodyBundleApplyTorqueTurnImpulse:()=>Se,rigidBodyBundleClearForces:()=>Re,rigidBodyBundleGetAngularDamping:()=>re,rigidBodyBundleGetAngularVelocity:()=>We,rigidBodyBundleGetBufferedMotionStatesPtr:()=>te,rigidBodyBundleGetLinearDamping:()=>oe,rigidBodyBundleGetLinearVelocity:()=>Ae,rigidBodyBundleGetLocalInertia:()=>le,rigidBodyBundleGetMass:()=>ue,rigidBodyBundleGetMotionStatesPtr:()=>ee,rigidBodyBundleGetPushVelocity:()=>he,rigidBodyBundleGetTemporalKinematicStatesPtr:()=>Le,rigidBodyBundleGetTotalForce:()=>se,rigidBodyBundleGetTotalTorque:()=>ce,rigidBodyBundleGetTurnVelocity:()=>_e,rigidBodyBundleGetWorldTransformPtr:()=>Ce,rigidBodyBundleSetAngularVelocity:()=>Te,rigidBodyBundleSetDamping:()=>ne,rigidBodyBundleSetLinearVelocity:()=>Ge,rigidBodyBundleSetMassProps:()=>de,rigidBodyBundleSetPushVelocity:()=>be,rigidBodyBundleSetTurnVelocity:()=>we,rigidBodyBundleTranslate:()=>ve,rigidBodyClearForces:()=>wi,rigidBodyGetAngularDamping:()=>ti,rigidBodyGetAngularVelocity:()=>Si,rigidBodyGetBufferedMotionStatePtr:()=>Z,rigidBodyGetLinearDamping:()=>ei,rigidBodyGetLinearVelocity:()=>Pi,rigidBodyGetLocalInertia:()=>ri,rigidBodyGetMass:()=>oi,rigidBodyGetMotionStatePtr:()=>Y,rigidBodyGetPushVelocity:()=>Bi,rigidBodyGetTemporalKinematicStatePtr:()=>Ti,rigidBodyGetTotalForce:()=>di,rigidBodyGetTotalTorque:()=>ui,rigidBodyGetTurnVelocity:()=>pi,rigidBodyGetWorldTransformPtr:()=>Gi,rigidBodySetAngularVelocity:()=>Ai,rigidBodySetDamping:()=>ii,rigidBodySetLinearVelocity:()=>Ri,rigidBodySetMassProps:()=>ni,rigidBodySetPushVelocity:()=>mi,rigidBodySetTurnVelocity:()=>hi,rigidBodyTranslate:()=>Wi,wbg_rayon_PoolBuilder:()=>De,wbg_rayon_start_worker:()=>Ie});const d="undefined"!=typeof TextDecoder?new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0}):{decode:()=>{throw Error("TextDecoder not available")}};"undefined"!=typeof TextDecoder&&d.decode();let u=null;function l(i,e){return i>>>=0,d.decode((null!==u&&u.buffer===r.memory.buffer||(u=new Uint8Array(r.memory.buffer)),u).slice(i,i+e))}const s=new Array(128).fill(void 0);s.push(void 0,null,!0,!1);let c=s.length;function a(i){c===s.length&&s.push(s.length+1);const e=c;return c=s[e],s[e]=i,e}function y(i){return s[i]}function g(i){const e=y(i);return function(i){i<132||(s[i]=c,c=i)}(i),e}function f(){r.init()}function B(i){return r.allocateBuffer(i)>>>0}function p(i,e){r.deallocateBuffer(i,e)}function m(i,e,t,n,o){return r.createGeneric6DofConstraint(i,e,t,n,o)>>>0}function h(i,e,t,n,o,d){return r.createGeneric6DofConstraintFromBundle(i,e,t,n,o,d)>>>0}function _(i,e,t,n,o){return r.createGeneric6DofSpringConstraint(i,e,t,n,o)>>>0}function b(i,e,t,n,o,d){return r.createGeneric6DofSpringConstraintFromBundle(i,e,t,n,o,d)>>>0}function w(i){r.destroyConstraint(i)}function P(i,e,t,n){r.constraintSetLinearLowerLimit(i,e,t,n)}function S(i,e,t,n){r.constraintSetLinearUpperLimit(i,e,t,n)}function R(i,e,t,n){r.constraintSetAngularLowerLimit(i,e,t,n)}function A(i,e,t,n){r.constraintSetAngularUpperLimit(i,e,t,n)}function W(i,e,t){r.constraintEnableSpring(i,e,t)}function G(i,e,t){r.constraintSetStiffness(i,e,t)}function T(i,e,t){r.constraintSetDamping(i,e,t)}function v(i){return r.createMultiPhysicsWorld(i)>>>0}function C(i){r.destroyMultiPhysicsWorld(i)}function L(i,e,t,n){r.multiPhysicsWorldSetGravity(i,e,t,n)}function M(i,e,t,n){r.multiPhysicsWorldStepSimulation(i,e,t,n)}function F(i,e,t){r.multiPhysicsWorldAddRigidBody(i,e,t)}function I(i,e,t){r.multiPhysicsWorldRemoveRigidBody(i,e,t)}function V(i,e,t){r.multiPhysicsWorldAddRigidBodyBundle(i,e,t)}function D(i,e,t){r.multiPhysicsWorldRemoveRigidBodyBundle(i,e,t)}function k(i,e){r.multiPhysicsWorldAddRigidBodyToGlobal(i,e)}function q(i,e){r.multiPhysicsWorldRemoveRigidBodyFromGlobal(i,e)}function U(i,e){r.multiPhysicsWorldAddRigidBodyBundleToGlobal(i,e)}function x(i,e){r.multiPhysicsWorldRemoveRigidBodyBundleFromGlobal(i,e)}function j(i,e,t){r.multiPhysicsWorldAddRigidBodyShadow(i,e,t)}function O(i,e,t){r.multiPhysicsWorldRemoveRigidBodyShadow(i,e,t)}function E(i,e,t){r.multiPhysicsWorldAddRigidBodyBundleShadow(i,e,t)}function z(i,e,t){r.multiPhysicsWorldRemoveRigidBodyBundleShadow(i,e,t)}function K(i,e,t,n){r.multiPhysicsWorldAddConstraint(i,e,t,n)}function $(i,e,t){r.multiPhysicsWorldRemoveConstraint(i,e,t)}function X(i,e){r.multiPhysicsWorldMakeBodyKinematic(i,e)}function H(i,e){r.multiPhysicsWorldRestoreBodyDynamic(i,e)}function J(i,e){r.multiPhysicsWorldUseMotionStateBuffer(i,e)}function N(i){return r.createRigidBody(i)>>>0}function Q(i){r.destroyRigidBody(i)}function Y(i){return r.rigidBodyGetMotionStatePtr(i)>>>0}function Z(i){return r.rigidBodyGetBufferedMotionStatePtr(i)>>>0}function ii(i,e,t){r.rigidBodySetDamping(i,e,t)}function ei(i){return r.rigidBodyGetLinearDamping(i)}function ti(i){return r.rigidBodyGetAngularDamping(i)}function ni(i,e,t,n,o){r.rigidBodySetMassProps(i,e,t,n,o)}function oi(i){return r.rigidBodyGetMass(i)}function ri(i,e){r.rigidBodyGetLocalInertia(i,e)}function di(i,e){r.rigidBodyGetTotalForce(i,e)}function ui(i,e){r.rigidBodyGetTotalTorque(i,e)}function li(i,e,t,n){r.rigidBodyApplyCentralForce(i,e,t,n)}function si(i,e,t,n){r.rigidBodyApplyTorque(i,e,t,n)}function ci(i,e,t){r.rigidBodyApplyForce(i,e,t)}function ai(i,e,t,n){r.rigidBodyApplyCentralImpulse(i,e,t,n)}function yi(i,e,t,n){r.rigidBodyApplyTorqueImpulse(i,e,t,n)}function gi(i,e,t){r.rigidBodyApplyImpulse(i,e,t)}function fi(i,e,t){r.rigidBodyApplyPushImpulse(i,e,t)}function Bi(i,e){r.rigidBodyGetPushVelocity(i,e)}function pi(i,e){r.rigidBodyGetTurnVelocity(i,e)}function mi(i,e,t,n){r.rigidBodySetPushVelocity(i,e,t,n)}function hi(i,e,t,n){r.rigidBodySetTurnVelocity(i,e,t,n)}function _i(i,e,t,n){r.rigidBodyApplyCentralPushImpulse(i,e,t,n)}function bi(i,e,t,n){r.rigidBodyApplyTorqueTurnImpulse(i,e,t,n)}function wi(i){r.rigidBodyClearForces(i)}function Pi(i,e){r.rigidBodyGetLinearVelocity(i,e)}function Si(i,e){r.rigidBodyGetAngularVelocity(i,e)}function Ri(i,e,t,n){r.rigidBodySetLinearVelocity(i,e,t,n)}function Ai(i,e,t,n){r.rigidBodySetAngularVelocity(i,e,t,n)}function Wi(i,e,t,n){r.rigidBodyTranslate(i,e,t,n)}function Gi(i){return r.rigidBodyGetWorldTransformPtr(i)>>>0}function Ti(i){return r.rigidBodyGetTemporalKinematicStatePtr(i)>>>0}function vi(i,e,t){return r.createBoxShape(i,e,t)>>>0}function Ci(i){return r.createSphereShape(i)>>>0}function Li(i,e){return r.createCapsuleShape(i,e)>>>0}function Mi(i,e,t,n){return r.createStaticPlaneShape(i,e,t,n)>>>0}function Fi(i){r.destroyShape(i)}function Ii(i){return r.createMultiPhysicsRuntime(i)>>>0}function Vi(i){r.destroyMultiPhysicsRuntime(i)}function Di(i){return r.multiPhysicsRuntimeGetLockStatePtr(i)>>>0}function ki(i,e,t,n){r.multiPhysicsRuntimeBufferedStepSimulation(i,e,t,n)}function qi(i){return r.createMultiPhysicsRuntime(i)>>>0}function Ui(i){r.destroyMultiPhysicsRuntime(i)}function xi(i){return r.multiPhysicsRuntimeGetLockStatePtr(i)>>>0}function ji(i,e,t,n){r.physicsRuntimeBufferedStepSimulation(i,e,t,n)}function Oi(){return r.createPhysicsWorld()>>>0}function Ei(i){r.destroyPhysicsWorld(i)}function zi(i,e,t,n){r.physicsWorldSetGravity(i,e,t,n)}function Ki(i,e,t,n){r.physicsWorldStepSimulation(i,e,t,n)}function $i(i,e){r.physicsWorldAddRigidBody(i,e)}function Xi(i,e){r.physicsWorldRemoveRigidBody(i,e)}function Hi(i,e){r.physicsWorldAddRigidBodyBundle(i,e)}function Ji(i,e){r.physicsWorldRemoveRigidBodyBundle(i,e)}function Ni(i,e,t){r.physicsWorldAddConstraint(i,e,t)}function Qi(i,e){r.physicsWorldRemoveConstraint(i,e)}function Yi(i,e){r.physicsWorldUseMotionStateBuffer(i,e)}function Zi(i,e){return r.createRigidBodyBundle(i,e)>>>0}function ie(i){r.destroyRigidBodyBundle(i)}function ee(i){return r.rigidBodyBundleGetMotionStatesPtr(i)>>>0}function te(i){return r.rigidBodyBundleGetBufferedMotionStatesPtr(i)>>>0}function ne(i,e,t,n){r.rigidBodyBundleSetDamping(i,e,t,n)}function oe(i,e){return r.rigidBodyBundleGetLinearDamping(i,e)}function re(i,e){return r.rigidBodyBundleGetAngularDamping(i,e)}function de(i,e,t,n,o,d){r.rigidBodyBundleSetMassProps(i,e,t,n,o,d)}function ue(i,e){return r.rigidBodyBundleGetMass(i,e)}function le(i,e,t){r.rigidBodyBundleGetLocalInertia(i,e,t)}function se(i,e,t){r.rigidBodyBundleGetTotalForce(i,e,t)}function ce(i,e,t){r.rigidBodyBundleGetTotalTorque(i,e,t)}function ae(i,e,t,n,o){r.rigidBodyBundleApplyCentralForce(i,e,t,n,o)}function ye(i,e,t,n,o){r.rigidBodyBundleApplyTorque(i,e,t,n,o)}function ge(i,e,t,n){r.rigidBodyBundleApplyForce(i,e,t,n)}function fe(i,e,t,n,o){r.rigidBodyBundleApplyCentralImpulse(i,e,t,n,o)}function Be(i,e,t,n,o){r.rigidBodyBundleApplyTorqueImpulse(i,e,t,n,o)}function pe(i,e,t,n){r.rigidBodyBundleApplyImpulse(i,e,t,n)}function me(i,e,t,n){r.rigidBodyBundleApplyPushImpulse(i,e,t,n)}function he(i,e,t){r.rigidBodyBundleGetPushVelocity(i,e,t)}function _e(i,e,t){r.rigidBodyBundleGetTurnVelocity(i,e,t)}function be(i,e,t,n,o){r.rigidBodyBundleSetPushVelocity(i,e,t,n,o)}function we(i,e,t,n,o){r.rigidBodyBundleSetTurnVelocity(i,e,t,n,o)}function Pe(i,e,t,n,o){r.rigidBodyBundleApplyCentralPushImpulse(i,e,t,n,o)}function Se(i,e,t,n,o){r.rigidBodyBundleApplyTorqueTurnImpulse(i,e,t,n,o)}function Re(i,e){r.rigidBodyBundleClearForces(i,e)}function Ae(i,e,t){r.rigidBodyBundleGetLinearVelocity(i,e,t)}function We(i,e,t){r.rigidBodyBundleGetAngularVelocity(i,e,t)}function Ge(i,e,t,n,o){r.rigidBodyBundleSetLinearVelocity(i,e,t,n,o)}function Te(i,e,t,n,o){r.rigidBodyBundleSetAngularVelocity(i,e,t,n,o)}function ve(i,e,t,n,o){r.rigidBodyBundleTranslate(i,e,t,n,o)}function Ce(i,e){return r.rigidBodyBundleGetWorldTransformPtr(i,e)>>>0}function Le(i){return r.rigidBodyBundleGetTemporalKinematicStatesPtr(i)>>>0}function Me(i,e){try{return i.apply(this,e)}catch(i){r.__wbindgen_exn_store(a(i))}}function Fe(i){return g(r.initThreadPool(i))}function Ie(i){r.wbg_rayon_start_worker(i)}const Ve="undefined"==typeof FinalizationRegistry?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry((i=>r.__wbg_wbg_rayon_poolbuilder_free(i>>>0,1)));class De{static __wrap(i){i>>>=0;const e=Object.create(De.prototype);return e.__wbg_ptr=i,Ve.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){const i=this.__wbg_ptr;return this.__wbg_ptr=0,Ve.unregister(this),i}free(){const i=this.__destroy_into_raw();r.__wbg_wbg_rayon_poolbuilder_free(i,0)}numThreads(){return r.wbg_rayon_poolbuilder_numThreads(this.__wbg_ptr)>>>0}receiver(){return r.wbg_rayon_poolbuilder_receiver(this.__wbg_ptr)>>>0}build(){r.wbg_rayon_poolbuilder_build(this.__wbg_ptr)}}function ke(){const i={wbg:{}};return i.wbg.__wbindgen_string_new=function(i,e){return a(l(i,e))},i.wbg.__wbindgen_object_drop_ref=function(i){g(i)},i.wbg.__wbg_instanceof_Window_5012736c80a01584=function(i){let e;try{e=y(i)instanceof Window}catch(i){e=!1}return e},i.wbg.__wbg_log_b103404cc5920657=function(i){console.log(y(i))},i.wbg.__wbg_newnoargs_76313bd6ff35d0f2=function(i,e){return a(new Function(l(i,e)))},i.wbg.__wbg_call_1084a111329e68ce=function(){return Me((function(i,e){return a(y(i).call(y(e)))}),arguments)},i.wbg.__wbindgen_object_clone_ref=function(i){return a(y(i))},i.wbg.__wbg_self_3093d5d1f7bcb682=function(){return Me((function(){return a(self.self)}),arguments)},i.wbg.__wbg_window_3bcfc4d31bc012f8=function(){return Me((function(){return a(window.window)}),arguments)},i.wbg.__wbg_globalThis_86b222e13bdf32ed=function(){return Me((function(){return a(globalThis.globalThis)}),arguments)},i.wbg.__wbg_global_e5a3fe56f8be9485=function(){return Me((function(){return a(global.global)}),arguments)},i.wbg.__wbindgen_is_undefined=function(i){return void 0===y(i)},i.wbg.__wbindgen_throw=function(i,e){throw new Error(l(i,e))},i.wbg.__wbindgen_module=function(){return a(je.__wbindgen_wasm_module)},i.wbg.__wbindgen_memory=function(){return a(r.memory)},i.wbg.__wbg_startWorkers_d587c7d659590d3c=function(i,e,n){return a(async function(i,e,n){if(0===n.numThreads())throw new Error("num_threads must be > 0.");const r={module:i,memory:e,receiver:n.receiver()};o=await Promise.all(Array.from({length:n.numThreads()},(async()=>{const i=new Worker(new URL(t.p+t.u(7907),t.b),{type:void 0});return i.postMessage(r),await new Promise((e=>i.addEventListener("message",e,{once:!0}))),i}))),n.build()}(g(i),g(e),De.__wrap(n)))},i}function qe(i,e){i.wbg.memory=e||new WebAssembly.Memory({initial:18,maximum:16384,shared:!0})}function Ue(i,e,t){if(r=i.exports,je.__wbindgen_wasm_module=e,u=null,void 0!==t&&("number"!=typeof t||0===t||t%65536!=0))throw"invalid stack size";return r.__wbindgen_start(t),r}function xe(i,e){if(void 0!==r)return r;let t;void 0!==i&&Object.getPrototypeOf(i)===Object.prototype?({module:i,memory:e,thread_stack_size:t}=i):console.warn("using deprecated parameters for `initSync()`; pass a single object instead");const n=ke();return qe(n,e),i instanceof WebAssembly.Module||(i=new WebAssembly.Module(i)),Ue(new WebAssembly.Instance(i,n),i,t)}async function je(i,e){if(void 0!==r)return r;let n;void 0!==i&&Object.getPrototypeOf(i)===Object.prototype?({module_or_path:i,memory:e,thread_stack_size:n}=i):console.warn("using deprecated parameters for the initialization function; pass a single object instead"),void 0===i&&(i=new URL(t(9603),t.b));const o=ke();("string"==typeof i||"function"==typeof Request&&i instanceof Request||"function"==typeof URL&&i instanceof URL)&&(i=fetch(i)),qe(o,e);const{instance:d,module:u}=await async function(i,e){if("function"==typeof Response&&i instanceof Response){if("function"==typeof WebAssembly.instantiateStreaming)try{return await WebAssembly.instantiateStreaming(i,e)}catch(e){if("application/wasm"==i.headers.get("Content-Type"))throw e;console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",e)}const t=await i.arrayBuffer();return await WebAssembly.instantiate(t,e)}{const t=await WebAssembly.instantiate(i,e);return t instanceof WebAssembly.Instance?{instance:t,module:i}:t}}(await i,o);return Ue(d,u,n)}const Oe=je;class Ee{getWasmInstanceInner(){return n}}},9603:(i,e,t)=>{i.exports=t.p+"1c1894783ebbd4b5cd6d.wasm"},9800:(i,e,t)=>{t.d(e,{X:()=>n});class n{sampleCount;showFpsPerFrame;_func;constructor(i){this.sampleCount=600,this.showFpsPerFrame=!1,this._func=i}runBench(){const i=[],e=this.sampleCount;for(let t=0;t<e;++t){const e=performance.now();this._func();const t=1e3/(performance.now()-e);i.push(t)}let t=0,n="";if(this.showFpsPerFrame){let o="";for(let n=0;n<e;++n)o+=`(${n}, ${i[n]})`,n!==e-1&&(o+=", "),t+=i[n];n+=`Result: ${o}`,console.log(n)}else for(let n=0;n<e;++n)t+=i[n];n+="Average: "+t/e;const o=document.createElement("div");o.style.position="absolute",o.style.top="0",o.style.left="0",o.style.color="black",o.textContent=n,document.body.appendChild(o)}}}}]);