use glam::Vec3;
use rustc_hash::FxHashMap;
use wasm_bindgen::prelude::*;

use super::constraint::{Constraint, ConstraintHandle};
use super::physics_world::PhysicsWorld;
use super::rigidbody::{RigidBody, RigidBodyBundle, RigidBodyBundleHandle, RigidBodyHandle};

#[cfg(feature = "parallel")]
use rayon::prelude::*;

pub(crate) type PhysicsWorldId = u32;

#[cfg(debug_assertions)]
struct MultiPhysicsWorldHandleInfo {
    bodies: Vec<RigidBodyHandle>,
    body_bundles: Vec<RigidBodyBundleHandle>,
}

pub(crate) struct MultiPhysicsWorld {
    worlds: FxHashMap<PhysicsWorldId, PhysicsWorld>,
    #[cfg(debug_assertions)]
    handle_info: MultiPhysicsWorldHandleInfo,
    global_bodies: Vec<RigidBodyHandle>,
    global_body_bundles: Vec<RigidBodyBundleHandle>,
}

impl MultiPhysicsWorld {
    pub(crate) fn new() -> Self {
        Self {
            worlds: FxHashMap::default(),
            #[cfg(debug_assertions)]
            handle_info: MultiPhysicsWorldHandleInfo {
                bodies: Vec::new(),
                body_bundles: Vec::new(),
            },
            global_bodies: Vec::new(),
            global_body_bundles: Vec::new(),
        }
    }

    fn get_or_create_world(&mut self, id: PhysicsWorldId) -> &mut PhysicsWorld {
        self.worlds.entry(id).or_insert_with(|| {
            let mut world = PhysicsWorld::new();
            for body in self.global_bodies.iter_mut() {
                world.add_rigidbody_shadow(body.clone());
            }
            for bundle in self.global_body_bundles.iter_mut() {
                world.add_rigidbody_bundle_shadow(bundle.clone());
            }
            world
        })
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

    pub(crate) fn add_rigidbody(
        &mut self,
        world_id: PhysicsWorldId, 
        #[cfg(debug_assertions)]
        mut rigidbody: RigidBodyHandle,
        #[cfg(not(debug_assertions))]
        rigidbody: RigidBodyHandle,
    ) {
        #[cfg(debug_assertions)]
        {
            if self.handle_info.bodies.iter().any(|b| *b == rigidbody) {
                panic!("RigidBody already added to the world");
            }
            self.handle_info.bodies.push(rigidbody.clone());
        }

        self.get_or_create_world(world_id).add_rigidbody(rigidbody);

    }

    pub(crate) fn remove_rigidbody(&mut self, world_id: PhysicsWorldId, rigidbody: RigidBodyHandle) {
        #[cfg(debug_assertions)]
        {
            if !self.handle_info.bodies.iter().any(|b| *b == rigidbody) {
                panic!("RigidBody not found in the world");
            }
            let index: usize = self.handle_info.bodies.iter().position(|r| *r == rigidbody).unwrap();
            self.handle_info.bodies.remove(index);
        }

        self.get_or_create_world(world_id).remove_rigidbody(rigidbody);
    }

    pub(crate) fn add_rigidbody_bundle(
        &mut self,
        world_id: PhysicsWorldId,
        #[cfg(debug_assertions)]
        mut bundle: RigidBodyBundleHandle,
        #[cfg(not(debug_assertions))]
        bundle: RigidBodyBundleHandle,
    ) {
        #[cfg(debug_assertions)]
        {
            if self.handle_info.body_bundles.iter().any(|b| *b == bundle) {
                panic!("RigidBodyBundle already added to the world");
            }
            self.handle_info.body_bundles.push(bundle.clone());
        }

        self.get_or_create_world(world_id).add_rigidbody_bundle(bundle);
    }

    pub(crate) fn remove_rigidbody_bundle(&mut self, world_id: PhysicsWorldId, bundle: RigidBodyBundleHandle) {
        #[cfg(debug_assertions)]
        {
            if !self.handle_info.body_bundles.iter().any(|b| *b == bundle) {
                panic!("RigidBodyBundle not found in the world");
            }
            let index: usize = self.handle_info.body_bundles.iter().position(|r| *r == bundle).unwrap();
            self.handle_info.body_bundles.remove(index);
        }

        self.get_or_create_world(world_id).remove_rigidbody_bundle(bundle);
    }

    pub(crate) fn add_rigidbody_to_global(&mut self, mut rigidbody: RigidBodyHandle) {
        #[cfg(debug_assertions)]
        {
            if self.global_bodies.iter().any(|b| *b == rigidbody) {
                panic!("RigidBody already added to the global world");
            }
        }

        for (_, world) in self.worlds.iter_mut() {
            world.add_rigidbody_shadow(rigidbody.clone());
        }
        self.global_bodies.push(rigidbody);
    }

    pub(crate) fn remove_rigidbody_from_global(&mut self, mut rigidbody: RigidBodyHandle) {
        #[cfg(debug_assertions)]
        {
            if !self.global_bodies.iter().any(|b| *b == rigidbody) {
                panic!("RigidBody not found in the global world");
            }
        }

        for (_, world) in self.worlds.iter_mut() {
            world.remove_rigidbody_shadow(rigidbody.clone());
        }
        let index: usize = self.global_bodies.iter().position(|r| *r == rigidbody).unwrap();
        self.global_bodies.remove(index);
    }

    pub(crate) fn add_rigidbody_bundle_to_global(&mut self, mut bundle: RigidBodyBundleHandle) {
        #[cfg(debug_assertions)]
        {
            if self.global_body_bundles.iter().any(|b| *b == bundle) {
                panic!("RigidBodyBundle already added to the global world");
            }
        }

        for (_, world) in self.worlds.iter_mut() {
            world.add_rigidbody_bundle_shadow(bundle.clone());
        }
        self.global_body_bundles.push(bundle);
    }

    pub(crate) fn remove_rigidbody_bundle_from_global(&mut self, mut bundle: RigidBodyBundleHandle) {
        #[cfg(debug_assertions)]
        {
            if !self.global_body_bundles.iter().any(|b| *b == bundle) {
                panic!("RigidBodyBundle not found in the global world");
            }
        }

        for (_, world) in self.worlds.iter_mut() {
            world.remove_rigidbody_bundle_shadow(bundle.clone());
        }
        let index: usize = self.global_body_bundles.iter().position(|r| *r == bundle).unwrap();
        self.global_body_bundles.remove(index);
    }

    pub(crate) fn add_rigidbody_shadow(&mut self, world_id: PhysicsWorldId, rigidbody: RigidBodyHandle) {
        self.get_or_create_world(world_id).add_rigidbody_shadow(rigidbody);
    }

    pub(crate) fn remove_rigidbody_shadow(&mut self, world_id: PhysicsWorldId, rigidbody: RigidBodyHandle) {
        self.get_or_create_world(world_id).remove_rigidbody_shadow(rigidbody);
    }

    pub(crate) fn add_rigidbody_bundle_shadow(&mut self, world_id: PhysicsWorldId, bundle: RigidBodyBundleHandle) {
        self.get_or_create_world(world_id).add_rigidbody_bundle_shadow(bundle);
    }

    pub(crate) fn remove_rigidbody_bundle_shadow(&mut self, world_id: PhysicsWorldId, bundle: RigidBodyBundleHandle) {
        self.get_or_create_world(world_id).remove_rigidbody_bundle_shadow(bundle);
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

#[wasm_bindgen(js_name = "multiPhysicsWorldAddRigidbodyToGlobal")]
pub fn multi_physics_world_add_rigidbody_to_global(world: *mut usize, rigidbody: *mut usize) {
    let world = unsafe { &mut *(world as *mut MultiPhysicsWorld) };
    let rigidbody = unsafe { &mut *(rigidbody as *mut RigidBody) };
    world.add_rigidbody_to_global(rigidbody.create_handle());
}

#[wasm_bindgen(js_name = "multiPhysicsWorldRemoveRigidbodyFromGlobal")]
pub fn multi_physics_world_remove_rigidbody_from_global(world: *mut usize, rigidbody: *mut usize) {
    let world = unsafe { &mut *(world as *mut MultiPhysicsWorld) };
    let rigidbody = unsafe { &mut *(rigidbody as *mut RigidBody) };
    world.remove_rigidbody_from_global(rigidbody.create_handle());
}

#[wasm_bindgen(js_name = "multiPhysicsWorldAddRigidbodyBundleToGlobal")]
pub fn multi_physics_world_add_rigidbody_bundle_to_global(world: *mut usize, bundle: *mut usize) {
    let world = unsafe { &mut *(world as *mut MultiPhysicsWorld) };
    let bundle = unsafe { &mut *(bundle as *mut RigidBodyBundle) };
    world.add_rigidbody_bundle_to_global(bundle.create_handle());
}

#[wasm_bindgen(js_name = "multiPhysicsWorldRemoveRigidbodyBundleFromGlobal")]
pub fn multi_physics_world_remove_rigidbody_bundle_from_global(world: *mut usize, bundle: *mut usize) {
    let world = unsafe { &mut *(world as *mut MultiPhysicsWorld) };
    let bundle = unsafe { &mut *(bundle as *mut RigidBodyBundle) };
    world.remove_rigidbody_bundle_from_global(bundle.create_handle());
}

#[wasm_bindgen(js_name = "multiPhysicsWorldAddRigidbodyShadow")]
pub fn multi_physics_world_add_rigidbody_shadow(world: *mut usize, world_id: PhysicsWorldId, rigidbody: *mut usize) {
    let world = unsafe { &mut *(world as *mut MultiPhysicsWorld) };
    let rigidbody = unsafe { &mut *(rigidbody as *mut RigidBody) };
    world.add_rigidbody_shadow(world_id, rigidbody.create_handle());
}

#[wasm_bindgen(js_name = "multiPhysicsWorldRemoveRigidbodyShadow")]
pub fn multi_physics_world_remove_rigidbody_shadow(world: *mut usize, world_id: PhysicsWorldId, rigidbody: *mut usize) {
    let world = unsafe { &mut *(world as *mut MultiPhysicsWorld) };
    let rigidbody = unsafe { &mut *(rigidbody as *mut RigidBody) };
    world.remove_rigidbody_shadow(world_id, rigidbody.create_handle());
}

#[wasm_bindgen(js_name = "multiPhysicsWorldAddRigidbodyBundleShadow")]
pub fn multi_physics_world_add_rigidbody_bundle_shadow(world: *mut usize, world_id: PhysicsWorldId, bundle: *mut usize) {
    let world = unsafe { &mut *(world as *mut MultiPhysicsWorld) };
    let bundle = unsafe { &mut *(bundle as *mut RigidBodyBundle) };
    world.add_rigidbody_bundle_shadow(world_id, bundle.create_handle());
}

#[wasm_bindgen(js_name = "multiPhysicsWorldRemoveRigidbodyBundleShadow")]
pub fn multi_physics_world_remove_rigidbody_bundle_shadow(world: *mut usize, world_id: PhysicsWorldId, bundle: *mut usize) {
    let world = unsafe { &mut *(world as *mut MultiPhysicsWorld) };
    let bundle = unsafe { &mut *(bundle as *mut RigidBodyBundle) };
    world.remove_rigidbody_bundle_shadow(world_id, bundle.create_handle());
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
