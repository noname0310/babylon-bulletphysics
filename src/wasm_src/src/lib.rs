mod bind;
mod runtime;
mod stdlib;

use bind::rigidbody;
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

    let mat4 = glam::Mat4::from_cols(
        glam::Vec4::new(1.0, 2.0, 3.0, 4.0),
        glam::Vec4::new(5.0, 6.0, 7.0, 8.0),
        glam::Vec4::new(9.0, 10.0, 11.0, 12.0),
        glam::Vec4::new(13.0, 14.0, 15.0, 16.0),
    );
    let motion_state = bind::motion_state::MotionState::new(&mat4);
    let world_transform = motion_state.get_transform();
    web_sys::console::log_1(&format!("world_transform: {:?}", world_transform).into());

    let mation_state_bundle = bind::motion_state::MotionStateBundle::new(2);
    mation_state_bundle.init_motion_state(0, &mat4);
    mation_state_bundle.init_motion_state(1, &mat4);
    let world_transform = mation_state_bundle.get_transform(0);
    web_sys::console::log_1(&format!("world_transform: {:?}", world_transform).into());
    let world_transform = mation_state_bundle.get_transform(1);
    web_sys::console::log_1(&format!("world_transform: {:?}", world_transform).into());

    let rigidbody_info = bind::rigidbody::RigidBodyConstructionInfo::new(
        &bind::collision_shape::CollisionShape::Box(bind::collision_shape::BoxShape::new(glam::Vec3::new(1.0, 1.0, 1.0))),
        &motion_state,
    );
}

#[wasm_bindgen(js_name = "createBulletRuntime")]
pub fn create_bullet_runtime() -> runtime::Runtime {
    runtime::Runtime::new()
}
