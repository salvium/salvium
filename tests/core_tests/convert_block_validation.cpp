// Copyright (c) 2026, The Monero Project
//
// All rights reserved.
//
// Redistribution and use in source and binary forms, with or without modification, are
// permitted provided that the following conditions are met:
//
// 1. Redistributions of source code must retain the above copyright notice, this list of
//    conditions and the following disclaimer.
//
// 2. Redistributions in binary form must reproduce the above copyright notice, this list
//    of conditions and the following disclaimer in the documentation and/or other
//    materials provided with the distribution.
//
// 3. Neither the name of the copyright holder nor the names of its contributors may be
//    used to endorse or promote products derived from this software without specific
//    prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
// EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
// MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL
// THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
// SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
// PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
// INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT,
// STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF
// THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

#include "convert_block_validation.h"

#include "carrot_core/payment_proposal.h"
#include "cryptonote_basic/cryptonote_basic.h"
#include "cryptonote_basic/cryptonote_format_utils.h"
#include "cryptonote_core/cryptonote_tx_utils.h"

using namespace cryptonote;

// A fully signed Carrot CONVERT transaction (which the block validator needs in order to
// compare the protocol transaction's mint against a real conversion) cannot be produced
// from the core testing harness: the only signing path is the wallet stack, whose source
// selection calls daemon RPC (tools::wallet::make_carrot_transaction_proposal_v1_transfer
// -> wallet2::get_outs), and finalization asks the wallet for the chain's hard fork.  The
// mint-equality rule itself is covered by the convert_tx unit tests in
// tests/unit_tests/test_tx_utils.cpp; this test covers the block-level rule that runs
// before an amount can be compared: a protocol transaction may only pay out mints that a
// CONVERT transaction in the same block earned.
gen_convert_block_protocol_mint::gen_convert_block_protocol_mint()
  : m_bad_block_index(0)
{
  REGISTER_CALLBACK_METHOD(gen_convert_block_protocol_mint, mark_bad_block);
  REGISTER_CALLBACK_METHOD(gen_convert_block_protocol_mint, check_chain_height);
}

bool gen_convert_block_protocol_mint::generate(std::vector<test_event_entry>& events)
{
  uint64_t ts = 1338224400;

  GENERATE_ACCOUNT(miner_account);
  MAKE_GENESIS_BLOCK(events, blk_0, miner_account, ts);

  // The generator tracks "already generated coins" by summing SAL1 outputs, which misses
  // the SAL-denominated premine of the genesis block.  The database credits that premine,
  // and the hf 14 block reward depends on the cumulative amount, so feed the mined blocks
  // the same cumulative value the database will use.
  uint64_t already_generated_coins = PREMINE_AMOUNT;
  std::vector<size_t> block_weights;

  // The first two mined blocks run under hf 14 and must be accepted.  They carry the
  // minimal protocol transaction produced by the generator (no outputs), which is exactly
  // what validate_protocol_transaction() requires when the block contains no conversion.
  block blk_1, blk_2;
  {
    uint64_t base_reward = 0;
    if (!get_block_reward(0, 0, already_generated_coins, base_reward, HF_VERSION_ORACLE_CONVERT))
      return false;
    ts += 120;
    if (!generator.construct_block(blk_1, 1, get_block_hash(blk_0), miner_account, ts,
        already_generated_coins, block_weights, std::list<transaction>(), HF_VERSION_ORACLE_CONVERT))
      return false;
    already_generated_coins += base_reward;
    events.push_back(blk_1);

    if (!get_block_reward(0, 0, already_generated_coins, base_reward, HF_VERSION_ORACLE_CONVERT))
      return false;
    ts += 120;
    if (!generator.construct_block(blk_2, 2, get_block_hash(blk_1), miner_account, ts,
        already_generated_coins, block_weights, std::list<transaction>(), HF_VERSION_ORACLE_CONVERT))
      return false;
    already_generated_coins += base_reward;
    events.push_back(blk_2);
  }

  // A block whose protocol transaction carries a conversion-style mint output, but which
  // contains no CONVERT transaction at all.  This is the invariant the block validator
  // enforces before it ever looks at a conversion amount: a protocol transaction may only
  // pay out mints that a transaction in the same block earned.
  block blk_bad;
  {
    uint64_t base_reward = 0;
    if (!get_block_reward(0, 0, already_generated_coins, base_reward, HF_VERSION_ORACLE_CONVERT))
      return false;
    ts += 120;
    if (!generator.construct_block(blk_bad, 3, get_block_hash(blk_2), miner_account, ts,
        already_generated_coins, block_weights, std::list<transaction>(), HF_VERSION_ORACLE_CONVERT))
      return false;
  }

  const uint64_t height = 3;
  protocol_data_entry convert_entry{};
  convert_entry.type = static_cast<uint8_t>(transaction_type::CONVERT);
  convert_entry.is_carrot = true;
  convert_entry.source_asset = "SAL1";
  convert_entry.destination_asset = "SAL";
  convert_entry.amount_burnt = COIN;
  convert_entry.amount_minted = COIN;
  convert_entry.amount_slippage_limit = COIN;
  crypto::secret_key return_secret_key{};
  crypto::generate_keys(convert_entry.return_address, return_secret_key);
  convert_entry.return_pubkey = convert_entry.return_address;
  convert_entry.return_view_tag = {};
  convert_entry.return_view_tag.bytes[0] = 0x42;
  convert_entry.return_anchor_enc = {};
  convert_entry.return_anchor_enc.bytes[0] = 0x24;

  std::vector<protocol_data_entry> protocol_data{convert_entry};
  transaction protocol_tx;
  if (!construct_protocol_tx(height, protocol_tx, protocol_data, HF_VERSION_ORACLE_CONVERT))
    return false;
  if (protocol_tx.vout.size() != 1)
    return false;
  if (boost::get<txout_to_carrot_v1>(&protocol_tx.vout[0].target) == nullptr)
    return false;

  blk_bad.protocol_tx = protocol_tx;
  blk_bad.invalidate_hashes();

  DO_CALLBACK(events, "mark_bad_block");
  events.push_back(blk_bad);

  // The rejected block must not have advanced the chain: genesis, blk_1 and blk_2 only.
  DO_CALLBACK(events, "check_chain_height");

  return true;
}

bool gen_convert_block_protocol_mint::mark_bad_block(cryptonote::core& /*c*/, size_t ev_index, const std::vector<test_event_entry>& /*events*/)
{
  m_bad_block_index = ev_index + 1;
  return true;
}

bool gen_convert_block_protocol_mint::check_chain_height(cryptonote::core& c, size_t /*ev_index*/, const std::vector<test_event_entry>& events)
{
  // Every block event except the rejected one must have been added to the chain.
  uint64_t expected_height = 0;
  for (const test_event_entry& event : events)
    if (boost::get<cryptonote::block>(&event) != nullptr)
      ++expected_height;
  --expected_height;

  const uint64_t height = c.get_blockchain_storage().get_current_blockchain_height();
  if (height != expected_height)
  {
    MERROR("Expected blockchain height " << expected_height << ", got " << height);
    return false;
  }
  return true;
}

bool gen_convert_block_protocol_mint::check_block_verification_context(const block_verification_context& bvc, size_t event_idx, const block& /*blk*/)
{
  if (event_idx == m_bad_block_index)
  {
    // The block carries a protocol-transaction mint that no transaction in the block
    // earned; validate_protocol_transaction() must reject it.
    if (!bvc.m_verifivation_failed || bvc.m_added_to_main_chain)
    {
      MERROR("Block with an unearned protocol transaction mint was not rejected");
      return false;
    }
    return true;
  }

  if (bvc.m_verifivation_failed)
  {
    MERROR("Block was unexpectedly rejected");
    return false;
  }
  return true;
}
