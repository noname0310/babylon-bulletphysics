use wasm_bindgen::prelude::*;
use crate::bind;

use super::rigidbody::{RigidBody, RigidBodyBundle};

pub(crate) struct PhysicsWorld {
    inner: bind::physics_world::PhysicsWorld,
}

impl PhysicsWorld {
    pub(crate) fn new() -> Self {
        let inner = bind::physics_world::PhysicsWorld::new();
        Self {
            inner,
        }
    }

    pub(crate) fn set_gravity(&mut self, x: f32, y: f32, z: f32) {
        self.inner.set_gravity(x, y, z);
    }

    pub(crate) fn step_simulation(&mut self, time_step: f32, max_sub_steps: i32, fixed_time_step: f32) {
        self.inner.step_simulation(time_step, max_sub_steps, fixed_time_step);
    }

    pub(crate) fn add_rigidbody(&mut self, rigidbody: &mut RigidBody) {
        self.inner.add_rigidbody(rigidbody.get_inner_mut());
    }

    pub(crate) fn remove_rigidbody(&mut self, rigidbody: &mut RigidBody) {
        self.inner.remove_rigidbody(rigidbody.get_inner_mut());
    }

    pub (crate) fn add_rigidbody_bundle(&mut self, bundle: &mut RigidBodyBundle) {
        for i in 0..bundle.bodies().len() {
            self.inner.add_rigidbody(&mut bundle.bodies_mut()[i]);
        }
    }

    pub(crate) fn remove_rigidbody_bundle(&mut self, bundle: &mut RigidBodyBundle) {
        for i in 0..bundle.bodies().len() {
            self.inner.remove_rigidbody(&mut bundle.bodies_mut()[i]);
        }
    }

    pub(crate) fn add_constraint(&mut self, constraint: &mut bind::constraint::Constraint, disable_collisions_between_linked_bodies: bool) {
        self.inner.add_constraint(constraint, disable_collisions_between_linked_bodies);
    }

    pub(crate) fn remove_constraint(&mut self, constraint: &mut bind::constraint::Constraint) {
        self.inner.remove_constraint(constraint);
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
    world.set_gravity(x, y, z);
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
    world.add_rigidbody(rigidbody);
}

#[wasm_bindgen(js_name = "physicsWorldRemoveRigidBody")]
pub fn physics_world_remove_rigidbody(world: *mut usize, rigidbody: *mut usize) {
    let world = unsafe { &mut *(world as *mut PhysicsWorld) };
    let rigidbody = unsafe { &mut *(rigidbody as *mut RigidBody) };
    world.remove_rigidbody(rigidbody);
}

#[wasm_bindgen(js_name = "physicsWorldAddRigidBodyBundle")]
pub fn physics_world_add_rigidbody_bundle(world: *mut usize, bundle: *mut usize) {
    let world = unsafe { &mut *(world as *mut PhysicsWorld) };
    let bundle = unsafe { &mut *(bundle as *mut RigidBodyBundle) };
    world.add_rigidbody_bundle(bundle);
}

#[wasm_bindgen(js_name = "physicsWorldRemoveRigidBodyBundle")]
pub fn physics_world_remove_rigidbody_bundle(world: *mut usize, bundle: *mut usize) {
    let world = unsafe { &mut *(world as *mut PhysicsWorld) };
    let bundle = unsafe { &mut *(bundle as *mut RigidBodyBundle) };
    world.remove_rigidbody_bundle(bundle);
}

#[wasm_bindgen(js_name = "physicsWorldAddConstraint")]
pub fn physics_world_add_constraint(world: *mut usize, constraint: *mut usize, disable_collisions_between_linked_bodies: bool) {
    let world = unsafe { &mut *(world as *mut PhysicsWorld) };
    let constraint = unsafe { &mut *(constraint as *mut bind::constraint::Constraint) };
    world.add_constraint(constraint, disable_collisions_between_linked_bodies);
}

#[wasm_bindgen(js_name = "physicsWorldRemoveConstraint")]
pub fn physics_world_remove_constraint(world: *mut usize, constraint: *mut usize) {
    let world = unsafe { &mut *(world as *mut PhysicsWorld) };
    let constraint = unsafe { &mut *(constraint as *mut bind::constraint::Constraint) };
    world.remove_constraint(constraint);
}
