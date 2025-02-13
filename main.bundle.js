/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 34503:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Engines/engine.js
var Engines_engine = __webpack_require__(93856);
;// ./src/Test/baseRuntime.ts
class BaseRuntime {
    _canvas;
    _engine;
    _scene;
    _onTick;
    constructor(params) {
        this._canvas = params.canvas;
        this._engine = params.engine;
        this._scene = null;
        this._onTick = null;
    }
    static async Create(params) {
        const runtime = new BaseRuntime(params);
        runtime._scene = await runtime._initialize(params.sceneBuilder);
        runtime._onTick = runtime._makeOnTick();
        return runtime;
    }
    run() {
        const engine = this._engine;
        window.addEventListener("resize", this._onResize);
        engine.runRenderLoop(this._onTick);
    }
    dispose() {
        window.removeEventListener("resize", this._onResize);
        this._engine.dispose();
    }
    _onResize = () => {
        this._engine.resize();
    };
    async _initialize(sceneBuilder) {
        return await sceneBuilder.build(this._canvas, this._engine);
    }
    _makeOnTick() {
        const scene = this._scene;
        return () => scene.render();
    }
}

;// ./src/Test/buildSceneEntry.ts


async function buildSceneEntry(sceneList, defaultSceneIndex) {
    await new Promise(resolve => window.onload = () => resolve());
    const canvas = document.createElement("canvas");
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    canvas.style.display = "block";
    document.body.appendChild(canvas);
    const loader = new class {
        _runtime = null;
        async loadScene(sceneBuilder) {
            if (this._runtime) {
                this._runtime.dispose();
            }
            const engine = new Engines_engine/* Engine */.N(canvas, false, {
                preserveDrawingBuffer: false,
                stencil: true,
                antialias: true,
                alpha: false,
                premultipliedAlpha: false,
                powerPreference: "high-performance",
                doNotHandleTouchAction: false,
                doNotHandleContextLost: true,
                audioEngine: false,
                disableWebGL2Support: false
            }, true);
            const runtime = this._runtime = await BaseRuntime.Create({
                canvas,
                engine,
                sceneBuilder
            });
            runtime.run();
            return runtime;
        }
    }();
    const parentDiv = canvas.parentElement;
    parentDiv.style.display = "flex";
    parentDiv.style.flexDirection = "row-reverse";
    const listContainerOuter = document.createElement("div");
    listContainerOuter.style.position = "absolute";
    listContainerOuter.style.top = "0";
    listContainerOuter.style.right = "0";
    listContainerOuter.style.width = "100%";
    listContainerOuter.style.height = "100%";
    listContainerOuter.style.overflow = "hidden";
    listContainerOuter.style.pointerEvents = "none";
    parentDiv.appendChild(listContainerOuter);
    const listContainer = document.createElement("div");
    listContainer.style.position = "absolute";
    listContainer.style.top = "0";
    listContainer.style.right = "0";
    listContainer.style.width = "auto";
    listContainer.style.height = "100%";
    listContainer.style.transition = "right 0.5s";
    listContainer.style.pointerEvents = "none";
    listContainer.style.zIndex = "100";
    listContainerOuter.appendChild(listContainer);
    const listContainerToggle = document.createElement("button");
    listContainerToggle.style.position = "absolute";
    listContainerToggle.style.width = "20px";
    listContainerToggle.style.height = "20px";
    listContainerToggle.style.top = "0";
    listContainerToggle.style.right = "100%";
    listContainerToggle.style.backgroundColor = "rgba(0, 0, 0, 0)";
    listContainerToggle.style.border = "none";
    listContainerToggle.style.textAlign = "center";
    listContainerToggle.style.color = "black";
    listContainerToggle.style.pointerEvents = "auto";
    listContainerToggle.textContent = ">";
    listContainerToggle.style.textShadow = "1px 1px 1px #aaa";
    listContainer.appendChild(listContainerToggle);
    let listContainerToggleFadeOutTimeout = null;
    listContainerToggle.style.transition = "opacity 0.5s";
    const listContainerToggleFadeOut = () => {
        listContainerToggle.style.opacity = "1";
        if (listContainerToggleFadeOutTimeout !== null) {
            window.clearTimeout(listContainerToggleFadeOutTimeout);
            listContainerToggleFadeOutTimeout = null;
        }
        listContainerToggleFadeOutTimeout = window.setTimeout(() => {
            listContainerToggleFadeOutTimeout = null;
            listContainerToggle.style.opacity = "0";
        }, 2000);
    };
    listContainerToggle.ontouchmove = () => {
        if (listContainer.style.right !== "0px")
            listContainerToggleFadeOut();
    };
    listContainerToggle.onmousemove = () => {
        if (listContainer.style.right !== "0px")
            listContainerToggleFadeOut();
    };
    listContainerToggle.onmousemove(new MouseEvent("mousemove"));
    listContainerToggle.onclick = () => {
        if (listContainer.style.right === "0px") {
            listContainer.style.right = -listContainer.clientWidth + "px";
            listContainerToggle.textContent = "<";
            listContainerToggleFadeOut();
        }
        else {
            listContainer.style.right = "0px";
            listContainerToggle.textContent = ">";
            window.clearTimeout(listContainerToggleFadeOutTimeout ?? undefined);
            listContainerToggleFadeOutTimeout = null;
            listContainerToggle.style.opacity = "1";
        }
    };
    const list = document.createElement("div");
    list.style.display = "flex";
    list.style.width = "auto";
    list.style.height = "100%";
    list.style.flexDirection = "column";
    list.style.justifyContent = "right";
    list.style.pointerEvents = "auto";
    list.style.overflowX = "hidden";
    list.style.overflowY = "auto";
    list.style.scrollbarGutter = "stable";
    list.style.pointerEvents = "none";
    listContainer.appendChild(list);
    let blockLoad = false;
    for (let i = 0; i < sceneList.length; ++i) {
        const item = document.createElement("a");
        item.style.padding = "3px";
        item.style.cursor = "pointer";
        item.style.fontFamily = "sans-serif";
        item.style.fontSize = "14px";
        item.style.fontWeight = "bold";
        item.style.textAlign = "right";
        item.style.textShadow = "1px 1px 1px #aaa";
        item.style.userSelect = "none";
        item.style.pointerEvents = "auto";
        item.textContent = sceneList[i][0];
        item.onclick = async () => {
            if (blockLoad)
                return;
            blockLoad = true;
            listContainerOuter.remove();
            await loader.loadScene(await sceneList[i][1]());
            blockLoad = false;
        };
        list.appendChild(item);
    }
    if (defaultSceneIndex !== undefined) {
        await loader.loadScene(await sceneList[defaultSceneIndex][1]());
    }
}

;// ./src/Test/index.ts

const scenes = [
    ["b1 multi world600 body", async () => new (await Promise.all(/* import() */[__webpack_require__.e(9071), __webpack_require__.e(998), __webpack_require__.e(7481), __webpack_require__.e(2798), __webpack_require__.e(7491), __webpack_require__.e(8946), __webpack_require__.e(6793), __webpack_require__.e(8182), __webpack_require__.e(6459), __webpack_require__.e(6980), __webpack_require__.e(8798)]).then(__webpack_require__.bind(__webpack_require__, 8798))).SceneBuilder()],
    ["b1 multi world600 body ammo", async () => new (await Promise.all(/* import() */[__webpack_require__.e(9071), __webpack_require__.e(998), __webpack_require__.e(7481), __webpack_require__.e(2798), __webpack_require__.e(7491), __webpack_require__.e(8946), __webpack_require__.e(6793), __webpack_require__.e(4187), __webpack_require__.e(5364)]).then(__webpack_require__.bind(__webpack_require__, 55364))).SceneBuilder()],
    ["b1 multi world600 body bundle", async () => new (await Promise.all(/* import() */[__webpack_require__.e(9071), __webpack_require__.e(998), __webpack_require__.e(7481), __webpack_require__.e(2798), __webpack_require__.e(7491), __webpack_require__.e(8946), __webpack_require__.e(6793), __webpack_require__.e(8182), __webpack_require__.e(6594), __webpack_require__.e(6459), __webpack_require__.e(6980), __webpack_require__.e(2966)]).then(__webpack_require__.bind(__webpack_require__, 62966))).SceneBuilder()],
    ["b2 thread count", async () => new (await Promise.all(/* import() */[__webpack_require__.e(9071), __webpack_require__.e(998), __webpack_require__.e(7481), __webpack_require__.e(2798), __webpack_require__.e(7491), __webpack_require__.e(8946), __webpack_require__.e(6793), __webpack_require__.e(8182), __webpack_require__.e(6594), __webpack_require__.e(6459), __webpack_require__.e(6980), __webpack_require__.e(677)]).then(__webpack_require__.bind(__webpack_require__, 10677))).SceneBuilder()],
    ["b3 ammo", async () => new (await Promise.all(/* import() */[__webpack_require__.e(9071), __webpack_require__.e(998), __webpack_require__.e(7481), __webpack_require__.e(2798), __webpack_require__.e(7491), __webpack_require__.e(8946), __webpack_require__.e(6793), __webpack_require__.e(4187), __webpack_require__.e(7129)]).then(__webpack_require__.bind(__webpack_require__, 57129))).SceneBuilder()],
    ["b3 dynamic shadow", async () => new (await Promise.all(/* import() */[__webpack_require__.e(9071), __webpack_require__.e(998), __webpack_require__.e(7481), __webpack_require__.e(2798), __webpack_require__.e(7491), __webpack_require__.e(8946), __webpack_require__.e(6793), __webpack_require__.e(8182), __webpack_require__.e(6594), __webpack_require__.e(6459), __webpack_require__.e(3948), __webpack_require__.e(1858)]).then(__webpack_require__.bind(__webpack_require__, 11858))).SceneBuilder()],
    ["b3 not optimized", async () => new (await Promise.all(/* import() */[__webpack_require__.e(9071), __webpack_require__.e(998), __webpack_require__.e(7481), __webpack_require__.e(2798), __webpack_require__.e(7491), __webpack_require__.e(8946), __webpack_require__.e(6793), __webpack_require__.e(8182), __webpack_require__.e(6594), __webpack_require__.e(6459), __webpack_require__.e(5203), __webpack_require__.e(4281)]).then(__webpack_require__.bind(__webpack_require__, 14281))).SceneBuilder()],
    ["b4 multi world600 body", async () => new (await Promise.all(/* import() */[__webpack_require__.e(9071), __webpack_require__.e(3126), __webpack_require__.e(998), __webpack_require__.e(7481), __webpack_require__.e(2798), __webpack_require__.e(7491), __webpack_require__.e(8946), __webpack_require__.e(6793), __webpack_require__.e(1992), __webpack_require__.e(4361), __webpack_require__.e(6464), __webpack_require__.e(1912), __webpack_require__.e(1958), __webpack_require__.e(7136), __webpack_require__.e(9158), __webpack_require__.e(1427), __webpack_require__.e(8943), __webpack_require__.e(8182), __webpack_require__.e(6459), __webpack_require__.e(6980), __webpack_require__.e(4179)]).then(__webpack_require__.bind(__webpack_require__, 84179))).SceneBuilder()],
    ["b4 multi world600 body ammo", async () => new (await Promise.all(/* import() */[__webpack_require__.e(9071), __webpack_require__.e(998), __webpack_require__.e(7481), __webpack_require__.e(2798), __webpack_require__.e(7491), __webpack_require__.e(8946), __webpack_require__.e(6793), __webpack_require__.e(1992), __webpack_require__.e(4187), __webpack_require__.e(2541)]).then(__webpack_require__.bind(__webpack_require__, 32541))).SceneBuilder()],
    ["b4 multi world600 body bundle", async () => new (await Promise.all(/* import() */[__webpack_require__.e(9071), __webpack_require__.e(998), __webpack_require__.e(7481), __webpack_require__.e(2798), __webpack_require__.e(7491), __webpack_require__.e(8946), __webpack_require__.e(6793), __webpack_require__.e(1992), __webpack_require__.e(8182), __webpack_require__.e(6594), __webpack_require__.e(6459), __webpack_require__.e(6980), __webpack_require__.e(5499)]).then(__webpack_require__.bind(__webpack_require__, 45499))).SceneBuilder()],
    ["b4 multi world600 body bundle runtime", async () => new (await Promise.all(/* import() */[__webpack_require__.e(9071), __webpack_require__.e(998), __webpack_require__.e(7481), __webpack_require__.e(2798), __webpack_require__.e(7491), __webpack_require__.e(8946), __webpack_require__.e(6793), __webpack_require__.e(1992), __webpack_require__.e(8182), __webpack_require__.e(6594), __webpack_require__.e(6459), __webpack_require__.e(3948), __webpack_require__.e(627)]).then(__webpack_require__.bind(__webpack_require__, 10627))).SceneBuilder()],
    ["b4 multi world600 body runtime", async () => new (await Promise.all(/* import() */[__webpack_require__.e(9071), __webpack_require__.e(3126), __webpack_require__.e(998), __webpack_require__.e(7481), __webpack_require__.e(2798), __webpack_require__.e(7491), __webpack_require__.e(8946), __webpack_require__.e(6793), __webpack_require__.e(1992), __webpack_require__.e(4361), __webpack_require__.e(6464), __webpack_require__.e(1912), __webpack_require__.e(1958), __webpack_require__.e(7136), __webpack_require__.e(9158), __webpack_require__.e(1427), __webpack_require__.e(8943), __webpack_require__.e(8182), __webpack_require__.e(6459), __webpack_require__.e(3948), __webpack_require__.e(4411)]).then(__webpack_require__.bind(__webpack_require__, 44411))).SceneBuilder()],
    ["t constraint", async () => new (await Promise.all(/* import() */[__webpack_require__.e(9071), __webpack_require__.e(998), __webpack_require__.e(7481), __webpack_require__.e(2798), __webpack_require__.e(7491), __webpack_require__.e(8946), __webpack_require__.e(6793), __webpack_require__.e(8182), __webpack_require__.e(6594), __webpack_require__.e(7002), __webpack_require__.e(9013)]).then(__webpack_require__.bind(__webpack_require__, 29013))).SceneBuilder()],
    ["t multi physics runtime", async () => new (await Promise.all(/* import() */[__webpack_require__.e(9071), __webpack_require__.e(998), __webpack_require__.e(7481), __webpack_require__.e(2798), __webpack_require__.e(7491), __webpack_require__.e(8946), __webpack_require__.e(6793), __webpack_require__.e(8182), __webpack_require__.e(6594), __webpack_require__.e(3948), __webpack_require__.e(7002), __webpack_require__.e(9297)]).then(__webpack_require__.bind(__webpack_require__, 39297))).SceneBuilder()],
    ["t multi physics runtime shadow", async () => new (await Promise.all(/* import() */[__webpack_require__.e(9071), __webpack_require__.e(998), __webpack_require__.e(7481), __webpack_require__.e(2798), __webpack_require__.e(7491), __webpack_require__.e(8946), __webpack_require__.e(6793), __webpack_require__.e(8182), __webpack_require__.e(6594), __webpack_require__.e(3948), __webpack_require__.e(7002), __webpack_require__.e(6942)]).then(__webpack_require__.bind(__webpack_require__, 6942))).SceneBuilder()],
    ["t physics plugin", async () => new (await Promise.all(/* import() */[__webpack_require__.e(9071), __webpack_require__.e(998), __webpack_require__.e(7481), __webpack_require__.e(2798), __webpack_require__.e(7491), __webpack_require__.e(8946), __webpack_require__.e(1912), __webpack_require__.e(3948), __webpack_require__.e(7002), __webpack_require__.e(3801)]).then(__webpack_require__.bind(__webpack_require__, 54179))).SceneBuilder()],
    ["t physics runtime", async () => new (await Promise.all(/* import() */[__webpack_require__.e(9071), __webpack_require__.e(998), __webpack_require__.e(7481), __webpack_require__.e(2798), __webpack_require__.e(7491), __webpack_require__.e(8946), __webpack_require__.e(6793), __webpack_require__.e(8182), __webpack_require__.e(6594), __webpack_require__.e(7002), __webpack_require__.e(5203), __webpack_require__.e(8641)]).then(__webpack_require__.bind(__webpack_require__, 18641))).SceneBuilder()]
];
buildSceneEntry(scenes);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + ({"3126":"wgslShaders","9071":"glslShaders"}[chunkId] || chunkId) + ".bundle.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "babylon-bulletphysics:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			8792: 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkbabylon_bulletphysics"] = self["webpackChunkbabylon_bulletphysics"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [3856], () => (__webpack_require__(34503)))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;