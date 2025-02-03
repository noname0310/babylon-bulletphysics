"use strict";
(self["webpackChunkbabylon_bulletphysics"] = self["webpackChunkbabylon_bulletphysics"] || []).push([[7911],{

/***/ 27911:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _HDRTextureLoader: () => (/* binding */ _HDRTextureLoader)
/* harmony export */ });
/* harmony import */ var _Misc_HighDynamicRange_hdr_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82814);


/**
 * Implementation of the HDR Texture Loader.
 * @internal
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
class _HDRTextureLoader {
    constructor() {
        /**
         * Defines whether the loader supports cascade loading the different faces.
         */
        this.supportCascades = false;
    }
    /**
     * Uploads the cube texture data to the WebGL texture. It has already been bound.
     * Cube texture are not supported by .hdr files
     */
    loadCubeData() {
        // eslint-disable-next-line no-throw-literal
        throw ".hdr not supported in Cube.";
    }
    /**
     * Uploads the 2D texture data to the WebGL texture. It has already been bound once in the callback.
     * @param data contains the texture data
     * @param texture defines the BabylonJS internal texture
     * @param callback defines the method to call once ready to upload
     */
    loadData(data, texture, callback) {
        const uint8array = new Uint8Array(data.buffer, data.byteOffset, data.byteLength);
        const hdrInfo = (0,_Misc_HighDynamicRange_hdr_js__WEBPACK_IMPORTED_MODULE_0__/* .RGBE_ReadHeader */ .NK)(uint8array);
        const pixelsDataRGB32 = (0,_Misc_HighDynamicRange_hdr_js__WEBPACK_IMPORTED_MODULE_0__/* .RGBE_ReadPixels */ .LT)(uint8array, hdrInfo);
        const pixels = hdrInfo.width * hdrInfo.height;
        const pixelsDataRGBA32 = new Float32Array(pixels * 4);
        for (let i = 0; i < pixels; i += 1) {
            pixelsDataRGBA32[i * 4] = pixelsDataRGB32[i * 3];
            pixelsDataRGBA32[i * 4 + 1] = pixelsDataRGB32[i * 3 + 1];
            pixelsDataRGBA32[i * 4 + 2] = pixelsDataRGB32[i * 3 + 2];
            pixelsDataRGBA32[i * 4 + 3] = 1;
        }
        callback(hdrInfo.width, hdrInfo.height, texture.generateMipMaps, false, () => {
            const engine = texture.getEngine();
            texture.type = 1;
            texture.format = 5;
            texture._gammaSpace = false;
            engine._uploadDataToTextureDirectly(texture, pixelsDataRGBA32);
        });
    }
}
//# sourceMappingURL=hdrTextureLoader.js.map

/***/ }),

/***/ 82814:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LT: () => (/* binding */ RGBE_ReadPixels),
/* harmony export */   NK: () => (/* binding */ RGBE_ReadHeader),
/* harmony export */   VH: () => (/* binding */ GetCubeMapTextureData)
/* harmony export */ });
/* unused harmony export HDRTools */
/* harmony import */ var _panoramaToCubemap_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73647);

/* This groups tools to convert HDR texture to native colors array. */
function ldexp(mantissa, exponent) {
    if (exponent > 1023) {
        return mantissa * Math.pow(2, 1023) * Math.pow(2, exponent - 1023);
    }
    if (exponent < -1074) {
        return mantissa * Math.pow(2, -1074) * Math.pow(2, exponent + 1074);
    }
    return mantissa * Math.pow(2, exponent);
}
function rgbe2float(float32array, red, green, blue, exponent, index) {
    if (exponent > 0) {
        /*nonzero pixel*/
        exponent = ldexp(1.0, exponent - (128 + 8));
        float32array[index + 0] = red * exponent;
        float32array[index + 1] = green * exponent;
        float32array[index + 2] = blue * exponent;
    }
    else {
        float32array[index + 0] = 0;
        float32array[index + 1] = 0;
        float32array[index + 2] = 0;
    }
}
function readStringLine(uint8array, startIndex) {
    let line = "";
    let character = "";
    for (let i = startIndex; i < uint8array.length - startIndex; i++) {
        character = String.fromCharCode(uint8array[i]);
        if (character == "\n") {
            break;
        }
        line += character;
    }
    return line;
}
/**
 * Reads header information from an RGBE texture stored in a native array.
 * More information on this format are available here:
 * https://en.wikipedia.org/wiki/RGBE_image_format
 *
 * @param uint8array The binary file stored in  native array.
 * @returns The header information.
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
function RGBE_ReadHeader(uint8array) {
    let height = 0;
    let width = 0;
    let line = readStringLine(uint8array, 0);
    if (line[0] != "#" || line[1] != "?") {
        // eslint-disable-next-line no-throw-literal
        throw "Bad HDR Format.";
    }
    let endOfHeader = false;
    let findFormat = false;
    let lineIndex = 0;
    do {
        lineIndex += line.length + 1;
        line = readStringLine(uint8array, lineIndex);
        if (line == "FORMAT=32-bit_rle_rgbe") {
            findFormat = true;
        }
        else if (line.length == 0) {
            endOfHeader = true;
        }
    } while (!endOfHeader);
    if (!findFormat) {
        // eslint-disable-next-line no-throw-literal
        throw "HDR Bad header format, unsupported FORMAT";
    }
    lineIndex += line.length + 1;
    line = readStringLine(uint8array, lineIndex);
    const sizeRegexp = /^-Y (.*) \+X (.*)$/g;
    const match = sizeRegexp.exec(line);
    // TODO. Support +Y and -X if needed.
    if (!match || match.length < 3) {
        // eslint-disable-next-line no-throw-literal
        throw "HDR Bad header format, no size";
    }
    width = parseInt(match[2]);
    height = parseInt(match[1]);
    if (width < 8 || width > 0x7fff) {
        // eslint-disable-next-line no-throw-literal
        throw "HDR Bad header format, unsupported size";
    }
    lineIndex += line.length + 1;
    return {
        height: height,
        width: width,
        dataPosition: lineIndex,
    };
}
/**
 * Returns the cubemap information (each faces texture data) extracted from an RGBE texture.
 * This RGBE texture needs to store the information as a panorama.
 *
 * More information on this format are available here:
 * https://en.wikipedia.org/wiki/RGBE_image_format
 *
 * @param buffer The binary file stored in an array buffer.
 * @param size The expected size of the extracted cubemap.
 * @param supersample enable supersampling the cubemap (default: false)
 * @returns The Cube Map information.
 */
function GetCubeMapTextureData(buffer, size, supersample = false) {
    const uint8array = new Uint8Array(buffer);
    const hdrInfo = RGBE_ReadHeader(uint8array);
    const data = RGBE_ReadPixels(uint8array, hdrInfo);
    const cubeMapData = _panoramaToCubemap_js__WEBPACK_IMPORTED_MODULE_0__/* .PanoramaToCubeMapTools */ .D.ConvertPanoramaToCubemap(data, hdrInfo.width, hdrInfo.height, size, supersample);
    return cubeMapData;
}
/**
 * Returns the pixels data extracted from an RGBE texture.
 * This pixels will be stored left to right up to down in the R G B order in one array.
 *
 * More information on this format are available here:
 * https://en.wikipedia.org/wiki/RGBE_image_format
 *
 * @param uint8array The binary file stored in an array buffer.
 * @param hdrInfo The header information of the file.
 * @returns The pixels data in RGB right to left up to down order.
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
function RGBE_ReadPixels(uint8array, hdrInfo) {
    return readRGBEPixelsRLE(uint8array, hdrInfo);
}
function readRGBEPixelsRLE(uint8array, hdrInfo) {
    let num_scanlines = hdrInfo.height;
    const scanline_width = hdrInfo.width;
    let a, b, c, d, count;
    let dataIndex = hdrInfo.dataPosition;
    let index = 0, endIndex = 0, i = 0;
    const scanLineArrayBuffer = new ArrayBuffer(scanline_width * 4); // four channel R G B E
    const scanLineArray = new Uint8Array(scanLineArrayBuffer);
    // 3 channels of 4 bytes per pixel in float.
    const resultBuffer = new ArrayBuffer(hdrInfo.width * hdrInfo.height * 4 * 3);
    const resultArray = new Float32Array(resultBuffer);
    // read in each successive scanline
    while (num_scanlines > 0) {
        a = uint8array[dataIndex++];
        b = uint8array[dataIndex++];
        c = uint8array[dataIndex++];
        d = uint8array[dataIndex++];
        if (a != 2 || b != 2 || c & 0x80 || hdrInfo.width < 8 || hdrInfo.width > 32767) {
            return readRGBEPixelsNotRLE(uint8array, hdrInfo);
        }
        if (((c << 8) | d) != scanline_width) {
            // eslint-disable-next-line no-throw-literal
            throw "HDR Bad header format, wrong scan line width";
        }
        index = 0;
        // read each of the four channels for the scanline into the buffer
        for (i = 0; i < 4; i++) {
            endIndex = (i + 1) * scanline_width;
            while (index < endIndex) {
                a = uint8array[dataIndex++];
                b = uint8array[dataIndex++];
                if (a > 128) {
                    // a run of the same value
                    count = a - 128;
                    if (count == 0 || count > endIndex - index) {
                        // eslint-disable-next-line no-throw-literal
                        throw "HDR Bad Format, bad scanline data (run)";
                    }
                    while (count-- > 0) {
                        scanLineArray[index++] = b;
                    }
                }
                else {
                    // a non-run
                    count = a;
                    if (count == 0 || count > endIndex - index) {
                        // eslint-disable-next-line no-throw-literal
                        throw "HDR Bad Format, bad scanline data (non-run)";
                    }
                    scanLineArray[index++] = b;
                    if (--count > 0) {
                        for (let j = 0; j < count; j++) {
                            scanLineArray[index++] = uint8array[dataIndex++];
                        }
                    }
                }
            }
        }
        // now convert data from buffer into floats
        for (i = 0; i < scanline_width; i++) {
            a = scanLineArray[i];
            b = scanLineArray[i + scanline_width];
            c = scanLineArray[i + 2 * scanline_width];
            d = scanLineArray[i + 3 * scanline_width];
            rgbe2float(resultArray, a, b, c, d, (hdrInfo.height - num_scanlines) * scanline_width * 3 + i * 3);
        }
        num_scanlines--;
    }
    return resultArray;
}
function readRGBEPixelsNotRLE(uint8array, hdrInfo) {
    // this file is not run length encoded
    // read values sequentially
    let num_scanlines = hdrInfo.height;
    const scanline_width = hdrInfo.width;
    let a, b, c, d, i;
    let dataIndex = hdrInfo.dataPosition;
    // 3 channels of 4 bytes per pixel in float.
    const resultBuffer = new ArrayBuffer(hdrInfo.width * hdrInfo.height * 4 * 3);
    const resultArray = new Float32Array(resultBuffer);
    // read in each successive scanline
    while (num_scanlines > 0) {
        for (i = 0; i < hdrInfo.width; i++) {
            a = uint8array[dataIndex++];
            b = uint8array[dataIndex++];
            c = uint8array[dataIndex++];
            d = uint8array[dataIndex++];
            rgbe2float(resultArray, a, b, c, d, (hdrInfo.height - num_scanlines) * scanline_width * 3 + i * 3);
        }
        num_scanlines--;
    }
    return resultArray;
}
/**
 * @deprecated Use functions separately
 */
const HDRTools = {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    RGBE_ReadHeader,
    // eslint-disable-next-line @typescript-eslint/naming-convention
    GetCubeMapTextureData,
    // eslint-disable-next-line @typescript-eslint/naming-convention
    RGBE_ReadPixels,
};
//# sourceMappingURL=hdr.js.map

/***/ }),

/***/ 73647:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   D: () => (/* binding */ PanoramaToCubeMapTools)
/* harmony export */ });
/* harmony import */ var _Maths_math_vector_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(79923);


/**
 * Helper class useful to convert panorama picture to their cubemap representation in 6 faces.
 */
class PanoramaToCubeMapTools {
    /**
     * Converts a panorama stored in RGB right to left up to down format into a cubemap (6 faces).
     *
     * @param float32Array The source data.
     * @param inputWidth The width of the input panorama.
     * @param inputHeight The height of the input panorama.
     * @param size The willing size of the generated cubemap (each faces will be size * size pixels)
     * @param supersample enable supersampling the cubemap
     * @returns The cubemap data
     */
    static ConvertPanoramaToCubemap(float32Array, inputWidth, inputHeight, size, supersample = false) {
        if (!float32Array) {
            // eslint-disable-next-line no-throw-literal
            throw "ConvertPanoramaToCubemap: input cannot be null";
        }
        if (float32Array.length != inputWidth * inputHeight * 3) {
            // eslint-disable-next-line no-throw-literal
            throw "ConvertPanoramaToCubemap: input size is wrong";
        }
        const textureFront = this.CreateCubemapTexture(size, this.FACE_FRONT, float32Array, inputWidth, inputHeight, supersample);
        const textureBack = this.CreateCubemapTexture(size, this.FACE_BACK, float32Array, inputWidth, inputHeight, supersample);
        const textureLeft = this.CreateCubemapTexture(size, this.FACE_LEFT, float32Array, inputWidth, inputHeight, supersample);
        const textureRight = this.CreateCubemapTexture(size, this.FACE_RIGHT, float32Array, inputWidth, inputHeight, supersample);
        const textureUp = this.CreateCubemapTexture(size, this.FACE_UP, float32Array, inputWidth, inputHeight, supersample);
        const textureDown = this.CreateCubemapTexture(size, this.FACE_DOWN, float32Array, inputWidth, inputHeight, supersample);
        return {
            front: textureFront,
            back: textureBack,
            left: textureLeft,
            right: textureRight,
            up: textureUp,
            down: textureDown,
            size: size,
            type: 1,
            format: 4,
            gammaSpace: false,
        };
    }
    static CreateCubemapTexture(texSize, faceData, float32Array, inputWidth, inputHeight, supersample = false) {
        const buffer = new ArrayBuffer(texSize * texSize * 4 * 3);
        const textureArray = new Float32Array(buffer);
        // If supersampling, determine number of samples needed when source texture width is divided for 4 cube faces
        const samples = supersample ? Math.max(1, Math.round(inputWidth / 4 / texSize)) : 1;
        const sampleFactor = 1 / samples;
        const sampleFactorSqr = sampleFactor * sampleFactor;
        const rotDX1 = faceData[1].subtract(faceData[0]).scale(sampleFactor / texSize);
        const rotDX2 = faceData[3].subtract(faceData[2]).scale(sampleFactor / texSize);
        const dy = 1 / texSize;
        let fy = 0;
        for (let y = 0; y < texSize; y++) {
            for (let sy = 0; sy < samples; sy++) {
                let xv1 = faceData[0];
                let xv2 = faceData[2];
                for (let x = 0; x < texSize; x++) {
                    for (let sx = 0; sx < samples; sx++) {
                        const v = xv2.subtract(xv1).scale(fy).add(xv1);
                        v.normalize();
                        const color = this.CalcProjectionSpherical(v, float32Array, inputWidth, inputHeight);
                        // 3 channels per pixels
                        textureArray[y * texSize * 3 + x * 3 + 0] += color.r * sampleFactorSqr;
                        textureArray[y * texSize * 3 + x * 3 + 1] += color.g * sampleFactorSqr;
                        textureArray[y * texSize * 3 + x * 3 + 2] += color.b * sampleFactorSqr;
                        xv1 = xv1.add(rotDX1);
                        xv2 = xv2.add(rotDX2);
                    }
                }
                fy += dy * sampleFactor;
            }
        }
        return textureArray;
    }
    static CalcProjectionSpherical(vDir, float32Array, inputWidth, inputHeight) {
        let theta = Math.atan2(vDir.z, vDir.x);
        const phi = Math.acos(vDir.y);
        while (theta < -Math.PI) {
            theta += 2 * Math.PI;
        }
        while (theta > Math.PI) {
            theta -= 2 * Math.PI;
        }
        let dx = theta / Math.PI;
        const dy = phi / Math.PI;
        // recenter.
        dx = dx * 0.5 + 0.5;
        let px = Math.round(dx * inputWidth);
        if (px < 0) {
            px = 0;
        }
        else if (px >= inputWidth) {
            px = inputWidth - 1;
        }
        let py = Math.round(dy * inputHeight);
        if (py < 0) {
            py = 0;
        }
        else if (py >= inputHeight) {
            py = inputHeight - 1;
        }
        const inputY = inputHeight - py - 1;
        const r = float32Array[inputY * inputWidth * 3 + px * 3 + 0];
        const g = float32Array[inputY * inputWidth * 3 + px * 3 + 1];
        const b = float32Array[inputY * inputWidth * 3 + px * 3 + 2];
        return {
            r: r,
            g: g,
            b: b,
        };
    }
}
PanoramaToCubeMapTools.FACE_LEFT = [new _Maths_math_vector_js__WEBPACK_IMPORTED_MODULE_0__/* .Vector3 */ .Pq(-1.0, -1.0, -1.0), new _Maths_math_vector_js__WEBPACK_IMPORTED_MODULE_0__/* .Vector3 */ .Pq(1.0, -1.0, -1.0), new _Maths_math_vector_js__WEBPACK_IMPORTED_MODULE_0__/* .Vector3 */ .Pq(-1.0, 1.0, -1.0), new _Maths_math_vector_js__WEBPACK_IMPORTED_MODULE_0__/* .Vector3 */ .Pq(1.0, 1.0, -1.0)];
PanoramaToCubeMapTools.FACE_RIGHT = [new _Maths_math_vector_js__WEBPACK_IMPORTED_MODULE_0__/* .Vector3 */ .Pq(1.0, -1.0, 1.0), new _Maths_math_vector_js__WEBPACK_IMPORTED_MODULE_0__/* .Vector3 */ .Pq(-1.0, -1.0, 1.0), new _Maths_math_vector_js__WEBPACK_IMPORTED_MODULE_0__/* .Vector3 */ .Pq(1.0, 1.0, 1.0), new _Maths_math_vector_js__WEBPACK_IMPORTED_MODULE_0__/* .Vector3 */ .Pq(-1.0, 1.0, 1.0)];
PanoramaToCubeMapTools.FACE_FRONT = [new _Maths_math_vector_js__WEBPACK_IMPORTED_MODULE_0__/* .Vector3 */ .Pq(1.0, -1.0, -1.0), new _Maths_math_vector_js__WEBPACK_IMPORTED_MODULE_0__/* .Vector3 */ .Pq(1.0, -1.0, 1.0), new _Maths_math_vector_js__WEBPACK_IMPORTED_MODULE_0__/* .Vector3 */ .Pq(1.0, 1.0, -1.0), new _Maths_math_vector_js__WEBPACK_IMPORTED_MODULE_0__/* .Vector3 */ .Pq(1.0, 1.0, 1.0)];
PanoramaToCubeMapTools.FACE_BACK = [new _Maths_math_vector_js__WEBPACK_IMPORTED_MODULE_0__/* .Vector3 */ .Pq(-1.0, -1.0, 1.0), new _Maths_math_vector_js__WEBPACK_IMPORTED_MODULE_0__/* .Vector3 */ .Pq(-1.0, -1.0, -1.0), new _Maths_math_vector_js__WEBPACK_IMPORTED_MODULE_0__/* .Vector3 */ .Pq(-1.0, 1.0, 1.0), new _Maths_math_vector_js__WEBPACK_IMPORTED_MODULE_0__/* .Vector3 */ .Pq(-1.0, 1.0, -1.0)];
PanoramaToCubeMapTools.FACE_DOWN = [new _Maths_math_vector_js__WEBPACK_IMPORTED_MODULE_0__/* .Vector3 */ .Pq(1.0, 1.0, -1.0), new _Maths_math_vector_js__WEBPACK_IMPORTED_MODULE_0__/* .Vector3 */ .Pq(1.0, 1.0, 1.0), new _Maths_math_vector_js__WEBPACK_IMPORTED_MODULE_0__/* .Vector3 */ .Pq(-1.0, 1.0, -1.0), new _Maths_math_vector_js__WEBPACK_IMPORTED_MODULE_0__/* .Vector3 */ .Pq(-1.0, 1.0, 1.0)];
PanoramaToCubeMapTools.FACE_UP = [new _Maths_math_vector_js__WEBPACK_IMPORTED_MODULE_0__/* .Vector3 */ .Pq(-1.0, -1.0, -1.0), new _Maths_math_vector_js__WEBPACK_IMPORTED_MODULE_0__/* .Vector3 */ .Pq(-1.0, -1.0, 1.0), new _Maths_math_vector_js__WEBPACK_IMPORTED_MODULE_0__/* .Vector3 */ .Pq(1.0, -1.0, -1.0), new _Maths_math_vector_js__WEBPACK_IMPORTED_MODULE_0__/* .Vector3 */ .Pq(1.0, -1.0, 1.0)];
//# sourceMappingURL=panoramaToCubemap.js.map

/***/ })

}]);