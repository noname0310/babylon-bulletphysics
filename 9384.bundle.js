"use strict";(self.webpackChunkbabylon_bulletphysics=self.webpackChunkbabylon_bulletphysics||[]).push([[9384],{83020:(e,n,l)=>{l.d(n,{i:()=>i});var t=l(84867);function a(e){return e.split(" ").filter((e=>""!==e)).map((e=>parseFloat(e)))}function r(e,n,l){for(;l.length!==n;){const n=a(e.lines[e.index++]);l.push(...n)}}function s(e,n,l){let a=0,r=0,s=0,i=0,o=0,u=0;for(let n=0;n<e.numberOfHorizontalAngles-1;n++)if(l<e.horizontalAngles[n+1]||n===e.numberOfHorizontalAngles-2){r=n,s=e.horizontalAngles[n],i=e.horizontalAngles[n+1];break}for(let l=0;l<e.numberOfVerticalAngles-1;l++)if(n<e.verticalAngles[l+1]||l===e.numberOfVerticalAngles-2){a=l,o=e.verticalAngles[l],u=e.verticalAngles[l+1];break}const c=i-s,f=u-o;if(0===f)return 0;const g=0===c?0:(l-s)/c,d=(n-o)/f,b=0===c?r:r+1,h=(0,t.Lerp)(e.candelaValues[r][a],e.candelaValues[b][a],g),A=(0,t.Lerp)(e.candelaValues[r][a+1],e.candelaValues[b][a+1],g);return(0,t.Lerp)(h,A,d)}function i(e){const n={lines:new TextDecoder("utf-8").decode(e).split("\n"),index:0},l={version:n.lines[0],candelaValues:[],horizontalAngles:[],verticalAngles:[],numberOfHorizontalAngles:0,numberOfVerticalAngles:0};for(n.index=1;n.lines.length>0&&!n.lines[n.index].includes("TILT=");)n.index++;n.lines[n.index].includes("INCLUDE"),n.index++;const t=a(n.lines[n.index++]);l.numberOfLights=t[0],l.lumensPerLamp=t[1],l.candelaMultiplier=t[2],l.numberOfVerticalAngles=t[3],l.numberOfHorizontalAngles=t[4],l.photometricType=t[5],l.unitsType=t[6],l.width=t[7],l.length=t[8],l.height=t[9];const i=a(n.lines[n.index++]);l.ballastFactor=i[0],l.fileGenerationType=i[1],l.inputWatts=i[2];for(let e=0;e<l.numberOfHorizontalAngles;e++)l.candelaValues[e]=[];r(n,l.numberOfVerticalAngles,l.verticalAngles),r(n,l.numberOfHorizontalAngles,l.horizontalAngles);for(let e=0;e<l.numberOfHorizontalAngles;e++)r(n,l.numberOfVerticalAngles,l.candelaValues[e]);let o=-1;for(let e=0;e<l.numberOfHorizontalAngles;e++)for(let n=0;n<l.numberOfVerticalAngles;n++)l.candelaValues[e][n]*=l.candelaValues[e][n]*l.candelaMultiplier*l.ballastFactor*l.fileGenerationType,o=Math.max(o,l.candelaValues[e][n]);if(o>0)for(let e=0;e<l.numberOfHorizontalAngles;e++)for(let n=0;n<l.numberOfVerticalAngles;n++)l.candelaValues[e][n]/=o;const u=new Float32Array(64800),c=l.horizontalAngles[0],f=l.horizontalAngles[l.numberOfHorizontalAngles-1];for(let e=0;e<64800;e++){let n=e%360;const t=Math.floor(e/360);f-c!=0&&(n<c||n>=f)&&(n%=2*f,n>f&&(n=2*f-n)),u[t+180*n]=s(l,t,n)}return{width:180,height:1,data:u}}},69384:(e,n,l)=>{l.r(n),l.d(n,{_IESTextureLoader:()=>a});var t=l(83020);class a{constructor(){this.supportCascades=!1}loadCubeData(){throw".ies not supported in Cube."}loadData(e,n,l){const a=new Uint8Array(e.buffer,e.byteOffset,e.byteLength),r=(0,t.i)(a);l(r.width,r.height,!1,!1,(()=>{const e=n.getEngine();n.type=1,n.format=6,n._gammaSpace=!1,e._uploadDataToTextureDirectly(n,r.data)}))}}}}]);