use glam::Vec3;

#[link(name = "bullet")]
extern "C" {
    fn bw_create_boxshape(x: f32, y: f32, z: f32) -> *mut std::ffi::c_void;

    fn bw_destroy_boxshape(shape: *mut std::ffi::c_void);

    fn bw_create_sphereshape(radius: f32) -> *mut std::ffi::c_void;

    fn bw_destroy_sphereshape(shape: *mut std::ffi::c_void);

    fn bw_create_capsuleshape(radius: f32, height: f32) -> *mut std::ffi::c_void;

    fn bw_destroy_capsuleshape(shape: *mut std::ffi::c_void);

    fn bw_create_staticplaneshape(normal_x: f32, normal_y: f32, normal_z: f32, plane_constant: f32) -> *mut std::ffi::c_void;

    fn bw_destroy_staticplaneshape(shape: *mut std::ffi::c_void);
}

pub(crate) struct BoxShape {
    ptr: *mut std::ffi::c_void,
    #[cfg(debug_assertions)]
    ref_count: u32,
}

impl BoxShape {
    pub(crate) fn new(size: Vec3) -> Self {
        Self {
            ptr: unsafe { bw_create_boxshape(size.x, size.y, size.z) },
            #[cfg(debug_assertions)]
            ref_count: 0,
        }
    }

    pub(super) fn ptr(&self) -> *const std::ffi::c_void {
        self.ptr
    }
}

impl Drop for BoxShape {
    fn drop(&mut self) {
        #[cfg(debug_assertions)]
        if self.ptr.is_null() {
            panic!("BoxShape already dropped");
        }

        #[cfg(debug_assertions)]
        if 0 < self.ref_count {
            panic!("BoxShape still has references");
        }

        unsafe { bw_destroy_boxshape(self.ptr); }

        #[cfg(debug_assertions)]
        {
            self.ptr = std::ptr::null_mut();
        }
    }
}

pub(crate) struct SphereShape {
    ptr: *mut std::ffi::c_void,
    #[cfg(debug_assertions)]
    ref_count: u32,
}

impl SphereShape {
    pub(crate) fn new(radius: f32) -> Self {
        Self {
            ptr: unsafe { bw_create_sphereshape(radius) },
            #[cfg(debug_assertions)]
            ref_count: 0,
        }
    }

    pub(super) fn ptr(&self) -> *const std::ffi::c_void {
        self.ptr
    }
}

impl Drop for SphereShape {
    fn drop(&mut self) {
        #[cfg(debug_assertions)]
        if self.ptr.is_null() {
            panic!("SphereShape already dropped");
        }

        #[cfg(debug_assertions)]
        if 0 < self.ref_count {
            panic!("SphereShape still has references");
        }

        unsafe { bw_destroy_sphereshape(self.ptr); }

        #[cfg(debug_assertions)]
        {
            self.ptr = std::ptr::null_mut();
        }
    }
}

pub(crate) struct CapsuleShape {
    ptr: *mut std::ffi::c_void,
    #[cfg(debug_assertions)]
    ref_count: u32,
}

impl CapsuleShape {
    pub(crate) fn new(radius: f32, height: f32) -> Self {
        Self {
            ptr: unsafe { bw_create_capsuleshape(radius, height) },
            #[cfg(debug_assertions)]
            ref_count: 0,
        }
    }

    pub(super) fn ptr(&self) -> *const std::ffi::c_void {
        self.ptr
    }
}

impl Drop for CapsuleShape {
    fn drop(&mut self) {
        #[cfg(debug_assertions)]
        if self.ptr.is_null() {
            panic!("CapsuleShape already dropped");
        }

        #[cfg(debug_assertions)]
        if 0 < self.ref_count {
            panic!("CapsuleShape still has references");
        }

        unsafe { bw_destroy_capsuleshape(self.ptr); }

        #[cfg(debug_assertions)]
        {
            self.ptr = std::ptr::null_mut();
        }
    }
}

pub(crate) struct StaticPlaneShape {
    ptr: *mut std::ffi::c_void,
    #[cfg(debug_assertions)]
    ref_count: u32,
}

impl StaticPlaneShape {
    pub(crate) fn new(normal: Vec3, plane_constant: f32) -> Self {
        Self {
            ptr: unsafe { bw_create_staticplaneshape(normal.x, normal.y, normal.z, plane_constant) },
            #[cfg(debug_assertions)]
            ref_count: 0,
        }
    }

    pub(super) fn ptr(&self) -> *const std::ffi::c_void {
        self.ptr
    }
}

impl Drop for StaticPlaneShape {
    fn drop(&mut self) {
        #[cfg(debug_assertions)]
        if self.ptr.is_null() {
            panic!("StaticPlaneShape already dropped");
        }

        #[cfg(debug_assertions)]
        if 0 < self.ref_count {
            panic!("StaticPlaneShape still has references");
        }

        unsafe { bw_destroy_staticplaneshape(self.ptr); }

        #[cfg(debug_assertions)]
        {
            self.ptr = std::ptr::null_mut();
        }
    }
}

pub(crate) enum CollisionShape {
    Box(BoxShape),
    Sphere(SphereShape),
    Capsule(CapsuleShape),
    StaticPlane(StaticPlaneShape),
}

impl CollisionShape {
    pub(crate) fn ptr(&self) -> *const std::ffi::c_void {
        match self {
            CollisionShape::Box(shape) => shape.ptr(),
            CollisionShape::Sphere(shape) => shape.ptr(),
            CollisionShape::Capsule(shape) => shape.ptr(),
            CollisionShape::StaticPlane(shape) => shape.ptr(),
        }
    }

    #[cfg(debug_assertions)]
    fn ref_count_mut(&mut self) -> &mut u32 {
        match self {
            CollisionShape::Box(shape) => &mut shape.ref_count,
            CollisionShape::Sphere(shape) => &mut shape.ref_count,
            CollisionShape::Capsule(shape) => &mut shape.ref_count,
            CollisionShape::StaticPlane(shape) => &mut shape.ref_count,
        }
    }

    pub(crate) fn create_handle(&mut self) -> CollisionShapeHandle {
        CollisionShapeHandle::new(self)
    }
}

pub(crate) struct CollisionShapeHandle {
    shape: &'static mut CollisionShape,
}

impl CollisionShapeHandle {
    pub(crate) fn new(shape: &mut CollisionShape) -> Self {
        let shape = unsafe { 
            std::mem::transmute::<&mut CollisionShape, &'static mut CollisionShape>(shape)
        };

        #[cfg(debug_assertions)]
        {
            *shape.ref_count_mut() += 1;
        }

        Self {
            shape,
        }
    }

    pub(crate) fn shape(&self) -> &CollisionShape {
        self.shape
    }

    pub(crate) fn clone(&mut self) -> Self {
        Self::new(self.shape)
    }
}

#[cfg(debug_assertions)]
impl Drop for CollisionShapeHandle {
    fn drop(&mut self) {
        *self.shape.ref_count_mut() -= 1;
    }
}
