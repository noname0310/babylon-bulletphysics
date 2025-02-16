"use strict";(self.webpackChunkbabylon_bulletphysics=self.webpackChunkbabylon_bulletphysics||[]).push([[1427],{41427:(e,t,a)=>{a.r(t),a.d(t,{_BasisTextureLoader:()=>o});var s=a(59057),r=a(998);class o{constructor(){this.supportCascades=!1}loadCubeData(e,t,a,o,n){if(Array.isArray(e))return;const i=t.getEngine().getCaps(),c={supportedCompressionFormats:{etc1:!!i.etc1,s3tc:!!i.s3tc,pvrtc:!!i.pvrtc,etc2:!!i.etc2,astc:!!i.astc,bc7:!!i.bptc}};(0,s.yk)(e,c).then((e=>{const a=e.fileInfo.images[0].levels.length>1&&t.generateMipMaps;(0,s.aB)(t,e),t.getEngine()._setCubeMapTextureParams(t,a),t.isReady=!0,t.onLoadedObservable.notifyObservers(t),t.onLoadedObservable.clear(),o&&o()})).catch((e=>{r.S0.Warn("Failed to transcode Basis file, transcoding may not be supported on this device"),t.isReady=!0,n&&n(e)}))}loadData(e,t,a){const o=t.getEngine().getCaps(),n={supportedCompressionFormats:{etc1:!!o.etc1,s3tc:!!o.s3tc,pvrtc:!!o.pvrtc,etc2:!!o.etc2,astc:!!o.astc,bc7:!!o.bptc}};(0,s.yk)(e,n).then((e=>{const r=e.fileInfo.images[0].levels[0],o=e.fileInfo.images[0].levels.length>1&&t.generateMipMaps;a(r.width,r.height,o,-1!==e.format,(()=>{(0,s.aB)(t,e)}))})).catch((e=>{r.S0.Warn("Failed to transcode Basis file, transcoding may not be supported on this device"),r.S0.Warn(`Failed to transcode Basis file: ${e}`),a(0,0,!1,!1,(()=>{}),!0)}))}}},59057:(e,t,a)=>{a.d(t,{aB:()=>g,yk:()=>T});var s,r=a(998),o=a(7481),n=a(81194);function i(){let e=null;function t(e,t,a,s,r){const o=e.getImageTranscodedSizeInBytes(t,a,s);let n=new Uint8Array(o);return e.transcodeImage(n,t,a,s,1,0)?(r&&(n=function(e,t,a,s){const r=new Uint16Array(4),o=new Uint16Array(a*s),n=a/4,i=s/4;for(let t=0;t<i;t++)for(let s=0;s<n;s++){const i=0+8*(t*n+s);r[0]=e[i]|e[i+1]<<8,r[1]=e[i+2]|e[i+3]<<8,r[2]=(2*(31&r[0])+1*(31&r[1]))/3|(2*(2016&r[0])+1*(2016&r[1]))/3&2016|(2*(63488&r[0])+1*(63488&r[1]))/3&63488,r[3]=(2*(31&r[1])+1*(31&r[0]))/3|(2*(2016&r[1])+1*(2016&r[0]))/3&2016|(2*(63488&r[1])+1*(63488&r[0]))/3&63488;for(let n=0;n<4;n++){const c=e[i+4+n];let l=(4*t+n)*a+4*s;o[l++]=r[3&c],o[l++]=r[c>>2&3],o[l++]=r[c>>4&3],o[l++]=r[c>>6&3]}}return o}(n,0,e.getImageWidth(t,a)+3&-4,e.getImageHeight(t,a)+3&-4)),n):null}onmessage=a=>{if("init"===a.data.action){if(a.data.url)try{importScripts(a.data.url)}catch(e){postMessage({action:"error",error:e})}e||(e=BASIS({wasmBinary:a.data.wasmBinary})),null!==e&&e.then((e=>{BASIS=e,e.initializeBasis(),postMessage({action:"init"})}))}else if("transcode"===a.data.action){const e=a.data.config,s=a.data.imageData,r=new BASIS.BasisFile(s),o=function(e){const t=e.getHasAlpha(),a=e.getNumImages(),s=[];for(let t=0;t<a;t++){const a={levels:[]},r=e.getNumLevels(t);for(let s=0;s<r;s++){const r={width:e.getImageWidth(t,s),height:e.getImageHeight(t,s)};a.levels.push(r)}s.push(a)}return{hasAlpha:t,images:s}}(r);let n=a.data.ignoreSupportedFormats?null:function(e,t){let a=null;return e.supportedCompressionFormats&&(a=e.supportedCompressionFormats.astc?10:e.supportedCompressionFormats.bc7?6:e.supportedCompressionFormats.s3tc?t.hasAlpha?3:2:e.supportedCompressionFormats.pvrtc?t.hasAlpha?9:8:e.supportedCompressionFormats.etc2?1:e.supportedCompressionFormats.etc1?0:14),a}(a.data.config,o),i=!1;null===n&&(i=!0,n=o.hasAlpha?3:2);let c=!0;r.startTranscoding()||(c=!1);const l=[];for(let a=0;a<o.images.length&&c;a++){const s=o.images[a];if(void 0===e.loadSingleImage||e.loadSingleImage===a){let o=s.levels.length;!1===e.loadMipmapLevels&&(o=1);for(let e=0;e<o;e++){const o=s.levels[e],d=t(r,a,e,n,i);if(!d){c=!1;break}o.transcodedPixels=d,l.push(o.transcodedPixels.buffer)}}}r.close(),r.delete(),i&&(n=-1),c?postMessage({action:"transcode",success:c,id:a.data.id,fileInfo:o,format:n},l):postMessage({action:"transcode",success:c,id:a.data.id})}}}!function(e){e[e.cTFETC1=0]="cTFETC1",e[e.cTFETC2=1]="cTFETC2",e[e.cTFBC1=2]="cTFBC1",e[e.cTFBC3=3]="cTFBC3",e[e.cTFBC4=4]="cTFBC4",e[e.cTFBC5=5]="cTFBC5",e[e.cTFBC7=6]="cTFBC7",e[e.cTFPVRTC1_4_RGB=8]="cTFPVRTC1_4_RGB",e[e.cTFPVRTC1_4_RGBA=9]="cTFPVRTC1_4_RGBA",e[e.cTFASTC_4x4=10]="cTFASTC_4x4",e[e.cTFATC_RGB=11]="cTFATC_RGB",e[e.cTFATC_RGBA_INTERPOLATED_ALPHA=12]="cTFATC_RGBA_INTERPOLATED_ALPHA",e[e.cTFRGBA32=13]="cTFRGBA32",e[e.cTFRGB565=14]="cTFRGB565",e[e.cTFBGR565=15]="cTFBGR565",e[e.cTFRGBA4444=16]="cTFRGBA4444",e[e.cTFFXT1_RGB=17]="cTFFXT1_RGB",e[e.cTFPVRTC2_4_RGB=18]="cTFPVRTC2_4_RGB",e[e.cTFPVRTC2_4_RGBA=19]="cTFPVRTC2_4_RGBA",e[e.cTFETC2_EAC_R11=20]="cTFETC2_EAC_R11",e[e.cTFETC2_EAC_RG11=21]="cTFETC2_EAC_RG11"}(s||(s={}));const c={JSModuleURL:`${r.S0._DefaultCdnUrl}/basisTranscoder/1/basis_transcoder.js`,WasmModuleURL:`${r.S0._DefaultCdnUrl}/basisTranscoder/1/basis_transcoder.wasm`};let l=null,d=null,u=0;const T=(e,t)=>{const a=e instanceof ArrayBuffer?new Uint8Array(e):e;return new Promise(((e,s)=>{(l||(l=new Promise(((e,t)=>{d?e(d):r.S0.LoadFileAsync(r.S0.GetBabylonScriptURL(c.WasmModuleURL)).then((a=>{if("function"!=typeof URL)return t("Basis transcoder requires an environment with a URL constructor");const s=URL.createObjectURL(new Blob([`(${i})()`],{type:"application/javascript"}));d=new Worker(s),function(e,t,a){return new Promise(((s,o)=>{const n=t=>{"init"===t.data.action?(e.removeEventListener("message",n),s(e)):"error"===t.data.action&&o(t.data.error||"error initializing worker")};e.addEventListener("message",n),e.postMessage({action:"init",url:a?r.S0.GetBabylonScriptURL(a):void 0,wasmBinary:t},[t])}))}(d,a,c.JSModuleURL).then(e,t)})).catch(t)}))),l).then((()=>{const r=u++,o=t=>{"transcode"===t.data.action&&t.data.id===r&&(d.removeEventListener("message",o),t.data.success?e(t.data):s("Transcode is not supported on this device"))};d.addEventListener("message",o);const n=new Uint8Array(a.byteLength);n.set(new Uint8Array(a.buffer,a.byteOffset,a.byteLength)),d.postMessage({action:"transcode",id:r,imageData:n,config:t,ignoreSupportedFormats:!1},[n.buffer])}),(e=>{s(e)}))}))},p=(e,t)=>{let a=t._gl?.TEXTURE_2D;e.isCube&&(a=t._gl?.TEXTURE_CUBE_MAP),t._bindTextureDirectly(a,e,!0)},g=(e,t)=>{const a=e.getEngine();for(let i=0;i<t.fileInfo.images.length;i++){const c=t.fileInfo.images[i].levels[0];if(e._invertVScale=e.invertY,-1===t.format||t.format===s.cTFRGB565)if(e.type=10,e.format=4,!a._features.basisNeedsPOT||Math.log2(c.width)%1==0&&Math.log2(c.height)%1==0)e._invertVScale=!e.invertY,e.width=c.width+3&-4,e.height=c.height+3&-4,e.samplingMode=2,p(e,a),a._uploadDataToTextureDirectly(e,new Uint16Array(c.transcodedPixels.buffer),i,0,4,!0);else{const t=new n.hV(a,2);e._invertVScale=e.invertY,t.type=10,t.format=4,t.width=c.width+3&-4,t.height=c.height+3&-4,p(t,a),a._uploadDataToTextureDirectly(t,new Uint16Array(c.transcodedPixels.buffer),i,0,4,!0),a._rescaleTexture(t,e,a.scenes[0],a._getInternalFormat(4),(()=>{a._releaseTexture(t),p(e,a)}))}else{e.width=c.width,e.height=c.height,e.generateMipMaps=t.fileInfo.images[i].levels.length>1;const s=h.GetInternalFormatFromBasisFormat(t.format,a);e.format=s,p(e,a),t.fileInfo.images[i].levels.forEach(((t,r)=>{a._uploadCompressedDataToTextureDirectly(e,s,t.width,t.height,t.transcodedPixels,i,r)})),!a._features.basisNeedsPOT||Math.log2(e.width)%1==0&&Math.log2(e.height)%1==0||(r.S0.Warn("Loaded .basis texture width and height are not a power of two. Texture wrapping will be set to Texture.CLAMP_ADDRESSMODE as other modes are not supported with non power of two dimensions in webGL 1."),e._cachedWrapU=o.g.CLAMP_ADDRESSMODE,e._cachedWrapV=o.g.CLAMP_ADDRESSMODE)}}},h={JSModuleURL:c.JSModuleURL,WasmModuleURL:c.WasmModuleURL,GetInternalFormatFromBasisFormat:(e,t)=>{let a;switch(e){case s.cTFETC1:a=36196;break;case s.cTFBC1:a=33776;break;case s.cTFBC4:a=33779;break;case s.cTFASTC_4x4:a=37808;break;case s.cTFETC2:a=37496;break;case s.cTFBC7:a=36492}if(void 0===a)throw"The chosen Basis transcoder format is not currently supported";return a},TranscodeAsync:T,LoadTextureFromTranscodeResult:g};Object.defineProperty(h,"JSModuleURL",{get:function(){return c.JSModuleURL},set:function(e){c.JSModuleURL=e}}),Object.defineProperty(h,"WasmModuleURL",{get:function(){return c.WasmModuleURL},set:function(e){c.WasmModuleURL=e}})}}]);