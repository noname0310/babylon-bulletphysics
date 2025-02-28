use glam::{Mat4, Vec3};
use wasm_bindgen::prelude::*;

use crate::bind;

use super::collision_shape::{CollisionShape, CollisionShapeHandle};

#[repr(C)]
pub(crate) struct RigidBodyConstructionInfo<'a> {
    // for shape
    pub(crate) shape: &'a mut CollisionShape,
    
    // for motion state
    pub(crate) initial_transform: Mat4,

    // for rigid body
    pub(crate) data_mask: u16,
    pub(crate) motion_type: u8,
    pub(crate) mass: f32,
    pub(crate) local_inertia: Vec3,
    pub(crate) linear_damping: f32,
    pub(crate) angular_damping: f32,
    pub(crate) friction: f32,
    // rolling_friction: f32,
    // spinning_friction: f32,
    pub(crate) restitution: f32,
    pub(crate) linear_sleeping_threshold: f32,
    pub(crate) angular_sleeping_threshold: f32,
    pub(crate) collision_group: u16,
    pub(crate) collision_mask: u16,
    pub(crate) additional_damping: u8,
    // additional_damping_factor: f32,
    // additional_linear_damping_threshold_sqr: f32,
    // additional_angular_damping_threshold_sqr: f32,
    // additional_angular_damping_factor: f32,
    pub(crate) no_contact_response: u8,
    pub(crate) disable_deactivation: u8,
}

pub(crate) struct RigidBody {
    inner: bind::rigidbody::RigidBody,
    motion_state: bind::motion_state::MotionState,
    buffered_motion_state: Option<bind::motion_state::MotionState>,
    #[cfg(debug_assertions)]
    ref_count: u32,
    #[cfg(debug_assertions)]
    #[allow(dead_code)]
    shape_handle: CollisionShapeHandle,
}

impl RigidBody {
    pub(crate) fn new(
        info: &mut RigidBodyConstructionInfo
    ) -> Self {
        let motion_state = bind::motion_state::MotionState::new(&info.initial_transform);

        #[cfg(debug_assertions)]
        let shape_handle = info.shape.create_handle();

        let info = bind::rigidbody::RigidBodyConstructionInfo::from_runtime_info(
            info,
            &motion_state
        );
        let inner = bind::rigidbody::RigidBody::new(&info);
        Self {
            inner,
            motion_state,
            buffered_motion_state: None,
            #[cfg(debug_assertions)]
            ref_count: 0,
            #[cfg(debug_assertions)]
            shape_handle,
        }
    }

    pub(super) fn get_inner(&self) -> &bind::rigidbody::RigidBody {
        &self.inner
    }

    pub(super) fn get_inner_mut(&mut self) -> &mut bind::rigidbody::RigidBody {
        &mut self.inner
    }

    pub(crate) fn get_motion_state_ptr(&mut self) -> *mut std::ffi::c_void {
        self.motion_state.ptr_mut()
    }

    pub(crate) fn get_buffered_motion_state_ptr(&mut self) -> *mut std::ffi::c_void {
        if let Some(motion_state) = self.buffered_motion_state.as_mut() {
            motion_state.ptr_mut()
        } else {
            self.motion_state.ptr_mut()
        }
    }

    fn get_motion_state_mut(&mut self) -> &mut bind::motion_state::MotionState {
        &mut self.motion_state
    }

    fn get_buffered_motion_state_mut(&mut self) -> &mut bind::motion_state::MotionState {
        if let Some(motion_state) = self.buffered_motion_state.as_mut() {
            motion_state
        } else {
            &mut self.motion_state
        }
    }

    pub(super) fn init_buffered_motion_state(&mut self) {
        if !self.get_inner().is_static_or_kinematic() && self.buffered_motion_state.is_none() {
            self.buffered_motion_state = Some(bind::motion_state::MotionState::new(&self.motion_state.get_transform()));
        }
    }

    pub(super) fn clear_buffered_motion_state(&mut self) {
        self.buffered_motion_state = None;
    }

    pub(super) fn sync_buffered_motion_state(&mut self) {
        if let Some(buffered_motion_state) = self.buffered_motion_state.as_mut() {
            buffered_motion_state.copy_from(&self.motion_state);
        }
    }

    pub(crate) fn set_damping(&mut self, linear_damping: f32, angular_damping: f32) {
        self.inner.set_damping(linear_damping, angular_damping);
    }

    pub(crate) fn get_linear_damping(&self) -> f32 {
        self.inner.get_linear_damping()
    }

    pub(crate) fn get_angular_damping(&self) -> f32 {
        self.inner.get_angular_damping()
    }

    pub(crate) fn set_mass_props(&mut self, mass: f32, local_inertia: Vec3) {
        self.inner.set_mass_props(mass, local_inertia);
    }

    pub(crate) fn get_mass(&self) -> f32 {
        self.inner.get_mass()
    }

    pub(crate) fn get_local_inertia(&self) -> Vec3 {
        self.inner.get_local_inertia()
    }

    pub(crate) fn get_total_force(&self) -> Vec3 {
        self.inner.get_total_force()
    }

    pub(crate) fn get_total_torque(&self) -> Vec3 {
        self.inner.get_total_torque()
    }

    pub(crate) fn apply_central_force(&mut self, force: Vec3) {
        self.inner.apply_central_force(force);
    }

    pub(crate) fn apply_torque(&mut self, torque: Vec3) {
        self.inner.apply_torque(torque);
    }

    pub(crate) fn apply_force(&mut self, force: Vec3, relative_position: Vec3) {
        self.inner.apply_force(force, relative_position);
    }

    pub(crate) fn apply_central_impulse(&mut self, impulse: Vec3) {
        self.inner.apply_central_impulse(impulse);
    }

    pub(crate) fn apply_torque_impulse(&mut self, torque: Vec3) {
        self.inner.apply_torque_impulse(torque);
    }

    pub(crate) fn apply_impulse(&mut self, impulse: Vec3, relative_position: Vec3) {
        self.inner.apply_impulse(impulse, relative_position);
    }

    pub(crate) fn apply_push_impulse(&mut self, impulse: Vec3, relative_position: Vec3) {
        self.inner.apply_push_impulse(impulse, relative_position);
    }

    pub(crate) fn get_push_velocity(&self) -> Vec3 {
        self.inner.get_push_velocity()
    }

    pub(crate) fn get_turn_velocity(&self) -> Vec3 {
        self.inner.get_turn_velocity()
    }

    pub(crate) fn set_push_velocity(&mut self, velocity: Vec3) {
        self.inner.set_push_velocity(velocity);
    }

    pub(crate) fn set_turn_velocity(&mut self, velocity: Vec3) {
        self.inner.set_turn_velocity(velocity);
    }

    pub(crate) fn apply_central_push_impulse(&mut self, impulse: Vec3) {
        self.inner.apply_central_push_impulse(impulse);
    }

    pub(crate) fn apply_torque_turn_impulse(&mut self, torque: Vec3) {
        self.inner.apply_torque_turn_impulse(torque);
    }

    pub(crate) fn clear_forces(&mut self) {
        self.inner.clear_forces();
    }

    pub(crate) fn get_linear_velocity(&self) -> Vec3 {
        self.inner.get_linear_velocity()
    }

    pub(crate) fn get_angular_velocity(&self) -> Vec3 {
        self.inner.get_angular_velocity()
    }

    pub(crate) fn set_linear_velocity(&mut self, velocity: Vec3) {
        self.inner.set_linear_velocity(velocity);
    }

    pub(crate) fn set_angular_velocity(&mut self, velocity: Vec3) {
        self.inner.set_angular_velocity(velocity);
    }

    pub(crate) fn get_velocity_in_local_point(&self, relative_position: Vec3) -> Vec3 {
        self.inner.get_velocity_in_local_point(relative_position)
    }

    pub(crate) fn get_push_velocity_in_local_point(&self, relative_position: Vec3) -> Vec3 {
        self.inner.get_push_velocity_in_local_point(relative_position)
    }

    pub(crate) fn translate(&mut self, translation: Vec3) {
        self.inner.translate(translation);
    }

    pub(crate) fn commit_transform(&mut self) {
        self.inner.commit_transform();
    }

    pub(crate) fn create_handle(&mut self) -> RigidBodyHandle {
        RigidBodyHandle::new(self)
    }
}

#[cfg(debug_assertions)]
impl Drop for RigidBody {
    fn drop(&mut self) {
        if 0 < self.ref_count {
            panic!("RigidBody still has references");
        }
    }
}

pub(crate) struct RigidBodyHandle {
    rigidbody: &'static mut RigidBody,
}

impl RigidBodyHandle {
    pub(crate) fn new(rigidbody: &mut RigidBody) -> Self {
        let rigidbody = unsafe {
            std::mem::transmute::<&mut RigidBody, &'static mut RigidBody>(rigidbody)
        };

        #[cfg(debug_assertions)]
        {
            rigidbody.ref_count += 1;
        }

        Self {
            rigidbody,
        }
    }

    pub(crate) fn get(&self) -> &RigidBody {
        self.rigidbody
    }

    pub(crate) fn get_mut(&mut self) -> &mut RigidBody {
        self.rigidbody
    }

    pub(crate) fn clone(&mut self) -> Self {
        Self::new(self.rigidbody)
    }

    pub(crate) fn create_shadow(&mut self) -> RigidBodyShadow {
        RigidBodyShadow::new(self.rigidbody)
    }
}

#[cfg(debug_assertions)]
impl Drop for RigidBodyHandle {
    fn drop(&mut self) {
        self.rigidbody.ref_count -= 1;
    }
}

impl PartialEq for RigidBodyHandle {
    fn eq(&self, other: &Self) -> bool {
        std::ptr::eq(self.rigidbody as *const RigidBody, other.rigidbody as *const RigidBody)
    }
}

impl Eq for RigidBodyHandle {}

pub(crate) struct RigidBodyShadow {
    inner: bind::rigidbody::RigidBodyShadow,
    handle: RigidBodyHandle,
}

impl RigidBodyShadow {
    pub(super) fn new(rigidbody: &mut RigidBody) -> Self {
        let motion_state_ptr =  if rigidbody.get_inner().is_static_or_kinematic() {
            rigidbody.get_motion_state_mut().ptr_mut()
        } else {
            rigidbody.get_buffered_motion_state_mut().ptr_mut()
        };
        let inner = bind::rigidbody::RigidBodyShadow::new(rigidbody.get_inner_mut(), motion_state_ptr);

        Self {
            inner,
            handle: rigidbody.create_handle(),
        }
    }

    pub(super) fn get_inner(&self) -> &bind::rigidbody::RigidBodyShadow {
        &self.inner
    }

    pub(super) fn get_inner_mut(&mut self) -> &mut bind::rigidbody::RigidBodyShadow {
        &mut self.inner
    }

    pub(super) fn update_motion_state(&mut self) {
        if !self.handle.get_mut().get_inner().is_static_or_kinematic() {
            let motion_state = self.handle.get_mut().get_buffered_motion_state_mut();
            self.inner.set_motion_state(motion_state.ptr_mut());
        }
    }

    pub(super) fn handle(&self) -> &RigidBodyHandle {
        &self.handle
    }

    pub(super) fn handle_mut(&mut self) -> &mut RigidBodyHandle {
        &mut self.handle
    }
}

pub(crate) struct RigidBodyBundle {
    bodies: Box<[bind::rigidbody::RigidBody]>,
    motion_state_bundle: bind::motion_state::MotionStateBundle,
    buffered_motion_state_bundle: Option<bind::motion_state::MotionStateBundle>,
    #[cfg(debug_assertions)]
    ref_count: u32,
    #[cfg(debug_assertions)]
    #[allow(dead_code)]
    shape_handle_vec: Vec<CollisionShapeHandle>,
}

impl RigidBodyBundle {
    pub(crate) fn new(info_list: &mut [RigidBodyConstructionInfo]) -> Self {
        let mut bodies = Vec::with_capacity(info_list.len());
        let mut motion_state_bundle = bind::motion_state::MotionStateBundle::new(info_list.len());
        
        #[cfg(debug_assertions)]
        let mut shape_handle_vec = Vec::with_capacity(info_list.len());
        
        for (i, info) in info_list.iter_mut().enumerate() {
            motion_state_bundle.set_transform(i, &info.initial_transform);

            #[cfg(debug_assertions)]
            shape_handle_vec.push(info.shape.create_handle());


            let info = bind::rigidbody::RigidBodyConstructionInfo::from_runtime_info_raw(
                info,
                motion_state_bundle.get_nth_motion_state_ptr_mut(i)
            );
            let body = bind::rigidbody::RigidBody::new(&info);
            bodies.push(body);
        }
        Self {
            bodies: bodies.into_boxed_slice(),
            motion_state_bundle,
            buffered_motion_state_bundle: None,
            #[cfg(debug_assertions)]
            ref_count: 0,
            #[cfg(debug_assertions)]
            shape_handle_vec,
        }
    }

    pub(super) fn bodies(&self) -> &[bind::rigidbody::RigidBody] {
        &self.bodies
    }

    pub(super) fn bodies_mut(&mut self) -> &mut [bind::rigidbody::RigidBody] {
        &mut self.bodies
    }

    pub(crate) fn get_motion_states_ptr(&mut self) -> *mut std::ffi::c_void {
        self.motion_state_bundle.get_motion_states_ptr()
    }

    pub(crate) fn get_buffered_motion_states_ptr(&mut self) -> *mut std::ffi::c_void {
        if let Some(motion_state_bundle) = self.buffered_motion_state_bundle.as_mut() {
            motion_state_bundle.get_motion_states_ptr()
        } else {
            self.motion_state_bundle.get_motion_states_ptr()
        }
    }

    fn get_motion_states_mut(&mut self) -> &mut bind::motion_state::MotionStateBundle {
        &mut self.motion_state_bundle
    }

    fn get_buffered_motion_states_mut(&mut self) -> &mut bind::motion_state::MotionStateBundle {
        if let Some(motion_state_bundle) = self.buffered_motion_state_bundle.as_mut() {
            motion_state_bundle
        } else {
            &mut self.motion_state_bundle
        }
    }

    pub(super) fn init_buffered_motion_state(&mut self) {
        if self.buffered_motion_state_bundle.is_none() {
            let buffered_motion_state_bundle = bind::motion_state::MotionStateBundle::new(self.bodies.len());
            buffered_motion_state_bundle.copy_from(&self.motion_state_bundle);
            self.buffered_motion_state_bundle = Some(buffered_motion_state_bundle);
        }
    }

    pub(super) fn clear_buffered_motion_state(&mut self) {
        self.buffered_motion_state_bundle = None;
    }

    pub(super) fn sync_buffered_motion_state(&mut self) {
        if let Some(buffered_motion_state_bundle) = self.buffered_motion_state_bundle.as_mut() {
            buffered_motion_state_bundle.copy_from(&self.motion_state_bundle);
        }
    }

    pub(crate) fn set_damping(&mut self, index: usize, linear_damping: f32, angular_damping: f32) {
        self.bodies[index].set_damping(linear_damping, angular_damping);
    }

    pub(crate) fn get_linear_damping(&self, index: usize) -> f32 {
        self.bodies[index].get_linear_damping()
    }

    pub(crate) fn get_angular_damping(&self, index: usize) -> f32 {
        self.bodies[index].get_angular_damping()
    }

    pub(crate) fn set_mass_props(&mut self, index: usize, mass: f32, local_inertia: Vec3) {
        self.bodies[index].set_mass_props(mass, local_inertia);
    }

    pub(crate) fn get_mass(&self, index: usize) -> f32 {
        self.bodies[index].get_mass()
    }

    pub(crate) fn get_local_inertia(&self, index: usize) -> Vec3 {
        self.bodies[index].get_local_inertia()
    }

    pub(crate) fn get_total_force(&self, index: usize) -> Vec3 {
        self.bodies[index].get_total_force()
    }

    pub(crate) fn get_total_torque(&self, index: usize) -> Vec3 {
        self.bodies[index].get_total_torque()
    }

    pub(crate) fn apply_central_force(&mut self, index: usize, force: Vec3) {
        self.bodies[index].apply_central_force(force);
    }

    pub(crate) fn apply_torque(&mut self, index: usize, torque: Vec3) {
        self.bodies[index].apply_torque(torque);
    }

    pub(crate) fn apply_force(&mut self, index: usize, force: Vec3, relative_position: Vec3) {
        self.bodies[index].apply_force(force, relative_position);
    }

    pub(crate) fn apply_central_impulse(&mut self, index: usize, impulse: Vec3) {
        self.bodies[index].apply_central_impulse(impulse);
    }

    pub(crate) fn apply_torque_impulse(&mut self, index: usize, torque: Vec3) {
        self.bodies[index].apply_torque_impulse(torque);
    }

    pub(crate) fn apply_impulse(&mut self, index: usize, impulse: Vec3, relative_position: Vec3) {
        self.bodies[index].apply_impulse(impulse, relative_position);
    }

    pub(crate) fn apply_push_impulse(&mut self, index: usize, impulse: Vec3, relative_position: Vec3) {
        self.bodies[index].apply_push_impulse(impulse, relative_position);
    }

    pub(crate) fn get_push_velocity(&self, index: usize) -> Vec3 {
        self.bodies[index].get_push_velocity()
    }

    pub(crate) fn get_turn_velocity(&self, index: usize) -> Vec3 {
        self.bodies[index].get_turn_velocity()
    }

    pub(crate) fn set_push_velocity(&mut self, index: usize, velocity: Vec3) {
        self.bodies[index].set_push_velocity(velocity);
    }

    pub(crate) fn set_turn_velocity(&mut self, index: usize, velocity: Vec3) {
        self.bodies[index].set_turn_velocity(velocity);
    }

    pub(crate) fn apply_central_push_impulse(&mut self, index: usize, impulse: Vec3) {
        self.bodies[index].apply_central_push_impulse(impulse);
    }

    pub(crate) fn apply_torque_turn_impulse(&mut self, index: usize, torque: Vec3) {
        self.bodies[index].apply_torque_turn_impulse(torque);
    }

    pub(crate) fn clear_forces(&mut self, index: usize) {
        self.bodies[index].clear_forces();
    }

    pub(crate) fn get_linear_velocity(&self, index: usize) -> Vec3 {
        self.bodies[index].get_linear_velocity()
    }

    pub(crate) fn get_angular_velocity(&self, index: usize) -> Vec3 {
        self.bodies[index].get_angular_velocity()
    }

    pub(crate) fn set_linear_velocity(&mut self, index: usize, velocity: Vec3) {
        self.bodies[index].set_linear_velocity(velocity);
    }

    pub(crate) fn set_angular_velocity(&mut self, index: usize, velocity: Vec3) {
        self.bodies[index].set_angular_velocity(velocity);
    }

    pub(crate) fn get_velocity_in_local_point(&self, index: usize, relative_position: Vec3) -> Vec3 {
        self.bodies[index].get_velocity_in_local_point(relative_position)
    }

    pub(crate) fn get_push_velocity_in_local_point(&self, index: usize, relative_position: Vec3) -> Vec3 {
        self.bodies[index].get_push_velocity_in_local_point(relative_position)
    }

    pub(crate) fn translate(&mut self, index: usize, translation: Vec3) {
        self.bodies[index].translate(translation);
    }

    pub(crate) fn commit_transform(&mut self, index: usize) {
        self.bodies[index].commit_transform();
    }

    pub(crate) fn create_handle(&mut self) -> RigidBodyBundleHandle {
        RigidBodyBundleHandle::new(self)
    }
}

#[cfg(debug_assertions)]
impl Drop for RigidBodyBundle {
    fn drop(&mut self) {
        if 0 < self.ref_count {
            panic!("RigidBodyBundle still has references");
        }
    }
}

pub(crate) struct RigidBodyBundleHandle {
    bundle: &'static mut RigidBodyBundle,
}

impl RigidBodyBundleHandle {
    pub(crate) fn new(bundle: &mut RigidBodyBundle) -> Self {
        let bundle = unsafe {
            std::mem::transmute::<&mut RigidBodyBundle, &'static mut RigidBodyBundle>(bundle)
        };

        #[cfg(debug_assertions)]
        {
            bundle.ref_count += 1;
        }

        Self {
            bundle,
        }
    }

    pub(crate) fn get(&self) -> &RigidBodyBundle {
        self.bundle
    }

    pub(crate) fn get_mut(&mut self) -> &mut RigidBodyBundle {
        self.bundle
    }

    pub(crate) fn clone(&mut self) -> Self {
        Self::new(self.bundle)
    }

    pub(crate) fn create_shadow(&mut self, include_dynamic: bool) -> RigidBodyBundleShadow {
        RigidBodyBundleShadow::new(self.bundle, include_dynamic)
    }
}

#[cfg(debug_assertions)]
impl Drop for RigidBodyBundleHandle {
    fn drop(&mut self) {
        self.bundle.ref_count -= 1;
    }
}

impl PartialEq for RigidBodyBundleHandle {
    fn eq(&self, other: &Self) -> bool {
        std::ptr::eq(self.bundle as *const RigidBodyBundle, other.bundle as *const RigidBodyBundle)
    }
}

impl Eq for RigidBodyBundleHandle {}

pub(crate) struct RigidBodyBundleShadow {
    shadows: Box<[bind::rigidbody::RigidBodyShadow]>,
    handle: RigidBodyBundleHandle,
    include_dynamic: bool,
}

impl RigidBodyBundleShadow {
    pub(crate) fn new(bundle: &mut RigidBodyBundle, include_dynamic: bool) -> Self {
        let mut shadows = Vec::with_capacity(bundle.bodies.len());
        if include_dynamic {
            for i in 0..bundle.bodies.len() {
                let body: &mut bind::rigidbody::RigidBody = &mut bundle.bodies[i];
                let motion_state_ptr = if body.is_static_or_kinematic() {
                    bundle.get_motion_states_mut().get_nth_motion_state_ptr_mut(i)
                } else {
                    bundle.get_buffered_motion_states_mut().get_nth_motion_state_ptr_mut(i)
                };
                let body = &mut bundle.bodies[i];
                shadows.push(bind::rigidbody::RigidBodyShadow::new(body, motion_state_ptr));
            }
        } else {
            for i in 0..bundle.bodies.len() {
                let body: &mut bind::rigidbody::RigidBody = &mut bundle.bodies[i];
                if body.is_static_or_kinematic() {
                    let motion_state_ptr = bundle.get_buffered_motion_states_mut().get_nth_motion_state_ptr_mut(i);
                    let body = &mut bundle.bodies[i];
                    shadows.push(bind::rigidbody::RigidBodyShadow::new(body, motion_state_ptr));
                }
            }
        }

        Self {
            shadows: shadows.into_boxed_slice(),
            handle: bundle.create_handle(),
            include_dynamic,
        }
    }

    pub(super) fn shadows(&self) -> &[bind::rigidbody::RigidBodyShadow] {
        &self.shadows
    }

    pub(super) fn shadows_mut(&mut self) -> &mut [bind::rigidbody::RigidBodyShadow] {
        &mut self.shadows
    }
    
    pub(super) fn update_motion_state_bundle(&mut self) {
        if !self.include_dynamic {
            return;
        }

        let bundle = self.handle.get_mut();
        for i in 0..bundle.bodies().len() {
            let body = &bundle.bodies()[i];
            if !body.is_static_or_kinematic() {
                let buffered_motion_states = bundle.get_buffered_motion_states_mut();
                let motion_state = buffered_motion_states.get_nth_motion_state_ptr_mut(i);
                self.shadows[i].set_motion_state(motion_state);
            }
        }
    }

    pub(super) fn handle(&self) -> &RigidBodyBundleHandle {
        &self.handle
    }

    pub(super) fn handle_mut(&mut self) -> &mut RigidBodyBundleHandle {
        &mut self.handle
    }
}

#[wasm_bindgen(js_name = "createRigidBody")]
pub fn create_rigidbody(info: *mut usize) -> *mut usize {
    let info = unsafe { &mut *(info as *mut RigidBodyConstructionInfo) };
    let rigidbody = RigidBody::new(info);
    let rigidbody = Box::new(rigidbody);
    Box::into_raw(rigidbody) as *mut usize
}

#[wasm_bindgen(js_name = "destroyRigidBody")]
pub fn destroy_rigidbody(ptr: *mut usize) {
    unsafe {
        let _ = Box::from_raw(ptr as *mut RigidBody);
    }
}

#[wasm_bindgen(js_name = "rigidBodyGetMotionStatePtr")]
pub fn rigidbody_get_motion_state_ptr(ptr: *mut usize) -> *mut usize {
    let rigidbody = unsafe { &mut *(ptr as *mut RigidBody) };
    rigidbody.get_motion_state_ptr() as *mut usize
}

#[wasm_bindgen(js_name = "rigidBodyGetBufferedMotionStatePtr")]
pub fn rigidbody_get_buffered_motion_state_ptr(ptr: *mut usize) -> *mut usize {
    let rigidbody = unsafe { &mut *(ptr as *mut RigidBody) };
    rigidbody.get_buffered_motion_state_ptr() as *mut usize
}

#[wasm_bindgen(js_name = "rigidBodySetDamping")]
pub fn rigidbody_set_damping(ptr: *mut usize, linear_damping: f32, angular_damping: f32) {
    let rigidbody = unsafe { &mut *(ptr as *mut RigidBody) };
    rigidbody.set_damping(linear_damping, angular_damping);
}

#[wasm_bindgen(js_name = "rigidBodyGetLinearDamping")]
pub fn rigidbody_get_linear_damping(ptr: *mut usize) -> f32 {
    let rigidbody = unsafe { &mut *(ptr as *mut RigidBody) };
    rigidbody.get_linear_damping()
}

#[wasm_bindgen(js_name = "rigidBodyGetAngularDamping")]
pub fn rigidbody_get_angular_damping(ptr: *mut usize) -> f32 {
    let rigidbody = unsafe { &mut *(ptr as *mut RigidBody) };
    rigidbody.get_angular_damping()
}

#[wasm_bindgen(js_name = "rigidBodySetMassProps")]
pub fn rigidbody_set_mass_props(ptr: *mut usize, mass: f32, local_inertia_x: f32, local_inertia_y: f32, local_inertia_z: f32) {
    let rigidbody = unsafe { &mut *(ptr as *mut RigidBody) };
    let local_inertia = Vec3::new(local_inertia_x, local_inertia_y, local_inertia_z);
    rigidbody.set_mass_props(mass, local_inertia);
}

#[wasm_bindgen(js_name = "rigidBodyGetMass")]
pub fn rigidbody_get_mass(ptr: *mut usize) -> f32 {
    let rigidbody = unsafe { &mut *(ptr as *mut RigidBody) };
    rigidbody.get_mass()
}

#[wasm_bindgen(js_name = "rigidBodyGetLocalInertia")]
pub fn rigidbody_get_local_inertia(ptr: *mut usize, out: *mut f32) {
    let rigidbody = unsafe { &mut *(ptr as *mut RigidBody) };
    let local_inertia = rigidbody.get_local_inertia();
    let out = unsafe { &mut *(out as *mut [f32; 3]) };
    out[0] = local_inertia.x;
    out[1] = local_inertia.y;
    out[2] = local_inertia.z;
}

#[wasm_bindgen(js_name = "rigidBodyGetTotalForce")]
pub fn rigidbody_get_total_force(ptr: *mut usize, out: *mut f32) {
    let rigidbody = unsafe { &mut *(ptr as *mut RigidBody) };
    let force = rigidbody.get_total_force();
    let out = unsafe { &mut *(out as *mut [f32; 3]) };
    out[0] = force.x;
    out[1] = force.y;
    out[2] = force.z;
}

#[wasm_bindgen(js_name = "rigidBodyGetTotalTorque")]
pub fn rigidbody_get_total_torque(ptr: *mut usize, out: *mut f32) {
    let rigidbody = unsafe { &mut *(ptr as *mut RigidBody) };
    let torque = rigidbody.get_total_torque();
    let out = unsafe { &mut *(out as *mut [f32; 3]) };
    out[0] = torque.x;
    out[1] = torque.y;
    out[2] = torque.z;
}

#[wasm_bindgen(js_name = "rigidBodyApplyCentralForce")]
pub fn rigidbody_apply_central_force(ptr: *mut usize, force_x: f32, force_y: f32, force_z: f32) {
    let rigidbody = unsafe { &mut *(ptr as *mut RigidBody) };
    let force = Vec3::new(force_x, force_y, force_z);
    rigidbody.apply_central_force(force);
}

#[wasm_bindgen(js_name = "rigidBodyApplyTorque")]
pub fn rigidbody_apply_torque(ptr: *mut usize, torque_x: f32, torque_y: f32, torque_z: f32) {
    let rigidbody = unsafe { &mut *(ptr as *mut RigidBody) };
    let torque = Vec3::new(torque_x, torque_y, torque_z);
    rigidbody.apply_torque(torque);
}

#[wasm_bindgen(js_name = "rigidBodyApplyForce")]
pub fn rigidbody_apply_force(ptr: *mut usize, force_ptr: *mut usize, relative_position_ptr: *mut usize) {
    let rigidbody = unsafe { &mut *(ptr as *mut RigidBody) };
    let force = unsafe { *(force_ptr as *mut Vec3) };
    let relative_position = unsafe { *(relative_position_ptr as *mut Vec3) };
    rigidbody.apply_force(force, relative_position);
}

#[wasm_bindgen(js_name = "rigidBodyApplyCentralImpulse")]
pub fn rigidbody_apply_central_impulse(ptr: *mut usize, impulse_x: f32, impulse_y: f32, impulse_z: f32) {
    let rigidbody = unsafe { &mut *(ptr as *mut RigidBody) };
    let impulse = Vec3::new(impulse_x, impulse_y, impulse_z);
    rigidbody.apply_central_impulse(impulse);
}

#[wasm_bindgen(js_name = "rigidBodyApplyTorqueImpulse")]
pub fn rigidbody_apply_torque_impulse(ptr: *mut usize, torque_x: f32, torque_y: f32, torque_z: f32) {
    let rigidbody = unsafe { &mut *(ptr as *mut RigidBody) };
    let torque = Vec3::new(torque_x, torque_y, torque_z);
    rigidbody.apply_torque_impulse(torque);
}

#[wasm_bindgen(js_name = "rigidBodyApplyImpulse")]
pub fn rigidbody_apply_impulse(ptr: *mut usize, impulse_ptr: *mut usize, relative_position_ptr: *mut usize) {
    let rigidbody = unsafe { &mut *(ptr as *mut RigidBody) };
    let impulse = unsafe { *(impulse_ptr as *mut Vec3) };
    let relative_position = unsafe { *(relative_position_ptr as *mut Vec3) };
    rigidbody.apply_impulse(impulse, relative_position);
}

#[wasm_bindgen(js_name = "rigidBodyApplyPushImpulse")]
pub fn rigidbody_apply_push_impulse(ptr: *mut usize, impulse_ptr: *mut usize, relative_position_ptr: *mut usize) {
    let rigidbody = unsafe { &mut *(ptr as *mut RigidBody) };
    let impulse = unsafe { *(impulse_ptr as *mut Vec3) };
    let relative_position = unsafe { *(relative_position_ptr as *mut Vec3) };
    rigidbody.apply_push_impulse(impulse, relative_position);
}

#[wasm_bindgen(js_name = "rigidBodyGetPushVelocity")]
pub fn rigidbody_get_push_velocity(ptr: *mut usize, out: *mut f32) {
    let rigidbody = unsafe { &mut *(ptr as *mut RigidBody) };
    let velocity = rigidbody.get_push_velocity();
    let out = unsafe { &mut *(out as *mut [f32; 3]) };
    out[0] = velocity.x;
    out[1] = velocity.y;
    out[2] = velocity.z;
}

#[wasm_bindgen(js_name = "rigidBodyGetTurnVelocity")]
pub fn rigidbody_get_turn_velocity(ptr: *mut usize, out: *mut f32) {
    let rigidbody = unsafe { &mut *(ptr as *mut RigidBody) };
    let velocity = rigidbody.get_turn_velocity();
    let out = unsafe { &mut *(out as *mut [f32; 3]) };
    out[0] = velocity.x;
    out[1] = velocity.y;
    out[2] = velocity.z;
}

#[wasm_bindgen(js_name = "rigidBodySetPushVelocity")]
pub fn rigidbody_set_push_velocity(ptr: *mut usize, velocity_x: f32, velocity_y: f32, velocity_z: f32) {
    let rigidbody = unsafe { &mut *(ptr as *mut RigidBody) };
    let velocity = Vec3::new(velocity_x, velocity_y, velocity_z);
    rigidbody.set_push_velocity(velocity);
}

#[wasm_bindgen(js_name = "rigidBodySetTurnVelocity")]
pub fn rigidbody_set_turn_velocity(ptr: *mut usize, velocity_x: f32, velocity_y: f32, velocity_z: f32) {
    let rigidbody = unsafe { &mut *(ptr as *mut RigidBody) };
    let velocity = Vec3::new(velocity_x, velocity_y, velocity_z);
    rigidbody.set_turn_velocity(velocity);
}

#[wasm_bindgen(js_name = "rigidBodyApplyCentralPushImpulse")]
pub fn rigidbody_apply_central_push_impulse(ptr: *mut usize, impulse_x: f32, impulse_y: f32, impulse_z: f32) {
    let rigidbody = unsafe { &mut *(ptr as *mut RigidBody) };
    let impulse = Vec3::new(impulse_x, impulse_y, impulse_z);
    rigidbody.apply_central_push_impulse(impulse);
}

#[wasm_bindgen(js_name = "rigidBodyApplyTorqueTurnImpulse")]
pub fn rigidbody_apply_torque_turn_impulse(ptr: *mut usize, torque_x: f32, torque_y: f32, torque_z: f32) {
    let rigidbody = unsafe { &mut *(ptr as *mut RigidBody) };
    let torque = Vec3::new(torque_x, torque_y, torque_z);
    rigidbody.apply_torque_turn_impulse(torque);
}

#[wasm_bindgen(js_name = "rigidBodyClearForces")]
pub fn rigidbody_clear_forces(ptr: *mut usize) {
    let rigidbody = unsafe { &mut *(ptr as *mut RigidBody) };
    rigidbody.clear_forces();
}

#[wasm_bindgen(js_name = "rigidBodyGetLinearVelocity")]
pub fn rigidbody_get_linear_velocity(ptr: *mut usize, out: *mut f32) {
    let rigidbody = unsafe { &mut *(ptr as *mut RigidBody) };
    let velocity = rigidbody.get_linear_velocity();
    let out = unsafe { &mut *(out as *mut [f32; 3]) };
    out[0] = velocity.x;
    out[1] = velocity.y;
    out[2] = velocity.z;
}

#[wasm_bindgen(js_name = "rigidBodyGetAngularVelocity")]
pub fn rigidbody_get_angular_velocity(ptr: *mut usize, out: *mut f32) {
    let rigidbody = unsafe { &mut *(ptr as *mut RigidBody) };
    let velocity = rigidbody.get_angular_velocity();
    let out = unsafe { &mut *(out as *mut [f32; 3]) };
    out[0] = velocity.x;
    out[1] = velocity.y;
    out[2] = velocity.z;
}

#[wasm_bindgen(js_name = "rigidBodySetLinearVelocity")]
pub fn rigidbody_set_linear_velocity(ptr: *mut usize, velocity_x: f32, velocity_y: f32, velocity_z: f32) {
    let rigidbody = unsafe { &mut *(ptr as *mut RigidBody) };
    let velocity = Vec3::new(velocity_x, velocity_y, velocity_z);
    rigidbody.set_linear_velocity(velocity);
}

#[wasm_bindgen(js_name = "rigidBodySetAngularVelocity")]
pub fn rigidbody_set_angular_velocity(ptr: *mut usize, velocity_x: f32, velocity_y: f32, velocity_z: f32) {
    let rigidbody = unsafe { &mut *(ptr as *mut RigidBody) };
    let velocity = Vec3::new(velocity_x, velocity_y, velocity_z);
    rigidbody.set_angular_velocity(velocity);
}

#[wasm_bindgen(js_name = "rigidBodyGetVelocityInLocalPoint")]
pub fn rigidbody_get_velocity_in_local_point(ptr: *mut usize, relative_position_ptr: *mut usize, out: *mut f32) {
    let rigidbody = unsafe { &mut *(ptr as *mut RigidBody) };
    let relative_position = unsafe { *(relative_position_ptr as *mut Vec3) };
    let velocity = rigidbody.get_velocity_in_local_point(relative_position);
    let out = unsafe { &mut *(out as *mut [f32; 3]) };
    out[0] = velocity.x;
    out[1] = velocity.y;
    out[2] = velocity.z;
}

#[wasm_bindgen(js_name = "rigidBodyGetPushVelocityInLocalPoint")]
pub fn rigidbody_get_push_velocity_in_local_point(ptr: *mut usize, relative_position_ptr: *mut usize, out: *mut f32) {
    let rigidbody = unsafe { &mut *(ptr as *mut RigidBody) };
    let relative_position = unsafe { *(relative_position_ptr as *mut Vec3) };
    let velocity = rigidbody.get_push_velocity_in_local_point(relative_position);
    let out = unsafe { &mut *(out as *mut [f32; 3]) };
    out[0] = velocity.x;
    out[1] = velocity.y;
    out[2] = velocity.z;
}

#[wasm_bindgen(js_name = "rigidBodyTranslate")]
pub fn rigidbody_translate(ptr: *mut usize, translation_x: f32, translation_y: f32, translation_z: f32) {
    let rigidbody = unsafe { &mut *(ptr as *mut RigidBody) };
    let translation = Vec3::new(translation_x, translation_y, translation_z);
    rigidbody.translate(translation);
}

#[wasm_bindgen(js_name = "rigidBodyCommitTransform")]
pub fn rigidbody_commit_transform(ptr: *mut usize) {
    let rigidbody = unsafe { &mut *(ptr as *mut RigidBody) };
    rigidbody.commit_transform();
}

#[wasm_bindgen(js_name = "createRigidBodyBundle")]
pub fn create_rigidbody_bundle(info_list: *mut usize, len: usize) -> *mut usize {
    let info_list = unsafe { std::slice::from_raw_parts_mut(info_list as *mut RigidBodyConstructionInfo, len) };
    let bundle = RigidBodyBundle::new(info_list);
    let bundle = Box::new(bundle);
    Box::into_raw(bundle) as *mut usize
}

#[wasm_bindgen(js_name = "destroyRigidBodyBundle")]
pub fn destroy_rigidbody_bundle(ptr: *mut usize) {
    unsafe {
        let _ = Box::from_raw(ptr as *mut RigidBodyBundle);
    }
}

#[wasm_bindgen(js_name = "rigidBodyBundleGetMotionStatesPtr")]
pub fn rigid_body_bundle_get_motion_states_ptr(ptr: *mut usize) -> *mut usize {
    let bundle = unsafe { &mut *(ptr as *mut RigidBodyBundle) };
    bundle.get_motion_states_ptr() as *mut usize
}

#[wasm_bindgen(js_name = "rigidBodyBundleGetBufferedMotionStatesPtr")]
pub fn rigid_body_bundle_get_buffered_motion_states_ptr(ptr: *mut usize) -> *mut usize {
    let bundle = unsafe { &mut *(ptr as *mut RigidBodyBundle) };
    bundle.get_buffered_motion_states_ptr() as *mut usize
}

#[wasm_bindgen(js_name = "rigidBodyBundleSetDamping")]
pub fn rigid_body_bundle_set_damping(ptr: *mut usize, index: usize, linear_damping: f32, angular_damping: f32) {
    let bundle = unsafe { &mut *(ptr as *mut RigidBodyBundle) };
    bundle.set_damping(index, linear_damping, angular_damping);
}

#[wasm_bindgen(js_name = "rigidBodyBundleGetLinearDamping")]
pub fn rigid_body_bundle_get_linear_damping(ptr: *mut usize, index: usize) -> f32 {
    let bundle = unsafe { &mut *(ptr as *mut RigidBodyBundle) };
    bundle.get_linear_damping(index)
}

#[wasm_bindgen(js_name = "rigidBodyBundleGetAngularDamping")]
pub fn rigid_body_bundle_get_angular_damping(ptr: *mut usize, index: usize) -> f32 {
    let bundle = unsafe { &mut *(ptr as *mut RigidBodyBundle) };
    bundle.get_angular_damping(index)
}

#[wasm_bindgen(js_name = "rigidBodyBundleSetMassProps")]
pub fn rigid_body_bundle_set_mass_props(ptr: *mut usize, index: usize, mass: f32, local_inertia_x: f32, local_inertia_y: f32, local_inertia_z: f32) {
    let bundle = unsafe { &mut *(ptr as *mut RigidBodyBundle) };
    let local_inertia = Vec3::new(local_inertia_x, local_inertia_y, local_inertia_z);
    bundle.set_mass_props(index, mass, local_inertia);
}

#[wasm_bindgen(js_name = "rigidBodyBundleGetMass")]
pub fn rigid_body_bundle_get_mass(ptr: *mut usize, index: usize) -> f32 {
    let bundle = unsafe { &mut *(ptr as *mut RigidBodyBundle) };
    bundle.get_mass(index)
}

#[wasm_bindgen(js_name = "rigidBodyBundleGetLocalInertia")]
pub fn rigid_body_bundle_get_local_inertia(ptr: *mut usize, index: usize, out: *mut f32) {
    let bundle = unsafe { &mut *(ptr as *mut RigidBodyBundle) };
    let local_inertia = bundle.get_local_inertia(index);
    let out = unsafe { &mut *(out as *mut [f32; 3]) };
    out[0] = local_inertia.x;
    out[1] = local_inertia.y;
    out[2] = local_inertia.z;
}

#[wasm_bindgen(js_name = "rigidBodyBundleGetTotalForce")]
pub fn rigid_body_bundle_get_total_force(ptr: *mut usize, index: usize, out: *mut f32) {
    let bundle = unsafe { &mut *(ptr as *mut RigidBodyBundle) };
    let force = bundle.get_total_force(index);
    let out = unsafe { &mut *(out as *mut [f32; 3]) };
    out[0] = force.x;
    out[1] = force.y;
    out[2] = force.z;
}

#[wasm_bindgen(js_name = "rigidBodyBundleGetTotalTorque")]
pub fn rigid_body_bundle_get_total_torque(ptr: *mut usize, index: usize, out: *mut f32) {
    let bundle = unsafe { &mut *(ptr as *mut RigidBodyBundle) };
    let torque = bundle.get_total_torque(index);
    let out = unsafe { &mut *(out as *mut [f32; 3]) };
    out[0] = torque.x;
    out[1] = torque.y;
    out[2] = torque.z;
}

#[wasm_bindgen(js_name = "rigidBodyBundleApplyCentralForce")]
pub fn rigid_body_bundle_apply_central_force(ptr: *mut usize, index: usize, force_x: f32, force_y: f32, force_z: f32) {
    let bundle = unsafe { &mut *(ptr as *mut RigidBodyBundle) };
    let force = Vec3::new(force_x, force_y, force_z);
    bundle.apply_central_force(index, force);
}

#[wasm_bindgen(js_name = "rigidBodyBundleApplyTorque")]
pub fn rigid_body_bundle_apply_torque(ptr: *mut usize, index: usize, torque_x: f32, torque_y: f32, torque_z: f32) {
    let bundle = unsafe { &mut *(ptr as *mut RigidBodyBundle) };
    let torque = Vec3::new(torque_x, torque_y, torque_z);
    bundle.apply_torque(index, torque);
}

#[wasm_bindgen(js_name = "rigidBodyBundleApplyForce")]
pub fn rigid_body_bundle_apply_force(ptr: *mut usize, index: usize, force_ptr: *mut usize, relative_position_ptr: *mut usize) {
    let bundle = unsafe { &mut *(ptr as *mut RigidBodyBundle) };
    let force = unsafe { *(force_ptr as *mut Vec3) };
    let relative_position = unsafe { *(relative_position_ptr as *mut Vec3) };
    bundle.apply_force(index, force, relative_position);
}

#[wasm_bindgen(js_name = "rigidBodyBundleApplyCentralImpulse")]
pub fn rigid_body_bundle_apply_central_impulse(ptr: *mut usize, index: usize, impulse_x: f32, impulse_y: f32, impulse_z: f32) {
    let bundle = unsafe { &mut *(ptr as *mut RigidBodyBundle) };
    let impulse = Vec3::new(impulse_x, impulse_y, impulse_z);
    bundle.apply_central_impulse(index, impulse);
}

#[wasm_bindgen(js_name = "rigidBodyBundleApplyTorqueImpulse")]
pub fn rigid_body_bundle_apply_torque_impulse(ptr: *mut usize, index: usize, torque_x: f32, torque_y: f32, torque_z: f32) {
    let bundle = unsafe { &mut *(ptr as *mut RigidBodyBundle) };
    let torque = Vec3::new(torque_x, torque_y, torque_z);
    bundle.apply_torque_impulse(index, torque);
}

#[wasm_bindgen(js_name = "rigidBodyBundleApplyImpulse")]
pub fn rigid_body_bundle_apply_impulse(ptr: *mut usize, index: usize, impulse_ptr: *mut usize, relative_position_ptr: *mut usize) {
    let bundle = unsafe { &mut *(ptr as *mut RigidBodyBundle) };
    let impulse = unsafe { *(impulse_ptr as *mut Vec3) };
    let relative_position = unsafe { *(relative_position_ptr as *mut Vec3) };
    bundle.apply_impulse(index, impulse, relative_position);
}

#[wasm_bindgen(js_name = "rigidBodyBundleApplyPushImpulse")]
pub fn rigid_body_bundle_apply_push_impulse(ptr: *mut usize, index: usize, impulse_ptr: *mut usize, relative_position_ptr: *mut usize) {
    let bundle = unsafe { &mut *(ptr as *mut RigidBodyBundle) };
    let impulse = unsafe { *(impulse_ptr as *mut Vec3) };
    let relative_position = unsafe { *(relative_position_ptr as *mut Vec3) };
    bundle.apply_push_impulse(index, impulse, relative_position);
}

#[wasm_bindgen(js_name = "rigidBodyBundleGetPushVelocity")]
pub fn rigid_body_bundle_get_push_velocity(ptr: *mut usize, index: usize, out: *mut f32) {
    let bundle = unsafe { &mut *(ptr as *mut RigidBodyBundle) };
    let velocity = bundle.get_push_velocity(index);
    let out = unsafe { &mut *(out as *mut [f32; 3]) };
    out[0] = velocity.x;
    out[1] = velocity.y;
    out[2] = velocity.z;
}

#[wasm_bindgen(js_name = "rigidBodyBundleGetTurnVelocity")]
pub fn rigid_body_bundle_get_turn_velocity(ptr: *mut usize, index: usize, out: *mut f32) {
    let bundle = unsafe { &mut *(ptr as *mut RigidBodyBundle) };
    let velocity = bundle.get_turn_velocity(index);
    let out = unsafe { &mut *(out as *mut [f32; 3]) };
    out[0] = velocity.x;
    out[1] = velocity.y;
    out[2] = velocity.z;
}

#[wasm_bindgen(js_name = "rigidBodyBundleSetPushVelocity")]
pub fn rigid_body_bundle_set_push_velocity(ptr: *mut usize, index: usize, velocity_x: f32, velocity_y: f32, velocity_z: f32) {
    let bundle = unsafe { &mut *(ptr as *mut RigidBodyBundle) };
    let velocity = Vec3::new(velocity_x, velocity_y, velocity_z);
    bundle.set_push_velocity(index, velocity);
}

#[wasm_bindgen(js_name = "rigidBodyBundleSetTurnVelocity")]
pub fn rigid_body_bundle_set_turn_velocity(ptr: *mut usize, index: usize, velocity_x: f32, velocity_y: f32, velocity_z: f32) {
    let bundle = unsafe { &mut *(ptr as *mut RigidBodyBundle) };
    let velocity = Vec3::new(velocity_x, velocity_y, velocity_z);
    bundle.set_turn_velocity(index, velocity);
}

#[wasm_bindgen(js_name = "rigidBodyBundleApplyCentralPushImpulse")]
pub fn rigid_body_bundle_apply_central_push_impulse(ptr: *mut usize, index: usize, impulse_x: f32, impulse_y: f32, impulse_z: f32) {
    let bundle = unsafe { &mut *(ptr as *mut RigidBodyBundle) };
    let impulse = Vec3::new(impulse_x, impulse_y, impulse_z);
    bundle.apply_central_push_impulse(index, impulse);
}

#[wasm_bindgen(js_name = "rigidBodyBundleApplyTorqueTurnImpulse")]
pub fn rigid_body_bundle_apply_torque_turn_impulse(ptr: *mut usize, index: usize, torque_x: f32, torque_y: f32, torque_z: f32) {
    let bundle = unsafe { &mut *(ptr as *mut RigidBodyBundle) };
    let torque = Vec3::new(torque_x, torque_y, torque_z);
    bundle.apply_torque_turn_impulse(index, torque);
}

#[wasm_bindgen(js_name = "rigidBodyBundleClearForces")]
pub fn rigid_body_bundle_clear_forces(ptr: *mut usize, index: usize) {
    let bundle = unsafe { &mut *(ptr as *mut RigidBodyBundle) };
    bundle.clear_forces(index);
}

#[wasm_bindgen(js_name = "rigidBodyBundleGetLinearVelocity")]
pub fn rigid_body_bundle_get_linear_velocity(ptr: *mut usize, index: usize, out: *mut f32) {
    let bundle = unsafe { &mut *(ptr as *mut RigidBodyBundle) };
    let velocity = bundle.get_linear_velocity(index);
    let out = unsafe { &mut *(out as *mut [f32; 3]) };
    out[0] = velocity.x;
    out[1] = velocity.y;
    out[2] = velocity.z;
}

#[wasm_bindgen(js_name = "rigidBodyBundleGetAngularVelocity")]
pub fn rigid_body_bundle_get_angular_velocity(ptr: *mut usize, index: usize, out: *mut f32) {
    let bundle = unsafe { &mut *(ptr as *mut RigidBodyBundle) };
    let velocity = bundle.get_angular_velocity(index);
    let out = unsafe { &mut *(out as *mut [f32; 3]) };
    out[0] = velocity.x;
    out[1] = velocity.y;
    out[2] = velocity.z;
}

#[wasm_bindgen(js_name = "rigidBodyBundleSetLinearVelocity")]
pub fn rigid_body_bundle_set_linear_velocity(ptr: *mut usize, index: usize, velocity_x: f32, velocity_y: f32, velocity_z: f32) {
    let bundle = unsafe { &mut *(ptr as *mut RigidBodyBundle) };
    let velocity = Vec3::new(velocity_x, velocity_y, velocity_z);
    bundle.set_linear_velocity(index, velocity);
}

#[wasm_bindgen(js_name = "rigidBodyBundleSetAngularVelocity")]
pub fn rigid_body_bundle_set_angular_velocity(ptr: *mut usize, index: usize, velocity_x: f32, velocity_y: f32, velocity_z: f32) {
    let bundle = unsafe { &mut *(ptr as *mut RigidBodyBundle) };
    let velocity = Vec3::new(velocity_x, velocity_y, velocity_z);
    bundle.set_angular_velocity(index, velocity);
}

#[wasm_bindgen(js_name = "rigidBodyBundleGetVelocityInLocalPoint")]
pub fn rigid_body_bundle_get_velocity_in_local_point(ptr: *mut usize, index: usize, relative_position_ptr: *mut usize, out: *mut f32) {
    let bundle = unsafe { &mut *(ptr as *mut RigidBodyBundle) };
    let relative_position = unsafe { *(relative_position_ptr as *mut Vec3) };
    let velocity = bundle.get_velocity_in_local_point(index, relative_position);
    let out = unsafe { &mut *(out as *mut [f32; 3]) };
    out[0] = velocity.x;
    out[1] = velocity.y;
    out[2] = velocity.z;
}

#[wasm_bindgen(js_name = "rigidBodyBundleGetPushVelocityInLocalPoint")]
pub fn rigid_body_bundle_get_push_velocity_in_local_point(ptr: *mut usize, index: usize, relative_position_ptr: *mut usize, out: *mut f32) {
    let bundle = unsafe { &mut *(ptr as *mut RigidBodyBundle) };
    let relative_position = unsafe { *(relative_position_ptr as *mut Vec3) };
    let velocity = bundle.get_push_velocity_in_local_point(index, relative_position);
    let out = unsafe { &mut *(out as *mut [f32; 3]) };
    out[0] = velocity.x;
    out[1] = velocity.y;
    out[2] = velocity.z;
}

#[wasm_bindgen(js_name = "rigidBodyBundleTranslate")]
pub fn rigid_body_bundle_translate(ptr: *mut usize, index: usize, translation_x: f32, translation_y: f32, translation_z: f32) {
    let bundle = unsafe { &mut *(ptr as *mut RigidBodyBundle) };
    let translation = Vec3::new(translation_x, translation_y, translation_z);
    bundle.translate(index, translation);
}

#[wasm_bindgen(js_name = "rigidBodyBundleCommitTransform")]
pub fn rigid_body_bundle_commit_transform(ptr: *mut usize, index: usize) {
    let bundle = unsafe { &mut *(ptr as *mut RigidBodyBundle) };
    bundle.commit_transform(index);
}
