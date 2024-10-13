use glam::Vec3A;

#[link(name = "bullet")]
extern "C" {
    fn bw_create_motion_state(transform_buffer: *const f32) -> *mut std::ffi::c_void;

    fn bw_destroy_motion_state(motion_state: *mut std::ffi::c_void);

    fn bw_create_motion_state_bundle(count: usize) -> *mut std::ffi::c_void;

    fn bw_destroy_motion_state_bundle(bundle: *mut std::ffi::c_void);

    fn bw_motion_state_bundle_get_motion_states_ptr(bundle: *const std::ffi::c_void) -> *const *mut std::ffi::c_void;
}

#[repr(C, align(16))]
struct MotionStateRaw {
    vtable: *const std::ffi::c_void,
    matrix_rowx: Vec3A,
    matrix_rowy: Vec3A,
    matrix_rowz: Vec3A,
    translation: Vec3A,
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

    pub(crate) fn get_world_transform(&self) -> glam::Mat4 {
        let raw = unsafe { &*(self.ptr as *const MotionStateRaw) };
        glam::Mat4::from_cols(
            glam::Vec4::new(raw.matrix_rowx.x, raw.matrix_rowy.x, raw.matrix_rowz.x, 0.0),
            glam::Vec4::new(raw.matrix_rowx.y, raw.matrix_rowy.y, raw.matrix_rowz.y, 0.0),
            glam::Vec4::new(raw.matrix_rowx.z, raw.matrix_rowy.z, raw.matrix_rowz.z, 0.0),
            glam::Vec4::new(raw.translation.x, raw.translation.y, raw.translation.z, 1.0),
        )
    }
}

impl Drop for MotionState {
    fn drop(&mut self) {
        unsafe { bw_destroy_motion_state(self.ptr) }
    }
}

pub(crate) struct MotionStateBundle {
    ptr: *mut std::ffi::c_void,
    size: usize,
}

impl MotionStateBundle {
    pub(crate) fn new(count: usize) -> Self {
        Self {
            ptr: unsafe { bw_create_motion_state_bundle(count) },
            size: count,
        }
    }

    pub(crate) fn init_motion_state(&self, index: usize, transform: &glam::Mat4) {
        let motion_states_ptr = unsafe {
            bw_motion_state_bundle_get_motion_states_ptr(self.ptr) as *mut MotionStateRaw
        };

        let motion_state_ptr = unsafe { motion_states_ptr.add(index) };
        
        let transform_buffer = transform.as_ref();
        let raw = unsafe { &mut *motion_state_ptr };
        raw.matrix_rowx = Vec3A::new(transform_buffer[0], transform_buffer[4], transform_buffer[8]);
        raw.matrix_rowy = Vec3A::new(transform_buffer[1], transform_buffer[5], transform_buffer[9]);
        raw.matrix_rowz = Vec3A::new(transform_buffer[2], transform_buffer[6], transform_buffer[10]);
        raw.translation = Vec3A::new(transform_buffer[12], transform_buffer[13], transform_buffer[14]);
    }

    pub(crate) fn get_world_transform(&self, index: usize) -> glam::Mat4 {
        let motion_states_ptr = unsafe {
            bw_motion_state_bundle_get_motion_states_ptr(self.ptr) as *mut MotionStateRaw
        };

        let motion_state_ptr = unsafe { motion_states_ptr.add(index) };
        let raw = unsafe { &*motion_state_ptr };
        
        glam::Mat4::from_cols(
            glam::Vec4::new(raw.matrix_rowx.x, raw.matrix_rowy.x, raw.matrix_rowz.x, 0.0),
            glam::Vec4::new(raw.matrix_rowx.y, raw.matrix_rowy.y, raw.matrix_rowz.y, 0.0),
            glam::Vec4::new(raw.matrix_rowx.z, raw.matrix_rowy.z, raw.matrix_rowz.z, 0.0),
            glam::Vec4::new(raw.translation.x, raw.translation.y, raw.translation.z, 1.0),
        )
    }

    pub(crate) fn size(&self) -> usize {
        self.size
    }
}

impl Drop for MotionStateBundle {
    fn drop(&mut self) {
        unsafe { bw_destroy_motion_state_bundle(self.ptr) }
    }
}
