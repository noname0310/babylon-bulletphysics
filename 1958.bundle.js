"use strict";(self.webpackChunkbabylon_bulletphysics=self.webpackChunkbabylon_bulletphysics||[]).push([[1958],{72156:(e,n,t)=>{t.d(n,{FG:()=>i,Kq:()=>E,ZR:()=>p,tb:()=>S});var r=t(86700),a=t(3687);const o=32768,l=65535;function i(e,n){let t=0;for(let r=0;r<a.Ez;++r)(0==r||e[r>>3]&1<<(7&r))&&(n[t++]=r);const r=t-1;for(;t<a.Ez;)n[t++]=0;return r}function c(e,n,t,a,o){for(;t<e;)n=n<<8|(0,r.fz)(a,o),t+=8;return{l:n>>(t-=e)&(1<<e)-1,c:n,lc:t}}function s(e,n,t,a){return{c:e=e<<8|(0,r.fz)(t,a),lc:n+=8}}function u(e,n,t,r,a,o,l,i,c){if(e==n){if(r<8){const e=s(t,r,a,o);t=e.c,r=e.lc}let e=t>>(r-=8);if(e=new Uint8Array([e])[0],i.value+e>c)return null;const n=l[i.value-1];for(;e-- >0;)l[i.value++]=n}else{if(!(i.value<c))return null;l[i.value++]=e}return{c:t,lc:r}}const f=new Array(59);function w(e){return 63&e}function h(e){return e>>6}function p(e,n,t,o,l,i){const p=t.value,d=(0,r.PX)(n,t),y=(0,r.PX)(n,t);t.value+=4;const b=(0,r.PX)(n,t);if(t.value+=4,d<0||d>=a.U0||y<0||y>=a.U0)throw new Error("Wrong HUF_ENCSIZE");const v=new Array(a.U0),S=new Array(a.A_);if(function(e){for(let n=0;n<a.A_;n++)e[n]={},e[n].len=0,e[n].lit=0,e[n].p=null}(S),function(e,n,t,r,o,l){const i=n;let s=0,u=0;for(;r<=o;r++){if(i.value-n.value>t)return;let f=c(6,s,u,e,i);const w=f.l;if(s=f.c,u=f.lc,l[r]=w,w==a.Hh){if(i.value-n.value>t)throw new Error("Error in HufUnpackEncTable");f=c(8,s,u,e,i);let w=f.l+a.gn;if(s=f.c,u=f.lc,r+w>o+1)throw new Error("Error in HufUnpackEncTable");for(;w--;)l[r++]=0;r--}else if(w>=a.LU){let e=w-a.LU+2;if(r+e>o+1)throw new Error("Error in HufUnpackEncTable");for(;e--;)l[r++]=0;r--}}!function(e){for(let e=0;e<=58;++e)f[e]=0;for(let n=0;n<a.U0;++n)f[e[n]]+=1;let n=0;for(let e=58;e>0;--e){const t=n+f[e]>>1;f[e]=n,n=t}for(let n=0;n<a.U0;++n){const t=e[n];t>0&&(e[n]=t|f[t]++<<6)}}(l)}(e,t,o-(t.value-p),d,y,v),b>8*(o-(t.value-p)))throw new Error("Wrong hufUncompress");!function(e,n,t,r){for(;n<=t;n++){const t=h(e[n]),o=w(e[n]);if(t>>o)throw new Error("Invalid table entry");if(o>a.LK){const e=r[t>>o-a.LK];if(e.len)throw new Error("Invalid table entry");if(e.lit++,e.p){const n=e.p;e.p=new Array(e.lit);for(let t=0;t<e.lit-1;++t)e.p[t]=n[t]}else e.p=new Array(1);e.p[e.lit-1]=n}else if(o){let e=0;for(let l=1<<a.LK-o;l>0;l--){const l=r[(t<<a.LK-o)+e];if(l.len||l.p)throw new Error("Invalid table entry");l.len=o,l.lit=n,e++}}}}(v,d,y,S),function(e,n,t,r,o,l,i,c,f){let p=0,d=0;const y=i,b=Math.trunc(r.value+(o+7)/8);for(;r.value<b;){let o=s(p,d,t,r);for(p=o.c,d=o.lc;d>=a.LK;){const i=n[p>>d-a.LK&a.lR];if(i.len){d-=i.len;const e=u(i.lit,l,p,d,t,r,c,f,y);e&&(p=e.c,d=e.lc)}else{if(!i.p)throw new Error("hufDecode issues");let n;for(n=0;n<i.lit;n++){const a=w(e[i.p[n]]);for(;d<a&&r.value<b;)o=s(p,d,t,r),p=o.c,d=o.lc;if(d>=a&&h(e[i.p[n]])==(p>>d-a&(1<<a)-1)){d-=a;const e=u(i.p[n],l,p,d,t,r,c,f,y);e&&(p=e.c,d=e.lc);break}}if(n==i.lit)throw new Error("HufDecode issues")}}}const v=8-o&7;for(p>>=v,d-=v;d>0;){const e=n[p<<a.LK-d&a.lR];if(!e.len)throw new Error("HufDecode issues");{d-=e.len;const n=u(e.lit,l,p,d,t,r,c,f,y);n&&(p=n.c,d=n.lc)}}}(v,S,e,t,b,y,i,l,{value:0})}function d(e){return 65535&e}function y(e){const n=d(e);return n>32767?n-65536:n}function b(e,n){const t=y(e),r=y(n),a=t+(1&r)+(r>>1);return{a,b:a-r}}function v(e,n){const t=d(e),r=d(n),a=t-(r>>1)&l;return{a:r+a-o&l,b:a}}function S(e,n,t,r,a,o,l){const i=l<16384,c=t>a?a:t;let s,u,f=1;for(;f<=c;)f<<=1;for(f>>=1,s=f,f>>=1;f>=1;){u=0;const l=u+o*(a-s),c=o*f,w=o*s,h=r*f,p=r*s;let d,y,S,E;for(;u<=l;u+=w){let a=u;const o=u+r*(t-s);for(;a<=o;a+=p){const t=a+h,r=a+c,o=r+h;if(i){let l=b(e[a+n],e[r+n]);d=l.a,S=l.b,l=b(e[t+n],e[o+n]),y=l.a,E=l.b,l=b(d,y),e[a+n]=l.a,e[t+n]=l.b,l=b(S,E),e[r+n]=l.a,e[o+n]=l.b}else{let l=v(e[a+n],e[r+n]);d=l.a,S=l.b,l=v(e[t+n],e[o+n]),y=l.a,E=l.b,l=v(d,y),e[a+n]=l.a,e[t+n]=l.b,l=v(S,E),e[r+n]=l.a,e[o+n]=l.b}}if(t&f){const t=a+c;let r;r=i?b(e[a+n],e[t+n]):v(e[a+n],e[t+n]),d=r.a,e[t+n]=r.b,e[a+n]=d}}if(a&f){let a=u;const o=u+r*(t-s);for(;a<=o;a+=p){const t=a+h;let r;r=i?b(e[a+n],e[t+n]):v(e[a+n],e[t+n]),d=r.a,e[t+n]=r.b,e[a+n]=d}}s=f,f>>=1}return u}function E(e,n,t){for(let r=0;r<t;++r)n[r]=e[n[r]]}},52093:(e,n,t)=>{t.d(n,{S4:()=>i,VE:()=>s,_k:()=>u,r:()=>c,tg:()=>f});var r=t(72156),a=t(64942),o=t(86700),l=t(3687);function i(e){return new DataView(e.array.buffer,e.offset.value,e.size)}function c(e){const n=e.viewer.buffer.slice(e.offset.value,e.offset.value+e.size),t=new Uint8Array((0,a._)(n)),r=new Uint8Array(t.length);return(0,o.XE)(t),(0,o.KA)(t,r),new DataView(r.buffer)}function s(e){const n=e.array.slice(e.offset.value,e.offset.value+e.size),t=fflate.unzlibSync(n),r=new Uint8Array(t.length);return(0,o.XE)(t),(0,o.KA)(t,r),new DataView(r.buffer)}function u(e){const n=e.array.slice(e.offset.value,e.offset.value+e.size),t=fflate.unzlibSync(n),r=e.lines*e.channels*e.width,a=1==e.type?new Uint16Array(r):new Uint32Array(r);let o=0,l=0;const i=new Array(4);for(let n=0;n<e.lines;n++)for(let n=0;n<e.channels;n++){let n=0;switch(e.type){case 1:i[0]=o,i[1]=i[0]+e.width,o=i[1]+e.width;for(let r=0;r<e.width;++r)n+=t[i[0]++]<<8|t[i[1]++],a[l]=n,l++;break;case 2:i[0]=o,i[1]=i[0]+e.width,i[2]=i[1]+e.width,o=i[2]+e.width;for(let r=0;r<e.width;++r)n+=t[i[0]++]<<24|t[i[1]++]<<16|t[i[2]++]<<8,a[l]=n,l++}}return new DataView(a.buffer)}function f(e){const n=e.viewer,t={value:e.offset.value},a=new Uint16Array(e.width*e.scanlineBlockSize*(e.channels*e.type)),i=new Uint8Array(l.cQ);let c=0;const s=new Array(e.channels);for(let n=0;n<e.channels;n++)s[n]={},s[n].start=c,s[n].end=s[n].start,s[n].nx=e.width,s[n].ny=e.lines,s[n].size=e.type,c+=s[n].nx*s[n].ny*s[n].size;const u=(0,o.Jn)(n,t),f=(0,o.Jn)(n,t);if(f>=l.cQ)throw new Error("Wrong PIZ_COMPRESSION BITMAP_SIZE");if(u<=f)for(let e=0;e<f-u+1;e++)i[e+u]=(0,o._S)(n,t);const w=new Uint16Array(l.Ez),h=(0,r.FG)(i,w),p=(0,o.PX)(n,t);(0,r.ZR)(e.array,n,t,p,a,c);for(let n=0;n<e.channels;++n){const e=s[n];for(let t=0;t<s[n].size;++t)(0,r.tb)(a,e.start+t,e.nx,e.size,e.ny,e.nx*e.size,h)}(0,r.Kq)(w,a,c);let d=0;const y=new Uint8Array(a.buffer.byteLength);for(let n=0;n<e.lines;n++)for(let n=0;n<e.channels;n++){const e=s[n],t=e.nx*e.size,r=new Uint8Array(a.buffer,e.end*l.JH,t*l.JH);y.set(r,d),d+=t*l.JH,e.end+=t}return new DataView(y.buffer)}},64942:(e,n,t)=>{function r(e){let n=e.byteLength;const t=new Array;let r=0;const a=new DataView(e);for(;n>0;){const e=a.getInt8(r++);if(e<0){const o=-e;n-=o+1;for(let e=0;e<o;e++)t.push(a.getUint8(r++))}else{const o=e;n-=2;const l=a.getUint8(r++);for(let e=0;e<o+1;e++)t.push(l)}}return t}t.d(n,{_:()=>r})},9629:(e,n,t)=>{var r;t.d(n,{V:()=>r,u:()=>a}),function(e){e[e.Float=0]="Float",e[e.HalfFloat=1]="HalfFloat"}(r||(r={}));class a{}a.DefaultOutputType=r.HalfFloat,a.FFLATEUrl="https://unpkg.com/fflate@0.8.2"},86700:(e,n,t)=>{t.d(n,{Ff:()=>d,Jn:()=>w,KA:()=>E,LD:()=>y,PX:()=>u,Sn:()=>b,T$:()=>c,XE:()=>S,_S:()=>f,cL:()=>s,fz:()=>h,he:()=>r,tB:()=>p,zX:()=>v});var r,a,o=t(84867),l=t(3687);!function(e){e[e.NO_COMPRESSION=0]="NO_COMPRESSION",e[e.RLE_COMPRESSION=1]="RLE_COMPRESSION",e[e.ZIPS_COMPRESSION=2]="ZIPS_COMPRESSION",e[e.ZIP_COMPRESSION=3]="ZIP_COMPRESSION",e[e.PIZ_COMPRESSION=4]="PIZ_COMPRESSION",e[e.PXR24_COMPRESSION=5]="PXR24_COMPRESSION"}(r||(r={})),function(e){e[e.INCREASING_Y=0]="INCREASING_Y",e[e.DECREASING_Y=1]="DECREASING_Y"}(a||(a={}));const i=function(){const e=new ArrayBuffer(4),n=new Float32Array(e),t=new Uint32Array(e),r=new Uint32Array(512),a=new Uint32Array(512);for(let e=0;e<256;++e){const n=e-127;n<-27?(r[e]=0,r[256|e]=32768,a[e]=24,a[256|e]=24):n<-14?(r[e]=1024>>-n-14,r[256|e]=1024>>-n-14|32768,a[e]=-n-1,a[256|e]=-n-1):n<=15?(r[e]=n+15<<10,r[256|e]=n+15<<10|32768,a[e]=13,a[256|e]=13):n<128?(r[e]=31744,r[256|e]=64512,a[e]=24,a[256|e]=24):(r[e]=31744,r[256|e]=64512,a[e]=13,a[256|e]=13)}const o=new Uint32Array(2048),l=new Uint32Array(64),i=new Uint32Array(64);for(let e=1;e<1024;++e){let n=e<<13,t=0;for(;!(8388608&n);)n<<=1,t-=8388608;n&=-8388609,t+=947912704,o[e]=n|t}for(let e=1024;e<2048;++e)o[e]=939524096+(e-1024<<13);for(let e=1;e<31;++e)l[e]=e<<23;l[31]=1199570944,l[32]=2147483648;for(let e=33;e<63;++e)l[e]=2147483648+(e-32<<23);l[63]=3347054592;for(let e=1;e<64;++e)32!==e&&(i[e]=1024);return{floatView:n,uint32View:t,baseTable:r,shiftTable:a,mantissaTable:o,exponentTable:l,offsetTable:i}}();function c(e,n){const t=new Uint8Array(e);let r=0;for(;0!=t[n.value+r];)r+=1;const a=(new TextDecoder).decode(t.slice(n.value,n.value+r));return n.value=n.value+r+1,a}function s(e,n){const t=e.getInt32(n.value,!0);return n.value+=l.b7,t}function u(e,n){const t=e.getUint32(n.value,!0);return n.value+=l.b7,t}function f(e,n){const t=e.getUint8(n.value);return n.value+=l.aN,t}function w(e,n){const t=e.getUint16(n.value,!0);return n.value+=l.JH,t}function h(e,n){const t=e[n.value];return n.value+=l.aN,t}function p(e,n){let t;return t="getBigInt64"in DataView.prototype?Number(e.getBigInt64(n.value,!0)):e.getUint32(n.value+4,!0)+Number(e.getUint32(n.value,!0)<<32),n.value+=l.Kl,t}function d(e,n){const t=e.getFloat32(n.value,!0);return n.value+=l.Y3,t}function y(e,n){return function(e){const n=(31744&e)>>10,t=1023&e;return(e>>15?-1:1)*(n?31===n?t?NaN:1/0:Math.pow(2,n-15)*(1+t/1024):t/1024*6103515625e-14)}(w(e,n))}function b(e,n){return function(e){if(Math.abs(e)>65504)throw new Error("Value out of range.Consider using float instead of half-float.");e=(0,o.Clamp)(e,-65504,65504),i.floatView[0]=e;const n=i.uint32View[0],t=n>>23&511;return i.baseTable[t]+((8388607&n)>>i.shiftTable[t])}(d(e,n))}function v(e,n,t,r){switch(t){case"string":case"stringvector":case"iccProfile":return function(e,n,t){const r=(new TextDecoder).decode(new Uint8Array(e).slice(n.value,n.value+t));return n.value=n.value+t,r}(e.buffer,n,r);case"chlist":return function(e,n,t){const r=n.value,a=[];for(;n.value<r+t-1;){const t=c(e.buffer,n),r=s(e,n),o=f(e,n);n.value+=3;const l=s(e,n),i=s(e,n);a.push({name:t,pixelType:r,pLinear:o,xSampling:l,ySampling:i})}return n.value+=1,a}(e,n,r);case"chromaticities":return function(e,n){return{redX:d(e,n),redY:d(e,n),greenX:d(e,n),greenY:d(e,n),blueX:d(e,n),blueY:d(e,n),whiteX:d(e,n),whiteY:d(e,n)}}(e,n);case"compression":return function(e,n){return f(e,n)}(e,n);case"box2i":return function(e,n){return{xMin:s(e,n),yMin:s(e,n),xMax:s(e,n),yMax:s(e,n)}}(e,n);case"lineOrder":return function(e,n){const t=f(e,n);return a[t]}(e,n);case"float":return d(e,n);case"v2f":return function(e,n){return[d(e,n),d(e,n)]}(e,n);case"v3f":return function(e,n){return[d(e,n),d(e,n),d(e,n)]}(e,n);case"int":return s(e,n);case"rational":return function(e,n){return[s(e,n),u(e,n)]}(e,n);case"timecode":return function(e,n){return[u(e,n),u(e,n)]}(e,n);case"preview":return n.value+=r,"skipped";default:return void(n.value+=r)}}function S(e){for(let n=1;n<e.length;n++){const t=e[n-1]+e[n]-128;e[n]=t}}function E(e,n){let t=0,r=Math.floor((e.length+1)/2),a=0;const o=e.length-1;for(;!(a>o||(n[a++]=e[t++],a>o));)n[a++]=e[r++]}},50863:(e,n,t)=>{t.d(n,{d:()=>c,u:()=>s});var r=t(86700),a=t(52093),o=t(3687),l=t(998),i=t(9629);async function c(e,n,t,c){const s={size:0,viewer:n,array:new Uint8Array(n.buffer),offset:t,width:e.dataWindow.xMax-e.dataWindow.xMin+1,height:e.dataWindow.yMax-e.dataWindow.yMin+1,channels:e.channels.length,channelLineOffsets:{},scanOrder:()=>0,bytesPerLine:0,outLineWidth:0,lines:0,scanlineBlockSize:0,inputSize:null,type:0,uncompress:null,getter:()=>0,format:5,outputChannels:0,decodeChannels:{},blockCount:null,byteArray:null,linearSpace:!1,textureType:0};switch(e.compression){case r.he.NO_COMPRESSION:s.lines=1,s.uncompress=a.S4;break;case r.he.RLE_COMPRESSION:s.lines=1,s.uncompress=a.r;break;case r.he.ZIPS_COMPRESSION:s.lines=1,s.uncompress=a.VE,await l.S0.LoadScriptAsync(i.u.FFLATEUrl);break;case r.he.ZIP_COMPRESSION:s.lines=16,s.uncompress=a.VE,await l.S0.LoadScriptAsync(i.u.FFLATEUrl);break;case r.he.PIZ_COMPRESSION:s.lines=32,s.uncompress=a.tg;break;case r.he.PXR24_COMPRESSION:s.lines=16,s.uncompress=a._k,await l.S0.LoadScriptAsync(i.u.FFLATEUrl);break;default:throw new Error(r.he[e.compression]+" is unsupported")}s.scanlineBlockSize=s.lines;const u={};for(const n of e.channels)switch(n.name){case"Y":case"R":case"G":case"B":case"A":u[n.name]=!0,s.type=n.pixelType}let f=!1;if(u.R&&u.G&&u.B)f=!u.A,s.outputChannels=4,s.decodeChannels={R:0,G:1,B:2,A:3};else{if(!u.Y)throw new Error("EXRLoader.parse: file contains unsupported data channels.");s.outputChannels=1,s.decodeChannels={Y:0}}if(1===s.type)switch(c){case i.V.Float:s.getter=r.LD,s.inputSize=o.JH;break;case i.V.HalfFloat:s.getter=r.Jn,s.inputSize=o.JH}else{if(2!==s.type)throw new Error("Unsupported pixelType "+s.type+" for "+e.compression);switch(c){case i.V.Float:s.getter=r.Ff,s.inputSize=o.Y3;break;case i.V.HalfFloat:s.getter=r.Sn,s.inputSize=o.Y3}}s.blockCount=s.height/s.scanlineBlockSize;for(let e=0;e<s.blockCount;e++)(0,r.tB)(n,t);const w=s.width*s.height*s.outputChannels;switch(c){case i.V.Float:s.byteArray=new Float32Array(w),s.textureType=1,f&&s.byteArray.fill(1,0,w);break;case i.V.HalfFloat:s.byteArray=new Uint16Array(w),s.textureType=2,f&&s.byteArray.fill(15360,0,w);break;default:throw new Error("Unsupported type: "+c)}let h=0;for(const n of e.channels)void 0!==s.decodeChannels[n.name]&&(s.channelLineOffsets[n.name]=h*s.width),h+=2*n.pixelType;return s.bytesPerLine=s.width*h,s.outLineWidth=s.width*s.outputChannels,"INCREASING_Y"===e.lineOrder?s.scanOrder=e=>e:s.scanOrder=e=>s.height-1-e,4==s.outputChannels?(s.format=5,s.linearSpace=!0):(s.format=6,s.linearSpace=!1),s}function s(e,n,t,o){const l={value:0};for(let i=0;i<e.height/e.scanlineBlockSize;i++){const c=(0,r.cL)(t,o)-n.dataWindow.yMin;e.size=(0,r.PX)(t,o),e.lines=c+e.scanlineBlockSize>e.height?e.height-c:e.scanlineBlockSize;const s=e.size<e.lines*e.bytesPerLine&&e.uncompress?e.uncompress(e):(0,a.S4)(e);o.value+=e.size;for(let t=0;t<e.scanlineBlockSize;t++){const r=i*e.scanlineBlockSize,a=t+e.scanOrder(r);if(a>=e.height)continue;const o=t*e.bytesPerLine,c=(e.height-1-a)*e.outLineWidth;for(let t=0;t<e.channels;t++){const r=n.channels[t].name,a=e.channelLineOffsets[r],i=e.decodeChannels[r];if(void 0!==i){l.value=o+a;for(let n=0;n<e.width;n++){const t=c+n*e.outputChannels+i;e.byteArray&&(e.byteArray[t]=e.getter(s,l))}}}}}}},98078:(e,n,t)=>{t.d(n,{V:()=>l});var r=t(51137),a=t(86700);const o=20000630;function l(e,n){if(e.getUint32(0,!0)!=o)throw new Error("Incorrect OpenEXR format");const t=e.getUint8(4),l=e.getUint8(5),i={singleTile:!!(2&l),longName:!!(4&l),deepFormat:!!(8&l),multiPart:!!(16&l)};n.value=8;const c={};let s=!0;for(;s;){const t=(0,a.T$)(e.buffer,n);if(t){const o=(0,a.T$)(e.buffer,n),l=(0,a.PX)(e,n),i=(0,a.zX)(e,n,o,l);void 0===i?r.V.Warn(`Unknown header attribute type ${o}'.`):c[t]=i}else s=!1}if(-5&l)throw new Error("Unsupported file format");return{version:t,spec:i,...c}}},3687:(e,n,t)=>{t.d(n,{A_:()=>w,Ez:()=>c,Hh:()=>d,JH:()=>l,Kl:()=>i,LK:()=>u,LU:()=>p,U0:()=>f,Y3:()=>a,aN:()=>o,b7:()=>r,cQ:()=>s,gn:()=>y,lR:()=>h});const r=4,a=4,o=1,l=2,i=8,c=65536,s=c>>3,u=14,f=65537,w=1<<u,h=w-1,p=59,d=63,y=2+d-p},51958:(e,n,t)=>{t.r(n),t.d(n,{_ExrTextureLoader:()=>l});var r=t(98078),a=t(50863),o=t(9629);class l{constructor(){this.supportCascades=!1}loadCubeData(e,n,t,r,a){throw".exr not supported in Cube."}async loadData(e,n,t){const l=new DataView(e.buffer),i={value:0},c=(0,r.V)(l,i),s=await(0,a.d)(c,l,i,o.u.DefaultOutputType);(0,a.u)(s,c,l,i),t(c.dataWindow.xMax-c.dataWindow.xMin+1,c.dataWindow.yMax-c.dataWindow.yMin+1,n.generateMipMaps,!1,(()=>{const e=n.getEngine();n.format=c.format,n.type=s.textureType,n.invertY=!1,n._gammaSpace=!c.linearSpace,s.byteArray&&e._uploadDataToTextureDirectly(n,s.byteArray,0,0,void 0,!0)}))}}}}]);