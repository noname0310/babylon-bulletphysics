"use strict";
(self["webpackChunkbabylon_bulletphysics"] = self["webpackChunkbabylon_bulletphysics"] || []).push([[1912],{

/***/ 42994:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   d: () => (/* binding */ CastingResult)
/* harmony export */ });
/* harmony import */ var _Maths_math_vector_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(79923);

/**
 * Base class for results of casts.
 */
class CastingResult {
    constructor() {
        this._hasHit = false;
        this._hitNormal = _Maths_math_vector_js__WEBPACK_IMPORTED_MODULE_0__/* .Vector3 */ .Pq.Zero();
        this._hitPoint = _Maths_math_vector_js__WEBPACK_IMPORTED_MODULE_0__/* .Vector3 */ .Pq.Zero();
        this._triangleIndex = -1;
    }
    /**
     * Gets the hit point.
     */
    get hitPoint() {
        return this._hitPoint;
    }
    /**
     * Gets the hit normal.
     */
    get hitNormal() {
        return this._hitNormal;
    }
    /**
     * Gets if there was a hit
     */
    get hasHit() {
        return this._hasHit;
    }
    /*
     * The index of the original triangle which was hit. Will be -1 if contact point is not on a mesh shape
     */
    get triangleIndex() {
        return this._triangleIndex;
    }
    /**
     * Sets the hit data
     * @param hitNormal defines the normal in world space
     * @param hitPoint defines the point in world space
     * @param triangleIndex defines the index of the triangle in case of mesh shape
     */
    setHitData(hitNormal, hitPoint, triangleIndex) {
        this._hasHit = true;
        this._hitNormal.set(hitNormal.x, hitNormal.y, hitNormal.z);
        this._hitPoint.set(hitPoint.x, hitPoint.y, hitPoint.z);
        this._triangleIndex = triangleIndex ?? -1;
    }
    /**
     * Resets all the values to default
     */
    reset() {
        this._hasHit = false;
        this._hitNormal.setAll(0);
        this._hitPoint.setAll(0);
        this._triangleIndex = -1;
        this.body = undefined;
        this.bodyIndex = undefined;
        this.shape = undefined;
    }
}
//# sourceMappingURL=castingResult.js.map

/***/ }),

/***/ 42163:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* unused harmony export PhysicsEngineSceneComponent */
/* harmony import */ var _Misc_logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(51137);
/* harmony import */ var _Misc_observable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(99848);
/* harmony import */ var _sceneComponent_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16945);
/* harmony import */ var _scene_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(87491);
/* harmony import */ var _v1_physicsEngine_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6557);
/* harmony import */ var _v2_physicsEngine_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2832);






/**
 * Gets the current physics engine
 * @returns a IPhysicsEngine or null if none attached
 */
_scene_js__WEBPACK_IMPORTED_MODULE_3__/* .Scene */ .Z.prototype.getPhysicsEngine = function () {
    return this._physicsEngine;
};
/**
 * Enables physics to the current scene
 * @param gravity defines the scene's gravity for the physics engine
 * @param plugin defines the physics engine to be used. defaults to CannonJS.
 * @returns a boolean indicating if the physics engine was initialized
 */
_scene_js__WEBPACK_IMPORTED_MODULE_3__/* .Scene */ .Z.prototype.enablePhysics = function (gravity = null, plugin) {
    if (this._physicsEngine) {
        return true;
    }
    // Register the component to the scene
    let component = this._getComponent(_sceneComponent_js__WEBPACK_IMPORTED_MODULE_2__/* .SceneComponentConstants */ .v.NAME_PHYSICSENGINE);
    if (!component) {
        component = new PhysicsEngineSceneComponent(this);
        this._addComponent(component);
    }
    try {
        if (!plugin || plugin?.getPluginVersion() === 1) {
            this._physicsEngine = new _v1_physicsEngine_js__WEBPACK_IMPORTED_MODULE_4__/* .PhysicsEngine */ .A(gravity, plugin);
        }
        else if (plugin?.getPluginVersion() === 2) {
            this._physicsEngine = new _v2_physicsEngine_js__WEBPACK_IMPORTED_MODULE_5__/* .PhysicsEngine */ .A(gravity, plugin);
        }
        else {
            throw new Error("Unsupported Physics plugin version.");
        }
        this._physicsTimeAccumulator = 0;
        return true;
    }
    catch (e) {
        _Misc_logger_js__WEBPACK_IMPORTED_MODULE_0__/* .Logger */ .V.Error(e.message);
        return false;
    }
};
/**
 * Disables and disposes the physics engine associated with the scene
 */
_scene_js__WEBPACK_IMPORTED_MODULE_3__/* .Scene */ .Z.prototype.disablePhysicsEngine = function () {
    if (!this._physicsEngine) {
        return;
    }
    this._physicsEngine.dispose();
    this._physicsEngine = null;
};
/**
 * Gets a boolean indicating if there is an active physics engine
 * @returns a boolean indicating if there is an active physics engine
 */
_scene_js__WEBPACK_IMPORTED_MODULE_3__/* .Scene */ .Z.prototype.isPhysicsEnabled = function () {
    return this._physicsEngine !== undefined;
};
/**
 * Deletes a physics compound impostor
 * @param compound defines the compound to delete
 */
_scene_js__WEBPACK_IMPORTED_MODULE_3__/* .Scene */ .Z.prototype.deleteCompoundImpostor = function (compound) {
    const mesh = compound.parts[0].mesh;
    if (mesh.physicsImpostor) {
        mesh.physicsImpostor.dispose( /*true*/);
        mesh.physicsImpostor = null;
    }
};
/**
 * @internal
 */
_scene_js__WEBPACK_IMPORTED_MODULE_3__/* .Scene */ .Z.prototype._advancePhysicsEngineStep = function (step) {
    if (this._physicsEngine) {
        const subTime = this._physicsEngine.getSubTimeStep();
        if (subTime > 0) {
            this._physicsTimeAccumulator += step;
            while (this._physicsTimeAccumulator > subTime) {
                this.onBeforePhysicsObservable.notifyObservers(this);
                this._physicsEngine._step(subTime / 1000);
                this.onAfterPhysicsObservable.notifyObservers(this);
                this._physicsTimeAccumulator -= subTime;
            }
        }
        else {
            this.onBeforePhysicsObservable.notifyObservers(this);
            this._physicsEngine._step(step / 1000);
            this.onAfterPhysicsObservable.notifyObservers(this);
        }
    }
};
/**
 * Defines the physics engine scene component responsible to manage a physics engine
 */
class PhysicsEngineSceneComponent {
    /**
     * Creates a new instance of the component for the given scene
     * @param scene Defines the scene to register the component in
     */
    constructor(scene) {
        /**
         * The component name helpful to identify the component in the list of scene components.
         */
        this.name = _sceneComponent_js__WEBPACK_IMPORTED_MODULE_2__/* .SceneComponentConstants */ .v.NAME_PHYSICSENGINE;
        this.scene = scene;
        this.scene.onBeforePhysicsObservable = new _Misc_observable_js__WEBPACK_IMPORTED_MODULE_1__/* .Observable */ .cP();
        this.scene.onAfterPhysicsObservable = new _Misc_observable_js__WEBPACK_IMPORTED_MODULE_1__/* .Observable */ .cP();
        // Replace the function used to get the deterministic frame time
        this.scene.getDeterministicFrameTime = () => {
            if (this.scene._physicsEngine) {
                return this.scene._physicsEngine.getTimeStep() * 1000;
            }
            return 1000.0 / 60.0;
        };
    }
    /**
     * Registers the component in a given scene
     */
    register() { }
    /**
     * Rebuilds the elements related to this component in case of
     * context lost for instance.
     */
    rebuild() {
        // Nothing to do for this component
    }
    /**
     * Disposes the component and the associated resources
     */
    dispose() {
        this.scene.onBeforePhysicsObservable.clear();
        this.scene.onAfterPhysicsObservable.clear();
        if (this.scene._physicsEngine) {
            this.scene.disablePhysicsEngine();
        }
    }
}
//# sourceMappingURL=joinedPhysicsEngineComponent.js.map

/***/ }),

/***/ 64553:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   G: () => (/* binding */ PhysicsRaycastResult)
/* harmony export */ });
/* harmony import */ var _Maths_math_vector_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(79923);
/* harmony import */ var _castingResult_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(42994);


/**
 * Holds the data for the raycast result
 * @see https://doc.babylonjs.com/features/featuresDeepDive/physics/usingPhysicsEngine
 */
class PhysicsRaycastResult extends _castingResult_js__WEBPACK_IMPORTED_MODULE_1__/* .CastingResult */ .d {
    constructor() {
        super(...arguments);
        this._hitDistance = 0;
        this._rayFromWorld = _Maths_math_vector_js__WEBPACK_IMPORTED_MODULE_0__/* .Vector3 */ .Pq.Zero();
        this._rayToWorld = _Maths_math_vector_js__WEBPACK_IMPORTED_MODULE_0__/* .Vector3 */ .Pq.Zero();
    }
    /**
     * Gets the distance from the hit
     */
    get hitDistance() {
        return this._hitDistance;
    }
    /**
     * Gets the hit normal/direction in the world
     */
    get hitNormalWorld() {
        return this._hitNormal;
    }
    /**
     * Gets the hit point in the world
     */
    get hitPointWorld() {
        return this._hitPoint;
    }
    /**
     * Gets the ray "start point" of the ray in the world
     */
    get rayFromWorld() {
        return this._rayFromWorld;
    }
    /**
     * Gets the ray "end point" of the ray in the world
     */
    get rayToWorld() {
        return this._rayToWorld;
    }
    /**
     * Sets the distance from the start point to the hit point
     * @param distance defines the distance to set
     */
    setHitDistance(distance) {
        this._hitDistance = distance;
    }
    /**
     * Calculates the distance manually
     */
    calculateHitDistance() {
        this._hitDistance = _Maths_math_vector_js__WEBPACK_IMPORTED_MODULE_0__/* .Vector3 */ .Pq.Distance(this._rayFromWorld, this._hitPoint);
    }
    /**
     * Resets all the values to default
     * @param from The from point on world space
     * @param to The to point on world space
     */
    reset(from = _Maths_math_vector_js__WEBPACK_IMPORTED_MODULE_0__/* .Vector3 */ .Pq.Zero(), to = _Maths_math_vector_js__WEBPACK_IMPORTED_MODULE_0__/* .Vector3 */ .Pq.Zero()) {
        super.reset();
        this._rayFromWorld.copyFrom(from);
        this._rayToWorld.copyFrom(to);
        this._hitDistance = 0;
    }
}
//# sourceMappingURL=physicsRaycastResult.js.map

/***/ }),

/***/ 6557:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ PhysicsEngine)
/* harmony export */ });
/* harmony import */ var _Maths_math_vector_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(79923);
/* harmony import */ var _Misc_devTools_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45503);


/**
 * Class used to control physics engine
 * @see https://doc.babylonjs.com/features/featuresDeepDive/physics/usingPhysicsEngine
 */
class PhysicsEngine {
    /**
     *
     * @returns version
     */
    getPluginVersion() {
        return this._physicsPlugin.getPluginVersion();
    }
    /**
     * @virtual
     * Factory used to create the default physics plugin.
     * @returns The default physics plugin
     */
    static DefaultPluginFactory() {
        throw (0,_Misc_devTools_js__WEBPACK_IMPORTED_MODULE_1__/* ._WarnImport */ .n)("CannonJSPlugin");
    }
    /**
     * Creates a new Physics Engine
     * @param gravity defines the gravity vector used by the simulation
     * @param _physicsPlugin defines the plugin to use (CannonJS by default)
     */
    constructor(gravity, _physicsPlugin = PhysicsEngine.DefaultPluginFactory()) {
        this._physicsPlugin = _physicsPlugin;
        /**
         * Global value used to control the smallest number supported by the simulation
         */
        this._impostors = [];
        this._joints = [];
        this._subTimeStep = 0;
        this._uniqueIdCounter = 0;
        if (!this._physicsPlugin.isSupported()) {
            throw new Error("Physics Engine " + this._physicsPlugin.name + " cannot be found. " + "Please make sure it is included.");
        }
        gravity = gravity || new _Maths_math_vector_js__WEBPACK_IMPORTED_MODULE_0__/* .Vector3 */ .Pq(0, -9.807, 0);
        this.setGravity(gravity);
        this.setTimeStep();
    }
    /**
     * Sets the gravity vector used by the simulation
     * @param gravity defines the gravity vector to use
     */
    setGravity(gravity) {
        this.gravity = gravity;
        this._physicsPlugin.setGravity(this.gravity);
    }
    /**
     * Set the time step of the physics engine.
     * Default is 1/60.
     * To slow it down, enter 1/600 for example.
     * To speed it up, 1/30
     * @param newTimeStep defines the new timestep to apply to this world.
     */
    setTimeStep(newTimeStep = 1 / 60) {
        this._physicsPlugin.setTimeStep(newTimeStep);
    }
    /**
     * Get the time step of the physics engine.
     * @returns the current time step
     */
    getTimeStep() {
        return this._physicsPlugin.getTimeStep();
    }
    /**
     * Set the sub time step of the physics engine.
     * Default is 0 meaning there is no sub steps
     * To increase physics resolution precision, set a small value (like 1 ms)
     * @param subTimeStep defines the new sub timestep used for physics resolution.
     */
    setSubTimeStep(subTimeStep = 0) {
        this._subTimeStep = subTimeStep;
    }
    /**
     * Get the sub time step of the physics engine.
     * @returns the current sub time step
     */
    getSubTimeStep() {
        return this._subTimeStep;
    }
    /**
     * Release all resources
     */
    dispose() {
        this._impostors.forEach(function (impostor) {
            impostor.dispose();
        });
        this._physicsPlugin.dispose();
    }
    /**
     * Gets the name of the current physics plugin
     * @returns the name of the plugin
     */
    getPhysicsPluginName() {
        return this._physicsPlugin.name;
    }
    /**
     * Adding a new impostor for the impostor tracking.
     * This will be done by the impostor itself.
     * @param impostor the impostor to add
     */
    addImpostor(impostor) {
        this._impostors.push(impostor);
        impostor.uniqueId = this._uniqueIdCounter++;
        //if no parent, generate the body
        if (!impostor.parent) {
            this._physicsPlugin.generatePhysicsBody(impostor);
        }
    }
    /**
     * Remove an impostor from the engine.
     * This impostor and its mesh will not longer be updated by the physics engine.
     * @param impostor the impostor to remove
     */
    removeImpostor(impostor) {
        const index = this._impostors.indexOf(impostor);
        if (index > -1) {
            const removed = this._impostors.splice(index, 1);
            //Is it needed?
            if (removed.length) {
                this.getPhysicsPlugin().removePhysicsBody(impostor);
            }
        }
    }
    /**
     * Add a joint to the physics engine
     * @param mainImpostor defines the main impostor to which the joint is added.
     * @param connectedImpostor defines the impostor that is connected to the main impostor using this joint
     * @param joint defines the joint that will connect both impostors.
     */
    addJoint(mainImpostor, connectedImpostor, joint) {
        const impostorJoint = {
            mainImpostor: mainImpostor,
            connectedImpostor: connectedImpostor,
            joint: joint,
        };
        joint.physicsPlugin = this._physicsPlugin;
        this._joints.push(impostorJoint);
        this._physicsPlugin.generateJoint(impostorJoint);
    }
    /**
     * Removes a joint from the simulation
     * @param mainImpostor defines the impostor used with the joint
     * @param connectedImpostor defines the other impostor connected to the main one by the joint
     * @param joint defines the joint to remove
     */
    removeJoint(mainImpostor, connectedImpostor, joint) {
        const matchingJoints = this._joints.filter(function (impostorJoint) {
            return impostorJoint.connectedImpostor === connectedImpostor && impostorJoint.joint === joint && impostorJoint.mainImpostor === mainImpostor;
        });
        if (matchingJoints.length) {
            this._physicsPlugin.removeJoint(matchingJoints[0]);
            //TODO remove it from the list as well
        }
    }
    /**
     * Called by the scene. No need to call it.
     * @param delta defines the timespan between frames
     */
    _step(delta) {
        //check if any mesh has no body / requires an update
        this._impostors.forEach((impostor) => {
            if (impostor.isBodyInitRequired()) {
                this._physicsPlugin.generatePhysicsBody(impostor);
            }
        });
        if (delta > 0.1) {
            delta = 0.1;
        }
        else if (delta <= 0) {
            delta = 1.0 / 60.0;
        }
        this._physicsPlugin.executeStep(delta, this._impostors);
    }
    /**
     * Gets the current plugin used to run the simulation
     * @returns current plugin
     */
    getPhysicsPlugin() {
        return this._physicsPlugin;
    }
    /**
     * Gets the list of physic impostors
     * @returns an array of PhysicsImpostor
     */
    getImpostors() {
        return this._impostors;
    }
    /**
     * Gets the impostor for a physics enabled object
     * @param object defines the object impersonated by the impostor
     * @returns the PhysicsImpostor or null if not found
     */
    getImpostorForPhysicsObject(object) {
        for (let i = 0; i < this._impostors.length; ++i) {
            if (this._impostors[i].object === object) {
                return this._impostors[i];
            }
        }
        return null;
    }
    /**
     * Gets the impostor for a physics body object
     * @param body defines physics body used by the impostor
     * @returns the PhysicsImpostor or null if not found
     */
    getImpostorWithPhysicsBody(body) {
        for (let i = 0; i < this._impostors.length; ++i) {
            if (this._impostors[i].physicsBody === body) {
                return this._impostors[i];
            }
        }
        return null;
    }
    /**
     * Does a raycast in the physics world
     * @param from when should the ray start?
     * @param to when should the ray end?
     * @returns PhysicsRaycastResult
     */
    raycast(from, to) {
        return this._physicsPlugin.raycast(from, to);
    }
    /**
     * Does a raycast in the physics world
     * @param from when should the ray start?
     * @param to when should the ray end?
     * @param result resulting PhysicsRaycastResult
     * @returns true if the ray hits an impostor, else false
     */
    raycastToRef(from, to, result) {
        return this._physicsPlugin.raycastToRef(from, to, result);
    }
}
//# sourceMappingURL=physicsEngine.js.map

/***/ }),

/***/ 73490:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AH: () => (/* binding */ PhysicsMotionType),
/* harmony export */   DK: () => (/* binding */ PhysicsShapeType),
/* harmony export */   f9: () => (/* binding */ PhysicsPrestepType)
/* harmony export */ });
/* unused harmony exports PhysicsConstraintAxisLimitMode, PhysicsConstraintAxis, PhysicsConstraintType, PhysicsConstraintMotorType, PhysicsEventType, PhysicsActivationControl */
/** How a specific axis can be constrained */
var PhysicsConstraintAxisLimitMode;
(function (PhysicsConstraintAxisLimitMode) {
    /*
     * The axis is not restricted at all
     */
    PhysicsConstraintAxisLimitMode[PhysicsConstraintAxisLimitMode["FREE"] = 0] = "FREE";
    /*
     * The axis has a minimum/maximum limit
     */
    PhysicsConstraintAxisLimitMode[PhysicsConstraintAxisLimitMode["LIMITED"] = 1] = "LIMITED";
    /*
     * The axis allows no relative movement of the pivots
     */
    PhysicsConstraintAxisLimitMode[PhysicsConstraintAxisLimitMode["LOCKED"] = 2] = "LOCKED";
})(PhysicsConstraintAxisLimitMode || (PhysicsConstraintAxisLimitMode = {}));
/** The constraint specific axis to use when setting Friction, `ConstraintAxisLimitMode`, max force, ... */
var PhysicsConstraintAxis;
(function (PhysicsConstraintAxis) {
    /*
     * Translation along the primary axis of the constraint (i.e. the
     * direction specified by PhysicsConstraintParameters.axisA/axisB)
     */
    PhysicsConstraintAxis[PhysicsConstraintAxis["LINEAR_X"] = 0] = "LINEAR_X";
    /*
     * Translation along the second axis of the constraint (i.e. the
     * direction specified by PhysicsConstraintParameters.perpAxisA/perpAxisB)
     */
    PhysicsConstraintAxis[PhysicsConstraintAxis["LINEAR_Y"] = 1] = "LINEAR_Y";
    /*
     * Translation along the third axis of the constraint. This axis is
     * computed from the cross product of axisA/axisB and perpAxisA/perpAxisB)
     */
    PhysicsConstraintAxis[PhysicsConstraintAxis["LINEAR_Z"] = 2] = "LINEAR_Z";
    /*
     * Rotation around the primary axis of the constraint (i.e. the
     * axis specified by PhysicsConstraintParameters.axisA/axisB)
     */
    PhysicsConstraintAxis[PhysicsConstraintAxis["ANGULAR_X"] = 3] = "ANGULAR_X";
    /*
     * Rotation around the second axis of the constraint (i.e. the
     * axis specified by PhysicsConstraintParameters.perpAxisA/perpAxisB)
     */
    PhysicsConstraintAxis[PhysicsConstraintAxis["ANGULAR_Y"] = 4] = "ANGULAR_Y";
    /*
     * Rotation around the third axis of the constraint. This axis is
     * computed from the cross product of axisA/axisB and perpAxisA/perpAxisB)
     */
    PhysicsConstraintAxis[PhysicsConstraintAxis["ANGULAR_Z"] = 5] = "ANGULAR_Z";
    /*
     * A 3D distance limit; similar to specifying the LINEAR_X/Y/Z axes
     * individually, but the distance calculation uses all three axes
     * simultaneously, instead of individually.
     */
    PhysicsConstraintAxis[PhysicsConstraintAxis["LINEAR_DISTANCE"] = 6] = "LINEAR_DISTANCE";
})(PhysicsConstraintAxis || (PhysicsConstraintAxis = {}));
/** Type of Constraint */
var PhysicsConstraintType;
(function (PhysicsConstraintType) {
    /**
     * A ball and socket constraint will attempt to line up the pivot
     * positions in each body, and have no restrictions on rotation
     */
    PhysicsConstraintType[PhysicsConstraintType["BALL_AND_SOCKET"] = 1] = "BALL_AND_SOCKET";
    /**
     * A distance constraint will attempt to keep the pivot locations
     * within a specified distance.
     */
    PhysicsConstraintType[PhysicsConstraintType["DISTANCE"] = 2] = "DISTANCE";
    /**
     * A hinge constraint will keep the pivot positions aligned as well
     * as two angular axes. The remaining angular axis will be free to rotate.
     */
    PhysicsConstraintType[PhysicsConstraintType["HINGE"] = 3] = "HINGE";
    /**
     * A slider constraint allows bodies to translate along one axis and
     * rotate about the same axis. The remaining two axes are locked in
     * place
     */
    PhysicsConstraintType[PhysicsConstraintType["SLIDER"] = 4] = "SLIDER";
    /**
     * A lock constraint will attempt to keep the pivots completely lined
     * up between both bodies, allowing no relative movement.
     */
    PhysicsConstraintType[PhysicsConstraintType["LOCK"] = 5] = "LOCK";
    /*
     * A prismatic will lock the rotations of the bodies, and allow translation
     * only along one axis
     */
    PhysicsConstraintType[PhysicsConstraintType["PRISMATIC"] = 6] = "PRISMATIC";
    /*
     * A generic constraint; this starts with no limits on how the bodies can
     * move relative to each other, but limits can be added via the PhysicsConstraint
     * interfaces. This can be used to specify a large variety of constraints
     */
    PhysicsConstraintType[PhysicsConstraintType["SIX_DOF"] = 7] = "SIX_DOF";
})(PhysicsConstraintType || (PhysicsConstraintType = {}));
/** Type of Shape */
var PhysicsShapeType;
(function (PhysicsShapeType) {
    PhysicsShapeType[PhysicsShapeType["SPHERE"] = 0] = "SPHERE";
    PhysicsShapeType[PhysicsShapeType["CAPSULE"] = 1] = "CAPSULE";
    PhysicsShapeType[PhysicsShapeType["CYLINDER"] = 2] = "CYLINDER";
    PhysicsShapeType[PhysicsShapeType["BOX"] = 3] = "BOX";
    PhysicsShapeType[PhysicsShapeType["CONVEX_HULL"] = 4] = "CONVEX_HULL";
    PhysicsShapeType[PhysicsShapeType["CONTAINER"] = 5] = "CONTAINER";
    PhysicsShapeType[PhysicsShapeType["MESH"] = 6] = "MESH";
    PhysicsShapeType[PhysicsShapeType["HEIGHTFIELD"] = 7] = "HEIGHTFIELD";
})(PhysicsShapeType || (PhysicsShapeType = {}));
/** Optional motor which attempts to move a body at a specific velocity, or at a specific position */
var PhysicsConstraintMotorType;
(function (PhysicsConstraintMotorType) {
    PhysicsConstraintMotorType[PhysicsConstraintMotorType["NONE"] = 0] = "NONE";
    PhysicsConstraintMotorType[PhysicsConstraintMotorType["VELOCITY"] = 1] = "VELOCITY";
    PhysicsConstraintMotorType[PhysicsConstraintMotorType["POSITION"] = 2] = "POSITION";
})(PhysicsConstraintMotorType || (PhysicsConstraintMotorType = {}));
var PhysicsEventType;
(function (PhysicsEventType) {
    PhysicsEventType["COLLISION_STARTED"] = "COLLISION_STARTED";
    PhysicsEventType["COLLISION_CONTINUED"] = "COLLISION_CONTINUED";
    PhysicsEventType["COLLISION_FINISHED"] = "COLLISION_FINISHED";
    PhysicsEventType["TRIGGER_ENTERED"] = "TRIGGER_ENTERED";
    PhysicsEventType["TRIGGER_EXITED"] = "TRIGGER_EXITED";
})(PhysicsEventType || (PhysicsEventType = {}));
/**
 * Indicates how the body will behave.
 */
var PhysicsMotionType;
(function (PhysicsMotionType) {
    PhysicsMotionType[PhysicsMotionType["STATIC"] = 0] = "STATIC";
    PhysicsMotionType[PhysicsMotionType["ANIMATED"] = 1] = "ANIMATED";
    PhysicsMotionType[PhysicsMotionType["DYNAMIC"] = 2] = "DYNAMIC";
})(PhysicsMotionType || (PhysicsMotionType = {}));
/**
 * Indicates how to handle position/rotation change of transform node attached to a physics body
 */
var PhysicsPrestepType;
(function (PhysicsPrestepType) {
    PhysicsPrestepType[PhysicsPrestepType["DISABLED"] = 0] = "DISABLED";
    PhysicsPrestepType[PhysicsPrestepType["TELEPORT"] = 1] = "TELEPORT";
    PhysicsPrestepType[PhysicsPrestepType["ACTION"] = 2] = "ACTION";
})(PhysicsPrestepType || (PhysicsPrestepType = {}));
/**
 * Controls the body sleep mode.
 */
var PhysicsActivationControl;
(function (PhysicsActivationControl) {
    PhysicsActivationControl[PhysicsActivationControl["SIMULATION_CONTROLLED"] = 0] = "SIMULATION_CONTROLLED";
    PhysicsActivationControl[PhysicsActivationControl["ALWAYS_ACTIVE"] = 1] = "ALWAYS_ACTIVE";
    PhysicsActivationControl[PhysicsActivationControl["ALWAYS_INACTIVE"] = 2] = "ALWAYS_INACTIVE";
})(PhysicsActivationControl || (PhysicsActivationControl = {}));
//# sourceMappingURL=IPhysicsEnginePlugin.js.map

/***/ }),

/***/ 8014:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ PhysicsBody)
/* harmony export */ });
/* harmony import */ var _IPhysicsEnginePlugin_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73490);
/* harmony import */ var _Maths_math_vector_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(79923);


/**
 * PhysicsBody is useful for creating a physics body that can be used in a physics engine. It allows
 * the user to set the mass and velocity of the body, which can then be used to calculate the
 * motion of the body in the physics engine.
 */
class PhysicsBody {
    /**
     * Disable pre-step that consists in updating Physics Body from Transform Node Translation/Orientation.
     * True by default for maximum performance.
     */
    get disablePreStep() {
        return this._prestepType == _IPhysicsEnginePlugin_js__WEBPACK_IMPORTED_MODULE_0__/* .PhysicsPrestepType */ .f9.DISABLED;
    }
    set disablePreStep(value) {
        this._prestepType = value ? _IPhysicsEnginePlugin_js__WEBPACK_IMPORTED_MODULE_0__/* .PhysicsPrestepType */ .f9.DISABLED : _IPhysicsEnginePlugin_js__WEBPACK_IMPORTED_MODULE_0__/* .PhysicsPrestepType */ .f9.TELEPORT;
    }
    /**
     * Constructs a new physics body for the given node.
     * @param transformNode - The Transform Node to construct the physics body for. For better performance, it is advised that this node does not have a parent.
     * @param motionType - The motion type of the physics body. The options are:
     *  - PhysicsMotionType.STATIC - Static bodies are not moving and unaffected by forces or collisions. They are good for level boundaries or terrain.
     *  - PhysicsMotionType.DYNAMIC - Dynamic bodies are fully simulated. They can move and collide with other objects.
     *  - PhysicsMotionType.ANIMATED - They behave like dynamic bodies, but they won't be affected by other bodies, but still push other bodies out of the way.
     * @param startsAsleep - Whether the physics body should start in a sleeping state (not a guarantee). Defaults to false.
     * @param scene - The scene containing the physics engine.
     *
     * This code is useful for creating a physics body for a given Transform Node in a scene.
     * It checks the version of the physics engine and the physics plugin, and initializes the body accordingly.
     * It also sets the node's rotation quaternion if it is not already set. Finally, it adds the body to the physics engine.
     */
    constructor(transformNode, motionType, startsAsleep, scene) {
        /**
         * V2 Physics plugin private data for single Transform
         */
        this._pluginData = undefined;
        /**
         * V2 Physics plugin private data for instances
         */
        this._pluginDataInstances = [];
        /**
         * If the collision callback is enabled
         */
        this._collisionCBEnabled = false;
        /**
         * If the collision ended callback is enabled
         */
        this._collisionEndedCBEnabled = false;
        /**
         * Disable sync from physics to transformNode. This value is set to true at body creation or at motionType setting when the body is not dynamic.
         */
        this.disableSync = false;
        this._isDisposed = false;
        this._shape = null;
        this._prestepType = _IPhysicsEnginePlugin_js__WEBPACK_IMPORTED_MODULE_0__/* .PhysicsPrestepType */ .f9.DISABLED;
        if (!scene) {
            return;
        }
        const physicsEngine = scene.getPhysicsEngine();
        if (!physicsEngine) {
            throw new Error("No Physics Engine available.");
        }
        this._physicsEngine = physicsEngine;
        if (physicsEngine.getPluginVersion() != 2) {
            throw new Error("Plugin version is incorrect. Expected version 2.");
        }
        const physicsPlugin = physicsEngine.getPhysicsPlugin();
        if (!physicsPlugin) {
            throw new Error("No Physics Plugin available.");
        }
        this._physicsPlugin = physicsPlugin;
        if (!transformNode.rotationQuaternion) {
            transformNode.rotationQuaternion = _Maths_math_vector_js__WEBPACK_IMPORTED_MODULE_1__/* .Quaternion */ .PT.FromEulerAngles(transformNode.rotation.x, transformNode.rotation.y, transformNode.rotation.z);
        }
        this.startAsleep = startsAsleep;
        this._motionType = motionType;
        // only dynamic and animated body needs sync from physics to transformNode
        this.disableSync = motionType == 0 /* PhysicsMotionType.STATIC */;
        // instances?
        const m = transformNode;
        if (m.hasThinInstances) {
            this._physicsPlugin.initBodyInstances(this, motionType, m);
        }
        else {
            // single instance
            if (transformNode.parent) {
                // Force computation of world matrix so that the parent transforms are correctly reflected in absolutePosition/absoluteRotationQuaternion.
                transformNode.computeWorldMatrix(true);
            }
            this._physicsPlugin.initBody(this, motionType, transformNode.absolutePosition, transformNode.absoluteRotationQuaternion);
        }
        this.transformNode = transformNode;
        transformNode.physicsBody = this;
        physicsEngine.addBody(this);
        this._nodeDisposeObserver = transformNode.onDisposeObservable.add(() => {
            this.dispose();
        });
    }
    /**
     * Returns the string "PhysicsBody".
     * @returns "PhysicsBody"
     */
    getClassName() {
        return "PhysicsBody";
    }
    /**
     * Clone the PhysicsBody to a new body and assign it to the transformNode parameter
     * @param transformNode transformNode that will be used for the cloned PhysicsBody
     * @returns the newly cloned PhysicsBody
     */
    clone(transformNode) {
        const clonedBody = new PhysicsBody(transformNode, this.getMotionType(), this.startAsleep, this.transformNode.getScene());
        clonedBody.shape = this.shape;
        clonedBody.setMassProperties(this.getMassProperties());
        clonedBody.setLinearDamping(this.getLinearDamping());
        clonedBody.setAngularDamping(this.getAngularDamping());
        return clonedBody;
    }
    /**
     * If a physics body is connected to an instanced node, update the number physic instances to match the number of node instances.
     */
    updateBodyInstances() {
        const m = this.transformNode;
        if (m.hasThinInstances) {
            this._physicsPlugin.updateBodyInstances(this, m);
        }
    }
    /**
     * This returns the number of internal instances of the physics body
     */
    get numInstances() {
        return this._pluginDataInstances.length;
    }
    /**
     * Get the motion type of the physics body. Can be STATIC, DYNAMIC, or ANIMATED.
     */
    get motionType() {
        return this._motionType;
    }
    /**
     * Sets the shape of the physics body.
     * @param shape - The shape of the physics body.
     *
     * This method is useful for setting the shape of the physics body, which is necessary for the physics engine to accurately simulate the body's behavior.
     * The shape is used to calculate the body's mass, inertia, and other properties.
     */
    set shape(shape) {
        this._shape = shape;
        if (shape) {
            this._physicsPlugin.setShape(this, shape);
        }
    }
    /**
     * Retrieves the physics shape associated with this object.
     *
     * @returns The physics shape associated with this object, or `undefined` if no
     * shape is associated.
     *
     * This method is useful for retrieving the physics shape associated with this object,
     * which can be used to apply physical forces to the object or to detect collisions.
     */
    get shape() {
        return this._shape;
    }
    /**
     * Returns the bounding box of the physics body.
     * @returns The bounding box of the physics body.
     */
    getBoundingBox() {
        return this._physicsPlugin.getBodyBoundingBox(this);
    }
    /**
     * Sets the event mask for the physics engine.
     *
     * @param eventMask - A bitmask that determines which events will be sent to the physics engine.
     * @param instanceIndex - If this body is instanced, the index of the instance to set the event mask for.
     *
     * This method is useful for setting the event mask for the physics engine, which determines which events
     * will be sent to the physics engine. This allows the user to control which events the physics engine will respond to.
     */
    setEventMask(eventMask, instanceIndex) {
        this._physicsPlugin.setEventMask(this, eventMask, instanceIndex);
    }
    /**
     * Gets the event mask of the physics engine.
     * @param instanceIndex - If this body is instanced, the index of the instance to get the event mask for.
     * @returns The event mask of the physics engine.
     *
     * This method is useful for getting the event mask of the physics engine,
     * which is used to determine which events the engine will respond to.
     * This is important for ensuring that the engine is responding to the correct events and not
     * wasting resources on unnecessary events.
     */
    getEventMask(instanceIndex) {
        return this._physicsPlugin.getEventMask(this, instanceIndex);
    }
    /**
     * Sets the motion type of the physics body. Can be STATIC, DYNAMIC, or ANIMATED.
     * @param motionType - The motion type to set.
     * @param instanceIndex - If this body is instanced, the index of the instance to set the motion type for.
     */
    setMotionType(motionType, instanceIndex) {
        this.disableSync = motionType == 0 /* PhysicsMotionType.STATIC */;
        this._physicsPlugin.setMotionType(this, motionType, instanceIndex);
    }
    /**
     * Gets the motion type of the physics body. Can be STATIC, DYNAMIC, or ANIMATED.
     * @param instanceIndex - If this body is instanced, the index of the instance to get the motion type for.
     * @returns The motion type of the physics body.
     */
    getMotionType(instanceIndex) {
        return this._physicsPlugin.getMotionType(this, instanceIndex);
    }
    /**
     * Set the prestep type of the body
     * @param prestepType prestep type provided by PhysicsPrestepType
     */
    setPrestepType(prestepType) {
        this._prestepType = prestepType;
    }
    /**
     * Get the current prestep type of the body
     * @returns the type of prestep associated with the body and its instance index
     */
    getPrestepType() {
        return this._prestepType;
    }
    /**
     * Computes the mass properties of the physics object, based on the set of physics shapes this body uses.
     * This method is useful for computing the initial mass properties of a physics object, such as its mass,
     * inertia, and center of mass; these values are important for accurately simulating the physics of the
     * object in the physics engine, and computing values based on the shape will provide you with reasonable
     * initial values, which you can then customize.
     * @param instanceIndex - The index of the instance to compute the mass properties for.
     * @returns The mass properties of the object.
     */
    computeMassProperties(instanceIndex) {
        return this._physicsPlugin.computeMassProperties(this, instanceIndex);
    }
    /**
     * Sets the mass properties of the physics object.
     *
     * @param massProps - The mass properties to set.
     * @param instanceIndex - The index of the instance to set the mass properties for. If not defined, the mass properties will be set for all instances.
     *
     * This method is useful for setting the mass properties of a physics object, such as its mass,
     * inertia, and center of mass. This is important for accurately simulating the physics of the object in the physics engine.
     */
    setMassProperties(massProps, instanceIndex) {
        this._physicsPlugin.setMassProperties(this, massProps, instanceIndex);
    }
    /**
     * Retrieves the mass properties of the object.
     * @param instanceIndex - If this body is instanced, the index of the instance to get the mass properties for.
     * @returns The mass properties of the object.
     *
     * This method is useful for physics simulations, as it allows the user to
     * retrieve the mass properties of the object, such as its mass, center of mass,
     * and moment of inertia. This information is necessary for accurate physics
     * simulations.
     */
    getMassProperties(instanceIndex) {
        return this._physicsPlugin.getMassProperties(this, instanceIndex);
    }
    /**
     * Sets the linear damping of the physics body.
     *
     * @param damping - The linear damping value.
     * @param instanceIndex - If this body is instanced, the index of the instance to set the linear damping for.
     *
     * This method is useful for controlling the linear damping of the physics body,
     * which is the rate at which the body's velocity decreases over time. This is useful for simulating
     * the effects of air resistance or other forms of friction.
     */
    setLinearDamping(damping, instanceIndex) {
        this._physicsPlugin.setLinearDamping(this, damping, instanceIndex);
    }
    /**
     * Gets the linear damping of the physics body.
     * @param instanceIndex - If this body is instanced, the index of the instance to get the linear damping for.
     * @returns The linear damping of the physics body.
     *
     * This method is useful for retrieving the linear damping of the physics body, which is the amount of
     * resistance the body has to linear motion. This is useful for simulating realistic physics behavior
     * in a game.
     */
    getLinearDamping(instanceIndex) {
        return this._physicsPlugin.getLinearDamping(this, instanceIndex);
    }
    /**
     * Sets the angular damping of the physics body.
     * @param damping The angular damping of the body.
     * @param instanceIndex - If this body is instanced, the index of the instance to set the angular damping for.
     *
     * This method is useful for controlling the angular velocity of a physics body.
     * By setting the damping, the body's angular velocity will be reduced over time, simulating the effect of friction.
     * This can be used to create realistic physical behavior in a physics engine.
     */
    setAngularDamping(damping, instanceIndex) {
        this._physicsPlugin.setAngularDamping(this, damping, instanceIndex);
    }
    /**
     * Gets the angular damping of the physics body.
     * @param instanceIndex - If this body is instanced, the index of the instance to get the angular damping for.
     *
     * @returns The angular damping of the physics body.
     *
     * This method is useful for getting the angular damping of the physics body,
     * which is the rate of reduction of the angular velocity over time.
     * This is important for simulating realistic physics behavior in a game.
     */
    getAngularDamping(instanceIndex) {
        return this._physicsPlugin.getAngularDamping(this, instanceIndex);
    }
    /**
     * Sets the linear velocity of the physics object.
     * @param linVel - The linear velocity to set.
     * @param instanceIndex - If this body is instanced, the index of the instance to set the linear velocity for.
     *
     * This method is useful for setting the linear velocity of a physics object,
     * which is necessary for simulating realistic physics in a game engine.
     * By setting the linear velocity, the physics object will move in the direction and speed specified by the vector.
     * This allows for realistic physics simulations, such as simulating the motion of a ball rolling down a hill.
     */
    setLinearVelocity(linVel, instanceIndex) {
        this._physicsPlugin.setLinearVelocity(this, linVel, instanceIndex);
    }
    /**
     * Gets the linear velocity of the physics body and stores it in the given vector3.
     * @param linVel - The vector3 to store the linear velocity in.
     * @param instanceIndex - If this body is instanced, the index of the instance to get the linear velocity for.
     *
     * This method is useful for getting the linear velocity of a physics body in a physics engine.
     * This can be used to determine the speed and direction of the body, which can be used to calculate the motion of the body.
     */
    getLinearVelocityToRef(linVel, instanceIndex) {
        this._physicsPlugin.getLinearVelocityToRef(this, linVel, instanceIndex);
    }
    /**
     * Gets the linear velocity of the physics body as a new vector3.
     * @param instanceIndex - If this body is instanced, the index of the instance to get the linear velocity for.
     * @returns The linear velocity of the physics body.
     *
     * This method is useful for getting the linear velocity of a physics body in a physics engine.
     * This can be used to determine the speed and direction of the body, which can be used to calculate the motion of the body.
     */
    getLinearVelocity(instanceIndex) {
        const ref = new _Maths_math_vector_js__WEBPACK_IMPORTED_MODULE_1__/* .Vector3 */ .Pq();
        this.getLinearVelocityToRef(ref, instanceIndex);
        return ref;
    }
    /**
     * Sets the angular velocity of the physics object.
     * @param angVel - The angular velocity to set.
     * @param instanceIndex - If this body is instanced, the index of the instance to set the angular velocity for.
     *
     * This method is useful for setting the angular velocity of a physics object, which is necessary for
     * simulating realistic physics behavior. The angular velocity is used to determine the rate of rotation of the object,
     * which is important for simulating realistic motion.
     */
    setAngularVelocity(angVel, instanceIndex) {
        this._physicsPlugin.setAngularVelocity(this, angVel, instanceIndex);
    }
    /**
     * Gets the angular velocity of the physics body and stores it in the given vector3.
     * @param angVel - The vector3 to store the angular velocity in.
     * @param instanceIndex - If this body is instanced, the index of the instance to get the angular velocity for.
     *
     * This method is useful for getting the angular velocity of a physics body, which can be used to determine the body's
     * rotational speed. This information can be used to create realistic physics simulations.
     */
    getAngularVelocityToRef(angVel, instanceIndex) {
        this._physicsPlugin.getAngularVelocityToRef(this, angVel, instanceIndex);
    }
    /**
     * Gets the angular velocity of the physics body as a new vector3.
     * @param instanceIndex - If this body is instanced, the index of the instance to get the angular velocity for.
     * @returns The angular velocity of the physics body.
     *
     * This method is useful for getting the angular velocity of a physics body, which can be used to determine the body's
     * rotational speed. This information can be used to create realistic physics simulations.
     */
    getAngularVelocity(instanceIndex) {
        const ref = new _Maths_math_vector_js__WEBPACK_IMPORTED_MODULE_1__/* .Vector3 */ .Pq();
        this.getAngularVelocityToRef(ref, instanceIndex);
        return ref;
    }
    /**
     * Applies an impulse to the physics object.
     *
     * @param impulse The impulse vector.
     * @param location The location of the impulse.
     * @param instanceIndex For a instanced body, the instance to where the impulse should be applied. If not specified, the impulse is applied to all instances.
     *
     * This method is useful for applying an impulse to a physics object, which can be used to simulate physical forces such as gravity,
     * collisions, and explosions. This can be used to create realistic physics simulations in a game or other application.
     */
    applyImpulse(impulse, location, instanceIndex) {
        this._physicsPlugin.applyImpulse(this, impulse, location, instanceIndex);
    }
    /**
     * Add torque to a physics body
     * @param angularImpulse The angular impulse vector.
     * @param instanceIndex For a instanced body, the instance to where the impulse should be applied. If not specified, the impulse is applied to all instances.
     */
    applyAngularImpulse(angularImpulse, instanceIndex) {
        this._physicsPlugin.applyAngularImpulse(this, angularImpulse, instanceIndex);
    }
    /**
     * Applies a force to the physics object.
     *
     * @param force The force vector.
     * @param location The location of the force.
     * @param instanceIndex For a instanced body, the instance to where the force should be applied. If not specified, the force is applied to all instances.
     *
     * This method is useful for applying a force to a physics object, which can be used to simulate physical forces such as gravity,
     * collisions, and explosions. This can be used to create realistic physics simulations in a game or other application.
     */
    applyForce(force, location, instanceIndex) {
        this._physicsPlugin.applyForce(this, force, location, instanceIndex);
    }
    /**
     * Retrieves the geometry of the body from the physics plugin.
     *
     * @returns The geometry of the body.
     *
     * This method is useful for retrieving the geometry of the body from the physics plugin, which can be used for various physics calculations.
     */
    getGeometry() {
        return this._physicsPlugin.getBodyGeometry(this);
    }
    /**
     * Returns an observable that will be notified for when a collision starts or continues for this PhysicsBody
     * @returns Observable
     */
    getCollisionObservable() {
        return this._physicsPlugin.getCollisionObservable(this);
    }
    /**
     * Returns an observable that will be notified when the body has finished colliding with another body
     * @returns
     */
    getCollisionEndedObservable() {
        return this._physicsPlugin.getCollisionEndedObservable(this);
    }
    /**
     * Enable or disable collision callback for this PhysicsBody.
     * @param enabled true if PhysicsBody's collision will rise a collision event and notifies the observable
     */
    setCollisionCallbackEnabled(enabled) {
        this._collisionCBEnabled = enabled;
        this._physicsPlugin.setCollisionCallbackEnabled(this, enabled);
    }
    /**
     * Enable or disable collision ended callback for this PhysicsBody.
     * @param enabled true if PhysicsBody's collision ended will rise a collision event and notifies the observable
     */
    setCollisionEndedCallbackEnabled(enabled) {
        this._collisionEndedCBEnabled = enabled;
        this._physicsPlugin.setCollisionEndedCallbackEnabled(this, enabled);
    }
    /**
     * Get the center of the object in world space.
     * @param instanceIndex - If this body is instanced, the index of the instance to get the center for.
     * @returns geometric center of the associated mesh
     */
    getObjectCenterWorld(instanceIndex) {
        const ref = new _Maths_math_vector_js__WEBPACK_IMPORTED_MODULE_1__/* .Vector3 */ .Pq();
        return this.getObjectCenterWorldToRef(ref, instanceIndex);
    }
    /**
     * Get the center of the object in world space.
     * @param ref - The vector3 to store the result in.
     * @param instanceIndex - If this body is instanced, the index of the instance to get the center for.
     * @returns geometric center of the associated mesh
     */
    getObjectCenterWorldToRef(ref, instanceIndex) {
        if (this._pluginDataInstances?.length > 0) {
            const index = instanceIndex || 0;
            const matrixData = this.transformNode._thinInstanceDataStorage.matrixData;
            if (matrixData) {
                ref.set(matrixData[index * 16 + 12], matrixData[index * 16 + 13], matrixData[index * 16 + 14]);
            }
        }
        else {
            ref.copyFrom(this.transformNode.position);
        }
        return ref;
    }
    /**
     * Adds a constraint to the physics engine.
     *
     * @param childBody - The body to which the constraint will be applied.
     * @param constraint - The constraint to be applied.
     * @param instanceIndex - If this body is instanced, the index of the instance to which the constraint will be applied. If not specified, no constraint will be applied.
     * @param childInstanceIndex - If the child body is instanced, the index of the instance to which the constraint will be applied. If not specified, no constraint will be applied.
     *
     */
    addConstraint(childBody, constraint, instanceIndex, childInstanceIndex) {
        this._physicsPlugin.addConstraint(this, childBody, constraint, instanceIndex, childInstanceIndex);
    }
    /**
     * Sync with a bone
     * @param bone The bone that the impostor will be synced to.
     * @param boneMesh The mesh that the bone is influencing.
     * @param jointPivot The pivot of the joint / bone in local space.
     * @param distToJoint Optional distance from the impostor to the joint.
     * @param adjustRotation Optional quaternion for adjusting the local rotation of the bone.
     * @param boneAxis Optional vector3 axis the bone is aligned with
     */
    syncWithBone(bone, boneMesh, jointPivot, distToJoint, adjustRotation, boneAxis) {
        const mesh = this.transformNode;
        if (mesh.rotationQuaternion) {
            if (adjustRotation) {
                const tempQuat = _Maths_math_vector_js__WEBPACK_IMPORTED_MODULE_1__/* .TmpVectors */ .AA.Quaternion[0];
                bone.getRotationQuaternionToRef(1 /* Space.WORLD */, boneMesh, tempQuat);
                tempQuat.multiplyToRef(adjustRotation, mesh.rotationQuaternion);
            }
            else {
                bone.getRotationQuaternionToRef(1 /* Space.WORLD */, boneMesh, mesh.rotationQuaternion);
            }
        }
        const pos = _Maths_math_vector_js__WEBPACK_IMPORTED_MODULE_1__/* .TmpVectors */ .AA.Vector3[0];
        const boneDir = _Maths_math_vector_js__WEBPACK_IMPORTED_MODULE_1__/* .TmpVectors */ .AA.Vector3[1];
        if (!boneAxis) {
            boneAxis = _Maths_math_vector_js__WEBPACK_IMPORTED_MODULE_1__/* .TmpVectors */ .AA.Vector3[2];
            boneAxis.x = 0;
            boneAxis.y = 1;
            boneAxis.z = 0;
        }
        bone.getDirectionToRef(boneAxis, boneMesh, boneDir);
        bone.getAbsolutePositionToRef(boneMesh, pos);
        if ((distToJoint === undefined || distToJoint === null) && jointPivot) {
            distToJoint = jointPivot.length();
        }
        if (distToJoint !== undefined && distToJoint !== null) {
            pos.x += boneDir.x * distToJoint;
            pos.y += boneDir.y * distToJoint;
            pos.z += boneDir.z * distToJoint;
        }
        mesh.setAbsolutePosition(pos);
    }
    /**
     * Executes a callback on the body or all of the instances of a body
     * @param callback the callback to execute
     */
    iterateOverAllInstances(callback) {
        if (this._pluginDataInstances?.length > 0) {
            for (let i = 0; i < this._pluginDataInstances.length; i++) {
                callback(this, i);
            }
        }
        else {
            callback(this, undefined);
        }
    }
    /**
     * Sets the gravity factor of the physics body
     * @param factor the gravity factor to set
     * @param instanceIndex the instance of the body to set, if undefined all instances will be set
     */
    setGravityFactor(factor, instanceIndex) {
        this._physicsPlugin.setGravityFactor(this, factor, instanceIndex);
    }
    /**
     * Gets the gravity factor of the physics body
     * @param instanceIndex the instance of the body to get, if undefined the value of first instance will be returned
     * @returns the gravity factor
     */
    getGravityFactor(instanceIndex) {
        return this._physicsPlugin.getGravityFactor(this, instanceIndex);
    }
    /**
     * Set the target transformation (position and rotation) of the body, such that the body will set its velocity to reach that target
     * @param position The target position
     * @param rotation The target rotation
     * @param instanceIndex The index of the instance in an instanced body
     */
    setTargetTransform(position, rotation, instanceIndex) {
        this._physicsPlugin.setTargetTransform(this, position, rotation, instanceIndex);
    }
    /**
     * Returns if the body has been disposed.
     * @returns true if disposed, false otherwise.
     */
    get isDisposed() {
        return this._isDisposed;
    }
    /**
     * Disposes the body from the physics engine.
     *
     * This method is useful for cleaning up the physics engine when a body is no longer needed. Disposing the body will free up resources and prevent memory leaks.
     */
    dispose() {
        if (this._isDisposed) {
            return;
        }
        // Disable collisions CB so it doesn't fire when the body is disposed
        if (this._collisionCBEnabled) {
            this.setCollisionCallbackEnabled(false);
        }
        if (this._collisionEndedCBEnabled) {
            this.setCollisionEndedCallbackEnabled(false);
        }
        if (this._nodeDisposeObserver) {
            this.transformNode.onDisposeObservable.remove(this._nodeDisposeObserver);
            this._nodeDisposeObserver = null;
        }
        this._physicsEngine.removeBody(this);
        this._physicsPlugin.removeBody(this);
        this._physicsPlugin.disposeBody(this);
        this.transformNode.physicsBody = null;
        this._pluginData = null;
        this._pluginDataInstances.length = 0;
        this._isDisposed = true;
        this.shape = null;
    }
}
//# sourceMappingURL=physicsBody.js.map

/***/ }),

/***/ 2832:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ PhysicsEngine)
/* harmony export */ });
/* harmony import */ var _Maths_math_vector_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(79923);
/* harmony import */ var _physicsRaycastResult_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(64553);
/* harmony import */ var _Misc_devTools_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(45503);



/**
 * Class used to control physics engine
 * @see https://doc.babylonjs.com/features/featuresDeepDive/physics/usingPhysicsEngine
 */
class PhysicsEngine {
    /**
     *
     * @returns physics plugin version
     */
    getPluginVersion() {
        return this._physicsPlugin.getPluginVersion();
    }
    // eslint-disable-next-line jsdoc/require-returns-check
    /**
     * Factory used to create the default physics plugin.
     * @returns The default physics plugin
     */
    static DefaultPluginFactory() {
        throw (0,_Misc_devTools_js__WEBPACK_IMPORTED_MODULE_2__/* ._WarnImport */ .n)("");
    }
    /**
     * Creates a new Physics Engine
     * @param gravity defines the gravity vector used by the simulation
     * @param _physicsPlugin defines the plugin to use (CannonJS by default)
     */
    constructor(gravity, _physicsPlugin = PhysicsEngine.DefaultPluginFactory()) {
        this._physicsPlugin = _physicsPlugin;
        /** @internal */
        this._physicsBodies = [];
        this._subTimeStep = 0;
        gravity = gravity || new _Maths_math_vector_js__WEBPACK_IMPORTED_MODULE_0__/* .Vector3 */ .Pq(0, -9.807, 0);
        this.setGravity(gravity);
        this.setTimeStep();
    }
    /**
     * Sets the gravity vector used by the simulation
     * @param gravity defines the gravity vector to use
     */
    setGravity(gravity) {
        this.gravity = gravity;
        this._physicsPlugin.setGravity(this.gravity);
    }
    /**
     * Set the time step of the physics engine.
     * Default is 1/60.
     * To slow it down, enter 1/600 for example.
     * To speed it up, 1/30
     * Unit is seconds.
     * @param newTimeStep defines the new timestep to apply to this world.
     */
    setTimeStep(newTimeStep = 1 / 60) {
        this._physicsPlugin.setTimeStep(newTimeStep);
    }
    /**
     * Get the time step of the physics engine.
     * @returns the current time step
     */
    getTimeStep() {
        return this._physicsPlugin.getTimeStep();
    }
    /**
     * Set the sub time step of the physics engine.
     * Default is 0 meaning there is no sub steps
     * To increase physics resolution precision, set a small value (like 1 ms)
     * @param subTimeStep defines the new sub timestep used for physics resolution.
     */
    setSubTimeStep(subTimeStep = 0) {
        this._subTimeStep = subTimeStep;
    }
    /**
     * Get the sub time step of the physics engine.
     * @returns the current sub time step
     */
    getSubTimeStep() {
        return this._subTimeStep;
    }
    /**
     * Release all resources
     */
    dispose() {
        this._physicsPlugin.dispose();
    }
    /**
     * Gets the name of the current physics plugin
     * @returns the name of the plugin
     */
    getPhysicsPluginName() {
        return this._physicsPlugin.name;
    }
    /**
     * Set the maximum allowed linear and angular velocities
     * @param maxLinearVelocity maximum allowed linear velocity
     * @param maxAngularVelocity maximum allowed angular velocity
     */
    setVelocityLimits(maxLinearVelocity, maxAngularVelocity) {
        this._physicsPlugin.setVelocityLimits(maxLinearVelocity, maxAngularVelocity);
    }
    /**
     * @returns maximum allowed linear velocity
     */
    getMaxLinearVelocity() {
        return this._physicsPlugin.getMaxLinearVelocity();
    }
    /**
     * @returns maximum allowed angular velocity
     */
    getMaxAngularVelocity() {
        return this._physicsPlugin.getMaxAngularVelocity();
    }
    /**
     * Adding a new impostor for the impostor tracking.
     * This will be done by the impostor itself.
     * @param impostor the impostor to add
     */
    /**
     * Called by the scene. No need to call it.
     * @param delta defines the timespan between frames
     */
    _step(delta) {
        if (delta > 0.1) {
            delta = 0.1;
        }
        else if (delta <= 0) {
            delta = 1.0 / 60.0;
        }
        this._physicsPlugin.executeStep(delta, this._physicsBodies);
    }
    /**
     * Add a body as an active component of this engine
     * @param physicsBody The body to add
     */
    addBody(physicsBody) {
        this._physicsBodies.push(physicsBody);
    }
    /**
     * Removes a particular body from this engine
     * @param physicsBody The body to remove from the simulation
     */
    removeBody(physicsBody) {
        const index = this._physicsBodies.indexOf(physicsBody);
        if (index > -1) {
            /*const removed =*/ this._physicsBodies.splice(index, 1);
        }
    }
    /**
     * @returns an array of bodies added to this engine
     */
    getBodies() {
        return this._physicsBodies;
    }
    /**
     * Gets the current plugin used to run the simulation
     * @returns current plugin
     */
    getPhysicsPlugin() {
        return this._physicsPlugin;
    }
    /**
     * Does a raycast in the physics world
     * @param from when should the ray start?
     * @param to when should the ray end?
     * @param result resulting PhysicsRaycastResult
     * @param query raycast query object
     */
    raycastToRef(from, to, result, query) {
        this._physicsPlugin.raycast(from, to, result, query);
    }
    /**
     * Does a raycast in the physics world
     * @param from when should the ray start?
     * @param to when should the ray end?
     * @param query raycast query object
     * @returns PhysicsRaycastResult
     */
    raycast(from, to, query) {
        const result = new _physicsRaycastResult_js__WEBPACK_IMPORTED_MODULE_1__/* .PhysicsRaycastResult */ .G();
        this._physicsPlugin.raycast(from, to, result, query);
        return result;
    }
}
//# sourceMappingURL=physicsEngine.js.map

/***/ }),

/***/ 55431:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   F: () => (/* binding */ PhysicsMaterialCombineMode)
/* harmony export */ });
/**
 * Determines how values from the PhysicsMaterial are combined when
 * two objects are in contact. When each PhysicsMaterial specifies
 * a different combine mode for some property, the combine mode which
 * is used will be selected based on their order in this enum - i.e.
 * a value later in this list will be preferentially used.
 */
var PhysicsMaterialCombineMode;
(function (PhysicsMaterialCombineMode) {
    /**
     * The final value will be the geometric mean of the two values:
     * sqrt( valueA *  valueB )
     */
    PhysicsMaterialCombineMode[PhysicsMaterialCombineMode["GEOMETRIC_MEAN"] = 0] = "GEOMETRIC_MEAN";
    /**
     * The final value will be the smaller of the two:
     * min( valueA , valueB )
     */
    PhysicsMaterialCombineMode[PhysicsMaterialCombineMode["MINIMUM"] = 1] = "MINIMUM";
    /* The final value will be the larger of the two:
     * max( valueA , valueB )
     */
    PhysicsMaterialCombineMode[PhysicsMaterialCombineMode["MAXIMUM"] = 2] = "MAXIMUM";
    /* The final value will be the arithmetic mean of the two values:
     * (valueA + valueB) / 2
     */
    PhysicsMaterialCombineMode[PhysicsMaterialCombineMode["ARITHMETIC_MEAN"] = 3] = "ARITHMETIC_MEAN";
    /**
     * The final value will be the product of the two values:
     * valueA * valueB
     */
    PhysicsMaterialCombineMode[PhysicsMaterialCombineMode["MULTIPLY"] = 4] = "MULTIPLY";
})(PhysicsMaterialCombineMode || (PhysicsMaterialCombineMode = {}));
//# sourceMappingURL=physicsMaterial.js.map

/***/ }),

/***/ 825:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cL: () => (/* binding */ PhysicsShapeBox)
/* harmony export */ });
/* unused harmony exports PhysicsShape, PhysicsShapeSphere, PhysicsShapeCapsule, PhysicsShapeCylinder, PhysicsShapeConvexHull, PhysicsShapeMesh, PhysicsShapeContainer, PhysicsShapeHeightField, PhysicsShapeGroundMesh */
/* harmony import */ var _Maths_math_vector_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(79923);

/**
 * PhysicsShape class.
 * This class is useful for creating a physics shape that can be used in a physics engine.
 * A Physic Shape determine how collision are computed. It must be attached to a body.
 */
class PhysicsShape {
    /**
     * Constructs a new physics shape.
     * @param options The options for the physics shape. These are:
     *  * type: The type of the shape. This can be one of the following: SPHERE, BOX, CAPSULE, CYLINDER, CONVEX_HULL, MESH, HEIGHTFIELD, CONTAINER
     *  * parameters: The parameters of the shape.
     *  * pluginData: The plugin data of the shape. This is used if you already have a reference to the object on the plugin side.
     * You need to specify either type or pluginData.
     * @param scene The scene the shape belongs to.
     *
     * This code is useful for creating a new physics shape with the given type, options, and scene.
     * It also checks that the physics engine and plugin version are correct.
     * If not, it throws an error. This ensures that the shape is created with the correct parameters and is compatible with the physics engine.
     */
    constructor(options, scene) {
        /**
         * V2 Physics plugin private data for single shape
         */
        this._pluginData = undefined;
        this._isTrigger = false;
        this._isDisposed = false;
        if (!scene) {
            return;
        }
        const physicsEngine = scene.getPhysicsEngine();
        if (!physicsEngine) {
            throw new Error("No Physics Engine available.");
        }
        if (physicsEngine.getPluginVersion() != 2) {
            throw new Error("Plugin version is incorrect. Expected version 2.");
        }
        const physicsPlugin = physicsEngine.getPhysicsPlugin();
        if (!physicsPlugin) {
            throw new Error("No Physics Plugin available.");
        }
        this._physicsPlugin = physicsPlugin;
        if (options.pluginData !== undefined && options.pluginData !== null) {
            this._pluginData = options.pluginData;
            this._type = this._physicsPlugin.getShapeType(this);
        }
        else if (options.type !== undefined && options.type !== null) {
            this._type = options.type;
            const parameters = options.parameters ?? {};
            this._physicsPlugin.initShape(this, options.type, parameters);
        }
    }
    /**
     * Returns the string "PhysicsShape".
     * @returns "PhysicsShape"
     */
    getClassName() {
        return "PhysicsShape";
    }
    /**
     * Returns the type of the physics shape.
     * @returns The type of the physics shape.
     */
    get type() {
        return this._type;
    }
    /**
     * Set the membership mask of a shape. This is a bitfield of arbitrary
     * "categories" to which the shape is a member. This is used in combination
     * with the collide mask to determine if this shape should collide with
     * another.
     *
     * @param membershipMask Bitfield of categories of this shape.
     */
    set filterMembershipMask(membershipMask) {
        this._physicsPlugin.setShapeFilterMembershipMask(this, membershipMask);
    }
    /**
     * Get the membership mask of a shape.
     * @returns Bitmask of categories which this shape is a member of.
     */
    get filterMembershipMask() {
        return this._physicsPlugin.getShapeFilterMembershipMask(this);
    }
    /**
     * Sets the collide mask of a shape. This is a bitfield of arbitrary
     * "categories" to which this shape collides with. Given two shapes,
     * the engine will check if the collide mask and membership overlap:
     * shapeA.filterMembershipMask & shapeB.filterCollideMask
     *
     * If this value is zero (i.e. shapeB only collides with categories
     * which shapeA is _not_ a member of) then the shapes will not collide.
     *
     * Note, the engine will also perform the same test with shapeA and
     * shapeB swapped; the shapes will not collide if either shape has
     * a collideMask which prevents collision with the other shape.
     *
     * @param collideMask Bitmask of categories this shape should collide with
     */
    set filterCollideMask(collideMask) {
        this._physicsPlugin.setShapeFilterCollideMask(this, collideMask);
    }
    /**
     *
     * @returns Bitmask of categories that this shape should collide with
     */
    get filterCollideMask() {
        return this._physicsPlugin.getShapeFilterCollideMask(this);
    }
    /**
     *
     * @param material
     */
    set material(material) {
        this._physicsPlugin.setMaterial(this, material);
        this._material = material;
    }
    /**
     * Returns the material of the physics shape.
     * @returns The material of the physics shape.
     */
    get material() {
        if (!this._material) {
            this._material = this._physicsPlugin.getMaterial(this);
        }
        return this._material;
    }
    /**
     * Sets the density of the physics shape.
     * @param density The density of the physics shape.
     */
    set density(density) {
        this._physicsPlugin.setDensity(this, density);
    }
    /**
     * Returns the density of the physics shape.
     * @returns The density of the physics shape.
     */
    get density() {
        return this._physicsPlugin.getDensity(this);
    }
    /**
     * Utility to add a child shape to this container,
     * automatically computing the relative transform between
     * the container shape and the child instance.
     *
     * @param parentTransform The transform node associated with this shape
     * @param newChild The new PhysicsShape to add
     * @param childTransform The transform node associated with the child shape
     */
    addChildFromParent(parentTransform, newChild, childTransform) {
        const childToWorld = childTransform.computeWorldMatrix(true);
        const parentToWorld = parentTransform.computeWorldMatrix(true);
        const childToParent = _Maths_math_vector_js__WEBPACK_IMPORTED_MODULE_0__/* .TmpVectors */ .AA.Matrix[0];
        childToWorld.multiplyToRef(_Maths_math_vector_js__WEBPACK_IMPORTED_MODULE_0__/* .Matrix */ .uq.Invert(parentToWorld), childToParent);
        const translation = _Maths_math_vector_js__WEBPACK_IMPORTED_MODULE_0__/* .TmpVectors */ .AA.Vector3[0];
        const rotation = _Maths_math_vector_js__WEBPACK_IMPORTED_MODULE_0__/* .TmpVectors */ .AA.Quaternion[0];
        const scale = _Maths_math_vector_js__WEBPACK_IMPORTED_MODULE_0__/* .TmpVectors */ .AA.Vector3[1];
        childToParent.decompose(scale, rotation, translation);
        this._physicsPlugin.addChild(this, newChild, translation, rotation, scale);
    }
    /**
     * Adds a child shape to a container with an optional transform
     * @param newChild The new PhysicsShape to add
     * @param translation Optional position of the child shape relative to this shape
     * @param rotation Optional rotation of the child shape relative to this shape
     * @param scale Optional scale of the child shape relative to this shape
     */
    addChild(newChild, translation, rotation, scale) {
        this._physicsPlugin.addChild(this, newChild, translation, rotation, scale);
    }
    /**
     * Removes a child shape from this shape.
     * @param childIndex The index of the child shape to remove
     */
    removeChild(childIndex) {
        this._physicsPlugin.removeChild(this, childIndex);
    }
    /**
     * Returns the number of children of a physics shape.
     * @returns The number of children of a physics shape.
     */
    getNumChildren() {
        return this._physicsPlugin.getNumChildren(this);
    }
    /**
     * Returns the bounding box of the physics shape.
     * @returns The bounding box of the physics shape.
     */
    getBoundingBox() {
        return this._physicsPlugin.getBoundingBox(this);
    }
    set isTrigger(isTrigger) {
        if (this._isTrigger === isTrigger) {
            return;
        }
        this._isTrigger = isTrigger;
        this._physicsPlugin.setTrigger(this, isTrigger);
    }
    get isTrigger() {
        return this._isTrigger;
    }
    /**
     * Dispose the shape and release its associated resources.
     */
    dispose() {
        if (this._isDisposed) {
            return;
        }
        this._physicsPlugin.disposeShape(this);
        this._isDisposed = true;
    }
}
/**
 * Helper object to create a sphere shape
 */
class PhysicsShapeSphere extends PhysicsShape {
    /**
     * Constructor for the Sphere Shape
     * @param center local center of the sphere
     * @param radius radius
     * @param scene scene to attach to
     */
    constructor(center, radius, scene) {
        super({ type: 0 /* PhysicsShapeType.SPHERE */, parameters: { center: center, radius: radius } }, scene);
    }
    /**
     * Derive an approximate sphere from the mesh.
     * @param mesh node from which to derive the sphere shape
     * @returns PhysicsShapeSphere
     */
    static FromMesh(mesh) {
        const bounds = mesh.getBoundingInfo();
        const centerLocal = bounds.boundingSphere.center;
        const he = bounds.boundingBox.extendSize;
        const radius = Math.max(he.x, he.y, he.z);
        return new PhysicsShapeSphere(centerLocal, radius, mesh.getScene());
    }
}
/**
 * Helper object to create a capsule shape
 */
class PhysicsShapeCapsule extends PhysicsShape {
    /**
     *
     * @param pointA Starting point that defines the capsule segment
     * @param pointB ending point of that same segment
     * @param radius radius
     * @param scene scene to attach to
     */
    constructor(pointA, pointB, radius, scene) {
        super({ type: 1 /* PhysicsShapeType.CAPSULE */, parameters: { pointA: pointA, pointB: pointB, radius: radius } }, scene);
    }
    /**
     * Derive an approximate capsule from the mesh. Note, this is
     * not the optimal bounding capsule.
     * @param mesh Node from which to derive a cylinder shape
     * @returns Physics Shape Capsule
     */
    static FromMesh(mesh) {
        const boundsLocal = mesh.getBoundingInfo();
        const radius = boundsLocal.boundingBox.extendSize.x;
        const pointFromCenter = new _Maths_math_vector_js__WEBPACK_IMPORTED_MODULE_0__/* .Vector3 */ .Pq(0, boundsLocal.boundingBox.extendSize.y - radius, 0);
        const pointA = boundsLocal.boundingBox.center.add(pointFromCenter);
        const pointB = boundsLocal.boundingBox.center.subtract(pointFromCenter);
        return new PhysicsShapeCapsule(pointA, pointB, radius, mesh.getScene());
    }
}
/**
 * Helper object to create a cylinder shape
 */
class PhysicsShapeCylinder extends PhysicsShape {
    /**
     *
     * @param pointA Starting point that defines the cylinder segment
     * @param pointB ending point of that same segment
     * @param radius radius
     * @param scene scene to attach to
     */
    constructor(pointA, pointB, radius, scene) {
        super({ type: 2 /* PhysicsShapeType.CYLINDER */, parameters: { pointA: pointA, pointB: pointB, radius: radius } }, scene);
    }
    /**
     * Derive an approximate cylinder from the mesh. Note, this is
     * not the optimal bounding cylinder.
     * @param mesh Node from which to derive a cylinder shape
     * @returns Physics Shape Cylinder
     */
    static FromMesh(mesh) {
        const boundsLocal = mesh.getBoundingInfo();
        const radius = boundsLocal.boundingBox.extendSize.x;
        const pointFromCenter = new _Maths_math_vector_js__WEBPACK_IMPORTED_MODULE_0__/* .Vector3 */ .Pq(0, boundsLocal.boundingBox.extendSize.y, 0);
        const pointA = boundsLocal.boundingBox.center.add(pointFromCenter);
        const pointB = boundsLocal.boundingBox.center.subtract(pointFromCenter);
        return new PhysicsShapeCylinder(pointA, pointB, radius, mesh.getScene());
    }
}
/**
 * Helper object to create a box shape
 */
class PhysicsShapeBox extends PhysicsShape {
    /**
     *
     * @param center local center of the box
     * @param rotation local orientation
     * @param extents size of the box in each direction
     * @param scene scene to attach to
     */
    constructor(center, rotation, extents, scene) {
        super({ type: 3 /* PhysicsShapeType.BOX */, parameters: { center: center, rotation: rotation, extents: extents } }, scene);
    }
    /**
     *
     * @param mesh
     * @returns PhysicsShapeBox
     */
    static FromMesh(mesh) {
        const bounds = mesh.getBoundingInfo();
        const centerLocal = bounds.boundingBox.center;
        const extents = bounds.boundingBox.extendSize.scale(2.0); //<todo.eoin extendSize seems to really be half-extents?
        return new PhysicsShapeBox(centerLocal, _Maths_math_vector_js__WEBPACK_IMPORTED_MODULE_0__/* .Quaternion */ .PT.Identity(), extents, mesh.getScene());
    }
}
/**
 * Helper object to create a convex hull shape
 */
class PhysicsShapeConvexHull extends PhysicsShape {
    /**
     *
     * @param mesh the mesh to be used as topology infos for the convex hull
     * @param scene scene to attach to
     */
    constructor(mesh, scene) {
        super({ type: 4 /* PhysicsShapeType.CONVEX_HULL */, parameters: { mesh: mesh } }, scene);
    }
}
/**
 * Helper object to create a mesh shape
 */
class PhysicsShapeMesh extends PhysicsShape {
    /**
     *
     * @param mesh the mesh topology that will be used to create the shape
     * @param scene scene to attach to
     */
    constructor(mesh, scene) {
        super({ type: 6 /* PhysicsShapeType.MESH */, parameters: { mesh: mesh } }, scene);
    }
}
/**
 * A shape container holds a variable number of shapes. Use AddChild to append to newly created parent container.
 */
class PhysicsShapeContainer extends PhysicsShape {
    /**
     * Constructor of the Shape container
     * @param scene scene to attach to
     */
    constructor(scene) {
        super({ type: 5 /* PhysicsShapeType.CONTAINER */, parameters: {} }, scene);
    }
}
/**
 * Helper object to create a heightfield Shape
 */
class PhysicsShapeHeightField extends PhysicsShape {
    /**
     * Constructor of the Shape heightfield
     * @param heightFieldSizeX The size of the heightfield in the X axis
     * @param heightFieldSizeZ The size of the heightfield in the Z axis
     * @param numHeightFieldSamplesX The number of samples along the X axis
     * @param numHeightFieldSamplesZ The number of samples along the Z axis
     * @param heightFieldData The data for the heightfield
     * @param scene scene to attach to
     */
    constructor(heightFieldSizeX, heightFieldSizeZ, numHeightFieldSamplesX, numHeightFieldSamplesZ, heightFieldData, scene) {
        super({
            type: 7 /* PhysicsShapeType.HEIGHTFIELD */,
            parameters: {
                heightFieldSizeX: heightFieldSizeX,
                heightFieldSizeZ: heightFieldSizeZ,
                numHeightFieldSamplesX: numHeightFieldSamplesX,
                numHeightFieldSamplesZ: numHeightFieldSamplesZ,
                heightFieldData: heightFieldData,
            },
        }, scene);
    }
}
/**
 * Helper object to create a ground mesh Shape
 */
class PhysicsShapeGroundMesh extends PhysicsShape {
    /**
     * Constructor of the Shape heightfield
     * @param groundMesh ground mesh used for display
     * @param scene scene to attach to
     */
    constructor(groundMesh, scene) {
        super({ type: 7 /* PhysicsShapeType.HEIGHTFIELD */, parameters: { groundMesh: groundMesh } }, scene);
    }
}
//# sourceMappingURL=physicsShape.js.map

/***/ })

}]);