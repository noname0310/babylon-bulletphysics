use glam::Vec3;
use wasm_bindgen::prelude::*;
use crate::bind;

use super::constraint::{Constraint, ConstraintHandle};
use super::rigidbody::{RigidBody, RigidBodyBundle, RigidBodyBundleHandle, RigidBodyBundleShadow, RigidBodyHandle, RigidBodyShadow};

#[cfg(debug_assertions)]
struct PhysicsWorldHandleInfo {
    bodies: Vec<RigidBodyHandle>,
    body_bundles: Vec<RigidBodyBundleHandle>,
    constraints: Vec<ConstraintHandle>,
}

pub(crate) struct PhysicsWorld {
    inner: bind::physics_world::PhysicsWorld,
    #[cfg(debug_assertions)]
    ref_count: u32,
    #[cfg(debug_assertions)]
    handle_info: PhysicsWorldHandleInfo,
    shadow_bodies: Vec<RigidBodyShadow>,
    shadow_body_bundles: Vec<RigidBodyBundleShadow>,
    object_count: i32,
}

impl PhysicsWorld {
    pub(crate) fn new() -> Self {
        let inner = bind::physics_world::PhysicsWorld::new();
        Self {
            inner,
            #[cfg(debug_assertions)]
            ref_count: 0,
            #[cfg(debug_assertions)]
            handle_info: PhysicsWorldHandleInfo {
                bodies: Vec::new(),
                body_bundles: Vec::new(),
                constraints: Vec::new(),
            },
            shadow_bodies: Vec::new(),
            shadow_body_bundles: Vec::new(),
            object_count: 0,
        }
    }

    pub(crate) fn set_gravity(&mut self, force: Vec3) {
        self.inner.set_gravity(force.x, force.y, force.z);
    }

    pub(crate) fn step_simulation(&mut self, time_step: f32, max_sub_steps: i32, fixed_time_step: f32) {
        self.inner.step_simulation(time_step, max_sub_steps, fixed_time_step);
    }

    pub(crate) fn add_rigidbody(&mut self, mut rigidbody: RigidBodyHandle) {
        #[cfg(debug_assertions)]
        {
            if self.handle_info.bodies.iter().any(|b| *b == rigidbody) {
                panic!("RigidBody already added to the world");
            }
        }

        self.inner.add_rigidbody(rigidbody.get_mut().get_inner_mut());
        self.object_count += 1;

        #[cfg(debug_assertions)]
        self.handle_info.bodies.push(rigidbody);
    }

    pub(crate) fn remove_rigidbody(&mut self, mut rigidbody: RigidBodyHandle) {
        #[cfg(debug_assertions)]
        {
            if !self.handle_info.bodies.iter().any(|b| *b == rigidbody) {
                panic!("RigidBody not found in the world");
            }
        }

        self.inner.remove_rigidbody(rigidbody.get_mut().get_inner_mut());
        self.object_count -= 1;

        #[cfg(debug_assertions)]
        {
            let index = self.handle_info.bodies.iter().position(|b| *b == rigidbody).unwrap();
            self.handle_info.bodies.remove(index);
        }
    }

    pub(crate) fn add_rigidbody_bundle(&mut self, mut bundle: RigidBodyBundleHandle) {
        #[cfg(debug_assertions)]
        {
            if self.handle_info.body_bundles.iter().any(|b| *b == bundle) {
                panic!("RigidBodyBundle already added to the world");
            }
        }

        for i in 0..bundle.get().bodies().len() {
            self.inner.add_rigidbody(&mut bundle.get_mut().bodies_mut()[i]);
        }
        self.object_count += 1;

        #[cfg(debug_assertions)]
        self.handle_info.body_bundles.push(bundle);
    }

    pub(crate) fn remove_rigidbody_bundle(&mut self, mut bundle: RigidBodyBundleHandle) {
        #[cfg(debug_assertions)]
        {
            if !self.handle_info.body_bundles.iter().any(|b| *b == bundle) {
                panic!("RigidBodyBundle not found in the world");
            }
        }

        for i in 0..bundle.get().bodies().len() {
            self.inner.remove_rigidbody(&mut bundle.get_mut().bodies_mut()[i]);
        }
        self.object_count -= 1;

        #[cfg(debug_assertions)]
        {
            let index = self.handle_info.body_bundles.iter().position(|b| *b == bundle).unwrap();
            self.handle_info.body_bundles.remove(index);
        }
    }

    pub(super) fn add_rigidbody_shadow(&mut self, mut rigidbody: RigidBodyHandle, weak: bool) {
        #[cfg(debug_assertions)]
        {
            if self.handle_info.bodies.iter().any(|b| *b == rigidbody) {
                panic!("RigidBody already added to the world");
            }
        }

        let mut shadow = rigidbody.create_shadow();
        self.inner.add_rigidbody_shadow(shadow.get_inner_mut());
        self.shadow_bodies.push(shadow);
        if !weak {
            self.object_count += 1;
        }

        #[cfg(debug_assertions)]
        self.handle_info.bodies.push(rigidbody);
    }

    pub(super) fn remove_rigidbody_shadow(&mut self, rigidbody: RigidBodyHandle, weak: bool) {
        #[cfg(debug_assertions)]
        {
            if !self.handle_info.bodies.iter().any(|b| *b == rigidbody) {
                panic!("RigidBody not found in the world");
            }
        }

        let index = self.shadow_bodies.iter().position(|s| *s.handle() == rigidbody).unwrap();
        let mut shadow = self.shadow_bodies.remove(index);
        self.inner.remove_rigidbody_shadow(shadow.get_inner_mut());
        if !weak {
            self.object_count -= 1;
        }

        #[cfg(debug_assertions)]
        {
            let index = self.handle_info.bodies.iter().position(|b| *b == rigidbody).unwrap();
            self.handle_info.bodies.remove(index);
        }
    }

    pub(super) fn add_rigidbody_bundle_shadow(&mut self, mut bundle: RigidBodyBundleHandle, weak: bool) {
        #[cfg(debug_assertions)]
        {
            if self.handle_info.body_bundles.iter().any(|b| *b == bundle) {
                panic!("RigidBodyBundle already added to the world");
            }
        }

        let mut shadow = bundle.create_shadow();
        for i in 0..shadow.shadows().len() {
            self.inner.add_rigidbody_shadow(&mut shadow.shadows_mut()[i]);
        }
        self.shadow_body_bundles.push(shadow);
        if !weak {
            self.object_count += 1;
        }

        #[cfg(debug_assertions)]
        self.handle_info.body_bundles.push(bundle);
    }

    pub(super) fn remove_rigidbody_bundle_shadow(&mut self, bundle: RigidBodyBundleHandle, weak: bool) {
        #[cfg(debug_assertions)]
        {
            if !self.handle_info.body_bundles.iter().any(|b| *b == bundle) {
                panic!("RigidBodyBundle not found in the world");
            }
        }

        let index = self.shadow_body_bundles.iter().position(|s| *s.handle() == bundle).unwrap();
        let mut shadow = self.shadow_body_bundles.remove(index);
        for i in 0..shadow.shadows().len() {
            self.inner.remove_rigidbody_shadow(&mut shadow.shadows_mut()[i]);
        }
        if !weak {
            self.object_count -= 1;
        }

        #[cfg(debug_assertions)]
        {
            let index = self.handle_info.body_bundles.iter().position(|b| *b == bundle).unwrap();
            self.handle_info.body_bundles.remove(index);
        }
    }

    pub(super) fn add_constraint(&mut self, mut constraint: ConstraintHandle, disable_collisions_between_linked_bodies: bool) {
        #[cfg(debug_assertions)]
        {
            if self.handle_info.constraints.iter().any(|c| *c == constraint) {
                panic!("Constraint already added to the world");
            }
        }

        self.inner.add_constraint(constraint.get_mut().ptr_mut(), disable_collisions_between_linked_bodies);
        self.object_count += 1;

        #[cfg(debug_assertions)]
        self.handle_info.constraints.push(constraint);
    }

    pub(crate) fn remove_constraint(&mut self, mut constraint: ConstraintHandle) {
        #[cfg(debug_assertions)]
        {
            if !self.handle_info.constraints.iter().any(|c| *c == constraint) {
                panic!("Constraint not found in the world");
            }
        }

        self.inner.remove_constraint(constraint.get_mut().ptr_mut());
        self.object_count -= 1;

        #[cfg(debug_assertions)]
        {
            let index = self.handle_info.constraints.iter().position(|c| *c == constraint).unwrap();
            self.handle_info.constraints.remove(index);
        }
    }

    pub(crate) fn is_empty(&self) -> bool {
        self.object_count == 0
    }

    pub(crate) fn create_handle(&mut self) -> PhysicsWorldHandle {
        PhysicsWorldHandle::new(self)
    }
}

unsafe impl Send for PhysicsWorld {}

#[cfg(debug_assertions)]
impl Drop for PhysicsWorld {
    fn drop(&mut self) {
        if 0 < self.ref_count {
            panic!("PhysicsWorld still has references");
        }
    }
}

pub(crate) struct PhysicsWorldHandle {
    world: &'static mut PhysicsWorld,
}

impl PhysicsWorldHandle {
    pub(crate) fn new(world: &mut PhysicsWorld) -> Self {
        let world = unsafe {
            std::mem::transmute::<&mut PhysicsWorld, &'static mut PhysicsWorld>(world)
        };

        #[cfg(debug_assertions)]
        {
            world.ref_count += 1;
        }

        Self {
            world,
        }
    }

    pub(crate) fn get(&self) -> &PhysicsWorld {
        self.world
    }

    pub(crate) fn get_mut(&mut self) -> &mut PhysicsWorld {
        self.world
    }

    pub(crate) fn clone(&mut self) -> Self {
        Self::new(self.world)
    }
}

#[cfg(debug_assertions)]
impl Drop for PhysicsWorldHandle {
    fn drop(&mut self) {
        self.world.ref_count -= 1;
    }
}

impl PartialEq for PhysicsWorldHandle {
    fn eq(&self, other: &Self) -> bool {
        std::ptr::eq(self.world as *const PhysicsWorld, other.world as *const PhysicsWorld)
    }
}

impl Eq for PhysicsWorldHandle {}

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
