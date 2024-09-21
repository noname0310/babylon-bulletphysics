mod stdlib;

use wasm_bindgen::prelude::*;

#[cfg(feature = "parallel")]
pub use wasm_bindgen_rayon::init_thread_pool;

#[wasm_bindgen(js_name = "init")]
pub fn init() {
    #[cfg(debug_assertions)]
    console_error_panic_hook::set_once();
}
