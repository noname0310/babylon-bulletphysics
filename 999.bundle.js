"use strict";
(self["webpackChunkbabylon_bulletphysics"] = self["webpackChunkbabylon_bulletphysics"] || []).push([[999],{

/***/ 5999:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Dispose: () => (/* binding */ Dispose),
  DumpData: () => (/* binding */ DumpData),
  DumpDataAsync: () => (/* binding */ DumpDataAsync),
  DumpFramebuffer: () => (/* binding */ DumpFramebuffer),
  DumpTools: () => (/* binding */ DumpTools)
});

// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Buffers/buffer.js
var buffer = __webpack_require__(5616);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Maths/math.viewport.js
var math_viewport = __webpack_require__(4494);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Misc/observable.js
var observable = __webpack_require__(9848);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Materials/effect.js
var effect = __webpack_require__(4420);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Materials/drawWrapper.js
var drawWrapper = __webpack_require__(5476);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Shaders/postprocess.vertex.js
var postprocess_vertex = __webpack_require__(6612);
;// ./node_modules/@babylonjs/core/Materials/effectRenderer.js






// Prevents ES6 issue if not imported.

// Fullscreen quad buffers by default.
const defaultOptions = {
    positions: [1, 1, -1, 1, -1, -1, 1, -1],
    indices: [0, 1, 2, 0, 2, 3],
};
/**
 * Helper class to render one or more effects.
 * You can access the previous rendering in your shader by declaring a sampler named textureSampler
 */
class EffectRenderer {
    /**
     * Creates an effect renderer
     * @param engine the engine to use for rendering
     * @param options defines the options of the effect renderer
     */
    constructor(engine, options = defaultOptions) {
        this._fullscreenViewport = new math_viewport/* Viewport */.L(0, 0, 1, 1);
        const positions = options.positions ?? defaultOptions.positions;
        const indices = options.indices ?? defaultOptions.indices;
        this.engine = engine;
        this._vertexBuffers = {
            [buffer/* VertexBuffer */.R.PositionKind]: new buffer/* VertexBuffer */.R(engine, positions, buffer/* VertexBuffer */.R.PositionKind, false, false, 2),
        };
        this._indexBuffer = engine.createIndexBuffer(indices);
        this._onContextRestoredObserver = engine.onContextRestoredObservable.add(() => {
            this._indexBuffer = engine.createIndexBuffer(indices);
            for (const key in this._vertexBuffers) {
                const vertexBuffer = this._vertexBuffers[key];
                vertexBuffer._rebuild();
            }
        });
    }
    /**
     * Sets the current viewport in normalized coordinates 0-1
     * @param viewport Defines the viewport to set (defaults to 0 0 1 1)
     */
    setViewport(viewport = this._fullscreenViewport) {
        this.engine.setViewport(viewport);
    }
    /**
     * Binds the embedded attributes buffer to the effect.
     * @param effect Defines the effect to bind the attributes for
     */
    bindBuffers(effect) {
        this.engine.bindBuffers(this._vertexBuffers, this._indexBuffer, effect);
    }
    /**
     * Sets the current effect wrapper to use during draw.
     * The effect needs to be ready before calling this api.
     * This also sets the default full screen position attribute.
     * @param effectWrapper Defines the effect to draw with
     */
    applyEffectWrapper(effectWrapper) {
        this.engine.setState(true);
        this.engine.depthCullingState.depthTest = false;
        this.engine.stencilState.stencilTest = false;
        this.engine.enableEffect(effectWrapper._drawWrapper);
        this.bindBuffers(effectWrapper.effect);
        effectWrapper.onApplyObservable.notifyObservers({});
    }
    /**
     * Saves engine states
     */
    saveStates() {
        this._savedStateDepthTest = this.engine.depthCullingState.depthTest;
        this._savedStateStencilTest = this.engine.stencilState.stencilTest;
    }
    /**
     * Restores engine states
     */
    restoreStates() {
        this.engine.depthCullingState.depthTest = this._savedStateDepthTest;
        this.engine.stencilState.stencilTest = this._savedStateStencilTest;
    }
    /**
     * Draws a full screen quad.
     */
    draw() {
        this.engine.drawElementsType(0, 0, 6);
    }
    _isRenderTargetTexture(texture) {
        return texture.renderTarget !== undefined;
    }
    /**
     * renders one or more effects to a specified texture
     * @param effectWrapper the effect to renderer
     * @param outputTexture texture to draw to, if null it will render to the screen.
     */
    render(effectWrapper, outputTexture = null) {
        // Ensure effect is ready
        if (!effectWrapper.effect.isReady()) {
            return;
        }
        this.saveStates();
        // Reset state
        this.setViewport();
        const out = outputTexture === null ? null : this._isRenderTargetTexture(outputTexture) ? outputTexture.renderTarget : outputTexture;
        if (out) {
            this.engine.bindFramebuffer(out);
        }
        this.applyEffectWrapper(effectWrapper);
        this.draw();
        if (out) {
            this.engine.unBindFramebuffer(out);
        }
        this.restoreStates();
    }
    /**
     * Disposes of the effect renderer
     */
    dispose() {
        const vertexBuffer = this._vertexBuffers[buffer/* VertexBuffer */.R.PositionKind];
        if (vertexBuffer) {
            vertexBuffer.dispose();
            delete this._vertexBuffers[buffer/* VertexBuffer */.R.PositionKind];
        }
        if (this._indexBuffer) {
            this.engine._releaseBuffer(this._indexBuffer);
        }
        if (this._onContextRestoredObserver) {
            this.engine.onContextRestoredObservable.remove(this._onContextRestoredObserver);
            this._onContextRestoredObserver = null;
        }
    }
}
/**
 * Wraps an effect to be used for rendering
 */
class EffectWrapper {
    /**
     * The underlying effect
     */
    get effect() {
        return this._drawWrapper.effect;
    }
    set effect(effect) {
        this._drawWrapper.effect = effect;
    }
    /**
     * Creates an effect to be renderer
     * @param creationOptions options to create the effect
     */
    constructor(creationOptions) {
        /**
         * Event that is fired right before the effect is drawn (should be used to update uniforms)
         */
        this.onApplyObservable = new observable/* Observable */.cP();
        let shaderPath;
        const uniformNames = creationOptions.uniformNames || [];
        if (creationOptions.vertexShader) {
            shaderPath = {
                fragmentSource: creationOptions.fragmentShader,
                vertexSource: creationOptions.vertexShader,
                spectorName: creationOptions.name || "effectWrapper",
            };
        }
        else {
            // Default scale to use in post process vertex shader.
            uniformNames.push("scale");
            shaderPath = {
                fragmentSource: creationOptions.fragmentShader,
                vertex: "postprocess",
                spectorName: creationOptions.name || "effectWrapper",
            };
            // Sets the default scale to identity for the post process vertex shader.
            this.onApplyObservable.add(() => {
                this.effect.setFloat2("scale", 1, 1);
            });
        }
        const defines = creationOptions.defines ? creationOptions.defines.join("\n") : "";
        this._drawWrapper = new drawWrapper/* DrawWrapper */.E(creationOptions.engine);
        if (creationOptions.useShaderStore) {
            shaderPath.fragment = shaderPath.fragmentSource;
            if (!shaderPath.vertex) {
                shaderPath.vertex = shaderPath.vertexSource;
            }
            delete shaderPath.fragmentSource;
            delete shaderPath.vertexSource;
            this.effect = creationOptions.engine.createEffect(shaderPath, creationOptions.attributeNames || ["position"], uniformNames, creationOptions.samplerNames, defines, undefined, creationOptions.onCompiled, undefined, undefined, creationOptions.shaderLanguage, creationOptions.extraInitializationsAsync);
        }
        else {
            this.effect = new effect/* Effect */.M(shaderPath, creationOptions.attributeNames || ["position"], uniformNames, creationOptions.samplerNames, creationOptions.engine, defines, undefined, creationOptions.onCompiled, undefined, undefined, undefined, creationOptions.shaderLanguage, creationOptions.extraInitializationsAsync);
            this._onContextRestoredObserver = creationOptions.engine.onContextRestoredObservable.add(() => {
                this.effect._pipelineContext = null; // because _prepareEffect will try to dispose this pipeline before recreating it and that would lead to webgl errors
                this.effect._prepareEffect();
            });
        }
    }
    /**
     * Disposes of the effect wrapper
     * @param _ignored kept for backward compatibility
     */
    dispose(_ignored = false) {
        if (this._onContextRestoredObserver) {
            this.effect.getEngine().onContextRestoredObservable.remove(this._onContextRestoredObserver);
            this._onContextRestoredObserver = null;
        }
        this.effect.dispose();
    }
}
//# sourceMappingURL=effectRenderer.js.map
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Misc/tools.js
var tools = __webpack_require__(998);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Maths/math.scalar.functions.js
var math_scalar_functions = __webpack_require__(4867);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Engines/engineStore.js
var engineStore = __webpack_require__(6315);
;// ./node_modules/@babylonjs/core/Misc/dumpTools.js





let _dumpToolsEngine;
let _enginePromise = null;
async function _CreateDumpRenderer() {
    if (!_enginePromise) {
        _enginePromise = new Promise((resolve, reject) => {
            let canvas;
            let engine = null;
            const options = {
                preserveDrawingBuffer: true,
                depth: false,
                stencil: false,
                alpha: true,
                premultipliedAlpha: false,
                antialias: false,
                failIfMajorPerformanceCaveat: false,
            };
            Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 6321))
                .then(({ ThinEngine: thinEngineClass }) => {
                try {
                    canvas = new OffscreenCanvas(100, 100); // will be resized later
                    engine = new thinEngineClass(canvas, false, options);
                }
                catch (e) {
                    // The browser either does not support OffscreenCanvas or WebGL context in OffscreenCanvas, fallback on a regular canvas
                    canvas = document.createElement("canvas");
                    engine = new thinEngineClass(canvas, false, options);
                }
                // remove this engine from the list of instances to avoid using it for other purposes
                engineStore/* EngineStore */.q.Instances.pop();
                // However, make sure to dispose it when no other engines are left
                engineStore/* EngineStore */.q.OnEnginesDisposedObservable.add((e) => {
                    // guaranteed to run when no other instances are left
                    // only dispose if it's not the current engine
                    if (engine && e !== engine && !engine.isDisposed && engineStore/* EngineStore */.q.Instances.length === 0) {
                        // Dump the engine and the associated resources
                        Dispose();
                    }
                });
                engine.getCaps().parallelShaderCompile = undefined;
                const renderer = new EffectRenderer(engine);
                __webpack_require__.e(/* import() */ 71).then(__webpack_require__.bind(__webpack_require__, 9820)).then(({ passPixelShader }) => {
                    if (!engine) {
                        reject("Engine is not defined");
                        return;
                    }
                    const wrapper = new EffectWrapper({
                        engine,
                        name: passPixelShader.name,
                        fragmentShader: passPixelShader.shader,
                        samplerNames: ["textureSampler"],
                    });
                    _dumpToolsEngine = {
                        canvas,
                        engine,
                        renderer,
                        wrapper,
                    };
                    resolve(_dumpToolsEngine);
                });
            })
                .catch(reject);
        });
    }
    return await _enginePromise;
}
/**
 * Dumps the current bound framebuffer
 * @param width defines the rendering width
 * @param height defines the rendering height
 * @param engine defines the hosting engine
 * @param successCallback defines the callback triggered once the data are available
 * @param mimeType defines the mime type of the result
 * @param fileName defines the filename to download. If present, the result will automatically be downloaded
 * @param quality The quality of the image if lossy mimeType is used (e.g. image/jpeg, image/webp). See {@link https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/toBlob | HTMLCanvasElement.toBlob()}'s `quality` parameter.
 * @returns a void promise
 */
async function DumpFramebuffer(width, height, engine, successCallback, mimeType = "image/png", fileName, quality) {
    // Read the contents of the framebuffer
    const bufferView = await engine.readPixels(0, 0, width, height);
    const data = new Uint8Array(bufferView.buffer);
    DumpData(width, height, data, successCallback, mimeType, fileName, true, undefined, quality);
}
/**
 * Dumps an array buffer
 * @param width defines the rendering width
 * @param height defines the rendering height
 * @param data the data array
 * @param mimeType defines the mime type of the result
 * @param fileName defines the filename to download. If present, the result will automatically be downloaded
 * @param invertY true to invert the picture in the Y dimension
 * @param toArrayBuffer true to convert the data to an ArrayBuffer (encoded as `mimeType`) instead of a base64 string
 * @param quality The quality of the image if lossy mimeType is used (e.g. image/jpeg, image/webp). See {@link https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/toBlob | HTMLCanvasElement.toBlob()}'s `quality` parameter.
 * @returns a promise that resolve to the final data
 */
function DumpDataAsync(width, height, data, mimeType = "image/png", fileName, invertY = false, toArrayBuffer = false, quality) {
    return new Promise((resolve) => {
        DumpData(width, height, data, (result) => resolve(result), mimeType, fileName, invertY, toArrayBuffer, quality);
    });
}
/**
 * Dumps an array buffer
 * @param width defines the rendering width
 * @param height defines the rendering height
 * @param data the data array
 * @param successCallback defines the callback triggered once the data are available
 * @param mimeType defines the mime type of the result
 * @param fileName defines the filename to download. If present, the result will automatically be downloaded
 * @param invertY true to invert the picture in the Y dimension
 * @param toArrayBuffer true to convert the data to an ArrayBuffer (encoded as `mimeType`) instead of a base64 string
 * @param quality The quality of the image if lossy mimeType is used (e.g. image/jpeg, image/webp). See {@link https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/toBlob | HTMLCanvasElement.toBlob()}'s `quality` parameter.
 */
function DumpData(width, height, data, successCallback, mimeType = "image/png", fileName, invertY = false, toArrayBuffer = false, quality) {
    _CreateDumpRenderer().then((renderer) => {
        renderer.engine.setSize(width, height, true);
        // Convert if data are float32
        if (data instanceof Float32Array) {
            const data2 = new Uint8Array(data.length);
            let n = data.length;
            while (n--) {
                const v = data[n];
                data2[n] = Math.round((0,math_scalar_functions/* Clamp */.OQ)(v) * 255);
            }
            data = data2;
        }
        // Create the image
        const texture = renderer.engine.createRawTexture(data, width, height, 5, false, !invertY, 1);
        renderer.renderer.setViewport();
        renderer.renderer.applyEffectWrapper(renderer.wrapper);
        renderer.wrapper.effect._bindTexture("textureSampler", texture);
        renderer.renderer.draw();
        if (toArrayBuffer) {
            tools/* Tools */.S0.ToBlob(renderer.canvas, (blob) => {
                const fileReader = new FileReader();
                fileReader.onload = (event) => {
                    const arrayBuffer = event.target.result;
                    if (successCallback) {
                        successCallback(arrayBuffer);
                    }
                };
                fileReader.readAsArrayBuffer(blob);
            }, mimeType, quality);
        }
        else {
            tools/* Tools */.S0.EncodeScreenshotCanvasData(renderer.canvas, successCallback, mimeType, fileName, quality);
        }
        texture.dispose();
    });
}
/**
 * Dispose the dump tools associated resources
 */
function Dispose() {
    if (_dumpToolsEngine) {
        _dumpToolsEngine.wrapper.dispose();
        _dumpToolsEngine.renderer.dispose();
        _dumpToolsEngine.engine.dispose();
    }
    else {
        // in cases where the engine is not yet created, we need to wait for it to dispose it
        _enginePromise?.then((dumpToolsEngine) => {
            dumpToolsEngine.wrapper.dispose();
            dumpToolsEngine.renderer.dispose();
            dumpToolsEngine.engine.dispose();
        });
    }
    _enginePromise = null;
    _dumpToolsEngine = null;
}
/**
 * Object containing a set of static utilities functions to dump data from a canvas
 * @deprecated use functions
 */
const DumpTools = {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    DumpData,
    // eslint-disable-next-line @typescript-eslint/naming-convention
    DumpDataAsync,
    // eslint-disable-next-line @typescript-eslint/naming-convention
    DumpFramebuffer,
    // eslint-disable-next-line @typescript-eslint/naming-convention
    Dispose,
};
/**
 * This will be executed automatically for UMD and es5.
 * If esm dev wants the side effects to execute they will have to run it manually
 * Once we build native modules those need to be exported.
 * @internal
 */
const initSideEffects = () => {
    // References the dependencies.
    tools/* Tools */.S0.DumpData = DumpData;
    tools/* Tools */.S0.DumpDataAsync = DumpDataAsync;
    tools/* Tools */.S0.DumpFramebuffer = DumpFramebuffer;
};
initSideEffects();
//# sourceMappingURL=dumpTools.js.map

/***/ })

}]);