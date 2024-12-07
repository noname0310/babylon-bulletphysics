use glam::Vec3;
use rustc_hash::FxHashMap;
use wasm_bindgen::prelude::*;
use crate::bind;

use super::constraint::{Constraint, ConstraintHandle};
use super::physics_world::PhysicsWorld;
use super::rigidbody::{RigidBody, RigidBodyBundle, RigidBodyBundleHandle, RigidBodyHandle};

#[cfg(feature = "parallel")]
use rayon::prelude::*;

pub(crate) type PhysicsWorldId = u32;

pub(crate) struct MultiPhysicsWorld {
    worlds: FxHashMap<PhysicsWorldId, PhysicsWorld>,
    global_bodies: Vec<RigidBodyHandle>,
}

impl MultiPhysicsWorld {
    pub(crate) fn new() -> Self {
        Self {
            worlds: FxHashMap::default(),
            global_bodies: Vec::new(),
        }
    }

    fn get_or_create_world(&mut self, id: PhysicsWorldId) -> &mut PhysicsWorld {
        self.worlds.entry(id).or_insert_with(|| PhysicsWorld::new())
    }

    pub(crate) fn set_gravity(&mut self, force: Vec3) {
        for (_, world) in self.worlds.iter_mut() {
            world.set_gravity(force);
        }
    }

    pub(crate) fn step_simulation(&mut self, time_step: f32, max_sub_steps: i32, fixed_time_step: f32) {
        #[cfg(feature = "parallel")]
        {
            if 1 < self.worlds.len() {
                self.worlds.par_iter_mut().for_each(|(_, world)| {
                    world.step_simulation(time_step, max_sub_steps, fixed_time_step);
                });
            } else if !self.worlds.is_empty() {
                self.worlds.values_mut().next().unwrap().step_simulation(time_step, max_sub_steps, fixed_time_step);
            }
        }

        #[cfg(not(feature = "parallel"))]
        {
            for (_, world) in self.worlds.iter_mut() {
                world.step_simulation(time_step, max_sub_steps, fixed_time_step);
            }
        }
    }

    pub(crate) fn add_rigidbody(&mut self, world_id: PhysicsWorldId, rigidbody: RigidBodyHandle) {
        self.get_or_create_world(world_id).add_rigidbody(rigidbody);
    }

    pub(crate) fn remove_rigidbody(&mut self, world_id: PhysicsWorldId, rigidbody: RigidBodyHandle) {
        self.get_or_create_world(world_id).remove_rigidbody(rigidbody);
    }

    pub(crate) fn add_rigidbody_bundle(&mut self, world_id: PhysicsWorldId, bundle: RigidBodyBundleHandle) {
        self.get_or_create_world(world_id).add_rigidbody_bundle(bundle);
    }

    pub(crate) fn remove_rigidbody_bundle(&mut self, world_id: PhysicsWorldId, bundle: RigidBodyBundleHandle) {
        self.get_or_create_world(world_id).remove_rigidbody_bundle(bundle);
    }

    pub(crate) fn add_constraint(&mut self, world_id: PhysicsWorldId, constraint: ConstraintHandle, disable_collisions_between_linked_bodies: bool) {
        self.get_or_create_world(world_id).add_constraint(constraint, disable_collisions_between_linked_bodies);
    }

    pub(crate) fn remove_constraint(&mut self, world_id: PhysicsWorldId, constraint: ConstraintHandle) {
        self.get_or_create_world(world_id).remove_constraint(constraint);
    }
}

#[wasm_bindgen(js_name = "createMultiPhysicsWorld")]
pub fn create_multi_physics_world() -> *mut usize {
    let world = MultiPhysicsWorld::new();
    let world = Box::new(world);
    Box::into_raw(world) as *mut usize
}

#[wasm_bindgen(js_name = "destroyMultiPhysicsWorld")]
pub fn destroy_multi_physics_world(world: *mut usize) {
    unsafe {
        let _ = Box::from_raw(world as *mut MultiPhysicsWorld);
    }
}

#[wasm_bindgen(js_name = "multiPhysicsWorldSetGravity")]
pub fn multi_physics_world_set_gravity(world: *mut usize, x: f32, y: f32, z: f32) {
    let world = unsafe { &mut *(world as *mut MultiPhysicsWorld) };
    world.set_gravity(Vec3::new(x, y, z));
}

#[wasm_bindgen(js_name = "multiPhysicsWorldStepSimulation")]
pub fn multi_physics_world_step_simulation(world: *mut usize, time_step: f32, max_sub_steps: i32, fixed_time_step: f32) {
    let world = unsafe { &mut *(world as *mut MultiPhysicsWorld) };
    world.step_simulation(time_step, max_sub_steps, fixed_time_step);
}

#[wasm_bindgen(js_name = "multiPhysicsWorldAddRigidbody")]
pub fn multi_physics_world_add_rigidbody(world: *mut usize, world_id: PhysicsWorldId, rigidbody: *mut usize) {
    let world = unsafe { &mut *(world as *mut MultiPhysicsWorld) };
    let rigidbody = unsafe { &mut *(rigidbody as *mut RigidBody) };
    world.add_rigidbody(world_id, rigidbody.create_handle());
}

#[wasm_bindgen(js_name = "multiPhysicsWorldRemoveRigidbody")]
pub fn multi_physics_world_remove_rigidbody(world: *mut usize, world_id: PhysicsWorldId, rigidbody: *mut usize) {
    let world = unsafe { &mut *(world as *mut MultiPhysicsWorld) };
    let rigidbody = unsafe { &mut *(rigidbody as *mut RigidBody) };
    world.remove_rigidbody(world_id, rigidbody.create_handle());
}

#[wasm_bindgen(js_name = "multiPhysicsWorldAddRigidbodyBundle")]
pub fn multi_physics_world_add_rigidbody_bundle(world: *mut usize, world_id: PhysicsWorldId, bundle: *mut usize) {
    let world = unsafe { &mut *(world as *mut MultiPhysicsWorld) };
    let bundle = unsafe { &mut *(bundle as *mut RigidBodyBundle) };
    world.add_rigidbody_bundle(world_id, bundle.create_handle());
}

#[wasm_bindgen(js_name = "multiPhysicsWorldRemoveRigidbodyBundle")]
pub fn multi_physics_world_remove_rigidbody_bundle(world: *mut usize, world_id: PhysicsWorldId, bundle: *mut usize) {
    let world = unsafe { &mut *(world as *mut MultiPhysicsWorld) };
    let bundle = unsafe { &mut *(bundle as *mut RigidBodyBundle) };
    world.remove_rigidbody_bundle(world_id, bundle.create_handle());
}

#[wasm_bindgen(js_name = "multiPhysicsWorldAddConstraint")]
pub fn multi_physics_world_add_constraint(world: *mut usize, world_id: PhysicsWorldId, constraint: *mut usize, disable_collisions_between_linked_bodies: bool) {
    let world = unsafe { &mut *(world as *mut MultiPhysicsWorld) };
    let constraint = unsafe { &mut *(constraint as *mut Constraint) };
    world.add_constraint(world_id, constraint.create_handle(), disable_collisions_between_linked_bodies);
}

#[wasm_bindgen(js_name = "multiPhysicsWorldRemoveConstraint")]
pub fn multi_physics_world_remove_constraint(world: *mut usize, world_id: PhysicsWorldId, constraint: *mut usize) {
    let world = unsafe { &mut *(world as *mut MultiPhysicsWorld) };
    let constraint = unsafe { &mut *(constraint as *mut Constraint) };
    world.remove_constraint(world_id, constraint.create_handle());
}
