(()=>{"use strict";var e={79603:(e,n,t)=>{e.exports=t.p+"4b820abe0dbf3ff71dbc.wasm"},57907:(e,n,t)=>{let r,o;const i=new Array(128).fill(void 0);function s(e){return i[e]}i.push(void 0,null,!0,!1);let a=i.length;function c(e){const n=s(e);return function(e){e<132||(i[e]=a,a=e)}(e),n}const _="undefined"!=typeof TextDecoder?new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0}):{decode:()=>{throw Error("TextDecoder not available")}};"undefined"!=typeof TextDecoder&&_.decode();let u=null;function b(e,n){return e>>>=0,_.decode((null!==u&&u.buffer===o.memory.buffer||(u=new Uint8Array(o.memory.buffer)),u).slice(e,e+n))}function w(e){a===i.length&&i.push(i.length+1);const n=a;return a=i[n],i[n]=e,n}function f(e,n){try{return e.apply(this,n)}catch(e){o.__wbindgen_exn_store(w(e))}}const l="undefined"==typeof FinalizationRegistry?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry((e=>o.__wbg_wbg_rayon_poolbuilder_free(e>>>0,1)));class g{static __wrap(e){e>>>=0;const n=Object.create(g.prototype);return n.__wbg_ptr=e,l.register(n,n.__wbg_ptr,n),n}__destroy_into_raw(){const e=this.__wbg_ptr;return this.__wbg_ptr=0,l.unregister(this),e}free(){const e=this.__destroy_into_raw();o.__wbg_wbg_rayon_poolbuilder_free(e,0)}numThreads(){return o.wbg_rayon_poolbuilder_numThreads(this.__wbg_ptr)>>>0}receiver(){return o.wbg_rayon_poolbuilder_receiver(this.__wbg_ptr)>>>0}build(){o.wbg_rayon_poolbuilder_build(this.__wbg_ptr)}}async function d(e,n){if(void 0!==o)return o;let i;void 0!==e&&Object.getPrototypeOf(e)===Object.prototype?({module_or_path:e,memory:n,thread_stack_size:i}=e):console.warn("using deprecated parameters for the initialization function; pass a single object instead"),void 0===e&&(e=new URL(t(79603),t.b));const a=function(){const e={wbg:{}};return e.wbg.__wbindgen_object_drop_ref=function(e){c(e)},e.wbg.__wbindgen_string_new=function(e,n){return w(b(e,n))},e.wbg.__wbg_instanceof_Window_5012736c80a01584=function(e){let n;try{n=s(e)instanceof Window}catch(e){n=!1}return n},e.wbg.__wbg_log_b103404cc5920657=function(e){console.log(s(e))},e.wbg.__wbg_newnoargs_76313bd6ff35d0f2=function(e,n){return w(new Function(b(e,n)))},e.wbg.__wbg_call_1084a111329e68ce=function(){return f((function(e,n){return w(s(e).call(s(n)))}),arguments)},e.wbg.__wbindgen_object_clone_ref=function(e){return w(s(e))},e.wbg.__wbg_self_3093d5d1f7bcb682=function(){return f((function(){return w(self.self)}),arguments)},e.wbg.__wbg_window_3bcfc4d31bc012f8=function(){return f((function(){return w(window.window)}),arguments)},e.wbg.__wbg_globalThis_86b222e13bdf32ed=function(){return f((function(){return w(globalThis.globalThis)}),arguments)},e.wbg.__wbg_global_e5a3fe56f8be9485=function(){return f((function(){return w(global.global)}),arguments)},e.wbg.__wbindgen_is_undefined=function(e){return void 0===s(e)},e.wbg.__wbindgen_throw=function(e,n){throw new Error(b(e,n))},e.wbg.__wbindgen_module=function(){return w(d.__wbindgen_wasm_module)},e.wbg.__wbindgen_memory=function(){return w(o.memory)},e.wbg.__wbg_startWorkers_d587c7d659590d3c=function(e,n,o){return w(async function(e,n,o){if(0===o.numThreads())throw new Error("num_threads must be > 0.");const i={module:e,memory:n,receiver:o.receiver()};r=await Promise.all(Array.from({length:o.numThreads()},(async()=>{const e=new Worker(new URL(t.p+t.u(7907),t.b),{type:void 0});return e.postMessage(i),await new Promise((n=>e.addEventListener("message",n,{once:!0}))),e}))),o.build()}(c(e),c(n),g.__wrap(o)))},e}();("string"==typeof e||"function"==typeof Request&&e instanceof Request||"function"==typeof URL&&e instanceof URL)&&(e=fetch(e)),function(e,n){e.wbg.memory=n||new WebAssembly.Memory({initial:18,maximum:16384,shared:!0})}(a,n);const{instance:_,module:l}=await async function(e,n){if("function"==typeof Response&&e instanceof Response){if("function"==typeof WebAssembly.instantiateStreaming)try{return await WebAssembly.instantiateStreaming(e,n)}catch(n){if("application/wasm"==e.headers.get("Content-Type"))throw n;console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",n)}const t=await e.arrayBuffer();return await WebAssembly.instantiate(t,n)}{const t=await WebAssembly.instantiate(e,n);return t instanceof WebAssembly.Instance?{instance:t,module:e}:t}}(await e,a);return function(e,n,t){if(o=e.exports,d.__wbindgen_wasm_module=n,u=null,void 0!==t&&("number"!=typeof t||0===t||t%65536!=0))throw"invalid stack size";return o.__wbindgen_start(t),o}(_,l,i)}const p=d;onmessage=async({data:{receiver:e,...n}})=>{await p(n),postMessage(!0),function(e){o.wbg_rayon_start_worker(e)}(e)}}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={exports:{}};return e[r](i,i.exports,t),i.exports}t.m=e,t.u=e=>e+".bundle.js",t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&"SCRIPT"===n.currentScript.tagName.toUpperCase()&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&(!e||!/^http(s?):/.test(e));)e=r[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=self.location+"",t(57907)})();