"use strict";(self.webpackChunkbabylon_bulletphysics=self.webpackChunkbabylon_bulletphysics||[]).push([[7002],{47002:(e,i,n)=>{n.d(i,{t:()=>en});var t={};let o,r;n.r(t),n.d(t,{allocateBuffer:()=>S,constraintEnableSpring:()=>Mi,constraintSetAngularLowerLimit:()=>Vi,constraintSetAngularUpperLimit:()=>Ci,constraintSetDamping:()=>Fi,constraintSetLinearLowerLimit:()=>Li,constraintSetLinearUpperLimit:()=>Ii,constraintSetStiffness:()=>Di,createBoxShape:()=>ne,createCapsuleShape:()=>oe,createGeneric6DofConstraint:()=>Ri,createGeneric6DofConstraintFromBundle:()=>Wi,createGeneric6DofSpringConstraint:()=>Gi,createGeneric6DofSpringConstraintFromBundle:()=>Ti,createMultiPhysicsRuntime:()=>bi,createMultiPhysicsWorld:()=>A,createPhysicsRuntime:()=>m,createPhysicsWorld:()=>K,createRigidBody:()=>Ue,createRigidBodyBundle:()=>ue,createSphereShape:()=>te,createStaticPlaneShape:()=>re,deallocateBuffer:()=>P,default:()=>Zi,destroyConstraint:()=>vi,destroyMultiPhysicsRuntime:()=>Si,destroyMultiPhysicsWorld:()=>R,destroyPhysicsRuntime:()=>h,destroyPhysicsWorld:()=>$,destroyRigidBody:()=>je,destroyRigidBodyBundle:()=>le,destroyShape:()=>de,init:()=>b,initSync:()=>Xi,initThreadPool:()=>zi,multiPhysicsRuntimeBufferedStepSimulation:()=>Ai,multiPhysicsRuntimeGetLockStatePtr:()=>Pi,multiPhysicsWorldAddConstraint:()=>x,multiPhysicsWorldAddRigidBody:()=>T,multiPhysicsWorldAddRigidBodyBundle:()=>L,multiPhysicsWorldAddRigidBodyBundleShadow:()=>E,multiPhysicsWorldAddRigidBodyBundleToGlobal:()=>M,multiPhysicsWorldAddRigidBodyShadow:()=>F,multiPhysicsWorldAddRigidBodyToGlobal:()=>V,multiPhysicsWorldMakeBodyKinematic:()=>j,multiPhysicsWorldRemoveConstraint:()=>U,multiPhysicsWorldRemoveRigidBody:()=>v,multiPhysicsWorldRemoveRigidBodyBundle:()=>I,multiPhysicsWorldRemoveRigidBodyBundleFromGlobal:()=>D,multiPhysicsWorldRemoveRigidBodyBundleShadow:()=>q,multiPhysicsWorldRemoveRigidBodyFromGlobal:()=>C,multiPhysicsWorldRemoveRigidBodyShadow:()=>k,multiPhysicsWorldRestoreBodyDynamic:()=>O,multiPhysicsWorldSetGravity:()=>W,multiPhysicsWorldStepSimulation:()=>G,multiPhysicsWorldUseMotionStateBuffer:()=>z,physicsRuntimeBufferedStepSimulation:()=>w,physicsRuntimeGetLockStatePtr:()=>_,physicsWorldAddConstraint:()=>Z,physicsWorldAddRigidBody:()=>N,physicsWorldAddRigidBodyBundle:()=>X,physicsWorldRemoveConstraint:()=>ee,physicsWorldRemoveRigidBody:()=>Q,physicsWorldRemoveRigidBodyBundle:()=>Y,physicsWorldSetGravity:()=>J,physicsWorldStepSimulation:()=>H,physicsWorldUseMotionStateBuffer:()=>ie,rigidBodyApplyCentralForce:()=>Ze,rigidBodyApplyCentralImpulse:()=>ni,rigidBodyApplyCentralPushImpulse:()=>si,rigidBodyApplyForce:()=>ii,rigidBodyApplyImpulse:()=>oi,rigidBodyApplyPushImpulse:()=>ri,rigidBodyApplyTorque:()=>ei,rigidBodyApplyTorqueImpulse:()=>ti,rigidBodyApplyTorqueTurnImpulse:()=>ai,rigidBodyBundleApplyCentralForce:()=>_e,rigidBodyBundleApplyCentralImpulse:()=>Se,rigidBodyBundleApplyCentralPushImpulse:()=>Le,rigidBodyBundleApplyForce:()=>be,rigidBodyBundleApplyImpulse:()=>Ae,rigidBodyBundleApplyPushImpulse:()=>Re,rigidBodyBundleApplyTorque:()=>we,rigidBodyBundleApplyTorqueImpulse:()=>Pe,rigidBodyBundleApplyTorqueTurnImpulse:()=>Ie,rigidBodyBundleClearForces:()=>Ve,rigidBodyBundleGetAngularDamping:()=>fe,rigidBodyBundleGetAngularVelocity:()=>Me,rigidBodyBundleGetBufferedMotionStatesPtr:()=>se,rigidBodyBundleGetLinearDamping:()=>ye,rigidBodyBundleGetLinearVelocity:()=>Ce,rigidBodyBundleGetLocalInertia:()=>pe,rigidBodyBundleGetMass:()=>Be,rigidBodyBundleGetMotionStatesPtr:()=>ce,rigidBodyBundleGetPushVelocity:()=>We,rigidBodyBundleGetPushVelocityInLocalPoint:()=>Ee,rigidBodyBundleGetTotalForce:()=>me,rigidBodyBundleGetTotalTorque:()=>he,rigidBodyBundleGetTurnVelocity:()=>Ge,rigidBodyBundleGetVelocityInLocalPoint:()=>ke,rigidBodyBundleSetAngularVelocity:()=>Fe,rigidBodyBundleSetDamping:()=>ae,rigidBodyBundleSetLinearVelocity:()=>De,rigidBodyBundleSetMassProps:()=>ge,rigidBodyBundleSetPushVelocity:()=>Te,rigidBodyBundleSetTurnVelocity:()=>ve,rigidBodyBundleSetWorldTransform:()=>xe,rigidBodyBundleTranslate:()=>qe,rigidBodyClearForces:()=>yi,rigidBodyGetAngularDamping:()=>Je,rigidBodyGetAngularVelocity:()=>gi,rigidBodyGetBufferedMotionStatePtr:()=>ze,rigidBodyGetLinearDamping:()=>$e,rigidBodyGetLinearVelocity:()=>fi,rigidBodyGetLocalInertia:()=>Qe,rigidBodyGetMass:()=>Ne,rigidBodyGetMotionStatePtr:()=>Oe,rigidBodyGetPushVelocity:()=>di,rigidBodyGetPushVelocityInLocalPoint:()=>hi,rigidBodyGetTotalForce:()=>Xe,rigidBodyGetTotalTorque:()=>Ye,rigidBodyGetTurnVelocity:()=>ui,rigidBodyGetVelocityInLocalPoint:()=>mi,rigidBodySetAngularVelocity:()=>pi,rigidBodySetDamping:()=>Ke,rigidBodySetLinearVelocity:()=>Bi,rigidBodySetMassProps:()=>He,rigidBodySetPushVelocity:()=>li,rigidBodySetTurnVelocity:()=>ci,rigidBodySetWorldTransform:()=>wi,rigidBodyTranslate:()=>_i,wbg_rayon_PoolBuilder:()=>Ji,wbg_rayon_start_worker:()=>Ki});const d="undefined"!=typeof TextDecoder?new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0}):{decode:()=>{throw Error("TextDecoder not available")}};"undefined"!=typeof TextDecoder&&d.decode();let u=null;function l(){return null!==u&&u.buffer===r.memory.buffer||(u=new Uint8Array(r.memory.buffer)),u}function c(e,i){return e>>>=0,d.decode(l().slice(e,e+i))}const s=new Array(128).fill(void 0);s.push(void 0,null,!0,!1);let a=s.length;function y(e){a===s.length&&s.push(s.length+1);const i=a;if(a=s[i],"number"!=typeof a)throw new Error("corrupt heap");return s[i]=e,i}function f(e){return s[e]}function g(e){const i=f(e);return function(e){e<132||(s[e]=a,a=e)}(e),i}function B(e){if("boolean"!=typeof e)throw new Error("expected a boolean argument, found "+typeof e)}function p(e){if("number"!=typeof e)throw new Error("expected a number argument, found "+typeof e)}function m(e){return p(e),r.createPhysicsRuntime(e)>>>0}function h(e){p(e),r.destroyPhysicsRuntime(e)}function _(e){return p(e),r.physicsRuntimeGetLockStatePtr(e)>>>0}function w(e,i,n,t){p(e),p(n),r.physicsRuntimeBufferedStepSimulation(e,i,n,t)}function b(){r.init()}function S(e){return p(e),r.allocateBuffer(e)>>>0}function P(e,i){p(e),p(i),r.deallocateBuffer(e,i)}function A(e){return B(e),r.createMultiPhysicsWorld(e)>>>0}function R(e){p(e),r.destroyMultiPhysicsWorld(e)}function W(e,i,n,t){p(e),r.multiPhysicsWorldSetGravity(e,i,n,t)}function G(e,i,n,t){p(e),p(n),r.multiPhysicsWorldStepSimulation(e,i,n,t)}function T(e,i,n){p(e),p(i),p(n),r.multiPhysicsWorldAddRigidBody(e,i,n)}function v(e,i,n){p(e),p(i),p(n),r.multiPhysicsWorldRemoveRigidBody(e,i,n)}function L(e,i,n){p(e),p(i),p(n),r.multiPhysicsWorldAddRigidBodyBundle(e,i,n)}function I(e,i,n){p(e),p(i),p(n),r.multiPhysicsWorldRemoveRigidBodyBundle(e,i,n)}function V(e,i){p(e),p(i),r.multiPhysicsWorldAddRigidBodyToGlobal(e,i)}function C(e,i){p(e),p(i),r.multiPhysicsWorldRemoveRigidBodyFromGlobal(e,i)}function M(e,i){p(e),p(i),r.multiPhysicsWorldAddRigidBodyBundleToGlobal(e,i)}function D(e,i){p(e),p(i),r.multiPhysicsWorldRemoveRigidBodyBundleFromGlobal(e,i)}function F(e,i,n){p(e),p(i),p(n),r.multiPhysicsWorldAddRigidBodyShadow(e,i,n)}function k(e,i,n){p(e),p(i),p(n),r.multiPhysicsWorldRemoveRigidBodyShadow(e,i,n)}function E(e,i,n){p(e),p(i),p(n),r.multiPhysicsWorldAddRigidBodyBundleShadow(e,i,n)}function q(e,i,n){p(e),p(i),p(n),r.multiPhysicsWorldRemoveRigidBodyBundleShadow(e,i,n)}function x(e,i,n,t){p(e),p(i),p(n),B(t),r.multiPhysicsWorldAddConstraint(e,i,n,t)}function U(e,i,n){p(e),p(i),p(n),r.multiPhysicsWorldRemoveConstraint(e,i,n)}function j(e,i){p(e),p(i),r.multiPhysicsWorldMakeBodyKinematic(e,i)}function O(e,i){p(e),p(i),r.multiPhysicsWorldRestoreBodyDynamic(e,i)}function z(e,i){p(e),B(i),r.multiPhysicsWorldUseMotionStateBuffer(e,i)}function K(){return r.createPhysicsWorld()>>>0}function $(e){p(e),r.destroyPhysicsWorld(e)}function J(e,i,n,t){p(e),r.physicsWorldSetGravity(e,i,n,t)}function H(e,i,n,t){p(e),p(n),r.physicsWorldStepSimulation(e,i,n,t)}function N(e,i){p(e),p(i),r.physicsWorldAddRigidBody(e,i)}function Q(e,i){p(e),p(i),r.physicsWorldRemoveRigidBody(e,i)}function X(e,i){p(e),p(i),r.physicsWorldAddRigidBodyBundle(e,i)}function Y(e,i){p(e),p(i),r.physicsWorldRemoveRigidBodyBundle(e,i)}function Z(e,i,n){p(e),p(i),B(n),r.physicsWorldAddConstraint(e,i,n)}function ee(e,i){p(e),p(i),r.physicsWorldRemoveConstraint(e,i)}function ie(e,i){p(e),B(i),r.physicsWorldUseMotionStateBuffer(e,i)}function ne(e,i,n){return r.createBoxShape(e,i,n)>>>0}function te(e){return r.createSphereShape(e)>>>0}function oe(e,i){return r.createCapsuleShape(e,i)>>>0}function re(e,i,n,t){return r.createStaticPlaneShape(e,i,n,t)>>>0}function de(e){p(e),r.destroyShape(e)}function ue(e,i){return p(e),p(i),r.createRigidBodyBundle(e,i)>>>0}function le(e){p(e),r.destroyRigidBodyBundle(e)}function ce(e){return p(e),r.rigidBodyBundleGetMotionStatesPtr(e)>>>0}function se(e){return p(e),r.rigidBodyBundleGetBufferedMotionStatesPtr(e)>>>0}function ae(e,i,n,t){p(e),p(i),r.rigidBodyBundleSetDamping(e,i,n,t)}function ye(e,i){return p(e),p(i),r.rigidBodyBundleGetLinearDamping(e,i)}function fe(e,i){return p(e),p(i),r.rigidBodyBundleGetAngularDamping(e,i)}function ge(e,i,n,t,o,d){p(e),p(i),r.rigidBodyBundleSetMassProps(e,i,n,t,o,d)}function Be(e,i){return p(e),p(i),r.rigidBodyBundleGetMass(e,i)}function pe(e,i,n){p(e),p(i),p(n),r.rigidBodyBundleGetLocalInertia(e,i,n)}function me(e,i,n){p(e),p(i),p(n),r.rigidBodyBundleGetTotalForce(e,i,n)}function he(e,i,n){p(e),p(i),p(n),r.rigidBodyBundleGetTotalTorque(e,i,n)}function _e(e,i,n,t,o){p(e),p(i),r.rigidBodyBundleApplyCentralForce(e,i,n,t,o)}function we(e,i,n,t,o){p(e),p(i),r.rigidBodyBundleApplyTorque(e,i,n,t,o)}function be(e,i,n,t){p(e),p(i),p(n),p(t),r.rigidBodyBundleApplyForce(e,i,n,t)}function Se(e,i,n,t,o){p(e),p(i),r.rigidBodyBundleApplyCentralImpulse(e,i,n,t,o)}function Pe(e,i,n,t,o){p(e),p(i),r.rigidBodyBundleApplyTorqueImpulse(e,i,n,t,o)}function Ae(e,i,n,t){p(e),p(i),p(n),p(t),r.rigidBodyBundleApplyImpulse(e,i,n,t)}function Re(e,i,n,t){p(e),p(i),p(n),p(t),r.rigidBodyBundleApplyPushImpulse(e,i,n,t)}function We(e,i,n){p(e),p(i),p(n),r.rigidBodyBundleGetPushVelocity(e,i,n)}function Ge(e,i,n){p(e),p(i),p(n),r.rigidBodyBundleGetTurnVelocity(e,i,n)}function Te(e,i,n,t,o){p(e),p(i),r.rigidBodyBundleSetPushVelocity(e,i,n,t,o)}function ve(e,i,n,t,o){p(e),p(i),r.rigidBodyBundleSetTurnVelocity(e,i,n,t,o)}function Le(e,i,n,t,o){p(e),p(i),r.rigidBodyBundleApplyCentralPushImpulse(e,i,n,t,o)}function Ie(e,i,n,t,o){p(e),p(i),r.rigidBodyBundleApplyTorqueTurnImpulse(e,i,n,t,o)}function Ve(e,i){p(e),p(i),r.rigidBodyBundleClearForces(e,i)}function Ce(e,i,n){p(e),p(i),p(n),r.rigidBodyBundleGetLinearVelocity(e,i,n)}function Me(e,i,n){p(e),p(i),p(n),r.rigidBodyBundleGetAngularVelocity(e,i,n)}function De(e,i,n,t,o){p(e),p(i),r.rigidBodyBundleSetLinearVelocity(e,i,n,t,o)}function Fe(e,i,n,t,o){p(e),p(i),r.rigidBodyBundleSetAngularVelocity(e,i,n,t,o)}function ke(e,i,n,t){p(e),p(i),p(n),p(t),r.rigidBodyBundleGetVelocityInLocalPoint(e,i,n,t)}function Ee(e,i,n,t){p(e),p(i),p(n),p(t),r.rigidBodyBundleGetPushVelocityInLocalPoint(e,i,n,t)}function qe(e,i,n,t,o){p(e),p(i),r.rigidBodyBundleTranslate(e,i,n,t,o)}function xe(e,i,n){p(e),p(i),p(n),r.rigidBodyBundleSetWorldTransform(e,i,n)}function Ue(e){return p(e),r.createRigidBody(e)>>>0}function je(e){p(e),r.destroyRigidBody(e)}function Oe(e){return p(e),r.rigidBodyGetMotionStatePtr(e)>>>0}function ze(e){return p(e),r.rigidBodyGetBufferedMotionStatePtr(e)>>>0}function Ke(e,i,n){p(e),r.rigidBodySetDamping(e,i,n)}function $e(e){return p(e),r.rigidBodyGetLinearDamping(e)}function Je(e){return p(e),r.rigidBodyGetAngularDamping(e)}function He(e,i,n,t,o){p(e),r.rigidBodySetMassProps(e,i,n,t,o)}function Ne(e){return p(e),r.rigidBodyGetMass(e)}function Qe(e,i){p(e),p(i),r.rigidBodyGetLocalInertia(e,i)}function Xe(e,i){p(e),p(i),r.rigidBodyGetTotalForce(e,i)}function Ye(e,i){p(e),p(i),r.rigidBodyGetTotalTorque(e,i)}function Ze(e,i,n,t){p(e),r.rigidBodyApplyCentralForce(e,i,n,t)}function ei(e,i,n,t){p(e),r.rigidBodyApplyTorque(e,i,n,t)}function ii(e,i,n){p(e),p(i),p(n),r.rigidBodyApplyForce(e,i,n)}function ni(e,i,n,t){p(e),r.rigidBodyApplyCentralImpulse(e,i,n,t)}function ti(e,i,n,t){p(e),r.rigidBodyApplyTorqueImpulse(e,i,n,t)}function oi(e,i,n){p(e),p(i),p(n),r.rigidBodyApplyImpulse(e,i,n)}function ri(e,i,n){p(e),p(i),p(n),r.rigidBodyApplyPushImpulse(e,i,n)}function di(e,i){p(e),p(i),r.rigidBodyGetPushVelocity(e,i)}function ui(e,i){p(e),p(i),r.rigidBodyGetTurnVelocity(e,i)}function li(e,i,n,t){p(e),r.rigidBodySetPushVelocity(e,i,n,t)}function ci(e,i,n,t){p(e),r.rigidBodySetTurnVelocity(e,i,n,t)}function si(e,i,n,t){p(e),r.rigidBodyApplyCentralPushImpulse(e,i,n,t)}function ai(e,i,n,t){p(e),r.rigidBodyApplyTorqueTurnImpulse(e,i,n,t)}function yi(e){p(e),r.rigidBodyClearForces(e)}function fi(e,i){p(e),p(i),r.rigidBodyGetLinearVelocity(e,i)}function gi(e,i){p(e),p(i),r.rigidBodyGetAngularVelocity(e,i)}function Bi(e,i,n,t){p(e),r.rigidBodySetLinearVelocity(e,i,n,t)}function pi(e,i,n,t){p(e),r.rigidBodySetAngularVelocity(e,i,n,t)}function mi(e,i,n){p(e),p(i),p(n),r.rigidBodyGetVelocityInLocalPoint(e,i,n)}function hi(e,i,n){p(e),p(i),p(n),r.rigidBodyGetPushVelocityInLocalPoint(e,i,n)}function _i(e,i,n,t){p(e),r.rigidBodyTranslate(e,i,n,t)}function wi(e,i){p(e),p(i),r.rigidBodySetWorldTransform(e,i)}function bi(e){return p(e),r.createMultiPhysicsRuntime(e)>>>0}function Si(e){p(e),r.destroyMultiPhysicsRuntime(e)}function Pi(e){return p(e),r.multiPhysicsRuntimeGetLockStatePtr(e)>>>0}function Ai(e,i,n,t){p(e),p(n),r.multiPhysicsRuntimeBufferedStepSimulation(e,i,n,t)}function Ri(e,i,n,t,o){return p(e),p(i),p(n),p(t),B(o),r.createGeneric6DofConstraint(e,i,n,t,o)>>>0}function Wi(e,i,n,t,o,d){return p(e),p(i),p(n),p(t),p(o),B(d),r.createGeneric6DofConstraintFromBundle(e,i,n,t,o,d)>>>0}function Gi(e,i,n,t,o){return p(e),p(i),p(n),p(t),B(o),r.createGeneric6DofSpringConstraint(e,i,n,t,o)>>>0}function Ti(e,i,n,t,o,d){return p(e),p(i),p(n),p(t),p(o),B(d),r.createGeneric6DofSpringConstraintFromBundle(e,i,n,t,o,d)>>>0}function vi(e){p(e),r.destroyConstraint(e)}function Li(e,i,n,t){p(e),r.constraintSetLinearLowerLimit(e,i,n,t)}function Ii(e,i,n,t){p(e),r.constraintSetLinearUpperLimit(e,i,n,t)}function Vi(e,i,n,t){p(e),r.constraintSetAngularLowerLimit(e,i,n,t)}function Ci(e,i,n,t){p(e),r.constraintSetAngularUpperLimit(e,i,n,t)}function Mi(e,i,n){p(e),p(i),B(n),r.constraintEnableSpring(e,i,n)}function Di(e,i,n){p(e),p(i),r.constraintSetStiffness(e,i,n)}function Fi(e,i,n){p(e),p(i),r.constraintSetDamping(e,i,n)}function ki(e,i){try{return e.apply(this,i)}catch(e){let i=function(){try{return e instanceof Error?`${e.message}\n\nStack:\n${e.stack}`:e.toString()}catch(e){return"<failed to stringify thrown value>"}}();throw console.error("wasm-bindgen: imported JS function that was not marked as `catch` threw an error:",i),e}}let Ei=0;const qi="undefined"!=typeof TextEncoder?new TextEncoder("utf-8"):{encode:()=>{throw Error("TextEncoder not available")}},xi=function(e,i){const n=qi.encode(e);return i.set(n),{read:e.length,written:n.length}};let Ui=null;function ji(){return null!==Ui&&Ui.buffer===r.memory.buffer||(Ui=new DataView(r.memory.buffer)),Ui}function Oi(e,i){try{return e.apply(this,i)}catch(e){r.__wbindgen_exn_store(y(e))}}function zi(e){return p(e),g(r.initThreadPool(e))}function Ki(e){p(e),r.wbg_rayon_start_worker(e)}const $i="undefined"==typeof FinalizationRegistry?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry((e=>r.__wbg_wbg_rayon_poolbuilder_free(e>>>0,1)));class Ji{constructor(){throw new Error("cannot invoke `new` directly")}static __wrap(e){e>>>=0;const i=Object.create(Ji.prototype);return i.__wbg_ptr=e,$i.register(i,i.__wbg_ptr,i),i}__destroy_into_raw(){const e=this.__wbg_ptr;return this.__wbg_ptr=0,$i.unregister(this),e}free(){const e=this.__destroy_into_raw();r.__wbg_wbg_rayon_poolbuilder_free(e,0)}numThreads(){if(0==this.__wbg_ptr)throw new Error("Attempt to use a moved value");return p(this.__wbg_ptr),r.wbg_rayon_poolbuilder_numThreads(this.__wbg_ptr)>>>0}receiver(){if(0==this.__wbg_ptr)throw new Error("Attempt to use a moved value");return p(this.__wbg_ptr),r.wbg_rayon_poolbuilder_receiver(this.__wbg_ptr)>>>0}build(){if(0==this.__wbg_ptr)throw new Error("Attempt to use a moved value");p(this.__wbg_ptr),r.wbg_rayon_poolbuilder_build(this.__wbg_ptr)}}function Hi(){const e={wbg:{}};return e.wbg.__wbindgen_string_new=function(e,i){return y(c(e,i))},e.wbg.__wbindgen_object_drop_ref=function(e){g(e)},e.wbg.__wbg_new_abda76e883ba8a5f=function(){return ki((function(){return y(new Error)}),arguments)},e.wbg.__wbg_stack_658279fe44541cf6=function(){return ki((function(e,i){const n=function(e,i,n){if("string"!=typeof e)throw new Error("expected a string argument, found "+typeof e);if(void 0===n){const n=qi.encode(e),t=i(n.length,1)>>>0;return l().subarray(t,t+n.length).set(n),Ei=n.length,t}let t=e.length,o=i(t,1)>>>0;const r=l();let d=0;for(;d<t;d++){const i=e.charCodeAt(d);if(i>127)break;r[o+d]=i}if(d!==t){0!==d&&(e=e.slice(d)),o=n(o,t,t=d+3*e.length,1)>>>0;const i=l().subarray(o+d,o+t),r=xi(e,i);if(r.read!==e.length)throw new Error("failed to pass whole string");d+=r.written,o=n(o,t,d,1)>>>0}return Ei=d,o}(f(i).stack,r.__wbindgen_malloc,r.__wbindgen_realloc),t=Ei;ji().setInt32(e+4,t,!0),ji().setInt32(e+0,n,!0)}),arguments)},e.wbg.__wbg_error_f851667af71bcfc6=function(){return ki((function(e,i){let n,t;try{n=e,t=i,console.error(c(e,i))}finally{r.__wbindgen_free(n,t,1)}}),arguments)},e.wbg.__wbg_error_09480e4aadca50ad=function(){return ki((function(e){console.error(f(e))}),arguments)},e.wbg.__wbg_log_b103404cc5920657=function(){return ki((function(e){console.log(f(e))}),arguments)},e.wbg.__wbg_instanceof_Window_5012736c80a01584=function(){return ki((function(e){let i;try{i=f(e)instanceof Window}catch(e){i=!1}const n=i;return B(n),n}),arguments)},e.wbg.__wbg_newnoargs_76313bd6ff35d0f2=function(){return ki((function(e,i){return y(new Function(c(e,i)))}),arguments)},e.wbg.__wbg_call_1084a111329e68ce=function(){return Oi((function(e,i){return y(f(e).call(f(i)))}),arguments)},e.wbg.__wbindgen_object_clone_ref=function(e){return y(f(e))},e.wbg.__wbg_self_3093d5d1f7bcb682=function(){return Oi((function(){return y(self.self)}),arguments)},e.wbg.__wbg_window_3bcfc4d31bc012f8=function(){return Oi((function(){return y(window.window)}),arguments)},e.wbg.__wbg_globalThis_86b222e13bdf32ed=function(){return Oi((function(){return y(globalThis.globalThis)}),arguments)},e.wbg.__wbg_global_e5a3fe56f8be9485=function(){return Oi((function(){return y(global.global)}),arguments)},e.wbg.__wbindgen_is_undefined=function(e){const i=void 0===f(e);return B(i),i},e.wbg.__wbindgen_throw=function(e,i){throw new Error(c(e,i))},e.wbg.__wbindgen_module=function(){return y(Yi.__wbindgen_wasm_module)},e.wbg.__wbindgen_memory=function(){return y(r.memory)},e.wbg.__wbg_startWorkers_d587c7d659590d3c=function(){return ki((function(e,i,t){return y(async function(e,i,t){if(0===t.numThreads())throw new Error("num_threads must be > 0.");const r={module:e,memory:i,receiver:t.receiver()};o=await Promise.all(Array.from({length:t.numThreads()},(async()=>{const e=new Worker(new URL(n.p+n.u(7909),n.b),{type:void 0});return e.postMessage(r),await new Promise((i=>e.addEventListener("message",i,{once:!0}))),e}))),t.build()}(g(e),g(i),Ji.__wrap(t)))}),arguments)},e}function Ni(e,i){e.wbg.memory=i||new WebAssembly.Memory({initial:19,maximum:16384,shared:!0})}function Qi(e,i,n){if(r=e.exports,Yi.__wbindgen_wasm_module=i,Ui=null,u=null,void 0!==n&&("number"!=typeof n||0===n||n%65536!=0))throw"invalid stack size";return r.__wbindgen_start(n),r}function Xi(e,i){if(void 0!==r)return r;let n;void 0!==e&&Object.getPrototypeOf(e)===Object.prototype?({module:e,memory:i,thread_stack_size:n}=e):console.warn("using deprecated parameters for `initSync()`; pass a single object instead");const t=Hi();return Ni(t,i),e instanceof WebAssembly.Module||(e=new WebAssembly.Module(e)),Qi(new WebAssembly.Instance(e,t),e,n)}async function Yi(e,i){if(void 0!==r)return r;let t;void 0!==e&&Object.getPrototypeOf(e)===Object.prototype?({module_or_path:e,memory:i,thread_stack_size:t}=e):console.warn("using deprecated parameters for the initialization function; pass a single object instead"),void 0===e&&(e=new URL(n(79845),n.b));const o=Hi();("string"==typeof e||"function"==typeof Request&&e instanceof Request||"function"==typeof URL&&e instanceof URL)&&(e=fetch(e)),Ni(o,i);const{instance:d,module:u}=await async function(e,i){if("function"==typeof Response&&e instanceof Response){if("function"==typeof WebAssembly.instantiateStreaming)try{return await WebAssembly.instantiateStreaming(e,i)}catch(i){if("application/wasm"==e.headers.get("Content-Type"))throw i;console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",i)}const n=await e.arrayBuffer();return await WebAssembly.instantiate(n,i)}{const n=await WebAssembly.instantiate(e,i);return n instanceof WebAssembly.Instance?{instance:n,module:e}:n}}(await e,o);return Qi(d,u,t)}const Zi=Yi;class en{getWasmInstanceInner(){return t}}},79845:(e,i,n)=>{e.exports=n.p+"28c2759eceb5ff62f5a3.wasm"}}]);