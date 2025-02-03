"use strict";
(self["webpackChunkbabylon_bulletphysics"] = self["webpackChunkbabylon_bulletphysics"] || []).push([[7491],{

/***/ 99451:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   G: () => (/* binding */ AbstractActionManager)
/* harmony export */ });

/**
 * Abstract class used to decouple action Manager from scene and meshes.
 * Do not instantiate.
 * @see https://doc.babylonjs.com/features/featuresDeepDive/events/actions
 */
class AbstractActionManager {
    constructor() {
        /** Gets the cursor to use when hovering items */
        this.hoverCursor = "";
        /** Gets the list of actions */
        this.actions = [];
        /**
         * Gets or sets a boolean indicating that the manager is recursive meaning that it can trigger action from children
         */
        this.isRecursive = false;
        /**
         * Gets or sets a boolean indicating if this ActionManager should be disposed once the last Mesh using it is disposed
         */
        this.disposeWhenUnowned = true;
    }
    /**
     * Does exist one action manager with at least one trigger
     **/
    static get HasTriggers() {
        for (const t in AbstractActionManager.Triggers) {
            if (Object.prototype.hasOwnProperty.call(AbstractActionManager.Triggers, t)) {
                return true;
            }
        }
        return false;
    }
    /**
     * Does exist one action manager with at least one pick trigger
     **/
    static get HasPickTriggers() {
        for (const t in AbstractActionManager.Triggers) {
            if (Object.prototype.hasOwnProperty.call(AbstractActionManager.Triggers, t)) {
                const tAsInt = parseInt(t);
                if (tAsInt >= 1 && tAsInt <= 7) {
                    return true;
                }
            }
        }
        return false;
    }
    /**
     * Does exist one action manager that handles actions of a given trigger
     * @param trigger defines the trigger to be tested
     * @returns a boolean indicating whether the trigger is handled by at least one action manager
     **/
    static HasSpecificTrigger(trigger) {
        for (const t in AbstractActionManager.Triggers) {
            if (Object.prototype.hasOwnProperty.call(AbstractActionManager.Triggers, t)) {
                const tAsInt = parseInt(t);
                if (tAsInt === trigger) {
                    return true;
                }
            }
        }
        return false;
    }
}
/** Gets the list of active triggers */
AbstractActionManager.Triggers = {};
//# sourceMappingURL=abstractActionManager.js.map

/***/ }),

/***/ 61466:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   X: () => (/* binding */ ActionEvent)
/* harmony export */ });
/**
 * ActionEvent is the event being sent when an action is triggered.
 */
class ActionEvent {
    /**
     * Creates a new ActionEvent
     * @param source The mesh or sprite that triggered the action
     * @param pointerX The X mouse cursor position at the time of the event
     * @param pointerY The Y mouse cursor position at the time of the event
     * @param meshUnderPointer The mesh that is currently pointed at (can be null)
     * @param sourceEvent the original (browser) event that triggered the ActionEvent
     * @param additionalData additional data for the event
     */
    constructor(
    /** The mesh or sprite that triggered the action */
    source, 
    /** The X mouse cursor position at the time of the event */
    pointerX, 
    /** The Y mouse cursor position at the time of the event */
    pointerY, 
    /** The mesh that is currently pointed at (can be null) */
    meshUnderPointer, 
    /** the original (browser) event that triggered the ActionEvent */
    sourceEvent, 
    /** additional data for the event */
    additionalData) {
        this.source = source;
        this.pointerX = pointerX;
        this.pointerY = pointerY;
        this.meshUnderPointer = meshUnderPointer;
        this.sourceEvent = sourceEvent;
        this.additionalData = additionalData;
    }
    /**
     * Helper function to auto-create an ActionEvent from a source mesh.
     * @param source The source mesh that triggered the event
     * @param evt The original (browser) event
     * @param additionalData additional data for the event
     * @returns the new ActionEvent
     */
    static CreateNew(source, evt, additionalData) {
        const scene = source.getScene();
        return new ActionEvent(source, scene.pointerX, scene.pointerY, scene.meshUnderPointer || source, evt, additionalData);
    }
    /**
     * Helper function to auto-create an ActionEvent from a source sprite
     * @param source The source sprite that triggered the event
     * @param scene Scene associated with the sprite
     * @param evt The original (browser) event
     * @param additionalData additional data for the event
     * @returns the new ActionEvent
     */
    static CreateNewFromSprite(source, scene, evt, additionalData) {
        return new ActionEvent(source, scene.pointerX, scene.pointerY, scene.meshUnderPointer, evt, additionalData);
    }
    /**
     * Helper function to auto-create an ActionEvent from a scene. If triggered by a mesh use ActionEvent.CreateNew
     * @param scene the scene where the event occurred
     * @param evt The original (browser) event
     * @returns the new ActionEvent
     */
    static CreateNewFromScene(scene, evt) {
        return new ActionEvent(null, scene.pointerX, scene.pointerY, scene.meshUnderPointer, evt);
    }
    /**
     * Helper function to auto-create an ActionEvent from a primitive
     * @param prim defines the target primitive
     * @param pointerPos defines the pointer position
     * @param evt The original (browser) event
     * @param additionalData additional data for the event
     * @returns the new ActionEvent
     */
    static CreateNewFromPrimitive(prim, pointerPos, evt, additionalData) {
        return new ActionEvent(prim, pointerPos.x, pointerPos.y, null, evt, additionalData);
    }
}
//# sourceMappingURL=actionEvent.js.map

/***/ }),

/***/ 30311:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   G: () => (/* binding */ PickingInfo)
/* harmony export */ });
/* harmony import */ var _Maths_math_vector_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(79923);
/* harmony import */ var _Buffers_buffer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(95616);


/**
 * Information about the result of picking within a scene
 * @see https://doc.babylonjs.com/features/featuresDeepDive/mesh/interactions/picking_collisions
 */
class PickingInfo {
    constructor() {
        /**
         * If the pick collided with an object
         */
        this.hit = false;
        /**
         * Distance away where the pick collided
         */
        this.distance = 0;
        /**
         * The location of pick collision
         */
        this.pickedPoint = null;
        /**
         * The mesh corresponding the pick collision
         */
        this.pickedMesh = null;
        /** (See getTextureCoordinates) The barycentric U coordinate that is used when calculating the texture coordinates of the collision.*/
        this.bu = 0;
        /** (See getTextureCoordinates) The barycentric V coordinate that is used when calculating the texture coordinates of the collision.*/
        this.bv = 0;
        /** The index of the face on the mesh that was picked, or the index of the Line if the picked Mesh is a LinesMesh */
        this.faceId = -1;
        /** The index of the face on the subMesh that was picked, or the index of the Line if the picked Mesh is a LinesMesh */
        this.subMeshFaceId = -1;
        /** Id of the submesh that was picked */
        this.subMeshId = 0;
        /** If a sprite was picked, this will be the sprite the pick collided with */
        this.pickedSprite = null;
        /** If we are picking a mesh with thin instance, this will give you the picked thin instance */
        this.thinInstanceIndex = -1;
        /**
         * The ray that was used to perform the picking.
         */
        this.ray = null;
        /**
         * If a mesh was used to do the picking (eg. 6dof controller) as a "near interaction", this will be populated.
         */
        this.originMesh = null;
        /**
         * The aim-space transform of the input used for picking, if it is an XR input source.
         */
        this.aimTransform = null;
        /**
         * The grip-space transform of the input used for picking, if it is an XR input source.
         * Some XR sources, such as input coming from head mounted displays, do not have this.
         */
        this.gripTransform = null;
    }
    /**
     * Gets the normal corresponding to the face the pick collided with
     * @param useWorldCoordinates If the resulting normal should be relative to the world (default: false)
     * @param useVerticesNormals If the vertices normals should be used to calculate the normal instead of the normal map (default: true)
     * @returns The normal corresponding to the face the pick collided with
     * @remarks Note that the returned normal will always point towards the picking ray.
     */
    getNormal(useWorldCoordinates = false, useVerticesNormals = true) {
        if (!this.pickedMesh || (useVerticesNormals && !this.pickedMesh.isVerticesDataPresent(_Buffers_buffer_js__WEBPACK_IMPORTED_MODULE_1__/* .VertexBuffer */ .R.NormalKind))) {
            return null;
        }
        let indices = this.pickedMesh.getIndices();
        if (indices?.length === 0) {
            indices = null;
        }
        let result;
        const tmp0 = _Maths_math_vector_js__WEBPACK_IMPORTED_MODULE_0__/* .TmpVectors */ .AA.Vector3[0];
        const tmp1 = _Maths_math_vector_js__WEBPACK_IMPORTED_MODULE_0__/* .TmpVectors */ .AA.Vector3[1];
        const tmp2 = _Maths_math_vector_js__WEBPACK_IMPORTED_MODULE_0__/* .TmpVectors */ .AA.Vector3[2];
        if (useVerticesNormals) {
            const normals = this.pickedMesh.getVerticesData(_Buffers_buffer_js__WEBPACK_IMPORTED_MODULE_1__/* .VertexBuffer */ .R.NormalKind);
            let normal0 = indices
                ? _Maths_math_vector_js__WEBPACK_IMPORTED_MODULE_0__/* .Vector3 */ .Pq.FromArrayToRef(normals, indices[this.faceId * 3] * 3, tmp0)
                : tmp0.copyFromFloats(normals[this.faceId * 3 * 3], normals[this.faceId * 3 * 3 + 1], normals[this.faceId * 3 * 3 + 2]);
            let normal1 = indices
                ? _Maths_math_vector_js__WEBPACK_IMPORTED_MODULE_0__/* .Vector3 */ .Pq.FromArrayToRef(normals, indices[this.faceId * 3 + 1] * 3, tmp1)
                : tmp1.copyFromFloats(normals[(this.faceId * 3 + 1) * 3], normals[(this.faceId * 3 + 1) * 3 + 1], normals[(this.faceId * 3 + 1) * 3 + 2]);
            let normal2 = indices
                ? _Maths_math_vector_js__WEBPACK_IMPORTED_MODULE_0__/* .Vector3 */ .Pq.FromArrayToRef(normals, indices[this.faceId * 3 + 2] * 3, tmp2)
                : tmp2.copyFromFloats(normals[(this.faceId * 3 + 2) * 3], normals[(this.faceId * 3 + 2) * 3 + 1], normals[(this.faceId * 3 + 2) * 3 + 2]);
            normal0 = normal0.scale(this.bu);
            normal1 = normal1.scale(this.bv);
            normal2 = normal2.scale(1.0 - this.bu - this.bv);
            result = new _Maths_math_vector_js__WEBPACK_IMPORTED_MODULE_0__/* .Vector3 */ .Pq(normal0.x + normal1.x + normal2.x, normal0.y + normal1.y + normal2.y, normal0.z + normal1.z + normal2.z);
        }
        else {
            const positions = this.pickedMesh.getVerticesData(_Buffers_buffer_js__WEBPACK_IMPORTED_MODULE_1__/* .VertexBuffer */ .R.PositionKind);
            const vertex1 = indices
                ? _Maths_math_vector_js__WEBPACK_IMPORTED_MODULE_0__/* .Vector3 */ .Pq.FromArrayToRef(positions, indices[this.faceId * 3] * 3, tmp0)
                : tmp0.copyFromFloats(positions[this.faceId * 3 * 3], positions[this.faceId * 3 * 3 + 1], positions[this.faceId * 3 * 3 + 2]);
            const vertex2 = indices
                ? _Maths_math_vector_js__WEBPACK_IMPORTED_MODULE_0__/* .Vector3 */ .Pq.FromArrayToRef(positions, indices[this.faceId * 3 + 1] * 3, tmp1)
                : tmp1.copyFromFloats(positions[(this.faceId * 3 + 1) * 3], positions[(this.faceId * 3 + 1) * 3 + 1], positions[(this.faceId * 3 + 1) * 3 + 2]);
            const vertex3 = indices
                ? _Maths_math_vector_js__WEBPACK_IMPORTED_MODULE_0__/* .Vector3 */ .Pq.FromArrayToRef(positions, indices[this.faceId * 3 + 2] * 3, tmp2)
                : tmp2.copyFromFloats(positions[(this.faceId * 3 + 2) * 3], positions[(this.faceId * 3 + 2) * 3 + 1], positions[(this.faceId * 3 + 2) * 3 + 2]);
            const p1p2 = vertex1.subtract(vertex2);
            const p3p2 = vertex3.subtract(vertex2);
            result = _Maths_math_vector_js__WEBPACK_IMPORTED_MODULE_0__/* .Vector3 */ .Pq.Cross(p1p2, p3p2);
        }
        const transformNormalToWorld = (pickedMesh, n) => {
            let wm = pickedMesh.getWorldMatrix();
            if (pickedMesh.nonUniformScaling) {
                _Maths_math_vector_js__WEBPACK_IMPORTED_MODULE_0__/* .TmpVectors */ .AA.Matrix[0].copyFrom(wm);
                wm = _Maths_math_vector_js__WEBPACK_IMPORTED_MODULE_0__/* .TmpVectors */ .AA.Matrix[0];
                wm.setTranslationFromFloats(0, 0, 0);
                wm.invert();
                wm.transposeToRef(_Maths_math_vector_js__WEBPACK_IMPORTED_MODULE_0__/* .TmpVectors */ .AA.Matrix[1]);
                wm = _Maths_math_vector_js__WEBPACK_IMPORTED_MODULE_0__/* .TmpVectors */ .AA.Matrix[1];
            }
            _Maths_math_vector_js__WEBPACK_IMPORTED_MODULE_0__/* .Vector3 */ .Pq.TransformNormalToRef(n, wm, n);
        };
        if (useWorldCoordinates) {
            transformNormalToWorld(this.pickedMesh, result);
        }
        if (this.ray) {
            const normalForDirectionChecking = _Maths_math_vector_js__WEBPACK_IMPORTED_MODULE_0__/* .TmpVectors */ .AA.Vector3[0].copyFrom(result);
            if (!useWorldCoordinates) {
                // the normal has not been transformed to world space as part as the normal processing, so we must do it now
                transformNormalToWorld(this.pickedMesh, normalForDirectionChecking);
            }
            // Flip the normal if the picking ray is in the same direction.
            if (_Maths_math_vector_js__WEBPACK_IMPORTED_MODULE_0__/* .Vector3 */ .Pq.Dot(normalForDirectionChecking, this.ray.direction) > 0) {
                result.negateInPlace();
            }
        }
        result.normalize();
        return result;
    }
    /**
     * Gets the texture coordinates of where the pick occurred
     * @param uvSet The UV set to use to calculate the texture coordinates (default: VertexBuffer.UVKind)
     * @returns The vector containing the coordinates of the texture
     */
    getTextureCoordinates(uvSet = _Buffers_buffer_js__WEBPACK_IMPORTED_MODULE_1__/* .VertexBuffer */ .R.UVKind) {
        if (!this.pickedMesh || !this.pickedMesh.isVerticesDataPresent(uvSet)) {
            return null;
        }
        const indices = this.pickedMesh.getIndices();
        if (!indices) {
            return null;
        }
        const uvs = this.pickedMesh.getVerticesData(uvSet);
        if (!uvs) {
            return null;
        }
        let uv0 = _Maths_math_vector_js__WEBPACK_IMPORTED_MODULE_0__/* .Vector2 */ .I9.FromArray(uvs, indices[this.faceId * 3] * 2);
        let uv1 = _Maths_math_vector_js__WEBPACK_IMPORTED_MODULE_0__/* .Vector2 */ .I9.FromArray(uvs, indices[this.faceId * 3 + 1] * 2);
        let uv2 = _Maths_math_vector_js__WEBPACK_IMPORTED_MODULE_0__/* .Vector2 */ .I9.FromArray(uvs, indices[this.faceId * 3 + 2] * 2);
        uv0 = uv0.scale(this.bu);
        uv1 = uv1.scale(this.bv);
        uv2 = uv2.scale(1.0 - this.bu - this.bv);
        return new _Maths_math_vector_js__WEBPACK_IMPORTED_MODULE_0__/* .Vector2 */ .I9(uv0.x + uv1.x + uv2.x, uv0.y + uv1.y + uv2.y);
    }
}
//# sourceMappingURL=pickingInfo.js.map

/***/ }),

/***/ 24153:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ST: () => (/* binding */ PointerInput),
/* harmony export */   bq: () => (/* binding */ DeviceType)
/* harmony export */ });
/* unused harmony exports NativePointerInput, DualShockInput, DualSenseInput, XboxInput, SwitchInput */
/**
 * Enum for Device Types
 */
var DeviceType;
(function (DeviceType) {
    /** Generic */
    DeviceType[DeviceType["Generic"] = 0] = "Generic";
    /** Keyboard */
    DeviceType[DeviceType["Keyboard"] = 1] = "Keyboard";
    /** Mouse */
    DeviceType[DeviceType["Mouse"] = 2] = "Mouse";
    /** Touch Pointers */
    DeviceType[DeviceType["Touch"] = 3] = "Touch";
    /** PS4 Dual Shock */
    DeviceType[DeviceType["DualShock"] = 4] = "DualShock";
    /** Xbox */
    DeviceType[DeviceType["Xbox"] = 5] = "Xbox";
    /** Switch Controller */
    DeviceType[DeviceType["Switch"] = 6] = "Switch";
    /** PS5 DualSense */
    DeviceType[DeviceType["DualSense"] = 7] = "DualSense";
})(DeviceType || (DeviceType = {}));
// Device Enums
/**
 * Enum for All Pointers (Touch/Mouse)
 */
var PointerInput;
(function (PointerInput) {
    /** Horizontal Axis (Not used in events/observables; only in polling) */
    PointerInput[PointerInput["Horizontal"] = 0] = "Horizontal";
    /** Vertical Axis (Not used in events/observables; only in polling) */
    PointerInput[PointerInput["Vertical"] = 1] = "Vertical";
    /** Left Click or Touch */
    PointerInput[PointerInput["LeftClick"] = 2] = "LeftClick";
    /** Middle Click */
    PointerInput[PointerInput["MiddleClick"] = 3] = "MiddleClick";
    /** Right Click */
    PointerInput[PointerInput["RightClick"] = 4] = "RightClick";
    /** Browser Back */
    PointerInput[PointerInput["BrowserBack"] = 5] = "BrowserBack";
    /** Browser Forward */
    PointerInput[PointerInput["BrowserForward"] = 6] = "BrowserForward";
    /** Mouse Wheel X */
    PointerInput[PointerInput["MouseWheelX"] = 7] = "MouseWheelX";
    /** Mouse Wheel Y */
    PointerInput[PointerInput["MouseWheelY"] = 8] = "MouseWheelY";
    /** Mouse Wheel Z */
    PointerInput[PointerInput["MouseWheelZ"] = 9] = "MouseWheelZ";
    /** Used in events/observables to identify if x/y changes occurred */
    PointerInput[PointerInput["Move"] = 12] = "Move";
})(PointerInput || (PointerInput = {}));
/** @internal */
var NativePointerInput;
(function (NativePointerInput) {
    /** Horizontal Axis */
    NativePointerInput[NativePointerInput["Horizontal"] = 0] = "Horizontal";
    /** Vertical Axis */
    NativePointerInput[NativePointerInput["Vertical"] = 1] = "Vertical";
    /** Left Click or Touch */
    NativePointerInput[NativePointerInput["LeftClick"] = 2] = "LeftClick";
    /** Middle Click */
    NativePointerInput[NativePointerInput["MiddleClick"] = 3] = "MiddleClick";
    /** Right Click */
    NativePointerInput[NativePointerInput["RightClick"] = 4] = "RightClick";
    /** Browser Back */
    NativePointerInput[NativePointerInput["BrowserBack"] = 5] = "BrowserBack";
    /** Browser Forward */
    NativePointerInput[NativePointerInput["BrowserForward"] = 6] = "BrowserForward";
    /** Mouse Wheel X */
    NativePointerInput[NativePointerInput["MouseWheelX"] = 7] = "MouseWheelX";
    /** Mouse Wheel Y */
    NativePointerInput[NativePointerInput["MouseWheelY"] = 8] = "MouseWheelY";
    /** Mouse Wheel Z */
    NativePointerInput[NativePointerInput["MouseWheelZ"] = 9] = "MouseWheelZ";
    /** Delta X */
    NativePointerInput[NativePointerInput["DeltaHorizontal"] = 10] = "DeltaHorizontal";
    /** Delta Y */
    NativePointerInput[NativePointerInput["DeltaVertical"] = 11] = "DeltaVertical";
})(NativePointerInput || (NativePointerInput = {}));
/**
 * Enum for Dual Shock Gamepad
 */
var DualShockInput;
(function (DualShockInput) {
    /** Cross */
    DualShockInput[DualShockInput["Cross"] = 0] = "Cross";
    /** Circle */
    DualShockInput[DualShockInput["Circle"] = 1] = "Circle";
    /** Square */
    DualShockInput[DualShockInput["Square"] = 2] = "Square";
    /** Triangle */
    DualShockInput[DualShockInput["Triangle"] = 3] = "Triangle";
    /** L1 */
    DualShockInput[DualShockInput["L1"] = 4] = "L1";
    /** R1 */
    DualShockInput[DualShockInput["R1"] = 5] = "R1";
    /** L2 */
    DualShockInput[DualShockInput["L2"] = 6] = "L2";
    /** R2 */
    DualShockInput[DualShockInput["R2"] = 7] = "R2";
    /** Share */
    DualShockInput[DualShockInput["Share"] = 8] = "Share";
    /** Options */
    DualShockInput[DualShockInput["Options"] = 9] = "Options";
    /** L3 */
    DualShockInput[DualShockInput["L3"] = 10] = "L3";
    /** R3 */
    DualShockInput[DualShockInput["R3"] = 11] = "R3";
    /** DPadUp */
    DualShockInput[DualShockInput["DPadUp"] = 12] = "DPadUp";
    /** DPadDown */
    DualShockInput[DualShockInput["DPadDown"] = 13] = "DPadDown";
    /** DPadLeft */
    DualShockInput[DualShockInput["DPadLeft"] = 14] = "DPadLeft";
    /** DRight */
    DualShockInput[DualShockInput["DPadRight"] = 15] = "DPadRight";
    /** Home */
    DualShockInput[DualShockInput["Home"] = 16] = "Home";
    /** TouchPad */
    DualShockInput[DualShockInput["TouchPad"] = 17] = "TouchPad";
    /** LStickXAxis */
    DualShockInput[DualShockInput["LStickXAxis"] = 18] = "LStickXAxis";
    /** LStickYAxis */
    DualShockInput[DualShockInput["LStickYAxis"] = 19] = "LStickYAxis";
    /** RStickXAxis */
    DualShockInput[DualShockInput["RStickXAxis"] = 20] = "RStickXAxis";
    /** RStickYAxis */
    DualShockInput[DualShockInput["RStickYAxis"] = 21] = "RStickYAxis";
})(DualShockInput || (DualShockInput = {}));
/**
 * Enum for Dual Sense Gamepad
 */
var DualSenseInput;
(function (DualSenseInput) {
    /** Cross */
    DualSenseInput[DualSenseInput["Cross"] = 0] = "Cross";
    /** Circle */
    DualSenseInput[DualSenseInput["Circle"] = 1] = "Circle";
    /** Square */
    DualSenseInput[DualSenseInput["Square"] = 2] = "Square";
    /** Triangle */
    DualSenseInput[DualSenseInput["Triangle"] = 3] = "Triangle";
    /** L1 */
    DualSenseInput[DualSenseInput["L1"] = 4] = "L1";
    /** R1 */
    DualSenseInput[DualSenseInput["R1"] = 5] = "R1";
    /** L2 */
    DualSenseInput[DualSenseInput["L2"] = 6] = "L2";
    /** R2 */
    DualSenseInput[DualSenseInput["R2"] = 7] = "R2";
    /** Create */
    DualSenseInput[DualSenseInput["Create"] = 8] = "Create";
    /** Options */
    DualSenseInput[DualSenseInput["Options"] = 9] = "Options";
    /** L3 */
    DualSenseInput[DualSenseInput["L3"] = 10] = "L3";
    /** R3 */
    DualSenseInput[DualSenseInput["R3"] = 11] = "R3";
    /** DPadUp */
    DualSenseInput[DualSenseInput["DPadUp"] = 12] = "DPadUp";
    /** DPadDown */
    DualSenseInput[DualSenseInput["DPadDown"] = 13] = "DPadDown";
    /** DPadLeft */
    DualSenseInput[DualSenseInput["DPadLeft"] = 14] = "DPadLeft";
    /** DRight */
    DualSenseInput[DualSenseInput["DPadRight"] = 15] = "DPadRight";
    /** Home */
    DualSenseInput[DualSenseInput["Home"] = 16] = "Home";
    /** TouchPad */
    DualSenseInput[DualSenseInput["TouchPad"] = 17] = "TouchPad";
    /** LStickXAxis */
    DualSenseInput[DualSenseInput["LStickXAxis"] = 18] = "LStickXAxis";
    /** LStickYAxis */
    DualSenseInput[DualSenseInput["LStickYAxis"] = 19] = "LStickYAxis";
    /** RStickXAxis */
    DualSenseInput[DualSenseInput["RStickXAxis"] = 20] = "RStickXAxis";
    /** RStickYAxis */
    DualSenseInput[DualSenseInput["RStickYAxis"] = 21] = "RStickYAxis";
})(DualSenseInput || (DualSenseInput = {}));
/**
 * Enum for Xbox Gamepad
 */
var XboxInput;
(function (XboxInput) {
    /** A */
    XboxInput[XboxInput["A"] = 0] = "A";
    /** B */
    XboxInput[XboxInput["B"] = 1] = "B";
    /** X */
    XboxInput[XboxInput["X"] = 2] = "X";
    /** Y */
    XboxInput[XboxInput["Y"] = 3] = "Y";
    /** LB */
    XboxInput[XboxInput["LB"] = 4] = "LB";
    /** RB */
    XboxInput[XboxInput["RB"] = 5] = "RB";
    /** LT */
    XboxInput[XboxInput["LT"] = 6] = "LT";
    /** RT */
    XboxInput[XboxInput["RT"] = 7] = "RT";
    /** Back */
    XboxInput[XboxInput["Back"] = 8] = "Back";
    /** Start */
    XboxInput[XboxInput["Start"] = 9] = "Start";
    /** LS */
    XboxInput[XboxInput["LS"] = 10] = "LS";
    /** RS */
    XboxInput[XboxInput["RS"] = 11] = "RS";
    /** DPadUp */
    XboxInput[XboxInput["DPadUp"] = 12] = "DPadUp";
    /** DPadDown */
    XboxInput[XboxInput["DPadDown"] = 13] = "DPadDown";
    /** DPadLeft */
    XboxInput[XboxInput["DPadLeft"] = 14] = "DPadLeft";
    /** DRight */
    XboxInput[XboxInput["DPadRight"] = 15] = "DPadRight";
    /** Home */
    XboxInput[XboxInput["Home"] = 16] = "Home";
    /** LStickXAxis */
    XboxInput[XboxInput["LStickXAxis"] = 17] = "LStickXAxis";
    /** LStickYAxis */
    XboxInput[XboxInput["LStickYAxis"] = 18] = "LStickYAxis";
    /** RStickXAxis */
    XboxInput[XboxInput["RStickXAxis"] = 19] = "RStickXAxis";
    /** RStickYAxis */
    XboxInput[XboxInput["RStickYAxis"] = 20] = "RStickYAxis";
})(XboxInput || (XboxInput = {}));
/**
 * Enum for Switch (Pro/JoyCon L+R) Gamepad
 */
var SwitchInput;
(function (SwitchInput) {
    /** B */
    SwitchInput[SwitchInput["B"] = 0] = "B";
    /** A */
    SwitchInput[SwitchInput["A"] = 1] = "A";
    /** Y */
    SwitchInput[SwitchInput["Y"] = 2] = "Y";
    /** X */
    SwitchInput[SwitchInput["X"] = 3] = "X";
    /** L */
    SwitchInput[SwitchInput["L"] = 4] = "L";
    /** R */
    SwitchInput[SwitchInput["R"] = 5] = "R";
    /** ZL */
    SwitchInput[SwitchInput["ZL"] = 6] = "ZL";
    /** ZR */
    SwitchInput[SwitchInput["ZR"] = 7] = "ZR";
    /** Minus */
    SwitchInput[SwitchInput["Minus"] = 8] = "Minus";
    /** Plus */
    SwitchInput[SwitchInput["Plus"] = 9] = "Plus";
    /** LS */
    SwitchInput[SwitchInput["LS"] = 10] = "LS";
    /** RS */
    SwitchInput[SwitchInput["RS"] = 11] = "RS";
    /** DPadUp */
    SwitchInput[SwitchInput["DPadUp"] = 12] = "DPadUp";
    /** DPadDown */
    SwitchInput[SwitchInput["DPadDown"] = 13] = "DPadDown";
    /** DPadLeft */
    SwitchInput[SwitchInput["DPadLeft"] = 14] = "DPadLeft";
    /** DRight */
    SwitchInput[SwitchInput["DPadRight"] = 15] = "DPadRight";
    /** Home */
    SwitchInput[SwitchInput["Home"] = 16] = "Home";
    /** Capture */
    SwitchInput[SwitchInput["Capture"] = 17] = "Capture";
    /** LStickXAxis */
    SwitchInput[SwitchInput["LStickXAxis"] = 18] = "LStickXAxis";
    /** LStickYAxis */
    SwitchInput[SwitchInput["LStickYAxis"] = 19] = "LStickYAxis";
    /** RStickXAxis */
    SwitchInput[SwitchInput["RStickXAxis"] = 20] = "RStickXAxis";
    /** RStickYAxis */
    SwitchInput[SwitchInput["RStickYAxis"] = 21] = "RStickYAxis";
})(SwitchInput || (SwitchInput = {}));
//# sourceMappingURL=deviceEnums.js.map

/***/ }),

/***/ 51314:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ DeviceSource)
/* harmony export */ });
/* harmony import */ var _Misc_observable_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(99848);

/**
 * Class that handles all input for a specific device
 */
class DeviceSource {
    /**
     * Default Constructor
     * @param deviceInputSystem - Reference to DeviceInputSystem
     * @param deviceType - Type of device
     * @param deviceSlot - "Slot" or index that device is referenced in
     */
    constructor(deviceInputSystem, 
    /** Type of device */
    deviceType, 
    /** [0] "Slot" or index that device is referenced in */
    deviceSlot = 0) {
        this.deviceType = deviceType;
        this.deviceSlot = deviceSlot;
        // Public Members
        /**
         * Observable to handle device input changes per device
         */
        this.onInputChangedObservable = new _Misc_observable_js__WEBPACK_IMPORTED_MODULE_0__/* .Observable */ .cP();
        this._deviceInputSystem = deviceInputSystem;
    }
    /**
     * Get input for specific input
     * @param inputIndex - index of specific input on device
     * @returns Input value from DeviceInputSystem
     */
    getInput(inputIndex) {
        return this._deviceInputSystem.pollInput(this.deviceType, this.deviceSlot, inputIndex);
    }
}
//# sourceMappingURL=deviceSource.js.map

/***/ }),

/***/ 64100:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ DeviceSourceManager)
});

// EXTERNAL MODULE: ./node_modules/@babylonjs/core/DeviceInput/InputDevices/deviceEnums.js
var deviceEnums = __webpack_require__(24153);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Misc/observable.js
var observable = __webpack_require__(99848);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Events/deviceInputEvents.js
var deviceInputEvents = __webpack_require__(38123);
;// ./node_modules/@babylonjs/core/DeviceInput/eventFactory.js



/**
 * Class to wrap DeviceInputSystem data into an event object
 */
class DeviceEventFactory {
    /**
     * Create device input events based on provided type and slot
     *
     * @param deviceType Type of device
     * @param deviceSlot "Slot" or index that device is referenced in
     * @param inputIndex Id of input to be checked
     * @param currentState Current value for given input
     * @param deviceInputSystem Reference to DeviceInputSystem
     * @param elementToAttachTo HTMLElement to reference as target for inputs
     * @param pointerId PointerId to use for pointer events
     * @returns IUIEvent object
     */
    static CreateDeviceEvent(deviceType, deviceSlot, inputIndex, currentState, deviceInputSystem, elementToAttachTo, pointerId) {
        switch (deviceType) {
            case deviceEnums/* DeviceType */.bq.Keyboard:
                return this._CreateKeyboardEvent(inputIndex, currentState, deviceInputSystem, elementToAttachTo);
            case deviceEnums/* DeviceType */.bq.Mouse:
                if (inputIndex === deviceEnums/* PointerInput */.ST.MouseWheelX || inputIndex === deviceEnums/* PointerInput */.ST.MouseWheelY || inputIndex === deviceEnums/* PointerInput */.ST.MouseWheelZ) {
                    return this._CreateWheelEvent(deviceType, deviceSlot, inputIndex, currentState, deviceInputSystem, elementToAttachTo);
                }
            // eslint-disable-next-line no-fallthrough
            case deviceEnums/* DeviceType */.bq.Touch:
                return this._CreatePointerEvent(deviceType, deviceSlot, inputIndex, currentState, deviceInputSystem, elementToAttachTo, pointerId);
            default:
                // eslint-disable-next-line no-throw-literal
                throw `Unable to generate event for device ${deviceEnums/* DeviceType */.bq[deviceType]}`;
        }
    }
    /**
     * Creates pointer event
     *
     * @param deviceType Type of device
     * @param deviceSlot "Slot" or index that device is referenced in
     * @param inputIndex Id of input to be checked
     * @param currentState Current value for given input
     * @param deviceInputSystem Reference to DeviceInputSystem
     * @param elementToAttachTo HTMLElement to reference as target for inputs
     * @param pointerId PointerId to use for pointer events
     * @returns IUIEvent object (Pointer)
     */
    static _CreatePointerEvent(deviceType, deviceSlot, inputIndex, currentState, deviceInputSystem, elementToAttachTo, pointerId) {
        const evt = this._CreateMouseEvent(deviceType, deviceSlot, inputIndex, currentState, deviceInputSystem, elementToAttachTo);
        if (deviceType === deviceEnums/* DeviceType */.bq.Mouse) {
            evt.deviceType = deviceEnums/* DeviceType */.bq.Mouse;
            evt.pointerId = 1;
            evt.pointerType = "mouse";
        }
        else {
            evt.deviceType = deviceEnums/* DeviceType */.bq.Touch;
            evt.pointerId = pointerId ?? deviceSlot;
            evt.pointerType = "touch";
        }
        let buttons = 0;
        // Populate buttons property with current state of all mouse buttons
        // Uses values found on: https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/buttons
        buttons += deviceInputSystem.pollInput(deviceType, deviceSlot, deviceEnums/* PointerInput */.ST.LeftClick);
        buttons += deviceInputSystem.pollInput(deviceType, deviceSlot, deviceEnums/* PointerInput */.ST.RightClick) * 2;
        buttons += deviceInputSystem.pollInput(deviceType, deviceSlot, deviceEnums/* PointerInput */.ST.MiddleClick) * 4;
        evt.buttons = buttons;
        if (inputIndex === deviceEnums/* PointerInput */.ST.Move) {
            evt.type = "pointermove";
        }
        else if (inputIndex >= deviceEnums/* PointerInput */.ST.LeftClick && inputIndex <= deviceEnums/* PointerInput */.ST.RightClick) {
            evt.type = currentState === 1 ? "pointerdown" : "pointerup";
            evt.button = inputIndex - 2;
        }
        return evt;
    }
    /**
     * Create Mouse Wheel Event
     * @param deviceType Type of device
     * @param deviceSlot "Slot" or index that device is referenced in
     * @param inputIndex Id of input to be checked
     * @param currentState Current value for given input
     * @param deviceInputSystem Reference to DeviceInputSystem
     * @param elementToAttachTo HTMLElement to reference as target for inputs
     * @returns IUIEvent object (Wheel)
     */
    static _CreateWheelEvent(deviceType, deviceSlot, inputIndex, currentState, deviceInputSystem, elementToAttachTo) {
        const evt = this._CreateMouseEvent(deviceType, deviceSlot, inputIndex, currentState, deviceInputSystem, elementToAttachTo);
        // While WheelEvents don't generally have a pointerId, we used to add one in the InputManager
        // This line has been added to make the InputManager more platform-agnostic
        // Similar code exists in the WebDeviceInputSystem to handle browser created events
        evt.pointerId = 1;
        evt.type = "wheel";
        evt.deltaMode = deviceInputEvents/* EventConstants */.s.DOM_DELTA_PIXEL;
        evt.deltaX = 0;
        evt.deltaY = 0;
        evt.deltaZ = 0;
        switch (inputIndex) {
            case deviceEnums/* PointerInput */.ST.MouseWheelX:
                evt.deltaX = currentState;
                break;
            case deviceEnums/* PointerInput */.ST.MouseWheelY:
                evt.deltaY = currentState;
                break;
            case deviceEnums/* PointerInput */.ST.MouseWheelZ:
                evt.deltaZ = currentState;
                break;
        }
        return evt;
    }
    /**
     * Create Mouse Event
     * @param deviceType Type of device
     * @param deviceSlot "Slot" or index that device is referenced in
     * @param inputIndex Id of input to be checked
     * @param currentState Current value for given input
     * @param deviceInputSystem Reference to DeviceInputSystem
     * @param elementToAttachTo HTMLElement to reference as target for inputs
     * @returns IUIEvent object (Mouse)
     */
    static _CreateMouseEvent(deviceType, deviceSlot, inputIndex, currentState, deviceInputSystem, elementToAttachTo) {
        const evt = this._CreateEvent(elementToAttachTo);
        const pointerX = deviceInputSystem.pollInput(deviceType, deviceSlot, deviceEnums/* PointerInput */.ST.Horizontal);
        const pointerY = deviceInputSystem.pollInput(deviceType, deviceSlot, deviceEnums/* PointerInput */.ST.Vertical);
        // Handle offsets/deltas based on existence of HTMLElement
        if (elementToAttachTo) {
            evt.movementX = 0;
            evt.movementY = 0;
            evt.offsetX = evt.movementX - elementToAttachTo.getBoundingClientRect().x;
            evt.offsetY = evt.movementY - elementToAttachTo.getBoundingClientRect().y;
        }
        else {
            evt.movementX = deviceInputSystem.pollInput(deviceType, deviceSlot, 10 /* NativePointerInput.DeltaHorizontal */); // DeltaHorizontal
            evt.movementY = deviceInputSystem.pollInput(deviceType, deviceSlot, 11 /* NativePointerInput.DeltaVertical */); // DeltaVertical
            evt.offsetX = 0;
            evt.offsetY = 0;
        }
        this._CheckNonCharacterKeys(evt, deviceInputSystem);
        evt.clientX = pointerX;
        evt.clientY = pointerY;
        evt.x = pointerX;
        evt.y = pointerY;
        evt.deviceType = deviceType;
        evt.deviceSlot = deviceSlot;
        evt.inputIndex = inputIndex;
        return evt;
    }
    /**
     * Create Keyboard Event
     * @param inputIndex Id of input to be checked
     * @param currentState Current value for given input
     * @param deviceInputSystem Reference to DeviceInputSystem
     * @param elementToAttachTo HTMLElement to reference as target for inputs
     * @returns IEvent object (Keyboard)
     */
    static _CreateKeyboardEvent(inputIndex, currentState, deviceInputSystem, elementToAttachTo) {
        const evt = this._CreateEvent(elementToAttachTo);
        this._CheckNonCharacterKeys(evt, deviceInputSystem);
        evt.deviceType = deviceEnums/* DeviceType */.bq.Keyboard;
        evt.deviceSlot = 0;
        evt.inputIndex = inputIndex;
        evt.type = currentState === 1 ? "keydown" : "keyup";
        evt.key = String.fromCharCode(inputIndex);
        evt.keyCode = inputIndex;
        return evt;
    }
    /**
     * Add parameters for non-character keys (Ctrl, Alt, Meta, Shift)
     * @param evt Event object to add parameters to
     * @param deviceInputSystem DeviceInputSystem to pull values from
     */
    static _CheckNonCharacterKeys(evt, deviceInputSystem) {
        const isKeyboardActive = deviceInputSystem.isDeviceAvailable(deviceEnums/* DeviceType */.bq.Keyboard);
        const altKey = isKeyboardActive && deviceInputSystem.pollInput(deviceEnums/* DeviceType */.bq.Keyboard, 0, 18) === 1;
        const ctrlKey = isKeyboardActive && deviceInputSystem.pollInput(deviceEnums/* DeviceType */.bq.Keyboard, 0, 17) === 1;
        const metaKey = isKeyboardActive &&
            (deviceInputSystem.pollInput(deviceEnums/* DeviceType */.bq.Keyboard, 0, 91) === 1 ||
                deviceInputSystem.pollInput(deviceEnums/* DeviceType */.bq.Keyboard, 0, 92) === 1 ||
                deviceInputSystem.pollInput(deviceEnums/* DeviceType */.bq.Keyboard, 0, 93) === 1);
        const shiftKey = isKeyboardActive && deviceInputSystem.pollInput(deviceEnums/* DeviceType */.bq.Keyboard, 0, 16) === 1;
        evt.altKey = altKey;
        evt.ctrlKey = ctrlKey;
        evt.metaKey = metaKey;
        evt.shiftKey = shiftKey;
    }
    /**
     * Create base event object
     * @param elementToAttachTo Value to use as event target
     * @returns
     */
    static _CreateEvent(elementToAttachTo) {
        const evt = {};
        evt.preventDefault = () => { };
        evt.target = elementToAttachTo;
        return evt;
    }
}
//# sourceMappingURL=eventFactory.js.map
;// ./node_modules/@babylonjs/core/DeviceInput/nativeDeviceInputSystem.js


/** @internal */
class NativeDeviceInputSystem {
    constructor(onDeviceConnected, onDeviceDisconnected, onInputChanged) {
        this._nativeInput = _native.DeviceInputSystem
            ? new _native.DeviceInputSystem(onDeviceConnected, onDeviceDisconnected, (deviceType, deviceSlot, inputIndex, currentState) => {
                const evt = DeviceEventFactory.CreateDeviceEvent(deviceType, deviceSlot, inputIndex, currentState, this);
                onInputChanged(deviceType, deviceSlot, evt);
            })
            : this._createDummyNativeInput();
    }
    // Public functions
    /**
     * Checks for current device input value, given an id and input index. Throws exception if requested device not initialized.
     * @param deviceType Enum specifying device type
     * @param deviceSlot "Slot" or index that device is referenced in
     * @param inputIndex Id of input to be checked
     * @returns Current value of input
     */
    pollInput(deviceType, deviceSlot, inputIndex) {
        return this._nativeInput.pollInput(deviceType, deviceSlot, inputIndex);
    }
    /**
     * Check for a specific device in the DeviceInputSystem
     * @param deviceType Type of device to check for
     * @returns bool with status of device's existence
     */
    isDeviceAvailable(deviceType) {
        //TODO: FIx native side first
        return deviceType === deviceEnums/* DeviceType */.bq.Mouse || deviceType === deviceEnums/* DeviceType */.bq.Touch;
    }
    /**
     * Dispose of all the observables
     */
    dispose() {
        this._nativeInput.dispose();
    }
    /**
     * For versions of BabylonNative that don't have the NativeInput plugin initialized, create a dummy version
     * @returns Object with dummy functions
     */
    _createDummyNativeInput() {
        const nativeInput = {
            pollInput: () => {
                return 0;
            },
            isDeviceAvailable: () => {
                return false;
            },
            dispose: () => { },
        };
        return nativeInput;
    }
}
//# sourceMappingURL=nativeDeviceInputSystem.js.map
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Misc/domManagement.js
var domManagement = __webpack_require__(18790);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Misc/tools.js
var tools = __webpack_require__(998);
;// ./node_modules/@babylonjs/core/DeviceInput/webDeviceInputSystem.js




// eslint-disable-next-line @typescript-eslint/naming-convention
const MAX_KEYCODES = 255;
// eslint-disable-next-line @typescript-eslint/naming-convention
const MAX_POINTER_INPUTS = Object.keys(deviceEnums/* PointerInput */.ST).length / 2;
/** @internal */
class WebDeviceInputSystem {
    /**
     * Constructor for the WebDeviceInputSystem
     * @param engine Engine to reference
     * @param onDeviceConnected Callback to execute when device is connected
     * @param onDeviceDisconnected Callback to execute when device is disconnected
     * @param onInputChanged Callback to execute when input changes on device
     */
    constructor(engine, onDeviceConnected, onDeviceDisconnected, onInputChanged) {
        // Private Members
        this._inputs = [];
        this._keyboardActive = false;
        this._pointerActive = false;
        this._usingSafari = tools/* Tools */.S0.IsSafari();
        // Found solution for determining if MacOS is being used here:
        // https://stackoverflow.com/questions/10527983/best-way-to-detect-mac-os-x-or-windows-computers-with-javascript-or-jquery
        this._usingMacOS = (0,domManagement/* IsNavigatorAvailable */.XD)() && /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform);
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        this._keyboardDownEvent = (evt) => { };
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        this._keyboardUpEvent = (evt) => { };
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        this._keyboardBlurEvent = (evt) => { };
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        this._pointerMoveEvent = (evt) => { };
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        this._pointerDownEvent = (evt) => { };
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        this._pointerUpEvent = (evt) => { };
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        this._pointerCancelEvent = (evt) => { };
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        this._pointerWheelEvent = (evt) => { };
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        this._pointerBlurEvent = (evt) => { };
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        this._pointerMacOSChromeOutEvent = (evt) => { };
        this._eventsAttached = false;
        this._mouseId = -1;
        this._isUsingFirefox = (0,domManagement/* IsNavigatorAvailable */.XD)() && navigator.userAgent && navigator.userAgent.indexOf("Firefox") !== -1;
        this._isUsingChromium = (0,domManagement/* IsNavigatorAvailable */.XD)() && navigator.userAgent && navigator.userAgent.indexOf("Chrome") !== -1;
        this._maxTouchPoints = 0;
        this._pointerInputClearObserver = null;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        this._gamepadConnectedEvent = (evt) => { };
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        this._gamepadDisconnectedEvent = (evt) => { };
        this._eventPrefix = tools/* Tools */.S0.GetPointerPrefix(engine);
        this._engine = engine;
        this._onDeviceConnected = onDeviceConnected;
        this._onDeviceDisconnected = onDeviceDisconnected;
        this._onInputChanged = onInputChanged;
        // If we need a pointerId, set one for future use
        this._mouseId = this._isUsingFirefox ? 0 : 1;
        this._enableEvents();
        if (this._usingMacOS) {
            this._metaKeys = [];
        }
        // Set callback to enable event handler switching when inputElement changes
        if (!this._engine._onEngineViewChanged) {
            this._engine._onEngineViewChanged = () => {
                this._enableEvents();
            };
        }
    }
    // Public functions
    /**
     * Checks for current device input value, given an id and input index. Throws exception if requested device not initialized.
     * @param deviceType Enum specifying device type
     * @param deviceSlot "Slot" or index that device is referenced in
     * @param inputIndex Id of input to be checked
     * @returns Current value of input
     */
    pollInput(deviceType, deviceSlot, inputIndex) {
        const device = this._inputs[deviceType][deviceSlot];
        if (!device) {
            // eslint-disable-next-line no-throw-literal
            throw `Unable to find device ${deviceEnums/* DeviceType */.bq[deviceType]}`;
        }
        if (deviceType >= deviceEnums/* DeviceType */.bq.DualShock && deviceType <= deviceEnums/* DeviceType */.bq.DualSense) {
            this._updateDevice(deviceType, deviceSlot, inputIndex);
        }
        const currentValue = device[inputIndex];
        if (currentValue === undefined) {
            // eslint-disable-next-line no-throw-literal
            throw `Unable to find input ${inputIndex} for device ${deviceEnums/* DeviceType */.bq[deviceType]} in slot ${deviceSlot}`;
        }
        if (inputIndex === deviceEnums/* PointerInput */.ST.Move) {
            tools/* Tools */.S0.Warn(`Unable to provide information for PointerInput.Move.  Try using PointerInput.Horizontal or PointerInput.Vertical for move data.`);
        }
        return currentValue;
    }
    /**
     * Check for a specific device in the DeviceInputSystem
     * @param deviceType Type of device to check for
     * @returns bool with status of device's existence
     */
    isDeviceAvailable(deviceType) {
        return this._inputs[deviceType] !== undefined;
    }
    /**
     * Dispose of all the eventlisteners
     */
    dispose() {
        // Callbacks
        this._onDeviceConnected = () => { };
        this._onDeviceDisconnected = () => { };
        this._onInputChanged = () => { };
        delete this._engine._onEngineViewChanged;
        if (this._elementToAttachTo) {
            this._disableEvents();
        }
    }
    /**
     * Enable listening for user input events
     */
    _enableEvents() {
        const inputElement = this?._engine.getInputElement();
        if (inputElement && (!this._eventsAttached || this._elementToAttachTo !== inputElement)) {
            // Remove events before adding to avoid double events or simultaneous events on multiple canvases
            this._disableEvents();
            // If the inputs array has already been created, zero it out to before setting up events
            if (this._inputs) {
                for (const inputs of this._inputs) {
                    if (inputs) {
                        for (const deviceSlotKey in inputs) {
                            const deviceSlot = +deviceSlotKey;
                            const device = inputs[deviceSlot];
                            if (device) {
                                for (let inputIndex = 0; inputIndex < device.length; inputIndex++) {
                                    device[inputIndex] = 0;
                                }
                            }
                        }
                    }
                }
            }
            this._elementToAttachTo = inputElement;
            // Set tab index for the inputElement to the engine's canvasTabIndex, if and only if the element's tab index is -1
            this._elementToAttachTo.tabIndex = this._elementToAttachTo.tabIndex !== -1 ? this._elementToAttachTo.tabIndex : this._engine.canvasTabIndex;
            this._handleKeyActions();
            this._handlePointerActions();
            this._handleGamepadActions();
            this._eventsAttached = true;
            // Check for devices that are already connected but aren't registered. Currently, only checks for gamepads and mouse
            this._checkForConnectedDevices();
        }
    }
    /**
     * Disable listening for user input events
     */
    _disableEvents() {
        if (this._elementToAttachTo) {
            // Blur Events
            this._elementToAttachTo.removeEventListener("blur", this._keyboardBlurEvent);
            this._elementToAttachTo.removeEventListener("blur", this._pointerBlurEvent);
            // Keyboard Events
            this._elementToAttachTo.removeEventListener("keydown", this._keyboardDownEvent);
            this._elementToAttachTo.removeEventListener("keyup", this._keyboardUpEvent);
            // Pointer Events
            this._elementToAttachTo.removeEventListener(this._eventPrefix + "move", this._pointerMoveEvent);
            this._elementToAttachTo.removeEventListener(this._eventPrefix + "down", this._pointerDownEvent);
            this._elementToAttachTo.removeEventListener(this._eventPrefix + "up", this._pointerUpEvent);
            this._elementToAttachTo.removeEventListener(this._eventPrefix + "cancel", this._pointerCancelEvent);
            this._elementToAttachTo.removeEventListener(this._wheelEventName, this._pointerWheelEvent);
            if (this._usingMacOS && this._isUsingChromium) {
                this._elementToAttachTo.removeEventListener("lostpointercapture", this._pointerMacOSChromeOutEvent);
            }
            // Gamepad Events
            window.removeEventListener("gamepadconnected", this._gamepadConnectedEvent);
            window.removeEventListener("gamepaddisconnected", this._gamepadDisconnectedEvent);
        }
        if (this._pointerInputClearObserver) {
            this._engine.onEndFrameObservable.remove(this._pointerInputClearObserver);
        }
        this._eventsAttached = false;
    }
    /**
     * Checks for existing connections to devices and register them, if necessary
     * Currently handles gamepads and mouse
     */
    _checkForConnectedDevices() {
        if (navigator.getGamepads) {
            const gamepads = navigator.getGamepads();
            for (const gamepad of gamepads) {
                if (gamepad) {
                    this._addGamePad(gamepad);
                }
            }
        }
        // If the device in use has mouse capabilities, pre-register mouse
        if (typeof matchMedia === "function" && matchMedia("(pointer:fine)").matches) {
            // This will provide a dummy value for the cursor position and is expected to be overridden when the first mouse event happens.
            // There isn't any good way to get the current position outside of a pointer event so that's why this was done.
            this._addPointerDevice(deviceEnums/* DeviceType */.bq.Mouse, 0, 0, 0);
        }
    }
    // Private functions
    /**
     * Add a gamepad to the DeviceInputSystem
     * @param gamepad A single DOM Gamepad object
     */
    _addGamePad(gamepad) {
        const deviceType = this._getGamepadDeviceType(gamepad.id);
        const deviceSlot = gamepad.index;
        this._gamepads = this._gamepads || new Array(gamepad.index + 1);
        this._registerDevice(deviceType, deviceSlot, gamepad.buttons.length + gamepad.axes.length);
        this._gamepads[deviceSlot] = deviceType;
    }
    /**
     * Add pointer device to DeviceInputSystem
     * @param deviceType Type of Pointer to add
     * @param deviceSlot Pointer ID (0 for mouse, pointerId for Touch)
     * @param currentX Current X at point of adding
     * @param currentY Current Y at point of adding
     */
    _addPointerDevice(deviceType, deviceSlot, currentX, currentY) {
        if (!this._pointerActive) {
            this._pointerActive = true;
        }
        this._registerDevice(deviceType, deviceSlot, MAX_POINTER_INPUTS);
        const pointer = this._inputs[deviceType][deviceSlot]; /* initialize our pointer position immediately after registration */
        pointer[0] = currentX;
        pointer[1] = currentY;
    }
    /**
     * Add device and inputs to device array
     * @param deviceType Enum specifying device type
     * @param deviceSlot "Slot" or index that device is referenced in
     * @param numberOfInputs Number of input entries to create for given device
     */
    _registerDevice(deviceType, deviceSlot, numberOfInputs) {
        if (deviceSlot === undefined) {
            // eslint-disable-next-line no-throw-literal
            throw `Unable to register device ${deviceEnums/* DeviceType */.bq[deviceType]} to undefined slot.`;
        }
        if (!this._inputs[deviceType]) {
            this._inputs[deviceType] = {};
        }
        if (!this._inputs[deviceType][deviceSlot]) {
            const device = new Array(numberOfInputs);
            device.fill(0);
            this._inputs[deviceType][deviceSlot] = device;
            this._onDeviceConnected(deviceType, deviceSlot);
        }
    }
    /**
     * Given a specific device name, remove that device from the device map
     * @param deviceType Enum specifying device type
     * @param deviceSlot "Slot" or index that device is referenced in
     */
    _unregisterDevice(deviceType, deviceSlot) {
        if (this._inputs[deviceType][deviceSlot]) {
            delete this._inputs[deviceType][deviceSlot];
            this._onDeviceDisconnected(deviceType, deviceSlot);
        }
    }
    /**
     * Handle all actions that come from keyboard interaction
     */
    _handleKeyActions() {
        this._keyboardDownEvent = (evt) => {
            if (!this._keyboardActive) {
                this._keyboardActive = true;
                this._registerDevice(deviceEnums/* DeviceType */.bq.Keyboard, 0, MAX_KEYCODES);
            }
            const kbKey = this._inputs[deviceEnums/* DeviceType */.bq.Keyboard][0];
            if (kbKey) {
                kbKey[evt.keyCode] = 1;
                const deviceEvent = evt;
                deviceEvent.inputIndex = evt.keyCode;
                if (this._usingMacOS && evt.metaKey && evt.key !== "Meta") {
                    if (!this._metaKeys.includes(evt.keyCode)) {
                        this._metaKeys.push(evt.keyCode);
                    }
                }
                this._onInputChanged(deviceEnums/* DeviceType */.bq.Keyboard, 0, deviceEvent);
            }
        };
        this._keyboardUpEvent = (evt) => {
            if (!this._keyboardActive) {
                this._keyboardActive = true;
                this._registerDevice(deviceEnums/* DeviceType */.bq.Keyboard, 0, MAX_KEYCODES);
            }
            const kbKey = this._inputs[deviceEnums/* DeviceType */.bq.Keyboard][0];
            if (kbKey) {
                kbKey[evt.keyCode] = 0;
                const deviceEvent = evt;
                deviceEvent.inputIndex = evt.keyCode;
                if (this._usingMacOS && evt.key === "Meta" && this._metaKeys.length > 0) {
                    for (const keyCode of this._metaKeys) {
                        const deviceEvent = DeviceEventFactory.CreateDeviceEvent(deviceEnums/* DeviceType */.bq.Keyboard, 0, keyCode, 0, this, this._elementToAttachTo);
                        kbKey[keyCode] = 0;
                        this._onInputChanged(deviceEnums/* DeviceType */.bq.Keyboard, 0, deviceEvent);
                    }
                    this._metaKeys.splice(0, this._metaKeys.length);
                }
                this._onInputChanged(deviceEnums/* DeviceType */.bq.Keyboard, 0, deviceEvent);
            }
        };
        this._keyboardBlurEvent = () => {
            if (this._keyboardActive) {
                const kbKey = this._inputs[deviceEnums/* DeviceType */.bq.Keyboard][0];
                for (let i = 0; i < kbKey.length; i++) {
                    if (kbKey[i] !== 0) {
                        kbKey[i] = 0;
                        const deviceEvent = DeviceEventFactory.CreateDeviceEvent(deviceEnums/* DeviceType */.bq.Keyboard, 0, i, 0, this, this._elementToAttachTo);
                        this._onInputChanged(deviceEnums/* DeviceType */.bq.Keyboard, 0, deviceEvent);
                    }
                }
                if (this._usingMacOS) {
                    this._metaKeys.splice(0, this._metaKeys.length);
                }
            }
        };
        this._elementToAttachTo.addEventListener("keydown", this._keyboardDownEvent);
        this._elementToAttachTo.addEventListener("keyup", this._keyboardUpEvent);
        this._elementToAttachTo.addEventListener("blur", this._keyboardBlurEvent);
    }
    /**
     * Handle all actions that come from pointer interaction
     */
    _handlePointerActions() {
        // If maxTouchPoints is defined, use that value.  Otherwise, allow for a minimum for supported gestures like pinch
        this._maxTouchPoints = ((0,domManagement/* IsNavigatorAvailable */.XD)() && navigator.maxTouchPoints) || 2;
        if (!this._activeTouchIds) {
            this._activeTouchIds = new Array(this._maxTouchPoints);
        }
        for (let i = 0; i < this._maxTouchPoints; i++) {
            this._activeTouchIds[i] = -1;
        }
        this._pointerMoveEvent = (evt) => {
            const deviceType = this._getPointerType(evt);
            let deviceSlot = deviceType === deviceEnums/* DeviceType */.bq.Mouse ? 0 : this._activeTouchIds.indexOf(evt.pointerId);
            // In the event that we're getting pointermove events from touch inputs that we aren't tracking,
            // look for an available slot and retroactively connect it.
            if (deviceType === deviceEnums/* DeviceType */.bq.Touch && deviceSlot === -1) {
                const idx = this._activeTouchIds.indexOf(-1);
                if (idx >= 0) {
                    deviceSlot = idx;
                    this._activeTouchIds[idx] = evt.pointerId;
                    // Because this is a "new" input, inform the connected callback
                    this._onDeviceConnected(deviceType, deviceSlot);
                }
                else {
                    // We can't find an open slot to store new pointer so just return (can only support max number of touches)
                    tools/* Tools */.S0.Warn(`Max number of touches exceeded.  Ignoring touches in excess of ${this._maxTouchPoints}`);
                    return;
                }
            }
            if (!this._inputs[deviceType]) {
                this._inputs[deviceType] = {};
            }
            if (!this._inputs[deviceType][deviceSlot]) {
                this._addPointerDevice(deviceType, deviceSlot, evt.clientX, evt.clientY);
            }
            const pointer = this._inputs[deviceType][deviceSlot];
            if (pointer) {
                const deviceEvent = evt;
                deviceEvent.inputIndex = deviceEnums/* PointerInput */.ST.Move;
                pointer[deviceEnums/* PointerInput */.ST.Horizontal] = evt.clientX;
                pointer[deviceEnums/* PointerInput */.ST.Vertical] = evt.clientY;
                // For touches that aren't started with a down, we need to set the button state to 1
                if (deviceType === deviceEnums/* DeviceType */.bq.Touch && pointer[deviceEnums/* PointerInput */.ST.LeftClick] === 0) {
                    pointer[deviceEnums/* PointerInput */.ST.LeftClick] = 1;
                }
                if (evt.pointerId === undefined) {
                    evt.pointerId = this._mouseId;
                }
                this._onInputChanged(deviceType, deviceSlot, deviceEvent);
                // Lets Propagate the event for move with same position.
                if (!this._usingSafari && evt.button !== -1) {
                    deviceEvent.inputIndex = evt.button + 2;
                    pointer[evt.button + 2] = pointer[evt.button + 2] ? 0 : 1; // Reverse state of button if evt.button has value
                    this._onInputChanged(deviceType, deviceSlot, deviceEvent);
                }
            }
        };
        this._pointerDownEvent = (evt) => {
            const deviceType = this._getPointerType(evt);
            let deviceSlot = deviceType === deviceEnums/* DeviceType */.bq.Mouse ? 0 : evt.pointerId;
            if (deviceType === deviceEnums/* DeviceType */.bq.Touch) {
                // See if this pointerId is already using an existing slot
                // (possible on some devices which raise the pointerMove event before the pointerDown event, e.g. when using a pen)
                let idx = this._activeTouchIds.indexOf(evt.pointerId);
                if (idx === -1) {
                    // If the pointerId wasn't already using a slot, find an open one
                    idx = this._activeTouchIds.indexOf(-1);
                }
                if (idx >= 0) {
                    deviceSlot = idx;
                    this._activeTouchIds[idx] = evt.pointerId;
                }
                else {
                    // We can't find an open slot to store new pointer so just return (can only support max number of touches)
                    tools/* Tools */.S0.Warn(`Max number of touches exceeded.  Ignoring touches in excess of ${this._maxTouchPoints}`);
                    return;
                }
            }
            if (!this._inputs[deviceType]) {
                this._inputs[deviceType] = {};
            }
            if (!this._inputs[deviceType][deviceSlot]) {
                this._addPointerDevice(deviceType, deviceSlot, evt.clientX, evt.clientY);
            }
            else if (deviceType === deviceEnums/* DeviceType */.bq.Touch) {
                this._onDeviceConnected(deviceType, deviceSlot);
            }
            const pointer = this._inputs[deviceType][deviceSlot];
            if (pointer) {
                const previousHorizontal = pointer[deviceEnums/* PointerInput */.ST.Horizontal];
                const previousVertical = pointer[deviceEnums/* PointerInput */.ST.Vertical];
                if (deviceType === deviceEnums/* DeviceType */.bq.Mouse) {
                    // Mouse; Set pointerId if undefined
                    if (evt.pointerId === undefined) {
                        evt.pointerId = this._mouseId;
                    }
                    if (!document.pointerLockElement) {
                        try {
                            this._elementToAttachTo.setPointerCapture(this._mouseId);
                        }
                        catch (e) {
                            // DO NOTHING
                        }
                    }
                }
                else {
                    // Touch; Since touches are dynamically assigned, only set capture if we have an id
                    if (evt.pointerId && !document.pointerLockElement) {
                        try {
                            this._elementToAttachTo.setPointerCapture(evt.pointerId);
                        }
                        catch (e) {
                            // DO NOTHING
                        }
                    }
                }
                pointer[deviceEnums/* PointerInput */.ST.Horizontal] = evt.clientX;
                pointer[deviceEnums/* PointerInput */.ST.Vertical] = evt.clientY;
                pointer[evt.button + 2] = 1;
                const deviceEvent = evt;
                // NOTE: The +2 used here to is because PointerInput has the same value progression for its mouse buttons as PointerEvent.button
                // However, we have our X and Y values front-loaded to group together the touch inputs but not break this progression
                // EG. ([X, Y, Left-click], Middle-click, etc...)
                deviceEvent.inputIndex = evt.button + 2;
                this._onInputChanged(deviceType, deviceSlot, deviceEvent);
                if (previousHorizontal !== evt.clientX || previousVertical !== evt.clientY) {
                    deviceEvent.inputIndex = deviceEnums/* PointerInput */.ST.Move;
                    this._onInputChanged(deviceType, deviceSlot, deviceEvent);
                }
            }
        };
        this._pointerUpEvent = (evt) => {
            const deviceType = this._getPointerType(evt);
            const deviceSlot = deviceType === deviceEnums/* DeviceType */.bq.Mouse ? 0 : this._activeTouchIds.indexOf(evt.pointerId);
            if (deviceType === deviceEnums/* DeviceType */.bq.Touch) {
                // If we're getting a pointerup event for a touch that isn't active, just return.
                if (deviceSlot === -1) {
                    return;
                }
                else {
                    this._activeTouchIds[deviceSlot] = -1;
                }
            }
            const pointer = this._inputs[deviceType]?.[deviceSlot];
            if (pointer && pointer[evt.button + 2] !== 0) {
                const previousHorizontal = pointer[deviceEnums/* PointerInput */.ST.Horizontal];
                const previousVertical = pointer[deviceEnums/* PointerInput */.ST.Vertical];
                pointer[deviceEnums/* PointerInput */.ST.Horizontal] = evt.clientX;
                pointer[deviceEnums/* PointerInput */.ST.Vertical] = evt.clientY;
                pointer[evt.button + 2] = 0;
                const deviceEvent = evt;
                if (evt.pointerId === undefined) {
                    evt.pointerId = this._mouseId;
                }
                if (previousHorizontal !== evt.clientX || previousVertical !== evt.clientY) {
                    deviceEvent.inputIndex = deviceEnums/* PointerInput */.ST.Move;
                    this._onInputChanged(deviceType, deviceSlot, deviceEvent);
                }
                // NOTE: The +2 used here to is because PointerInput has the same value progression for its mouse buttons as PointerEvent.button
                // However, we have our X and Y values front-loaded to group together the touch inputs but not break this progression
                // EG. ([X, Y, Left-click], Middle-click, etc...)
                deviceEvent.inputIndex = evt.button + 2;
                if (deviceType === deviceEnums/* DeviceType */.bq.Mouse && this._mouseId >= 0 && this._elementToAttachTo.hasPointerCapture?.(this._mouseId)) {
                    this._elementToAttachTo.releasePointerCapture(this._mouseId);
                }
                else if (evt.pointerId && this._elementToAttachTo.hasPointerCapture?.(evt.pointerId)) {
                    this._elementToAttachTo.releasePointerCapture(evt.pointerId);
                }
                this._onInputChanged(deviceType, deviceSlot, deviceEvent);
                if (deviceType === deviceEnums/* DeviceType */.bq.Touch) {
                    this._onDeviceDisconnected(deviceType, deviceSlot);
                }
            }
        };
        this._pointerCancelEvent = (evt) => {
            if (evt.pointerType === "mouse") {
                const pointer = this._inputs[deviceEnums/* DeviceType */.bq.Mouse][0];
                if (this._mouseId >= 0 && this._elementToAttachTo.hasPointerCapture?.(this._mouseId)) {
                    this._elementToAttachTo.releasePointerCapture(this._mouseId);
                }
                for (let inputIndex = deviceEnums/* PointerInput */.ST.LeftClick; inputIndex <= deviceEnums/* PointerInput */.ST.BrowserForward; inputIndex++) {
                    if (pointer[inputIndex] === 1) {
                        pointer[inputIndex] = 0;
                        const deviceEvent = DeviceEventFactory.CreateDeviceEvent(deviceEnums/* DeviceType */.bq.Mouse, 0, inputIndex, 0, this, this._elementToAttachTo);
                        this._onInputChanged(deviceEnums/* DeviceType */.bq.Mouse, 0, deviceEvent);
                    }
                }
            }
            else {
                const deviceSlot = this._activeTouchIds.indexOf(evt.pointerId);
                // If we're getting a pointercancel event for a touch that isn't active, just return
                if (deviceSlot === -1) {
                    return;
                }
                if (this._elementToAttachTo.hasPointerCapture?.(evt.pointerId)) {
                    this._elementToAttachTo.releasePointerCapture(evt.pointerId);
                }
                this._inputs[deviceEnums/* DeviceType */.bq.Touch][deviceSlot][deviceEnums/* PointerInput */.ST.LeftClick] = 0;
                const deviceEvent = DeviceEventFactory.CreateDeviceEvent(deviceEnums/* DeviceType */.bq.Touch, deviceSlot, deviceEnums/* PointerInput */.ST.LeftClick, 0, this, this._elementToAttachTo, evt.pointerId);
                this._onInputChanged(deviceEnums/* DeviceType */.bq.Touch, deviceSlot, deviceEvent);
                this._activeTouchIds[deviceSlot] = -1;
                this._onDeviceDisconnected(deviceEnums/* DeviceType */.bq.Touch, deviceSlot);
            }
        };
        // Set Wheel Event Name, code originally from scene.inputManager
        this._wheelEventName =
            "onwheel" in document.createElement("div")
                ? "wheel" // Modern browsers support "wheel"
                : document.onmousewheel !== undefined
                    ? "mousewheel" // Webkit and IE support at least "mousewheel"
                    : "DOMMouseScroll"; // let's assume that remaining browsers are older Firefox
        // Code originally in scene.inputManager.ts
        // Chrome reports warning in console if wheel listener doesn't set an explicit passive option.
        // IE11 only supports captureEvent:boolean, not options:object, and it defaults to false.
        // Feature detection technique copied from: https://github.com/github/eventlistener-polyfill (MIT license)
        let passiveSupported = false;
        const noop = function () { };
        try {
            const options = Object.defineProperty({}, "passive", {
                get: function () {
                    passiveSupported = true;
                },
            });
            this._elementToAttachTo.addEventListener("test", noop, options);
            this._elementToAttachTo.removeEventListener("test", noop, options);
        }
        catch (e) {
            /* */
        }
        this._pointerBlurEvent = () => {
            // Handle mouse buttons
            if (this.isDeviceAvailable(deviceEnums/* DeviceType */.bq.Mouse)) {
                const pointer = this._inputs[deviceEnums/* DeviceType */.bq.Mouse][0];
                if (this._mouseId >= 0 && this._elementToAttachTo.hasPointerCapture?.(this._mouseId)) {
                    this._elementToAttachTo.releasePointerCapture(this._mouseId);
                }
                for (let inputIndex = deviceEnums/* PointerInput */.ST.LeftClick; inputIndex <= deviceEnums/* PointerInput */.ST.BrowserForward; inputIndex++) {
                    if (pointer[inputIndex] === 1) {
                        pointer[inputIndex] = 0;
                        const deviceEvent = DeviceEventFactory.CreateDeviceEvent(deviceEnums/* DeviceType */.bq.Mouse, 0, inputIndex, 0, this, this._elementToAttachTo);
                        this._onInputChanged(deviceEnums/* DeviceType */.bq.Mouse, 0, deviceEvent);
                    }
                }
            }
            // Handle Active Touches
            if (this.isDeviceAvailable(deviceEnums/* DeviceType */.bq.Touch)) {
                const pointer = this._inputs[deviceEnums/* DeviceType */.bq.Touch];
                for (let deviceSlot = 0; deviceSlot < this._activeTouchIds.length; deviceSlot++) {
                    const pointerId = this._activeTouchIds[deviceSlot];
                    if (this._elementToAttachTo.hasPointerCapture?.(pointerId)) {
                        this._elementToAttachTo.releasePointerCapture(pointerId);
                    }
                    if (pointerId !== -1 && pointer[deviceSlot]?.[deviceEnums/* PointerInput */.ST.LeftClick] === 1) {
                        pointer[deviceSlot][deviceEnums/* PointerInput */.ST.LeftClick] = 0;
                        const deviceEvent = DeviceEventFactory.CreateDeviceEvent(deviceEnums/* DeviceType */.bq.Touch, deviceSlot, deviceEnums/* PointerInput */.ST.LeftClick, 0, this, this._elementToAttachTo, pointerId);
                        this._onInputChanged(deviceEnums/* DeviceType */.bq.Touch, deviceSlot, deviceEvent);
                        this._activeTouchIds[deviceSlot] = -1;
                        this._onDeviceDisconnected(deviceEnums/* DeviceType */.bq.Touch, deviceSlot);
                    }
                }
            }
        };
        this._pointerWheelEvent = (evt) => {
            const deviceType = deviceEnums/* DeviceType */.bq.Mouse;
            const deviceSlot = 0;
            if (!this._inputs[deviceType]) {
                this._inputs[deviceType] = [];
            }
            if (!this._inputs[deviceType][deviceSlot]) {
                this._pointerActive = true;
                this._registerDevice(deviceType, deviceSlot, MAX_POINTER_INPUTS);
            }
            const pointer = this._inputs[deviceType][deviceSlot];
            if (pointer) {
                pointer[deviceEnums/* PointerInput */.ST.MouseWheelX] = evt.deltaX || 0;
                pointer[deviceEnums/* PointerInput */.ST.MouseWheelY] = evt.deltaY || evt.wheelDelta || 0;
                pointer[deviceEnums/* PointerInput */.ST.MouseWheelZ] = evt.deltaZ || 0;
                const deviceEvent = evt;
                // By default, there is no pointerId for mouse wheel events so we'll add one here
                // This logic was originally in the InputManager but was added here to make the
                // InputManager more platform-agnostic
                if (evt.pointerId === undefined) {
                    evt.pointerId = this._mouseId;
                }
                if (pointer[deviceEnums/* PointerInput */.ST.MouseWheelX] !== 0) {
                    deviceEvent.inputIndex = deviceEnums/* PointerInput */.ST.MouseWheelX;
                    this._onInputChanged(deviceType, deviceSlot, deviceEvent);
                }
                if (pointer[deviceEnums/* PointerInput */.ST.MouseWheelY] !== 0) {
                    deviceEvent.inputIndex = deviceEnums/* PointerInput */.ST.MouseWheelY;
                    this._onInputChanged(deviceType, deviceSlot, deviceEvent);
                }
                if (pointer[deviceEnums/* PointerInput */.ST.MouseWheelZ] !== 0) {
                    deviceEvent.inputIndex = deviceEnums/* PointerInput */.ST.MouseWheelZ;
                    this._onInputChanged(deviceType, deviceSlot, deviceEvent);
                }
            }
        };
        // Workaround for MacOS Chromium Browsers for lost pointer capture bug
        if (this._usingMacOS && this._isUsingChromium) {
            this._pointerMacOSChromeOutEvent = (evt) => {
                if (evt.buttons > 1) {
                    this._pointerCancelEvent(evt);
                }
            };
            this._elementToAttachTo.addEventListener("lostpointercapture", this._pointerMacOSChromeOutEvent);
        }
        this._elementToAttachTo.addEventListener(this._eventPrefix + "move", this._pointerMoveEvent);
        this._elementToAttachTo.addEventListener(this._eventPrefix + "down", this._pointerDownEvent);
        this._elementToAttachTo.addEventListener(this._eventPrefix + "up", this._pointerUpEvent);
        this._elementToAttachTo.addEventListener(this._eventPrefix + "cancel", this._pointerCancelEvent);
        this._elementToAttachTo.addEventListener("blur", this._pointerBlurEvent);
        this._elementToAttachTo.addEventListener(this._wheelEventName, this._pointerWheelEvent, passiveSupported ? { passive: false } : false);
        // Since there's no up or down event for mouse wheel or delta x/y, clear mouse values at end of frame
        this._pointerInputClearObserver = this._engine.onEndFrameObservable.add(() => {
            if (this.isDeviceAvailable(deviceEnums/* DeviceType */.bq.Mouse)) {
                const pointer = this._inputs[deviceEnums/* DeviceType */.bq.Mouse][0];
                pointer[deviceEnums/* PointerInput */.ST.MouseWheelX] = 0;
                pointer[deviceEnums/* PointerInput */.ST.MouseWheelY] = 0;
                pointer[deviceEnums/* PointerInput */.ST.MouseWheelZ] = 0;
            }
        });
    }
    /**
     * Handle all actions that come from gamepad interaction
     */
    _handleGamepadActions() {
        this._gamepadConnectedEvent = (evt) => {
            this._addGamePad(evt.gamepad);
        };
        this._gamepadDisconnectedEvent = (evt) => {
            if (this._gamepads) {
                const deviceType = this._getGamepadDeviceType(evt.gamepad.id);
                const deviceSlot = evt.gamepad.index;
                this._unregisterDevice(deviceType, deviceSlot);
                delete this._gamepads[deviceSlot];
            }
        };
        window.addEventListener("gamepadconnected", this._gamepadConnectedEvent);
        window.addEventListener("gamepaddisconnected", this._gamepadDisconnectedEvent);
    }
    /**
     * Update all non-event based devices with each frame
     * @param deviceType Enum specifying device type
     * @param deviceSlot "Slot" or index that device is referenced in
     * @param inputIndex Id of input to be checked
     */
    _updateDevice(deviceType, deviceSlot, inputIndex) {
        // Gamepads
        const gp = navigator.getGamepads()[deviceSlot];
        if (gp && deviceType === this._gamepads[deviceSlot]) {
            const device = this._inputs[deviceType][deviceSlot];
            if (inputIndex >= gp.buttons.length) {
                device[inputIndex] = gp.axes[inputIndex - gp.buttons.length].valueOf();
            }
            else {
                device[inputIndex] = gp.buttons[inputIndex].value;
            }
        }
    }
    /**
     * Gets DeviceType from the device name
     * @param deviceName Name of Device from DeviceInputSystem
     * @returns DeviceType enum value
     */
    _getGamepadDeviceType(deviceName) {
        if (deviceName.indexOf("054c") !== -1) {
            // DualShock 4 Gamepad
            return deviceName.indexOf("0ce6") !== -1 ? deviceEnums/* DeviceType */.bq.DualSense : deviceEnums/* DeviceType */.bq.DualShock;
        }
        else if (deviceName.indexOf("Xbox One") !== -1 || deviceName.search("Xbox 360") !== -1 || deviceName.search("xinput") !== -1) {
            // Xbox Gamepad
            return deviceEnums/* DeviceType */.bq.Xbox;
        }
        else if (deviceName.indexOf("057e") !== -1) {
            // Switch Gamepad
            return deviceEnums/* DeviceType */.bq.Switch;
        }
        return deviceEnums/* DeviceType */.bq.Generic;
    }
    /**
     * Get DeviceType from a given pointer/mouse/touch event.
     * @param evt PointerEvent to evaluate
     * @returns DeviceType interpreted from event
     */
    _getPointerType(evt) {
        let deviceType = deviceEnums/* DeviceType */.bq.Mouse;
        if (evt.pointerType === "touch" || evt.pointerType === "pen" || evt.touches) {
            deviceType = deviceEnums/* DeviceType */.bq.Touch;
        }
        return deviceType;
    }
}
//# sourceMappingURL=webDeviceInputSystem.js.map
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/DeviceInput/InputDevices/deviceSource.js
var InputDevices_deviceSource = __webpack_require__(51314);
;// ./node_modules/@babylonjs/core/DeviceInput/internalDeviceSourceManager.js




/** @internal */
class InternalDeviceSourceManager {
    constructor(engine) {
        this._registeredManagers = new Array();
        this._refCount = 0;
        // Public Functions
        this.registerManager = (manager) => {
            for (let deviceType = 0; deviceType < this._devices.length; deviceType++) {
                const device = this._devices[deviceType];
                for (const deviceSlotKey in device) {
                    const deviceSlot = +deviceSlotKey;
                    manager._addDevice(new InputDevices_deviceSource/* DeviceSource */.c(this._deviceInputSystem, deviceType, deviceSlot));
                }
            }
            this._registeredManagers.push(manager);
        };
        this.unregisterManager = (manager) => {
            const idx = this._registeredManagers.indexOf(manager);
            if (idx > -1) {
                this._registeredManagers.splice(idx, 1);
            }
        };
        const numberOfDeviceTypes = Object.keys(deviceEnums/* DeviceType */.bq).length / 2;
        this._devices = new Array(numberOfDeviceTypes);
        const onDeviceConnected = (deviceType, deviceSlot) => {
            if (!this._devices[deviceType]) {
                this._devices[deviceType] = new Array();
            }
            if (!this._devices[deviceType][deviceSlot]) {
                this._devices[deviceType][deviceSlot] = deviceSlot;
            }
            for (const manager of this._registeredManagers) {
                const deviceSource = new InputDevices_deviceSource/* DeviceSource */.c(this._deviceInputSystem, deviceType, deviceSlot);
                manager._addDevice(deviceSource);
            }
        };
        const onDeviceDisconnected = (deviceType, deviceSlot) => {
            if (this._devices[deviceType]?.[deviceSlot]) {
                delete this._devices[deviceType][deviceSlot];
            }
            for (const manager of this._registeredManagers) {
                manager._removeDevice(deviceType, deviceSlot);
            }
        };
        const onInputChanged = (deviceType, deviceSlot, eventData) => {
            if (eventData) {
                for (const manager of this._registeredManagers) {
                    manager._onInputChanged(deviceType, deviceSlot, eventData);
                }
            }
        };
        if (typeof _native !== "undefined") {
            this._deviceInputSystem = new NativeDeviceInputSystem(onDeviceConnected, onDeviceDisconnected, onInputChanged);
        }
        else {
            this._deviceInputSystem = new WebDeviceInputSystem(engine, onDeviceConnected, onDeviceDisconnected, onInputChanged);
        }
    }
    dispose() {
        this._deviceInputSystem.dispose();
    }
}
//# sourceMappingURL=internalDeviceSourceManager.js.map
;// ./node_modules/@babylonjs/core/DeviceInput/InputDevices/deviceSourceManager.js



/**
 * Class to keep track of devices
 */
class DeviceSourceManager {
    // Public Functions
    /**
     * Gets a DeviceSource, given a type and slot
     * @param deviceType - Type of Device
     * @param deviceSlot - Slot or ID of device
     * @returns DeviceSource
     */
    getDeviceSource(deviceType, deviceSlot) {
        if (deviceSlot === undefined) {
            if (this._firstDevice[deviceType] === undefined) {
                return null;
            }
            deviceSlot = this._firstDevice[deviceType];
        }
        if (!this._devices[deviceType] || this._devices[deviceType][deviceSlot] === undefined) {
            return null;
        }
        return this._devices[deviceType][deviceSlot];
    }
    /**
     * Gets an array of DeviceSource objects for a given device type
     * @param deviceType - Type of Device
     * @returns All available DeviceSources of a given type
     */
    getDeviceSources(deviceType) {
        // If device type hasn't had any devices connected yet, return empty array.
        if (!this._devices[deviceType]) {
            return [];
        }
        return this._devices[deviceType].filter((source) => {
            return !!source;
        });
    }
    /**
     * Default constructor
     * @param engine - Used to get canvas (if applicable)
     */
    constructor(engine) {
        const numberOfDeviceTypes = Object.keys(deviceEnums/* DeviceType */.bq).length / 2;
        this._devices = new Array(numberOfDeviceTypes);
        this._firstDevice = new Array(numberOfDeviceTypes);
        this._engine = engine;
        if (!this._engine._deviceSourceManager) {
            this._engine._deviceSourceManager = new InternalDeviceSourceManager(engine);
        }
        this._engine._deviceSourceManager._refCount++;
        // Observables
        this.onDeviceConnectedObservable = new observable/* Observable */.cP((observer) => {
            for (const devices of this._devices) {
                if (devices) {
                    for (const device of devices) {
                        if (device) {
                            this.onDeviceConnectedObservable.notifyObserver(observer, device);
                        }
                    }
                }
            }
        });
        this.onDeviceDisconnectedObservable = new observable/* Observable */.cP();
        this._engine._deviceSourceManager.registerManager(this);
        this._onDisposeObserver = engine.onDisposeObservable.add(() => {
            this.dispose();
        });
    }
    /**
     * Dispose of DeviceSourceManager
     */
    dispose() {
        // Null out observable refs
        this.onDeviceConnectedObservable.clear();
        this.onDeviceDisconnectedObservable.clear();
        if (this._engine._deviceSourceManager) {
            this._engine._deviceSourceManager.unregisterManager(this);
            if (--this._engine._deviceSourceManager._refCount < 1) {
                this._engine._deviceSourceManager.dispose();
                delete this._engine._deviceSourceManager;
            }
        }
        this._engine.onDisposeObservable.remove(this._onDisposeObserver);
    }
    // Hidden Functions
    /**
     * @param deviceSource - Source to add
     * @internal
     */
    _addDevice(deviceSource) {
        if (!this._devices[deviceSource.deviceType]) {
            this._devices[deviceSource.deviceType] = new Array();
        }
        if (!this._devices[deviceSource.deviceType][deviceSource.deviceSlot]) {
            this._devices[deviceSource.deviceType][deviceSource.deviceSlot] = deviceSource;
            this._updateFirstDevices(deviceSource.deviceType);
        }
        this.onDeviceConnectedObservable.notifyObservers(deviceSource);
    }
    /**
     * @param deviceType - DeviceType
     * @param deviceSlot - DeviceSlot
     * @internal
     */
    _removeDevice(deviceType, deviceSlot) {
        const deviceSource = this._devices[deviceType]?.[deviceSlot]; // Grab local reference to use before removing from devices
        this.onDeviceDisconnectedObservable.notifyObservers(deviceSource);
        if (this._devices[deviceType]?.[deviceSlot]) {
            delete this._devices[deviceType][deviceSlot];
        }
        // Even if we don't delete a device, we should still check for the first device as things may have gotten out of sync.
        this._updateFirstDevices(deviceType);
    }
    /**
     * @param deviceType - DeviceType
     * @param deviceSlot - DeviceSlot
     * @param eventData - Event
     * @internal
     */
    _onInputChanged(deviceType, deviceSlot, eventData) {
        this._devices[deviceType]?.[deviceSlot]?.onInputChangedObservable.notifyObservers(eventData);
    }
    // Private Functions
    _updateFirstDevices(type) {
        switch (type) {
            case deviceEnums/* DeviceType */.bq.Keyboard:
            case deviceEnums/* DeviceType */.bq.Mouse:
                this._firstDevice[type] = 0;
                break;
            case deviceEnums/* DeviceType */.bq.Touch:
            case deviceEnums/* DeviceType */.bq.DualSense:
            case deviceEnums/* DeviceType */.bq.DualShock:
            case deviceEnums/* DeviceType */.bq.Xbox:
            case deviceEnums/* DeviceType */.bq.Switch:
            case deviceEnums/* DeviceType */.bq.Generic: {
                delete this._firstDevice[type];
                // eslint-disable-next-line no-case-declarations
                const devices = this._devices[type];
                if (devices) {
                    for (let i = 0; i < devices.length; i++) {
                        if (devices[i]) {
                            this._firstDevice[type] = i;
                            break;
                        }
                    }
                }
                break;
            }
        }
    }
}
//# sourceMappingURL=deviceSourceManager.js.map

/***/ }),

/***/ 38123:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   s: () => (/* binding */ EventConstants)
/* harmony export */ });
/* unused harmony export DeviceInputEventType */
/**
 * Event Types
 */
var DeviceInputEventType;
(function (DeviceInputEventType) {
    // Pointers
    /** PointerMove */
    DeviceInputEventType[DeviceInputEventType["PointerMove"] = 0] = "PointerMove";
    /** PointerDown */
    DeviceInputEventType[DeviceInputEventType["PointerDown"] = 1] = "PointerDown";
    /** PointerUp */
    DeviceInputEventType[DeviceInputEventType["PointerUp"] = 2] = "PointerUp";
})(DeviceInputEventType || (DeviceInputEventType = {}));
/**
 * Constants used for Events
 */
class EventConstants {
}
/**
 * Pixel delta for Wheel Events (Default)
 */
EventConstants.DOM_DELTA_PIXEL = 0x00;
/**
 * Line delta for Wheel Events
 */
EventConstants.DOM_DELTA_LINE = 0x01;
/**
 * Page delta for Wheel Events
 */
EventConstants.DOM_DELTA_PAGE = 0x02;
//# sourceMappingURL=deviceInputEvents.js.map

/***/ }),

/***/ 24146:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Bu: () => (/* binding */ KeyboardInfoPre),
/* harmony export */   TB: () => (/* binding */ KeyboardEventTypes),
/* harmony export */   W0: () => (/* binding */ KeyboardInfo)
/* harmony export */ });
/**
 * Gather the list of keyboard event types as constants.
 */
class KeyboardEventTypes {
}
/**
 * The keydown event is fired when a key becomes active (pressed).
 */
KeyboardEventTypes.KEYDOWN = 0x01;
/**
 * The keyup event is fired when a key has been released.
 */
KeyboardEventTypes.KEYUP = 0x02;
/**
 * This class is used to store keyboard related info for the onKeyboardObservable event.
 */
class KeyboardInfo {
    /**
     * Instantiates a new keyboard info.
     * This class is used to store keyboard related info for the onKeyboardObservable event.
     * @param type Defines the type of event (KeyboardEventTypes)
     * @param event Defines the related dom event
     */
    constructor(
    /**
     * Defines the type of event (KeyboardEventTypes)
     */
    type, 
    /**
     * Defines the related dom event
     */
    event) {
        this.type = type;
        this.event = event;
    }
}
/**
 * This class is used to store keyboard related info for the onPreKeyboardObservable event.
 * Set the skipOnKeyboardObservable property to true if you want the engine to stop any process after this event is triggered, even not calling onKeyboardObservable
 */
class KeyboardInfoPre extends KeyboardInfo {
    /**
     * Defines whether the engine should skip the next onKeyboardObservable associated to this pre.
     * @deprecated use skipOnKeyboardObservable property instead
     */
    get skipOnPointerObservable() {
        return this.skipOnKeyboardObservable;
    }
    set skipOnPointerObservable(value) {
        this.skipOnKeyboardObservable = value;
    }
    /**
     * Instantiates a new keyboard pre info.
     * This class is used to store keyboard related info for the onPreKeyboardObservable event.
     * @param type Defines the type of event (KeyboardEventTypes)
     * @param event Defines the related dom event
     */
    constructor(
    /**
     * Defines the type of event (KeyboardEventTypes)
     */
    type, 
    /**
     * Defines the related dom event
     */
    event) {
        super(type, event);
        this.type = type;
        this.event = event;
        this.skipOnKeyboardObservable = false;
    }
}
//# sourceMappingURL=keyboardEvents.js.map

/***/ }),

/***/ 66240:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Zp: () => (/* binding */ PointerEventTypes),
/* harmony export */   mx: () => (/* binding */ PointerInfo),
/* harmony export */   tT: () => (/* binding */ PointerInfoPre)
/* harmony export */ });
/* unused harmony export PointerInfoBase */
/* harmony import */ var _Maths_math_vector_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(79923);

/**
 * Gather the list of pointer event types as constants.
 */
class PointerEventTypes {
}
/**
 * The pointerdown event is fired when a pointer becomes active. For mouse, it is fired when the device transitions from no buttons depressed to at least one button depressed. For touch, it is fired when physical contact is made with the digitizer. For pen, it is fired when the stylus makes physical contact with the digitizer.
 */
PointerEventTypes.POINTERDOWN = 0x01;
/**
 * The pointerup event is fired when a pointer is no longer active.
 */
PointerEventTypes.POINTERUP = 0x02;
/**
 * The pointermove event is fired when a pointer changes coordinates.
 */
PointerEventTypes.POINTERMOVE = 0x04;
/**
 * The pointerwheel event is fired when a mouse wheel has been rotated.
 */
PointerEventTypes.POINTERWHEEL = 0x08;
/**
 * The pointerpick event is fired when a mesh or sprite has been picked by the pointer.
 */
PointerEventTypes.POINTERPICK = 0x10;
/**
 * The pointertap event is fired when a the object has been touched and released without drag.
 */
PointerEventTypes.POINTERTAP = 0x20;
/**
 * The pointerdoubletap event is fired when a the object has been touched and released twice without drag.
 */
PointerEventTypes.POINTERDOUBLETAP = 0x40;
/**
 * Base class of pointer info types.
 */
class PointerInfoBase {
    /**
     * Instantiates the base class of pointers info.
     * @param type Defines the type of event (PointerEventTypes)
     * @param event Defines the related dom event
     */
    constructor(
    /**
     * Defines the type of event (PointerEventTypes)
     */
    type, 
    /**
     * Defines the related dom event
     */
    event) {
        this.type = type;
        this.event = event;
    }
}
/**
 * This class is used to store pointer related info for the onPrePointerObservable event.
 * Set the skipOnPointerObservable property to true if you want the engine to stop any process after this event is triggered, even not calling onPointerObservable
 */
class PointerInfoPre extends PointerInfoBase {
    /**
     * Instantiates a PointerInfoPre to store pointer related info to the onPrePointerObservable event.
     * @param type Defines the type of event (PointerEventTypes)
     * @param event Defines the related dom event
     * @param localX Defines the local x coordinates of the pointer when the event occured
     * @param localY Defines the local y coordinates of the pointer when the event occured
     */
    constructor(type, event, localX, localY) {
        super(type, event);
        /**
         * Ray from a pointer if available (eg. 6dof controller)
         */
        this.ray = null;
        /**
         * The original picking info that was used to trigger the pointer event
         */
        this.originalPickingInfo = null;
        this.skipOnPointerObservable = false;
        this.localPosition = new _Maths_math_vector_js__WEBPACK_IMPORTED_MODULE_0__/* .Vector2 */ .I9(localX, localY);
    }
}
/**
 * This type contains all the data related to a pointer event in Babylon.js.
 * The event member is an instance of PointerEvent for all types except PointerWheel and is of type MouseWheelEvent when type equals PointerWheel. The different event types can be found in the PointerEventTypes class.
 */
class PointerInfo extends PointerInfoBase {
    /**
     * Defines the picking info associated with this PointerInfo object (if applicable)
     */
    get pickInfo() {
        if (!this._pickInfo) {
            this._generatePickInfo();
        }
        return this._pickInfo;
    }
    /**
     * Instantiates a PointerInfo to store pointer related info to the onPointerObservable event.
     * @param type Defines the type of event (PointerEventTypes)
     * @param event Defines the related dom event
     * @param pickInfo Defines the picking info associated to the info (if any)
     * @param inputManager Defines the InputManager to use if there is no pickInfo
     */
    constructor(type, event, pickInfo, inputManager = null) {
        super(type, event);
        this._pickInfo = pickInfo;
        this._inputManager = inputManager;
    }
    /**
     * Generates the picking info if needed
     */
    /** @internal */
    _generatePickInfo() {
        if (this._inputManager) {
            this._pickInfo = this._inputManager._pickMove(this.event);
            this._inputManager._setRayOnPointerInfo(this._pickInfo, this.event);
            this._inputManager = null;
        }
    }
}
//# sourceMappingURL=pointerEvents.js.map

/***/ }),

/***/ 75515:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ LightConstants)
/* harmony export */ });
/** Defines the cross module constantsused by lights to avoid circular dependencies */
class LightConstants {
    /**
     * Sort function to order lights for rendering.
     * @param a First Light object to compare to second.
     * @param b Second Light object to compare first.
     * @returns -1 to reduce's a's index relative to be, 0 for no change, 1 to increase a's index relative to b.
     */
    static CompareLightsPriority(a, b) {
        //shadow-casting lights have priority over non-shadow-casting lights
        //the renderPriority is a secondary sort criterion
        if (a.shadowEnabled !== b.shadowEnabled) {
            return (b.shadowEnabled ? 1 : 0) - (a.shadowEnabled ? 1 : 0);
        }
        return b.renderPriority - a.renderPriority;
    }
}
/**
 * Falloff Default: light is falling off following the material specification:
 * standard material is using standard falloff whereas pbr material can request special falloff per materials.
 */
LightConstants.FALLOFF_DEFAULT = 0;
/**
 * Falloff Physical: light is falling off following the inverse squared distance law.
 */
LightConstants.FALLOFF_PHYSICAL = 1;
/**
 * Falloff gltf: light is falling off as described in the gltf moving to PBR document
 * to enhance interoperability with other engines.
 */
LightConstants.FALLOFF_GLTF = 2;
/**
 * Falloff Standard: light is falling off like in the standard material
 * to enhance interoperability with other materials.
 */
LightConstants.FALLOFF_STANDARD = 3;
//lightmapMode Consts
/**
 * If every light affecting the material is in this lightmapMode,
 * material.lightmapTexture adds or multiplies
 * (depends on material.useLightmapAsShadowmap)
 * after every other light calculations.
 */
LightConstants.LIGHTMAP_DEFAULT = 0;
/**
 * material.lightmapTexture as only diffuse lighting from this light
 * adds only specular lighting from this light
 * adds dynamic shadows
 */
LightConstants.LIGHTMAP_SPECULAR = 1;
/**
 * material.lightmapTexture as only lighting
 * no light calculation from this light
 * only adds dynamic shadows from this light
 */
LightConstants.LIGHTMAP_SHADOWSONLY = 2;
// Intensity Mode Consts
/**
 * Each light type uses the default quantity according to its type:
 *      point/spot lights use luminous intensity
 *      directional lights use illuminance
 */
LightConstants.INTENSITYMODE_AUTOMATIC = 0;
/**
 * lumen (lm)
 */
LightConstants.INTENSITYMODE_LUMINOUSPOWER = 1;
/**
 * candela (lm/sr)
 */
LightConstants.INTENSITYMODE_LUMINOUSINTENSITY = 2;
/**
 * lux (lm/m^2)
 */
LightConstants.INTENSITYMODE_ILLUMINANCE = 3;
/**
 * nit (cd/m^2)
 */
LightConstants.INTENSITYMODE_LUMINANCE = 4;
// Light types ids const.
/**
 * Light type const id of the point light.
 */
LightConstants.LIGHTTYPEID_POINTLIGHT = 0;
/**
 * Light type const id of the directional light.
 */
LightConstants.LIGHTTYPEID_DIRECTIONALLIGHT = 1;
/**
 * Light type const id of the spot light.
 */
LightConstants.LIGHTTYPEID_SPOTLIGHT = 2;
/**
 * Light type const id of the hemispheric light.
 */
LightConstants.LIGHTTYPEID_HEMISPHERICLIGHT = 3;
//# sourceMappingURL=lightConstants.js.map

/***/ }),

/***/ 16629:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B: () => (/* binding */ PrepareUniformsForColorCurves)
/* harmony export */ });
/**
 * Prepare the list of uniforms associated with the ColorCurves effects.
 * @param uniformsList The list of uniforms used in the effect
 */
function PrepareUniformsForColorCurves(uniformsList) {
    uniformsList.push("vCameraColorCurveNeutral", "vCameraColorCurvePositive", "vCameraColorCurveNegative");
}
//# sourceMappingURL=colorCurves.functions.js.map

/***/ }),

/***/ 35198:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Q: () => (/* binding */ ColorCurves)
/* harmony export */ });
/* harmony import */ var _tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75524);
/* harmony import */ var _Misc_decorators_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(79259);
/* harmony import */ var _Maths_math_color_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(26041);
/* harmony import */ var _Misc_decorators_serialization_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(26877);
/* harmony import */ var _colorCurves_functions_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16629);





/**
 * The color grading curves provide additional color adjustment that is applied after any color grading transform (3D LUT).
 * They allow basic adjustment of saturation and small exposure adjustments, along with color filter tinting to provide white balance adjustment or more stylistic effects.
 * These are similar to controls found in many professional imaging or colorist software. The global controls are applied to the entire image. For advanced tuning, extra controls are provided to adjust the shadow, midtone and highlight areas of the image;
 * corresponding to low luminance, medium luminance, and high luminance areas respectively.
 */
class ColorCurves {
    constructor() {
        this._dirty = true;
        this._tempColor = new _Maths_math_color_js__WEBPACK_IMPORTED_MODULE_2__/* .Color4 */ .ov(0, 0, 0, 0);
        this._globalCurve = new _Maths_math_color_js__WEBPACK_IMPORTED_MODULE_2__/* .Color4 */ .ov(0, 0, 0, 0);
        this._highlightsCurve = new _Maths_math_color_js__WEBPACK_IMPORTED_MODULE_2__/* .Color4 */ .ov(0, 0, 0, 0);
        this._midtonesCurve = new _Maths_math_color_js__WEBPACK_IMPORTED_MODULE_2__/* .Color4 */ .ov(0, 0, 0, 0);
        this._shadowsCurve = new _Maths_math_color_js__WEBPACK_IMPORTED_MODULE_2__/* .Color4 */ .ov(0, 0, 0, 0);
        this._positiveCurve = new _Maths_math_color_js__WEBPACK_IMPORTED_MODULE_2__/* .Color4 */ .ov(0, 0, 0, 0);
        this._negativeCurve = new _Maths_math_color_js__WEBPACK_IMPORTED_MODULE_2__/* .Color4 */ .ov(0, 0, 0, 0);
        this._globalHue = 30;
        this._globalDensity = 0;
        this._globalSaturation = 0;
        this._globalExposure = 0;
        this._highlightsHue = 30;
        this._highlightsDensity = 0;
        this._highlightsSaturation = 0;
        this._highlightsExposure = 0;
        this._midtonesHue = 30;
        this._midtonesDensity = 0;
        this._midtonesSaturation = 0;
        this._midtonesExposure = 0;
        this._shadowsHue = 30;
        this._shadowsDensity = 0;
        this._shadowsSaturation = 0;
        this._shadowsExposure = 0;
    }
    /**
     * Gets the global Hue value.
     * The hue value is a standard HSB hue in the range [0,360] where 0=red, 120=green and 240=blue. The default value is 30 degrees (orange).
     */
    get globalHue() {
        return this._globalHue;
    }
    /**
     * Sets the global Hue value.
     * The hue value is a standard HSB hue in the range [0,360] where 0=red, 120=green and 240=blue. The default value is 30 degrees (orange).
     */
    set globalHue(value) {
        this._globalHue = value;
        this._dirty = true;
    }
    /**
     * Gets the global Density value.
     * The density value is in range [-100,+100] where 0 means the color filter has no effect and +100 means the color filter has maximum effect.
     * Values less than zero provide a filter of opposite hue.
     */
    get globalDensity() {
        return this._globalDensity;
    }
    /**
     * Sets the global Density value.
     * The density value is in range [-100,+100] where 0 means the color filter has no effect and +100 means the color filter has maximum effect.
     * Values less than zero provide a filter of opposite hue.
     */
    set globalDensity(value) {
        this._globalDensity = value;
        this._dirty = true;
    }
    /**
     * Gets the global Saturation value.
     * This is an adjustment value in the range [-100,+100], where the default value of 0.0 makes no adjustment, positive values increase saturation and negative values decrease saturation.
     */
    get globalSaturation() {
        return this._globalSaturation;
    }
    /**
     * Sets the global Saturation value.
     * This is an adjustment value in the range [-100,+100], where the default value of 0.0 makes no adjustment, positive values increase saturation and negative values decrease saturation.
     */
    set globalSaturation(value) {
        this._globalSaturation = value;
        this._dirty = true;
    }
    /**
     * Gets the global Exposure value.
     * This is an adjustment value in the range [-100,+100], where the default value of 0.0 makes no adjustment, positive values increase exposure and negative values decrease exposure.
     */
    get globalExposure() {
        return this._globalExposure;
    }
    /**
     * Sets the global Exposure value.
     * This is an adjustment value in the range [-100,+100], where the default value of 0.0 makes no adjustment, positive values increase exposure and negative values decrease exposure.
     */
    set globalExposure(value) {
        this._globalExposure = value;
        this._dirty = true;
    }
    /**
     * Gets the highlights Hue value.
     * The hue value is a standard HSB hue in the range [0,360] where 0=red, 120=green and 240=blue. The default value is 30 degrees (orange).
     */
    get highlightsHue() {
        return this._highlightsHue;
    }
    /**
     * Sets the highlights Hue value.
     * The hue value is a standard HSB hue in the range [0,360] where 0=red, 120=green and 240=blue. The default value is 30 degrees (orange).
     */
    set highlightsHue(value) {
        this._highlightsHue = value;
        this._dirty = true;
    }
    /**
     * Gets the highlights Density value.
     * The density value is in range [-100,+100] where 0 means the color filter has no effect and +100 means the color filter has maximum effect.
     * Values less than zero provide a filter of opposite hue.
     */
    get highlightsDensity() {
        return this._highlightsDensity;
    }
    /**
     * Sets the highlights Density value.
     * The density value is in range [-100,+100] where 0 means the color filter has no effect and +100 means the color filter has maximum effect.
     * Values less than zero provide a filter of opposite hue.
     */
    set highlightsDensity(value) {
        this._highlightsDensity = value;
        this._dirty = true;
    }
    /**
     * Gets the highlights Saturation value.
     * This is an adjustment value in the range [-100,+100], where the default value of 0.0 makes no adjustment, positive values increase saturation and negative values decrease saturation.
     */
    get highlightsSaturation() {
        return this._highlightsSaturation;
    }
    /**
     * Sets the highlights Saturation value.
     * This is an adjustment value in the range [-100,+100], where the default value of 0.0 makes no adjustment, positive values increase saturation and negative values decrease saturation.
     */
    set highlightsSaturation(value) {
        this._highlightsSaturation = value;
        this._dirty = true;
    }
    /**
     * Gets the highlights Exposure value.
     * This is an adjustment value in the range [-100,+100], where the default value of 0.0 makes no adjustment, positive values increase exposure and negative values decrease exposure.
     */
    get highlightsExposure() {
        return this._highlightsExposure;
    }
    /**
     * Sets the highlights Exposure value.
     * This is an adjustment value in the range [-100,+100], where the default value of 0.0 makes no adjustment, positive values increase exposure and negative values decrease exposure.
     */
    set highlightsExposure(value) {
        this._highlightsExposure = value;
        this._dirty = true;
    }
    /**
     * Gets the midtones Hue value.
     * The hue value is a standard HSB hue in the range [0,360] where 0=red, 120=green and 240=blue. The default value is 30 degrees (orange).
     */
    get midtonesHue() {
        return this._midtonesHue;
    }
    /**
     * Sets the midtones Hue value.
     * The hue value is a standard HSB hue in the range [0,360] where 0=red, 120=green and 240=blue. The default value is 30 degrees (orange).
     */
    set midtonesHue(value) {
        this._midtonesHue = value;
        this._dirty = true;
    }
    /**
     * Gets the midtones Density value.
     * The density value is in range [-100,+100] where 0 means the color filter has no effect and +100 means the color filter has maximum effect.
     * Values less than zero provide a filter of opposite hue.
     */
    get midtonesDensity() {
        return this._midtonesDensity;
    }
    /**
     * Sets the midtones Density value.
     * The density value is in range [-100,+100] where 0 means the color filter has no effect and +100 means the color filter has maximum effect.
     * Values less than zero provide a filter of opposite hue.
     */
    set midtonesDensity(value) {
        this._midtonesDensity = value;
        this._dirty = true;
    }
    /**
     * Gets the midtones Saturation value.
     * This is an adjustment value in the range [-100,+100], where the default value of 0.0 makes no adjustment, positive values increase saturation and negative values decrease saturation.
     */
    get midtonesSaturation() {
        return this._midtonesSaturation;
    }
    /**
     * Sets the midtones Saturation value.
     * This is an adjustment value in the range [-100,+100], where the default value of 0.0 makes no adjustment, positive values increase saturation and negative values decrease saturation.
     */
    set midtonesSaturation(value) {
        this._midtonesSaturation = value;
        this._dirty = true;
    }
    /**
     * Gets the midtones Exposure value.
     * This is an adjustment value in the range [-100,+100], where the default value of 0.0 makes no adjustment, positive values increase exposure and negative values decrease exposure.
     */
    get midtonesExposure() {
        return this._midtonesExposure;
    }
    /**
     * Sets the midtones Exposure value.
     * This is an adjustment value in the range [-100,+100], where the default value of 0.0 makes no adjustment, positive values increase exposure and negative values decrease exposure.
     */
    set midtonesExposure(value) {
        this._midtonesExposure = value;
        this._dirty = true;
    }
    /**
     * Gets the shadows Hue value.
     * The hue value is a standard HSB hue in the range [0,360] where 0=red, 120=green and 240=blue. The default value is 30 degrees (orange).
     */
    get shadowsHue() {
        return this._shadowsHue;
    }
    /**
     * Sets the shadows Hue value.
     * The hue value is a standard HSB hue in the range [0,360] where 0=red, 120=green and 240=blue. The default value is 30 degrees (orange).
     */
    set shadowsHue(value) {
        this._shadowsHue = value;
        this._dirty = true;
    }
    /**
     * Gets the shadows Density value.
     * The density value is in range [-100,+100] where 0 means the color filter has no effect and +100 means the color filter has maximum effect.
     * Values less than zero provide a filter of opposite hue.
     */
    get shadowsDensity() {
        return this._shadowsDensity;
    }
    /**
     * Sets the shadows Density value.
     * The density value is in range [-100,+100] where 0 means the color filter has no effect and +100 means the color filter has maximum effect.
     * Values less than zero provide a filter of opposite hue.
     */
    set shadowsDensity(value) {
        this._shadowsDensity = value;
        this._dirty = true;
    }
    /**
     * Gets the shadows Saturation value.
     * This is an adjustment value in the range [-100,+100], where the default value of 0.0 makes no adjustment, positive values increase saturation and negative values decrease saturation.
     */
    get shadowsSaturation() {
        return this._shadowsSaturation;
    }
    /**
     * Sets the shadows Saturation value.
     * This is an adjustment value in the range [-100,+100], where the default value of 0.0 makes no adjustment, positive values increase saturation and negative values decrease saturation.
     */
    set shadowsSaturation(value) {
        this._shadowsSaturation = value;
        this._dirty = true;
    }
    /**
     * Gets the shadows Exposure value.
     * This is an adjustment value in the range [-100,+100], where the default value of 0.0 makes no adjustment, positive values increase exposure and negative values decrease exposure.
     */
    get shadowsExposure() {
        return this._shadowsExposure;
    }
    /**
     * Sets the shadows Exposure value.
     * This is an adjustment value in the range [-100,+100], where the default value of 0.0 makes no adjustment, positive values increase exposure and negative values decrease exposure.
     */
    set shadowsExposure(value) {
        this._shadowsExposure = value;
        this._dirty = true;
    }
    /**
     * Returns the class name
     * @returns The class name
     */
    getClassName() {
        return "ColorCurves";
    }
    /**
     * Binds the color curves to the shader.
     * @param colorCurves The color curve to bind
     * @param effect The effect to bind to
     * @param positiveUniform The positive uniform shader parameter
     * @param neutralUniform The neutral uniform shader parameter
     * @param negativeUniform The negative uniform shader parameter
     */
    static Bind(colorCurves, effect, positiveUniform = "vCameraColorCurvePositive", neutralUniform = "vCameraColorCurveNeutral", negativeUniform = "vCameraColorCurveNegative") {
        if (colorCurves._dirty) {
            colorCurves._dirty = false;
            // Fill in global info.
            colorCurves._getColorGradingDataToRef(colorCurves._globalHue, colorCurves._globalDensity, colorCurves._globalSaturation, colorCurves._globalExposure, colorCurves._globalCurve);
            // Compute highlights info.
            colorCurves._getColorGradingDataToRef(colorCurves._highlightsHue, colorCurves._highlightsDensity, colorCurves._highlightsSaturation, colorCurves._highlightsExposure, colorCurves._tempColor);
            colorCurves._tempColor.multiplyToRef(colorCurves._globalCurve, colorCurves._highlightsCurve);
            // Compute midtones info.
            colorCurves._getColorGradingDataToRef(colorCurves._midtonesHue, colorCurves._midtonesDensity, colorCurves._midtonesSaturation, colorCurves._midtonesExposure, colorCurves._tempColor);
            colorCurves._tempColor.multiplyToRef(colorCurves._globalCurve, colorCurves._midtonesCurve);
            // Compute shadows info.
            colorCurves._getColorGradingDataToRef(colorCurves._shadowsHue, colorCurves._shadowsDensity, colorCurves._shadowsSaturation, colorCurves._shadowsExposure, colorCurves._tempColor);
            colorCurves._tempColor.multiplyToRef(colorCurves._globalCurve, colorCurves._shadowsCurve);
            // Compute deltas (neutral is midtones).
            colorCurves._highlightsCurve.subtractToRef(colorCurves._midtonesCurve, colorCurves._positiveCurve);
            colorCurves._midtonesCurve.subtractToRef(colorCurves._shadowsCurve, colorCurves._negativeCurve);
        }
        if (effect) {
            effect.setFloat4(positiveUniform, colorCurves._positiveCurve.r, colorCurves._positiveCurve.g, colorCurves._positiveCurve.b, colorCurves._positiveCurve.a);
            effect.setFloat4(neutralUniform, colorCurves._midtonesCurve.r, colorCurves._midtonesCurve.g, colorCurves._midtonesCurve.b, colorCurves._midtonesCurve.a);
            effect.setFloat4(negativeUniform, colorCurves._negativeCurve.r, colorCurves._negativeCurve.g, colorCurves._negativeCurve.b, colorCurves._negativeCurve.a);
        }
    }
    /**
     * Returns color grading data based on a hue, density, saturation and exposure value.
     * @param hue
     * @param density
     * @param saturation The saturation.
     * @param exposure The exposure.
     * @param result The result data container.
     */
    _getColorGradingDataToRef(hue, density, saturation, exposure, result) {
        if (hue == null) {
            return;
        }
        hue = ColorCurves._Clamp(hue, 0, 360);
        density = ColorCurves._Clamp(density, -100, 100);
        saturation = ColorCurves._Clamp(saturation, -100, 100);
        exposure = ColorCurves._Clamp(exposure, -100, 100);
        // Remap the slider/config filter density with non-linear mapping and also scale by half
        // so that the maximum filter density is only 50% control. This provides fine control
        // for small values and reasonable range.
        density = ColorCurves._ApplyColorGradingSliderNonlinear(density);
        density *= 0.5;
        exposure = ColorCurves._ApplyColorGradingSliderNonlinear(exposure);
        if (density < 0) {
            density *= -1;
            hue = (hue + 180) % 360;
        }
        ColorCurves._FromHSBToRef(hue, density, 50 + 0.25 * exposure, result);
        result.scaleToRef(2, result);
        result.a = 1 + 0.01 * saturation;
    }
    /**
     * Takes an input slider value and returns an adjusted value that provides extra control near the centre.
     * @param value The input slider value in range [-100,100].
     * @returns Adjusted value.
     */
    static _ApplyColorGradingSliderNonlinear(value) {
        value /= 100;
        let x = Math.abs(value);
        x = Math.pow(x, 2);
        if (value < 0) {
            x *= -1;
        }
        x *= 100;
        return x;
    }
    /**
     * Returns an RGBA Color4 based on Hue, Saturation and Brightness (also referred to as value, HSV).
     * @param hue The hue (H) input.
     * @param saturation The saturation (S) input.
     * @param brightness The brightness (B) input.
     * @param result
     * @result An RGBA color represented as Vector4.
     */
    static _FromHSBToRef(hue, saturation, brightness, result) {
        let h = ColorCurves._Clamp(hue, 0, 360);
        const s = ColorCurves._Clamp(saturation / 100, 0, 1);
        const v = ColorCurves._Clamp(brightness / 100, 0, 1);
        if (s === 0) {
            result.r = v;
            result.g = v;
            result.b = v;
        }
        else {
            // sector 0 to 5
            h /= 60;
            const i = Math.floor(h);
            // fractional part of h
            const f = h - i;
            const p = v * (1 - s);
            const q = v * (1 - s * f);
            const t = v * (1 - s * (1 - f));
            switch (i) {
                case 0:
                    result.r = v;
                    result.g = t;
                    result.b = p;
                    break;
                case 1:
                    result.r = q;
                    result.g = v;
                    result.b = p;
                    break;
                case 2:
                    result.r = p;
                    result.g = v;
                    result.b = t;
                    break;
                case 3:
                    result.r = p;
                    result.g = q;
                    result.b = v;
                    break;
                case 4:
                    result.r = t;
                    result.g = p;
                    result.b = v;
                    break;
                default:
                    // case 5:
                    result.r = v;
                    result.g = p;
                    result.b = q;
                    break;
            }
        }
        result.a = 1;
    }
    /**
     * Returns a value clamped between min and max
     * @param value The value to clamp
     * @param min The minimum of value
     * @param max The maximum of value
     * @returns The clamped value.
     */
    static _Clamp(value, min, max) {
        return Math.min(Math.max(value, min), max);
    }
    /**
     * Clones the current color curve instance.
     * @returns The cloned curves
     */
    clone() {
        return _Misc_decorators_serialization_js__WEBPACK_IMPORTED_MODULE_3__/* .SerializationHelper */ .p.Clone(() => new ColorCurves(), this);
    }
    /**
     * Serializes the current color curve instance to a json representation.
     * @returns a JSON representation
     */
    serialize() {
        return _Misc_decorators_serialization_js__WEBPACK_IMPORTED_MODULE_3__/* .SerializationHelper */ .p.Serialize(this);
    }
    /**
     * Parses the color curve from a json representation.
     * @param source the JSON source to parse
     * @returns The parsed curves
     */
    static Parse(source) {
        return _Misc_decorators_serialization_js__WEBPACK_IMPORTED_MODULE_3__/* .SerializationHelper */ .p.Parse(() => new ColorCurves(), source, null, null);
    }
}
/**
 * Prepare the list of uniforms associated with the ColorCurves effects.
 * @param uniformsList The list of uniforms used in the effect
 */
ColorCurves.PrepareUniforms = _colorCurves_functions_js__WEBPACK_IMPORTED_MODULE_4__/* .PrepareUniformsForColorCurves */ .B;
(0,_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__/* .__decorate */ .Cg)([
    (0,_Misc_decorators_js__WEBPACK_IMPORTED_MODULE_1__/* .serialize */ .lK)()
], ColorCurves.prototype, "_globalHue", void 0);
(0,_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__/* .__decorate */ .Cg)([
    (0,_Misc_decorators_js__WEBPACK_IMPORTED_MODULE_1__/* .serialize */ .lK)()
], ColorCurves.prototype, "_globalDensity", void 0);
(0,_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__/* .__decorate */ .Cg)([
    (0,_Misc_decorators_js__WEBPACK_IMPORTED_MODULE_1__/* .serialize */ .lK)()
], ColorCurves.prototype, "_globalSaturation", void 0);
(0,_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__/* .__decorate */ .Cg)([
    (0,_Misc_decorators_js__WEBPACK_IMPORTED_MODULE_1__/* .serialize */ .lK)()
], ColorCurves.prototype, "_globalExposure", void 0);
(0,_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__/* .__decorate */ .Cg)([
    (0,_Misc_decorators_js__WEBPACK_IMPORTED_MODULE_1__/* .serialize */ .lK)()
], ColorCurves.prototype, "_highlightsHue", void 0);
(0,_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__/* .__decorate */ .Cg)([
    (0,_Misc_decorators_js__WEBPACK_IMPORTED_MODULE_1__/* .serialize */ .lK)()
], ColorCurves.prototype, "_highlightsDensity", void 0);
(0,_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__/* .__decorate */ .Cg)([
    (0,_Misc_decorators_js__WEBPACK_IMPORTED_MODULE_1__/* .serialize */ .lK)()
], ColorCurves.prototype, "_highlightsSaturation", void 0);
(0,_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__/* .__decorate */ .Cg)([
    (0,_Misc_decorators_js__WEBPACK_IMPORTED_MODULE_1__/* .serialize */ .lK)()
], ColorCurves.prototype, "_highlightsExposure", void 0);
(0,_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__/* .__decorate */ .Cg)([
    (0,_Misc_decorators_js__WEBPACK_IMPORTED_MODULE_1__/* .serialize */ .lK)()
], ColorCurves.prototype, "_midtonesHue", void 0);
(0,_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__/* .__decorate */ .Cg)([
    (0,_Misc_decorators_js__WEBPACK_IMPORTED_MODULE_1__/* .serialize */ .lK)()
], ColorCurves.prototype, "_midtonesDensity", void 0);
(0,_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__/* .__decorate */ .Cg)([
    (0,_Misc_decorators_js__WEBPACK_IMPORTED_MODULE_1__/* .serialize */ .lK)()
], ColorCurves.prototype, "_midtonesSaturation", void 0);
(0,_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__/* .__decorate */ .Cg)([
    (0,_Misc_decorators_js__WEBPACK_IMPORTED_MODULE_1__/* .serialize */ .lK)()
], ColorCurves.prototype, "_midtonesExposure", void 0);
// References the dependencies.
_Misc_decorators_serialization_js__WEBPACK_IMPORTED_MODULE_3__/* .SerializationHelper */ .p._ColorCurvesParser = ColorCurves.Parse;
//# sourceMappingURL=colorCurves.js.map

/***/ }),

/***/ 80010:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C: () => (/* binding */ PrepareSamplersForImageProcessing),
/* harmony export */   _: () => (/* binding */ PrepareUniformsForImageProcessing)
/* harmony export */ });
/* harmony import */ var _colorCurves_functions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16629);

/**
 * Prepare the list of uniforms associated with the Image Processing effects.
 * @param uniforms The list of uniforms used in the effect
 * @param defines the list of defines currently in use
 */
function PrepareUniformsForImageProcessing(uniforms, defines) {
    if (defines.EXPOSURE) {
        uniforms.push("exposureLinear");
    }
    if (defines.CONTRAST) {
        uniforms.push("contrast");
    }
    if (defines.COLORGRADING) {
        uniforms.push("colorTransformSettings");
    }
    if (defines.VIGNETTE || defines.DITHER) {
        uniforms.push("vInverseScreenSize");
    }
    if (defines.VIGNETTE) {
        uniforms.push("vignetteSettings1");
        uniforms.push("vignetteSettings2");
    }
    if (defines.COLORCURVES) {
        (0,_colorCurves_functions_js__WEBPACK_IMPORTED_MODULE_0__/* .PrepareUniformsForColorCurves */ .B)(uniforms);
    }
    if (defines.DITHER) {
        uniforms.push("ditherIntensity");
    }
}
/**
 * Prepare the list of samplers associated with the Image Processing effects.
 * @param samplersList The list of uniforms used in the effect
 * @param defines the list of defines currently in use
 */
function PrepareSamplersForImageProcessing(samplersList, defines) {
    if (defines.COLORGRADING) {
        samplersList.push("txColorTransform");
    }
}
//# sourceMappingURL=imageProcessingConfiguration.functions.js.map

/***/ }),

/***/ 32033:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   p: () => (/* binding */ ImageProcessingConfiguration)
/* harmony export */ });
/* harmony import */ var _tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75524);
/* harmony import */ var _Misc_decorators_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(79259);
/* harmony import */ var _Misc_observable_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(99848);
/* harmony import */ var _Maths_math_color_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(26041);
/* harmony import */ var _Materials_colorCurves_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(35198);
/* harmony import */ var _Misc_tools_functions_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(91597);
/* harmony import */ var _Misc_decorators_serialization_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(26877);
/* harmony import */ var _imageProcessingConfiguration_functions_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(80010);
/* harmony import */ var _Misc_typeStore_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(56552);

/* eslint-disable @typescript-eslint/naming-convention */








/**
 * This groups together the common properties used for image processing either in direct forward pass
 * or through post processing effect depending on the use of the image processing pipeline in your scene
 * or not.
 */
class ImageProcessingConfiguration {
    constructor() {
        /**
         * Color curves setup used in the effect if colorCurvesEnabled is set to true
         */
        this.colorCurves = new _Materials_colorCurves_js__WEBPACK_IMPORTED_MODULE_4__/* .ColorCurves */ .Q();
        this._colorCurvesEnabled = false;
        this._colorGradingEnabled = false;
        this._colorGradingWithGreenDepth = true;
        this._colorGradingBGR = true;
        /** @internal */
        this._exposure = 1.0;
        this._toneMappingEnabled = false;
        this._toneMappingType = ImageProcessingConfiguration.TONEMAPPING_STANDARD;
        this._contrast = 1.0;
        /**
         * Vignette stretch size.
         */
        this.vignetteStretch = 0;
        /**
         * Vignette center X Offset.
         */
        this.vignetteCenterX = 0;
        /**
         * Vignette center Y Offset.
         */
        this.vignetteCenterY = 0;
        /**
         * Vignette weight or intensity of the vignette effect.
         */
        this.vignetteWeight = 1.5;
        /**
         * Color of the vignette applied on the screen through the chosen blend mode (vignetteBlendMode)
         * if vignetteEnabled is set to true.
         */
        this.vignetteColor = new _Maths_math_color_js__WEBPACK_IMPORTED_MODULE_3__/* .Color4 */ .ov(0, 0, 0, 0);
        /**
         * Camera field of view used by the Vignette effect.
         */
        this.vignetteCameraFov = 0.5;
        this._vignetteBlendMode = ImageProcessingConfiguration.VIGNETTEMODE_MULTIPLY;
        this._vignetteEnabled = false;
        this._ditheringEnabled = false;
        this._ditheringIntensity = 1.0 / 255.0;
        /** @internal */
        this._skipFinalColorClamp = false;
        /** @internal */
        this._applyByPostProcess = false;
        this._isEnabled = true;
        /**
         * An event triggered when the configuration changes and requires Shader to Update some parameters.
         */
        this.onUpdateParameters = new _Misc_observable_js__WEBPACK_IMPORTED_MODULE_2__/* .Observable */ .cP();
    }
    /**
     * Gets whether the color curves effect is enabled.
     */
    get colorCurvesEnabled() {
        return this._colorCurvesEnabled;
    }
    /**
     * Sets whether the color curves effect is enabled.
     */
    set colorCurvesEnabled(value) {
        if (this._colorCurvesEnabled === value) {
            return;
        }
        this._colorCurvesEnabled = value;
        this._updateParameters();
    }
    /**
     * Color grading LUT texture used in the effect if colorGradingEnabled is set to true
     */
    get colorGradingTexture() {
        return this._colorGradingTexture;
    }
    /**
     * Color grading LUT texture used in the effect if colorGradingEnabled is set to true
     */
    set colorGradingTexture(value) {
        if (this._colorGradingTexture === value) {
            return;
        }
        this._colorGradingTexture = value;
        this._updateParameters();
    }
    /**
     * Gets whether the color grading effect is enabled.
     */
    get colorGradingEnabled() {
        return this._colorGradingEnabled;
    }
    /**
     * Sets whether the color grading effect is enabled.
     */
    set colorGradingEnabled(value) {
        if (this._colorGradingEnabled === value) {
            return;
        }
        this._colorGradingEnabled = value;
        this._updateParameters();
    }
    /**
     * Gets whether the color grading effect is using a green depth for the 3d Texture.
     */
    get colorGradingWithGreenDepth() {
        return this._colorGradingWithGreenDepth;
    }
    /**
     * Sets whether the color grading effect is using a green depth for the 3d Texture.
     */
    set colorGradingWithGreenDepth(value) {
        if (this._colorGradingWithGreenDepth === value) {
            return;
        }
        this._colorGradingWithGreenDepth = value;
        this._updateParameters();
    }
    /**
     * Gets whether the color grading texture contains BGR values.
     */
    get colorGradingBGR() {
        return this._colorGradingBGR;
    }
    /**
     * Sets whether the color grading texture contains BGR values.
     */
    set colorGradingBGR(value) {
        if (this._colorGradingBGR === value) {
            return;
        }
        this._colorGradingBGR = value;
        this._updateParameters();
    }
    /**
     * Gets the Exposure used in the effect.
     */
    get exposure() {
        return this._exposure;
    }
    /**
     * Sets the Exposure used in the effect.
     */
    set exposure(value) {
        if (this._exposure === value) {
            return;
        }
        this._exposure = value;
        this._updateParameters();
    }
    /**
     * Gets whether the tone mapping effect is enabled.
     */
    get toneMappingEnabled() {
        return this._toneMappingEnabled;
    }
    /**
     * Sets whether the tone mapping effect is enabled.
     */
    set toneMappingEnabled(value) {
        if (this._toneMappingEnabled === value) {
            return;
        }
        this._toneMappingEnabled = value;
        this._updateParameters();
    }
    /**
     * Gets the type of tone mapping effect.
     */
    get toneMappingType() {
        return this._toneMappingType;
    }
    /**
     * Sets the type of tone mapping effect used in BabylonJS.
     */
    set toneMappingType(value) {
        if (this._toneMappingType === value) {
            return;
        }
        this._toneMappingType = value;
        this._updateParameters();
    }
    /**
     * Gets the contrast used in the effect.
     */
    get contrast() {
        return this._contrast;
    }
    /**
     * Sets the contrast used in the effect.
     */
    set contrast(value) {
        if (this._contrast === value) {
            return;
        }
        this._contrast = value;
        this._updateParameters();
    }
    /**
     * Back Compat: Vignette center Y Offset.
     * @deprecated use vignetteCenterY instead
     */
    get vignetteCentreY() {
        return this.vignetteCenterY;
    }
    set vignetteCentreY(value) {
        this.vignetteCenterY = value;
    }
    /**
     * Back Compat: Vignette center X Offset.
     * @deprecated use vignetteCenterX instead
     */
    get vignetteCentreX() {
        return this.vignetteCenterX;
    }
    set vignetteCentreX(value) {
        this.vignetteCenterX = value;
    }
    /**
     * Gets the vignette blend mode allowing different kind of effect.
     */
    get vignetteBlendMode() {
        return this._vignetteBlendMode;
    }
    /**
     * Sets the vignette blend mode allowing different kind of effect.
     */
    set vignetteBlendMode(value) {
        if (this._vignetteBlendMode === value) {
            return;
        }
        this._vignetteBlendMode = value;
        this._updateParameters();
    }
    /**
     * Gets whether the vignette effect is enabled.
     */
    get vignetteEnabled() {
        return this._vignetteEnabled;
    }
    /**
     * Sets whether the vignette effect is enabled.
     */
    set vignetteEnabled(value) {
        if (this._vignetteEnabled === value) {
            return;
        }
        this._vignetteEnabled = value;
        this._updateParameters();
    }
    /**
     * Gets whether the dithering effect is enabled.
     * The dithering effect can be used to reduce banding.
     */
    get ditheringEnabled() {
        return this._ditheringEnabled;
    }
    /**
     * Sets whether the dithering effect is enabled.
     * The dithering effect can be used to reduce banding.
     */
    set ditheringEnabled(value) {
        if (this._ditheringEnabled === value) {
            return;
        }
        this._ditheringEnabled = value;
        this._updateParameters();
    }
    /**
     * Gets the dithering intensity. 0 is no dithering. Default is 1.0 / 255.0.
     */
    get ditheringIntensity() {
        return this._ditheringIntensity;
    }
    /**
     * Sets the dithering intensity. 0 is no dithering. Default is 1.0 / 255.0.
     */
    set ditheringIntensity(value) {
        if (this._ditheringIntensity === value) {
            return;
        }
        this._ditheringIntensity = value;
        this._updateParameters();
    }
    /**
     * If apply by post process is set to true, setting this to true will skip the final color clamp step in the fragment shader
     * Applies to PBR materials.
     */
    get skipFinalColorClamp() {
        return this._skipFinalColorClamp;
    }
    /**
     * If apply by post process is set to true, setting this to true will skip the final color clamp step in the fragment shader
     * Applies to PBR materials.
     */
    set skipFinalColorClamp(value) {
        if (this._skipFinalColorClamp === value) {
            return;
        }
        this._skipFinalColorClamp = value;
        this._updateParameters();
    }
    /**
     * Gets whether the image processing is applied through a post process or not.
     */
    get applyByPostProcess() {
        return this._applyByPostProcess;
    }
    /**
     * Sets whether the image processing is applied through a post process or not.
     */
    set applyByPostProcess(value) {
        if (this._applyByPostProcess === value) {
            return;
        }
        this._applyByPostProcess = value;
        this._updateParameters();
    }
    /**
     * Gets whether the image processing is enabled or not.
     */
    get isEnabled() {
        return this._isEnabled;
    }
    /**
     * Sets whether the image processing is enabled or not.
     */
    set isEnabled(value) {
        if (this._isEnabled === value) {
            return;
        }
        this._isEnabled = value;
        this._updateParameters();
    }
    /**
     * Method called each time the image processing information changes requires to recompile the effect.
     */
    _updateParameters() {
        this.onUpdateParameters.notifyObservers(this);
    }
    /**
     * Gets the current class name.
     * @returns "ImageProcessingConfiguration"
     */
    getClassName() {
        return "ImageProcessingConfiguration";
    }
    /**
     * Prepare the list of defines associated to the shader.
     * @param defines the list of defines to complete
     * @param forPostProcess Define if we are currently in post process mode or not
     */
    prepareDefines(defines, forPostProcess = false) {
        if (forPostProcess !== this.applyByPostProcess || !this._isEnabled) {
            defines.VIGNETTE = false;
            defines.TONEMAPPING = 0;
            defines.CONTRAST = false;
            defines.EXPOSURE = false;
            defines.COLORCURVES = false;
            defines.COLORGRADING = false;
            defines.COLORGRADING3D = false;
            defines.DITHER = false;
            defines.IMAGEPROCESSING = false;
            defines.SKIPFINALCOLORCLAMP = this.skipFinalColorClamp;
            defines.IMAGEPROCESSINGPOSTPROCESS = this.applyByPostProcess && this._isEnabled;
            return;
        }
        defines.VIGNETTE = this.vignetteEnabled;
        defines.VIGNETTEBLENDMODEMULTIPLY = this.vignetteBlendMode === ImageProcessingConfiguration._VIGNETTEMODE_MULTIPLY;
        defines.VIGNETTEBLENDMODEOPAQUE = !defines.VIGNETTEBLENDMODEMULTIPLY;
        if (!this._toneMappingEnabled) {
            defines.TONEMAPPING = 0;
        }
        else {
            switch (this._toneMappingType) {
                case ImageProcessingConfiguration.TONEMAPPING_KHR_PBR_NEUTRAL:
                    defines.TONEMAPPING = 3;
                    break;
                case ImageProcessingConfiguration.TONEMAPPING_ACES:
                    defines.TONEMAPPING = 2;
                    break;
                default:
                    defines.TONEMAPPING = 1;
                    break;
            }
        }
        defines.CONTRAST = this.contrast !== 1.0;
        defines.EXPOSURE = this.exposure !== 1.0;
        defines.COLORCURVES = this.colorCurvesEnabled && !!this.colorCurves;
        defines.COLORGRADING = this.colorGradingEnabled && !!this.colorGradingTexture;
        if (defines.COLORGRADING) {
            defines.COLORGRADING3D = this.colorGradingTexture.is3D;
        }
        else {
            defines.COLORGRADING3D = false;
        }
        defines.SAMPLER3DGREENDEPTH = this.colorGradingWithGreenDepth;
        defines.SAMPLER3DBGRMAP = this.colorGradingBGR;
        defines.DITHER = this._ditheringEnabled;
        defines.IMAGEPROCESSINGPOSTPROCESS = this.applyByPostProcess;
        defines.SKIPFINALCOLORCLAMP = this.skipFinalColorClamp;
        defines.IMAGEPROCESSING =
            defines.VIGNETTE || !!defines.TONEMAPPING || defines.CONTRAST || defines.EXPOSURE || defines.COLORCURVES || defines.COLORGRADING || defines.DITHER;
    }
    /**
     * Returns true if all the image processing information are ready.
     * @returns True if ready, otherwise, false
     */
    isReady() {
        // Color Grading texture can not be none blocking.
        return !this.colorGradingEnabled || !this.colorGradingTexture || this.colorGradingTexture.isReady();
    }
    /**
     * Binds the image processing to the shader.
     * @param effect The effect to bind to
     * @param overrideAspectRatio Override the aspect ratio of the effect
     */
    bind(effect, overrideAspectRatio) {
        // Color Curves
        if (this._colorCurvesEnabled && this.colorCurves) {
            _Materials_colorCurves_js__WEBPACK_IMPORTED_MODULE_4__/* .ColorCurves */ .Q.Bind(this.colorCurves, effect);
        }
        // Vignette and dither handled together due to common uniform.
        if (this._vignetteEnabled || this._ditheringEnabled) {
            const inverseWidth = 1 / effect.getEngine().getRenderWidth();
            const inverseHeight = 1 / effect.getEngine().getRenderHeight();
            effect.setFloat2("vInverseScreenSize", inverseWidth, inverseHeight);
            if (this._ditheringEnabled) {
                effect.setFloat("ditherIntensity", 0.5 * this._ditheringIntensity);
            }
            if (this._vignetteEnabled) {
                const aspectRatio = overrideAspectRatio != null ? overrideAspectRatio : inverseHeight / inverseWidth;
                let vignetteScaleY = Math.tan(this.vignetteCameraFov * 0.5);
                let vignetteScaleX = vignetteScaleY * aspectRatio;
                const vignetteScaleGeometricMean = Math.sqrt(vignetteScaleX * vignetteScaleY);
                vignetteScaleX = (0,_Misc_tools_functions_js__WEBPACK_IMPORTED_MODULE_5__/* .Mix */ .zF)(vignetteScaleX, vignetteScaleGeometricMean, this.vignetteStretch);
                vignetteScaleY = (0,_Misc_tools_functions_js__WEBPACK_IMPORTED_MODULE_5__/* .Mix */ .zF)(vignetteScaleY, vignetteScaleGeometricMean, this.vignetteStretch);
                effect.setFloat4("vignetteSettings1", vignetteScaleX, vignetteScaleY, -vignetteScaleX * this.vignetteCenterX, -vignetteScaleY * this.vignetteCenterY);
                const vignettePower = -2.0 * this.vignetteWeight;
                effect.setFloat4("vignetteSettings2", this.vignetteColor.r, this.vignetteColor.g, this.vignetteColor.b, vignettePower);
            }
        }
        // Exposure
        effect.setFloat("exposureLinear", this.exposure);
        // Contrast
        effect.setFloat("contrast", this.contrast);
        // Color transform settings
        if (this.colorGradingTexture) {
            effect.setTexture("txColorTransform", this.colorGradingTexture);
            const textureSize = this.colorGradingTexture.getSize().height;
            effect.setFloat4("colorTransformSettings", (textureSize - 1) / textureSize, // textureScale
            0.5 / textureSize, // textureOffset
            textureSize, // textureSize
            this.colorGradingTexture.level // weight
            );
        }
    }
    /**
     * Clones the current image processing instance.
     * @returns The cloned image processing
     */
    clone() {
        return _Misc_decorators_serialization_js__WEBPACK_IMPORTED_MODULE_6__/* .SerializationHelper */ .p.Clone(() => new ImageProcessingConfiguration(), this);
    }
    /**
     * Serializes the current image processing instance to a json representation.
     * @returns a JSON representation
     */
    serialize() {
        return _Misc_decorators_serialization_js__WEBPACK_IMPORTED_MODULE_6__/* .SerializationHelper */ .p.Serialize(this);
    }
    /**
     * Parses the image processing from a json representation.
     * @param source the JSON source to parse
     * @returns The parsed image processing
     */
    static Parse(source) {
        const parsed = _Misc_decorators_serialization_js__WEBPACK_IMPORTED_MODULE_6__/* .SerializationHelper */ .p.Parse(() => new ImageProcessingConfiguration(), source, null, null);
        // Backward compatibility
        if (source.vignetteCentreX !== undefined) {
            parsed.vignetteCenterX = source.vignetteCentreX;
        }
        if (source.vignetteCentreY !== undefined) {
            parsed.vignetteCenterY = source.vignetteCentreY;
        }
        return parsed;
    }
    /**
     * Used to apply the vignette as a mix with the pixel color.
     */
    static get VIGNETTEMODE_MULTIPLY() {
        return this._VIGNETTEMODE_MULTIPLY;
    }
    /**
     * Used to apply the vignette as a replacement of the pixel color.
     */
    static get VIGNETTEMODE_OPAQUE() {
        return this._VIGNETTEMODE_OPAQUE;
    }
}
/**
 * Default tone mapping applied in BabylonJS.
 */
ImageProcessingConfiguration.TONEMAPPING_STANDARD = 0;
/**
 * ACES Tone mapping (used by default in unreal and unity). This can help getting closer
 * to other engines rendering to increase portability.
 */
ImageProcessingConfiguration.TONEMAPPING_ACES = 1;
/**
 * Neutral Tone mapping developped by the Khronos group in order to constrain
 * values between 0 and 1 without shifting Hue.
 */
ImageProcessingConfiguration.TONEMAPPING_KHR_PBR_NEUTRAL = 2;
/**
 * Prepare the list of uniforms associated with the Image Processing effects.
 * @param uniforms The list of uniforms used in the effect
 * @param defines the list of defines currently in use
 */
ImageProcessingConfiguration.PrepareUniforms = _imageProcessingConfiguration_functions_js__WEBPACK_IMPORTED_MODULE_7__/* .PrepareUniformsForImageProcessing */ ._;
/**
 * Prepare the list of samplers associated with the Image Processing effects.
 * @param samplersList The list of uniforms used in the effect
 * @param defines the list of defines currently in use
 */
ImageProcessingConfiguration.PrepareSamplers = _imageProcessingConfiguration_functions_js__WEBPACK_IMPORTED_MODULE_7__/* .PrepareSamplersForImageProcessing */ .C;
// Static constants associated to the image processing.
ImageProcessingConfiguration._VIGNETTEMODE_MULTIPLY = 0;
ImageProcessingConfiguration._VIGNETTEMODE_OPAQUE = 1;
(0,_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__/* .__decorate */ .Cg)([
    (0,_Misc_decorators_js__WEBPACK_IMPORTED_MODULE_1__/* .serializeAsColorCurves */ .wL)()
], ImageProcessingConfiguration.prototype, "colorCurves", void 0);
(0,_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__/* .__decorate */ .Cg)([
    (0,_Misc_decorators_js__WEBPACK_IMPORTED_MODULE_1__/* .serialize */ .lK)()
], ImageProcessingConfiguration.prototype, "_colorCurvesEnabled", void 0);
(0,_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__/* .__decorate */ .Cg)([
    (0,_Misc_decorators_js__WEBPACK_IMPORTED_MODULE_1__/* .serializeAsTexture */ .uM)("colorGradingTexture")
], ImageProcessingConfiguration.prototype, "_colorGradingTexture", void 0);
(0,_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__/* .__decorate */ .Cg)([
    (0,_Misc_decorators_js__WEBPACK_IMPORTED_MODULE_1__/* .serialize */ .lK)()
], ImageProcessingConfiguration.prototype, "_colorGradingEnabled", void 0);
(0,_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__/* .__decorate */ .Cg)([
    (0,_Misc_decorators_js__WEBPACK_IMPORTED_MODULE_1__/* .serialize */ .lK)()
], ImageProcessingConfiguration.prototype, "_colorGradingWithGreenDepth", void 0);
(0,_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__/* .__decorate */ .Cg)([
    (0,_Misc_decorators_js__WEBPACK_IMPORTED_MODULE_1__/* .serialize */ .lK)()
], ImageProcessingConfiguration.prototype, "_colorGradingBGR", void 0);
(0,_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__/* .__decorate */ .Cg)([
    (0,_Misc_decorators_js__WEBPACK_IMPORTED_MODULE_1__/* .serialize */ .lK)()
], ImageProcessingConfiguration.prototype, "_exposure", void 0);
(0,_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__/* .__decorate */ .Cg)([
    (0,_Misc_decorators_js__WEBPACK_IMPORTED_MODULE_1__/* .serialize */ .lK)()
], ImageProcessingConfiguration.prototype, "_toneMappingEnabled", void 0);
(0,_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__/* .__decorate */ .Cg)([
    (0,_Misc_decorators_js__WEBPACK_IMPORTED_MODULE_1__/* .serialize */ .lK)()
], ImageProcessingConfiguration.prototype, "_toneMappingType", void 0);
(0,_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__/* .__decorate */ .Cg)([
    (0,_Misc_decorators_js__WEBPACK_IMPORTED_MODULE_1__/* .serialize */ .lK)()
], ImageProcessingConfiguration.prototype, "_contrast", void 0);
(0,_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__/* .__decorate */ .Cg)([
    (0,_Misc_decorators_js__WEBPACK_IMPORTED_MODULE_1__/* .serialize */ .lK)()
], ImageProcessingConfiguration.prototype, "vignetteStretch", void 0);
(0,_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__/* .__decorate */ .Cg)([
    (0,_Misc_decorators_js__WEBPACK_IMPORTED_MODULE_1__/* .serialize */ .lK)()
], ImageProcessingConfiguration.prototype, "vignetteCenterX", void 0);
(0,_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__/* .__decorate */ .Cg)([
    (0,_Misc_decorators_js__WEBPACK_IMPORTED_MODULE_1__/* .serialize */ .lK)()
], ImageProcessingConfiguration.prototype, "vignetteCenterY", void 0);
(0,_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__/* .__decorate */ .Cg)([
    (0,_Misc_decorators_js__WEBPACK_IMPORTED_MODULE_1__/* .serialize */ .lK)()
], ImageProcessingConfiguration.prototype, "vignetteWeight", void 0);
(0,_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__/* .__decorate */ .Cg)([
    (0,_Misc_decorators_js__WEBPACK_IMPORTED_MODULE_1__/* .serializeAsColor4 */ .qK)()
], ImageProcessingConfiguration.prototype, "vignetteColor", void 0);
(0,_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__/* .__decorate */ .Cg)([
    (0,_Misc_decorators_js__WEBPACK_IMPORTED_MODULE_1__/* .serialize */ .lK)()
], ImageProcessingConfiguration.prototype, "vignetteCameraFov", void 0);
(0,_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__/* .__decorate */ .Cg)([
    (0,_Misc_decorators_js__WEBPACK_IMPORTED_MODULE_1__/* .serialize */ .lK)()
], ImageProcessingConfiguration.prototype, "_vignetteBlendMode", void 0);
(0,_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__/* .__decorate */ .Cg)([
    (0,_Misc_decorators_js__WEBPACK_IMPORTED_MODULE_1__/* .serialize */ .lK)()
], ImageProcessingConfiguration.prototype, "_vignetteEnabled", void 0);
(0,_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__/* .__decorate */ .Cg)([
    (0,_Misc_decorators_js__WEBPACK_IMPORTED_MODULE_1__/* .serialize */ .lK)()
], ImageProcessingConfiguration.prototype, "_ditheringEnabled", void 0);
(0,_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__/* .__decorate */ .Cg)([
    (0,_Misc_decorators_js__WEBPACK_IMPORTED_MODULE_1__/* .serialize */ .lK)()
], ImageProcessingConfiguration.prototype, "_ditheringIntensity", void 0);
(0,_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__/* .__decorate */ .Cg)([
    (0,_Misc_decorators_js__WEBPACK_IMPORTED_MODULE_1__/* .serialize */ .lK)()
], ImageProcessingConfiguration.prototype, "_skipFinalColorClamp", void 0);
(0,_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__/* .__decorate */ .Cg)([
    (0,_Misc_decorators_js__WEBPACK_IMPORTED_MODULE_1__/* .serialize */ .lK)()
], ImageProcessingConfiguration.prototype, "_applyByPostProcess", void 0);
(0,_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__/* .__decorate */ .Cg)([
    (0,_Misc_decorators_js__WEBPACK_IMPORTED_MODULE_1__/* .serialize */ .lK)()
], ImageProcessingConfiguration.prototype, "_isEnabled", void 0);
// References the dependencies.
_Misc_decorators_serialization_js__WEBPACK_IMPORTED_MODULE_6__/* .SerializationHelper */ .p._ImageProcessingConfigurationParser = ImageProcessingConfiguration.Parse;
// Register Class Name
(0,_Misc_typeStore_js__WEBPACK_IMPORTED_MODULE_8__/* .RegisterClass */ .Y5)("BABYLON.ImageProcessingConfiguration", ImageProcessingConfiguration);
//# sourceMappingURL=imageProcessingConfiguration.js.map

/***/ }),

/***/ 80935:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   D: () => (/* binding */ UniformBuffer)
/* harmony export */ });
/* harmony import */ var _Misc_logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(51137);
/* harmony import */ var _Misc_tools_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(998);


/**
 * Uniform buffer objects.
 *
 * Handles blocks of uniform on the GPU.
 *
 * If WebGL 2 is not available, this class falls back on traditional setUniformXXX calls.
 *
 * For more information, please refer to :
 * https://www.khronos.org/opengl/wiki/Uniform_Buffer_Object
 */
class UniformBuffer {
    /**
     * Instantiates a new Uniform buffer objects.
     *
     * Handles blocks of uniform on the GPU.
     *
     * If WebGL 2 is not available, this class falls back on traditional setUniformXXX calls.
     *
     * For more information, please refer to :
     * @see https://www.khronos.org/opengl/wiki/Uniform_Buffer_Object
     * @param engine Define the engine the buffer is associated with
     * @param data Define the data contained in the buffer
     * @param dynamic Define if the buffer is updatable
     * @param name to assign to the buffer (debugging purpose)
     * @param forceNoUniformBuffer define that this object must not rely on UBO objects
     */
    constructor(engine, data, dynamic, name, forceNoUniformBuffer = false) {
        // Matrix cache
        this._valueCache = {};
        this._engine = engine;
        this._noUBO = !engine.supportsUniformBuffers || forceNoUniformBuffer;
        this._dynamic = dynamic;
        this._name = name ?? "no-name";
        this._data = data || [];
        this._uniformLocations = {};
        this._uniformSizes = {};
        this._uniformArraySizes = {};
        this._uniformLocationPointer = 0;
        this._needSync = false;
        if (this._engine._features.trackUbosInFrame) {
            this._buffers = [];
            this._bufferIndex = -1;
            this._createBufferOnWrite = false;
            this._currentFrameId = 0;
        }
        if (this._noUBO) {
            this.updateMatrix3x3 = this._updateMatrix3x3ForEffect;
            this.updateMatrix2x2 = this._updateMatrix2x2ForEffect;
            this.updateFloat = this._updateFloatForEffect;
            this.updateFloat2 = this._updateFloat2ForEffect;
            this.updateFloat3 = this._updateFloat3ForEffect;
            this.updateFloat4 = this._updateFloat4ForEffect;
            this.updateFloatArray = this._updateFloatArrayForEffect;
            this.updateArray = this._updateArrayForEffect;
            this.updateIntArray = this._updateIntArrayForEffect;
            this.updateUIntArray = this._updateUIntArrayForEffect;
            this.updateMatrix = this._updateMatrixForEffect;
            this.updateMatrices = this._updateMatricesForEffect;
            this.updateVector3 = this._updateVector3ForEffect;
            this.updateVector4 = this._updateVector4ForEffect;
            this.updateColor3 = this._updateColor3ForEffect;
            this.updateColor4 = this._updateColor4ForEffect;
            this.updateDirectColor4 = this._updateDirectColor4ForEffect;
            this.updateInt = this._updateIntForEffect;
            this.updateInt2 = this._updateInt2ForEffect;
            this.updateInt3 = this._updateInt3ForEffect;
            this.updateInt4 = this._updateInt4ForEffect;
            this.updateUInt = this._updateUIntForEffect;
            this.updateUInt2 = this._updateUInt2ForEffect;
            this.updateUInt3 = this._updateUInt3ForEffect;
            this.updateUInt4 = this._updateUInt4ForEffect;
        }
        else {
            this._engine._uniformBuffers.push(this);
            this.updateMatrix3x3 = this._updateMatrix3x3ForUniform;
            this.updateMatrix2x2 = this._updateMatrix2x2ForUniform;
            this.updateFloat = this._updateFloatForUniform;
            this.updateFloat2 = this._updateFloat2ForUniform;
            this.updateFloat3 = this._updateFloat3ForUniform;
            this.updateFloat4 = this._updateFloat4ForUniform;
            this.updateFloatArray = this._updateFloatArrayForUniform;
            this.updateArray = this._updateArrayForUniform;
            this.updateIntArray = this._updateIntArrayForUniform;
            this.updateUIntArray = this._updateUIntArrayForUniform;
            this.updateMatrix = this._updateMatrixForUniform;
            this.updateMatrices = this._updateMatricesForUniform;
            this.updateVector3 = this._updateVector3ForUniform;
            this.updateVector4 = this._updateVector4ForUniform;
            this.updateColor3 = this._updateColor3ForUniform;
            this.updateColor4 = this._updateColor4ForUniform;
            this.updateDirectColor4 = this._updateDirectColor4ForUniform;
            this.updateInt = this._updateIntForUniform;
            this.updateInt2 = this._updateInt2ForUniform;
            this.updateInt3 = this._updateInt3ForUniform;
            this.updateInt4 = this._updateInt4ForUniform;
            this.updateUInt = this._updateUIntForUniform;
            this.updateUInt2 = this._updateUInt2ForUniform;
            this.updateUInt3 = this._updateUInt3ForUniform;
            this.updateUInt4 = this._updateUInt4ForUniform;
        }
    }
    /**
     * Indicates if the buffer is using the WebGL2 UBO implementation,
     * or just falling back on setUniformXXX calls.
     */
    get useUbo() {
        return !this._noUBO;
    }
    /**
     * Indicates if the WebGL underlying uniform buffer is in sync
     * with the javascript cache data.
     */
    get isSync() {
        return !this._needSync;
    }
    /**
     * Indicates if the WebGL underlying uniform buffer is dynamic.
     * Also, a dynamic UniformBuffer will disable cache verification and always
     * update the underlying WebGL uniform buffer to the GPU.
     * @returns if Dynamic, otherwise false
     */
    isDynamic() {
        return this._dynamic !== undefined;
    }
    /**
     * The data cache on JS side.
     * @returns the underlying data as a float array
     */
    getData() {
        return this._bufferData;
    }
    /**
     * The underlying WebGL Uniform buffer.
     * @returns the webgl buffer
     */
    getBuffer() {
        return this._buffer;
    }
    /**
     * std140 layout specifies how to align data within an UBO structure.
     * See https://khronos.org/registry/OpenGL/specs/gl/glspec45.core.pdf#page=159
     * for specs.
     * @param size
     */
    _fillAlignment(size) {
        // This code has been simplified because we only use floats, vectors of 1, 2, 3, 4 components
        // and 4x4 matrices
        // TODO : change if other types are used
        let alignment;
        if (size <= 2) {
            alignment = size;
        }
        else {
            alignment = 4;
        }
        if (this._uniformLocationPointer % alignment !== 0) {
            const oldPointer = this._uniformLocationPointer;
            this._uniformLocationPointer += alignment - (this._uniformLocationPointer % alignment);
            const diff = this._uniformLocationPointer - oldPointer;
            for (let i = 0; i < diff; i++) {
                this._data.push(0);
            }
        }
    }
    /**
     * Adds an uniform in the buffer.
     * Warning : the subsequents calls of this function must be in the same order as declared in the shader
     * for the layout to be correct ! The addUniform function only handles types like float, vec2, vec3, vec4, mat4,
     * meaning size=1,2,3,4 or 16. It does not handle struct types.
     * @param name Name of the uniform, as used in the uniform block in the shader.
     * @param size Data size, or data directly.
     * @param arraySize The number of elements in the array, 0 if not an array.
     */
    addUniform(name, size, arraySize = 0) {
        if (this._noUBO) {
            return;
        }
        if (this._uniformLocations[name] !== undefined) {
            // Already existing uniform
            return;
        }
        // This function must be called in the order of the shader layout !
        // size can be the size of the uniform, or data directly
        let data;
        // std140 FTW...
        if (arraySize > 0) {
            if (size instanceof Array) {
                // eslint-disable-next-line no-throw-literal
                throw "addUniform should not be use with Array in UBO: " + name;
            }
            this._fillAlignment(4);
            this._uniformArraySizes[name] = { strideSize: size, arraySize };
            if (size == 16) {
                size = size * arraySize;
            }
            else {
                const perElementPadding = 4 - size;
                const totalPadding = perElementPadding * arraySize;
                size = size * arraySize + totalPadding;
            }
            data = [];
            // Fill with zeros
            for (let i = 0; i < size; i++) {
                data.push(0);
            }
        }
        else {
            if (size instanceof Array) {
                data = size;
                size = data.length;
            }
            else {
                size = size;
                data = [];
                // Fill with zeros
                for (let i = 0; i < size; i++) {
                    data.push(0);
                }
            }
            this._fillAlignment(size);
        }
        this._uniformSizes[name] = size;
        this._uniformLocations[name] = this._uniformLocationPointer;
        this._uniformLocationPointer += size;
        for (let i = 0; i < size; i++) {
            this._data.push(data[i]);
        }
        this._needSync = true;
    }
    /**
     * Adds a Matrix 4x4 to the uniform buffer.
     * @param name Name of the uniform, as used in the uniform block in the shader.
     * @param mat A 4x4 matrix.
     */
    addMatrix(name, mat) {
        this.addUniform(name, Array.prototype.slice.call(mat.asArray()));
    }
    /**
     * Adds a vec2 to the uniform buffer.
     * @param name Name of the uniform, as used in the uniform block in the shader.
     * @param x Define the x component value of the vec2
     * @param y Define the y component value of the vec2
     */
    addFloat2(name, x, y) {
        const temp = [x, y];
        this.addUniform(name, temp);
    }
    /**
     * Adds a vec3 to the uniform buffer.
     * @param name Name of the uniform, as used in the uniform block in the shader.
     * @param x Define the x component value of the vec3
     * @param y Define the y component value of the vec3
     * @param z Define the z component value of the vec3
     */
    addFloat3(name, x, y, z) {
        const temp = [x, y, z];
        this.addUniform(name, temp);
    }
    /**
     * Adds a vec3 to the uniform buffer.
     * @param name Name of the uniform, as used in the uniform block in the shader.
     * @param color Define the vec3 from a Color
     */
    addColor3(name, color) {
        const temp = [color.r, color.g, color.b];
        this.addUniform(name, temp);
    }
    /**
     * Adds a vec4 to the uniform buffer.
     * @param name Name of the uniform, as used in the uniform block in the shader.
     * @param color Define the rgb components from a Color
     * @param alpha Define the a component of the vec4
     */
    addColor4(name, color, alpha) {
        const temp = [color.r, color.g, color.b, alpha];
        this.addUniform(name, temp);
    }
    /**
     * Adds a vec3 to the uniform buffer.
     * @param name Name of the uniform, as used in the uniform block in the shader.
     * @param vector Define the vec3 components from a Vector
     */
    addVector3(name, vector) {
        const temp = [vector.x, vector.y, vector.z];
        this.addUniform(name, temp);
    }
    /**
     * Adds a Matrix 3x3 to the uniform buffer.
     * @param name Name of the uniform, as used in the uniform block in the shader.
     */
    addMatrix3x3(name) {
        this.addUniform(name, 12);
    }
    /**
     * Adds a Matrix 2x2 to the uniform buffer.
     * @param name Name of the uniform, as used in the uniform block in the shader.
     */
    addMatrix2x2(name) {
        this.addUniform(name, 8);
    }
    /**
     * Effectively creates the WebGL Uniform Buffer, once layout is completed with `addUniform`.
     */
    create() {
        if (this._noUBO) {
            return;
        }
        if (this._buffer) {
            return; // nothing to do
        }
        // See spec, alignment must be filled as a vec4
        this._fillAlignment(4);
        this._bufferData = new Float32Array(this._data);
        this._rebuild();
        this._needSync = true;
    }
    // The result of this method is used for debugging purpose, as part of the buffer name
    // It is meant to more easily know what this buffer is about when debugging
    // Some buffers can have a lot of uniforms (several dozens), so the method only returns the first 10 of them
    // (should be enough to understand what the buffer is for)
    _getNames() {
        const names = [];
        let i = 0;
        for (const name in this._uniformLocations) {
            names.push(name);
            if (++i === 10) {
                break;
            }
        }
        return names.join(",");
    }
    /** @internal */
    _rebuild() {
        if (this._noUBO || !this._bufferData) {
            return;
        }
        if (this._dynamic) {
            this._buffer = this._engine.createDynamicUniformBuffer(this._bufferData, this._name + "_UniformList:" + this._getNames());
        }
        else {
            this._buffer = this._engine.createUniformBuffer(this._bufferData, this._name + "_UniformList:" + this._getNames());
        }
        if (this._engine._features.trackUbosInFrame) {
            this._buffers.push([this._buffer, this._engine._features.checkUbosContentBeforeUpload ? this._bufferData.slice() : undefined]);
            this._bufferIndex = this._buffers.length - 1;
            this._createBufferOnWrite = false;
        }
    }
    /** @internal */
    _rebuildAfterContextLost() {
        if (this._engine._features.trackUbosInFrame) {
            this._buffers = [];
            this._currentFrameId = 0;
        }
        this._rebuild();
    }
    /** @internal */
    get _numBuffers() {
        return this._buffers.length;
    }
    /** @internal */
    get _indexBuffer() {
        return this._bufferIndex;
    }
    /** Gets the name of this buffer */
    get name() {
        return this._name;
    }
    /** Gets the current effect */
    get currentEffect() {
        return this._currentEffect;
    }
    _buffersEqual(buf1, buf2) {
        for (let i = 0; i < buf1.length; ++i) {
            if (buf1[i] !== buf2[i]) {
                return false;
            }
        }
        return true;
    }
    _copyBuffer(src, dst) {
        for (let i = 0; i < src.length; ++i) {
            dst[i] = src[i];
        }
    }
    /**
     * Updates the WebGL Uniform Buffer on the GPU.
     * If the `dynamic` flag is set to true, no cache comparison is done.
     * Otherwise, the buffer will be updated only if the cache differs.
     */
    update() {
        if (this._noUBO) {
            return;
        }
        this.bindUniformBuffer();
        if (!this._buffer) {
            this.create();
            return;
        }
        if (!this._dynamic && !this._needSync) {
            this._createBufferOnWrite = this._engine._features.trackUbosInFrame;
            return;
        }
        if (this._buffers && this._buffers.length > 1 && this._buffers[this._bufferIndex][1]) {
            if (this._buffersEqual(this._bufferData, this._buffers[this._bufferIndex][1])) {
                this._needSync = false;
                this._createBufferOnWrite = this._engine._features.trackUbosInFrame;
                return;
            }
            else {
                this._copyBuffer(this._bufferData, this._buffers[this._bufferIndex][1]);
            }
        }
        this._engine.updateUniformBuffer(this._buffer, this._bufferData);
        if (this._engine._features._collectUbosUpdatedInFrame) {
            if (!UniformBuffer._UpdatedUbosInFrame[this._name]) {
                UniformBuffer._UpdatedUbosInFrame[this._name] = 0;
            }
            UniformBuffer._UpdatedUbosInFrame[this._name]++;
        }
        this._needSync = false;
        this._createBufferOnWrite = this._engine._features.trackUbosInFrame;
    }
    _createNewBuffer() {
        if (this._bufferIndex + 1 < this._buffers.length) {
            this._bufferIndex++;
            this._buffer = this._buffers[this._bufferIndex][0];
            this._createBufferOnWrite = false;
            this._needSync = true;
        }
        else {
            this._rebuild();
        }
    }
    _checkNewFrame() {
        if (this._engine._features.trackUbosInFrame && this._currentFrameId !== this._engine.frameId) {
            this._currentFrameId = this._engine.frameId;
            this._createBufferOnWrite = false;
            if (this._buffers && this._buffers.length > 0) {
                this._needSync = this._bufferIndex !== 0;
                this._bufferIndex = 0;
                this._buffer = this._buffers[this._bufferIndex][0];
            }
            else {
                this._bufferIndex = -1;
            }
        }
    }
    /**
     * Updates the value of an uniform. The `update` method must be called afterwards to make it effective in the GPU.
     * @param uniformName Define the name of the uniform, as used in the uniform block in the shader.
     * @param data Define the flattened data
     * @param size Define the size of the data.
     */
    updateUniform(uniformName, data, size) {
        this._checkNewFrame();
        let location = this._uniformLocations[uniformName];
        if (location === undefined) {
            if (this._buffer) {
                // Cannot add an uniform if the buffer is already created
                _Misc_logger_js__WEBPACK_IMPORTED_MODULE_0__/* .Logger */ .V.Error("Cannot add an uniform after UBO has been created. uniformName=" + uniformName);
                return;
            }
            this.addUniform(uniformName, size);
            location = this._uniformLocations[uniformName];
        }
        if (!this._buffer) {
            this.create();
        }
        if (!this._dynamic) {
            // Cache for static uniform buffers
            let changed = false;
            for (let i = 0; i < size; i++) {
                // We are checking the matrix cache before calling updateUniform so we do not need to check it here
                // Hence the test for size === 16 to simply commit the matrix values
                if ((size === 16 && !this._engine._features.uniformBufferHardCheckMatrix) || this._bufferData[location + i] !== Math.fround(data[i])) {
                    changed = true;
                    if (this._createBufferOnWrite) {
                        this._createNewBuffer();
                    }
                    this._bufferData[location + i] = data[i];
                }
            }
            this._needSync = this._needSync || changed;
        }
        else {
            // No cache for dynamic
            for (let i = 0; i < size; i++) {
                this._bufferData[location + i] = data[i];
            }
        }
    }
    /**
     * Updates the value of an uniform. The `update` method must be called afterwards to make it effective in the GPU.
     * @param uniformName Define the name of the uniform, as used in the uniform block in the shader.
     * @param data Define the flattened data
     * @param size Define the size of the data.
     */
    updateUniformArray(uniformName, data, size) {
        this._checkNewFrame();
        const location = this._uniformLocations[uniformName];
        if (location === undefined) {
            _Misc_logger_js__WEBPACK_IMPORTED_MODULE_0__/* .Logger */ .V.Error("Cannot add an uniform Array dynamically. Please, add it using addUniform and make sure that uniform buffers are supported by the current engine.");
            return;
        }
        if (!this._buffer) {
            this.create();
        }
        const arraySizes = this._uniformArraySizes[uniformName];
        if (!this._dynamic) {
            // Cache for static uniform buffers
            let changed = false;
            let countToFour = 0;
            let baseStride = 0;
            for (let i = 0; i < size; i++) {
                if (this._bufferData[location + baseStride * 4 + countToFour] !== _Misc_tools_js__WEBPACK_IMPORTED_MODULE_1__/* .Tools */ .S0.FloatRound(data[i])) {
                    changed = true;
                    if (this._createBufferOnWrite) {
                        this._createNewBuffer();
                    }
                    this._bufferData[location + baseStride * 4 + countToFour] = data[i];
                }
                countToFour++;
                if (countToFour === arraySizes.strideSize) {
                    for (; countToFour < 4; countToFour++) {
                        this._bufferData[location + baseStride * 4 + countToFour] = 0;
                    }
                    countToFour = 0;
                    baseStride++;
                }
            }
            this._needSync = this._needSync || changed;
        }
        else {
            // No cache for dynamic
            for (let i = 0; i < size; i++) {
                this._bufferData[location + i] = data[i];
            }
        }
    }
    _cacheMatrix(name, matrix) {
        this._checkNewFrame();
        const cache = this._valueCache[name];
        const flag = matrix.updateFlag;
        if (cache !== undefined && cache === flag) {
            return false;
        }
        this._valueCache[name] = flag;
        return true;
    }
    // Update methods
    _updateMatrix3x3ForUniform(name, matrix) {
        // To match std140, matrix must be realigned
        for (let i = 0; i < 3; i++) {
            UniformBuffer._TempBuffer[i * 4] = matrix[i * 3];
            UniformBuffer._TempBuffer[i * 4 + 1] = matrix[i * 3 + 1];
            UniformBuffer._TempBuffer[i * 4 + 2] = matrix[i * 3 + 2];
            UniformBuffer._TempBuffer[i * 4 + 3] = 0.0;
        }
        this.updateUniform(name, UniformBuffer._TempBuffer, 12);
    }
    _updateMatrix3x3ForEffect(name, matrix) {
        this._currentEffect.setMatrix3x3(name, matrix);
    }
    _updateMatrix2x2ForEffect(name, matrix) {
        this._currentEffect.setMatrix2x2(name, matrix);
    }
    _updateMatrix2x2ForUniform(name, matrix) {
        // To match std140, matrix must be realigned
        for (let i = 0; i < 2; i++) {
            UniformBuffer._TempBuffer[i * 4] = matrix[i * 2];
            UniformBuffer._TempBuffer[i * 4 + 1] = matrix[i * 2 + 1];
            UniformBuffer._TempBuffer[i * 4 + 2] = 0.0;
            UniformBuffer._TempBuffer[i * 4 + 3] = 0.0;
        }
        this.updateUniform(name, UniformBuffer._TempBuffer, 8);
    }
    _updateFloatForEffect(name, x) {
        this._currentEffect.setFloat(name, x);
    }
    _updateFloatForUniform(name, x) {
        UniformBuffer._TempBuffer[0] = x;
        this.updateUniform(name, UniformBuffer._TempBuffer, 1);
    }
    _updateFloat2ForEffect(name, x, y, suffix = "") {
        this._currentEffect.setFloat2(name + suffix, x, y);
    }
    _updateFloat2ForUniform(name, x, y) {
        UniformBuffer._TempBuffer[0] = x;
        UniformBuffer._TempBuffer[1] = y;
        this.updateUniform(name, UniformBuffer._TempBuffer, 2);
    }
    _updateFloat3ForEffect(name, x, y, z, suffix = "") {
        this._currentEffect.setFloat3(name + suffix, x, y, z);
    }
    _updateFloat3ForUniform(name, x, y, z) {
        UniformBuffer._TempBuffer[0] = x;
        UniformBuffer._TempBuffer[1] = y;
        UniformBuffer._TempBuffer[2] = z;
        this.updateUniform(name, UniformBuffer._TempBuffer, 3);
    }
    _updateFloat4ForEffect(name, x, y, z, w, suffix = "") {
        this._currentEffect.setFloat4(name + suffix, x, y, z, w);
    }
    _updateFloat4ForUniform(name, x, y, z, w) {
        UniformBuffer._TempBuffer[0] = x;
        UniformBuffer._TempBuffer[1] = y;
        UniformBuffer._TempBuffer[2] = z;
        UniformBuffer._TempBuffer[3] = w;
        this.updateUniform(name, UniformBuffer._TempBuffer, 4);
    }
    _updateFloatArrayForEffect(name, array) {
        this._currentEffect.setFloatArray(name, array);
    }
    _updateFloatArrayForUniform(name, array) {
        this.updateUniformArray(name, array, array.length);
    }
    _updateArrayForEffect(name, array) {
        this._currentEffect.setArray(name, array);
    }
    _updateArrayForUniform(name, array) {
        this.updateUniformArray(name, array, array.length);
    }
    _updateIntArrayForEffect(name, array) {
        this._currentEffect.setIntArray(name, array);
    }
    _updateIntArrayForUniform(name, array) {
        UniformBuffer._TempBufferInt32View.set(array);
        this.updateUniformArray(name, UniformBuffer._TempBuffer, array.length);
    }
    _updateUIntArrayForEffect(name, array) {
        this._currentEffect.setUIntArray(name, array);
    }
    _updateUIntArrayForUniform(name, array) {
        UniformBuffer._TempBufferUInt32View.set(array);
        this.updateUniformArray(name, UniformBuffer._TempBuffer, array.length);
    }
    _updateMatrixForEffect(name, mat) {
        this._currentEffect.setMatrix(name, mat);
    }
    _updateMatrixForUniform(name, mat) {
        if (this._cacheMatrix(name, mat)) {
            this.updateUniform(name, mat.asArray(), 16);
        }
    }
    _updateMatricesForEffect(name, mat) {
        this._currentEffect.setMatrices(name, mat);
    }
    _updateMatricesForUniform(name, mat) {
        this.updateUniform(name, mat, mat.length);
    }
    _updateVector3ForEffect(name, vector) {
        this._currentEffect.setVector3(name, vector);
    }
    _updateVector3ForUniform(name, vector) {
        UniformBuffer._TempBuffer[0] = vector.x;
        UniformBuffer._TempBuffer[1] = vector.y;
        UniformBuffer._TempBuffer[2] = vector.z;
        this.updateUniform(name, UniformBuffer._TempBuffer, 3);
    }
    _updateVector4ForEffect(name, vector) {
        this._currentEffect.setVector4(name, vector);
    }
    _updateVector4ForUniform(name, vector) {
        UniformBuffer._TempBuffer[0] = vector.x;
        UniformBuffer._TempBuffer[1] = vector.y;
        UniformBuffer._TempBuffer[2] = vector.z;
        UniformBuffer._TempBuffer[3] = vector.w;
        this.updateUniform(name, UniformBuffer._TempBuffer, 4);
    }
    _updateColor3ForEffect(name, color, suffix = "") {
        this._currentEffect.setColor3(name + suffix, color);
    }
    _updateColor3ForUniform(name, color) {
        UniformBuffer._TempBuffer[0] = color.r;
        UniformBuffer._TempBuffer[1] = color.g;
        UniformBuffer._TempBuffer[2] = color.b;
        this.updateUniform(name, UniformBuffer._TempBuffer, 3);
    }
    _updateColor4ForEffect(name, color, alpha, suffix = "") {
        this._currentEffect.setColor4(name + suffix, color, alpha);
    }
    _updateDirectColor4ForEffect(name, color, suffix = "") {
        this._currentEffect.setDirectColor4(name + suffix, color);
    }
    _updateColor4ForUniform(name, color, alpha) {
        UniformBuffer._TempBuffer[0] = color.r;
        UniformBuffer._TempBuffer[1] = color.g;
        UniformBuffer._TempBuffer[2] = color.b;
        UniformBuffer._TempBuffer[3] = alpha;
        this.updateUniform(name, UniformBuffer._TempBuffer, 4);
    }
    _updateDirectColor4ForUniform(name, color) {
        UniformBuffer._TempBuffer[0] = color.r;
        UniformBuffer._TempBuffer[1] = color.g;
        UniformBuffer._TempBuffer[2] = color.b;
        UniformBuffer._TempBuffer[3] = color.a;
        this.updateUniform(name, UniformBuffer._TempBuffer, 4);
    }
    _updateIntForEffect(name, x, suffix = "") {
        this._currentEffect.setInt(name + suffix, x);
    }
    _updateIntForUniform(name, x) {
        UniformBuffer._TempBufferInt32View[0] = x;
        this.updateUniform(name, UniformBuffer._TempBuffer, 1);
    }
    _updateInt2ForEffect(name, x, y, suffix = "") {
        this._currentEffect.setInt2(name + suffix, x, y);
    }
    _updateInt2ForUniform(name, x, y) {
        UniformBuffer._TempBufferInt32View[0] = x;
        UniformBuffer._TempBufferInt32View[1] = y;
        this.updateUniform(name, UniformBuffer._TempBuffer, 2);
    }
    _updateInt3ForEffect(name, x, y, z, suffix = "") {
        this._currentEffect.setInt3(name + suffix, x, y, z);
    }
    _updateInt3ForUniform(name, x, y, z) {
        UniformBuffer._TempBufferInt32View[0] = x;
        UniformBuffer._TempBufferInt32View[1] = y;
        UniformBuffer._TempBufferInt32View[2] = z;
        this.updateUniform(name, UniformBuffer._TempBuffer, 3);
    }
    _updateInt4ForEffect(name, x, y, z, w, suffix = "") {
        this._currentEffect.setInt4(name + suffix, x, y, z, w);
    }
    _updateInt4ForUniform(name, x, y, z, w) {
        UniformBuffer._TempBufferInt32View[0] = x;
        UniformBuffer._TempBufferInt32View[1] = y;
        UniformBuffer._TempBufferInt32View[2] = z;
        UniformBuffer._TempBufferInt32View[3] = w;
        this.updateUniform(name, UniformBuffer._TempBuffer, 4);
    }
    _updateUIntForEffect(name, x, suffix = "") {
        this._currentEffect.setUInt(name + suffix, x);
    }
    _updateUIntForUniform(name, x) {
        UniformBuffer._TempBufferUInt32View[0] = x;
        this.updateUniform(name, UniformBuffer._TempBuffer, 1);
    }
    _updateUInt2ForEffect(name, x, y, suffix = "") {
        this._currentEffect.setUInt2(name + suffix, x, y);
    }
    _updateUInt2ForUniform(name, x, y) {
        UniformBuffer._TempBufferUInt32View[0] = x;
        UniformBuffer._TempBufferUInt32View[1] = y;
        this.updateUniform(name, UniformBuffer._TempBuffer, 2);
    }
    _updateUInt3ForEffect(name, x, y, z, suffix = "") {
        this._currentEffect.setUInt3(name + suffix, x, y, z);
    }
    _updateUInt3ForUniform(name, x, y, z) {
        UniformBuffer._TempBufferUInt32View[0] = x;
        UniformBuffer._TempBufferUInt32View[1] = y;
        UniformBuffer._TempBufferUInt32View[2] = z;
        this.updateUniform(name, UniformBuffer._TempBuffer, 3);
    }
    _updateUInt4ForEffect(name, x, y, z, w, suffix = "") {
        this._currentEffect.setUInt4(name + suffix, x, y, z, w);
    }
    _updateUInt4ForUniform(name, x, y, z, w) {
        UniformBuffer._TempBufferUInt32View[0] = x;
        UniformBuffer._TempBufferUInt32View[1] = y;
        UniformBuffer._TempBufferUInt32View[2] = z;
        UniformBuffer._TempBufferUInt32View[3] = w;
        this.updateUniform(name, UniformBuffer._TempBuffer, 4);
    }
    /**
     * Sets a sampler uniform on the effect.
     * @param name Define the name of the sampler.
     * @param texture Define the texture to set in the sampler
     */
    setTexture(name, texture) {
        this._currentEffect.setTexture(name, texture);
    }
    /**
     * Sets an array of sampler uniforms on the effect.
     * @param name Define the name of uniform.
     * @param textures Define the textures to set in the array of samplers
     */
    setTextureArray(name, textures) {
        this._currentEffect.setTextureArray(name, textures);
    }
    /**
     * Sets a sampler uniform on the effect.
     * @param name Define the name of the sampler.
     * @param texture Define the (internal) texture to set in the sampler
     */
    bindTexture(name, texture) {
        this._currentEffect._bindTexture(name, texture);
    }
    /**
     * Directly updates the value of the uniform in the cache AND on the GPU.
     * @param uniformName Define the name of the uniform, as used in the uniform block in the shader.
     * @param data Define the flattened data
     */
    updateUniformDirectly(uniformName, data) {
        this.updateUniform(uniformName, data, data.length);
        this.update();
    }
    /**
     * Associates an effect to this uniform buffer
     * @param effect Define the effect to associate the buffer to
     * @param name Name of the uniform block in the shader.
     */
    bindToEffect(effect, name) {
        this._currentEffect = effect;
        this._currentEffectName = name;
    }
    /**
     * Binds the current (GPU) buffer to the effect
     */
    bindUniformBuffer() {
        if (!this._noUBO && this._buffer && this._currentEffect) {
            this._currentEffect.bindUniformBuffer(this._buffer, this._currentEffectName);
        }
    }
    /**
     * Dissociates the current effect from this uniform buffer
     */
    unbindEffect() {
        this._currentEffect = undefined;
        this._currentEffectName = undefined;
    }
    /**
     * Sets the current state of the class (_bufferIndex, _buffer) to point to the data buffer passed in parameter if this buffer is one of the buffers handled by the class (meaning if it can be found in the _buffers array)
     * This method is meant to be able to update a buffer at any time: just call setDataBuffer to set the class in the right state, call some updateXXX methods and then call udpate() => that will update the GPU buffer on the graphic card
     * @param dataBuffer buffer to look for
     * @returns true if the buffer has been found and the class internal state points to it, else false
     */
    setDataBuffer(dataBuffer) {
        if (!this._buffers) {
            return this._buffer === dataBuffer;
        }
        for (let b = 0; b < this._buffers.length; ++b) {
            const buffer = this._buffers[b];
            if (buffer[0] === dataBuffer) {
                this._bufferIndex = b;
                this._buffer = dataBuffer;
                this._createBufferOnWrite = false;
                this._currentEffect = undefined;
                return true;
            }
        }
        return false;
    }
    /**
     * Disposes the uniform buffer.
     */
    dispose() {
        if (this._noUBO) {
            return;
        }
        const uniformBuffers = this._engine._uniformBuffers;
        const index = uniformBuffers.indexOf(this);
        if (index !== -1) {
            uniformBuffers[index] = uniformBuffers[uniformBuffers.length - 1];
            uniformBuffers.pop();
        }
        if (this._engine._features.trackUbosInFrame && this._buffers) {
            for (let i = 0; i < this._buffers.length; ++i) {
                const buffer = this._buffers[i][0];
                this._engine._releaseBuffer(buffer);
            }
        }
        else if (this._buffer && this._engine._releaseBuffer(this._buffer)) {
            this._buffer = null;
        }
    }
}
/** @internal */
UniformBuffer._UpdatedUbosInFrame = {};
// Pool for avoiding memory leaks
UniformBuffer._MAX_UNIFORM_SIZE = 256;
UniformBuffer._TempBuffer = new Float32Array(UniformBuffer._MAX_UNIFORM_SIZE);
UniformBuffer._TempBufferInt32View = new Int32Array(UniformBuffer._TempBuffer.buffer);
UniformBuffer._TempBufferUInt32View = new Uint32Array(UniformBuffer._TempBuffer.buffer);
//# sourceMappingURL=uniformBuffer.js.map

/***/ }),

/***/ 87216:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   w: () => (/* binding */ StringDictionary)
/* harmony export */ });
/**
 * This class implement a typical dictionary using a string as key and the generic type T as value.
 * The underlying implementation relies on an associative array to ensure the best performances.
 * The value can be anything including 'null' but except 'undefined'
 */
class StringDictionary {
    constructor() {
        this._count = 0;
        this._data = {};
    }
    /**
     * This will clear this dictionary and copy the content from the 'source' one.
     * If the T value is a custom object, it won't be copied/cloned, the same object will be used
     * @param source the dictionary to take the content from and copy to this dictionary
     */
    copyFrom(source) {
        this.clear();
        source.forEach((t, v) => this.add(t, v));
    }
    /**
     * Get a value based from its key
     * @param key the given key to get the matching value from
     * @returns the value if found, otherwise undefined is returned
     */
    get(key) {
        const val = this._data[key];
        if (val !== undefined) {
            return val;
        }
        return undefined;
    }
    /**
     * Get a value from its key or add it if it doesn't exist.
     * This method will ensure you that a given key/data will be present in the dictionary.
     * @param key the given key to get the matching value from
     * @param factory the factory that will create the value if the key is not present in the dictionary.
     * The factory will only be invoked if there's no data for the given key.
     * @returns the value corresponding to the key.
     */
    getOrAddWithFactory(key, factory) {
        let val = this.get(key);
        if (val !== undefined) {
            return val;
        }
        val = factory(key);
        if (val) {
            this.add(key, val);
        }
        return val;
    }
    /**
     * Get a value from its key if present in the dictionary otherwise add it
     * @param key the key to get the value from
     * @param val if there's no such key/value pair in the dictionary add it with this value
     * @returns the value corresponding to the key
     */
    getOrAdd(key, val) {
        const curVal = this.get(key);
        if (curVal !== undefined) {
            return curVal;
        }
        this.add(key, val);
        return val;
    }
    /**
     * Check if there's a given key in the dictionary
     * @param key the key to check for
     * @returns true if the key is present, false otherwise
     */
    contains(key) {
        return this._data[key] !== undefined;
    }
    /**
     * Add a new key and its corresponding value
     * @param key the key to add
     * @param value the value corresponding to the key
     * @returns true if the operation completed successfully, false if we couldn't insert the key/value because there was already this key in the dictionary
     */
    add(key, value) {
        if (this._data[key] !== undefined) {
            return false;
        }
        this._data[key] = value;
        ++this._count;
        return true;
    }
    /**
     * Update a specific value associated to a key
     * @param key defines the key to use
     * @param value defines the value to store
     * @returns true if the value was updated (or false if the key was not found)
     */
    set(key, value) {
        if (this._data[key] === undefined) {
            return false;
        }
        this._data[key] = value;
        return true;
    }
    /**
     * Get the element of the given key and remove it from the dictionary
     * @param key defines the key to search
     * @returns the value associated with the key or null if not found
     */
    getAndRemove(key) {
        const val = this.get(key);
        if (val !== undefined) {
            delete this._data[key];
            --this._count;
            return val;
        }
        return null;
    }
    /**
     * Remove a key/value from the dictionary.
     * @param key the key to remove
     * @returns true if the item was successfully deleted, false if no item with such key exist in the dictionary
     */
    remove(key) {
        if (this.contains(key)) {
            delete this._data[key];
            --this._count;
            return true;
        }
        return false;
    }
    /**
     * Clear the whole content of the dictionary
     */
    clear() {
        this._data = {};
        this._count = 0;
    }
    /**
     * Gets the current count
     */
    get count() {
        return this._count;
    }
    /**
     * Execute a callback on each key/val of the dictionary.
     * Note that you can remove any element in this dictionary in the callback implementation
     * @param callback the callback to execute on a given key/value pair
     */
    forEach(callback) {
        for (const cur in this._data) {
            const val = this._data[cur];
            callback(cur, val);
        }
    }
    /**
     * Execute a callback on every occurrence of the dictionary until it returns a valid TRes object.
     * If the callback returns null or undefined the method will iterate to the next key/value pair
     * Note that you can remove any element in this dictionary in the callback implementation
     * @param callback the callback to execute, if it return a valid T instanced object the enumeration will stop and the object will be returned
     * @returns the first item
     */
    first(callback) {
        for (const cur in this._data) {
            const val = this._data[cur];
            const res = callback(cur, val);
            if (res) {
                return res;
            }
        }
        return null;
    }
}
//# sourceMappingURL=stringDictionary.js.map

/***/ }),

/***/ 82678:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   K: () => (/* binding */ UniqueIdGenerator)
/* harmony export */ });
/**
 * Helper class used to generate session unique ID
 */
class UniqueIdGenerator {
    /**
     * Gets an unique (relatively to the current scene) Id
     */
    static get UniqueId() {
        const result = this._UniqueIdCounter;
        this._UniqueIdCounter++;
        return result;
    }
}
// Statics
UniqueIdGenerator._UniqueIdCounter = 1;
//# sourceMappingURL=uniqueIdGenerator.js.map

/***/ }),

/***/ 65877:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   h: () => (/* binding */ _ImportHelper)
/* harmony export */ });
/** @internal */
class _ImportHelper {
}
/** @internal */
_ImportHelper._IsPickingAvailable = false;
//# sourceMappingURL=import.helper.js.map

/***/ }),

/***/ 87491:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ Scene)
});

// UNUSED EXPORTS: ScenePerformancePriority

// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Misc/tools.js
var tools = __webpack_require__(998);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Misc/precisionDate.js
var precisionDate = __webpack_require__(76237);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Misc/observable.js
var observable = __webpack_require__(99848);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Misc/smartArray.js
var smartArray = __webpack_require__(17931);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Misc/stringDictionary.js
var stringDictionary = __webpack_require__(87216);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Misc/tags.js
var tags = __webpack_require__(27152);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Maths/math.vector.js
var math_vector = __webpack_require__(79923);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Materials/imageProcessingConfiguration.js
var imageProcessingConfiguration = __webpack_require__(32033);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Materials/uniformBuffer.js
var uniformBuffer = __webpack_require__(80935);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Collisions/pickingInfo.js
var pickingInfo = __webpack_require__(30311);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Actions/actionEvent.js
var actionEvent = __webpack_require__(61466);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/PostProcesses/postProcessManager.js
var postProcessManager = __webpack_require__(36096);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Rendering/renderingManager.js
var renderingManager = __webpack_require__(15808);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/sceneComponent.js
var sceneComponent = __webpack_require__(16945);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Misc/domManagement.js
var domManagement = __webpack_require__(18790);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Engines/engineStore.js
var engineStore = __webpack_require__(6315);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Misc/devTools.js
var devTools = __webpack_require__(45503);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Events/pointerEvents.js
var pointerEvents = __webpack_require__(66240);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Actions/abstractActionManager.js
var abstractActionManager = __webpack_require__(99451);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Events/keyboardEvents.js
var keyboardEvents = __webpack_require__(24146);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/DeviceInput/InputDevices/deviceEnums.js
var deviceEnums = __webpack_require__(24153);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/DeviceInput/InputDevices/deviceSourceManager.js + 4 modules
var deviceSourceManager = __webpack_require__(64100);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/import.helper.js
var import_helper = __webpack_require__(65877);
;// ./node_modules/@babylonjs/core/Inputs/scene.inputManager.js











/** @internal */
// eslint-disable-next-line @typescript-eslint/naming-convention
class _ClickInfo {
    constructor() {
        this._singleClick = false;
        this._doubleClick = false;
        this._hasSwiped = false;
        this._ignore = false;
    }
    get singleClick() {
        return this._singleClick;
    }
    get doubleClick() {
        return this._doubleClick;
    }
    get hasSwiped() {
        return this._hasSwiped;
    }
    get ignore() {
        return this._ignore;
    }
    set singleClick(b) {
        this._singleClick = b;
    }
    set doubleClick(b) {
        this._doubleClick = b;
    }
    set hasSwiped(b) {
        this._hasSwiped = b;
    }
    set ignore(b) {
        this._ignore = b;
    }
}
/**
 * Class used to manage all inputs for the scene.
 */
class InputManager {
    /**
     * Creates a new InputManager
     * @param scene - defines the hosting scene
     */
    constructor(scene) {
        /** This is a defensive check to not allow control attachment prior to an already active one. If already attached, previous control is unattached before attaching the new one. */
        this._alreadyAttached = false;
        this._meshPickProceed = false;
        this._currentPickResult = null;
        this._previousPickResult = null;
        this._activePointerIds = new Array();
        /** Tracks the count of used slots in _activePointerIds for perf */
        this._activePointerIdsCount = 0;
        this._doubleClickOccured = false;
        this._isSwiping = false;
        this._swipeButtonPressed = -1;
        this._skipPointerTap = false;
        this._isMultiTouchGesture = false;
        this._pointerX = 0;
        this._pointerY = 0;
        this._startingPointerPosition = new math_vector/* Vector2 */.I9(0, 0);
        this._previousStartingPointerPosition = new math_vector/* Vector2 */.I9(0, 0);
        this._startingPointerTime = 0;
        this._previousStartingPointerTime = 0;
        this._pointerCaptures = {};
        this._meshUnderPointerId = {};
        this._movePointerInfo = null;
        this._cameraObserverCount = 0;
        this._delayedClicks = [null, null, null, null, null];
        this._deviceSourceManager = null;
        this._scene = scene || engineStore/* EngineStore */.q.LastCreatedScene;
        if (!this._scene) {
            return;
        }
    }
    /**
     * Gets the mesh that is currently under the pointer
     * @returns Mesh that the pointer is pointer is hovering over
     */
    get meshUnderPointer() {
        if (this._movePointerInfo) {
            // Because _pointerOverMesh is populated as part of _pickMove, we need to force a pick to update it.
            // Calling _pickMove calls _setCursorAndPointerOverMesh which calls setPointerOverMesh
            this._movePointerInfo._generatePickInfo();
            // Once we have what we need, we can clear _movePointerInfo because we don't need it anymore
            this._movePointerInfo = null;
        }
        return this._pointerOverMesh;
    }
    /**
     * When using more than one pointer (for example in XR) you can get the mesh under the specific pointer
     * @param pointerId - the pointer id to use
     * @returns The mesh under this pointer id or null if not found
     */
    getMeshUnderPointerByPointerId(pointerId) {
        return this._meshUnderPointerId[pointerId] || null;
    }
    /**
     * Gets the pointer coordinates in 2D without any translation (ie. straight out of the pointer event)
     * @returns Vector with X/Y values directly from pointer event
     */
    get unTranslatedPointer() {
        return new math_vector/* Vector2 */.I9(this._unTranslatedPointerX, this._unTranslatedPointerY);
    }
    /**
     * Gets or sets the current on-screen X position of the pointer
     * @returns Translated X with respect to screen
     */
    get pointerX() {
        return this._pointerX;
    }
    set pointerX(value) {
        this._pointerX = value;
    }
    /**
     * Gets or sets the current on-screen Y position of the pointer
     * @returns Translated Y with respect to screen
     */
    get pointerY() {
        return this._pointerY;
    }
    set pointerY(value) {
        this._pointerY = value;
    }
    _updatePointerPosition(evt) {
        const canvasRect = this._scene.getEngine().getInputElementClientRect();
        if (!canvasRect) {
            return;
        }
        this._pointerX = evt.clientX - canvasRect.left;
        this._pointerY = evt.clientY - canvasRect.top;
        this._unTranslatedPointerX = this._pointerX;
        this._unTranslatedPointerY = this._pointerY;
    }
    _processPointerMove(pickResult, evt) {
        const scene = this._scene;
        const engine = scene.getEngine();
        const canvas = engine.getInputElement();
        if (canvas) {
            canvas.tabIndex = engine.canvasTabIndex;
            // Restore pointer
            if (!scene.doNotHandleCursors) {
                canvas.style.cursor = scene.defaultCursor;
            }
        }
        this._setCursorAndPointerOverMesh(pickResult, evt, scene);
        for (const step of scene._pointerMoveStage) {
            // If _pointerMoveState is defined, we have an active spriteManager and can't use Lazy Picking
            // Therefore, we need to force a pick to update the pickResult
            pickResult = pickResult || this._pickMove(evt);
            const isMeshPicked = pickResult?.pickedMesh ? true : false;
            pickResult = step.action(this._unTranslatedPointerX, this._unTranslatedPointerY, pickResult, isMeshPicked, canvas);
        }
        const type = evt.inputIndex >= deviceEnums/* PointerInput */.ST.MouseWheelX && evt.inputIndex <= deviceEnums/* PointerInput */.ST.MouseWheelZ ? pointerEvents/* PointerEventTypes */.Zp.POINTERWHEEL : pointerEvents/* PointerEventTypes */.Zp.POINTERMOVE;
        if (scene.onPointerMove) {
            // Because of lazy picking, we need to force a pick to update the pickResult
            pickResult = pickResult || this._pickMove(evt);
            scene.onPointerMove(evt, pickResult, type);
        }
        let pointerInfo;
        if (pickResult) {
            pointerInfo = new pointerEvents/* PointerInfo */.mx(type, evt, pickResult);
            this._setRayOnPointerInfo(pickResult, evt);
        }
        else {
            pointerInfo = new pointerEvents/* PointerInfo */.mx(type, evt, null, this);
            this._movePointerInfo = pointerInfo;
        }
        if (scene.onPointerObservable.hasObservers()) {
            scene.onPointerObservable.notifyObservers(pointerInfo, type);
        }
    }
    // Pointers handling
    /** @internal */
    _setRayOnPointerInfo(pickInfo, event) {
        const scene = this._scene;
        if (pickInfo && import_helper/* _ImportHelper */.h._IsPickingAvailable) {
            if (!pickInfo.ray) {
                pickInfo.ray = scene.createPickingRay(event.offsetX, event.offsetY, math_vector/* Matrix */.uq.Identity(), scene.activeCamera);
            }
        }
    }
    /** @internal */
    _addCameraPointerObserver(observer, mask) {
        this._cameraObserverCount++;
        return this._scene.onPointerObservable.add(observer, mask);
    }
    /** @internal */
    _removeCameraPointerObserver(observer) {
        this._cameraObserverCount--;
        return this._scene.onPointerObservable.remove(observer);
    }
    _checkForPicking() {
        return !!(this._scene.onPointerObservable.observers.length > this._cameraObserverCount || this._scene.onPointerPick);
    }
    _checkPrePointerObservable(pickResult, evt, type) {
        const scene = this._scene;
        const pi = new pointerEvents/* PointerInfoPre */.tT(type, evt, this._unTranslatedPointerX, this._unTranslatedPointerY);
        if (pickResult) {
            pi.originalPickingInfo = pickResult;
            pi.ray = pickResult.ray;
            if (evt.pointerType === "xr-near" && pickResult.originMesh) {
                pi.nearInteractionPickingInfo = pickResult;
            }
        }
        scene.onPrePointerObservable.notifyObservers(pi, type);
        if (pi.skipOnPointerObservable) {
            return true;
        }
        else {
            return false;
        }
    }
    /** @internal */
    _pickMove(evt) {
        const scene = this._scene;
        const pickResult = scene.pick(this._unTranslatedPointerX, this._unTranslatedPointerY, scene.pointerMovePredicate, scene.pointerMoveFastCheck, scene.cameraToUseForPointers, scene.pointerMoveTrianglePredicate);
        this._setCursorAndPointerOverMesh(pickResult, evt, scene);
        return pickResult;
    }
    _setCursorAndPointerOverMesh(pickResult, evt, scene) {
        const engine = scene.getEngine();
        const canvas = engine.getInputElement();
        if (pickResult?.pickedMesh) {
            this.setPointerOverMesh(pickResult.pickedMesh, evt.pointerId, pickResult, evt);
            if (!scene.doNotHandleCursors && canvas && this._pointerOverMesh) {
                const actionManager = this._pointerOverMesh._getActionManagerForTrigger();
                if (actionManager && actionManager.hasPointerTriggers) {
                    canvas.style.cursor = actionManager.hoverCursor || scene.hoverCursor;
                }
            }
        }
        else {
            this.setPointerOverMesh(null, evt.pointerId, pickResult, evt);
        }
    }
    /**
     * Use this method to simulate a pointer move on a mesh
     * The pickResult parameter can be obtained from a scene.pick or scene.pickWithRay
     * @param pickResult - pickingInfo of the object wished to simulate pointer event on
     * @param pointerEventInit - pointer event state to be used when simulating the pointer event (eg. pointer id for multitouch)
     */
    simulatePointerMove(pickResult, pointerEventInit) {
        const evt = new PointerEvent("pointermove", pointerEventInit);
        evt.inputIndex = deviceEnums/* PointerInput */.ST.Move;
        if (this._checkPrePointerObservable(pickResult, evt, pointerEvents/* PointerEventTypes */.Zp.POINTERMOVE)) {
            return;
        }
        this._processPointerMove(pickResult, evt);
    }
    /**
     * Use this method to simulate a pointer down on a mesh
     * The pickResult parameter can be obtained from a scene.pick or scene.pickWithRay
     * @param pickResult - pickingInfo of the object wished to simulate pointer event on
     * @param pointerEventInit - pointer event state to be used when simulating the pointer event (eg. pointer id for multitouch)
     */
    simulatePointerDown(pickResult, pointerEventInit) {
        const evt = new PointerEvent("pointerdown", pointerEventInit);
        evt.inputIndex = evt.button + 2;
        if (this._checkPrePointerObservable(pickResult, evt, pointerEvents/* PointerEventTypes */.Zp.POINTERDOWN)) {
            return;
        }
        this._processPointerDown(pickResult, evt);
    }
    _processPointerDown(pickResult, evt) {
        const scene = this._scene;
        if (pickResult?.pickedMesh) {
            this._pickedDownMesh = pickResult.pickedMesh;
            const actionManager = pickResult.pickedMesh._getActionManagerForTrigger();
            if (actionManager) {
                if (actionManager.hasPickTriggers) {
                    actionManager.processTrigger(5, actionEvent/* ActionEvent */.X.CreateNew(pickResult.pickedMesh, evt, pickResult));
                    switch (evt.button) {
                        case 0:
                            actionManager.processTrigger(2, actionEvent/* ActionEvent */.X.CreateNew(pickResult.pickedMesh, evt, pickResult));
                            break;
                        case 1:
                            actionManager.processTrigger(4, actionEvent/* ActionEvent */.X.CreateNew(pickResult.pickedMesh, evt, pickResult));
                            break;
                        case 2:
                            actionManager.processTrigger(3, actionEvent/* ActionEvent */.X.CreateNew(pickResult.pickedMesh, evt, pickResult));
                            break;
                    }
                }
                if (actionManager.hasSpecificTrigger(8)) {
                    window.setTimeout(() => {
                        const pickResult = scene.pick(this._unTranslatedPointerX, this._unTranslatedPointerY, (mesh) => ((mesh.isPickable &&
                            mesh.isVisible &&
                            mesh.isReady() &&
                            mesh.actionManager &&
                            mesh.actionManager.hasSpecificTrigger(8) &&
                            mesh === this._pickedDownMesh)), false, scene.cameraToUseForPointers);
                        if (pickResult?.pickedMesh && actionManager) {
                            if (this._activePointerIdsCount !== 0 && Date.now() - this._startingPointerTime > InputManager.LongPressDelay && !this._isPointerSwiping()) {
                                this._startingPointerTime = 0;
                                actionManager.processTrigger(8, actionEvent/* ActionEvent */.X.CreateNew(pickResult.pickedMesh, evt));
                            }
                        }
                    }, InputManager.LongPressDelay);
                }
            }
        }
        else {
            for (const step of scene._pointerDownStage) {
                pickResult = step.action(this._unTranslatedPointerX, this._unTranslatedPointerY, pickResult, evt, false);
            }
        }
        let pointerInfo;
        const type = pointerEvents/* PointerEventTypes */.Zp.POINTERDOWN;
        if (pickResult) {
            if (scene.onPointerDown) {
                scene.onPointerDown(evt, pickResult, type);
            }
            pointerInfo = new pointerEvents/* PointerInfo */.mx(type, evt, pickResult);
            this._setRayOnPointerInfo(pickResult, evt);
        }
        else {
            pointerInfo = new pointerEvents/* PointerInfo */.mx(type, evt, null, this);
        }
        if (scene.onPointerObservable.hasObservers()) {
            scene.onPointerObservable.notifyObservers(pointerInfo, type);
        }
    }
    /**
     * @internal
     * @internals Boolean if delta for pointer exceeds drag movement threshold
     */
    _isPointerSwiping() {
        return this._isSwiping;
    }
    /**
     * Use this method to simulate a pointer up on a mesh
     * The pickResult parameter can be obtained from a scene.pick or scene.pickWithRay
     * @param pickResult - pickingInfo of the object wished to simulate pointer event on
     * @param pointerEventInit - pointer event state to be used when simulating the pointer event (eg. pointer id for multitouch)
     * @param doubleTap - indicates that the pointer up event should be considered as part of a double click (false by default)
     */
    simulatePointerUp(pickResult, pointerEventInit, doubleTap) {
        const evt = new PointerEvent("pointerup", pointerEventInit);
        evt.inputIndex = deviceEnums/* PointerInput */.ST.Move;
        const clickInfo = new _ClickInfo();
        if (doubleTap) {
            clickInfo.doubleClick = true;
        }
        else {
            clickInfo.singleClick = true;
        }
        if (this._checkPrePointerObservable(pickResult, evt, pointerEvents/* PointerEventTypes */.Zp.POINTERUP)) {
            return;
        }
        this._processPointerUp(pickResult, evt, clickInfo);
    }
    _processPointerUp(pickResult, evt, clickInfo) {
        const scene = this._scene;
        if (pickResult?.pickedMesh) {
            this._pickedUpMesh = pickResult.pickedMesh;
            if (this._pickedDownMesh === this._pickedUpMesh) {
                if (scene.onPointerPick) {
                    scene.onPointerPick(evt, pickResult);
                }
                if (clickInfo.singleClick && !clickInfo.ignore && scene.onPointerObservable.observers.length > this._cameraObserverCount) {
                    const type = pointerEvents/* PointerEventTypes */.Zp.POINTERPICK;
                    const pi = new pointerEvents/* PointerInfo */.mx(type, evt, pickResult);
                    this._setRayOnPointerInfo(pickResult, evt);
                    scene.onPointerObservable.notifyObservers(pi, type);
                }
            }
            const actionManager = pickResult.pickedMesh._getActionManagerForTrigger();
            if (actionManager && !clickInfo.ignore) {
                actionManager.processTrigger(7, actionEvent/* ActionEvent */.X.CreateNew(pickResult.pickedMesh, evt, pickResult));
                if (!clickInfo.hasSwiped && clickInfo.singleClick) {
                    actionManager.processTrigger(1, actionEvent/* ActionEvent */.X.CreateNew(pickResult.pickedMesh, evt, pickResult));
                }
                const doubleClickActionManager = pickResult.pickedMesh._getActionManagerForTrigger(6);
                if (clickInfo.doubleClick && doubleClickActionManager) {
                    doubleClickActionManager.processTrigger(6, actionEvent/* ActionEvent */.X.CreateNew(pickResult.pickedMesh, evt, pickResult));
                }
            }
        }
        else {
            if (!clickInfo.ignore) {
                for (const step of scene._pointerUpStage) {
                    pickResult = step.action(this._unTranslatedPointerX, this._unTranslatedPointerY, pickResult, evt, clickInfo.doubleClick);
                }
            }
        }
        if (this._pickedDownMesh && this._pickedDownMesh !== this._pickedUpMesh) {
            const pickedDownActionManager = this._pickedDownMesh._getActionManagerForTrigger(16);
            if (pickedDownActionManager) {
                pickedDownActionManager.processTrigger(16, actionEvent/* ActionEvent */.X.CreateNew(this._pickedDownMesh, evt));
            }
        }
        if (!clickInfo.ignore) {
            const pi = new pointerEvents/* PointerInfo */.mx(pointerEvents/* PointerEventTypes */.Zp.POINTERUP, evt, pickResult);
            // Set ray on picking info.  Note that this info will also be reused for the tap notification.
            this._setRayOnPointerInfo(pickResult, evt);
            scene.onPointerObservable.notifyObservers(pi, pointerEvents/* PointerEventTypes */.Zp.POINTERUP);
            if (scene.onPointerUp) {
                scene.onPointerUp(evt, pickResult, pointerEvents/* PointerEventTypes */.Zp.POINTERUP);
            }
            if (!clickInfo.hasSwiped && !this._skipPointerTap && !this._isMultiTouchGesture) {
                let type = 0;
                if (clickInfo.singleClick) {
                    type = pointerEvents/* PointerEventTypes */.Zp.POINTERTAP;
                }
                else if (clickInfo.doubleClick) {
                    type = pointerEvents/* PointerEventTypes */.Zp.POINTERDOUBLETAP;
                }
                if (type) {
                    const pi = new pointerEvents/* PointerInfo */.mx(type, evt, pickResult);
                    if (scene.onPointerObservable.hasObservers() && scene.onPointerObservable.hasSpecificMask(type)) {
                        scene.onPointerObservable.notifyObservers(pi, type);
                    }
                }
            }
        }
    }
    /**
     * Gets a boolean indicating if the current pointer event is captured (meaning that the scene has already handled the pointer down)
     * @param pointerId - defines the pointer id to use in a multi-touch scenario (0 by default)
     * @returns true if the pointer was captured
     */
    isPointerCaptured(pointerId = 0) {
        return this._pointerCaptures[pointerId];
    }
    /**
     * Attach events to the canvas (To handle actionManagers triggers and raise onPointerMove, onPointerDown and onPointerUp
     * @param attachUp - defines if you want to attach events to pointerup
     * @param attachDown - defines if you want to attach events to pointerdown
     * @param attachMove - defines if you want to attach events to pointermove
     * @param elementToAttachTo - defines the target DOM element to attach to (will use the canvas by default)
     */
    attachControl(attachUp = true, attachDown = true, attachMove = true, elementToAttachTo = null) {
        const scene = this._scene;
        const engine = scene.getEngine();
        if (!elementToAttachTo) {
            elementToAttachTo = engine.getInputElement();
        }
        if (this._alreadyAttached) {
            this.detachControl();
        }
        if (elementToAttachTo) {
            this._alreadyAttachedTo = elementToAttachTo;
        }
        this._deviceSourceManager = new deviceSourceManager/* DeviceSourceManager */.Z(engine);
        // Because this is only called from _initClickEvent, which is called in _onPointerUp, we'll use the pointerUpPredicate for the pick call
        this._initActionManager = (act) => {
            if (!this._meshPickProceed) {
                const pickResult = scene.skipPointerUpPicking || (scene._registeredActions === 0 && !this._checkForPicking() && !scene.onPointerUp)
                    ? null
                    : scene.pick(this._unTranslatedPointerX, this._unTranslatedPointerY, scene.pointerUpPredicate, scene.pointerUpFastCheck, scene.cameraToUseForPointers, scene.pointerUpTrianglePredicate);
                this._currentPickResult = pickResult;
                if (pickResult) {
                    act = pickResult.hit && pickResult.pickedMesh ? pickResult.pickedMesh._getActionManagerForTrigger() : null;
                }
                this._meshPickProceed = true;
            }
            return act;
        };
        this._delayedSimpleClick = (btn, clickInfo, cb) => {
            // double click delay is over and that no double click has been raised since, or the 2 consecutive keys pressed are different
            if ((Date.now() - this._previousStartingPointerTime > InputManager.DoubleClickDelay && !this._doubleClickOccured) || btn !== this._previousButtonPressed) {
                this._doubleClickOccured = false;
                clickInfo.singleClick = true;
                clickInfo.ignore = false;
                // If we have a delayed click, we need to resolve the TAP event
                if (this._delayedClicks[btn]) {
                    const evt = this._delayedClicks[btn].evt;
                    const type = pointerEvents/* PointerEventTypes */.Zp.POINTERTAP;
                    const pi = new pointerEvents/* PointerInfo */.mx(type, evt, this._currentPickResult);
                    if (scene.onPointerObservable.hasObservers() && scene.onPointerObservable.hasSpecificMask(type)) {
                        scene.onPointerObservable.notifyObservers(pi, type);
                    }
                    // Clear the delayed click
                    this._delayedClicks[btn] = null;
                }
            }
        };
        this._initClickEvent = (obs1, obs2, evt, cb) => {
            const clickInfo = new _ClickInfo();
            this._currentPickResult = null;
            let act = null;
            let checkPicking = obs1.hasSpecificMask(pointerEvents/* PointerEventTypes */.Zp.POINTERPICK) ||
                obs2.hasSpecificMask(pointerEvents/* PointerEventTypes */.Zp.POINTERPICK) ||
                obs1.hasSpecificMask(pointerEvents/* PointerEventTypes */.Zp.POINTERTAP) ||
                obs2.hasSpecificMask(pointerEvents/* PointerEventTypes */.Zp.POINTERTAP) ||
                obs1.hasSpecificMask(pointerEvents/* PointerEventTypes */.Zp.POINTERDOUBLETAP) ||
                obs2.hasSpecificMask(pointerEvents/* PointerEventTypes */.Zp.POINTERDOUBLETAP);
            if (!checkPicking && abstractActionManager/* AbstractActionManager */.G) {
                act = this._initActionManager(act, clickInfo);
                if (act) {
                    checkPicking = act.hasPickTriggers;
                }
            }
            let needToIgnoreNext = false;
            // Never pick if this is a multi-touch gesture (e.g. pinch)
            checkPicking = checkPicking && !this._isMultiTouchGesture;
            if (checkPicking) {
                const btn = evt.button;
                clickInfo.hasSwiped = this._isPointerSwiping();
                if (!clickInfo.hasSwiped) {
                    let checkSingleClickImmediately = !InputManager.ExclusiveDoubleClickMode;
                    if (!checkSingleClickImmediately) {
                        checkSingleClickImmediately = !obs1.hasSpecificMask(pointerEvents/* PointerEventTypes */.Zp.POINTERDOUBLETAP) && !obs2.hasSpecificMask(pointerEvents/* PointerEventTypes */.Zp.POINTERDOUBLETAP);
                        if (checkSingleClickImmediately && !abstractActionManager/* AbstractActionManager */.G.HasSpecificTrigger(6)) {
                            act = this._initActionManager(act, clickInfo);
                            if (act) {
                                checkSingleClickImmediately = !act.hasSpecificTrigger(6);
                            }
                        }
                    }
                    if (checkSingleClickImmediately) {
                        // single click detected if double click delay is over or two different successive keys pressed without exclusive double click or no double click required
                        if (Date.now() - this._previousStartingPointerTime > InputManager.DoubleClickDelay || btn !== this._previousButtonPressed) {
                            clickInfo.singleClick = true;
                            cb(clickInfo, this._currentPickResult);
                            needToIgnoreNext = true;
                        }
                    }
                    // at least one double click is required to be check and exclusive double click is enabled
                    else {
                        // Queue up a delayed click, just in case this isn't a double click
                        // It should be noted that while this delayed event happens
                        // because of user input, it shouldn't be considered as a direct,
                        // timing-dependent result of that input.  It's meant to just fire the TAP event
                        const delayedClick = {
                            evt: evt,
                            clickInfo: clickInfo,
                            timeoutId: window.setTimeout(this._delayedSimpleClick.bind(this, btn, clickInfo, cb), InputManager.DoubleClickDelay),
                        };
                        this._delayedClicks[btn] = delayedClick;
                    }
                    let checkDoubleClick = obs1.hasSpecificMask(pointerEvents/* PointerEventTypes */.Zp.POINTERDOUBLETAP) || obs2.hasSpecificMask(pointerEvents/* PointerEventTypes */.Zp.POINTERDOUBLETAP);
                    if (!checkDoubleClick && abstractActionManager/* AbstractActionManager */.G.HasSpecificTrigger(6)) {
                        act = this._initActionManager(act, clickInfo);
                        if (act) {
                            checkDoubleClick = act.hasSpecificTrigger(6);
                        }
                    }
                    if (checkDoubleClick) {
                        // two successive keys pressed are equal, double click delay is not over and double click has not just occurred
                        if (btn === this._previousButtonPressed && Date.now() - this._previousStartingPointerTime < InputManager.DoubleClickDelay && !this._doubleClickOccured) {
                            // pointer has not moved for 2 clicks, it's a double click
                            if (!clickInfo.hasSwiped && !this._isPointerSwiping()) {
                                this._previousStartingPointerTime = 0;
                                this._doubleClickOccured = true;
                                clickInfo.doubleClick = true;
                                clickInfo.ignore = false;
                                // If we have a pending click, we need to cancel it
                                if (InputManager.ExclusiveDoubleClickMode && this._delayedClicks[btn]) {
                                    clearTimeout(this._delayedClicks[btn]?.timeoutId);
                                    this._delayedClicks[btn] = null;
                                }
                                cb(clickInfo, this._currentPickResult);
                            }
                            // if the two successive clicks are too far, it's just two simple clicks
                            else {
                                this._doubleClickOccured = false;
                                this._previousStartingPointerTime = this._startingPointerTime;
                                this._previousStartingPointerPosition.x = this._startingPointerPosition.x;
                                this._previousStartingPointerPosition.y = this._startingPointerPosition.y;
                                this._previousButtonPressed = btn;
                                if (InputManager.ExclusiveDoubleClickMode) {
                                    // If we have a delayed click, we need to cancel it
                                    if (this._delayedClicks[btn]) {
                                        clearTimeout(this._delayedClicks[btn]?.timeoutId);
                                        this._delayedClicks[btn] = null;
                                    }
                                    cb(clickInfo, this._previousPickResult);
                                }
                                else {
                                    cb(clickInfo, this._currentPickResult);
                                }
                            }
                            needToIgnoreNext = true;
                        }
                        // just the first click of the double has been raised
                        else {
                            this._doubleClickOccured = false;
                            this._previousStartingPointerTime = this._startingPointerTime;
                            this._previousStartingPointerPosition.x = this._startingPointerPosition.x;
                            this._previousStartingPointerPosition.y = this._startingPointerPosition.y;
                            this._previousButtonPressed = btn;
                        }
                    }
                }
            }
            // Even if ExclusiveDoubleClickMode is true, we need to always handle
            // up events at time of execution, unless we're explicitly ignoring them.
            if (!needToIgnoreNext) {
                cb(clickInfo, this._currentPickResult);
            }
        };
        this._onPointerMove = (evt) => {
            this._updatePointerPosition(evt);
            // Check if pointer leaves DragMovementThreshold range to determine if swipe is occurring
            if (!this._isSwiping && this._swipeButtonPressed !== -1) {
                this._isSwiping =
                    Math.abs(this._startingPointerPosition.x - this._pointerX) > InputManager.DragMovementThreshold ||
                        Math.abs(this._startingPointerPosition.y - this._pointerY) > InputManager.DragMovementThreshold;
            }
            // Because there's a race condition between pointermove and pointerlockchange events, we need to
            // verify that the pointer is still locked after each pointermove event.
            if (engine.isPointerLock) {
                engine._verifyPointerLock();
            }
            // PreObservable support
            if (this._checkPrePointerObservable(null, evt, evt.inputIndex >= deviceEnums/* PointerInput */.ST.MouseWheelX && evt.inputIndex <= deviceEnums/* PointerInput */.ST.MouseWheelZ ? pointerEvents/* PointerEventTypes */.Zp.POINTERWHEEL : pointerEvents/* PointerEventTypes */.Zp.POINTERMOVE)) {
                return;
            }
            if (!scene.cameraToUseForPointers && !scene.activeCamera) {
                return;
            }
            if (scene.skipPointerMovePicking) {
                this._processPointerMove(new pickingInfo/* PickingInfo */.G(), evt);
                return;
            }
            if (!scene.pointerMovePredicate) {
                scene.pointerMovePredicate = (mesh) => mesh.isPickable &&
                    mesh.isVisible &&
                    mesh.isReady() &&
                    mesh.isEnabled() &&
                    (mesh.enablePointerMoveEvents || scene.constantlyUpdateMeshUnderPointer || mesh._getActionManagerForTrigger() !== null) &&
                    (!scene.cameraToUseForPointers || (scene.cameraToUseForPointers.layerMask & mesh.layerMask) !== 0);
            }
            const pickResult = scene._registeredActions > 0 || scene.constantlyUpdateMeshUnderPointer ? this._pickMove(evt) : null;
            this._processPointerMove(pickResult, evt);
        };
        this._onPointerDown = (evt) => {
            const freeIndex = this._activePointerIds.indexOf(-1);
            if (freeIndex === -1) {
                this._activePointerIds.push(evt.pointerId);
            }
            else {
                this._activePointerIds[freeIndex] = evt.pointerId;
            }
            this._activePointerIdsCount++;
            this._pickedDownMesh = null;
            this._meshPickProceed = false;
            // If ExclusiveDoubleClickMode is true, we need to resolve any pending delayed clicks
            if (InputManager.ExclusiveDoubleClickMode) {
                for (let i = 0; i < this._delayedClicks.length; i++) {
                    if (this._delayedClicks[i]) {
                        // If the button that was pressed is the same as the one that was released,
                        // just clear the timer.  This will be resolved in the up event.
                        if (evt.button === i) {
                            clearTimeout(this._delayedClicks[i]?.timeoutId);
                        }
                        else {
                            // Otherwise, we need to resolve the click
                            const clickInfo = this._delayedClicks[i].clickInfo;
                            this._doubleClickOccured = false;
                            clickInfo.singleClick = true;
                            clickInfo.ignore = false;
                            const prevEvt = this._delayedClicks[i].evt;
                            const type = pointerEvents/* PointerEventTypes */.Zp.POINTERTAP;
                            const pi = new pointerEvents/* PointerInfo */.mx(type, prevEvt, this._currentPickResult);
                            if (scene.onPointerObservable.hasObservers() && scene.onPointerObservable.hasSpecificMask(type)) {
                                scene.onPointerObservable.notifyObservers(pi, type);
                            }
                            // Clear the delayed click
                            this._delayedClicks[i] = null;
                        }
                    }
                }
            }
            this._updatePointerPosition(evt);
            if (this._swipeButtonPressed === -1) {
                this._swipeButtonPressed = evt.button;
            }
            if (scene.preventDefaultOnPointerDown && elementToAttachTo) {
                evt.preventDefault();
                elementToAttachTo.focus();
            }
            this._startingPointerPosition.x = this._pointerX;
            this._startingPointerPosition.y = this._pointerY;
            this._startingPointerTime = Date.now();
            // PreObservable support
            if (this._checkPrePointerObservable(null, evt, pointerEvents/* PointerEventTypes */.Zp.POINTERDOWN)) {
                return;
            }
            if (!scene.cameraToUseForPointers && !scene.activeCamera) {
                return;
            }
            this._pointerCaptures[evt.pointerId] = true;
            if (!scene.pointerDownPredicate) {
                scene.pointerDownPredicate = (mesh) => {
                    return (mesh.isPickable &&
                        mesh.isVisible &&
                        mesh.isReady() &&
                        mesh.isEnabled() &&
                        (!scene.cameraToUseForPointers || (scene.cameraToUseForPointers.layerMask & mesh.layerMask) !== 0));
                };
            }
            // Meshes
            this._pickedDownMesh = null;
            let pickResult;
            if (scene.skipPointerDownPicking || (scene._registeredActions === 0 && !this._checkForPicking() && !scene.onPointerDown)) {
                pickResult = new pickingInfo/* PickingInfo */.G();
            }
            else {
                pickResult = scene.pick(this._unTranslatedPointerX, this._unTranslatedPointerY, scene.pointerDownPredicate, scene.pointerDownFastCheck, scene.cameraToUseForPointers, scene.pointerDownTrianglePredicate);
            }
            this._processPointerDown(pickResult, evt);
        };
        this._onPointerUp = (evt) => {
            const pointerIdIndex = this._activePointerIds.indexOf(evt.pointerId);
            if (pointerIdIndex === -1) {
                // We are attaching the pointer up to windows because of a bug in FF
                // If this pointerId is not paired with an _onPointerDown call, ignore it
                return;
            }
            this._activePointerIds[pointerIdIndex] = -1;
            this._activePointerIdsCount--;
            this._pickedUpMesh = null;
            this._meshPickProceed = false;
            this._updatePointerPosition(evt);
            if (scene.preventDefaultOnPointerUp && elementToAttachTo) {
                evt.preventDefault();
                elementToAttachTo.focus();
            }
            this._initClickEvent(scene.onPrePointerObservable, scene.onPointerObservable, evt, (clickInfo, pickResult) => {
                // PreObservable support
                if (scene.onPrePointerObservable.hasObservers()) {
                    this._skipPointerTap = false;
                    if (!clickInfo.ignore) {
                        if (this._checkPrePointerObservable(null, evt, pointerEvents/* PointerEventTypes */.Zp.POINTERUP)) {
                            // If we're skipping the next observable, we need to reset the swipe state before returning
                            if (this._swipeButtonPressed === evt.button) {
                                this._isSwiping = false;
                                this._swipeButtonPressed = -1;
                            }
                            // If we're going to skip the POINTERUP, we need to reset the pointer capture
                            if (evt.buttons === 0) {
                                this._pointerCaptures[evt.pointerId] = false;
                            }
                            return;
                        }
                        if (!clickInfo.hasSwiped) {
                            if (clickInfo.singleClick && scene.onPrePointerObservable.hasSpecificMask(pointerEvents/* PointerEventTypes */.Zp.POINTERTAP)) {
                                if (this._checkPrePointerObservable(null, evt, pointerEvents/* PointerEventTypes */.Zp.POINTERTAP)) {
                                    this._skipPointerTap = true;
                                }
                            }
                            if (clickInfo.doubleClick && scene.onPrePointerObservable.hasSpecificMask(pointerEvents/* PointerEventTypes */.Zp.POINTERDOUBLETAP)) {
                                if (this._checkPrePointerObservable(null, evt, pointerEvents/* PointerEventTypes */.Zp.POINTERDOUBLETAP)) {
                                    this._skipPointerTap = true;
                                }
                            }
                        }
                    }
                }
                // There should be a pointer captured at this point so if there isn't we should reset and return
                if (!this._pointerCaptures[evt.pointerId]) {
                    if (this._swipeButtonPressed === evt.button) {
                        this._isSwiping = false;
                        this._swipeButtonPressed = -1;
                    }
                    return;
                }
                // Only release capture if all buttons are released
                if (evt.buttons === 0) {
                    this._pointerCaptures[evt.pointerId] = false;
                }
                if (!scene.cameraToUseForPointers && !scene.activeCamera) {
                    return;
                }
                if (!scene.pointerUpPredicate) {
                    scene.pointerUpPredicate = (mesh) => {
                        return (mesh.isPickable &&
                            mesh.isVisible &&
                            mesh.isReady() &&
                            mesh.isEnabled() &&
                            (!scene.cameraToUseForPointers || (scene.cameraToUseForPointers.layerMask & mesh.layerMask) !== 0));
                    };
                }
                // Meshes
                if (!this._meshPickProceed && ((abstractActionManager/* AbstractActionManager */.G && abstractActionManager/* AbstractActionManager */.G.HasTriggers) || this._checkForPicking() || scene.onPointerUp)) {
                    this._initActionManager(null, clickInfo);
                }
                if (!pickResult) {
                    pickResult = this._currentPickResult;
                }
                this._processPointerUp(pickResult, evt, clickInfo);
                this._previousPickResult = this._currentPickResult;
                if (this._swipeButtonPressed === evt.button) {
                    this._isSwiping = false;
                    this._swipeButtonPressed = -1;
                }
            });
        };
        this._onKeyDown = (evt) => {
            const type = keyboardEvents/* KeyboardEventTypes */.TB.KEYDOWN;
            if (scene.onPreKeyboardObservable.hasObservers()) {
                const pi = new keyboardEvents/* KeyboardInfoPre */.Bu(type, evt);
                scene.onPreKeyboardObservable.notifyObservers(pi, type);
                if (pi.skipOnKeyboardObservable) {
                    return;
                }
            }
            if (scene.onKeyboardObservable.hasObservers()) {
                const pi = new keyboardEvents/* KeyboardInfo */.W0(type, evt);
                scene.onKeyboardObservable.notifyObservers(pi, type);
            }
            if (scene.actionManager) {
                scene.actionManager.processTrigger(14, actionEvent/* ActionEvent */.X.CreateNewFromScene(scene, evt));
            }
        };
        this._onKeyUp = (evt) => {
            const type = keyboardEvents/* KeyboardEventTypes */.TB.KEYUP;
            if (scene.onPreKeyboardObservable.hasObservers()) {
                const pi = new keyboardEvents/* KeyboardInfoPre */.Bu(type, evt);
                scene.onPreKeyboardObservable.notifyObservers(pi, type);
                if (pi.skipOnKeyboardObservable) {
                    return;
                }
            }
            if (scene.onKeyboardObservable.hasObservers()) {
                const pi = new keyboardEvents/* KeyboardInfo */.W0(type, evt);
                scene.onKeyboardObservable.notifyObservers(pi, type);
            }
            if (scene.actionManager) {
                scene.actionManager.processTrigger(15, actionEvent/* ActionEvent */.X.CreateNewFromScene(scene, evt));
            }
        };
        // If a device connects that we can handle, wire up the observable
        this._deviceSourceManager.onDeviceConnectedObservable.add((deviceSource) => {
            if (deviceSource.deviceType === deviceEnums/* DeviceType */.bq.Mouse) {
                deviceSource.onInputChangedObservable.add((eventData) => {
                    this._originMouseEvent = eventData;
                    if (eventData.inputIndex === deviceEnums/* PointerInput */.ST.LeftClick ||
                        eventData.inputIndex === deviceEnums/* PointerInput */.ST.MiddleClick ||
                        eventData.inputIndex === deviceEnums/* PointerInput */.ST.RightClick ||
                        eventData.inputIndex === deviceEnums/* PointerInput */.ST.BrowserBack ||
                        eventData.inputIndex === deviceEnums/* PointerInput */.ST.BrowserForward) {
                        if (attachDown && deviceSource.getInput(eventData.inputIndex) === 1) {
                            this._onPointerDown(eventData);
                        }
                        else if (attachUp && deviceSource.getInput(eventData.inputIndex) === 0) {
                            this._onPointerUp(eventData);
                        }
                    }
                    else if (attachMove) {
                        if (eventData.inputIndex === deviceEnums/* PointerInput */.ST.Move) {
                            this._onPointerMove(eventData);
                        }
                        else if (eventData.inputIndex === deviceEnums/* PointerInput */.ST.MouseWheelX ||
                            eventData.inputIndex === deviceEnums/* PointerInput */.ST.MouseWheelY ||
                            eventData.inputIndex === deviceEnums/* PointerInput */.ST.MouseWheelZ) {
                            this._onPointerMove(eventData);
                        }
                    }
                });
            }
            else if (deviceSource.deviceType === deviceEnums/* DeviceType */.bq.Touch) {
                deviceSource.onInputChangedObservable.add((eventData) => {
                    if (eventData.inputIndex === deviceEnums/* PointerInput */.ST.LeftClick) {
                        if (attachDown && deviceSource.getInput(eventData.inputIndex) === 1) {
                            this._onPointerDown(eventData);
                            if (this._activePointerIdsCount > 1) {
                                this._isMultiTouchGesture = true;
                            }
                        }
                        else if (attachUp && deviceSource.getInput(eventData.inputIndex) === 0) {
                            this._onPointerUp(eventData);
                            if (this._activePointerIdsCount === 0) {
                                this._isMultiTouchGesture = false;
                            }
                        }
                    }
                    if (attachMove && eventData.inputIndex === deviceEnums/* PointerInput */.ST.Move) {
                        this._onPointerMove(eventData);
                    }
                });
            }
            else if (deviceSource.deviceType === deviceEnums/* DeviceType */.bq.Keyboard) {
                deviceSource.onInputChangedObservable.add((eventData) => {
                    if (eventData.type === "keydown") {
                        this._onKeyDown(eventData);
                    }
                    else if (eventData.type === "keyup") {
                        this._onKeyUp(eventData);
                    }
                });
            }
        });
        this._alreadyAttached = true;
    }
    /**
     * Detaches all event handlers
     */
    detachControl() {
        if (this._alreadyAttached) {
            this._deviceSourceManager.dispose();
            this._deviceSourceManager = null;
            // Cursor
            if (this._alreadyAttachedTo && !this._scene.doNotHandleCursors) {
                this._alreadyAttachedTo.style.cursor = this._scene.defaultCursor;
            }
            this._alreadyAttached = false;
            this._alreadyAttachedTo = null;
        }
    }
    /**
     * Set the value of meshUnderPointer for a given pointerId
     * @param mesh - defines the mesh to use
     * @param pointerId - optional pointer id when using more than one pointer. Defaults to 0
     * @param pickResult - optional pickingInfo data used to find mesh
     * @param evt - optional pointer event
     */
    setPointerOverMesh(mesh, pointerId = 0, pickResult, evt) {
        if (this._meshUnderPointerId[pointerId] === mesh && (!mesh || !mesh._internalAbstractMeshDataInfo._pointerOverDisableMeshTesting)) {
            return;
        }
        const underPointerMesh = this._meshUnderPointerId[pointerId];
        let actionManager;
        if (underPointerMesh) {
            actionManager = underPointerMesh._getActionManagerForTrigger(10);
            if (actionManager) {
                actionManager.processTrigger(10, new actionEvent/* ActionEvent */.X(underPointerMesh, this._pointerX, this._pointerY, mesh, evt, { pointerId }));
            }
        }
        if (mesh) {
            this._meshUnderPointerId[pointerId] = mesh;
            this._pointerOverMesh = mesh;
            actionManager = mesh._getActionManagerForTrigger(9);
            if (actionManager) {
                actionManager.processTrigger(9, new actionEvent/* ActionEvent */.X(mesh, this._pointerX, this._pointerY, mesh, evt, { pointerId, pickResult }));
            }
        }
        else {
            delete this._meshUnderPointerId[pointerId];
            this._pointerOverMesh = null;
        }
        // if we reached this point, meshUnderPointerId has been updated. We need to notify observers that are registered.
        if (this._scene.onMeshUnderPointerUpdatedObservable.hasObservers()) {
            this._scene.onMeshUnderPointerUpdatedObservable.notifyObservers({
                mesh,
                pointerId,
            });
        }
    }
    /**
     * Gets the mesh under the pointer
     * @returns a Mesh or null if no mesh is under the pointer
     */
    getPointerOverMesh() {
        return this.meshUnderPointer;
    }
    /**
     * @param mesh - Mesh to invalidate
     * @internal
     */
    _invalidateMesh(mesh) {
        if (this._pointerOverMesh === mesh) {
            this._pointerOverMesh = null;
        }
        if (this._pickedDownMesh === mesh) {
            this._pickedDownMesh = null;
        }
        if (this._pickedUpMesh === mesh) {
            this._pickedUpMesh = null;
        }
        for (const pointerId in this._meshUnderPointerId) {
            if (this._meshUnderPointerId[pointerId] === mesh) {
                delete this._meshUnderPointerId[pointerId];
            }
        }
    }
}
/** The distance in pixel that you have to move to prevent some events */
InputManager.DragMovementThreshold = 10; // in pixels
/** Time in milliseconds to wait to raise long press events if button is still pressed */
InputManager.LongPressDelay = 500; // in milliseconds
/** Time in milliseconds with two consecutive clicks will be considered as a double click */
InputManager.DoubleClickDelay = 300; // in milliseconds
/**
 * This flag will modify the behavior so that, when true, a click will happen if and only if
 * another click DOES NOT happen within the DoubleClickDelay time frame.  If another click does
 * happen within that time frame, the first click will not fire an event and and a double click will occur.
 */
InputManager.ExclusiveDoubleClickMode = false;
//# sourceMappingURL=scene.inputManager.js.map
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Misc/perfCounter.js
var perfCounter = __webpack_require__(24296);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Maths/math.color.js
var math_color = __webpack_require__(26041);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Maths/math.frustum.js
var math_frustum = __webpack_require__(22572);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Misc/uniqueIdGenerator.js
var uniqueIdGenerator = __webpack_require__(82678);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Misc/fileTools.js
var fileTools = __webpack_require__(8532);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Lights/lightConstants.js
var lightConstants = __webpack_require__(75515);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Misc/arrayTools.js
var arrayTools = __webpack_require__(27309);
;// ./node_modules/@babylonjs/core/Inputs/pointerPickingConfiguration.js
/**
 * Class used to store configuration data associated with pointer picking
 */
class PointerPickingConfiguration {
    constructor() {
        /**
         * Gets or sets a predicate used to select candidate meshes for a pointer down event
         */
        this.pointerDownFastCheck = false;
        /**
         * Gets or sets a predicate used to select candidate meshes for a pointer up event
         */
        this.pointerUpFastCheck = false;
        /**
         * Gets or sets a predicate used to select candidate meshes for a pointer move event
         */
        this.pointerMoveFastCheck = false;
        /**
         * Gets or sets a boolean indicating if the user want to entirely skip the picking phase when a pointer move event occurs.
         */
        this.skipPointerMovePicking = false;
        /**
         * Gets or sets a boolean indicating if the user want to entirely skip the picking phase when a pointer down event occurs.
         */
        this.skipPointerDownPicking = false;
        /**
         * Gets or sets a boolean indicating if the user want to entirely skip the picking phase when a pointer up event occurs.  Off by default.
         */
        this.skipPointerUpPicking = false;
    }
}
//# sourceMappingURL=pointerPickingConfiguration.js.map
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Misc/logger.js
var logger = __webpack_require__(51137);
// EXTERNAL MODULE: ./node_modules/@babylonjs/core/Misc/typeStore.js
var typeStore = __webpack_require__(56552);
;// ./node_modules/@babylonjs/core/scene.js





























/**
 * Define how the scene should favor performance over ease of use
 */
var ScenePerformancePriority;
(function (ScenePerformancePriority) {
    /** Default mode. No change. Performance will be treated as less important than backward compatibility */
    ScenePerformancePriority[ScenePerformancePriority["BackwardCompatible"] = 0] = "BackwardCompatible";
    /** Some performance options will be turned on trying to strike a balance between perf and ease of use */
    ScenePerformancePriority[ScenePerformancePriority["Intermediate"] = 1] = "Intermediate";
    /** Performance will be top priority */
    ScenePerformancePriority[ScenePerformancePriority["Aggressive"] = 2] = "Aggressive";
})(ScenePerformancePriority || (ScenePerformancePriority = {}));
/**
 * Represents a scene to be rendered by the engine.
 * @see https://doc.babylonjs.com/features/featuresDeepDive/scene
 */
class Scene {
    // eslint-disable-next-line jsdoc/require-returns-check
    /**
     * Factory used to create the default material.
     * @param scene The scene to create the material for
     * @returns The default material
     */
    static DefaultMaterialFactory(scene) {
        throw (0,devTools/* _WarnImport */.n)("StandardMaterial");
    }
    // eslint-disable-next-line jsdoc/require-returns-check
    /**
     * Factory used to create the a collision coordinator.
     * @returns The collision coordinator
     */
    static CollisionCoordinatorFactory() {
        throw (0,devTools/* _WarnImport */.n)("DefaultCollisionCoordinator");
    }
    /**
     * Defines the color used to clear the render buffer (Default is (0.2, 0.2, 0.3, 1.0))
     */
    get clearColor() {
        return this._clearColor;
    }
    set clearColor(value) {
        if (value !== this._clearColor) {
            this._clearColor = value;
            this.onClearColorChangedObservable.notifyObservers(this._clearColor);
        }
    }
    /**
     * Default image processing configuration used either in the rendering
     * Forward main pass or through the imageProcessingPostProcess if present.
     * As in the majority of the scene they are the same (exception for multi camera),
     * this is easier to reference from here than from all the materials and post process.
     *
     * No setter as we it is a shared configuration, you can set the values instead.
     */
    get imageProcessingConfiguration() {
        return this._imageProcessingConfiguration;
    }
    /**
     * Gets or sets a value indicating how to treat performance relatively to ease of use and backward compatibility
     */
    get performancePriority() {
        return this._performancePriority;
    }
    set performancePriority(value) {
        if (value === this._performancePriority) {
            return;
        }
        this._performancePriority = value;
        switch (value) {
            case 0 /* ScenePerformancePriority.BackwardCompatible */:
                this.skipFrustumClipping = false;
                this._renderingManager.maintainStateBetweenFrames = false;
                this.skipPointerMovePicking = false;
                this.autoClear = true;
                break;
            case 1 /* ScenePerformancePriority.Intermediate */:
                this.skipFrustumClipping = false;
                this._renderingManager.maintainStateBetweenFrames = false;
                this.skipPointerMovePicking = true;
                this.autoClear = false;
                break;
            case 2 /* ScenePerformancePriority.Aggressive */:
                this.skipFrustumClipping = true;
                this._renderingManager.maintainStateBetweenFrames = true;
                this.skipPointerMovePicking = true;
                this.autoClear = false;
                break;
        }
        this.onScenePerformancePriorityChangedObservable.notifyObservers(value);
    }
    /**
     * Gets or sets a boolean indicating if all rendering must be done in wireframe
     */
    set forceWireframe(value) {
        if (this._forceWireframe === value) {
            return;
        }
        this._forceWireframe = value;
        this.markAllMaterialsAsDirty(16);
    }
    get forceWireframe() {
        return this._forceWireframe;
    }
    /**
     * Gets or sets a boolean indicating if we should skip the frustum clipping part of the active meshes selection
     */
    set skipFrustumClipping(value) {
        if (this._skipFrustumClipping === value) {
            return;
        }
        this._skipFrustumClipping = value;
    }
    get skipFrustumClipping() {
        return this._skipFrustumClipping;
    }
    /**
     * Gets or sets a boolean indicating if all rendering must be done in point cloud
     */
    set forcePointsCloud(value) {
        if (this._forcePointsCloud === value) {
            return;
        }
        this._forcePointsCloud = value;
        this.markAllMaterialsAsDirty(16);
    }
    get forcePointsCloud() {
        return this._forcePointsCloud;
    }
    /**
     * Texture used in all pbr material as the reflection texture.
     * As in the majority of the scene they are the same (exception for multi room and so on),
     * this is easier to reference from here than from all the materials.
     */
    get environmentTexture() {
        return this._environmentTexture;
    }
    /**
     * Texture used in all pbr material as the reflection texture.
     * As in the majority of the scene they are the same (exception for multi room and so on),
     * this is easier to set here than in all the materials.
     */
    set environmentTexture(value) {
        if (this._environmentTexture === value) {
            return;
        }
        this._environmentTexture = value;
        this.onEnvironmentTextureChangedObservable.notifyObservers(value);
        this.markAllMaterialsAsDirty(1);
    }
    /**
     * @returns all meshes, lights, cameras, transformNodes and bones
     */
    getNodes() {
        let nodes = [];
        nodes = nodes.concat(this.meshes);
        nodes = nodes.concat(this.lights);
        nodes = nodes.concat(this.cameras);
        nodes = nodes.concat(this.transformNodes); // dummies
        this.skeletons.forEach((skeleton) => (nodes = nodes.concat(skeleton.bones)));
        return nodes;
    }
    /**
     * Gets or sets the animation properties override
     */
    get animationPropertiesOverride() {
        return this._animationPropertiesOverride;
    }
    set animationPropertiesOverride(value) {
        this._animationPropertiesOverride = value;
    }
    /** Sets a function to be executed when this scene is disposed. */
    set onDispose(callback) {
        if (this._onDisposeObserver) {
            this.onDisposeObservable.remove(this._onDisposeObserver);
        }
        this._onDisposeObserver = this.onDisposeObservable.add(callback);
    }
    /** Sets a function to be executed before rendering this scene */
    set beforeRender(callback) {
        if (this._onBeforeRenderObserver) {
            this.onBeforeRenderObservable.remove(this._onBeforeRenderObserver);
        }
        if (callback) {
            this._onBeforeRenderObserver = this.onBeforeRenderObservable.add(callback);
        }
    }
    /** Sets a function to be executed after rendering this scene */
    set afterRender(callback) {
        if (this._onAfterRenderObserver) {
            this.onAfterRenderObservable.remove(this._onAfterRenderObserver);
        }
        if (callback) {
            this._onAfterRenderObserver = this.onAfterRenderObservable.add(callback);
        }
    }
    /** Sets a function to be executed before rendering a camera*/
    set beforeCameraRender(callback) {
        if (this._onBeforeCameraRenderObserver) {
            this.onBeforeCameraRenderObservable.remove(this._onBeforeCameraRenderObserver);
        }
        this._onBeforeCameraRenderObserver = this.onBeforeCameraRenderObservable.add(callback);
    }
    /** Sets a function to be executed after rendering a camera*/
    set afterCameraRender(callback) {
        if (this._onAfterCameraRenderObserver) {
            this.onAfterCameraRenderObservable.remove(this._onAfterCameraRenderObserver);
        }
        this._onAfterCameraRenderObserver = this.onAfterCameraRenderObservable.add(callback);
    }
    /**
     * Gets or sets a predicate used to select candidate meshes for a pointer down event
     */
    get pointerDownPredicate() {
        return this._pointerPickingConfiguration.pointerDownPredicate;
    }
    set pointerDownPredicate(value) {
        this._pointerPickingConfiguration.pointerDownPredicate = value;
    }
    /**
     * Gets or sets a predicate used to select candidate meshes for a pointer up event
     */
    get pointerUpPredicate() {
        return this._pointerPickingConfiguration.pointerUpPredicate;
    }
    set pointerUpPredicate(value) {
        this._pointerPickingConfiguration.pointerUpPredicate = value;
    }
    /**
     * Gets or sets a predicate used to select candidate meshes for a pointer move event
     */
    get pointerMovePredicate() {
        return this._pointerPickingConfiguration.pointerMovePredicate;
    }
    set pointerMovePredicate(value) {
        this._pointerPickingConfiguration.pointerMovePredicate = value;
    }
    /**
     * Gets or sets a predicate used to select candidate meshes for a pointer down event
     */
    get pointerDownFastCheck() {
        return this._pointerPickingConfiguration.pointerDownFastCheck;
    }
    set pointerDownFastCheck(value) {
        this._pointerPickingConfiguration.pointerDownFastCheck = value;
    }
    /**
     * Gets or sets a predicate used to select candidate meshes for a pointer up event
     */
    get pointerUpFastCheck() {
        return this._pointerPickingConfiguration.pointerUpFastCheck;
    }
    set pointerUpFastCheck(value) {
        this._pointerPickingConfiguration.pointerUpFastCheck = value;
    }
    /**
     * Gets or sets a predicate used to select candidate meshes for a pointer move event
     */
    get pointerMoveFastCheck() {
        return this._pointerPickingConfiguration.pointerMoveFastCheck;
    }
    set pointerMoveFastCheck(value) {
        this._pointerPickingConfiguration.pointerMoveFastCheck = value;
    }
    /**
     * Gets or sets a boolean indicating if the user want to entirely skip the picking phase when a pointer move event occurs.
     */
    get skipPointerMovePicking() {
        return this._pointerPickingConfiguration.skipPointerMovePicking;
    }
    set skipPointerMovePicking(value) {
        this._pointerPickingConfiguration.skipPointerMovePicking = value;
    }
    /**
     * Gets or sets a boolean indicating if the user want to entirely skip the picking phase when a pointer down event occurs.
     */
    get skipPointerDownPicking() {
        return this._pointerPickingConfiguration.skipPointerDownPicking;
    }
    set skipPointerDownPicking(value) {
        this._pointerPickingConfiguration.skipPointerDownPicking = value;
    }
    /**
     * Gets or sets a boolean indicating if the user want to entirely skip the picking phase when a pointer up event occurs.  Off by default.
     */
    get skipPointerUpPicking() {
        return this._pointerPickingConfiguration.skipPointerUpPicking;
    }
    set skipPointerUpPicking(value) {
        this._pointerPickingConfiguration.skipPointerUpPicking = value;
    }
    /**
     * Gets the pointer coordinates without any translation (ie. straight out of the pointer event)
     */
    get unTranslatedPointer() {
        return this._inputManager.unTranslatedPointer;
    }
    /**
     * Gets or sets the distance in pixel that you have to move to prevent some events. Default is 10 pixels
     */
    static get DragMovementThreshold() {
        return InputManager.DragMovementThreshold;
    }
    static set DragMovementThreshold(value) {
        InputManager.DragMovementThreshold = value;
    }
    /**
     * Time in milliseconds to wait to raise long press events if button is still pressed. Default is 500 ms
     */
    static get LongPressDelay() {
        return InputManager.LongPressDelay;
    }
    static set LongPressDelay(value) {
        InputManager.LongPressDelay = value;
    }
    /**
     * Time in milliseconds to wait to raise long press events if button is still pressed. Default is 300 ms
     */
    static get DoubleClickDelay() {
        return InputManager.DoubleClickDelay;
    }
    static set DoubleClickDelay(value) {
        InputManager.DoubleClickDelay = value;
    }
    /** If you need to check double click without raising a single click at first click, enable this flag */
    static get ExclusiveDoubleClickMode() {
        return InputManager.ExclusiveDoubleClickMode;
    }
    static set ExclusiveDoubleClickMode(value) {
        InputManager.ExclusiveDoubleClickMode = value;
    }
    /**
     * Bind the current view position to an effect.
     * @param effect The effect to be bound
     * @param variableName name of the shader variable that will hold the eye position
     * @param isVector3 true to indicates that variableName is a Vector3 and not a Vector4
     * @returns the computed eye position
     */
    bindEyePosition(effect, variableName = "vEyePosition", isVector3 = false) {
        const eyePosition = this._forcedViewPosition
            ? this._forcedViewPosition
            : this._mirroredCameraPosition
                ? this._mirroredCameraPosition
                : (this.activeCamera?.globalPosition ?? math_vector/* Vector3 */.Pq.ZeroReadOnly);
        const invertNormal = this.useRightHandedSystem === (this._mirroredCameraPosition != null);
        math_vector/* TmpVectors */.AA.Vector4[0].set(eyePosition.x, eyePosition.y, eyePosition.z, invertNormal ? -1 : 1);
        if (effect) {
            if (isVector3) {
                effect.setFloat3(variableName, math_vector/* TmpVectors */.AA.Vector4[0].x, math_vector/* TmpVectors */.AA.Vector4[0].y, math_vector/* TmpVectors */.AA.Vector4[0].z);
            }
            else {
                effect.setVector4(variableName, math_vector/* TmpVectors */.AA.Vector4[0]);
            }
        }
        return math_vector/* TmpVectors */.AA.Vector4[0];
    }
    /**
     * Update the scene ubo before it can be used in rendering processing
     * @returns the scene UniformBuffer
     */
    finalizeSceneUbo() {
        const ubo = this.getSceneUniformBuffer();
        const eyePosition = this.bindEyePosition(null);
        ubo.updateFloat4("vEyePosition", eyePosition.x, eyePosition.y, eyePosition.z, eyePosition.w);
        ubo.update();
        return ubo;
    }
    /**
     * Gets or sets a boolean indicating if the scene must use right-handed coordinates system
     */
    set useRightHandedSystem(value) {
        if (this._useRightHandedSystem === value) {
            return;
        }
        this._useRightHandedSystem = value;
        this.markAllMaterialsAsDirty(16);
    }
    get useRightHandedSystem() {
        return this._useRightHandedSystem;
    }
    /**
     * Sets the step Id used by deterministic lock step
     * @see https://doc.babylonjs.com/features/featuresDeepDive/animation/advanced_animations#deterministic-lockstep
     * @param newStepId defines the step Id
     */
    setStepId(newStepId) {
        this._currentStepId = newStepId;
    }
    /**
     * Gets the step Id used by deterministic lock step
     * @see https://doc.babylonjs.com/features/featuresDeepDive/animation/advanced_animations#deterministic-lockstep
     * @returns the step Id
     */
    getStepId() {
        return this._currentStepId;
    }
    /**
     * Gets the internal step used by deterministic lock step
     * @see https://doc.babylonjs.com/features/featuresDeepDive/animation/advanced_animations#deterministic-lockstep
     * @returns the internal step
     */
    getInternalStep() {
        return this._currentInternalStep;
    }
    /**
     * Gets or sets a boolean indicating if fog is enabled on this scene
     * @see https://doc.babylonjs.com/features/featuresDeepDive/environment/environment_introduction#fog
     * (Default is true)
     */
    set fogEnabled(value) {
        if (this._fogEnabled === value) {
            return;
        }
        this._fogEnabled = value;
        this.markAllMaterialsAsDirty(16);
    }
    get fogEnabled() {
        return this._fogEnabled;
    }
    /**
     * Gets or sets the fog mode to use
     * @see https://doc.babylonjs.com/features/featuresDeepDive/environment/environment_introduction#fog
     * | mode | value |
     * | --- | --- |
     * | FOGMODE_NONE | 0 |
     * | FOGMODE_EXP | 1 |
     * | FOGMODE_EXP2 | 2 |
     * | FOGMODE_LINEAR | 3 |
     */
    set fogMode(value) {
        if (this._fogMode === value) {
            return;
        }
        this._fogMode = value;
        this.markAllMaterialsAsDirty(16);
    }
    get fogMode() {
        return this._fogMode;
    }
    /**
     * Flag indicating that the frame buffer binding is handled by another component
     */
    get prePass() {
        return !!this.prePassRenderer && this.prePassRenderer.defaultRT.enabled;
    }
    /**
     * Gets or sets a boolean indicating if shadows are enabled on this scene
     */
    set shadowsEnabled(value) {
        if (this._shadowsEnabled === value) {
            return;
        }
        this._shadowsEnabled = value;
        this.markAllMaterialsAsDirty(2);
    }
    get shadowsEnabled() {
        return this._shadowsEnabled;
    }
    /**
     * Gets or sets a boolean indicating if lights are enabled on this scene
     */
    set lightsEnabled(value) {
        if (this._lightsEnabled === value) {
            return;
        }
        this._lightsEnabled = value;
        this.markAllMaterialsAsDirty(2);
    }
    get lightsEnabled() {
        return this._lightsEnabled;
    }
    /** All of the active cameras added to this scene. */
    get activeCameras() {
        return this._activeCameras;
    }
    set activeCameras(cameras) {
        if (this._unObserveActiveCameras) {
            this._unObserveActiveCameras();
            this._unObserveActiveCameras = null;
        }
        if (cameras) {
            this._unObserveActiveCameras = (0,arrayTools/* _ObserveArray */.lL)(cameras, () => {
                this.onActiveCamerasChanged.notifyObservers(this);
            });
        }
        this._activeCameras = cameras;
    }
    /** Gets or sets the current active camera */
    get activeCamera() {
        return this._activeCamera;
    }
    set activeCamera(value) {
        if (value === this._activeCamera) {
            return;
        }
        this._activeCamera = value;
        this.onActiveCameraChanged.notifyObservers(this);
    }
    /** The default material used on meshes when no material is affected */
    get defaultMaterial() {
        if (!this._defaultMaterial) {
            this._defaultMaterial = Scene.DefaultMaterialFactory(this);
        }
        return this._defaultMaterial;
    }
    /** The default material used on meshes when no material is affected */
    set defaultMaterial(value) {
        this._defaultMaterial = value;
    }
    /**
     * Gets or sets a boolean indicating if textures are enabled on this scene
     */
    set texturesEnabled(value) {
        if (this._texturesEnabled === value) {
            return;
        }
        this._texturesEnabled = value;
        this.markAllMaterialsAsDirty(1);
    }
    get texturesEnabled() {
        return this._texturesEnabled;
    }
    /**
     * Gets or sets the frame graph used to render the scene. If set, the scene will use the frame graph to render the scene instead of the default render loop.
     */
    get frameGraph() {
        return this._frameGraph;
    }
    set frameGraph(value) {
        if (this._frameGraph) {
            this._frameGraph = value;
            if (!value) {
                this.customRenderFunction = this._currentCustomRenderFunction;
            }
            return;
        }
        this._frameGraph = value;
        if (value) {
            this._currentCustomRenderFunction = this.customRenderFunction;
            this.customRenderFunction = this._renderWithFrameGraph;
        }
    }
    /**
     * Gets or sets a boolean indicating if skeletons are enabled on this scene
     */
    set skeletonsEnabled(value) {
        if (this._skeletonsEnabled === value) {
            return;
        }
        this._skeletonsEnabled = value;
        this.markAllMaterialsAsDirty(8);
    }
    get skeletonsEnabled() {
        return this._skeletonsEnabled;
    }
    /** @internal */
    get collisionCoordinator() {
        if (!this._collisionCoordinator) {
            this._collisionCoordinator = Scene.CollisionCoordinatorFactory();
            this._collisionCoordinator.init(this);
        }
        return this._collisionCoordinator;
    }
    /**
     * Gets the scene's rendering manager
     */
    get renderingManager() {
        return this._renderingManager;
    }
    /**
     * Gets the list of frustum planes (built from the active camera)
     */
    get frustumPlanes() {
        return this._frustumPlanes;
    }
    /**
     * Registers the transient components if needed.
     */
    _registerTransientComponents() {
        // Register components that have been associated lately to the scene.
        if (this._transientComponents.length > 0) {
            for (const component of this._transientComponents) {
                component.register();
            }
            this._transientComponents.length = 0;
        }
    }
    /**
     * @internal
     * Add a component to the scene.
     * Note that the ccomponent could be registered on th next frame if this is called after
     * the register component stage.
     * @param component Defines the component to add to the scene
     */
    _addComponent(component) {
        this._components.push(component);
        this._transientComponents.push(component);
        const serializableComponent = component;
        if (serializableComponent.addFromContainer && serializableComponent.serialize) {
            this._serializableComponents.push(serializableComponent);
        }
    }
    /**
     * @internal
     * Gets a component from the scene.
     * @param name defines the name of the component to retrieve
     * @returns the component or null if not present
     */
    _getComponent(name) {
        for (const component of this._components) {
            if (component.name === name) {
                return component;
            }
        }
        return null;
    }
    /**
     * Creates a new Scene
     * @param engine defines the engine to use to render this scene
     * @param options defines the scene options
     */
    constructor(engine, options) {
        /** @internal */
        this._inputManager = new InputManager(this);
        /** Define this parameter if you are using multiple cameras and you want to specify which one should be used for pointer position */
        this.cameraToUseForPointers = null;
        /** @internal */
        this._isScene = true;
        /** @internal */
        this._blockEntityCollection = false;
        /**
         * Gets or sets a boolean that indicates if the scene must clear the render buffer before rendering a frame
         */
        this.autoClear = true;
        /**
         * Gets or sets a boolean that indicates if the scene must clear the depth and stencil buffers before rendering a frame
         */
        this.autoClearDepthAndStencil = true;
        this._clearColor = new math_color/* Color4 */.ov(0.2, 0.2, 0.3, 1.0);
        /**
         * Observable triggered when the performance priority is changed
         */
        this.onClearColorChangedObservable = new observable/* Observable */.cP();
        /**
         * Defines the color used to simulate the ambient color (Default is (0, 0, 0))
         */
        this.ambientColor = new math_color/* Color3 */.v9(0, 0, 0);
        /**
         * Intensity of the environment in all pbr material.
         * This dims or reinforces the IBL lighting overall (reflection and diffuse).
         * As in the majority of the scene they are the same (exception for multi room and so on),
         * this is easier to reference from here than from all the materials.
         */
        this.environmentIntensity = 1;
        this._performancePriority = 0 /* ScenePerformancePriority.BackwardCompatible */;
        /**
         * Observable triggered when the performance priority is changed
         */
        this.onScenePerformancePriorityChangedObservable = new observable/* Observable */.cP();
        this._forceWireframe = false;
        this._skipFrustumClipping = false;
        this._forcePointsCloud = false;
        /**
         * Gets the list of root nodes (ie. nodes with no parent)
         */
        this.rootNodes = [];
        /** All of the cameras added to this scene
         * @see https://doc.babylonjs.com/features/featuresDeepDive/cameras
         */
        this.cameras = [];
        /**
         * All of the lights added to this scene
         * @see https://doc.babylonjs.com/features/featuresDeepDive/lights/lights_introduction
         */
        this.lights = [];
        /**
         * All of the (abstract) meshes added to this scene
         */
        this.meshes = [];
        /**
         * The list of skeletons added to the scene
         * @see https://doc.babylonjs.com/features/featuresDeepDive/mesh/bonesSkeletons
         */
        this.skeletons = [];
        /**
         * All of the particle systems added to this scene
         * @see https://doc.babylonjs.com/features/featuresDeepDive/particles/particle_system/particle_system_intro
         */
        this.particleSystems = [];
        /**
         * Gets a list of Animations associated with the scene
         */
        this.animations = [];
        /**
         * All of the animation groups added to this scene
         * @see https://doc.babylonjs.com/features/featuresDeepDive/animation/groupAnimations
         */
        this.animationGroups = [];
        /**
         * All of the multi-materials added to this scene
         * @see https://doc.babylonjs.com/features/featuresDeepDive/materials/using/multiMaterials
         */
        this.multiMaterials = [];
        /**
         * All of the materials added to this scene
         * In the context of a Scene, it is not supposed to be modified manually.
         * Any addition or removal should be done using the addMaterial and removeMaterial Scene methods.
         * Note also that the order of the Material within the array is not significant and might change.
         * @see https://doc.babylonjs.com/features/featuresDeepDive/materials/using/materials_introduction
         */
        this.materials = [];
        /**
         * The list of morph target managers added to the scene
         * @see https://doc.babylonjs.com/features/featuresDeepDive/mesh/dynamicMeshMorph
         */
        this.morphTargetManagers = [];
        /**
         * The list of geometries used in the scene.
         */
        this.geometries = [];
        /**
         * All of the transform nodes added to this scene
         * In the context of a Scene, it is not supposed to be modified manually.
         * Any addition or removal should be done using the addTransformNode and removeTransformNode Scene methods.
         * Note also that the order of the TransformNode within the array is not significant and might change.
         * @see https://doc.babylonjs.com/features/featuresDeepDive/mesh/transforms/parent_pivot/transform_node
         */
        this.transformNodes = [];
        /**
         * ActionManagers available on the scene.
         * @deprecated
         */
        this.actionManagers = [];
        /**
         * Textures to keep.
         */
        this.textures = [];
        /** @internal */
        this._environmentTexture = null;
        /**
         * The list of postprocesses added to the scene
         */
        this.postProcesses = [];
        /**
         * The list of effect layers (highlights/glow) added to the scene
         * @see https://doc.babylonjs.com/features/featuresDeepDive/mesh/highlightLayer
         * @see https://doc.babylonjs.com/features/featuresDeepDive/mesh/glowLayer
         */
        this.effectLayers = [];
        /**
         * The list of sounds used in the scene.
         */
        this.sounds = null;
        /**
         * The list of layers (background and foreground) of the scene
         */
        this.layers = [];
        /**
         * The list of lens flare system added to the scene
         * @see https://doc.babylonjs.com/features/featuresDeepDive/environment/lenseFlare
         */
        this.lensFlareSystems = [];
        /**
         * The list of procedural textures added to the scene
         * @see https://doc.babylonjs.com/features/featuresDeepDive/materials/using/proceduralTextures
         */
        this.proceduralTextures = [];
        /**
         * Gets or sets a boolean indicating if animations are enabled
         */
        this.animationsEnabled = true;
        this._animationPropertiesOverride = null;
        /**
         * Gets or sets a boolean indicating if a constant deltatime has to be used
         * This is mostly useful for testing purposes when you do not want the animations to scale with the framerate
         */
        this.useConstantAnimationDeltaTime = false;
        /**
         * Gets or sets a boolean indicating if the scene must keep the meshUnderPointer property updated
         * Please note that it requires to run a ray cast through the scene on every frame
         */
        this.constantlyUpdateMeshUnderPointer = false;
        /**
         * Defines the HTML cursor to use when hovering over interactive elements
         */
        this.hoverCursor = "pointer";
        /**
         * Defines the HTML default cursor to use (empty by default)
         */
        this.defaultCursor = "";
        /**
         * Defines whether cursors are handled by the scene.
         */
        this.doNotHandleCursors = false;
        /**
         * This is used to call preventDefault() on pointer down
         * in order to block unwanted artifacts like system double clicks
         */
        this.preventDefaultOnPointerDown = true;
        /**
         * This is used to call preventDefault() on pointer up
         * in order to block unwanted artifacts like system double clicks
         */
        this.preventDefaultOnPointerUp = true;
        // Metadata
        /**
         * Gets or sets user defined metadata
         */
        this.metadata = null;
        /**
         * For internal use only. Please do not use.
         */
        this.reservedDataStore = null;
        /**
         * Use this array to add regular expressions used to disable offline support for specific urls
         */
        this.disableOfflineSupportExceptionRules = [];
        /**
         * An event triggered when the scene is disposed.
         */
        this.onDisposeObservable = new observable/* Observable */.cP();
        this._onDisposeObserver = null;
        /**
         * An event triggered before rendering the scene (right after animations and physics)
         */
        this.onBeforeRenderObservable = new observable/* Observable */.cP();
        this._onBeforeRenderObserver = null;
        /**
         * An event triggered after rendering the scene
         */
        this.onAfterRenderObservable = new observable/* Observable */.cP();
        /**
         * An event triggered after rendering the scene for an active camera (When scene.render is called this will be called after each camera)
         * This is triggered for each "sub" camera in a Camera Rig unlike onAfterCameraRenderObservable
         */
        this.onAfterRenderCameraObservable = new observable/* Observable */.cP();
        this._onAfterRenderObserver = null;
        /**
         * An event triggered before animating the scene
         */
        this.onBeforeAnimationsObservable = new observable/* Observable */.cP();
        /**
         * An event triggered after animations processing
         */
        this.onAfterAnimationsObservable = new observable/* Observable */.cP();
        /**
         * An event triggered before draw calls are ready to be sent
         */
        this.onBeforeDrawPhaseObservable = new observable/* Observable */.cP();
        /**
         * An event triggered after draw calls have been sent
         */
        this.onAfterDrawPhaseObservable = new observable/* Observable */.cP();
        /**
         * An event triggered when the scene is ready
         */
        this.onReadyObservable = new observable/* Observable */.cP();
        /**
         * An event triggered before rendering a camera
         */
        this.onBeforeCameraRenderObservable = new observable/* Observable */.cP();
        this._onBeforeCameraRenderObserver = null;
        /**
         * An event triggered after rendering a camera
         * This is triggered for the full rig Camera only unlike onAfterRenderCameraObservable
         */
        this.onAfterCameraRenderObservable = new observable/* Observable */.cP();
        this._onAfterCameraRenderObserver = null;
        /**
         * An event triggered when active meshes evaluation is about to start
         */
        this.onBeforeActiveMeshesEvaluationObservable = new observable/* Observable */.cP();
        /**
         * An event triggered when active meshes evaluation is done
         */
        this.onAfterActiveMeshesEvaluationObservable = new observable/* Observable */.cP();
        /**
         * An event triggered when particles rendering is about to start
         * Note: This event can be trigger more than once per frame (because particles can be rendered by render target textures as well)
         */
        this.onBeforeParticlesRenderingObservable = new observable/* Observable */.cP();
        /**
         * An event triggered when particles rendering is done
         * Note: This event can be trigger more than once per frame (because particles can be rendered by render target textures as well)
         */
        this.onAfterParticlesRenderingObservable = new observable/* Observable */.cP();
        /**
         * An event triggered when SceneLoader.Append or SceneLoader.Load or SceneLoader.ImportMesh were successfully executed
         */
        this.onDataLoadedObservable = new observable/* Observable */.cP();
        /**
         * An event triggered when a camera is created
         */
        this.onNewCameraAddedObservable = new observable/* Observable */.cP();
        /**
         * An event triggered when a camera is removed
         */
        this.onCameraRemovedObservable = new observable/* Observable */.cP();
        /**
         * An event triggered when a light is created
         */
        this.onNewLightAddedObservable = new observable/* Observable */.cP();
        /**
         * An event triggered when a light is removed
         */
        this.onLightRemovedObservable = new observable/* Observable */.cP();
        /**
         * An event triggered when a geometry is created
         */
        this.onNewGeometryAddedObservable = new observable/* Observable */.cP();
        /**
         * An event triggered when a geometry is removed
         */
        this.onGeometryRemovedObservable = new observable/* Observable */.cP();
        /**
         * An event triggered when a transform node is created
         */
        this.onNewTransformNodeAddedObservable = new observable/* Observable */.cP();
        /**
         * An event triggered when a transform node is removed
         */
        this.onTransformNodeRemovedObservable = new observable/* Observable */.cP();
        /**
         * An event triggered when a mesh is created
         */
        this.onNewMeshAddedObservable = new observable/* Observable */.cP();
        /**
         * An event triggered when a mesh is removed
         */
        this.onMeshRemovedObservable = new observable/* Observable */.cP();
        /**
         * An event triggered when a skeleton is created
         */
        this.onNewSkeletonAddedObservable = new observable/* Observable */.cP();
        /**
         * An event triggered when a skeleton is removed
         */
        this.onSkeletonRemovedObservable = new observable/* Observable */.cP();
        /**
         * An event triggered when a material is created
         */
        this.onNewMaterialAddedObservable = new observable/* Observable */.cP();
        /**
         * An event triggered when a multi material is created
         */
        this.onNewMultiMaterialAddedObservable = new observable/* Observable */.cP();
        /**
         * An event triggered when a material is removed
         */
        this.onMaterialRemovedObservable = new observable/* Observable */.cP();
        /**
         * An event triggered when a multi material is removed
         */
        this.onMultiMaterialRemovedObservable = new observable/* Observable */.cP();
        /**
         * An event triggered when a texture is created
         */
        this.onNewTextureAddedObservable = new observable/* Observable */.cP();
        /**
         * An event triggered when a texture is removed
         */
        this.onTextureRemovedObservable = new observable/* Observable */.cP();
        /**
         * An event triggered when render targets are about to be rendered
         * Can happen multiple times per frame.
         */
        this.onBeforeRenderTargetsRenderObservable = new observable/* Observable */.cP();
        /**
         * An event triggered when render targets were rendered.
         * Can happen multiple times per frame.
         */
        this.onAfterRenderTargetsRenderObservable = new observable/* Observable */.cP();
        /**
         * An event triggered before calculating deterministic simulation step
         */
        this.onBeforeStepObservable = new observable/* Observable */.cP();
        /**
         * An event triggered after calculating deterministic simulation step
         */
        this.onAfterStepObservable = new observable/* Observable */.cP();
        /**
         * An event triggered when the activeCamera property is updated
         */
        this.onActiveCameraChanged = new observable/* Observable */.cP();
        /**
         * An event triggered when the activeCameras property is updated
         */
        this.onActiveCamerasChanged = new observable/* Observable */.cP();
        /**
         * This Observable will be triggered before rendering each renderingGroup of each rendered camera.
         * The RenderingGroupInfo class contains all the information about the context in which the observable is called
         * If you wish to register an Observer only for a given set of renderingGroup, use the mask with a combination of the renderingGroup index elevated to the power of two (1 for renderingGroup 0, 2 for renderingrOup1, 4 for 2 and 8 for 3)
         */
        this.onBeforeRenderingGroupObservable = new observable/* Observable */.cP();
        /**
         * This Observable will be triggered after rendering each renderingGroup of each rendered camera.
         * The RenderingGroupInfo class contains all the information about the context in which the observable is called
         * If you wish to register an Observer only for a given set of renderingGroup, use the mask with a combination of the renderingGroup index elevated to the power of two (1 for renderingGroup 0, 2 for renderingrOup1, 4 for 2 and 8 for 3)
         */
        this.onAfterRenderingGroupObservable = new observable/* Observable */.cP();
        /**
         * This Observable will when a mesh has been imported into the scene.
         */
        this.onMeshImportedObservable = new observable/* Observable */.cP();
        /**
         * This Observable will when an animation file has been imported into the scene.
         */
        this.onAnimationFileImportedObservable = new observable/* Observable */.cP();
        /**
         * An event triggered when the environmentTexture is changed.
         */
        this.onEnvironmentTextureChangedObservable = new observable/* Observable */.cP();
        /**
         * An event triggered when the state of mesh under pointer, for a specific pointerId, changes.
         */
        this.onMeshUnderPointerUpdatedObservable = new observable/* Observable */.cP();
        // Animations
        /** @internal */
        this._registeredForLateAnimationBindings = new smartArray/* SmartArrayNoDuplicate */.b(256);
        // Pointers
        this._pointerPickingConfiguration = new PointerPickingConfiguration();
        /**
         * This observable event is triggered when any ponter event is triggered. It is registered during Scene.attachControl() and it is called BEFORE the 3D engine process anything (mesh/sprite picking for instance).
         * You have the possibility to skip the process and the call to onPointerObservable by setting PointerInfoPre.skipOnPointerObservable to true
         */
        this.onPrePointerObservable = new observable/* Observable */.cP();
        /**
         * Observable event triggered each time an input event is received from the rendering canvas
         */
        this.onPointerObservable = new observable/* Observable */.cP();
        // Keyboard
        /**
         * This observable event is triggered when any keyboard event si raised and registered during Scene.attachControl()
         * You have the possibility to skip the process and the call to onKeyboardObservable by setting KeyboardInfoPre.skipOnPointerObservable to true
         */
        this.onPreKeyboardObservable = new observable/* Observable */.cP();
        /**
         * Observable event triggered each time an keyboard event is received from the hosting window
         */
        this.onKeyboardObservable = new observable/* Observable */.cP();
        // Coordinates system
        this._useRightHandedSystem = false;
        // Deterministic lockstep
        this._timeAccumulator = 0;
        this._currentStepId = 0;
        this._currentInternalStep = 0;
        // Fog
        this._fogEnabled = true;
        this._fogMode = Scene.FOGMODE_NONE;
        /**
         * Gets or sets the fog color to use
         * @see https://doc.babylonjs.com/features/featuresDeepDive/environment/environment_introduction#fog
         * (Default is Color3(0.2, 0.2, 0.3))
         */
        this.fogColor = new math_color/* Color3 */.v9(0.2, 0.2, 0.3);
        /**
         * Gets or sets the fog density to use
         * @see https://doc.babylonjs.com/features/featuresDeepDive/environment/environment_introduction#fog
         * (Default is 0.1)
         */
        this.fogDensity = 0.1;
        /**
         * Gets or sets the fog start distance to use
         * @see https://doc.babylonjs.com/features/featuresDeepDive/environment/environment_introduction#fog
         * (Default is 0)
         */
        this.fogStart = 0;
        /**
         * Gets or sets the fog end distance to use
         * @see https://doc.babylonjs.com/features/featuresDeepDive/environment/environment_introduction#fog
         * (Default is 1000)
         */
        this.fogEnd = 1000.0;
        /**
         * Flag indicating if we need to store previous matrices when rendering
         */
        this.needsPreviousWorldMatrices = false;
        // Lights
        this._shadowsEnabled = true;
        this._lightsEnabled = true;
        this._unObserveActiveCameras = null;
        // Textures
        this._texturesEnabled = true;
        this._frameGraph = null;
        // Physics
        /**
         * Gets or sets a boolean indicating if physic engines are enabled on this scene
         */
        this.physicsEnabled = true;
        // Particles
        /**
         * Gets or sets a boolean indicating if particles are enabled on this scene
         */
        this.particlesEnabled = true;
        // Sprites
        /**
         * Gets or sets a boolean indicating if sprites are enabled on this scene
         */
        this.spritesEnabled = true;
        // Skeletons
        this._skeletonsEnabled = true;
        // Lens flares
        /**
         * Gets or sets a boolean indicating if lens flares are enabled on this scene
         */
        this.lensFlaresEnabled = true;
        // Collisions
        /**
         * Gets or sets a boolean indicating if collisions are enabled on this scene
         * @see https://doc.babylonjs.com/features/featuresDeepDive/cameras/camera_collisions
         */
        this.collisionsEnabled = true;
        /**
         * Defines the gravity applied to this scene (used only for collisions)
         * @see https://doc.babylonjs.com/features/featuresDeepDive/cameras/camera_collisions
         */
        this.gravity = new math_vector/* Vector3 */.Pq(0, -9.807, 0);
        // Postprocesses
        /**
         * Gets or sets a boolean indicating if postprocesses are enabled on this scene
         */
        this.postProcessesEnabled = true;
        // Customs render targets
        /**
         * Gets or sets a boolean indicating if render targets are enabled on this scene
         */
        this.renderTargetsEnabled = true;
        /**
         * Gets or sets a boolean indicating if next render targets must be dumped as image for debugging purposes
         * We recommend not using it and instead rely on Spector.js: http://spector.babylonjs.com
         */
        this.dumpNextRenderTargets = false;
        /**
         * The list of user defined render targets added to the scene
         */
        this.customRenderTargets = [];
        /**
         * Gets the list of meshes imported to the scene through SceneLoader
         */
        this.importedMeshesFiles = [];
        // Probes
        /**
         * Gets or sets a boolean indicating if probes are enabled on this scene
         */
        this.probesEnabled = true;
        this._meshesForIntersections = new smartArray/* SmartArrayNoDuplicate */.b(256);
        // Procedural textures
        /**
         * Gets or sets a boolean indicating if procedural textures are enabled on this scene
         */
        this.proceduralTexturesEnabled = true;
        // Performance counters
        this._totalVertices = new perfCounter/* PerfCounter */.A();
        /** @internal */
        this._activeIndices = new perfCounter/* PerfCounter */.A();
        /** @internal */
        this._activeParticles = new perfCounter/* PerfCounter */.A();
        /** @internal */
        this._activeBones = new perfCounter/* PerfCounter */.A();
        /** @internal */
        this._animationTime = 0;
        /**
         * Gets or sets a general scale for animation speed
         * @see https://www.babylonjs-playground.com/#IBU2W7#3
         */
        this.animationTimeScale = 1;
        this._renderId = 0;
        this._frameId = 0;
        this._executeWhenReadyTimeoutId = null;
        this._intermediateRendering = false;
        this._defaultFrameBufferCleared = false;
        this._viewUpdateFlag = -1;
        this._projectionUpdateFlag = -1;
        /** @internal */
        this._toBeDisposed = new Array(256);
        this._activeRequests = new Array();
        /** @internal */
        this._pendingData = new Array();
        this._isDisposed = false;
        /**
         * Gets or sets a boolean indicating that all submeshes of active meshes must be rendered
         * Use this boolean to avoid computing frustum clipping on submeshes (This could help when you are CPU bound)
         */
        this.dispatchAllSubMeshesOfActiveMeshes = false;
        this._activeMeshes = new smartArray/* SmartArray */.L(256);
        this._processedMaterials = new smartArray/* SmartArray */.L(256);
        this._renderTargets = new smartArray/* SmartArrayNoDuplicate */.b(256);
        this._materialsRenderTargets = new smartArray/* SmartArrayNoDuplicate */.b(256);
        /** @internal */
        this._activeParticleSystems = new smartArray/* SmartArray */.L(256);
        this._activeSkeletons = new smartArray/* SmartArrayNoDuplicate */.b(32);
        this._softwareSkinnedMeshes = new smartArray/* SmartArrayNoDuplicate */.b(32);
        /** @internal */
        this._activeAnimatables = new Array();
        this._transformMatrix = math_vector/* Matrix */.uq.Zero();
        /**
         * Gets or sets a boolean indicating if lights must be sorted by priority (off by default)
         * This is useful if there are more lights that the maximum simulteanous authorized
         */
        this.requireLightSorting = false;
        /**
         * @internal
         * Backing store of defined scene components.
         */
        this._components = [];
        /**
         * @internal
         * Backing store of defined scene components.
         */
        this._serializableComponents = [];
        /**
         * List of components to register on the next registration step.
         */
        this._transientComponents = [];
        /**
         * @internal
         * Defines the actions happening before camera updates.
         */
        this._beforeCameraUpdateStage = sceneComponent/* Stage */.B.Create();
        /**
         * @internal
         * Defines the actions happening before clear the canvas.
         */
        this._beforeClearStage = sceneComponent/* Stage */.B.Create();
        /**
         * @internal
         * Defines the actions happening before clear the canvas.
         */
        this._beforeRenderTargetClearStage = sceneComponent/* Stage */.B.Create();
        /**
         * @internal
         * Defines the actions when collecting render targets for the frame.
         */
        this._gatherRenderTargetsStage = sceneComponent/* Stage */.B.Create();
        /**
         * @internal
         * Defines the actions happening for one camera in the frame.
         */
        this._gatherActiveCameraRenderTargetsStage = sceneComponent/* Stage */.B.Create();
        /**
         * @internal
         * Defines the actions happening during the per mesh ready checks.
         */
        this._isReadyForMeshStage = sceneComponent/* Stage */.B.Create();
        /**
         * @internal
         * Defines the actions happening before evaluate active mesh checks.
         */
        this._beforeEvaluateActiveMeshStage = sceneComponent/* Stage */.B.Create();
        /**
         * @internal
         * Defines the actions happening during the evaluate sub mesh checks.
         */
        this._evaluateSubMeshStage = sceneComponent/* Stage */.B.Create();
        /**
         * @internal
         * Defines the actions happening during the active mesh stage.
         */
        this._preActiveMeshStage = sceneComponent/* Stage */.B.Create();
        /**
         * @internal
         * Defines the actions happening during the per camera render target step.
         */
        this._cameraDrawRenderTargetStage = sceneComponent/* Stage */.B.Create();
        /**
         * @internal
         * Defines the actions happening just before the active camera is drawing.
         */
        this._beforeCameraDrawStage = sceneComponent/* Stage */.B.Create();
        /**
         * @internal
         * Defines the actions happening just before a render target is drawing.
         */
        this._beforeRenderTargetDrawStage = sceneComponent/* Stage */.B.Create();
        /**
         * @internal
         * Defines the actions happening just before a rendering group is drawing.
         */
        this._beforeRenderingGroupDrawStage = sceneComponent/* Stage */.B.Create();
        /**
         * @internal
         * Defines the actions happening just before a mesh is drawing.
         */
        this._beforeRenderingMeshStage = sceneComponent/* Stage */.B.Create();
        /**
         * @internal
         * Defines the actions happening just after a mesh has been drawn.
         */
        this._afterRenderingMeshStage = sceneComponent/* Stage */.B.Create();
        /**
         * @internal
         * Defines the actions happening just after a rendering group has been drawn.
         */
        this._afterRenderingGroupDrawStage = sceneComponent/* Stage */.B.Create();
        /**
         * @internal
         * Defines the actions happening just after the active camera has been drawn.
         */
        this._afterCameraDrawStage = sceneComponent/* Stage */.B.Create();
        /**
         * @internal
         * Defines the actions happening just after the post processing
         */
        this._afterCameraPostProcessStage = sceneComponent/* Stage */.B.Create();
        /**
         * @internal
         * Defines the actions happening just after a render target has been drawn.
         */
        this._afterRenderTargetDrawStage = sceneComponent/* Stage */.B.Create();
        /**
         * Defines the actions happening just after the post processing on a render target
         */
        this._afterRenderTargetPostProcessStage = sceneComponent/* Stage */.B.Create();
        /**
         * @internal
         * Defines the actions happening just after rendering all cameras and computing intersections.
         */
        this._afterRenderStage = sceneComponent/* Stage */.B.Create();
        /**
         * @internal
         * Defines the actions happening when a pointer move event happens.
         */
        this._pointerMoveStage = sceneComponent/* Stage */.B.Create();
        /**
         * @internal
         * Defines the actions happening when a pointer down event happens.
         */
        this._pointerDownStage = sceneComponent/* Stage */.B.Create();
        /**
         * @internal
         * Defines the actions happening when a pointer up event happens.
         */
        this._pointerUpStage = sceneComponent/* Stage */.B.Create();
        /**
         * an optional map from Geometry Id to Geometry index in the 'geometries' array
         */
        this._geometriesByUniqueId = null;
        this._defaultMeshCandidates = {
            data: [],
            length: 0,
        };
        this._defaultSubMeshCandidates = {
            data: [],
            length: 0,
        };
        this._preventFreeActiveMeshesAndRenderingGroups = false;
        /** @internal */
        this._activeMeshesFrozen = false;
        /** @internal */
        this._activeMeshesFrozenButKeepClipping = false;
        this._skipEvaluateActiveMeshesCompletely = false;
        /** @internal */
        this._allowPostProcessClearColor = true;
        /**
         * User updatable function that will return a deterministic frame time when engine is in deterministic lock step mode
         * @returns the frame time
         */
        this.getDeterministicFrameTime = () => {
            return this._engine.getTimeStep();
        };
        /** @internal */
        this._registeredActions = 0;
        this._blockMaterialDirtyMechanism = false;
        /**
         * Internal perfCollector instance used for sharing between inspector and playground.
         * Marked as protected to allow sharing between prototype extensions, but disallow access at toplevel.
         */
        this._perfCollector = null;
        this.activeCameras = [];
        const fullOptions = {
            useGeometryUniqueIdsMap: true,
            useMaterialMeshMap: true,
            useClonedMeshMap: true,
            virtual: false,
            ...options,
        };
        engine = this._engine = engine || engineStore/* EngineStore */.q.LastCreatedEngine;
        if (fullOptions.virtual) {
            engine._virtualScenes.push(this);
        }
        else {
            engineStore/* EngineStore */.q._LastCreatedScene = this;
            engine.scenes.push(this);
        }
        this._uid = null;
        this._renderingManager = new renderingManager/* RenderingManager */.m(this);
        if (postProcessManager/* PostProcessManager */.X) {
            this.postProcessManager = new postProcessManager/* PostProcessManager */.X(this);
        }
        if ((0,domManagement/* IsWindowObjectExist */.BA)()) {
            this.attachControl();
        }
        // Uniform Buffer
        this._createUbo();
        // Default Image processing definition
        if (imageProcessingConfiguration/* ImageProcessingConfiguration */.p) {
            this._imageProcessingConfiguration = new imageProcessingConfiguration/* ImageProcessingConfiguration */.p();
        }
        this.setDefaultCandidateProviders();
        if (fullOptions.useGeometryUniqueIdsMap) {
            this._geometriesByUniqueId = {};
        }
        this.useMaterialMeshMap = fullOptions.useMaterialMeshMap;
        this.useClonedMeshMap = fullOptions.useClonedMeshMap;
        if (!options || !options.virtual) {
            engine.onNewSceneAddedObservable.notifyObservers(this);
        }
    }
    /**
     * Gets a string identifying the name of the class
     * @returns "Scene" string
     */
    getClassName() {
        return "Scene";
    }
    /**
     * @internal
     */
    _getDefaultMeshCandidates() {
        this._defaultMeshCandidates.data = this.meshes;
        this._defaultMeshCandidates.length = this.meshes.length;
        return this._defaultMeshCandidates;
    }
    /**
     * @internal
     */
    _getDefaultSubMeshCandidates(mesh) {
        this._defaultSubMeshCandidates.data = mesh.subMeshes;
        this._defaultSubMeshCandidates.length = mesh.subMeshes.length;
        return this._defaultSubMeshCandidates;
    }
    /**
     * Sets the default candidate providers for the scene.
     * This sets the getActiveMeshCandidates, getActiveSubMeshCandidates, getIntersectingSubMeshCandidates
     * and getCollidingSubMeshCandidates to their default function
     */
    setDefaultCandidateProviders() {
        this.getActiveMeshCandidates = () => this._getDefaultMeshCandidates();
        this.getActiveSubMeshCandidates = (mesh) => this._getDefaultSubMeshCandidates(mesh);
        this.getIntersectingSubMeshCandidates = (mesh, localRay) => this._getDefaultSubMeshCandidates(mesh);
        this.getCollidingSubMeshCandidates = (mesh, collider) => this._getDefaultSubMeshCandidates(mesh);
    }
    /**
     * Gets the mesh that is currently under the pointer
     */
    get meshUnderPointer() {
        return this._inputManager.meshUnderPointer;
    }
    /**
     * Gets or sets the current on-screen X position of the pointer
     */
    get pointerX() {
        return this._inputManager.pointerX;
    }
    set pointerX(value) {
        this._inputManager.pointerX = value;
    }
    /**
     * Gets or sets the current on-screen Y position of the pointer
     */
    get pointerY() {
        return this._inputManager.pointerY;
    }
    set pointerY(value) {
        this._inputManager.pointerY = value;
    }
    /**
     * Gets the cached material (ie. the latest rendered one)
     * @returns the cached material
     */
    getCachedMaterial() {
        return this._cachedMaterial;
    }
    /**
     * Gets the cached effect (ie. the latest rendered one)
     * @returns the cached effect
     */
    getCachedEffect() {
        return this._cachedEffect;
    }
    /**
     * Gets the cached visibility state (ie. the latest rendered one)
     * @returns the cached visibility state
     */
    getCachedVisibility() {
        return this._cachedVisibility;
    }
    /**
     * Gets a boolean indicating if the current material / effect / visibility must be bind again
     * @param material defines the current material
     * @param effect defines the current effect
     * @param visibility defines the current visibility state
     * @returns true if one parameter is not cached
     */
    isCachedMaterialInvalid(material, effect, visibility = 1) {
        return this._cachedEffect !== effect || this._cachedMaterial !== material || this._cachedVisibility !== visibility;
    }
    /**
     * Gets the engine associated with the scene
     * @returns an Engine
     */
    getEngine() {
        return this._engine;
    }
    /**
     * Gets the total number of vertices rendered per frame
     * @returns the total number of vertices rendered per frame
     */
    getTotalVertices() {
        return this._totalVertices.current;
    }
    /**
     * Gets the performance counter for total vertices
     * @see https://doc.babylonjs.com/features/featuresDeepDive/scene/optimize_your_scene#instrumentation
     */
    get totalVerticesPerfCounter() {
        return this._totalVertices;
    }
    /**
     * Gets the total number of active indices rendered per frame (You can deduce the number of rendered triangles by dividing this number by 3)
     * @returns the total number of active indices rendered per frame
     */
    getActiveIndices() {
        return this._activeIndices.current;
    }
    /**
     * Gets the performance counter for active indices
     * @see https://doc.babylonjs.com/features/featuresDeepDive/scene/optimize_your_scene#instrumentation
     */
    get totalActiveIndicesPerfCounter() {
        return this._activeIndices;
    }
    /**
     * Gets the total number of active particles rendered per frame
     * @returns the total number of active particles rendered per frame
     */
    getActiveParticles() {
        return this._activeParticles.current;
    }
    /**
     * Gets the performance counter for active particles
     * @see https://doc.babylonjs.com/features/featuresDeepDive/scene/optimize_your_scene#instrumentation
     */
    get activeParticlesPerfCounter() {
        return this._activeParticles;
    }
    /**
     * Gets the total number of active bones rendered per frame
     * @returns the total number of active bones rendered per frame
     */
    getActiveBones() {
        return this._activeBones.current;
    }
    /**
     * Gets the performance counter for active bones
     * @see https://doc.babylonjs.com/features/featuresDeepDive/scene/optimize_your_scene#instrumentation
     */
    get activeBonesPerfCounter() {
        return this._activeBones;
    }
    /**
     * Gets the array of active meshes
     * @returns an array of AbstractMesh
     */
    getActiveMeshes() {
        return this._activeMeshes;
    }
    /**
     * Gets the animation ratio (which is 1.0 is the scene renders at 60fps and 2 if the scene renders at 30fps, etc.)
     * @returns a number
     */
    getAnimationRatio() {
        return this._animationRatio !== undefined ? this._animationRatio : 1;
    }
    /**
     * Gets an unique Id for the current render phase
     * @returns a number
     */
    getRenderId() {
        return this._renderId;
    }
    /**
     * Gets an unique Id for the current frame
     * @returns a number
     */
    getFrameId() {
        return this._frameId;
    }
    /** Call this function if you want to manually increment the render Id*/
    incrementRenderId() {
        this._renderId++;
    }
    _createUbo() {
        this.setSceneUniformBuffer(this.createSceneUniformBuffer());
    }
    /**
     * Use this method to simulate a pointer move on a mesh
     * The pickResult parameter can be obtained from a scene.pick or scene.pickWithRay
     * @param pickResult pickingInfo of the object wished to simulate pointer event on
     * @param pointerEventInit pointer event state to be used when simulating the pointer event (eg. pointer id for multitouch)
     * @returns the current scene
     */
    simulatePointerMove(pickResult, pointerEventInit) {
        this._inputManager.simulatePointerMove(pickResult, pointerEventInit);
        return this;
    }
    /**
     * Use this method to simulate a pointer down on a mesh
     * The pickResult parameter can be obtained from a scene.pick or scene.pickWithRay
     * @param pickResult pickingInfo of the object wished to simulate pointer event on
     * @param pointerEventInit pointer event state to be used when simulating the pointer event (eg. pointer id for multitouch)
     * @returns the current scene
     */
    simulatePointerDown(pickResult, pointerEventInit) {
        this._inputManager.simulatePointerDown(pickResult, pointerEventInit);
        return this;
    }
    /**
     * Use this method to simulate a pointer up on a mesh
     * The pickResult parameter can be obtained from a scene.pick or scene.pickWithRay
     * @param pickResult pickingInfo of the object wished to simulate pointer event on
     * @param pointerEventInit pointer event state to be used when simulating the pointer event (eg. pointer id for multitouch)
     * @param doubleTap indicates that the pointer up event should be considered as part of a double click (false by default)
     * @returns the current scene
     */
    simulatePointerUp(pickResult, pointerEventInit, doubleTap) {
        this._inputManager.simulatePointerUp(pickResult, pointerEventInit, doubleTap);
        return this;
    }
    /**
     * Gets a boolean indicating if the current pointer event is captured (meaning that the scene has already handled the pointer down)
     * @param pointerId defines the pointer id to use in a multi-touch scenario (0 by default)
     * @returns true if the pointer was captured
     */
    isPointerCaptured(pointerId = 0) {
        return this._inputManager.isPointerCaptured(pointerId);
    }
    /**
     * Attach events to the canvas (To handle actionManagers triggers and raise onPointerMove, onPointerDown and onPointerUp
     * @param attachUp defines if you want to attach events to pointerup
     * @param attachDown defines if you want to attach events to pointerdown
     * @param attachMove defines if you want to attach events to pointermove
     */
    attachControl(attachUp = true, attachDown = true, attachMove = true) {
        this._inputManager.attachControl(attachUp, attachDown, attachMove);
    }
    /** Detaches all event handlers*/
    detachControl() {
        this._inputManager.detachControl();
    }
    /**
     * This function will check if the scene can be rendered (textures are loaded, shaders are compiled)
     * Delay loaded resources are not taking in account
     * @param checkRenderTargets true to also check that the meshes rendered as part of a render target are ready (default: true)
     * @returns true if all required resources are ready
     */
    isReady(checkRenderTargets = true) {
        if (this._isDisposed) {
            return false;
        }
        let index;
        const engine = this.getEngine();
        const currentRenderPassId = engine.currentRenderPassId;
        engine.currentRenderPassId = this.activeCamera?.renderPassId ?? currentRenderPassId;
        let isReady = true;
        // Pending data
        if (this._pendingData.length > 0) {
            isReady = false;
        }
        // Ensures that the pre-pass renderer is enabled if it is to be enabled.
        this.prePassRenderer?.update();
        // OIT
        if (this.useOrderIndependentTransparency && this.depthPeelingRenderer) {
            isReady && (isReady = this.depthPeelingRenderer.isReady());
        }
        // Meshes
        if (checkRenderTargets) {
            this._processedMaterials.reset();
            this._materialsRenderTargets.reset();
        }
        for (index = 0; index < this.meshes.length; index++) {
            const mesh = this.meshes[index];
            if (!mesh.subMeshes || mesh.subMeshes.length === 0) {
                continue;
            }
            // Do not stop at the first encountered "unready" object as we want to ensure
            // all materials are starting off their compilation in parallel.
            if (!mesh.isReady(true)) {
                isReady = false;
                continue;
            }
            const hardwareInstancedRendering = mesh.hasThinInstances ||
                mesh.getClassName() === "InstancedMesh" ||
                mesh.getClassName() === "InstancedLinesMesh" ||
                (engine.getCaps().instancedArrays && mesh.instances.length > 0);
            // Is Ready For Mesh
            for (const step of this._isReadyForMeshStage) {
                if (!step.action(mesh, hardwareInstancedRendering)) {
                    isReady = false;
                }
            }
            if (!checkRenderTargets) {
                continue;
            }
            const mat = mesh.material || this.defaultMaterial;
            if (mat) {
                if (mat._storeEffectOnSubMeshes) {
                    for (const subMesh of mesh.subMeshes) {
                        const material = subMesh.getMaterial();
                        if (material && material.hasRenderTargetTextures && material.getRenderTargetTextures != null) {
                            if (this._processedMaterials.indexOf(material) === -1) {
                                this._processedMaterials.push(material);
                                this._materialsRenderTargets.concatWithNoDuplicate(material.getRenderTargetTextures());
                            }
                        }
                    }
                }
                else {
                    if (mat.hasRenderTargetTextures && mat.getRenderTargetTextures != null) {
                        if (this._processedMaterials.indexOf(mat) === -1) {
                            this._processedMaterials.push(mat);
                            this._materialsRenderTargets.concatWithNoDuplicate(mat.getRenderTargetTextures());
                        }
                    }
                }
            }
        }
        // Render targets
        if (checkRenderTargets) {
            for (index = 0; index < this._materialsRenderTargets.length; ++index) {
                const rtt = this._materialsRenderTargets.data[index];
                if (!rtt.isReadyForRendering()) {
                    isReady = false;
                }
            }
        }
        // Geometries
        for (index = 0; index < this.geometries.length; index++) {
            const geometry = this.geometries[index];
            if (geometry.delayLoadState === 2) {
                isReady = false;
            }
        }
        // Post-processes
        if (this.activeCameras && this.activeCameras.length > 0) {
            for (const camera of this.activeCameras) {
                if (!camera.isReady(true)) {
                    isReady = false;
                }
            }
        }
        else if (this.activeCamera) {
            if (!this.activeCamera.isReady(true)) {
                isReady = false;
            }
        }
        // Particles
        for (const particleSystem of this.particleSystems) {
            if (!particleSystem.isReady()) {
                isReady = false;
            }
        }
        // Layers
        if (this.layers) {
            for (const layer of this.layers) {
                if (!layer.isReady()) {
                    isReady = false;
                }
            }
        }
        // Effects
        if (!engine.areAllEffectsReady()) {
            isReady = false;
        }
        engine.currentRenderPassId = currentRenderPassId;
        return isReady;
    }
    /** Resets all cached information relative to material (including effect and visibility) */
    resetCachedMaterial() {
        this._cachedMaterial = null;
        this._cachedEffect = null;
        this._cachedVisibility = null;
    }
    /**
     * Registers a function to be called before every frame render
     * @param func defines the function to register
     */
    registerBeforeRender(func) {
        this.onBeforeRenderObservable.add(func);
    }
    /**
     * Unregisters a function called before every frame render
     * @param func defines the function to unregister
     */
    unregisterBeforeRender(func) {
        this.onBeforeRenderObservable.removeCallback(func);
    }
    /**
     * Registers a function to be called after every frame render
     * @param func defines the function to register
     */
    registerAfterRender(func) {
        this.onAfterRenderObservable.add(func);
    }
    /**
     * Unregisters a function called after every frame render
     * @param func defines the function to unregister
     */
    unregisterAfterRender(func) {
        this.onAfterRenderObservable.removeCallback(func);
    }
    _executeOnceBeforeRender(func) {
        const execFunc = () => {
            func();
            setTimeout(() => {
                this.unregisterBeforeRender(execFunc);
            });
        };
        this.registerBeforeRender(execFunc);
    }
    /**
     * The provided function will run before render once and will be disposed afterwards.
     * A timeout delay can be provided so that the function will be executed in N ms.
     * The timeout is using the browser's native setTimeout so time percision cannot be guaranteed.
     * @param func The function to be executed.
     * @param timeout optional delay in ms
     */
    executeOnceBeforeRender(func, timeout) {
        if (timeout !== undefined) {
            setTimeout(() => {
                this._executeOnceBeforeRender(func);
            }, timeout);
        }
        else {
            this._executeOnceBeforeRender(func);
        }
    }
    /**
     * This function can help adding any object to the list of data awaited to be ready in order to check for a complete scene loading.
     * @param data defines the object to wait for
     */
    addPendingData(data) {
        this._pendingData.push(data);
    }
    /**
     * Remove a pending data from the loading list which has previously been added with addPendingData.
     * @param data defines the object to remove from the pending list
     */
    removePendingData(data) {
        const wasLoading = this.isLoading;
        const index = this._pendingData.indexOf(data);
        if (index !== -1) {
            this._pendingData.splice(index, 1);
        }
        if (wasLoading && !this.isLoading) {
            this.onDataLoadedObservable.notifyObservers(this);
        }
    }
    /**
     * Returns the number of items waiting to be loaded
     * @returns the number of items waiting to be loaded
     */
    getWaitingItemsCount() {
        return this._pendingData.length;
    }
    /**
     * Returns a boolean indicating if the scene is still loading data
     */
    get isLoading() {
        return this._pendingData.length > 0;
    }
    /**
     * Registers a function to be executed when the scene is ready
     * @param func - the function to be executed
     * @param checkRenderTargets true to also check that the meshes rendered as part of a render target are ready (default: false)
     */
    executeWhenReady(func, checkRenderTargets = false) {
        this.onReadyObservable.addOnce(func);
        if (this._executeWhenReadyTimeoutId !== null) {
            return;
        }
        this._checkIsReady(checkRenderTargets);
    }
    /**
     * Returns a promise that resolves when the scene is ready
     * @param checkRenderTargets true to also check that the meshes rendered as part of a render target are ready (default: false)
     * @returns A promise that resolves when the scene is ready
     */
    whenReadyAsync(checkRenderTargets = false) {
        return new Promise((resolve) => {
            this.executeWhenReady(() => {
                resolve();
            }, checkRenderTargets);
        });
    }
    /**
     * @internal
     */
    _checkIsReady(checkRenderTargets = false) {
        this._registerTransientComponents();
        if (this.isReady(checkRenderTargets)) {
            this.onReadyObservable.notifyObservers(this);
            this.onReadyObservable.clear();
            this._executeWhenReadyTimeoutId = null;
            return;
        }
        if (this._isDisposed) {
            this.onReadyObservable.clear();
            this._executeWhenReadyTimeoutId = null;
            return;
        }
        this._executeWhenReadyTimeoutId = setTimeout(() => {
            // Ensure materials effects are checked outside render loops
            this.incrementRenderId();
            this._checkIsReady(checkRenderTargets);
        }, 100);
    }
    /**
     * Gets all animatable attached to the scene
     */
    get animatables() {
        return this._activeAnimatables;
    }
    /**
     * Resets the last animation time frame.
     * Useful to override when animations start running when loading a scene for the first time.
     */
    resetLastAnimationTimeFrame() {
        this._animationTimeLast = precisionDate/* PrecisionDate */.j.Now;
    }
    // Matrix
    /**
     * Gets the current view matrix
     * @returns a Matrix
     */
    getViewMatrix() {
        return this._viewMatrix;
    }
    /**
     * Gets the current projection matrix
     * @returns a Matrix
     */
    getProjectionMatrix() {
        return this._projectionMatrix;
    }
    /**
     * Gets the current transform matrix
     * @returns a Matrix made of View * Projection
     */
    getTransformMatrix() {
        return this._transformMatrix;
    }
    /**
     * Sets the current transform matrix
     * @param viewL defines the View matrix to use
     * @param projectionL defines the Projection matrix to use
     * @param viewR defines the right View matrix to use (if provided)
     * @param projectionR defines the right Projection matrix to use (if provided)
     */
    setTransformMatrix(viewL, projectionL, viewR, projectionR) {
        // clear the multiviewSceneUbo if no viewR and projectionR are defined
        if (!viewR && !projectionR && this._multiviewSceneUbo) {
            this._multiviewSceneUbo.dispose();
            this._multiviewSceneUbo = null;
        }
        if (this._viewUpdateFlag === viewL.updateFlag && this._projectionUpdateFlag === projectionL.updateFlag) {
            return;
        }
        this._viewUpdateFlag = viewL.updateFlag;
        this._projectionUpdateFlag = projectionL.updateFlag;
        this._viewMatrix = viewL;
        this._projectionMatrix = projectionL;
        this._viewMatrix.multiplyToRef(this._projectionMatrix, this._transformMatrix);
        // Update frustum
        if (!this._frustumPlanes) {
            this._frustumPlanes = math_frustum/* Frustum */.P.GetPlanes(this._transformMatrix);
        }
        else {
            math_frustum/* Frustum */.P.GetPlanesToRef(this._transformMatrix, this._frustumPlanes);
        }
        if (this._multiviewSceneUbo && this._multiviewSceneUbo.useUbo) {
            this._updateMultiviewUbo(viewR, projectionR);
        }
        else if (this._sceneUbo.useUbo) {
            this._sceneUbo.updateMatrix("viewProjection", this._transformMatrix);
            this._sceneUbo.updateMatrix("view", this._viewMatrix);
            this._sceneUbo.updateMatrix("projection", this._projectionMatrix);
        }
    }
    /**
     * Gets the uniform buffer used to store scene data
     * @returns a UniformBuffer
     */
    getSceneUniformBuffer() {
        return this._multiviewSceneUbo ? this._multiviewSceneUbo : this._sceneUbo;
    }
    /**
     * Creates a scene UBO
     * @param name name of the uniform buffer (optional, for debugging purpose only)
     * @returns a new ubo
     */
    createSceneUniformBuffer(name) {
        const sceneUbo = new uniformBuffer/* UniformBuffer */.D(this._engine, undefined, false, name ?? "scene");
        sceneUbo.addUniform("viewProjection", 16);
        sceneUbo.addUniform("view", 16);
        sceneUbo.addUniform("projection", 16);
        sceneUbo.addUniform("vEyePosition", 4);
        return sceneUbo;
    }
    /**
     * Sets the scene ubo
     * @param ubo the ubo to set for the scene
     */
    setSceneUniformBuffer(ubo) {
        this._sceneUbo = ubo;
        this._viewUpdateFlag = -1;
        this._projectionUpdateFlag = -1;
    }
    /**
     * Gets an unique (relatively to the current scene) Id
     * @returns an unique number for the scene
     */
    getUniqueId() {
        return uniqueIdGenerator/* UniqueIdGenerator */.K.UniqueId;
    }
    /**
     * Add a mesh to the list of scene's meshes
     * @param newMesh defines the mesh to add
     * @param recursive if all child meshes should also be added to the scene
     */
    addMesh(newMesh, recursive = false) {
        if (this._blockEntityCollection) {
            return;
        }
        this.meshes.push(newMesh);
        newMesh._resyncLightSources();
        if (!newMesh.parent) {
            newMesh._addToSceneRootNodes();
        }
        tools/* Tools */.S0.SetImmediate(() => {
            this.onNewMeshAddedObservable.notifyObservers(newMesh);
        });
        if (recursive) {
            newMesh.getChildMeshes().forEach((m) => {
                this.addMesh(m);
            });
        }
    }
    /**
     * Remove a mesh for the list of scene's meshes
     * @param toRemove defines the mesh to remove
     * @param recursive if all child meshes should also be removed from the scene
     * @returns the index where the mesh was in the mesh list
     */
    removeMesh(toRemove, recursive = false) {
        const index = this.meshes.indexOf(toRemove);
        if (index !== -1) {
            // Remove from the scene if the mesh found
            this.meshes.splice(index, 1);
            if (!toRemove.parent) {
                toRemove._removeFromSceneRootNodes();
            }
        }
        this._inputManager._invalidateMesh(toRemove);
        this.onMeshRemovedObservable.notifyObservers(toRemove);
        if (recursive) {
            toRemove.getChildMeshes().forEach((m) => {
                this.removeMesh(m);
            });
        }
        return index;
    }
    /**
     * Add a transform node to the list of scene's transform nodes
     * @param newTransformNode defines the transform node to add
     */
    addTransformNode(newTransformNode) {
        if (this._blockEntityCollection) {
            return;
        }
        if (newTransformNode.getScene() === this && newTransformNode._indexInSceneTransformNodesArray !== -1) {
            // Already there?
            return;
        }
        newTransformNode._indexInSceneTransformNodesArray = this.transformNodes.length;
        this.transformNodes.push(newTransformNode);
        if (!newTransformNode.parent) {
            newTransformNode._addToSceneRootNodes();
        }
        this.onNewTransformNodeAddedObservable.notifyObservers(newTransformNode);
    }
    /**
     * Remove a transform node for the list of scene's transform nodes
     * @param toRemove defines the transform node to remove
     * @returns the index where the transform node was in the transform node list
     */
    removeTransformNode(toRemove) {
        const index = toRemove._indexInSceneTransformNodesArray;
        if (index !== -1) {
            if (index !== this.transformNodes.length - 1) {
                const lastNode = this.transformNodes[this.transformNodes.length - 1];
                this.transformNodes[index] = lastNode;
                lastNode._indexInSceneTransformNodesArray = index;
            }
            toRemove._indexInSceneTransformNodesArray = -1;
            this.transformNodes.pop();
            if (!toRemove.parent) {
                toRemove._removeFromSceneRootNodes();
            }
        }
        this.onTransformNodeRemovedObservable.notifyObservers(toRemove);
        return index;
    }
    /**
     * Remove a skeleton for the list of scene's skeletons
     * @param toRemove defines the skeleton to remove
     * @returns the index where the skeleton was in the skeleton list
     */
    removeSkeleton(toRemove) {
        const index = this.skeletons.indexOf(toRemove);
        if (index !== -1) {
            // Remove from the scene if found
            this.skeletons.splice(index, 1);
            this.onSkeletonRemovedObservable.notifyObservers(toRemove);
            // Clean active container
            this._executeActiveContainerCleanup(this._activeSkeletons);
        }
        return index;
    }
    /**
     * Remove a morph target for the list of scene's morph targets
     * @param toRemove defines the morph target to remove
     * @returns the index where the morph target was in the morph target list
     */
    removeMorphTargetManager(toRemove) {
        const index = this.morphTargetManagers.indexOf(toRemove);
        if (index !== -1) {
            // Remove from the scene if found
            this.morphTargetManagers.splice(index, 1);
        }
        return index;
    }
    /**
     * Remove a light for the list of scene's lights
     * @param toRemove defines the light to remove
     * @returns the index where the light was in the light list
     */
    removeLight(toRemove) {
        const index = this.lights.indexOf(toRemove);
        if (index !== -1) {
            // Remove from meshes
            for (const mesh of this.meshes) {
                mesh._removeLightSource(toRemove, false);
            }
            // Remove from the scene if mesh found
            this.lights.splice(index, 1);
            this.sortLightsByPriority();
            if (!toRemove.parent) {
                toRemove._removeFromSceneRootNodes();
            }
        }
        this.onLightRemovedObservable.notifyObservers(toRemove);
        return index;
    }
    /**
     * Remove a camera for the list of scene's cameras
     * @param toRemove defines the camera to remove
     * @returns the index where the camera was in the camera list
     */
    removeCamera(toRemove) {
        const index = this.cameras.indexOf(toRemove);
        if (index !== -1) {
            // Remove from the scene if mesh found
            this.cameras.splice(index, 1);
            if (!toRemove.parent) {
                toRemove._removeFromSceneRootNodes();
            }
        }
        // Remove from activeCameras
        if (this.activeCameras) {
            const index2 = this.activeCameras.indexOf(toRemove);
            if (index2 !== -1) {
                // Remove from the scene if mesh found
                this.activeCameras.splice(index2, 1);
            }
        }
        // Reset the activeCamera
        if (this.activeCamera === toRemove) {
            if (this.cameras.length > 0) {
                this.activeCamera = this.cameras[0];
            }
            else {
                this.activeCamera = null;
            }
        }
        this.onCameraRemovedObservable.notifyObservers(toRemove);
        return index;
    }
    /**
     * Remove a particle system for the list of scene's particle systems
     * @param toRemove defines the particle system to remove
     * @returns the index where the particle system was in the particle system list
     */
    removeParticleSystem(toRemove) {
        const index = this.particleSystems.indexOf(toRemove);
        if (index !== -1) {
            this.particleSystems.splice(index, 1);
            // Clean active container
            this._executeActiveContainerCleanup(this._activeParticleSystems);
        }
        return index;
    }
    /**
     * Remove a animation for the list of scene's animations
     * @param toRemove defines the animation to remove
     * @returns the index where the animation was in the animation list
     */
    removeAnimation(toRemove) {
        const index = this.animations.indexOf(toRemove);
        if (index !== -1) {
            this.animations.splice(index, 1);
        }
        return index;
    }
    /**
     * Will stop the animation of the given target
     * @param target - the target
     * @param animationName - the name of the animation to stop (all animations will be stopped if both this and targetMask are empty)
     * @param targetMask - a function that determines if the animation should be stopped based on its target (all animations will be stopped if both this and animationName are empty)
     */
    stopAnimation(target, animationName, targetMask) {
        // Do nothing as code will be provided by animation component
    }
    /**
     * Removes the given animation group from this scene.
     * @param toRemove The animation group to remove
     * @returns The index of the removed animation group
     */
    removeAnimationGroup(toRemove) {
        const index = this.animationGroups.indexOf(toRemove);
        if (index !== -1) {
            this.animationGroups.splice(index, 1);
        }
        return index;
    }
    /**
     * Removes the given multi-material from this scene.
     * @param toRemove The multi-material to remove
     * @returns The index of the removed multi-material
     */
    removeMultiMaterial(toRemove) {
        const index = this.multiMaterials.indexOf(toRemove);
        if (index !== -1) {
            this.multiMaterials.splice(index, 1);
        }
        this.onMultiMaterialRemovedObservable.notifyObservers(toRemove);
        return index;
    }
    /**
     * Removes the given material from this scene.
     * @param toRemove The material to remove
     * @returns The index of the removed material
     */
    removeMaterial(toRemove) {
        const index = toRemove._indexInSceneMaterialArray;
        if (index !== -1 && index < this.materials.length) {
            if (index !== this.materials.length - 1) {
                const lastMaterial = this.materials[this.materials.length - 1];
                this.materials[index] = lastMaterial;
                lastMaterial._indexInSceneMaterialArray = index;
            }
            toRemove._indexInSceneMaterialArray = -1;
            this.materials.pop();
        }
        this.onMaterialRemovedObservable.notifyObservers(toRemove);
        return index;
    }
    /**
     * Removes the given action manager from this scene.
     * @deprecated
     * @param toRemove The action manager to remove
     * @returns The index of the removed action manager
     */
    removeActionManager(toRemove) {
        const index = this.actionManagers.indexOf(toRemove);
        if (index !== -1) {
            this.actionManagers.splice(index, 1);
        }
        return index;
    }
    /**
     * Removes the given texture from this scene.
     * @param toRemove The texture to remove
     * @returns The index of the removed texture
     */
    removeTexture(toRemove) {
        const index = this.textures.indexOf(toRemove);
        if (index !== -1) {
            this.textures.splice(index, 1);
        }
        this.onTextureRemovedObservable.notifyObservers(toRemove);
        return index;
    }
    /**
     * Adds the given light to this scene
     * @param newLight The light to add
     */
    addLight(newLight) {
        if (this._blockEntityCollection) {
            return;
        }
        this.lights.push(newLight);
        this.sortLightsByPriority();
        if (!newLight.parent) {
            newLight._addToSceneRootNodes();
        }
        // Add light to all meshes (To support if the light is removed and then re-added)
        for (const mesh of this.meshes) {
            if (mesh.lightSources.indexOf(newLight) === -1) {
                mesh.lightSources.push(newLight);
                mesh._resyncLightSources();
            }
        }
        tools/* Tools */.S0.SetImmediate(() => {
            this.onNewLightAddedObservable.notifyObservers(newLight);
        });
    }
    /**
     * Sorts the list list based on light priorities
     */
    sortLightsByPriority() {
        if (this.requireLightSorting) {
            this.lights.sort(lightConstants/* LightConstants */.c.CompareLightsPriority);
        }
    }
    /**
     * Adds the given camera to this scene
     * @param newCamera The camera to add
     */
    addCamera(newCamera) {
        if (this._blockEntityCollection) {
            return;
        }
        this.cameras.push(newCamera);
        tools/* Tools */.S0.SetImmediate(() => {
            this.onNewCameraAddedObservable.notifyObservers(newCamera);
        });
        if (!newCamera.parent) {
            newCamera._addToSceneRootNodes();
        }
    }
    /**
     * Adds the given skeleton to this scene
     * @param newSkeleton The skeleton to add
     */
    addSkeleton(newSkeleton) {
        if (this._blockEntityCollection) {
            return;
        }
        this.skeletons.push(newSkeleton);
        tools/* Tools */.S0.SetImmediate(() => {
            this.onNewSkeletonAddedObservable.notifyObservers(newSkeleton);
        });
    }
    /**
     * Adds the given particle system to this scene
     * @param newParticleSystem The particle system to add
     */
    addParticleSystem(newParticleSystem) {
        if (this._blockEntityCollection) {
            return;
        }
        this.particleSystems.push(newParticleSystem);
    }
    /**
     * Adds the given animation to this scene
     * @param newAnimation The animation to add
     */
    addAnimation(newAnimation) {
        if (this._blockEntityCollection) {
            return;
        }
        this.animations.push(newAnimation);
    }
    /**
     * Adds the given animation group to this scene.
     * @param newAnimationGroup The animation group to add
     */
    addAnimationGroup(newAnimationGroup) {
        if (this._blockEntityCollection) {
            return;
        }
        this.animationGroups.push(newAnimationGroup);
    }
    /**
     * Adds the given multi-material to this scene
     * @param newMultiMaterial The multi-material to add
     */
    addMultiMaterial(newMultiMaterial) {
        if (this._blockEntityCollection) {
            return;
        }
        this.multiMaterials.push(newMultiMaterial);
        tools/* Tools */.S0.SetImmediate(() => {
            this.onNewMultiMaterialAddedObservable.notifyObservers(newMultiMaterial);
        });
    }
    /**
     * Adds the given material to this scene
     * @param newMaterial The material to add
     */
    addMaterial(newMaterial) {
        if (this._blockEntityCollection) {
            return;
        }
        if (newMaterial.getScene() === this && newMaterial._indexInSceneMaterialArray !== -1) {
            // Already there??
            return;
        }
        newMaterial._indexInSceneMaterialArray = this.materials.length;
        this.materials.push(newMaterial);
        tools/* Tools */.S0.SetImmediate(() => {
            this.onNewMaterialAddedObservable.notifyObservers(newMaterial);
        });
    }
    /**
     * Adds the given morph target to this scene
     * @param newMorphTargetManager The morph target to add
     */
    addMorphTargetManager(newMorphTargetManager) {
        if (this._blockEntityCollection) {
            return;
        }
        this.morphTargetManagers.push(newMorphTargetManager);
    }
    /**
     * Adds the given geometry to this scene
     * @param newGeometry The geometry to add
     */
    addGeometry(newGeometry) {
        if (this._blockEntityCollection) {
            return;
        }
        if (this._geometriesByUniqueId) {
            this._geometriesByUniqueId[newGeometry.uniqueId] = this.geometries.length;
        }
        this.geometries.push(newGeometry);
    }
    /**
     * Adds the given action manager to this scene
     * @deprecated
     * @param newActionManager The action manager to add
     */
    addActionManager(newActionManager) {
        this.actionManagers.push(newActionManager);
    }
    /**
     * Adds the given texture to this scene.
     * @param newTexture The texture to add
     */
    addTexture(newTexture) {
        if (this._blockEntityCollection) {
            return;
        }
        this.textures.push(newTexture);
        this.onNewTextureAddedObservable.notifyObservers(newTexture);
    }
    /**
     * Switch active camera
     * @param newCamera defines the new active camera
     * @param attachControl defines if attachControl must be called for the new active camera (default: true)
     */
    switchActiveCamera(newCamera, attachControl = true) {
        const canvas = this._engine.getInputElement();
        if (!canvas) {
            return;
        }
        if (this.activeCamera) {
            this.activeCamera.detachControl();
        }
        this.activeCamera = newCamera;
        if (attachControl) {
            newCamera.attachControl();
        }
    }
    /**
     * sets the active camera of the scene using its Id
     * @param id defines the camera's Id
     * @returns the new active camera or null if none found.
     */
    setActiveCameraById(id) {
        const camera = this.getCameraById(id);
        if (camera) {
            this.activeCamera = camera;
            return camera;
        }
        return null;
    }
    /**
     * sets the active camera of the scene using its name
     * @param name defines the camera's name
     * @returns the new active camera or null if none found.
     */
    setActiveCameraByName(name) {
        const camera = this.getCameraByName(name);
        if (camera) {
            this.activeCamera = camera;
            return camera;
        }
        return null;
    }
    /**
     * get an animation group using its name
     * @param name defines the material's name
     * @returns the animation group or null if none found.
     */
    getAnimationGroupByName(name) {
        for (let index = 0; index < this.animationGroups.length; index++) {
            if (this.animationGroups[index].name === name) {
                return this.animationGroups[index];
            }
        }
        return null;
    }
    _getMaterial(allowMultiMaterials, predicate) {
        for (let index = 0; index < this.materials.length; index++) {
            const material = this.materials[index];
            if (predicate(material)) {
                return material;
            }
        }
        if (allowMultiMaterials) {
            for (let index = 0; index < this.multiMaterials.length; index++) {
                const material = this.multiMaterials[index];
                if (predicate(material)) {
                    return material;
                }
            }
        }
        return null;
    }
    /**
     * Get a material using its unique id
     * @param uniqueId defines the material's unique id
     * @param allowMultiMaterials determines whether multimaterials should be considered
     * @returns the material or null if none found.
     */
    getMaterialByUniqueID(uniqueId, allowMultiMaterials = false) {
        return this._getMaterial(allowMultiMaterials, (m) => m.uniqueId === uniqueId);
    }
    /**
     * get a material using its id
     * @param id defines the material's Id
     * @param allowMultiMaterials determines whether multimaterials should be considered
     * @returns the material or null if none found.
     */
    getMaterialById(id, allowMultiMaterials = false) {
        return this._getMaterial(allowMultiMaterials, (m) => m.id === id);
    }
    /**
     * Gets a material using its name
     * @param name defines the material's name
     * @param allowMultiMaterials determines whether multimaterials should be considered
     * @returns the material or null if none found.
     */
    getMaterialByName(name, allowMultiMaterials = false) {
        return this._getMaterial(allowMultiMaterials, (m) => m.name === name);
    }
    /**
     * Gets a last added material using a given id
     * @param id defines the material's id
     * @param allowMultiMaterials determines whether multimaterials should be considered
     * @returns the last material with the given id or null if none found.
     */
    getLastMaterialById(id, allowMultiMaterials = false) {
        for (let index = this.materials.length - 1; index >= 0; index--) {
            if (this.materials[index].id === id) {
                return this.materials[index];
            }
        }
        if (allowMultiMaterials) {
            for (let index = this.multiMaterials.length - 1; index >= 0; index--) {
                if (this.multiMaterials[index].id === id) {
                    return this.multiMaterials[index];
                }
            }
        }
        return null;
    }
    /**
     * Get a texture using its unique id
     * @param uniqueId defines the texture's unique id
     * @returns the texture or null if none found.
     */
    getTextureByUniqueId(uniqueId) {
        for (let index = 0; index < this.textures.length; index++) {
            if (this.textures[index].uniqueId === uniqueId) {
                return this.textures[index];
            }
        }
        return null;
    }
    /**
     * Gets a texture using its name
     * @param name defines the texture's name
     * @returns the texture or null if none found.
     */
    getTextureByName(name) {
        for (let index = 0; index < this.textures.length; index++) {
            if (this.textures[index].name === name) {
                return this.textures[index];
            }
        }
        return null;
    }
    /**
     * Gets a camera using its Id
     * @param id defines the Id to look for
     * @returns the camera or null if not found
     */
    getCameraById(id) {
        for (let index = 0; index < this.cameras.length; index++) {
            if (this.cameras[index].id === id) {
                return this.cameras[index];
            }
        }
        return null;
    }
    /**
     * Gets a camera using its unique Id
     * @param uniqueId defines the unique Id to look for
     * @returns the camera or null if not found
     */
    getCameraByUniqueId(uniqueId) {
        for (let index = 0; index < this.cameras.length; index++) {
            if (this.cameras[index].uniqueId === uniqueId) {
                return this.cameras[index];
            }
        }
        return null;
    }
    /**
     * Gets a camera using its name
     * @param name defines the camera's name
     * @returns the camera or null if none found.
     */
    getCameraByName(name) {
        for (let index = 0; index < this.cameras.length; index++) {
            if (this.cameras[index].name === name) {
                return this.cameras[index];
            }
        }
        return null;
    }
    /**
     * Gets a bone using its Id
     * @param id defines the bone's Id
     * @returns the bone or null if not found
     */
    getBoneById(id) {
        for (let skeletonIndex = 0; skeletonIndex < this.skeletons.length; skeletonIndex++) {
            const skeleton = this.skeletons[skeletonIndex];
            for (let boneIndex = 0; boneIndex < skeleton.bones.length; boneIndex++) {
                if (skeleton.bones[boneIndex].id === id) {
                    return skeleton.bones[boneIndex];
                }
            }
        }
        return null;
    }
    /**
     * Gets a bone using its id
     * @param name defines the bone's name
     * @returns the bone or null if not found
     */
    getBoneByName(name) {
        for (let skeletonIndex = 0; skeletonIndex < this.skeletons.length; skeletonIndex++) {
            const skeleton = this.skeletons[skeletonIndex];
            for (let boneIndex = 0; boneIndex < skeleton.bones.length; boneIndex++) {
                if (skeleton.bones[boneIndex].name === name) {
                    return skeleton.bones[boneIndex];
                }
            }
        }
        return null;
    }
    /**
     * Gets a light node using its name
     * @param name defines the light's name
     * @returns the light or null if none found.
     */
    getLightByName(name) {
        for (let index = 0; index < this.lights.length; index++) {
            if (this.lights[index].name === name) {
                return this.lights[index];
            }
        }
        return null;
    }
    /**
     * Gets a light node using its Id
     * @param id defines the light's Id
     * @returns the light or null if none found.
     */
    getLightById(id) {
        for (let index = 0; index < this.lights.length; index++) {
            if (this.lights[index].id === id) {
                return this.lights[index];
            }
        }
        return null;
    }
    /**
     * Gets a light node using its scene-generated unique Id
     * @param uniqueId defines the light's unique Id
     * @returns the light or null if none found.
     */
    getLightByUniqueId(uniqueId) {
        for (let index = 0; index < this.lights.length; index++) {
            if (this.lights[index].uniqueId === uniqueId) {
                return this.lights[index];
            }
        }
        return null;
    }
    /**
     * Gets a particle system by Id
     * @param id defines the particle system Id
     * @returns the corresponding system or null if none found
     */
    getParticleSystemById(id) {
        for (let index = 0; index < this.particleSystems.length; index++) {
            if (this.particleSystems[index].id === id) {
                return this.particleSystems[index];
            }
        }
        return null;
    }
    /**
     * Gets a geometry using its Id
     * @param id defines the geometry's Id
     * @returns the geometry or null if none found.
     */
    getGeometryById(id) {
        for (let index = 0; index < this.geometries.length; index++) {
            if (this.geometries[index].id === id) {
                return this.geometries[index];
            }
        }
        return null;
    }
    _getGeometryByUniqueId(uniqueId) {
        if (this._geometriesByUniqueId) {
            const index = this._geometriesByUniqueId[uniqueId];
            if (index !== undefined) {
                return this.geometries[index];
            }
        }
        else {
            for (let index = 0; index < this.geometries.length; index++) {
                if (this.geometries[index].uniqueId === uniqueId) {
                    return this.geometries[index];
                }
            }
        }
        return null;
    }
    /**
     * Add a new geometry to this scene
     * @param geometry defines the geometry to be added to the scene.
     * @param force defines if the geometry must be pushed even if a geometry with this id already exists
     * @returns a boolean defining if the geometry was added or not
     */
    pushGeometry(geometry, force) {
        if (!force && this._getGeometryByUniqueId(geometry.uniqueId)) {
            return false;
        }
        this.addGeometry(geometry);
        tools/* Tools */.S0.SetImmediate(() => {
            this.onNewGeometryAddedObservable.notifyObservers(geometry);
        });
        return true;
    }
    /**
     * Removes an existing geometry
     * @param geometry defines the geometry to be removed from the scene
     * @returns a boolean defining if the geometry was removed or not
     */
    removeGeometry(geometry) {
        let index;
        if (this._geometriesByUniqueId) {
            index = this._geometriesByUniqueId[geometry.uniqueId];
            if (index === undefined) {
                return false;
            }
        }
        else {
            index = this.geometries.indexOf(geometry);
            if (index < 0) {
                return false;
            }
        }
        if (index !== this.geometries.length - 1) {
            const lastGeometry = this.geometries[this.geometries.length - 1];
            if (lastGeometry) {
                this.geometries[index] = lastGeometry;
                if (this._geometriesByUniqueId) {
                    this._geometriesByUniqueId[lastGeometry.uniqueId] = index;
                }
            }
        }
        if (this._geometriesByUniqueId) {
            this._geometriesByUniqueId[geometry.uniqueId] = undefined;
        }
        this.geometries.pop();
        this.onGeometryRemovedObservable.notifyObservers(geometry);
        return true;
    }
    /**
     * Gets the list of geometries attached to the scene
     * @returns an array of Geometry
     */
    getGeometries() {
        return this.geometries;
    }
    /**
     * Gets the first added mesh found of a given Id
     * @param id defines the Id to search for
     * @returns the mesh found or null if not found at all
     */
    getMeshById(id) {
        for (let index = 0; index < this.meshes.length; index++) {
            if (this.meshes[index].id === id) {
                return this.meshes[index];
            }
        }
        return null;
    }
    /**
     * Gets a list of meshes using their Id
     * @param id defines the Id to search for
     * @returns a list of meshes
     */
    getMeshesById(id) {
        return this.meshes.filter(function (m) {
            return m.id === id;
        });
    }
    /**
     * Gets the first added transform node found of a given Id
     * @param id defines the Id to search for
     * @returns the found transform node or null if not found at all.
     */
    getTransformNodeById(id) {
        for (let index = 0; index < this.transformNodes.length; index++) {
            if (this.transformNodes[index].id === id) {
                return this.transformNodes[index];
            }
        }
        return null;
    }
    /**
     * Gets a transform node with its auto-generated unique Id
     * @param uniqueId defines the unique Id to search for
     * @returns the found transform node or null if not found at all.
     */
    getTransformNodeByUniqueId(uniqueId) {
        for (let index = 0; index < this.transformNodes.length; index++) {
            if (this.transformNodes[index].uniqueId === uniqueId) {
                return this.transformNodes[index];
            }
        }
        return null;
    }
    /**
     * Gets a list of transform nodes using their Id
     * @param id defines the Id to search for
     * @returns a list of transform nodes
     */
    getTransformNodesById(id) {
        return this.transformNodes.filter(function (m) {
            return m.id === id;
        });
    }
    /**
     * Gets a mesh with its auto-generated unique Id
     * @param uniqueId defines the unique Id to search for
     * @returns the found mesh or null if not found at all.
     */
    getMeshByUniqueId(uniqueId) {
        for (let index = 0; index < this.meshes.length; index++) {
            if (this.meshes[index].uniqueId === uniqueId) {
                return this.meshes[index];
            }
        }
        return null;
    }
    /**
     * Gets a the last added mesh using a given Id
     * @param id defines the Id to search for
     * @returns the found mesh or null if not found at all.
     */
    getLastMeshById(id) {
        for (let index = this.meshes.length - 1; index >= 0; index--) {
            if (this.meshes[index].id === id) {
                return this.meshes[index];
            }
        }
        return null;
    }
    /**
     * Gets a the last transform node using a given Id
     * @param id defines the Id to search for
     * @returns the found mesh or null if not found at all.
     */
    getLastTransformNodeById(id) {
        for (let index = this.transformNodes.length - 1; index >= 0; index--) {
            if (this.transformNodes[index].id === id) {
                return this.transformNodes[index];
            }
        }
        return null;
    }
    /**
     * Gets a the last added node (Mesh, Camera, Light) using a given Id
     * @param id defines the Id to search for
     * @returns the found node or null if not found at all
     */
    getLastEntryById(id) {
        let index;
        for (index = this.meshes.length - 1; index >= 0; index--) {
            if (this.meshes[index].id === id) {
                return this.meshes[index];
            }
        }
        for (index = this.transformNodes.length - 1; index >= 0; index--) {
            if (this.transformNodes[index].id === id) {
                return this.transformNodes[index];
            }
        }
        for (index = this.cameras.length - 1; index >= 0; index--) {
            if (this.cameras[index].id === id) {
                return this.cameras[index];
            }
        }
        for (index = this.lights.length - 1; index >= 0; index--) {
            if (this.lights[index].id === id) {
                return this.lights[index];
            }
        }
        return null;
    }
    /**
     * Gets a node (Mesh, Camera, Light) using a given Id
     * @param id defines the Id to search for
     * @returns the found node or null if not found at all
     */
    getNodeById(id) {
        const mesh = this.getMeshById(id);
        if (mesh) {
            return mesh;
        }
        const transformNode = this.getTransformNodeById(id);
        if (transformNode) {
            return transformNode;
        }
        const light = this.getLightById(id);
        if (light) {
            return light;
        }
        const camera = this.getCameraById(id);
        if (camera) {
            return camera;
        }
        const bone = this.getBoneById(id);
        if (bone) {
            return bone;
        }
        return null;
    }
    /**
     * Gets a node (Mesh, Camera, Light) using a given name
     * @param name defines the name to search for
     * @returns the found node or null if not found at all.
     */
    getNodeByName(name) {
        const mesh = this.getMeshByName(name);
        if (mesh) {
            return mesh;
        }
        const transformNode = this.getTransformNodeByName(name);
        if (transformNode) {
            return transformNode;
        }
        const light = this.getLightByName(name);
        if (light) {
            return light;
        }
        const camera = this.getCameraByName(name);
        if (camera) {
            return camera;
        }
        const bone = this.getBoneByName(name);
        if (bone) {
            return bone;
        }
        return null;
    }
    /**
     * Gets a mesh using a given name
     * @param name defines the name to search for
     * @returns the found mesh or null if not found at all.
     */
    getMeshByName(name) {
        for (let index = 0; index < this.meshes.length; index++) {
            if (this.meshes[index].name === name) {
                return this.meshes[index];
            }
        }
        return null;
    }
    /**
     * Gets a transform node using a given name
     * @param name defines the name to search for
     * @returns the found transform node or null if not found at all.
     */
    getTransformNodeByName(name) {
        for (let index = 0; index < this.transformNodes.length; index++) {
            if (this.transformNodes[index].name === name) {
                return this.transformNodes[index];
            }
        }
        return null;
    }
    /**
     * Gets a skeleton using a given Id (if many are found, this function will pick the last one)
     * @param id defines the Id to search for
     * @returns the found skeleton or null if not found at all.
     */
    getLastSkeletonById(id) {
        for (let index = this.skeletons.length - 1; index >= 0; index--) {
            if (this.skeletons[index].id === id) {
                return this.skeletons[index];
            }
        }
        return null;
    }
    /**
     * Gets a skeleton using a given auto generated unique id
     * @param  uniqueId defines the unique id to search for
     * @returns the found skeleton or null if not found at all.
     */
    getSkeletonByUniqueId(uniqueId) {
        for (let index = 0; index < this.skeletons.length; index++) {
            if (this.skeletons[index].uniqueId === uniqueId) {
                return this.skeletons[index];
            }
        }
        return null;
    }
    /**
     * Gets a skeleton using a given id (if many are found, this function will pick the first one)
     * @param id defines the id to search for
     * @returns the found skeleton or null if not found at all.
     */
    getSkeletonById(id) {
        for (let index = 0; index < this.skeletons.length; index++) {
            if (this.skeletons[index].id === id) {
                return this.skeletons[index];
            }
        }
        return null;
    }
    /**
     * Gets a skeleton using a given name
     * @param name defines the name to search for
     * @returns the found skeleton or null if not found at all.
     */
    getSkeletonByName(name) {
        for (let index = 0; index < this.skeletons.length; index++) {
            if (this.skeletons[index].name === name) {
                return this.skeletons[index];
            }
        }
        return null;
    }
    /**
     * Gets a morph target manager  using a given id (if many are found, this function will pick the last one)
     * @param id defines the id to search for
     * @returns the found morph target manager or null if not found at all.
     */
    getMorphTargetManagerById(id) {
        for (let index = 0; index < this.morphTargetManagers.length; index++) {
            if (this.morphTargetManagers[index].uniqueId === id) {
                return this.morphTargetManagers[index];
            }
        }
        return null;
    }
    /**
     * Gets a morph target using a given id (if many are found, this function will pick the first one)
     * @param id defines the id to search for
     * @returns the found morph target or null if not found at all.
     */
    getMorphTargetById(id) {
        for (let managerIndex = 0; managerIndex < this.morphTargetManagers.length; ++managerIndex) {
            const morphTargetManager = this.morphTargetManagers[managerIndex];
            for (let index = 0; index < morphTargetManager.numTargets; ++index) {
                const target = morphTargetManager.getTarget(index);
                if (target.id === id) {
                    return target;
                }
            }
        }
        return null;
    }
    /**
     * Gets a morph target using a given name (if many are found, this function will pick the first one)
     * @param name defines the name to search for
     * @returns the found morph target or null if not found at all.
     */
    getMorphTargetByName(name) {
        for (let managerIndex = 0; managerIndex < this.morphTargetManagers.length; ++managerIndex) {
            const morphTargetManager = this.morphTargetManagers[managerIndex];
            for (let index = 0; index < morphTargetManager.numTargets; ++index) {
                const target = morphTargetManager.getTarget(index);
                if (target.name === name) {
                    return target;
                }
            }
        }
        return null;
    }
    /**
     * Gets a post process using a given name (if many are found, this function will pick the first one)
     * @param name defines the name to search for
     * @returns the found post process or null if not found at all.
     */
    getPostProcessByName(name) {
        for (let postProcessIndex = 0; postProcessIndex < this.postProcesses.length; ++postProcessIndex) {
            const postProcess = this.postProcesses[postProcessIndex];
            if (postProcess.name === name) {
                return postProcess;
            }
        }
        return null;
    }
    /**
     * Gets a boolean indicating if the given mesh is active
     * @param mesh defines the mesh to look for
     * @returns true if the mesh is in the active list
     */
    isActiveMesh(mesh) {
        return this._activeMeshes.indexOf(mesh) !== -1;
    }
    /**
     * Return a unique id as a string which can serve as an identifier for the scene
     */
    get uid() {
        if (!this._uid) {
            this._uid = tools/* Tools */.S0.RandomId();
        }
        return this._uid;
    }
    /**
     * Add an externally attached data from its key.
     * This method call will fail and return false, if such key already exists.
     * If you don't care and just want to get the data no matter what, use the more convenient getOrAddExternalDataWithFactory() method.
     * @param key the unique key that identifies the data
     * @param data the data object to associate to the key for this Engine instance
     * @returns true if no such key were already present and the data was added successfully, false otherwise
     */
    addExternalData(key, data) {
        if (!this._externalData) {
            this._externalData = new stringDictionary/* StringDictionary */.w();
        }
        return this._externalData.add(key, data);
    }
    /**
     * Get an externally attached data from its key
     * @param key the unique key that identifies the data
     * @returns the associated data, if present (can be null), or undefined if not present
     */
    getExternalData(key) {
        if (!this._externalData) {
            return null;
        }
        return this._externalData.get(key);
    }
    /**
     * Get an externally attached data from its key, create it using a factory if it's not already present
     * @param key the unique key that identifies the data
     * @param factory the factory that will be called to create the instance if and only if it doesn't exists
     * @returns the associated data, can be null if the factory returned null.
     */
    getOrAddExternalDataWithFactory(key, factory) {
        if (!this._externalData) {
            this._externalData = new stringDictionary/* StringDictionary */.w();
        }
        return this._externalData.getOrAddWithFactory(key, factory);
    }
    /**
     * Remove an externally attached data from the Engine instance
     * @param key the unique key that identifies the data
     * @returns true if the data was successfully removed, false if it doesn't exist
     */
    removeExternalData(key) {
        return this._externalData.remove(key);
    }
    _evaluateSubMesh(subMesh, mesh, initialMesh, forcePush) {
        if (forcePush || subMesh.isInFrustum(this._frustumPlanes)) {
            for (const step of this._evaluateSubMeshStage) {
                step.action(mesh, subMesh);
            }
            const material = subMesh.getMaterial();
            if (material !== null && material !== undefined) {
                // Render targets
                if (material.hasRenderTargetTextures && material.getRenderTargetTextures != null) {
                    if (this._processedMaterials.indexOf(material) === -1) {
                        this._processedMaterials.push(material);
                        this._materialsRenderTargets.concatWithNoDuplicate(material.getRenderTargetTextures());
                    }
                }
                // Dispatch
                this._renderingManager.dispatch(subMesh, mesh, material);
            }
        }
    }
    /**
     * Clear the processed materials smart array preventing retention point in material dispose.
     */
    freeProcessedMaterials() {
        this._processedMaterials.dispose();
    }
    /** Gets or sets a boolean blocking all the calls to freeActiveMeshes and freeRenderingGroups
     * It can be used in order to prevent going through methods freeRenderingGroups and freeActiveMeshes several times to improve performance
     * when disposing several meshes in a row or a hierarchy of meshes.
     * When used, it is the responsibility of the user to blockfreeActiveMeshesAndRenderingGroups back to false.
     */
    get blockfreeActiveMeshesAndRenderingGroups() {
        return this._preventFreeActiveMeshesAndRenderingGroups;
    }
    set blockfreeActiveMeshesAndRenderingGroups(value) {
        if (this._preventFreeActiveMeshesAndRenderingGroups === value) {
            return;
        }
        if (value) {
            this.freeActiveMeshes();
            this.freeRenderingGroups();
        }
        this._preventFreeActiveMeshesAndRenderingGroups = value;
    }
    /**
     * Clear the active meshes smart array preventing retention point in mesh dispose.
     */
    freeActiveMeshes() {
        if (this.blockfreeActiveMeshesAndRenderingGroups) {
            return;
        }
        this._activeMeshes.dispose();
        if (this.activeCamera && this.activeCamera._activeMeshes) {
            this.activeCamera._activeMeshes.dispose();
        }
        if (this.activeCameras) {
            for (let i = 0; i < this.activeCameras.length; i++) {
                const activeCamera = this.activeCameras[i];
                if (activeCamera && activeCamera._activeMeshes) {
                    activeCamera._activeMeshes.dispose();
                }
            }
        }
    }
    /**
     * Clear the info related to rendering groups preventing retention points during dispose.
     */
    freeRenderingGroups() {
        if (this.blockfreeActiveMeshesAndRenderingGroups) {
            return;
        }
        if (this._renderingManager) {
            this._renderingManager.freeRenderingGroups();
        }
        if (this.textures) {
            for (let i = 0; i < this.textures.length; i++) {
                const texture = this.textures[i];
                if (texture && texture.renderList) {
                    texture.freeRenderingGroups();
                }
            }
        }
    }
    /** @internal */
    _isInIntermediateRendering() {
        return this._intermediateRendering;
    }
    /**
     * Use this function to stop evaluating active meshes. The current list will be keep alive between frames
     * @param skipEvaluateActiveMeshes defines an optional boolean indicating that the evaluate active meshes step must be completely skipped
     * @param onSuccess optional success callback
     * @param onError optional error callback
     * @param freezeMeshes defines if meshes should be frozen (true by default)
     * @param keepFrustumCulling defines if you want to keep running the frustum clipping (false by default)
     * @returns the current scene
     */
    freezeActiveMeshes(skipEvaluateActiveMeshes = false, onSuccess, onError, freezeMeshes = true, keepFrustumCulling = false) {
        this.executeWhenReady(() => {
            if (!this.activeCamera) {
                onError && onError("No active camera found");
                return;
            }
            if (!this._frustumPlanes) {
                this.updateTransformMatrix();
            }
            this._evaluateActiveMeshes();
            this._activeMeshesFrozen = true;
            this._activeMeshesFrozenButKeepClipping = keepFrustumCulling;
            this._skipEvaluateActiveMeshesCompletely = skipEvaluateActiveMeshes;
            if (freezeMeshes) {
                for (let index = 0; index < this._activeMeshes.length; index++) {
                    this._activeMeshes.data[index]._freeze();
                }
            }
            onSuccess && onSuccess();
        });
        return this;
    }
    /**
     * Use this function to restart evaluating active meshes on every frame
     * @returns the current scene
     */
    unfreezeActiveMeshes() {
        for (let index = 0; index < this.meshes.length; index++) {
            const mesh = this.meshes[index];
            if (mesh._internalAbstractMeshDataInfo) {
                mesh._internalAbstractMeshDataInfo._isActive = false;
            }
        }
        for (let index = 0; index < this._activeMeshes.length; index++) {
            this._activeMeshes.data[index]._unFreeze();
        }
        this._activeMeshesFrozen = false;
        return this;
    }
    _executeActiveContainerCleanup(container) {
        const isInFastMode = this._engine.snapshotRendering && this._engine.snapshotRenderingMode === 1;
        if (!isInFastMode && this._activeMeshesFrozen && this._activeMeshes.length) {
            return; // Do not execute in frozen mode
        }
        // We need to ensure we are not in the rendering loop
        this.onBeforeRenderObservable.addOnce(() => container.dispose());
    }
    _evaluateActiveMeshes() {
        if (this._engine.snapshotRendering && this._engine.snapshotRenderingMode === 1) {
            if (this._activeMeshes.length > 0) {
                this.activeCamera?._activeMeshes.reset();
                this._activeMeshes.reset();
                this._renderingManager.reset();
                this._processedMaterials.reset();
                this._activeParticleSystems.reset();
                this._activeSkeletons.reset();
                this._softwareSkinnedMeshes.reset();
            }
            return;
        }
        if (this._activeMeshesFrozen && this._activeMeshes.length) {
            if (!this._skipEvaluateActiveMeshesCompletely) {
                const len = this._activeMeshes.length;
                for (let i = 0; i < len; i++) {
                    const mesh = this._activeMeshes.data[i];
                    mesh.computeWorldMatrix();
                }
            }
            if (this._activeParticleSystems) {
                const psLength = this._activeParticleSystems.length;
                for (let i = 0; i < psLength; i++) {
                    this._activeParticleSystems.data[i].animate();
                }
            }
            this._renderingManager.resetSprites();
            return;
        }
        if (!this.activeCamera) {
            return;
        }
        this.onBeforeActiveMeshesEvaluationObservable.notifyObservers(this);
        this.activeCamera._activeMeshes.reset();
        this._activeMeshes.reset();
        this._renderingManager.reset();
        this._processedMaterials.reset();
        this._activeParticleSystems.reset();
        this._activeSkeletons.reset();
        this._softwareSkinnedMeshes.reset();
        this._materialsRenderTargets.reset();
        for (const step of this._beforeEvaluateActiveMeshStage) {
            step.action();
        }
        // Determine mesh candidates
        const meshes = this.getActiveMeshCandidates();
        // Check each mesh
        const len = meshes.length;
        for (let i = 0; i < len; i++) {
            const mesh = meshes.data[i];
            let currentLOD = mesh._internalAbstractMeshDataInfo._currentLOD.get(this.activeCamera);
            if (currentLOD) {
                currentLOD[1] = -1;
            }
            else {
                currentLOD = [mesh, -1];
                mesh._internalAbstractMeshDataInfo._currentLOD.set(this.activeCamera, currentLOD);
            }
            if (mesh.isBlocked) {
                continue;
            }
            this._totalVertices.addCount(mesh.getTotalVertices(), false);
            if (!mesh.isReady() || !mesh.isEnabled() || mesh.scaling.hasAZeroComponent) {
                continue;
            }
            mesh.computeWorldMatrix();
            // Intersections
            if (mesh.actionManager && mesh.actionManager.hasSpecificTriggers2(12, 13)) {
                this._meshesForIntersections.pushNoDuplicate(mesh);
            }
            // Switch to current LOD
            let meshToRender = this.customLODSelector ? this.customLODSelector(mesh, this.activeCamera) : mesh.getLOD(this.activeCamera);
            currentLOD[0] = meshToRender;
            currentLOD[1] = this._frameId;
            if (meshToRender === undefined || meshToRender === null) {
                continue;
            }
            // Compute world matrix if LOD is billboard
            if (meshToRender !== mesh && meshToRender.billboardMode !== 0) {
                meshToRender.computeWorldMatrix();
            }
            mesh._preActivate();
            if (mesh.isVisible &&
                mesh.visibility > 0 &&
                (mesh.layerMask & this.activeCamera.layerMask) !== 0 &&
                (this._skipFrustumClipping || mesh.alwaysSelectAsActiveMesh || mesh.isInFrustum(this._frustumPlanes))) {
                this._activeMeshes.push(mesh);
                this.activeCamera._activeMeshes.push(mesh);
                if (meshToRender !== mesh) {
                    meshToRender._activate(this._renderId, false);
                }
                for (const step of this._preActiveMeshStage) {
                    step.action(mesh);
                }
                if (mesh._activate(this._renderId, false)) {
                    if (!mesh.isAnInstance) {
                        meshToRender._internalAbstractMeshDataInfo._onlyForInstances = false;
                    }
                    else {
                        if (mesh._internalAbstractMeshDataInfo._actAsRegularMesh) {
                            meshToRender = mesh;
                        }
                    }
                    meshToRender._internalAbstractMeshDataInfo._isActive = true;
                    this._activeMesh(mesh, meshToRender);
                }
                mesh._postActivate();
            }
        }
        this.onAfterActiveMeshesEvaluationObservable.notifyObservers(this);
        // Particle systems
        if (this.particlesEnabled) {
            this.onBeforeParticlesRenderingObservable.notifyObservers(this);
            for (let particleIndex = 0; particleIndex < this.particleSystems.length; particleIndex++) {
                const particleSystem = this.particleSystems[particleIndex];
                if (!particleSystem.isStarted() || !particleSystem.emitter) {
                    continue;
                }
                const emitter = particleSystem.emitter;
                if (!emitter.position || emitter.isEnabled()) {
                    this._activeParticleSystems.push(particleSystem);
                    particleSystem.animate();
                    this._renderingManager.dispatchParticles(particleSystem);
                }
            }
            this.onAfterParticlesRenderingObservable.notifyObservers(this);
        }
    }
    /** @internal */
    _prepareSkeleton(mesh) {
        if (!this._skeletonsEnabled || !mesh.skeleton) {
            return;
        }
        if (this._activeSkeletons.pushNoDuplicate(mesh.skeleton)) {
            mesh.skeleton.prepare();
            this._activeBones.addCount(mesh.skeleton.bones.length, false);
        }
        if (!mesh.computeBonesUsingShaders) {
            if (this._softwareSkinnedMeshes.pushNoDuplicate(mesh) && this.frameGraph) {
                mesh.applySkeleton(mesh.skeleton);
            }
        }
    }
    _activeMesh(sourceMesh, mesh) {
        this._prepareSkeleton(mesh);
        let forcePush = sourceMesh.hasInstances || sourceMesh.isAnInstance || this.dispatchAllSubMeshesOfActiveMeshes || this._skipFrustumClipping || mesh.alwaysSelectAsActiveMesh;
        if (mesh && mesh.subMeshes && mesh.subMeshes.length > 0) {
            const subMeshes = this.getActiveSubMeshCandidates(mesh);
            const len = subMeshes.length;
            forcePush = forcePush || len === 1;
            for (let i = 0; i < len; i++) {
                const subMesh = subMeshes.data[i];
                this._evaluateSubMesh(subMesh, mesh, sourceMesh, forcePush);
            }
        }
    }
    /**
     * Update the transform matrix to update from the current active camera
     * @param force defines a boolean used to force the update even if cache is up to date
     */
    updateTransformMatrix(force) {
        const activeCamera = this.activeCamera;
        if (!activeCamera) {
            return;
        }
        if (activeCamera._renderingMultiview) {
            const leftCamera = activeCamera._rigCameras[0];
            const rightCamera = activeCamera._rigCameras[1];
            this.setTransformMatrix(leftCamera.getViewMatrix(), leftCamera.getProjectionMatrix(force), rightCamera.getViewMatrix(), rightCamera.getProjectionMatrix(force));
        }
        else {
            this.setTransformMatrix(activeCamera.getViewMatrix(), activeCamera.getProjectionMatrix(force));
        }
    }
    _bindFrameBuffer(camera, clear = true) {
        if (camera && camera._multiviewTexture) {
            camera._multiviewTexture._bindFrameBuffer();
        }
        else if (camera && camera.outputRenderTarget) {
            camera.outputRenderTarget._bindFrameBuffer();
        }
        else {
            if (!this._engine._currentFrameBufferIsDefaultFrameBuffer()) {
                this._engine.restoreDefaultFramebuffer();
            }
        }
        if (clear) {
            this._clearFrameBuffer(camera);
        }
    }
    _clearFrameBuffer(camera) {
        // we assume the framebuffer currently bound is the right one
        if (camera && camera._multiviewTexture) {
            // no clearing
        }
        else if (camera && camera.outputRenderTarget && !camera._renderingMultiview) {
            const rtt = camera.outputRenderTarget;
            if (rtt.onClearObservable.hasObservers()) {
                rtt.onClearObservable.notifyObservers(this._engine);
            }
            else if (!rtt.skipInitialClear && !camera.isRightCamera) {
                if (this.autoClear) {
                    this._engine.clear(rtt.clearColor || this._clearColor, !rtt._cleared, true, true);
                }
                rtt._cleared = true;
            }
        }
        else {
            if (!this._defaultFrameBufferCleared) {
                this._defaultFrameBufferCleared = true;
                this._clear();
            }
            else {
                this._engine.clear(null, false, true, true);
            }
        }
    }
    /**
     * @internal
     */
    _renderForCamera(camera, rigParent, bindFrameBuffer = true) {
        if (camera && camera._skipRendering) {
            return;
        }
        const engine = this._engine;
        // Use _activeCamera instead of activeCamera to avoid onActiveCameraChanged
        this._activeCamera = camera;
        if (!this.activeCamera) {
            throw new Error("Active camera not set");
        }
        // Viewport
        engine.setViewport(this.activeCamera.viewport);
        // Camera
        this.resetCachedMaterial();
        this._renderId++;
        if (!this.prePass && bindFrameBuffer) {
            let skipInitialClear = true;
            if (camera._renderingMultiview && camera.outputRenderTarget) {
                skipInitialClear = camera.outputRenderTarget.skipInitialClear;
                if (this.autoClear) {
                    this._defaultFrameBufferCleared = false;
                    camera.outputRenderTarget.skipInitialClear = false;
                }
            }
            this._bindFrameBuffer(this._activeCamera);
            if (camera._renderingMultiview && camera.outputRenderTarget) {
                camera.outputRenderTarget.skipInitialClear = skipInitialClear;
            }
        }
        this.updateTransformMatrix();
        this.onBeforeCameraRenderObservable.notifyObservers(this.activeCamera);
        // Meshes
        this._evaluateActiveMeshes();
        // Software skinning
        for (let softwareSkinnedMeshIndex = 0; softwareSkinnedMeshIndex < this._softwareSkinnedMeshes.length; softwareSkinnedMeshIndex++) {
            const mesh = this._softwareSkinnedMeshes.data[softwareSkinnedMeshIndex];
            mesh.applySkeleton(mesh.skeleton);
        }
        // Render targets
        this.onBeforeRenderTargetsRenderObservable.notifyObservers(this);
        this._renderTargets.concatWithNoDuplicate(this._materialsRenderTargets);
        if (camera.customRenderTargets && camera.customRenderTargets.length > 0) {
            this._renderTargets.concatWithNoDuplicate(camera.customRenderTargets);
        }
        if (rigParent && rigParent.customRenderTargets && rigParent.customRenderTargets.length > 0) {
            this._renderTargets.concatWithNoDuplicate(rigParent.customRenderTargets);
        }
        if (this.environmentTexture && this.environmentTexture.isRenderTarget) {
            this._renderTargets.pushNoDuplicate(this.environmentTexture);
        }
        // Collects render targets from external components.
        for (const step of this._gatherActiveCameraRenderTargetsStage) {
            step.action(this._renderTargets);
        }
        let needRebind = false;
        if (this.renderTargetsEnabled) {
            this._intermediateRendering = true;
            if (this._renderTargets.length > 0) {
                tools/* Tools */.S0.StartPerformanceCounter("Render targets", this._renderTargets.length > 0);
                for (let renderIndex = 0; renderIndex < this._renderTargets.length; renderIndex++) {
                    const renderTarget = this._renderTargets.data[renderIndex];
                    if (renderTarget._shouldRender()) {
                        this._renderId++;
                        const hasSpecialRenderTargetCamera = renderTarget.activeCamera && renderTarget.activeCamera !== this.activeCamera;
                        renderTarget.render(hasSpecialRenderTargetCamera, this.dumpNextRenderTargets);
                        needRebind = true;
                    }
                }
                tools/* Tools */.S0.EndPerformanceCounter("Render targets", this._renderTargets.length > 0);
                this._renderId++;
            }
            for (const step of this._cameraDrawRenderTargetStage) {
                needRebind = step.action(this.activeCamera) || needRebind;
            }
            this._intermediateRendering = false;
        }
        this._engine.currentRenderPassId = camera.outputRenderTarget?.renderPassId ?? camera.renderPassId ?? 0;
        // Restore framebuffer after rendering to targets
        if (needRebind && !this.prePass) {
            this._bindFrameBuffer(this._activeCamera, false);
            this.updateTransformMatrix();
        }
        this.onAfterRenderTargetsRenderObservable.notifyObservers(this);
        // Prepare Frame
        if (this.postProcessManager && !camera._multiviewTexture && !this.prePass) {
            this.postProcessManager._prepareFrame();
        }
        // Before Camera Draw
        for (const step of this._beforeCameraDrawStage) {
            step.action(this.activeCamera);
        }
        // Render
        this.onBeforeDrawPhaseObservable.notifyObservers(this);
        if (engine.snapshotRendering && engine.snapshotRenderingMode === 1) {
            this.finalizeSceneUbo();
        }
        this._renderingManager.render(null, null, true, true);
        this.onAfterDrawPhaseObservable.notifyObservers(this);
        // After Camera Draw
        for (const step of this._afterCameraDrawStage) {
            step.action(this.activeCamera);
        }
        // Finalize frame
        if (this.postProcessManager && !camera._multiviewTexture) {
            // if the camera has an output render target, render the post process to the render target
            const texture = camera.outputRenderTarget ? camera.outputRenderTarget.renderTarget : undefined;
            this.postProcessManager._finalizeFrame(camera.isIntermediate, texture);
        }
        // After post process
        for (const step of this._afterCameraPostProcessStage) {
            step.action(this.activeCamera);
        }
        // Reset some special arrays
        this._renderTargets.reset();
        this.onAfterCameraRenderObservable.notifyObservers(this.activeCamera);
    }
    _processSubCameras(camera, bindFrameBuffer = true) {
        if (camera.cameraRigMode === 0 || camera._renderingMultiview) {
            if (camera._renderingMultiview && !this._multiviewSceneUbo) {
                this._createMultiviewUbo();
            }
            this._renderForCamera(camera, undefined, bindFrameBuffer);
            this.onAfterRenderCameraObservable.notifyObservers(camera);
            return;
        }
        if (camera._useMultiviewToSingleView) {
            this._renderMultiviewToSingleView(camera);
        }
        else {
            // rig cameras
            this.onBeforeCameraRenderObservable.notifyObservers(camera);
            for (let index = 0; index < camera._rigCameras.length; index++) {
                this._renderForCamera(camera._rigCameras[index], camera);
            }
        }
        // Use _activeCamera instead of activeCamera to avoid onActiveCameraChanged
        this._activeCamera = camera;
        this.updateTransformMatrix();
        this.onAfterRenderCameraObservable.notifyObservers(camera);
    }
    _checkIntersections() {
        for (let index = 0; index < this._meshesForIntersections.length; index++) {
            const sourceMesh = this._meshesForIntersections.data[index];
            if (!sourceMesh.actionManager) {
                continue;
            }
            for (let actionIndex = 0; sourceMesh.actionManager && actionIndex < sourceMesh.actionManager.actions.length; actionIndex++) {
                const action = sourceMesh.actionManager.actions[actionIndex];
                if (action.trigger === 12 || action.trigger === 13) {
                    const parameters = action.getTriggerParameter();
                    const otherMesh = parameters.mesh ? parameters.mesh : parameters;
                    const areIntersecting = otherMesh.intersectsMesh(sourceMesh, parameters.usePreciseIntersection);
                    const currentIntersectionInProgress = sourceMesh._intersectionsInProgress.indexOf(otherMesh);
                    if (areIntersecting && currentIntersectionInProgress === -1) {
                        if (action.trigger === 12) {
                            action._executeCurrent(actionEvent/* ActionEvent */.X.CreateNew(sourceMesh, undefined, otherMesh));
                            sourceMesh._intersectionsInProgress.push(otherMesh);
                        }
                        else if (action.trigger === 13) {
                            sourceMesh._intersectionsInProgress.push(otherMesh);
                        }
                    }
                    else if (!areIntersecting && currentIntersectionInProgress > -1) {
                        //They intersected, and now they don't.
                        //is this trigger an exit trigger? execute an event.
                        if (action.trigger === 13) {
                            action._executeCurrent(actionEvent/* ActionEvent */.X.CreateNew(sourceMesh, undefined, otherMesh));
                        }
                        //if this is an exit trigger, or no exit trigger exists, remove the id from the intersection in progress array.
                        if (!sourceMesh.actionManager.hasSpecificTrigger(13, (parameter) => {
                            const parameterMesh = parameter.mesh ? parameter.mesh : parameter;
                            return otherMesh === parameterMesh;
                        }) ||
                            action.trigger === 13) {
                            sourceMesh._intersectionsInProgress.splice(currentIntersectionInProgress, 1);
                        }
                    }
                }
            }
        }
    }
    /**
     * @internal
     */
    _advancePhysicsEngineStep(step) {
        // Do nothing. Code will be replaced if physics engine component is referenced
    }
    /** @internal */
    _animate(customDeltaTime) {
        // Nothing to do as long as Animatable have not been imported.
    }
    /** Execute all animations (for a frame) */
    animate() {
        if (this._engine.isDeterministicLockStep()) {
            let deltaTime = Math.max(Scene.MinDeltaTime, Math.min(this._engine.getDeltaTime(), Scene.MaxDeltaTime)) + this._timeAccumulator;
            const defaultFrameTime = this._engine.getTimeStep();
            const defaultFPS = 1000.0 / defaultFrameTime / 1000.0;
            let stepsTaken = 0;
            const maxSubSteps = this._engine.getLockstepMaxSteps();
            let internalSteps = Math.floor(deltaTime / defaultFrameTime);
            internalSteps = Math.min(internalSteps, maxSubSteps);
            while (deltaTime > 0 && stepsTaken < internalSteps) {
                this.onBeforeStepObservable.notifyObservers(this);
                // Animations
                this._animationRatio = defaultFrameTime * defaultFPS;
                this._animate(defaultFrameTime);
                this.onAfterAnimationsObservable.notifyObservers(this);
                // Physics
                if (this.physicsEnabled) {
                    this._advancePhysicsEngineStep(defaultFrameTime);
                }
                this.onAfterStepObservable.notifyObservers(this);
                this._currentStepId++;
                stepsTaken++;
                deltaTime -= defaultFrameTime;
            }
            this._timeAccumulator = deltaTime < 0 ? 0 : deltaTime;
        }
        else {
            // Animations
            const deltaTime = this.useConstantAnimationDeltaTime ? 16 : Math.max(Scene.MinDeltaTime, Math.min(this._engine.getDeltaTime(), Scene.MaxDeltaTime));
            this._animationRatio = deltaTime * (60.0 / 1000.0);
            this._animate();
            this.onAfterAnimationsObservable.notifyObservers(this);
            // Physics
            if (this.physicsEnabled) {
                this._advancePhysicsEngineStep(deltaTime);
            }
        }
    }
    _clear() {
        if (this.autoClearDepthAndStencil || this.autoClear) {
            this._engine.clear(this._clearColor, this.autoClear || this.forceWireframe || this.forcePointsCloud, this.autoClearDepthAndStencil, this.autoClearDepthAndStencil);
        }
    }
    _checkCameraRenderTarget(camera) {
        if (camera?.outputRenderTarget && !camera?.isRigCamera) {
            camera.outputRenderTarget._cleared = false;
        }
        if (camera?.rigCameras?.length) {
            for (let i = 0; i < camera.rigCameras.length; ++i) {
                const rtt = camera.rigCameras[i].outputRenderTarget;
                if (rtt) {
                    rtt._cleared = false;
                }
            }
        }
    }
    /**
     * Resets the draw wrappers cache of all meshes
     * @param passId If provided, releases only the draw wrapper corresponding to this render pass id
     */
    resetDrawCache(passId) {
        if (!this.meshes) {
            return;
        }
        for (const mesh of this.meshes) {
            mesh.resetDrawCache(passId);
        }
    }
    _renderWithFrameGraph(updateCameras = true, ignoreAnimations = false) {
        this.activeCamera = null;
        this._activeParticleSystems.reset();
        this._activeSkeletons.reset();
        // Update Cameras
        if (updateCameras) {
            for (const camera of this.cameras) {
                camera.update();
                if (camera.cameraRigMode !== 0) {
                    // rig cameras
                    for (let index = 0; index < camera._rigCameras.length; index++) {
                        camera._rigCameras[index].update();
                    }
                }
            }
        }
        // We must keep these steps because the procedural texture component relies on them.
        // TODO: move the procedural texture component to the frame graph.
        for (const step of this._beforeClearStage) {
            step.action();
        }
        // Process meshes
        const meshes = this.getActiveMeshCandidates();
        const len = meshes.length;
        for (let i = 0; i < len; i++) {
            const mesh = meshes.data[i];
            if (mesh.isBlocked) {
                continue;
            }
            this._totalVertices.addCount(mesh.getTotalVertices(), false);
            if (!mesh.isReady() || !mesh.isEnabled() || mesh.scaling.hasAZeroComponent) {
                continue;
            }
            mesh.computeWorldMatrix();
            if (mesh.actionManager && mesh.actionManager.hasSpecificTriggers2(12, 13)) {
                this._meshesForIntersections.pushNoDuplicate(mesh);
            }
        }
        // Animate Particle systems
        if (this.particlesEnabled) {
            for (let particleIndex = 0; particleIndex < this.particleSystems.length; particleIndex++) {
                const particleSystem = this.particleSystems[particleIndex];
                if (!particleSystem.isStarted() || !particleSystem.emitter) {
                    continue;
                }
                const emitter = particleSystem.emitter;
                if (!emitter.position || emitter.isEnabled()) {
                    this._activeParticleSystems.push(particleSystem);
                    particleSystem.animate();
                }
            }
        }
        // Render the graph
        this.frameGraph?.execute();
    }
    /**
     * Render the scene
     * @param updateCameras defines a boolean indicating if cameras must update according to their inputs (true by default)
     * @param ignoreAnimations defines a boolean indicating if animations should not be executed (false by default)
     */
    render(updateCameras = true, ignoreAnimations = false) {
        if (this.isDisposed) {
            return;
        }
        if (this.onReadyObservable.hasObservers() && this._executeWhenReadyTimeoutId === null) {
            this._checkIsReady();
        }
        this._frameId++;
        this._defaultFrameBufferCleared = false;
        this._checkCameraRenderTarget(this.activeCamera);
        if (this.activeCameras?.length) {
            this.activeCameras.forEach(this._checkCameraRenderTarget);
        }
        // Register components that have been associated lately to the scene.
        this._registerTransientComponents();
        this._activeParticles.fetchNewFrame();
        this._totalVertices.fetchNewFrame();
        this._activeIndices.fetchNewFrame();
        this._activeBones.fetchNewFrame();
        this._meshesForIntersections.reset();
        this.resetCachedMaterial();
        this.onBeforeAnimationsObservable.notifyObservers(this);
        // Actions
        if (this.actionManager) {
            this.actionManager.processTrigger(11);
        }
        // Animations
        if (!ignoreAnimations) {
            this.animate();
        }
        // Before camera update steps
        for (const step of this._beforeCameraUpdateStage) {
            step.action();
        }
        // Update Cameras
        if (updateCameras) {
            if (this.activeCameras && this.activeCameras.length > 0) {
                for (let cameraIndex = 0; cameraIndex < this.activeCameras.length; cameraIndex++) {
                    const camera = this.activeCameras[cameraIndex];
                    camera.update();
                    if (camera.cameraRigMode !== 0) {
                        // rig cameras
                        for (let index = 0; index < camera._rigCameras.length; index++) {
                            camera._rigCameras[index].update();
                        }
                    }
                }
            }
            else if (this.activeCamera) {
                this.activeCamera.update();
                if (this.activeCamera.cameraRigMode !== 0) {
                    // rig cameras
                    for (let index = 0; index < this.activeCamera._rigCameras.length; index++) {
                        this.activeCamera._rigCameras[index].update();
                    }
                }
            }
        }
        // Before render
        this.onBeforeRenderObservable.notifyObservers(this);
        // Custom render function?
        if (this.customRenderFunction) {
            this._renderId++;
            this._engine.currentRenderPassId = 0;
            this.customRenderFunction(updateCameras, ignoreAnimations);
        }
        else {
            const engine = this.getEngine();
            // Customs render targets
            this.onBeforeRenderTargetsRenderObservable.notifyObservers(this);
            const currentActiveCamera = this.activeCameras?.length ? this.activeCameras[0] : this.activeCamera;
            if (this.renderTargetsEnabled) {
                tools/* Tools */.S0.StartPerformanceCounter("Custom render targets", this.customRenderTargets.length > 0);
                this._intermediateRendering = true;
                for (let customIndex = 0; customIndex < this.customRenderTargets.length; customIndex++) {
                    const renderTarget = this.customRenderTargets[customIndex];
                    if (renderTarget._shouldRender()) {
                        this._renderId++;
                        this.activeCamera = renderTarget.activeCamera || this.activeCamera;
                        if (!this.activeCamera) {
                            throw new Error("Active camera not set");
                        }
                        // Viewport
                        engine.setViewport(this.activeCamera.viewport);
                        // Camera
                        this.updateTransformMatrix();
                        renderTarget.render(currentActiveCamera !== this.activeCamera, this.dumpNextRenderTargets);
                    }
                }
                tools/* Tools */.S0.EndPerformanceCounter("Custom render targets", this.customRenderTargets.length > 0);
                this._intermediateRendering = false;
                this._renderId++;
            }
            this._engine.currentRenderPassId = currentActiveCamera?.renderPassId ?? 0;
            // Restore back buffer
            this.activeCamera = currentActiveCamera;
            if (this._activeCamera && this._activeCamera.cameraRigMode !== 22 && !this.prePass) {
                this._bindFrameBuffer(this._activeCamera, false);
            }
            this.onAfterRenderTargetsRenderObservable.notifyObservers(this);
            for (const step of this._beforeClearStage) {
                step.action();
            }
            // Clear
            this._clearFrameBuffer(this.activeCamera);
            // Collects render targets from external components.
            for (const step of this._gatherRenderTargetsStage) {
                step.action(this._renderTargets);
            }
            // Multi-cameras?
            if (this.activeCameras && this.activeCameras.length > 0) {
                for (let cameraIndex = 0; cameraIndex < this.activeCameras.length; cameraIndex++) {
                    this._processSubCameras(this.activeCameras[cameraIndex], cameraIndex > 0);
                }
            }
            else {
                if (!this.activeCamera) {
                    throw new Error("No camera defined");
                }
                this._processSubCameras(this.activeCamera, !!this.activeCamera.outputRenderTarget);
            }
        }
        // Intersection checks
        this._checkIntersections();
        // Executes the after render stage actions.
        for (const step of this._afterRenderStage) {
            step.action();
        }
        // After render
        if (this.afterRender) {
            this.afterRender();
        }
        this.onAfterRenderObservable.notifyObservers(this);
        // Cleaning
        if (this._toBeDisposed.length) {
            for (let index = 0; index < this._toBeDisposed.length; index++) {
                const data = this._toBeDisposed[index];
                if (data) {
                    data.dispose();
                }
            }
            this._toBeDisposed.length = 0;
        }
        if (this.dumpNextRenderTargets) {
            this.dumpNextRenderTargets = false;
        }
        this._activeBones.addCount(0, true);
        this._activeIndices.addCount(0, true);
        this._activeParticles.addCount(0, true);
        this._engine.restoreDefaultFramebuffer();
    }
    /**
     * Freeze all materials
     * A frozen material will not be updatable but should be faster to render
     * Note: multimaterials will not be frozen, but their submaterials will
     */
    freezeMaterials() {
        for (let i = 0; i < this.materials.length; i++) {
            this.materials[i].freeze();
        }
    }
    /**
     * Unfreeze all materials
     * A frozen material will not be updatable but should be faster to render
     */
    unfreezeMaterials() {
        for (let i = 0; i < this.materials.length; i++) {
            this.materials[i].unfreeze();
        }
    }
    /**
     * Releases all held resources
     */
    dispose() {
        if (this.isDisposed) {
            return;
        }
        this.beforeRender = null;
        this.afterRender = null;
        this.metadata = null;
        this.skeletons.length = 0;
        this.morphTargetManagers.length = 0;
        this._transientComponents.length = 0;
        this._isReadyForMeshStage.clear();
        this._beforeEvaluateActiveMeshStage.clear();
        this._evaluateSubMeshStage.clear();
        this._preActiveMeshStage.clear();
        this._cameraDrawRenderTargetStage.clear();
        this._beforeCameraDrawStage.clear();
        this._beforeRenderTargetDrawStage.clear();
        this._beforeRenderingGroupDrawStage.clear();
        this._beforeRenderingMeshStage.clear();
        this._afterRenderingMeshStage.clear();
        this._afterRenderingGroupDrawStage.clear();
        this._afterCameraDrawStage.clear();
        this._afterRenderTargetDrawStage.clear();
        this._afterRenderStage.clear();
        this._beforeCameraUpdateStage.clear();
        this._beforeClearStage.clear();
        this._gatherRenderTargetsStage.clear();
        this._gatherActiveCameraRenderTargetsStage.clear();
        this._pointerMoveStage.clear();
        this._pointerDownStage.clear();
        this._pointerUpStage.clear();
        this.importedMeshesFiles = [];
        if (this._activeAnimatables && this.stopAllAnimations) {
            // Ensures that no animatable notifies a callback that could start a new animation group, constantly adding new animatables to the active list...
            this._activeAnimatables.forEach((animatable) => {
                animatable.onAnimationEndObservable.clear();
                animatable.onAnimationEnd = null;
            });
            this.stopAllAnimations();
        }
        this.resetCachedMaterial();
        // Smart arrays
        if (this.activeCamera) {
            this.activeCamera._activeMeshes.dispose();
            this.activeCamera = null;
        }
        this.activeCameras = null;
        this._activeMeshes.dispose();
        this._renderingManager.dispose();
        this._processedMaterials.dispose();
        this._activeParticleSystems.dispose();
        this._activeSkeletons.dispose();
        this._softwareSkinnedMeshes.dispose();
        this._renderTargets.dispose();
        this._materialsRenderTargets.dispose();
        this._registeredForLateAnimationBindings.dispose();
        this._meshesForIntersections.dispose();
        this._toBeDisposed.length = 0;
        // Abort active requests
        const activeRequests = this._activeRequests.slice();
        for (const request of activeRequests) {
            request.abort();
        }
        this._activeRequests.length = 0;
        // Events
        try {
            this.onDisposeObservable.notifyObservers(this);
        }
        catch (e) {
            logger/* Logger */.V.Error("An error occurred while calling onDisposeObservable!", e);
        }
        this.detachControl();
        // Detach cameras
        const canvas = this._engine.getInputElement();
        if (canvas) {
            for (let index = 0; index < this.cameras.length; index++) {
                this.cameras[index].detachControl();
            }
        }
        // Release animation groups
        this._disposeList(this.animationGroups);
        // Release lights
        this._disposeList(this.lights);
        // Release materials
        if (this._defaultMaterial) {
            this._defaultMaterial.dispose();
        }
        this._disposeList(this.multiMaterials);
        this._disposeList(this.materials);
        // Release meshes
        this._disposeList(this.meshes, (item) => item.dispose(true));
        this._disposeList(this.transformNodes, (item) => item.dispose(true));
        // Release cameras
        const cameras = this.cameras;
        this._disposeList(cameras);
        // Release particles
        this._disposeList(this.particleSystems);
        // Release postProcesses
        this._disposeList(this.postProcesses);
        // Release textures
        this._disposeList(this.textures);
        // Release morph targets
        this._disposeList(this.morphTargetManagers);
        // Release UBO
        this._sceneUbo.dispose();
        if (this._multiviewSceneUbo) {
            this._multiviewSceneUbo.dispose();
        }
        // Post-processes
        this.postProcessManager.dispose();
        // Components
        this._disposeList(this._components);
        // Remove from engine
        let index = this._engine.scenes.indexOf(this);
        if (index > -1) {
            this._engine.scenes.splice(index, 1);
        }
        if (engineStore/* EngineStore */.q._LastCreatedScene === this) {
            engineStore/* EngineStore */.q._LastCreatedScene = null;
            let engineIndex = engineStore/* EngineStore */.q.Instances.length - 1;
            while (engineIndex >= 0) {
                const engine = engineStore/* EngineStore */.q.Instances[engineIndex];
                if (engine.scenes.length > 0) {
                    engineStore/* EngineStore */.q._LastCreatedScene = engine.scenes[this._engine.scenes.length - 1];
                    break;
                }
                engineIndex--;
            }
        }
        index = this._engine._virtualScenes.indexOf(this);
        if (index > -1) {
            this._engine._virtualScenes.splice(index, 1);
        }
        this._engine.wipeCaches(true);
        this.onDisposeObservable.clear();
        this.onBeforeRenderObservable.clear();
        this.onAfterRenderObservable.clear();
        this.onBeforeRenderTargetsRenderObservable.clear();
        this.onAfterRenderTargetsRenderObservable.clear();
        this.onAfterStepObservable.clear();
        this.onBeforeStepObservable.clear();
        this.onBeforeActiveMeshesEvaluationObservable.clear();
        this.onAfterActiveMeshesEvaluationObservable.clear();
        this.onBeforeParticlesRenderingObservable.clear();
        this.onAfterParticlesRenderingObservable.clear();
        this.onBeforeDrawPhaseObservable.clear();
        this.onAfterDrawPhaseObservable.clear();
        this.onBeforeAnimationsObservable.clear();
        this.onAfterAnimationsObservable.clear();
        this.onDataLoadedObservable.clear();
        this.onBeforeRenderingGroupObservable.clear();
        this.onAfterRenderingGroupObservable.clear();
        this.onMeshImportedObservable.clear();
        this.onBeforeCameraRenderObservable.clear();
        this.onAfterCameraRenderObservable.clear();
        this.onAfterRenderCameraObservable.clear();
        this.onReadyObservable.clear();
        this.onNewCameraAddedObservable.clear();
        this.onCameraRemovedObservable.clear();
        this.onNewLightAddedObservable.clear();
        this.onLightRemovedObservable.clear();
        this.onNewGeometryAddedObservable.clear();
        this.onGeometryRemovedObservable.clear();
        this.onNewTransformNodeAddedObservable.clear();
        this.onTransformNodeRemovedObservable.clear();
        this.onNewMeshAddedObservable.clear();
        this.onMeshRemovedObservable.clear();
        this.onNewSkeletonAddedObservable.clear();
        this.onSkeletonRemovedObservable.clear();
        this.onNewMaterialAddedObservable.clear();
        this.onNewMultiMaterialAddedObservable.clear();
        this.onMaterialRemovedObservable.clear();
        this.onMultiMaterialRemovedObservable.clear();
        this.onNewTextureAddedObservable.clear();
        this.onTextureRemovedObservable.clear();
        this.onPrePointerObservable.clear();
        this.onPointerObservable.clear();
        this.onPreKeyboardObservable.clear();
        this.onKeyboardObservable.clear();
        this.onActiveCameraChanged.clear();
        this.onScenePerformancePriorityChangedObservable.clear();
        this.onClearColorChangedObservable.clear();
        this.onEnvironmentTextureChangedObservable.clear();
        this.onMeshUnderPointerUpdatedObservable.clear();
        this._isDisposed = true;
    }
    _disposeList(items, callback) {
        const itemsCopy = items.slice(0);
        callback = callback ?? ((item) => item.dispose());
        for (const item of itemsCopy) {
            callback(item);
        }
        items.length = 0;
    }
    /**
     * Gets if the scene is already disposed
     */
    get isDisposed() {
        return this._isDisposed;
    }
    /**
     * Call this function to reduce memory footprint of the scene.
     * Vertex buffers will not store CPU data anymore (this will prevent picking, collisions or physics to work correctly)
     */
    clearCachedVertexData() {
        for (let meshIndex = 0; meshIndex < this.meshes.length; meshIndex++) {
            const mesh = this.meshes[meshIndex];
            const geometry = mesh.geometry;
            if (geometry) {
                geometry.clearCachedData();
            }
        }
    }
    /**
     * This function will remove the local cached buffer data from texture.
     * It will save memory but will prevent the texture from being rebuilt
     */
    cleanCachedTextureBuffer() {
        for (const baseTexture of this.textures) {
            const buffer = baseTexture._buffer;
            if (buffer) {
                baseTexture._buffer = null;
            }
        }
    }
    /**
     * Get the world extend vectors with an optional filter
     *
     * @param filterPredicate the predicate - which meshes should be included when calculating the world size
     * @returns {{ min: Vector3; max: Vector3 }} min and max vectors
     */
    getWorldExtends(filterPredicate) {
        const min = new math_vector/* Vector3 */.Pq(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE);
        const max = new math_vector/* Vector3 */.Pq(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
        filterPredicate = filterPredicate || (() => true);
        this.meshes.filter(filterPredicate).forEach((mesh) => {
            mesh.computeWorldMatrix(true);
            if (!mesh.subMeshes || mesh.subMeshes.length === 0 || mesh.infiniteDistance) {
                return;
            }
            const boundingInfo = mesh.getBoundingInfo();
            const minBox = boundingInfo.boundingBox.minimumWorld;
            const maxBox = boundingInfo.boundingBox.maximumWorld;
            math_vector/* Vector3 */.Pq.CheckExtends(minBox, min, max);
            math_vector/* Vector3 */.Pq.CheckExtends(maxBox, min, max);
        });
        return {
            min: min,
            max: max,
        };
    }
    // Picking
    // eslint-disable-next-line jsdoc/require-returns-check
    /**
     * Creates a ray that can be used to pick in the scene
     * @param x defines the x coordinate of the origin (on-screen)
     * @param y defines the y coordinate of the origin (on-screen)
     * @param world defines the world matrix to use if you want to pick in object space (instead of world space)
     * @param camera defines the camera to use for the picking
     * @param cameraViewSpace defines if picking will be done in view space (false by default)
     * @returns a Ray
     */
    createPickingRay(x, y, world, camera, cameraViewSpace = false) {
        throw (0,devTools/* _WarnImport */.n)("Ray");
    }
    // eslint-disable-next-line jsdoc/require-returns-check
    /**
     * Creates a ray that can be used to pick in the scene
     * @param x defines the x coordinate of the origin (on-screen)
     * @param y defines the y coordinate of the origin (on-screen)
     * @param world defines the world matrix to use if you want to pick in object space (instead of world space)
     * @param result defines the ray where to store the picking ray
     * @param camera defines the camera to use for the picking
     * @param cameraViewSpace defines if picking will be done in view space (false by default)
     * @param enableDistantPicking defines if picking should handle large values for mesh position/scaling (false by default)
     * @returns the current scene
     */
    createPickingRayToRef(x, y, world, result, camera, cameraViewSpace = false, enableDistantPicking = false) {
        throw (0,devTools/* _WarnImport */.n)("Ray");
    }
    // eslint-disable-next-line jsdoc/require-returns-check
    /**
     * Creates a ray that can be used to pick in the scene
     * @param x defines the x coordinate of the origin (on-screen)
     * @param y defines the y coordinate of the origin (on-screen)
     * @param camera defines the camera to use for the picking
     * @returns a Ray
     */
    createPickingRayInCameraSpace(x, y, camera) {
        throw (0,devTools/* _WarnImport */.n)("Ray");
    }
    // eslint-disable-next-line jsdoc/require-returns-check
    /**
     * Creates a ray that can be used to pick in the scene
     * @param x defines the x coordinate of the origin (on-screen)
     * @param y defines the y coordinate of the origin (on-screen)
     * @param result defines the ray where to store the picking ray
     * @param camera defines the camera to use for the picking
     * @returns the current scene
     */
    createPickingRayInCameraSpaceToRef(x, y, result, camera) {
        throw (0,devTools/* _WarnImport */.n)("Ray");
    }
    /** Launch a ray to try to pick a mesh in the scene
     * @param x position on screen
     * @param y position on screen
     * @param predicate Predicate function used to determine eligible meshes. Can be set to null. In this case, a mesh must be enabled, visible and with isPickable set to true. thinInstanceIndex is -1 when the mesh is non-instanced
     * @param fastCheck defines if the first intersection will be used (and not the closest)
     * @param camera to use for computing the picking ray. Can be set to null. In this case, the scene.activeCamera will be used
     * @param trianglePredicate defines an optional predicate used to select faces when a mesh intersection is detected
     * @returns a PickingInfo
     */
    pick(x, y, predicate, fastCheck, camera, trianglePredicate) {
        const warn = (0,devTools/* _WarnImport */.n)("Ray", true);
        if (warn) {
            logger/* Logger */.V.Warn(warn);
        }
        // Dummy info if picking as not been imported
        return new pickingInfo/* PickingInfo */.G();
    }
    /** Launch a ray to try to pick a mesh in the scene using only bounding information of the main mesh (not using submeshes)
     * @param x position on screen
     * @param y position on screen
     * @param predicate Predicate function used to determine eligible meshes. Can be set to null. In this case, a mesh must be enabled, visible and with isPickable set to true. thinInstanceIndex is -1 when the mesh is non-instanced
     * @param fastCheck defines if the first intersection will be used (and not the closest)
     * @param camera to use for computing the picking ray. Can be set to null. In this case, the scene.activeCamera will be used
     * @returns a PickingInfo (Please note that some info will not be set like distance, bv, bu and everything that cannot be capture by only using bounding infos)
     */
    pickWithBoundingInfo(x, y, predicate, fastCheck, camera) {
        const warn = (0,devTools/* _WarnImport */.n)("Ray", true);
        if (warn) {
            logger/* Logger */.V.Warn(warn);
        }
        // Dummy info if picking as not been imported
        return new pickingInfo/* PickingInfo */.G();
    }
    // eslint-disable-next-line jsdoc/require-returns-check
    /**
     * Use the given ray to pick a mesh in the scene. A mesh triangle can be picked both from its front and back sides,
     * irrespective of orientation.
     * @param ray The ray to use to pick meshes
     * @param predicate Predicate function used to determine eligible meshes. Can be set to null. In this case, a mesh must have isPickable set to true. thinInstanceIndex is -1 when the mesh is non-instanced
     * @param fastCheck defines if the first intersection will be used (and not the closest)
     * @param trianglePredicate defines an optional predicate used to select faces when a mesh intersection is detected
     * @returns a PickingInfo
     */
    pickWithRay(ray, predicate, fastCheck, trianglePredicate) {
        throw (0,devTools/* _WarnImport */.n)("Ray");
    }
    // eslint-disable-next-line jsdoc/require-returns-check
    /**
     * Launch a ray to try to pick a mesh in the scene. A mesh triangle can be picked both from its front and back sides,
     * irrespective of orientation.
     * @param x X position on screen
     * @param y Y position on screen
     * @param predicate Predicate function used to determine eligible meshes and instances. Can be set to null. In this case, a mesh must be enabled, visible and with isPickable set to true. thinInstanceIndex is -1 when the mesh is non-instanced
     * @param camera camera to use for computing the picking ray. Can be set to null. In this case, the scene.activeCamera will be used
     * @param trianglePredicate defines an optional predicate used to select faces when a mesh intersection is detected
     * @returns an array of PickingInfo
     */
    multiPick(x, y, predicate, camera, trianglePredicate) {
        throw (0,devTools/* _WarnImport */.n)("Ray");
    }
    // eslint-disable-next-line jsdoc/require-returns-check
    /**
     * Launch a ray to try to pick a mesh in the scene
     * @param ray Ray to use
     * @param predicate Predicate function used to determine eligible meshes and instances. Can be set to null. In this case, a mesh must be enabled, visible and with isPickable set to true. thinInstanceIndex is -1 when the mesh is non-instanced
     * @param trianglePredicate defines an optional predicate used to select faces when a mesh intersection is detected
     * @returns an array of PickingInfo
     */
    multiPickWithRay(ray, predicate, trianglePredicate) {
        throw (0,devTools/* _WarnImport */.n)("Ray");
    }
    /**
     * Force the value of meshUnderPointer
     * @param mesh defines the mesh to use
     * @param pointerId optional pointer id when using more than one pointer
     * @param pickResult optional pickingInfo data used to find mesh
     */
    setPointerOverMesh(mesh, pointerId, pickResult) {
        this._inputManager.setPointerOverMesh(mesh, pointerId, pickResult);
    }
    /**
     * Gets the mesh under the pointer
     * @returns a Mesh or null if no mesh is under the pointer
     */
    getPointerOverMesh() {
        return this._inputManager.getPointerOverMesh();
    }
    // Misc.
    /** @internal */
    _rebuildGeometries() {
        for (const geometry of this.geometries) {
            geometry._rebuild();
        }
        for (const mesh of this.meshes) {
            mesh._rebuild();
        }
        if (this.postProcessManager) {
            this.postProcessManager._rebuild();
        }
        for (const component of this._components) {
            component.rebuild();
        }
        for (const system of this.particleSystems) {
            system.rebuild();
        }
        if (this.spriteManagers) {
            for (const spriteMgr of this.spriteManagers) {
                spriteMgr.rebuild();
            }
        }
    }
    /** @internal */
    _rebuildTextures() {
        for (const texture of this.textures) {
            texture._rebuild(true);
        }
        this.markAllMaterialsAsDirty(1);
    }
    /**
     * Get from a list of objects by tags
     * @param list the list of objects to use
     * @param tagsQuery the query to use
     * @param filter a predicate to filter for tags
     * @returns
     */
    _getByTags(list, tagsQuery, filter) {
        if (tagsQuery === undefined) {
            // returns the complete list (could be done with Tags.MatchesQuery but no need to have a for-loop here)
            return list;
        }
        const listByTags = [];
        for (const i in list) {
            const item = list[i];
            if (tags/* Tags */.Y && tags/* Tags */.Y.MatchesQuery(item, tagsQuery) && (!filter || filter(item))) {
                listByTags.push(item);
            }
        }
        return listByTags;
    }
    /**
     * Get a list of meshes by tags
     * @param tagsQuery defines the tags query to use
     * @param filter defines a predicate used to filter results
     * @returns an array of Mesh
     */
    getMeshesByTags(tagsQuery, filter) {
        return this._getByTags(this.meshes, tagsQuery, filter);
    }
    /**
     * Get a list of cameras by tags
     * @param tagsQuery defines the tags query to use
     * @param filter defines a predicate used to filter results
     * @returns an array of Camera
     */
    getCamerasByTags(tagsQuery, filter) {
        return this._getByTags(this.cameras, tagsQuery, filter);
    }
    /**
     * Get a list of lights by tags
     * @param tagsQuery defines the tags query to use
     * @param filter defines a predicate used to filter results
     * @returns an array of Light
     */
    getLightsByTags(tagsQuery, filter) {
        return this._getByTags(this.lights, tagsQuery, filter);
    }
    /**
     * Get a list of materials by tags
     * @param tagsQuery defines the tags query to use
     * @param filter defines a predicate used to filter results
     * @returns an array of Material
     */
    getMaterialByTags(tagsQuery, filter) {
        return this._getByTags(this.materials, tagsQuery, filter).concat(this._getByTags(this.multiMaterials, tagsQuery, filter));
    }
    /**
     * Get a list of transform nodes by tags
     * @param tagsQuery defines the tags query to use
     * @param filter defines a predicate used to filter results
     * @returns an array of TransformNode
     */
    getTransformNodesByTags(tagsQuery, filter) {
        return this._getByTags(this.transformNodes, tagsQuery, filter);
    }
    /**
     * Overrides the default sort function applied in the rendering group to prepare the meshes.
     * This allowed control for front to back rendering or reversly depending of the special needs.
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
    }
    /**
     * Gets the current auto clear configuration for one rendering group of the rendering
     * manager.
     * @param index the rendering group index to get the information for
     * @returns The auto clear setup for the requested rendering group
     */
    getAutoClearDepthStencilSetup(index) {
        return this._renderingManager.getAutoClearDepthStencilSetup(index);
    }
    /** @internal */
    _forceBlockMaterialDirtyMechanism(value) {
        this._blockMaterialDirtyMechanism = value;
    }
    /** Gets or sets a boolean blocking all the calls to markAllMaterialsAsDirty (ie. the materials won't be updated if they are out of sync) */
    get blockMaterialDirtyMechanism() {
        return this._blockMaterialDirtyMechanism;
    }
    set blockMaterialDirtyMechanism(value) {
        if (this._blockMaterialDirtyMechanism === value) {
            return;
        }
        this._blockMaterialDirtyMechanism = value;
        if (!value) {
            // Do a complete update
            this.markAllMaterialsAsDirty(63);
        }
    }
    /**
     * Will flag all materials as dirty to trigger new shader compilation
     * @param flag defines the flag used to specify which material part must be marked as dirty
     * @param predicate If not null, it will be used to specify if a material has to be marked as dirty
     */
    markAllMaterialsAsDirty(flag, predicate) {
        if (this._blockMaterialDirtyMechanism) {
            return;
        }
        for (const material of this.materials) {
            if (predicate && !predicate(material)) {
                continue;
            }
            material.markAsDirty(flag);
        }
    }
    /**
     * @internal
     */
    _loadFile(fileOrUrl, onSuccess, onProgress, useOfflineSupport, useArrayBuffer, onError, onOpened) {
        const request = (0,fileTools/* LoadFile */.zU)(fileOrUrl, onSuccess, onProgress, useOfflineSupport ? this.offlineProvider : undefined, useArrayBuffer, onError, onOpened);
        this._activeRequests.push(request);
        request.onCompleteObservable.add((request) => {
            this._activeRequests.splice(this._activeRequests.indexOf(request), 1);
        });
        return request;
    }
    /**
     * @internal
     */
    _loadFileAsync(fileOrUrl, onProgress, useOfflineSupport, useArrayBuffer, onOpened) {
        return new Promise((resolve, reject) => {
            this._loadFile(fileOrUrl, (data) => {
                resolve(data);
            }, onProgress, useOfflineSupport, useArrayBuffer, (request, exception) => {
                reject(exception);
            }, onOpened);
        });
    }
    /**
     * @internal
     */
    _requestFile(url, onSuccess, onProgress, useOfflineSupport, useArrayBuffer, onError, onOpened) {
        const request = (0,fileTools/* RequestFile */.sh)(url, onSuccess, onProgress, useOfflineSupport ? this.offlineProvider : undefined, useArrayBuffer, onError, onOpened);
        this._activeRequests.push(request);
        request.onCompleteObservable.add((request) => {
            this._activeRequests.splice(this._activeRequests.indexOf(request), 1);
        });
        return request;
    }
    /**
     * @internal
     */
    _requestFileAsync(url, onProgress, useOfflineSupport, useArrayBuffer, onOpened) {
        return new Promise((resolve, reject) => {
            this._requestFile(url, (data) => {
                resolve(data);
            }, onProgress, useOfflineSupport, useArrayBuffer, (error) => {
                reject(error);
            }, onOpened);
        });
    }
    /**
     * @internal
     */
    _readFile(file, onSuccess, onProgress, useArrayBuffer, onError) {
        const request = (0,fileTools/* ReadFile */.NJ)(file, onSuccess, onProgress, useArrayBuffer, onError);
        this._activeRequests.push(request);
        request.onCompleteObservable.add((request) => {
            this._activeRequests.splice(this._activeRequests.indexOf(request), 1);
        });
        return request;
    }
    /**
     * @internal
     */
    _readFileAsync(file, onProgress, useArrayBuffer) {
        return new Promise((resolve, reject) => {
            this._readFile(file, (data) => {
                resolve(data);
            }, onProgress, useArrayBuffer, (error) => {
                reject(error);
            });
        });
    }
    // eslint-disable-next-line jsdoc/require-returns-check
    /**
     * This method gets the performance collector belonging to the scene, which is generally shared with the inspector.
     * @returns the perf collector belonging to the scene.
     */
    getPerfCollector() {
        throw (0,devTools/* _WarnImport */.n)("performanceViewerSceneExtension");
    }
    // deprecated
    /**
     * Sets the active camera of the scene using its Id
     * @param id defines the camera's Id
     * @returns the new active camera or null if none found.
     * @deprecated Please use setActiveCameraById instead
     */
    setActiveCameraByID(id) {
        return this.setActiveCameraById(id);
    }
    /**
     * Get a material using its id
     * @param id defines the material's Id
     * @returns the material or null if none found.
     * @deprecated Please use getMaterialById instead
     */
    getMaterialByID(id) {
        return this.getMaterialById(id);
    }
    /**
     * Gets a the last added material using a given id
     * @param id defines the material's Id
     * @returns the last material with the given id or null if none found.
     * @deprecated Please use getLastMaterialById instead
     */
    getLastMaterialByID(id) {
        return this.getLastMaterialById(id);
    }
    /**
     * Get a texture using its unique id
     * @param uniqueId defines the texture's unique id
     * @returns the texture or null if none found.
     * @deprecated Please use getTextureByUniqueId instead
     */
    getTextureByUniqueID(uniqueId) {
        return this.getTextureByUniqueId(uniqueId);
    }
    /**
     * Gets a camera using its Id
     * @param id defines the Id to look for
     * @returns the camera or null if not found
     * @deprecated Please use getCameraById instead
     */
    getCameraByID(id) {
        return this.getCameraById(id);
    }
    /**
     * Gets a camera using its unique Id
     * @param uniqueId defines the unique Id to look for
     * @returns the camera or null if not found
     * @deprecated Please use getCameraByUniqueId instead
     */
    getCameraByUniqueID(uniqueId) {
        return this.getCameraByUniqueId(uniqueId);
    }
    /**
     * Gets a bone using its Id
     * @param id defines the bone's Id
     * @returns the bone or null if not found
     * @deprecated Please use getBoneById instead
     */
    getBoneByID(id) {
        return this.getBoneById(id);
    }
    /**
     * Gets a light node using its Id
     * @param id defines the light's Id
     * @returns the light or null if none found.
     * @deprecated Please use getLightById instead
     */
    getLightByID(id) {
        return this.getLightById(id);
    }
    /**
     * Gets a light node using its scene-generated unique Id
     * @param uniqueId defines the light's unique Id
     * @returns the light or null if none found.
     * @deprecated Please use getLightByUniqueId instead
     */
    getLightByUniqueID(uniqueId) {
        return this.getLightByUniqueId(uniqueId);
    }
    /**
     * Gets a particle system by Id
     * @param id defines the particle system Id
     * @returns the corresponding system or null if none found
     * @deprecated Please use getParticleSystemById instead
     */
    getParticleSystemByID(id) {
        return this.getParticleSystemById(id);
    }
    /**
     * Gets a geometry using its Id
     * @param id defines the geometry's Id
     * @returns the geometry or null if none found.
     * @deprecated Please use getGeometryById instead
     */
    getGeometryByID(id) {
        return this.getGeometryById(id);
    }
    /**
     * Gets the first added mesh found of a given Id
     * @param id defines the Id to search for
     * @returns the mesh found or null if not found at all
     * @deprecated Please use getMeshById instead
     */
    getMeshByID(id) {
        return this.getMeshById(id);
    }
    /**
     * Gets a mesh with its auto-generated unique Id
     * @param uniqueId defines the unique Id to search for
     * @returns the found mesh or null if not found at all.
     * @deprecated Please use getMeshByUniqueId instead
     */
    getMeshByUniqueID(uniqueId) {
        return this.getMeshByUniqueId(uniqueId);
    }
    /**
     * Gets a the last added mesh using a given Id
     * @param id defines the Id to search for
     * @returns the found mesh or null if not found at all.
     * @deprecated Please use getLastMeshById instead
     */
    getLastMeshByID(id) {
        return this.getLastMeshById(id);
    }
    /**
     * Gets a list of meshes using their Id
     * @param id defines the Id to search for
     * @returns a list of meshes
     * @deprecated Please use getMeshesById instead
     */
    getMeshesByID(id) {
        return this.getMeshesById(id);
    }
    /**
     * Gets the first added transform node found of a given Id
     * @param id defines the Id to search for
     * @returns the found transform node or null if not found at all.
     * @deprecated Please use getTransformNodeById instead
     */
    getTransformNodeByID(id) {
        return this.getTransformNodeById(id);
    }
    /**
     * Gets a transform node with its auto-generated unique Id
     * @param uniqueId defines the unique Id to search for
     * @returns the found transform node or null if not found at all.
     * @deprecated Please use getTransformNodeByUniqueId instead
     */
    getTransformNodeByUniqueID(uniqueId) {
        return this.getTransformNodeByUniqueId(uniqueId);
    }
    /**
     * Gets a list of transform nodes using their Id
     * @param id defines the Id to search for
     * @returns a list of transform nodes
     * @deprecated Please use getTransformNodesById instead
     */
    getTransformNodesByID(id) {
        return this.getTransformNodesById(id);
    }
    /**
     * Gets a node (Mesh, Camera, Light) using a given Id
     * @param id defines the Id to search for
     * @returns the found node or null if not found at all
     * @deprecated Please use getNodeById instead
     */
    getNodeByID(id) {
        return this.getNodeById(id);
    }
    /**
     * Gets a the last added node (Mesh, Camera, Light) using a given Id
     * @param id defines the Id to search for
     * @returns the found node or null if not found at all
     * @deprecated Please use getLastEntryById instead
     */
    getLastEntryByID(id) {
        return this.getLastEntryById(id);
    }
    /**
     * Gets a skeleton using a given Id (if many are found, this function will pick the last one)
     * @param id defines the Id to search for
     * @returns the found skeleton or null if not found at all.
     * @deprecated Please use getLastSkeletonById instead
     */
    getLastSkeletonByID(id) {
        return this.getLastSkeletonById(id);
    }
}
/** The fog is deactivated */
Scene.FOGMODE_NONE = 0;
/** The fog density is following an exponential function */
Scene.FOGMODE_EXP = 1;
/** The fog density is following an exponential function faster than FOGMODE_EXP */
Scene.FOGMODE_EXP2 = 2;
/** The fog density is following a linear function. */
Scene.FOGMODE_LINEAR = 3;
/**
 * Gets or sets the minimum deltatime when deterministic lock step is enabled
 * @see https://doc.babylonjs.com/features/featuresDeepDive/animation/advanced_animations#deterministic-lockstep
 */
Scene.MinDeltaTime = 1.0;
/**
 * Gets or sets the maximum deltatime when deterministic lock step is enabled
 * @see https://doc.babylonjs.com/features/featuresDeepDive/animation/advanced_animations#deterministic-lockstep
 */
Scene.MaxDeltaTime = 1000.0;
// Register Class Name
(0,typeStore/* RegisterClass */.Y5)("BABYLON.Scene", Scene);
//# sourceMappingURL=scene.js.map

/***/ }),

/***/ 16945:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B: () => (/* binding */ Stage),
/* harmony export */   v: () => (/* binding */ SceneComponentConstants)
/* harmony export */ });
/**
 * Groups all the scene component constants in one place to ease maintenance.
 * @internal
 */
class SceneComponentConstants {
}
SceneComponentConstants.NAME_EFFECTLAYER = "EffectLayer";
SceneComponentConstants.NAME_LAYER = "Layer";
SceneComponentConstants.NAME_LENSFLARESYSTEM = "LensFlareSystem";
SceneComponentConstants.NAME_BOUNDINGBOXRENDERER = "BoundingBoxRenderer";
SceneComponentConstants.NAME_PARTICLESYSTEM = "ParticleSystem";
SceneComponentConstants.NAME_GAMEPAD = "Gamepad";
SceneComponentConstants.NAME_SIMPLIFICATIONQUEUE = "SimplificationQueue";
SceneComponentConstants.NAME_GEOMETRYBUFFERRENDERER = "GeometryBufferRenderer";
SceneComponentConstants.NAME_PREPASSRENDERER = "PrePassRenderer";
SceneComponentConstants.NAME_DEPTHRENDERER = "DepthRenderer";
SceneComponentConstants.NAME_DEPTHPEELINGRENDERER = "DepthPeelingRenderer";
SceneComponentConstants.NAME_POSTPROCESSRENDERPIPELINEMANAGER = "PostProcessRenderPipelineManager";
SceneComponentConstants.NAME_SPRITE = "Sprite";
SceneComponentConstants.NAME_SUBSURFACE = "SubSurface";
SceneComponentConstants.NAME_OUTLINERENDERER = "Outline";
SceneComponentConstants.NAME_PROCEDURALTEXTURE = "ProceduralTexture";
SceneComponentConstants.NAME_SHADOWGENERATOR = "ShadowGenerator";
SceneComponentConstants.NAME_OCTREE = "Octree";
SceneComponentConstants.NAME_PHYSICSENGINE = "PhysicsEngine";
SceneComponentConstants.NAME_AUDIO = "Audio";
SceneComponentConstants.NAME_FLUIDRENDERER = "FluidRenderer";
SceneComponentConstants.NAME_IBLCDFGENERATOR = "iblCDFGenerator";
SceneComponentConstants.STEP_ISREADYFORMESH_EFFECTLAYER = 0;
SceneComponentConstants.STEP_BEFOREEVALUATEACTIVEMESH_BOUNDINGBOXRENDERER = 0;
SceneComponentConstants.STEP_EVALUATESUBMESH_BOUNDINGBOXRENDERER = 0;
SceneComponentConstants.STEP_PREACTIVEMESH_BOUNDINGBOXRENDERER = 0;
SceneComponentConstants.STEP_CAMERADRAWRENDERTARGET_EFFECTLAYER = 1;
SceneComponentConstants.STEP_BEFORECAMERADRAW_PREPASS = 0;
SceneComponentConstants.STEP_BEFORECAMERADRAW_EFFECTLAYER = 1;
SceneComponentConstants.STEP_BEFORECAMERADRAW_LAYER = 2;
SceneComponentConstants.STEP_BEFORERENDERTARGETDRAW_PREPASS = 0;
SceneComponentConstants.STEP_BEFORERENDERTARGETDRAW_LAYER = 1;
SceneComponentConstants.STEP_BEFORERENDERINGMESH_PREPASS = 0;
SceneComponentConstants.STEP_BEFORERENDERINGMESH_OUTLINE = 1;
SceneComponentConstants.STEP_AFTERRENDERINGMESH_PREPASS = 0;
SceneComponentConstants.STEP_AFTERRENDERINGMESH_OUTLINE = 1;
SceneComponentConstants.STEP_AFTERRENDERINGGROUPDRAW_EFFECTLAYER_DRAW = 0;
SceneComponentConstants.STEP_AFTERRENDERINGGROUPDRAW_BOUNDINGBOXRENDERER = 1;
SceneComponentConstants.STEP_BEFORECAMERAUPDATE_SIMPLIFICATIONQUEUE = 0;
SceneComponentConstants.STEP_BEFORECLEAR_PROCEDURALTEXTURE = 0;
SceneComponentConstants.STEP_BEFORECLEAR_PREPASS = 1;
SceneComponentConstants.STEP_BEFORERENDERTARGETCLEAR_PREPASS = 0;
SceneComponentConstants.STEP_AFTERRENDERTARGETDRAW_PREPASS = 0;
SceneComponentConstants.STEP_AFTERRENDERTARGETDRAW_LAYER = 1;
SceneComponentConstants.STEP_AFTERCAMERADRAW_PREPASS = 0;
SceneComponentConstants.STEP_AFTERCAMERADRAW_EFFECTLAYER = 1;
SceneComponentConstants.STEP_AFTERCAMERADRAW_LENSFLARESYSTEM = 2;
SceneComponentConstants.STEP_AFTERCAMERADRAW_EFFECTLAYER_DRAW = 3;
SceneComponentConstants.STEP_AFTERCAMERADRAW_LAYER = 4;
SceneComponentConstants.STEP_AFTERCAMERADRAW_FLUIDRENDERER = 5;
SceneComponentConstants.STEP_AFTERCAMERAPOSTPROCESS_LAYER = 0;
SceneComponentConstants.STEP_AFTERRENDERTARGETPOSTPROCESS_LAYER = 0;
SceneComponentConstants.STEP_AFTERRENDER_AUDIO = 0;
SceneComponentConstants.STEP_GATHERRENDERTARGETS_DEPTHRENDERER = 0;
SceneComponentConstants.STEP_GATHERRENDERTARGETS_GEOMETRYBUFFERRENDERER = 1;
SceneComponentConstants.STEP_GATHERRENDERTARGETS_SHADOWGENERATOR = 2;
SceneComponentConstants.STEP_GATHERRENDERTARGETS_POSTPROCESSRENDERPIPELINEMANAGER = 3;
SceneComponentConstants.STEP_GATHERACTIVECAMERARENDERTARGETS_DEPTHRENDERER = 0;
SceneComponentConstants.STEP_GATHERACTIVECAMERARENDERTARGETS_FLUIDRENDERER = 1;
SceneComponentConstants.STEP_POINTERMOVE_SPRITE = 0;
SceneComponentConstants.STEP_POINTERDOWN_SPRITE = 0;
SceneComponentConstants.STEP_POINTERUP_SPRITE = 0;
/**
 * Representation of a stage in the scene (Basically a list of ordered steps)
 * @internal
 */
class Stage extends Array {
    /**
     * Hide ctor from the rest of the world.
     * @param items The items to add.
     */
    constructor(items) {
        super(...items);
    }
    /**
     * Creates a new Stage.
     * @returns A new instance of a Stage
     */
    static Create() {
        return Object.create(Stage.prototype);
    }
    /**
     * Registers a step in an ordered way in the targeted stage.
     * @param index Defines the position to register the step in
     * @param component Defines the component attached to the step
     * @param action Defines the action to launch during the step
     */
    registerStep(index, component, action) {
        let i = 0;
        let maxIndex = Number.MAX_VALUE;
        for (; i < this.length; i++) {
            const step = this[i];
            maxIndex = step.index;
            if (index < maxIndex) {
                break;
            }
        }
        this.splice(i, 0, { index, component, action: action.bind(component) });
    }
    /**
     * Clears all the steps from the stage.
     */
    clear() {
        this.length = 0;
    }
}
//# sourceMappingURL=sceneComponent.js.map

/***/ })

}]);