#include "tx_consensus_checks.h"

#include "cryptonote_basic/cryptonote_format_utils.h"
#include "crypto/crypto.h"

using namespace cryptonote::txrules;

namespace cryptonote::tx_consensus
{
    bool check_tx_inputs_consensus(
        const cryptonote::transaction& tx,
        const validation_env& env,
        const tx_chain_state_view& state,
        std::string* why)
    {
      const bool enforce_poisoned_ref_reject =
          env.mode == validation_mode::mempool
          || (env.mode == validation_mode::block &&
              env.hf >= HF_VERSION_REJECT_POISONED_REFS);

      if (!enforce_poisoned_ref_reject)
        return true;

      for (size_t input_index = 0; input_index < tx.vin.size(); ++input_index)
      {
        if (tx.vin[input_index].type() != typeid(cryptonote::txin_to_key))
          continue;

        const auto& txin = boost::get<cryptonote::txin_to_key>(tx.vin[input_index]);

        const std::vector<uint64_t> asset_offsets =
            cryptonote::relative_output_offsets_to_absolute(txin.key_offsets);

        const uint32_t asset_id = cryptonote::asset_id_from_type(txin.asset_type);

        std::vector<uint64_t> raw_ids;
        std::vector<uint64_t> effective_ids;

        if (!state.get_raw_output_ids_by_asset_index(
                asset_id, asset_offsets, raw_ids, why))
          return false;

        if (!state.get_effective_output_ids_by_asset_index(
                asset_id, asset_offsets, effective_ids, why))
          return false;

        if (raw_ids.size() != effective_ids.size())
        {
          if (why) *why = "raw/effective output id vector size mismatch";
          return false;
        }

        for (size_t member = 0; member < raw_ids.size(); ++member)
        {
          if (raw_ids[member] != effective_ids[member])
          {
            if (why)
            {
              *why =
                  "poisoned output reference: input=" + std::to_string(input_index) +
                  ", member=" + std::to_string(member) +
                  ", asset_offset=" + std::to_string(asset_offsets[member]) +
                  ", raw_id=" + std::to_string(raw_ids[member]) +
                  ", effective_id=" + std::to_string(effective_ids[member]);
            }

            return false;
          }
        }
      }

      return true;
    }

    bool check_tx_outputs_consensus(
        const cryptonote::transaction& tx,
        std::string* why)
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

    bool check_tx_basic_consensus(
        const cryptonote::transaction& tx,
        const validation_env& env,
        const tx_chain_state_view* state,
        std::string* why)
    {
      if (state && !check_tx_inputs_consensus(tx, env, *state, why))
        return false;

      if (!check_tx_outputs_consensus(tx, why))
        return false;

      return true;
    }
}
