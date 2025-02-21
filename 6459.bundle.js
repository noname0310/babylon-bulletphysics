"use strict";(self.webpackChunkbabylon_bulletphysics=self.webpackChunkbabylon_bulletphysics||[]).push([[6459],{27744:(t,e,n)=>{n.d(e,{t:()=>zt});var i={};let o,r;n.r(i),n.d(i,{allocateBuffer:()=>pt,constraintEnableSpring:()=>gt,constraintSetAngularLowerLimit:()=>yt,constraintSetAngularUpperLimit:()=>mt,constraintSetDamping:()=>_t,constraintSetLinearLowerLimit:()=>lt,constraintSetLinearUpperLimit:()=>ft,constraintSetStiffness:()=>ht,createBoxShape:()=>Bt,createCapsuleShape:()=>St,createGeneric6DofConstraint:()=>st,createGeneric6DofConstraintFromBundle:()=>dt,createGeneric6DofSpringConstraint:()=>ct,createGeneric6DofSpringConstraintFromBundle:()=>ut,createMultiPhysicsRuntime:()=>vt,createMultiPhysicsWorld:()=>v,createPhysicsRuntime:()=>nt,createPhysicsWorld:()=>q,createRigidBody:()=>m,createRigidBodyBundle:()=>w,createSphereShape:()=>Rt,createStaticPlaneShape:()=>Pt,deallocateBuffer:()=>wt,default:()=>Et,destroyConstraint:()=>at,destroyMultiPhysicsRuntime:()=>At,destroyMultiPhysicsWorld:()=>A,destroyPhysicsRuntime:()=>it,destroyPhysicsWorld:()=>X,destroyRigidBody:()=>g,destroyRigidBodyBundle:()=>B,destroyShape:()=>Wt,init:()=>bt,initSync:()=>jt,initThreadPool:()=>Lt,multiPhysicsRuntimeBufferedStepSimulation:()=>Mt,multiPhysicsRuntimeGetLockStatePtr:()=>Gt,multiPhysicsWorldAddConstraint:()=>I,multiPhysicsWorldAddRigidBody:()=>C,multiPhysicsWorldAddRigidBodyBundle:()=>k,multiPhysicsWorldAddRigidBodyBundleShadow:()=>E,multiPhysicsWorldAddRigidBodyBundleToGlobal:()=>U,multiPhysicsWorldAddRigidBodyShadow:()=>j,multiPhysicsWorldAddRigidBodyToGlobal:()=>F,multiPhysicsWorldRemoveConstraint:()=>K,multiPhysicsWorldRemoveRigidBody:()=>L,multiPhysicsWorldRemoveRigidBodyBundle:()=>D,multiPhysicsWorldRemoveRigidBodyBundleFromGlobal:()=>x,multiPhysicsWorldRemoveRigidBodyBundleShadow:()=>z,multiPhysicsWorldRemoveRigidBodyFromGlobal:()=>T,multiPhysicsWorldRemoveRigidBodyShadow:()=>O,multiPhysicsWorldSetGravity:()=>G,multiPhysicsWorldStepSimulation:()=>M,multiPhysicsWorldUseMotionStateBuffer:()=>$,physicsRuntimeBufferedStepSimulation:()=>rt,physicsRuntimeGetLockStatePtr:()=>ot,physicsWorldAddConstraint:()=>Z,physicsWorldAddRigidBody:()=>N,physicsWorldAddRigidBodyBundle:()=>V,physicsWorldRemoveConstraint:()=>tt,physicsWorldRemoveRigidBody:()=>Q,physicsWorldRemoveRigidBodyBundle:()=>Y,physicsWorldSetGravity:()=>H,physicsWorldStepSimulation:()=>J,physicsWorldUseMotionStateBuffer:()=>et,rigidBodyBundleGetBufferedMotionStatesPtr:()=>S,rigidBodyBundleGetMotionStatesPtr:()=>R,rigidBodyBundleMakeKinematic:()=>P,rigidBodyBundleRestoreDynamic:()=>W,rigidBodyGetBufferedMotionStatePtr:()=>_,rigidBodyGetMotionStatePtr:()=>h,rigidBodyMakeKinematic:()=>b,rigidBodyRestoreDynamic:()=>p,wbg_rayon_PoolBuilder:()=>Ft,wbg_rayon_start_worker:()=>kt});const s=new Array(128).fill(void 0);function d(t){return s[t]}s.push(void 0,null,!0,!1);let c=s.length;function u(t){const e=d(t);return function(t){t<132||(s[t]=c,c=t)}(t),e}const a="undefined"!=typeof TextDecoder?new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0}):{decode:()=>{throw Error("TextDecoder not available")}};"undefined"!=typeof TextDecoder&&a.decode();let l=null;function f(t,e){return t>>>=0,a.decode((null!==l&&l.buffer===r.memory.buffer||(l=new Uint8Array(r.memory.buffer)),l).slice(t,t+e))}function y(t){c===s.length&&s.push(s.length+1);const e=c;return c=s[e],s[e]=t,e}function m(t){return r.createRigidBody(t)>>>0}function g(t){r.destroyRigidBody(t)}function h(t){return r.rigidBodyGetMotionStatePtr(t)>>>0}function _(t){return r.rigidBodyGetBufferedMotionStatePtr(t)>>>0}function b(t){r.rigidBodyMakeKinematic(t)}function p(t){r.rigidBodyRestoreDynamic(t)}function w(t,e){return r.createRigidBodyBundle(t,e)>>>0}function B(t){r.destroyRigidBodyBundle(t)}function R(t){return r.rigidBodyBundleGetMotionStatesPtr(t)>>>0}function S(t){return r.rigidBodyBundleGetBufferedMotionStatesPtr(t)>>>0}function P(t,e){r.rigidBodyBundleMakeKinematic(t,e)}function W(t,e){r.rigidBodyBundleRestoreDynamic(t,e)}function v(t){return r.createMultiPhysicsWorld(t)>>>0}function A(t){r.destroyMultiPhysicsWorld(t)}function G(t,e,n,i){r.multiPhysicsWorldSetGravity(t,e,n,i)}function M(t,e,n,i){r.multiPhysicsWorldStepSimulation(t,e,n,i)}function C(t,e,n){r.multiPhysicsWorldAddRigidBody(t,e,n)}function L(t,e,n){r.multiPhysicsWorldRemoveRigidBody(t,e,n)}function k(t,e,n){r.multiPhysicsWorldAddRigidBodyBundle(t,e,n)}function D(t,e,n){r.multiPhysicsWorldRemoveRigidBodyBundle(t,e,n)}function F(t,e){r.multiPhysicsWorldAddRigidBodyToGlobal(t,e)}function T(t,e){r.multiPhysicsWorldRemoveRigidBodyFromGlobal(t,e)}function U(t,e){r.multiPhysicsWorldAddRigidBodyBundleToGlobal(t,e)}function x(t,e){r.multiPhysicsWorldRemoveRigidBodyBundleFromGlobal(t,e)}function j(t,e,n){r.multiPhysicsWorldAddRigidBodyShadow(t,e,n)}function O(t,e,n){r.multiPhysicsWorldRemoveRigidBodyShadow(t,e,n)}function E(t,e,n){r.multiPhysicsWorldAddRigidBodyBundleShadow(t,e,n)}function z(t,e,n){r.multiPhysicsWorldRemoveRigidBodyBundleShadow(t,e,n)}function I(t,e,n,i){r.multiPhysicsWorldAddConstraint(t,e,n,i)}function K(t,e,n){r.multiPhysicsWorldRemoveConstraint(t,e,n)}function $(t,e){r.multiPhysicsWorldUseMotionStateBuffer(t,e)}function q(){return r.createPhysicsWorld()>>>0}function X(t){r.destroyPhysicsWorld(t)}function H(t,e,n,i){r.physicsWorldSetGravity(t,e,n,i)}function J(t,e,n,i){r.physicsWorldStepSimulation(t,e,n,i)}function N(t,e){r.physicsWorldAddRigidBody(t,e)}function Q(t,e){r.physicsWorldRemoveRigidBody(t,e)}function V(t,e){r.physicsWorldAddRigidBodyBundle(t,e)}function Y(t,e){r.physicsWorldRemoveRigidBodyBundle(t,e)}function Z(t,e,n){r.physicsWorldAddConstraint(t,e,n)}function tt(t,e){r.physicsWorldRemoveConstraint(t,e)}function et(t,e){r.physicsWorldUseMotionStateBuffer(t,e)}function nt(t){return r.createPhysicsRuntime(t)>>>0}function it(t){r.destroyPhysicsRuntime(t)}function ot(t){return r.physicsRuntimeGetLockStatePtr(t)>>>0}function rt(t,e,n,i){r.physicsRuntimeBufferedStepSimulation(t,e,n,i)}function st(t,e,n,i,o){return r.createGeneric6DofConstraint(t,e,n,i,o)>>>0}function dt(t,e,n,i,o,s){return r.createGeneric6DofConstraintFromBundle(t,e,n,i,o,s)>>>0}function ct(t,e,n,i,o){return r.createGeneric6DofSpringConstraint(t,e,n,i,o)>>>0}function ut(t,e,n,i,o,s){return r.createGeneric6DofSpringConstraintFromBundle(t,e,n,i,o,s)>>>0}function at(t){r.destroyConstraint(t)}function lt(t,e,n,i){r.constraintSetLinearLowerLimit(t,e,n,i)}function ft(t,e,n,i){r.constraintSetLinearUpperLimit(t,e,n,i)}function yt(t,e,n,i){r.constraintSetAngularLowerLimit(t,e,n,i)}function mt(t,e,n,i){r.constraintSetAngularUpperLimit(t,e,n,i)}function gt(t,e,n){r.constraintEnableSpring(t,e,n)}function ht(t,e,n){r.constraintSetStiffness(t,e,n)}function _t(t,e,n){r.constraintSetDamping(t,e,n)}function bt(){r.init()}function pt(t){return r.allocateBuffer(t)>>>0}function wt(t,e){r.deallocateBuffer(t,e)}function Bt(t,e,n){return r.createBoxShape(t,e,n)>>>0}function Rt(t){return r.createSphereShape(t)>>>0}function St(t,e){return r.createCapsuleShape(t,e)>>>0}function Pt(t,e,n,i){return r.createStaticPlaneShape(t,e,n,i)>>>0}function Wt(t){r.destroyShape(t)}function vt(t){return r.createMultiPhysicsRuntime(t)>>>0}function At(t){r.destroyMultiPhysicsRuntime(t)}function Gt(t){return r.multiPhysicsRuntimeGetLockStatePtr(t)>>>0}function Mt(t,e,n,i){r.multiPhysicsRuntimeBufferedStepSimulation(t,e,n,i)}function Ct(t,e){try{return t.apply(this,e)}catch(t){r.__wbindgen_exn_store(y(t))}}function Lt(t){return u(r.initThreadPool(t))}function kt(t){r.wbg_rayon_start_worker(t)}const Dt="undefined"==typeof FinalizationRegistry?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry((t=>r.__wbg_wbg_rayon_poolbuilder_free(t>>>0,1)));class Ft{static __wrap(t){t>>>=0;const e=Object.create(Ft.prototype);return e.__wbg_ptr=t,Dt.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,Dt.unregister(this),t}free(){const t=this.__destroy_into_raw();r.__wbg_wbg_rayon_poolbuilder_free(t,0)}numThreads(){return r.wbg_rayon_poolbuilder_numThreads(this.__wbg_ptr)>>>0}receiver(){return r.wbg_rayon_poolbuilder_receiver(this.__wbg_ptr)>>>0}build(){r.wbg_rayon_poolbuilder_build(this.__wbg_ptr)}}function Tt(){const t={wbg:{}};return t.wbg.__wbindgen_object_drop_ref=function(t){u(t)},t.wbg.__wbindgen_string_new=function(t,e){return y(f(t,e))},t.wbg.__wbg_instanceof_Window_5012736c80a01584=function(t){let e;try{e=d(t)instanceof Window}catch(t){e=!1}return e},t.wbg.__wbg_log_b103404cc5920657=function(t){console.log(d(t))},t.wbg.__wbg_newnoargs_76313bd6ff35d0f2=function(t,e){return y(new Function(f(t,e)))},t.wbg.__wbg_call_1084a111329e68ce=function(){return Ct((function(t,e){return y(d(t).call(d(e)))}),arguments)},t.wbg.__wbindgen_object_clone_ref=function(t){return y(d(t))},t.wbg.__wbg_self_3093d5d1f7bcb682=function(){return Ct((function(){return y(self.self)}),arguments)},t.wbg.__wbg_window_3bcfc4d31bc012f8=function(){return Ct((function(){return y(window.window)}),arguments)},t.wbg.__wbg_globalThis_86b222e13bdf32ed=function(){return Ct((function(){return y(globalThis.globalThis)}),arguments)},t.wbg.__wbg_global_e5a3fe56f8be9485=function(){return Ct((function(){return y(global.global)}),arguments)},t.wbg.__wbindgen_is_undefined=function(t){return void 0===d(t)},t.wbg.__wbindgen_throw=function(t,e){throw new Error(f(t,e))},t.wbg.__wbindgen_module=function(){return y(Ot.__wbindgen_wasm_module)},t.wbg.__wbindgen_memory=function(){return y(r.memory)},t.wbg.__wbg_startWorkers_d587c7d659590d3c=function(t,e,i){return y(async function(t,e,i){if(0===i.numThreads())throw new Error("num_threads must be > 0.");const r={module:t,memory:e,receiver:i.receiver()};o=await Promise.all(Array.from({length:i.numThreads()},(async()=>{const t=new Worker(new URL(n.p+n.u(7907),n.b),{type:void 0});return t.postMessage(r),await new Promise((e=>t.addEventListener("message",e,{once:!0}))),t}))),i.build()}(u(t),u(e),Ft.__wrap(i)))},t}function Ut(t,e){t.wbg.memory=e||new WebAssembly.Memory({initial:18,maximum:16384,shared:!0})}function xt(t,e,n){if(r=t.exports,Ot.__wbindgen_wasm_module=e,l=null,void 0!==n&&("number"!=typeof n||0===n||n%65536!=0))throw"invalid stack size";return r.__wbindgen_start(n),r}function jt(t,e){if(void 0!==r)return r;let n;void 0!==t&&Object.getPrototypeOf(t)===Object.prototype?({module:t,memory:e,thread_stack_size:n}=t):console.warn("using deprecated parameters for `initSync()`; pass a single object instead");const i=Tt();return Ut(i,e),t instanceof WebAssembly.Module||(t=new WebAssembly.Module(t)),xt(new WebAssembly.Instance(t,i),t,n)}async function Ot(t,e){if(void 0!==r)return r;let i;void 0!==t&&Object.getPrototypeOf(t)===Object.prototype?({module_or_path:t,memory:e,thread_stack_size:i}=t):console.warn("using deprecated parameters for the initialization function; pass a single object instead"),void 0===t&&(t=new URL(n(79603),n.b));const o=Tt();("string"==typeof t||"function"==typeof Request&&t instanceof Request||"function"==typeof URL&&t instanceof URL)&&(t=fetch(t)),Ut(o,e);const{instance:s,module:d}=await async function(t,e){if("function"==typeof Response&&t instanceof Response){if("function"==typeof WebAssembly.instantiateStreaming)try{return await WebAssembly.instantiateStreaming(t,e)}catch(e){if("application/wasm"==t.headers.get("Content-Type"))throw e;console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",e)}const n=await t.arrayBuffer();return await WebAssembly.instantiate(n,e)}{const n=await WebAssembly.instantiate(t,e);return n instanceof WebAssembly.Instance?{instance:n,module:t}:n}}(await t,o);return xt(s,d,i)}const Et=Ot;class zt{getWasmInstanceInner(){return i}}},89800:(t,e,n)=>{n.d(e,{X:()=>i});class i{sampleCount;showFpsPerFrame;_func;constructor(t){this.sampleCount=600,this.showFpsPerFrame=!1,this._func=t}runBench(){const t=[],e=this.sampleCount;for(let n=0;n<e;++n){const e=performance.now();this._func();const n=1e3/(performance.now()-e);t.push(n)}let n=0,i="";if(this.showFpsPerFrame){let o="";for(let i=0;i<e;++i)o+=`(${i}, ${t[i]})`,i!==e-1&&(o+=", "),n+=t[i];i+=`Result: ${o}`,console.log(i)}else for(let i=0;i<e;++i)n+=t[i];i+="Average: "+n/e;const o=document.createElement("div");o.style.position="absolute",o.style.top="0",o.style.left="0",o.style.color="black",o.textContent=i,document.body.appendChild(o)}}},79603:(t,e,n)=>{t.exports=n.p+"be90c983137b440d847f.wasm"}}]);