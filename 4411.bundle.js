"use strict";(self.webpackChunkbabylon_bulletphysics=self.webpackChunkbabylon_bulletphysics||[]).push([[4411],{44411:(e,n,t)=>{t.r(n),t.d(n,{SceneBuilder:()=>x}),t(90203),t(33832),t(2093);var o=t(8943),a=t(7839),s=t(52046),r=t(71513),i=t(18595),c=t(26041),l=t(79923),u=t(96793),d=t(58144),p=t(87491),w=t(46738),h=t(67168),f=t(23948),m=t(29009),b=t(27744),g=t(26405),y=t(1592),T=t(35901),q=t(89800),P=t(32399);class x{async build(e,n){const t=new p.Z(n);t.clearColor=new c.ov(.95,.95,.95,1);const x=new a.L("arcRotateCamera",0,0,500,new l.Pq(0,0,0),t);x.minZ=1,x.maxZ=3e3,x.setPosition(new l.Pq(60,40,-50).scaleInPlace(10)),x.attachControl(void 0,!1),x.inertia=.8,x.speed=10;const S=new r.g("hemisphericLight",new l.Pq(0,1,0),t);S.intensity=.5,S.specular=new c.v9(0,0,0),S.groundColor=new c.v9(1,1,1);const I=new s.Z("directionalLight",new l.Pq(.5,-1,1),t);I.intensity=.5;I.shadowMaxZ=250,I.shadowMinZ=-250,I.autoCalcShadowZBounds=!1,I.autoUpdateExtends=!1,I.shadowOrthoScale=0,I.orthoTop=250,I.orthoBottom=-250,I.orthoLeft=-250,I.orthoRight=250;const v=new i.o(2048,I,!0);v.transparencyShadow=!0,v.usePercentageCloserFiltering=!0,v.forceBackFacesOnly=!1,v.bias=.004,v.filteringQuality=i.o.QUALITY_MEDIUM;const L=parseInt(prompt("Thread count","2"));console.log("Thread count:",L);const C=await(0,w.e)(new b.t,L),R=new f.h(C,{allowDynamicShadow:!1,preserveBackBuffer:!1}),B=prompt("Evaluation type (i, b) immediate, buffered","i");R.evaluationType="i"===B?m.q.Immediate:m.q.Buffered;const M=new l.uq;{const e=(0,d.x)("ground",{size:500},t);e.rotationQuaternion=l.PT.RotationAxis(new l.Pq(1,0,0),Math.PI/2),v.addShadowCaster(e),e.receiveShadows=!0;const n=new g.Ty(R,new l.Pq(0,0,-1),0),o=new T.t(C);o.shape=n,l.uq.FromQuaternionToRef(e.rotationQuaternion,M),o.setInitialTransform(M),o.motionType=1;const a=new y.U(R,o);R.addRigidBodyToGlobal(a)}const k=512,A=[],Q=[];if("u"===prompt("Shape type (u, r) uniform box, random","u")){const e=new l.Pq(1,1,1),n=new g.SA(R,e),t={type:"box",size:e};for(let e=0;e<k;++e)A.push(n),Q.push(t)}else{const e=new P.q(0);for(let n=0;n<k;++n){const n=2*e.next()|0;if(0===n){const n=2*e.next()+.5,t=2*e.next()+.5,o=2*e.next()+.5,a=new l.Pq(n,t,o);A.push(new g.SA(R,a)),Q.push({type:"box",size:a})}else{if(1!==n)throw new Error("Invalid type");{const n=2*e.next()+1;A.push(new g.O4(R,n)),Q.push({type:"sphere",radius:n})}}}}const U=[];for(let e=0;e<4;++e)for(let n=0;n<8;++n){const t=8*e+n,o=60*(n-4)+30,a=60*(e-2)+30,s=[];for(let e=0;e<k;++e){const n=new T.t(C);n.shape=A[e];const t=l.uq.TranslationToRef(o,1+2*e,a,M);n.setInitialTransform(t),n.friction=1,n.linearDamping=.3,n.angularDamping=.3,s.push(n)}for(let e=0;e<k;++e){const n=s[e],o=new y.U(R,n);R.addRigidBody(o,t),U.push(o)}for(let e=0;e<k;e+=2){const n=[t*k+e,t*k+e+1],o=new h.vC(R,U[n[0]],U[n[1]],l.uq.Translation(0,-1.2,0),l.uq.Translation(0,1.2,0),!0);o.setLinearLowerLimit(new l.Pq(0,0,0)),o.setLinearUpperLimit(new l.Pq(0,0,0)),o.setAngularLowerLimit(new l.Pq(Math.PI/4,0,0)),o.setAngularUpperLimit(new l.Pq(0,0,0));for(let e=0;e<6;++e)o.enableSpring(e,!0),o.setStiffness(e,100),o.setDamping(e,1);R.addConstraint(o,t,!0)}}console.log("Rigid body count:",16384);const Z=[],_=(0,u.an)("baseBox",{size:1},t),E=(0,o._6X)("baseSphere",{diameter:1},t);_.setEnabled(!1),E.setEnabled(!1),_.receiveShadows=!0,E.receiveShadows=!0;for(let e=0;e<16384;++e){const n=Q[e%Q.length],t="box"===n.type?_.createInstance(`boxInstance${e}`):E.createInstance(`sphereInstance${e}`);v.addShadowCaster(t),t.scaling.copyFrom("box"===n.type?n.size.scale(2):new l.Pq(n.radius,n.radius,n.radius).scale(2)),t.rotationQuaternion=l.PT.Identity(),Z.push(t)}return R.onTickObservable.add((()=>{for(let e=0;e<U.length;++e){U[e].getTransformMatrixToRef(M);const n=Z[e];M.getTranslationToRef(n.position),l.PT.FromRotationMatrixToRef(M,n.rotationQuaternion)}})),new q.X((()=>{const e=R.afterAnimations(1/60*1e3),n=performance.now();return t.render(),[e,performance.now()-n]})).runBench(),R.register(t),t}}},32399:(e,n,t)=>{t.d(n,{q:()=>o});class o{_a;constructor(e){this._a=e}next(){let e=this._a+=1831565813;return e=Math.imul(e^e>>>15,1|e),e^=e+Math.imul(e^e>>>7,61|e),((e^e>>>14)>>>0)/4294967296}}}}]);