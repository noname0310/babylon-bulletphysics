#pragma once

extern "C" {
    void bw_error(char const* message);
}

void printf(const char* fmt, ...);

void __debugbreak();
