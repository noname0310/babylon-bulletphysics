"use strict";(self.webpackChunkbabylon_bulletphysics=self.webpackChunkbabylon_bulletphysics||[]).push([[394],{394:(e,t,n)=>{n.r(t),n.d(t,{SceneBuilder:()=>S}),n(203),n(1503),n(8227),n(3108);var o=n(7456),i=n(5581),r=n(1513),s=n(9711),a=n(6041),l=n(9923),d=n(8144),p=n(3490),c=n(8014),h=n(825),m=n(554),w=n(6738),g=n(7002),u=n(1137),f=n(9848),M=n(5431),T=n(3948),D=n(1592);class E extends D.U{worldId;constructor(e,t){super(e,t),this.worldId=t.worldId}}var y=n(7648);class I extends y.Y{info;constructor(e,t){super(e,t),this.info=t}setDamping(e,t,n){super.setDamping(e,t,n),this.info.setLinearDamping(e,t),this.info.setAngularDamping(e,n)}setMassProps(e,t,n){super.setMassProps(e,t,n),this.info.setMass(e,t),this.info.setLocalInertia(e,n)}get length(){return this.count}}var _=n(5901);class A extends _.t{worldId;constructor(e){super(e),this.worldId=0}}var x=n(3477);class b extends x.x{worldId;constructor(e,t){super(e,t),this.worldId=0}get length(){return this.count}}var C=n(6405);const v=new l.Pq;class L extends C.SA{localTransform;collisionGroup=1;collisionMask=65535;_material=null;constructor(e,t,n,o){super(e,o?.scaleToRef(.5,v)??v.setAll(.5)),this.localTransform=function(e,t,n){return!1===e?.equalsToFloats(0,0,0)||!1===t?.equalsToFloats(0,0,0,1)?(void 0!==t?(void 0===n&&(n=new l.uq),n=l.uq.FromQuaternionToRef(t,n),void 0!==e&&n.setTranslation(e)):void 0!==e?(void 0===n?n=l.uq.Identity():l.uq.IdentityToRef(n),n.setTranslation(e)):void 0===n?n=l.uq.Identity():l.uq.IdentityToRef(n),n):null}(t,n)}setMaterial(e,t){this._material={friction:e,restitution:t}}get material(){return this._material}}class B{worldId;constructor(){this.worldId=0}}class P{world;name="BulletPlugin";onCollisionObservable=new f.cP;onCollisionEndedObservable=new f.cP;onTriggerCollisionObservable=new f.cP;_initializedBodies=[];_unInitializedBodies=[];commandContext=new B;constructor(e){this.world=new T.h(e)}setGravity(e){this.world.setGravity(e)}setTimeStep(e){this.world.timeStep=e}getTimeStep(){return this.world.timeStep}executeStep(e,t){{const e=this._unInitializedBodies;for(let t=0;t<e.length;++t){const n=e[t],o=n._pluginData;if(o){if(!(o instanceof A))throw new Error("Invalid body type.");{const i=new E(this.world,o);this.world.addRigidBody(i,o.worldId),this._initializedBodies.push(e[t]),n._pluginData=i}}const i=n._pluginDataInstances;if(i){if(!(i instanceof b))throw new Error("Invalid body type.");{const o=new I(this.world,i);this.world.addRigidBodyBundle(o,i.worldId),this._initializedBodies.push(e[t]),n._pluginDataInstances=o}}}e.length=0}for(let e=0;e<t.length;++e){const n=t[e];n.disablePreStep||this.setPhysicsBodyTransformation(n,n.transformNode)}this.world.afterAnimations(e);for(let e=0;e<t.length;++e){const n=t[e];n.disableSync||this.sync(n)}}setPhysicsBodyTransformation(e,t){if(e.getPrestepType()===p.f9.TELEPORT){const n=e.transformNode,o=e._pluginData;o&&(o instanceof E?o.setTransformMatrix(this._getTransformInfos(t,P._TempMatrix)):o instanceof A&&o.setInitialTransform(this._getTransformInfos(t,P._TempMatrix)));const i=e._pluginDataInstances;if(i){const e=n._thinInstanceDataStorage.matrixData;if(!e)return;if(i instanceof I)i.setTransformMatricesFromArray(e);else if(i instanceof b)for(let t=0;t<i.count;++t){const n=l.uq.FromArrayToRef(e,16*t,P._TempMatrix);i.setInitialTransform(t,n)}}}else e.getPrestepType()===p.f9.ACTION?this.setTargetTransform(e,t.absolutePosition,t.absoluteRotationQuaternion):e.getPrestepType()===p.f9.DISABLED?u.V.Warn("Prestep type is set to DISABLED. Unable to set physics body transformation."):u.V.Warn("Invalid prestep type set to physics body.")}getPluginVersion(){return 2}setVelocityLimits(e,t){throw new Error("Method not implemented.")}getMaxLinearVelocity(){throw new Error("Method not implemented.")}getMaxAngularVelocity(){throw new Error("Method not implemented.")}static _MotionTypeToBullet(e){switch(e){case p.AH.DYNAMIC:return 0;case p.AH.STATIC:return 1;case p.AH.ANIMATED:return 2;default:throw new Error("Invalid motion type")}}static _TempMatrix=new l.uq;initBody(e,t,n,o){const i=e._pluginData=new A(this.world.wasmInstance);i.motionType=P._MotionTypeToBullet(t);const r=l.uq.FromQuaternionToRef(o,P._TempMatrix);r.setTranslation(n),i.setInitialTransform(r),this._unInitializedBodies.push(e)}initBodyInstances(e,t,n){const o=n._thinInstanceDataStorage?.instancesCount??0,i=n._thinInstanceDataStorage.matrixData;if(!i)return;const r=new b(this.world.wasmInstance,o);e._pluginDataInstances=r;const s=P._MotionTypeToBullet(t);for(let e=0;e<o;++e){r.setMotionType(e,s);const t=l.uq.FromArrayToRef(i,16*e,P._TempMatrix);r.setInitialTransform(e,t)}this._unInitializedBodies.push(e)}updateBodyInstances(e,t){const n=t._thinInstanceDataStorage?.instancesCount??0,o=t._thinInstanceDataStorage.matrixData;if(!o)return;const i=e._pluginDataInstances,r=i.length,s=P._MotionTypeToBullet(this.getMotionType(e));if(n!==r&&i instanceof I){this.world.removeRigidBodyBundle(i,i.info.worldId);const e=i.info,t=new b(this.world.wasmInstance,n);{const o=Math.min(n,r);for(let n=0;n<o;++n)t.setShape(n,e.getShape(n)),t.setInitialTransform(n,i.getTransformMatrixToRef(n,P._TempMatrix)),t.setMotionType(n,e.getMotionType(n)),t.setMass(n,e.getMass(n)),t.setLocalInertia(n,e.getLocalInertiaToRef(n,l.AA.Vector3[0])),t.setLinearDamping(n,e.getLinearDamping(n)),t.setAngularDamping(n,e.getAngularDamping(n)),t.setFriction(n,e.getFriction(n)),t.setRestitution(n,e.getRestitution(n)),t.setLinearSleepingThreshold(n,e.getLinearSleepingThreshold(n)),t.setAngularSleepingThreshold(n,e.getAngularSleepingThreshold(n)),t.setCollisionGroup(n,e.getCollisionGroup(n)),t.setCollisionMask(n,e.getCollisionMask(n)),t.setAdditionalDamping(n,e.getAdditionalDamping(n)),t.setNoContactResponse(n,e.getNoContactResponse(n)),t.setDisableDeactivation(n,e.getDisableDeactivation(n))}for(let e=r;e<n;++e)t.setInitialTransform(e,l.uq.FromArrayToRef(o,16*e,P._TempMatrix)),t.setMotionType(e,s);const a=new I(this.world,t);this.world.addRigidBodyBundle(a,t.worldId)}}removeBody(e){let t=!1;const n=e._pluginData;n&&n instanceof E&&(t=!0,this.world.removeRigidBody(n,n.worldId));const o=e._pluginDataInstances;if(o&&o instanceof I&&(t=!0,this.world.removeRigidBodyBundle(o,o.info.worldId)),t){const t=this._initializedBodies.indexOf(e);-1!==t&&this._initializedBodies.splice(t,1)}else{const t=this._unInitializedBodies.indexOf(e);-1!==t&&this._unInitializedBodies.splice(t,1)}}sync(e){throw new Error("Method not implemented.")}syncTransform(e,t){throw new Error("Method not implemented.")}setShape(e,t){const n=t?._pluginData??null,o=e._pluginData;o&&o instanceof A&&(o.shape=n);const i=e._pluginDataInstances;if(i&&i instanceof b)for(let e=0;e<i.count;++e)i.setShape(e,n)}getShape(e){throw new Error("Method not implemented.")}getShapeType(e){throw new Error("Method not implemented.")}setEventMask(e,t,n){throw new Error("Method not implemented.")}getEventMask(e,t){throw new Error("Method not implemented.")}setMotionType(e,t,n){throw new Error("Method not implemented.")}getMotionType(e,t){throw new Error("Method not implemented.")}computeMassProperties(e,t){throw new Error("Method not implemented.")}setMassProperties(e,t,n){void 0!==t.inertiaOrientation&&u.V.Warn("Inertia orientation is not supported in bullet."),void 0!==t.centerOfMass&&u.V.Warn("Center of mass is not supported in bullet.");const o=e._pluginData;if(o)if(o instanceof A)void 0!==t.mass&&(o.mass=t.mass),void 0!==t.inertia&&(o.localInertia=t.inertia);else if(o instanceof E){const e=t.mass??o.getMass(),n=t.inertia??o.getLocalInertia();o.setMassProps(e,n)}if(e._pluginDataInstances){const e=n??0,i=void 0!==n?n+1:o.count;if(o instanceof b)for(let n=e;n<i;++n)void 0!==t.mass&&o.setMass(n,t.mass),void 0!==t.inertia&&o.setLocalInertia(n,t.inertia);else if(o instanceof I)for(let n=e;n<i;++n)o.setMassProps(n,t.mass??o.getMass(n),t.inertia??o.getLocalInertia(n))}}getMassProperties(e,t){const n=e._pluginData;if(n){if(n instanceof A)return{mass:n.mass,inertia:n.localInertia??void 0};if(n instanceof E)return{mass:n.getMass(),inertia:n.getLocalInertia()}}const o=e._pluginDataInstances;if(o){const e=t??0;if(o instanceof b)return{mass:o.getMass(e),inertia:o.getLocalInertiaToRef(e,new l.Pq)??void 0};if(o instanceof I)return{mass:o.getMass(e),inertia:o.getLocalInertia(e)}}throw new Error("Invalid body type.")}setLinearDamping(e,t,n){const o=e._pluginData;o&&(o instanceof A?o.linearDamping=t:o instanceof E&&o.setDamping(t,o.getAngularDamping()));const i=e._pluginDataInstances;if(i){const e=n??0,o=void 0!==n?n+1:i.length;if(i instanceof b)for(let n=e;n<o;++n)i.setLinearDamping(n,t);else if(i instanceof I)for(let n=e;n<o;++n)i.setDamping(n,t,i.getAngularDamping(n))}}getLinearDamping(e,t){const n=e._pluginData;if(n){if(n instanceof A)return n.linearDamping;if(n instanceof E)return n.getLinearDamping()}const o=e._pluginDataInstances;if(o){const e=t??0;if(o instanceof b)return o.getLinearDamping(e);if(o instanceof I)return o.getLinearDamping(e)}throw new Error("Invalid body type.")}setAngularDamping(e,t,n){const o=e._pluginData;o&&(o instanceof A?o.angularDamping=t:o instanceof E&&o.setDamping(o.getLinearDamping(),t));const i=e._pluginDataInstances;if(i){const e=n??0,o=void 0!==n?n+1:i.length;if(i instanceof b)for(let n=e;n<o;++n)i.setAngularDamping(n,t);else if(i instanceof I)for(let n=e;n<o;++n)i.setDamping(n,i.getLinearDamping(n),t)}}getAngularDamping(e,t){const n=e._pluginData;if(n){if(n instanceof A)return n.angularDamping;if(n instanceof E)return n.getAngularDamping()}const o=e._pluginDataInstances;if(o){const e=t??0;if(o instanceof b)return o.getAngularDamping(e);if(o instanceof I)return o.getAngularDamping(e)}throw new Error("Invalid body type.")}setLinearVelocity(e,t,n){throw new Error("Method not implemented.")}getLinearVelocityToRef(e,t,n){throw new Error("Method not implemented.")}applyImpulse(e,t,n,o){throw new Error("Method not implemented.")}applyAngularImpulse(e,t,n){throw new Error("Method not implemented.")}applyForce(e,t,n,o){throw new Error("Method not implemented.")}setAngularVelocity(e,t,n){throw new Error("Method not implemented.")}getAngularVelocityToRef(e,t,n){throw new Error("Method not implemented.")}getBodyGeometry(e){throw new Error("Method not implemented.")}disposeBody(e){throw new Error("Method not implemented.")}setCollisionCallbackEnabled(e,t,n){throw new Error("Method not implemented.")}setCollisionEndedCallbackEnabled(e,t,n){throw new Error("Method not implemented.")}addConstraint(e,t,n,o,i){throw new Error("Method not implemented.")}getCollisionObservable(e,t){throw new Error("Method not implemented.")}getCollisionEndedObservable(e,t){throw new Error("Method not implemented.")}setGravityFactor(e,t,n){throw new Error("Method not implemented.")}getGravityFactor(e,t){throw new Error("Method not implemented.")}setTargetTransform(e,t,n,o){const i=l.uq.FromQuaternionToRef(n,P._TempMatrix);i.setTranslation(t);const r=e._pluginData;r&&(r instanceof A?r.setInitialTransform(i):r instanceof E&&r.setDynamicTransformMatrix(i,!0));const s=e._pluginDataInstances;if(s){const e=o??0,t=void 0!==o?o+1:s.length;if(s instanceof b)for(let n=e;n<t;++n)s.setInitialTransform(n,i);else if(s instanceof I)for(let n=e;n<t;++n)s.setDynamicTransformMatrix(n,i,!0)}}initShape(e,t,n){switch(t){case p.DK.SPHERE:throw new Error("Sphere shape not supported.");case p.DK.BOX:e._pluginData=new L(this.world,n.center,n.rotation,n.extents);break;case p.DK.CAPSULE:throw new Error("Capsule shape not supported.");case p.DK.CONTAINER:throw new Error("Container shape not supported.");case p.DK.CYLINDER:throw new Error("Cylinder shape not supported.");case p.DK.CONVEX_HULL:case p.DK.MESH:throw new Error("Convex hull and mesh shapes not supported.");case p.DK.HEIGHTFIELD:throw new Error("Heightfield shape not supported.");default:throw new Error("Unsupported Shape Type.")}}setShapeFilterMembershipMask(e,t){e._pluginData.collisionGroup=t}getShapeFilterMembershipMask(e){return e._pluginData.collisionGroup}setShapeFilterCollideMask(e,t){e._pluginData.collisionMask=t}getShapeFilterCollideMask(e){return e._pluginData.collisionMask}setMaterial(e,t){const n=t.friction??.5;t.staticFriction&&u.V.Warn("Static friction is not supported in bullet.");const o=t.restitution??0;t.frictionCombine&&t.frictionCombine!==M.F.MULTIPLY&&u.V.Warn("Friction combine is fixed to MULTIPLY in bullet."),t.restitutionCombine&&t.restitutionCombine!==M.F.MULTIPLY&&u.V.Warn("Restitution combine is fixed to MULTIPLY in bullet."),e._pluginData.setMaterial(n,o)}getMaterial(e){throw new Error("Method not implemented.")}setDensity(e,t){throw new Error("Method not implemented.")}getDensity(e){throw new Error("Method not implemented.")}_getTransformInfos(e,t){if(e.parent){const n=e.computeWorldMatrix(!0);return t.copyFrom(n)}let n=l.AA.Quaternion[0];if(e.rotationQuaternion)n=e.rotationQuaternion;else{const t=e.rotation;l.PT.FromEulerAnglesToRef(t.x,t.y,t.z,n)}return l.uq.FromQuaternionToRef(n,t),t.setTranslation(e.position),t}addChild(e,t,n,o,i){throw new Error("Method not implemented.")}removeChild(e,t){throw new Error("Method not implemented.")}getNumChildren(e){throw new Error("Method not implemented.")}getBoundingBox(e){throw new Error("Method not implemented.")}getBodyBoundingBox(e){throw new Error("Method not implemented.")}disposeShape(e){throw new Error("Method not implemented.")}setTrigger(e,t){throw new Error("Method not implemented.")}initConstraint(e,t,n){throw new Error("Method not implemented.")}setEnabled(e,t){throw new Error("Method not implemented.")}getEnabled(e){throw new Error("Method not implemented.")}setCollisionsEnabled(e,t){throw new Error("Method not implemented.")}getCollisionsEnabled(e){throw new Error("Method not implemented.")}setAxisFriction(e,t,n){throw new Error("Method not implemented.")}getAxisFriction(e,t){throw new Error("Method not implemented.")}setAxisMode(e,t,n){throw new Error("Method not implemented.")}getAxisMode(e,t){throw new Error("Method not implemented.")}setAxisMinLimit(e,t,n){throw new Error("Method not implemented.")}getAxisMinLimit(e,t){throw new Error("Method not implemented.")}setAxisMaxLimit(e,t,n){throw new Error("Method not implemented.")}getAxisMaxLimit(e,t){throw new Error("Method not implemented.")}setAxisMotorType(e,t,n){throw new Error("Method not implemented.")}getAxisMotorType(e,t){throw new Error("Method not implemented.")}setAxisMotorTarget(e,t,n){throw new Error("Method not implemented.")}getAxisMotorTarget(e,t){throw new Error("Method not implemented.")}setAxisMotorMaxForce(e,t,n){throw new Error("Method not implemented.")}getAxisMotorMaxForce(e,t){throw new Error("Method not implemented.")}disposeConstraint(e){throw new Error("Method not implemented.")}getBodiesUsingConstraint(e){throw new Error("Method not implemented.")}raycast(e,t,n,o){throw new Error("Method not implemented.")}dispose(){throw new Error("Method not implemented.")}}class S{async build(e,t){const n=new m.Z(t);n.clearColor=new a.ov(.95,.95,.95,1);const u=new o.Lq("arcRotateCamera",0,0,500,new l.Pq(0,0,0),n);u.minZ=1,u.maxZ=1e3,u.setPosition(new l.Pq(60,40,-50)),u.attachControl(void 0,!1),u.inertia=.8,u.speed=10;const f=new r.g("hemisphericLight",new l.Pq(0,1,0),n);f.intensity=.5,f.specular=new a.v9(0,0,0),f.groundColor=new a.v9(1,1,1);const M=new i.Z("directionalLight",new l.Pq(.5,-1,1),n);M.intensity=.5;M.shadowMaxZ=60,M.shadowMinZ=-60,M.autoCalcShadowZBounds=!1,M.autoUpdateExtends=!1,M.shadowOrthoScale=0,M.orthoTop=60,M.orthoBottom=-60,M.orthoLeft=-60,M.orthoRight=60;const T=new s.o(2048,M,!0);T.transparencyShadow=!0,T.usePercentageCloserFiltering=!0,T.forceBackFacesOnly=!1,T.bias=.004,T.filteringQuality=s.o.QUALITY_MEDIUM;const D=await(0,w.e)(new g.t,2);n.enablePhysics(new l.Pq(0,-9.8,0),new P(D));{const e=(0,d.x)("ground",{size:120},n);e.rotationQuaternion=l.PT.RotationAxis(new l.Pq(1,0,0),Math.PI/2),T.addShadowCaster(e),e.receiveShadows=!0;const t=new h.cL(new l.Pq(0,0,-100),l.PT.Identity(),new l.Pq(1e3,1e3,200),n);t.material={friction:10,restitution:.5},t.filterCollideMask=65535,t.filterMembershipMask=1;const o=new c.a(e,p.AH.STATIC,!1,n);o.setMassProperties({mass:0}),o.setLinearDamping(.3),o.setAngularDamping(.3),o.computeMassProperties(),o.shape=t}return n}}}}]);