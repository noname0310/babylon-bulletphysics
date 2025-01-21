"use strict";
(self["webpackChunkbabylon_bulletphysics"] = self["webpackChunkbabylon_bulletphysics"] || []).push([[162],{

/***/ 1313:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   rX: () => (/* binding */ useOpenGLOrientationForUV)
/* harmony export */ });
/* unused harmony exports setOpenGLOrientationForUV, CompatibilityOptions */
/**
 * Defines if the system should use OpenGL convention for UVs when creating geometry or loading .babylon files (false by default)
 */
let useOpenGLOrientationForUV = false;
/**
 * Sets whether to use OpenGL convention for UVs
 * @param value the new value
 */
function setOpenGLOrientationForUV(value) {
    useOpenGLOrientationForUV = value;
}
/**
 * Options used to control default behaviors regarding compatibility support
 * @deprecated please use named exports
 */
const CompatibilityOptions = {
    /* eslint-disable @typescript-eslint/naming-convention */
    get UseOpenGLOrientationForUV() {
        return useOpenGLOrientationForUV;
    },
    set UseOpenGLOrientationForUV(value) {
        useOpenGLOrientationForUV = value;
    },
    /* eslint-enable @typescript-eslint/naming-convention */
};
//# sourceMappingURL=compatibilityOptions.js.map

/***/ }),

/***/ 2781:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  g: () => (/* binding */ Texture)
});

// EXTERNAL MODULE: ./node_modules/@babylonjs/core/tslib.es6.js
var tslib_es6 = __webpack_require__(5524);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Misc/decorators.js
var decorators = __webpack_require__(9259);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Misc/observable.js
var observable = __webpack_require__(9848);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Maths/math.vector.js
var math_vector = __webpack_require__(9923);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Materials/Textures/baseTexture.js + 1 modules
var baseTexture = __webpack_require__(2667);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Misc/typeStore.js
var typeStore = __webpack_require__(6552);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Misc/devTools.js
var devTools = __webpack_require__(5503);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Misc/timingTools.js
var timingTools = __webpack_require__(2940);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Misc/instantiationTools.js
var instantiationTools = __webpack_require__(9337);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Maths/math.plane.js
var math_plane = __webpack_require__(4100);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Misc/stringTools.js
var stringTools = __webpack_require__(6181);
;// ./node_modules/@babylonjs/core/Misc/copyTools.js
/**
 * Transform some pixel data to a base64 string
 * @param pixels defines the pixel data to transform to base64
 * @param size defines the width and height of the (texture) data
 * @param invertY true if the data must be inverted for the Y coordinate during the conversion
 * @returns The base64 encoded string or null
 */
function GenerateBase64StringFromPixelData(pixels, size, invertY = false) {
    const width = size.width;
    const height = size.height;
    if (pixels instanceof Float32Array) {
        let len = pixels.byteLength / pixels.BYTES_PER_ELEMENT;
        const npixels = new Uint8Array(len);
        while (--len >= 0) {
            let val = pixels[len];
            if (val < 0) {
                val = 0;
            }
            else if (val > 1) {
                val = 1;
            }
            npixels[len] = val * 255;
        }
        pixels = npixels;
    }
    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext("2d");
    if (!ctx) {
        return null;
    }
    const imageData = ctx.createImageData(width, height);
    const castData = imageData.data;
    castData.set(pixels);
    ctx.putImageData(imageData, 0, 0);
    if (invertY) {
        const canvas2 = document.createElement("canvas");
        canvas2.width = width;
        canvas2.height = height;
        const ctx2 = canvas2.getContext("2d");
        if (!ctx2) {
            return null;
        }
        ctx2.translate(0, height);
        ctx2.scale(1, -1);
        ctx2.drawImage(canvas, 0, 0);
        return canvas2.toDataURL("image/png");
    }
    return canvas.toDataURL("image/png");
}
/**
 * Reads the pixels stored in the webgl texture and returns them as a base64 string
 * @param texture defines the texture to read pixels from
 * @param faceIndex defines the face of the texture to read (in case of cube texture)
 * @param level defines the LOD level of the texture to read (in case of Mip Maps)
 * @returns The base64 encoded string or null
 */
function GenerateBase64StringFromTexture(texture, faceIndex = 0, level = 0) {
    const internalTexture = texture.getInternalTexture();
    if (!internalTexture) {
        return null;
    }
    const pixels = texture._readPixelsSync(faceIndex, level);
    if (!pixels) {
        return null;
    }
    return GenerateBase64StringFromPixelData(pixels, texture.getSize(), internalTexture.invertY);
}
/**
 * Reads the pixels stored in the webgl texture and returns them as a base64 string
 * @param texture defines the texture to read pixels from
 * @param faceIndex defines the face of the texture to read (in case of cube texture)
 * @param level defines the LOD level of the texture to read (in case of Mip Maps)
 * @returns The base64 encoded string or null wrapped in a promise
 */
async function GenerateBase64StringFromTextureAsync(texture, faceIndex = 0, level = 0) {
    const internalTexture = texture.getInternalTexture();
    if (!internalTexture) {
        return null;
    }
    const pixels = await texture.readPixels(faceIndex, level);
    if (!pixels) {
        return null;
    }
    return GenerateBase64StringFromPixelData(pixels, texture.getSize(), internalTexture.invertY);
}
/**
 * Class used to host copy specific utilities
 * (Back-compat)
 */
const CopyTools = {
    /**
     * Transform some pixel data to a base64 string
     * @param pixels defines the pixel data to transform to base64
     * @param size defines the width and height of the (texture) data
     * @param invertY true if the data must be inverted for the Y coordinate during the conversion
     * @returns The base64 encoded string or null
     */
    GenerateBase64StringFromPixelData,
    /**
     * Reads the pixels stored in the webgl texture and returns them as a base64 string
     * @param texture defines the texture to read pixels from
     * @param faceIndex defines the face of the texture to read (in case of cube texture)
     * @param level defines the LOD level of the texture to read (in case of Mip Maps)
     * @returns The base64 encoded string or null
     */
    GenerateBase64StringFromTexture,
    /**
     * Reads the pixels stored in the webgl texture and returns them as a base64 string
     * @param texture defines the texture to read pixels from
     * @param faceIndex defines the face of the texture to read (in case of cube texture)
     * @param level defines the LOD level of the texture to read (in case of Mip Maps)
     * @returns The base64 encoded string or null wrapped in a promise
     */
    GenerateBase64StringFromTextureAsync,
};
//# sourceMappingURL=copyTools.js.map
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Compat/compatibilityOptions.js
var compatibilityOptions = __webpack_require__(1313);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Misc/decorators.serialization.js
var decorators_serialization = __webpack_require__(6877);
;// ./node_modules/@babylonjs/core/Materials/Textures/texture.js















/**
 * This represents a texture in babylon. It can be easily loaded from a network, base64 or html input.
 * @see https://doc.babylonjs.com/features/featuresDeepDive/materials/using/materials_introduction#texture
 */
class Texture extends baseTexture/* BaseTexture */.t {
    /**
     * @internal
     */
    static _CreateVideoTexture(name, src, scene, generateMipMaps = false, invertY = false, samplingMode = Texture.TRILINEAR_SAMPLINGMODE, settings = {}, onError, format = 5) {
        throw (0,devTools/* _WarnImport */.n)("VideoTexture");
    }
    /**
     * Are mip maps generated for this texture or not.
     */
    get noMipmap() {
        return this._noMipmap;
    }
    /** Returns the texture mime type if it was defined by a loader (undefined else) */
    get mimeType() {
        return this._mimeType;
    }
    /**
     * Is the texture preventing material to render while loading.
     * If false, a default texture will be used instead of the loading one during the preparation step.
     */
    set isBlocking(value) {
        this._isBlocking = value;
    }
    get isBlocking() {
        return this._isBlocking;
    }
    /**
     * Gets a boolean indicating if the texture needs to be inverted on the y axis during loading
     */
    get invertY() {
        return this._invertY;
    }
    /**
     * Instantiates a new texture.
     * This represents a texture in babylon. It can be easily loaded from a network, base64 or html input.
     * @see https://doc.babylonjs.com/features/featuresDeepDive/materials/using/materials_introduction#texture
     * @param url defines the url of the picture to load as a texture
     * @param sceneOrEngine defines the scene or engine the texture will belong to
     * @param noMipmapOrOptions defines if the texture will require mip maps or not or set of all options to create the texture
     * @param invertY defines if the texture needs to be inverted on the y axis during loading
     * @param samplingMode defines the sampling mode we want for the texture while fetching from it (Texture.NEAREST_SAMPLINGMODE...)
     * @param onLoad defines a callback triggered when the texture has been loaded
     * @param onError defines a callback triggered when an error occurred during the loading session
     * @param buffer defines the buffer to load the texture from in case the texture is loaded from a buffer representation
     * @param deleteBuffer defines if the buffer we are loading the texture from should be deleted after load
     * @param format defines the format of the texture we are trying to load (Engine.TEXTUREFORMAT_RGBA...)
     * @param mimeType defines an optional mime type information
     * @param loaderOptions options to be passed to the loader
     * @param creationFlags specific flags to use when creating the texture (1 for storage textures, for eg)
     * @param forcedExtension defines the extension to use to pick the right loader
     */
    constructor(url, sceneOrEngine, noMipmapOrOptions, invertY, samplingMode = Texture.TRILINEAR_SAMPLINGMODE, onLoad = null, onError = null, buffer = null, deleteBuffer = false, format, mimeType, loaderOptions, creationFlags, forcedExtension) {
        super(sceneOrEngine);
        /**
         * Define the url of the texture.
         */
        this.url = null;
        /**
         * Define an offset on the texture to offset the u coordinates of the UVs
         * @see https://doc.babylonjs.com/features/featuresDeepDive/materials/using/moreMaterials#offsetting
         */
        this.uOffset = 0;
        /**
         * Define an offset on the texture to offset the v coordinates of the UVs
         * @see https://doc.babylonjs.com/features/featuresDeepDive/materials/using/moreMaterials#offsetting
         */
        this.vOffset = 0;
        /**
         * Define an offset on the texture to scale the u coordinates of the UVs
         * @see https://doc.babylonjs.com/features/featuresDeepDive/materials/using/moreMaterials#tiling
         */
        this.uScale = 1.0;
        /**
         * Define an offset on the texture to scale the v coordinates of the UVs
         * @see https://doc.babylonjs.com/features/featuresDeepDive/materials/using/moreMaterials#tiling
         */
        this.vScale = 1.0;
        /**
         * Define an offset on the texture to rotate around the u coordinates of the UVs
         * The angle is defined in radians.
         * @see https://doc.babylonjs.com/features/featuresDeepDive/materials/using/moreMaterials
         */
        this.uAng = 0;
        /**
         * Define an offset on the texture to rotate around the v coordinates of the UVs
         * The angle is defined in radians.
         * @see https://doc.babylonjs.com/features/featuresDeepDive/materials/using/moreMaterials
         */
        this.vAng = 0;
        /**
         * Define an offset on the texture to rotate around the w coordinates of the UVs (in case of 3d texture)
         * The angle is defined in radians.
         * @see https://doc.babylonjs.com/features/featuresDeepDive/materials/using/moreMaterials
         */
        this.wAng = 0;
        /**
         * Defines the center of rotation (U)
         */
        this.uRotationCenter = 0.5;
        /**
         * Defines the center of rotation (V)
         */
        this.vRotationCenter = 0.5;
        /**
         * Defines the center of rotation (W)
         */
        this.wRotationCenter = 0.5;
        /**
         * Sets this property to true to avoid deformations when rotating the texture with non-uniform scaling
         */
        this.homogeneousRotationInUVTransform = false;
        /**
         * List of inspectable custom properties (used by the Inspector)
         * @see https://doc.babylonjs.com/toolsAndResources/inspector#extensibility
         */
        this.inspectableCustomProperties = null;
        /** @internal */
        this._noMipmap = false;
        /** @internal */
        this._invertY = false;
        this._rowGenerationMatrix = null;
        this._cachedTextureMatrix = null;
        this._projectionModeMatrix = null;
        this._t0 = null;
        this._t1 = null;
        this._t2 = null;
        this._cachedUOffset = -1;
        this._cachedVOffset = -1;
        this._cachedUScale = 0;
        this._cachedVScale = 0;
        this._cachedUAng = -1;
        this._cachedVAng = -1;
        this._cachedWAng = -1;
        this._cachedReflectionProjectionMatrixId = -1;
        this._cachedURotationCenter = -1;
        this._cachedVRotationCenter = -1;
        this._cachedWRotationCenter = -1;
        this._cachedHomogeneousRotationInUVTransform = false;
        this._cachedIdentity3x2 = true;
        this._cachedReflectionTextureMatrix = null;
        this._cachedReflectionUOffset = -1;
        this._cachedReflectionVOffset = -1;
        this._cachedReflectionUScale = 0;
        this._cachedReflectionVScale = 0;
        this._cachedReflectionCoordinatesMode = -1;
        /** @internal */
        this._buffer = null;
        this._deleteBuffer = false;
        this._format = null;
        this._delayedOnLoad = null;
        this._delayedOnError = null;
        /**
         * Observable triggered once the texture has been loaded.
         */
        this.onLoadObservable = new observable/* Observable */.cP();
        this._isBlocking = true;
        this.name = url || "";
        this.url = url;
        let noMipmap;
        let useSRGBBuffer = false;
        let internalTexture = null;
        let gammaSpace = true;
        if (typeof noMipmapOrOptions === "object" && noMipmapOrOptions !== null) {
            noMipmap = noMipmapOrOptions.noMipmap ?? false;
            invertY = noMipmapOrOptions.invertY ?? !compatibilityOptions/* useOpenGLOrientationForUV */.rX;
            samplingMode = noMipmapOrOptions.samplingMode ?? Texture.TRILINEAR_SAMPLINGMODE;
            onLoad = noMipmapOrOptions.onLoad ?? null;
            onError = noMipmapOrOptions.onError ?? null;
            buffer = noMipmapOrOptions.buffer ?? null;
            deleteBuffer = noMipmapOrOptions.deleteBuffer ?? false;
            format = noMipmapOrOptions.format;
            mimeType = noMipmapOrOptions.mimeType;
            loaderOptions = noMipmapOrOptions.loaderOptions;
            creationFlags = noMipmapOrOptions.creationFlags;
            useSRGBBuffer = noMipmapOrOptions.useSRGBBuffer ?? false;
            internalTexture = noMipmapOrOptions.internalTexture ?? null;
            gammaSpace = noMipmapOrOptions.gammaSpace ?? gammaSpace;
            forcedExtension = noMipmapOrOptions.forcedExtension ?? forcedExtension;
        }
        else {
            noMipmap = !!noMipmapOrOptions;
        }
        this._gammaSpace = gammaSpace;
        this._noMipmap = noMipmap;
        this._invertY = invertY === undefined ? !compatibilityOptions/* useOpenGLOrientationForUV */.rX : invertY;
        this._initialSamplingMode = samplingMode;
        this._buffer = buffer;
        this._deleteBuffer = deleteBuffer;
        this._mimeType = mimeType;
        this._loaderOptions = loaderOptions;
        this._creationFlags = creationFlags;
        this._useSRGBBuffer = useSRGBBuffer;
        this._forcedExtension = forcedExtension;
        if (format) {
            this._format = format;
        }
        const scene = this.getScene();
        const engine = this._getEngine();
        if (!engine) {
            return;
        }
        engine.onBeforeTextureInitObservable.notifyObservers(this);
        const load = () => {
            if (this._texture) {
                if (this._texture._invertVScale) {
                    this.vScale *= -1;
                    this.vOffset += 1;
                }
                // Update texture to match internal texture's wrapping
                if (this._texture._cachedWrapU !== null) {
                    this.wrapU = this._texture._cachedWrapU;
                    this._texture._cachedWrapU = null;
                }
                if (this._texture._cachedWrapV !== null) {
                    this.wrapV = this._texture._cachedWrapV;
                    this._texture._cachedWrapV = null;
                }
                if (this._texture._cachedWrapR !== null) {
                    this.wrapR = this._texture._cachedWrapR;
                    this._texture._cachedWrapR = null;
                }
            }
            if (this.onLoadObservable.hasObservers()) {
                this.onLoadObservable.notifyObservers(this);
            }
            if (onLoad) {
                onLoad();
            }
            if (!this.isBlocking && scene) {
                scene.resetCachedMaterial();
            }
        };
        const errorHandler = (message, exception) => {
            this._loadingError = true;
            this._errorObject = { message, exception };
            if (onError) {
                onError(message, exception);
            }
            Texture.OnTextureLoadErrorObservable.notifyObservers(this);
        };
        if (!this.url && !internalTexture) {
            this._delayedOnLoad = load;
            this._delayedOnError = errorHandler;
            return;
        }
        this._texture = internalTexture ?? this._getFromCache(this.url, noMipmap, samplingMode, this._invertY, useSRGBBuffer, this.isCube);
        if (!this._texture) {
            if (!scene || !scene.useDelayedTextureLoading) {
                try {
                    this._texture = engine.createTexture(this.url, noMipmap, this._invertY, scene, samplingMode, load, errorHandler, this._buffer, undefined, this._format, this._forcedExtension, mimeType, loaderOptions, creationFlags, useSRGBBuffer);
                }
                catch (e) {
                    errorHandler("error loading", e);
                    throw e;
                }
                if (deleteBuffer) {
                    this._buffer = null;
                }
            }
            else {
                this.delayLoadState = 4;
                this._delayedOnLoad = load;
                this._delayedOnError = errorHandler;
            }
        }
        else {
            if (this._texture.isReady) {
                timingTools/* TimingTools */._.SetImmediate(() => load());
            }
            else {
                const loadObserver = this._texture.onLoadedObservable.add(load);
                this._texture.onErrorObservable.add((e) => {
                    errorHandler(e.message, e.exception);
                    this._texture?.onLoadedObservable.remove(loadObserver);
                });
            }
        }
    }
    /**
     * Update the url (and optional buffer) of this texture if url was null during construction.
     * @param url the url of the texture
     * @param buffer the buffer of the texture (defaults to null)
     * @param onLoad callback called when the texture is loaded  (defaults to null)
     * @param forcedExtension defines the extension to use to pick the right loader
     */
    updateURL(url, buffer = null, onLoad, forcedExtension) {
        if (this.url) {
            this.releaseInternalTexture();
            this.getScene().markAllMaterialsAsDirty(1, (mat) => {
                return mat.hasTexture(this);
            });
        }
        if (!this.name || this.name.startsWith("data:")) {
            this.name = url;
        }
        this.url = url;
        this._buffer = buffer;
        this._forcedExtension = forcedExtension;
        this.delayLoadState = 4;
        if (onLoad) {
            this._delayedOnLoad = onLoad;
        }
        this.delayLoad();
    }
    /**
     * Finish the loading sequence of a texture flagged as delayed load.
     * @internal
     */
    delayLoad() {
        if (this.delayLoadState !== 4) {
            return;
        }
        const scene = this.getScene();
        if (!scene) {
            return;
        }
        this.delayLoadState = 1;
        this._texture = this._getFromCache(this.url, this._noMipmap, this.samplingMode, this._invertY, this._useSRGBBuffer, this.isCube);
        if (!this._texture) {
            this._texture = scene
                .getEngine()
                .createTexture(this.url, this._noMipmap, this._invertY, scene, this.samplingMode, this._delayedOnLoad, this._delayedOnError, this._buffer, null, this._format, this._forcedExtension, this._mimeType, this._loaderOptions, this._creationFlags, this._useSRGBBuffer);
            if (this._deleteBuffer) {
                this._buffer = null;
            }
        }
        else {
            if (this._delayedOnLoad) {
                if (this._texture.isReady) {
                    timingTools/* TimingTools */._.SetImmediate(this._delayedOnLoad);
                }
                else {
                    this._texture.onLoadedObservable.add(this._delayedOnLoad);
                }
            }
        }
        this._delayedOnLoad = null;
        this._delayedOnError = null;
    }
    _prepareRowForTextureGeneration(x, y, z, t) {
        x *= this._cachedUScale;
        y *= this._cachedVScale;
        x -= this.uRotationCenter * this._cachedUScale;
        y -= this.vRotationCenter * this._cachedVScale;
        z -= this.wRotationCenter;
        math_vector/* Vector3 */.Pq.TransformCoordinatesFromFloatsToRef(x, y, z, this._rowGenerationMatrix, t);
        t.x += this.uRotationCenter * this._cachedUScale + this._cachedUOffset;
        t.y += this.vRotationCenter * this._cachedVScale + this._cachedVOffset;
        t.z += this.wRotationCenter;
    }
    /**
     * Get the current texture matrix which includes the requested offsetting, tiling and rotation components.
     * @param uBase The horizontal base offset multiplier (1 by default)
     * @returns the transform matrix of the texture.
     */
    getTextureMatrix(uBase = 1) {
        if (this.uOffset === this._cachedUOffset &&
            this.vOffset === this._cachedVOffset &&
            this.uScale * uBase === this._cachedUScale &&
            this.vScale === this._cachedVScale &&
            this.uAng === this._cachedUAng &&
            this.vAng === this._cachedVAng &&
            this.wAng === this._cachedWAng &&
            this.uRotationCenter === this._cachedURotationCenter &&
            this.vRotationCenter === this._cachedVRotationCenter &&
            this.wRotationCenter === this._cachedWRotationCenter &&
            this.homogeneousRotationInUVTransform === this._cachedHomogeneousRotationInUVTransform) {
            return this._cachedTextureMatrix;
        }
        this._cachedUOffset = this.uOffset;
        this._cachedVOffset = this.vOffset;
        this._cachedUScale = this.uScale * uBase;
        this._cachedVScale = this.vScale;
        this._cachedUAng = this.uAng;
        this._cachedVAng = this.vAng;
        this._cachedWAng = this.wAng;
        this._cachedURotationCenter = this.uRotationCenter;
        this._cachedVRotationCenter = this.vRotationCenter;
        this._cachedWRotationCenter = this.wRotationCenter;
        this._cachedHomogeneousRotationInUVTransform = this.homogeneousRotationInUVTransform;
        if (!this._cachedTextureMatrix || !this._rowGenerationMatrix) {
            this._cachedTextureMatrix = math_vector/* Matrix */.uq.Zero();
            this._rowGenerationMatrix = new math_vector/* Matrix */.uq();
            this._t0 = math_vector/* Vector3 */.Pq.Zero();
            this._t1 = math_vector/* Vector3 */.Pq.Zero();
            this._t2 = math_vector/* Vector3 */.Pq.Zero();
        }
        math_vector/* Matrix */.uq.RotationYawPitchRollToRef(this.vAng, this.uAng, this.wAng, this._rowGenerationMatrix);
        if (this.homogeneousRotationInUVTransform) {
            math_vector/* Matrix */.uq.TranslationToRef(-this._cachedURotationCenter, -this._cachedVRotationCenter, -this._cachedWRotationCenter, math_vector/* TmpVectors */.AA.Matrix[0]);
            math_vector/* Matrix */.uq.TranslationToRef(this._cachedURotationCenter, this._cachedVRotationCenter, this._cachedWRotationCenter, math_vector/* TmpVectors */.AA.Matrix[1]);
            math_vector/* Matrix */.uq.ScalingToRef(this._cachedUScale, this._cachedVScale, 0, math_vector/* TmpVectors */.AA.Matrix[2]);
            math_vector/* Matrix */.uq.TranslationToRef(this._cachedUOffset, this._cachedVOffset, 0, math_vector/* TmpVectors */.AA.Matrix[3]);
            math_vector/* TmpVectors */.AA.Matrix[0].multiplyToRef(this._rowGenerationMatrix, this._cachedTextureMatrix);
            this._cachedTextureMatrix.multiplyToRef(math_vector/* TmpVectors */.AA.Matrix[1], this._cachedTextureMatrix);
            this._cachedTextureMatrix.multiplyToRef(math_vector/* TmpVectors */.AA.Matrix[2], this._cachedTextureMatrix);
            this._cachedTextureMatrix.multiplyToRef(math_vector/* TmpVectors */.AA.Matrix[3], this._cachedTextureMatrix);
            // copy the translation row to the 3rd row of the matrix so that we don't need to update the shaders (which expects the translation to be on the 3rd row)
            this._cachedTextureMatrix.setRowFromFloats(2, this._cachedTextureMatrix.m[12], this._cachedTextureMatrix.m[13], this._cachedTextureMatrix.m[14], 1);
        }
        else {
            this._prepareRowForTextureGeneration(0, 0, 0, this._t0);
            this._prepareRowForTextureGeneration(1.0, 0, 0, this._t1);
            this._prepareRowForTextureGeneration(0, 1.0, 0, this._t2);
            this._t1.subtractInPlace(this._t0);
            this._t2.subtractInPlace(this._t0);
            math_vector/* Matrix */.uq.FromValuesToRef(this._t1.x, this._t1.y, this._t1.z, 0.0, this._t2.x, this._t2.y, this._t2.z, 0.0, this._t0.x, this._t0.y, this._t0.z, 0.0, 0.0, 0.0, 0.0, 1.0, this._cachedTextureMatrix);
        }
        const scene = this.getScene();
        if (!scene) {
            return this._cachedTextureMatrix;
        }
        const previousIdentity3x2 = this._cachedIdentity3x2;
        this._cachedIdentity3x2 = this._cachedTextureMatrix.isIdentityAs3x2();
        if (this.optimizeUVAllocation && previousIdentity3x2 !== this._cachedIdentity3x2) {
            // We flag the materials that are using this texture as "texture dirty" because depending on the fact that the matrix is the identity or not, some defines
            // will get different values (see PrepareDefinesForMergedUV), meaning we should regenerate the effect accordingly
            scene.markAllMaterialsAsDirty(1, (mat) => {
                return mat.hasTexture(this);
            });
        }
        return this._cachedTextureMatrix;
    }
    /**
     * Get the current matrix used to apply reflection. This is useful to rotate an environment texture for instance.
     * @returns The reflection texture transform
     */
    getReflectionTextureMatrix() {
        const scene = this.getScene();
        if (!scene) {
            return this._cachedReflectionTextureMatrix;
        }
        if (this.uOffset === this._cachedReflectionUOffset &&
            this.vOffset === this._cachedReflectionVOffset &&
            this.uScale === this._cachedReflectionUScale &&
            this.vScale === this._cachedReflectionVScale &&
            this.coordinatesMode === this._cachedReflectionCoordinatesMode) {
            if (this.coordinatesMode === Texture.PROJECTION_MODE) {
                if (this._cachedReflectionProjectionMatrixId === scene.getProjectionMatrix().updateFlag) {
                    return this._cachedReflectionTextureMatrix;
                }
            }
            else {
                return this._cachedReflectionTextureMatrix;
            }
        }
        if (!this._cachedReflectionTextureMatrix) {
            this._cachedReflectionTextureMatrix = math_vector/* Matrix */.uq.Zero();
        }
        if (!this._projectionModeMatrix) {
            this._projectionModeMatrix = math_vector/* Matrix */.uq.Zero();
        }
        const flagMaterialsAsTextureDirty = this._cachedReflectionCoordinatesMode !== this.coordinatesMode;
        this._cachedReflectionUOffset = this.uOffset;
        this._cachedReflectionVOffset = this.vOffset;
        this._cachedReflectionUScale = this.uScale;
        this._cachedReflectionVScale = this.vScale;
        this._cachedReflectionCoordinatesMode = this.coordinatesMode;
        switch (this.coordinatesMode) {
            case Texture.PLANAR_MODE: {
                math_vector/* Matrix */.uq.IdentityToRef(this._cachedReflectionTextureMatrix);
                this._cachedReflectionTextureMatrix[0] = this.uScale;
                this._cachedReflectionTextureMatrix[5] = this.vScale;
                this._cachedReflectionTextureMatrix[12] = this.uOffset;
                this._cachedReflectionTextureMatrix[13] = this.vOffset;
                break;
            }
            case Texture.PROJECTION_MODE: {
                math_vector/* Matrix */.uq.FromValuesToRef(0.5, 0.0, 0.0, 0.0, 0.0, -0.5, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.5, 0.5, 1.0, 1.0, this._projectionModeMatrix);
                const projectionMatrix = scene.getProjectionMatrix();
                this._cachedReflectionProjectionMatrixId = projectionMatrix.updateFlag;
                projectionMatrix.multiplyToRef(this._projectionModeMatrix, this._cachedReflectionTextureMatrix);
                break;
            }
            default:
                math_vector/* Matrix */.uq.IdentityToRef(this._cachedReflectionTextureMatrix);
                break;
        }
        if (flagMaterialsAsTextureDirty) {
            // We flag the materials that are using this texture as "texture dirty" if the coordinatesMode has changed.
            // Indeed, this property is used to set the value of some defines used to generate the effect (in material.isReadyForSubMesh), so we must make sure this code will be re-executed and the effect recreated if necessary
            scene.markAllMaterialsAsDirty(1, (mat) => {
                return mat.hasTexture(this);
            });
        }
        return this._cachedReflectionTextureMatrix;
    }
    /**
     * Clones the texture.
     * @returns the cloned texture
     */
    clone() {
        const options = {
            noMipmap: this._noMipmap,
            invertY: this._invertY,
            samplingMode: this.samplingMode,
            onLoad: undefined,
            onError: undefined,
            buffer: this._texture ? this._texture._buffer : undefined,
            deleteBuffer: this._deleteBuffer,
            format: this.textureFormat,
            mimeType: this.mimeType,
            loaderOptions: this._loaderOptions,
            creationFlags: this._creationFlags,
            useSRGBBuffer: this._useSRGBBuffer,
        };
        return decorators_serialization/* SerializationHelper */.p.Clone(() => {
            return new Texture(this._texture ? this._texture.url : null, this.getScene(), options);
        }, this);
    }
    /**
     * Serialize the texture to a JSON representation we can easily use in the respective Parse function.
     * @returns The JSON representation of the texture
     */
    serialize() {
        const savedName = this.name;
        if (!Texture.SerializeBuffers) {
            if (this.name.startsWith("data:")) {
                this.name = "";
            }
        }
        if (this.name.startsWith("data:") && this.url === this.name) {
            this.url = "";
        }
        const serializationObject = super.serialize(Texture._SerializeInternalTextureUniqueId);
        if (!serializationObject) {
            return null;
        }
        if (Texture.SerializeBuffers || Texture.ForceSerializeBuffers) {
            if (typeof this._buffer === "string" && this._buffer.substring(0, 5) === "data:") {
                serializationObject.base64String = this._buffer;
                serializationObject.name = serializationObject.name.replace("data:", "");
            }
            else if (this.url && this.url.startsWith("data:") && this._buffer instanceof Uint8Array) {
                serializationObject.base64String = "data:image/png;base64," + (0,stringTools/* EncodeArrayBufferToBase64 */.EL)(this._buffer);
            }
            else if (Texture.ForceSerializeBuffers || (this.url && this.url.startsWith("blob:")) || this._forceSerialize) {
                serializationObject.base64String =
                    !this._engine || this._engine._features.supportSyncTextureRead ? GenerateBase64StringFromTexture(this) : GenerateBase64StringFromTextureAsync(this);
            }
        }
        serializationObject.invertY = this._invertY;
        serializationObject.samplingMode = this.samplingMode;
        serializationObject._creationFlags = this._creationFlags;
        serializationObject._useSRGBBuffer = this._useSRGBBuffer;
        if (Texture._SerializeInternalTextureUniqueId) {
            serializationObject.internalTextureUniqueId = this._texture?.uniqueId;
        }
        serializationObject.internalTextureLabel = this._texture?.label;
        serializationObject.noMipmap = this._noMipmap;
        this.name = savedName;
        return serializationObject;
    }
    /**
     * Get the current class name of the texture useful for serialization or dynamic coding.
     * @returns "Texture"
     */
    getClassName() {
        return "Texture";
    }
    /**
     * Dispose the texture and release its associated resources.
     */
    dispose() {
        super.dispose();
        this.onLoadObservable.clear();
        this._delayedOnLoad = null;
        this._delayedOnError = null;
        this._buffer = null;
    }
    /**
     * Parse the JSON representation of a texture in order to recreate the texture in the given scene.
     * @param parsedTexture Define the JSON representation of the texture
     * @param scene Define the scene the parsed texture should be instantiated in
     * @param rootUrl Define the root url of the parsing sequence in the case of relative dependencies
     * @returns The parsed texture if successful
     */
    static Parse(parsedTexture, scene, rootUrl) {
        if (parsedTexture.customType) {
            const customTexture = instantiationTools/* InstantiationTools */.n.Instantiate(parsedTexture.customType);
            // Update Sampling Mode
            const parsedCustomTexture = customTexture.Parse(parsedTexture, scene, rootUrl);
            if (parsedTexture.samplingMode && parsedCustomTexture.updateSamplingMode && parsedCustomTexture._samplingMode) {
                if (parsedCustomTexture._samplingMode !== parsedTexture.samplingMode) {
                    parsedCustomTexture.updateSamplingMode(parsedTexture.samplingMode);
                }
            }
            return parsedCustomTexture;
        }
        if (parsedTexture.isCube && !parsedTexture.isRenderTarget) {
            return Texture._CubeTextureParser(parsedTexture, scene, rootUrl);
        }
        const hasInternalTextureUniqueId = parsedTexture.internalTextureUniqueId !== undefined;
        if (!parsedTexture.name && !parsedTexture.isRenderTarget && !hasInternalTextureUniqueId) {
            return null;
        }
        let internalTexture;
        if (hasInternalTextureUniqueId) {
            const cache = scene.getEngine().getLoadedTexturesCache();
            for (const texture of cache) {
                if (texture.uniqueId === parsedTexture.internalTextureUniqueId) {
                    internalTexture = texture;
                    break;
                }
            }
        }
        const onLoaded = (texture) => {
            // Clear cache
            if (texture && texture._texture) {
                texture._texture._cachedWrapU = null;
                texture._texture._cachedWrapV = null;
                texture._texture._cachedWrapR = null;
            }
            // Update Sampling Mode
            if (parsedTexture.samplingMode) {
                const sampling = parsedTexture.samplingMode;
                if (texture && texture.samplingMode !== sampling) {
                    texture.updateSamplingMode(sampling);
                }
            }
            // Animations
            if (texture && parsedTexture.animations) {
                for (let animationIndex = 0; animationIndex < parsedTexture.animations.length; animationIndex++) {
                    const parsedAnimation = parsedTexture.animations[animationIndex];
                    const internalClass = (0,typeStore/* GetClass */.n9)("BABYLON.Animation");
                    if (internalClass) {
                        texture.animations.push(internalClass.Parse(parsedAnimation));
                    }
                }
            }
            if (texture && texture._texture) {
                if (hasInternalTextureUniqueId && !internalTexture) {
                    texture._texture._setUniqueId(parsedTexture.internalTextureUniqueId);
                }
                texture._texture.label = parsedTexture.internalTextureLabel;
            }
        };
        const texture = decorators_serialization/* SerializationHelper */.p.Parse(() => {
            let generateMipMaps = true;
            if (parsedTexture.noMipmap) {
                generateMipMaps = false;
            }
            if (parsedTexture.mirrorPlane) {
                const mirrorTexture = Texture._CreateMirror(parsedTexture.name, parsedTexture.renderTargetSize, scene, generateMipMaps);
                mirrorTexture._waitingRenderList = parsedTexture.renderList;
                mirrorTexture.mirrorPlane = math_plane/* Plane */.Z.FromArray(parsedTexture.mirrorPlane);
                onLoaded(mirrorTexture);
                return mirrorTexture;
            }
            else if (parsedTexture.isRenderTarget) {
                let renderTargetTexture = null;
                if (parsedTexture.isCube) {
                    // Search for an existing reflection probe (which contains a cube render target texture)
                    if (scene.reflectionProbes) {
                        for (let index = 0; index < scene.reflectionProbes.length; index++) {
                            const probe = scene.reflectionProbes[index];
                            if (probe.name === parsedTexture.name) {
                                return probe.cubeTexture;
                            }
                        }
                    }
                }
                else {
                    renderTargetTexture = Texture._CreateRenderTargetTexture(parsedTexture.name, parsedTexture.renderTargetSize, scene, generateMipMaps, parsedTexture._creationFlags ?? 0);
                    renderTargetTexture._waitingRenderList = parsedTexture.renderList;
                }
                onLoaded(renderTargetTexture);
                return renderTargetTexture;
            }
            else if (parsedTexture.isVideo) {
                const texture = Texture._CreateVideoTexture(rootUrl + (parsedTexture.url || parsedTexture.name), rootUrl + (parsedTexture.src || parsedTexture.url), scene, generateMipMaps, parsedTexture.invertY, parsedTexture.samplingMode, parsedTexture.settings || {});
                onLoaded(texture);
                return texture;
            }
            else {
                let texture;
                if (parsedTexture.base64String && !internalTexture) {
                    // name and url are the same to ensure caching happens from the actual base64 string
                    texture = Texture.CreateFromBase64String(parsedTexture.base64String, parsedTexture.base64String, scene, !generateMipMaps, parsedTexture.invertY, parsedTexture.samplingMode, () => {
                        onLoaded(texture);
                    }, parsedTexture._creationFlags ?? 0, parsedTexture._useSRGBBuffer ?? false);
                    // prettier name to fit with the loaded data
                    texture.name = parsedTexture.name;
                }
                else {
                    let url;
                    if (parsedTexture.name && (parsedTexture.name.indexOf("://") > 0 || parsedTexture.name.startsWith("data:"))) {
                        url = parsedTexture.name;
                    }
                    else {
                        url = rootUrl + parsedTexture.name;
                    }
                    if (parsedTexture.url && (parsedTexture.url.startsWith("data:") || Texture.UseSerializedUrlIfAny)) {
                        url = parsedTexture.url;
                    }
                    const options = {
                        noMipmap: !generateMipMaps,
                        invertY: parsedTexture.invertY,
                        samplingMode: parsedTexture.samplingMode,
                        onLoad: () => {
                            onLoaded(texture);
                        },
                        internalTexture,
                    };
                    texture = new Texture(url, scene, options);
                }
                return texture;
            }
        }, parsedTexture, scene);
        return texture;
    }
    /**
     * Creates a texture from its base 64 representation.
     * @param data Define the base64 payload without the data: prefix
     * @param name Define the name of the texture in the scene useful fo caching purpose for instance
     * @param scene Define the scene the texture should belong to
     * @param noMipmapOrOptions defines if the texture will require mip maps or not or set of all options to create the texture
     * @param invertY define if the texture needs to be inverted on the y axis during loading
     * @param samplingMode define the sampling mode we want for the texture while fetching from it (Texture.NEAREST_SAMPLINGMODE...)
     * @param onLoad define a callback triggered when the texture has been loaded
     * @param onError define a callback triggered when an error occurred during the loading session
     * @param format define the format of the texture we are trying to load (Engine.TEXTUREFORMAT_RGBA...)
     * @param creationFlags specific flags to use when creating the texture (1 for storage textures, for eg)
     * @param forcedExtension defines the extension to use to pick the right loader
     * @returns the created texture
     */
    static CreateFromBase64String(data, name, scene, noMipmapOrOptions, invertY, samplingMode = Texture.TRILINEAR_SAMPLINGMODE, onLoad = null, onError = null, format = 5, creationFlags, forcedExtension) {
        return new Texture("data:" + name, scene, noMipmapOrOptions, invertY, samplingMode, onLoad, onError, data, false, format, undefined, undefined, creationFlags, forcedExtension);
    }
    /**
     * Creates a texture from its data: representation. (data: will be added in case only the payload has been passed in)
     * @param name Define the name of the texture in the scene useful fo caching purpose for instance
     * @param buffer define the buffer to load the texture from in case the texture is loaded from a buffer representation
     * @param scene Define the scene the texture should belong to
     * @param deleteBuffer define if the buffer we are loading the texture from should be deleted after load
     * @param noMipmapOrOptions defines if the texture will require mip maps or not or set of all options to create the texture
     * @param invertY define if the texture needs to be inverted on the y axis during loading
     * @param samplingMode define the sampling mode we want for the texture while fetching from it (Texture.NEAREST_SAMPLINGMODE...)
     * @param onLoad define a callback triggered when the texture has been loaded
     * @param onError define a callback triggered when an error occurred during the loading session
     * @param format define the format of the texture we are trying to load (Engine.TEXTUREFORMAT_RGBA...)
     * @param creationFlags specific flags to use when creating the texture (1 for storage textures, for eg)
     * @param forcedExtension defines the extension to use to pick the right loader
     * @returns the created texture
     */
    static LoadFromDataString(name, buffer, scene, deleteBuffer = false, noMipmapOrOptions, invertY = true, samplingMode = Texture.TRILINEAR_SAMPLINGMODE, onLoad = null, onError = null, format = 5, creationFlags, forcedExtension) {
        if (name.substring(0, 5) !== "data:") {
            name = "data:" + name;
        }
        return new Texture(name, scene, noMipmapOrOptions, invertY, samplingMode, onLoad, onError, buffer, deleteBuffer, format, undefined, undefined, creationFlags, forcedExtension);
    }
}
/**
 * Gets or sets a general boolean used to indicate that textures containing direct data (buffers) must be saved as part of the serialization process
 */
Texture.SerializeBuffers = true;
/**
 * Gets or sets a general boolean used to indicate that texture buffers must be saved as part of the serialization process.
 * If no buffer exists, one will be created as base64 string from the internal webgl data.
 */
Texture.ForceSerializeBuffers = false;
/**
 * This observable will notify when any texture had a loading error
 */
Texture.OnTextureLoadErrorObservable = new observable/* Observable */.cP();
/** @internal */
Texture._SerializeInternalTextureUniqueId = false;
/**
 * @internal
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
Texture._CubeTextureParser = (jsonTexture, scene, rootUrl) => {
    throw (0,devTools/* _WarnImport */.n)("CubeTexture");
};
/**
 * @internal
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
Texture._CreateMirror = (name, renderTargetSize, scene, generateMipMaps) => {
    throw (0,devTools/* _WarnImport */.n)("MirrorTexture");
};
/**
 * @internal
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
Texture._CreateRenderTargetTexture = (name, renderTargetSize, scene, generateMipMaps, creationFlags) => {
    throw (0,devTools/* _WarnImport */.n)("RenderTargetTexture");
};
/** nearest is mag = nearest and min = nearest and no mip */
Texture.NEAREST_SAMPLINGMODE = 1;
/** nearest is mag = nearest and min = nearest and mip = linear */
Texture.NEAREST_NEAREST_MIPLINEAR = 8; // nearest is mag = nearest and min = nearest and mip = linear
/** Bilinear is mag = linear and min = linear and no mip */
Texture.BILINEAR_SAMPLINGMODE = 2;
/** Bilinear is mag = linear and min = linear and mip = nearest */
Texture.LINEAR_LINEAR_MIPNEAREST = 11; // Bilinear is mag = linear and min = linear and mip = nearest
/** Trilinear is mag = linear and min = linear and mip = linear */
Texture.TRILINEAR_SAMPLINGMODE = 3;
/** Trilinear is mag = linear and min = linear and mip = linear */
Texture.LINEAR_LINEAR_MIPLINEAR = 3; // Trilinear is mag = linear and min = linear and mip = linear
/** mag = nearest and min = nearest and mip = nearest */
Texture.NEAREST_NEAREST_MIPNEAREST = 4;
/** mag = nearest and min = linear and mip = nearest */
Texture.NEAREST_LINEAR_MIPNEAREST = 5;
/** mag = nearest and min = linear and mip = linear */
Texture.NEAREST_LINEAR_MIPLINEAR = 6;
/** mag = nearest and min = linear and mip = none */
Texture.NEAREST_LINEAR = 7;
/** mag = nearest and min = nearest and mip = none */
Texture.NEAREST_NEAREST = 1;
/** mag = linear and min = nearest and mip = nearest */
Texture.LINEAR_NEAREST_MIPNEAREST = 9;
/** mag = linear and min = nearest and mip = linear */
Texture.LINEAR_NEAREST_MIPLINEAR = 10;
/** mag = linear and min = linear and mip = none */
Texture.LINEAR_LINEAR = 2;
/** mag = linear and min = nearest and mip = none */
Texture.LINEAR_NEAREST = 12;
/** Explicit coordinates mode */
Texture.EXPLICIT_MODE = 0;
/** Spherical coordinates mode */
Texture.SPHERICAL_MODE = 1;
/** Planar coordinates mode */
Texture.PLANAR_MODE = 2;
/** Cubic coordinates mode */
Texture.CUBIC_MODE = 3;
/** Projection coordinates mode */
Texture.PROJECTION_MODE = 4;
/** Inverse Cubic coordinates mode */
Texture.SKYBOX_MODE = 5;
/** Inverse Cubic coordinates mode */
Texture.INVCUBIC_MODE = 6;
/** Equirectangular coordinates mode */
Texture.EQUIRECTANGULAR_MODE = 7;
/** Equirectangular Fixed coordinates mode */
Texture.FIXED_EQUIRECTANGULAR_MODE = 8;
/** Equirectangular Fixed Mirrored coordinates mode */
Texture.FIXED_EQUIRECTANGULAR_MIRRORED_MODE = 9;
/** Texture is not repeating outside of 0..1 UVs */
Texture.CLAMP_ADDRESSMODE = 0;
/** Texture is repeating outside of 0..1 UVs */
Texture.WRAP_ADDRESSMODE = 1;
/** Texture is repeating and mirrored */
Texture.MIRROR_ADDRESSMODE = 2;
/**
 * Gets or sets a boolean which defines if the texture url must be build from the serialized URL instead of just using the name and loading them side by side with the scene file
 */
Texture.UseSerializedUrlIfAny = false;
(0,tslib_es6/* __decorate */.Cg)([
    (0,decorators/* serialize */.lK)()
], Texture.prototype, "url", void 0);
(0,tslib_es6/* __decorate */.Cg)([
    (0,decorators/* serialize */.lK)()
], Texture.prototype, "uOffset", void 0);
(0,tslib_es6/* __decorate */.Cg)([
    (0,decorators/* serialize */.lK)()
], Texture.prototype, "vOffset", void 0);
(0,tslib_es6/* __decorate */.Cg)([
    (0,decorators/* serialize */.lK)()
], Texture.prototype, "uScale", void 0);
(0,tslib_es6/* __decorate */.Cg)([
    (0,decorators/* serialize */.lK)()
], Texture.prototype, "vScale", void 0);
(0,tslib_es6/* __decorate */.Cg)([
    (0,decorators/* serialize */.lK)()
], Texture.prototype, "uAng", void 0);
(0,tslib_es6/* __decorate */.Cg)([
    (0,decorators/* serialize */.lK)()
], Texture.prototype, "vAng", void 0);
(0,tslib_es6/* __decorate */.Cg)([
    (0,decorators/* serialize */.lK)()
], Texture.prototype, "wAng", void 0);
(0,tslib_es6/* __decorate */.Cg)([
    (0,decorators/* serialize */.lK)()
], Texture.prototype, "uRotationCenter", void 0);
(0,tslib_es6/* __decorate */.Cg)([
    (0,decorators/* serialize */.lK)()
], Texture.prototype, "vRotationCenter", void 0);
(0,tslib_es6/* __decorate */.Cg)([
    (0,decorators/* serialize */.lK)()
], Texture.prototype, "wRotationCenter", void 0);
(0,tslib_es6/* __decorate */.Cg)([
    (0,decorators/* serialize */.lK)()
], Texture.prototype, "homogeneousRotationInUVTransform", void 0);
(0,tslib_es6/* __decorate */.Cg)([
    (0,decorators/* serialize */.lK)()
], Texture.prototype, "isBlocking", null);
// References the dependencies.
(0,typeStore/* RegisterClass */.Y5)("BABYLON.Texture", Texture);
decorators_serialization/* SerializationHelper */.p._TextureParser = Texture.Parse;
//# sourceMappingURL=texture.js.map

/***/ }),

/***/ 9337:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   n: () => (/* binding */ InstantiationTools)
/* harmony export */ });
/* harmony import */ var _logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1137);
/* harmony import */ var _typeStore_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6552);


/**
 * Class used to enable instantiation of objects by class name
 */
class InstantiationTools {
    /**
     * Tries to instantiate a new object from a given class name
     * @param className defines the class name to instantiate
     * @returns the new object or null if the system was not able to do the instantiation
     */
    static Instantiate(className) {
        if (this.RegisteredExternalClasses && this.RegisteredExternalClasses[className]) {
            return this.RegisteredExternalClasses[className];
        }
        const internalClass = (0,_typeStore_js__WEBPACK_IMPORTED_MODULE_1__/* .GetClass */ .n9)(className);
        if (internalClass) {
            return internalClass;
        }
        _logger_js__WEBPACK_IMPORTED_MODULE_0__/* .Logger */ .V.Warn(className + " not found, you may have missed an import.");
        const arr = className.split(".");
        let fn = window || this;
        for (let i = 0, len = arr.length; i < len; i++) {
            fn = fn[arr[i]];
        }
        if (typeof fn !== "function") {
            return null;
        }
        return fn;
    }
}
/**
 * Use this object to register external classes like custom textures or material
 * to allow the loaders to instantiate them
 */
InstantiationTools.RegisteredExternalClasses = {};
//# sourceMappingURL=instantiationTools.js.map

/***/ })

}]);