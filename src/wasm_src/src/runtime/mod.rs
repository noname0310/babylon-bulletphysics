pub(crate) mod collision_shape;
pub(crate) mod constraint;
pub(crate) mod physics_world;
pub(crate) mod rigidbody;

use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub struct Runtime {
        
}

impl Runtime {
    pub fn new() -> Self {
        Self {
            
        }
    }
}
