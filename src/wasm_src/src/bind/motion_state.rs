use glam::{Vec3, Vec3A};

#[link(name = "bullet")]
extern "C" {
    fn bw_create_motion_state(transform_buffer: *const f32) -> *mut std::ffi::c_void;

    fn bw_destroy_motion_state(motion_state: *mut std::ffi::c_void);

    fn bw_create_motion_state_bundle(count: usize) -> *mut std::ffi::c_void;

    fn bw_destroy_motion_state_bundle(bundle: *mut std::ffi::c_void);

    fn bw_motion_state_bundle_get_motion_states_ptr(bundle: *const std::ffi::c_void) -> *const *mut std::ffi::c_void;

    fn bw_motion_state_bundle_get_count(bundle: *const std::ffi::c_void) -> usize;
}

#[repr(C, align(16))]
struct MotionStateRawRead {
    vtable: *const std::ffi::c_void,
    matrix_rowx: Vec3A,
    matrix_rowy: Vec3A,
    matrix_rowz: Vec3A,
    translation: Vec3A,
}

#[repr(C, align(16))]
struct MotionStateRawWrite {
    vtable: *const std::ffi::c_void,
    matrix_rowx: Vec3,
    padding1: f32,
    matrix_rowy: Vec3,
    padding2: f32,
    matrix_rowz: Vec3,
    padding3: f32,
    translation: Vec3,
    padding4: f32,
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

    pub(crate) fn get_transform(&self) -> glam::Mat4 {
        let raw = unsafe { &*(self.ptr as *const MotionStateRawRead) };
        glam::Mat4::from_cols(
            glam::Vec4::new(raw.matrix_rowx.x, raw.matrix_rowy.x, raw.matrix_rowz.x, 0.0),
            glam::Vec4::new(raw.matrix_rowx.y, raw.matrix_rowy.y, raw.matrix_rowz.y, 0.0),
            glam::Vec4::new(raw.matrix_rowx.z, raw.matrix_rowy.z, raw.matrix_rowz.z, 0.0),
            glam::Vec4::new(raw.translation.x, raw.translation.y, raw.translation.z, 1.0),
        )
    }

    pub(crate) fn set_transform(&self, transform: &glam::Mat4) {
        let raw = unsafe { &mut *(self.ptr as *mut MotionStateRawWrite) };
        raw.matrix_rowx = Vec3::new(transform.x_axis.x, transform.y_axis.x, transform.z_axis.x);
        raw.matrix_rowy = Vec3::new(transform.x_axis.y, transform.y_axis.y, transform.z_axis.y);
        raw.matrix_rowz = Vec3::new(transform.x_axis.z, transform.y_axis.z, transform.z_axis.z);
        raw.translation = Vec3::new(transform.w_axis.x, transform.w_axis.y, transform.w_axis.z);
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

    pub(crate) fn init_motion_state(&self, index: usize, transform: &glam::Mat4) {
        let motion_states_ptr = unsafe {
            bw_motion_state_bundle_get_motion_states_ptr(self.ptr) as *mut MotionStateRawRead
        };

        let motion_state_ptr = unsafe { motion_states_ptr.add(index) };

        let raw = unsafe { &mut *motion_state_ptr };
        raw.matrix_rowx = Vec3A::new(transform.x_axis.x, transform.y_axis.x, transform.z_axis.x);
        raw.matrix_rowy = Vec3A::new(transform.x_axis.y, transform.y_axis.y, transform.z_axis.y);
        raw.matrix_rowz = Vec3A::new(transform.x_axis.z, transform.y_axis.z, transform.z_axis.z);
        raw.translation = Vec3A::new(transform.w_axis.x, transform.w_axis.y, transform.w_axis.z);
    }

    pub(crate) fn get_transform(&self, index: usize) -> glam::Mat4 {
        let motion_states_ptr = unsafe {
            bw_motion_state_bundle_get_motion_states_ptr(self.ptr) as *mut MotionStateRawRead
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

    pub(crate) fn set_transform(&self, index: usize, transform: &glam::Mat4) {
        let motion_states_ptr = unsafe {
            bw_motion_state_bundle_get_motion_states_ptr(self.ptr) as *mut MotionStateRawWrite
        };

        let motion_state_ptr = unsafe { motion_states_ptr.add(index) };

        let raw = unsafe { &mut *motion_state_ptr };
        raw.matrix_rowx = Vec3::new(transform.x_axis.x, transform.y_axis.x, transform.z_axis.x);
        raw.matrix_rowy = Vec3::new(transform.x_axis.y, transform.y_axis.y, transform.z_axis.y);
        raw.matrix_rowz = Vec3::new(transform.x_axis.z, transform.y_axis.z, transform.z_axis.z);
        raw.translation = Vec3::new(transform.w_axis.x, transform.w_axis.y, transform.w_axis.z);
    }

    pub(crate) fn size(&self) -> usize {
        unsafe { bw_motion_state_bundle_get_count(self.ptr) }
    }
}

impl Drop for MotionStateBundle {
    fn drop(&mut self) {
        unsafe { bw_destroy_motion_state_bundle(self.ptr) }
    }
}
