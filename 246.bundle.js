"use strict";
(self["webpackChunkbabylon_bulletphysics"] = self["webpackChunkbabylon_bulletphysics"] || []).push([[246],{

/***/ 5616:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: () => (/* binding */ VertexBuffer),
/* harmony export */   h: () => (/* binding */ Buffer)
/* harmony export */ });
/* harmony import */ var _dataBuffer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1504);
/* harmony import */ var _Misc_logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1137);
/* harmony import */ var _bufferUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1675);




/**
 * Class used to store data that will be store in GPU memory
 */
class Buffer {
    /**
     * Gets a boolean indicating if the Buffer is disposed
     */
    get isDisposed() {
        return this._isDisposed;
    }
    /**
     * Constructor
     * @param engine the engine
     * @param data the data to use for this buffer
     * @param updatable whether the data is updatable
     * @param stride the stride (optional)
     * @param postponeInternalCreation whether to postpone creating the internal WebGL buffer (optional)
     * @param instanced whether the buffer is instanced (optional)
     * @param useBytes set to true if the stride in in bytes (optional)
     * @param divisor sets an optional divisor for instances (1 by default)
     * @param label defines the label of the buffer (for debug purpose)
     */
    constructor(engine, data, updatable, stride = 0, postponeInternalCreation = false, instanced = false, useBytes = false, divisor, label) {
        this._isAlreadyOwned = false;
        this._isDisposed = false;
        if (engine && engine.getScene) {
            // old versions of VertexBuffer accepted 'mesh' instead of 'engine'
            this._engine = engine.getScene().getEngine();
        }
        else {
            this._engine = engine;
        }
        this._updatable = updatable;
        this._instanced = instanced;
        this._divisor = divisor || 1;
        this._label = label;
        if (data instanceof _dataBuffer_js__WEBPACK_IMPORTED_MODULE_0__/* .DataBuffer */ .n) {
            this._data = null;
            this._buffer = data;
        }
        else {
            this._data = data;
            this._buffer = null;
        }
        this.byteStride = useBytes ? stride : stride * Float32Array.BYTES_PER_ELEMENT;
        if (!postponeInternalCreation) {
            // by default
            this.create();
        }
    }
    /**
     * Create a new VertexBuffer based on the current buffer
     * @param kind defines the vertex buffer kind (position, normal, etc.)
     * @param offset defines offset in the buffer (0 by default)
     * @param size defines the size in floats of attributes (position is 3 for instance)
     * @param stride defines the stride size in floats in the buffer (the offset to apply to reach next value when data is interleaved)
     * @param instanced defines if the vertex buffer contains indexed data
     * @param useBytes defines if the offset and stride are in bytes     *
     * @param divisor sets an optional divisor for instances (1 by default)
     * @returns the new vertex buffer
     */
    createVertexBuffer(kind, offset, size, stride, instanced, useBytes = false, divisor) {
        const byteOffset = useBytes ? offset : offset * Float32Array.BYTES_PER_ELEMENT;
        const byteStride = stride ? (useBytes ? stride : stride * Float32Array.BYTES_PER_ELEMENT) : this.byteStride;
        // a lot of these parameters are ignored as they are overridden by the buffer
        return new VertexBuffer(this._engine, this, kind, this._updatable, true, byteStride, instanced === undefined ? this._instanced : instanced, byteOffset, size, undefined, undefined, true, this._divisor || divisor);
    }
    // Properties
    /**
     * Gets a boolean indicating if the Buffer is updatable?
     * @returns true if the buffer is updatable
     */
    isUpdatable() {
        return this._updatable;
    }
    /**
     * Gets current buffer's data
     * @returns a DataArray or null
     */
    getData() {
        return this._data;
    }
    /**
     * Gets underlying native buffer
     * @returns underlying native buffer
     */
    getBuffer() {
        return this._buffer;
    }
    /**
     * Gets the stride in float32 units (i.e. byte stride / 4).
     * May not be an integer if the byte stride is not divisible by 4.
     * @returns the stride in float32 units
     * @deprecated Please use byteStride instead.
     */
    getStrideSize() {
        return this.byteStride / Float32Array.BYTES_PER_ELEMENT;
    }
    // Methods
    /**
     * Store data into the buffer. Creates the buffer if not used already.
     * If the buffer was already used, it will be updated only if it is updatable, otherwise it will do nothing.
     * @param data defines the data to store
     */
    create(data = null) {
        if (!data && this._buffer) {
            return; // nothing to do
        }
        data = data || this._data;
        if (!data) {
            return;
        }
        if (!this._buffer) {
            // create buffer
            if (this._updatable) {
                this._buffer = this._engine.createDynamicVertexBuffer(data, this._label);
                this._data = data;
            }
            else {
                this._buffer = this._engine.createVertexBuffer(data, undefined, this._label);
            }
        }
        else if (this._updatable) {
            // update buffer
            this._engine.updateDynamicVertexBuffer(this._buffer, data);
            this._data = data;
        }
    }
    /** @internal */
    _rebuild() {
        if (!this._data) {
            if (!this._buffer) {
                // Buffer was not yet created, nothing to do
                return;
            }
            if (this._buffer.capacity > 0) {
                // We can at least recreate the buffer with the right size, even if we don't have the data
                if (this._updatable) {
                    this._buffer = this._engine.createDynamicVertexBuffer(this._buffer.capacity, this._label);
                }
                else {
                    this._buffer = this._engine.createVertexBuffer(this._buffer.capacity, undefined, this._label);
                }
                return;
            }
            _Misc_logger_js__WEBPACK_IMPORTED_MODULE_1__/* .Logger */ .V.Warn(`Missing data for buffer "${this._label}" ${this._buffer ? "(uniqueId: " + this._buffer.uniqueId + ")" : ""}. Buffer reconstruction failed.`);
            this._buffer = null;
        }
        else {
            this._buffer = null;
            this.create(this._data);
        }
    }
    /**
     * Update current buffer data
     * @param data defines the data to store
     */
    update(data) {
        this.create(data);
    }
    /**
     * Updates the data directly.
     * @param data the new data
     * @param offset the new offset
     * @param vertexCount the vertex count (optional)
     * @param useBytes set to true if the offset is in bytes
     */
    updateDirectly(data, offset, vertexCount, useBytes = false) {
        if (!this._buffer) {
            return;
        }
        if (this._updatable) {
            // update buffer
            this._engine.updateDynamicVertexBuffer(this._buffer, data, useBytes ? offset : offset * Float32Array.BYTES_PER_ELEMENT, vertexCount ? vertexCount * this.byteStride : undefined);
            if (offset === 0 && vertexCount === undefined) {
                // Keep the data if we easily can
                this._data = data;
            }
            else {
                this._data = null;
            }
        }
    }
    /** @internal */
    _increaseReferences() {
        if (!this._buffer) {
            return;
        }
        if (!this._isAlreadyOwned) {
            this._isAlreadyOwned = true;
            return;
        }
        this._buffer.references++;
    }
    /**
     * Release all resources
     */
    dispose() {
        if (!this._buffer) {
            return;
        }
        // The data buffer has an internal counter as this buffer can be used by several VertexBuffer objects
        // This means that we only flag it as disposed when all references are released (when _releaseBuffer will return true)
        if (this._engine._releaseBuffer(this._buffer)) {
            this._isDisposed = true;
            this._data = null;
            this._buffer = null;
        }
    }
}
/**
 * Specialized buffer used to store vertex data
 */
class VertexBuffer {
    /**
     * Gets a boolean indicating if the Buffer is disposed
     */
    get isDisposed() {
        return this._isDisposed;
    }
    /**
     * Gets or sets the instance divisor when in instanced mode
     */
    get instanceDivisor() {
        return this._instanceDivisor;
    }
    set instanceDivisor(value) {
        const isInstanced = value != 0;
        this._instanceDivisor = value;
        if (isInstanced !== this._instanced) {
            this._instanced = isInstanced;
            this._computeHashCode();
        }
    }
    /**
     * Gets the max possible amount of vertices stored within the current vertex buffer.
     * We do not have the end offset or count so this will be too big for concatenated vertex buffers.
     * @internal
     */
    get _maxVerticesCount() {
        const data = this.getData();
        if (!data) {
            return 0;
        }
        if (Array.isArray(data)) {
            // data is a regular number[] with float values
            return data.length / (this.byteStride / 4) - this.byteOffset / 4;
        }
        return (data.byteLength - this.byteOffset) / this.byteStride;
    }
    /** @internal */
    constructor(engine, data, kind, updatableOrOptions, postponeInternalCreation, stride, instanced, offset, size, type, normalized = false, useBytes = false, divisor = 1, takeBufferOwnership = false) {
        /** @internal */
        this._isDisposed = false;
        let updatable = false;
        this.engine = engine;
        if (typeof updatableOrOptions === "object" && updatableOrOptions !== null) {
            updatable = updatableOrOptions.updatable ?? false;
            postponeInternalCreation = updatableOrOptions.postponeInternalCreation;
            stride = updatableOrOptions.stride;
            instanced = updatableOrOptions.instanced;
            offset = updatableOrOptions.offset;
            size = updatableOrOptions.size;
            type = updatableOrOptions.type;
            normalized = updatableOrOptions.normalized ?? false;
            useBytes = updatableOrOptions.useBytes ?? false;
            divisor = updatableOrOptions.divisor ?? 1;
            takeBufferOwnership = updatableOrOptions.takeBufferOwnership ?? false;
            this._label = updatableOrOptions.label;
        }
        else {
            updatable = !!updatableOrOptions;
        }
        if (data instanceof Buffer) {
            this._buffer = data;
            this._ownsBuffer = takeBufferOwnership;
        }
        else {
            this._buffer = new Buffer(engine, data, updatable, stride, postponeInternalCreation, instanced, useBytes, divisor, this._label);
            this._ownsBuffer = true;
        }
        this.uniqueId = VertexBuffer._Counter++;
        this._kind = kind;
        if (type === undefined) {
            const vertexData = this.getData();
            this.type = vertexData ? VertexBuffer.GetDataType(vertexData) : VertexBuffer.FLOAT;
        }
        else {
            this.type = type;
        }
        const typeByteLength = (0,_bufferUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .GetTypeByteLength */ .PD)(this.type);
        if (useBytes) {
            this._size = size || (stride ? stride / typeByteLength : VertexBuffer.DeduceStride(kind));
            this.byteStride = stride || this._buffer.byteStride || this._size * typeByteLength;
            this.byteOffset = offset || 0;
        }
        else {
            this._size = size || stride || VertexBuffer.DeduceStride(kind);
            this.byteStride = stride ? stride * typeByteLength : this._buffer.byteStride || this._size * typeByteLength;
            this.byteOffset = (offset || 0) * typeByteLength;
        }
        this.normalized = normalized;
        this._instanced = instanced !== undefined ? instanced : false;
        this._instanceDivisor = instanced ? divisor : 0;
        this._alignBuffer();
        this._computeHashCode();
    }
    _computeHashCode() {
        // note: cast to any because the property is declared readonly
        this.hashCode =
            ((this.type - 5120) << 0) +
                ((this.normalized ? 1 : 0) << 3) +
                (this._size << 4) +
                ((this._instanced ? 1 : 0) << 6) +
                /* keep 5 bits free */
                (this.byteStride << 12);
    }
    /** @internal */
    _rebuild() {
        this._buffer?._rebuild();
    }
    /**
     * Returns the kind of the VertexBuffer (string)
     * @returns a string
     */
    getKind() {
        return this._kind;
    }
    // Properties
    /**
     * Gets a boolean indicating if the VertexBuffer is updatable?
     * @returns true if the buffer is updatable
     */
    isUpdatable() {
        return this._buffer.isUpdatable();
    }
    /**
     * Gets current buffer's data
     * @returns a DataArray or null
     */
    getData() {
        return this._buffer.getData();
    }
    /**
     * Gets current buffer's data as a float array. Float data is constructed if the vertex buffer data cannot be returned directly.
     * @param totalVertices number of vertices in the buffer to take into account
     * @param forceCopy defines a boolean indicating that the returned array must be cloned upon returning it
     * @returns a float array containing vertex data
     */
    getFloatData(totalVertices, forceCopy) {
        const data = this.getData();
        if (!data) {
            return null;
        }
        return (0,_bufferUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .GetFloatData */ .jm)(data, this._size, this.type, this.byteOffset, this.byteStride, this.normalized, totalVertices, forceCopy);
    }
    /**
     * Gets underlying native buffer
     * @returns underlying native buffer
     */
    getBuffer() {
        return this._buffer.getBuffer();
    }
    /**
     * Gets the Buffer instance that wraps the native GPU buffer
     * @returns the wrapper buffer
     */
    getWrapperBuffer() {
        return this._buffer;
    }
    /**
     * Gets the stride in float32 units (i.e. byte stride / 4).
     * May not be an integer if the byte stride is not divisible by 4.
     * @returns the stride in float32 units
     * @deprecated Please use byteStride instead.
     */
    getStrideSize() {
        return this.byteStride / (0,_bufferUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .GetTypeByteLength */ .PD)(this.type);
    }
    /**
     * Returns the offset as a multiple of the type byte length.
     * @returns the offset in bytes
     * @deprecated Please use byteOffset instead.
     */
    getOffset() {
        return this.byteOffset / (0,_bufferUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .GetTypeByteLength */ .PD)(this.type);
    }
    /**
     * Returns the number of components or the byte size per vertex attribute
     * @param sizeInBytes If true, returns the size in bytes or else the size in number of components of the vertex attribute (default: false)
     * @returns the number of components
     */
    getSize(sizeInBytes = false) {
        return sizeInBytes ? this._size * (0,_bufferUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .GetTypeByteLength */ .PD)(this.type) : this._size;
    }
    /**
     * Gets a boolean indicating is the internal buffer of the VertexBuffer is instanced
     * @returns true if this buffer is instanced
     */
    getIsInstanced() {
        return this._instanced;
    }
    /**
     * Returns the instancing divisor, zero for non-instanced (integer).
     * @returns a number
     */
    getInstanceDivisor() {
        return this._instanceDivisor;
    }
    // Methods
    /**
     * Store data into the buffer. If the buffer was already used it will be either recreated or updated depending on isUpdatable property
     * @param data defines the data to store
     */
    create(data) {
        this._buffer.create(data);
        this._alignBuffer();
    }
    /**
     * Updates the underlying buffer according to the passed numeric array or Float32Array.
     * This function will create a new buffer if the current one is not updatable
     * @param data defines the data to store
     */
    update(data) {
        this._buffer.update(data);
        this._alignBuffer();
    }
    /**
     * Updates directly the underlying WebGLBuffer according to the passed numeric array or Float32Array.
     * Returns the directly updated WebGLBuffer.
     * @param data the new data
     * @param offset the new offset
     * @param useBytes set to true if the offset is in bytes
     */
    updateDirectly(data, offset, useBytes = false) {
        this._buffer.updateDirectly(data, offset, undefined, useBytes);
        this._alignBuffer();
    }
    /**
     * Disposes the VertexBuffer and the underlying WebGLBuffer.
     */
    dispose() {
        if (this._ownsBuffer) {
            this._buffer.dispose();
        }
        this._isDisposed = true;
    }
    /**
     * Enumerates each value of this vertex buffer as numbers.
     * @param count the number of values to enumerate
     * @param callback the callback function called for each value
     */
    forEach(count, callback) {
        (0,_bufferUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .EnumerateFloatValues */ .XG)(this._buffer.getData(), this.byteOffset, this.byteStride, this._size, this.type, count, this.normalized, (values, index) => {
            for (let i = 0; i < this._size; i++) {
                callback(values[i], index + i);
            }
        });
    }
    /** @internal */
    _alignBuffer() { }
    /**
     * Deduces the stride given a kind.
     * @param kind The kind string to deduce
     * @returns The deduced stride
     */
    static DeduceStride(kind) {
        switch (kind) {
            case VertexBuffer.UVKind:
            case VertexBuffer.UV2Kind:
            case VertexBuffer.UV3Kind:
            case VertexBuffer.UV4Kind:
            case VertexBuffer.UV5Kind:
            case VertexBuffer.UV6Kind:
                return 2;
            case VertexBuffer.NormalKind:
            case VertexBuffer.PositionKind:
                return 3;
            case VertexBuffer.ColorKind:
            case VertexBuffer.ColorInstanceKind:
            case VertexBuffer.MatricesIndicesKind:
            case VertexBuffer.MatricesIndicesExtraKind:
            case VertexBuffer.MatricesWeightsKind:
            case VertexBuffer.MatricesWeightsExtraKind:
            case VertexBuffer.TangentKind:
                return 4;
            default:
                throw new Error("Invalid kind '" + kind + "'");
        }
    }
    /**
     * Gets the vertex buffer type of the given data array.
     * @param data the data array
     * @returns the vertex buffer type
     */
    static GetDataType(data) {
        if (data instanceof Int8Array) {
            return VertexBuffer.BYTE;
        }
        else if (data instanceof Uint8Array) {
            return VertexBuffer.UNSIGNED_BYTE;
        }
        else if (data instanceof Int16Array) {
            return VertexBuffer.SHORT;
        }
        else if (data instanceof Uint16Array) {
            return VertexBuffer.UNSIGNED_SHORT;
        }
        else if (data instanceof Int32Array) {
            return VertexBuffer.INT;
        }
        else if (data instanceof Uint32Array) {
            return VertexBuffer.UNSIGNED_INT;
        }
        else {
            return VertexBuffer.FLOAT;
        }
    }
    /**
     * Gets the byte length of the given type.
     * @param type the type
     * @returns the number of bytes
     * @deprecated Use `getTypeByteLength` from `bufferUtils` instead
     */
    static GetTypeByteLength(type) {
        return (0,_bufferUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .GetTypeByteLength */ .PD)(type);
    }
    /**
     * Enumerates each value of the given parameters as numbers.
     * @param data the data to enumerate
     * @param byteOffset the byte offset of the data
     * @param byteStride the byte stride of the data
     * @param componentCount the number of components per element
     * @param componentType the type of the component
     * @param count the number of values to enumerate
     * @param normalized whether the data is normalized
     * @param callback the callback function called for each value
     * @deprecated Use `EnumerateFloatValues` from `bufferUtils` instead
     */
    static ForEach(data, byteOffset, byteStride, componentCount, componentType, count, normalized, callback) {
        (0,_bufferUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .EnumerateFloatValues */ .XG)(data, byteOffset, byteStride, componentCount, componentType, count, normalized, (values, index) => {
            for (let componentIndex = 0; componentIndex < componentCount; componentIndex++) {
                callback(values[componentIndex], index + componentIndex);
            }
        });
    }
    /**
     * Gets the given data array as a float array. Float data is constructed if the data array cannot be returned directly.
     * @param data the input data array
     * @param size the number of components
     * @param type the component type
     * @param byteOffset the byte offset of the data
     * @param byteStride the byte stride of the data
     * @param normalized whether the data is normalized
     * @param totalVertices number of vertices in the buffer to take into account
     * @param forceCopy defines a boolean indicating that the returned array must be cloned upon returning it
     * @returns a float array containing vertex data
     * @deprecated Use `GetFloatData` from `bufferUtils` instead
     */
    static GetFloatData(data, size, type, byteOffset, byteStride, normalized, totalVertices, forceCopy) {
        return (0,_bufferUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .GetFloatData */ .jm)(data, size, type, byteOffset, byteStride, normalized, totalVertices, forceCopy);
    }
}
VertexBuffer._Counter = 0;
/**
 * The byte type.
 */
VertexBuffer.BYTE = 5120;
/**
 * The unsigned byte type.
 */
VertexBuffer.UNSIGNED_BYTE = 5121;
/**
 * The short type.
 */
VertexBuffer.SHORT = 5122;
/**
 * The unsigned short type.
 */
VertexBuffer.UNSIGNED_SHORT = 5123;
/**
 * The integer type.
 */
VertexBuffer.INT = 5124;
/**
 * The unsigned integer type.
 */
VertexBuffer.UNSIGNED_INT = 5125;
/**
 * The float type.
 */
VertexBuffer.FLOAT = 5126;
// Enums
/**
 * Positions
 */
VertexBuffer.PositionKind = `position`;
/**
 * Normals
 */
VertexBuffer.NormalKind = `normal`;
/**
 * Tangents
 */
VertexBuffer.TangentKind = `tangent`;
/**
 * Texture coordinates
 */
VertexBuffer.UVKind = `uv`;
/**
 * Texture coordinates 2
 */
VertexBuffer.UV2Kind = `uv2`;
/**
 * Texture coordinates 3
 */
VertexBuffer.UV3Kind = `uv3`;
/**
 * Texture coordinates 4
 */
VertexBuffer.UV4Kind = `uv4`;
/**
 * Texture coordinates 5
 */
VertexBuffer.UV5Kind = `uv5`;
/**
 * Texture coordinates 6
 */
VertexBuffer.UV6Kind = `uv6`;
/**
 * Colors
 */
VertexBuffer.ColorKind = `color`;
/**
 * Instance Colors
 */
VertexBuffer.ColorInstanceKind = `instanceColor`;
/**
 * Matrix indices (for bones)
 */
VertexBuffer.MatricesIndicesKind = `matricesIndices`;
/**
 * Matrix weights (for bones)
 */
VertexBuffer.MatricesWeightsKind = `matricesWeights`;
/**
 * Additional matrix indices (for bones)
 */
VertexBuffer.MatricesIndicesExtraKind = `matricesIndicesExtra`;
/**
 * Additional matrix weights (for bones)
 */
VertexBuffer.MatricesWeightsExtraKind = `matricesWeightsExtra`;
//# sourceMappingURL=buffer.js.map

/***/ }),

/***/ 1675:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PD: () => (/* binding */ GetTypeByteLength),
/* harmony export */   XG: () => (/* binding */ EnumerateFloatValues),
/* harmony export */   gs: () => (/* binding */ CopyFloatData),
/* harmony export */   jm: () => (/* binding */ GetFloatData)
/* harmony export */ });
/* unused harmony export AreIndices32Bits */
/* harmony import */ var _Misc_logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1137);


function GetFloatValue(dataView, type, byteOffset, normalized) {
    switch (type) {
        case 5120: {
            let value = dataView.getInt8(byteOffset);
            if (normalized) {
                value = Math.max(value / 127, -1);
            }
            return value;
        }
        case 5121: {
            let value = dataView.getUint8(byteOffset);
            if (normalized) {
                value = value / 255;
            }
            return value;
        }
        case 5122: {
            let value = dataView.getInt16(byteOffset, true);
            if (normalized) {
                value = Math.max(value / 32767, -1);
            }
            return value;
        }
        case 5123: {
            let value = dataView.getUint16(byteOffset, true);
            if (normalized) {
                value = value / 65535;
            }
            return value;
        }
        case 5124: {
            return dataView.getInt32(byteOffset, true);
        }
        case 5125: {
            return dataView.getUint32(byteOffset, true);
        }
        case 5126: {
            return dataView.getFloat32(byteOffset, true);
        }
        default: {
            throw new Error(`Invalid component type ${type}`);
        }
    }
}
function SetFloatValue(dataView, type, byteOffset, normalized, value) {
    switch (type) {
        case 5120: {
            if (normalized) {
                value = Math.round(value * 127.0);
            }
            dataView.setInt8(byteOffset, value);
            break;
        }
        case 5121: {
            if (normalized) {
                value = Math.round(value * 255);
            }
            dataView.setUint8(byteOffset, value);
            break;
        }
        case 5122: {
            if (normalized) {
                value = Math.round(value * 32767);
            }
            dataView.setInt16(byteOffset, value, true);
            break;
        }
        case 5123: {
            if (normalized) {
                value = Math.round(value * 65535);
            }
            dataView.setUint16(byteOffset, value, true);
            break;
        }
        case 5124: {
            dataView.setInt32(byteOffset, value, true);
            break;
        }
        case 5125: {
            dataView.setUint32(byteOffset, value, true);
            break;
        }
        case 5126: {
            dataView.setFloat32(byteOffset, value, true);
            break;
        }
        default: {
            throw new Error(`Invalid component type ${type}`);
        }
    }
}
/**
 * Gets the byte length of the given type.
 * @param type the type
 * @returns the number of bytes
 */
function GetTypeByteLength(type) {
    switch (type) {
        case 5120:
        case 5121:
            return 1;
        case 5122:
        case 5123:
            return 2;
        case 5124:
        case 5125:
        case 5126:
            return 4;
        default:
            throw new Error(`Invalid type '${type}'`);
    }
}
/**
 * Enumerates each value of the data array and calls the given callback.
 * @param data the data to enumerate
 * @param byteOffset the byte offset of the data
 * @param byteStride the byte stride of the data
 * @param componentCount the number of components per element
 * @param componentType the type of the component
 * @param count the number of values to enumerate
 * @param normalized whether the data is normalized
 * @param callback the callback function called for each group of component values
 */
function EnumerateFloatValues(data, byteOffset, byteStride, componentCount, componentType, count, normalized, callback) {
    const oldValues = new Array(componentCount);
    const newValues = new Array(componentCount);
    if (data instanceof Array) {
        let offset = byteOffset / 4;
        const stride = byteStride / 4;
        for (let index = 0; index < count; index += componentCount) {
            for (let componentIndex = 0; componentIndex < componentCount; componentIndex++) {
                oldValues[componentIndex] = newValues[componentIndex] = data[offset + componentIndex];
            }
            callback(newValues, index);
            for (let componentIndex = 0; componentIndex < componentCount; componentIndex++) {
                if (oldValues[componentIndex] !== newValues[componentIndex]) {
                    data[offset + componentIndex] = newValues[componentIndex];
                }
            }
            offset += stride;
        }
    }
    else {
        const dataView = data instanceof ArrayBuffer ? new DataView(data) : new DataView(data.buffer, data.byteOffset, data.byteLength);
        const componentByteLength = GetTypeByteLength(componentType);
        for (let index = 0; index < count; index += componentCount) {
            for (let componentIndex = 0, componentByteOffset = byteOffset; componentIndex < componentCount; componentIndex++, componentByteOffset += componentByteLength) {
                oldValues[componentIndex] = newValues[componentIndex] = GetFloatValue(dataView, componentType, componentByteOffset, normalized);
            }
            callback(newValues, index);
            for (let componentIndex = 0, componentByteOffset = byteOffset; componentIndex < componentCount; componentIndex++, componentByteOffset += componentByteLength) {
                if (oldValues[componentIndex] !== newValues[componentIndex]) {
                    SetFloatValue(dataView, componentType, componentByteOffset, normalized, newValues[componentIndex]);
                }
            }
            byteOffset += byteStride;
        }
    }
}
/**
 * Gets the given data array as a float array. Float data is constructed if the data array cannot be returned directly.
 * @param data the input data array
 * @param size the number of components
 * @param type the component type
 * @param byteOffset the byte offset of the data
 * @param byteStride the byte stride of the data
 * @param normalized whether the data is normalized
 * @param totalVertices number of vertices in the buffer to take into account
 * @param forceCopy defines a boolean indicating that the returned array must be cloned upon returning it
 * @returns a float array containing vertex data
 */
function GetFloatData(data, size, type, byteOffset, byteStride, normalized, totalVertices, forceCopy) {
    const tightlyPackedByteStride = size * GetTypeByteLength(type);
    const count = totalVertices * size;
    if (type !== 5126 || byteStride !== tightlyPackedByteStride) {
        const copy = new Float32Array(count);
        EnumerateFloatValues(data, byteOffset, byteStride, size, type, count, normalized, (values, index) => {
            for (let i = 0; i < size; i++) {
                copy[index + i] = values[i];
            }
        });
        return copy;
    }
    if (!(data instanceof Array || data instanceof Float32Array) || byteOffset !== 0 || data.length !== count) {
        if (data instanceof Array) {
            const offset = byteOffset / 4;
            return data.slice(offset, offset + count);
        }
        else if (data instanceof ArrayBuffer) {
            return new Float32Array(data, byteOffset, count);
        }
        else {
            const offset = data.byteOffset + byteOffset;
            if ((offset & 3) !== 0) {
                _Misc_logger_js__WEBPACK_IMPORTED_MODULE_0__/* .Logger */ .V.Warn("Float array must be aligned to 4-bytes border");
                forceCopy = true;
            }
            if (forceCopy) {
                return new Float32Array(data.buffer.slice(offset, offset + count * Float32Array.BYTES_PER_ELEMENT));
            }
            else {
                return new Float32Array(data.buffer, offset, count);
            }
        }
    }
    if (forceCopy) {
        return data.slice();
    }
    return data;
}
/**
 * Copies the given data array to the given float array.
 * @param input the input data array
 * @param size the number of components
 * @param type the component type
 * @param byteOffset the byte offset of the data
 * @param byteStride the byte stride of the data
 * @param normalized whether the data is normalized
 * @param totalVertices number of vertices in the buffer to take into account
 * @param output the output float array
 */
function CopyFloatData(input, size, type, byteOffset, byteStride, normalized, totalVertices, output) {
    const tightlyPackedByteStride = size * GetTypeByteLength(type);
    const count = totalVertices * size;
    if (output.length !== count) {
        throw new Error("Output length is not valid");
    }
    if (type !== 5126 || byteStride !== tightlyPackedByteStride) {
        EnumerateFloatValues(input, byteOffset, byteStride, size, type, count, normalized, (values, index) => {
            for (let i = 0; i < size; i++) {
                output[index + i] = values[i];
            }
        });
        return;
    }
    if (input instanceof Array) {
        const offset = byteOffset / 4;
        output.set(input, offset);
    }
    else if (input instanceof ArrayBuffer) {
        const floatData = new Float32Array(input, byteOffset, count);
        output.set(floatData);
    }
    else {
        const offset = input.byteOffset + byteOffset;
        if ((offset & 3) !== 0) {
            _Misc_logger_js__WEBPACK_IMPORTED_MODULE_0__/* .Logger */ .V.Warn("Float array must be aligned to 4-bytes border");
            output.set(new Float32Array(input.buffer.slice(offset, offset + count * Float32Array.BYTES_PER_ELEMENT)));
            return;
        }
        const floatData = new Float32Array(input.buffer, offset, count);
        output.set(floatData);
    }
}
/**
 * Utility function to determine if an IndicesArray is an Uint32Array.
 * @param indices The IndicesArray to check. If null, count is used instead.
 * @param count The number of indices
 * @returns True if the indices use 32 bits
 */
function AreIndices32Bits(indices, count) {
    if (indices) {
        if (indices instanceof Array) {
            return indices.some((value) => value >= 65536);
        }
        return indices.BYTES_PER_ELEMENT === 4;
    }
    return count >= 65536;
}
//# sourceMappingURL=bufferUtils.js.map

/***/ }),

/***/ 6882:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  $: () => (/* binding */ RenderTargetTexture)
});

// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Misc/observable.js
var observable = __webpack_require__(9848);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Maths/math.vector.js
var math_vector = __webpack_require__(9923);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Materials/Textures/texture.js + 1 modules
var texture = __webpack_require__(2781);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/PostProcesses/postProcessManager.js
var postProcessManager = __webpack_require__(6096);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Misc/tools.functions.js
var tools_functions = __webpack_require__(1597);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Materials/effect.js
var effect = __webpack_require__(4420);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Misc/logger.js
var logger = __webpack_require__(1137);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Rendering/renderingManager.js + 1 modules
var renderingManager = __webpack_require__(3099);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Misc/arrayTools.js
var arrayTools = __webpack_require__(7309);
;// ./node_modules/@babylonjs/core/Rendering/objectRenderer.js




/**
 * A class that renders objects to the currently bound render target.
 * This class only renders objects, and is not concerned with the output texture or post-processing.
 */
class ObjectRenderer {
    /**
     * Use this list to define the list of mesh you want to render.
     */
    get renderList() {
        return this._renderList;
    }
    set renderList(value) {
        if (this._renderList === value) {
            return;
        }
        if (this._unObserveRenderList) {
            this._unObserveRenderList();
            this._unObserveRenderList = null;
        }
        if (value) {
            this._unObserveRenderList = (0,arrayTools/* _ObserveArray */.lL)(value, this._renderListHasChanged);
        }
        this._renderList = value;
    }
    /**
     * Friendly name of the object renderer
     */
    get name() {
        return this._name;
    }
    set name(value) {
        if (this._name === value) {
            return;
        }
        this._name = value;
        if (!this._scene) {
            return;
        }
        const engine = this._scene.getEngine();
        for (let i = 0; i < this._renderPassIds.length; ++i) {
            const renderPassId = this._renderPassIds[i];
            engine._renderPassNames[renderPassId] = `${this._name}#${i}`;
        }
    }
    /**
     * Gets the render pass ids used by the object renderer.
     */
    get renderPassIds() {
        return this._renderPassIds;
    }
    /**
     * Gets the current value of the refreshId counter
     */
    get currentRefreshId() {
        return this._currentRefreshId;
    }
    /**
     * Sets a specific material to be used to render a mesh/a list of meshes with this object renderer
     * @param mesh mesh or array of meshes
     * @param material material or array of materials to use for this render pass. If undefined is passed, no specific material will be used but the regular material instead (mesh.material). It's possible to provide an array of materials to use a different material for each rendering pass.
     */
    setMaterialForRendering(mesh, material) {
        let meshes;
        if (!Array.isArray(mesh)) {
            meshes = [mesh];
        }
        else {
            meshes = mesh;
        }
        for (let j = 0; j < meshes.length; ++j) {
            for (let i = 0; i < this.options.numPasses; ++i) {
                meshes[j].setMaterialForRenderPass(this._renderPassIds[i], material !== undefined ? (Array.isArray(material) ? material[i] : material) : undefined);
            }
        }
    }
    /**
     * Instantiates an object renderer.
     * @param name The friendly name of the object renderer
     * @param scene The scene the renderer belongs to
     * @param options The options used to create the renderer (optional)
     */
    constructor(name, scene, options) {
        this._unObserveRenderList = null;
        this._renderListHasChanged = (_functionName, previousLength) => {
            const newLength = this._renderList ? this._renderList.length : 0;
            if ((previousLength === 0 && newLength > 0) || newLength === 0) {
                this._scene.meshes.forEach((mesh) => {
                    mesh._markSubMeshesAsLightDirty();
                });
            }
        };
        /**
         * Define the list of particle systems to render. If not provided, will render all the particle systems of the scene.
         * Note that the particle systems are rendered only if renderParticles is set to true.
         */
        this.particleSystemList = null;
        /**
         * Use this function to overload the renderList array at rendering time.
         * Return null to render with the current renderList, else return the list of meshes to use for rendering.
         * For 2DArray, layerOrFace is the index of the layer that is going to be rendered, else it is the faceIndex of
         * the cube (if the RTT is a cube, else layerOrFace=0).
         * The renderList passed to the function is the current render list (the one that will be used if the function returns null).
         * The length of this list is passed through renderListLength: don't use renderList.length directly because the array can
         * hold dummy elements!
         */
        this.getCustomRenderList = null;
        /**
         * Define if particles should be rendered.
         */
        this.renderParticles = true;
        /**
         * Define if sprites should be rendered.
         */
        this.renderSprites = false;
        /**
         * Force checking the layerMask property even if a custom list of meshes is provided (ie. if renderList is not undefined)
         */
        this.forceLayerMaskCheck = false;
        /**
         * An event triggered before rendering the objects
         */
        this.onBeforeRenderObservable = new observable/* Observable */.cP();
        /**
         * An event triggered after rendering the objects
         */
        this.onAfterRenderObservable = new observable/* Observable */.cP();
        /**
         * An event triggered before the rendering group is processed
         */
        this.onBeforeRenderingManagerRenderObservable = new observable/* Observable */.cP();
        /**
         * An event triggered after the rendering group is processed
         */
        this.onAfterRenderingManagerRenderObservable = new observable/* Observable */.cP();
        /**
         * An event triggered when fast path rendering is used
         */
        this.onFastPathRenderObservable = new observable/* Observable */.cP();
        this._currentRefreshId = -1;
        this._refreshRate = 1;
        this._currentSceneCamera = null;
        this.name = name;
        this._scene = scene;
        this.renderList = [];
        this._renderPassIds = [];
        this.options = {
            numPasses: 1,
            doNotChangeAspectRatio: true,
            ...options,
        };
        this._createRenderPassId();
        this.renderPassId = this._renderPassIds[0];
        // Rendering groups
        this._renderingManager = new renderingManager/* RenderingManager */.m(scene);
        this._renderingManager._useSceneAutoClearSetup = true;
    }
    _releaseRenderPassId() {
        const engine = this._scene.getEngine();
        for (let i = 0; i < this.options.numPasses; ++i) {
            engine.releaseRenderPassId(this._renderPassIds[i]);
        }
        this._renderPassIds.length = 0;
    }
    _createRenderPassId() {
        this._releaseRenderPassId();
        const engine = this._scene.getEngine();
        for (let i = 0; i < this.options.numPasses; ++i) {
            this._renderPassIds[i] = engine.createRenderPassId(`${this.name}#${i}`);
        }
    }
    /**
     * Resets the refresh counter of the renderer and start back from scratch.
     * Could be useful to re-render if it is setup to render only once.
     */
    resetRefreshCounter() {
        this._currentRefreshId = -1;
    }
    /**
     * Defines the refresh rate of the rendering or the rendering frequency.
     * Use 0 to render just once, 1 to render on every frame, 2 to render every two frames and so on...
     */
    get refreshRate() {
        return this._refreshRate;
    }
    set refreshRate(value) {
        this._refreshRate = value;
        this.resetRefreshCounter();
    }
    /**
     * Indicates if the renderer should render the current frame.
     * The output is based on the specified refresh rate.
     * @returns true if the renderer should render the current frame
     */
    shouldRender() {
        if (this._currentRefreshId === -1) {
            // At least render once
            this._currentRefreshId = 1;
            return true;
        }
        if (this.refreshRate === this._currentRefreshId) {
            this._currentRefreshId = 1;
            return true;
        }
        this._currentRefreshId++;
        return false;
    }
    /**
     * This function will check if the renderer is ready to render (textures are loaded, shaders are compiled)
     * @param viewportWidth defines the width of the viewport
     * @param viewportHeight defines the height of the viewport
     * @returns true if all required resources are ready
     */
    isReadyForRendering(viewportWidth, viewportHeight) {
        this.prepareRenderList();
        this.initRender(viewportWidth, viewportHeight);
        const isReady = this._checkReadiness();
        this.finishRender();
        return isReady;
    }
    /**
     * Makes sure the list of meshes is ready to be rendered
     * You should call this function before "initRender", but if you know the render list is ok, you may call "initRender" directly
     */
    prepareRenderList() {
        const scene = this._scene;
        if (this._waitingRenderList) {
            if (!this.renderListPredicate) {
                this.renderList = [];
                for (let index = 0; index < this._waitingRenderList.length; index++) {
                    const id = this._waitingRenderList[index];
                    const mesh = scene.getMeshById(id);
                    if (mesh) {
                        this.renderList.push(mesh);
                    }
                }
            }
            this._waitingRenderList = undefined;
        }
        // Is predicate defined?
        if (this.renderListPredicate) {
            if (this.renderList) {
                this.renderList.length = 0; // Clear previous renderList
            }
            else {
                this.renderList = [];
            }
            const sceneMeshes = this._scene.meshes;
            for (let index = 0; index < sceneMeshes.length; index++) {
                const mesh = sceneMeshes[index];
                if (this.renderListPredicate(mesh)) {
                    this.renderList.push(mesh);
                }
            }
        }
    }
    /**
     * This method makes sure everything is setup before "render" can be called
     * @param viewportWidth Width of the viewport to render to
     * @param viewportHeight Height of the viewport to render to
     */
    initRender(viewportWidth, viewportHeight) {
        const engine = this._scene.getEngine();
        const camera = this.activeCamera ?? this._scene.activeCamera;
        this._currentSceneCamera = this._scene.activeCamera;
        if (camera) {
            if (camera !== this._scene.activeCamera) {
                this._scene.setTransformMatrix(camera.getViewMatrix(), camera.getProjectionMatrix(true));
                this._scene.activeCamera = camera;
            }
            engine.setViewport(camera.rigParent ? camera.rigParent.viewport : camera.viewport, viewportWidth, viewportHeight);
        }
        this._defaultRenderListPrepared = false;
    }
    /**
     * This method must be called after the "render" call(s), to complete the rendering process.
     */
    finishRender() {
        const scene = this._scene;
        scene.activeCamera = this._currentSceneCamera;
        if (this._currentSceneCamera) {
            if (this.activeCamera && this.activeCamera !== scene.activeCamera) {
                scene.setTransformMatrix(this._currentSceneCamera.getViewMatrix(), this._currentSceneCamera.getProjectionMatrix(true));
            }
            scene.getEngine().setViewport(this._currentSceneCamera.viewport);
        }
        scene.resetCachedMaterial();
    }
    /**
     * Renders all the objects (meshes, particles systems, sprites) to the currently bound render target texture.
     * @param passIndex defines the pass index to use (default: 0)
     * @param skipOnAfterRenderObservable defines a flag to skip raising the onAfterRenderObservable
     */
    render(passIndex = 0, skipOnAfterRenderObservable = false) {
        const scene = this._scene;
        const engine = scene.getEngine();
        const currentRenderPassId = engine.currentRenderPassId;
        engine.currentRenderPassId = this._renderPassIds[passIndex];
        this.onBeforeRenderObservable.notifyObservers(passIndex);
        const fastPath = engine.snapshotRendering && engine.snapshotRenderingMode === 1;
        if (!fastPath) {
            // Get the list of meshes to render
            let currentRenderList = null;
            const defaultRenderList = this.renderList ? this.renderList : scene.getActiveMeshes().data;
            const defaultRenderListLength = this.renderList ? this.renderList.length : scene.getActiveMeshes().length;
            if (this.getCustomRenderList) {
                currentRenderList = this.getCustomRenderList(passIndex, defaultRenderList, defaultRenderListLength);
            }
            if (!currentRenderList) {
                // No custom render list provided, we prepare the rendering for the default list, but check
                // first if we did not already performed the preparation before so as to avoid re-doing it several times
                if (!this._defaultRenderListPrepared) {
                    this._prepareRenderingManager(defaultRenderList, defaultRenderListLength, !this.renderList || this.forceLayerMaskCheck);
                    this._defaultRenderListPrepared = true;
                }
                currentRenderList = defaultRenderList;
            }
            else {
                // Prepare the rendering for the custom render list provided
                this._prepareRenderingManager(currentRenderList, currentRenderList.length, this.forceLayerMaskCheck);
            }
            this.onBeforeRenderingManagerRenderObservable.notifyObservers(passIndex);
            this._renderingManager.render(this.customRenderFunction, currentRenderList, this.renderParticles, this.renderSprites);
            this.onAfterRenderingManagerRenderObservable.notifyObservers(passIndex);
        }
        else {
            this.onFastPathRenderObservable.notifyObservers(passIndex);
        }
        if (!skipOnAfterRenderObservable) {
            this.onAfterRenderObservable.notifyObservers(passIndex);
        }
        engine.currentRenderPassId = currentRenderPassId;
    }
    /** @internal */
    _checkReadiness() {
        const scene = this._scene;
        const engine = scene.getEngine();
        const currentRenderPassId = engine.currentRenderPassId;
        let returnValue = true;
        if (!scene.getViewMatrix()) {
            // We probably didn't execute scene.render() yet, so make sure we have a view/projection matrix setup for the scene
            scene.updateTransformMatrix();
        }
        const numPasses = this.options.numPasses;
        for (let passIndex = 0; passIndex < numPasses && returnValue; passIndex++) {
            let currentRenderList = null;
            const defaultRenderList = this.renderList ? this.renderList : scene.getActiveMeshes().data;
            const defaultRenderListLength = this.renderList ? this.renderList.length : scene.getActiveMeshes().length;
            engine.currentRenderPassId = this._renderPassIds[passIndex];
            this.onBeforeRenderObservable.notifyObservers(passIndex);
            if (this.getCustomRenderList) {
                currentRenderList = this.getCustomRenderList(passIndex, defaultRenderList, defaultRenderListLength);
            }
            if (!currentRenderList) {
                currentRenderList = defaultRenderList;
            }
            if (!this.options.doNotChangeAspectRatio) {
                scene.updateTransformMatrix(true);
            }
            for (let i = 0; i < currentRenderList.length && returnValue; ++i) {
                const mesh = currentRenderList[i];
                if (!mesh.isEnabled() || mesh.isBlocked || !mesh.isVisible || !mesh.subMeshes) {
                    continue;
                }
                if (this.customIsReadyFunction) {
                    if (!this.customIsReadyFunction(mesh, this.refreshRate, true)) {
                        returnValue = false;
                        continue;
                    }
                }
                else if (!mesh.isReady(true)) {
                    returnValue = false;
                    continue;
                }
            }
            this.onAfterRenderObservable.notifyObservers(passIndex);
            if (numPasses > 1) {
                scene.incrementRenderId();
                scene.resetCachedMaterial();
            }
        }
        const particleSystems = this.particleSystemList || scene.particleSystems;
        for (const particleSystem of particleSystems) {
            if (!particleSystem.isReady()) {
                returnValue = false;
            }
        }
        engine.currentRenderPassId = currentRenderPassId;
        return returnValue;
    }
    _prepareRenderingManager(currentRenderList, currentRenderListLength, checkLayerMask) {
        const scene = this._scene;
        const camera = scene.activeCamera; // note that at this point, scene.activeCamera == this.activeCamera if defined, because initRender() has been called before
        const cameraForLOD = this.cameraForLOD ?? camera;
        this._renderingManager.reset();
        const sceneRenderId = scene.getRenderId();
        const currentFrameId = scene.getFrameId();
        for (let meshIndex = 0; meshIndex < currentRenderListLength; meshIndex++) {
            const mesh = currentRenderList[meshIndex];
            if (mesh && !mesh.isBlocked) {
                if (this.customIsReadyFunction) {
                    if (!this.customIsReadyFunction(mesh, this.refreshRate, false)) {
                        this.resetRefreshCounter();
                        continue;
                    }
                }
                else if (!mesh.isReady(this.refreshRate === 0)) {
                    this.resetRefreshCounter();
                    continue;
                }
                let meshToRender = null;
                if (cameraForLOD) {
                    const meshToRenderAndFrameId = mesh._internalAbstractMeshDataInfo._currentLOD.get(cameraForLOD);
                    if (!meshToRenderAndFrameId || meshToRenderAndFrameId[1] !== currentFrameId) {
                        meshToRender = scene.customLODSelector ? scene.customLODSelector(mesh, cameraForLOD) : mesh.getLOD(cameraForLOD);
                        if (!meshToRenderAndFrameId) {
                            mesh._internalAbstractMeshDataInfo._currentLOD.set(cameraForLOD, [meshToRender, currentFrameId]);
                        }
                        else {
                            meshToRenderAndFrameId[0] = meshToRender;
                            meshToRenderAndFrameId[1] = currentFrameId;
                        }
                    }
                    else {
                        meshToRender = meshToRenderAndFrameId[0];
                    }
                }
                else {
                    meshToRender = mesh;
                }
                if (!meshToRender) {
                    continue;
                }
                if (meshToRender !== mesh && meshToRender.billboardMode !== 0) {
                    meshToRender.computeWorldMatrix(); // Compute world matrix if LOD is billboard
                }
                meshToRender._preActivateForIntermediateRendering(sceneRenderId);
                let isMasked;
                if (checkLayerMask && camera) {
                    isMasked = (mesh.layerMask & camera.layerMask) === 0;
                }
                else {
                    isMasked = false;
                }
                if (mesh.isEnabled() && mesh.isVisible && mesh.subMeshes && !isMasked) {
                    if (meshToRender !== mesh) {
                        meshToRender._activate(sceneRenderId, true);
                    }
                    if (mesh._activate(sceneRenderId, true) && mesh.subMeshes.length) {
                        if (!mesh.isAnInstance) {
                            meshToRender._internalAbstractMeshDataInfo._onlyForInstancesIntermediate = false;
                        }
                        else {
                            if (mesh._internalAbstractMeshDataInfo._actAsRegularMesh) {
                                meshToRender = mesh;
                            }
                        }
                        meshToRender._internalAbstractMeshDataInfo._isActiveIntermediate = true;
                        scene._prepareSkeleton(meshToRender);
                        for (let subIndex = 0; subIndex < meshToRender.subMeshes.length; subIndex++) {
                            const subMesh = meshToRender.subMeshes[subIndex];
                            this._renderingManager.dispatch(subMesh, meshToRender);
                        }
                    }
                    mesh._postActivate();
                }
            }
        }
        const particleSystems = this.particleSystemList || scene.particleSystems;
        for (let particleIndex = 0; particleIndex < particleSystems.length; particleIndex++) {
            const particleSystem = particleSystems[particleIndex];
            const emitter = particleSystem.emitter;
            if (!particleSystem.isStarted() || !emitter || (emitter.position && !emitter.isEnabled())) {
                continue;
            }
            this._renderingManager.dispatchParticles(particleSystem);
        }
    }
    /**
     * Overrides the default sort function applied in the rendering group to prepare the meshes.
     * This allowed control for front to back rendering or reversely depending of the special needs.
     *
     * @param renderingGroupId The rendering group id corresponding to its index
     * @param opaqueSortCompareFn The opaque queue comparison function use to sort.
     * @param alphaTestSortCompareFn The alpha test queue comparison function use to sort.
     * @param transparentSortCompareFn The transparent queue comparison function use to sort.
     */
    setRenderingOrder(renderingGroupId, opaqueSortCompareFn = null, alphaTestSortCompareFn = null, transparentSortCompareFn = null) {
        this._renderingManager.setRenderingOrder(renderingGroupId, opaqueSortCompareFn, alphaTestSortCompareFn, transparentSortCompareFn);
    }
    /**
     * Specifies whether or not the stencil and depth buffer are cleared between two rendering groups.
     *
     * @param renderingGroupId The rendering group id corresponding to its index
     * @param autoClearDepthStencil Automatically clears depth and stencil between groups if true.
     * @param depth Automatically clears depth between groups if true and autoClear is true.
     * @param stencil Automatically clears stencil between groups if true and autoClear is true.
     */
    setRenderingAutoClearDepthStencil(renderingGroupId, autoClearDepthStencil, depth = true, stencil = true) {
        this._renderingManager.setRenderingAutoClearDepthStencil(renderingGroupId, autoClearDepthStencil, depth, stencil);
        this._renderingManager._useSceneAutoClearSetup = false;
    }
    /**
     * Clones the renderer.
     * @returns the cloned renderer
     */
    clone() {
        const newRenderer = new ObjectRenderer(this.name, this._scene, this.options);
        if (this.renderList) {
            newRenderer.renderList = this.renderList.slice(0);
        }
        return newRenderer;
    }
    /**
     * Dispose the renderer and release its associated resources.
     */
    dispose() {
        const renderList = this.renderList ? this.renderList : this._scene.getActiveMeshes().data;
        const renderListLength = this.renderList ? this.renderList.length : this._scene.getActiveMeshes().length;
        for (let i = 0; i < renderListLength; i++) {
            const mesh = renderList[i];
            if (mesh.getMaterialForRenderPass(this.renderPassId) !== undefined) {
                mesh.setMaterialForRenderPass(this.renderPassId, undefined);
            }
        }
        this.onBeforeRenderObservable.clear();
        this.onAfterRenderObservable.clear();
        this.onBeforeRenderingManagerRenderObservable.clear();
        this.onAfterRenderingManagerRenderObservable.clear();
        this.onFastPathRenderObservable.clear();
        this._releaseRenderPassId();
        this.renderList = null;
    }
    /** @internal */
    _rebuild() {
        if (this.refreshRate === ObjectRenderer.REFRESHRATE_RENDER_ONCE) {
            this.refreshRate = ObjectRenderer.REFRESHRATE_RENDER_ONCE;
        }
    }
    /**
     * Clear the info related to rendering groups preventing retention point in material dispose.
     */
    freeRenderingGroups() {
        if (this._renderingManager) {
            this._renderingManager.freeRenderingGroups();
        }
    }
}
/**
 * Objects will only be rendered once which can be useful to improve performance if everything in your render is static for instance.
 */
ObjectRenderer.REFRESHRATE_RENDER_ONCE = 0;
/**
 * Objects will be rendered every frame and is recommended for dynamic contents.
 */
ObjectRenderer.REFRESHRATE_RENDER_ONEVERYFRAME = 1;
/**
 * Objects will be rendered every 2 frames which could be enough if your dynamic objects are not
 * the central point of your effect and can save a lot of performances.
 */
ObjectRenderer.REFRESHRATE_RENDER_ONEVERYTWOFRAMES = 2;
//# sourceMappingURL=objectRenderer.js.map
;// ./node_modules/@babylonjs/core/Materials/Textures/renderTargetTexture.js









/**
 * Sets a depth stencil texture from a render target on the engine to be used in the shader.
 * @param channel Name of the sampler variable.
 * @param texture Texture to set.
 */
effect/* Effect */.M.prototype.setDepthStencilTexture = function (channel, texture) {
    this._engine.setDepthStencilTexture(this._samplers[channel], this._uniforms[channel], texture, channel);
};
/**
 * This Helps creating a texture that will be created from a camera in your scene.
 * It is basically a dynamic texture that could be used to create special effects for instance.
 * Actually, It is the base of lot of effects in the framework like post process, shadows, effect layers and rendering pipelines...
 */
class RenderTargetTexture extends texture/* Texture */.g {
    /**
     * Use this predicate to dynamically define the list of mesh you want to render.
     * If set, the renderList property will be overwritten.
     */
    get renderListPredicate() {
        return this._objectRenderer.renderListPredicate;
    }
    set renderListPredicate(value) {
        this._objectRenderer.renderListPredicate = value;
    }
    /**
     * Use this list to define the list of mesh you want to render.
     */
    get renderList() {
        return this._objectRenderer.renderList;
    }
    set renderList(value) {
        this._objectRenderer.renderList = value;
    }
    /**
     * Define the list of particle systems to render in the texture. If not provided, will render all the particle systems of the scene.
     * Note that the particle systems are rendered only if renderParticles is set to true.
     */
    get particleSystemList() {
        return this._objectRenderer.particleSystemList;
    }
    set particleSystemList(value) {
        this._objectRenderer.particleSystemList = value;
    }
    /**
     * Use this function to overload the renderList array at rendering time.
     * Return null to render with the current renderList, else return the list of meshes to use for rendering.
     * For 2DArray RTT, layerOrFace is the index of the layer that is going to be rendered, else it is the faceIndex of
     * the cube (if the RTT is a cube, else layerOrFace=0).
     * The renderList passed to the function is the current render list (the one that will be used if the function returns null).
     * The length of this list is passed through renderListLength: don't use renderList.length directly because the array can
     * hold dummy elements!
     */
    get getCustomRenderList() {
        return this._objectRenderer.getCustomRenderList;
    }
    set getCustomRenderList(value) {
        this._objectRenderer.getCustomRenderList = value;
    }
    /**
     * Define if particles should be rendered in your texture (default: true).
     */
    get renderParticles() {
        return this._objectRenderer.renderParticles;
    }
    set renderParticles(value) {
        this._objectRenderer.renderParticles = value;
    }
    /**
     * Define if sprites should be rendered in your texture (default: false).
     */
    get renderSprites() {
        return this._objectRenderer.renderSprites;
    }
    set renderSprites(value) {
        this._objectRenderer.renderSprites = value;
    }
    /**
     * Force checking the layerMask property even if a custom list of meshes is provided (ie. if renderList is not undefined) (default: false).
     */
    get forceLayerMaskCheck() {
        return this._objectRenderer.forceLayerMaskCheck;
    }
    set forceLayerMaskCheck(value) {
        this._objectRenderer.forceLayerMaskCheck = value;
    }
    /**
     * Define the camera used to render the texture.
     */
    get activeCamera() {
        return this._objectRenderer.activeCamera;
    }
    set activeCamera(value) {
        this._objectRenderer.activeCamera = value;
    }
    /**
     * Define the camera used to calculate the LOD of the objects.
     * If not defined, activeCamera will be used. If not defined nor activeCamera, scene's active camera will be used.
     */
    get cameraForLOD() {
        return this._objectRenderer.cameraForLOD;
    }
    set cameraForLOD(value) {
        this._objectRenderer.cameraForLOD = value;
    }
    /**
     * Override the mesh isReady function with your own one.
     */
    get customIsReadyFunction() {
        return this._objectRenderer.customIsReadyFunction;
    }
    set customIsReadyFunction(value) {
        this._objectRenderer.customIsReadyFunction = value;
    }
    /**
     * Override the render function of the texture with your own one.
     */
    get customRenderFunction() {
        return this._objectRenderer.customRenderFunction;
    }
    set customRenderFunction(value) {
        this._objectRenderer.customRenderFunction = value;
    }
    /**
     * Post-processes for this render target
     */
    get postProcesses() {
        return this._postProcesses;
    }
    get _prePassEnabled() {
        return !!this._prePassRenderTarget && this._prePassRenderTarget.enabled;
    }
    /**
     * Set a after unbind callback in the texture.
     * This has been kept for backward compatibility and use of onAfterUnbindObservable is recommended.
     */
    set onAfterUnbind(callback) {
        if (this._onAfterUnbindObserver) {
            this.onAfterUnbindObservable.remove(this._onAfterUnbindObserver);
        }
        this._onAfterUnbindObserver = this.onAfterUnbindObservable.add(callback);
    }
    /**
     * An event triggered before rendering the texture
     */
    get onBeforeRenderObservable() {
        return this._objectRenderer.onBeforeRenderObservable;
    }
    /**
     * Set a before render callback in the texture.
     * This has been kept for backward compatibility and use of onBeforeRenderObservable is recommended.
     */
    set onBeforeRender(callback) {
        if (this._onBeforeRenderObserver) {
            this.onBeforeRenderObservable.remove(this._onBeforeRenderObserver);
        }
        this._onBeforeRenderObserver = this.onBeforeRenderObservable.add(callback);
    }
    /**
     * An event triggered after rendering the texture
     */
    get onAfterRenderObservable() {
        return this._objectRenderer.onAfterRenderObservable;
    }
    /**
     * Set a after render callback in the texture.
     * This has been kept for backward compatibility and use of onAfterRenderObservable is recommended.
     */
    set onAfterRender(callback) {
        if (this._onAfterRenderObserver) {
            this.onAfterRenderObservable.remove(this._onAfterRenderObserver);
        }
        this._onAfterRenderObserver = this.onAfterRenderObservable.add(callback);
    }
    /**
     * Set a clear callback in the texture.
     * This has been kept for backward compatibility and use of onClearObservable is recommended.
     */
    set onClear(callback) {
        if (this._onClearObserver) {
            this.onClearObservable.remove(this._onClearObserver);
        }
        this._onClearObserver = this.onClearObservable.add(callback);
    }
    /** @internal */
    get _waitingRenderList() {
        return this._objectRenderer._waitingRenderList;
    }
    /** @internal */
    set _waitingRenderList(value) {
        this._objectRenderer._waitingRenderList = value;
    }
    /**
     * Current render pass id of the render target texture. Note it can change over the rendering as there's a separate id for each face of a cube / each layer of an array layer!
     */
    get renderPassId() {
        return this._objectRenderer.renderPassId;
    }
    /**
     * Gets the render pass ids used by the render target texture. For a single render target the array length will be 1, for a cube texture it will be 6 and for
     * a 2D texture array it will return an array of ids the size of the 2D texture array
     */
    get renderPassIds() {
        return this._objectRenderer.renderPassIds;
    }
    /**
     * Gets the current value of the refreshId counter
     */
    get currentRefreshId() {
        return this._objectRenderer.currentRefreshId;
    }
    /**
     * Sets a specific material to be used to render a mesh/a list of meshes in this render target texture
     * @param mesh mesh or array of meshes
     * @param material material or array of materials to use for this render pass. If undefined is passed, no specific material will be used but the regular material instead (mesh.material). It's possible to provide an array of materials to use a different material for each rendering in the case of a cube texture (6 rendering) and a 2D texture array (as many rendering as the length of the array)
     */
    setMaterialForRendering(mesh, material) {
        this._objectRenderer.setMaterialForRendering(mesh, material);
    }
    /**
     * Define if the texture has multiple draw buffers or if false a single draw buffer.
     */
    get isMulti() {
        return this._renderTarget?.isMulti ?? false;
    }
    /**
     * Gets render target creation options that were used.
     */
    get renderTargetOptions() {
        return this._renderTargetOptions;
    }
    /**
     * Gets the render target wrapper associated with this render target
     */
    get renderTarget() {
        return this._renderTarget;
    }
    _onRatioRescale() {
        if (this._sizeRatio) {
            this.resize(this._initialSizeParameter);
        }
    }
    /**
     * Gets or sets the size of the bounding box associated with the texture (when in cube mode)
     * When defined, the cubemap will switch to local mode
     * @see https://community.arm.com/graphics/b/blog/posts/reflections-based-on-local-cubemaps-in-unity
     * @example https://www.babylonjs-playground.com/#RNASML
     */
    set boundingBoxSize(value) {
        if (this._boundingBoxSize && this._boundingBoxSize.equals(value)) {
            return;
        }
        this._boundingBoxSize = value;
        const scene = this.getScene();
        if (scene) {
            scene.markAllMaterialsAsDirty(1);
        }
    }
    get boundingBoxSize() {
        return this._boundingBoxSize;
    }
    /**
     * In case the RTT has been created with a depth texture, get the associated
     * depth texture.
     * Otherwise, return null.
     */
    get depthStencilTexture() {
        return this._renderTarget?._depthStencilTexture ?? null;
    }
    /** @internal */
    constructor(name, size, scene, generateMipMaps = false, doNotChangeAspectRatio = true, type = 0, isCube = false, samplingMode = texture/* Texture */.g.TRILINEAR_SAMPLINGMODE, generateDepthBuffer = true, generateStencilBuffer = false, isMulti = false, format = 5, delayAllocation = false, samples, creationFlags, noColorAttachment = false, useSRGBBuffer = false) {
        let colorAttachment = undefined;
        let gammaSpace = true;
        let existingObjectRenderer = undefined;
        if (typeof generateMipMaps === "object") {
            const options = generateMipMaps;
            generateMipMaps = !!options.generateMipMaps;
            doNotChangeAspectRatio = options.doNotChangeAspectRatio ?? true;
            type = options.type ?? 0;
            isCube = !!options.isCube;
            samplingMode = options.samplingMode ?? texture/* Texture */.g.TRILINEAR_SAMPLINGMODE;
            generateDepthBuffer = options.generateDepthBuffer ?? true;
            generateStencilBuffer = !!options.generateStencilBuffer;
            isMulti = !!options.isMulti;
            format = options.format ?? 5;
            delayAllocation = !!options.delayAllocation;
            samples = options.samples;
            creationFlags = options.creationFlags;
            noColorAttachment = !!options.noColorAttachment;
            useSRGBBuffer = !!options.useSRGBBuffer;
            colorAttachment = options.colorAttachment;
            gammaSpace = options.gammaSpace ?? gammaSpace;
            existingObjectRenderer = options.existingObjectRenderer;
        }
        super(null, scene, !generateMipMaps, undefined, samplingMode, undefined, undefined, undefined, undefined, format);
        /**
         * Define if the camera viewport should be respected while rendering the texture or if the render should be done to the entire texture.
         */
        this.ignoreCameraViewport = false;
        /**
         * An event triggered when the texture is unbind.
         */
        this.onBeforeBindObservable = new observable/* Observable */.cP();
        /**
         * An event triggered when the texture is unbind.
         */
        this.onAfterUnbindObservable = new observable/* Observable */.cP();
        /**
         * An event triggered after the texture clear
         */
        this.onClearObservable = new observable/* Observable */.cP();
        /**
         * An event triggered when the texture is resized.
         */
        this.onResizeObservable = new observable/* Observable */.cP();
        /** @internal */
        this._cleared = false;
        /**
         * Skip the initial clear of the rtt at the beginning of the frame render loop
         */
        this.skipInitialClear = false;
        this._samples = 1;
        this._canRescale = true;
        this._renderTarget = null;
        this._dontDisposeObjectRenderer = false;
        /**
         * Gets or sets the center of the bounding box associated with the texture (when in cube mode)
         * It must define where the camera used to render the texture is set
         */
        this.boundingBoxPosition = math_vector/* Vector3 */.Pq.Zero();
        /** @internal */
        this._disableEngineStages = false; // TODO: remove this when the shadow generator task (frame graph) is reworked (see https://github.com/BabylonJS/Babylon.js/pull/15962#discussion_r1874417607)
        this._dumpToolsLoading = false;
        scene = this.getScene();
        if (!scene) {
            return;
        }
        const engine = this.getScene().getEngine();
        this._gammaSpace = gammaSpace;
        this._coordinatesMode = texture/* Texture */.g.PROJECTION_MODE;
        this.name = name;
        this.isRenderTarget = true;
        this._initialSizeParameter = size;
        this._dontDisposeObjectRenderer = !!existingObjectRenderer;
        this._processSizeParameter(size);
        this._objectRenderer =
            existingObjectRenderer ??
                new ObjectRenderer(name, scene, {
                    numPasses: isCube ? 6 : this.getRenderLayers() || 1,
                    doNotChangeAspectRatio,
                });
        this._onBeforeRenderingManagerRenderObserver = this._objectRenderer.onBeforeRenderingManagerRenderObservable.add(() => {
            // Before clear
            if (!this._disableEngineStages) {
                for (const step of this._scene._beforeRenderTargetClearStage) {
                    step.action(this, this._currentFaceIndex, this._currentLayer);
                }
            }
            // Clear
            if (this.onClearObservable.hasObservers()) {
                this.onClearObservable.notifyObservers(engine);
            }
            else if (!this.skipInitialClear) {
                engine.clear(this.clearColor || this._scene.clearColor, true, true, true);
            }
            if (!this._doNotChangeAspectRatio) {
                this._scene.updateTransformMatrix(true);
            }
            // Before Camera Draw
            if (!this._disableEngineStages) {
                for (const step of this._scene._beforeRenderTargetDrawStage) {
                    step.action(this, this._currentFaceIndex, this._currentLayer);
                }
            }
        });
        this._onAfterRenderingManagerRenderObserver = this._objectRenderer.onAfterRenderingManagerRenderObservable.add(() => {
            // After Camera Draw
            if (!this._disableEngineStages) {
                for (const step of this._scene._afterRenderTargetDrawStage) {
                    step.action(this, this._currentFaceIndex, this._currentLayer);
                }
            }
            const saveGenerateMipMaps = this._texture?.generateMipMaps ?? false;
            if (this._texture) {
                this._texture.generateMipMaps = false; // if left true, the mipmaps will be generated (if this._texture.generateMipMaps = true) when the first post process binds its own RTT: by doing so it will unbind the current RTT,
                // which will trigger a mipmap generation. We don't want this because it's a wasted work, we will do an unbind of the current RTT at the end of the process (see unbindFrameBuffer) which will
                // trigger the generation of the final mipmaps
            }
            if (this._postProcessManager) {
                this._postProcessManager._finalizeFrame(false, this._renderTarget ?? undefined, this._currentFaceIndex, this._postProcesses, this.ignoreCameraViewport);
            }
            else if (this._currentUseCameraPostProcess) {
                this._scene.postProcessManager._finalizeFrame(false, this._renderTarget ?? undefined, this._currentFaceIndex);
            }
            if (!this._disableEngineStages) {
                for (const step of this._scene._afterRenderTargetPostProcessStage) {
                    step.action(this, this._currentFaceIndex, this._currentLayer);
                }
            }
            if (this._texture) {
                this._texture.generateMipMaps = saveGenerateMipMaps;
            }
            if (!this._doNotChangeAspectRatio) {
                this._scene.updateTransformMatrix(true);
            }
            // Dump ?
            if (this._currentDumpForDebug) {
                if (!this._dumpTools) {
                    logger/* Logger */.V.Error("dumpTools module is still being loaded. To speed up the process import dump tools directly in your project");
                }
                else {
                    this._dumpTools.DumpFramebuffer(this.getRenderWidth(), this.getRenderHeight(), engine);
                }
            }
        });
        this._onFastPathRenderObserver = this._objectRenderer.onFastPathRenderObservable.add(() => {
            if (this.onClearObservable.hasObservers()) {
                this.onClearObservable.notifyObservers(engine);
            }
            else {
                if (!this.skipInitialClear) {
                    engine.clear(this.clearColor || this._scene.clearColor, true, true, true);
                }
            }
        });
        this._resizeObserver = engine.onResizeObservable.add(() => { });
        this._generateMipMaps = generateMipMaps ? true : false;
        this._doNotChangeAspectRatio = doNotChangeAspectRatio;
        if (isMulti) {
            return;
        }
        this._renderTargetOptions = {
            generateMipMaps: generateMipMaps,
            type: type,
            format: this._format ?? undefined,
            samplingMode: this.samplingMode,
            generateDepthBuffer: generateDepthBuffer,
            generateStencilBuffer: generateStencilBuffer,
            samples,
            creationFlags,
            noColorAttachment: noColorAttachment,
            useSRGBBuffer,
            colorAttachment: colorAttachment,
            label: this.name,
        };
        if (this.samplingMode === texture/* Texture */.g.NEAREST_SAMPLINGMODE) {
            this.wrapU = texture/* Texture */.g.CLAMP_ADDRESSMODE;
            this.wrapV = texture/* Texture */.g.CLAMP_ADDRESSMODE;
        }
        if (!delayAllocation) {
            if (isCube) {
                this._renderTarget = scene.getEngine().createRenderTargetCubeTexture(this.getRenderSize(), this._renderTargetOptions);
                this.coordinatesMode = texture/* Texture */.g.INVCUBIC_MODE;
                this._textureMatrix = math_vector/* Matrix */.uq.Identity();
            }
            else {
                this._renderTarget = scene.getEngine().createRenderTargetTexture(this._size, this._renderTargetOptions);
            }
            this._texture = this._renderTarget.texture;
            if (samples !== undefined) {
                this.samples = samples;
            }
        }
    }
    /**
     * Creates a depth stencil texture.
     * This is only available in WebGL 2 or with the depth texture extension available.
     * @param comparisonFunction Specifies the comparison function to set on the texture. If 0 or undefined, the texture is not in comparison mode (default: 0)
     * @param bilinearFiltering Specifies whether or not bilinear filtering is enable on the texture (default: true)
     * @param generateStencil Specifies whether or not a stencil should be allocated in the texture (default: false)
     * @param samples sample count of the depth/stencil texture (default: 1)
     * @param format format of the depth texture (default: 14)
     * @param label defines the label of the texture (for debugging purpose)
     */
    createDepthStencilTexture(comparisonFunction = 0, bilinearFiltering = true, generateStencil = false, samples = 1, format = 14, label) {
        this._renderTarget?.createDepthStencilTexture(comparisonFunction, bilinearFiltering, generateStencil, samples, format, label);
    }
    _processSizeParameter(size) {
        if (size.ratio) {
            this._sizeRatio = size.ratio;
            const engine = this._getEngine();
            this._size = {
                width: this._bestReflectionRenderTargetDimension(engine.getRenderWidth(), this._sizeRatio),
                height: this._bestReflectionRenderTargetDimension(engine.getRenderHeight(), this._sizeRatio),
            };
        }
        else {
            this._size = size;
        }
    }
    /**
     * Define the number of samples to use in case of MSAA.
     * It defaults to one meaning no MSAA has been enabled.
     */
    get samples() {
        return this._renderTarget?.samples ?? this._samples;
    }
    set samples(value) {
        if (this._renderTarget) {
            this._samples = this._renderTarget.setSamples(value);
        }
    }
    /**
     * Adds a post process to the render target rendering passes.
     * @param postProcess define the post process to add
     */
    addPostProcess(postProcess) {
        if (!this._postProcessManager) {
            const scene = this.getScene();
            if (!scene) {
                return;
            }
            this._postProcessManager = new postProcessManager/* PostProcessManager */.X(scene);
            this._postProcesses = new Array();
        }
        this._postProcesses.push(postProcess);
        this._postProcesses[0].autoClear = false;
    }
    /**
     * Clear all the post processes attached to the render target
     * @param dispose define if the cleared post processes should also be disposed (false by default)
     */
    clearPostProcesses(dispose = false) {
        if (!this._postProcesses) {
            return;
        }
        if (dispose) {
            for (const postProcess of this._postProcesses) {
                postProcess.dispose();
            }
        }
        this._postProcesses = [];
    }
    /**
     * Remove one of the post process from the list of attached post processes to the texture
     * @param postProcess define the post process to remove from the list
     */
    removePostProcess(postProcess) {
        if (!this._postProcesses) {
            return;
        }
        const index = this._postProcesses.indexOf(postProcess);
        if (index === -1) {
            return;
        }
        this._postProcesses.splice(index, 1);
        if (this._postProcesses.length > 0) {
            this._postProcesses[0].autoClear = false;
        }
    }
    /**
     * Resets the refresh counter of the texture and start bak from scratch.
     * Could be useful to regenerate the texture if it is setup to render only once.
     */
    resetRefreshCounter() {
        this._objectRenderer.resetRefreshCounter();
    }
    /**
     * Define the refresh rate of the texture or the rendering frequency.
     * Use 0 to render just once, 1 to render on every frame, 2 to render every two frames and so on...
     */
    get refreshRate() {
        return this._objectRenderer.refreshRate;
    }
    set refreshRate(value) {
        this._objectRenderer.refreshRate = value;
    }
    /** @internal */
    _shouldRender() {
        return this._objectRenderer.shouldRender();
    }
    /**
     * Gets the actual render size of the texture.
     * @returns the width of the render size
     */
    getRenderSize() {
        return this.getRenderWidth();
    }
    /**
     * Gets the actual render width of the texture.
     * @returns the width of the render size
     */
    getRenderWidth() {
        if (this._size.width) {
            return this._size.width;
        }
        return this._size;
    }
    /**
     * Gets the actual render height of the texture.
     * @returns the height of the render size
     */
    getRenderHeight() {
        if (this._size.width) {
            return this._size.height;
        }
        return this._size;
    }
    /**
     * Gets the actual number of layers of the texture or, in the case of a 3D texture, return the depth.
     * @returns the number of layers
     */
    getRenderLayers() {
        const layers = this._size.layers;
        if (layers) {
            return layers;
        }
        const depth = this._size.depth;
        if (depth) {
            return depth;
        }
        return 0;
    }
    /**
     * Don't allow this render target texture to rescale. Mainly used to prevent rescaling by the scene optimizer.
     */
    disableRescaling() {
        this._canRescale = false;
    }
    /**
     * Get if the texture can be rescaled or not.
     */
    get canRescale() {
        return this._canRescale;
    }
    /**
     * Resize the texture using a ratio.
     * @param ratio the ratio to apply to the texture size in order to compute the new target size
     */
    scale(ratio) {
        const newSize = Math.max(1, this.getRenderSize() * ratio);
        this.resize(newSize);
    }
    /**
     * Get the texture reflection matrix used to rotate/transform the reflection.
     * @returns the reflection matrix
     */
    getReflectionTextureMatrix() {
        if (this.isCube) {
            return this._textureMatrix;
        }
        return super.getReflectionTextureMatrix();
    }
    /**
     * Resize the texture to a new desired size.
     * Be careful as it will recreate all the data in the new texture.
     * @param size Define the new size. It can be:
     *   - a number for squared texture,
     *   - an object containing { width: number, height: number }
     *   - or an object containing a ratio { ratio: number }
     */
    resize(size) {
        const wasCube = this.isCube;
        this._renderTarget?.dispose();
        this._renderTarget = null;
        const scene = this.getScene();
        if (!scene) {
            return;
        }
        this._processSizeParameter(size);
        if (wasCube) {
            this._renderTarget = scene.getEngine().createRenderTargetCubeTexture(this.getRenderSize(), this._renderTargetOptions);
        }
        else {
            this._renderTarget = scene.getEngine().createRenderTargetTexture(this._size, this._renderTargetOptions);
        }
        this._texture = this._renderTarget.texture;
        if (this._renderTargetOptions.samples !== undefined) {
            this.samples = this._renderTargetOptions.samples;
        }
        if (this.onResizeObservable.hasObservers()) {
            this.onResizeObservable.notifyObservers(this);
        }
    }
    /**
     * Renders all the objects from the render list into the texture.
     * @param useCameraPostProcess Define if camera post processes should be used during the rendering
     * @param dumpForDebug Define if the rendering result should be dumped (copied) for debugging purpose
     */
    render(useCameraPostProcess = false, dumpForDebug = false) {
        this._render(useCameraPostProcess, dumpForDebug);
    }
    /**
     * This function will check if the render target texture can be rendered (textures are loaded, shaders are compiled)
     * @returns true if all required resources are ready
     */
    isReadyForRendering() {
        if (!this._dumpToolsLoading) {
            this._dumpToolsLoading = true;
            // avoid a static import to allow ignoring the import in some cases
            Promise.all(/* import() */[__webpack_require__.e(998), __webpack_require__.e(928)]).then(__webpack_require__.bind(__webpack_require__, 9928)).then((module) => (this._dumpTools = module));
        }
        this._objectRenderer.prepareRenderList();
        this.onBeforeBindObservable.notifyObservers(this);
        this._objectRenderer.initRender(this.getRenderWidth(), this.getRenderHeight());
        const isReady = this._objectRenderer._checkReadiness();
        this.onAfterUnbindObservable.notifyObservers(this);
        this._objectRenderer.finishRender();
        return isReady;
    }
    _render(useCameraPostProcess = false, dumpForDebug = false) {
        const scene = this.getScene();
        if (!scene) {
            return;
        }
        if (this.useCameraPostProcesses !== undefined) {
            useCameraPostProcess = this.useCameraPostProcesses;
        }
        this._objectRenderer.prepareRenderList();
        this.onBeforeBindObservable.notifyObservers(this);
        this._objectRenderer.initRender(this.getRenderWidth(), this.getRenderHeight());
        if ((this.is2DArray || this.is3D) && !this.isMulti) {
            for (let layer = 0; layer < this.getRenderLayers(); layer++) {
                this._renderToTarget(0, useCameraPostProcess, dumpForDebug, layer);
                scene.incrementRenderId();
                scene.resetCachedMaterial();
            }
        }
        else if (this.isCube && !this.isMulti) {
            for (let face = 0; face < 6; face++) {
                this._renderToTarget(face, useCameraPostProcess, dumpForDebug);
                scene.incrementRenderId();
                scene.resetCachedMaterial();
            }
        }
        else {
            this._renderToTarget(0, useCameraPostProcess, dumpForDebug);
        }
        this.onAfterUnbindObservable.notifyObservers(this);
        this._objectRenderer.finishRender();
    }
    _bestReflectionRenderTargetDimension(renderDimension, scale) {
        const minimum = 128;
        const x = renderDimension * scale;
        const curved = (0,tools_functions/* NearestPOT */.OG)(x + (minimum * minimum) / (minimum + x));
        // Ensure we don't exceed the render dimension (while staying POT)
        return Math.min((0,tools_functions/* FloorPOT */.C4)(renderDimension), curved);
    }
    /**
     * @internal
     * @param faceIndex face index to bind to if this is a cubetexture
     * @param layer defines the index of the texture to bind in the array
     */
    _bindFrameBuffer(faceIndex = 0, layer = 0) {
        const scene = this.getScene();
        if (!scene) {
            return;
        }
        const engine = scene.getEngine();
        if (this._renderTarget) {
            engine.bindFramebuffer(this._renderTarget, this.isCube ? faceIndex : undefined, undefined, undefined, this.ignoreCameraViewport, 0, layer);
        }
    }
    _unbindFrameBuffer(engine, faceIndex) {
        if (!this._renderTarget) {
            return;
        }
        engine.unBindFramebuffer(this._renderTarget, this.isCube, () => {
            this.onAfterRenderObservable.notifyObservers(faceIndex);
        });
    }
    /**
     * @internal
     */
    _prepareFrame(scene, faceIndex, layer, useCameraPostProcess) {
        if (this._postProcessManager) {
            if (!this._prePassEnabled) {
                this._postProcessManager._prepareFrame(this._texture, this._postProcesses);
            }
        }
        else if (!useCameraPostProcess || !scene.postProcessManager._prepareFrame(this._texture)) {
            this._bindFrameBuffer(faceIndex, layer);
        }
    }
    _renderToTarget(faceIndex, useCameraPostProcess, dumpForDebug, layer = 0) {
        const scene = this.getScene();
        if (!scene) {
            return;
        }
        const engine = scene.getEngine();
        this._currentFaceIndex = faceIndex;
        this._currentLayer = layer;
        this._currentUseCameraPostProcess = useCameraPostProcess;
        this._currentDumpForDebug = dumpForDebug;
        this._prepareFrame(scene, faceIndex, layer, useCameraPostProcess);
        engine._debugPushGroup?.(`render to face #${faceIndex} layer #${layer}`, 2);
        this._objectRenderer.render(faceIndex + layer, true); // only faceIndex or layer (if any) will be different from 0 (we don't support array of cubes), so it's safe to add them to get the pass index
        engine._debugPopGroup?.(2);
        this._unbindFrameBuffer(engine, faceIndex);
        if (this._texture && this.isCube && faceIndex === 5) {
            engine.generateMipMapsForCubemap(this._texture, true);
        }
    }
    /**
     * Overrides the default sort function applied in the rendering group to prepare the meshes.
     * This allowed control for front to back rendering or reversely depending of the special needs.
     *
     * @param renderingGroupId The rendering group id corresponding to its index
     * @param opaqueSortCompareFn The opaque queue comparison function use to sort.
     * @param alphaTestSortCompareFn The alpha test queue comparison function use to sort.
     * @param transparentSortCompareFn The transparent queue comparison function use to sort.
     */
    setRenderingOrder(renderingGroupId, opaqueSortCompareFn = null, alphaTestSortCompareFn = null, transparentSortCompareFn = null) {
        this._objectRenderer.setRenderingOrder(renderingGroupId, opaqueSortCompareFn, alphaTestSortCompareFn, transparentSortCompareFn);
    }
    /**
     * Specifies whether or not the stencil and depth buffer are cleared between two rendering groups.
     *
     * @param renderingGroupId The rendering group id corresponding to its index
     * @param autoClearDepthStencil Automatically clears depth and stencil between groups if true.
     */
    setRenderingAutoClearDepthStencil(renderingGroupId, autoClearDepthStencil) {
        this._objectRenderer.setRenderingAutoClearDepthStencil(renderingGroupId, autoClearDepthStencil);
    }
    /**
     * Clones the texture.
     * @returns the cloned texture
     */
    clone() {
        const textureSize = this.getSize();
        const newTexture = new RenderTargetTexture(this.name, textureSize, this.getScene(), this._renderTargetOptions.generateMipMaps, this._doNotChangeAspectRatio, this._renderTargetOptions.type, this.isCube, this._renderTargetOptions.samplingMode, this._renderTargetOptions.generateDepthBuffer, this._renderTargetOptions.generateStencilBuffer, undefined, this._renderTargetOptions.format, undefined, this._renderTargetOptions.samples);
        // Base texture
        newTexture.hasAlpha = this.hasAlpha;
        newTexture.level = this.level;
        // RenderTarget Texture
        newTexture.coordinatesMode = this.coordinatesMode;
        if (this.renderList) {
            newTexture.renderList = this.renderList.slice(0);
        }
        return newTexture;
    }
    /**
     * Serialize the texture to a JSON representation we can easily use in the respective Parse function.
     * @returns The JSON representation of the texture
     */
    serialize() {
        if (!this.name) {
            return null;
        }
        const serializationObject = super.serialize();
        serializationObject.renderTargetSize = this.getRenderSize();
        serializationObject.renderList = [];
        if (this.renderList) {
            for (let index = 0; index < this.renderList.length; index++) {
                serializationObject.renderList.push(this.renderList[index].id);
            }
        }
        return serializationObject;
    }
    /**
     *  This will remove the attached framebuffer objects. The texture will not be able to be used as render target anymore
     */
    disposeFramebufferObjects() {
        this._renderTarget?.dispose(true);
    }
    /**
     * Release and destroy the underlying lower level texture aka internalTexture.
     */
    releaseInternalTexture() {
        this._renderTarget?.releaseTextures();
        this._texture = null;
    }
    /**
     * Dispose the texture and release its associated resources.
     */
    dispose() {
        this.onResizeObservable.clear();
        this.onClearObservable.clear();
        this.onAfterUnbindObservable.clear();
        this.onBeforeBindObservable.clear();
        if (this._postProcessManager) {
            this._postProcessManager.dispose();
            this._postProcessManager = null;
        }
        if (this._prePassRenderTarget) {
            this._prePassRenderTarget.dispose();
        }
        this._objectRenderer.onBeforeRenderingManagerRenderObservable.remove(this._onBeforeRenderingManagerRenderObserver);
        this._objectRenderer.onAfterRenderingManagerRenderObservable.remove(this._onAfterRenderingManagerRenderObserver);
        this._objectRenderer.onFastPathRenderObservable.remove(this._onFastPathRenderObserver);
        if (!this._dontDisposeObjectRenderer) {
            this._objectRenderer.dispose();
        }
        this.clearPostProcesses(true);
        if (this._resizeObserver) {
            this.getScene().getEngine().onResizeObservable.remove(this._resizeObserver);
            this._resizeObserver = null;
        }
        // Remove from custom render targets
        const scene = this.getScene();
        if (!scene) {
            return;
        }
        let index = scene.customRenderTargets.indexOf(this);
        if (index >= 0) {
            scene.customRenderTargets.splice(index, 1);
        }
        for (const camera of scene.cameras) {
            index = camera.customRenderTargets.indexOf(this);
            if (index >= 0) {
                camera.customRenderTargets.splice(index, 1);
            }
        }
        this._renderTarget?.dispose();
        this._renderTarget = null;
        this._texture = null;
        super.dispose();
    }
    /** @internal */
    _rebuild() {
        this._objectRenderer._rebuild();
        if (this._postProcessManager) {
            this._postProcessManager._rebuild();
        }
    }
    /**
     * Clear the info related to rendering groups preventing retention point in material dispose.
     */
    freeRenderingGroups() {
        this._objectRenderer.freeRenderingGroups();
    }
    /**
     * Gets the number of views the corresponding to the texture (eg. a MultiviewRenderTarget will have > 1)
     * @returns the view count
     */
    getViewCount() {
        return 1;
    }
}
/**
 * The texture will only be rendered once which can be useful to improve performance if everything in your render is static for instance.
 */
RenderTargetTexture.REFRESHRATE_RENDER_ONCE = ObjectRenderer.REFRESHRATE_RENDER_ONCE;
/**
 * The texture will be rendered every frame and is recommended for dynamic contents.
 */
RenderTargetTexture.REFRESHRATE_RENDER_ONEVERYFRAME = ObjectRenderer.REFRESHRATE_RENDER_ONEVERYFRAME;
/**
 * The texture will be rendered every 2 frames which could be enough if your dynamic objects are not
 * the central point of your effect and can save a lot of performances.
 */
RenderTargetTexture.REFRESHRATE_RENDER_ONEVERYTWOFRAMES = ObjectRenderer.REFRESHRATE_RENDER_ONEVERYTWOFRAMES;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
texture/* Texture */.g._CreateRenderTargetTexture = (name, renderTargetSize, scene, generateMipMaps, creationFlags) => {
    return new RenderTargetTexture(name, renderTargetSize, scene, generateMipMaps);
};
//# sourceMappingURL=renderTargetTexture.js.map

/***/ }),

/***/ 5476:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   E: () => (/* binding */ DrawWrapper)
/* harmony export */ });
/* harmony import */ var _Misc_timingTools_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2940);

/** @internal */
class DrawWrapper {
    static GetEffect(effect) {
        return effect.getPipelineContext === undefined ? effect.effect : effect;
    }
    constructor(engine, createMaterialContext = true) {
        /**
         * @internal
         * Specifies if the effect was previously ready
         */
        this._wasPreviouslyReady = false;
        /**
         * @internal
         * Forces the code from bindForSubMesh to be fully run the next time it is called
         */
        this._forceRebindOnNextCall = true;
        /**
         * @internal
         * Specifies if the effect was previously using instances
         */
        this._wasPreviouslyUsingInstances = null;
        this.effect = null;
        this.defines = null;
        this.drawContext = engine.createDrawContext();
        if (createMaterialContext) {
            this.materialContext = engine.createMaterialContext();
        }
    }
    setEffect(effect, defines, resetContext = true) {
        this.effect = effect;
        if (defines !== undefined) {
            this.defines = defines;
        }
        if (resetContext) {
            this.drawContext?.reset();
        }
    }
    /**
     * Dispose the effect wrapper and its resources
     * @param immediate if the effect should be disposed immediately or on the next frame.
     * If dispose() is not called during a scene or engine dispose, we want to delay the dispose of the underlying effect. Mostly to give a chance to user code to reuse the effect in some way.
     */
    dispose(immediate = false) {
        if (this.effect) {
            const effect = this.effect;
            if (immediate) {
                effect.dispose();
            }
            else {
                _Misc_timingTools_js__WEBPACK_IMPORTED_MODULE_0__/* .TimingTools */ ._.SetImmediate(() => {
                    effect.getEngine().onEndFrameObservable.addOnce(() => {
                        effect.dispose();
                    });
                });
            }
            this.effect = null;
        }
        this.drawContext?.dispose();
    }
}
//# sourceMappingURL=drawWrapper.js.map

/***/ }),

/***/ 4255:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $: () => (/* binding */ EffectWrapper),
/* harmony export */   J: () => (/* binding */ EffectRenderer)
/* harmony export */ });
/* harmony import */ var _Buffers_buffer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5616);
/* harmony import */ var _Maths_math_viewport_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4494);
/* harmony import */ var _Misc_observable_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9848);
/* harmony import */ var _effect_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4420);
/* harmony import */ var _drawWrapper_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5476);
/* harmony import */ var _Shaders_postprocess_vertex_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6612);






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
        this._fullscreenViewport = new _Maths_math_viewport_js__WEBPACK_IMPORTED_MODULE_1__/* .Viewport */ .L(0, 0, 1, 1);
        const positions = options.positions ?? defaultOptions.positions;
        const indices = options.indices ?? defaultOptions.indices;
        this.engine = engine;
        this._vertexBuffers = {
            [_Buffers_buffer_js__WEBPACK_IMPORTED_MODULE_0__/* .VertexBuffer */ .R.PositionKind]: new _Buffers_buffer_js__WEBPACK_IMPORTED_MODULE_0__/* .VertexBuffer */ .R(engine, positions, _Buffers_buffer_js__WEBPACK_IMPORTED_MODULE_0__/* .VertexBuffer */ .R.PositionKind, false, false, 2),
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
        this.engine.enableEffect(effectWrapper.drawWrapper);
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
     * @param outputTexture texture to draw to, if null it will render to the currently bound frame buffer
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
        const vertexBuffer = this._vertexBuffers[_Buffers_buffer_js__WEBPACK_IMPORTED_MODULE_0__/* .VertexBuffer */ .R.PositionKind];
        if (vertexBuffer) {
            vertexBuffer.dispose();
            delete this._vertexBuffers[_Buffers_buffer_js__WEBPACK_IMPORTED_MODULE_0__/* .VertexBuffer */ .R.PositionKind];
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
     * Registers a shader code processing with an effect wrapper name.
     * @param effectWrapperName name of the effect wrapper. Use null for the fallback shader code processing. This is the shader code processing that will be used in case no specific shader code processing has been associated to an effect wrapper name
     * @param customShaderCodeProcessing shader code processing to associate to the effect wrapper name
     */
    static RegisterShaderCodeProcessing(effectWrapperName, customShaderCodeProcessing) {
        if (!customShaderCodeProcessing) {
            delete EffectWrapper._CustomShaderCodeProcessing[effectWrapperName ?? ""];
            return;
        }
        EffectWrapper._CustomShaderCodeProcessing[effectWrapperName ?? ""] = customShaderCodeProcessing;
    }
    static _GetShaderCodeProcessing(effectWrapperName) {
        return EffectWrapper._CustomShaderCodeProcessing[effectWrapperName] ?? EffectWrapper._CustomShaderCodeProcessing[""];
    }
    /**
     * Gets or sets the name of the effect wrapper
     */
    get name() {
        return this.options.name;
    }
    set name(value) {
        this.options.name = value;
    }
    /**
     * Get a value indicating if the effect is ready to be used
     * @returns true if the post-process is ready (shader is compiled)
     */
    isReady() {
        return this._drawWrapper.effect?.isReady() ?? false;
    }
    /**
     * Get the draw wrapper associated with the effect wrapper
     * @returns the draw wrapper associated with the effect wrapper
     */
    get drawWrapper() {
        return this._drawWrapper;
    }
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
     * Creates an effect to be rendered
     * @param creationOptions options to create the effect
     */
    constructor(creationOptions) {
        /**
         * Type of alpha mode to use when applying the effect (default: Engine.ALPHA_DISABLE). Used only if useAsPostProcess is true.
         */
        this.alphaMode = 0;
        /**
         * Executed when the effect is created
         * @returns effect that was created for this effect wrapper
         */
        this.onEffectCreatedObservable = new _Misc_observable_js__WEBPACK_IMPORTED_MODULE_2__/* .Observable */ .cP(undefined, true);
        /**
         * Event that is fired (only when the EffectWrapper is used with an EffectRenderer) right before the effect is drawn (should be used to update uniforms)
         */
        this.onApplyObservable = new _Misc_observable_js__WEBPACK_IMPORTED_MODULE_2__/* .Observable */ .cP();
        this._shadersLoaded = false;
        /** @internal */
        this._webGPUReady = false;
        this._importPromises = [];
        this.options = {
            ...creationOptions,
            name: creationOptions.name || "effectWrapper",
            engine: creationOptions.engine,
            uniforms: creationOptions.uniforms || creationOptions.uniformNames || [],
            uniformNames: undefined,
            samplers: creationOptions.samplers || creationOptions.samplerNames || [],
            samplerNames: undefined,
            attributeNames: creationOptions.attributeNames || ["position"],
            uniformBuffers: creationOptions.uniformBuffers || [],
            defines: creationOptions.defines || "",
            useShaderStore: creationOptions.useShaderStore || false,
            vertexUrl: creationOptions.vertexUrl || creationOptions.vertexShader || "postprocess",
            vertexShader: undefined,
            fragmentShader: creationOptions.fragmentShader || "pass",
            indexParameters: creationOptions.indexParameters,
            blockCompilation: creationOptions.blockCompilation || false,
            shaderLanguage: creationOptions.shaderLanguage || 0 /* ShaderLanguage.GLSL */,
            onCompiled: creationOptions.onCompiled || undefined,
            extraInitializations: creationOptions.extraInitializations || undefined,
            extraInitializationsAsync: creationOptions.extraInitializationsAsync || undefined,
            useAsPostProcess: creationOptions.useAsPostProcess ?? false,
        };
        this.options.uniformNames = this.options.uniforms;
        this.options.samplerNames = this.options.samplers;
        this.options.vertexShader = this.options.vertexUrl;
        if (this.options.useAsPostProcess) {
            if (this.options.samplers.indexOf("textureSampler") === -1) {
                this.options.samplers.push("textureSampler");
            }
            if (this.options.uniforms.indexOf("scale") === -1) {
                this.options.uniforms.push("scale");
            }
        }
        if (creationOptions.vertexUrl || creationOptions.vertexShader) {
            this._shaderPath = {
                vertexSource: this.options.vertexShader,
            };
        }
        else {
            if (!this.options.useAsPostProcess) {
                this.options.uniforms.push("scale");
                this.onApplyObservable.add(() => {
                    this.effect.setFloat2("scale", 1, 1);
                });
            }
            this._shaderPath = {
                vertex: this.options.vertexShader,
            };
        }
        this._shaderPath.fragmentSource = this.options.fragmentShader;
        this._shaderPath.spectorName = this.options.name;
        if (this.options.useShaderStore) {
            this._shaderPath.fragment = this._shaderPath.fragmentSource;
            if (!this._shaderPath.vertex) {
                this._shaderPath.vertex = this._shaderPath.vertexSource;
            }
            delete this._shaderPath.fragmentSource;
            delete this._shaderPath.vertexSource;
        }
        this.onApplyObservable.add(() => {
            this.bind();
        });
        if (!this.options.useShaderStore) {
            this._onContextRestoredObserver = this.options.engine.onContextRestoredObservable.add(() => {
                this.effect._pipelineContext = null; // because _prepareEffect will try to dispose this pipeline before recreating it and that would lead to webgl errors
                this.effect._prepareEffect();
            });
        }
        this._drawWrapper = new _drawWrapper_js__WEBPACK_IMPORTED_MODULE_4__/* .DrawWrapper */ .E(this.options.engine);
        this._webGPUReady = this.options.shaderLanguage === 1 /* ShaderLanguage.WGSL */;
        const defines = Array.isArray(this.options.defines) ? this.options.defines.join("\n") : this.options.defines;
        this._postConstructor(this.options.blockCompilation, defines, this.options.extraInitializations);
    }
    _gatherImports(useWebGPU = false, list) {
        if (!this.options.useAsPostProcess) {
            return;
        }
        // this._webGPUReady is used to detect when an effect wrapper is intended to be used with WebGPU
        if (useWebGPU && this._webGPUReady) {
            list.push(Promise.all([__webpack_require__.e(/* import() */ 126).then(__webpack_require__.bind(__webpack_require__, 2083))]));
        }
        else {
            list.push(Promise.all([Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 6612))]));
        }
    }
    /** @internal */
    _postConstructor(blockCompilation, defines = null, extraInitializations, importPromises) {
        this._importPromises.length = 0;
        if (importPromises) {
            this._importPromises.push(...importPromises);
        }
        const useWebGPU = this.options.engine.isWebGPU && !EffectWrapper.ForceGLSL;
        this._gatherImports(useWebGPU, this._importPromises);
        if (extraInitializations !== undefined) {
            extraInitializations(useWebGPU, this._importPromises);
        }
        if (useWebGPU && this._webGPUReady) {
            this.options.shaderLanguage = 1 /* ShaderLanguage.WGSL */;
        }
        if (!blockCompilation) {
            this.updateEffect(defines);
        }
    }
    /**
     * Updates the effect with the current effect wrapper compile time values and recompiles the shader.
     * @param defines Define statements that should be added at the beginning of the shader. (default: null)
     * @param uniforms Set of uniform variables that will be passed to the shader. (default: null)
     * @param samplers Set of Texture2D variables that will be passed to the shader. (default: null)
     * @param indexParameters The index parameters to be used for babylons include syntax "#include<kernelBlurVaryingDeclaration>[0..varyingCount]". (default: undefined) See usage in babylon.blurPostProcess.ts and kernelBlur.vertex.fx
     * @param onCompiled Called when the shader has been compiled.
     * @param onError Called if there is an error when compiling a shader.
     * @param vertexUrl The url of the vertex shader to be used (default: the one given at construction time)
     * @param fragmentUrl The url of the fragment shader to be used (default: the one given at construction time)
     */
    updateEffect(defines = null, uniforms = null, samplers = null, indexParameters, onCompiled, onError, vertexUrl, fragmentUrl) {
        const customShaderCodeProcessing = EffectWrapper._GetShaderCodeProcessing(this.name);
        if (customShaderCodeProcessing?.defineCustomBindings) {
            const newUniforms = uniforms?.slice() ?? [];
            newUniforms.push(...this.options.uniforms);
            const newSamplers = samplers?.slice() ?? [];
            newSamplers.push(...this.options.samplers);
            defines = customShaderCodeProcessing.defineCustomBindings(this.name, defines, newUniforms, newSamplers);
            uniforms = newUniforms;
            samplers = newSamplers;
        }
        this.options.defines = defines || "";
        const waitImportsLoaded = this._shadersLoaded || this._importPromises.length === 0
            ? undefined
            : async () => {
                await Promise.all(this._importPromises);
                this._shadersLoaded = true;
            };
        let extraInitializationsAsync;
        if (this.options.extraInitializationsAsync) {
            extraInitializationsAsync = async () => {
                waitImportsLoaded?.();
                await this.options.extraInitializationsAsync;
            };
        }
        else {
            extraInitializationsAsync = waitImportsLoaded;
        }
        if (this.options.useShaderStore) {
            this._drawWrapper.effect = this.options.engine.createEffect({ vertex: vertexUrl ?? this._shaderPath.vertex, fragment: fragmentUrl ?? this._shaderPath.fragment }, {
                attributes: this.options.attributeNames,
                uniformsNames: uniforms || this.options.uniforms,
                uniformBuffersNames: this.options.uniformBuffers,
                samplers: samplers || this.options.samplers,
                defines: defines !== null ? defines : "",
                fallbacks: null,
                onCompiled: onCompiled ?? this.options.onCompiled,
                onError: onError ?? null,
                indexParameters: indexParameters || this.options.indexParameters,
                processCodeAfterIncludes: customShaderCodeProcessing?.processCodeAfterIncludes
                    ? (shaderType, code) => customShaderCodeProcessing.processCodeAfterIncludes(this.name, shaderType, code)
                    : null,
                processFinalCode: customShaderCodeProcessing?.processFinalCode
                    ? (shaderType, code) => customShaderCodeProcessing.processFinalCode(this.name, shaderType, code)
                    : null,
                shaderLanguage: this.options.shaderLanguage,
                extraInitializationsAsync,
            }, this.options.engine);
        }
        else {
            this._drawWrapper.effect = new _effect_js__WEBPACK_IMPORTED_MODULE_3__/* .Effect */ .M(this._shaderPath, this.options.attributeNames, uniforms || this.options.uniforms, samplers || this.options.samplerNames, this.options.engine, defines, undefined, onCompiled || this.options.onCompiled, undefined, undefined, undefined, this.options.shaderLanguage, extraInitializationsAsync);
        }
        this.onEffectCreatedObservable.notifyObservers(this._drawWrapper.effect);
    }
    /**
     * Binds the data to the effect.
     */
    bind() {
        if (this.options.useAsPostProcess) {
            this.options.engine.setAlphaMode(this.alphaMode);
            this.drawWrapper.effect.setFloat2("scale", 1, 1);
        }
        EffectWrapper._GetShaderCodeProcessing(this.name)?.bindCustomBindings?.(this.name, this._drawWrapper.effect);
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
        this.onEffectCreatedObservable.clear();
        this._drawWrapper.dispose(true);
    }
}
/**
 * Force code to compile to glsl even on WebGPU engines.
 * False by default. This is mostly meant for backward compatibility.
 */
EffectWrapper.ForceGLSL = false;
EffectWrapper._CustomShaderCodeProcessing = {};
//# sourceMappingURL=effectRenderer.js.map

/***/ }),

/***/ 7931:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   L: () => (/* binding */ SmartArray),
/* harmony export */   b: () => (/* binding */ SmartArrayNoDuplicate)
/* harmony export */ });
/**
 * Defines an GC Friendly array where the backfield array do not shrink to prevent over allocations.
 */
class SmartArray {
    /**
     * Instantiates a Smart Array.
     * @param capacity defines the default capacity of the array.
     */
    constructor(capacity) {
        /**
         * The active length of the array.
         */
        this.length = 0;
        this.data = new Array(capacity);
        this._id = SmartArray._GlobalId++;
    }
    /**
     * Pushes a value at the end of the active data.
     * @param value defines the object to push in the array.
     */
    push(value) {
        this.data[this.length++] = value;
        if (this.length > this.data.length) {
            this.data.length *= 2;
        }
    }
    /**
     * Iterates over the active data and apply the lambda to them.
     * @param func defines the action to apply on each value.
     */
    forEach(func) {
        for (let index = 0; index < this.length; index++) {
            func(this.data[index]);
        }
    }
    /**
     * Sorts the full sets of data.
     * @param compareFn defines the comparison function to apply.
     */
    sort(compareFn) {
        this.data.sort(compareFn);
    }
    /**
     * Resets the active data to an empty array.
     */
    reset() {
        this.length = 0;
    }
    /**
     * Releases all the data from the array as well as the array.
     */
    dispose() {
        this.reset();
        if (this.data) {
            this.data.length = 0;
        }
    }
    /**
     * Concats the active data with a given array.
     * @param array defines the data to concatenate with.
     */
    concat(array) {
        if (array.length === 0) {
            return;
        }
        if (this.length + array.length > this.data.length) {
            this.data.length = (this.length + array.length) * 2;
        }
        for (let index = 0; index < array.length; index++) {
            this.data[this.length++] = (array.data || array)[index];
        }
    }
    /**
     * Returns the position of a value in the active data.
     * @param value defines the value to find the index for
     * @returns the index if found in the active data otherwise -1
     */
    indexOf(value) {
        const position = this.data.indexOf(value);
        if (position >= this.length) {
            return -1;
        }
        return position;
    }
    /**
     * Returns whether an element is part of the active data.
     * @param value defines the value to look for
     * @returns true if found in the active data otherwise false
     */
    contains(value) {
        return this.indexOf(value) !== -1;
    }
}
// Statics
SmartArray._GlobalId = 0;
/**
 * Defines an GC Friendly array where the backfield array do not shrink to prevent over allocations.
 * The data in this array can only be present once
 */
class SmartArrayNoDuplicate extends SmartArray {
    constructor() {
        super(...arguments);
        this._duplicateId = 0;
    }
    /**
     * Pushes a value at the end of the active data.
     * THIS DOES NOT PREVENT DUPPLICATE DATA
     * @param value defines the object to push in the array.
     */
    push(value) {
        super.push(value);
        if (!value.__smartArrayFlags) {
            value.__smartArrayFlags = {};
        }
        value.__smartArrayFlags[this._id] = this._duplicateId;
    }
    /**
     * Pushes a value at the end of the active data.
     * If the data is already present, it won t be added again
     * @param value defines the object to push in the array.
     * @returns true if added false if it was already present
     */
    pushNoDuplicate(value) {
        if (value.__smartArrayFlags && value.__smartArrayFlags[this._id] === this._duplicateId) {
            return false;
        }
        this.push(value);
        return true;
    }
    /**
     * Resets the active data to an empty array.
     */
    reset() {
        super.reset();
        this._duplicateId++;
    }
    /**
     * Concats the active data with a given array.
     * This ensures no duplicate will be present in the result.
     * @param array defines the data to concatenate with.
     */
    concatWithNoDuplicate(array) {
        if (array.length === 0) {
            return;
        }
        if (this.length + array.length > this.data.length) {
            this.data.length = (this.length + array.length) * 2;
        }
        for (let index = 0; index < array.length; index++) {
            const item = (array.data || array)[index];
            this.pushNoDuplicate(item);
        }
    }
}
//# sourceMappingURL=smartArray.js.map

/***/ }),

/***/ 7891:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   w: () => (/* binding */ PostProcess)
/* harmony export */ });
/* harmony import */ var _tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5524);
/* harmony import */ var _Misc_smartArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7931);
/* harmony import */ var _Misc_observable_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9848);
/* harmony import */ var _Maths_math_vector_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9923);
/* harmony import */ var _Materials_effect_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4420);
/* harmony import */ var _Misc_decorators_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9259);
/* harmony import */ var _Misc_decorators_serialization_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6877);
/* harmony import */ var _Misc_typeStore_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6552);
/* harmony import */ var _Engines_abstractEngine_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6326);
/* harmony import */ var _Misc_tools_functions_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1597);
/* harmony import */ var _Materials_effectRenderer_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4255);












_Engines_abstractEngine_js__WEBPACK_IMPORTED_MODULE_8__/* .AbstractEngine */ .$.prototype.setTextureFromPostProcess = function (channel, postProcess, name) {
    let postProcessInput = null;
    if (postProcess) {
        if (postProcess._forcedOutputTexture) {
            postProcessInput = postProcess._forcedOutputTexture;
        }
        else if (postProcess._textures.data[postProcess._currentRenderTextureInd]) {
            postProcessInput = postProcess._textures.data[postProcess._currentRenderTextureInd];
        }
    }
    this._bindTexture(channel, postProcessInput?.texture ?? null, name);
};
_Engines_abstractEngine_js__WEBPACK_IMPORTED_MODULE_8__/* .AbstractEngine */ .$.prototype.setTextureFromPostProcessOutput = function (channel, postProcess, name) {
    this._bindTexture(channel, postProcess?._outputTexture?.texture ?? null, name);
};
/**
 * Sets a texture to be the input of the specified post process. (To use the output, pass in the next post process in the pipeline)
 * @param channel Name of the sampler variable.
 * @param postProcess Post process to get the input texture from.
 */
_Materials_effect_js__WEBPACK_IMPORTED_MODULE_4__/* .Effect */ .M.prototype.setTextureFromPostProcess = function (channel, postProcess) {
    this._engine.setTextureFromPostProcess(this._samplers[channel], postProcess, channel);
};
/**
 * (Warning! setTextureFromPostProcessOutput may be desired instead)
 * Sets the input texture of the passed in post process to be input of this effect. (To use the output of the passed in post process use setTextureFromPostProcessOutput)
 * @param channel Name of the sampler variable.
 * @param postProcess Post process to get the output texture from.
 */
_Materials_effect_js__WEBPACK_IMPORTED_MODULE_4__/* .Effect */ .M.prototype.setTextureFromPostProcessOutput = function (channel, postProcess) {
    this._engine.setTextureFromPostProcessOutput(this._samplers[channel], postProcess, channel);
};
/**
 * PostProcess can be used to apply a shader to a texture after it has been rendered
 * See https://doc.babylonjs.com/features/featuresDeepDive/postProcesses/usePostProcesses
 */
class PostProcess {
    /**
     * Force all the postprocesses to compile to glsl even on WebGPU engines.
     * False by default. This is mostly meant for backward compatibility.
     */
    static get ForceGLSL() {
        return _Materials_effectRenderer_js__WEBPACK_IMPORTED_MODULE_10__/* .EffectWrapper */ .$.ForceGLSL;
    }
    static set ForceGLSL(force) {
        _Materials_effectRenderer_js__WEBPACK_IMPORTED_MODULE_10__/* .EffectWrapper */ .$.ForceGLSL = force;
    }
    /**
     * Registers a shader code processing with a post process name.
     * @param postProcessName name of the post process. Use null for the fallback shader code processing. This is the shader code processing that will be used in case no specific shader code processing has been associated to a post process name
     * @param customShaderCodeProcessing shader code processing to associate to the post process name
     */
    static RegisterShaderCodeProcessing(postProcessName, customShaderCodeProcessing) {
        _Materials_effectRenderer_js__WEBPACK_IMPORTED_MODULE_10__/* .EffectWrapper */ .$.RegisterShaderCodeProcessing(postProcessName, customShaderCodeProcessing);
    }
    /** Name of the PostProcess. */
    get name() {
        return this._effectWrapper.name;
    }
    set name(value) {
        this._effectWrapper.name = value;
    }
    /**
     * Type of alpha mode to use when performing the post process (default: Engine.ALPHA_DISABLE)
     */
    get alphaMode() {
        return this._effectWrapper.alphaMode;
    }
    set alphaMode(value) {
        this._effectWrapper.alphaMode = value;
    }
    /**
     * Number of sample textures (default: 1)
     */
    get samples() {
        return this._samples;
    }
    set samples(n) {
        this._samples = Math.min(n, this._engine.getCaps().maxMSAASamples);
        this._textures.forEach((texture) => {
            texture.setSamples(this._samples);
        });
    }
    /**
     * Gets the shader language type used to generate vertex and fragment source code.
     */
    get shaderLanguage() {
        return this._shaderLanguage;
    }
    /**
     * Returns the fragment url or shader name used in the post process.
     * @returns the fragment url or name in the shader store.
     */
    getEffectName() {
        return this._fragmentUrl;
    }
    /**
     * A function that is added to the onActivateObservable
     */
    set onActivate(callback) {
        if (this._onActivateObserver) {
            this.onActivateObservable.remove(this._onActivateObserver);
        }
        if (callback) {
            this._onActivateObserver = this.onActivateObservable.add(callback);
        }
    }
    /**
     * A function that is added to the onSizeChangedObservable
     */
    set onSizeChanged(callback) {
        if (this._onSizeChangedObserver) {
            this.onSizeChangedObservable.remove(this._onSizeChangedObserver);
        }
        this._onSizeChangedObserver = this.onSizeChangedObservable.add(callback);
    }
    /**
     * A function that is added to the onApplyObservable
     */
    set onApply(callback) {
        if (this._onApplyObserver) {
            this.onApplyObservable.remove(this._onApplyObserver);
        }
        this._onApplyObserver = this.onApplyObservable.add(callback);
    }
    /**
     * A function that is added to the onBeforeRenderObservable
     */
    set onBeforeRender(callback) {
        if (this._onBeforeRenderObserver) {
            this.onBeforeRenderObservable.remove(this._onBeforeRenderObserver);
        }
        this._onBeforeRenderObserver = this.onBeforeRenderObservable.add(callback);
    }
    /**
     * A function that is added to the onAfterRenderObservable
     */
    set onAfterRender(callback) {
        if (this._onAfterRenderObserver) {
            this.onAfterRenderObservable.remove(this._onAfterRenderObserver);
        }
        this._onAfterRenderObserver = this.onAfterRenderObservable.add(callback);
    }
    /**
     * The input texture for this post process and the output texture of the previous post process. When added to a pipeline the previous post process will
     * render it's output into this texture and this texture will be used as textureSampler in the fragment shader of this post process.
     */
    get inputTexture() {
        return this._textures.data[this._currentRenderTextureInd];
    }
    set inputTexture(value) {
        this._forcedOutputTexture = value;
    }
    /**
     * Since inputTexture should always be defined, if we previously manually set `inputTexture`,
     * the only way to unset it is to use this function to restore its internal state
     */
    restoreDefaultInputTexture() {
        if (this._forcedOutputTexture) {
            this._forcedOutputTexture = null;
            this.markTextureDirty();
        }
    }
    /**
     * Gets the camera which post process is applied to.
     * @returns The camera the post process is applied to.
     */
    getCamera() {
        return this._camera;
    }
    /**
     * Gets the texel size of the postprocess.
     * See https://en.wikipedia.org/wiki/Texel_(graphics)
     */
    get texelSize() {
        if (this._shareOutputWithPostProcess) {
            return this._shareOutputWithPostProcess.texelSize;
        }
        if (this._forcedOutputTexture) {
            this._texelSize.copyFromFloats(1.0 / this._forcedOutputTexture.width, 1.0 / this._forcedOutputTexture.height);
        }
        return this._texelSize;
    }
    /** @internal */
    constructor(name, fragmentUrl, parameters, samplers, _size, camera, samplingMode = 1, engine, reusable, defines = null, textureType = 0, vertexUrl = "postprocess", indexParameters, blockCompilation = false, textureFormat = 5, shaderLanguage, extraInitializations) {
        /** @internal */
        this._parentContainer = null;
        /**
         * Width of the texture to apply the post process on
         */
        this.width = -1;
        /**
         * Height of the texture to apply the post process on
         */
        this.height = -1;
        /**
         * Gets the node material used to create this postprocess (null if the postprocess was manually created)
         */
        this.nodeMaterialSource = null;
        /**
         * Internal, reference to the location where this postprocess was output to. (Typically the texture on the next postprocess in the chain)
         * @internal
         */
        this._outputTexture = null;
        /**
         * If the buffer needs to be cleared before applying the post process. (default: true)
         * Should be set to false if shader will overwrite all previous pixels.
         */
        this.autoClear = true;
        /**
         * If clearing the buffer should be forced in autoClear mode, even when alpha mode is enabled (default: false).
         * By default, the buffer will only be cleared if alpha mode is disabled (and autoClear is true).
         */
        this.forceAutoClearInAlphaMode = false;
        /**
         * Animations to be used for the post processing
         */
        this.animations = [];
        /**
         * Enable Pixel Perfect mode where texture is not scaled to be power of 2.
         * Can only be used on a single postprocess or on the last one of a chain. (default: false)
         */
        this.enablePixelPerfectMode = false;
        /**
         * Force the postprocess to be applied without taking in account viewport
         */
        this.forceFullscreenViewport = true;
        /**
         * Scale mode for the post process (default: Engine.SCALEMODE_FLOOR)
         *
         * | Value | Type                                | Description |
         * | ----- | ----------------------------------- | ----------- |
         * | 1     | SCALEMODE_FLOOR                     | [engine.scalemode_floor](https://doc.babylonjs.com/api/classes/babylon.engine#scalemode_floor) |
         * | 2     | SCALEMODE_NEAREST                   | [engine.scalemode_nearest](https://doc.babylonjs.com/api/classes/babylon.engine#scalemode_nearest) |
         * | 3     | SCALEMODE_CEILING                   | [engine.scalemode_ceiling](https://doc.babylonjs.com/api/classes/babylon.engine#scalemode_ceiling) |
         *
         */
        this.scaleMode = 1;
        /**
         * Force textures to be a power of two (default: false)
         */
        this.alwaysForcePOT = false;
        this._samples = 1;
        /**
         * Modify the scale of the post process to be the same as the viewport (default: false)
         */
        this.adaptScaleToCurrentViewport = false;
        this._webGPUReady = false;
        this._reusable = false;
        this._renderId = 0;
        /**
         * if externalTextureSamplerBinding is true, the "apply" method won't bind the textureSampler texture, it is expected to be done by the "outside" (by the onApplyObservable observer most probably).
         * counter-productive in some cases because if the texture bound by "apply" is different from the currently texture bound, (the one set by the onApplyObservable observer, for eg) some
         * internal structures (materialContext) will be dirtified, which may impact performances
         */
        this.externalTextureSamplerBinding = false;
        /**
         * Smart array of input and output textures for the post process.
         * @internal
         */
        this._textures = new _Misc_smartArray_js__WEBPACK_IMPORTED_MODULE_1__/* .SmartArray */ .L(2);
        /**
         * Smart array of input and output textures for the post process.
         * @internal
         */
        this._textureCache = [];
        /**
         * The index in _textures that corresponds to the output texture.
         * @internal
         */
        this._currentRenderTextureInd = 0;
        this._scaleRatio = new _Maths_math_vector_js__WEBPACK_IMPORTED_MODULE_3__/* .Vector2 */ .I9(1, 1);
        this._texelSize = _Maths_math_vector_js__WEBPACK_IMPORTED_MODULE_3__/* .Vector2 */ .I9.Zero();
        // Events
        /**
         * An event triggered when the postprocess is activated.
         */
        this.onActivateObservable = new _Misc_observable_js__WEBPACK_IMPORTED_MODULE_2__/* .Observable */ .cP();
        /**
         * An event triggered when the postprocess changes its size.
         */
        this.onSizeChangedObservable = new _Misc_observable_js__WEBPACK_IMPORTED_MODULE_2__/* .Observable */ .cP();
        /**
         * An event triggered when the postprocess applies its effect.
         */
        this.onApplyObservable = new _Misc_observable_js__WEBPACK_IMPORTED_MODULE_2__/* .Observable */ .cP();
        /**
         * An event triggered before rendering the postprocess
         */
        this.onBeforeRenderObservable = new _Misc_observable_js__WEBPACK_IMPORTED_MODULE_2__/* .Observable */ .cP();
        /**
         * An event triggered after rendering the postprocess
         */
        this.onAfterRenderObservable = new _Misc_observable_js__WEBPACK_IMPORTED_MODULE_2__/* .Observable */ .cP();
        let size = 1;
        let uniformBuffers = null;
        let effectWrapper;
        if (parameters && !Array.isArray(parameters)) {
            const options = parameters;
            parameters = options.uniforms ?? null;
            samplers = options.samplers ?? null;
            size = options.size ?? 1;
            camera = options.camera ?? null;
            samplingMode = options.samplingMode ?? 1;
            engine = options.engine;
            reusable = options.reusable;
            defines = Array.isArray(options.defines) ? options.defines.join("\n") : (options.defines ?? null);
            textureType = options.textureType ?? 0;
            vertexUrl = options.vertexUrl ?? "postprocess";
            indexParameters = options.indexParameters;
            blockCompilation = options.blockCompilation ?? false;
            textureFormat = options.textureFormat ?? 5;
            shaderLanguage = options.shaderLanguage ?? 0 /* ShaderLanguage.GLSL */;
            uniformBuffers = options.uniformBuffers ?? null;
            extraInitializations = options.extraInitializations;
            effectWrapper = options.effectWrapper;
        }
        else if (_size) {
            if (typeof _size === "number") {
                size = _size;
            }
            else {
                size = { width: _size.width, height: _size.height };
            }
        }
        const useExistingThinPostProcess = !!effectWrapper;
        this._effectWrapper =
            effectWrapper ??
                new _Materials_effectRenderer_js__WEBPACK_IMPORTED_MODULE_10__/* .EffectWrapper */ .$({
                    name,
                    useShaderStore: true,
                    useAsPostProcess: true,
                    fragmentShader: fragmentUrl,
                    engine: engine || camera?.getScene().getEngine(),
                    uniforms: parameters,
                    samplers,
                    uniformBuffers,
                    defines,
                    vertexUrl,
                    indexParameters,
                    blockCompilation: true,
                    shaderLanguage,
                    extraInitializations: undefined,
                });
        this.name = name;
        this.onEffectCreatedObservable = this._effectWrapper.onEffectCreatedObservable;
        if (camera != null) {
            this._camera = camera;
            this._scene = camera.getScene();
            camera.attachPostProcess(this);
            this._engine = this._scene.getEngine();
            this._scene.postProcesses.push(this);
            this.uniqueId = this._scene.getUniqueId();
        }
        else if (engine) {
            this._engine = engine;
            this._engine.postProcesses.push(this);
        }
        this._options = size;
        this.renderTargetSamplingMode = samplingMode ? samplingMode : 1;
        this._reusable = reusable || false;
        this._textureType = textureType;
        this._textureFormat = textureFormat;
        this._shaderLanguage = shaderLanguage || 0 /* ShaderLanguage.GLSL */;
        this._samplers = samplers || [];
        if (this._samplers.indexOf("textureSampler") === -1) {
            this._samplers.push("textureSampler");
        }
        this._fragmentUrl = fragmentUrl;
        this._vertexUrl = vertexUrl;
        this._parameters = parameters || [];
        if (this._parameters.indexOf("scale") === -1) {
            this._parameters.push("scale");
        }
        this._uniformBuffers = uniformBuffers || [];
        this._indexParameters = indexParameters;
        if (!useExistingThinPostProcess) {
            this._webGPUReady = this._shaderLanguage === 1 /* ShaderLanguage.WGSL */;
            const importPromises = [];
            this._gatherImports(this._engine.isWebGPU && !PostProcess.ForceGLSL, importPromises);
            this._effectWrapper._webGPUReady = this._webGPUReady;
            this._effectWrapper._postConstructor(blockCompilation, defines, extraInitializations, importPromises);
        }
    }
    _gatherImports(useWebGPU = false, list) {
        // this._webGPUReady is used to detect when a postprocess is intended to be used with WebGPU
        if (useWebGPU && this._webGPUReady) {
            list.push(Promise.all([__webpack_require__.e(/* import() */ 126).then(__webpack_require__.bind(__webpack_require__, 2083))]));
        }
        else {
            list.push(Promise.all([Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 6612))]));
        }
    }
    /**
     * Gets a string identifying the name of the class
     * @returns "PostProcess" string
     */
    getClassName() {
        return "PostProcess";
    }
    /**
     * Gets the engine which this post process belongs to.
     * @returns The engine the post process was enabled with.
     */
    getEngine() {
        return this._engine;
    }
    /**
     * The effect that is created when initializing the post process.
     * @returns The created effect corresponding to the postprocess.
     */
    getEffect() {
        return this._effectWrapper.drawWrapper.effect;
    }
    /**
     * To avoid multiple redundant textures for multiple post process, the output the output texture for this post process can be shared with another.
     * @param postProcess The post process to share the output with.
     * @returns This post process.
     */
    shareOutputWith(postProcess) {
        this._disposeTextures();
        this._shareOutputWithPostProcess = postProcess;
        return this;
    }
    /**
     * Reverses the effect of calling shareOutputWith and returns the post process back to its original state.
     * This should be called if the post process that shares output with this post process is disabled/disposed.
     */
    useOwnOutput() {
        if (this._textures.length == 0) {
            this._textures = new _Misc_smartArray_js__WEBPACK_IMPORTED_MODULE_1__/* .SmartArray */ .L(2);
        }
        this._shareOutputWithPostProcess = null;
    }
    /**
     * Updates the effect with the current post process compile time values and recompiles the shader.
     * @param defines Define statements that should be added at the beginning of the shader. (default: null)
     * @param uniforms Set of uniform variables that will be passed to the shader. (default: null)
     * @param samplers Set of Texture2D variables that will be passed to the shader. (default: null)
     * @param indexParameters The index parameters to be used for babylons include syntax "#include<kernelBlurVaryingDeclaration>[0..varyingCount]". (default: undefined) See usage in babylon.blurPostProcess.ts and kernelBlur.vertex.fx
     * @param onCompiled Called when the shader has been compiled.
     * @param onError Called if there is an error when compiling a shader.
     * @param vertexUrl The url of the vertex shader to be used (default: the one given at construction time)
     * @param fragmentUrl The url of the fragment shader to be used (default: the one given at construction time)
     */
    updateEffect(defines = null, uniforms = null, samplers = null, indexParameters, onCompiled, onError, vertexUrl, fragmentUrl) {
        this._effectWrapper.updateEffect(defines, uniforms, samplers, indexParameters, onCompiled, onError, vertexUrl, fragmentUrl);
        this._postProcessDefines = Array.isArray(this._effectWrapper.options.defines) ? this._effectWrapper.options.defines.join("\n") : this._effectWrapper.options.defines;
    }
    /**
     * The post process is reusable if it can be used multiple times within one frame.
     * @returns If the post process is reusable
     */
    isReusable() {
        return this._reusable;
    }
    /** invalidate frameBuffer to hint the postprocess to create a depth buffer */
    markTextureDirty() {
        this.width = -1;
    }
    _createRenderTargetTexture(textureSize, textureOptions, channel = 0) {
        for (let i = 0; i < this._textureCache.length; i++) {
            if (this._textureCache[i].texture.width === textureSize.width &&
                this._textureCache[i].texture.height === textureSize.height &&
                this._textureCache[i].postProcessChannel === channel &&
                this._textureCache[i].texture._generateDepthBuffer === textureOptions.generateDepthBuffer &&
                this._textureCache[i].texture.samples === textureOptions.samples) {
                return this._textureCache[i].texture;
            }
        }
        const tex = this._engine.createRenderTargetTexture(textureSize, textureOptions);
        this._textureCache.push({ texture: tex, postProcessChannel: channel, lastUsedRenderId: -1 });
        return tex;
    }
    _flushTextureCache() {
        const currentRenderId = this._renderId;
        for (let i = this._textureCache.length - 1; i >= 0; i--) {
            if (currentRenderId - this._textureCache[i].lastUsedRenderId > 100) {
                let currentlyUsed = false;
                for (let j = 0; j < this._textures.length; j++) {
                    if (this._textures.data[j] === this._textureCache[i].texture) {
                        currentlyUsed = true;
                        break;
                    }
                }
                if (!currentlyUsed) {
                    this._textureCache[i].texture.dispose();
                    this._textureCache.splice(i, 1);
                }
            }
        }
    }
    /**
     * Resizes the post-process texture
     * @param width Width of the texture
     * @param height Height of the texture
     * @param camera The camera this post-process is applied to. Pass null if the post-process is used outside the context of a camera post-process chain (default: null)
     * @param needMipMaps True if mip maps need to be generated after render (default: false)
     * @param forceDepthStencil True to force post-process texture creation with stencil depth and buffer (default: false)
     */
    resize(width, height, camera = null, needMipMaps = false, forceDepthStencil = false) {
        if (this._textures.length > 0) {
            this._textures.reset();
        }
        this.width = width;
        this.height = height;
        let firstPP = null;
        if (camera) {
            for (let i = 0; i < camera._postProcesses.length; i++) {
                if (camera._postProcesses[i] !== null) {
                    firstPP = camera._postProcesses[i];
                    break;
                }
            }
        }
        const textureSize = { width: this.width, height: this.height };
        const textureOptions = {
            generateMipMaps: needMipMaps,
            generateDepthBuffer: forceDepthStencil || firstPP === this,
            generateStencilBuffer: (forceDepthStencil || firstPP === this) && this._engine.isStencilEnable,
            samplingMode: this.renderTargetSamplingMode,
            type: this._textureType,
            format: this._textureFormat,
            samples: this._samples,
            label: "PostProcessRTT-" + this.name,
        };
        this._textures.push(this._createRenderTargetTexture(textureSize, textureOptions, 0));
        if (this._reusable) {
            this._textures.push(this._createRenderTargetTexture(textureSize, textureOptions, 1));
        }
        this._texelSize.copyFromFloats(1.0 / this.width, 1.0 / this.height);
        this.onSizeChangedObservable.notifyObservers(this);
    }
    _getTarget() {
        let target;
        if (this._shareOutputWithPostProcess) {
            target = this._shareOutputWithPostProcess.inputTexture;
        }
        else if (this._forcedOutputTexture) {
            target = this._forcedOutputTexture;
            this.width = this._forcedOutputTexture.width;
            this.height = this._forcedOutputTexture.height;
        }
        else {
            target = this.inputTexture;
            let cache;
            for (let i = 0; i < this._textureCache.length; i++) {
                if (this._textureCache[i].texture === target) {
                    cache = this._textureCache[i];
                    break;
                }
            }
            if (cache) {
                cache.lastUsedRenderId = this._renderId;
            }
        }
        return target;
    }
    /**
     * Activates the post process by intializing the textures to be used when executed. Notifies onActivateObservable.
     * When this post process is used in a pipeline, this is call will bind the input texture of this post process to the output of the previous.
     * @param cameraOrScene The camera that will be used in the post process. This camera will be used when calling onActivateObservable. You can also pass the scene if no camera is available.
     * @param sourceTexture The source texture to be inspected to get the width and height if not specified in the post process constructor. (default: null)
     * @param forceDepthStencil If true, a depth and stencil buffer will be generated. (default: false)
     * @returns The render target wrapper that was bound to be written to.
     */
    activate(cameraOrScene, sourceTexture = null, forceDepthStencil) {
        const camera = cameraOrScene === null || cameraOrScene.cameraRigMode !== undefined ? cameraOrScene || this._camera : null;
        const scene = camera?.getScene() ?? cameraOrScene;
        const engine = scene.getEngine();
        const maxSize = engine.getCaps().maxTextureSize;
        const requiredWidth = ((sourceTexture ? sourceTexture.width : this._engine.getRenderWidth(true)) * this._options) | 0;
        const requiredHeight = ((sourceTexture ? sourceTexture.height : this._engine.getRenderHeight(true)) * this._options) | 0;
        let desiredWidth = this._options.width || requiredWidth;
        let desiredHeight = this._options.height || requiredHeight;
        const needMipMaps = this.renderTargetSamplingMode !== 7 &&
            this.renderTargetSamplingMode !== 1 &&
            this.renderTargetSamplingMode !== 2;
        let target = null;
        if (!this._shareOutputWithPostProcess && !this._forcedOutputTexture) {
            if (this.adaptScaleToCurrentViewport) {
                const currentViewport = engine.currentViewport;
                if (currentViewport) {
                    desiredWidth *= currentViewport.width;
                    desiredHeight *= currentViewport.height;
                }
            }
            if (needMipMaps || this.alwaysForcePOT) {
                if (!this._options.width) {
                    desiredWidth = engine.needPOTTextures ? (0,_Misc_tools_functions_js__WEBPACK_IMPORTED_MODULE_9__/* .GetExponentOfTwo */ .R)(desiredWidth, maxSize, this.scaleMode) : desiredWidth;
                }
                if (!this._options.height) {
                    desiredHeight = engine.needPOTTextures ? (0,_Misc_tools_functions_js__WEBPACK_IMPORTED_MODULE_9__/* .GetExponentOfTwo */ .R)(desiredHeight, maxSize, this.scaleMode) : desiredHeight;
                }
            }
            if (this.width !== desiredWidth || this.height !== desiredHeight || !(target = this._getTarget())) {
                this.resize(desiredWidth, desiredHeight, camera, needMipMaps, forceDepthStencil);
            }
            this._textures.forEach((texture) => {
                if (texture.samples !== this.samples) {
                    this._engine.updateRenderTargetTextureSampleCount(texture, this.samples);
                }
            });
            this._flushTextureCache();
            this._renderId++;
        }
        if (!target) {
            target = this._getTarget();
        }
        // Bind the input of this post process to be used as the output of the previous post process.
        if (this.enablePixelPerfectMode) {
            this._scaleRatio.copyFromFloats(requiredWidth / desiredWidth, requiredHeight / desiredHeight);
            this._engine.bindFramebuffer(target, 0, requiredWidth, requiredHeight, this.forceFullscreenViewport);
        }
        else {
            this._scaleRatio.copyFromFloats(1, 1);
            this._engine.bindFramebuffer(target, 0, undefined, undefined, this.forceFullscreenViewport);
        }
        this._engine._debugInsertMarker?.(`post process ${this.name} input`);
        this.onActivateObservable.notifyObservers(camera);
        // Clear
        if (this.autoClear && (this.alphaMode === 0 || this.forceAutoClearInAlphaMode)) {
            this._engine.clear(this.clearColor ? this.clearColor : scene.clearColor, scene._allowPostProcessClearColor, true, true);
        }
        if (this._reusable) {
            this._currentRenderTextureInd = (this._currentRenderTextureInd + 1) % 2;
        }
        return target;
    }
    /**
     * If the post process is supported.
     */
    get isSupported() {
        return this._effectWrapper.drawWrapper.effect.isSupported;
    }
    /**
     * The aspect ratio of the output texture.
     */
    get aspectRatio() {
        if (this._shareOutputWithPostProcess) {
            return this._shareOutputWithPostProcess.aspectRatio;
        }
        if (this._forcedOutputTexture) {
            return this._forcedOutputTexture.width / this._forcedOutputTexture.height;
        }
        return this.width / this.height;
    }
    /**
     * Get a value indicating if the post-process is ready to be used
     * @returns true if the post-process is ready (shader is compiled)
     */
    isReady() {
        return this._effectWrapper.isReady();
    }
    /**
     * Binds all textures and uniforms to the shader, this will be run on every pass.
     * @returns the effect corresponding to this post process. Null if not compiled or not ready.
     */
    apply() {
        // Check
        if (!this._effectWrapper.isReady()) {
            return null;
        }
        // States
        this._engine.enableEffect(this._effectWrapper.drawWrapper);
        this._engine.setState(false);
        this._engine.setDepthBuffer(false);
        this._engine.setDepthWrite(false);
        // Alpha
        if (this.alphaConstants) {
            this.getEngine().setAlphaConstants(this.alphaConstants.r, this.alphaConstants.g, this.alphaConstants.b, this.alphaConstants.a);
        }
        // Bind the output texture of the preivous post process as the input to this post process.
        let source;
        if (this._shareOutputWithPostProcess) {
            source = this._shareOutputWithPostProcess.inputTexture;
        }
        else if (this._forcedOutputTexture) {
            source = this._forcedOutputTexture;
        }
        else {
            source = this.inputTexture;
        }
        if (!this.externalTextureSamplerBinding) {
            this._effectWrapper.drawWrapper.effect._bindTexture("textureSampler", source?.texture);
        }
        // Parameters
        this._effectWrapper.drawWrapper.effect.setVector2("scale", this._scaleRatio);
        this.onApplyObservable.notifyObservers(this._effectWrapper.drawWrapper.effect);
        this._effectWrapper.bind();
        return this._effectWrapper.drawWrapper.effect;
    }
    _disposeTextures() {
        if (this._shareOutputWithPostProcess || this._forcedOutputTexture) {
            this._disposeTextureCache();
            return;
        }
        this._disposeTextureCache();
        this._textures.dispose();
    }
    _disposeTextureCache() {
        for (let i = this._textureCache.length - 1; i >= 0; i--) {
            this._textureCache[i].texture.dispose();
        }
        this._textureCache.length = 0;
    }
    /**
     * Sets the required values to the prepass renderer.
     * @param prePassRenderer defines the prepass renderer to setup.
     * @returns true if the pre pass is needed.
     */
    setPrePassRenderer(prePassRenderer) {
        if (this._prePassEffectConfiguration) {
            this._prePassEffectConfiguration = prePassRenderer.addEffectConfiguration(this._prePassEffectConfiguration);
            this._prePassEffectConfiguration.enabled = true;
            return true;
        }
        return false;
    }
    /**
     * Disposes the post process.
     * @param camera The camera to dispose the post process on.
     */
    dispose(camera) {
        camera = camera || this._camera;
        this._disposeTextures();
        let index;
        if (this._scene) {
            index = this._scene.postProcesses.indexOf(this);
            if (index !== -1) {
                this._scene.postProcesses.splice(index, 1);
            }
        }
        if (this._parentContainer) {
            const index = this._parentContainer.postProcesses.indexOf(this);
            if (index > -1) {
                this._parentContainer.postProcesses.splice(index, 1);
            }
            this._parentContainer = null;
        }
        index = this._engine.postProcesses.indexOf(this);
        if (index !== -1) {
            this._engine.postProcesses.splice(index, 1);
        }
        if (!camera) {
            return;
        }
        camera.detachPostProcess(this);
        index = camera._postProcesses.indexOf(this);
        if (index === 0 && camera._postProcesses.length > 0) {
            const firstPostProcess = this._camera._getFirstPostProcess();
            if (firstPostProcess) {
                firstPostProcess.markTextureDirty();
            }
        }
        this.onActivateObservable.clear();
        this.onAfterRenderObservable.clear();
        this.onApplyObservable.clear();
        this.onBeforeRenderObservable.clear();
        this.onSizeChangedObservable.clear();
        this.onEffectCreatedObservable.clear();
    }
    /**
     * Serializes the post process to a JSON object
     * @returns the JSON object
     */
    serialize() {
        const serializationObject = _Misc_decorators_serialization_js__WEBPACK_IMPORTED_MODULE_6__/* .SerializationHelper */ .p.Serialize(this);
        const camera = this.getCamera() || (this._scene && this._scene.activeCamera);
        serializationObject.customType = "BABYLON." + this.getClassName();
        serializationObject.cameraId = camera ? camera.id : null;
        serializationObject.reusable = this._reusable;
        serializationObject.textureType = this._textureType;
        serializationObject.fragmentUrl = this._fragmentUrl;
        serializationObject.parameters = this._parameters;
        serializationObject.samplers = this._samplers;
        serializationObject.uniformBuffers = this._uniformBuffers;
        serializationObject.options = this._options;
        serializationObject.defines = this._postProcessDefines;
        serializationObject.textureFormat = this._textureFormat;
        serializationObject.vertexUrl = this._vertexUrl;
        serializationObject.indexParameters = this._indexParameters;
        return serializationObject;
    }
    /**
     * Clones this post process
     * @returns a new post process similar to this one
     */
    clone() {
        const serializationObject = this.serialize();
        serializationObject._engine = this._engine;
        serializationObject.cameraId = null;
        const result = PostProcess.Parse(serializationObject, this._scene, "");
        if (!result) {
            return null;
        }
        result.onActivateObservable = this.onActivateObservable.clone();
        result.onSizeChangedObservable = this.onSizeChangedObservable.clone();
        result.onApplyObservable = this.onApplyObservable.clone();
        result.onBeforeRenderObservable = this.onBeforeRenderObservable.clone();
        result.onAfterRenderObservable = this.onAfterRenderObservable.clone();
        result._prePassEffectConfiguration = this._prePassEffectConfiguration;
        return result;
    }
    /**
     * Creates a material from parsed material data
     * @param parsedPostProcess defines parsed post process data
     * @param scene defines the hosting scene
     * @param rootUrl defines the root URL to use to load textures
     * @returns a new post process
     */
    static Parse(parsedPostProcess, scene, rootUrl) {
        const postProcessType = (0,_Misc_typeStore_js__WEBPACK_IMPORTED_MODULE_7__/* .GetClass */ .n9)(parsedPostProcess.customType);
        if (!postProcessType || !postProcessType._Parse) {
            return null;
        }
        const camera = scene ? scene.getCameraById(parsedPostProcess.cameraId) : null;
        return postProcessType._Parse(parsedPostProcess, camera, scene, rootUrl);
    }
    /**
     * @internal
     */
    static _Parse(parsedPostProcess, targetCamera, scene, rootUrl) {
        return _Misc_decorators_serialization_js__WEBPACK_IMPORTED_MODULE_6__/* .SerializationHelper */ .p.Parse(() => {
            return new PostProcess(parsedPostProcess.name, parsedPostProcess.fragmentUrl, parsedPostProcess.parameters, parsedPostProcess.samplers, parsedPostProcess.options, targetCamera, parsedPostProcess.renderTargetSamplingMode, parsedPostProcess._engine, parsedPostProcess.reusable, parsedPostProcess.defines, parsedPostProcess.textureType, parsedPostProcess.vertexUrl, parsedPostProcess.indexParameters, false, parsedPostProcess.textureFormat);
        }, parsedPostProcess, scene, rootUrl);
    }
}
(0,_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__/* .__decorate */ .Cg)([
    (0,_Misc_decorators_js__WEBPACK_IMPORTED_MODULE_5__/* .serialize */ .lK)()
], PostProcess.prototype, "uniqueId", void 0);
(0,_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__/* .__decorate */ .Cg)([
    (0,_Misc_decorators_js__WEBPACK_IMPORTED_MODULE_5__/* .serialize */ .lK)()
], PostProcess.prototype, "name", null);
(0,_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__/* .__decorate */ .Cg)([
    (0,_Misc_decorators_js__WEBPACK_IMPORTED_MODULE_5__/* .serialize */ .lK)()
], PostProcess.prototype, "width", void 0);
(0,_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__/* .__decorate */ .Cg)([
    (0,_Misc_decorators_js__WEBPACK_IMPORTED_MODULE_5__/* .serialize */ .lK)()
], PostProcess.prototype, "height", void 0);
(0,_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__/* .__decorate */ .Cg)([
    (0,_Misc_decorators_js__WEBPACK_IMPORTED_MODULE_5__/* .serialize */ .lK)()
], PostProcess.prototype, "renderTargetSamplingMode", void 0);
(0,_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__/* .__decorate */ .Cg)([
    (0,_Misc_decorators_js__WEBPACK_IMPORTED_MODULE_5__/* .serializeAsColor4 */ .qK)()
], PostProcess.prototype, "clearColor", void 0);
(0,_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__/* .__decorate */ .Cg)([
    (0,_Misc_decorators_js__WEBPACK_IMPORTED_MODULE_5__/* .serialize */ .lK)()
], PostProcess.prototype, "autoClear", void 0);
(0,_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__/* .__decorate */ .Cg)([
    (0,_Misc_decorators_js__WEBPACK_IMPORTED_MODULE_5__/* .serialize */ .lK)()
], PostProcess.prototype, "forceAutoClearInAlphaMode", void 0);
(0,_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__/* .__decorate */ .Cg)([
    (0,_Misc_decorators_js__WEBPACK_IMPORTED_MODULE_5__/* .serialize */ .lK)()
], PostProcess.prototype, "alphaMode", null);
(0,_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__/* .__decorate */ .Cg)([
    (0,_Misc_decorators_js__WEBPACK_IMPORTED_MODULE_5__/* .serialize */ .lK)()
], PostProcess.prototype, "alphaConstants", void 0);
(0,_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__/* .__decorate */ .Cg)([
    (0,_Misc_decorators_js__WEBPACK_IMPORTED_MODULE_5__/* .serialize */ .lK)()
], PostProcess.prototype, "enablePixelPerfectMode", void 0);
(0,_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__/* .__decorate */ .Cg)([
    (0,_Misc_decorators_js__WEBPACK_IMPORTED_MODULE_5__/* .serialize */ .lK)()
], PostProcess.prototype, "forceFullscreenViewport", void 0);
(0,_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__/* .__decorate */ .Cg)([
    (0,_Misc_decorators_js__WEBPACK_IMPORTED_MODULE_5__/* .serialize */ .lK)()
], PostProcess.prototype, "scaleMode", void 0);
(0,_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__/* .__decorate */ .Cg)([
    (0,_Misc_decorators_js__WEBPACK_IMPORTED_MODULE_5__/* .serialize */ .lK)()
], PostProcess.prototype, "alwaysForcePOT", void 0);
(0,_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__/* .__decorate */ .Cg)([
    (0,_Misc_decorators_js__WEBPACK_IMPORTED_MODULE_5__/* .serialize */ .lK)("samples")
], PostProcess.prototype, "_samples", void 0);
(0,_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__/* .__decorate */ .Cg)([
    (0,_Misc_decorators_js__WEBPACK_IMPORTED_MODULE_5__/* .serialize */ .lK)()
], PostProcess.prototype, "adaptScaleToCurrentViewport", void 0);
(0,_Misc_typeStore_js__WEBPACK_IMPORTED_MODULE_7__/* .RegisterClass */ .Y5)("BABYLON.PostProcess", PostProcess);
//# sourceMappingURL=postProcess.js.map

/***/ }),

/***/ 6096:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   X: () => (/* binding */ PostProcessManager)
/* harmony export */ });
/* harmony import */ var _Buffers_buffer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5616);
/* harmony import */ var _Misc_observable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9848);



/**
 * PostProcessManager is used to manage one or more post processes or post process pipelines
 * See https://doc.babylonjs.com/features/featuresDeepDive/postProcesses/usePostProcesses
 */
class PostProcessManager {
    /**
     * Creates a new instance PostProcess
     * @param scene The scene that the post process is associated with.
     */
    constructor(scene) {
        this._vertexBuffers = {};
        this.onBeforeRenderObservable = new _Misc_observable_js__WEBPACK_IMPORTED_MODULE_1__/* .Observable */ .cP();
        this._scene = scene;
    }
    _prepareBuffers() {
        if (this._vertexBuffers[_Buffers_buffer_js__WEBPACK_IMPORTED_MODULE_0__/* .VertexBuffer */ .R.PositionKind]) {
            return;
        }
        // VBO
        const vertices = [];
        vertices.push(1, 1);
        vertices.push(-1, 1);
        vertices.push(-1, -1);
        vertices.push(1, -1);
        this._vertexBuffers[_Buffers_buffer_js__WEBPACK_IMPORTED_MODULE_0__/* .VertexBuffer */ .R.PositionKind] = new _Buffers_buffer_js__WEBPACK_IMPORTED_MODULE_0__/* .VertexBuffer */ .R(this._scene.getEngine(), vertices, _Buffers_buffer_js__WEBPACK_IMPORTED_MODULE_0__/* .VertexBuffer */ .R.PositionKind, false, false, 2);
        this._buildIndexBuffer();
    }
    _buildIndexBuffer() {
        // Indices
        const indices = [];
        indices.push(0);
        indices.push(1);
        indices.push(2);
        indices.push(0);
        indices.push(2);
        indices.push(3);
        this._indexBuffer = this._scene.getEngine().createIndexBuffer(indices);
    }
    /**
     * Rebuilds the vertex buffers of the manager.
     * @internal
     */
    _rebuild() {
        const vb = this._vertexBuffers[_Buffers_buffer_js__WEBPACK_IMPORTED_MODULE_0__/* .VertexBuffer */ .R.PositionKind];
        if (!vb) {
            return;
        }
        vb._rebuild();
        this._buildIndexBuffer();
    }
    // Methods
    /**
     * Prepares a frame to be run through a post process.
     * @param sourceTexture The input texture to the post processes. (default: null)
     * @param postProcesses An array of post processes to be run. (default: null)
     * @returns True if the post processes were able to be run.
     * @internal
     */
    _prepareFrame(sourceTexture = null, postProcesses = null) {
        const camera = this._scene.activeCamera;
        if (!camera) {
            return false;
        }
        postProcesses = postProcesses || camera._postProcesses.filter((pp) => {
            return pp != null;
        });
        if (!postProcesses || postProcesses.length === 0 || !this._scene.postProcessesEnabled) {
            return false;
        }
        postProcesses[0].activate(camera, sourceTexture, postProcesses !== null && postProcesses !== undefined);
        return true;
    }
    /**
     * Manually render a set of post processes to a texture.
     * Please note, the frame buffer won't be unbound after the call in case you have more render to do.
     * @param postProcesses An array of post processes to be run.
     * @param targetTexture The render target wrapper to render to.
     * @param forceFullscreenViewport force gl.viewport to be full screen eg. 0,0,textureWidth,textureHeight
     * @param faceIndex defines the face to render to if a cubemap is defined as the target
     * @param lodLevel defines which lod of the texture to render to
     * @param doNotBindFrambuffer If set to true, assumes that the framebuffer has been bound previously
     */
    directRender(postProcesses, targetTexture = null, forceFullscreenViewport = false, faceIndex = 0, lodLevel = 0, doNotBindFrambuffer = false) {
        const engine = this._scene.getEngine();
        for (let index = 0; index < postProcesses.length; index++) {
            if (index < postProcesses.length - 1) {
                postProcesses[index + 1].activate(this._scene.activeCamera || this._scene, targetTexture?.texture);
            }
            else {
                if (targetTexture) {
                    engine.bindFramebuffer(targetTexture, faceIndex, undefined, undefined, forceFullscreenViewport, lodLevel);
                }
                else if (!doNotBindFrambuffer) {
                    engine.restoreDefaultFramebuffer();
                }
                engine._debugInsertMarker?.(`post process ${postProcesses[index].name} output`);
            }
            const pp = postProcesses[index];
            const effect = pp.apply();
            if (effect) {
                pp.onBeforeRenderObservable.notifyObservers(effect);
                // VBOs
                this._prepareBuffers();
                engine.bindBuffers(this._vertexBuffers, this._indexBuffer, effect);
                // Draw order
                engine.drawElementsType(0, 0, 6);
                pp.onAfterRenderObservable.notifyObservers(effect);
            }
        }
        // Restore depth buffer
        engine.setDepthBuffer(true);
        engine.setDepthWrite(true);
    }
    /**
     * Finalize the result of the output of the postprocesses.
     * @param doNotPresent If true the result will not be displayed to the screen.
     * @param targetTexture The render target wrapper to render to.
     * @param faceIndex The index of the face to bind the target texture to.
     * @param postProcesses The array of post processes to render.
     * @param forceFullscreenViewport force gl.viewport to be full screen eg. 0,0,textureWidth,textureHeight (default: false)
     * @internal
     */
    _finalizeFrame(doNotPresent, targetTexture, faceIndex, postProcesses, forceFullscreenViewport = false) {
        const camera = this._scene.activeCamera;
        if (!camera) {
            return;
        }
        this.onBeforeRenderObservable.notifyObservers(this);
        postProcesses = postProcesses || camera._postProcesses.filter((pp) => {
            return pp != null;
        });
        if (postProcesses.length === 0 || !this._scene.postProcessesEnabled) {
            return;
        }
        const engine = this._scene.getEngine();
        for (let index = 0, len = postProcesses.length; index < len; index++) {
            const pp = postProcesses[index];
            if (index < len - 1) {
                pp._outputTexture = postProcesses[index + 1].activate(camera, targetTexture?.texture);
            }
            else {
                if (targetTexture) {
                    engine.bindFramebuffer(targetTexture, faceIndex, undefined, undefined, forceFullscreenViewport);
                    pp._outputTexture = targetTexture;
                }
                else {
                    engine.restoreDefaultFramebuffer();
                    pp._outputTexture = null;
                }
                engine._debugInsertMarker?.(`post process ${postProcesses[index].name} output`);
            }
            if (doNotPresent) {
                break;
            }
            const effect = pp.apply();
            if (effect) {
                pp.onBeforeRenderObservable.notifyObservers(effect);
                // VBOs
                this._prepareBuffers();
                engine.bindBuffers(this._vertexBuffers, this._indexBuffer, effect);
                // Draw order
                engine.drawElementsType(0, 0, 6);
                pp.onAfterRenderObservable.notifyObservers(effect);
            }
        }
        // Restore states
        engine.setDepthBuffer(true);
        engine.setDepthWrite(true);
        engine.setAlphaMode(0);
    }
    /**
     * Disposes of the post process manager.
     */
    dispose() {
        const buffer = this._vertexBuffers[_Buffers_buffer_js__WEBPACK_IMPORTED_MODULE_0__/* .VertexBuffer */ .R.PositionKind];
        if (buffer) {
            buffer.dispose();
            this._vertexBuffers[_Buffers_buffer_js__WEBPACK_IMPORTED_MODULE_0__/* .VertexBuffer */ .R.PositionKind] = null;
        }
        if (this._indexBuffer) {
            this._scene.getEngine()._releaseBuffer(this._indexBuffer);
            this._indexBuffer = null;
        }
    }
}
//# sourceMappingURL=postProcessManager.js.map

/***/ }),

/***/ 3099:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  m: () => (/* binding */ RenderingManager)
});

// UNUSED EXPORTS: RenderingGroupInfo

// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Misc/smartArray.js
var smartArray = __webpack_require__(7931);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Maths/math.vector.js
var math_vector = __webpack_require__(9923);
;// ./node_modules/@babylonjs/core/Rendering/renderingGroup.js



/**
 * This represents the object necessary to create a rendering group.
 * This is exclusively used and created by the rendering manager.
 * To modify the behavior, you use the available helpers in your scene or meshes.
 * @internal
 */
class RenderingGroup {
    /**
     * Set the opaque sort comparison function.
     * If null the sub meshes will be render in the order they were created
     */
    set opaqueSortCompareFn(value) {
        if (value) {
            this._opaqueSortCompareFn = value;
        }
        else {
            this._opaqueSortCompareFn = RenderingGroup.PainterSortCompare;
        }
        this._renderOpaque = this._renderOpaqueSorted;
    }
    /**
     * Set the alpha test sort comparison function.
     * If null the sub meshes will be render in the order they were created
     */
    set alphaTestSortCompareFn(value) {
        if (value) {
            this._alphaTestSortCompareFn = value;
        }
        else {
            this._alphaTestSortCompareFn = RenderingGroup.PainterSortCompare;
        }
        this._renderAlphaTest = this._renderAlphaTestSorted;
    }
    /**
     * Set the transparent sort comparison function.
     * If null the sub meshes will be render in the order they were created
     */
    set transparentSortCompareFn(value) {
        if (value) {
            this._transparentSortCompareFn = value;
        }
        else {
            this._transparentSortCompareFn = RenderingGroup.defaultTransparentSortCompare;
        }
        this._renderTransparent = this._renderTransparentSorted;
    }
    /**
     * Creates a new rendering group.
     * @param index The rendering group index
     * @param scene
     * @param opaqueSortCompareFn The opaque sort comparison function. If null no order is applied
     * @param alphaTestSortCompareFn The alpha test sort comparison function. If null no order is applied
     * @param transparentSortCompareFn The transparent sort comparison function. If null back to front + alpha index sort is applied
     */
    constructor(index, scene, opaqueSortCompareFn = null, alphaTestSortCompareFn = null, transparentSortCompareFn = null) {
        this.index = index;
        this._opaqueSubMeshes = new smartArray/* SmartArray */.L(256);
        this._transparentSubMeshes = new smartArray/* SmartArray */.L(256);
        this._alphaTestSubMeshes = new smartArray/* SmartArray */.L(256);
        this._depthOnlySubMeshes = new smartArray/* SmartArray */.L(256);
        this._particleSystems = new smartArray/* SmartArray */.L(256);
        this._spriteManagers = new smartArray/* SmartArray */.L(256);
        /** @internal */
        this._empty = true;
        /** @internal */
        this._edgesRenderers = new smartArray/* SmartArrayNoDuplicate */.b(16);
        this._scene = scene;
        this.opaqueSortCompareFn = opaqueSortCompareFn;
        this.alphaTestSortCompareFn = alphaTestSortCompareFn;
        this.transparentSortCompareFn = transparentSortCompareFn;
    }
    /**
     * Render all the sub meshes contained in the group.
     * @param customRenderFunction Used to override the default render behaviour of the group.
     * @param renderSprites
     * @param renderParticles
     * @param activeMeshes
     */
    render(customRenderFunction, renderSprites, renderParticles, activeMeshes) {
        if (customRenderFunction) {
            customRenderFunction(this._opaqueSubMeshes, this._alphaTestSubMeshes, this._transparentSubMeshes, this._depthOnlySubMeshes);
            return;
        }
        const engine = this._scene.getEngine();
        // Depth only
        if (this._depthOnlySubMeshes.length !== 0) {
            engine.setColorWrite(false);
            this._renderAlphaTest(this._depthOnlySubMeshes);
            engine.setColorWrite(true);
        }
        // Opaque
        if (this._opaqueSubMeshes.length !== 0) {
            this._renderOpaque(this._opaqueSubMeshes);
        }
        // Alpha test
        if (this._alphaTestSubMeshes.length !== 0) {
            this._renderAlphaTest(this._alphaTestSubMeshes);
        }
        const stencilState = engine.getStencilBuffer();
        engine.setStencilBuffer(false);
        // Sprites
        if (renderSprites) {
            this._renderSprites();
        }
        // Particles
        if (renderParticles) {
            this._renderParticles(activeMeshes);
        }
        if (this.onBeforeTransparentRendering) {
            this.onBeforeTransparentRendering();
        }
        // Transparent
        if (this._transparentSubMeshes.length !== 0 || this._scene.useOrderIndependentTransparency) {
            engine.setStencilBuffer(stencilState);
            if (this._scene.useOrderIndependentTransparency) {
                const excludedMeshes = this._scene.depthPeelingRenderer.render(this._transparentSubMeshes);
                if (excludedMeshes.length) {
                    // Render leftover meshes that could not be processed by depth peeling
                    this._renderTransparent(excludedMeshes);
                }
            }
            else {
                this._renderTransparent(this._transparentSubMeshes);
            }
            engine.setAlphaMode(0);
        }
        // Set back stencil to false in case it changes before the edge renderer.
        engine.setStencilBuffer(false);
        // Edges
        if (this._edgesRenderers.length) {
            for (let edgesRendererIndex = 0; edgesRendererIndex < this._edgesRenderers.length; edgesRendererIndex++) {
                this._edgesRenderers.data[edgesRendererIndex].render();
            }
            engine.setAlphaMode(0);
        }
        // Restore Stencil state.
        engine.setStencilBuffer(stencilState);
    }
    /**
     * Renders the opaque submeshes in the order from the opaqueSortCompareFn.
     * @param subMeshes The submeshes to render
     */
    _renderOpaqueSorted(subMeshes) {
        RenderingGroup._RenderSorted(subMeshes, this._opaqueSortCompareFn, this._scene.activeCamera, false);
    }
    /**
     * Renders the opaque submeshes in the order from the alphatestSortCompareFn.
     * @param subMeshes The submeshes to render
     */
    _renderAlphaTestSorted(subMeshes) {
        RenderingGroup._RenderSorted(subMeshes, this._alphaTestSortCompareFn, this._scene.activeCamera, false);
    }
    /**
     * Renders the opaque submeshes in the order from the transparentSortCompareFn.
     * @param subMeshes The submeshes to render
     */
    _renderTransparentSorted(subMeshes) {
        RenderingGroup._RenderSorted(subMeshes, this._transparentSortCompareFn, this._scene.activeCamera, true);
    }
    /**
     * Renders the submeshes in a specified order.
     * @param subMeshes The submeshes to sort before render
     * @param sortCompareFn The comparison function use to sort
     * @param camera The camera position use to preprocess the submeshes to help sorting
     * @param transparent Specifies to activate blending if true
     */
    static _RenderSorted(subMeshes, sortCompareFn, camera, transparent) {
        let subIndex = 0;
        let subMesh;
        const cameraPosition = camera ? camera.globalPosition : RenderingGroup._ZeroVector;
        if (transparent) {
            for (; subIndex < subMeshes.length; subIndex++) {
                subMesh = subMeshes.data[subIndex];
                subMesh._alphaIndex = subMesh.getMesh().alphaIndex;
                subMesh._distanceToCamera = math_vector/* Vector3 */.Pq.Distance(subMesh.getBoundingInfo().boundingSphere.centerWorld, cameraPosition);
            }
        }
        const sortedArray = subMeshes.length === subMeshes.data.length ? subMeshes.data : subMeshes.data.slice(0, subMeshes.length);
        if (sortCompareFn) {
            sortedArray.sort(sortCompareFn);
        }
        const scene = sortedArray[0].getMesh().getScene();
        for (subIndex = 0; subIndex < sortedArray.length; subIndex++) {
            subMesh = sortedArray[subIndex];
            if (scene._activeMeshesFrozenButKeepClipping && !subMesh.isInFrustum(scene._frustumPlanes)) {
                continue;
            }
            if (transparent) {
                const material = subMesh.getMaterial();
                if (material && material.needDepthPrePass) {
                    const engine = material.getScene().getEngine();
                    engine.setColorWrite(false);
                    engine.setAlphaMode(0);
                    subMesh.render(false);
                    engine.setColorWrite(true);
                }
            }
            subMesh.render(transparent);
        }
    }
    /**
     * Build in function which can be applied to ensure meshes of a special queue (opaque, alpha test, transparent)
     * are rendered back to front if in the same alpha index.
     *
     * @param a The first submesh
     * @param b The second submesh
     * @returns The result of the comparison
     */
    // eslint-disable-next-line @typescript-eslint/naming-convention
    static defaultTransparentSortCompare(a, b) {
        // Alpha index first
        if (a._alphaIndex > b._alphaIndex) {
            return 1;
        }
        if (a._alphaIndex < b._alphaIndex) {
            return -1;
        }
        // Then distance to camera
        return RenderingGroup.backToFrontSortCompare(a, b);
    }
    /**
     * Build in function which can be applied to ensure meshes of a special queue (opaque, alpha test, transparent)
     * are rendered back to front.
     *
     * @param a The first submesh
     * @param b The second submesh
     * @returns The result of the comparison
     */
    // eslint-disable-next-line @typescript-eslint/naming-convention
    static backToFrontSortCompare(a, b) {
        // Then distance to camera
        if (a._distanceToCamera < b._distanceToCamera) {
            return 1;
        }
        if (a._distanceToCamera > b._distanceToCamera) {
            return -1;
        }
        return 0;
    }
    /**
     * Build in function which can be applied to ensure meshes of a special queue (opaque, alpha test, transparent)
     * are rendered front to back (prevent overdraw).
     *
     * @param a The first submesh
     * @param b The second submesh
     * @returns The result of the comparison
     */
    // eslint-disable-next-line @typescript-eslint/naming-convention
    static frontToBackSortCompare(a, b) {
        // Then distance to camera
        if (a._distanceToCamera < b._distanceToCamera) {
            return -1;
        }
        if (a._distanceToCamera > b._distanceToCamera) {
            return 1;
        }
        return 0;
    }
    /**
     * Build in function which can be applied to ensure meshes of a special queue (opaque, alpha test, transparent)
     * are grouped by material then geometry.
     *
     * @param a The first submesh
     * @param b The second submesh
     * @returns The result of the comparison
     */
    static PainterSortCompare(a, b) {
        const meshA = a.getMesh();
        const meshB = b.getMesh();
        if (meshA.material && meshB.material) {
            return meshA.material.uniqueId - meshB.material.uniqueId;
        }
        return meshA.uniqueId - meshB.uniqueId;
    }
    /**
     * Resets the different lists of submeshes to prepare a new frame.
     */
    prepare() {
        this._opaqueSubMeshes.reset();
        this._transparentSubMeshes.reset();
        this._alphaTestSubMeshes.reset();
        this._depthOnlySubMeshes.reset();
        this._particleSystems.reset();
        this.prepareSprites();
        this._edgesRenderers.reset();
        this._empty = true;
    }
    /**
     * Resets the different lists of sprites to prepare a new frame.
     */
    prepareSprites() {
        this._spriteManagers.reset();
    }
    dispose() {
        this._opaqueSubMeshes.dispose();
        this._transparentSubMeshes.dispose();
        this._alphaTestSubMeshes.dispose();
        this._depthOnlySubMeshes.dispose();
        this._particleSystems.dispose();
        this._spriteManagers.dispose();
        this._edgesRenderers.dispose();
    }
    /**
     * Inserts the submesh in its correct queue depending on its material.
     * @param subMesh The submesh to dispatch
     * @param [mesh] Optional reference to the submeshes's mesh. Provide if you have an exiting reference to improve performance.
     * @param [material] Optional reference to the submeshes's material. Provide if you have an exiting reference to improve performance.
     */
    dispatch(subMesh, mesh, material) {
        // Get mesh and materials if not provided
        if (mesh === undefined) {
            mesh = subMesh.getMesh();
        }
        if (material === undefined) {
            material = subMesh.getMaterial();
        }
        if (material === null || material === undefined) {
            return;
        }
        if (material.needAlphaBlendingForMesh(mesh)) {
            // Transparent
            this._transparentSubMeshes.push(subMesh);
        }
        else if (material.needAlphaTesting()) {
            // Alpha test
            if (material.needDepthPrePass) {
                this._depthOnlySubMeshes.push(subMesh);
            }
            this._alphaTestSubMeshes.push(subMesh);
        }
        else {
            if (material.needDepthPrePass) {
                this._depthOnlySubMeshes.push(subMesh);
            }
            this._opaqueSubMeshes.push(subMesh); // Opaque
        }
        mesh._renderingGroup = this;
        if (mesh._edgesRenderer && mesh.isEnabled() && mesh.isVisible && mesh._edgesRenderer.isEnabled) {
            this._edgesRenderers.pushNoDuplicate(mesh._edgesRenderer);
        }
        this._empty = false;
    }
    dispatchSprites(spriteManager) {
        this._spriteManagers.push(spriteManager);
        this._empty = false;
    }
    dispatchParticles(particleSystem) {
        this._particleSystems.push(particleSystem);
        this._empty = false;
    }
    _renderParticles(activeMeshes) {
        if (this._particleSystems.length === 0) {
            return;
        }
        // Particles
        const activeCamera = this._scene.activeCamera;
        this._scene.onBeforeParticlesRenderingObservable.notifyObservers(this._scene);
        for (let particleIndex = 0; particleIndex < this._particleSystems.length; particleIndex++) {
            const particleSystem = this._particleSystems.data[particleIndex];
            if ((activeCamera && activeCamera.layerMask & particleSystem.layerMask) === 0) {
                continue;
            }
            const emitter = particleSystem.emitter;
            if (!emitter.position || !activeMeshes || activeMeshes.indexOf(emitter) !== -1) {
                this._scene._activeParticles.addCount(particleSystem.render(), false);
            }
        }
        this._scene.onAfterParticlesRenderingObservable.notifyObservers(this._scene);
    }
    _renderSprites() {
        if (!this._scene.spritesEnabled || this._spriteManagers.length === 0) {
            return;
        }
        // Sprites
        const activeCamera = this._scene.activeCamera;
        this._scene.onBeforeSpritesRenderingObservable.notifyObservers(this._scene);
        for (let id = 0; id < this._spriteManagers.length; id++) {
            const spriteManager = this._spriteManagers.data[id];
            if ((activeCamera && activeCamera.layerMask & spriteManager.layerMask) !== 0) {
                spriteManager.render();
            }
        }
        this._scene.onAfterSpritesRenderingObservable.notifyObservers(this._scene);
    }
}
RenderingGroup._ZeroVector = math_vector/* Vector3 */.Pq.Zero();
//# sourceMappingURL=renderingGroup.js.map
;// ./node_modules/@babylonjs/core/Rendering/renderingManager.js

/**
 * This class is used by the onRenderingGroupObservable
 */
class RenderingGroupInfo {
}
/**
 * This is the manager responsible of all the rendering for meshes sprites and particles.
 * It is enable to manage the different groups as well as the different necessary sort functions.
 * This should not be used directly aside of the few static configurations
 */
class RenderingManager {
    /**
     * Gets or sets a boolean indicating that the manager will not reset between frames.
     * This means that if a mesh becomes invisible or transparent it will not be visible until this boolean is set to false again.
     * By default, the rendering manager will dispatch all active meshes per frame (moving them to the transparent, opaque or alpha testing lists).
     * By turning this property on, you will accelerate the rendering by keeping all these lists unchanged between frames.
     */
    get maintainStateBetweenFrames() {
        return this._maintainStateBetweenFrames;
    }
    set maintainStateBetweenFrames(value) {
        if (value === this._maintainStateBetweenFrames) {
            return;
        }
        this._maintainStateBetweenFrames = value;
        if (!this._maintainStateBetweenFrames) {
            this.restoreDispachedFlags();
        }
    }
    /**
     * Restore wasDispatched flags on the lists of elements to render.
     */
    restoreDispachedFlags() {
        for (const mesh of this._scene.meshes) {
            if (mesh.subMeshes) {
                for (const subMesh of mesh.subMeshes) {
                    subMesh._wasDispatched = false;
                }
            }
        }
        if (this._scene.spriteManagers) {
            for (const spriteManager of this._scene.spriteManagers) {
                spriteManager._wasDispatched = false;
            }
        }
        for (const particleSystem of this._scene.particleSystems) {
            particleSystem._wasDispatched = false;
        }
    }
    /**
     * Instantiates a new rendering group for a particular scene
     * @param scene Defines the scene the groups belongs to
     */
    constructor(scene) {
        /**
         * @internal
         */
        this._useSceneAutoClearSetup = false;
        this._renderingGroups = new Array();
        this._autoClearDepthStencil = {};
        this._customOpaqueSortCompareFn = {};
        this._customAlphaTestSortCompareFn = {};
        this._customTransparentSortCompareFn = {};
        this._renderingGroupInfo = new RenderingGroupInfo();
        this._maintainStateBetweenFrames = false;
        this._scene = scene;
        for (let i = RenderingManager.MIN_RENDERINGGROUPS; i < RenderingManager.MAX_RENDERINGGROUPS; i++) {
            this._autoClearDepthStencil[i] = { autoClear: true, depth: true, stencil: true };
        }
    }
    /**
     * @returns the rendering group with the specified id.
     * @param id the id of the rendering group (0 by default)
     */
    getRenderingGroup(id) {
        const renderingGroupId = id || 0;
        this._prepareRenderingGroup(renderingGroupId);
        return this._renderingGroups[renderingGroupId];
    }
    _clearDepthStencilBuffer(depth = true, stencil = true) {
        if (this._depthStencilBufferAlreadyCleaned) {
            return;
        }
        this._scene.getEngine().clear(null, false, depth, stencil);
        this._depthStencilBufferAlreadyCleaned = true;
    }
    /**
     * Renders the entire managed groups. This is used by the scene or the different render targets.
     * @internal
     */
    render(customRenderFunction, activeMeshes, renderParticles, renderSprites) {
        // Update the observable context (not null as it only goes away on dispose)
        const info = this._renderingGroupInfo;
        info.scene = this._scene;
        info.camera = this._scene.activeCamera;
        info.renderingManager = this;
        // Dispatch sprites
        if (this._scene.spriteManagers && renderSprites) {
            for (let index = 0; index < this._scene.spriteManagers.length; index++) {
                const manager = this._scene.spriteManagers[index];
                this.dispatchSprites(manager);
            }
        }
        // Render
        for (let index = RenderingManager.MIN_RENDERINGGROUPS; index < RenderingManager.MAX_RENDERINGGROUPS; index++) {
            this._depthStencilBufferAlreadyCleaned = index === RenderingManager.MIN_RENDERINGGROUPS;
            const renderingGroup = this._renderingGroups[index];
            if (!renderingGroup || renderingGroup._empty) {
                continue;
            }
            const renderingGroupMask = 1 << index;
            info.renderingGroupId = index;
            // Before Observable
            this._scene.onBeforeRenderingGroupObservable.notifyObservers(info, renderingGroupMask);
            // Clear depth/stencil if needed
            if (RenderingManager.AUTOCLEAR) {
                const autoClear = this._useSceneAutoClearSetup ? this._scene.getAutoClearDepthStencilSetup(index) : this._autoClearDepthStencil[index];
                if (autoClear && autoClear.autoClear) {
                    this._clearDepthStencilBuffer(autoClear.depth, autoClear.stencil);
                }
            }
            // Render
            for (const step of this._scene._beforeRenderingGroupDrawStage) {
                step.action(index);
            }
            renderingGroup.render(customRenderFunction, renderSprites, renderParticles, activeMeshes);
            for (const step of this._scene._afterRenderingGroupDrawStage) {
                step.action(index);
            }
            // After Observable
            this._scene.onAfterRenderingGroupObservable.notifyObservers(info, renderingGroupMask);
        }
    }
    /**
     * Resets the different information of the group to prepare a new frame
     * @internal
     */
    reset() {
        if (this.maintainStateBetweenFrames) {
            return;
        }
        for (let index = RenderingManager.MIN_RENDERINGGROUPS; index < RenderingManager.MAX_RENDERINGGROUPS; index++) {
            const renderingGroup = this._renderingGroups[index];
            if (renderingGroup) {
                renderingGroup.prepare();
            }
        }
    }
    /**
     * Resets the sprites information of the group to prepare a new frame
     * @internal
     */
    resetSprites() {
        if (this.maintainStateBetweenFrames) {
            return;
        }
        for (let index = RenderingManager.MIN_RENDERINGGROUPS; index < RenderingManager.MAX_RENDERINGGROUPS; index++) {
            const renderingGroup = this._renderingGroups[index];
            if (renderingGroup) {
                renderingGroup.prepareSprites();
            }
        }
    }
    /**
     * Dispose and release the group and its associated resources.
     * @internal
     */
    dispose() {
        this.freeRenderingGroups();
        this._renderingGroups.length = 0;
        this._renderingGroupInfo = null;
    }
    /**
     * Clear the info related to rendering groups preventing retention points during dispose.
     */
    freeRenderingGroups() {
        for (let index = RenderingManager.MIN_RENDERINGGROUPS; index < RenderingManager.MAX_RENDERINGGROUPS; index++) {
            const renderingGroup = this._renderingGroups[index];
            if (renderingGroup) {
                renderingGroup.dispose();
            }
        }
    }
    _prepareRenderingGroup(renderingGroupId) {
        if (this._renderingGroups[renderingGroupId] === undefined) {
            this._renderingGroups[renderingGroupId] = new RenderingGroup(renderingGroupId, this._scene, this._customOpaqueSortCompareFn[renderingGroupId], this._customAlphaTestSortCompareFn[renderingGroupId], this._customTransparentSortCompareFn[renderingGroupId]);
        }
    }
    /**
     * Add a sprite manager to the rendering manager in order to render it this frame.
     * @param spriteManager Define the sprite manager to render
     */
    dispatchSprites(spriteManager) {
        if (this.maintainStateBetweenFrames && spriteManager._wasDispatched) {
            return;
        }
        spriteManager._wasDispatched = true;
        this.getRenderingGroup(spriteManager.renderingGroupId).dispatchSprites(spriteManager);
    }
    /**
     * Add a particle system to the rendering manager in order to render it this frame.
     * @param particleSystem Define the particle system to render
     */
    dispatchParticles(particleSystem) {
        if (this.maintainStateBetweenFrames && particleSystem._wasDispatched) {
            return;
        }
        particleSystem._wasDispatched = true;
        this.getRenderingGroup(particleSystem.renderingGroupId).dispatchParticles(particleSystem);
    }
    /**
     * Add a submesh to the manager in order to render it this frame
     * @param subMesh The submesh to dispatch
     * @param mesh Optional reference to the submeshes's mesh. Provide if you have an exiting reference to improve performance.
     * @param material Optional reference to the submeshes's material. Provide if you have an exiting reference to improve performance.
     */
    dispatch(subMesh, mesh, material) {
        if (mesh === undefined) {
            mesh = subMesh.getMesh();
        }
        if (this.maintainStateBetweenFrames && subMesh._wasDispatched) {
            return;
        }
        subMesh._wasDispatched = true;
        this.getRenderingGroup(mesh.renderingGroupId).dispatch(subMesh, mesh, material);
    }
    /**
     * Overrides the default sort function applied in the rendering group to prepare the meshes.
     * This allowed control for front to back rendering or reversely depending of the special needs.
     *
     * @param renderingGroupId The rendering group id corresponding to its index
     * @param opaqueSortCompareFn The opaque queue comparison function use to sort.
     * @param alphaTestSortCompareFn The alpha test queue comparison function use to sort.
     * @param transparentSortCompareFn The transparent queue comparison function use to sort.
     */
    setRenderingOrder(renderingGroupId, opaqueSortCompareFn = null, alphaTestSortCompareFn = null, transparentSortCompareFn = null) {
        this._customOpaqueSortCompareFn[renderingGroupId] = opaqueSortCompareFn;
        this._customAlphaTestSortCompareFn[renderingGroupId] = alphaTestSortCompareFn;
        this._customTransparentSortCompareFn[renderingGroupId] = transparentSortCompareFn;
        if (this._renderingGroups[renderingGroupId]) {
            const group = this._renderingGroups[renderingGroupId];
            group.opaqueSortCompareFn = this._customOpaqueSortCompareFn[renderingGroupId];
            group.alphaTestSortCompareFn = this._customAlphaTestSortCompareFn[renderingGroupId];
            group.transparentSortCompareFn = this._customTransparentSortCompareFn[renderingGroupId];
        }
    }
    /**
     * Specifies whether or not the stencil and depth buffer are cleared between two rendering groups.
     *
     * @param renderingGroupId The rendering group id corresponding to its index
     * @param autoClearDepthStencil Automatically clears depth and stencil between groups if true.
     * @param depth Automatically clears depth between groups if true and autoClear is true.
     * @param stencil Automatically clears stencil between groups if true and autoClear is true.
     */
    setRenderingAutoClearDepthStencil(renderingGroupId, autoClearDepthStencil, depth = true, stencil = true) {
        this._autoClearDepthStencil[renderingGroupId] = {
            autoClear: autoClearDepthStencil,
            depth: depth,
            stencil: stencil,
        };
    }
    /**
     * Gets the current auto clear configuration for one rendering group of the rendering
     * manager.
     * @param index the rendering group index to get the information for
     * @returns The auto clear setup for the requested rendering group
     */
    getAutoClearDepthStencilSetup(index) {
        return this._autoClearDepthStencil[index];
    }
}
/**
 * The max id used for rendering groups (not included)
 */
RenderingManager.MAX_RENDERINGGROUPS = 4;
/**
 * The min id used for rendering groups (included)
 */
RenderingManager.MIN_RENDERINGGROUPS = 0;
/**
 * Used to globally prevent autoclearing scenes.
 */
RenderingManager.AUTOCLEAR = true;
//# sourceMappingURL=renderingManager.js.map

/***/ })

}]);