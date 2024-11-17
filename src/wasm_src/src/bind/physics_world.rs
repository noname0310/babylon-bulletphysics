use super::{constraint::Constraint, rigidbody::RigidBody};

#[link(name = "bullet")]
extern "C" {
    fn bw_create_world() -> *mut std::ffi::c_void;

    fn bw_destroy_world(world: *mut std::ffi::c_void);

    fn bw_world_set_gravity(world: *mut std::ffi::c_void, x: f32, y: f32, z: f32);

    fn bw_world_step_simulation(world: *mut std::ffi::c_void, time_step: f32, max_sub_steps: i32, fixed_time_step: f32);

    fn bw_world_add_rigidbody(world: *mut std::ffi::c_void, rigidbody: *mut std::ffi::c_void);

    fn bw_world_remove_rigidbody(world: *mut std::ffi::c_void, rigidbody: *mut std::ffi::c_void);

    fn bw_world_add_constraint(world: *mut std::ffi::c_void, constraint: *mut std::ffi::c_void, disable_collisions_between_linked_bodies: u8);

    fn bw_world_remove_constraint(world: *mut std::ffi::c_void, constraint: *mut std::ffi::c_void);
}

pub(crate) struct PhysicsWorld {
    ptr: *mut std::ffi::c_void,
}

impl PhysicsWorld {
    pub(crate) fn new() -> Self {
        Self {
            ptr: unsafe { bw_create_world() },
        }
    }

    pub(crate) fn set_gravity(&mut self, x: f32, y: f32, z: f32) {
        unsafe { bw_world_set_gravity(self.ptr, x, y, z) };
    }

    pub(crate) fn step_simulation(&mut self, time_step: f32, max_sub_steps: i32, fixed_time_step: f32) {
        unsafe { bw_world_step_simulation(self.ptr, time_step, max_sub_steps, fixed_time_step) };
    }

    pub(crate) fn add_rigidbody(&mut self, rigidbody: &mut RigidBody) {
        unsafe { bw_world_add_rigidbody(self.ptr, rigidbody.ptr_mut()) };
    }

    pub(crate) fn remove_rigidbody(&mut self, rigidbody: &mut RigidBody) {
        unsafe { bw_world_remove_rigidbody(self.ptr, rigidbody.ptr_mut()) };
    }

    pub(crate) fn add_constraint(&mut self, constraint: &mut Constraint, disable_collisions_between_linked_bodies: bool) {
        unsafe { bw_world_add_constraint(self.ptr, constraint.ptr_mut(), disable_collisions_between_linked_bodies as u8) };
    }

    pub(crate) fn remove_constraint(&mut self, constraint: &mut Constraint) {
        unsafe { bw_world_remove_constraint(self.ptr, constraint.ptr_mut()) };
    }
}

impl Drop for PhysicsWorld {
    fn drop(&mut self) {
        unsafe { bw_destroy_world(self.ptr) };
    }
}
