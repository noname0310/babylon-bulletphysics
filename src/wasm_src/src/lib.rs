mod stdlib;

use wasm_bindgen::prelude::*;

#[link(name = "bullet")]
extern "C" {
    fn __wasm_call_ctors();

    fn bw_sizeof_motion_state() -> usize;

    fn bw_create_motion_state(transform_buffer: *const f32) -> *mut f32;
}

static BULLET_GLOBAL_CTORS: std::sync::Once = std::sync::Once::new();

#[cfg(feature = "parallel")]
pub use wasm_bindgen_rayon::init_thread_pool;

#[wasm_bindgen(js_name = "init")]
pub fn init() {
    #[cfg(debug_assertions)]
    console_error_panic_hook::set_once();

    
    BULLET_GLOBAL_CTORS.call_once(|| {
        unsafe { __wasm_call_ctors() };
    });

    web_sys::console::log_1(&"Bullet wasm initialized.".into());
    web_sys::console::log_1(&format!("Size of MotionState: {}", unsafe { bw_sizeof_motion_state() }.to_string()).into());

    let transform_buffer = vec![
        1.0, 2.0, 3.0, 4.0,
        5.0, 6.0, 7.0, 8.0,
        9.0, 10.0, 11.0, 12.0,
        13.0, 14.0, 15.0, 16.0
    ];

    // bwMotionState repr:
    // vtable: u32,
    // padding: [u32; 3],
    // rotation_matrix_row_x: [f32; 3],
    // padding: u32,
    // rotation_matrix_row_y: [f32; 3],
    // padding: u32,
    // rotation_matrix_row_z: [f32; 3],
    // padding: u32,
    // translation: [f32; 3],
    // padding: u32
    // Total size: 20 * 4 = 80 bytes

    let motion_state = unsafe {
        std::slice::from_raw_parts_mut(bw_create_motion_state(transform_buffer.as_ptr()), 20)
    };
    web_sys::console::log_1(&format!("MotionState: {:?}", motion_state).into());
}
