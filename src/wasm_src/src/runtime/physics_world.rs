use glam::Vec3;
use wasm_bindgen::prelude::*;
use crate::bind;

use super::{constraint::{Constraint, ConstraintHandle}, rigidbody::{RigidBody, RigidBodyBundle, RigidBodyBundleHandle, RigidBodyHandle}};

#[cfg(debug_assertions)]
struct PhysicsWorldHandleInfo {
    bodies: Vec<RigidBodyHandle>,
    body_bundles: Vec<RigidBodyBundleHandle>,
    constraints: Vec<ConstraintHandle>,
}

pub(crate) struct PhysicsWorld {
    inner: bind::physics_world::PhysicsWorld,
    #[cfg(debug_assertions)]
    handle_info: PhysicsWorldHandleInfo,
}

impl PhysicsWorld {
    pub(crate) fn new() -> Self {
        let inner = bind::physics_world::PhysicsWorld::new();
        Self {
            inner,
            #[cfg(debug_assertions)]
            handle_info: PhysicsWorldHandleInfo {
                bodies: Vec::new(),
                body_bundles: Vec::new(),
                constraints: Vec::new(),
            },
        }
    }

    pub(crate) fn set_gravity(&mut self, force: Vec3) {
        self.inner.set_gravity(force.x, force.y, force.z);
    }

    pub(crate) fn step_simulation(&mut self, time_step: f32, max_sub_steps: i32, fixed_time_step: f32) {
        self.inner.step_simulation(time_step, max_sub_steps, fixed_time_step);
    }

    pub(crate) fn add_rigidbody(&mut self, mut rigidbody: RigidBodyHandle) {
        self.inner.add_rigidbody(rigidbody.get_mut().get_inner_mut());

        #[cfg(debug_assertions)]
        self.handle_info.bodies.push(rigidbody);
    }

    pub(crate) fn remove_rigidbody(&mut self, mut rigidbody: RigidBodyHandle) {
        self.inner.remove_rigidbody(rigidbody.get_mut().get_inner_mut());

        #[cfg(debug_assertions)]
        {
            let index = self.handle_info.bodies.iter().position(|b| *b == rigidbody).unwrap();
            self.handle_info.bodies.remove(index);
        }
    }

    pub (crate) fn add_rigidbody_bundle(&mut self, mut bundle: RigidBodyBundleHandle) {
        for i in 0..bundle.get().bodies().len() {
            self.inner.add_rigidbody(&mut bundle.get_mut().bodies_mut()[i]);
        }

        #[cfg(debug_assertions)]
        self.handle_info.body_bundles.push(bundle);
    }

    pub(crate) fn remove_rigidbody_bundle(&mut self, mut bundle: RigidBodyBundleHandle) {
        for i in 0..bundle.get().bodies().len() {
            self.inner.remove_rigidbody(&mut bundle.get_mut().bodies_mut()[i]);
        }

        #[cfg(debug_assertions)]
        {
            let index = self.handle_info.body_bundles.iter().position(|b| *b == bundle).unwrap();
            self.handle_info.body_bundles.remove(index);
        }
    }

    pub(crate) fn add_constraint(&mut self, mut constraint: ConstraintHandle, disable_collisions_between_linked_bodies: bool) {
        self.inner.add_constraint(constraint.get_mut().ptr_mut(), disable_collisions_between_linked_bodies);

        #[cfg(debug_assertions)]
        self.handle_info.constraints.push(constraint);
    }

    pub(crate) fn remove_constraint(&mut self, mut constraint: ConstraintHandle) {
        self.inner.remove_constraint(constraint.get_mut().ptr_mut());

        #[cfg(debug_assertions)]
        {
            let index = self.handle_info.constraints.iter().position(|c| *c == constraint).unwrap();
            self.handle_info.constraints.remove(index);
        }
    }
}

#[wasm_bindgen(js_name = "createPhysicsWorld")]
pub fn create_physics_world() -> *mut usize {
    let world = PhysicsWorld::new();
    let world = Box::new(world);
    Box::into_raw(world) as *mut usize
}

#[wasm_bindgen(js_name = "destroyPhysicsWorld")]
pub fn destroy_physics_world(world: *mut usize) {
    unsafe {
        let _ = Box::from_raw(world as *mut PhysicsWorld);
    }
}

#[wasm_bindgen(js_name = "physicsWorldSetGravity")]
pub fn physics_world_set_gravity(world: *mut usize, x: f32, y: f32, z: f32) {
    let world = unsafe { &mut *(world as *mut PhysicsWorld) };
    world.set_gravity(Vec3::new(x, y, z));
}

#[wasm_bindgen(js_name = "physicsWorldStepSimulation")]
pub fn physics_world_step_simulation(world: *mut usize, time_step: f32, max_sub_steps: i32, fixed_time_step: f32) {
    let world = unsafe { &mut *(world as *mut PhysicsWorld) };
    world.step_simulation(time_step, max_sub_steps, fixed_time_step);
}

#[wasm_bindgen(js_name = "physicsWorldAddRigidBody")]
pub fn physics_world_add_rigidbody(world: *mut usize, rigidbody: *mut usize) {
    let world = unsafe { &mut *(world as *mut PhysicsWorld) };
    let rigidbody = unsafe { &mut *(rigidbody as *mut RigidBody) };
    world.add_rigidbody(rigidbody.create_handle());
}

#[wasm_bindgen(js_name = "physicsWorldRemoveRigidBody")]
pub fn physics_world_remove_rigidbody(world: *mut usize, rigidbody: *mut usize) {
    let world = unsafe { &mut *(world as *mut PhysicsWorld) };
    let rigidbody = unsafe { &mut *(rigidbody as *mut RigidBody) };
    world.remove_rigidbody(rigidbody.create_handle());
}

#[wasm_bindgen(js_name = "physicsWorldAddRigidBodyBundle")]
pub fn physics_world_add_rigidbody_bundle(world: *mut usize, bundle: *mut usize) {
    let world = unsafe { &mut *(world as *mut PhysicsWorld) };
    let bundle = unsafe { &mut *(bundle as *mut RigidBodyBundle) };
    world.add_rigidbody_bundle(bundle.create_handle());
}

#[wasm_bindgen(js_name = "physicsWorldRemoveRigidBodyBundle")]
pub fn physics_world_remove_rigidbody_bundle(world: *mut usize, bundle: *mut usize) {
    let world = unsafe { &mut *(world as *mut PhysicsWorld) };
    let bundle = unsafe { &mut *(bundle as *mut RigidBodyBundle) };
    world.remove_rigidbody_bundle(bundle.create_handle());
}

#[wasm_bindgen(js_name = "physicsWorldAddConstraint")]
pub fn physics_world_add_constraint(world: *mut usize, constraint: *mut usize, disable_collisions_between_linked_bodies: bool) {
    let world = unsafe { &mut *(world as *mut PhysicsWorld) };
    let constraint = unsafe { &mut *(constraint as *mut Constraint) };
    world.add_constraint(constraint.create_handle(), disable_collisions_between_linked_bodies);
}

#[wasm_bindgen(js_name = "physicsWorldRemoveConstraint")]
pub fn physics_world_remove_constraint(world: *mut usize, constraint: *mut usize) {
    let world = unsafe { &mut *(world as *mut PhysicsWorld) };
    let constraint = unsafe { &mut *(constraint as *mut Constraint) };
    world.remove_constraint(constraint.create_handle());
}
