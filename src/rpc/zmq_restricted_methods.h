
#pragma once

#include <stdexcept>
#include <boost/utility/string_ref.hpp>

namespace cryptonote
{
namespace rpc
{
  bool is_blocked_in_restricted_mode(boost::string_ref method) noexcept;
  void check_blocked_methods_sorted();
} // rpc
} // cryptonote
