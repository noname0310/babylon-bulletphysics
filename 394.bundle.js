"use strict";(self.webpackChunkbabylon_bulletphysics=self.webpackChunkbabylon_bulletphysics||[]).push([[394],{394:(t,e,n)=>{n.r(e),n.d(e,{SceneBuilder:()=>P}),n(203),n(1503),n(8227),n(3108);var o=n(7456),i=n(5581),r=n(1513),s=n(9711),a=n(6041),l=n(9923),d=n(8144),p=n(3490),c=n(8014),h=n(825),u=n(554),m=n(6738),g=n(7002),f=n(1137),w=n(9848),M=n(5431),y=n(3948),T=n(1592);class D extends T.U{worldId;motionType;constructor(t,e){super(t,e),this.worldId=e.worldId,this.motionType=e.motionType}}var I=n(7648);class _ extends I.Y{info;constructor(t,e){super(t,e),this.info=e}setDamping(t,e,n){super.setDamping(t,e,n),this.info.setLinearDamping(t,e),this.info.setAngularDamping(t,n)}setMassProps(t,e,n){super.setMassProps(t,e,n),this.info.setMass(t,e),this.info.setLocalInertia(t,n)}get length(){return this.count}}var E=n(5901);class A extends E.t{worldId;constructor(t){super(t),this.worldId=0}}var b=n(3477);class v extends b.x{worldId;constructor(t,e){super(t,e),this.worldId=0}get length(){return this.count}}var C=n(6405);const B=new l.Pq;class x extends C.SA{localTransform;collisionGroup=1;collisionMask=65535;_material=null;constructor(t,e,n,o){super(t,o?.scaleToRef(.5,B)??B.setAll(.5)),this.localTransform=function(t,e,n){return!1===t?.equalsToFloats(0,0,0)||!1===e?.equalsToFloats(0,0,0,1)?(void 0!==e?(void 0===n&&(n=new l.uq),n=l.uq.FromQuaternionToRef(e,n),void 0!==t&&n.setTranslation(t)):void 0!==t?(void 0===n?n=l.uq.Identity():l.uq.IdentityToRef(n),n.setTranslation(t)):void 0===n?n=l.uq.Identity():l.uq.IdentityToRef(n),n):null}(e,n)}setMaterial(t,e){this._material={friction:t,restitution:e}}get material(){return this._material}}class L{worldId;constructor(){this.worldId=0}}class S{world;name="BulletPlugin";onCollisionObservable=new w.cP;onCollisionEndedObservable=new w.cP;onTriggerCollisionObservable=new w.cP;_initializedBodies=[];_unInitializedBodies=[];_shapeMap=new Map;commandContext=new L;constructor(t){this.world=new y.h(t)}setGravity(t){this.world.setGravity(t)}setTimeStep(t){this.world.timeStep=t}getTimeStep(){return this.world.timeStep}executeStep(t,e){{const t=this._unInitializedBodies;for(let e=0;e<t.length;++e){const n=t[e],o=n._pluginData;if(o){if(!(o instanceof A))throw new Error("Invalid body type.");{const i=new D(this.world,o);this.world.addRigidBody(i,o.worldId),this._initializedBodies.push(t[e]),n._pluginData=i}}const i=n._pluginDataInstances;if(!Array.isArray(i)){if(!(i instanceof v))throw new Error("Invalid body type.");{const o=new _(this.world,i);this.world.addRigidBodyBundle(o,i.worldId),this._initializedBodies.push(t[e]),n._pluginDataInstances=o}}}t.length=0}for(let t=0;t<e.length;++t){const n=e[t];n.disablePreStep||this.setPhysicsBodyTransformation(n,n.transformNode)}this.world.afterAnimations(t);for(let t=0;t<e.length;++t){const n=e[t];n.disableSync||this.sync(n)}}setPhysicsBodyTransformation(t,e){if(t.getPrestepType()===p.f9.TELEPORT){const n=t.transformNode,o=t._pluginData;o&&(o instanceof D?o.setTransformMatrix(this._getTransformInfos(e,S._TempMatrix)):o instanceof A&&o.setInitialTransform(this._getTransformInfos(e,S._TempMatrix)));const i=t._pluginDataInstances;if(!Array.isArray(i)){const t=n._thinInstanceDataStorage.matrixData;if(!t)return;if(i instanceof _)i.setTransformMatricesFromArray(t);else if(i instanceof v)for(let e=0;e<i.count;++e){const n=l.uq.FromArrayToRef(t,16*e,S._TempMatrix);i.setInitialTransform(e,n)}}}else t.getPrestepType()===p.f9.ACTION?this.setTargetTransform(t,e.absolutePosition,e.absoluteRotationQuaternion):t.getPrestepType()===p.f9.DISABLED?f.V.Warn("Prestep type is set to DISABLED. Unable to set physics body transformation."):f.V.Warn("Invalid prestep type set to physics body.")}getPluginVersion(){return 2}setVelocityLimits(t,e){throw new Error("Method not implemented.")}getMaxLinearVelocity(){throw new Error("Method not implemented.")}getMaxAngularVelocity(){throw new Error("Method not implemented.")}static _MotionTypeToBulletMotionType(t){switch(t){case p.AH.DYNAMIC:return 0;case p.AH.STATIC:return 1;case p.AH.ANIMATED:return 2;default:throw new Error("Invalid motion type")}}static _BulletMotionTypeToMotionType(t){switch(t){case 0:return p.AH.DYNAMIC;case 1:return p.AH.STATIC;case 2:return p.AH.ANIMATED;default:throw new Error("Invalid motion type")}}static _TempMatrix=new l.uq;initBody(t,e,n,o){const i=t._pluginData=new A(this.world.wasmInstance);i.motionType=S._MotionTypeToBulletMotionType(e);const r=l.uq.FromQuaternionToRef(o,S._TempMatrix);r.setTranslation(n),i.setInitialTransform(r),this._unInitializedBodies.push(t)}initBodyInstances(t,e,n){const o=n._thinInstanceDataStorage?.instancesCount??0,i=n._thinInstanceDataStorage.matrixData;if(!i)return;const r=new v(this.world.wasmInstance,o);t._pluginDataInstances=r;const s=S._MotionTypeToBulletMotionType(e);for(let t=0;t<o;++t){r.setMotionType(t,s);const e=l.uq.FromArrayToRef(i,16*t,S._TempMatrix);r.setInitialTransform(t,e)}this._unInitializedBodies.push(t)}updateBodyInstances(t,e){const n=e._thinInstanceDataStorage?.instancesCount??0,o=e._thinInstanceDataStorage.matrixData;if(!o)return;const i=t._pluginDataInstances,r=i.length,s=S._MotionTypeToBulletMotionType(this.getMotionType(t));if(n!==r&&i instanceof _){this.world.removeRigidBodyBundle(i,i.info.worldId);const t=i.info,e=new v(this.world.wasmInstance,n);{const o=Math.min(n,r);for(let n=0;n<o;++n)e.setShape(n,t.getShape(n)),e.setInitialTransform(n,i.getTransformMatrixToRef(n,S._TempMatrix)),e.setMotionType(n,t.getMotionType(n)),e.setMass(n,t.getMass(n)),e.setLocalInertia(n,t.getLocalInertiaToRef(n,l.AA.Vector3[0])),e.setLinearDamping(n,t.getLinearDamping(n)),e.setAngularDamping(n,t.getAngularDamping(n)),e.setFriction(n,t.getFriction(n)),e.setRestitution(n,t.getRestitution(n)),e.setLinearSleepingThreshold(n,t.getLinearSleepingThreshold(n)),e.setAngularSleepingThreshold(n,t.getAngularSleepingThreshold(n)),e.setCollisionGroup(n,t.getCollisionGroup(n)),e.setCollisionMask(n,t.getCollisionMask(n)),e.setAdditionalDamping(n,t.getAdditionalDamping(n)),e.setNoContactResponse(n,t.getNoContactResponse(n)),e.setDisableDeactivation(n,t.getDisableDeactivation(n))}for(let t=r;t<n;++t)e.setInitialTransform(t,l.uq.FromArrayToRef(o,16*t,S._TempMatrix)),e.setMotionType(t,s);const a=new _(this.world,e);this.world.addRigidBodyBundle(a,e.worldId)}}removeBody(t){let e=!1;const n=t._pluginData;n instanceof D&&(e=!0,this.world.removeRigidBody(n,n.worldId));const o=t._pluginDataInstances;if(o instanceof _&&(e=!0,this.world.removeRigidBodyBundle(o,o.info.worldId)),e){const e=this._initializedBodies.indexOf(t);-1!==e&&this._initializedBodies.splice(e,1)}else{const e=this._unInitializedBodies.indexOf(t);-1!==e&&this._unInitializedBodies.splice(e,1)}}sync(t){this.syncTransform(t,t.transformNode)}syncTransform(t,e){throw new Error("Method not implemented.")}setShape(t,e){const n=e?._pluginData??null,o=t._pluginData;if(o)if(o instanceof A)o.shape=n;else if(o instanceof D){if(null===n)throw new Error("Cannot set shape to null on a body that has already been initialized.");o.setShape(n)}const i=t._pluginDataInstances;if(!Array.isArray(i))if(i instanceof v)for(let t=0;t<i.count;++t)i.setShape(t,n);else if(i instanceof _){if(null===n)throw new Error("Cannot set shape to null on a body that has already been initialized.");for(let t=0;t<i.count;++t)i.setShape(t,n)}}getShape(t){const e=t._pluginData;if(e){if(e instanceof A)return null!==e.shape?this._shapeMap.get(e.shape)??null:null;if(e instanceof D)return this._shapeMap.get(e.getShape())??null}const n=t._pluginDataInstances;if(!Array.isArray(n)){if(n instanceof v){const t=n.getShape(0);return null!==t?this._shapeMap.get(t)??null:null}if(n instanceof _){const t=n.getShape(0);return this._shapeMap.get(t)??null}}throw new Error("Invalid body type.")}getShapeType(t){throw new Error("Method not implemented.")}setEventMask(t,e,n){throw new Error("Method not implemented.")}getEventMask(t,e){throw new Error("Method not implemented.")}setMotionType(t,e,n){const o=t._pluginData;if(o)if(o instanceof A)o.motionType=S._MotionTypeToBulletMotionType(e);else if(o instanceof D)throw new Error("Cannot set motion type on a body that has already been initialized.");const i=t._pluginDataInstances;if(!Array.isArray(i)){const t=n??0,o=void 0!==n?n+1:i.length;if(i instanceof v)for(let n=t;n<o;++n)i.setMotionType(n,S._MotionTypeToBulletMotionType(e));else if(i instanceof _)throw new Error("Cannot set motion type on a body that has already been initialized.")}}getMotionType(t,e){const n=t._pluginData;if(n){if(n instanceof A)return S._BulletMotionTypeToMotionType(n.motionType);if(n instanceof D)return S._BulletMotionTypeToMotionType(n.motionType)}const o=t._pluginDataInstances;if(!Array.isArray(o)){const t=e??0;if(o instanceof v)return S._BulletMotionTypeToMotionType(o.getMotionType(t));if(o instanceof _)return S._BulletMotionTypeToMotionType(o.info.getMotionType(t))}throw new Error("Invalid body type.")}computeMassProperties(t,e){throw new Error("Method not implemented.")}setMassProperties(t,e,n){void 0!==e.inertiaOrientation&&f.V.Warn("Inertia orientation is not supported in bullet."),void 0!==e.centerOfMass&&f.V.Warn("Center of mass is not supported in bullet.");const o=t._pluginData;if(o)if(o instanceof A)void 0!==e.mass&&(o.mass=e.mass),void 0!==e.inertia&&(o.localInertia=e.inertia);else if(o instanceof D){const t=e.mass??o.getMass(),n=e.inertia??o.getLocalInertia();o.setMassProps(t,n)}const i=t._pluginDataInstances;if(!Array.isArray(i)){const t=n??0,i=void 0!==n?n+1:o.count;if(o instanceof v)for(let n=t;n<i;++n)void 0!==e.mass&&o.setMass(n,e.mass),void 0!==e.inertia&&o.setLocalInertia(n,e.inertia);else if(o instanceof _)for(let n=t;n<i;++n)o.setMassProps(n,e.mass??o.getMass(n),e.inertia??o.getLocalInertia(n))}}getMassProperties(t,e){const n=t._pluginData;if(n){if(n instanceof A)return{mass:n.mass,inertia:n.localInertia??void 0};if(n instanceof D)return{mass:n.getMass(),inertia:n.getLocalInertia()}}const o=t._pluginDataInstances;if(!Array.isArray(o)){const t=e??0;if(o instanceof v)return{mass:o.getMass(t),inertia:o.getLocalInertiaToRef(t,new l.Pq)??void 0};if(o instanceof _)return{mass:o.getMass(t),inertia:o.getLocalInertia(t)}}throw new Error("Invalid body type.")}setLinearDamping(t,e,n){const o=t._pluginData;o&&(o instanceof A?o.linearDamping=e:o instanceof D&&o.setDamping(e,o.getAngularDamping()));const i=t._pluginDataInstances;if(!Array.isArray(i)){const t=n??0,o=void 0!==n?n+1:i.length;if(i instanceof v)for(let n=t;n<o;++n)i.setLinearDamping(n,e);else if(i instanceof _)for(let n=t;n<o;++n)i.setDamping(n,e,i.getAngularDamping(n))}}getLinearDamping(t,e){const n=t._pluginData;if(n){if(n instanceof A)return n.linearDamping;if(n instanceof D)return n.getLinearDamping()}const o=t._pluginDataInstances;if(!Array.isArray(o)){const t=e??0;if(o instanceof v)return o.getLinearDamping(t);if(o instanceof _)return o.getLinearDamping(t)}throw new Error("Invalid body type.")}setAngularDamping(t,e,n){const o=t._pluginData;o&&(o instanceof A?o.angularDamping=e:o instanceof D&&o.setDamping(o.getLinearDamping(),e));const i=t._pluginDataInstances;if(!Array.isArray(i)){const t=n??0,o=void 0!==n?n+1:i.length;if(i instanceof v)for(let n=t;n<o;++n)i.setAngularDamping(n,e);else if(i instanceof _)for(let n=t;n<o;++n)i.setDamping(n,i.getLinearDamping(n),e)}}getAngularDamping(t,e){const n=t._pluginData;if(n){if(n instanceof A)return n.angularDamping;if(n instanceof D)return n.getAngularDamping()}const o=t._pluginDataInstances;if(!Array.isArray(o)){const t=e??0;if(o instanceof v)return o.getAngularDamping(t);if(o instanceof _)return o.getAngularDamping(t)}throw new Error("Invalid body type.")}setLinearVelocity(t,e,n){throw new Error("Method not implemented.")}getLinearVelocityToRef(t,e,n){throw new Error("Method not implemented.")}applyImpulse(t,e,n,o){throw new Error("Method not implemented.")}applyAngularImpulse(t,e,n){throw new Error("Method not implemented.")}applyForce(t,e,n,o){throw new Error("Method not implemented.")}setAngularVelocity(t,e,n){throw new Error("Method not implemented.")}getAngularVelocityToRef(t,e,n){throw new Error("Method not implemented.")}getBodyGeometry(t){throw new Error("Method not implemented.")}disposeBody(t){t._pluginData&&(t._pluginData.dispose(),t._pluginData=void 0),(t._pluginDataInstances instanceof _||t._pluginDataInstances instanceof v)&&(t._pluginDataInstances.dispose(),t._pluginDataInstances=[])}setCollisionCallbackEnabled(t,e,n){throw new Error("Method not implemented.")}setCollisionEndedCallbackEnabled(t,e,n){throw new Error("Method not implemented.")}addConstraint(t,e,n,o,i){throw new Error("Method not implemented.")}getCollisionObservable(t,e){throw new Error("Method not implemented.")}getCollisionEndedObservable(t,e){throw new Error("Method not implemented.")}setGravityFactor(t,e,n){throw new Error("Method not implemented.")}getGravityFactor(t,e){throw new Error("Method not implemented.")}setTargetTransform(t,e,n,o){const i=l.uq.FromQuaternionToRef(n,S._TempMatrix);i.setTranslation(e);const r=t._pluginData;r&&(r instanceof A?r.setInitialTransform(i):r instanceof D&&r.setDynamicTransformMatrix(i,!0));const s=t._pluginDataInstances;if(!Array.isArray(s)){const t=o??0,e=void 0!==o?o+1:s.length;if(s instanceof v)for(let n=t;n<e;++n)s.setInitialTransform(n,i);else if(s instanceof _)for(let n=t;n<e;++n)s.setDynamicTransformMatrix(n,i,!0)}}initShape(t,e,n){let o=null;switch(e){case p.DK.SPHERE:throw new Error("Sphere shape not supported.");case p.DK.BOX:o=new x(this.world,n.center,n.rotation,n.extents);break;case p.DK.CAPSULE:throw new Error("Capsule shape not supported.");case p.DK.CONTAINER:throw new Error("Container shape not supported.");case p.DK.CYLINDER:throw new Error("Cylinder shape not supported.");case p.DK.CONVEX_HULL:case p.DK.MESH:throw new Error("Convex hull and mesh shapes not supported.");case p.DK.HEIGHTFIELD:throw new Error("Heightfield shape not supported.");default:throw new Error("Unsupported Shape Type.")}t._pluginData=o,this._shapeMap.set(o,t)}setShapeFilterMembershipMask(t,e){t._pluginData.collisionGroup=e}getShapeFilterMembershipMask(t){return t._pluginData.collisionGroup}setShapeFilterCollideMask(t,e){t._pluginData.collisionMask=e}getShapeFilterCollideMask(t){return t._pluginData.collisionMask}setMaterial(t,e){const n=e.friction??.5;e.staticFriction&&f.V.Warn("Static friction is not supported in bullet.");const o=e.restitution??0;e.frictionCombine&&e.frictionCombine!==M.F.MULTIPLY&&f.V.Warn("Friction combine is fixed to MULTIPLY in bullet."),e.restitutionCombine&&e.restitutionCombine!==M.F.MULTIPLY&&f.V.Warn("Restitution combine is fixed to MULTIPLY in bullet."),t._pluginData.setMaterial(n,o)}getMaterial(t){throw new Error("Method not implemented.")}setDensity(t,e){throw new Error("Method not implemented.")}getDensity(t){throw new Error("Method not implemented.")}_getTransformInfos(t,e){if(t.parent){const n=t.computeWorldMatrix(!0);return e.copyFrom(n)}let n=l.AA.Quaternion[0];if(t.rotationQuaternion)n=t.rotationQuaternion;else{const e=t.rotation;l.PT.FromEulerAnglesToRef(e.x,e.y,e.z,n)}return l.uq.FromQuaternionToRef(n,e),e.setTranslation(t.position),e}addChild(t,e,n,o,i){throw new Error("Method not implemented.")}removeChild(t,e){throw new Error("Method not implemented.")}getNumChildren(t){throw new Error("Method not implemented.")}getBoundingBox(t){throw new Error("Method not implemented.")}getBodyBoundingBox(t){throw new Error("Method not implemented.")}disposeShape(t){const e=t._pluginData;this._shapeMap.delete(e),e.dispose(),t._pluginData=void 0}setTrigger(t,e){throw new Error("Method not implemented.")}initConstraint(t,e,n){throw new Error("Method not implemented.")}setEnabled(t,e){throw new Error("Method not implemented.")}getEnabled(t){throw new Error("Method not implemented.")}setCollisionsEnabled(t,e){throw new Error("Method not implemented.")}getCollisionsEnabled(t){throw new Error("Method not implemented.")}setAxisFriction(t,e,n){throw new Error("Method not implemented.")}getAxisFriction(t,e){throw new Error("Method not implemented.")}setAxisMode(t,e,n){throw new Error("Method not implemented.")}getAxisMode(t,e){throw new Error("Method not implemented.")}setAxisMinLimit(t,e,n){throw new Error("Method not implemented.")}getAxisMinLimit(t,e){throw new Error("Method not implemented.")}setAxisMaxLimit(t,e,n){throw new Error("Method not implemented.")}getAxisMaxLimit(t,e){throw new Error("Method not implemented.")}setAxisMotorType(t,e,n){throw new Error("Method not implemented.")}getAxisMotorType(t,e){throw new Error("Method not implemented.")}setAxisMotorTarget(t,e,n){throw new Error("Method not implemented.")}getAxisMotorTarget(t,e){throw new Error("Method not implemented.")}setAxisMotorMaxForce(t,e,n){throw new Error("Method not implemented.")}getAxisMotorMaxForce(t,e){throw new Error("Method not implemented.")}disposeConstraint(t){throw new Error("Method not implemented.")}getBodiesUsingConstraint(t){throw new Error("Method not implemented.")}raycast(t,e,n,o){throw new Error("Method not implemented.")}dispose(){const t=this._initializedBodies;for(let e=0;e<t.length;++e){const n=t[e],o=n._pluginData;o instanceof D&&(this.world.removeRigidBody(o,o.worldId),o.dispose(),n._pluginData=void 0);const i=n._pluginDataInstances;i instanceof _&&(this.world.removeRigidBodyBundle(i,i.info.worldId),i.dispose(),n._pluginDataInstances=[])}this._initializedBodies.length=0;const e=this._unInitializedBodies;for(let t=0;t<e.length;++t){const n=e[t],o=n._pluginData;o instanceof A&&(o.dispose(),n._pluginData=void 0);const i=n._pluginDataInstances;i instanceof v&&(i.dispose(),n._pluginDataInstances=[])}this._unInitializedBodies.length=0;const n=this._shapeMap;for(const[t,e]of n)t.dispose(),e._pluginData=void 0;n.clear(),this.world.dispose()}}class P{async build(t,e){const n=new u.Z(e);n.clearColor=new a.ov(.95,.95,.95,1);const f=new o.Lq("arcRotateCamera",0,0,500,new l.Pq(0,0,0),n);f.minZ=1,f.maxZ=1e3,f.setPosition(new l.Pq(60,40,-50)),f.attachControl(void 0,!1),f.inertia=.8,f.speed=10;const w=new r.g("hemisphericLight",new l.Pq(0,1,0),n);w.intensity=.5,w.specular=new a.v9(0,0,0),w.groundColor=new a.v9(1,1,1);const M=new i.Z("directionalLight",new l.Pq(.5,-1,1),n);M.intensity=.5;M.shadowMaxZ=60,M.shadowMinZ=-60,M.autoCalcShadowZBounds=!1,M.autoUpdateExtends=!1,M.shadowOrthoScale=0,M.orthoTop=60,M.orthoBottom=-60,M.orthoLeft=-60,M.orthoRight=60;const y=new s.o(2048,M,!0);y.transparencyShadow=!0,y.usePercentageCloserFiltering=!0,y.forceBackFacesOnly=!1,y.bias=.004,y.filteringQuality=s.o.QUALITY_MEDIUM;const T=await(0,m.e)(new g.t,2);n.enablePhysics(new l.Pq(0,-9.8,0),new S(T));{const t=(0,d.x)("ground",{size:120},n);t.rotationQuaternion=l.PT.RotationAxis(new l.Pq(1,0,0),Math.PI/2),y.addShadowCaster(t),t.receiveShadows=!0;const e=new h.cL(new l.Pq(0,0,-100),l.PT.Identity(),new l.Pq(1e3,1e3,200),n);e.material={friction:10,restitution:.5},e.filterCollideMask=65535,e.filterMembershipMask=1;const o=new c.a(t,p.AH.STATIC,!1,n);o.setMassProperties({mass:0}),o.setLinearDamping(.3),o.setAngularDamping(.3),o.computeMassProperties(),o.shape=e}return n}}}}]);