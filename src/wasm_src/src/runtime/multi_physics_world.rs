use wasm_bindgen::prelude::*;
use crate::bind;

use super::{constraint::{Constraint, ConstraintHandle}, rigidbody::{RigidBody, RigidBodyBundle, RigidBodyBundleHandle, RigidBodyHandle}};

#[cfg(debug_assertions)]
struct MultiPhysicsWorldHandleInfo {
    bodies: Vec<RigidBodyHandle>,
    body_bundles: Vec<RigidBodyBundleHandle>,
    constraints: Vec<ConstraintHandle>,
}

pub(crate) struct MultiPhysicsWorld {
    inner: bind::physics_world::PhysicsWorld,
    #[cfg(debug_assertions)]
    handle_info: MultiPhysicsWorldHandleInfo,
}

impl MultiPhysicsWorld {
    pub(crate) fn new() -> Self {
        let inner = bind::physics_world::PhysicsWorld::new();
        Self {
            inner,
            #[cfg(debug_assertions)]
            handle_info: MultiPhysicsWorldHandleInfo {
                bodies: Vec::new(),
                body_bundles: Vec::new(),
                constraints: Vec::new(),
            },
        }
    }

    pub(crate) fn set_gravity(&mut self, x: f32, y: f32, z: f32) {
        self.inner.set_gravity(x, y, z);
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
    world.set_gravity(x, y, z);
}

#[wasm_bindgen(js_name = "multiPhysicsWorldStepSimulation")]
pub fn multi_physics_world_step_simulation(world: *mut usize, time_step: f32, max_sub_steps: i32, fixed_time_step: f32) {
    let world = unsafe { &mut *(world as *mut MultiPhysicsWorld) };
    world.step_simulation(time_step, max_sub_steps, fixed_time_step);
}

#[wasm_bindgen(js_name = "multiPhysicsWorldAddRigidBody")]
pub fn multi_physics_world_add_rigidbody(world: *mut usize, rigidbody: *mut usize) {
    let world = unsafe { &mut *(world as *mut MultiPhysicsWorld) };
    let rigidbody = unsafe { &mut *(rigidbody as *mut RigidBody) };
    world.add_rigidbody(rigidbody.create_handle());
}

#[wasm_bindgen(js_name = "multiPhysicsWorldRemoveRigidBody")]
pub fn multi_physics_world_remove_rigidbody(world: *mut usize, rigidbody: *mut usize) {
    let world = unsafe { &mut *(world as *mut MultiPhysicsWorld) };
    let rigidbody = unsafe { &mut *(rigidbody as *mut RigidBody) };
    world.remove_rigidbody(rigidbody.create_handle());
}

#[wasm_bindgen(js_name = "multiPhysicsWorldAddRigidBodyBundle")]
pub fn multi_physics_world_add_rigidbody_bundle(world: *mut usize, bundle: *mut usize) {
    let world = unsafe { &mut *(world as *mut MultiPhysicsWorld) };
    let bundle = unsafe { &mut *(bundle as *mut RigidBodyBundle) };
    world.add_rigidbody_bundle(bundle.create_handle());
}

#[wasm_bindgen(js_name = "multiPhysicsWorldRemoveRigidBodyBundle")]
pub fn multi_physics_world_remove_rigidbody_bundle(world: *mut usize, bundle: *mut usize) {
    let world = unsafe { &mut *(world as *mut MultiPhysicsWorld) };
    let bundle = unsafe { &mut *(bundle as *mut RigidBodyBundle) };
    world.remove_rigidbody_bundle(bundle.create_handle());
}

#[wasm_bindgen(js_name = "multiPhysicsWorldAddConstraint")]
pub fn multi_physics_world_add_constraint(world: *mut usize, constraint: *mut usize, disable_collisions_between_linked_bodies: bool) {
    let world = unsafe { &mut *(world as *mut MultiPhysicsWorld) };
    let constraint = unsafe { &mut *(constraint as *mut Constraint) };
    world.add_constraint(constraint.create_handle(), disable_collisions_between_linked_bodies);
}

#[wasm_bindgen(js_name = "multiPhysicsWorldRemoveConstraint")]
pub fn multi_physics_world_remove_constraint(world: *mut usize, constraint: *mut usize) {
    let world = unsafe { &mut *(world as *mut MultiPhysicsWorld) };
    let constraint = unsafe { &mut *(constraint as *mut Constraint) };
    world.remove_constraint(constraint.create_handle());
}
