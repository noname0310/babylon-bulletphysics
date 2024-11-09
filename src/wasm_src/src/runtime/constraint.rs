use glam::{Vec3, Mat4};

use crate::bind::constraint::{Generic6DofConstraint, Generic6DofSpringConstraint, Constraint};

use super::rigidbody::RigidBody;

use wasm_bindgen::prelude::*;

#[wasm_bindgen(js_name = "createGeneric6DofConstraint")]
pub fn create_generic6dof_constraint(
    body_a: *mut usize,
    body_b: *mut usize,
    frame_a: *const f32,
    frame_b: *const f32,
    use_linear_reference_frame_a: bool,
) -> *mut usize {
    let body_a = unsafe { &mut *(body_a as *mut RigidBody) };
    let body_b = unsafe { &mut *(body_b as *mut RigidBody) };
    let body_a = body_a.get_inner_mut();
    let body_b = body_b.get_inner_mut();

    let frame_a = unsafe { std::slice::from_raw_parts(frame_a, 16) };
    let frame_b = unsafe { std::slice::from_raw_parts(frame_b, 16) };
    let frame_a = Mat4::from_cols_slice(frame_a);
    let frame_b = Mat4::from_cols_slice(frame_b);

    let constraint = Generic6DofConstraint::new(body_a, body_b, &frame_a, &frame_b, use_linear_reference_frame_a);
    let constraint = Box::new(Constraint::Generic6Dof(constraint));
    Box::into_raw(constraint) as *mut usize
}

#[wasm_bindgen(js_name = "createGeneric6DofSpringConstraint")]
pub fn create_generic6dof_spring_constraint(
    body_a: *mut usize,
    body_b: *mut usize,
    frame_a: *const f32,
    frame_b: *const f32,
    use_linear_reference_frame_a: bool,
) -> *mut usize {
    let body_a = unsafe { &mut *(body_a as *mut RigidBody) };
    let body_b = unsafe { &mut *(body_b as *mut RigidBody) };
    let body_a = body_a.get_inner_mut();
    let body_b = body_b.get_inner_mut();

    let frame_a = unsafe { std::slice::from_raw_parts(frame_a, 16) };
    let frame_b = unsafe { std::slice::from_raw_parts(frame_b, 16) };
    let frame_a = Mat4::from_cols_slice(frame_a);
    let frame_b = Mat4::from_cols_slice(frame_b);

    let constraint = Generic6DofSpringConstraint::new(body_a, body_b, &frame_a, &frame_b, use_linear_reference_frame_a);
    let constraint = Box::new(Constraint::Generic6DofSpring(constraint));
    Box::into_raw(constraint) as *mut usize
}

#[wasm_bindgen(js_name = "destroyConstraint")]
pub fn destroy_constraint(ptr: *mut usize) {
    unsafe {
        let _ = Box::from_raw(ptr as *mut Constraint);
    }
}

#[wasm_bindgen(js_name = "constraintSetLinearLowerLimit")]
pub fn constraint_set_linear_lower_limit(ptr: *mut usize, x: f32, y: f32, z: f32) {
    let constraint = unsafe { &mut *(ptr as *mut Constraint) };
    
    match constraint {
        Constraint::Generic6Dof(constraint) => {
            constraint.set_linear_lower_limit(Vec3::new(x, y, z));
        },
        Constraint::Generic6DofSpring(constraint) => {
            constraint.set_linear_lower_limit(Vec3::new(x, y, z));
        },
        _ => {
            panic!("constraintSetLinearLowerLimit: set_linear_lower_limit is not supported for this constraint type");
        }
    }
}

#[wasm_bindgen(js_name = "constraintSetLinearUpperLimit")]
pub fn constraint_set_linear_upper_limit(ptr: *mut usize, x: f32, y: f32, z: f32) {
    let constraint = unsafe { &mut *(ptr as *mut Constraint) };
    
    match constraint {
        Constraint::Generic6Dof(constraint) => {
            constraint.set_linear_upper_limit(Vec3::new(x, y, z));
        },
        Constraint::Generic6DofSpring(constraint) => {
            constraint.set_linear_upper_limit(Vec3::new(x, y, z));
        },
        _ => {
            panic!("constraintSetLinearUpperLimit: set_linear_upper_limit is not supported for this constraint type");
        }
    }
}

#[wasm_bindgen(js_name = "constraintSetAngularLowerLimit")]
pub fn constraint_set_angular_lower_limit(ptr: *mut usize, x: f32, y: f32, z: f32) {
    let constraint = unsafe { &mut *(ptr as *mut Constraint) };
    
    match constraint {
        Constraint::Generic6Dof(constraint) => {
            constraint.set_angular_lower_limit(Vec3::new(x, y, z));
        },
        Constraint::Generic6DofSpring(constraint) => {
            constraint.set_angular_lower_limit(Vec3::new(x, y, z));
        },
        _ => {
            panic!("constraintSetAngularLowerLimit: set_angular_lower_limit is not supported for this constraint type");
        }
    }
}

#[wasm_bindgen(js_name = "constraintSetAngularUpperLimit")]
pub fn constraint_set_angular_upper_limit(ptr: *mut usize, x: f32, y: f32, z: f32) {
    let constraint: &mut Constraint = unsafe { &mut *(ptr as *mut Constraint) };
    
    match constraint {
        Constraint::Generic6Dof(constraint) => {
            constraint.set_angular_upper_limit(Vec3::new(x, y, z));
        },
        Constraint::Generic6DofSpring(constraint) => {
            constraint.set_angular_upper_limit(Vec3::new(x, y, z));
        },
        _ => {
            panic!("constraintSetAngularUpperLimit: set_angular_upper_limit is not supported for this constraint type");
        }
    }
}

#[wasm_bindgen(js_name = "constraintEnableSpring")]
pub fn constraint_enable_spring(ptr: *mut usize, index: u8, on_off: bool) {
    let constraint = unsafe { &mut *(ptr as *mut Constraint) };
    
    match constraint {
        Constraint::Generic6DofSpring(constraint) => {
            constraint.enable_spring(index, on_off);
        },
        _ => {
            panic!("constraintEnableSpring: enable_spring is not supported for this constraint type");
        }
    }
}

#[wasm_bindgen(js_name = "constraintSetStiffness")]
pub fn constraint_set_stiffness(ptr: *mut usize, index: u8, stiffness: f32) {
    let constraint = unsafe { &mut *(ptr as *mut Constraint) };
    
    match constraint {
        Constraint::Generic6DofSpring(constraint) => {
            constraint.set_stiffness(index, stiffness);
        },
        _ => {
            panic!("constraintSetStiffness: set_stiffness is not supported for this constraint type");
        }
    }
}

#[wasm_bindgen(js_name = "constraintSetDamping")]
pub fn constraint_set_damping(ptr: *mut usize, index: u8, damping: f32) {
    let constraint = unsafe { &mut *(ptr as *mut Constraint) };
    
    match constraint {
        Constraint::Generic6DofSpring(constraint) => {
            constraint.set_damping(index, damping);
        },
        _ => {
            panic!("constraintSetDamping: set_damping is not supported for this constraint type");
        }
    }
}
