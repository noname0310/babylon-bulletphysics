#[link(name = "bullet")]
extern "C" {
    fn bw_create_motion_state(transform_buffer: *const f32) -> *mut std::ffi::c_void;

    fn bw_destroy_motion_state(motion_state: *mut std::ffi::c_void);

    fn bw_create_motion_state_bundle(count: usize) -> *mut std::ffi::c_void;

    fn bw_destroy_motion_state_bundle(bundle: *mut std::ffi::c_void);

    fn bw_motion_state_bundle_get_motion_states_ptr(bundle: *const std::ffi::c_void) -> *const *mut std::ffi::c_void;
}

pub(crate) struct MotionState {
    ptr: *mut std::ffi::c_void,
}

impl MotionState {
    pub(crate) fn new(transform: &glam::Mat4) -> Self {
        let transform_buffer = transform.as_ref();
        Self {
            ptr: unsafe { bw_create_motion_state(transform_buffer.as_ptr()) },
        }
    }
}

impl Drop for MotionState {
    fn drop(&mut self) {
        unsafe { bw_destroy_motion_state(self.ptr) }
    }
}

pub(crate) struct MotionStateBundle {
    ptr: *mut std::ffi::c_void,
}

impl MotionStateBundle {
    pub(crate) fn new(count: usize) -> Self {
        Self {
            ptr: unsafe { bw_create_motion_state_bundle(count) },
        }
    }
}

impl Drop for MotionStateBundle {
    fn drop(&mut self) {
        unsafe { bw_destroy_motion_state_bundle(self.ptr) }
    }
}
