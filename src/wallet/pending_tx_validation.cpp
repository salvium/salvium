// Copyright (c) 2026, Salvium contributors
// Distributed under the BSD 3-Clause license; see LICENSE.
#include "wallet2.h"
#include "tx_builder.h"
#include "carrot_core/enote_utils.h"
#include "carrot_core/output_set_finalization.h"
#include "carrot_impl/format_utils.h"
#include "device/device_default.hpp"
#include "cryptonote_basic/cryptonote_format_utils.h"
#include <boost/multiprecision/cpp_int.hpp>
#include <set>
#include "crypto/keccak.h"

namespace tools
{
namespace
{
void require(bool condition, const char* message)
{
  if (!condition) throw std::runtime_error(std::string("Pending transaction: ") + message);
}
uint64_t wallet_output_index(const wallet2::transfer_details& td)
{
  // Salvium rings use the index within their asset. Old imported records can
  // explicitly mark that index unavailable and retain the legacy global index.
  return td.m_asset_type_output_index == std::numeric_limits<uint64_t>::max()
    ? td.m_global_output_index : td.m_asset_type_output_index;
}
using source_identity = std::pair<uint64_t, std::array<unsigned char, 32>>;
source_identity source_key(uint64_t index, const rct::key& key)
{
  source_identity result{index, {}};
  std::memcpy(result.second.data(), key.bytes, result.second.size());
  return result;
}
std::map<source_identity, size_t> index_sources(const std::vector<cryptonote::tx_source_entry>& sources)
{
  std::map<source_identity, size_t> result;
  for (size_t i = 0; i < sources.size(); ++i)
  {
    const auto& source = sources[i];
    require(source.real_output < source.outputs.size(), "real output is outside source ring");
    const auto& real = source.outputs[source.real_output];
    require(result.emplace(source_key(real.first, real.second.dest), i).second, "duplicate real source output");
  }
  return result;
}
void check_source_keys(const cryptonote::tx_source_entry& source, const wallet2::transfer_details& td)
{
  require(source.real_out_tx_key == cryptonote::get_tx_pub_key_from_extra(td.m_tx, td.m_pk_index) &&
          source.real_out_additional_tx_keys == cryptonote::get_additional_tx_pub_keys_from_extra(td.m_tx),
          "source transaction keys differ from wallet record");
}
using amount_t = boost::multiprecision::uint128_t;
using destination_totals = std::map<std::string, amount_t>;
std::string destination_key(const cryptonote::tx_destination_entry& d)
{
  return d.asset_type + ":" + cryptonote::get_account_address_as_str(cryptonote::MAINNET, d.is_subaddress, d.addr);
}
bool same_destination(const cryptonote::tx_destination_entry& a, const cryptonote::tx_destination_entry& b)
{
  return a.addr == b.addr && a.amount == b.amount && a.asset_type == b.asset_type &&
    a.is_subaddress == b.is_subaddress && a.is_integrated == b.is_integrated &&
    (!a.is_integrated || a.original == b.original);
}
void check_destinations(const std::vector<cryptonote::tx_destination_entry>& a,
                      const std::vector<cryptonote::tx_destination_entry>& b)
{
  require(a.size() == b.size(), "destination count differs from construction data");
  for (size_t i = 0; i < a.size(); ++i)
    require(same_destination(a[i], b[i]), "destination differs from construction data");
}
void check_legacy_extra(const wallet2::pending_tx& ptx, const wallet2::tx_construction_data& data, bool redacted)
{
  using namespace cryptonote;
  auto expected = data.extra, actual = ptx.tx.extra;
  std::vector<tx_extra_field> expected_fields, actual_fields;
  require(parse_tx_extra(expected, expected_fields) && parse_tx_extra(actual, actual_fields), "malformed transaction extra");
  // Transaction public keys are regenerated when a cold signer rerolls a tx.
  for (auto* extra : {&expected, &actual})
  {
    remove_field_from_tx_extra(*extra, typeid(tx_extra_pub_key));
    remove_field_from_tx_extra(*extra, typeid(tx_extra_additional_pub_keys));
    require(sort_tx_extra(*extra, *extra, false), "cannot normalize transaction extra");
  }
  if (expected == actual) return;
  tx_extra_nonce expected_nonce, actual_nonce;
  crypto::hash8 expected_id{}, actual_id{};
  require(find_tx_extra_field_by_type(expected_fields, expected_nonce) &&
          find_tx_extra_field_by_type(actual_fields, actual_nonce) &&
          get_encrypted_payment_id_from_tx_extra_nonce(expected_nonce.nonce, expected_id) &&
          get_encrypted_payment_id_from_tx_extra_nonce(actual_nonce.nonce, actual_id),
          "transaction extra differs from construction data");
  if (!redacted)
  {
    const auto view = get_destination_view_key_pub(data.splitted_dsts, data.change_dts.addr);
    hw::core::device_default device;
    require(view != crypto::null_pkey && device.decrypt_payment_id(actual_id, view, ptx.tx_key) && actual_id == expected_id,
            "encrypted payment ID differs from construction data");
  }
  // Cold exports store the decrypted short ID. The view wallet cannot repeat
  // the signer's encryption check after transaction keys have been redacted.
  remove_field_from_tx_extra(expected, typeid(tx_extra_nonce));
  remove_field_from_tx_extra(actual, typeid(tx_extra_nonce));
  require(expected == actual, "transaction extra differs from construction data");
}
}

void wallet2::validate_unsigned_tx(const tx_construction_data& data) const
{
  using namespace cryptonote;
  require(!data.sources.empty() && data.sources.size() == data.selected_transfers.size(), "invalid unsigned input count");
  require(data.tx_type == transaction_type::TRANSFER || data.tx_type == transaction_type::STAKE ||
          data.tx_type == transaction_type::BURN || data.tx_type == transaction_type::AUDIT || data.tx_type == transaction_type::RETURN,
          "unsupported or missing unsigned transaction type; recreate old export");
  require(data.extra.size() <= MAX_TX_EXTRA_SIZE, "oversized unsigned transaction extra");
  std::set<size_t> selected;
  std::set<uint32_t> input_subaddresses;
  const auto indexed_sources = index_sources(data.sources);
  amount_t inputs = 0, outputs = 0;
  std::string asset;
  for (size_t index : data.selected_transfers)
  {
    require(index < m_transfers.size() && selected.insert(index).second, "invalid unsigned selected transfer");
    const auto& td = m_transfers[index];
    require(!td.m_spent && !td.m_frozen, "unsigned input is spent or frozen");
    require(td.m_subaddr_index.major == data.subaddr_account, "unsigned input account differs from construction data");
    input_subaddresses.insert(td.m_subaddr_index.minor);
    if (asset.empty()) asset = td.asset_type;
    require(asset == td.asset_type, "mixed unsigned input assets");
    const auto found = indexed_sources.find(source_key(wallet_output_index(td), rct::pk2rct(td.get_public_key())));
    require(found != indexed_sources.end(), "unsigned selected transfer is missing from sources");
    const auto& src = data.sources[found->second];
    require(src.amount == td.m_amount && src.asset_type == asset && src.rct == td.m_rct &&
            src.real_output_in_tx_index == td.m_internal_output_index, "unsigned source differs from wallet record");
    require(src.outputs[src.real_output].second.mask == rct::commit(src.amount, src.mask) &&
            (td.m_mask == rct::identity() || td.m_mask == src.mask), "unsigned source mask/commitment mismatch");
    check_source_keys(src, td);
    inputs += td.m_amount;
  }
  destination_totals expected, split;
  require(input_subaddresses == data.subaddr_indices, "unsigned input subaddresses differ from construction data");
  for (const auto& d : data.dests) if (d.amount) expected[destination_key(d)] += d.amount;
  if (data.change_dts.amount)
  {
    auto change = m_subaddresses.find(data.change_dts.addr.m_spend_public_key);
    require(change != m_subaddresses.end() && get_subaddress(change->second) == data.change_dts.addr,
            "unsigned change does not belong to this wallet");
    expected[destination_key(data.change_dts)] += data.change_dts.amount;
  }
  for (const auto& d : data.splitted_dsts)
  {
    require(d.asset_type == asset, "unsigned destination asset mismatch");
    if (d.amount) split[destination_key(d)] += d.amount;
    outputs += d.amount;
  }
  require(expected == split, "unsigned split destinations differ from payments and change");
  require(inputs <= UINT64_MAX && outputs <= inputs, "unsigned input/output overflow or overspend");
}

// Validation uses wallet-owned transfer records and view secrets. It does not
// import key images, change spend state, contact a daemon, or sign anything.
void wallet2::validate_pending_tx(const pending_tx& ptx, bool allow_spent,
    const std::vector<crypto::key_image>* imported_key_images, bool redacted) const
{
  using namespace cryptonote;
  const auto& tx = ptx.tx;
  require(tx.version >= 2 && tx.version <= TRANSACTION_VERSION_ENABLE_TOKENS, "unsupported transaction version");
  require(!tx.vin.empty() && !tx.vout.empty(), "missing inputs or outputs");
  require(tx.extra.size() <= MAX_TX_EXTRA_SIZE, "oversized transaction extra");
  require(ptx.selected_transfers.size() == tx.vin.size(), "input count differs from selected transfers");
  require(ptx.fee == tx.rct_signatures.txnFee, "fee differs from actual transaction");
  require(tx.rct_signatures.ecdhInfo.size() == tx.vout.size() &&
          tx.rct_signatures.outPk.size() == tx.vout.size(), "invalid confidential output dimensions");

  const auto* carrot_proposal = std::get_if<carrot::CarrotTransactionProposalV1>(&ptx.construction_data);
  const auto* legacy = std::get_if<tx_construction_data>(&ptx.construction_data);
  require(carrot_proposal || legacy, "missing construction data");
  const auto& sources = carrot_proposal ? carrot_proposal->sources : legacy->sources;
  require(sources.size() == tx.vin.size(), "source count differs from actual inputs; recreate incomplete old export");
  const auto indexed_sources = index_sources(sources);
  std::set<size_t> selected, used_sources;
  std::set<crypto::key_image> seen_images;
  std::vector<crypto::key_image> images;
  std::ostringstream images_text;
  for (const auto& input : tx.vin)
  {
    require(input.type() == typeid(txin_to_key), "unexpected input type");
    const auto& in = boost::get<txin_to_key>(input);
    require(seen_images.insert(in.k_image).second, "duplicate key image");
    require(in.asset_type == tx.source_asset_type, "input asset mismatch");
    images.push_back(in.k_image);
    if (images.size() > 1) images_text << ' ';
    images_text << in.k_image;
  }
  require(ptx.key_images == images_text.str() || ptx.key_images == images_text.str() + " ", "key image display differs from actual inputs");

  amount_t input_amount = 0;
  for (size_t selected_index : ptx.selected_transfers)
  {
    require(selected_index < m_transfers.size() && selected.insert(selected_index).second, "invalid or duplicate selected transfer");
    const auto& td = m_transfers[selected_index];
    require(allow_spent || (!td.m_spent && !td.m_frozen), "selected transfer is spent or frozen");
    require(td.asset_type == tx.source_asset_type, "selected transfer has a different asset");
    const auto found = indexed_sources.find(source_key(wallet_output_index(td), rct::pk2rct(td.get_public_key())));
    require(found != indexed_sources.end() && used_sources.insert(found->second).second, "selected transfer is missing from sources");
    const auto source_index = found->second;
    const auto& src = sources[source_index];
    require(src.amount == td.m_amount && src.asset_type == td.asset_type && src.rct == td.m_rct,
            "source amount, asset or RingCT flag differs from wallet record");
    require(src.real_output_in_tx_index == td.m_internal_output_index, "source output position differs from wallet record");
    require(src.outputs[src.real_output].second.mask == rct::commit(src.amount, src.mask), "source commitment does not match amount and mask");
    require(td.m_mask == rct::identity() || src.mask == td.m_mask, "source mask differs from wallet record");
    check_source_keys(src, td);
    if (carrot_proposal)
    {
      require(!td.m_tx.vin.empty(), "selected output has no parent inputs");
      const bool coinbase = td.m_tx.vin.front().type() == typeid(txin_gen);
      require(src.carrot == td.is_carrot() && src.coinbase == coinbase &&
              src.block_index == td.m_block_height && src.address_spend_pubkey == td.m_recovered_spend_pubkey,
              "Carrot source context differs from wallet record");
      if (!coinbase && td.m_tx.vin.front().type() == typeid(txin_to_key))
        require(src.first_rct_key_image == boost::get<txin_to_key>(td.m_tx.vin.front()).k_image,
                "source parent key image differs from wallet record");
    }
    const crypto::key_image* image = nullptr;
    if (imported_key_images)
    {
      require(selected_index < imported_key_images->size(), "imported key images omit selected transfer");
      image = &imported_key_images->at(selected_index);
      require(!td.m_key_image_known || td.m_key_image_partial || *image == td.m_key_image,
              "imported key image differs from known wallet key image");
    }
    else if (td.m_key_image_known && !td.m_key_image_partial)
      image = &td.m_key_image;
    require(image != nullptr, "selected transfer's key image is unknown");
    const auto image_it = std::find(images.begin(), images.end(), *image);
    require(image_it != images.end(), "selected transfer's key image is missing from transaction");
    const auto& in = boost::get<txin_to_key>(tx.vin[image_it - images.begin()]);
    require(in.amount == (src.rct ? 0 : src.amount), "input amount differs from source");
    std::vector<uint64_t> absolute_offsets;
    for (const auto& member : src.outputs)
    {
      require(absolute_offsets.empty() || member.first > absolute_offsets.back(), "source ring indices are not strictly increasing");
      absolute_offsets.push_back(member.first);
    }
    require(in.key_offsets == absolute_output_offsets_to_relative(absolute_offsets), "actual input ring differs from construction data");
    input_amount += src.amount;
  }
  require(input_amount <= UINT64_MAX, "input amount overflow");

  for (const auto& dest : ptx.dests)
  {
    if (!dest.original.empty())
    {
      address_parse_info info;
      require(get_account_address_from_str(info, m_nettype, dest.original) && info.address == dest.addr &&
              info.is_subaddress == dest.is_subaddress && info.has_payment_id == dest.is_integrated, "displayed destination address differs from its keys");
    }
  }

  if (carrot_proposal)
  {
    require(tx.version >= TRANSACTION_VERSION_CARROT, "Carrot proposal used with a legacy transaction");
    const auto& proposal = *carrot_proposal;
    require(proposal.key_images_sorted == images, "proposal key images differ from transaction order");
    require(proposal.fee == ptx.fee, "proposal fee mismatch");
    const auto expected_type = proposal.tx_type == transaction_type::RETURN ? transaction_type::TRANSFER : proposal.tx_type;
    require(tx.type == expected_type && tx.amount_burnt == proposal.amount_burnt, "transaction type or burnt amount differs from proposal");
    for (const auto& self : proposal.selfsend_payment_proposals)
      require(m_account.subaddress(self.subaddr_index).address_spend_pubkey == self.proposal.destination_address_spend_pubkey,
              "self-send destination does not belong to this wallet");

    transfer_container imported_transfers;
    if (imported_key_images)
    {
      imported_transfers = m_transfers;
      for (size_t i : selected)
      {
        imported_transfers[i].m_key_image = imported_key_images->at(i);
        imported_transfers[i].m_key_image_known = true;
      }
    }
    const auto expected = wallet::make_pending_carrot_tx(proposal,
        imported_key_images ? imported_transfers : m_transfers, m_account, m_nettype);
    check_destinations(ptx.dests, expected.dests);
    require(same_destination(ptx.change_dts, expected.change_dts), "change differs from proposal");
    require(ptx.subaddr_account == expected.subaddr_account && ptx.subaddr_indices == expected.subaddr_indices,
            "selected subaddresses differ from proposal");
    if (!redacted)
      require(ptx.tx_key == expected.tx_key && ptx.additional_tx_keys == expected.additional_tx_keys, "transaction keys differ from proposal");

    std::vector<carrot::CarrotPaymentProposalSelfSendV1> selfsend;
    for (const auto& self : proposal.selfsend_payment_proposals) selfsend.push_back(self.proposal);
    std::vector<carrot::RCTOutputEnoteProposal> outputs;
    carrot::RCTOutputEnoteProposal return_enote{};
    carrot::encrypted_payment_id_t pid;
    size_t change_index = size_t(-1);
    std::unordered_map<crypto::public_key, size_t> indices;
    std::vector<std::pair<bool, size_t>> order;
    carrot::get_output_enote_proposals(proposal.normal_payment_proposals, selfsend, proposal.dummy_encrypted_payment_id,
        &m_account.s_view_balance_dev, &m_account.k_view_incoming_dev, images.front(), outputs, return_enote,
        pid, proposal.tx_type, change_index, indices, &order);
    require(outputs.size() == tx.vout.size() && change_index < outputs.size(), "invalid output or change count");
    require(tx.return_address_change_mask.size() == outputs.size(), "invalid encrypted change-index count");
    std::vector<uint8_t> change_masks;
    wallet::encrypt_change_index(proposal.normal_payment_proposals, selfsend, images.front(), change_index, order, change_masks);
    std::vector<carrot::CarrotEnoteV1> enotes;
    amount_t output_amount = 0;
    for (size_t i = 0; i < outputs.size(); ++i)
    {
      auto enote = outputs[i].enote;
      output_amount += outputs[i].amount;
      // Self-send return fields and change masks are random padding, as are
      // return fields on already returned payments. They carry no destination.
      if (order[i].first) change_masks[i] = tx.return_address_change_mask[i];
      if (order[i].first || proposal.tx_type == transaction_type::RETURN)
      {
        if (i < tx.return_address_list.size())
          std::memcpy(enote.return_enc.bytes, tx.return_address_list[i].data, sizeof(enote.return_enc));
      }
      enotes.push_back(enote);
    }
    const bool burns = tx.type == transaction_type::STAKE || tx.type == transaction_type::BURN ||
                       tx.type == transaction_type::CREATE_TOKEN || tx.type == transaction_type::ROLLUP;
    require(burns || tx.amount_burnt == 0, "unexpected burnt amount");
    require(input_amount == output_amount + tx.amount_burnt + (tx.source_asset_type == "SAL1" ? amount_t(ptx.fee) : amount_t(0)), "input/output/fee balance mismatch");

    auto rebuilt = carrot::store_carrot_to_transaction_v1(enotes, images, sources, proposal.fee, proposal.tx_type,
        proposal.amount_burnt, change_masks, proposal.token, return_enote, pid,
        tx.version >= TRANSACTION_VERSION_ENABLE_TOKENS ? HF_VERSION_ENABLE_TOKENS : HF_VERSION_CARROT);
    rebuilt.rollup_binding_tag = proposal.rollup_binding_tag;
    if (proposal.tx_type == transaction_type::ROLLUP) rebuilt.layer2_rollup_data = proposal.layer2_rollup_data;
    require(proposal.extra.size() <= MAX_TX_EXTRA_SIZE - rebuilt.extra.size(), "oversized proposal extra");
    rebuilt.extra.insert(rebuilt.extra.end(), proposal.extra.begin(), proposal.extra.end());
    require(sort_tx_extra(rebuilt.extra, rebuilt.extra, false), "malformed proposal extra");
    if (tx.type == transaction_type::STAKE || tx.type == transaction_type::CREATE_TOKEN)
    {
      // Recover the random return anchor with our deterministic return secret,
      // then reproduce the return address, ephemeral key, view tag and ciphertext.
      const auto input_context = carrot::make_carrot_input_context(images.front());
      crypto::secret_key return_secret;
      m_account.s_view_balance_dev.make_internal_return_privkey(input_context, enotes[change_index].onetime_address, return_secret);
      crypto::public_key return_public;
      require(crypto::secret_key_to_public_key(return_secret, return_public), "invalid return secret");
      carrot::CarrotDestinationV1 destination;
      carrot::make_carrot_main_address_v1(enotes[change_index].onetime_address, return_public, destination);
      mx25519_pubkey ephemeral, shared;
      std::memcpy(ephemeral.data, tx.protocol_tx_data.return_pubkey.data, sizeof(ephemeral));
      require(carrot::make_carrot_uncontextualized_shared_key_receiver(return_secret, ephemeral, shared), "invalid return ephemeral key");
      crypto::hash contextual;
      carrot::make_carrot_sender_receiver_secret(shared.data, ephemeral, input_context, contextual);
      const auto anchor = carrot::decrypt_carrot_anchor(tx.protocol_tx_data.return_anchor_enc, contextual, tx.protocol_tx_data.return_address);
      carrot::CarrotPaymentProposalV1 return_proposal{.destination = destination, .amount = 0, .randomness = anchor};
      carrot::encrypted_payment_id_t unused_pid;
      carrot::get_output_proposal_return_v1(return_proposal, images.front(), nullptr, return_enote, unused_pid);
      require(tx.protocol_tx_data.return_address == return_enote.enote.onetime_address &&
              std::memcmp(tx.protocol_tx_data.return_pubkey.data, return_enote.enote.enote_ephemeral_pubkey.data, sizeof(ephemeral)) == 0 &&
              tx.protocol_tx_data.return_view_tag == return_enote.enote.view_tag &&
              tx.protocol_tx_data.return_anchor_enc == return_enote.enote.anchor_enc, "stake/token return data does not pay this wallet");
      rebuilt.protocol_tx_data = tx.protocol_tx_data;
    }
    require(get_transaction_prefix_hash(rebuilt) == get_transaction_prefix_hash(tx), "actual transaction payload differs from proposal");
    for (size_t i = 0; i < outputs.size(); ++i)
      require(rebuilt.rct_signatures.outPk[i].mask == tx.rct_signatures.outPk[i].mask &&
              std::memcmp(rebuilt.rct_signatures.ecdhInfo[i].amount.bytes, tx.rct_signatures.ecdhInfo[i].amount.bytes, 8) == 0,
              "encrypted output amount or commitment differs from proposal");
  }
  else
  {
    require(tx.version < TRANSACTION_VERSION_CARROT, "legacy construction data used with Carrot transaction");
    require(legacy->selected_transfers == ptx.selected_transfers, "selected transfers differ from construction data");
    std::set<uint32_t> input_subaddresses;
    for (const auto index : selected)
    {
      require(m_transfers[index].m_subaddr_index.major == legacy->subaddr_account, "input account differs from construction data");
      input_subaddresses.insert(m_transfers[index].m_subaddr_index.minor);
    }
    require(input_subaddresses == legacy->subaddr_indices, "input subaddresses differ from construction data");
    require(tx.unlock_time == legacy->unlock_time, "unlock time differs from construction data");
    require((legacy->tx_type == transaction_type::RETURN ? transaction_type::TRANSFER : legacy->tx_type) == tx.type, "transaction type differs from construction data");
    require(same_destination(ptx.change_dts, legacy->change_dts), "change differs from construction data");
    check_destinations(ptx.dests, legacy->dests);
    if (ptx.change_dts.amount)
    {
      auto change = m_subaddresses.find(ptx.change_dts.addr.m_spend_public_key);
      require(change != m_subaddresses.end() && get_subaddress(change->second) == ptx.change_dts.addr,
              "change address does not belong to this wallet");
    }
    destination_totals expected, split;
    for (const auto& d : ptx.dests) if (d.amount) expected[destination_key(d)] += d.amount;
    if (ptx.change_dts.amount) expected[destination_key(ptx.change_dts)] += ptx.change_dts.amount;
    amount_t total = 0, burnt = 0;
    std::vector<tx_destination_entry> actual_dests;
    for (const auto& d : legacy->splitted_dsts)
    {
      require(d.asset_type == tx.source_asset_type, "destination asset differs from source");
      if (d.amount) split[destination_key(d)] += d.amount;
      total += d.amount;
      if ((tx.type == transaction_type::STAKE || tx.type == transaction_type::AUDIT || tx.type == transaction_type::BURN) && !d.is_change)
        burnt += d.amount;
      else actual_dests.push_back(d);
    }
    require(expected == split, "split destinations do not match requested payments and change");
    require(input_amount == total + ptx.fee && burnt == tx.amount_burnt, "input/output/fee/burn balance mismatch");
    require(actual_dests.size() == tx.vout.size(), "output count differs from construction data");
    check_legacy_extra(ptx, *legacy, redacted);
    // Cold-signing intentionally redacts tx secret keys from the view wallet.
    // These output checks run on the signer before redaction, and on ordinary
    // locally created/hardware-returned transactions when keys are available.
    if (!redacted)
    {
      size_t standard = 0, sub = 0;
      account_public_address single{};
      classify_addresses(legacy->splitted_dsts, ptx.change_dts.addr, standard, sub, single);
      const bool additional = legacy->tx_type == transaction_type::RETURN || (sub > 0 && (standard > 0 || sub > 1));
      require(ptx.additional_tx_keys.size() == (additional ? actual_dests.size() : 0), "invalid additional transaction key count");
      crypto::public_key pub = rct::rct2pk(standard == 0 && sub == 1 ?
          rct::scalarmultKey(rct::pk2rct(single.m_spend_public_key), rct::sk2rct(ptx.tx_key)) : rct::scalarmultBase(rct::sk2rct(ptx.tx_key)));
      require(get_tx_pub_key_from_extra(tx) == pub, "transaction public key differs from secret key");
      hw::core::device_default device;
      std::vector<crypto::public_key> additional_pubs;
      rct::keyV amount_keys;
      size_t change_index = actual_dests.size();
      for (size_t i = 0; i < actual_dests.size(); ++i)
      {
        if (actual_dests[i].is_change) { require(change_index == actual_dests.size(), "multiple change outputs"); change_index = i; }
        crypto::public_key output_key, actual_key;
        crypto::view_tag tag{};
        require(device.generate_output_ephemeral_keys(tx.version, m_account.get_keys(), pub, ptx.tx_key, actual_dests[i],
            ptx.change_dts.addr, i, additional, ptx.additional_tx_keys, additional_pubs, amount_keys, output_key, legacy->use_view_tags, tag), "cannot reproduce output key");
        require(get_output_public_key(tx.vout[i], actual_key) && actual_key == output_key, "output pays a different key");
        const auto actual_tag = get_output_view_tag(tx.vout[i]);
        require(!legacy->use_view_tags || (actual_tag && *actual_tag == tag), "incorrect view tag");
        rct::ecdhTuple amount{};
        amount.amount = rct::d2h(actual_dests[i].amount);
        rct::ecdhDecode(amount, amount_keys.at(i), true);
        require(std::memcmp(amount.amount.bytes, tx.rct_signatures.ecdhInfo[i].amount.bytes, 8) == 0 &&
                rct::commit(actual_dests[i].amount, amount.mask) == tx.rct_signatures.outPk[i].mask, "output amount differs from destination");
      }
      require(get_additional_tx_pub_keys_from_extra(tx) == additional_pubs, "additional public keys differ from transaction keys");
      if (tx.type == transaction_type::TRANSFER || tx.type == transaction_type::STAKE || tx.type == transaction_type::AUDIT)
      {
        require(change_index < tx.vout.size(), "missing change output");
        crypto::public_key change_key;
        require(get_output_public_key(tx.vout[change_index], change_key), "invalid change output key");
        if (tx.type == transaction_type::STAKE || tx.type == transaction_type::AUDIT)
        {
          crypto::key_derivation derivation;
          crypto::public_key returned_key;
          require(crypto::generate_key_derivation(tx.return_pubkey, m_account.get_keys().m_view_secret_key, derivation) &&
                  crypto::derive_public_key(derivation, 0, change_key, returned_key) && returned_key == tx.return_address,
                  "stake return address does not pay this wallet");
        }
        else
        {
          const auto view_change = rct::scalarmultKey(rct::pk2rct(change_key), rct::sk2rct(m_account.get_keys().m_view_secret_key));
          if (tx.version >= TRANSACTION_VERSION_N_OUTS)
          {
            require(tx.return_address_list.size() == tx.vout.size() && tx.return_address_change_mask.size() == tx.vout.size(),
                    "invalid return-address dimensions");
            for (size_t i = 0; i < tx.vout.size(); ++i)
            {
              struct { char domain[8]; rct::key key; } material{};
              std::memcpy(material.domain, "RETURN", 6);
              material.key = amount_keys.at(i);
              crypto::ec_scalar scalar;
              crypto::hash_to_scalar(&material, sizeof(material), scalar);
              rct::key y;
              std::memcpy(y.bytes, scalar.data, sizeof(y));
              require(rct::scalarmultKey(rct::pk2rct(tx.return_address_list[i]), y) == view_change, "incorrect return address");
              std::memset(material.domain, 0, sizeof(material.domain));
              std::memcpy(material.domain, "CHG_IDX", 7);
              crypto::secret_key mask;
              keccak(reinterpret_cast<const uint8_t*>(&material), sizeof(material), reinterpret_cast<uint8_t*>(&mask), sizeof(mask));
              require(tx.return_address_change_mask[i] == static_cast<uint8_t>(change_index ^ mask.data[0]), "incorrect encrypted change index");
            }
          }
          else
          {
            struct { char domain[8]; crypto::public_key key; } material{};
            std::memcpy(material.domain, "RETURN", 6);
            material.key = change_key;
            crypto::ec_scalar scalar;
            crypto::hash_to_scalar(&material, sizeof(material), scalar);
            rct::key y;
            std::memcpy(y.bytes, scalar.data, sizeof(y));
            require(rct::scalarmultKey(rct::pk2rct(tx.return_address), y) == view_change, "incorrect return address");
          }
        }
      }

    }
  }
}
} // namespace tools
