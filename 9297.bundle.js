"use strict";(self.webpackChunkbabylon_bulletphysics=self.webpackChunkbabylon_bulletphysics||[]).push([[9297],{39297:(e,i,n)=>{n.r(i),n.d(i,{SceneBuilder:()=>sn});var t={};n.r(t),n.d(t,{allocateBuffer:()=>I,constraintEnableSpring:()=>le,constraintSetAngularLowerLimit:()=>de,constraintSetAngularUpperLimit:()=>ue,constraintSetDamping:()=>se,constraintSetLinearLowerLimit:()=>oe,constraintSetLinearUpperLimit:()=>re,constraintSetStiffness:()=>ce,createBoxShape:()=>He,createCapsuleShape:()=>Xe,createGeneric6DofConstraint:()=>X,createGeneric6DofConstraintFromBundle:()=>ee,createGeneric6DofSpringConstraint:()=>ie,createGeneric6DofSpringConstraintFromBundle:()=>ne,createMultiPhysicsRuntime:()=>Ye,createMultiPhysicsWorld:()=>_,createPhysicsRuntime:()=>Qe,createPhysicsWorld:()=>Di,createRigidBody:()=>ae,createRigidBodyBundle:()=>ni,createSphereShape:()=>Ne,createStaticPlaneShape:()=>ei,deallocateBuffer:()=>v,default:()=>on,destroyConstraint:()=>te,destroyMultiPhysicsRuntime:()=>$e,destroyMultiPhysicsWorld:()=>M,destroyPhysicsRuntime:()=>ze,destroyPhysicsWorld:()=>Fi,destroyRigidBody:()=>ye,destroyRigidBodyBundle:()=>ti,destroyShape:()=>ii,init:()=>T,initSync:()=>nn,multiPhysicsRuntimeGetLockStatePtr:()=>Je,multiPhysicsWorldAddConstraint:()=>Y,multiPhysicsWorldAddRigidBody:()=>D,multiPhysicsWorldAddRigidBodyBundle:()=>x,multiPhysicsWorldAddRigidBodyBundleShadow:()=>z,multiPhysicsWorldAddRigidBodyBundleToGlobal:()=>O,multiPhysicsWorldAddRigidBodyShadow:()=>Z,multiPhysicsWorldAddRigidBodyToGlobal:()=>U,multiPhysicsWorldMakeBodyKinematic:()=>J,multiPhysicsWorldRemoveConstraint:()=>$,multiPhysicsWorldRemoveRigidBody:()=>F,multiPhysicsWorldRemoveRigidBodyBundle:()=>k,multiPhysicsWorldRemoveRigidBodyBundleFromGlobal:()=>j,multiPhysicsWorldRemoveRigidBodyBundleShadow:()=>K,multiPhysicsWorldRemoveRigidBodyFromGlobal:()=>E,multiPhysicsWorldRemoveRigidBodyShadow:()=>Q,multiPhysicsWorldRestoreBodyDynamic:()=>H,multiPhysicsWorldSetGravity:()=>V,multiPhysicsWorldStepSimulation:()=>q,multiPhysicsWorldUseMotionStateBuffer:()=>N,physicsRuntimeGetLockStatePtr:()=>Ke,physicsWorldAddConstraint:()=>Zi,physicsWorldAddRigidBody:()=>Ui,physicsWorldAddRigidBodyBundle:()=>Oi,physicsWorldRemoveConstraint:()=>Qi,physicsWorldRemoveRigidBody:()=>Ei,physicsWorldRemoveRigidBodyBundle:()=>ji,physicsWorldSetGravity:()=>xi,physicsWorldStepSimulation:()=>ki,physicsWorldUseMotionStateBuffer:()=>zi,rigidBodyApplyCentralForce:()=>Ae,rigidBodyApplyCentralImpulse:()=>We,rigidBodyApplyCentralPushImpulse:()=>Ve,rigidBodyApplyForce:()=>Ge,rigidBodyApplyImpulse:()=>Le,rigidBodyApplyPushImpulse:()=>Ie,rigidBodyApplyTorque:()=>Re,rigidBodyApplyTorqueImpulse:()=>Te,rigidBodyApplyTorqueTurnImpulse:()=>qe,rigidBodyBundleApplyCentralForce:()=>Bi,rigidBodyBundleApplyCentralImpulse:()=>mi,rigidBodyBundleApplyCentralPushImpulse:()=>Gi,rigidBodyBundleApplyForce:()=>pi,rigidBodyBundleApplyImpulse:()=>wi,rigidBodyBundleApplyPushImpulse:()=>Pi,rigidBodyBundleApplyTorque:()=>gi,rigidBodyBundleApplyTorqueImpulse:()=>hi,rigidBodyBundleApplyTorqueTurnImpulse:()=>Wi,rigidBodyBundleClearForces:()=>Ti,rigidBodyBundleGetAngularDamping:()=>li,rigidBodyBundleGetAngularVelocity:()=>Ii,rigidBodyBundleGetBufferedMotionStatesPtr:()=>ri,rigidBodyBundleGetLinearDamping:()=>ui,rigidBodyBundleGetLinearVelocity:()=>Li,rigidBodyBundleGetLocalInertia:()=>ai,rigidBodyBundleGetMass:()=>si,rigidBodyBundleGetMotionStatesPtr:()=>oi,rigidBodyBundleGetPushVelocity:()=>Si,rigidBodyBundleGetPushVelocityInLocalPoint:()=>Mi,rigidBodyBundleGetTotalForce:()=>yi,rigidBodyBundleGetTotalTorque:()=>fi,rigidBodyBundleGetTurnVelocity:()=>bi,rigidBodyBundleGetVelocityInLocalPoint:()=>_i,rigidBodyBundleSetAngularVelocity:()=>Ci,rigidBodyBundleSetDamping:()=>di,rigidBodyBundleSetLinearVelocity:()=>vi,rigidBodyBundleSetMassProps:()=>ci,rigidBodyBundleSetPushVelocity:()=>Ai,rigidBodyBundleSetTurnVelocity:()=>Ri,rigidBodyBundleSetWorldTransform:()=>qi,rigidBodyBundleTranslate:()=>Vi,rigidBodyClearForces:()=>De,rigidBodyGetAngularDamping:()=>me,rigidBodyGetAngularVelocity:()=>xe,rigidBodyGetBufferedMotionStatePtr:()=>Be,rigidBodyGetLinearDamping:()=>pe,rigidBodyGetLinearVelocity:()=>Fe,rigidBodyGetLocalInertia:()=>Pe,rigidBodyGetMass:()=>we,rigidBodyGetMotionStatePtr:()=>fe,rigidBodyGetPushVelocity:()=>ve,rigidBodyGetPushVelocityInLocalPoint:()=>Oe,rigidBodyGetTotalForce:()=>Se,rigidBodyGetTotalTorque:()=>be,rigidBodyGetTurnVelocity:()=>Ce,rigidBodyGetVelocityInLocalPoint:()=>Ee,rigidBodySetAngularVelocity:()=>Ue,rigidBodySetDamping:()=>ge,rigidBodySetLinearVelocity:()=>ke,rigidBodySetMassProps:()=>he,rigidBodySetPushVelocity:()=>_e,rigidBodySetTurnVelocity:()=>Me,rigidBodySetWorldTransform:()=>Ze,rigidBodyTranslate:()=>je}),n(90203),n(33832),n(2093);var o=n(7839),r=n(52046),d=n(71513),u=n(18595),l=n(26041),c=n(79923),s=n(96793),a=n(58144),y=n(87491),f=n(46738),B=n(67168),g=n(23948),p=n(29009),m=n(47002);let h;const w="undefined"!=typeof TextDecoder?new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0}):{decode:()=>{throw Error("TextDecoder not available")}};"undefined"!=typeof TextDecoder&&w.decode();let P=null;function S(){return null!==P&&0!==P.byteLength||(P=new Uint8Array(h.memory.buffer)),P}function b(e,i){return e>>>=0,w.decode(S().subarray(e,e+i))}const A=new Array(128).fill(void 0);A.push(void 0,null,!0,!1);let R=A.length;function G(e){R===A.length&&A.push(A.length+1);const i=R;if(R=A[i],"number"!=typeof R)throw new Error("corrupt heap");return A[i]=e,i}function W(e){return A[e]}function T(){h.init()}function L(e){if("number"!=typeof e)throw new Error("expected a number argument, found "+typeof e)}function I(e){return L(e),h.allocateBuffer(e)>>>0}function v(e,i){L(e),L(i),h.deallocateBuffer(e,i)}function C(e){if("boolean"!=typeof e)throw new Error("expected a boolean argument, found "+typeof e)}function _(e){return C(e),h.createMultiPhysicsWorld(e)>>>0}function M(e){L(e),h.destroyMultiPhysicsWorld(e)}function V(e,i,n,t){L(e),h.multiPhysicsWorldSetGravity(e,i,n,t)}function q(e,i,n,t){L(e),L(n),h.multiPhysicsWorldStepSimulation(e,i,n,t)}function D(e,i,n){L(e),L(i),L(n),h.multiPhysicsWorldAddRigidBody(e,i,n)}function F(e,i,n){L(e),L(i),L(n),h.multiPhysicsWorldRemoveRigidBody(e,i,n)}function x(e,i,n){L(e),L(i),L(n),h.multiPhysicsWorldAddRigidBodyBundle(e,i,n)}function k(e,i,n){L(e),L(i),L(n),h.multiPhysicsWorldRemoveRigidBodyBundle(e,i,n)}function U(e,i){L(e),L(i),h.multiPhysicsWorldAddRigidBodyToGlobal(e,i)}function E(e,i){L(e),L(i),h.multiPhysicsWorldRemoveRigidBodyFromGlobal(e,i)}function O(e,i){L(e),L(i),h.multiPhysicsWorldAddRigidBodyBundleToGlobal(e,i)}function j(e,i){L(e),L(i),h.multiPhysicsWorldRemoveRigidBodyBundleFromGlobal(e,i)}function Z(e,i,n){L(e),L(i),L(n),h.multiPhysicsWorldAddRigidBodyShadow(e,i,n)}function Q(e,i,n){L(e),L(i),L(n),h.multiPhysicsWorldRemoveRigidBodyShadow(e,i,n)}function z(e,i,n){L(e),L(i),L(n),h.multiPhysicsWorldAddRigidBodyBundleShadow(e,i,n)}function K(e,i,n){L(e),L(i),L(n),h.multiPhysicsWorldRemoveRigidBodyBundleShadow(e,i,n)}function Y(e,i,n,t){L(e),L(i),L(n),C(t),h.multiPhysicsWorldAddConstraint(e,i,n,t)}function $(e,i,n){L(e),L(i),L(n),h.multiPhysicsWorldRemoveConstraint(e,i,n)}function J(e,i){L(e),L(i),h.multiPhysicsWorldMakeBodyKinematic(e,i)}function H(e,i){L(e),L(i),h.multiPhysicsWorldRestoreBodyDynamic(e,i)}function N(e,i){L(e),C(i),h.multiPhysicsWorldUseMotionStateBuffer(e,i)}function X(e,i,n,t,o){return L(e),L(i),L(n),L(t),C(o),h.createGeneric6DofConstraint(e,i,n,t,o)>>>0}function ee(e,i,n,t,o,r){return L(e),L(i),L(n),L(t),L(o),C(r),h.createGeneric6DofConstraintFromBundle(e,i,n,t,o,r)>>>0}function ie(e,i,n,t,o){return L(e),L(i),L(n),L(t),C(o),h.createGeneric6DofSpringConstraint(e,i,n,t,o)>>>0}function ne(e,i,n,t,o,r){return L(e),L(i),L(n),L(t),L(o),C(r),h.createGeneric6DofSpringConstraintFromBundle(e,i,n,t,o,r)>>>0}function te(e){L(e),h.destroyConstraint(e)}function oe(e,i,n,t){L(e),h.constraintSetLinearLowerLimit(e,i,n,t)}function re(e,i,n,t){L(e),h.constraintSetLinearUpperLimit(e,i,n,t)}function de(e,i,n,t){L(e),h.constraintSetAngularLowerLimit(e,i,n,t)}function ue(e,i,n,t){L(e),h.constraintSetAngularUpperLimit(e,i,n,t)}function le(e,i,n){L(e),L(i),C(n),h.constraintEnableSpring(e,i,n)}function ce(e,i,n){L(e),L(i),h.constraintSetStiffness(e,i,n)}function se(e,i,n){L(e),L(i),h.constraintSetDamping(e,i,n)}function ae(e){return L(e),h.createRigidBody(e)>>>0}function ye(e){L(e),h.destroyRigidBody(e)}function fe(e){return L(e),h.rigidBodyGetMotionStatePtr(e)>>>0}function Be(e){return L(e),h.rigidBodyGetBufferedMotionStatePtr(e)>>>0}function ge(e,i,n){L(e),h.rigidBodySetDamping(e,i,n)}function pe(e){return L(e),h.rigidBodyGetLinearDamping(e)}function me(e){return L(e),h.rigidBodyGetAngularDamping(e)}function he(e,i,n,t,o){L(e),h.rigidBodySetMassProps(e,i,n,t,o)}function we(e){return L(e),h.rigidBodyGetMass(e)}function Pe(e,i){L(e),L(i),h.rigidBodyGetLocalInertia(e,i)}function Se(e,i){L(e),L(i),h.rigidBodyGetTotalForce(e,i)}function be(e,i){L(e),L(i),h.rigidBodyGetTotalTorque(e,i)}function Ae(e,i,n,t){L(e),h.rigidBodyApplyCentralForce(e,i,n,t)}function Re(e,i,n,t){L(e),h.rigidBodyApplyTorque(e,i,n,t)}function Ge(e,i,n){L(e),L(i),L(n),h.rigidBodyApplyForce(e,i,n)}function We(e,i,n,t){L(e),h.rigidBodyApplyCentralImpulse(e,i,n,t)}function Te(e,i,n,t){L(e),h.rigidBodyApplyTorqueImpulse(e,i,n,t)}function Le(e,i,n){L(e),L(i),L(n),h.rigidBodyApplyImpulse(e,i,n)}function Ie(e,i,n){L(e),L(i),L(n),h.rigidBodyApplyPushImpulse(e,i,n)}function ve(e,i){L(e),L(i),h.rigidBodyGetPushVelocity(e,i)}function Ce(e,i){L(e),L(i),h.rigidBodyGetTurnVelocity(e,i)}function _e(e,i,n,t){L(e),h.rigidBodySetPushVelocity(e,i,n,t)}function Me(e,i,n,t){L(e),h.rigidBodySetTurnVelocity(e,i,n,t)}function Ve(e,i,n,t){L(e),h.rigidBodyApplyCentralPushImpulse(e,i,n,t)}function qe(e,i,n,t){L(e),h.rigidBodyApplyTorqueTurnImpulse(e,i,n,t)}function De(e){L(e),h.rigidBodyClearForces(e)}function Fe(e,i){L(e),L(i),h.rigidBodyGetLinearVelocity(e,i)}function xe(e,i){L(e),L(i),h.rigidBodyGetAngularVelocity(e,i)}function ke(e,i,n,t){L(e),h.rigidBodySetLinearVelocity(e,i,n,t)}function Ue(e,i,n,t){L(e),h.rigidBodySetAngularVelocity(e,i,n,t)}function Ee(e,i,n){L(e),L(i),L(n),h.rigidBodyGetVelocityInLocalPoint(e,i,n)}function Oe(e,i,n){L(e),L(i),L(n),h.rigidBodyGetPushVelocityInLocalPoint(e,i,n)}function je(e,i,n,t){L(e),h.rigidBodyTranslate(e,i,n,t)}function Ze(e,i){L(e),L(i),h.rigidBodySetWorldTransform(e,i)}function Qe(e){return L(e),h.createPhysicsRuntime(e)>>>0}function ze(e){L(e),h.destroyPhysicsRuntime(e)}function Ke(e){return L(e),h.physicsRuntimeGetLockStatePtr(e)>>>0}function Ye(e){return L(e),h.createMultiPhysicsRuntime(e)>>>0}function $e(e){L(e),h.destroyMultiPhysicsRuntime(e)}function Je(e){return L(e),h.multiPhysicsRuntimeGetLockStatePtr(e)>>>0}function He(e,i,n){return h.createBoxShape(e,i,n)>>>0}function Ne(e){return h.createSphereShape(e)>>>0}function Xe(e,i){return h.createCapsuleShape(e,i)>>>0}function ei(e,i,n,t){return h.createStaticPlaneShape(e,i,n,t)>>>0}function ii(e){L(e),h.destroyShape(e)}function ni(e,i){return L(e),L(i),h.createRigidBodyBundle(e,i)>>>0}function ti(e){L(e),h.destroyRigidBodyBundle(e)}function oi(e){return L(e),h.rigidBodyBundleGetMotionStatesPtr(e)>>>0}function ri(e){return L(e),h.rigidBodyBundleGetBufferedMotionStatesPtr(e)>>>0}function di(e,i,n,t){L(e),L(i),h.rigidBodyBundleSetDamping(e,i,n,t)}function ui(e,i){return L(e),L(i),h.rigidBodyBundleGetLinearDamping(e,i)}function li(e,i){return L(e),L(i),h.rigidBodyBundleGetAngularDamping(e,i)}function ci(e,i,n,t,o,r){L(e),L(i),h.rigidBodyBundleSetMassProps(e,i,n,t,o,r)}function si(e,i){return L(e),L(i),h.rigidBodyBundleGetMass(e,i)}function ai(e,i,n){L(e),L(i),L(n),h.rigidBodyBundleGetLocalInertia(e,i,n)}function yi(e,i,n){L(e),L(i),L(n),h.rigidBodyBundleGetTotalForce(e,i,n)}function fi(e,i,n){L(e),L(i),L(n),h.rigidBodyBundleGetTotalTorque(e,i,n)}function Bi(e,i,n,t,o){L(e),L(i),h.rigidBodyBundleApplyCentralForce(e,i,n,t,o)}function gi(e,i,n,t,o){L(e),L(i),h.rigidBodyBundleApplyTorque(e,i,n,t,o)}function pi(e,i,n,t){L(e),L(i),L(n),L(t),h.rigidBodyBundleApplyForce(e,i,n,t)}function mi(e,i,n,t,o){L(e),L(i),h.rigidBodyBundleApplyCentralImpulse(e,i,n,t,o)}function hi(e,i,n,t,o){L(e),L(i),h.rigidBodyBundleApplyTorqueImpulse(e,i,n,t,o)}function wi(e,i,n,t){L(e),L(i),L(n),L(t),h.rigidBodyBundleApplyImpulse(e,i,n,t)}function Pi(e,i,n,t){L(e),L(i),L(n),L(t),h.rigidBodyBundleApplyPushImpulse(e,i,n,t)}function Si(e,i,n){L(e),L(i),L(n),h.rigidBodyBundleGetPushVelocity(e,i,n)}function bi(e,i,n){L(e),L(i),L(n),h.rigidBodyBundleGetTurnVelocity(e,i,n)}function Ai(e,i,n,t,o){L(e),L(i),h.rigidBodyBundleSetPushVelocity(e,i,n,t,o)}function Ri(e,i,n,t,o){L(e),L(i),h.rigidBodyBundleSetTurnVelocity(e,i,n,t,o)}function Gi(e,i,n,t,o){L(e),L(i),h.rigidBodyBundleApplyCentralPushImpulse(e,i,n,t,o)}function Wi(e,i,n,t,o){L(e),L(i),h.rigidBodyBundleApplyTorqueTurnImpulse(e,i,n,t,o)}function Ti(e,i){L(e),L(i),h.rigidBodyBundleClearForces(e,i)}function Li(e,i,n){L(e),L(i),L(n),h.rigidBodyBundleGetLinearVelocity(e,i,n)}function Ii(e,i,n){L(e),L(i),L(n),h.rigidBodyBundleGetAngularVelocity(e,i,n)}function vi(e,i,n,t,o){L(e),L(i),h.rigidBodyBundleSetLinearVelocity(e,i,n,t,o)}function Ci(e,i,n,t,o){L(e),L(i),h.rigidBodyBundleSetAngularVelocity(e,i,n,t,o)}function _i(e,i,n,t){L(e),L(i),L(n),L(t),h.rigidBodyBundleGetVelocityInLocalPoint(e,i,n,t)}function Mi(e,i,n,t){L(e),L(i),L(n),L(t),h.rigidBodyBundleGetPushVelocityInLocalPoint(e,i,n,t)}function Vi(e,i,n,t,o){L(e),L(i),h.rigidBodyBundleTranslate(e,i,n,t,o)}function qi(e,i,n){L(e),L(i),L(n),h.rigidBodyBundleSetWorldTransform(e,i,n)}function Di(){return h.createPhysicsWorld()>>>0}function Fi(e){L(e),h.destroyPhysicsWorld(e)}function xi(e,i,n,t){L(e),h.physicsWorldSetGravity(e,i,n,t)}function ki(e,i,n,t){L(e),L(n),h.physicsWorldStepSimulation(e,i,n,t)}function Ui(e,i){L(e),L(i),h.physicsWorldAddRigidBody(e,i)}function Ei(e,i){L(e),L(i),h.physicsWorldRemoveRigidBody(e,i)}function Oi(e,i){L(e),L(i),h.physicsWorldAddRigidBodyBundle(e,i)}function ji(e,i){L(e),L(i),h.physicsWorldRemoveRigidBodyBundle(e,i)}function Zi(e,i,n){L(e),L(i),C(n),h.physicsWorldAddConstraint(e,i,n)}function Qi(e,i){L(e),L(i),h.physicsWorldRemoveConstraint(e,i)}function zi(e,i){L(e),C(i),h.physicsWorldUseMotionStateBuffer(e,i)}function Ki(e,i){try{return e.apply(this,i)}catch(e){let i=function(){try{return e instanceof Error?`${e.message}\n\nStack:\n${e.stack}`:e.toString()}catch(e){return"<failed to stringify thrown value>"}}();throw console.error("wasm-bindgen: imported JS function that was not marked as `catch` threw an error:",i),e}}let Yi=0;const $i="undefined"!=typeof TextEncoder?new TextEncoder("utf-8"):{encode:()=>{throw Error("TextEncoder not available")}},Ji="function"==typeof $i.encodeInto?function(e,i){return $i.encodeInto(e,i)}:function(e,i){const n=$i.encode(e);return i.set(n),{read:e.length,written:n.length}};let Hi=null;function Ni(){return(null===Hi||!0===Hi.buffer.detached||void 0===Hi.buffer.detached&&Hi.buffer!==h.memory.buffer)&&(Hi=new DataView(h.memory.buffer)),Hi}function Xi(){const e={wbg:{}};return e.wbg.__wbindgen_string_new=function(e,i){return G(b(e,i))},e.wbg.__wbindgen_object_drop_ref=function(e){!function(e){const i=W(e);(function(e){e<132||(A[e]=R,R=e)})(e)}(e)},e.wbg.__wbg_new_abda76e883ba8a5f=function(){return Ki((function(){return G(new Error)}),arguments)},e.wbg.__wbg_stack_658279fe44541cf6=function(){return Ki((function(e,i){const n=function(e,i,n){if("string"!=typeof e)throw new Error("expected a string argument, found "+typeof e);if(void 0===n){const n=$i.encode(e),t=i(n.length,1)>>>0;return S().subarray(t,t+n.length).set(n),Yi=n.length,t}let t=e.length,o=i(t,1)>>>0;const r=S();let d=0;for(;d<t;d++){const i=e.charCodeAt(d);if(i>127)break;r[o+d]=i}if(d!==t){0!==d&&(e=e.slice(d)),o=n(o,t,t=d+3*e.length,1)>>>0;const i=S().subarray(o+d,o+t),r=Ji(e,i);if(r.read!==e.length)throw new Error("failed to pass whole string");d+=r.written,o=n(o,t,d,1)>>>0}return Yi=d,o}(W(i).stack,h.__wbindgen_malloc,h.__wbindgen_realloc),t=Yi;Ni().setInt32(e+4,t,!0),Ni().setInt32(e+0,n,!0)}),arguments)},e.wbg.__wbg_error_f851667af71bcfc6=function(){return Ki((function(e,i){let n,t;try{n=e,t=i,console.error(b(e,i))}finally{h.__wbindgen_free(n,t,1)}}),arguments)},e.wbg.__wbg_error_09480e4aadca50ad=function(){return Ki((function(e){console.error(W(e))}),arguments)},e.wbg.__wbg_log_b103404cc5920657=function(){return Ki((function(e){console.log(W(e))}),arguments)},e.wbg.__wbindgen_throw=function(e,i){throw new Error(b(e,i))},e}function en(e,i){return h=e.exports,tn.__wbindgen_wasm_module=i,Hi=null,P=null,h}function nn(e){if(void 0!==h)return h;void 0!==e&&Object.getPrototypeOf(e)===Object.prototype?({module:e}=e):console.warn("using deprecated parameters for `initSync()`; pass a single object instead");const i=Xi();return e instanceof WebAssembly.Module||(e=new WebAssembly.Module(e)),en(new WebAssembly.Instance(e,i),e)}async function tn(e){if(void 0!==h)return h;void 0!==e&&Object.getPrototypeOf(e)===Object.prototype?({module_or_path:e}=e):console.warn("using deprecated parameters for the initialization function; pass a single object instead"),void 0===e&&(e=new URL(n(24871),n.b));const i=Xi();("string"==typeof e||"function"==typeof Request&&e instanceof Request||"function"==typeof URL&&e instanceof URL)&&(e=fetch(e));const{instance:t,module:o}=await async function(e,i){if("function"==typeof Response&&e instanceof Response){if("function"==typeof WebAssembly.instantiateStreaming)try{return await WebAssembly.instantiateStreaming(e,i)}catch(i){if("application/wasm"==e.headers.get("Content-Type"))throw i;console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",i)}const n=await e.arrayBuffer();return await WebAssembly.instantiate(n,i)}{const n=await WebAssembly.instantiate(e,i);return n instanceof WebAssembly.Instance?{instance:n,module:e}:n}}(await e,i);return en(t,o)}const on=tn;var rn=n(26405),dn=n(1592),un=n(67648),ln=n(35901),cn=n(3477);class sn{async build(e,i){const n=new y.Z(i);n.clearColor=new l.ov(.95,.95,.95,1);const t=new o.L("arcRotateCamera",0,0,500,new c.Pq(0,0,0),n);t.minZ=1,t.maxZ=3e3,t.setPosition(new c.Pq(60,40,-50).scaleInPlace(10)),t.attachControl(void 0,!1),t.inertia=.8,t.speed=10;const h=new d.g("hemisphericLight",new c.Pq(0,1,0),n);h.intensity=.5,h.specular=new l.v9(0,0,0),h.groundColor=new l.v9(1,1,1);const w=new r.Z("directionalLight",new c.Pq(.5,-1,1),n);w.intensity=.5;w.shadowMaxZ=250,w.shadowMinZ=-250,w.autoCalcShadowZBounds=!1,w.autoUpdateExtends=!1,w.shadowOrthoScale=0,w.orthoTop=250,w.orthoBottom=-250,w.orthoLeft=-250,w.orthoRight=250;const P=new u.o(2048,w,!0);P.transparencyShadow=!0,P.usePercentageCloserFiltering=!0,P.forceBackFacesOnly=!1,P.bias=.004,P.filteringQuality=u.o.QUALITY_MEDIUM;const S=await(0,f.e)(new m.t,32),b=new g.h(S,{allowDynamicShadow:!0,preserveBackBuffer:!0});b.register(n),b.evaluationType=p.q.Buffered;const A=new c.uq;{const e=(0,a.x)("ground",{size:500},n);e.rotationQuaternion=c.PT.RotationAxis(new c.Pq(1,0,0),Math.PI/2),P.addShadowCaster(e),e.receiveShadows=!0;const i=new rn.Ty(b,new c.Pq(0,0,-1),0),t=new ln.t(S);t.shape=i,c.uq.FromQuaternionToRef(e.rotationQuaternion,A),t.setInitialTransform(A),t.motionType=1;const o=new dn.U(b,t);b.addRigidBodyToGlobal(o)}const R=512,G=(0,s.an)("box",{size:2},n);P.addShadowCaster(G),G.receiveShadows=!0;const W=new Float32Array(262144);G.thinInstanceSetBuffer("matrix",W,16,!1);const T=new rn.SA(b,new c.Pq(1,1,1)),L=[];for(let e=0;e<4;++e)for(let i=0;i<8;++i){const n=8*e+i,t=60*(i-4)+30,o=60*(e-2)+30,r=new cn.x(S,R);for(let e=0;e<R;++e){r.setShape(e,T);const i=c.uq.TranslationToRef(t,1+2*e,o,A);r.setInitialTransform(e,i),r.setFriction(e,1),r.setLinearDamping(e,.3),r.setAngularDamping(e,.3)}const d=new un.Y(b,r);b.addRigidBodyBundle(d,n);for(let e=0;e<R;e+=2){const i=[e,e+1],t=new B.vC(b,d,i,c.uq.Translation(0,-1.2,0),c.uq.Translation(0,1.2,0),!0);t.setLinearLowerLimit(new c.Pq(0,0,0)),t.setLinearUpperLimit(new c.Pq(0,0,0)),t.setAngularLowerLimit(new c.Pq(Math.PI/4,0,0)),t.setAngularUpperLimit(new c.Pq(0,0,0));for(let e=0;e<6;++e)t.enableSpring(e,!0),t.setStiffness(e,100),t.setDamping(e,1);b.addConstraint(t,n,!1)}L.push(d)}return b.onTickObservable.add((()=>{for(let e=0;e<L.length;++e)L[e].getTransformMatricesToArray(W,e*R*16);G.thinInstanceBufferUpdated("matrix")})),n}}},24871:(e,i,n)=>{e.exports=n.p+"818c1230e9f6b9e5cb96.wasm"}}]);