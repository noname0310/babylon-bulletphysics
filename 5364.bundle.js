"use strict";(self.webpackChunkbabylon_bulletphysics=self.webpackChunkbabylon_bulletphysics||[]).push([[5364],{55364:(e,t,n)=>{n.r(t),n.d(t,{SceneBuilder:()=>g}),n(90203),n(33832),n(2093);var o=n(7839),r=n(52046),s=n(71513),a=n(18595),i=n(26041),l=n(79923),c=n(96793),d=n(58144),w=n(87491),u=n(67774),f=n(89800);class g{async build(e,t){const n=new w.Z(t);n.clearColor=new i.ov(.95,.95,.95,1);const g=new o.L("arcRotateCamera",0,0,500,new l.Pq(0,0,0),n);g.minZ=1,g.maxZ=3e3,g.setPosition(new l.Pq(60,40,-50).scaleInPlace(10)),g.attachControl(void 0,!1),g.inertia=.8,g.speed=10;const h=new s.g("hemisphericLight",new l.Pq(0,1,0),n);h.intensity=.5,h.specular=new i.v9(0,0,0),h.groundColor=new i.v9(1,1,1);const p=new r.Z("directionalLight",new l.Pq(.5,-1,1),n);p.intensity=.5;p.shadowMaxZ=250,p.shadowMinZ=-250,p.autoCalcShadowZBounds=!1,p.autoUpdateExtends=!1,p.shadowOrthoScale=0,p.orthoTop=250,p.orthoBottom=-250,p.orthoLeft=-250,p.orthoRight=250;const m=new a.o(2048,p,!0);m.transparencyShadow=!0,m.usePercentageCloserFiltering=!0,m.forceBackFacesOnly=!1,m.bias=.004,m.filteringQuality=a.o.QUALITY_MEDIUM;const y=await(0,u.A)(),b=[];for(let e=0;e<32;++e){const e=new y.btDefaultCollisionConfiguration,t=new y.btCollisionDispatcher(e),n=new y.btDbvtBroadphase,o=new y.btSequentialImpulseConstraintSolver,r=new y.btDiscreteDynamicsWorld(t,n,o,e);r.setGravity(new y.btVector3(0,-10,0)),b.push(r)}const S=new l.uq;{const e=(0,d.x)("ground",{size:500},n);e.rotationQuaternion=l.PT.RotationAxis(new l.Pq(1,0,0),Math.PI/2),m.addShadowCaster(e),e.receiveShadows=!0;const t=new y.btVector3(0,0,-1),o=new y.btStaticPlaneShape(t,0);y.destroy(t);const r=new y.btDefaultMotionState,s=new y.btRigidBodyConstructionInfo(0,r,o);l.uq.FromQuaternionToRef(e.rotationQuaternion,S);const a=new y.btTransform;a.setFromOpenGLMatrix(S.asArray()),r.setWorldTransform(a),y.destroy(a);for(let e=0;e<b.length;++e){const t=new y.btRigidBody(s);t.setDamping(0,0),t.setFriction(.5),t.setRestitution(0),t.setSleepingThresholds(0,1),t.setCollisionFlags(2|t.getCollisionFlags()),b[e].addRigidBody(t)}y.destroy(s)}const T=512,C=(0,c.an)("box",{size:2},n);m.addShadowCaster(C),C.receiveShadows=!0;const x=new Float32Array(262144);C.thinInstanceSetBuffer("matrix",x,16,!1);const L=new y.btVector3(1,1,1),R=new y.btBoxShape(L);y.destroy(L);const B=[];for(let e=0;e<4;++e)for(let t=0;t<8;++t){const n=8*e+t,o=60*(t-4)+30,r=60*(e-2)+30,s=[];for(let e=0;e<T;++e){const t=l.uq.TranslationToRef(o,1+2*e,r,S),n=new y.btDefaultMotionState,a=new y.btTransform;a.setFromOpenGLMatrix(t.asArray()),n.setWorldTransform(a),y.destroy(a);const i=new y.btVector3(0,0,0);R.calculateLocalInertia(1,i);const c=new y.btRigidBodyConstructionInfo(1,n,R,i);y.destroy(i),c.set_m_friction(1),c.set_m_linearDamping(.3),c.set_m_angularDamping(.3),c.set_m_linearSleepingThreshold(0),c.set_m_angularSleepingThreshold(1),s.push(c)}const a=b[n];for(let e=0;e<T;++e){const t=s[e],n=new y.btRigidBody(t);a.addRigidBody(n),B.push(n)}for(let e=0;e<s.length;++e)y.destroy(s[e]);for(let e=0;e<T;e+=2){const t=[n*T+e,n*T+e+1],o=new y.btTransform,r=new y.btTransform;o.setFromOpenGLMatrix(l.uq.Translation(0,-1.2,0).asArray()),r.setFromOpenGLMatrix(l.uq.Translation(0,1.2,0).asArray());const s=new y.btGeneric6DofSpringConstraint(B[t[0]],B[t[1]],o,r,!0);y.destroy(o),y.destroy(r);const i=new y.btVector3(0,0,0);i.setValue(0,0,0),s.setLinearLowerLimit(i),i.setValue(0,0,0),s.setLinearUpperLimit(i),i.setValue(Math.PI/4,0,0),s.setAngularLowerLimit(i),i.setValue(0,0,0),s.setAngularUpperLimit(i),y.destroy(i);for(let e=0;e<6;++e)s.enableSpring(e,!0),s.setStiffness(e,100),s.setDamping(e,1);a.addConstraint(s,!0)}}console.log("Rigid body count:",16384);const q=new y.btTransform,P=new l.Pq(1,1,1),M=new l.Pq,D=new l.PT;return new f.X((()=>{const e=performance.now();for(let e=0;e<b.length;++e)b[e].stepSimulation(1/60,10,1/60);for(let e=0;e<B.length;++e){B[e].getMotionState().getWorldTransform(q);const t=q.getOrigin(),n=q.getRotation();l.uq.ComposeToRef(P,D.set(n.x(),n.y(),n.z(),n.w()),M.set(t.x(),t.y(),t.z()),S),S.copyToArray(x,16*e)}C.thinInstanceBufferUpdated("matrix");const t=performance.now(),o=t-e;return n.render(),[o,performance.now()-t]})).runBench(),n.onBeforeRenderObservable.add((()=>{for(let e=0;e<b.length;++e)b[e].stepSimulation(1/60,10,1/60);for(let e=0;e<B.length;++e){B[e].getMotionState().getWorldTransform(q);const t=q.getOrigin(),n=q.getRotation();l.uq.ComposeToRef(P,D.set(n.x(),n.y(),n.z(),n.w()),M.set(t.x(),t.y(),t.z()),S),S.copyToArray(x,16*e)}C.thinInstanceBufferUpdated("matrix")})),n}}}}]);