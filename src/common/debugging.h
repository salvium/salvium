#pragma once

#if defined(__x86_64__)
#define DEBUG_BREAK() asm volatile("int $3")
#elif defined(__aarch64__)
#define DEBUG_BREAK() asm volatile("brk #0xf000")
#elif defined(__arm__)
#define DEBUG_BREAK() asm volatile(".inst 0xe7f001f0")  // Encoding for bkpt #0xf01, common for ARM32
#else
#error "Unsupported architecture for DEBUG_BREAK"
#endif
