(()=>{"use strict";var e={79845:(e,t,n)=>{e.exports=n.p+"a50830fcd79d1bf9693b.wasm"},17909:(e,t,n)=>{let r,o;const i="undefined"!=typeof TextDecoder?new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0}):{decode:()=>{throw Error("TextDecoder not available")}};"undefined"!=typeof TextDecoder&&i.decode();let a=null;function c(){return null!==a&&a.buffer===o.memory.buffer||(a=new Uint8Array(o.memory.buffer)),a}function s(e,t){return e>>>=0,i.decode(c().slice(e,e+t))}const u=new Array(128).fill(void 0);u.push(void 0,null,!0,!1);let _=u.length;function f(e){_===u.length&&u.push(u.length+1);const t=_;if(_=u[t],"number"!=typeof _)throw new Error("corrupt heap");return u[t]=e,t}function w(e){return u[e]}function l(e){const t=w(e);return function(e){e<132||(u[e]=_,_=e)}(e),t}function b(e){if("boolean"!=typeof e)throw new Error("expected a boolean argument, found "+typeof e)}function g(e){if("number"!=typeof e)throw new Error("expected a number argument, found "+typeof e)}function d(e,t){try{return e.apply(this,t)}catch(e){let t=function(){try{return e instanceof Error?`${e.message}\n\nStack:\n${e.stack}`:e.toString()}catch(e){return"<failed to stringify thrown value>"}}();throw console.error("wasm-bindgen: imported JS function that was not marked as `catch` threw an error:",t),e}}let p=0;const h="undefined"!=typeof TextEncoder?new TextEncoder("utf-8"):{encode:()=>{throw Error("TextEncoder not available")}};let m=null;function y(){return null!==m&&m.buffer===o.memory.buffer||(m=new DataView(o.memory.buffer)),m}function v(e,t){try{return e.apply(this,t)}catch(e){o.__wbindgen_exn_store(f(e))}}const E="undefined"==typeof FinalizationRegistry?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry((e=>o.__wbg_wbg_rayon_poolbuilder_free(e>>>0,1)));class T{constructor(){throw new Error("cannot invoke `new` directly")}static __wrap(e){e>>>=0;const t=Object.create(T.prototype);return t.__wbg_ptr=e,E.register(t,t.__wbg_ptr,t),t}__destroy_into_raw(){const e=this.__wbg_ptr;return this.__wbg_ptr=0,E.unregister(this),e}free(){const e=this.__destroy_into_raw();o.__wbg_wbg_rayon_poolbuilder_free(e,0)}numThreads(){if(0==this.__wbg_ptr)throw new Error("Attempt to use a moved value");return g(this.__wbg_ptr),o.wbg_rayon_poolbuilder_numThreads(this.__wbg_ptr)>>>0}receiver(){if(0==this.__wbg_ptr)throw new Error("Attempt to use a moved value");return g(this.__wbg_ptr),o.wbg_rayon_poolbuilder_receiver(this.__wbg_ptr)>>>0}build(){if(0==this.__wbg_ptr)throw new Error("Attempt to use a moved value");g(this.__wbg_ptr),o.wbg_rayon_poolbuilder_build(this.__wbg_ptr)}}function x(){const e={wbg:{}};return e.wbg.__wbindgen_string_new=function(e,t){return f(s(e,t))},e.wbg.__wbindgen_object_drop_ref=function(e){l(e)},e.wbg.__wbg_new_abda76e883ba8a5f=function(){return d((function(){return f(new Error)}),arguments)},e.wbg.__wbg_stack_658279fe44541cf6=function(){return d((function(e,t){const n=function(e,t,n){if("string"!=typeof e)throw new Error("expected a string argument, found "+typeof e);if(void 0===n){const n=h.encode(e),r=t(n.length,1)>>>0;return c().subarray(r,r+n.length).set(n),p=n.length,r}let r=e.length,o=t(r,1)>>>0;const i=c();let a=0;for(;a<r;a++){const t=e.charCodeAt(a);if(t>127)break;i[o+a]=t}if(a!==r){0!==a&&(e=e.slice(a)),o=n(o,r,r=a+3*e.length,1)>>>0;const t=function(e,t){const n=h.encode(e);return t.set(n),{read:e.length,written:n.length}}(e,c().subarray(o+a,o+r));if(t.read!==e.length)throw new Error("failed to pass whole string");a+=t.written,o=n(o,r,a,1)>>>0}return p=a,o}(w(t).stack,o.__wbindgen_malloc,o.__wbindgen_realloc),r=p;y().setInt32(e+4,r,!0),y().setInt32(e+0,n,!0)}),arguments)},e.wbg.__wbg_error_f851667af71bcfc6=function(){return d((function(e,t){let n,r;try{n=e,r=t,console.error(s(e,t))}finally{o.__wbindgen_free(n,r,1)}}),arguments)},e.wbg.__wbg_error_09480e4aadca50ad=function(){return d((function(e){console.error(w(e))}),arguments)},e.wbg.__wbg_log_b103404cc5920657=function(){return d((function(e){console.log(w(e))}),arguments)},e.wbg.__wbg_instanceof_Window_5012736c80a01584=function(){return d((function(e){let t;try{t=w(e)instanceof Window}catch(e){t=!1}const n=t;return b(n),n}),arguments)},e.wbg.__wbg_newnoargs_76313bd6ff35d0f2=function(){return d((function(e,t){return f(new Function(s(e,t)))}),arguments)},e.wbg.__wbg_call_1084a111329e68ce=function(){return v((function(e,t){return f(w(e).call(w(t)))}),arguments)},e.wbg.__wbindgen_object_clone_ref=function(e){return f(w(e))},e.wbg.__wbg_self_3093d5d1f7bcb682=function(){return v((function(){return f(self.self)}),arguments)},e.wbg.__wbg_window_3bcfc4d31bc012f8=function(){return v((function(){return f(window.window)}),arguments)},e.wbg.__wbg_globalThis_86b222e13bdf32ed=function(){return v((function(){return f(globalThis.globalThis)}),arguments)},e.wbg.__wbg_global_e5a3fe56f8be9485=function(){return v((function(){return f(global.global)}),arguments)},e.wbg.__wbindgen_is_undefined=function(e){const t=void 0===w(e);return b(t),t},e.wbg.__wbindgen_throw=function(e,t){throw new Error(s(e,t))},e.wbg.__wbindgen_module=function(){return f(A.__wbindgen_wasm_module)},e.wbg.__wbindgen_memory=function(){return f(o.memory)},e.wbg.__wbg_startWorkers_d587c7d659590d3c=function(){return d((function(e,t,o){return f(async function(e,t,o){if(0===o.numThreads())throw new Error("num_threads must be > 0.");const i={module:e,memory:t,receiver:o.receiver()};r=await Promise.all(Array.from({length:o.numThreads()},(async()=>{const e=new Worker(new URL(n.p+n.u(7909),n.b),{type:void 0});return e.postMessage(i),await new Promise((t=>e.addEventListener("message",t,{once:!0}))),e}))),o.build()}(l(e),l(t),T.__wrap(o)))}),arguments)},e}async function A(e,t){if(void 0!==o)return o;let r;void 0!==e&&Object.getPrototypeOf(e)===Object.prototype?({module_or_path:e,memory:t,thread_stack_size:r}=e):console.warn("using deprecated parameters for the initialization function; pass a single object instead"),void 0===e&&(e=new URL(n(79845),n.b));const i=x();("string"==typeof e||"function"==typeof Request&&e instanceof Request||"function"==typeof URL&&e instanceof URL)&&(e=fetch(e)),function(e,t){e.wbg.memory=t||new WebAssembly.Memory({initial:19,maximum:16384,shared:!0})}(i,t);const{instance:c,module:s}=await async function(e,t){if("function"==typeof Response&&e instanceof Response){if("function"==typeof WebAssembly.instantiateStreaming)try{return await WebAssembly.instantiateStreaming(e,t)}catch(t){if("application/wasm"==e.headers.get("Content-Type"))throw t;console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",t)}const n=await e.arrayBuffer();return await WebAssembly.instantiate(n,t)}{const n=await WebAssembly.instantiate(e,t);return n instanceof WebAssembly.Instance?{instance:n,module:e}:n}}(await e,i);return function(e,t,n){if(o=e.exports,A.__wbindgen_wasm_module=t,m=null,a=null,void 0!==n&&("number"!=typeof n||0===n||n%65536!=0))throw"invalid stack size";return o.__wbindgen_start(n),o}(c,s,r)}const k=A;onmessage=async({data:{receiver:e,...t}})=>{await k(t),postMessage(!0),function(e){g(e),o.wbg_rayon_start_worker(e)}(e)}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}n.m=e,n.u=e=>e+".bundle.js",n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&"SCRIPT"===t.currentScript.tagName.toUpperCase()&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&(!e||!/^http(s?):/.test(e));)e=r[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=self.location+"",n(17909)})();