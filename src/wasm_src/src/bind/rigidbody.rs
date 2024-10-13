use super::{collision_shape::CollisionShape, motion_state::MotionState};

#[link(name = "bullet")]
extern "C" {
    fn bw_create_rigidbody(info: *const std::ffi::c_void) -> *mut std::ffi::c_void;

    fn bw_destroy_rigidbody(body: *mut std::ffi::c_void);

    fn bw_rigidbody_make_kinematic(body: *mut std::ffi::c_void);

    fn bw_rigidbody_restore_dynamic(body: *mut std::ffi::c_void);
}

pub(crate) enum MotionType {
    Dynamic = 0,
    Kinematic = 1,
    Static = 2,
}

#[repr(C)]
pub(crate) struct RigidBodyConstructionInfo {
    // for shape
    shape: *const std::ffi::c_void,
    
    // for motion state
    motion_state: *const std::ffi::c_void,

    // for rigid body
    motion_type: u8,
    mass: f32,
    linear_damping: f32,
    angular_damping: f32,
    friction: f32,
    // rolling_friction: f32,
    // spinning_friction: f32,
    restitution: f32,
    linear_sleeping_threshold: f32,
    angular_sleeping_threshold: f32,
    collision_group: u16,
    collision_mask: u16,
    additional_damping: u8,
    // additional_damping_factor: f32,
    // additional_linear_damping_threshold_sqr: f32,
    // additional_angular_damping_threshold_sqr: f32,
    // additional_angular_damping_factor: f32,
    no_contact_response: u8,
    disable_deactivation: u8,
}

impl RigidBodyConstructionInfo {
    pub(crate) fn new(
        shape: &CollisionShape,
        motion_state: &MotionState,
    ) -> Self {
        Self {
            shape: shape as *const CollisionShape as *const std::ffi::c_void,
            motion_state: motion_state as *const MotionState as *const std::ffi::c_void,
            motion_type: MotionType::Dynamic as u8,
            mass: 1.0,
            linear_damping: 0.0,
            angular_damping: 0.0,
            friction: 0.5,
            // rolling_friction: 0.0,
            // spinning_friction: 0.0,
            restitution: 0.0,
            linear_sleeping_threshold: 0.8,
            angular_sleeping_threshold: 1.0,
            collision_group: 0,
            collision_mask: 0,
            additional_damping: 0,
            // additional_damping_factor: 0.0,
            // additional_linear_damping_threshold_sqr: 0.0,
            // additional_angular_damping_threshold_sqr: 0.0,
            // additional_angular_damping_factor: 0.0,
            no_contact_response: 0,
            disable_deactivation: 0,
        }
    }

    pub(crate) fn get_motion_type(&self) -> MotionType {
        match self.motion_type {
            0 => MotionType::Dynamic,
            1 => MotionType::Kinematic,
            2 => MotionType::Static,
            _ => panic!("Invalid motion type"),
        }
    }

    pub(crate) fn set_motion_type(&mut self, motion_type: MotionType) {
        self.motion_type = motion_type as u8;
    }

    pub(crate) fn get_mass(&self) -> f32 {
        self.mass
    }

    pub(crate) fn set_mass(&mut self, mass: f32) {
        self.mass = mass;
    }

    pub(crate) fn get_linear_damping(&self) -> f32 {
        self.linear_damping
    }

    pub(crate) fn set_linear_damping(&mut self, linear_damping: f32) {
        self.linear_damping = linear_damping;
    }

    pub(crate) fn get_angular_damping(&self) -> f32 {
        self.angular_damping
    }

    pub(crate) fn set_angular_damping(&mut self, angular_damping: f32) {
        self.angular_damping = angular_damping;
    }

    pub(crate) fn get_friction(&self) -> f32 {
        self.friction
    }

    pub(crate) fn set_friction(&mut self, friction: f32) {
        self.friction = friction;
    }

    pub(crate) fn get_restitution(&self) -> f32 {
        self.restitution
    }

    pub(crate) fn set_restitution(&mut self, restitution: f32) {
        self.restitution = restitution;
    }

    pub(crate) fn get_linear_sleeping_threshold(&self) -> f32 {
        self.linear_sleeping_threshold
    }

    pub(crate) fn set_linear_sleeping_threshold(&mut self, linear_sleeping_threshold: f32) {
        self.linear_sleeping_threshold = linear_sleeping_threshold;
    }

    pub(crate) fn get_angular_sleeping_threshold(&self) -> f32 {
        self.angular_sleeping_threshold
    }

    pub(crate) fn set_angular_sleeping_threshold(&mut self, angular_sleeping_threshold: f32) {
        self.angular_sleeping_threshold = angular_sleeping_threshold;
    }

    pub(crate) fn get_collision_group(&self) -> u16 {
        self.collision_group
    }

    pub(crate) fn set_collision_group(&mut self, collision_group: u16) {
        self.collision_group = collision_group;
    }

    pub(crate) fn get_collision_mask(&self) -> u16 {
        self.collision_mask
    }

    pub(crate) fn set_collision_mask(&mut self, collision_mask: u16) {
        self.collision_mask = collision_mask;
    }

    pub(crate) fn get_additional_damping(&self) -> bool {
        self.additional_damping != 0
    }

    pub(crate) fn set_additional_damping(&mut self, additional_damping: bool) {
        self.additional_damping = additional_damping as u8;
    }

    pub(crate) fn get_no_contact_response(&self) -> bool {
        self.no_contact_response != 0
    }

    pub(crate) fn set_no_contact_response(&mut self, no_contact_response: bool) {
        self.no_contact_response = no_contact_response as u8;
    }

    pub(crate) fn get_disable_deactivation(&self) -> bool {
        self.disable_deactivation != 0
    }

    pub(crate) fn set_disable_deactivation(&mut self, disable_deactivation: bool) {
        self.disable_deactivation = disable_deactivation as u8;
    }
}

pub(crate) struct RigidBody {
    ptr: *mut std::ffi::c_void,
}

impl RigidBody {
    pub(crate) fn new(info: &RigidBodyConstructionInfo) -> Self {
        Self {
            ptr: unsafe { bw_create_rigidbody(info as *const RigidBodyConstructionInfo as *const std::ffi::c_void) },
        }
    }

    pub(crate) fn make_kinematic(&self) {
        unsafe { bw_rigidbody_make_kinematic(self.ptr) }
    }

    pub(crate) fn restore_dynamic(&self) {
        unsafe { bw_rigidbody_restore_dynamic(self.ptr) }
    }
}

impl Drop for RigidBody {
    fn drop(&mut self) {
        unsafe { bw_destroy_rigidbody(self.ptr) }
    }
}
