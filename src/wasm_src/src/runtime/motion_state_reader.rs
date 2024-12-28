use glam::{Quat, Vec3, Vec3A, Mat3};
use wasm_bindgen::prelude::*;

#[repr(C, align(16))]
struct MotionStateRawRead {
    vtable: *const std::ffi::c_void,
    matrix_rowx: Vec3A,
    matrix_rowy: Vec3A,
    matrix_rowz: Vec3A,
    translation: Vec3A,
}

pub(crate) struct MotionStateReader {
    origin: Vec3,
    rotation: Quat,
}

impl MotionStateReader {
    pub(crate) fn new() -> Self {
        Self {
            origin: Vec3::ZERO,
            rotation: Quat::IDENTITY,
        }
    }
    
    pub(crate) fn set(&mut self, motion_state_ptr: *const std::ffi::c_void) {
        let raw = unsafe { &*(motion_state_ptr as *const MotionStateRawRead) };
        
        self.origin = Vec3::new(raw.translation.x, raw.translation.y, raw.translation.z);
        self.rotation = Quat::from_mat3(&Mat3::from_cols(
            Vec3::new(raw.matrix_rowx.x, raw.matrix_rowy.x, raw.matrix_rowz.x),
            Vec3::new(raw.matrix_rowx.y, raw.matrix_rowy.y, raw.matrix_rowz.y),
            Vec3::new(raw.matrix_rowx.z, raw.matrix_rowy.z, raw.matrix_rowz.z),
        ));
    }

    pub(crate) fn origin(&self) -> &Vec3 {
        &self.origin
    }

    pub(crate) fn rotation(&self) -> &Quat {
        &self.rotation
    }
}

#[wasm_bindgen(js_name = "createMotionStateReader")]
pub fn create_motion_state_reader() -> *mut usize {
    Box::into_raw(Box::new(MotionStateReader::new())) as *mut usize
}

#[wasm_bindgen(js_name = "destroyMotionStateReader")]
pub fn destroy_motion_state_reader(ptr: *mut usize) {
    unsafe { 
        let _ = Box::from_raw(ptr as *mut MotionStateReader);
    }
}

#[wasm_bindgen(js_name = "motionStateReaderSet")]
pub fn motion_state_reader_set(ptr: *mut usize, motion_state_ptr: *const std::ffi::c_void) {
    let reader = unsafe { &mut *(ptr as *mut MotionStateReader) };
    reader.set(motion_state_ptr);
}

#[wasm_bindgen(js_name = "motionStateReaderGetOriginX")]
pub fn motion_state_reader_get_origin_x(ptr: *mut usize) -> f32 {
    let reader = unsafe { &*(ptr as *mut MotionStateReader) };
    reader.origin().x
}

#[wasm_bindgen(js_name = "motionStateReaderGetOriginY")]
pub fn motion_state_reader_get_origin_y(ptr: *mut usize) -> f32 {
    let reader = unsafe { &*(ptr as *mut MotionStateReader) };
    reader.origin().y
}

#[wasm_bindgen(js_name = "motionStateReaderGetOriginZ")]
pub fn motion_state_reader_get_origin_z(ptr: *mut usize) -> f32 {
    let reader = unsafe { &*(ptr as *mut MotionStateReader) };
    reader.origin().z
}

#[wasm_bindgen(js_name = "motionStateReaderGetRotationX")]
pub fn motion_state_reader_get_rotation_x(ptr: *mut usize) -> f32 {
    let reader = unsafe { &*(ptr as *mut MotionStateReader) };
    reader.rotation().x
}

#[wasm_bindgen(js_name = "motionStateReaderGetRotationY")]
pub fn motion_state_reader_get_rotation_y(ptr: *mut usize) -> f32 {
    let reader = unsafe { &*(ptr as *mut MotionStateReader) };
    reader.rotation().y
}

#[wasm_bindgen(js_name = "motionStateReaderGetRotationZ")]
pub fn motion_state_reader_get_rotation_z(ptr: *mut usize) -> f32 {
    let reader = unsafe { &*(ptr as *mut MotionStateReader) };
    reader.rotation().z
}

#[wasm_bindgen(js_name = "motionStateReaderGetRotationW")]
pub fn motion_state_reader_get_rotation_w(ptr: *mut usize) -> f32 {
    let reader = unsafe { &*(ptr as *mut MotionStateReader) };
    reader.rotation().w
}
