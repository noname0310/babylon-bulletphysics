"use strict";
(self["webpackChunkbabylon_bulletphysics"] = self["webpackChunkbabylon_bulletphysics"] || []).push([[6793],{

/***/ 96793:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   G$: () => (/* binding */ CreateSegmentedBoxVertexData),
/* harmony export */   KA: () => (/* binding */ CreateBoxVertexData),
/* harmony export */   an: () => (/* binding */ CreateBox)
/* harmony export */ });
/* unused harmony export BoxBuilder */
/* harmony import */ var _Maths_math_vector_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(79923);
/* harmony import */ var _Maths_math_color_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26041);
/* harmony import */ var _mesh_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(76595);
/* harmony import */ var _mesh_vertexData_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(36803);
/* harmony import */ var _Compat_compatibilityOptions_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(91313);
/* harmony import */ var _groundBuilder_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(66423);






/**
 * Creates the VertexData for a box
 * @param options an object used to set the following optional parameters for the box, required but can be empty
 * * size sets the width, height and depth of the box to the value of size, optional default 1
 * * width sets the width (x direction) of the box, overwrites the width set by size, optional, default size
 * * height sets the height (y direction) of the box, overwrites the height set by size, optional, default size
 * * depth sets the depth (z direction) of the box, overwrites the depth set by size, optional, default size
 * * faceUV an array of 6 Vector4 elements used to set different images to each box side
 * * faceColors an array of 6 Color3 elements used to set different colors to each box side
 * * sideOrientation optional and takes the values : Mesh.FRONTSIDE (default), Mesh.BACKSIDE or Mesh.DOUBLESIDE
 * * frontUvs only usable when you create a double-sided mesh, used to choose what parts of the texture image to crop and apply on the front side, optional, default vector4 (0, 0, 1, 1)
 * * backUVs only usable when you create a double-sided mesh, used to choose what parts of the texture image to crop and apply on the back side, optional, default vector4 (0, 0, 1, 1)
 * @returns the VertexData of the box
 */
function CreateBoxVertexData(options) {
    const nbFaces = 6;
    let indices = [0, 1, 2, 0, 2, 3, 4, 5, 6, 4, 6, 7, 8, 9, 10, 8, 10, 11, 12, 13, 14, 12, 14, 15, 16, 17, 18, 16, 18, 19, 20, 21, 22, 20, 22, 23];
    const normals = [
        0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, 0, 1, 0, 0, 1, 0, 0,
        1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0,
    ];
    const uvs = [];
    let positions = [];
    const width = options.width || options.size || 1;
    const height = options.height || options.size || 1;
    const depth = options.depth || options.size || 1;
    const wrap = options.wrap || false;
    let topBaseAt = options.topBaseAt === void 0 ? 1 : options.topBaseAt;
    let bottomBaseAt = options.bottomBaseAt === void 0 ? 0 : options.bottomBaseAt;
    topBaseAt = (topBaseAt + 4) % 4; // places values as 0 to 3
    bottomBaseAt = (bottomBaseAt + 4) % 4; // places values as 0 to 3
    const topOrder = [2, 0, 3, 1];
    const bottomOrder = [2, 0, 1, 3];
    let topIndex = topOrder[topBaseAt];
    let bottomIndex = bottomOrder[bottomBaseAt];
    let basePositions = [
        1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1,
        1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1,
    ];
    if (wrap) {
        indices = [2, 3, 0, 2, 0, 1, 4, 5, 6, 4, 6, 7, 9, 10, 11, 9, 11, 8, 12, 14, 15, 12, 13, 14];
        basePositions = [
            -1, 1, 1, 1, 1, 1, 1, -1, 1, -1, -1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, 1, 1, 1, -1, 1, -1, -1, 1, -1, 1, -1, 1, -1, -1, 1, 1, -1, -1, 1, -1, -1, -1,
        ];
        let topFaceBase = [
            [1, 1, 1],
            [-1, 1, 1],
            [-1, 1, -1],
            [1, 1, -1],
        ];
        let bottomFaceBase = [
            [-1, -1, 1],
            [1, -1, 1],
            [1, -1, -1],
            [-1, -1, -1],
        ];
        const topFaceOrder = [17, 18, 19, 16];
        const bottomFaceOrder = [22, 23, 20, 21];
        while (topIndex > 0) {
            topFaceBase.unshift(topFaceBase.pop());
            topFaceOrder.unshift(topFaceOrder.pop());
            topIndex--;
        }
        while (bottomIndex > 0) {
            bottomFaceBase.unshift(bottomFaceBase.pop());
            bottomFaceOrder.unshift(bottomFaceOrder.pop());
            bottomIndex--;
        }
        topFaceBase = topFaceBase.flat();
        bottomFaceBase = bottomFaceBase.flat();
        basePositions = basePositions.concat(topFaceBase).concat(bottomFaceBase);
        indices.push(topFaceOrder[0], topFaceOrder[2], topFaceOrder[3], topFaceOrder[0], topFaceOrder[1], topFaceOrder[2]);
        indices.push(bottomFaceOrder[0], bottomFaceOrder[2], bottomFaceOrder[3], bottomFaceOrder[0], bottomFaceOrder[1], bottomFaceOrder[2]);
    }
    const scaleArray = [width / 2, height / 2, depth / 2];
    positions = basePositions.reduce((accumulator, currentValue, currentIndex) => accumulator.concat(currentValue * scaleArray[currentIndex % 3]), []);
    const sideOrientation = options.sideOrientation === 0 ? 0 : options.sideOrientation || _mesh_vertexData_js__WEBPACK_IMPORTED_MODULE_3__/* .VertexData */ .P.DEFAULTSIDE;
    const faceUV = options.faceUV || new Array(6);
    const faceColors = options.faceColors;
    const colors = [];
    // default face colors and UV if undefined
    for (let f = 0; f < 6; f++) {
        if (faceUV[f] === undefined) {
            faceUV[f] = new _Maths_math_vector_js__WEBPACK_IMPORTED_MODULE_0__/* .Vector4 */ .IU(0, 0, 1, 1);
        }
        if (faceColors && faceColors[f] === undefined) {
            faceColors[f] = new _Maths_math_color_js__WEBPACK_IMPORTED_MODULE_1__/* .Color4 */ .ov(1, 1, 1, 1);
        }
    }
    // Create each face in turn.
    for (let index = 0; index < nbFaces; index++) {
        uvs.push(faceUV[index].z, _Compat_compatibilityOptions_js__WEBPACK_IMPORTED_MODULE_4__/* .useOpenGLOrientationForUV */ .rX ? 1.0 - faceUV[index].w : faceUV[index].w);
        uvs.push(faceUV[index].x, _Compat_compatibilityOptions_js__WEBPACK_IMPORTED_MODULE_4__/* .useOpenGLOrientationForUV */ .rX ? 1.0 - faceUV[index].w : faceUV[index].w);
        uvs.push(faceUV[index].x, _Compat_compatibilityOptions_js__WEBPACK_IMPORTED_MODULE_4__/* .useOpenGLOrientationForUV */ .rX ? 1.0 - faceUV[index].y : faceUV[index].y);
        uvs.push(faceUV[index].z, _Compat_compatibilityOptions_js__WEBPACK_IMPORTED_MODULE_4__/* .useOpenGLOrientationForUV */ .rX ? 1.0 - faceUV[index].y : faceUV[index].y);
        if (faceColors) {
            for (let c = 0; c < 4; c++) {
                colors.push(faceColors[index].r, faceColors[index].g, faceColors[index].b, faceColors[index].a);
            }
        }
    }
    // sides
    _mesh_vertexData_js__WEBPACK_IMPORTED_MODULE_3__/* .VertexData */ .P._ComputeSides(sideOrientation, positions, indices, normals, uvs, options.frontUVs, options.backUVs);
    // Result
    const vertexData = new _mesh_vertexData_js__WEBPACK_IMPORTED_MODULE_3__/* .VertexData */ .P();
    vertexData.indices = indices;
    vertexData.positions = positions;
    vertexData.normals = normals;
    vertexData.uvs = uvs;
    if (faceColors) {
        const totalColors = sideOrientation === _mesh_vertexData_js__WEBPACK_IMPORTED_MODULE_3__/* .VertexData */ .P.DOUBLESIDE ? colors.concat(colors) : colors;
        vertexData.colors = totalColors;
    }
    return vertexData;
}
/**
 * Creates the VertexData for a segmented box
 * @param options an object used to set the following optional parameters for the box, required but can be empty
 * * size sets the width, height and depth of the box to the value of size, optional default 1
 * * width sets the width (x direction) of the box, overwrites the width set by size, optional, default size
 * * height sets the height (y direction) of the box, overwrites the height set by size, optional, default size
 * * depth sets the depth (z direction) of the box, overwrites the depth set by size, optional, default size
 * * segments sets the number of segments on the all axis (1 by default)
 * * widthSegments sets the number of segments on the x axis (1 by default)
 * * heightSegments sets the number of segments on the y axis (1 by default)
 * * depthSegments sets the number of segments on the z axis (1 by default)
 * @returns the VertexData of the box
 */
function CreateSegmentedBoxVertexData(options) {
    const width = options.width || options.size || 1;
    const height = options.height || options.size || 1;
    const depth = options.depth || options.size || 1;
    const widthSegments = (options.widthSegments || options.segments || 1) | 0;
    const heightSegments = (options.heightSegments || options.segments || 1) | 0;
    const depthSegments = (options.depthSegments || options.segments || 1) | 0;
    const rotationMatrix = new _Maths_math_vector_js__WEBPACK_IMPORTED_MODULE_0__/* .Matrix */ .uq();
    const translationMatrix = new _Maths_math_vector_js__WEBPACK_IMPORTED_MODULE_0__/* .Matrix */ .uq();
    const transformMatrix = new _Maths_math_vector_js__WEBPACK_IMPORTED_MODULE_0__/* .Matrix */ .uq();
    const bottomPlane = (0,_groundBuilder_js__WEBPACK_IMPORTED_MODULE_5__/* .CreateGroundVertexData */ .EH)({ width: width, height: depth, subdivisionsX: widthSegments, subdivisionsY: depthSegments });
    _Maths_math_vector_js__WEBPACK_IMPORTED_MODULE_0__/* .Matrix */ .uq.TranslationToRef(0, -height / 2, 0, translationMatrix);
    _Maths_math_vector_js__WEBPACK_IMPORTED_MODULE_0__/* .Matrix */ .uq.RotationZToRef(Math.PI, rotationMatrix);
    rotationMatrix.multiplyToRef(translationMatrix, transformMatrix);
    bottomPlane.transform(transformMatrix);
    const topPlane = (0,_groundBuilder_js__WEBPACK_IMPORTED_MODULE_5__/* .CreateGroundVertexData */ .EH)({ width: width, height: depth, subdivisionsX: widthSegments, subdivisionsY: depthSegments });
    _Maths_math_vector_js__WEBPACK_IMPORTED_MODULE_0__/* .Matrix */ .uq.TranslationToRef(0, height / 2, 0, transformMatrix);
    topPlane.transform(transformMatrix);
    const negXPlane = (0,_groundBuilder_js__WEBPACK_IMPORTED_MODULE_5__/* .CreateGroundVertexData */ .EH)({ width: height, height: depth, subdivisionsX: heightSegments, subdivisionsY: depthSegments });
    _Maths_math_vector_js__WEBPACK_IMPORTED_MODULE_0__/* .Matrix */ .uq.TranslationToRef(-width / 2, 0, 0, translationMatrix);
    _Maths_math_vector_js__WEBPACK_IMPORTED_MODULE_0__/* .Matrix */ .uq.RotationZToRef(Math.PI / 2, rotationMatrix);
    rotationMatrix.multiplyToRef(translationMatrix, transformMatrix);
    negXPlane.transform(transformMatrix);
    const posXPlane = (0,_groundBuilder_js__WEBPACK_IMPORTED_MODULE_5__/* .CreateGroundVertexData */ .EH)({ width: height, height: depth, subdivisionsX: heightSegments, subdivisionsY: depthSegments });
    _Maths_math_vector_js__WEBPACK_IMPORTED_MODULE_0__/* .Matrix */ .uq.TranslationToRef(width / 2, 0, 0, translationMatrix);
    _Maths_math_vector_js__WEBPACK_IMPORTED_MODULE_0__/* .Matrix */ .uq.RotationZToRef(-Math.PI / 2, rotationMatrix);
    rotationMatrix.multiplyToRef(translationMatrix, transformMatrix);
    posXPlane.transform(transformMatrix);
    const negZPlane = (0,_groundBuilder_js__WEBPACK_IMPORTED_MODULE_5__/* .CreateGroundVertexData */ .EH)({ width: width, height: height, subdivisionsX: widthSegments, subdivisionsY: heightSegments });
    _Maths_math_vector_js__WEBPACK_IMPORTED_MODULE_0__/* .Matrix */ .uq.TranslationToRef(0, 0, -depth / 2, translationMatrix);
    _Maths_math_vector_js__WEBPACK_IMPORTED_MODULE_0__/* .Matrix */ .uq.RotationXToRef(-Math.PI / 2, rotationMatrix);
    rotationMatrix.multiplyToRef(translationMatrix, transformMatrix);
    negZPlane.transform(transformMatrix);
    const posZPlane = (0,_groundBuilder_js__WEBPACK_IMPORTED_MODULE_5__/* .CreateGroundVertexData */ .EH)({ width: width, height: height, subdivisionsX: widthSegments, subdivisionsY: heightSegments });
    _Maths_math_vector_js__WEBPACK_IMPORTED_MODULE_0__/* .Matrix */ .uq.TranslationToRef(0, 0, depth / 2, translationMatrix);
    _Maths_math_vector_js__WEBPACK_IMPORTED_MODULE_0__/* .Matrix */ .uq.RotationXToRef(Math.PI / 2, rotationMatrix);
    rotationMatrix.multiplyToRef(translationMatrix, transformMatrix);
    posZPlane.transform(transformMatrix);
    // Result
    bottomPlane.merge([topPlane, posXPlane, negXPlane, negZPlane, posZPlane], true);
    return bottomPlane;
}
/**
 * Creates a box mesh
 * * The parameter `size` sets the size (float) of each box side (default 1)
 * * You can set some different box dimensions by using the parameters `width`, `height` and `depth` (all by default have the same value of `size`)
 * * You can set different colors and different images to each box side by using the parameters `faceColors` (an array of 6 Color3 elements) and `faceUV` (an array of 6 Vector4 elements)
 * * Please read this tutorial : https://doc.babylonjs.com/features/featuresDeepDive/materials/using/texturePerBoxFace
 * * You can also set the mesh side orientation with the values : BABYLON.Mesh.FRONTSIDE (default), BABYLON.Mesh.BACKSIDE or BABYLON.Mesh.DOUBLESIDE
 * * If you create a double-sided mesh, you can choose what parts of the texture image to crop and stick respectively on the front and the back sides with the parameters `frontUVs` and `backUVs` (Vector4). Detail here : https://doc.babylonjs.com/features/featuresDeepDive/mesh/creation/set#side-orientation
 * * The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created
 * @see https://doc.babylonjs.com/features/featuresDeepDive/mesh/creation/set#box
 * @param name defines the name of the mesh
 * @param options defines the options used to create the mesh
 * @param scene defines the hosting scene
 * @returns the box mesh
 */
function CreateBox(name, options = {}, scene = null) {
    const box = new _mesh_js__WEBPACK_IMPORTED_MODULE_2__/* .Mesh */ .e(name, scene);
    options.sideOrientation = _mesh_js__WEBPACK_IMPORTED_MODULE_2__/* .Mesh */ .e._GetDefaultSideOrientation(options.sideOrientation);
    box._originalBuilderSideOrientation = options.sideOrientation;
    const vertexData = CreateBoxVertexData(options);
    vertexData.applyToMesh(box, options.updatable);
    return box;
}
/**
 * Class containing static functions to help procedurally build meshes
 * @deprecated please use CreateBox directly
 */
const BoxBuilder = {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    CreateBox,
};
// Side effects
_mesh_vertexData_js__WEBPACK_IMPORTED_MODULE_3__/* .VertexData */ .P.CreateBox = CreateBoxVertexData;
_mesh_js__WEBPACK_IMPORTED_MODULE_2__/* .Mesh */ .e.CreateBox = (name, size, scene = null, updatable, sideOrientation) => {
    const options = {
        size,
        sideOrientation,
        updatable,
    };
    return CreateBox(name, options, scene);
};
//# sourceMappingURL=boxBuilder.js.map

/***/ }),

/***/ 66423:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EH: () => (/* binding */ CreateGroundVertexData),
/* harmony export */   RI: () => (/* binding */ CreateGroundFromHeightMap),
/* harmony export */   km: () => (/* binding */ CreateGround),
/* harmony export */   ol: () => (/* binding */ CreateTiledGround)
/* harmony export */ });
/* unused harmony exports CreateTiledGroundVertexData, CreateGroundFromHeightMapVertexData, GroundBuilder */
/* harmony import */ var _Maths_math_vector_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(79923);
/* harmony import */ var _Maths_math_color_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26041);
/* harmony import */ var _mesh_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(76595);
/* harmony import */ var _mesh_vertexData_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(36803);
/* harmony import */ var _groundMesh_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(11420);
/* harmony import */ var _Misc_tools_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(998);
/* harmony import */ var _Engines_engineStore_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6315);
/* harmony import */ var _Maths_math_constants_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(65559);
/* harmony import */ var _Compat_compatibilityOptions_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(91313);









/**
 * Creates the VertexData for a Ground
 * @param options an object used to set the following optional parameters for the Ground, required but can be empty
 * @param options.width the width (x direction) of the ground, optional, default 1
 * @param options.height the height (z direction) of the ground, optional, default 1
 * @param options.subdivisions the number of subdivisions per side, optional, default 1
 * @param options.subdivisionsX the number of subdivisions in the x direction, overrides options.subdivisions, optional, default undefined
 * @param options.subdivisionsY the number of subdivisions in the y direction, overrides options.subdivisions, optional, default undefined
 * @returns the VertexData of the Ground
 */
function CreateGroundVertexData(options) {
    const indices = [];
    const positions = [];
    const normals = [];
    const uvs = [];
    let row, col;
    const width = options.width || options.size || 1;
    const height = options.height || options.size || 1;
    const subdivisionsX = (options.subdivisionsX || options.subdivisions || 1) | 0;
    const subdivisionsY = (options.subdivisionsY || options.subdivisions || 1) | 0;
    for (row = 0; row <= subdivisionsY; row++) {
        for (col = 0; col <= subdivisionsX; col++) {
            const position = new _Maths_math_vector_js__WEBPACK_IMPORTED_MODULE_0__/* .Vector3 */ .Pq((col * width) / subdivisionsX - width / 2.0, 0, ((subdivisionsY - row) * height) / subdivisionsY - height / 2.0);
            const normal = new _Maths_math_vector_js__WEBPACK_IMPORTED_MODULE_0__/* .Vector3 */ .Pq(0, 1.0, 0);
            positions.push(position.x, position.y, position.z);
            normals.push(normal.x, normal.y, normal.z);
            uvs.push(col / subdivisionsX, _Compat_compatibilityOptions_js__WEBPACK_IMPORTED_MODULE_8__/* .useOpenGLOrientationForUV */ .rX ? row / subdivisionsY : 1.0 - row / subdivisionsY);
        }
    }
    for (row = 0; row < subdivisionsY; row++) {
        for (col = 0; col < subdivisionsX; col++) {
            indices.push(col + 1 + (row + 1) * (subdivisionsX + 1));
            indices.push(col + 1 + row * (subdivisionsX + 1));
            indices.push(col + row * (subdivisionsX + 1));
            indices.push(col + (row + 1) * (subdivisionsX + 1));
            indices.push(col + 1 + (row + 1) * (subdivisionsX + 1));
            indices.push(col + row * (subdivisionsX + 1));
        }
    }
    // Result
    const vertexData = new _mesh_vertexData_js__WEBPACK_IMPORTED_MODULE_3__/* .VertexData */ .P();
    vertexData.indices = indices;
    vertexData.positions = positions;
    vertexData.normals = normals;
    vertexData.uvs = uvs;
    return vertexData;
}
/**
 * Creates the VertexData for a TiledGround by subdividing the ground into tiles
 * @param options an object used to set the following optional parameters for the Ground
 * @param options.xmin ground minimum X coordinate, default -1
 * @param options.zmin ground minimum Z coordinate, default -1
 * @param options.xmax ground maximum X coordinate, default 1
 * @param options.zmax ground maximum Z coordinate, default 1
 * @param options.subdivisions a javascript object {w: positive integer, h: positive integer}, `w` and `h` are the numbers of subdivisions on the ground width and height creating 'tiles', default {w: 6, h: 6}
 * @param options.subdivisions.w positive integer, default 6
 * @param options.subdivisions.h positive integer, default 6
 * @param options.precision a javascript object {w: positive integer, h: positive integer}, `w` and `h` are the numbers of subdivisions on the tile width and height, default {w: 2, h: 2}
 * @param options.precision.w positive integer, default 2
 * @param options.precision.h positive integer, default 2
 * @returns the VertexData of the TiledGround
 */
function CreateTiledGroundVertexData(options) {
    const xmin = options.xmin !== undefined && options.xmin !== null ? options.xmin : -1.0;
    const zmin = options.zmin !== undefined && options.zmin !== null ? options.zmin : -1.0;
    const xmax = options.xmax !== undefined && options.xmax !== null ? options.xmax : 1.0;
    const zmax = options.zmax !== undefined && options.zmax !== null ? options.zmax : 1.0;
    const subdivisions = options.subdivisions || { w: 1, h: 1 };
    const precision = options.precision || { w: 1, h: 1 };
    const indices = [];
    const positions = [];
    const normals = [];
    const uvs = [];
    let row, col, tileRow, tileCol;
    subdivisions.h = subdivisions.h < 1 ? 1 : subdivisions.h;
    subdivisions.w = subdivisions.w < 1 ? 1 : subdivisions.w;
    precision.w = precision.w < 1 ? 1 : precision.w;
    precision.h = precision.h < 1 ? 1 : precision.h;
    const tileSize = {
        w: (xmax - xmin) / subdivisions.w,
        h: (zmax - zmin) / subdivisions.h,
    };
    function applyTile(xTileMin, zTileMin, xTileMax, zTileMax) {
        // Indices
        const base = positions.length / 3;
        const rowLength = precision.w + 1;
        for (row = 0; row < precision.h; row++) {
            for (col = 0; col < precision.w; col++) {
                const square = [base + col + row * rowLength, base + (col + 1) + row * rowLength, base + (col + 1) + (row + 1) * rowLength, base + col + (row + 1) * rowLength];
                indices.push(square[1]);
                indices.push(square[2]);
                indices.push(square[3]);
                indices.push(square[0]);
                indices.push(square[1]);
                indices.push(square[3]);
            }
        }
        // Position, normals and uvs
        const position = _Maths_math_vector_js__WEBPACK_IMPORTED_MODULE_0__/* .Vector3 */ .Pq.Zero();
        const normal = new _Maths_math_vector_js__WEBPACK_IMPORTED_MODULE_0__/* .Vector3 */ .Pq(0, 1.0, 0);
        for (row = 0; row <= precision.h; row++) {
            position.z = (row * (zTileMax - zTileMin)) / precision.h + zTileMin;
            for (col = 0; col <= precision.w; col++) {
                position.x = (col * (xTileMax - xTileMin)) / precision.w + xTileMin;
                position.y = 0;
                positions.push(position.x, position.y, position.z);
                normals.push(normal.x, normal.y, normal.z);
                uvs.push(col / precision.w, row / precision.h);
            }
        }
    }
    for (tileRow = 0; tileRow < subdivisions.h; tileRow++) {
        for (tileCol = 0; tileCol < subdivisions.w; tileCol++) {
            applyTile(xmin + tileCol * tileSize.w, zmin + tileRow * tileSize.h, xmin + (tileCol + 1) * tileSize.w, zmin + (tileRow + 1) * tileSize.h);
        }
    }
    // Result
    const vertexData = new _mesh_vertexData_js__WEBPACK_IMPORTED_MODULE_3__/* .VertexData */ .P();
    vertexData.indices = indices;
    vertexData.positions = positions;
    vertexData.normals = normals;
    vertexData.uvs = uvs;
    return vertexData;
}
/**
 * Creates the VertexData of the Ground designed from a heightmap
 * @param options an object used to set the following parameters for the Ground, required and provided by CreateGroundFromHeightMap
 * @param options.width the width (x direction) of the ground
 * @param options.height the height (z direction) of the ground
 * @param options.subdivisions the number of subdivisions per side
 * @param options.minHeight the minimum altitude on the ground, optional, default 0
 * @param options.maxHeight the maximum altitude on the ground, optional default 1
 * @param options.colorFilter the filter to apply to the image pixel colors to compute the height, optional Color3, default (0.3, 0.59, 0.11)
 * @param options.buffer the array holding the image color data
 * @param options.bufferWidth the width of image
 * @param options.bufferHeight the height of image
 * @param options.alphaFilter Remove any data where the alpha channel is below this value, defaults 0 (all data visible)
 * @param options.heightBuffer a array of floats where the height data can be saved, if its length is greater than zero.
 * @returns the VertexData of the Ground designed from a heightmap
 */
function CreateGroundFromHeightMapVertexData(options) {
    const indices = [];
    const positions = [];
    const normals = [];
    const uvs = [];
    let row, col;
    const filter = options.colorFilter || new _Maths_math_color_js__WEBPACK_IMPORTED_MODULE_1__/* .Color3 */ .v9(0.3, 0.59, 0.11);
    const alphaFilter = options.alphaFilter || 0.0;
    let invert = false;
    if (options.minHeight > options.maxHeight) {
        invert = true;
        const temp = options.maxHeight;
        options.maxHeight = options.minHeight;
        options.minHeight = temp;
    }
    // Vertices
    for (row = 0; row <= options.subdivisions; row++) {
        for (col = 0; col <= options.subdivisions; col++) {
            const position = new _Maths_math_vector_js__WEBPACK_IMPORTED_MODULE_0__/* .Vector3 */ .Pq((col * options.width) / options.subdivisions - options.width / 2.0, 0, ((options.subdivisions - row) * options.height) / options.subdivisions - options.height / 2.0);
            // Compute height
            const heightMapX = (((position.x + options.width / 2) / options.width) * (options.bufferWidth - 1)) | 0;
            const heightMapY = ((1.0 - (position.z + options.height / 2) / options.height) * (options.bufferHeight - 1)) | 0;
            const pos = (heightMapX + heightMapY * options.bufferWidth) * 4;
            let r = options.buffer[pos] / 255.0;
            let g = options.buffer[pos + 1] / 255.0;
            let b = options.buffer[pos + 2] / 255.0;
            const a = options.buffer[pos + 3] / 255.0;
            if (invert) {
                r = 1.0 - r;
                g = 1.0 - g;
                b = 1.0 - b;
            }
            const gradient = r * filter.r + g * filter.g + b * filter.b;
            // If our alpha channel is not within our filter then we will assign a 'special' height
            // Then when building the indices, we will ignore any vertex that is using the special height
            if (a >= alphaFilter) {
                position.y = options.minHeight + (options.maxHeight - options.minHeight) * gradient;
            }
            else {
                position.y = options.minHeight - _Maths_math_constants_js__WEBPACK_IMPORTED_MODULE_7__/* .Epsilon */ .bH; // We can't have a height below minHeight, normally.
            }
            if (options.heightBuffer) {
                // set the height buffer information in row major order.
                options.heightBuffer[row * (options.subdivisions + 1) + col] = position.y;
            }
            // Add  vertex
            positions.push(position.x, position.y, position.z);
            normals.push(0, 0, 0);
            uvs.push(col / options.subdivisions, 1.0 - row / options.subdivisions);
        }
    }
    // Indices
    for (row = 0; row < options.subdivisions; row++) {
        for (col = 0; col < options.subdivisions; col++) {
            // Calculate Indices
            const idx1 = col + 1 + (row + 1) * (options.subdivisions + 1);
            const idx2 = col + 1 + row * (options.subdivisions + 1);
            const idx3 = col + row * (options.subdivisions + 1);
            const idx4 = col + (row + 1) * (options.subdivisions + 1);
            // Check that all indices are visible (based on our special height)
            // Only display the vertex if all Indices are visible
            // Positions are stored x,y,z for each vertex, hence the * 3 and + 1 for height
            const isVisibleIdx1 = positions[idx1 * 3 + 1] >= options.minHeight;
            const isVisibleIdx2 = positions[idx2 * 3 + 1] >= options.minHeight;
            const isVisibleIdx3 = positions[idx3 * 3 + 1] >= options.minHeight;
            if (isVisibleIdx1 && isVisibleIdx2 && isVisibleIdx3) {
                indices.push(idx1);
                indices.push(idx2);
                indices.push(idx3);
            }
            const isVisibleIdx4 = positions[idx4 * 3 + 1] >= options.minHeight;
            if (isVisibleIdx4 && isVisibleIdx1 && isVisibleIdx3) {
                indices.push(idx4);
                indices.push(idx1);
                indices.push(idx3);
            }
        }
    }
    // Normals
    _mesh_vertexData_js__WEBPACK_IMPORTED_MODULE_3__/* .VertexData */ .P.ComputeNormals(positions, indices, normals);
    // Result
    const vertexData = new _mesh_vertexData_js__WEBPACK_IMPORTED_MODULE_3__/* .VertexData */ .P();
    vertexData.indices = indices;
    vertexData.positions = positions;
    vertexData.normals = normals;
    vertexData.uvs = uvs;
    return vertexData;
}
/**
 * Creates a ground mesh
 * @param name defines the name of the mesh
 * @param options defines the options used to create the mesh
 * @param options.width set the width size (float, default 1)
 * @param options.height set the height size (float, default 1)
 * @param options.subdivisions sets the number of subdivision per side (default 1)
 * @param options.subdivisionsX sets the number of subdivision on the X axis (overrides subdivisions)
 * @param options.subdivisionsY sets the number of subdivision on the Y axis (overrides subdivisions)
 * @param options.updatable defines if the mesh must be flagged as updatable (default false)
 * @param scene defines the hosting scene
 * @returns the ground mesh
 * @see https://doc.babylonjs.com/features/featuresDeepDive/mesh/creation/set#ground
 */
function CreateGround(name, options = {}, scene) {
    const ground = new _groundMesh_js__WEBPACK_IMPORTED_MODULE_4__/* .GroundMesh */ .f(name, scene);
    ground._setReady(false);
    ground._subdivisionsX = options.subdivisionsX || options.subdivisions || 1;
    ground._subdivisionsY = options.subdivisionsY || options.subdivisions || 1;
    ground._width = options.width || 1;
    ground._height = options.height || 1;
    ground._maxX = ground._width / 2;
    ground._maxZ = ground._height / 2;
    ground._minX = -ground._maxX;
    ground._minZ = -ground._maxZ;
    const vertexData = CreateGroundVertexData(options);
    vertexData.applyToMesh(ground, options.updatable);
    ground._setReady(true);
    return ground;
}
/**
 * Creates a tiled ground mesh
 * @param name defines the name of the mesh
 * @param options defines the options used to create the mesh
 * @param options.xmin ground minimum X coordinate (float, default -1)
 * @param options.zmin ground minimum Z coordinate (float, default -1)
 * @param options.xmax ground maximum X coordinate (float, default 1)
 * @param options.zmax ground maximum Z coordinate (float, default 1)
 * @param options.subdivisions a javascript object `{w: positive integer, h: positive integer}` (default `{w: 6, h: 6}`). `w` and `h` are the numbers of subdivisions on the ground width and height. Each subdivision is called a tile
 * @param options.subdivisions.w positive integer, default 6
 * @param options.subdivisions.h positive integer, default 6
 * @param options.precision a javascript object `{w: positive integer, h: positive integer}` (default `{w: 2, h: 2}`). `w` and `h` are the numbers of subdivisions on the ground width and height of each tile
 * @param options.precision.w positive integer, default 2
 * @param options.precision.h positive integer, default 2
 * @param options.updatable boolean, default false, true if the mesh must be flagged as updatable
 * @param scene defines the hosting scene
 * @returns the tiled ground mesh
 * @see https://doc.babylonjs.com/features/featuresDeepDive/mesh/creation/set#tiled-ground
 */
function CreateTiledGround(name, options, scene = null) {
    const tiledGround = new _mesh_js__WEBPACK_IMPORTED_MODULE_2__/* .Mesh */ .e(name, scene);
    const vertexData = CreateTiledGroundVertexData(options);
    vertexData.applyToMesh(tiledGround, options.updatable);
    return tiledGround;
}
/**
 * Creates a ground mesh from a height map. The height map download can take some frames,
 * so the mesh is not immediately ready. To wait for the mesh to be completely built,
 * you should use the `onReady` callback option.
 * @param name defines the name of the mesh
 * @param url sets the URL of the height map image resource.
 * @param options defines the options used to create the mesh
 * @param options.width sets the ground width size (positive float, default 10)
 * @param options.height sets the ground height size (positive float, default 10)
 * @param options.subdivisions sets the number of subdivision per side (positive integer, default 1)
 * @param options.minHeight is the minimum altitude on the ground (float, default 0)
 * @param options.maxHeight is the maximum altitude on the ground (float, default 1)
 * @param options.colorFilter is the filter to apply to the image pixel colors to compute the height (optional Color3, default (0.3, 0.59, 0.11) )
 * @param options.alphaFilter will filter any data where the alpha channel is below this value, defaults 0 (all data visible)
 * @param options.updatable defines if the mesh must be flagged as updatable
 * @param options.onReady is a javascript callback function that will be called once the mesh is just built (the height map download can last some time)
 * @param options.onError is a javascript callback function that will be called if there is an error
 * @param options.passHeightBufferInCallback a boolean that indicates if the calculated height data will be passed in the onReady callback. Useful if you need the height data for physics, for example.
 * @param scene defines the hosting scene
 * @returns the ground mesh
 * @see https://doc.babylonjs.com/features/featuresDeepDive/mesh/creation/set/height_map
 * @see https://doc.babylonjs.com/features/featuresDeepDive/mesh/creation/set#ground-from-a-height-map
 */
function CreateGroundFromHeightMap(name, url, options = {}, scene = null) {
    const width = options.width || 10.0;
    const height = options.height || 10.0;
    const subdivisions = options.subdivisions || 1 | 0;
    const minHeight = options.minHeight || 0.0;
    const maxHeight = options.maxHeight || 1.0;
    const filter = options.colorFilter || new _Maths_math_color_js__WEBPACK_IMPORTED_MODULE_1__/* .Color3 */ .v9(0.3, 0.59, 0.11);
    const alphaFilter = options.alphaFilter || 0.0;
    const updatable = options.updatable;
    const onReady = options.onReady;
    scene = scene || _Engines_engineStore_js__WEBPACK_IMPORTED_MODULE_6__/* .EngineStore */ .q.LastCreatedScene;
    const ground = new _groundMesh_js__WEBPACK_IMPORTED_MODULE_4__/* .GroundMesh */ .f(name, scene);
    ground._subdivisionsX = subdivisions;
    ground._subdivisionsY = subdivisions;
    ground._width = width;
    ground._height = height;
    ground._maxX = ground._width / 2.0;
    ground._maxZ = ground._height / 2.0;
    ground._minX = -ground._maxX;
    ground._minZ = -ground._maxZ;
    ground._setReady(false);
    let heightBuffer;
    if (options.passHeightBufferInCallback) {
        heightBuffer = new Float32Array((subdivisions + 1) * (subdivisions + 1));
    }
    const onBufferLoaded = (buffer, bufferWidth, bufferHeight) => {
        const vertexData = CreateGroundFromHeightMapVertexData({
            width: width,
            height: height,
            subdivisions: subdivisions,
            minHeight: minHeight,
            maxHeight: maxHeight,
            colorFilter: filter,
            buffer: buffer,
            bufferWidth: bufferWidth,
            bufferHeight: bufferHeight,
            alphaFilter: alphaFilter,
            heightBuffer,
        });
        vertexData.applyToMesh(ground, updatable);
        //execute ready callback, if set
        if (onReady) {
            onReady(ground, heightBuffer);
        }
        ground._setReady(true);
    };
    if (typeof url === "string") {
        const onload = (img) => {
            const bufferWidth = img.width;
            const bufferHeight = img.height;
            if (scene.isDisposed) {
                return;
            }
            const buffer = scene?.getEngine().resizeImageBitmap(img, bufferWidth, bufferHeight);
            onBufferLoaded(buffer, bufferWidth, bufferHeight);
        };
        _Misc_tools_js__WEBPACK_IMPORTED_MODULE_5__/* .Tools */ .S0.LoadImage(url, onload, options.onError ? options.onError : () => { }, scene.offlineProvider);
    }
    else {
        onBufferLoaded(url.data, url.width, url.height);
    }
    return ground;
}
/**
 * Class containing static functions to help procedurally build meshes
 * @deprecated use the functions directly from the module
 */
const GroundBuilder = {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    CreateGround,
    // eslint-disable-next-line @typescript-eslint/naming-convention
    CreateGroundFromHeightMap,
    // eslint-disable-next-line @typescript-eslint/naming-convention
    CreateTiledGround,
};
_mesh_vertexData_js__WEBPACK_IMPORTED_MODULE_3__/* .VertexData */ .P.CreateGround = CreateGroundVertexData;
_mesh_vertexData_js__WEBPACK_IMPORTED_MODULE_3__/* .VertexData */ .P.CreateTiledGround = CreateTiledGroundVertexData;
_mesh_vertexData_js__WEBPACK_IMPORTED_MODULE_3__/* .VertexData */ .P.CreateGroundFromHeightMap = CreateGroundFromHeightMapVertexData;
_mesh_js__WEBPACK_IMPORTED_MODULE_2__/* .Mesh */ .e.CreateGround = (name, width, height, subdivisions, scene, updatable) => {
    const options = {
        width,
        height,
        subdivisions,
        updatable,
    };
    return CreateGround(name, options, scene);
};
_mesh_js__WEBPACK_IMPORTED_MODULE_2__/* .Mesh */ .e.CreateTiledGround = (name, xmin, zmin, xmax, zmax, subdivisions, precision, scene, updatable) => {
    const options = {
        xmin,
        zmin,
        xmax,
        zmax,
        subdivisions,
        precision,
        updatable,
    };
    return CreateTiledGround(name, options, scene);
};
_mesh_js__WEBPACK_IMPORTED_MODULE_2__/* .Mesh */ .e.CreateGroundFromHeightMap = (name, url, width, height, subdivisions, minHeight, maxHeight, scene, updatable, onReady, alphaFilter) => {
    const options = {
        width,
        height,
        subdivisions,
        minHeight,
        maxHeight,
        updatable,
        onReady,
        alphaFilter,
    };
    return CreateGroundFromHeightMap(name, url, options, scene);
};
//# sourceMappingURL=groundBuilder.js.map

/***/ }),

/***/ 11420:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   f: () => (/* binding */ GroundMesh)
/* harmony export */ });
/* harmony import */ var _Maths_math_vector_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(79923);
/* harmony import */ var _Buffers_buffer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(95616);
/* harmony import */ var _Meshes_mesh_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(76595);



_Meshes_mesh_js__WEBPACK_IMPORTED_MODULE_2__/* .Mesh */ .e._GroundMeshParser = (parsedMesh, scene) => {
    return GroundMesh.Parse(parsedMesh, scene);
};
/**
 * Mesh representing the ground
 */
class GroundMesh extends _Meshes_mesh_js__WEBPACK_IMPORTED_MODULE_2__/* .Mesh */ .e {
    constructor(name, scene) {
        super(name, scene);
        /** If octree should be generated */
        this.generateOctree = false;
    }
    /**
     * "GroundMesh"
     * @returns "GroundMesh"
     */
    getClassName() {
        return "GroundMesh";
    }
    /**
     * The minimum of x and y subdivisions
     */
    get subdivisions() {
        return Math.min(this._subdivisionsX, this._subdivisionsY);
    }
    /**
     * X subdivisions
     */
    get subdivisionsX() {
        return this._subdivisionsX;
    }
    /**
     * Y subdivisions
     */
    get subdivisionsY() {
        return this._subdivisionsY;
    }
    /**
     * This function will divide the mesh into submeshes and update an octree to help to select the right submeshes
     * for rendering, picking and collision computations. Please note that you must have a decent number of submeshes
     * to get performance improvements when using an octree.
     * @param chunksCount the number of submeshes the mesh will be divided into
     * @param octreeBlocksSize the maximum size of the octree blocks (Default: 32)
     */
    optimize(chunksCount, octreeBlocksSize = 32) {
        this._subdivisionsX = chunksCount;
        this._subdivisionsY = chunksCount;
        this.subdivide(chunksCount);
        // Call the octree system optimization if it is defined.
        const thisAsAny = this;
        if (thisAsAny.createOrUpdateSubmeshesOctree) {
            thisAsAny.createOrUpdateSubmeshesOctree(octreeBlocksSize);
        }
    }
    /**
     * Returns a height (y) value in the World system :
     * the ground altitude at the coordinates (x, z) expressed in the World system.
     * @param x x coordinate
     * @param z z coordinate
     * @returns the ground y position if (x, z) are outside the ground surface.
     */
    getHeightAtCoordinates(x, z) {
        const world = this.getWorldMatrix();
        const invMat = _Maths_math_vector_js__WEBPACK_IMPORTED_MODULE_0__/* .TmpVectors */ .AA.Matrix[5];
        world.invertToRef(invMat);
        const tmpVect = _Maths_math_vector_js__WEBPACK_IMPORTED_MODULE_0__/* .TmpVectors */ .AA.Vector3[8];
        _Maths_math_vector_js__WEBPACK_IMPORTED_MODULE_0__/* .Vector3 */ .Pq.TransformCoordinatesFromFloatsToRef(x, 0.0, z, invMat, tmpVect); // transform x,z in the mesh local space
        x = tmpVect.x;
        z = tmpVect.z;
        if (x < this._minX || x >= this._maxX || z <= this._minZ || z > this._maxZ) {
            return this.position.y;
        }
        if (!this._heightQuads || this._heightQuads.length == 0) {
            this._initHeightQuads();
            this._computeHeightQuads();
        }
        const facet = this._getFacetAt(x, z);
        const y = -(facet.x * x + facet.z * z + facet.w) / facet.y;
        // return y in the World system
        _Maths_math_vector_js__WEBPACK_IMPORTED_MODULE_0__/* .Vector3 */ .Pq.TransformCoordinatesFromFloatsToRef(0.0, y, 0.0, world, tmpVect);
        return tmpVect.y;
    }
    /**
     * Returns a normalized vector (Vector3) orthogonal to the ground
     * at the ground coordinates (x, z) expressed in the World system.
     * @param x x coordinate
     * @param z z coordinate
     * @returns Vector3(0.0, 1.0, 0.0) if (x, z) are outside the ground surface.
     */
    getNormalAtCoordinates(x, z) {
        const normal = new _Maths_math_vector_js__WEBPACK_IMPORTED_MODULE_0__/* .Vector3 */ .Pq(0.0, 1.0, 0.0);
        this.getNormalAtCoordinatesToRef(x, z, normal);
        return normal;
    }
    /**
     * Updates the Vector3 passed a reference with a normalized vector orthogonal to the ground
     * at the ground coordinates (x, z) expressed in the World system.
     * Doesn't update the reference Vector3 if (x, z) are outside the ground surface.
     * @param x x coordinate
     * @param z z coordinate
     * @param ref vector to store the result
     * @returns the GroundMesh.
     */
    getNormalAtCoordinatesToRef(x, z, ref) {
        const world = this.getWorldMatrix();
        const tmpMat = _Maths_math_vector_js__WEBPACK_IMPORTED_MODULE_0__/* .TmpVectors */ .AA.Matrix[5];
        world.invertToRef(tmpMat);
        const tmpVect = _Maths_math_vector_js__WEBPACK_IMPORTED_MODULE_0__/* .TmpVectors */ .AA.Vector3[8];
        _Maths_math_vector_js__WEBPACK_IMPORTED_MODULE_0__/* .Vector3 */ .Pq.TransformCoordinatesFromFloatsToRef(x, 0.0, z, tmpMat, tmpVect); // transform x,z in the mesh local space
        x = tmpVect.x;
        z = tmpVect.z;
        if (x < this._minX || x > this._maxX || z < this._minZ || z > this._maxZ) {
            return this;
        }
        if (!this._heightQuads || this._heightQuads.length == 0) {
            this._initHeightQuads();
            this._computeHeightQuads();
        }
        const facet = this._getFacetAt(x, z);
        _Maths_math_vector_js__WEBPACK_IMPORTED_MODULE_0__/* .Vector3 */ .Pq.TransformNormalFromFloatsToRef(facet.x, facet.y, facet.z, world, ref);
        return this;
    }
    /**
     * Force the heights to be recomputed for getHeightAtCoordinates() or getNormalAtCoordinates()
     * if the ground has been updated.
     * This can be used in the render loop.
     * @returns the GroundMesh.
     */
    updateCoordinateHeights() {
        if (!this._heightQuads || this._heightQuads.length == 0) {
            this._initHeightQuads();
        }
        this._computeHeightQuads();
        return this;
    }
    // Returns the element "facet" from the heightQuads array relative to (x, z) local coordinates
    _getFacetAt(x, z) {
        // retrieve col and row from x, z coordinates in the ground local system
        const col = Math.floor(((x + this._maxX) * this._subdivisionsX) / this._width);
        const row = Math.floor((-(z + this._maxZ) * this._subdivisionsY) / this._height + this._subdivisionsY);
        const quad = this._heightQuads[row * this._subdivisionsX + col];
        let facet;
        if (z < quad.slope.x * x + quad.slope.y) {
            facet = quad.facet1;
        }
        else {
            facet = quad.facet2;
        }
        return facet;
    }
    //  Creates and populates the heightMap array with "facet" elements :
    // a quad is two triangular facets separated by a slope, so a "facet" element is 1 slope + 2 facets
    // slope : Vector2(c, h) = 2D diagonal line equation setting apart two triangular facets in a quad : z = cx + h
    // facet1 : Vector4(a, b, c, d) = first facet 3D plane equation : ax + by + cz + d = 0
    // facet2 :  Vector4(a, b, c, d) = second facet 3D plane equation : ax + by + cz + d = 0
    // Returns the GroundMesh.
    _initHeightQuads() {
        const subdivisionsX = this._subdivisionsX;
        const subdivisionsY = this._subdivisionsY;
        this._heightQuads = new Array();
        for (let row = 0; row < subdivisionsY; row++) {
            for (let col = 0; col < subdivisionsX; col++) {
                const quad = { slope: _Maths_math_vector_js__WEBPACK_IMPORTED_MODULE_0__/* .Vector2 */ .I9.Zero(), facet1: new _Maths_math_vector_js__WEBPACK_IMPORTED_MODULE_0__/* .Vector4 */ .IU(0.0, 0.0, 0.0, 0.0), facet2: new _Maths_math_vector_js__WEBPACK_IMPORTED_MODULE_0__/* .Vector4 */ .IU(0.0, 0.0, 0.0, 0.0) };
                this._heightQuads[row * subdivisionsX + col] = quad;
            }
        }
        return this;
    }
    // Compute each quad element values and update the heightMap array :
    // slope : Vector2(c, h) = 2D diagonal line equation setting apart two triangular facets in a quad : z = cx + h
    // facet1 : Vector4(a, b, c, d) = first facet 3D plane equation : ax + by + cz + d = 0
    // facet2 :  Vector4(a, b, c, d) = second facet 3D plane equation : ax + by + cz + d = 0
    // Returns the GroundMesh.
    _computeHeightQuads() {
        const positions = this.getVerticesData(_Buffers_buffer_js__WEBPACK_IMPORTED_MODULE_1__/* .VertexBuffer */ .R.PositionKind);
        if (!positions) {
            return this;
        }
        const v1 = _Maths_math_vector_js__WEBPACK_IMPORTED_MODULE_0__/* .TmpVectors */ .AA.Vector3[3];
        const v2 = _Maths_math_vector_js__WEBPACK_IMPORTED_MODULE_0__/* .TmpVectors */ .AA.Vector3[2];
        const v3 = _Maths_math_vector_js__WEBPACK_IMPORTED_MODULE_0__/* .TmpVectors */ .AA.Vector3[1];
        const v4 = _Maths_math_vector_js__WEBPACK_IMPORTED_MODULE_0__/* .TmpVectors */ .AA.Vector3[0];
        const v1v2 = _Maths_math_vector_js__WEBPACK_IMPORTED_MODULE_0__/* .TmpVectors */ .AA.Vector3[4];
        const v1v3 = _Maths_math_vector_js__WEBPACK_IMPORTED_MODULE_0__/* .TmpVectors */ .AA.Vector3[5];
        const v1v4 = _Maths_math_vector_js__WEBPACK_IMPORTED_MODULE_0__/* .TmpVectors */ .AA.Vector3[6];
        const norm1 = _Maths_math_vector_js__WEBPACK_IMPORTED_MODULE_0__/* .TmpVectors */ .AA.Vector3[7];
        const norm2 = _Maths_math_vector_js__WEBPACK_IMPORTED_MODULE_0__/* .TmpVectors */ .AA.Vector3[8];
        let i = 0;
        let j = 0;
        let k = 0;
        let cd = 0; // 2D slope coefficient : z = cd * x + h
        let h = 0;
        let d1 = 0; // facet plane equation : ax + by + cz + d = 0
        let d2 = 0;
        const subdivisionsX = this._subdivisionsX;
        const subdivisionsY = this._subdivisionsY;
        for (let row = 0; row < subdivisionsY; row++) {
            for (let col = 0; col < subdivisionsX; col++) {
                i = col * 3;
                j = row * (subdivisionsX + 1) * 3;
                k = (row + 1) * (subdivisionsX + 1) * 3;
                v1.x = positions[j + i];
                v1.y = positions[j + i + 1];
                v1.z = positions[j + i + 2];
                v2.x = positions[j + i + 3];
                v2.y = positions[j + i + 4];
                v2.z = positions[j + i + 5];
                v3.x = positions[k + i];
                v3.y = positions[k + i + 1];
                v3.z = positions[k + i + 2];
                v4.x = positions[k + i + 3];
                v4.y = positions[k + i + 4];
                v4.z = positions[k + i + 5];
                // 2D slope V1V4
                cd = (v4.z - v1.z) / (v4.x - v1.x);
                h = v1.z - cd * v1.x; // v1 belongs to the slope
                // facet equations :
                // we compute each facet normal vector
                // the equation of the facet plane is : norm.x * x + norm.y * y + norm.z * z + d = 0
                // we compute the value d by applying the equation to v1 which belongs to the plane
                // then we store the facet equation in a Vector4
                v2.subtractToRef(v1, v1v2);
                v3.subtractToRef(v1, v1v3);
                v4.subtractToRef(v1, v1v4);
                _Maths_math_vector_js__WEBPACK_IMPORTED_MODULE_0__/* .Vector3 */ .Pq.CrossToRef(v1v4, v1v3, norm1); // caution : CrossToRef uses the Tmp class
                _Maths_math_vector_js__WEBPACK_IMPORTED_MODULE_0__/* .Vector3 */ .Pq.CrossToRef(v1v2, v1v4, norm2);
                norm1.normalize();
                norm2.normalize();
                d1 = -(norm1.x * v1.x + norm1.y * v1.y + norm1.z * v1.z);
                d2 = -(norm2.x * v2.x + norm2.y * v2.y + norm2.z * v2.z);
                const quad = this._heightQuads[row * subdivisionsX + col];
                quad.slope.copyFromFloats(cd, h);
                quad.facet1.copyFromFloats(norm1.x, norm1.y, norm1.z, d1);
                quad.facet2.copyFromFloats(norm2.x, norm2.y, norm2.z, d2);
            }
        }
        return this;
    }
    /**
     * Serializes this ground mesh
     * @param serializationObject object to write serialization to
     */
    serialize(serializationObject) {
        super.serialize(serializationObject);
        serializationObject.subdivisionsX = this._subdivisionsX;
        serializationObject.subdivisionsY = this._subdivisionsY;
        serializationObject.minX = this._minX;
        serializationObject.maxX = this._maxX;
        serializationObject.minZ = this._minZ;
        serializationObject.maxZ = this._maxZ;
        serializationObject.width = this._width;
        serializationObject.height = this._height;
    }
    /**
     * Parses a serialized ground mesh
     * @param parsedMesh the serialized mesh
     * @param scene the scene to create the ground mesh in
     * @returns the created ground mesh
     */
    static Parse(parsedMesh, scene) {
        const result = new GroundMesh(parsedMesh.name, scene);
        result._subdivisionsX = parsedMesh.subdivisionsX || 1;
        result._subdivisionsY = parsedMesh.subdivisionsY || 1;
        result._minX = parsedMesh.minX;
        result._maxX = parsedMesh.maxX;
        result._minZ = parsedMesh.minZ;
        result._maxZ = parsedMesh.maxZ;
        result._width = parsedMesh.width;
        result._height = parsedMesh.height;
        return result;
    }
}
//# sourceMappingURL=groundMesh.js.map

/***/ })

}]);