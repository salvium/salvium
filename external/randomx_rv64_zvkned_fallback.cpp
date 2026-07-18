#include <cstddef>

#include "randomx/src/aes_hash_rv64_vector.hpp"

void hashAes1Rx4_zvkned(const void *input, size_t inputSize, void *hash) {
  hashAes1Rx4_RVV(input, inputSize, hash);
}

void fillAes1Rx4_zvkned(void *state, size_t outputSize, void *buffer) {
  fillAes1Rx4_RVV(state, outputSize, buffer);
}

void fillAes4Rx4_zvkned(void *state, size_t outputSize, void *buffer) {
  fillAes4Rx4_RVV(state, outputSize, buffer);
}

void hashAndFillAes1Rx4_zvkned(void *scratchpad, size_t scratchpadSize, void *hash, void* fill_state) {
  hashAndFillAes1Rx4_RVV(scratchpad, scratchpadSize, hash, fill_state);
}
