#[no_mangle]
extern "C" fn __cxa_pure_virtual() {
    panic!("pure virtual function call");
}

#[cfg(debug_assertions)]
#[no_mangle]
extern "C" fn bw_error(message: *const i8) {
    let message: &std::ffi::CStr = unsafe { std::ffi::CStr::from_ptr(message) };
    let str_slice = message.to_str().unwrap();
    web_sys::console::error_1(&str_slice.into());
}
