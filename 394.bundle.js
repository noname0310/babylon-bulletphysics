"use strict";(self.webpackChunkbabylon_bulletphysics=self.webpackChunkbabylon_bulletphysics||[]).push([[394],{394:(t,e,n)=>{n.r(e),n.d(e,{SceneBuilder:()=>R}),n(203),n(1503),n(8227),n(3108);var o=n(7456),i=n(5581),a=n(1513),s=n(9711),r=n(6041),l=n(9923),c=n(9899),p=n(8144),d=n(3490),u=n(8014),f=n(825),m=n(554),h=n(6738),g=n(7002),w=n(1137),y=n(9848),M=n(5431),T=n(3948),D=n(1592);class _ extends D.U{worldId;motionType;constructor(t,e){const n=e.shape;if(null!==n){e.collisionGroup=n.collisionGroup,e.collisionMask=n.collisionMask;const t=n.material;t&&(e.friction=t.friction,e.restitution=t.restitution)}super(t,e),this.worldId=e.worldId,this.motionType=e.motionType}}var I=n(7648);class A extends I.Y{info;constructor(t,e){const n=e.getShape(0);if(null!==n){for(let t=0;t<e.count;++t)e.setCollisionGroup(t,n.collisionGroup),e.setCollisionMask(t,n.collisionMask);const t=n.material;if(t)for(let n=0;n<e.count;++n)e.setFriction(n,t.friction),e.setRestitution(n,t.restitution)}super(t,e),this.info=e}setDamping(t,e,n){super.setDamping(t,e,n),this.info.setLinearDamping(t,e),this.info.setAngularDamping(t,n)}setMassProps(t,e,n){super.setMassProps(t,e,n),this.info.setMass(t,e),this.info.setLocalInertia(t,n)}get length(){return this.count}}var E=n(5901);class C extends E.t{worldId;commandsOnCreation;constructor(t){super(t),this.worldId=0,this.commandsOnCreation=[]}}var v=n(3477);class x extends v.x{worldId;commandsOnCreation;constructor(t,e){super(t,e),this.worldId=0,this.commandsOnCreation=[]}get length(){return this.count}}var b=n(6405);const L=new l.Pq;class B extends b.SA{localTransform;collisionGroup=1;collisionMask=65535;_material=null;constructor(t,e,n,o){super(t,o?.scaleToRef(.5,L)??L.setAll(.5)),this.localTransform=function(t,e,n){return!1===t?.equalsToFloats(0,0,0)||!1===e?.equalsToFloats(0,0,0,1)?(void 0!==e?(void 0===n&&(n=new l.uq),n=l.uq.FromQuaternionToRef(e,n),void 0!==t&&n.setTranslation(t)):void 0!==t?(void 0===n?n=l.uq.Identity():l.uq.IdentityToRef(n),n.setTranslation(t)):void 0===n?n=l.uq.Identity():l.uq.IdentityToRef(n),n):null}(e,n)}setMaterial(t,e){this._material={friction:t,restitution:e}}get material(){return this._material}}class S{worldId;constructor(){this.worldId=0}}class P{world;name="BulletPlugin";onCollisionObservable=new y.cP;onCollisionEndedObservable=new y.cP;onTriggerCollisionObservable=new y.cP;_initializedBodies=[];_unInitializedBodies=[];_shapeMap=new Map;commandContext=new S;static _TempMatrix=new l.uq;static _TempMatrix2=new l.uq;static _TempMatrix3=new l.uq;static _TempVector=new l.Pq;static _TempVector2=new l.Pq;static _TempQuaternion=new l.PT;constructor(t){this.world=new T.h(t)}setGravity(t){this.world.setGravity(t)}setTimeStep(t){this.world.timeStep=t}getTimeStep(){return this.world.timeStep}executeStep(t,e){{const t=this._unInitializedBodies;for(let e=0;e<t.length;++e){const n=t[e],o=n._pluginData;if(o){if(!(o instanceof C))throw new Error("Invalid body type.");{const i=new _(this.world,o);{const t=o.commandsOnCreation;for(let e=0;e<t.length;++e)t[e](i);t.length=0}this.world.addRigidBody(i,o.worldId),this._initializedBodies.push(t[e]),n._pluginData=i}}const i=n._pluginDataInstances;if(!Array.isArray(i)){if(!(i instanceof x))throw new Error("Invalid body type.");{const o=new A(this.world,i);{const t=i.commandsOnCreation;for(let e=0;e<t.length;++e)t[e](o);t.length=0}this.world.addRigidBodyBundle(o,i.worldId),this._initializedBodies.push(t[e]),n._pluginDataInstances=o}}}t.length=0}for(let t=0;t<e.length;++t){const n=e[t];n.disablePreStep||this.setPhysicsBodyTransformation(n,n.transformNode)}this.world.afterAnimations(1e3*t);for(let t=0;t<e.length;++t){const n=e[t];n.disableSync||this.sync(n)}}setPhysicsBodyTransformation(t,e){if(t.getPrestepType()===d.f9.TELEPORT){const n=t.transformNode,o=t._pluginData;o&&(o instanceof _?o.setTransformMatrix(this._getTransformInfos(e,P._TempMatrix)):o instanceof C&&o.setInitialTransform(this._getTransformInfos(e,P._TempMatrix)));const i=t._pluginDataInstances;if(!Array.isArray(i)){const t=n._thinInstanceDataStorage.matrixData;if(!t)return;if(i instanceof A)i.setTransformMatricesFromArray(t);else if(i instanceof x)for(let e=0;e<i.count;++e){const n=l.uq.FromArrayToRef(t,16*e,P._TempMatrix);i.setInitialTransform(e,n)}}}else t.getPrestepType()===d.f9.ACTION?this.setTargetTransform(t,e.absolutePosition,e.absoluteRotationQuaternion):t.getPrestepType()===d.f9.DISABLED?w.V.Warn("Prestep type is set to DISABLED. Unable to set physics body transformation."):w.V.Warn("Invalid prestep type set to physics body.")}getPluginVersion(){return 2}setVelocityLimits(t,e){throw new Error("Method not implemented.")}getMaxLinearVelocity(){throw new Error("Method not implemented.")}getMaxAngularVelocity(){throw new Error("Method not implemented.")}static _MotionTypeToBulletMotionType(t){switch(t){case d.AH.DYNAMIC:return 0;case d.AH.STATIC:return 1;case d.AH.ANIMATED:return 2;default:throw new Error("Invalid motion type")}}static _BulletMotionTypeToMotionType(t){switch(t){case 0:return d.AH.DYNAMIC;case 1:return d.AH.STATIC;case 2:return d.AH.ANIMATED;default:throw new Error("Invalid motion type")}}initBody(t,e,n,o){const i=t._pluginData=new C(this.world.wasmInstance);i.motionType=P._MotionTypeToBulletMotionType(e);const a=l.uq.FromQuaternionToRef(o,P._TempMatrix);a.setTranslation(n),i.setInitialTransform(a),this._unInitializedBodies.push(t)}initBodyInstances(t,e,n){const o=n._thinInstanceDataStorage?.instancesCount??0,i=n._thinInstanceDataStorage.matrixData;if(!i)return;const a=new x(this.world.wasmInstance,o);t._pluginDataInstances=a;const s=P._MotionTypeToBulletMotionType(e);for(let t=0;t<o;++t){a.setMotionType(t,s);const e=l.uq.FromArrayToRef(i,16*t,P._TempMatrix);a.setInitialTransform(t,e)}this._unInitializedBodies.push(t)}updateBodyInstances(t,e){const n=e._thinInstanceDataStorage?.instancesCount??0,o=e._thinInstanceDataStorage.matrixData;if(!o)return;const i=t._pluginDataInstances,a=i.length,s=P._MotionTypeToBulletMotionType(this.getMotionType(t));if(n!==a&&i instanceof A){this.world.removeRigidBodyBundle(i,i.info.worldId);const t=i.info,e=new x(this.world.wasmInstance,n);{const o=Math.min(n,a);for(let n=0;n<o;++n)e.setShape(n,t.getShape(n)),e.setInitialTransform(n,i.getTransformMatrixToRef(n,P._TempMatrix)),e.setMotionType(n,t.getMotionType(n)),e.setMass(n,t.getMass(n)),e.setLocalInertia(n,t.getLocalInertiaToRef(n,P._TempVector)),e.setLinearDamping(n,t.getLinearDamping(n)),e.setAngularDamping(n,t.getAngularDamping(n)),e.setFriction(n,t.getFriction(n)),e.setRestitution(n,t.getRestitution(n)),e.setLinearSleepingThreshold(n,t.getLinearSleepingThreshold(n)),e.setAngularSleepingThreshold(n,t.getAngularSleepingThreshold(n)),e.setCollisionGroup(n,t.getCollisionGroup(n)),e.setCollisionMask(n,t.getCollisionMask(n)),e.setAdditionalDamping(n,t.getAdditionalDamping(n)),e.setNoContactResponse(n,t.getNoContactResponse(n)),e.setDisableDeactivation(n,t.getDisableDeactivation(n))}for(let t=a;t<n;++t)e.setInitialTransform(t,l.uq.FromArrayToRef(o,16*t,P._TempMatrix)),e.setMotionType(t,s);const r=new A(this.world,e);this.world.addRigidBodyBundle(r,e.worldId)}}removeBody(t){let e=!1;const n=t._pluginData;n instanceof _&&(e=!0,this.world.removeRigidBody(n,n.worldId));const o=t._pluginDataInstances;if(o instanceof A&&(e=!0,this.world.removeRigidBodyBundle(o,o.info.worldId)),e){const e=this._initializedBodies.indexOf(t);-1!==e&&this._initializedBodies.splice(e,1)}else{const e=this._unInitializedBodies.indexOf(t);-1!==e&&this._unInitializedBodies.splice(e,1)}}sync(t){this.syncTransform(t,t.transformNode)}syncTransform(t,e){const n=t._pluginData;if(n instanceof _)try{const t=n.getTransformMatrixToRef(P._TempMatrix),o=P._TempVector;t.getTranslationToRef(o);const i=l.PT.FromRotationMatrixToRef(t,P._TempQuaternion),a=e.parent;if(a&&!a.getWorldMatrix().isIdentity()){a.computeWorldMatrix(!0);const t=P._TempVector2.copyFrom(e.scaling);i.normalize();const n=P._TempMatrix;l.uq.ComposeToRef(e.absoluteScaling,i,o,n);const s=P._TempMatrix2;a.getWorldMatrix().invertToRef(s);const r=P._TempMatrix3;n.multiplyToRef(s,r),r.decomposeToTransformNode(e),e.rotationQuaternion?.normalize(),e.scaling.copyFrom(t)}else e.position.copyFrom(o),e.rotationQuaternion?e.rotationQuaternion.copyFrom(i):i.toEulerAnglesToRef(e.rotation)}catch(t){w.V.Error(`Syncing transform failed for node ${e.name}: ${t.message}...`)}const o=t._pluginDataInstances;if(o instanceof A){const t=e,n=t._thinInstanceDataStorage.matrixData;if(!n)return;o.getTransformMatricesToArray(n),t.thinInstanceBufferUpdated("matrix")}}setShape(t,e){const n=e?._pluginData??null,o=t._pluginData;if(o)if(o instanceof C)o.shape=n;else if(o instanceof _){if(null===n)throw new Error("Cannot set shape to null on a body that has already been initialized.");o.setShape(n)}const i=t._pluginDataInstances;if(!Array.isArray(i))if(i instanceof x)for(let t=0;t<i.count;++t)i.setShape(t,n);else if(i instanceof A){if(null===n)throw new Error("Cannot set shape to null on a body that has already been initialized.");for(let t=0;t<i.count;++t)i.setShape(t,n)}}getShape(t){const e=t._pluginData;if(e){if(e instanceof C)return null!==e.shape?this._shapeMap.get(e.shape)??null:null;if(e instanceof _)return this._shapeMap.get(e.getShape())??null}const n=t._pluginDataInstances;if(!Array.isArray(n)){if(n instanceof x){const t=n.getShape(0);return null!==t?this._shapeMap.get(t)??null:null}if(n instanceof A){const t=n.getShape(0);return this._shapeMap.get(t)??null}}throw new Error("Invalid body type.")}getShapeType(t){return t.type}setEventMask(t,e,n){throw new Error("Method not implemented.")}getEventMask(t,e){throw new Error("Method not implemented.")}setMotionType(t,e,n){const o=t._pluginData;if(o)if(o instanceof C)o.motionType=P._MotionTypeToBulletMotionType(e);else if(o instanceof _)throw new Error("Cannot set motion type on a body that has already been initialized.");const i=t._pluginDataInstances;if(!Array.isArray(i)){const t=n??0,o=void 0!==n?n+1:i.length;if(i instanceof x)for(let n=t;n<o;++n)i.setMotionType(n,P._MotionTypeToBulletMotionType(e));else if(i instanceof A)throw new Error("Cannot set motion type on a body that has already been initialized.")}}getMotionType(t,e){const n=t._pluginData;if(n){if(n instanceof C)return P._BulletMotionTypeToMotionType(n.motionType);if(n instanceof _)return P._BulletMotionTypeToMotionType(n.motionType)}const o=t._pluginDataInstances;if(!Array.isArray(o)){const t=e??0;if(o instanceof x)return P._BulletMotionTypeToMotionType(o.getMotionType(t));if(o instanceof A)return P._BulletMotionTypeToMotionType(o.info.getMotionType(t))}throw new Error("Invalid body type.")}computeMassProperties(t,e){const n=t._pluginData;if(n){if(n instanceof C)return{mass:n.mass,inertia:n.localInertia??void 0};if(n instanceof _)return{mass:n.getMass(),inertia:n.getLocalInertia()}}const o=t._pluginDataInstances;if(!Array.isArray(o)){const t=e??0;if(o instanceof x)return{mass:o.getMass(t),inertia:o.getLocalInertiaToRef(t,new l.Pq)??void 0};if(o instanceof A)return{mass:o.getMass(t),inertia:o.getLocalInertia(t)}}throw new Error("Invalid body type.")}setMassProperties(t,e,n){void 0!==e.inertiaOrientation&&w.V.Warn("Inertia orientation is not supported in bullet."),void 0!==e.centerOfMass&&w.V.Warn("Center of mass is not supported in bullet.");const o=t._pluginData;if(o)if(o instanceof C)void 0!==e.mass&&(o.mass=e.mass),void 0!==e.inertia&&(o.localInertia=e.inertia);else if(o instanceof _){const t=e.mass??o.getMass(),n=e.inertia??o.getLocalInertia();o.setMassProps(t,n)}const i=t._pluginDataInstances;if(!Array.isArray(i)){const t=n??0,i=void 0!==n?n+1:o.count;if(o instanceof x)for(let n=t;n<i;++n)void 0!==e.mass&&o.setMass(n,e.mass),void 0!==e.inertia&&o.setLocalInertia(n,e.inertia);else if(o instanceof A)for(let n=t;n<i;++n)o.setMassProps(n,e.mass??o.getMass(n),e.inertia??o.getLocalInertia(n))}}getMassProperties(t,e){const n=t._pluginData;if(n){if(n instanceof C)return{mass:n.mass,inertia:n.localInertia??void 0};if(n instanceof _)return{mass:n.getMass(),inertia:n.getLocalInertia()}}const o=t._pluginDataInstances;if(!Array.isArray(o)){const t=e??0;if(o instanceof x)return{mass:o.getMass(t),inertia:o.getLocalInertiaToRef(t,new l.Pq)??void 0};if(o instanceof A)return{mass:o.getMass(t),inertia:o.getLocalInertia(t)}}throw new Error("Invalid body type.")}setLinearDamping(t,e,n){const o=t._pluginData;o&&(o instanceof C?o.linearDamping=e:o instanceof _&&o.setDamping(e,o.getAngularDamping()));const i=t._pluginDataInstances;if(!Array.isArray(i)){const t=n??0,o=void 0!==n?n+1:i.length;if(i instanceof x)for(let n=t;n<o;++n)i.setLinearDamping(n,e);else if(i instanceof A)for(let n=t;n<o;++n)i.setDamping(n,e,i.getAngularDamping(n))}}getLinearDamping(t,e){const n=t._pluginData;if(n){if(n instanceof C)return n.linearDamping;if(n instanceof _)return n.getLinearDamping()}const o=t._pluginDataInstances;if(!Array.isArray(o)){const t=e??0;if(o instanceof x)return o.getLinearDamping(t);if(o instanceof A)return o.getLinearDamping(t)}throw new Error("Invalid body type.")}setAngularDamping(t,e,n){const o=t._pluginData;o&&(o instanceof C?o.angularDamping=e:o instanceof _&&o.setDamping(o.getLinearDamping(),e));const i=t._pluginDataInstances;if(!Array.isArray(i)){const t=n??0,o=void 0!==n?n+1:i.length;if(i instanceof x)for(let n=t;n<o;++n)i.setAngularDamping(n,e);else if(i instanceof A)for(let n=t;n<o;++n)i.setDamping(n,i.getLinearDamping(n),e)}}getAngularDamping(t,e){const n=t._pluginData;if(n){if(n instanceof C)return n.angularDamping;if(n instanceof _)return n.getAngularDamping()}const o=t._pluginDataInstances;if(!Array.isArray(o)){const t=e??0;if(o instanceof x)return o.getAngularDamping(t);if(o instanceof A)return o.getAngularDamping(t)}throw new Error("Invalid body type.")}setLinearVelocity(t,e,n){const o=t._pluginData;o&&(o instanceof C?o.commandsOnCreation.push((t=>{t.setLinearVelocity(e)})):o instanceof _&&o.setLinearVelocity(e));const i=t._pluginDataInstances;if(!Array.isArray(i)){const t=n??0,o=void 0!==n?n+1:i.length;if(i instanceof x)i.commandsOnCreation.push((n=>{for(let i=t;i<o;++i)n.setLinearVelocity(i,e)}));else if(i instanceof A)for(let n=t;n<o;++n)i.setLinearVelocity(n,e)}}getLinearVelocityToRef(t,e,n){const o=t._pluginData;o&&(o instanceof C?e.set(0,0,0):o instanceof _&&o.getLinearVelocityToRef(e));const i=t._pluginDataInstances;if(!Array.isArray(i)){const t=n??0;i instanceof x?e.set(0,0,0):i instanceof A&&i.getLinearVelocityToRef(t,e)}}applyImpulse(t,e,n,o){const i=t._pluginData;i&&(i instanceof C?i.commandsOnCreation.push((t=>{t.applyImpulse(e,n)})):i instanceof _&&i.applyImpulse(e,n));const a=t._pluginDataInstances;if(!Array.isArray(a)){const t=o??0,i=void 0!==o?o+1:a.length;if(a instanceof x)a.commandsOnCreation.push((o=>{for(let a=t;a<i;++a)o.applyImpulse(a,e,n)}));else if(a instanceof A)for(let o=t;o<i;++o)a.applyImpulse(o,e,n)}}applyAngularImpulse(t,e,n){const o=t._pluginData;o&&(o instanceof C?o.commandsOnCreation.push((t=>{t.applyTorque(e)})):o instanceof _&&o.applyTorque(e));const i=t._pluginDataInstances;if(!Array.isArray(i)){const t=n??0,o=void 0!==n?n+1:i.length;if(i instanceof x)i.commandsOnCreation.push((n=>{for(let i=t;i<o;++i)n.applyTorque(i,e)}));else if(i instanceof A)for(let n=t;n<o;++n)i.applyTorque(n,e)}}applyForce(t,e,n,o){const i=t._pluginData;i&&(i instanceof C?i.commandsOnCreation.push((t=>{t.applyForce(e,n)})):i instanceof _&&i.applyForce(e,n));const a=t._pluginDataInstances;if(!Array.isArray(a)){const t=o??0,i=void 0!==o?o+1:a.length;if(a instanceof x)a.commandsOnCreation.push((o=>{for(let a=t;a<i;++a)o.applyForce(a,e,n)}));else if(a instanceof A)for(let o=t;o<i;++o)a.applyForce(o,e,n)}}setAngularVelocity(t,e,n){const o=t._pluginData;o&&(o instanceof C?o.commandsOnCreation.push((t=>{t.setAngularVelocity(e)})):o instanceof _&&o.setAngularVelocity(e));const i=t._pluginDataInstances;if(!Array.isArray(i)){const t=n??0,o=void 0!==n?n+1:i.length;if(i instanceof x)i.commandsOnCreation.push((n=>{for(let i=t;i<o;++i)n.setAngularVelocity(i,e)}));else if(i instanceof A)for(let n=t;n<o;++n)i.setAngularVelocity(n,e)}}getAngularVelocityToRef(t,e,n){const o=t._pluginData;o&&(o instanceof C?e.set(0,0,0):o instanceof _&&o.getAngularVelocityToRef(e));const i=t._pluginDataInstances;if(!Array.isArray(i)){const t=n??0;i instanceof x?e.set(0,0,0):i instanceof A&&i.getAngularVelocityToRef(t,e)}}getBodyGeometry(t){throw new Error("Method not implemented.")}disposeBody(t){t._pluginData&&(t._pluginData.dispose(),t._pluginData=void 0),(t._pluginDataInstances instanceof A||t._pluginDataInstances instanceof x)&&(t._pluginDataInstances.dispose(),t._pluginDataInstances=[])}setCollisionCallbackEnabled(t,e,n){throw new Error("Method not implemented.")}setCollisionEndedCallbackEnabled(t,e,n){throw new Error("Method not implemented.")}addConstraint(t,e,n,o,i){throw new Error("Method not implemented.")}getCollisionObservable(t,e){throw new Error("Method not implemented.")}getCollisionEndedObservable(t,e){throw new Error("Method not implemented.")}setGravityFactor(t,e,n){throw new Error("Method not implemented.")}getGravityFactor(t,e){throw new Error("Method not implemented.")}setTargetTransform(t,e,n,o){const i=l.uq.FromQuaternionToRef(n,P._TempMatrix);i.setTranslation(e);const a=t._pluginData;a&&(a instanceof C?a.setInitialTransform(i):a instanceof _&&a.setDynamicTransformMatrix(i,!0));const s=t._pluginDataInstances;if(!Array.isArray(s)){const t=o??0,e=void 0!==o?o+1:s.length;if(s instanceof x)for(let n=t;n<e;++n)s.setInitialTransform(n,i);else if(s instanceof A)for(let n=t;n<e;++n)s.setDynamicTransformMatrix(n,i,!0)}}initShape(t,e,n){let o=null;switch(e){case d.DK.SPHERE:throw new Error("Sphere shape not supported.");case d.DK.BOX:o=new B(this.world,n.center,n.rotation,n.extents);break;case d.DK.CAPSULE:throw new Error("Capsule shape not supported.");case d.DK.CONTAINER:throw new Error("Container shape not supported.");case d.DK.CYLINDER:throw new Error("Cylinder shape not supported.");case d.DK.CONVEX_HULL:case d.DK.MESH:throw new Error("Convex hull and mesh shapes not supported.");case d.DK.HEIGHTFIELD:throw new Error("Heightfield shape not supported.");default:throw new Error("Unsupported Shape Type.")}t._pluginData=o,this._shapeMap.set(o,t)}setShapeFilterMembershipMask(t,e){t._pluginData.collisionGroup=e}getShapeFilterMembershipMask(t){return t._pluginData.collisionGroup}setShapeFilterCollideMask(t,e){t._pluginData.collisionMask=e}getShapeFilterCollideMask(t){return t._pluginData.collisionMask}setMaterial(t,e){const n=e.friction??.5;e.staticFriction&&w.V.Warn("Static friction is not supported in bullet.");const o=e.restitution??0;e.frictionCombine&&e.frictionCombine!==M.F.MULTIPLY&&w.V.Warn("Friction combine is fixed to MULTIPLY in bullet."),e.restitutionCombine&&e.restitutionCombine!==M.F.MULTIPLY&&w.V.Warn("Restitution combine is fixed to MULTIPLY in bullet."),t._pluginData.setMaterial(n,o)}getMaterial(t){const e=t._pluginData.material;return{friction:e?.friction,restitution:e?.restitution}}setDensity(t,e){throw new Error("Method not implemented.")}getDensity(t){throw new Error("Method not implemented.")}_getTransformInfos(t,e){if(t.parent){const n=t.computeWorldMatrix(!0);return e.copyFrom(n)}let n=P._TempQuaternion;if(t.rotationQuaternion)n=t.rotationQuaternion;else{const e=t.rotation;l.PT.FromEulerAnglesToRef(e.x,e.y,e.z,n)}return l.uq.FromQuaternionToRef(n,e),e.setTranslation(t.position),e}addChild(t,e,n,o,i){throw new Error("Method not implemented.")}removeChild(t,e){throw new Error("Method not implemented.")}getNumChildren(t){throw new Error("Method not implemented.")}getBoundingBox(t){throw new Error("Method not implemented.")}getBodyBoundingBox(t){throw new Error("Method not implemented.")}disposeShape(t){const e=t._pluginData;this._shapeMap.delete(e),e.dispose(),t._pluginData=void 0}setTrigger(t,e){throw new Error("Method not implemented.")}initConstraint(t,e,n){throw new Error("Method not implemented.")}setEnabled(t,e){throw new Error("Method not implemented.")}getEnabled(t){throw new Error("Method not implemented.")}setCollisionsEnabled(t,e){throw new Error("Method not implemented.")}getCollisionsEnabled(t){throw new Error("Method not implemented.")}setAxisFriction(t,e,n){throw new Error("Method not implemented.")}getAxisFriction(t,e){throw new Error("Method not implemented.")}setAxisMode(t,e,n){throw new Error("Method not implemented.")}getAxisMode(t,e){throw new Error("Method not implemented.")}setAxisMinLimit(t,e,n){throw new Error("Method not implemented.")}getAxisMinLimit(t,e){throw new Error("Method not implemented.")}setAxisMaxLimit(t,e,n){throw new Error("Method not implemented.")}getAxisMaxLimit(t,e){throw new Error("Method not implemented.")}setAxisMotorType(t,e,n){throw new Error("Method not implemented.")}getAxisMotorType(t,e){throw new Error("Method not implemented.")}setAxisMotorTarget(t,e,n){throw new Error("Method not implemented.")}getAxisMotorTarget(t,e){throw new Error("Method not implemented.")}setAxisMotorMaxForce(t,e,n){throw new Error("Method not implemented.")}getAxisMotorMaxForce(t,e){throw new Error("Method not implemented.")}disposeConstraint(t){throw new Error("Method not implemented.")}getBodiesUsingConstraint(t){throw new Error("Method not implemented.")}raycast(t,e,n,o){throw new Error("Method not implemented.")}dispose(){const t=this._initializedBodies;for(let e=0;e<t.length;++e){const n=t[e],o=n._pluginData;o instanceof _&&(this.world.removeRigidBody(o,o.worldId),o.dispose(),n._pluginData=void 0);const i=n._pluginDataInstances;i instanceof A&&(this.world.removeRigidBodyBundle(i,i.info.worldId),i.dispose(),n._pluginDataInstances=[])}this._initializedBodies.length=0;const e=this._unInitializedBodies;for(let t=0;t<e.length;++t){const n=e[t],o=n._pluginData;o instanceof C&&(o.dispose(),n._pluginData=void 0);const i=n._pluginDataInstances;i instanceof x&&(i.dispose(),n._pluginDataInstances=[])}this._unInitializedBodies.length=0;const n=this._shapeMap;for(const[t,e]of n)t.dispose(),e._pluginData=void 0;n.clear(),this.world.dispose()}}class R{async build(t,e){const n=new m.Z(e);n.clearColor=new r.ov(.95,.95,.95,1);const w=new o.Lq("arcRotateCamera",0,0,500,new l.Pq(0,0,0),n);w.minZ=1,w.maxZ=1e3,w.setPosition(new l.Pq(60,40,-50)),w.attachControl(void 0,!1),w.inertia=.8,w.speed=10;const y=new a.g("hemisphericLight",new l.Pq(0,1,0),n);y.intensity=.5,y.specular=new r.v9(0,0,0),y.groundColor=new r.v9(1,1,1);const M=new i.Z("directionalLight",new l.Pq(.5,-1,1),n);M.intensity=.5;M.shadowMaxZ=60,M.shadowMinZ=-60,M.autoCalcShadowZBounds=!1,M.autoUpdateExtends=!1,M.shadowOrthoScale=0,M.orthoTop=60,M.orthoBottom=-60,M.orthoLeft=-60,M.orthoRight=60;const T=new s.o(2048,M,!0);T.transparencyShadow=!0,T.usePercentageCloserFiltering=!0,T.forceBackFacesOnly=!1,T.bias=.004,T.filteringQuality=s.o.QUALITY_MEDIUM;const D=await(0,h.e)(new g.t,2);n.enablePhysics(new l.Pq(0,-9.8,0),new P(D));{const t=(0,p.x)("ground",{size:120},n);t.rotationQuaternion=l.PT.RotationAxis(new l.Pq(1,0,0),Math.PI/2),T.addShadowCaster(t),t.receiveShadows=!0,t.position.y=0;const e=new f.cL(new l.Pq(0,0,0),l.PT.Identity(),new l.Pq(1e3,1e3,.1),n);e.material={friction:10,restitution:.5},e.filterCollideMask=65535,e.filterMembershipMask=1;const o=new u.a(t,d.AH.STATIC,!1,n);o.setMassProperties({mass:0}),o.setLinearDamping(.3),o.setAngularDamping(.3),o.shape=e}const _=(0,c.an)("box",{size:2},n);T.addShadowCaster(_),_.receiveShadows=!0,_.position.y=10;const I=new f.cL(new l.Pq(0,0,0),l.PT.Identity(),new l.Pq(2,2,2),n);I.material={friction:1,restitution:.5},I.filterCollideMask=65535,I.filterMembershipMask=2;const A=new u.a(_,d.AH.DYNAMIC,!1,n);return A.setMassProperties({mass:1}),A.setLinearDamping(.3),A.setAngularDamping(.3),A.shape=I,n}}}}]);