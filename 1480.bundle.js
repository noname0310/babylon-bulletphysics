"use strict";
(self["webpackChunkbabylon_bulletphysics"] = self["webpackChunkbabylon_bulletphysics"] || []).push([[1480],{

/***/ 91480:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OptimizeIndices: () => (/* binding */ OptimizeIndices)
/* harmony export */ });
/* harmony import */ var _Misc_bitArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2001);

/**
 * Sort (in place) the index array so that faces with common indices are close
 * @param indices the array of indices to sort
 */
function OptimizeIndices(indices) {
    const faces = [];
    const faceCount = indices.length / 3;
    // Step 1: Break the indices array into faces
    for (let i = 0; i < faceCount; i++) {
        faces.push([indices[i * 3], indices[i * 3 + 1], indices[i * 3 + 2]]);
    }
    // Step 2: Build a graph connecting faces sharing a vertex
    const vertexToFaceMap = new Map();
    faces.forEach((face, faceIndex) => {
        face.forEach((vertex) => {
            let face = vertexToFaceMap.get(vertex);
            if (!face) {
                vertexToFaceMap.set(vertex, (face = []));
            }
            face.push(faceIndex);
        });
    });
    // Step 3: Traverse faces using DFS to ensure connected faces are close
    const visited = new _Misc_bitArray_js__WEBPACK_IMPORTED_MODULE_0__/* .BitArray */ .P(faceCount);
    const sortedFaces = [];
    // Using a stack and not a recursive version to avoid call stack overflow
    const deepFirstSearchStack = (startFaceIndex) => {
        const stack = [startFaceIndex];
        while (stack.length > 0) {
            const currentFaceIndex = stack.pop();
            if (visited.get(currentFaceIndex)) {
                continue;
            }
            visited.set(currentFaceIndex, true);
            sortedFaces.push(faces[currentFaceIndex]);
            // Push unvisited neighbors (faces sharing a vertex) onto the stack
            faces[currentFaceIndex].forEach((vertex) => {
                const neighbors = vertexToFaceMap.get(vertex);
                if (!neighbors) {
                    return;
                }
                neighbors.forEach((neighborFaceIndex) => {
                    if (!visited.get(neighborFaceIndex)) {
                        stack.push(neighborFaceIndex);
                    }
                });
            });
        }
    };
    // Start DFS from the first face
    for (let i = 0; i < faceCount; i++) {
        if (!visited.get(i)) {
            deepFirstSearchStack(i);
        }
    }
    // Step 4: Flatten the sorted faces back into an array
    let index = 0;
    sortedFaces.forEach((face) => {
        indices[index++] = face[0];
        indices[index++] = face[1];
        indices[index++] = face[2];
    });
}
//# sourceMappingURL=mesh.vertexData.functions.js.map

/***/ }),

/***/ 2001:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   P: () => (/* binding */ BitArray)
/* harmony export */ });
function getByteIndex(bitIndex) {
    return Math.floor(bitIndex / 8);
}
function getBitMask(bitIndex) {
    return 1 << bitIndex % 8;
}
/**
 * An fixed size array that effectively stores boolean values where each value is a single bit of backing data.
 * @remarks
 * All bits are initialized to false.
 */
class BitArray {
    /**
     * Creates a new bit array with a fixed size.
     * @param size The number of bits to store.
     */
    constructor(size) {
        this.size = size;
        this._byteArray = new Uint8Array(Math.ceil(this.size / 8));
    }
    /**
     * Gets the current value at the specified index.
     * @param bitIndex The index to get the value from.
     * @returns The value at the specified index.
     */
    get(bitIndex) {
        if (bitIndex >= this.size) {
            throw new RangeError("Bit index out of range");
        }
        const byteIndex = getByteIndex(bitIndex);
        const bitMask = getBitMask(bitIndex);
        return (this._byteArray[byteIndex] & bitMask) !== 0;
    }
    /**
     * Sets the value at the specified index.
     * @param bitIndex The index to set the value at.
     * @param value The value to set.
     */
    set(bitIndex, value) {
        if (bitIndex >= this.size) {
            throw new RangeError("Bit index out of range");
        }
        const byteIndex = getByteIndex(bitIndex);
        const bitMask = getBitMask(bitIndex);
        if (value) {
            this._byteArray[byteIndex] |= bitMask;
        }
        else {
            this._byteArray[byteIndex] &= ~bitMask;
        }
    }
}
//# sourceMappingURL=bitArray.js.map

/***/ })

}]);