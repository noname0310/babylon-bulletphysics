mod bind;
mod runtime;
mod stdlib;

use wasm_bindgen::prelude::*;

#[link(name = "bullet")]
extern "C" {
    fn __wasm_call_ctors();
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
}

#[wasm_bindgen(js_name = "createBulletRuntime")]
pub fn create_bullet_runtime() -> runtime::Runtime {
    runtime::Runtime::new()
}
