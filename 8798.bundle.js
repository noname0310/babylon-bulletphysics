"use strict";(self.webpackChunkbabylon_bulletphysics=self.webpackChunkbabylon_bulletphysics||[]).push([[8798],{8798:(e,n,t)=>{t.r(n),t.d(n,{SceneBuilder:()=>b}),t(203),t(1503),t(8227);var o=t(7456),a=t(5581),r=t(1513),s=t(9711),i=t(6041),c=t(9923),l=t(9899),w=t(8144),d=t(554),u=t(6738),h=t(7168),p=t(2090),f=t(7744),m=t(1167),g=t(5733),T=t(6405),y=t(1592),q=t(5901),P=t(9800);class b{async build(e,n){const t=new d.Z(n);t.clearColor=new i.ov(.95,.95,.95,1);const b=new o.Lq("arcRotateCamera",0,0,500,new c.Pq(0,0,0),t);b.minZ=1,b.maxZ=3e3,b.setPosition(new c.Pq(60,40,-50).scaleInPlace(10)),b.attachControl(void 0,!1),b.inertia=.8,b.speed=10;const S=new r.g("hemisphericLight",new c.Pq(0,1,0),t);S.intensity=.5,S.specular=new i.v9(0,0,0),S.groundColor=new i.v9(1,1,1);const L=new a.Z("directionalLight",new c.Pq(.5,-1,1),t);L.intensity=.5;L.shadowMaxZ=250,L.shadowMinZ=-250,L.autoCalcShadowZBounds=!1,L.autoUpdateExtends=!1,L.shadowOrthoScale=0,L.orthoTop=250,L.orthoBottom=-250,L.orthoLeft=-250,L.orthoRight=250;const C=new s.o(2048,L,!0);C.transparencyShadow=!0,C.usePercentageCloserFiltering=!0,C.forceBackFacesOnly=!1,C.bias=.004,C.filteringQuality=s.o.QUALITY_MEDIUM;const x=parseInt(prompt("Thread count","2"));console.log("Thread count:",x);const B=1===x?await(0,u.e)(new m.Z):await(0,u.e)(new f.t,x),I=new p.D(B),R=new g.F(I,!0),v=new c.uq;{const e=(0,w.x)("ground",{size:500},t);e.rotationQuaternion=c.PT.RotationAxis(new c.Pq(1,0,0),Math.PI/2),C.addShadowCaster(e),e.receiveShadows=!0;const n=new T.Ty(I,new c.Pq(0,0,-1),0),o=new q.t(B);o.shape=n,c.uq.FromQuaternionToRef(e.rotationQuaternion,v),o.setInitialTransform(v),o.motionType=1;const a=new y.U(I,o);R.addRigidBodyToGlobal(a)}const U=512,A=(0,l.an)("box",{size:2},t);C.addShadowCaster(A),A.receiveShadows=!0;const M=new Float32Array(262144);A.thinInstanceSetBuffer("matrix",M,16,!1);const Z=new T.SA(I,new c.Pq(1,1,1)),k=[];for(let e=0;e<4;++e)for(let n=0;n<8;++n){const t=8*e+n,o=60*(n-4)+30,a=60*(e-2)+30,r=[];for(let e=0;e<U;++e){const n=new q.t(B);n.shape=Z;const t=c.uq.TranslationToRef(o,1+2*e,a,v);n.setInitialTransform(t),n.friction=1,n.linearDamping=.3,n.angularDamping=.3,r.push(n)}for(let e=0;e<U;++e){const n=r[e],o=new y.U(I,n);R.addRigidBody(o,t),k.push(o)}for(let e=0;e<U;e+=2){const n=[t*U+e,t*U+e+1],o=new h.vC(I,k[n[0]],k[n[1]],c.uq.Translation(0,-1.2,0),c.uq.Translation(0,1.2,0),!0);o.setLinearLowerLimit(new c.Pq(0,0,0)),o.setLinearUpperLimit(new c.Pq(0,0,0)),o.setAngularLowerLimit(new c.Pq(Math.PI/4,0,0)),o.setAngularUpperLimit(new c.Pq(0,0,0));for(let e=0;e<6;++e)o.enableSpring(e,!0),o.setStiffness(e,100),o.setDamping(e,1);R.addConstraint(o,t,!0)}}return console.log("Rigid body count:",16384),new P.X((()=>{const e=performance.now();R.stepSimulation(1/60,10,1/60);for(let e=0;e<k.length;++e){const n=16*e;k[e].getTransformMatrixToRef(v),v.copyToArray(M,n)}A.thinInstanceBufferUpdated("matrix");const n=performance.now(),o=n-e;return t.render(),[o,performance.now()-n]})).runBench(),t.onBeforeRenderObservable.add((()=>{R.stepSimulation(1/60,10,1/60);for(let e=0;e<k.length;++e)k[e].getTransformMatrixToArray(M,16*e);A.thinInstanceBufferUpdated("matrix")})),t}}}}]);