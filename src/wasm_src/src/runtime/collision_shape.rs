use glam::Vec3;
use wasm_bindgen::prelude::*;

use crate::bind::collision_shape::{BoxShape, CapsuleShape, CollisionShape, SphereShape, StaticPlaneShape};

#[wasm_bindgen(js_name = "createBoxShape")]
pub fn create_boxshape(x: f32, y: f32, z: f32) -> *mut usize {
    let box_shape = BoxShape::new(Vec3::new(x, y, z));
    let box_shape = CollisionShape::Box(box_shape);
    Box::into_raw(Box::new(box_shape)) as *mut usize
}

#[wasm_bindgen(js_name = "createSphereShape")]
pub fn create_sphereshape(radius: f32) -> *mut usize {
    let sphere_shape = SphereShape::new(radius);
    let sphere_shape = CollisionShape::Sphere(sphere_shape);
    Box::into_raw(Box::new(sphere_shape)) as *mut usize
}

#[wasm_bindgen(js_name = "createCapsuleShape")]
pub fn create_capsuleshape(radius: f32, height: f32) -> *mut usize {
    let capsule_shape = CapsuleShape::new(radius, height);
    let capsule_shape = CollisionShape::Capsule(capsule_shape);
    Box::into_raw(Box::new(capsule_shape)) as *mut usize
}

#[wasm_bindgen(js_name = "createStaticPlaneShape")]
pub fn create_staticplaneshape(normal_x: f32, normal_y: f32, normal_z: f32, plane_constant: f32) -> *mut usize {
    let plane_shape = StaticPlaneShape::new(Vec3::new(normal_x, normal_y, normal_z), plane_constant);
    let plane_shape = CollisionShape::StaticPlane(plane_shape);
    Box::into_raw(Box::new(plane_shape)) as *mut usize
}

#[wasm_bindgen(js_name = "destroyShape")]
pub fn destroy_shape(ptr: *mut usize) {
    unsafe {
        let _ = Box::from_raw(ptr as *mut CollisionShape);
    }
}
