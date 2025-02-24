import type { BoundingBox } from "@babylonjs/core/Culling/boundingBox";
import type { Quaternion, Vector3 } from "@babylonjs/core/Maths/math.vector";
import { Matrix } from "@babylonjs/core/Maths/math.vector";
import type { Mesh } from "@babylonjs/core/Meshes/mesh";
import type { TransformNode } from "@babylonjs/core/Meshes/transformNode";
import { Logger } from "@babylonjs/core/Misc/logger";
import { Observable } from "@babylonjs/core/Misc/observable";
import type { IRaycastQuery, PhysicsRaycastResult } from "@babylonjs/core/Physics/physicsRaycastResult";
import type { PhysicsConstraintAxisLimitMode, PhysicsConstraintMotorType, PhysicsShapeParameters} from "@babylonjs/core/Physics/v2/IPhysicsEnginePlugin";
import { type ConstrainedBodyPair, type IBasePhysicsCollisionEvent, type IPhysicsCollisionEvent, type IPhysicsEnginePluginV2, type PhysicsConstraintAxis, type PhysicsMassProperties, PhysicsMotionType, PhysicsPrestepType, PhysicsShapeType } from "@babylonjs/core/Physics/v2/IPhysicsEnginePlugin";
import type { PhysicsBody } from "@babylonjs/core/Physics/v2/physicsBody";
import type { PhysicsConstraint } from "@babylonjs/core/Physics/v2/physicsConstraint";
import { type PhysicsMaterial, PhysicsMaterialCombineMode } from "@babylonjs/core/Physics/v2/physicsMaterial";
import type { PhysicsShape } from "@babylonjs/core/Physics/v2/physicsShape";
import type { Nullable } from "@babylonjs/core/types";

import type { BulletWasmInstance } from "../bulletWasmInstance";
import { MultiPhysicsRuntime } from "../Impl/multiPhysicsRuntime";
import { MotionType } from "../motionType";
import { RigidBodyConstructionInfo } from "../rigidBodyConstructionInfo";
import { RigidBodyConstructionInfoList } from "../rigidBodyConstructionInfoList";
import type { IPluginShape} from "./pluginShape";
import { PluginBoxShape } from "./pluginShape";

/**
 * The Bullet Physics plugin
 */
export class BulletPlugin implements IPhysicsEnginePluginV2 {
    /**
     * Created bullet physics runtime which physics bodies are added to
     */
    public world: MultiPhysicsRuntime;
    /**
     * Name of the plugin
     */
    public name: string = "BulletPlugin";

    /**
     * Observable for collision started and collision continued events
     */
    public onCollisionObservable = new Observable<IPhysicsCollisionEvent>();

    /**
     * Observable for collision ended events
     */
    public onCollisionEndedObservable = new Observable<IBasePhysicsCollisionEvent>();

    /**
     * Observable for trigger entered and trigger exited events
     */
    public onTriggerCollisionObservable = new Observable<IBasePhysicsCollisionEvent>();

    public constructor(wasmInstance: BulletWasmInstance) {
        this.world = new MultiPhysicsRuntime(wasmInstance);
    }

    /**
     * Sets the gravity of the physics world.
     *
     * @param gravity - The gravity vector to set.
     *
     */
    public setGravity(gravity: Vector3): void {
        this.world.setGravity(gravity);
    }

    /**
     * Sets the fixed time step for the physics engine.
     *
     * @param timeStep - The fixed time step to use for the physics engine.
     *
     */
    public setTimeStep(timeStep: number): void {
        this.world.timeStep = timeStep;
    }

    /**
     * Gets the fixed time step used by the physics engine.
     *
     * @returns The fixed time step used by the physics engine.
     *
     */
    public getTimeStep(): number {
        return this.world.timeStep;
    }

    /**
     * Executes a single step of the physics engine.
     *
     * @param delta The time delta in seconds since the last step.
     * @param physicsBodies An array of physics bodies to be simulated.
     *
     * This method is useful for simulating the physics engine. It sets the physics body transformation,
     * steps the world, syncs the physics body, and notifies collisions. This allows for the physics engine
     * to accurately simulate the physics bodies in the world.
     */
    public executeStep(delta: number, bodies: PhysicsBody[]): void {
        for (let i = 0; i < bodies.length; ++i) {
            const physicsBody = bodies[i];
            if (physicsBody.disablePreStep) {
                continue;
            }
            this.setPhysicsBodyTransformation(physicsBody, physicsBody.transformNode);
        }

        this.world.afterAnimations(delta);

        for (let i = 0; i < bodies.length; ++i) {
            const physicsBody = bodies[i];
            if (!physicsBody.disableSync) {
                this.sync(physicsBody);
            }
        }

        // notify collision events
        // notify trigger events
    }

    /**
     * Sets the transformation of the given physics body to the given transform node.
     * @param body The physics body to set the transformation for.
     * @param node The transform node to set the transformation from.
     * Sets the transformation of the given physics body to the given transform node.
     *
     * This function is useful for setting the transformation of a physics body to a
     * transform node, which is necessary for the physics engine to accurately simulate
     * the motion of the body. It also takes into account instances of the transform
     * node, which is necessary for accurate simulation of multiple bodies with the
     * same transformation.
     */
    public setPhysicsBodyTransformation(body: PhysicsBody, node: TransformNode): void {
        if (body.getPrestepType() == PhysicsPrestepType.TELEPORT) {
            const transformNode = body.transformNode;
            if (body.numInstances > 0) {
                // instances
                const m = transformNode as Mesh;
                const matrixData = m._thinInstanceDataStorage.matrixData;
                if (!matrixData) {
                    return; // TODO: error handling
                }
                // const instancesCount = body.numInstances;
                // this._createOrUpdateBodyInstances(body, body.getMotionType(), matrixData, 0, instancesCount, true);
            } else {
                // regular
                // this._hknp.HP_Body_SetQTransform(body._pluginData.hpBodyId, this._getTransformInfos(node));
            }
        } else if (body.getPrestepType() == PhysicsPrestepType.ACTION) {
            this.setTargetTransform(body, node.absolutePosition, node.absoluteRotationQuaternion);
        } else if (body.getPrestepType() == PhysicsPrestepType.DISABLED) {
            Logger.Warn("Prestep type is set to DISABLED. Unable to set physics body transformation.");
        } else {
            Logger.Warn("Invalid prestep type set to physics body.");
        }
    }

    /**
     * Returns the version of the physics engine plugin.
     *
     * @returns The version of the physics engine plugin.
     *
     * This method is useful for determining the version of the physics engine plugin that is currently running.
     */
    public getPluginVersion(): number {
        return 2;
    }

    /**
     * Set the maximum allowed linear and angular velocities
     * @param maxLinearVelocity maximum allowed linear velocity
     * @param maxAngularVelocity maximum allowed angular velocity
     */
    public setVelocityLimits(maxLinearVelocity: number, maxAngularVelocity: number): void {
        maxLinearVelocity;
        maxAngularVelocity;
        // there is no support for setting velocity limits in bullet
        throw new Error("Method not implemented.");
    }

    /**
     * @returns maximum allowed linear velocity
     */
    public getMaxLinearVelocity(): number {
        // there is no support for setting velocity limits in bullet
        throw new Error("Method not implemented.");
    }

    /**
     * @returns maximum allowed angular velocity
     */
    public getMaxAngularVelocity(): number {
        // there is no support for setting velocity limits in bullet
        throw new Error("Method not implemented.");
    }

    private static readonly _TempMatrix: Matrix = new Matrix();

    /**
     * Initializes a physics body with the given position and orientation.
     *
     * @param body - The physics body to initialize.
     * @param motionType - The motion type of the body.
     * @param position - The position of the body.
     * @param orientation - The orientation of the body.
     * This code is useful for initializing a physics body with the given position and orientation.
     * It creates a plugin data for the body and adds it to the world. It then converts the position
     * and orientation to a transform and sets the body's transform to the given values.
     */
    public initBody(body: PhysicsBody, motionType: PhysicsMotionType, position: Vector3, orientation: Quaternion): void {
        const constructionInfo = body._pluginData = new RigidBodyConstructionInfo(this.world.wasmInstance);

        let bulletMotionType: MotionType;
        switch (motionType) {
        case PhysicsMotionType.DYNAMIC:
            bulletMotionType = MotionType.Dynamic;
            break;
        case PhysicsMotionType.STATIC:
            bulletMotionType = MotionType.Static;
            break;
        case PhysicsMotionType.ANIMATED:
            bulletMotionType = MotionType.Kinematic;
            break;
        default:
            throw new Error("Invalid motion type");
        }
        constructionInfo.motionType = bulletMotionType;

        const transform = Matrix.FromQuaternionToRef(orientation, BulletPlugin._TempMatrix);
        transform.setTranslation(position);
        constructionInfo.setInitialTransform(transform);

        // this._bodies.set(body._pluginData.hpBodyId[0], { body: body, index: 0 });
    }

    /**
     * Initializes the body instances for a given physics body and mesh.
     *
     * @param body - The physics body to initialize.
     * @param motionType - How the body will be handled by the engine
     * @param mesh - The mesh to initialize.
     *
     * This code is useful for creating a physics body from a mesh. It creates a
     * body instance for each instance of the mesh and adds it to the world. It also
     * sets the position of the body instance to the position of the mesh instance.
     * This allows for the physics engine to accurately simulate the mesh in the
     * world.
     */
    public initBodyInstances(body: PhysicsBody, motionType: PhysicsMotionType, mesh: Mesh): void {
        body;
        motionType;
        mesh;
        throw new Error("Method not implemented.");
    }

    /**
     * Update the internal body instances for a given physics body to match the instances in a mesh.
     * @param body the body that will be updated
     * @param mesh the mesh with reference instances
     */
    public updateBodyInstances(body: PhysicsBody, mesh: Mesh): void {
        body;
        mesh;
        throw new Error("Method not implemented.");
    }

    /**
     * Removes a body from the world. To dispose of a body, it is necessary to remove it from the world first.
     *
     * @param body - The body to remove.
     */
    public removeBody(body: PhysicsBody): void {
        body;
        throw new Error("Method not implemented.");
    }

    /**
     * Synchronizes the transform of a physics body with its transform node.
     * @param body - The physics body to synchronize.
     *
     * This function is useful for keeping the physics body's transform in sync with its transform node.
     * This is important for ensuring that the physics body is accurately represented in the physics engine.
     */
    public sync(body: PhysicsBody): void {
        body;
        throw new Error("Method not implemented.");
    }

    /**
     * Synchronizes the transform of a physics body with the transform of its
     * corresponding transform node.
     *
     * @param body - The physics body to synchronize.
     * @param transformNode - The destination Transform Node.
     *
     * This code is useful for synchronizing the position and orientation of a
     * physics body with the position and orientation of its corresponding
     * transform node. This is important for ensuring that the physics body and
     * the transform node are in the same position and orientation in the scene.
     * This is necessary for the physics engine to accurately simulate the
     * physical behavior of the body.
     */
    public syncTransform(body: PhysicsBody, transformNode: TransformNode): void {
        body;
        transformNode;
        throw new Error("Method not implemented.");
    }

    /**
     * Sets the shape of a physics body.
     * @param body - The physics body to set the shape for.
     * @param shape - The physics shape to set.
     *
     * This function is used to set the shape of a physics body. It is useful for
     * creating a physics body with a specific shape, such as a box or a sphere,
     * which can then be used to simulate physical interactions in a physics engine.
     * This function is especially useful for meshes with multiple instances, as it
     * will set the shape for each instance of the mesh.
     */
    public setShape(body: PhysicsBody, shape: Nullable<PhysicsShape>): void {
        body;
        shape;
        throw new Error("Method not implemented.");
    }

    /**
     * Gets the shape of a physics body. This will create a new shape object
     *
     * @param body - The physics body.
     * @returns The shape of the physics body.
     *
     */
    public getShape(body: PhysicsBody): Nullable<PhysicsShape> {
        body;
        throw new Error("Method not implemented.");
    }

    /**
     * Gets the type of a physics shape.
     * @param shape - The physics shape to get the type for.
     * @returns The type of the physics shape.
     *
     */
    public getShapeType(shape: PhysicsShape): PhysicsShapeType {
        shape;
        throw new Error("Method not implemented.");
    }

    /**
     * Sets the event mask of a physics body.
     * @param body - The physics body to set the event mask for.
     * @param eventMask - The event mask to set.
     * @param instanceIndex - The index of the instance to set the event mask for
     *
     * This function is useful for setting the event mask of a physics body, which is used to determine which events the body will respond to. This is important for ensuring that the physics engine is able to accurately simulate the behavior of the body in the game world.
     */
    public setEventMask(body: PhysicsBody, eventMask: number, instanceIndex?: number): void {
        body;
        eventMask;
        instanceIndex;
        throw new Error("Method not implemented.");
    }

    /**
     * Retrieves the event mask of a physics body.
     *
     * @param body - The physics body to retrieve the event mask from.
     * @param instanceIndex - The index of the instance to retrieve the event mask from.
     * @returns The event mask of the physics body.
     *
     */
    public getEventMask(body: PhysicsBody, instanceIndex?: number): number {
        body;
        instanceIndex;
        throw new Error("Method not implemented.");
    }

    /**
     * sets the motion type of a physics body.
     * @param body - The physics body to set the motion type for.
     * @param motionType - The motion type to set.
     * @param instanceIndex - The index of the instance to set the motion type for. If undefined, the motion type of all the bodies will be set.
     */
    public setMotionType(body: PhysicsBody, motionType: PhysicsMotionType, instanceIndex?: number): void {
        body;
        motionType;
        instanceIndex;
        throw new Error("Method not implemented.");
    }

    public getMotionType(body: PhysicsBody, instanceIndex?: number): PhysicsMotionType {
        body;
        instanceIndex;
        throw new Error("Method not implemented.");
    }

    public computeMassProperties(body: PhysicsBody, instanceIndex?: number): PhysicsMassProperties {
        body;
        instanceIndex;
        throw new Error("Method not implemented.");
    }

    /**
     * Sets the mass properties of a physics body.
     *
     * @param body - The physics body to set the mass properties of.
     * @param massProps - The mass properties to set.
     * @param instanceIndex - The index of the instance to set the mass properties of. If undefined, the mass properties of all the bodies will be set.
     * This function is useful for setting the mass properties of a physics body,
     * such as its mass, inertia, and center of mass. This is important for
     * accurately simulating the physics of the body in the physics engine.
     *
     */
    public setMassProperties(body: PhysicsBody, massProps: PhysicsMassProperties, instanceIndex?: number): void {
        const info = body._pluginData;

        if (massProps.inertiaOrientation !== undefined) Logger.Warn("Inertia orientation is not supported in bullet.");
        if (massProps.centerOfMass !== undefined) Logger.Warn("Center of mass is not supported in bullet.");

        if (info instanceof RigidBodyConstructionInfo) {
            if (massProps.mass !== undefined) info.mass = massProps.mass;
            if (massProps.inertia !== undefined) info.localInertia = massProps.inertia;
        } else if (info instanceof RigidBodyConstructionInfoList) {
            const start = instanceIndex ?? 0;
            const end = instanceIndex !== undefined ? instanceIndex + 1 : info.count;
            for (let i = start; i < end; ++i) {
                if (massProps.mass !== undefined) info.setMass(i, massProps.mass);
                if (massProps.inertia !== undefined) info.setLocalInertia(i, massProps.inertia);
            }
        } else { // if (info instanceof RigidBody || info instanceof RigidBodyBundle) {
            throw new Error("mass cannot be set after body is initialized");
        }
    }

    public getMassProperties(body: PhysicsBody, instanceIndex?: number): PhysicsMassProperties {
        body;
        instanceIndex;
        throw new Error("Method not implemented.");
    }

    public setLinearDamping(body: PhysicsBody, damping: number, instanceIndex?: number): void {
        body;
        damping;
        instanceIndex;
        throw new Error("Method not implemented.");
    }

    public getLinearDamping(body: PhysicsBody, instanceIndex?: number): number {
        body;
        instanceIndex;
        throw new Error("Method not implemented.");
    }

    public setAngularDamping(body: PhysicsBody, damping: number, instanceIndex?: number): void {
        body;
        damping;
        instanceIndex;
        throw new Error("Method not implemented.");
    }

    public getAngularDamping(body: PhysicsBody, instanceIndex?: number): number {
        body;
        instanceIndex;
        throw new Error("Method not implemented.");
    }

    public setLinearVelocity(body: PhysicsBody, linVel: Vector3, instanceIndex?: number): void {
        body;
        linVel;
        instanceIndex;
        throw new Error("Method not implemented.");
    }

    public getLinearVelocityToRef(body: PhysicsBody, linVel: Vector3, instanceIndex?: number): void {
        body;
        linVel;
        instanceIndex;
        throw new Error("Method not implemented.");
    }

    public applyImpulse(body: PhysicsBody, impulse: Vector3, location: Vector3, instanceIndex?: number): void {
        body;
        impulse;
        location;
        instanceIndex;
        throw new Error("Method not implemented.");
    }

    public applyAngularImpulse(body: PhysicsBody, angularImpulse: Vector3, instanceIndex?: number): void {
        body;
        angularImpulse;
        instanceIndex;
        throw new Error("Method not implemented.");
    }

    public applyForce(body: PhysicsBody, force: Vector3, location: Vector3, instanceIndex?: number): void {
        body;
        force;
        location;
        instanceIndex;
        throw new Error("Method not implemented.");
    }

    public setAngularVelocity(body: PhysicsBody, angVel: Vector3, instanceIndex?: number): void {
        body;
        angVel;
        instanceIndex;
        throw new Error("Method not implemented.");
    }

    public getAngularVelocityToRef(body: PhysicsBody, angVel: Vector3, instanceIndex?: number): void {
        body;
        angVel;
        instanceIndex;
        throw new Error("Method not implemented.");
    }

    public getBodyGeometry(body: PhysicsBody): {} {
        body;
        throw new Error("Method not implemented.");
    }

    public disposeBody(body: PhysicsBody): void {
        body;
        throw new Error("Method not implemented.");
    }

    public setCollisionCallbackEnabled(body: PhysicsBody, enabled: boolean, instanceIndex?: number): void {
        body;
        enabled;
        instanceIndex;
        throw new Error("Method not implemented.");
    }

    public setCollisionEndedCallbackEnabled(body: PhysicsBody, enabled: boolean, instanceIndex?: number): void {
        body;
        enabled;
        instanceIndex;
        throw new Error("Method not implemented.");
    }

    public addConstraint(body: PhysicsBody, childBody: PhysicsBody, constraint: PhysicsConstraint, instanceIndex?: number, childInstanceIndex?: number): void {
        body;
        childBody;
        constraint;
        instanceIndex;
        childInstanceIndex;
        throw new Error("Method not implemented.");
    }

    public getCollisionObservable(body: PhysicsBody, instanceIndex?: number): Observable<IPhysicsCollisionEvent> {
        body;
        instanceIndex;
        throw new Error("Method not implemented.");
    }

    public getCollisionEndedObservable(body: PhysicsBody, instanceIndex?: number): Observable<IBasePhysicsCollisionEvent> {
        body;
        instanceIndex;
        throw new Error("Method not implemented.");
    }

    public setGravityFactor(body: PhysicsBody, factor: number, instanceIndex?: number): void {
        body;
        factor;
        instanceIndex;
        throw new Error("Method not implemented.");
    }

    public getGravityFactor(body: PhysicsBody, instanceIndex?: number): number {
        body;
        instanceIndex;
        throw new Error("Method not implemented.");
    }

    public setTargetTransform(body: PhysicsBody, position: Vector3, rotation: Quaternion, instanceIndex?: number): void {
        body;
        position;
        rotation;
        instanceIndex;
        throw new Error("Method not implemented.");
    }

    /**
     * Initializes a physics shape with the given type and parameters.
     * @param shape - The physics shape to initialize.
     * @param type - The type of shape to initialize.
     * @param options - The parameters for the shape.
     *
     * This code is useful for initializing a physics shape with the given type and parameters.
     * It allows for the creation of a sphere, box, capsule, container, cylinder, mesh, and heightfield.
     * Depending on the type of shape, different parameters are required.
     * For example, a sphere requires a radius, while a box requires extents and a rotation.
     */
    public initShape(shape: PhysicsShape, type: PhysicsShapeType, options: PhysicsShapeParameters): void {
        switch (type) {
        case PhysicsShapeType.SPHERE:
            // use btSphereShape
            throw new Error("Sphere shape not supported.");
            break;
        case PhysicsShapeType.BOX:
            shape._pluginData = new PluginBoxShape(this.world, options.center, options.rotation, options.extents);
            break;
        case PhysicsShapeType.CAPSULE:
            // use btCapsuleShape
            throw new Error("Capsule shape not supported.");
            break;
        case PhysicsShapeType.CONTAINER:
            // use btCompoundShape
            throw new Error("Container shape not supported.");
            break;
        case PhysicsShapeType.CYLINDER:
            // use btCylinderShape
            throw new Error("Cylinder shape not supported.");
            break;
        case PhysicsShapeType.CONVEX_HULL:
        case PhysicsShapeType.MESH:
            // use btConvexHullShape
            // use btBvhTriangleMeshShape
            throw new Error("Convex hull and mesh shapes not supported.");
            break;
        case PhysicsShapeType.HEIGHTFIELD:
            throw new Error("Heightfield shape not supported.");
            break;
        default:
            throw new Error("Unsupported Shape Type.");
        }
    }

    /**
     * Sets the shape filter membership mask of a body
     * @param shape - The physics body to set the shape filter membership mask for.
     * @param membershipMask - The shape filter membership mask to set.
     */
    public setShapeFilterMembershipMask(shape: PhysicsShape, membershipMask: number): void {
        (shape._pluginData as IPluginShape).collisionGroup = membershipMask;
    }

    /**
     * Gets the shape filter membership mask of a body
     * @param shape - The physics body to get the shape filter membership mask from.
     * @returns The shape filter membership mask of the given body.
     */
    public getShapeFilterMembershipMask(shape: PhysicsShape): number {
        return (shape._pluginData as IPluginShape).collisionGroup;
    }

    /**
     * Sets the shape filter collide mask of a body
     * @param shape - The physics body to set the shape filter collide mask for.
     * @param collideMask - The shape filter collide mask to set.
     */
    public setShapeFilterCollideMask(shape: PhysicsShape, collideMask: number): void {
        (shape._pluginData as IPluginShape).collisionMask = collideMask;
    }

    /**
     * Gets the shape filter collide mask of a body
     * @param shape - The physics body to get the shape filter collide mask from.
     * @returns The shape filter collide mask of the given body.
     */
    public getShapeFilterCollideMask(shape: PhysicsShape): number {
        return (shape._pluginData as IPluginShape).collisionMask;
    }

    /**
     * Sets the material of a physics shape.
     * @param shape - The physics shape to set the material of.
     * @param material - The material to set.
     *
     */
    public setMaterial(shape: PhysicsShape, material: PhysicsMaterial): void {
        const dynamicFriction = material.friction ?? 0.5;
        if (material.staticFriction) {
            Logger.Warn("Static friction is not supported in bullet.");
        }
        const restitution = material.restitution ?? 0.0;
        if (material.frictionCombine && material.frictionCombine !== PhysicsMaterialCombineMode.MULTIPLY) {
            Logger.Warn("Friction combine is fixed to MULTIPLY in bullet.");
        }
        if (material.restitutionCombine && material.restitutionCombine !== PhysicsMaterialCombineMode.MULTIPLY) {
            Logger.Warn("Restitution combine is fixed to MULTIPLY in bullet.");
        }

        (shape._pluginData as IPluginShape).setMaterial(dynamicFriction, restitution);
    }

    public getMaterial(shape: PhysicsShape): PhysicsMaterial {
        shape;
        throw new Error("Method not implemented.");
    }

    public setDensity(shape: PhysicsShape, density: number): void {
        shape;
        density;
        throw new Error("Method not implemented.");
    }

    public getDensity(shape: PhysicsShape): number {
        shape;
        throw new Error("Method not implemented.");
    }

    public addChild(shape: PhysicsShape, newChild: PhysicsShape, translation?: Vector3, rotation?: Quaternion, scale?: Vector3): void {
        shape;
        newChild;
        translation;
        rotation;
        scale;
        throw new Error("Method not implemented.");
    }

    public removeChild(shape: PhysicsShape, childIndex: number): void {
        shape;
        childIndex;
        throw new Error("Method not implemented.");
    }

    public getNumChildren(shape: PhysicsShape): number {
        shape;
        throw new Error("Method not implemented.");
    }

    public getBoundingBox(shape: PhysicsShape): BoundingBox {
        shape;
        throw new Error("Method not implemented.");
    }

    public getBodyBoundingBox(body: PhysicsBody): BoundingBox {
        body;
        throw new Error("Method not implemented.");
    }

    public disposeShape(shape: PhysicsShape): void {
        shape;
        throw new Error("Method not implemented.");
    }

    public setTrigger(shape: PhysicsShape, isTrigger: boolean): void {
        shape;
        isTrigger;
        throw new Error("Method not implemented.");
    }
    public initConstraint(constraint: PhysicsConstraint, body: PhysicsBody, childBody: PhysicsBody): void {
        constraint;
        body;
        childBody;
        throw new Error("Method not implemented.");
    }

    public setEnabled(constraint: PhysicsConstraint, isEnabled: boolean): void {
        constraint;
        isEnabled;
        throw new Error("Method not implemented.");
    }

    public getEnabled(constraint: PhysicsConstraint): boolean {
        constraint;
        throw new Error("Method not implemented.");
    }

    public setCollisionsEnabled(constraint: PhysicsConstraint, isEnabled: boolean): void {
        constraint;
        isEnabled;
        throw new Error("Method not implemented.");
    }

    public getCollisionsEnabled(constraint: PhysicsConstraint): boolean {
        constraint;
        throw new Error("Method not implemented.");
    }

    public setAxisFriction(constraint: PhysicsConstraint, axis: PhysicsConstraintAxis, friction: number): void {
        constraint;
        axis;
        friction;
        throw new Error("Method not implemented.");
    }

    public getAxisFriction(constraint: PhysicsConstraint, axis: PhysicsConstraintAxis): Nullable<number> {
        constraint;
        axis;
        throw new Error("Method not implemented.");
    }

    public setAxisMode(constraint: PhysicsConstraint, axis: PhysicsConstraintAxis, limitMode: PhysicsConstraintAxisLimitMode): void {
        constraint;
        axis;
        limitMode;
        throw new Error("Method not implemented.");
    }

    public getAxisMode(constraint: PhysicsConstraint, axis: PhysicsConstraintAxis): Nullable<PhysicsConstraintAxisLimitMode> {
        constraint;
        axis;
        throw new Error("Method not implemented.");
    }

    public setAxisMinLimit(constraint: PhysicsConstraint, axis: PhysicsConstraintAxis, minLimit: number): void {
        constraint;
        axis;
        minLimit;
        throw new Error("Method not implemented.");
    }

    public getAxisMinLimit(constraint: PhysicsConstraint, axis: PhysicsConstraintAxis): Nullable<number> {
        constraint;
        axis;
        throw new Error("Method not implemented.");
    }

    public setAxisMaxLimit(constraint: PhysicsConstraint, axis: PhysicsConstraintAxis, limit: number): void {
        constraint;
        axis;
        limit;
        throw new Error("Method not implemented.");
    }

    public getAxisMaxLimit(constraint: PhysicsConstraint, axis: PhysicsConstraintAxis): Nullable<number> {
        constraint;
        axis;
        throw new Error("Method not implemented.");
    }

    public setAxisMotorType(constraint: PhysicsConstraint, axis: PhysicsConstraintAxis, motorType: PhysicsConstraintMotorType): void {
        constraint;
        axis;
        motorType;
        throw new Error("Method not implemented.");
    }

    public getAxisMotorType(constraint: PhysicsConstraint, axis: PhysicsConstraintAxis): Nullable<PhysicsConstraintMotorType> {
        constraint;
        axis;
        throw new Error("Method not implemented.");
    }

    public setAxisMotorTarget(constraint: PhysicsConstraint, axis: PhysicsConstraintAxis, target: number): void {
        constraint;
        axis;
        target;
        throw new Error("Method not implemented.");
    }

    public getAxisMotorTarget(constraint: PhysicsConstraint, axis: PhysicsConstraintAxis): Nullable<number> {
        constraint;
        axis;
        throw new Error("Method not implemented.");
    }

    public setAxisMotorMaxForce(constraint: PhysicsConstraint, axis: PhysicsConstraintAxis, maxForce: number): void {
        constraint;
        axis;
        maxForce;
        throw new Error("Method not implemented.");
    }

    public getAxisMotorMaxForce(constraint: PhysicsConstraint, axis: PhysicsConstraintAxis): Nullable<number> {
        constraint;
        axis;
        throw new Error("Method not implemented.");
    }

    public disposeConstraint(constraint: PhysicsConstraint): void {
        constraint;
        throw new Error("Method not implemented.");
    }

    public getBodiesUsingConstraint(constraint: PhysicsConstraint): ConstrainedBodyPair[] {
        constraint;
        throw new Error("Method not implemented.");
    }

    public raycast(from: Vector3, to: Vector3, result: PhysicsRaycastResult, query?: IRaycastQuery): void {
        from;
        to;
        result;
        query;
        throw new Error("Method not implemented.");
    }

    public dispose(): void {
        throw new Error("Method not implemented.");
    }
}
