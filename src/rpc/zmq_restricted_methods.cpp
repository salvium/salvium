#include "rpc/zmq_restricted_methods.h"

#include <algorithm>
#include <array>

namespace cryptonote
{
namespace rpc
{
  namespace
  {
    const std::array<boost::string_ref, 9> blocked_in_restricted_mode{{
      "flush_txpool",
      "get_peer_list",
      "mining_status",
      "relay_tx",
      "save_bc",
      "set_log_categories",
      "set_log_level",
      "start_mining",
      "stop_mining"
    }};
  }

  bool is_blocked_in_restricted_mode(const boost::string_ref method) noexcept
  {
    return std::binary_search(
      blocked_in_restricted_mode.begin(),
      blocked_in_restricted_mode.end(),
      method
    );
  }

  void check_blocked_methods_sorted()
  {
    const auto last =
      std::is_sorted_until(blocked_in_restricted_mode.begin(), blocked_in_restricted_mode.end());

    if (last != blocked_in_restricted_mode.end())
      throw std::logic_error{
        std::string{"ZMQ restricted-method map is not properly sorted, see "} + last->to_string()
      };
  }
} // rpc
} // cryptonote
