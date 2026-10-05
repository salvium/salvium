// Controlled ancestry tests. No daemon, database mutation, or consensus bypass.
#include "cryptonote_core/lineage_audit.h"
#include "cryptonote_core/blockchain.h"
#include "ringct/rctSigs.h"
#include "device/device.hpp"
#include "crypto/generators.h"
#include "cryptonote_basic/cryptonote_format_utils.h"
#include "blockchain_db/testdb.h"
#include "blockchain_db/lmdb/db_lmdb.h"
#include "cryptonote_basic/tx_extra.h"
#include "cryptonote_config.h"
#include "string_tools.h"
#include <fstream>
#include <algorithm>
#include <iostream>
#include <random>
#include <stdexcept>
#include <chrono>
#include <sys/resource.h>

namespace cryptonote {
class audit_history_db : public BaseTestDB {
public:
  transaction payout;
  uint64_t payout_height = 100;
  block get_block_from_height(const uint64_t& height) const override {
    block b;
    b.major_version = 14;
    if (height == payout_height) b.protocol_tx = payout;
    return b;
  }
  crypto::hash get_block_hash_from_height(const uint64_t& height) const override {
    return height == payout_height ? get_transaction_hash(payout) : crypto::null_hash;
  }
  int get_yield_block_info(uint64_t, yield_block_info& info) const override {
    info = {}; info.slippage_total_this_block = 10; info.locked_coins_tally = 1000; return 0;
  }
  bool tx_exists(const crypto::hash& hash) const override { return hash == get_transaction_hash(payout); }
  transaction get_tx(const crypto::hash&) const override { return payout; }
  uint64_t get_tx_block_height(const crypto::hash&) const override { return payout_height; }
};
// Canonical-shaped accepted audit authorization and its later SAL1 payout.
class accepted_audit_db : public BaseTestDB {
public:
  transaction origin, payout;
  uint64_t origin_height = 80, payout_height = 121;
  uint8_t origin_version = HF_VERSION_AUDIT2;
  bool duplicate_origin = false;
  block get_block_from_height(const uint64_t& height) const override {
    block b;
    if (height == origin_height) {
      b.major_version = origin_version;
      b.tx_hashes = {get_transaction_hash(origin)};
      if (duplicate_origin) b.tx_hashes.push_back(b.tx_hashes.front());
    }
    if (height == payout_height) b.protocol_tx = payout;
    return b;
  }
  crypto::hash get_block_hash_from_height(const uint64_t& height) const override {
    return height ? get_block_hash(get_block_from_height(height)) : crypto::null_hash;
  }
  bool tx_exists(const crypto::hash& hash) const override {
    return hash == get_transaction_hash(origin) || hash == get_transaction_hash(payout);
  }
  transaction get_tx(const crypto::hash& hash) const override {
    if (hash == get_transaction_hash(origin)) return origin;
    if (hash == get_transaction_hash(payout)) return payout;
    throw std::runtime_error("Unknown accepted-audit fixture transaction");
  }
  uint64_t get_tx_block_height(const crypto::hash& hash) const override {
    return hash == get_transaction_hash(origin) ? origin_height : payout_height;
  }
};
// Token registration and issuance are in the same canonical block.
class token_issuance_db : public accepted_audit_db {
public:
  bool second_mint = false;
  token_issuance_db() { origin_height = payout_height = 80; }
  block get_block_from_height(const uint64_t& height) const override {
    auto b = accepted_audit_db::get_block_from_height(height);
    b.major_version = HF_VERSION_ENABLE_TOKENS;
    return b;
  }
  uint64_t get_output_id_by_asset_index(const std::string& asset, uint64_t index) const override {
    if (asset != "salYAHU" || index) throw std::runtime_error("Invalid token fixture index");
    return 0;
  }
  tx_out_index get_output_tx_and_index_from_global(const uint64_t&) const override {
    return {second_mint ? crypto::null_hash : get_transaction_hash(payout), 0};
  }
};
class audit_window_db : public BaseTestDB {
public:
  uint64_t candidate = 109, epoch = 0;
  std::vector<tx_out_index> outputs;
  std::unordered_map<crypto::hash, std::pair<transaction, uint64_t>> transactions;
  tx_out_index add(const crypto::public_key& key, uint64_t height, uint64_t amount = 1) {
    transaction tx;
    tx.version = 2; tx.type = transaction_type::TRANSFER;
    tx.vin.push_back(txin_to_key{});
    tx.vout.push_back({amount, txout_to_key{key, "SAL1", 10}});
    const auto id = get_transaction_hash(tx);
    transactions.emplace(id, std::make_pair(tx, height));
    outputs.emplace_back(id, 0);
    return outputs.back();
  }
  transaction get_tx(const crypto::hash& id) const override { return transactions.at(id).first; }
  uint64_t height() const override { return candidate; }
  bool tx_exists(const crypto::hash& id) const override { return transactions.count(id) != 0; }
  bool tx_exists(const crypto::hash& id, uint64_t& tx_id) const override {
    for (size_t index = 0; index < outputs.size(); ++index)
      if (outputs[index].first == id) { tx_id = index; return true; }
    return false;
  }
  std::vector<std::vector<std::pair<uint64_t, uint64_t>>> get_tx_amount_output_indices(
      uint64_t tx_id, size_t n_txes = 1) const override {
    if (n_txes != 1 || tx_id >= outputs.size()) throw std::runtime_error("Invalid test transaction index");
    return {{{tx_id, tx_id}}};
  }
  block get_block_from_height(const uint64_t& height) const override {
    block b;
    for (const auto& entry : transactions) if (entry.second.second == height) b.tx_hashes.push_back(entry.first);
    return b;
  }
  crypto::hash get_block_hash_from_height(const uint64_t& height) const override {
    crypto::hash hash{};
    std::memcpy(&hash, &height, sizeof(height));
    std::memcpy(reinterpret_cast<char*>(&hash) + sizeof(height), &epoch, sizeof(epoch));
    return hash;
  }
  uint64_t get_tx_block_height(const crypto::hash& id) const override { return transactions.at(id).second; }
  tx_out_index get_output_tx_and_index_from_global(const uint64_t& index) const override { return outputs.at(index); }
  uint64_t get_output_id_by_asset_index(const std::string& asset, uint64_t index) const override {
    if (asset != "SAL1" || index >= outputs.size()) throw std::runtime_error("Invalid test output index");
    return index;
  }
};
class lineage_audit_test {
  static void check(bool value, const char* message) {
    if (!value) throw std::runtime_error(message);
  }
  template<class T> static T identity(uint64_t value) {
    T result{};
    std::memcpy(&result, &value, sizeof(value));
    return result;
  }
  static lineage_audit::record root(uint64_t id, uint64_t height, bool bad = false) {
    return {identity<crypto::key_image>(id), identity<crypto::public_key>(id),
        identity<crypto::hash>(id), height, 0, false, 0, bad, 0,
        std::make_shared<const std::vector<lineage_audit::dependency>>()};
  }
  static lineage_audit::record child(uint64_t id, const lineage_audit::record& parent, uint64_t height) {
    auto result = root(id, height);
    result.inputs = std::make_shared<const std::vector<lineage_audit::dependency>>(
        std::vector<lineage_audit::dependency>{{parent.image, "SAL1", {{parent.output_key,
          parent.origin, parent.output_index, parent.output_height, false, parent.output_height + 10}}}});
    return result;
  }
public:
  static void audit_window() {
    check(!lineage_policy::public_enrollment && !lineage_policy::consensus_enforcement,
        "Privacy/review policy unexpectedly enables public proofs or consensus isolation");
    lineage_audit state;
    state.configure(100, 50, 40);
    check(state.closing_height() == 140 && !state.enrollment_open(99) &&
        state.enrollment_open(100) && state.enrollment_open(139) && !state.enrollment_open(140),
        "Audit enrollment cutoff incorrect");
    auto good = root(1, 60), bad = root(2, 61, true), absent = root(3, 62);
    auto pending = child(4, absent, 63);
    auto exchange_receipt = child(7, bad, 64);
    auto stake = child(5, good, 120); stake.stake_return = true;
    state.insert({good, bad, pending, exchange_receipt, stake});
    state.advance(100);
    check(state.get_status(good.image, 109).state == "MATURING" &&
        state.get_status(good.image, 110).state == "AUDIT_PASSED" &&
        state.get_status(good.image, 110).release_height == 110, "Cleared funds did not release at C + 10");
    check(state.stake_payouts(119).empty() && state.stake_payouts(120).size() == 1,
        "Good stake did not preserve normal maturity after C + 10");
    check(state.get_status(bad.image, 110).state == "BAD" &&
        state.get_status(exchange_receipt.image, 110).state == "REVIEW" &&
        state.get_status(exchange_receipt.image, 110).release_height == 0,
        "Confirmed origin was not kept distinct from exchange/descendant review");
    auto last = root(6, 70);
    state.insert({last}); state.advance(139);
    check(state.get_status(last.image, 140).state == "MATURING" &&
        state.get_status(last.image, 148).state == "MATURING" &&
        state.get_status(last.image, 149).state == "AUDIT_PASSED", "Cutoff shortened final clearance delay");
    state.insert({absent}); state.advance(140); state.advance(100000);
    check(state.get_status(pending.image, 100000).state == "PENDING" &&
        state.get_status(bad.image, 100000).state == "BAD", "Closed audit changed unresolved or bad verdict");
    BaseTestDB db;
    block candidate;
    const auto extra = t_serializable_object_to_blob(tx_extra_field{tx_extra_lineage_audit{"late"}});
    candidate.miner_tx.extra.assign(extra.begin(), extra.end());
    bool closed = false;
    try { state.inspect(db, FAKECHAIN, candidate, 140); }
    catch (const std::exception& error) { closed = std::string(error.what()).find("enrollment is closed") != std::string::npos; }
    check(closed, "Raw block accepted late enrollment");
    bool overflow = false;
    try { state.configure(UINT64_MAX - 1, 0, 2); } catch (const std::exception&) { overflow = true; }
    check(overflow, "Audit closing height overflow accepted");
    overflow = false;
    try { state.configure(UINT64_MAX - 10, 0, 2); } catch (const std::exception&) { overflow = true; }
    check(overflow, "Final clearance delay overflow accepted");
    state.configure(100, 0, 40);
    std::vector<lineage_audit::record> backlog;
    for (uint64_t i = 0; i <= lineage_audit::work_per_block; ++i) backlog.push_back(root(1000 + i, 50));
    state.insert(backlog); state.advance(139);
    check(state.get_status(backlog.back().image, 140).state == "PENDING", "Test did not leave final-block backlog");
    state.advance(140); state.advance(100000);
    check(state.get_status(backlog.back().image, 100000).state == "PENDING",
        "Enrolling before cutoff incorrectly authorized completion afterward");
    state.configure(100, 0, 40);
    audit_window_db outputs;
    auto cleared = root(10, 50), rejected = root(11, 51, true);
    cleared.origin = outputs.add(cleared.output_key, 50).first;
    rejected.origin = outputs.add(rejected.output_key, 51).first;
    outputs.add(identity<crypto::public_key>(12), 52); // Never enrolled.
    outputs.add(cleared.output_key, 53, 2); // Same key, different canonical output.
    outputs.add(identity<crypto::public_key>(14), 110); // New validated receipt during enrollment.
    state.insert({cleared, rejected}); state.advance(100);
    check(!state.output_spendable(outputs, FAKECHAIN, 0, 109), "Cleared output spent at C + 9");
    check(state.output_spendable(outputs, FAKECHAIN, 0, 110), "Cleared output not released at C + 10");
    check(!state.output_spendable(outputs, FAKECHAIN, 1, 100000) &&
        !state.output_spendable(outputs, FAKECHAIN, 2, 100000), "Rejected/never-audited output became usable with time");
    check(!state.output_spendable(outputs, FAKECHAIN, 3, 150), "Different output substituted for audited key");
    check(!state.output_spendable(outputs, FAKECHAIN, 4, 119) &&
        state.output_spendable(outputs, FAKECHAIN, 4, 120), "New receipt bypassed normal maturity or required reenrollment");
    transaction spend;
    txin_to_key input; input.asset_type = "SAL1"; input.key_offsets = {0, 4};
    spend.vin.push_back(input);
    std::string reason;
    check(state.check_window_spend(outputs, FAKECHAIN, spend, 150, reason), "Eligible ring rejected");
    for (uint64_t frozen_index : {uint64_t(1), uint64_t(2), uint64_t(3)}) {
      boost::get<txin_to_key>(spend.vin[0]).key_offsets = {0, frozen_index};
      check(!state.check_window_spend(outputs, FAKECHAIN, spend, 150, reason), "Good decoy authorized a frozen output");
    }
    check(state.check_spend(outputs, FAKECHAIN, spend, reason),
        "Report-only lineage incorrectly rejected a spend containing review evidence");
    check(state.eligible_outputs(outputs, FAKECHAIN).empty(), "Decoy index released output at C + 9");
    outputs.candidate = 110;
    check(state.eligible_outputs(outputs, FAKECHAIN) == std::vector<std::pair<uint64_t, uint64_t>>{{0, 50}},
        "Eligible decoy index omitted C + 10 clearance or admitted frozen outputs");
    outputs.candidate = 119;
    check(state.eligible_outputs(outputs, FAKECHAIN).size() == 1, "Decoy index bypassed new receipt maturity");
    outputs.candidate = 120;
    const std::vector<std::pair<uint64_t, uint64_t>> eligible{{0, 50}, {4, 110}};
    check(state.eligible_outputs(outputs, FAKECHAIN) == eligible, "New valid receipt missing from decoy index");
    check(state.eligible_outputs(outputs, FAKECHAIN) == eligible, "Repeated decoy query changed its result");
    outputs.candidate = 109;
    check(state.eligible_outputs(outputs, FAKECHAIN).empty(), "Reorg retained mature decoy permissions");
    outputs.candidate = 120;
    check(state.eligible_outputs(outputs, FAKECHAIN) == eligible, "Replay did not restore decoy population");
    state.records_.at(cleared.image).verdict = 0; ++outputs.epoch;
    check(state.eligible_outputs(outputs, FAKECHAIN) == std::vector<std::pair<uint64_t, uint64_t>>{{4, 110}},
        "Same-height reorg retained detached clearance in decoy cache");
    std::cout << "{\"status\":\"AUDIT_WINDOW_STATE_PASS\",\"default_duration\":"
              << lineage_policy::duration_blocks << "}\n";
  }
  static void historical_returns() {
    audit_history_db db;
    lineage_audit state;
    state.configure(200, 99, 0);
    transaction stake;
    stake.version = 2; stake.type = transaction_type::STAKE;
    stake.vin.push_back(txin_to_key{});
    stake.amount_burnt = 100; stake.source_asset_type = stake.destination_asset_type = "SAL1";
    const auto x = rct::skGen();
    stake.return_address = rct::rct2pk(rct::scalarmultBase(x));
    stake.return_pubkey = rct::rct2pk(rct::pkGen());
    stake.vout.push_back({0, txout_to_key{stake.return_address, "SAL1", 0}});
    db.payout.version = 2; db.payout.type = transaction_type::PROTOCOL;
    db.payout.vin.push_back(txin_gen{db.payout_height});
    db.payout.vout.push_back({120, txout_to_key{stake.return_address, "SAL1", 60}});
    add_additional_tx_pub_keys_to_extra(db.payout.extra, {stake.return_pubkey});
    check(get_config(TESTNET).STAKE_LOCK_PERIOD == 20, "Historical payout test term changed");
    check(state.historical_stake_payout(db, TESTNET, stake, 100), "Valid historical legacy payout rejected");
    db.payout.vout[0].amount++;
    db.payout.invalidate_hashes();
    check(!state.historical_stake_payout(db, TESTNET, stake, 100), "Inflated historical payout accepted or cached across reorg");
    db.payout.vout[0].amount--;
    db.payout.invalidate_hashes();
    check(state.historical_stake_payout(db, TESTNET, stake, 100), "Correct payout did not recover after reorg");
    db.payout.vout.push_back(db.payout.vout[0]);
    db.payout.invalidate_hashes();
    check(!state.historical_stake_payout(db, TESTNET, stake, 100), "Ambiguous duplicate return key accepted");
    db.payout.vout.resize(1);
    auto& output = boost::get<txout_to_key>(db.payout.vout[0].target);
    output.asset_type = "SAL";
    db.payout.invalidate_hashes();
    check(!state.historical_stake_payout(db, TESTNET, stake, 100), "Wrong-asset historical payout accepted");
    output.asset_type = "SAL1";
    output.unlock_time = 0;
    db.payout.invalidate_hashes();
    check(!state.historical_stake_payout(db, TESTNET, stake, 100), "Wrong historical payout lock accepted");
    output.unlock_time = 60;
    db.payout.invalidate_hashes();
    const transaction legacy_payout = db.payout;
    const transaction legacy_stake = stake;
    stake.version = TRANSACTION_VERSION_CARROT;
    stake.vout[0].target = txout_to_carrot_v1{stake.return_address, "SAL1", {}, {}};
    stake.protocol_tx_data.version = 1;
    stake.protocol_tx_data.return_address = stake.return_address;
    stake.protocol_tx_data.return_pubkey = stake.return_pubkey;
    stake.protocol_tx_data.return_view_tag = {};
    stake.protocol_tx_data.return_anchor_enc = {};
    stake.invalidate_hashes();
    db.payout.version = TRANSACTION_VERSION_CARROT;
    db.payout.vout[0].target = txout_to_carrot_v1{stake.return_address, "SAL1", {}, {}};
    db.payout.extra.clear();
    add_tx_pub_key_to_extra(db.payout, stake.return_pubkey);
    db.payout.invalidate_hashes();
    check(state.historical_stake_payout(db, TESTNET, stake, 100), "Valid historical Carrot payout rejected");
    auto& carrot_output = boost::get<txout_to_carrot_v1>(db.payout.vout[0].target);
    reinterpret_cast<unsigned char*>(&carrot_output.encrypted_janus_anchor)[0] ^= 1;
    db.payout.invalidate_hashes();
    check(!state.historical_stake_payout(db, TESTNET, stake, 100), "Wrong historical Carrot anchor accepted");
    reinterpret_cast<unsigned char*>(&carrot_output.encrypted_janus_anchor)[0] ^= 1;
    db.payout.extra.clear();
    add_tx_pub_key_to_extra(db.payout, rct::rct2pk(rct::pkGen()));
    db.payout.invalidate_hashes();
    check(!state.historical_stake_payout(db, TESTNET, stake, 100), "Wrong historical return ephemeral key accepted");
    db.payout = legacy_payout;
    stake = legacy_stake;

    // Verify a real ownership signature for a receipt arriving before its stake.
    // It must stay undisclosed without reserving the image for the receipt tx.
    state.configure(10, 0, 0);
    lineage_enrollment enrollment;
    enrollment.genesis = crypto::null_hash; enrollment.network = static_cast<uint8_t>(TESTNET);
    enrollment.activation_height = 10;
    lineage_output_proof proof;
    proof.transaction = get_transaction_hash(db.payout); proof.amount = 120;
    crypto::generate_key_image(stake.return_address, rct::rct2sk(x), proof.image);
    const auto commitment = rct::commit(proof.amount, rct::identity());
    proof.signature = rct::proveRctTCLSAGSimple(rct::hash2rct(lineage_proof_message(enrollment, proof)),
        {{rct::pk2rct(stake.return_address), commitment}}, x, rct::zero(), rct::identity(), rct::zero(),
        rct::commit(proof.amount, rct::zero()), 0, hw::get_device("default"));
    enrollment.outputs.push_back(proof);
    tx_extra_field field = tx_extra_lineage_audit{t_serializable_object_to_blob(enrollment)};
    const auto extra = t_serializable_object_to_blob(field);
    block candidate;
    candidate.miner_tx.extra.assign(extra.begin(), extra.end());
    const auto inspected = state.inspect(db, TESTNET, candidate, 300);
    check(inspected.empty(), "Unassociated payout reserved its future stake's key image");
    check(state.get_status(proof.image, 300).state == "UNDISCLOSED", "Unassociated payout became good");
    // The accepted opening inventory is a root after ownership verification;
    // its old payout authorization and migration proof are outside this audit.
    state.configure(200, 100, 0);
    enrollment.activation_height = 200;
    proof.signature = rct::proveRctTCLSAGSimple(rct::hash2rct(lineage_proof_message(enrollment, proof)),
        {{rct::pk2rct(stake.return_address), commitment}}, x, rct::zero(), rct::identity(), rct::zero(),
        rct::commit(proof.amount, rct::zero()), 0, hw::get_device("default"));
    const auto encode = [&]() {
      enrollment.outputs = {proof};
      const tx_extra_field opening_field = tx_extra_lineage_audit{t_serializable_object_to_blob(enrollment)};
      const auto opening_extra = t_serializable_object_to_blob(opening_field);
      candidate.miner_tx.extra.assign(opening_extra.begin(), opening_extra.end());
    };
    encode();
    const auto opening_records = state.inspect(db, TESTNET, candidate, 300);
    check(opening_records.size() == 1 && opening_records.front().inputs->empty(), "Opening payout re-audited earlier ancestry");
    state.insert(opening_records);
    state.advance(300);
    check(state.get_status(proof.image, 310).state == "AUDIT_PASSED", "Proven opening inventory did not clear");
    proof.signature.sx[0].bytes[0] ^= 1;
    encode();
    bool rejected = false;
    try { state.inspect(db, TESTNET, candidate, 300); } catch (const std::exception&) { rejected = true; }
    check(rejected, "Opening inventory bypassed ownership verification");
    proof.signature.sx[0].bytes[0] ^= 1;
    encode();
    state.configure(200, 99, 0);
    check(state.inspect(db, TESTNET, candidate, 300).empty(), "Post-boundary protocol output became an opening root");
    std::cout << "OPENING_AND_PAYOUT_PASS: opening ownership and cutoff, post-boundary amount/asset/lock/metadata checks, receipt-before-stake proof\n";
  }
  static void accepted_migration_returns() {
    accepted_audit_db db;
    const auto x = rct::skGen();
    const auto key = rct::rct2pk(rct::scalarmultBase(x));
    const auto ephemeral = rct::rct2pk(rct::pkGen());
    db.origin.version = 2; db.origin.type = transaction_type::AUDIT;
    txin_to_key migration_input;
    migration_input.asset_type = "SAL"; migration_input.key_offsets = {0};
    db.origin.vin.push_back(migration_input);
    db.origin.source_asset_type = "SAL"; db.origin.destination_asset_type = "SAL1";
    db.origin.amount_burnt = 123; db.origin.return_address = key; db.origin.return_pubkey = ephemeral;
    db.payout.version = 2; db.payout.type = transaction_type::PROTOCOL;
    db.payout.vin.push_back(txin_gen{db.payout_height});
    db.payout.vout.push_back({123, txout_to_key{key, "SAL1", CRYPTONOTE_MINED_MONEY_UNLOCK_WINDOW}});
    add_tx_pub_key_to_extra(db.payout, ephemeral);
    lineage_audit state; state.configure(200, 100, 10080);
    const auto valid = [&]() { return state.accepted_conversion_payout(db, TESTNET, db.payout, 0, db.payout_height); };
    check(valid(), "Accepted audit's later SAL1 payout was not recognized");
    const auto original_payout = db.payout;
    ++db.payout.vout[0].amount; db.payout.invalidate_hashes();
    check(!valid(), "Inflated delayed audit payout was accepted"); db.payout = original_payout;
    boost::get<txout_to_key>(db.payout.vout[0].target).asset_type = "SAL"; db.payout.invalidate_hashes();
    check(!valid(), "Wrong-asset delayed audit payout was accepted"); db.payout = original_payout;
    boost::get<txout_to_key>(db.payout.vout[0].target).unlock_time = 0; db.payout.invalidate_hashes();
    check(!valid(), "Wrong lock on delayed audit payout was accepted"); db.payout = original_payout;
    db.payout.extra.clear(); add_tx_pub_key_to_extra(db.payout, rct::rct2pk(rct::pkGen())); db.payout.invalidate_hashes();
    check(!valid(), "Wrong return public key on delayed audit payout was accepted"); db.payout = original_payout;
    db.payout.vout.push_back(db.payout.vout.front()); db.payout.invalidate_hashes();
    check(!valid(), "Duplicate delayed audit payout was accepted"); db.payout = original_payout;
    db.duplicate_origin = true; check(!valid(), "Duplicate audit authorization was accepted"); db.duplicate_origin = false;
    ++db.origin_height; check(!valid(), "Wrong-height audit authorization was accepted"); --db.origin_height;
    db.origin_version = HF_VERSION_AUDIT2_PAUSE; check(!valid(), "Audit authorization outside enrollment was accepted");
    db.origin_version = HF_VERSION_AUDIT2;
    // The conversion itself is accepted even when its authorization falls
    // after the opening. The deliberately unsigned SAL fixture must not need
    // a new SAL proof or SAL-owner enrollment in this SAL1-only audit.
    state.configure(200, 79, 10080); check(valid(), "Accepted conversion after opening was re-audited");
    state.configure(200, 0, 10080); check(valid(), "Accepted conversion required a later opening snapshot");
    state.configure(200, 79, 10080);
    lineage_enrollment enrollment;
    enrollment.genesis = crypto::null_hash; enrollment.network = static_cast<uint8_t>(TESTNET);
    enrollment.activation_height = 200;
    lineage_output_proof proof;
    proof.transaction = get_transaction_hash(db.payout); proof.amount = 123;
    crypto::generate_key_image(key, rct::rct2sk(x), proof.image);
    const auto commitment = rct::commit(proof.amount, rct::identity());
    proof.signature = rct::proveRctTCLSAGSimple(rct::hash2rct(lineage_proof_message(enrollment, proof)),
        {{rct::pk2rct(key), commitment}}, x, rct::zero(), rct::identity(), rct::zero(),
        rct::commit(proof.amount, rct::zero()), 0, hw::get_device("default"));
    const auto encode = [&]() {
      enrollment.outputs = {proof};
      const auto extra = t_serializable_object_to_blob(tx_extra_field{tx_extra_lineage_audit{t_serializable_object_to_blob(enrollment)}});
      block candidate; candidate.miner_tx.extra.assign(extra.begin(), extra.end()); return candidate;
    };
    check(state.get_status(proof.image, 200).state == "UNDISCLOSED", "Authorization bypassed owner enrollment");
    const auto records = state.inspect(db, TESTNET, encode(), 200);
    check(records.size() == 1 && records.front().inputs->empty(), "Valid signed delayed audit payout did not become a root");
    state.insert(records); state.advance(200);
    check(state.get_status(proof.image, 209).state == "MATURING" &&
        state.get_status(proof.image, 210).state == "AUDIT_PASSED", "Delayed audit payout ignored C + 10");
    proof.signature.sx[0].bytes[0] ^= 1;
    bool rejected = false;
    try { state.inspect(db, TESTNET, encode(), 200); } catch (const std::exception&) { rejected = true; }
    check(rejected, "Accepted audit authorization bypassed ownership proof");
    state.configure(200, 79, 10080); state.advance(200); state.advance(10280);
    check(state.get_status(proof.image, 20000).state == "UNDISCLOSED", "Unaudited delayed payout became cleared");
    std::cout << "ACCEPTED_MIGRATION_PAYOUT_PASS: accepted conversion before/after opening, no SAL re-audit, exact identity/amount/lock, signed owner, absent owner, release delay\n";
  }
  static void token_issuance() {
    check(is_lineage_audit_asset("SAL1") && is_lineage_audit_asset("salYAHU") &&
        !is_lineage_audit_asset("SAL") && !is_lineage_audit_asset("OTHER") &&
        !is_lineage_audit_asset("BURN") && !is_lineage_audit_asset("sal"), "Wrong audit asset scope");
    token_issuance_db db;
    db.origin.version = 5; db.origin.type = transaction_type::CREATE_TOKEN;
    db.origin.source_asset_type = db.origin.destination_asset_type = "SAL1";
    txin_to_key input{}; input.asset_type = "SAL1"; input.key_offsets = {0};
    db.origin.vin.push_back(input);
    db.origin.protocol_tx_data.version = 1;
    db.origin.token_metadata.asset_type = "YAHU";
    sal_token_t token{}; token.supply = 123;
    db.origin.token_metadata.token = token;
    db.origin.amount_burnt = get_token_creation_price("YAHU");
    auto& returned = db.origin.protocol_tx_data;
    returned.return_address = rct::rct2pk(rct::pkGen());
    returned.return_pubkey = rct::rct2pk(rct::pkGen());
    db.origin.vout.push_back({0, txout_to_carrot_v1{rct::rct2pk(rct::pkGen()), "SAL1", {}, {}}});
    db.payout.version = 5; db.payout.type = transaction_type::PROTOCOL;
    db.payout.vin.push_back(txin_gen{db.payout_height});
    db.payout.vout.push_back({123 * COIN,
        txout_to_carrot_v1{returned.return_address, "salYAHU", returned.return_view_tag, returned.return_anchor_enc}});
    add_tx_pub_key_to_extra(db.payout, returned.return_pubkey);
    lineage_audit state; state.configure(200, 50, 10080);
    crypto::hash creation;
    const auto valid = [&]() { return state.token_issuance_payout(db, db.payout, 0, db.payout_height, creation); };
    check(valid() && creation == get_transaction_hash(db.origin), "Valid token registration was not recognized");
    const auto original_payout = db.payout, original_origin = db.origin;
    ++db.payout.vout[0].amount; db.payout.invalidate_hashes();
    check(!valid(), "Inflated token issuance accepted"); db.payout = original_payout;
    db.payout.vout.push_back(db.payout.vout[0]); db.payout.invalidate_hashes();
    check(!valid(), "Duplicate token issuance accepted"); db.payout = original_payout;
    boost::get<txout_to_carrot_v1>(db.payout.vout[0].target).asset_type = "SAL1"; db.payout.invalidate_hashes();
    check(!valid(), "Token registration authorized SAL1 issuance"); db.payout = original_payout;
    db.payout.extra.clear(); add_tx_pub_key_to_extra(db.payout, rct::rct2pk(rct::pkGen())); db.payout.invalidate_hashes();
    check(!valid(), "Wrong token return public key accepted"); db.payout = original_payout;
    ++db.origin.amount_burnt; db.origin.invalidate_hashes();
    check(!valid(), "Wrong token creation burn accepted"); db.origin = original_origin;
    db.origin.source_asset_type = "salYAHU"; db.origin.invalidate_hashes();
    check(!valid(), "Token-funded token mint accepted"); db.origin = original_origin;
    db.origin.destination_asset_type = "salYAHU"; db.origin.invalidate_hashes();
    check(!valid(), "Cross-asset token registration accepted"); db.origin = original_origin;
    db.origin.protocol_tx_data.return_address = rct::rct2pk(rct::pkGen()); db.origin.invalidate_hashes();
    check(!valid(), "Wrong token return address accepted"); db.origin = original_origin;
    db.duplicate_origin = true; check(!valid(), "Duplicate token authorization accepted"); db.duplicate_origin = false;
    db.second_mint = true; check(!valid(), "Second mint under existing token asset accepted"); db.second_mint = false;
    // Asset-bound ancestry: legitimate issuance consumes SAL1 funding, token
    // transfers consume that token, and a SAL1 ring cannot borrow its verdict.
    auto funding = root(801, 60), issuance = child(802, funding, 80);
    issuance.asset = "salYAHU";
    auto transfer = child(803, issuance, 95); transfer.asset = "salYAHU";
    auto token_inputs = *transfer.inputs; token_inputs.front().asset = "salYAHU";
    transfer.inputs = std::make_shared<const std::vector<lineage_audit::dependency>>(token_inputs);
    auto mismatch = child(804, issuance, 95);
    state.insert({issuance, transfer, mismatch}); state.advance(200);
    check(state.get_status(transfer.image, 210).state == "PENDING", "Token cleared without registration funding evidence");
    state.insert({funding}); state.advance(201);
    check(state.get_status(issuance.image, 211).state == "AUDIT_PASSED" &&
        state.get_status(transfer.image, 211).state == "AUDIT_PASSED" &&
        state.get_status(mismatch.image, 211).state == "PENDING", "Token dependencies lost their asset binding");
    std::cout << "TOKEN_ISSUANCE_PASS: exact canonical creation, supply, burn, output, unique mint, SAL1 funding and token ancestry\n";
  }
  static void carrier_capacity() {
    const auto started = std::chrono::steady_clock::now();
    audit_history_db db;
    db.payout_height = 1;
    db.payout.version = 2; db.payout.type = transaction_type::PROTOCOL;
    db.payout.vin.push_back(txin_gen{1});
    std::vector<rct::key> secrets;
    for (size_t i = 0; i < lineage_limits::max_outputs; ++i) {
      secrets.push_back(rct::skGen());
      db.payout.vout.push_back({1, txout_to_key{rct::rct2pk(rct::scalarmultBase(secrets.back())), "SAL1", 60}});
    }
    lineage_enrollment enrollment;
    enrollment.genesis = crypto::null_hash; enrollment.network = static_cast<uint8_t>(TESTNET);
    enrollment.activation_height = 100;
    for (size_t i = 0; i < secrets.size(); ++i) {
      lineage_output_proof proof;
      proof.transaction = get_transaction_hash(db.payout); proof.output_index = i; proof.amount = 1;
      const auto key = rct::rct2pk(rct::scalarmultBase(secrets[i]));
      crypto::generate_key_image(key, rct::rct2sk(secrets[i]), proof.image);
      proof.signature = rct::proveRctTCLSAGSimple(rct::hash2rct(lineage_proof_message(enrollment, proof)),
          {{rct::pk2rct(key), rct::commit(1, rct::identity())}}, secrets[i], rct::zero(), rct::identity(),
          rct::zero(), rct::commit(1, rct::zero()), 0, hw::get_device("default"));
      enrollment.outputs.push_back(proof);
    }
    const auto encode = [](const lineage_enrollment& item) {
      return t_serializable_object_to_blob(tx_extra_field{tx_extra_lineage_audit{t_serializable_object_to_blob(item)}});
    };
    const auto inspect = [&](const std::string& extra) {
      lineage_audit state; state.configure(100, 50, 10080);
      block candidate; candidate.miner_tx.extra.assign(extra.begin(), extra.end());
      const auto records = state.inspect(db, TESTNET, candidate, 100);
      state.insert(records); state.advance(100);
      check(records.size() == lineage_limits::max_outputs &&
          state.get_status(records.back().image, 109).state == "MATURING" &&
          state.get_status(records.back().image, 110).state == "AUDIT_PASSED", "Full carrier failed C + 10");
    };
    const auto single = encode(enrollment);
    check(single.size() <= lineage_limits::max_bytes, "Maximum proof batch cannot fit byte carrier");
    inspect(single);
    std::string packed;
    auto batch = enrollment;
    for (const auto& proof : enrollment.outputs) {
      batch.outputs = {proof};
      packed += encode(batch);
    }
    check(packed.size() <= lineage_limits::max_bytes, "Small-wallet batches cannot fill carrier");
    inspect(packed);
    lineage_audit state; state.configure(100, 50, 10080);
    block excess; const auto too_many = packed + encode(batch);
    excess.miner_tx.extra.assign(too_many.begin(), too_many.end());
    bool rejected = false;
    try { state.inspect(db, TESTNET, excess, 100); } catch (const std::exception&) { rejected = true; }
    check(rejected, "Combined carrier exceeded output count limit");
    const auto duplicate = encode(batch) + encode(batch);
    excess.miner_tx.extra.assign(duplicate.begin(), duplicate.end()); rejected = false;
    try { state.inspect(db, TESTNET, excess, 100); } catch (const std::exception&) { rejected = true; }
    check(rejected, "Duplicate ownership across batches accepted");
    const auto seconds = std::chrono::duration<double>(std::chrono::steady_clock::now() - started).count();
    std::cout << "CARRIER_CAPACITY_PASS proofs=" << enrollment.outputs.size() << " single_bytes=" << single.size()
        << " small_wallet_bytes=" << packed.size() << " seconds=" << seconds << "\n";
  }
  static void capacity_load(uint64_t count) {
    check(count >= 1024 && count <= 6000000, "Load fixture must have 1024..6000000 records");
    const auto started = std::chrono::steady_clock::now();
    lineage_audit state; state.configure(100, 50, 10080);
    auto funding = root(1, 60);
    state.insert({funding}); state.advance(100);
    uint64_t next = 2, height = 101;
    // A pending sixteen-member ancestry ring per receipt, including absent
    // owners, exercises the large in-memory graph rather than only roots.
    // Every fourth receipt stays pending; the remainder resolves to funding.
    while (next < count + 2) {
      std::vector<lineage_audit::record> records;
      for (size_t batch = 0; batch < lineage_limits::max_outputs && next < count + 2; ++batch, ++next) {
        auto item = child(next, funding, 80);
        auto inputs = *item.inputs;
        for (uint64_t decoy = 1; decoy < 16; ++decoy)
          inputs.front().ring.push_back({identity<crypto::public_key>(count + 10 + decoy),
              identity<crypto::hash>(count + 10 + decoy), 0, 60, false, 70});
        if (next % 4 == 0) inputs.front().image = identity<crypto::key_image>(count + 100 + next);
        item.inputs = std::make_shared<const std::vector<lineage_audit::dependency>>(std::move(inputs));
        records.push_back(std::move(item));
      }
      state.insert(records); state.advance(height++);
      check(height < state.closing_height(), "Load inventory cannot finish during enrollment window");
      if (!((next - 2) % (512 * 256))) std::cout << "LOAD_PROGRESS records=" << next << std::endl;
    }
    state.advance(state.closing_height());
    check(state.get_status(identity<crypto::key_image>(4), 100000).state == "PENDING" &&
        state.get_status(identity<crypto::key_image>(3), 100000).state == "AUDIT_PASSED",
        "Load changed pending/good verdicts at cutoff");
    rusage usage{}; getrusage(RUSAGE_SELF, &usage);
    std::cout << "CAPACITY_LOAD_PASS records=" << count << " enrollment_blocks=" << height - 101
        << " seconds=" << std::chrono::duration<double>(std::chrono::steady_clock::now() - started).count()
        << " peak_rss_kib=" << usage.ru_maxrss << " ring_size=16 pending_fraction=0.25\n";
  }
  static void actual_workload(const char* path) {
    BlockchainLMDB db; db.open(path, DBF_RDONLY);
    const auto started = std::chrono::steady_clock::now();
    uint64_t proofs = 0, stakes = 0, sources = 0, source_bytes = 0, inputs = 0, largest_source = 0;
    uint64_t oversized_sources = 0, optimistic_blocks = 0, block_proofs = 0, block_bytes = 0, block_inputs = 0;
    std::map<std::string, uint64_t> assets;
    const auto add = [&](const transaction& tx) {
      uint64_t count = 0;
      for (const auto& output : tx.vout) {
        std::string asset;
        if (get_output_asset_type(output, asset) && is_lineage_audit_asset(asset)) { ++count; ++assets[asset]; }
      }
      if (tx.type == transaction_type::STAKE && tx.source_asset_type == "SAL1") { ++count; ++stakes; }
      if (!count) return;
      const auto bytes = t_serializable_object_to_blob(tx).size();
      ++sources; proofs += count; source_bytes += bytes; inputs += tx.vin.size(); largest_source = std::max<uint64_t>(largest_source, bytes);
      if (bytes > lineage_limits::max_source_bytes || tx.vin.size() > lineage_limits::max_funding_inputs) ++oversized_sources;
      while (count) {
        const auto chunk = std::min<uint64_t>(count, lineage_limits::max_outputs);
        if (block_proofs && (block_proofs + chunk > lineage_limits::max_outputs ||
            block_bytes + bytes > lineage_limits::max_source_bytes || block_inputs + tx.vin.size() > lineage_limits::max_funding_inputs)) {
          ++optimistic_blocks; block_proofs = block_bytes = block_inputs = 0;
        }
        block_proofs += chunk; block_bytes += bytes; block_inputs += tx.vin.size(); count -= chunk;
      }
    };
    for (uint64_t height = 154750; height < db.height(); ++height) {
      const auto b = db.get_block_from_height(height);
      add(b.miner_tx); add(b.protocol_tx);
      for (const auto& id : b.tx_hashes) add(db.get_tx(id));
      if (!(height % 50000)) std::cout << "WORKLOAD_PROGRESS height=" << height << std::endl;
    }
    if (block_proofs) ++optimistic_blocks;
    for (const auto& asset : assets) std::cout << "WORKLOAD_ASSET asset=" << asset.first << " outputs=" << asset.second << "\n";
    std::cout << "ACTUAL_WORKLOAD_RESULT start=154750 end=" << db.height() - 1 << " output_proofs=" << proofs - stakes
        << " stake_proofs=" << stakes << " total_proofs=" << proofs << " sources=" << sources << " source_bytes=" << source_bytes
        << " inputs=" << inputs << " largest_source=" << largest_source << " oversized_sources=" << oversized_sources
        << " optimistic_blocks=" << optimistic_blocks << " duration=" << lineage_policy::duration_blocks
        << " seconds=" << std::chrono::duration<double>(std::chrono::steady_clock::now() - started).count()
        << " mode=public_inventory_not_owner_discovery_or_cryptographic_replay\n";
    check(!oversized_sources, "Canonical sources exceed the per-enrollment funding budget");
    check(optimistic_blocks < lineage_policy::duration_blocks, "Even optimistic packing cannot fit the audit window");
    db.close();
  }
  static void actual_database(const char* path) {
    BlockchainLMDB db;
    db.open(path, DBF_RDONLY);
    crypto::hash id;
    check(epee::string_tools::hex_to_pod(
        "9353dd3288e20618596085228ea6faf5bf2a9d01cd98c36ea5ceeef2c2d4eb1e", id), "Invalid fixture hash");
    uint64_t tx_id;
    check(db.tx_exists(id, tx_id) && db.get_tx_block_height(id) == 465074, "Requested chain lacks salYAHU transaction");
    const auto tx = db.get_tx(id);
    check(get_transaction_hash(tx) == id && tx.vout.size() == 2 && lineage_audit::has_bad_asset_origin(tx),
        "Actual canonical salYAHU origin was not detected");
    const auto indices = db.get_tx_amount_output_indices(tx_id, 1);
    check(indices.size() == 1 && indices.front().size() == 2, "Actual output indices missing");
    lineage_audit state;
    const uint64_t activation = db.height();
    state.configure(activation, activation - 1);
    state.sync(db, MAINNET);
    for (size_t i = 0; i < 2; ++i) {
      const auto asset_index = indices[0][i].second;
      const auto global_id = db.get_output_id_by_asset_index("SAL1", asset_index);
      const auto source = db.get_output_tx_and_index_from_global(global_id);
      check(source.first == id && source.second == i, "Actual salYAHU output mapping was substituted");
      for (uint64_t height : {activation, activation + 10, state.closing_height(), uint64_t(1000000)}) {
        check(!state.output_spendable(db, MAINNET, global_id, height), "Never-enrolled actual salYAHU output escaped freeze");
        transaction spend;
        txin_to_key input; input.asset_type = "SAL1"; input.key_offsets = {asset_index};
        spend.vin.push_back(input);
        std::string reason;
        check(!state.check_window_spend(db, MAINNET, spend, height, reason), "Actual output bypassed consensus ring gate");
      }
      std::cout << "ACTUAL_SALYAHU_FROZEN_PASS output=" << i << " asset_index=" << asset_index
          << " global_id=" << global_id << " activation=" << activation << " closing=" << state.closing_height()
          << " checks=8 mode=read_only_public_chain\n";
    }
    state.configure(activation, 154749);
    for (const auto& range : {std::make_pair(uint64_t(161951), uint64_t(169100)),
                              std::make_pair(uint64_t(182081), uint64_t(189280))}) {
      uint64_t accepted_payouts = 0;
      for (uint64_t height = range.first; height <= range.second && accepted_payouts < 16; ++height) {
        const auto payout = db.get_block_from_height(height).protocol_tx;
        for (size_t index = 0; index < payout.vout.size() && accepted_payouts < 16; ++index)
          if (state.accepted_conversion_payout(db, MAINNET, payout, index, height)) ++accepted_payouts;
      }
      check(accepted_payouts == 16, "Did not recognize real accepted SAL-to-SAL1 conversion payouts");
      std::cout << "ACTUAL_ACCEPTED_CONVERSION_PAYOUTS_PASS opening=154749 payout_range=" << range.first
                << ".." << range.second << " canonical_conversions=" << accepted_payouts
                << " mode=read_only_public_chain ownership=SEPARATE_PROOF_REQUIRED SAL_history=ACCEPTED\n";
    }
    size_t token_origins = 0;
    for (const auto& token : db.get_tokens()) {
      if (!is_lineage_audit_asset(token.first) || token.first == "SAL1") continue;
      const auto first = db.get_output_tx_and_index_from_global(db.get_output_id_by_asset_index(token.first, 0));
      const auto payout = db.get_tx(first.first);
      const auto height = db.get_tx_block_height(first.first);
      crypto::hash creation;
      check(state.token_issuance_payout(db, payout, first.second, height, creation),
          "Actual token mint does not match its canonical authorization");
      const auto registration = db.get_tx(creation);
      bool bad = state.has_bad_asset_origin(registration) || tx_has_cleartext_confidential_amount(registration);
      const auto funding = state.inspect_funding(db, registration, height, bad);
      check(!bad && !funding->empty(), "Actual token registration funding signature did not verify");
      ++token_origins;
    }
    check(token_origins > 0, "No public token origins were checked");
    std::cout << "ACTUAL_TOKEN_ORIGINS_PASS tokens=" << token_origins
              << " mode=read_only_public_chain ownership_and_ancestry=SEPARATE_ENROLLMENT_REQUIRED\n";
    const auto miner_started = std::chrono::steady_clock::now();
    state.sync(db, MAINNET);
    check(state.valid_miner_origin(db, MAINNET, db.height() - 1),
          "Public snapshot tip miner failed emission reconstruction");
    for (uint64_t height = 200000; height < db.height(); height += 50000)
      check(state.valid_miner_origin(db, MAINNET, height), "Public historical miner sample failed emission checks");
    std::cout << "ACTUAL_MINER_HISTORY_PASS opening=154749 end=" << db.height() - 1
              << " cold_reconstruction_seconds="
              << std::chrono::duration<double>(std::chrono::steady_clock::now() - miner_started).count()
              << " mode=read_only_public_chain checked=tip_and_50000_block_samples\n";
    db.close();
  }
  static void actual_bad_origin(const char* path) {
    std::ifstream input(path);
    std::string hex, blob;
    input >> hex;
    transaction tx;
    check(epee::string_tools::parse_hexstr_to_binbuff(hex, blob) && parse_and_validate_tx_from_blob(blob, tx),
        "Cannot parse canonical 465074 transaction");
    check(epee::string_tools::pod_to_hex(get_transaction_hash(tx)) ==
        "9353dd3288e20618596085228ea6faf5bf2a9d01cd98c36ea5ceeef2c2d4eb1e", "Wrong historical fixture");
    check(tx.vout.size() == 2 && lineage_audit::has_bad_asset_origin(tx), "Actual salYAHU issuance escaped BAD classification");
    std::cout << "{\"status\":\"ACTUAL_465074_NATIVE_BAD_PASS\",\"bad_origin_outputs\":2,\"bad_origin_atomic\":4000000000000000}\n";
    // The historical public keys cannot be signed without their owner. Re-key
    // this exact transaction shape for controlled, authentic ownership proofs.
    // Its original transaction signature is deliberately not an acceptance
    // fixture: this exercises audit handling of an already canonical bad origin.
    const auto original = tx;
    for (bool cleartext : {false, true}) for (bool enroll : {true, false})
        for (uint64_t opening : {uint64_t(465073), uint64_t(465074), uint64_t(558799)}) {
      tx = original;
      if (cleartext) {
        tx.source_asset_type = tx.destination_asset_type = "SAL1";
        for (auto& input : tx.vin) boost::get<txin_to_key>(input).asset_type = "SAL1";
        // Ownership opens the commitment to 20M. The old output table instead
        // presents this different public value. Neither enrollment choice may
        // authorize spending from that substituted commitment.
        tx.vout[0].amount = 2000000000000001;
      }
      audit_window_db db;
      db.candidate = 558800;
      lineage_enrollment enrollment;
      enrollment.genesis = db.get_block_hash_from_height(0);
      enrollment.network = static_cast<uint8_t>(FAKECHAIN);
      enrollment.activation_height = db.candidate;
      std::vector<rct::key> secrets, masks;
      for (size_t i = 0; i < tx.vout.size(); ++i) {
        secrets.push_back(rct::skGen()); masks.push_back(rct::skGen());
        const auto public_key = rct::rct2pk(rct::scalarmultBase(secrets.back()));
        boost::get<txout_to_carrot_v1>(tx.vout[i].target).key = public_key;
        tx.rct_signatures.outPk[i].mask = rct::commit(2000000000000000, masks.back());
      }
      tx.invalidate_hashes();
      const auto id = get_transaction_hash(tx);
      db.transactions.emplace(id, std::make_pair(tx, 465074));
      for (size_t i = 0; i < tx.vout.size(); ++i) {
        db.outputs.emplace_back(id, i);
        lineage_output_proof proof;
        proof.transaction = id; proof.output_index = i; proof.amount = 2000000000000000;
        const auto key = boost::get<txout_to_carrot_v1>(tx.vout[i].target).key;
        crypto::generate_key_image(key, rct::rct2sk(secrets[i]), proof.image);
        proof.signature = rct::proveRctTCLSAGSimple(rct::hash2rct(lineage_proof_message(enrollment, proof)),
            {{rct::pk2rct(key), tx.rct_signatures.outPk[i].mask}}, secrets[i], rct::zero(), masks[i],
            rct::zero(), rct::commit(proof.amount, rct::zero()), 0, hw::get_device("default"));
        check(verify_lineage_output_proof(enrollment, proof, key, tx.rct_signatures.outPk[i].mask),
            "Controlled salYAHU owner signature is invalid");
        enrollment.outputs.push_back(proof);
      }
      lineage_audit state;
      state.configure(db.candidate, opening); // Real default: 10,080 blocks.
      block candidate;
      const auto extra = t_serializable_object_to_blob(tx_extra_field{
          tx_extra_lineage_audit{t_serializable_object_to_blob(enrollment)}});
      candidate.miner_tx.extra.assign(extra.begin(), extra.end());
      if (enroll) {
        const auto inspected = state.inspect(db, FAKECHAIN, candidate, db.candidate);
        check(inspected.size() == 2, "Controlled owner enrollment lost a salYAHU output");
        state.insert(inspected); state.advance(db.candidate);
        for (const auto& proof : enrollment.outputs)
          check(state.get_status(proof.image, db.candidate + 10).state == "BAD",
              "Accepted opening laundered a signed-owner bad origin");
      }
      for (uint64_t height : {db.candidate, db.candidate + 10, state.closing_height(), uint64_t(1000000)}) {
        state.advance(height);
        for (size_t i = 0; i < tx.vout.size(); ++i) {
          check(!state.output_spendable(db, FAKECHAIN, i, height), "salYAHU output became spendable");
          transaction spend;
          txin_to_key input; input.asset_type = "SAL1"; input.key_offsets = {i};
          input.k_image = enrollment.outputs[i].image;
          spend.vin.push_back(input);
          std::string reason;
          check(!state.check_window_spend(db, FAKECHAIN, spend, height, reason),
              "salYAHU output bypassed consensus spend gate");
        }
      }
      bool closed = false;
      try { state.inspect(db, FAKECHAIN, candidate, state.closing_height()); }
      catch (const std::exception& error) { closed = std::string(error.what()).find("enrollment is closed") != std::string::npos; }
      check(closed, "salYAHU owner enrolled after cutoff");
      std::cout << (cleartext ? "CLEARTEXT_OWNER_ROUND_PASS" : "SALYAHU_OWNER_ROUND_PASS")
          << " enrolled=" << enroll << " opening=" << opening
          << " outputs=2 duration=10080 spend_checks=8 late_enrollment=rejected\n";
    }
  }
  static void historical_ring_mapping(const char* path, const char* inventory, const char* poison_inventory) {
    std::ifstream source(inventory);
    std::vector<uint64_t> legacy;
    uint64_t rank, id;
    while (source >> rank >> id) {
      check(rank == legacy.size(), "Historical reference inventory is not contiguous");
      legacy.push_back(id);
    }
    check(!legacy.empty(), "Missing independent historical reference inventory");
    BlockchainLMDB db;
    db.open(path, DBF_RDONLY);
    std::ifstream poison_source(poison_inventory);
    std::string header;
    std::getline(poison_source, header);
    check(bool(poison_source >> rank >> id) && rank < legacy.size() && legacy[rank] != id,
        "Missing or inconsistent independent poisoned-output inventory");
    const auto first_poison = db.get_output_record_by_id(id);
    const uint64_t start_height = first_poison.od.height;
    std::unordered_map<uint64_t, uint64_t> raw_poison{{rank, id}};
    while (poison_source >> rank >> id) {
      check(rank < legacy.size() && legacy[rank] != id, "Invalid independent poisoned rank");
      raw_poison.emplace(rank, id);
    }
    uint64_t checked = 0, repaired = 0, changed_members = 0, poisoned_members = 0, unreconstructed = 0, candidates = 0, affected = 0;
    uint64_t verified_poison_members = 0;
    for (uint64_t height = start_height; height < 521425 && (checked < 128 || !verified_poison_members); ++height) {
      const auto b = db.get_block_from_height(height);
      for (const auto& hash : b.tx_hashes) {
        const auto tx = db.get_tx(hash);
        if ((tx.type != transaction_type::TRANSFER && tx.type != transaction_type::STAKE) ||
            tx.source_asset_type != "SAL1" || lineage_audit::has_bad_asset_origin(tx) ||
            tx_has_cleartext_confidential_amount(tx)) continue;
        ++candidates;
        rct::ctkeyM historical, current;
        bool changed = false, current_complete = true;
        uint64_t transaction_poison_members = 0;
        for (const auto& input : tx.vin) {
          const auto& key = boost::get<txin_to_key>(input);
          historical.emplace_back(); current.emplace_back();
          for (uint64_t index : relative_output_offsets_to_absolute(key.key_offsets)) {
            check(index < legacy.size(), "Historical input rank exceeds inventory");
            uint64_t expected_id = legacy[index];
            if (db.get_output_record_by_id(expected_id).od.height >= height) {
              const auto raw = raw_poison.find(index);
              check(raw != raw_poison.end(), "Historical ring refers to an unavailable output");
              expected_id = raw->second;
            }
            const auto expected = db.get_output_tx_and_index_from_global(expected_id);
            const auto member = lineage_audit::resolve(db, key.asset_type, index, true);
            check(member.transaction == expected.first && member.output == expected.second,
                "Native ancestry used a later mapping for a historical ring");
            const auto parent = db.get_tx(expected.first);
            const auto& output = parent.vout.at(expected.second);
            // This expectation uses the independently dumped old reference
            // inventory and the effective historical output-table commitment.
            const auto record = db.get_output_record_by_id(expected_id);
            check(record.od.pubkey == member.key, "Historical public key mismatch");
            historical.back().push_back({rct::pk2rct(member.key), record.od.commitment});
            if (raw_poison.count(index))
              ++transaction_poison_members;
            try {
              const auto modern = db.get_output_id_by_asset_index(key.asset_type, index);
              changed |= modern != expected_id;
              changed_members += modern != expected_id;
              const auto data = db.get_output_record_by_id(modern);
              current.back().push_back({rct::pk2rct(data.od.pubkey), data.od.commitment});
            } catch (const std::exception&) { current_complete = false; changed = true; }
          }
        }
        if (!changed) continue;
        ++affected;
        poisoned_members += transaction_poison_members;
        const auto verifies = [&](const rct::ctkeyM& rings) {
          transaction expanded = tx;
          return Blockchain::expand_transaction_2(expanded, get_transaction_prefix_hash(expanded), rings, b.major_version) &&
              rct::verRctSemanticsSimple(expanded.rct_signatures, expanded.amount_burnt, false) &&
              rct::verRctNonSemanticsSimple(expanded.rct_signatures, expanded.type);
        };
        if (!verifies(historical)) { ++unreconstructed; continue; }
        ++checked;
        verified_poison_members += transaction_poison_members;
        repaired += !current_complete || !verifies(current);
      }
    }
    std::cout << "HISTORICAL_RING_MAPPING_RESULT original_signatures_verified=" << checked
        << " current_index_would_fail=" << repaired << " changed_members=" << changed_members
        << " historical_poison_members=" << poisoned_members << " unreconstructed_candidates=" << unreconstructed
        << " verified_poison_members=" << verified_poison_members
        << " start_height=" << start_height << " candidates=" << candidates << " affected=" << affected << std::endl;
    check(checked >= 128 && repaired > 0 && changed_members > 0 && verified_poison_members > 0,
        "Historical ring regression did not verify enough real affected transactions");
    std::cout << "HISTORICAL_RING_MAPPING_PASS original_signatures_verified=" << checked
        << " current_index_would_fail=" << repaired << " changed_members=" << changed_members
        << " historical_poison_members=" << poisoned_members << " unreconstructed_candidates=" << unreconstructed << '\n';
    db.close();
  }
  static void run() {
    historical_returns();
    accepted_migration_returns();
    token_issuance();
    carrier_capacity();
    transaction cross_asset;
    cross_asset.type = transaction_type::TRANSFER;
    cross_asset.source_asset_type = cross_asset.destination_asset_type = "salYAHU";
    txout_to_carrot_v1 out;
    out.asset_type = "SAL1";
    cross_asset.vout.push_back({0, out});
    check(lineage_audit::has_bad_asset_origin(cross_asset), "465074 asset pattern escaped BAD classification");
    cross_asset.source_asset_type = cross_asset.destination_asset_type = "SAL1";
    check(!lineage_audit::has_bad_asset_origin(cross_asset), "ordinary SAL1 mislabeled bad");

    // Cryptographic output proofs, including zero commitment masks. These
    // tests do not inject a GOOD/BAD record to stand in for proof verification.
    for (uint64_t seed = 0; seed < 1000; ++seed) {
      lineage_enrollment enrollment;
      enrollment.genesis = identity<crypto::hash>(seed + 1);
      enrollment.network = 3;
      enrollment.activation_height = 100012;
      lineage_output_proof proof;
      proof.transaction = identity<crypto::hash>(seed + 2);
      proof.output_index = seed % 1001;
      proof.amount = seed * 123456789;
      const auto x = rct::skGen(), y = seed % 2 ? rct::skGen() : rct::zero();
      const auto mask = seed % 3 ? rct::skGen() : rct::zero();
      proof.offset_mask = mask == rct::zero() ? 1 : 0;
      const auto offset = proof.offset_mask ? rct::identity() : rct::zero();
      rct::key output;
      rct::addKeys2(output, x, y, rct::pk2rct(crypto::get_T()));
      const auto public_key = rct::rct2pk(output);
      crypto::generate_key_image(public_key, rct::rct2sk(x), proof.image);
      const auto commitment = rct::commit(proof.amount, mask);
      proof.signature = rct::proveRctTCLSAGSimple(rct::hash2rct(lineage_proof_message(enrollment, proof)),
          {{output, commitment}}, x, y, mask, offset, rct::commit(proof.amount, offset), 0, hw::get_device("default"));
      check(verify_lineage_output_proof(enrollment, proof, public_key, commitment), "valid finite proof rejected");
      auto wrong = proof;
      ++wrong.amount;
      check(!verify_lineage_output_proof(enrollment, wrong, public_key, commitment), "false amount proof accepted");
      wrong = proof; wrong.stake_return = !wrong.stake_return;
      check(!verify_lineage_output_proof(enrollment, wrong, public_key, commitment), "stake/output substitution accepted");
      wrong = proof; ++wrong.output_index;
      check(!verify_lineage_output_proof(enrollment, wrong, public_key, commitment), "output substitution accepted");
      ++enrollment.activation_height;
      check(!verify_lineage_output_proof(enrollment, proof, public_key, commitment), "wrong epoch proof accepted");
    }
    std::mt19937_64 random(465074);
    for (uint64_t seed = 0; seed < 1000; ++seed) {
      const uint64_t depth = 1 + random() % 64;
      const uint64_t completion = 1000 + random() % 40000;
      for (bool bad : {false, true}) {
        lineage_audit state;
        state.configure(240, 0, 0);
        std::vector<lineage_audit::record> ancestry{root(1, 50, bad)};
        for (uint64_t i = 1; i <= depth; ++i)
          ancestry.push_back(child(i + 1, ancestry.back(), 50 + i));
        auto stake = child(depth + 2, ancestry.back(), 50 + depth + 21602);
        stake.stake_return = true;
        state.insert({stake});
        state.advance(completion - 1);
        check(state.get_status(stake.image, completion).state == "PENDING", "missing ancestry cleared");
        check(state.stake_payouts(stake.output_height).empty(), "pending stake scheduled payout");
        std::shuffle(ancestry.begin(), ancestry.end(), random);
        state.insert(ancestry);
        state.advance(completion);
        const auto status = state.get_status(stake.image, completion + 10);
        check(status.state == (bad ? "REVIEW" : "AUDIT_PASSED"), "stake funding review disposition failed");
        const uint64_t payout = std::max(stake.output_height, completion + 10);
        check(state.stake_payouts(payout).size() == (bad ? 0 : 1),
            "Review-only ancestry retained audit payout authority");
        check(state.stake_payouts(payout - 1).empty(), "early payout authorized");
        check(state.stake_payouts(payout + 1).empty(), "repeat payout authorized");
        if (!bad) {
          lineage_audit::ring_member member{stake.output_key, identity<crypto::hash>(999),
              0, payout, true, payout + 60};
          const auto& authorized = state.records_.at(stake.image);
          check(lineage_audit::matches(authorized, member), "authorized payout identity rejected");
          member.canonical_protocol = false;
          check(!lineage_audit::matches(authorized, member), "ordinary output substituted for stake payout");
          member.canonical_protocol = true;
          member.height = payout - 1;
          check(!lineage_audit::matches(authorized, member), "wrong-height payout substituted");
        }
        state.insert({stake});
        state.advance(completion + 100000);
        check(state.stake_payouts(payout).size() == (bad ? 0 : 1), "repeated disclosure altered payout");
        check(state.get_status(stake.image, completion + 100000).state ==
            (bad ? "REVIEW" : "AUDIT_PASSED"), "time changed review/good verdict");
        state.reset();
        check(state.stake_payouts(payout).empty(), "reset retained payout authorization");
      }
    }
    // A historical payout can be audited but must never be paid twice.
    for (uint64_t seed = 0; seed < 1000; ++seed) {
      lineage_audit state;
      state.configure(240, 0, 0);
      auto ancestor = root(1, 50, seed % 2);
      auto stake = child(2, ancestor, 500 + seed);
      stake.stake_return = true;
      state.insert({stake});
      state.advance(240);
      lineage_audit::undo_entry journal{30000, identity<crypto::hash>(30000), state.tip_, state.queue_, {}, {}, {}};
      state.current_undo_ = &journal;
      state.insert({ancestor});
      state.advance(30000);
      const auto disclosure = identity<crypto::hash>(90000);
      state.disclosures_.emplace(disclosure, 30000);
      journal.disclosures.push_back(disclosure);
      state.current_undo_ = nullptr;
      state.undo_.push_back(std::move(journal));
      check(state.get_status(stake.image, 30010).state == (seed % 2 ? "REVIEW" : "AUDIT_PASSED"), "journaled verdict incorrect");
      state.rollback_last();
      check(state.get_status(ancestor.image, 30010).state == "UNDISCLOSED", "rollback retained detached ancestor");
      check(state.get_status(stake.image, 30010).state == "PENDING", "rollback retained dependent verdict");
      check(state.stake_payouts(30010).empty() && state.disclosure_height(disclosure) == 0,
          "rollback retained payout or enrollment confirmation");
      state.insert({ancestor});
      state.advance(30001);
      check(state.get_status(stake.image, 30011).state == (seed % 2 ? "REVIEW" : "AUDIT_PASSED"), "rollback lost dependency wakeup");
      check(state.stake_payouts(30011).size() == (seed % 2 ? 0 : 1),
          "Review-only replay retained audit payout authority");
    }

    // A historical payout can be audited but must never be paid twice.
    lineage_audit historical;
    historical.configure(50000, 0, 0);
    auto origin = root(1, 10);
    auto paid = child(2, origin, 21612);
    paid.stake_return = true;
    historical.insert({origin, paid});
    historical.advance(50000);
    check(historical.get_status(paid.image, 50010).state == "AUDIT_PASSED", "historical good payout blocked");
    check(historical.stake_payouts(50010).empty(), "historical stake paid again");
    check(historical.records_.at(paid.image).payout_height == 21612, "historical identity changed");

    // Work remains bounded even with a queue larger than a disclosure batch.
    lineage_audit bounded;
    bounded.configure(240, 0, 0);
    std::vector<lineage_audit::record> roots;
    for (uint64_t i = 1; i <= 1024; ++i) roots.push_back(root(i, 50));
    bounded.insert(roots);
    bounded.advance(240);
    size_t completed = 0;
    for (const auto& item : bounded.records_) completed += item.second.verdict == 1;
    check(completed == lineage_audit::work_per_block, "audit work bound exceeded");

    // The mainnet forensic graph has possible paths over 5,000 transactions.
    // Exercise deeper dependency propagation and undo with a missing root,
    // including an opposite verdict after the original root is detached.
    for (const uint64_t depth : {6000, 12000}) for (const bool bad : {false, true}) {
      lineage_audit state;
      state.configure(240, 0, 0);
      const auto ancestor = root(1, 1, bad);
      std::vector<lineage_audit::record> descendants;
      auto previous = ancestor;
      for (uint64_t i = 1; i <= depth; ++i) {
        descendants.push_back(child(i + 1, previous, i + 1));
        previous = descendants.back();
      }
      auto stake = child(depth + 2, previous, depth + 21603);
      stake.stake_return = true;
      descendants.push_back(stake);
      std::reverse(descendants.begin(), descendants.end());
      state.insert(descendants);
      for (uint64_t height = 240; !state.queue_.empty(); ++height) state.advance(height);
      check(state.get_status(stake.image, 50000).state == "PENDING", "deep missing-root stake cleared by time");
      uint64_t height = 50000;
      size_t prior_completed = 0;
      do {
        lineage_audit::undo_entry journal{height, identity<crypto::hash>(height), state.tip_, state.queue_, {}, {}, {}};
        state.current_undo_ = &journal;
        if (height == 50000) state.insert({ancestor});
        state.advance(height);
        state.current_undo_ = nullptr;
        state.undo_.push_back(std::move(journal));
        size_t now_completed = 0;
        for (const auto& entry : state.records_) now_completed += entry.second.verdict != 0;
        check(now_completed - prior_completed <= lineage_audit::work_per_block, "deep ancestry exceeded per-block work bound");
        prior_completed = now_completed;
        check(state.undo_.size() <= lineage_audit::undo_window, "deep test exceeds bounded journal window");
        ++height;
      } while (!state.records_.at(stake.image).verdict);
      const auto completion = state.records_.at(stake.image).completion;
      check(state.get_status(stake.image, completion + 10).state == (bad ? "REVIEW" : "AUDIT_PASSED"), "deep ancestry disposition incorrect");
      check(state.stake_payouts(completion + 10).size() == (bad ? 0 : 1),
          "Deep review-only ancestry retained audit payout authority");
      while (!state.undo_.empty()) state.rollback_last();
      check(state.get_status(ancestor.image, height).state == "UNDISCLOSED", "deep rollback retained root");
      check(state.get_status(stake.image, height).state == "PENDING" && state.stake_payouts_.empty(), "deep rollback retained stake authority");
      for (const auto& entry : state.records_) check(!entry.second.verdict, "deep rollback retained a descendant verdict");
      state.insert({root(1, 1, !bad)});
      for (height = 60000; !state.queue_.empty(); ++height) state.advance(height);
      check(state.get_status(stake.image, height + 10).state == (bad ? "AUDIT_PASSED" : "REVIEW"), "deep replay retained stale funding disposition");
    }
    std::cout << "{\"status\":\"STAKE_LINEAGE_STATE_PASS\",\"seeded_paths\":1000,"
                 "\"cryptographic_proof_cases\":1000,\"proof_forgeries_rejected\":4000,\"bad_and_good_ancestry_cases\":2000,\"historical_double_payout_blocked\":true,"
                 "\"journal_rollback_cases\":1000,\"deep_dependency_cases\":4,\"maximum_tested_dependency_depth\":12000,"
                 "\"cross_asset_pattern_bad\":true,\"descendants_review_only\":true,\"review_stakes_not_delayed\":true,\"work_bound_checked\":true}\n";
  }
};
}
int main(int argc, char** argv) {
  try {
    if (argc == 3 && std::string(argv[1]) == "--capacity-load") {
      cryptonote::lineage_audit_test::capacity_load(std::stoull(argv[2])); return 0;
    }
    if (argc == 3 && std::string(argv[1]) == "--workload") {
      cryptonote::lineage_audit_test::actual_workload(argv[2]); return 0;
    }
    cryptonote::lineage_audit_test::audit_window();
    cryptonote::lineage_audit_test::run();
    if (argc >= 2) cryptonote::lineage_audit_test::actual_bad_origin(argv[1]);
    if (argc >= 3) cryptonote::lineage_audit_test::actual_database(argv[2]);
    if (argc == 5) cryptonote::lineage_audit_test::historical_ring_mapping(argv[2], argv[3], argv[4]);
    return 0;
  }
  catch (const std::exception& error) { std::cerr << error.what() << '\n'; return 1; }
}
