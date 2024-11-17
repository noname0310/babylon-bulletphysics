#include <stdio.h>

// we don't need to implement printf format string parsing

void printf(const char* fmt, ...) {
    bw_error(fmt);
}

void __debugbreak() {
}
