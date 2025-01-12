"use strict";
(self["webpackChunkbabylon_bulletphysics"] = self["webpackChunkbabylon_bulletphysics"] || []).push([[834,928],{

/***/ 5834:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  _ENVTextureLoader: () => (/* binding */ _ENVTextureLoader)
});

// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Misc/tools.js
var tools = __webpack_require__(998);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Maths/math.vector.js
var math_vector = __webpack_require__(9923);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Maths/math.scalar.functions.js
var math_scalar_functions = __webpack_require__(4867);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Maths/sphericalPolynomial.js + 2 modules
var sphericalPolynomial = __webpack_require__(4640);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Materials/Textures/internalTexture.js + 1 modules
var internalTexture = __webpack_require__(854);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Materials/Textures/baseTexture.js + 1 modules
var baseTexture = __webpack_require__(2667);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/scene.js + 14 modules
var scene = __webpack_require__(554);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/PostProcesses/postProcess.js
var postProcess = __webpack_require__(7891);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Misc/logger.js
var logger = __webpack_require__(1137);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Misc/textureTools.js + 1 modules
var textureTools = __webpack_require__(1947);
;// ./node_modules/@babylonjs/core/Misc/rgbdTextureTools.js



/**
 * Class used to host RGBD texture specific utilities
 */
class RGBDTextureTools {
    /**
     * Expand the RGBD Texture from RGBD to Half Float if possible.
     * @param texture the texture to expand.
     */
    static ExpandRGBDTexture(texture) {
        const internalTexture = texture._texture;
        if (!internalTexture || !texture.isRGBD) {
            return;
        }
        // Gets everything ready.
        const engine = internalTexture.getEngine();
        const caps = engine.getCaps();
        const isReady = internalTexture.isReady;
        let expandTexture = false;
        // If half float available we can uncompress the texture
        if (caps.textureHalfFloatRender && caps.textureHalfFloatLinearFiltering) {
            expandTexture = true;
            internalTexture.type = 2;
        }
        // If full float available we can uncompress the texture
        else if (caps.textureFloatRender && caps.textureFloatLinearFiltering) {
            expandTexture = true;
            internalTexture.type = 1;
        }
        if (expandTexture) {
            // Do not use during decode.
            internalTexture.isReady = false;
            internalTexture._isRGBD = false;
            internalTexture.invertY = false;
        }
        const expandRGBDTexture = async () => {
            const isWebGPU = engine.isWebGPU;
            const shaderLanguage = isWebGPU ? 1 /* ShaderLanguage.WGSL */ : 0 /* ShaderLanguage.GLSL */;
            internalTexture.isReady = false;
            if (isWebGPU) {
                await Promise.all([__webpack_require__.e(/* import() */ 126).then(__webpack_require__.bind(__webpack_require__, 371)), __webpack_require__.e(/* import() */ 126).then(__webpack_require__.bind(__webpack_require__, 5035))]);
            }
            else {
                await Promise.all([__webpack_require__.e(/* import() */ 71).then(__webpack_require__.bind(__webpack_require__, 9682)), __webpack_require__.e(/* import() */ 71).then(__webpack_require__.bind(__webpack_require__, 2646))]);
            }
            // Expand the texture if possible
            // Simply run through the decode PP.
            const rgbdPostProcess = new postProcess/* PostProcess */.w("rgbdDecode", "rgbdDecode", null, null, 1, null, 3, engine, false, undefined, internalTexture.type, undefined, null, false, undefined, shaderLanguage);
            rgbdPostProcess.externalTextureSamplerBinding = true;
            // Hold the output of the decoding.
            const expandedTexture = engine.createRenderTargetTexture(internalTexture.width, {
                generateDepthBuffer: false,
                generateMipMaps: false,
                generateStencilBuffer: false,
                samplingMode: internalTexture.samplingMode,
                type: internalTexture.type,
                format: 5,
            });
            rgbdPostProcess.onEffectCreatedObservable.addOnce((e) => {
                e.executeWhenCompiled(() => {
                    // PP Render Pass
                    rgbdPostProcess.onApply = (effect) => {
                        effect._bindTexture("textureSampler", internalTexture);
                        effect.setFloat2("scale", 1, 1);
                    };
                    texture.getScene().postProcessManager.directRender([rgbdPostProcess], expandedTexture, true);
                    // Cleanup
                    engine.restoreDefaultFramebuffer();
                    engine._releaseTexture(internalTexture);
                    if (rgbdPostProcess) {
                        rgbdPostProcess.dispose();
                    }
                    // Internal Swap
                    expandedTexture._swapAndDie(internalTexture);
                    // Ready to get rolling again.
                    internalTexture.isReady = true;
                });
            });
        };
        if (expandTexture) {
            if (isReady) {
                expandRGBDTexture();
            }
            else {
                texture.onLoadObservable.addOnce(expandRGBDTexture);
            }
        }
    }
    /**
     * Encode the texture to RGBD if possible.
     * @param internalTexture the texture to encode
     * @param scene the scene hosting the texture
     * @param outputTextureType type of the texture in which the encoding is performed
     * @returns a promise with the internalTexture having its texture replaced by the result of the processing
     */
    static EncodeTextureToRGBD(internalTexture, scene, outputTextureType = 0) {
        return (0,textureTools/* ApplyPostProcess */.Qs)("rgbdEncode", internalTexture, scene, outputTextureType, 1, 5);
    }
}
//# sourceMappingURL=rgbdTextureTools.js.map
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Misc/HighDynamicRange/cubemapToSphericalPolynomial.js
var cubemapToSphericalPolynomial = __webpack_require__(6755);
;// ./node_modules/@babylonjs/core/Materials/Textures/baseTexture.polynomial.js


baseTexture/* BaseTexture */.t.prototype.forceSphericalPolynomialsRecompute = function () {
    if (this._texture) {
        this._texture._sphericalPolynomial = null;
        this._texture._sphericalPolynomialPromise = null;
        this._texture._sphericalPolynomialComputed = false;
    }
};
Object.defineProperty(baseTexture/* BaseTexture */.t.prototype, "sphericalPolynomial", {
    get: function () {
        if (this._texture) {
            if (this._texture._sphericalPolynomial || this._texture._sphericalPolynomialComputed) {
                return this._texture._sphericalPolynomial;
            }
            if (this._texture.isReady) {
                if (!this._texture._sphericalPolynomialPromise) {
                    this._texture._sphericalPolynomialPromise = cubemapToSphericalPolynomial/* CubeMapToSphericalPolynomialTools */.d.ConvertCubeMapTextureToSphericalPolynomial(this);
                    if (this._texture._sphericalPolynomialPromise === null) {
                        this._texture._sphericalPolynomialComputed = true;
                    }
                    else {
                        this._texture._sphericalPolynomialPromise.then((sphericalPolynomial) => {
                            this._texture._sphericalPolynomial = sphericalPolynomial;
                            this._texture._sphericalPolynomialComputed = true;
                        });
                    }
                }
                return null;
            }
        }
        return null;
    },
    set: function (value) {
        if (this._texture) {
            this._texture._sphericalPolynomial = value;
        }
    },
    enumerable: true,
    configurable: true,
});
//# sourceMappingURL=baseTexture.polynomial.js.map
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Misc/dumpTools.js
var dumpTools = __webpack_require__(9928);
;// ./node_modules/@babylonjs/core/Misc/environmentTextureTools.js













const DefaultEnvironmentTextureImageType = "image/png";
const CurrentVersion = 2;
/**
 * Magic number identifying the env file.
 */
const MagicBytes = [0x86, 0x16, 0x87, 0x96, 0xf6, 0xd6, 0x96, 0x36];
/**
 * Gets the environment info from an env file.
 * @param data The array buffer containing the .env bytes.
 * @returns the environment file info (the json header) if successfully parsed, normalized to the latest supported version.
 */
function GetEnvInfo(data) {
    const dataView = new DataView(data.buffer, data.byteOffset, data.byteLength);
    let pos = 0;
    for (let i = 0; i < MagicBytes.length; i++) {
        if (dataView.getUint8(pos++) !== MagicBytes[i]) {
            logger/* Logger */.V.Error("Not a babylon environment map");
            return null;
        }
    }
    // Read json manifest - collect characters up to null terminator
    let manifestString = "";
    let charCode = 0x00;
    while ((charCode = dataView.getUint8(pos++))) {
        manifestString += String.fromCharCode(charCode);
    }
    let manifest = JSON.parse(manifestString);
    manifest = normalizeEnvInfo(manifest);
    if (manifest.specular) {
        // Extend the header with the position of the payload.
        manifest.specular.specularDataPosition = pos;
        // Fallback to 0.8 exactly if lodGenerationScale is not defined for backward compatibility.
        manifest.specular.lodGenerationScale = manifest.specular.lodGenerationScale || 0.8;
    }
    return manifest;
}
/**
 * Normalizes any supported version of the environment file info to the latest version
 * @param info environment file info on any supported version
 * @returns environment file info in the latest supported version
 * @private
 */
function normalizeEnvInfo(info) {
    if (info.version > CurrentVersion) {
        throw new Error(`Unsupported babylon environment map version "${info.version}". Latest supported version is "${CurrentVersion}".`);
    }
    if (info.version === 2) {
        return info;
    }
    // Migrate a v1 info to v2
    info = { ...info, version: 2, imageType: DefaultEnvironmentTextureImageType };
    return info;
}
/**
 * Creates an environment texture from a loaded cube texture.
 * @param texture defines the cube texture to convert in env file
 * @param options options for the conversion process
 * @param options.imageType the mime type for the encoded images, with support for "image/png" (default) and "image/webp"
 * @param options.imageQuality the image quality of encoded WebP images.
 * @returns a promise containing the environment data if successful.
 */
async function CreateEnvTextureAsync(texture, options = {}) {
    const internalTexture = texture.getInternalTexture();
    if (!internalTexture) {
        return Promise.reject("The cube texture is invalid.");
    }
    const imageType = options.imageType ?? DefaultEnvironmentTextureImageType;
    const engine = internalTexture.getEngine();
    if (texture.textureType !== 2 &&
        texture.textureType !== 1 &&
        texture.textureType !== 0 &&
        texture.textureType !== 0 &&
        texture.textureType !== 7 &&
        texture.textureType !== -1) {
        return Promise.reject("The cube texture should allow HDR (Full Float or Half Float).");
    }
    let textureType = 1;
    if (!engine.getCaps().textureFloatRender) {
        textureType = 2;
        if (!engine.getCaps().textureHalfFloatRender) {
            return Promise.reject("Env texture can only be created when the browser supports half float or full float rendering.");
        }
    }
    // sphericalPolynomial is lazy loaded so simply accessing it should trigger the computation.
    texture.sphericalPolynomial;
    // Lets keep track of the polynomial promise so we can wait for it to be ready before generating the pixels.
    const sphericalPolynomialPromise = texture.getInternalTexture()?._sphericalPolynomialPromise;
    const cubeWidth = internalTexture.width;
    const hostingScene = new scene/* Scene */.Z(engine);
    const specularTextures = {};
    // As we are going to readPixels the faces of the cube, make sure the drawing/update commands for the cube texture are fully sent to the GPU in case it is drawn for the first time in this very frame!
    engine.flushFramebuffer();
    // Read and collect all mipmaps data from the cube.
    const mipmapsCount = (0,math_scalar_functions/* ILog2 */.C0)(internalTexture.width);
    for (let i = 0; i <= mipmapsCount; i++) {
        const faceWidth = Math.pow(2, mipmapsCount - i);
        // All faces of the cube.
        for (let face = 0; face < 6; face++) {
            let faceData = await texture.readPixels(face, i, undefined, false);
            if (faceData && faceData.byteLength === faceData.length) {
                const faceDataFloat = new Float32Array(faceData.byteLength * 4);
                for (let i = 0; i < faceData.byteLength; i++) {
                    faceDataFloat[i] = faceData[i] / 255;
                    // Gamma to linear
                    faceDataFloat[i] = Math.pow(faceDataFloat[i], 2.2);
                }
                faceData = faceDataFloat;
            }
            else if (faceData && texture.gammaSpace) {
                const floatData = faceData;
                for (let i = 0; i < floatData.length; i++) {
                    // Gamma to linear
                    floatData[i] = Math.pow(floatData[i], 2.2);
                }
            }
            const tempTexture = engine.createRawTexture(faceData, faceWidth, faceWidth, 5, false, true, 1, null, textureType);
            await RGBDTextureTools.EncodeTextureToRGBD(tempTexture, hostingScene, textureType);
            const rgbdEncodedData = await engine._readTexturePixels(tempTexture, faceWidth, faceWidth);
            const imageEncodedData = await (0,dumpTools.DumpDataAsync)(faceWidth, faceWidth, rgbdEncodedData, imageType, undefined, false, true, options.imageQuality);
            specularTextures[i * 6 + face] = imageEncodedData;
            tempTexture.dispose();
        }
    }
    // We can delete the hosting scene keeping track of all the creation objects
    hostingScene.dispose();
    // Ensure completion of the polynomial creation promise.
    if (sphericalPolynomialPromise) {
        await sphericalPolynomialPromise;
    }
    // Creates the json header for the env texture
    const info = {
        version: CurrentVersion,
        width: cubeWidth,
        imageType,
        irradiance: _CreateEnvTextureIrradiance(texture),
        specular: {
            mipmaps: [],
            lodGenerationScale: texture.lodGenerationScale,
        },
    };
    // Sets the specular image data information
    let position = 0;
    for (let i = 0; i <= mipmapsCount; i++) {
        for (let face = 0; face < 6; face++) {
            const byteLength = specularTextures[i * 6 + face].byteLength;
            info.specular.mipmaps.push({
                length: byteLength,
                position: position,
            });
            position += byteLength;
        }
    }
    // Encode the JSON as an array buffer
    const infoString = JSON.stringify(info);
    const infoBuffer = new ArrayBuffer(infoString.length + 1);
    const infoView = new Uint8Array(infoBuffer); // Limited to ascii subset matching unicode.
    for (let i = 0, strLen = infoString.length; i < strLen; i++) {
        infoView[i] = infoString.charCodeAt(i);
    }
    // Ends up with a null terminator for easier parsing
    infoView[infoString.length] = 0x00;
    // Computes the final required size and creates the storage
    const totalSize = MagicBytes.length + position + infoBuffer.byteLength;
    const finalBuffer = new ArrayBuffer(totalSize);
    const finalBufferView = new Uint8Array(finalBuffer);
    const dataView = new DataView(finalBuffer);
    // Copy the magic bytes identifying the file in
    let pos = 0;
    for (let i = 0; i < MagicBytes.length; i++) {
        dataView.setUint8(pos++, MagicBytes[i]);
    }
    // Add the json info
    finalBufferView.set(new Uint8Array(infoBuffer), pos);
    pos += infoBuffer.byteLength;
    // Finally inserts the texture data
    for (let i = 0; i <= mipmapsCount; i++) {
        for (let face = 0; face < 6; face++) {
            const dataBuffer = specularTextures[i * 6 + face];
            finalBufferView.set(new Uint8Array(dataBuffer), pos);
            pos += dataBuffer.byteLength;
        }
    }
    // Voila
    return finalBuffer;
}
/**
 * Creates a JSON representation of the spherical data.
 * @param texture defines the texture containing the polynomials
 * @returns the JSON representation of the spherical info
 */
function _CreateEnvTextureIrradiance(texture) {
    const polynmials = texture.sphericalPolynomial;
    if (polynmials == null) {
        return null;
    }
    return {
        x: [polynmials.x.x, polynmials.x.y, polynmials.x.z],
        y: [polynmials.y.x, polynmials.y.y, polynmials.y.z],
        z: [polynmials.z.x, polynmials.z.y, polynmials.z.z],
        xx: [polynmials.xx.x, polynmials.xx.y, polynmials.xx.z],
        yy: [polynmials.yy.x, polynmials.yy.y, polynmials.yy.z],
        zz: [polynmials.zz.x, polynmials.zz.y, polynmials.zz.z],
        yz: [polynmials.yz.x, polynmials.yz.y, polynmials.yz.z],
        zx: [polynmials.zx.x, polynmials.zx.y, polynmials.zx.z],
        xy: [polynmials.xy.x, polynmials.xy.y, polynmials.xy.z],
    };
}
/**
 * Creates the ArrayBufferViews used for initializing environment texture image data.
 * @param data the image data
 * @param info parameters that determine what views will be created for accessing the underlying buffer
 * @returns the views described by info providing access to the underlying buffer
 */
function CreateImageDataArrayBufferViews(data, info) {
    info = normalizeEnvInfo(info);
    const specularInfo = info.specular;
    // Double checks the enclosed info
    let mipmapsCount = Math.log2(info.width);
    mipmapsCount = Math.round(mipmapsCount) + 1;
    if (specularInfo.mipmaps.length !== 6 * mipmapsCount) {
        throw new Error(`Unsupported specular mipmaps number "${specularInfo.mipmaps.length}"`);
    }
    const imageData = new Array(mipmapsCount);
    for (let i = 0; i < mipmapsCount; i++) {
        imageData[i] = new Array(6);
        for (let face = 0; face < 6; face++) {
            const imageInfo = specularInfo.mipmaps[i * 6 + face];
            imageData[i][face] = new Uint8Array(data.buffer, data.byteOffset + specularInfo.specularDataPosition + imageInfo.position, imageInfo.length);
        }
    }
    return imageData;
}
/**
 * Uploads the texture info contained in the env file to the GPU.
 * @param texture defines the internal texture to upload to
 * @param data defines the data to load
 * @param info defines the texture info retrieved through the GetEnvInfo method
 * @returns a promise
 */
function UploadEnvLevelsAsync(texture, data, info) {
    info = normalizeEnvInfo(info);
    const specularInfo = info.specular;
    if (!specularInfo) {
        // Nothing else parsed so far
        return Promise.resolve();
    }
    texture._lodGenerationScale = specularInfo.lodGenerationScale;
    const imageData = CreateImageDataArrayBufferViews(data, info);
    return UploadLevelsAsync(texture, imageData, info.imageType);
}
function _OnImageReadyAsync(image, engine, expandTexture, rgbdPostProcess, url, face, i, generateNonLODTextures, lodTextures, cubeRtt, texture) {
    return new Promise((resolve, reject) => {
        if (expandTexture) {
            const tempTexture = engine.createTexture(null, true, true, null, 1, null, (message) => {
                reject(message);
            }, image);
            rgbdPostProcess?.onEffectCreatedObservable.addOnce((effect) => {
                effect.executeWhenCompiled(() => {
                    // Uncompress the data to a RTT
                    rgbdPostProcess.externalTextureSamplerBinding = true;
                    rgbdPostProcess.onApply = (effect) => {
                        effect._bindTexture("textureSampler", tempTexture);
                        effect.setFloat2("scale", 1, engine._features.needsInvertingBitmap && image instanceof ImageBitmap ? -1 : 1);
                    };
                    if (!engine.scenes.length) {
                        return;
                    }
                    engine.scenes[0].postProcessManager.directRender([rgbdPostProcess], cubeRtt, true, face, i);
                    // Cleanup
                    engine.restoreDefaultFramebuffer();
                    tempTexture.dispose();
                    URL.revokeObjectURL(url);
                    resolve();
                });
            });
        }
        else {
            engine._uploadImageToTexture(texture, image, face, i);
            // Upload the face to the non lod texture support
            if (generateNonLODTextures) {
                const lodTexture = lodTextures[i];
                if (lodTexture) {
                    engine._uploadImageToTexture(lodTexture._texture, image, face, 0);
                }
            }
            resolve();
        }
    });
}
/**
 * Uploads the levels of image data to the GPU.
 * @param texture defines the internal texture to upload to
 * @param imageData defines the array buffer views of image data [mipmap][face]
 * @param imageType the mime type of the image data
 * @returns a promise
 */
async function UploadLevelsAsync(texture, imageData, imageType = DefaultEnvironmentTextureImageType) {
    if (!tools/* Tools */.S0.IsExponentOfTwo(texture.width)) {
        throw new Error("Texture size must be a power of two");
    }
    const mipmapsCount = (0,math_scalar_functions/* ILog2 */.C0)(texture.width) + 1;
    // Gets everything ready.
    const engine = texture.getEngine();
    let expandTexture = false;
    let generateNonLODTextures = false;
    let rgbdPostProcess = null;
    let cubeRtt = null;
    let lodTextures = null;
    const caps = engine.getCaps();
    texture.format = 5;
    texture.type = 0;
    texture.generateMipMaps = true;
    texture._cachedAnisotropicFilteringLevel = null;
    engine.updateTextureSamplingMode(3, texture);
    // Add extra process if texture lod is not supported
    if (!caps.textureLOD) {
        expandTexture = false;
        generateNonLODTextures = true;
        lodTextures = {};
    }
    // in webgl 1 there are no ways to either render or copy lod level information for float textures.
    else if (!engine._features.supportRenderAndCopyToLodForFloatTextures) {
        expandTexture = false;
    }
    // If half float available we can uncompress the texture
    else if (caps.textureHalfFloatRender && caps.textureHalfFloatLinearFiltering) {
        expandTexture = true;
        texture.type = 2;
    }
    // If full float available we can uncompress the texture
    else if (caps.textureFloatRender && caps.textureFloatLinearFiltering) {
        expandTexture = true;
        texture.type = 1;
    }
    // Expand the texture if possible
    let shaderLanguage = 0 /* ShaderLanguage.GLSL */;
    if (expandTexture) {
        if (engine.isWebGPU) {
            shaderLanguage = 1 /* ShaderLanguage.WGSL */;
            await __webpack_require__.e(/* import() */ 126).then(__webpack_require__.bind(__webpack_require__, 371));
        }
        else {
            await __webpack_require__.e(/* import() */ 71).then(__webpack_require__.bind(__webpack_require__, 9682));
        }
        // Simply run through the decode PP
        rgbdPostProcess = new postProcess/* PostProcess */.w("rgbdDecode", "rgbdDecode", null, null, 1, null, 3, engine, false, undefined, texture.type, undefined, null, false, undefined, shaderLanguage);
        texture._isRGBD = false;
        texture.invertY = false;
        cubeRtt = engine.createRenderTargetCubeTexture(texture.width, {
            generateDepthBuffer: false,
            generateMipMaps: true,
            generateStencilBuffer: false,
            samplingMode: 3,
            type: texture.type,
            format: 5,
        });
    }
    else {
        texture._isRGBD = true;
        texture.invertY = true;
        // In case of missing support, applies the same patch than DDS files.
        if (generateNonLODTextures) {
            const mipSlices = 3;
            const scale = texture._lodGenerationScale;
            const offset = texture._lodGenerationOffset;
            for (let i = 0; i < mipSlices; i++) {
                //compute LOD from even spacing in smoothness (matching shader calculation)
                const smoothness = i / (mipSlices - 1);
                const roughness = 1 - smoothness;
                const minLODIndex = offset; // roughness = 0
                const maxLODIndex = (mipmapsCount - 1) * scale + offset; // roughness = 1 (mipmaps start from 0)
                const lodIndex = minLODIndex + (maxLODIndex - minLODIndex) * roughness;
                const mipmapIndex = Math.round(Math.min(Math.max(lodIndex, 0), maxLODIndex));
                const glTextureFromLod = new internalTexture/* InternalTexture */.hV(engine, 2 /* InternalTextureSource.Temp */);
                glTextureFromLod.isCube = true;
                glTextureFromLod.invertY = true;
                glTextureFromLod.generateMipMaps = false;
                engine.updateTextureSamplingMode(2, glTextureFromLod);
                // Wrap in a base texture for easy binding.
                const lodTexture = new baseTexture/* BaseTexture */.t(null);
                lodTexture._isCube = true;
                lodTexture._texture = glTextureFromLod;
                lodTextures[mipmapIndex] = lodTexture;
                switch (i) {
                    case 0:
                        texture._lodTextureLow = lodTexture;
                        break;
                    case 1:
                        texture._lodTextureMid = lodTexture;
                        break;
                    case 2:
                        texture._lodTextureHigh = lodTexture;
                        break;
                }
            }
        }
    }
    const promises = [];
    // All mipmaps up to provided number of images
    for (let i = 0; i < imageData.length; i++) {
        // All faces
        for (let face = 0; face < 6; face++) {
            // Constructs an image element from image data
            const bytes = imageData[i][face];
            const blob = new Blob([bytes], { type: imageType });
            const url = URL.createObjectURL(blob);
            let promise;
            if (engine._features.forceBitmapOverHTMLImageElement) {
                promise = engine.createImageBitmap(blob, { premultiplyAlpha: "none" }).then((img) => {
                    return _OnImageReadyAsync(img, engine, expandTexture, rgbdPostProcess, url, face, i, generateNonLODTextures, lodTextures, cubeRtt, texture);
                });
            }
            else {
                const image = new Image();
                image.src = url;
                // Enqueue promise to upload to the texture.
                promise = new Promise((resolve, reject) => {
                    image.onload = () => {
                        _OnImageReadyAsync(image, engine, expandTexture, rgbdPostProcess, url, face, i, generateNonLODTextures, lodTextures, cubeRtt, texture)
                            .then(() => resolve())
                            .catch((reason) => {
                            reject(reason);
                        });
                    };
                    image.onerror = (error) => {
                        reject(error);
                    };
                });
            }
            promises.push(promise);
        }
    }
    // Fill remaining mipmaps with black textures.
    if (imageData.length < mipmapsCount) {
        let data;
        const size = Math.pow(2, mipmapsCount - 1 - imageData.length);
        const dataLength = size * size * 4;
        switch (texture.type) {
            case 0: {
                data = new Uint8Array(dataLength);
                break;
            }
            case 2: {
                data = new Uint16Array(dataLength);
                break;
            }
            case 1: {
                data = new Float32Array(dataLength);
                break;
            }
        }
        for (let i = imageData.length; i < mipmapsCount; i++) {
            for (let face = 0; face < 6; face++) {
                engine._uploadArrayBufferViewToTexture(texture, data, face, i);
            }
        }
    }
    // Once all done, finishes the cleanup and return
    return Promise.all(promises).then(() => {
        // Release temp RTT.
        if (cubeRtt) {
            engine._releaseTexture(texture);
            cubeRtt._swapAndDie(texture);
        }
        // Release temp Post Process.
        if (rgbdPostProcess) {
            rgbdPostProcess.dispose();
        }
        // Flag internal texture as ready in case they are in use.
        if (generateNonLODTextures) {
            if (texture._lodTextureHigh && texture._lodTextureHigh._texture) {
                texture._lodTextureHigh._texture.isReady = true;
            }
            if (texture._lodTextureMid && texture._lodTextureMid._texture) {
                texture._lodTextureMid._texture.isReady = true;
            }
            if (texture._lodTextureLow && texture._lodTextureLow._texture) {
                texture._lodTextureLow._texture.isReady = true;
            }
        }
    });
}
/**
 * Uploads spherical polynomials information to the texture.
 * @param texture defines the texture we are trying to upload the information to
 * @param info defines the environment texture info retrieved through the GetEnvInfo method
 */
function UploadEnvSpherical(texture, info) {
    info = normalizeEnvInfo(info);
    const irradianceInfo = info.irradiance;
    if (!irradianceInfo) {
        return;
    }
    const sp = new sphericalPolynomial/* SphericalPolynomial */.Q();
    math_vector/* Vector3 */.Pq.FromArrayToRef(irradianceInfo.x, 0, sp.x);
    math_vector/* Vector3 */.Pq.FromArrayToRef(irradianceInfo.y, 0, sp.y);
    math_vector/* Vector3 */.Pq.FromArrayToRef(irradianceInfo.z, 0, sp.z);
    math_vector/* Vector3 */.Pq.FromArrayToRef(irradianceInfo.xx, 0, sp.xx);
    math_vector/* Vector3 */.Pq.FromArrayToRef(irradianceInfo.yy, 0, sp.yy);
    math_vector/* Vector3 */.Pq.FromArrayToRef(irradianceInfo.zz, 0, sp.zz);
    math_vector/* Vector3 */.Pq.FromArrayToRef(irradianceInfo.yz, 0, sp.yz);
    math_vector/* Vector3 */.Pq.FromArrayToRef(irradianceInfo.zx, 0, sp.zx);
    math_vector/* Vector3 */.Pq.FromArrayToRef(irradianceInfo.xy, 0, sp.xy);
    texture._sphericalPolynomial = sp;
}
/**
 * @internal
 */
function _UpdateRGBDAsync(internalTexture, data, sphericalPolynomial, lodScale, lodOffset) {
    const proxy = internalTexture
        .getEngine()
        .createRawCubeTexture(null, internalTexture.width, internalTexture.format, internalTexture.type, internalTexture.generateMipMaps, internalTexture.invertY, internalTexture.samplingMode, internalTexture._compression);
    const proxyPromise = UploadLevelsAsync(proxy, data).then(() => internalTexture);
    internalTexture.onRebuildCallback = (_internalTexture) => {
        return {
            proxy: proxyPromise,
            isReady: true,
            isAsync: true,
        };
    };
    internalTexture._source = 13 /* InternalTextureSource.CubeRawRGBD */;
    internalTexture._bufferViewArrayArray = data;
    internalTexture._lodGenerationScale = lodScale;
    internalTexture._lodGenerationOffset = lodOffset;
    internalTexture._sphericalPolynomial = sphericalPolynomial;
    return UploadLevelsAsync(internalTexture, data).then(() => {
        internalTexture.isReady = true;
        return internalTexture;
    });
}
/**
 * Sets of helpers addressing the serialization and deserialization of environment texture
 * stored in a BabylonJS env file.
 * Those files are usually stored as .env files.
 */
const EnvironmentTextureTools = {
    /**
     * Gets the environment info from an env file.
     * @param data The array buffer containing the .env bytes.
     * @returns the environment file info (the json header) if successfully parsed, normalized to the latest supported version.
     */
    GetEnvInfo,
    /**
     * Creates an environment texture from a loaded cube texture.
     * @param texture defines the cube texture to convert in env file
     * @param options options for the conversion process
     * @param options.imageType the mime type for the encoded images, with support for "image/png" (default) and "image/webp"
     * @param options.imageQuality the image quality of encoded WebP images.
     * @returns a promise containing the environment data if successful.
     */
    CreateEnvTextureAsync,
    /**
     * Creates the ArrayBufferViews used for initializing environment texture image data.
     * @param data the image data
     * @param info parameters that determine what views will be created for accessing the underlying buffer
     * @returns the views described by info providing access to the underlying buffer
     */
    CreateImageDataArrayBufferViews,
    /**
     * Uploads the texture info contained in the env file to the GPU.
     * @param texture defines the internal texture to upload to
     * @param data defines the data to load
     * @param info defines the texture info retrieved through the GetEnvInfo method
     * @returns a promise
     */
    UploadEnvLevelsAsync,
    /**
     * Uploads the levels of image data to the GPU.
     * @param texture defines the internal texture to upload to
     * @param imageData defines the array buffer views of image data [mipmap][face]
     * @param imageType the mime type of the image data
     * @returns a promise
     */
    UploadLevelsAsync,
    /**
     * Uploads spherical polynomials information to the texture.
     * @param texture defines the texture we are trying to upload the information to
     * @param info defines the environment texture info retrieved through the GetEnvInfo method
     */
    UploadEnvSpherical,
};
//# sourceMappingURL=environmentTextureTools.js.map
;// ./node_modules/@babylonjs/core/Materials/Textures/Loaders/envTextureLoader.js

/**
 * Implementation of the ENV Texture Loader.
 * @internal
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
class _ENVTextureLoader {
    constructor() {
        /**
         * Defines whether the loader supports cascade loading the different faces.
         */
        this.supportCascades = false;
    }
    /**
     * Uploads the cube texture data to the WebGL texture. It has already been bound.
     * @param data contains the texture data
     * @param texture defines the BabylonJS internal texture
     * @param createPolynomials will be true if polynomials have been requested
     * @param onLoad defines the callback to trigger once the texture is ready
     * @param onError defines the callback to trigger in case of error
     */
    loadCubeData(data, texture, createPolynomials, onLoad, onError) {
        if (Array.isArray(data)) {
            return;
        }
        const info = GetEnvInfo(data);
        if (info) {
            texture.width = info.width;
            texture.height = info.width;
            try {
                UploadEnvSpherical(texture, info);
                UploadEnvLevelsAsync(texture, data, info).then(() => {
                    texture.isReady = true;
                    texture.onLoadedObservable.notifyObservers(texture);
                    texture.onLoadedObservable.clear();
                    if (onLoad) {
                        onLoad();
                    }
                }, (reason) => {
                    onError?.("Can not upload environment levels", reason);
                });
            }
            catch (e) {
                onError?.("Can not upload environment file", e);
            }
        }
        else if (onError) {
            onError("Can not parse the environment file", null);
        }
    }
    /**
     * Uploads the 2D texture data to the WebGL texture. It has already been bound once in the callback.
     */
    loadData() {
        // eslint-disable-next-line no-throw-literal
        throw ".env not supported in 2d.";
    }
}
//# sourceMappingURL=envTextureLoader.js.map

/***/ }),

/***/ 9928:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Dispose: () => (/* binding */ Dispose),
/* harmony export */   DumpData: () => (/* binding */ DumpData),
/* harmony export */   DumpDataAsync: () => (/* binding */ DumpDataAsync),
/* harmony export */   DumpFramebuffer: () => (/* binding */ DumpFramebuffer),
/* harmony export */   DumpTools: () => (/* binding */ DumpTools)
/* harmony export */ });
/* harmony import */ var _Materials_effectRenderer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4255);
/* harmony import */ var _tools_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(998);
/* harmony import */ var _Maths_math_scalar_functions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4867);
/* harmony import */ var _Engines_engineStore_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6315);





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
                _Engines_engineStore_js__WEBPACK_IMPORTED_MODULE_3__/* .EngineStore */ .q.Instances.pop();
                // However, make sure to dispose it when no other engines are left
                _Engines_engineStore_js__WEBPACK_IMPORTED_MODULE_3__/* .EngineStore */ .q.OnEnginesDisposedObservable.add((e) => {
                    // guaranteed to run when no other instances are left
                    // only dispose if it's not the current engine
                    if (engine && e !== engine && !engine.isDisposed && _Engines_engineStore_js__WEBPACK_IMPORTED_MODULE_3__/* .EngineStore */ .q.Instances.length === 0) {
                        // Dump the engine and the associated resources
                        Dispose();
                    }
                });
                engine.getCaps().parallelShaderCompile = undefined;
                const renderer = new _Materials_effectRenderer_js__WEBPACK_IMPORTED_MODULE_0__/* .EffectRenderer */ .J(engine);
                __webpack_require__.e(/* import() */ 71).then(__webpack_require__.bind(__webpack_require__, 9820)).then(({ passPixelShader }) => {
                    if (!engine) {
                        reject("Engine is not defined");
                        return;
                    }
                    const wrapper = new _Materials_effectRenderer_js__WEBPACK_IMPORTED_MODULE_0__/* .EffectWrapper */ .$({
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
                data2[n] = Math.round((0,_Maths_math_scalar_functions_js__WEBPACK_IMPORTED_MODULE_2__/* .Clamp */ .OQ)(v) * 255);
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
            _tools_js__WEBPACK_IMPORTED_MODULE_1__/* .Tools */ .S0.ToBlob(renderer.canvas, (blob) => {
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
            _tools_js__WEBPACK_IMPORTED_MODULE_1__/* .Tools */ .S0.EncodeScreenshotCanvasData(renderer.canvas, successCallback, mimeType, fileName, quality);
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
    _tools_js__WEBPACK_IMPORTED_MODULE_1__/* .Tools */ .S0.DumpData = DumpData;
    _tools_js__WEBPACK_IMPORTED_MODULE_1__/* .Tools */ .S0.DumpDataAsync = DumpDataAsync;
    _tools_js__WEBPACK_IMPORTED_MODULE_1__/* .Tools */ .S0.DumpFramebuffer = DumpFramebuffer;
};
initSideEffects();
//# sourceMappingURL=dumpTools.js.map

/***/ })

}]);