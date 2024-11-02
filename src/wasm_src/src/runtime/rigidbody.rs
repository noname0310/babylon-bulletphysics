use glam::Mat4;
use wasm_bindgen::prelude::*;

use crate::bind;

#[repr(C)]
pub(crate) struct RigidBodyConstructionInfo<'a> {
    // for shape
    pub(crate) shape: &'a bind::collision_shape::CollisionShape,
    
    // for motion state
    pub(crate) initial_transform: Mat4,

    // for rigid body
    pub(crate) motion_type: u8,
    pub(crate) mass: f32,
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
    // shape: &'static bind::collision_shape::CollisionShape,
}

impl RigidBody {
    pub(crate) fn new(
        info: &RigidBodyConstructionInfo
    ) -> Self {
        let motion_state = bind::motion_state::MotionState::new(&info.initial_transform);

        // let shape = info.shape;
        let info = bind::rigidbody::RigidBodyConstructionInfo::from_runtime_info(
            &info,
            &motion_state
        );
        let inner = bind::rigidbody::RigidBody::new(&info);
        Self {
            inner,
            motion_state,
            // shape,
        }
    }

    // pub(super) fn get_inner(&self) -> &bind::rigidbody::RigidBody {
    //     &self.inner
    // }

    pub(super) fn get_inner_mut(&mut self) -> &mut bind::rigidbody::RigidBody {
        &mut self.inner
    }

    pub(crate) fn make_kinematic(&mut self) {
        self.inner.make_kinematic();
    }

    pub(crate) fn restore_dynamic(&mut self) {
        self.inner.restore_dynamic();
    }
}

pub(crate) struct RigidBodyBundle {
    bodies: Box<[bind::rigidbody::RigidBody]>,
    motion_state_bundle: bind::motion_state::MotionStateBundle,
}

impl RigidBodyBundle {
    pub(crate) fn new(info_list: &[RigidBodyConstructionInfo]) -> Self {
        let mut bodies = Vec::with_capacity(info_list.len());
        let mut motion_state_bundle = bind::motion_state::MotionStateBundle::new(info_list.len());
        for i in 0..info_list.len() {
            let info = &info_list[i];
            motion_state_bundle.set_transform(i, &info.initial_transform);
            let info = bind::rigidbody::RigidBodyConstructionInfo::from_runtime_info_raw(
                &info,
                motion_state_bundle.get_nth_motion_state_ptr(i)
            );
            let body = bind::rigidbody::RigidBody::new(&info);
            bodies.push(body);
        }
        Self {
            bodies: bodies.into_boxed_slice(),
            motion_state_bundle,
        }
    }

    pub(crate) fn make_kinematic(&mut self, index: usize) {
        self.bodies[index].make_kinematic();
    }

    pub(crate) fn restore_dynamic(&mut self, index: usize) {
        self.bodies[index].restore_dynamic();
    }
}

#[wasm_bindgen(js_name = "createRigidBody")]
pub fn create_rigidbody(info: *const usize) -> *mut usize {
    let info = unsafe { &*(info as *const RigidBodyConstructionInfo) };
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

#[wasm_bindgen(js_name = "rigidBodyMakeKinematic")]
pub fn make_kinematic(ptr: *mut usize) {
    let rigidbody = unsafe { &mut *(ptr as *mut RigidBody) };
    rigidbody.make_kinematic();
}

#[wasm_bindgen(js_name = "rigidBodyRestoreDynamic")]
pub fn restore_dynamic(ptr: *mut usize) {
    let rigidbody = unsafe { &mut *(ptr as *mut RigidBody) };
    rigidbody.restore_dynamic();
}

#[wasm_bindgen(js_name = "createRigidBodyBundle")]
pub fn create_rigidbody_bundle(info_list: *const usize, len: usize) -> *mut usize {
    let info_list = unsafe { std::slice::from_raw_parts(info_list as *const RigidBodyConstructionInfo, len) };
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

#[wasm_bindgen(js_name = "rigidBodyBundleMakeKinematic")]
pub fn rigid_body_bundle_make_kinematic(ptr: *mut usize, index: usize) {
    let bundle = unsafe { &mut *(ptr as *mut RigidBodyBundle) };
    bundle.make_kinematic(index);
}

#[wasm_bindgen(js_name = "rigidBodyBundleRestoreDynamic")]
pub fn rigid_body_bundle_restore_dynamic(ptr: *mut usize, index: usize) {
    let bundle = unsafe { &mut *(ptr as *mut RigidBodyBundle) };
    bundle.restore_dynamic(index);
}
