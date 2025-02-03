"use strict";
(self["webpackChunkbabylon_bulletphysics"] = self["webpackChunkbabylon_bulletphysics"] || []).push([[1718,9337],{

/***/ 79337:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   n: () => (/* binding */ InstantiationTools)
/* harmony export */ });
/* harmony import */ var _logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(51137);
/* harmony import */ var _typeStore_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56552);


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