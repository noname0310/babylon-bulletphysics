"use strict";(self.webpackChunkbabylon_bulletphysics=self.webpackChunkbabylon_bulletphysics||[]).push([[6980],{2090:(e,i,t)=>{t.d(i,{D:()=>d});var n=t(5228),r=t(94444);class o{wait(){}}class d{wasmInstance;lock;constructor(e){this.wasmInstance=e,this.lock=new o}createRigidBodyImpl(){return new r.x}createRigidBodyBundleImpl(e){return new n.R(e.count)}}},91167:(e,i,t)=>{t.d(i,{Z:()=>Ae});var n={};let r;t.r(n),t.d(n,{allocateBuffer:()=>Se,constraintEnableSpring:()=>fe,constraintSetAngularLowerLimit:()=>ue,constraintSetAngularUpperLimit:()=>he,constraintSetDamping:()=>me,constraintSetLinearLowerLimit:()=>ce,constraintSetLinearUpperLimit:()=>le,constraintSetStiffness:()=>ye,createBoxShape:()=>j,createCapsuleShape:()=>K,createGeneric6DofConstraint:()=>re,createGeneric6DofConstraintFromBundle:()=>oe,createGeneric6DofSpringConstraint:()=>de,createGeneric6DofSpringConstraintFromBundle:()=>se,createMultiPhysicsRuntime:()=>Re,createMultiPhysicsWorld:()=>u,createPhysicsRuntime:()=>we,createPhysicsWorld:()=>A,createRigidBody:()=>Z,createRigidBodyBundle:()=>X,createSphereShape:()=>z,createStaticPlaneShape:()=>q,deallocateBuffer:()=>We,default:()=>ke,destroyConstraint:()=>ae,destroyMultiPhysicsRuntime:()=>Be,destroyMultiPhysicsWorld:()=>h,destroyPhysicsRuntime:()=>_e,destroyPhysicsWorld:()=>M,destroyRigidBody:()=>H,destroyRigidBodyBundle:()=>$,destroyShape:()=>Y,init:()=>be,initSync:()=>Ce,multiPhysicsRuntimeGetLockStatePtr:()=>ge,multiPhysicsWorldAddConstraint:()=>C,multiPhysicsWorldAddRigidBody:()=>m,multiPhysicsWorldAddRigidBodyBundle:()=>B,multiPhysicsWorldAddRigidBodyBundleShadow:()=>v,multiPhysicsWorldAddRigidBodyBundleToGlobal:()=>p,multiPhysicsWorldAddRigidBodyShadow:()=>S,multiPhysicsWorldAddRigidBodyToGlobal:()=>w,multiPhysicsWorldRemoveConstraint:()=>G,multiPhysicsWorldRemoveRigidBody:()=>R,multiPhysicsWorldRemoveRigidBodyBundle:()=>g,multiPhysicsWorldRemoveRigidBodyBundleFromGlobal:()=>b,multiPhysicsWorldRemoveRigidBodyBundleShadow:()=>P,multiPhysicsWorldRemoveRigidBodyFromGlobal:()=>_,multiPhysicsWorldRemoveRigidBodyShadow:()=>W,multiPhysicsWorldSetGravity:()=>f,multiPhysicsWorldStepSimulation:()=>y,multiPhysicsWorldUseMotionStateBuffer:()=>k,physicsRuntimeGetLockStatePtr:()=>pe,physicsWorldAddConstraint:()=>U,physicsWorldAddRigidBody:()=>L,physicsWorldAddRigidBodyBundle:()=>F,physicsWorldRemoveConstraint:()=>x,physicsWorldRemoveRigidBody:()=>D,physicsWorldRemoveRigidBodyBundle:()=>T,physicsWorldSetGravity:()=>I,physicsWorldStepSimulation:()=>E,physicsWorldUseMotionStateBuffer:()=>O,rigidBodyBundleGetBufferedMotionStatesPtr:()=>ie,rigidBodyBundleGetMotionStatesPtr:()=>ee,rigidBodyBundleMakeKinematic:()=>te,rigidBodyBundleRestoreDynamic:()=>ne,rigidBodyGetBufferedMotionStatePtr:()=>N,rigidBodyGetMotionStatePtr:()=>J,rigidBodyMakeKinematic:()=>Q,rigidBodyRestoreDynamic:()=>V});const o="undefined"!=typeof TextDecoder?new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0}):{decode:()=>{throw Error("TextDecoder not available")}};"undefined"!=typeof TextDecoder&&o.decode();let d=null;function s(e,i){return e>>>=0,o.decode((null!==d&&0!==d.byteLength||(d=new Uint8Array(r.memory.buffer)),d).subarray(e,e+i))}const a=new Array(128).fill(void 0);a.push(void 0,null,!0,!1);let c=a.length;function l(e){return a[e]}function u(e){return r.createMultiPhysicsWorld(e)>>>0}function h(e){r.destroyMultiPhysicsWorld(e)}function f(e,i,t,n){r.multiPhysicsWorldSetGravity(e,i,t,n)}function y(e,i,t,n){r.multiPhysicsWorldStepSimulation(e,i,t,n)}function m(e,i,t){r.multiPhysicsWorldAddRigidBody(e,i,t)}function R(e,i,t){r.multiPhysicsWorldRemoveRigidBody(e,i,t)}function B(e,i,t){r.multiPhysicsWorldAddRigidBodyBundle(e,i,t)}function g(e,i,t){r.multiPhysicsWorldRemoveRigidBodyBundle(e,i,t)}function w(e,i){r.multiPhysicsWorldAddRigidBodyToGlobal(e,i)}function _(e,i){r.multiPhysicsWorldRemoveRigidBodyFromGlobal(e,i)}function p(e,i){r.multiPhysicsWorldAddRigidBodyBundleToGlobal(e,i)}function b(e,i){r.multiPhysicsWorldRemoveRigidBodyBundleFromGlobal(e,i)}function S(e,i,t){r.multiPhysicsWorldAddRigidBodyShadow(e,i,t)}function W(e,i,t){r.multiPhysicsWorldRemoveRigidBodyShadow(e,i,t)}function v(e,i,t){r.multiPhysicsWorldAddRigidBodyBundleShadow(e,i,t)}function P(e,i,t){r.multiPhysicsWorldRemoveRigidBodyBundleShadow(e,i,t)}function C(e,i,t,n){r.multiPhysicsWorldAddConstraint(e,i,t,n)}function G(e,i,t){r.multiPhysicsWorldRemoveConstraint(e,i,t)}function k(e,i){r.multiPhysicsWorldUseMotionStateBuffer(e,i)}function A(){return r.createPhysicsWorld()>>>0}function M(e){r.destroyPhysicsWorld(e)}function I(e,i,t,n){r.physicsWorldSetGravity(e,i,t,n)}function E(e,i,t,n){r.physicsWorldStepSimulation(e,i,t,n)}function L(e,i){r.physicsWorldAddRigidBody(e,i)}function D(e,i){r.physicsWorldRemoveRigidBody(e,i)}function F(e,i){r.physicsWorldAddRigidBodyBundle(e,i)}function T(e,i){r.physicsWorldRemoveRigidBodyBundle(e,i)}function U(e,i,t){r.physicsWorldAddConstraint(e,i,t)}function x(e,i){r.physicsWorldRemoveConstraint(e,i)}function O(e,i){r.physicsWorldUseMotionStateBuffer(e,i)}function j(e,i,t){return r.createBoxShape(e,i,t)>>>0}function z(e){return r.createSphereShape(e)>>>0}function K(e,i){return r.createCapsuleShape(e,i)>>>0}function q(e,i,t,n){return r.createStaticPlaneShape(e,i,t,n)>>>0}function Y(e){r.destroyShape(e)}function Z(e){return r.createRigidBody(e)>>>0}function H(e){r.destroyRigidBody(e)}function J(e){return r.rigidBodyGetMotionStatePtr(e)>>>0}function N(e){return r.rigidBodyGetBufferedMotionStatePtr(e)>>>0}function Q(e){r.rigidBodyMakeKinematic(e)}function V(e){r.rigidBodyRestoreDynamic(e)}function X(e,i){return r.createRigidBodyBundle(e,i)>>>0}function $(e){r.destroyRigidBodyBundle(e)}function ee(e){return r.rigidBodyBundleGetMotionStatesPtr(e)>>>0}function ie(e){return r.rigidBodyBundleGetBufferedMotionStatesPtr(e)>>>0}function te(e,i){r.rigidBodyBundleMakeKinematic(e,i)}function ne(e,i){r.rigidBodyBundleRestoreDynamic(e,i)}function re(e,i,t,n,o){return r.createGeneric6DofConstraint(e,i,t,n,o)>>>0}function oe(e,i,t,n,o,d){return r.createGeneric6DofConstraintFromBundle(e,i,t,n,o,d)>>>0}function de(e,i,t,n,o){return r.createGeneric6DofSpringConstraint(e,i,t,n,o)>>>0}function se(e,i,t,n,o,d){return r.createGeneric6DofSpringConstraintFromBundle(e,i,t,n,o,d)>>>0}function ae(e){r.destroyConstraint(e)}function ce(e,i,t,n){r.constraintSetLinearLowerLimit(e,i,t,n)}function le(e,i,t,n){r.constraintSetLinearUpperLimit(e,i,t,n)}function ue(e,i,t,n){r.constraintSetAngularLowerLimit(e,i,t,n)}function he(e,i,t,n){r.constraintSetAngularUpperLimit(e,i,t,n)}function fe(e,i,t){r.constraintEnableSpring(e,i,t)}function ye(e,i,t){r.constraintSetStiffness(e,i,t)}function me(e,i,t){r.constraintSetDamping(e,i,t)}function Re(e){return r.createMultiPhysicsRuntime(e)>>>0}function Be(e){r.destroyMultiPhysicsRuntime(e)}function ge(e){return r.multiPhysicsRuntimeGetLockStatePtr(e)>>>0}function we(e){return r.createMultiPhysicsRuntime(e)>>>0}function _e(e){r.destroyMultiPhysicsRuntime(e)}function pe(e){return r.multiPhysicsRuntimeGetLockStatePtr(e)>>>0}function be(){r.init()}function Se(e){return r.allocateBuffer(e)>>>0}function We(e,i){r.deallocateBuffer(e,i)}function ve(){const e={wbg:{}};return e.wbg.__wbindgen_string_new=function(e,i){return function(e){c===a.length&&a.push(a.length+1);const i=c;return c=a[i],a[i]=e,i}(s(e,i))},e.wbg.__wbindgen_object_drop_ref=function(e){!function(e){const i=l(e);(function(e){e<132||(a[e]=c,c=e)})(e)}(e)},e.wbg.__wbg_log_b103404cc5920657=function(e){console.log(l(e))},e.wbg.__wbindgen_throw=function(e,i){throw new Error(s(e,i))},e}function Pe(e,i){return r=e.exports,Ge.__wbindgen_wasm_module=i,d=null,r}function Ce(e){if(void 0!==r)return r;void 0!==e&&Object.getPrototypeOf(e)===Object.prototype?({module:e}=e):console.warn("using deprecated parameters for `initSync()`; pass a single object instead");const i=ve();return e instanceof WebAssembly.Module||(e=new WebAssembly.Module(e)),Pe(new WebAssembly.Instance(e,i),e)}async function Ge(e){if(void 0!==r)return r;void 0!==e&&Object.getPrototypeOf(e)===Object.prototype?({module_or_path:e}=e):console.warn("using deprecated parameters for the initialization function; pass a single object instead"),void 0===e&&(e=new URL(t(48865),t.b));const i=ve();("string"==typeof e||"function"==typeof Request&&e instanceof Request||"function"==typeof URL&&e instanceof URL)&&(e=fetch(e));const{instance:n,module:o}=await async function(e,i){if("function"==typeof Response&&e instanceof Response){if("function"==typeof WebAssembly.instantiateStreaming)try{return await WebAssembly.instantiateStreaming(e,i)}catch(i){if("application/wasm"==e.headers.get("Content-Type"))throw i;console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",i)}const t=await e.arrayBuffer();return await WebAssembly.instantiate(t,i)}{const t=await WebAssembly.instantiate(e,i);return t instanceof WebAssembly.Instance?{instance:t,module:e}:t}}(await e,i);return Pe(n,o)}const ke=Ge;class Ae{getWasmInstanceInner(){return n}}},15733:(e,i,t)=>{t.d(i,{F:()=>d});class n{_runtime;_ptr;_rigidBodyReferences;_rigidBodyBundleReferences;_rigidBodyGlobalReferences;_rigidBodyBundleGlobalReferences;_rigidBodyShadowReferences;_rigidBodyBundleShadowReferences;_constraintReferences;_referenceCount;constructor(e,i){this._runtime=e,this._ptr=i,this._rigidBodyReferences=new Map,this._rigidBodyBundleReferences=new Map,this._rigidBodyGlobalReferences=new Set,this._rigidBodyBundleGlobalReferences=new Set,this._rigidBodyShadowReferences=new Map,this._rigidBodyBundleShadowReferences=new Map,this._constraintReferences=new Set,this._referenceCount=0}dispose(){if(this._referenceCount>0)throw new Error("Cannot dispose physics world while it still has references");if(0===this._ptr)return;const e=this._runtime.deref();void 0!==e&&(e.lock.wait(),e.wasmInstance.destroyMultiPhysicsWorld(this._ptr)),this._ptr=0;for(const[e,i]of this._rigidBodyReferences)e.setWorldReference(null);this._rigidBodyReferences.clear();for(const[e,i]of this._rigidBodyBundleReferences)e.setWorldReference(null);this._rigidBodyBundleReferences.clear();for(const e of this._rigidBodyGlobalReferences)e.removeReference();this._rigidBodyGlobalReferences.clear();for(const e of this._rigidBodyBundleGlobalReferences)e.removeReference();this._rigidBodyBundleGlobalReferences.clear();for(const e of this._rigidBodyShadowReferences.values())for(const i of e)i.removeReference();this._rigidBodyShadowReferences.clear();for(const e of this._rigidBodyBundleShadowReferences.values())for(const i of e)i.removeReference();this._rigidBodyBundleShadowReferences.clear();for(const e of this._constraintReferences)e.setWorldReference(null);this._constraintReferences.clear()}get ptr(){return this._ptr}addReference(){this._referenceCount+=1}removeReference(){this._referenceCount-=1}addRigidBodyReference(e,i){if(this._rigidBodyGlobalReferences.has(e))throw new Error("Rigid body is already added to the world as a global reference");const t=this._rigidBodyShadowReferences.get(i);if(void 0!==t&&t.has(e))throw new Error("Rigid body is already added to the world as a shadow reference");return!this._rigidBodyReferences.has(e)&&(e.setWorldReference(this),this._rigidBodyReferences.set(e,i),!0)}removeRigidBodyReference(e){return!!this._rigidBodyReferences.delete(e)&&(e.setWorldReference(null),!0)}addRigidBodyBundleReference(e,i){if(this._rigidBodyBundleGlobalReferences.has(e))throw new Error("Rigid body bundle is already added to the world as a global reference");const t=this._rigidBodyBundleShadowReferences.get(i);if(void 0!==t&&t.has(e))throw new Error("Rigid body bundle is already added to the world as a shadow reference");return!this._rigidBodyBundleReferences.has(e)&&(e.setWorldReference(this),this._rigidBodyBundleReferences.set(e,i),!0)}removeRigidBodyBundleReference(e){return!!this._rigidBodyBundleReferences.delete(e)&&(e.setWorldReference(null),!0)}addRigidBodyGlobalReference(e){if(null!==e.getWorldReference())throw new Error("Rigid body is already added to the world as a strong reference");return!this._rigidBodyGlobalReferences.has(e)&&(e.addReference(),this._rigidBodyGlobalReferences.add(e),!0)}removeRigidBodyGlobalReference(e){return!!this._rigidBodyGlobalReferences.delete(e)&&(e.removeReference(),!0)}addRigidBodyBundleGlobalReference(e){if(null!==e.getWorldReference())throw new Error("Rigid body bundle is already added to the world as a strong reference");return!this._rigidBodyBundleGlobalReferences.has(e)&&(e.addReference(),this._rigidBodyBundleGlobalReferences.add(e),!0)}removeRigidBodyBundleGlobalReference(e){return!!this._rigidBodyBundleGlobalReferences.delete(e)&&(e.removeReference(),!0)}addRigidBodyShadowReference(e,i){const t=this._rigidBodyReferences.get(e);if(void 0!==t&&t===i)return!1;if(this._rigidBodyGlobalReferences.has(e))throw new Error("Rigid body is already added to the world as a global reference");let n=this._rigidBodyShadowReferences.get(i);return void 0===n&&(n=new Set,this._rigidBodyShadowReferences.set(i,n)),!n.has(e)&&(e.addReference(),n.add(e),!0)}removeRigidBodyShadowReference(e,i){const t=this._rigidBodyShadowReferences.get(i);return!(void 0===t||!t.delete(e)||(0===t.size&&this._rigidBodyShadowReferences.delete(i),e.removeReference(),0))}addRigidBodyBundleShadowReference(e,i){const t=this._rigidBodyBundleReferences.get(e);if(void 0!==t&&t===i)return!1;if(this._rigidBodyBundleGlobalReferences.has(e))throw new Error("Rigid body bundle is already added to the world as a global reference");let n=this._rigidBodyBundleShadowReferences.get(i);return void 0===n&&(n=new Set,this._rigidBodyBundleShadowReferences.set(i,n)),!n.has(e)&&(e.addReference(),n.add(e),!0)}removeRigidBodyBundleShadowReference(e,i){const t=this._rigidBodyBundleShadowReferences.get(i);return!(void 0===t||!t.delete(e)||(0===t.size&&this._rigidBodyBundleShadowReferences.delete(i),e.removeReference(),0))}addConstraintReference(e){return!this._constraintReferences.has(e)&&(e.setWorldReference(this),this._constraintReferences.add(e),!0)}removeConstraintReference(e){return!!this._constraintReferences.delete(e)&&(e.setWorldReference(null),!0)}}function r(e){e.dispose()}const o=new WeakMap;class d{_runtime;_inner;constructor(e,i){this._runtime=e;const t=e.wasmInstance.createMultiPhysicsWorld(i);this._inner=new n(new WeakRef(e),t);let d=o.get(e.wasmInstance);void 0===d&&(d=new FinalizationRegistry(r),o.set(e.wasmInstance,d)),d.register(this,this._inner,this)}dispose(){if(0===this._inner.ptr)return;this._inner.dispose();const e=o.get(this._runtime.wasmInstance);e?.unregister(this)}get ptr(){return this._inner.ptr}addReference(){this._inner.addReference()}removeReference(){this._inner.removeReference()}_nullCheck(){if(0===this._inner.ptr)throw new Error("Cannot access disposed physics world")}setGravity(e){this._nullCheck(),this._runtime.lock.wait(),this._runtime.wasmInstance.multiPhysicsWorldSetGravity(this._inner.ptr,e.x,e.y,e.z)}stepSimulation(e,i,t){this._nullCheck(),this._runtime.lock.wait(),this._runtime.wasmInstance.multiPhysicsWorldStepSimulation(this._inner.ptr,e,i,t)}addRigidBody(e,i){if(e.runtime!==this._runtime)throw new Error("Cannot add rigid body from a different runtime");return this._nullCheck(),!!this._inner.addRigidBodyReference(e,i)&&(this._runtime.lock.wait(),this._runtime.wasmInstance.multiPhysicsWorldAddRigidBody(this._inner.ptr,i,e.ptr),!0)}removeRigidBody(e,i){if(e.hasShadows)throw new Error("Cannot remove rigid body that has shadows");return this._nullCheck(),!!this._inner.removeRigidBodyReference(e)&&(this._runtime.lock.wait(),this._runtime.wasmInstance.multiPhysicsWorldRemoveRigidBody(this._inner.ptr,i,e.ptr),!0)}addRigidBodyBundle(e,i){if(e.runtime!==this._runtime)throw new Error("Cannot add rigid body bundle from a different runtime");return this._nullCheck(),!!this._inner.addRigidBodyBundleReference(e,i)&&(this._runtime.lock.wait(),this._runtime.wasmInstance.multiPhysicsWorldAddRigidBodyBundle(this._inner.ptr,i,e.ptr),!0)}removeRigidBodyBundle(e,i){if(e.hasShadows)throw new Error("Cannot remove rigid body bundle that has shadows");return this._nullCheck(),!!this._inner.removeRigidBodyBundleReference(e)&&(this._runtime.lock.wait(),this._runtime.wasmInstance.multiPhysicsWorldRemoveRigidBodyBundle(this._inner.ptr,i,e.ptr),!0)}addRigidBodyToGlobal(e){if(e.runtime!==this._runtime)throw new Error("Cannot add rigid body from a different runtime");if(e.isDynamic)throw new Error("Cannot add dynamic rigid body to global");return this._nullCheck(),!!this._inner.addRigidBodyGlobalReference(e)&&(this._runtime.lock.wait(),this._runtime.wasmInstance.multiPhysicsWorldAddRigidBodyToGlobal(this._inner.ptr,e.ptr),!0)}removeRigidBodyFromGlobal(e){return this._nullCheck(),!!this._inner.removeRigidBodyGlobalReference(e)&&(this._runtime.lock.wait(),this._runtime.wasmInstance.multiPhysicsWorldRemoveRigidBodyFromGlobal(this._inner.ptr,e.ptr),!0)}addRigidBodyBundleToGlobal(e){if(e.runtime!==this._runtime)throw new Error("Cannot add rigid body bundle from a different runtime");if(e.isContainsDynamic)throw new Error("Cannot add dynamic rigid body bundle to global");return this._nullCheck(),!!this._inner.addRigidBodyBundleGlobalReference(e)&&(this._runtime.lock.wait(),this._runtime.wasmInstance.multiPhysicsWorldAddRigidBodyBundleToGlobal(this._inner.ptr,e.ptr),!0)}removeRigidBodyBundleFromGlobal(e){return this._nullCheck(),!!this._inner.removeRigidBodyBundleGlobalReference(e)&&(this._runtime.lock.wait(),this._runtime.wasmInstance.multiPhysicsWorldRemoveRigidBodyBundleFromGlobal(this._inner.ptr,e.ptr),!0)}addRigidBodyShadow(e,i){if(e.runtime!==this._runtime)throw new Error("Cannot add rigid body from a different runtime");if(e.isDynamic&&null===e.getWorldReference())throw new Error("You must add dynamic rigid body first to the world before adding it as a shadow");return this._nullCheck(),!!this._inner.addRigidBodyShadowReference(e,i)&&(this._runtime.lock.wait(),this._runtime.wasmInstance.multiPhysicsWorldAddRigidBodyShadow(this._inner.ptr,i,e.ptr),e.addShadowReference(),!0)}removeRigidBodyShadow(e,i){return this._nullCheck(),!!this._inner.removeRigidBodyShadowReference(e,i)&&(this._runtime.lock.wait(),this._runtime.wasmInstance.multiPhysicsWorldRemoveRigidBodyShadow(this._inner.ptr,i,e.ptr),e.removeShadowReference(),!0)}addRigidBodyBundleShadow(e,i){if(e.runtime!==this._runtime)throw new Error("Cannot add rigid body bundle from a different runtime");if(e.isContainsDynamic&&null===e.getWorldReference())throw new Error("You must add dynamic rigid body bundle first to the world before adding it as a shadow");return this._nullCheck(),!!this._inner.addRigidBodyBundleShadowReference(e,i)&&(this._runtime.lock.wait(),this._runtime.wasmInstance.multiPhysicsWorldAddRigidBodyBundleShadow(this._inner.ptr,i,e.ptr),e.addShadowReference(),!0)}removeRigidBodyBundleShadow(e,i){return this._nullCheck(),!!this._inner.removeRigidBodyBundleShadowReference(e,i)&&(this._runtime.lock.wait(),this._runtime.wasmInstance.multiPhysicsWorldRemoveRigidBodyBundleShadow(this._inner.ptr,i,e.ptr),e.removeShadowReference(),!0)}addConstraint(e,i,t){if(e.runtime!==this._runtime)throw new Error("Cannot add constraint from a different runtime");return this._nullCheck(),!!this._inner.addConstraintReference(e)&&(this._runtime.lock.wait(),this._runtime.wasmInstance.multiPhysicsWorldAddConstraint(this._inner.ptr,i,e.ptr,t),!0)}removeConstraint(e,i){return this._nullCheck(),!!this._inner.removeConstraintReference(e)&&(this._runtime.lock.wait(),this._runtime.wasmInstance.multiPhysicsWorldRemoveConstraint(this._inner.ptr,i,e.ptr),!0)}}},48865:(e,i,t)=>{e.exports=t.p+"206d7e9a2ed796e2e906.wasm"}}]);