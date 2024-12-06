"use strict";
(self["webpackChunkbabylon_bulletphysics"] = self["webpackChunkbabylon_bulletphysics"] || []).push([[553],{

/***/ 6755:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   d: () => (/* binding */ CubeMapToSphericalPolynomialTools)
/* harmony export */ });
/* harmony import */ var _Maths_math_vector_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9923);
/* harmony import */ var _Maths_math_scalar_functions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4867);
/* harmony import */ var _Maths_sphericalPolynomial_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4640);
/* harmony import */ var _Maths_math_constants_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5559);
/* harmony import */ var _Maths_math_color_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6041);






class FileFaceOrientation {
    constructor(name, worldAxisForNormal, worldAxisForFileX, worldAxisForFileY) {
        this.name = name;
        this.worldAxisForNormal = worldAxisForNormal;
        this.worldAxisForFileX = worldAxisForFileX;
        this.worldAxisForFileY = worldAxisForFileY;
    }
}
/**
 * Helper class dealing with the extraction of spherical polynomial dataArray
 * from a cube map.
 */
class CubeMapToSphericalPolynomialTools {
    /**
     * Converts a texture to the according Spherical Polynomial data.
     * This extracts the first 3 orders only as they are the only one used in the lighting.
     *
     * @param texture The texture to extract the information from.
     * @returns The Spherical Polynomial data.
     */
    static ConvertCubeMapTextureToSphericalPolynomial(texture) {
        if (!texture.isCube) {
            // Only supports cube Textures currently.
            return null;
        }
        texture.getScene()?.getEngine().flushFramebuffer();
        const size = texture.getSize().width;
        const rightPromise = texture.readPixels(0, undefined, undefined, false);
        const leftPromise = texture.readPixels(1, undefined, undefined, false);
        let upPromise;
        let downPromise;
        if (texture.isRenderTarget) {
            upPromise = texture.readPixels(3, undefined, undefined, false);
            downPromise = texture.readPixels(2, undefined, undefined, false);
        }
        else {
            upPromise = texture.readPixels(2, undefined, undefined, false);
            downPromise = texture.readPixels(3, undefined, undefined, false);
        }
        const frontPromise = texture.readPixels(4, undefined, undefined, false);
        const backPromise = texture.readPixels(5, undefined, undefined, false);
        const gammaSpace = texture.gammaSpace;
        // Always read as RGBA.
        const format = 5;
        let type = 0;
        if (texture.textureType == 1 || texture.textureType == 2) {
            type = 1;
        }
        return new Promise((resolve) => {
            Promise.all([leftPromise, rightPromise, upPromise, downPromise, frontPromise, backPromise]).then(([left, right, up, down, front, back]) => {
                const cubeInfo = {
                    size,
                    right,
                    left,
                    up,
                    down,
                    front,
                    back,
                    format,
                    type,
                    gammaSpace,
                };
                resolve(this.ConvertCubeMapToSphericalPolynomial(cubeInfo));
            });
        });
    }
    /**
     * Compute the area on the unit sphere of the rectangle defined by (x,y) and the origin
     * See https://www.rorydriscoll.com/2012/01/15/cubemap-texel-solid-angle/
     * @param x
     * @param y
     * @returns the area
     */
    static _AreaElement(x, y) {
        return Math.atan2(x * y, Math.sqrt(x * x + y * y + 1));
    }
    /**
     * Converts a cubemap to the according Spherical Polynomial data.
     * This extracts the first 3 orders only as they are the only one used in the lighting.
     *
     * @param cubeInfo The Cube map to extract the information from.
     * @returns The Spherical Polynomial data.
     */
    static ConvertCubeMapToSphericalPolynomial(cubeInfo) {
        const sphericalHarmonics = new _Maths_sphericalPolynomial_js__WEBPACK_IMPORTED_MODULE_2__/* .SphericalHarmonics */ .O();
        let totalSolidAngle = 0.0;
        // The (u,v) range is [-1,+1], so the distance between each texel is 2/Size.
        const du = 2.0 / cubeInfo.size;
        const dv = du;
        const halfTexel = 0.5 * du;
        // The (u,v) of the first texel is half a texel from the corner (-1,-1).
        const minUV = halfTexel - 1.0;
        for (let faceIndex = 0; faceIndex < 6; faceIndex++) {
            const fileFace = this._FileFaces[faceIndex];
            const dataArray = cubeInfo[fileFace.name];
            let v = minUV;
            // TODO: we could perform the summation directly into a SphericalPolynomial (SP), which is more efficient than SphericalHarmonic (SH).
            // This is possible because during the summation we do not need the SH-specific properties, e.g. orthogonality.
            // Because SP is still linear, so summation is fine in that basis.
            const stride = cubeInfo.format === 5 ? 4 : 3;
            for (let y = 0; y < cubeInfo.size; y++) {
                let u = minUV;
                for (let x = 0; x < cubeInfo.size; x++) {
                    // World direction (not normalised)
                    const worldDirection = fileFace.worldAxisForFileX.scale(u).add(fileFace.worldAxisForFileY.scale(v)).add(fileFace.worldAxisForNormal);
                    worldDirection.normalize();
                    const deltaSolidAngle = this._AreaElement(u - halfTexel, v - halfTexel) -
                        this._AreaElement(u - halfTexel, v + halfTexel) -
                        this._AreaElement(u + halfTexel, v - halfTexel) +
                        this._AreaElement(u + halfTexel, v + halfTexel);
                    let r = dataArray[y * cubeInfo.size * stride + x * stride + 0];
                    let g = dataArray[y * cubeInfo.size * stride + x * stride + 1];
                    let b = dataArray[y * cubeInfo.size * stride + x * stride + 2];
                    // Prevent NaN harmonics with extreme HDRI data.
                    if (isNaN(r)) {
                        r = 0;
                    }
                    if (isNaN(g)) {
                        g = 0;
                    }
                    if (isNaN(b)) {
                        b = 0;
                    }
                    // Handle Integer types.
                    if (cubeInfo.type === 0) {
                        r /= 255;
                        g /= 255;
                        b /= 255;
                    }
                    // Handle Gamma space textures.
                    if (cubeInfo.gammaSpace) {
                        r = Math.pow((0,_Maths_math_scalar_functions_js__WEBPACK_IMPORTED_MODULE_1__/* .Clamp */ .OQ)(r), _Maths_math_constants_js__WEBPACK_IMPORTED_MODULE_3__/* .ToLinearSpace */ .tk);
                        g = Math.pow((0,_Maths_math_scalar_functions_js__WEBPACK_IMPORTED_MODULE_1__/* .Clamp */ .OQ)(g), _Maths_math_constants_js__WEBPACK_IMPORTED_MODULE_3__/* .ToLinearSpace */ .tk);
                        b = Math.pow((0,_Maths_math_scalar_functions_js__WEBPACK_IMPORTED_MODULE_1__/* .Clamp */ .OQ)(b), _Maths_math_constants_js__WEBPACK_IMPORTED_MODULE_3__/* .ToLinearSpace */ .tk);
                    }
                    // Prevent to explode in case of really high dynamic ranges.
                    // sh 3 would not be enough to accurately represent it.
                    const max = this.MAX_HDRI_VALUE;
                    if (this.PRESERVE_CLAMPED_COLORS) {
                        const currentMax = Math.max(r, g, b);
                        if (currentMax > max) {
                            const factor = max / currentMax;
                            r *= factor;
                            g *= factor;
                            b *= factor;
                        }
                    }
                    else {
                        r = (0,_Maths_math_scalar_functions_js__WEBPACK_IMPORTED_MODULE_1__/* .Clamp */ .OQ)(r, 0, max);
                        g = (0,_Maths_math_scalar_functions_js__WEBPACK_IMPORTED_MODULE_1__/* .Clamp */ .OQ)(g, 0, max);
                        b = (0,_Maths_math_scalar_functions_js__WEBPACK_IMPORTED_MODULE_1__/* .Clamp */ .OQ)(b, 0, max);
                    }
                    const color = new _Maths_math_color_js__WEBPACK_IMPORTED_MODULE_4__/* .Color3 */ .v9(r, g, b);
                    sphericalHarmonics.addLight(worldDirection, color, deltaSolidAngle);
                    totalSolidAngle += deltaSolidAngle;
                    u += du;
                }
                v += dv;
            }
        }
        // Solid angle for entire sphere is 4*pi
        const sphereSolidAngle = 4.0 * Math.PI;
        // Adjust the solid angle to allow for how many faces we processed.
        const facesProcessed = 6.0;
        const expectedSolidAngle = (sphereSolidAngle * facesProcessed) / 6.0;
        // Adjust the harmonics so that the accumulated solid angle matches the expected solid angle.
        // This is needed because the numerical integration over the cube uses a
        // small angle approximation of solid angle for each texel (see deltaSolidAngle),
        // and also to compensate for accumulative error due to float precision in the summation.
        const correctionFactor = expectedSolidAngle / totalSolidAngle;
        sphericalHarmonics.scaleInPlace(correctionFactor);
        sphericalHarmonics.convertIncidentRadianceToIrradiance();
        sphericalHarmonics.convertIrradianceToLambertianRadiance();
        return _Maths_sphericalPolynomial_js__WEBPACK_IMPORTED_MODULE_2__/* .SphericalPolynomial */ .Q.FromHarmonics(sphericalHarmonics);
    }
}
CubeMapToSphericalPolynomialTools._FileFaces = [
    new FileFaceOrientation("right", new _Maths_math_vector_js__WEBPACK_IMPORTED_MODULE_0__/* .Vector3 */ .Pq(1, 0, 0), new _Maths_math_vector_js__WEBPACK_IMPORTED_MODULE_0__/* .Vector3 */ .Pq(0, 0, -1), new _Maths_math_vector_js__WEBPACK_IMPORTED_MODULE_0__/* .Vector3 */ .Pq(0, -1, 0)), // +X east
    new FileFaceOrientation("left", new _Maths_math_vector_js__WEBPACK_IMPORTED_MODULE_0__/* .Vector3 */ .Pq(-1, 0, 0), new _Maths_math_vector_js__WEBPACK_IMPORTED_MODULE_0__/* .Vector3 */ .Pq(0, 0, 1), new _Maths_math_vector_js__WEBPACK_IMPORTED_MODULE_0__/* .Vector3 */ .Pq(0, -1, 0)), // -X west
    new FileFaceOrientation("up", new _Maths_math_vector_js__WEBPACK_IMPORTED_MODULE_0__/* .Vector3 */ .Pq(0, 1, 0), new _Maths_math_vector_js__WEBPACK_IMPORTED_MODULE_0__/* .Vector3 */ .Pq(1, 0, 0), new _Maths_math_vector_js__WEBPACK_IMPORTED_MODULE_0__/* .Vector3 */ .Pq(0, 0, 1)), // +Y north
    new FileFaceOrientation("down", new _Maths_math_vector_js__WEBPACK_IMPORTED_MODULE_0__/* .Vector3 */ .Pq(0, -1, 0), new _Maths_math_vector_js__WEBPACK_IMPORTED_MODULE_0__/* .Vector3 */ .Pq(1, 0, 0), new _Maths_math_vector_js__WEBPACK_IMPORTED_MODULE_0__/* .Vector3 */ .Pq(0, 0, -1)), // -Y south
    new FileFaceOrientation("front", new _Maths_math_vector_js__WEBPACK_IMPORTED_MODULE_0__/* .Vector3 */ .Pq(0, 0, 1), new _Maths_math_vector_js__WEBPACK_IMPORTED_MODULE_0__/* .Vector3 */ .Pq(1, 0, 0), new _Maths_math_vector_js__WEBPACK_IMPORTED_MODULE_0__/* .Vector3 */ .Pq(0, -1, 0)), // +Z top
    new FileFaceOrientation("back", new _Maths_math_vector_js__WEBPACK_IMPORTED_MODULE_0__/* .Vector3 */ .Pq(0, 0, -1), new _Maths_math_vector_js__WEBPACK_IMPORTED_MODULE_0__/* .Vector3 */ .Pq(-1, 0, 0), new _Maths_math_vector_js__WEBPACK_IMPORTED_MODULE_0__/* .Vector3 */ .Pq(0, -1, 0)), // -Z bottom
];
/** @internal */
CubeMapToSphericalPolynomialTools.MAX_HDRI_VALUE = 4096;
/** @internal */
CubeMapToSphericalPolynomialTools.PRESERVE_CLAMPED_COLORS = false;
//# sourceMappingURL=cubemapToSphericalPolynomial.js.map

/***/ }),

/***/ 1947:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Qs: () => (/* binding */ ApplyPostProcess),
  SX: () => (/* binding */ FromHalfFloat),
  LZ: () => (/* binding */ ToHalfFloat)
});

// UNUSED EXPORTS: CreateResizedCopy, GetTextureDataAsync, TextureTools

// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Materials/Textures/texture.js + 1 modules
var Textures_texture = __webpack_require__(2781);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Materials/Textures/renderTargetTexture.js + 1 modules
var renderTargetTexture = __webpack_require__(6882);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/PostProcesses/postProcess.js
var PostProcesses_postProcess = __webpack_require__(7891);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Engines/abstractEngine.js + 4 modules
var abstractEngine = __webpack_require__(6326);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Misc/typeStore.js
var typeStore = __webpack_require__(6552);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Misc/decorators.serialization.js
var decorators_serialization = __webpack_require__(6877);
;// ./node_modules/@babylonjs/core/PostProcesses/passPostProcess.js





/**
 * PassPostProcess which produces an output the same as it's input
 */
class PassPostProcess extends PostProcesses_postProcess/* PostProcess */.w {
    /**
     * Gets a string identifying the name of the class
     * @returns "PassPostProcess" string
     */
    getClassName() {
        return "PassPostProcess";
    }
    /**
     * Creates the PassPostProcess
     * @param name The name of the effect.
     * @param options The required width/height ratio to downsize to before computing the render pass.
     * @param camera The camera to apply the render pass to.
     * @param samplingMode The sampling mode to be used when computing the pass. (default: 0)
     * @param engine The engine which the post process will be applied. (default: current engine)
     * @param reusable If the post process can be reused on the same frame. (default: false)
     * @param textureType The type of texture to be used when performing the post processing.
     * @param blockCompilation If compilation of the shader should not be done in the constructor. The updateEffect method can be used to compile the shader at a later time. (default: false)
     */
    constructor(name, options, camera = null, samplingMode, engine, reusable, textureType = 0, blockCompilation = false) {
        super(name, "pass", null, null, options, camera, samplingMode, engine, reusable, undefined, textureType, undefined, null, blockCompilation);
    }
    _gatherImports(useWebGPU, list) {
        if (useWebGPU) {
            this._webGPUReady = true;
            list.push(Promise.all([__webpack_require__.e(/* import() */ 126).then(__webpack_require__.bind(__webpack_require__, 9965))]));
        }
        else {
            list.push(Promise.all([__webpack_require__.e(/* import() */ 71).then(__webpack_require__.bind(__webpack_require__, 9820))]));
        }
        super._gatherImports(useWebGPU, list);
    }
    /**
     * @internal
     */
    static _Parse(parsedPostProcess, targetCamera, scene, rootUrl) {
        return decorators_serialization/* SerializationHelper */.p.Parse(() => {
            return new PassPostProcess(parsedPostProcess.name, parsedPostProcess.options, targetCamera, parsedPostProcess.renderTargetSamplingMode, parsedPostProcess._engine, parsedPostProcess.reusable);
        }, parsedPostProcess, scene, rootUrl);
    }
}
(0,typeStore/* RegisterClass */.Y5)("BABYLON.PassPostProcess", PassPostProcess);
/**
 * PassCubePostProcess which produces an output the same as it's input (which must be a cube texture)
 */
class PassCubePostProcess extends PostProcesses_postProcess/* PostProcess */.w {
    /**
     * Gets or sets the cube face to display.
     *  * 0 is +X
     *  * 1 is -X
     *  * 2 is +Y
     *  * 3 is -Y
     *  * 4 is +Z
     *  * 5 is -Z
     */
    get face() {
        return this._face;
    }
    set face(value) {
        if (value < 0 || value > 5) {
            return;
        }
        this._face = value;
        switch (this._face) {
            case 0:
                this.updateEffect("#define POSITIVEX");
                break;
            case 1:
                this.updateEffect("#define NEGATIVEX");
                break;
            case 2:
                this.updateEffect("#define POSITIVEY");
                break;
            case 3:
                this.updateEffect("#define NEGATIVEY");
                break;
            case 4:
                this.updateEffect("#define POSITIVEZ");
                break;
            case 5:
                this.updateEffect("#define NEGATIVEZ");
                break;
        }
    }
    /**
     * Gets a string identifying the name of the class
     * @returns "PassCubePostProcess" string
     */
    getClassName() {
        return "PassCubePostProcess";
    }
    /**
     * Creates the PassCubePostProcess
     * @param name The name of the effect.
     * @param options The required width/height ratio to downsize to before computing the render pass.
     * @param camera The camera to apply the render pass to.
     * @param samplingMode The sampling mode to be used when computing the pass. (default: 0)
     * @param engine The engine which the post process will be applied. (default: current engine)
     * @param reusable If the post process can be reused on the same frame. (default: false)
     * @param textureType The type of texture to be used when performing the post processing.
     * @param blockCompilation If compilation of the shader should not be done in the constructor. The updateEffect method can be used to compile the shader at a later time. (default: false)
     */
    constructor(name, options, camera = null, samplingMode, engine, reusable, textureType = 0, blockCompilation = false) {
        super(name, "passCube", null, null, options, camera, samplingMode, engine, reusable, "#define POSITIVEX", textureType, undefined, null, blockCompilation);
        this._face = 0;
    }
    _gatherImports(useWebGPU, list) {
        if (useWebGPU) {
            this._webGPUReady = true;
            list.push(Promise.all([__webpack_require__.e(/* import() */ 126).then(__webpack_require__.bind(__webpack_require__, 7682))]));
        }
        else {
            list.push(Promise.all([__webpack_require__.e(/* import() */ 71).then(__webpack_require__.bind(__webpack_require__, 4511))]));
        }
        super._gatherImports(useWebGPU, list);
    }
    /**
     * @internal
     */
    static _Parse(parsedPostProcess, targetCamera, scene, rootUrl) {
        return decorators_serialization/* SerializationHelper */.p.Parse(() => {
            return new PassCubePostProcess(parsedPostProcess.name, parsedPostProcess.options, targetCamera, parsedPostProcess.renderTargetSamplingMode, parsedPostProcess._engine, parsedPostProcess.reusable);
        }, parsedPostProcess, scene, rootUrl);
    }
}
abstractEngine/* AbstractEngine */.$._RescalePostProcessFactory = (engine) => {
    return new PassPostProcess("rescale", 1, null, 2, engine, false, 0);
};
//# sourceMappingURL=passPostProcess.js.map
;// ./node_modules/@babylonjs/core/Misc/textureTools.js





/**
 * Uses the GPU to create a copy texture rescaled at a given size
 * @param texture Texture to copy from
 * @param width defines the desired width
 * @param height defines the desired height
 * @param useBilinearMode defines if bilinear mode has to be used
 * @returns the generated texture
 */
function CreateResizedCopy(texture, width, height, useBilinearMode = true) {
    const scene = texture.getScene();
    const engine = scene.getEngine();
    const rtt = new renderTargetTexture/* RenderTargetTexture */.$("resized" + texture.name, { width: width, height: height }, scene, !texture.noMipmap, true, texture._texture.type, false, texture.samplingMode, false);
    rtt.wrapU = texture.wrapU;
    rtt.wrapV = texture.wrapV;
    rtt.uOffset = texture.uOffset;
    rtt.vOffset = texture.vOffset;
    rtt.uScale = texture.uScale;
    rtt.vScale = texture.vScale;
    rtt.uAng = texture.uAng;
    rtt.vAng = texture.vAng;
    rtt.wAng = texture.wAng;
    rtt.coordinatesIndex = texture.coordinatesIndex;
    rtt.level = texture.level;
    rtt.anisotropicFilteringLevel = texture.anisotropicFilteringLevel;
    rtt._texture.isReady = false;
    texture.wrapU = Textures_texture/* Texture */.g.CLAMP_ADDRESSMODE;
    texture.wrapV = Textures_texture/* Texture */.g.CLAMP_ADDRESSMODE;
    const passPostProcess = new PassPostProcess("pass", 1, null, useBilinearMode ? Textures_texture/* Texture */.g.BILINEAR_SAMPLINGMODE : Textures_texture/* Texture */.g.NEAREST_SAMPLINGMODE, engine, false, 0);
    passPostProcess.externalTextureSamplerBinding = true;
    passPostProcess.onEffectCreatedObservable.addOnce((e) => {
        e.executeWhenCompiled(() => {
            passPostProcess.onApply = function (effect) {
                effect.setTexture("textureSampler", texture);
            };
            const internalTexture = rtt.renderTarget;
            if (internalTexture) {
                scene.postProcessManager.directRender([passPostProcess], internalTexture);
                engine.unBindFramebuffer(internalTexture);
                rtt.disposeFramebufferObjects();
                passPostProcess.dispose();
                rtt.getInternalTexture().isReady = true;
            }
        });
    });
    return rtt;
}
/**
 * Apply a post process to a texture
 * @param postProcessName name of the fragment post process
 * @param internalTexture the texture to encode
 * @param scene the scene hosting the texture
 * @param type type of the output texture. If not provided, use the one from internalTexture
 * @param samplingMode sampling mode to use to sample the source texture. If not provided, use the one from internalTexture
 * @param format format of the output texture. If not provided, use the one from internalTexture
 * @param width width of the output texture. If not provided, use the one from internalTexture
 * @param height height of the output texture. If not provided, use the one from internalTexture
 * @returns a promise with the internalTexture having its texture replaced by the result of the processing
 */
function ApplyPostProcess(postProcessName, internalTexture, scene, type, samplingMode, format, width, height) {
    // Gets everything ready.
    const engine = internalTexture.getEngine();
    internalTexture.isReady = false;
    samplingMode = samplingMode ?? internalTexture.samplingMode;
    type = type ?? internalTexture.type;
    format = format ?? internalTexture.format;
    width = width ?? internalTexture.width;
    height = height ?? internalTexture.height;
    if (type === -1) {
        type = 0;
    }
    return new Promise((resolve) => {
        // Create the post process
        const postProcess = new PostProcesses_postProcess/* PostProcess */.w("postprocess", postProcessName, null, null, 1, null, samplingMode, engine, false, undefined, type, undefined, null, false, format);
        postProcess.externalTextureSamplerBinding = true;
        // Hold the output of the decoding.
        const encodedTexture = engine.createRenderTargetTexture({ width: width, height: height }, {
            generateDepthBuffer: false,
            generateMipMaps: false,
            generateStencilBuffer: false,
            samplingMode,
            type,
            format,
        });
        postProcess.onEffectCreatedObservable.addOnce((e) => {
            e.executeWhenCompiled(() => {
                // PP Render Pass
                postProcess.onApply = (effect) => {
                    effect._bindTexture("textureSampler", internalTexture);
                    effect.setFloat2("scale", 1, 1);
                };
                scene.postProcessManager.directRender([postProcess], encodedTexture, true);
                // Cleanup
                engine.restoreDefaultFramebuffer();
                engine._releaseTexture(internalTexture);
                if (postProcess) {
                    postProcess.dispose();
                }
                // Internal Swap
                encodedTexture._swapAndDie(internalTexture);
                // Ready to get rolling again.
                internalTexture.type = type;
                internalTexture.format = 5;
                internalTexture.isReady = true;
                resolve(internalTexture);
            });
        });
    });
}
// ref: http://stackoverflow.com/questions/32633585/how-do-you-convert-to-half-floats-in-javascript
let floatView;
let int32View;
/**
 * Converts a number to half float
 * @param value number to convert
 * @returns converted number
 */
function ToHalfFloat(value) {
    if (!floatView) {
        floatView = new Float32Array(1);
        int32View = new Int32Array(floatView.buffer);
    }
    floatView[0] = value;
    const x = int32View[0];
    let bits = (x >> 16) & 0x8000; /* Get the sign */
    let m = (x >> 12) & 0x07ff; /* Keep one extra bit for rounding */
    const e = (x >> 23) & 0xff; /* Using int is faster here */
    /* If zero, or denormal, or exponent underflows too much for a denormal
     * half, return signed zero. */
    if (e < 103) {
        return bits;
    }
    /* If NaN, return NaN. If Inf or exponent overflow, return Inf. */
    if (e > 142) {
        bits |= 0x7c00;
        /* If exponent was 0xff and one mantissa bit was set, it means NaN,
         * not Inf, so make sure we set one mantissa bit too. */
        bits |= (e == 255 ? 0 : 1) && x & 0x007fffff;
        return bits;
    }
    /* If exponent underflows but not too much, return a denormal */
    if (e < 113) {
        m |= 0x0800;
        /* Extra rounding may overflow and set mantissa to 0 and exponent
         * to 1, which is OK. */
        bits |= (m >> (114 - e)) + ((m >> (113 - e)) & 1);
        return bits;
    }
    bits |= ((e - 112) << 10) | (m >> 1);
    bits += m & 1;
    return bits;
}
/**
 * Converts a half float to a number
 * @param value half float to convert
 * @returns converted half float
 */
function FromHalfFloat(value) {
    const s = (value & 0x8000) >> 15;
    const e = (value & 0x7c00) >> 10;
    const f = value & 0x03ff;
    if (e === 0) {
        return (s ? -1 : 1) * Math.pow(2, -14) * (f / Math.pow(2, 10));
    }
    else if (e == 0x1f) {
        return f ? NaN : (s ? -1 : 1) * Infinity;
    }
    return (s ? -1 : 1) * Math.pow(2, e - 15) * (1 + f / Math.pow(2, 10));
}
const ProcessAsync = async (texture, width, height, face, lod) => {
    const scene = texture.getScene();
    const engine = scene.getEngine();
    if (!engine.isWebGPU) {
        if (texture.isCube) {
            await __webpack_require__.e(/* import() */ 71).then(__webpack_require__.bind(__webpack_require__, 2905));
        }
        else {
            await __webpack_require__.e(/* import() */ 71).then(__webpack_require__.bind(__webpack_require__, 9278));
        }
    }
    else {
        if (texture.isCube) {
            await __webpack_require__.e(/* import() */ 126).then(__webpack_require__.bind(__webpack_require__, 1650));
        }
        else {
            await __webpack_require__.e(/* import() */ 126).then(__webpack_require__.bind(__webpack_require__, 3613));
        }
    }
    let lodPostProcess;
    if (!texture.isCube) {
        lodPostProcess = new PostProcesses_postProcess/* PostProcess */.w("lod", "lod", {
            uniforms: ["lod", "gamma"],
            samplingMode: Textures_texture/* Texture */.g.NEAREST_NEAREST_MIPNEAREST,
            engine,
            shaderLanguage: engine.isWebGPU ? 1 /* ShaderLanguage.WGSL */ : 0 /* ShaderLanguage.GLSL */,
        });
    }
    else {
        const faceDefines = ["#define POSITIVEX", "#define NEGATIVEX", "#define POSITIVEY", "#define NEGATIVEY", "#define POSITIVEZ", "#define NEGATIVEZ"];
        lodPostProcess = new PostProcesses_postProcess/* PostProcess */.w("lodCube", "lodCube", {
            uniforms: ["lod", "gamma"],
            samplingMode: Textures_texture/* Texture */.g.NEAREST_NEAREST_MIPNEAREST,
            engine,
            defines: faceDefines[face],
            shaderLanguage: engine.isWebGPU ? 1 /* ShaderLanguage.WGSL */ : 0 /* ShaderLanguage.GLSL */,
        });
    }
    await new Promise((resolve) => {
        lodPostProcess.onEffectCreatedObservable.addOnce((e) => {
            e.executeWhenCompiled(() => {
                resolve(0);
            });
        });
    });
    const rtt = new renderTargetTexture/* RenderTargetTexture */.$("temp", { width: width, height: height }, scene, false);
    lodPostProcess.onApply = function (effect) {
        effect.setTexture("textureSampler", texture);
        effect.setFloat("lod", lod);
        effect.setInt("gamma", texture.gammaSpace ? 1 : 0);
    };
    const internalTexture = texture.getInternalTexture();
    try {
        if (rtt.renderTarget && internalTexture) {
            const samplingMode = internalTexture.samplingMode;
            if (lod !== 0) {
                texture.updateSamplingMode(Textures_texture/* Texture */.g.NEAREST_NEAREST_MIPNEAREST);
            }
            else {
                texture.updateSamplingMode(Textures_texture/* Texture */.g.NEAREST_NEAREST);
            }
            scene.postProcessManager.directRender([lodPostProcess], rtt.renderTarget, true);
            texture.updateSamplingMode(samplingMode);
            //Reading datas from WebGL
            const bufferView = await engine.readPixels(0, 0, width, height);
            const data = new Uint8Array(bufferView.buffer, 0, bufferView.byteLength);
            // Unbind
            engine.unBindFramebuffer(rtt.renderTarget);
            return data;
        }
        else {
            throw Error("Render to texture failed.");
        }
    }
    finally {
        rtt.dispose();
        lodPostProcess.dispose();
    }
};
/**
 * Gets the data of the specified texture by rendering it to an intermediate RGBA texture and retrieving the bytes from it.
 * This is convienent to get 8-bit RGBA values for a texture in a GPU compressed format.
 * @param texture the source texture
 * @param width the width of the result, which does not have to match the source texture width
 * @param height the height of the result, which does not have to match the source texture height
 * @param face if the texture has multiple faces, the face index to use for the source
 * @param lod if the texture has multiple LODs, the lod index to use for the source
 * @returns the 8-bit texture data
 */
async function GetTextureDataAsync(texture, width, height, face = 0, lod = 0) {
    if (!texture.isReady() && texture._texture) {
        await new Promise((resolve, reject) => {
            if (texture._texture === null) {
                reject(0);
                return;
            }
            texture._texture.onLoadedObservable.addOnce(() => {
                resolve(0);
            });
        });
    }
    return await ProcessAsync(texture, width, height, face, lod);
}
/**
 * Class used to host texture specific utilities
 */
const TextureTools = {
    /**
     * Uses the GPU to create a copy texture rescaled at a given size
     * @param texture Texture to copy from
     * @param width defines the desired width
     * @param height defines the desired height
     * @param useBilinearMode defines if bilinear mode has to be used
     * @returns the generated texture
     */
    CreateResizedCopy,
    /**
     * Apply a post process to a texture
     * @param postProcessName name of the fragment post process
     * @param internalTexture the texture to encode
     * @param scene the scene hosting the texture
     * @param type type of the output texture. If not provided, use the one from internalTexture
     * @param samplingMode sampling mode to use to sample the source texture. If not provided, use the one from internalTexture
     * @param format format of the output texture. If not provided, use the one from internalTexture
     * @returns a promise with the internalTexture having its texture replaced by the result of the processing
     */
    ApplyPostProcess,
    /**
     * Converts a number to half float
     * @param value number to convert
     * @returns converted number
     */
    ToHalfFloat,
    /**
     * Converts a half float to a number
     * @param value half float to convert
     * @returns converted half float
     */
    FromHalfFloat,
    /**
     * Gets the data of the specified texture by rendering it to an intermediate RGBA texture and retrieving the bytes from it.
     * This is convienent to get 8-bit RGBA values for a texture in a GPU compressed format.
     * @param texture the source texture
     * @param width the width of the result, which does not have to match the source texture width
     * @param height the height of the result, which does not have to match the source texture height
     * @param face if the texture has multiple faces, the face index to use for the source
     * @param channels a filter for which of the RGBA channels to return in the result
     * @param lod if the texture has multiple LODs, the lod index to use for the source
     * @returns the 8-bit texture data
     */
    GetTextureDataAsync,
};
//# sourceMappingURL=textureTools.js.map

/***/ })

}]);