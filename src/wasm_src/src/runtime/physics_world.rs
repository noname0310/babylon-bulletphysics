use wasm_bindgen::prelude::*;
use crate::bind;

use super::rigidbody::RigidBody;

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
