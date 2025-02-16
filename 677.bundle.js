"use strict";(self.webpackChunkbabylon_bulletphysics=self.webpackChunkbabylon_bulletphysics||[]).push([[677],{10677:(e,n,t)=>{t.r(n),t.d(n,{SceneBuilder:()=>L}),t(90203),t(33832),t(2093);var o=t(7839),a=t(52046),r=t(71513),s=t(18595),i=t(26041),c=t(79923),l=t(96793),w=t(58144),d=t(87491),u=t(46738),h=t(67168),p=t(2090),f=t(27744),m=t(91167),g=t(15733),T=t(26405),y=t(1592),P=t(67648),b=t(35901),q=t(3477),S=t(89800);class L{async build(e,n){const t=new d.Z(n);t.clearColor=new i.ov(.95,.95,.95,1);const L=new o.L("arcRotateCamera",0,0,500,new c.Pq(0,0,0),t);L.minZ=1,L.maxZ=3e3,L.setPosition(new c.Pq(60,40,-50).scaleInPlace(10)),L.attachControl(void 0,!1),L.inertia=.8,L.speed=10;const C=new r.g("hemisphericLight",new c.Pq(0,1,0),t);C.intensity=.5,C.specular=new i.v9(0,0,0),C.groundColor=new i.v9(1,1,1);const x=new a.Z("directionalLight",new c.Pq(.5,-1,1),t);x.intensity=.5;x.shadowMaxZ=250,x.shadowMinZ=-250,x.autoCalcShadowZBounds=!1,x.autoUpdateExtends=!1,x.shadowOrthoScale=0,x.orthoTop=250,x.orthoBottom=-250,x.orthoLeft=-250,x.orthoRight=250;const B=new s.o(2048,x,!0);B.transparencyShadow=!0,B.usePercentageCloserFiltering=!0,B.forceBackFacesOnly=!1,B.bias=.004,B.filteringQuality=s.o.QUALITY_MEDIUM;const I=parseInt(prompt("Thread count","2"));console.log("Thread count:",I);const R=1===I?await(0,u.e)(new m.Z):await(0,u.e)(new f.t,I),v=new p.D(R),A=new g.F(v,!0),M=new c.uq;{const e=(0,w.x)("ground",{size:500},t);e.rotationQuaternion=c.PT.RotationAxis(new c.Pq(1,0,0),Math.PI/2),B.addShadowCaster(e),e.receiveShadows=!0;const n=new T.Ty(v,new c.Pq(0,0,-1),0),o=new b.t(R);o.shape=n,c.uq.FromQuaternionToRef(e.rotationQuaternion,M),o.setInitialTransform(M),o.motionType=1;const a=new y.U(v,o);A.addRigidBodyToGlobal(a)}const U=512,Z=(0,l.an)("box",{size:2},t);B.addShadowCaster(Z),Z.receiveShadows=!0;const F=new Float32Array(65536);Z.thinInstanceSetBuffer("matrix",F,16,!1);const k=new T.SA(v,new c.Pq(1,1,1)),D=[];for(let e=0;e<4;++e)for(let n=0;n<2;++n){const t=2*e+n,o=60*(n-1)+30,a=60*(e-2)+30,r=new q.x(R,U);for(let e=0;e<U;++e){r.setShape(e,k);const n=c.uq.TranslationToRef(o,1+2*e,a,M);r.setInitialTransform(e,n),r.setFriction(e,1),r.setLinearDamping(e,.3),r.setAngularDamping(e,.3)}const s=new P.Y(v,r);A.addRigidBodyBundle(s,t);for(let e=0;e<U;e+=2){const n=[e,e+1],o=new h.vC(v,s,n,c.uq.Translation(0,-1.2,0),c.uq.Translation(0,1.2,0),!0);o.setLinearLowerLimit(new c.Pq(0,0,0)),o.setLinearUpperLimit(new c.Pq(0,0,0)),o.setAngularLowerLimit(new c.Pq(Math.PI/4,0,0)),o.setAngularUpperLimit(new c.Pq(0,0,0));for(let e=0;e<6;++e)o.enableSpring(e,!0),o.setStiffness(e,100),o.setDamping(e,1);A.addConstraint(o,t,!0)}D.push(s)}console.log("Rigid body count:",4096);const Q=new S.X((()=>{const e=performance.now();A.stepSimulation(1/60,10,1/60);for(let e=0;e<D.length;++e){const n=D[e],t=e*U*16;for(let e=0;e<U;++e)n.getTransformMatrixToRef(e,M),M.copyToArray(F,16*e+t)}Z.thinInstanceBufferUpdated("matrix");const n=performance.now(),o=n-e;return t.render(),[o,performance.now()-n]}));return Q.sampleCount=100,Q.runBench(),t.onBeforeRenderObservable.add((()=>{A.stepSimulation(1/60,10,1/60);for(let e=0;e<D.length;++e){const n=D[e],t=e*U*16;for(let e=0;e<U;++e)n.getTransformMatrixToRef(e,M),M.copyToArray(F,16*e+t)}Z.thinInstanceBufferUpdated("matrix")})),t}}}}]);