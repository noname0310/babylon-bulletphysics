use glam::Mat4;
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

    pub(crate) fn make_kinematic(&mut self) {
        self.inner.make_kinematic();
    }

    pub(crate) fn restore_dynamic(&mut self) {
        self.inner.restore_dynamic();
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
    #[cfg(debug_assertions)]
    #[allow(dead_code)]
    body_handle: RigidBodyHandle,
}

impl RigidBodyShadow {
    pub(super) fn new(rigidbody: &mut RigidBody) -> Self {
        if !rigidbody.get_inner().is_static_or_kinematic() {
            panic!("Cannot create shadow for dynamic rigidbody");
        }

        let inner = bind::rigidbody::RigidBodyShadow::new(rigidbody.get_inner_mut());

        #[cfg(debug_assertions)]
        let body_handle = rigidbody.create_handle();

        Self {
            inner,
            #[cfg(debug_assertions)]
            body_handle,
        }
    }

    pub(super) fn get_inner(&self) -> &bind::rigidbody::RigidBodyShadow {
        &self.inner
    }

    pub(super) fn get_inner_mut(&mut self) -> &mut bind::rigidbody::RigidBodyShadow {
        &mut self.inner
    }
}

pub(crate) struct RigidBodyBundle {
    bodies: Box<[bind::rigidbody::RigidBody]>,
    motion_state_bundle: bind::motion_state::MotionStateBundle,
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
                motion_state_bundle.get_nth_motion_state_ptr(i)
            );
            let body = bind::rigidbody::RigidBody::new(&info);
            bodies.push(body);
        }
        Self {
            bodies: bodies.into_boxed_slice(),
            motion_state_bundle,
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

    pub(crate) fn make_kinematic(&mut self, index: usize) {
        self.bodies[index].make_kinematic();
    }

    pub(crate) fn restore_dynamic(&mut self, index: usize) {
        self.bodies[index].restore_dynamic();
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

    pub(crate) fn create_shadow(&mut self) -> RigidBodyBundleShadow {
        RigidBodyBundleShadow::new(self.bundle)
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
    #[cfg(debug_assertions)]
    #[allow(dead_code)]
    bundle_handle: RigidBodyBundleHandle,
}

impl RigidBodyBundleShadow {
    pub(crate) fn new(bundle: &mut RigidBodyBundle) -> Self {
        let mut shadows = Vec::with_capacity(bundle.bodies.len());
        for body in bundle.bodies.iter_mut() {
            if body.is_static_or_kinematic() {
                shadows.push(bind::rigidbody::RigidBodyShadow::new(body));
            }
        }

        Self {
            shadows: shadows.into_boxed_slice(),
            #[cfg(debug_assertions)]
            bundle_handle: bundle.create_handle(),
        }
    }

    pub(super) fn shadows(&self) -> &[bind::rigidbody::RigidBodyShadow] {
        &self.shadows
    }

    pub(super) fn shadows_mut(&mut self) -> &mut [bind::rigidbody::RigidBodyShadow] {
        &mut self.shadows
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

#[wasm_bindgen(js_name = "rigidBodyMakeKinematic")]
pub fn rigidbody_make_kinematic(ptr: *mut usize) {
    let rigidbody = unsafe { &mut *(ptr as *mut RigidBody) };
    rigidbody.make_kinematic();
}

#[wasm_bindgen(js_name = "rigidBodyRestoreDynamic")]
pub fn rigidbody_restore_dynamic(ptr: *mut usize) {
    let rigidbody = unsafe { &mut *(ptr as *mut RigidBody) };
    rigidbody.restore_dynamic();
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
