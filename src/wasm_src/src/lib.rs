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

    let mut mation_state_bundle = bind::motion_state::MotionStateBundle::new(2);
    mation_state_bundle.set_transform(0, &mat4);
    mation_state_bundle.set_transform(1, &mat4);
    let world_transform = mation_state_bundle.get_transform(0);
    web_sys::console::log_1(&format!("world_transform: {:?}", world_transform).into());
    let world_transform = mation_state_bundle.get_transform(1);
    web_sys::console::log_1(&format!("world_transform: {:?}", world_transform).into());

    let shape = bind::collision_shape::CollisionShape::Box(bind::collision_shape::BoxShape::new(glam::Vec3::new(1.0, 1.0, 1.0)));
    let shape = Box::new(shape);

    let rigidbody_info = runtime::rigidbody::RigidBodyConstructionInfo {
        shape: &shape,
        initial_transform: mat4,
        motion_type: rigidbody::MotionType::Dynamic as u8,
        mass: 1.0,
        linear_damping: 0.0,
        angular_damping: 0.0,
        friction: 0.5,
        restitution: 0.0,
        linear_sleeping_threshold: 0.8,
        angular_sleeping_threshold: 1.0,
        collision_group: 1,
        collision_mask: 1,
        additional_damping: 0,
        no_contact_response: 0,
        disable_deactivation: 0,
    };

    let _rigidbody = runtime::rigidbody::RigidBody::new(&rigidbody_info);
}

#[wasm_bindgen(js_name = "createBulletRuntime")]
pub fn create_bullet_runtime() -> runtime::Runtime {
    runtime::Runtime::new()
}

#[wasm_bindgen(js_name = "allocateBuffer")]
pub fn allocate_buffer(size: usize) -> *mut u8 {
    let layout = std::alloc::Layout::from_size_align(size, 16).unwrap();
    let ptr = unsafe { std::alloc::alloc_zeroed(layout) };
    if ptr.is_null() {
        return ptr;
    }
    ptr
}

/// Deallocate a buffer allocated by `allocateBuffer`.
/// # Safety
/// `ptr` must be a pointer to a buffer allocated by `allocateBuffer`.
#[wasm_bindgen(js_name = "deallocateBuffer")]
pub unsafe  fn deallocate_buffer(ptr: *mut u8, size: usize) {
    let layout = std::alloc::Layout::from_size_align(size, 16).unwrap();
    unsafe {
        std::alloc::dealloc(ptr, layout);
    }
}
