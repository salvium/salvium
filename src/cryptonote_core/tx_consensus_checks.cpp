#include "tx_consensus_checks.h"

#include "cryptonote_basic/cryptonote_format_utils.h"
#include "crypto/crypto.h"

namespace cryptonote::tx_consensus
{
  bool check_tx_outputs_consensus(const cryptonote::transaction& tx, std::string* why)
  {
    for (size_t i = 0; i < tx.vout.size(); ++i)
    {
      crypto::public_key output_public_key;
      if (!cryptonote::get_output_public_key(tx.vout[i], output_public_key))
      {
        if (why) *why = "failed to extract output public key";
        return false;
      }

      if (!crypto::check_key(output_public_key))
      {
        if (why) *why = "invalid output public key";
        return false;
      }
    }

    return true;
  }

  bool check_tx_basic_consensus(const cryptonote::transaction& tx, std::string* why)
  {
    if (!check_tx_outputs_consensus(tx, why))
      return false;

    return true;
  }
}
