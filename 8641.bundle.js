"use strict";(self.webpackChunkbabylon_bulletphysics=self.webpackChunkbabylon_bulletphysics||[]).push([[8641],{8641:(e,n,t)=>{t.r(n),t.d(n,{SceneBuilder:()=>b}),t(203),t(1503),t(8227);var a=t(7456),o=t(5581),i=t(1513),s=t(9711),r=t(6041),w=t(9923),c=t(9899),d=t(8144),l=t(554),u=t(6738),h=t(7168),p=t(5203),f=t(9009),g=t(7002),m=t(6405),q=t(1592),y=t(7648),P=t(5901),T=t(3477);class b{async build(e,n){const t=new l.Z(n);t.clearColor=new r.ov(.95,.95,.95,1);const b=new a.Lq("arcRotateCamera",0,0,500,new w.Pq(0,0,0),t);b.minZ=1,b.maxZ=1e3,b.setPosition(new w.Pq(60,40,-50)),b.attachControl(void 0,!1),b.inertia=.8,b.speed=10;const L=new i.g("hemisphericLight",new w.Pq(0,1,0),t);L.intensity=.5,L.specular=new r.v9(0,0,0),L.groundColor=new r.v9(1,1,1);const S=new o.Z("directionalLight",new w.Pq(.5,-1,1),t);S.intensity=.5;S.shadowMaxZ=60,S.shadowMinZ=-60,S.autoCalcShadowZBounds=!1,S.autoUpdateExtends=!1,S.shadowOrthoScale=0,S.orthoTop=60,S.orthoBottom=-60,S.orthoLeft=-60,S.orthoRight=60;const C=new s.o(2048,S,!0);C.transparencyShadow=!0,C.usePercentageCloserFiltering=!0,C.forceBackFacesOnly=!1,C.bias=.004,C.filteringQuality=s.o.QUALITY_MEDIUM;const v=await(0,u.e)(new g.t,1),B=new p.w(v);B.register(t),B.evaluationType=f.q.Buffered;const x=new w.uq;{const e=(0,d.x)("ground",{size:120},t);e.rotationQuaternion=w.PT.RotationAxis(new w.Pq(1,0,0),Math.PI/2),C.addShadowCaster(e),e.receiveShadows=!0;const n=new m.Ty(B,new w.Pq(0,0,-1),0),a=new P.t(v);a.shape=n,w.uq.FromQuaternionToRef(e.rotationQuaternion,x),a.setInitialTransform(x),a.motionType=1;const o=new q.U(B,a);B.addRigidBody(o)}const A=1024,I=(0,c.an)("box",{size:2},t);C.addShadowCaster(I),I.receiveShadows=!0;const M=new Float32Array(16384);I.thinInstanceSetBuffer("matrix",M,16,!1);const R=new m.SA(B,new w.Pq(1,1,1)),U=new T.x(v,A);for(let e=0;e<A;++e){U.setShape(e,R);const n=w.uq.TranslationToRef(0,1+2*e,0,x);U.setInitialTransform(e,n),U.setFriction(e,1),U.setLinearDamping(e,.3),U.setAngularDamping(e,.3)}const Z=new y.Y(B,U);B.addRigidBodyBundle(Z);for(let e=0;e<A;e+=2){const n=[e,e+1],t=new h.vC(B,Z,n,w.uq.Translation(0,-1.2,0),w.uq.Translation(0,1.2,0),!0);t.setLinearLowerLimit(new w.Pq(0,0,0)),t.setLinearUpperLimit(new w.Pq(0,0,0)),t.setAngularLowerLimit(new w.Pq(Math.PI/4,0,0)),t.setAngularUpperLimit(new w.Pq(0,0,0));for(let e=0;e<6;++e)t.enableSpring(e,!0),t.setStiffness(e,100),t.setDamping(e,1);B.addConstraint(t,!1)}return B.onTickObservable.add((()=>{Z.getTransformMatricesToArray(M),I.thinInstanceBufferUpdated("matrix")})),t}}}}]);