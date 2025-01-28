"use strict";
(self["webpackChunkbabylon_bulletphysics"] = self["webpackChunkbabylon_bulletphysics"] || []).push([[994],{

/***/ 50994:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _DDSTextureLoader: () => (/* binding */ _DDSTextureLoader)
/* harmony export */ });
/* harmony import */ var _Maths_sphericalPolynomial_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(77517);
/* harmony import */ var _Misc_dds_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(36464);


/**
 * Implementation of the DDS Texture Loader.
 * @internal
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
class _DDSTextureLoader {
    constructor() {
        /**
         * Defines whether the loader supports cascade loading the different faces.
         */
        this.supportCascades = true;
    }
    /**
     * Uploads the cube texture data to the WebGL texture. It has already been bound.
     * @param imgs contains the cube maps
     * @param texture defines the BabylonJS internal texture
     * @param createPolynomials will be true if polynomials have been requested
     * @param onLoad defines the callback to trigger once the texture is ready
     */
    loadCubeData(imgs, texture, createPolynomials, onLoad) {
        const engine = texture.getEngine();
        let info;
        let loadMipmap = false;
        let maxLevel = 1000;
        if (Array.isArray(imgs)) {
            for (let index = 0; index < imgs.length; index++) {
                const data = imgs[index];
                info = _Misc_dds_js__WEBPACK_IMPORTED_MODULE_1__.DDSTools.GetDDSInfo(data);
                texture.width = info.width;
                texture.height = info.height;
                loadMipmap = (info.isRGB || info.isLuminance || info.mipmapCount > 1) && texture.generateMipMaps;
                engine._unpackFlipY(info.isCompressed);
                _Misc_dds_js__WEBPACK_IMPORTED_MODULE_1__.DDSTools.UploadDDSLevels(engine, texture, data, info, loadMipmap, 6, -1, index);
                if (!info.isFourCC && info.mipmapCount === 1) {
                    engine.generateMipMapsForCubemap(texture);
                }
                else {
                    maxLevel = info.mipmapCount - 1;
                }
            }
        }
        else {
            const data = imgs;
            info = _Misc_dds_js__WEBPACK_IMPORTED_MODULE_1__.DDSTools.GetDDSInfo(data);
            texture.width = info.width;
            texture.height = info.height;
            if (createPolynomials) {
                info.sphericalPolynomial = new _Maths_sphericalPolynomial_js__WEBPACK_IMPORTED_MODULE_0__/* .SphericalPolynomial */ .Q();
            }
            loadMipmap = (info.isRGB || info.isLuminance || info.mipmapCount > 1) && texture.generateMipMaps;
            engine._unpackFlipY(info.isCompressed);
            _Misc_dds_js__WEBPACK_IMPORTED_MODULE_1__.DDSTools.UploadDDSLevels(engine, texture, data, info, loadMipmap, 6);
            if (!info.isFourCC && info.mipmapCount === 1) {
                // Do not unbind as we still need to set the parameters.
                engine.generateMipMapsForCubemap(texture, false);
            }
            else {
                maxLevel = info.mipmapCount - 1;
            }
        }
        engine._setCubeMapTextureParams(texture, loadMipmap, maxLevel);
        texture.isReady = true;
        texture.onLoadedObservable.notifyObservers(texture);
        texture.onLoadedObservable.clear();
        if (onLoad) {
            onLoad({ isDDS: true, width: texture.width, info, data: imgs, texture });
        }
    }
    /**
     * Uploads the 2D texture data to the WebGL texture. It has already been bound once in the callback.
     * @param data contains the texture data
     * @param texture defines the BabylonJS internal texture
     * @param callback defines the method to call once ready to upload
     */
    loadData(data, texture, callback) {
        const info = _Misc_dds_js__WEBPACK_IMPORTED_MODULE_1__.DDSTools.GetDDSInfo(data);
        const loadMipmap = (info.isRGB || info.isLuminance || info.mipmapCount > 1) && texture.generateMipMaps && Math.max(info.width, info.height) >> (info.mipmapCount - 1) === 1;
        callback(info.width, info.height, loadMipmap, info.isFourCC, () => {
            _Misc_dds_js__WEBPACK_IMPORTED_MODULE_1__.DDSTools.UploadDDSLevels(texture.getEngine(), texture, data, info, loadMipmap, 1);
        });
    }
}
//# sourceMappingURL=ddsTextureLoader.js.map

/***/ })

}]);