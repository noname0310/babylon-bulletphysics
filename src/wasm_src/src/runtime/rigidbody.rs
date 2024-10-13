use glam::Mat4;
use wasm_bindgen::prelude::*;

use crate::bind;

pub(crate) struct RigidBody {
    inner: bind::rigidbody::RigidBody,
    shape: &'static bind::collision_shape::CollisionShape,
    motion_state: bind::motion_state::MotionState,
}

impl RigidBody {
    pub(crate) fn new(
        shape: &'static bind::collision_shape::CollisionShape
    ) -> Self {
        let motion_state = bind::motion_state::MotionState::new(&Mat4::IDENTITY);

        let info = bind::rigidbody::RigidBodyConstructionInfo::new(shape, &motion_state);
        let inner = bind::rigidbody::RigidBody::new(&info);
        Self {
            inner,
            shape,
            motion_state,
        }
    }

    pub(crate) fn make_kinematic(&mut self) {
        self.inner.make_kinematic();
    }

    pub(crate) fn restore_dynamic(&mut self) {
        self.inner.restore_dynamic();
    }
}
