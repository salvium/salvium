#include <cstdint>
#include <string>

#include "cryptonote_protocol/salchat_protocol_defs.h"
#include "cryptonote_protocol/salchat_relay.h"
#include "fuzzer.h"
#include "storages/portable_storage_template_helper.h"

BEGIN_INIT_SIMPLE_FUZZER()
END_INIT_SIMPLE_FUZZER()

BEGIN_SIMPLE_FUZZER()
  if (len <= cryptonote::SALCHAT_MAX_PACKET_BYTES)
  {
    cryptonote::salchat_p2p_envelope envelope;
    const epee::span<const std::uint8_t> input{buf, len};
    if (epee::serialization::load_t_from_binary(envelope, input))
    {
      cryptonote::salchat_config config;
      config.enabled = true;
      std::string error;
      cryptonote::validate_salchat_envelope(envelope, config, 1, error);
    }
  }
END_SIMPLE_FUZZER()
