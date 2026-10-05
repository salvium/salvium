#pragma once
#include <cstdint>

// A network consensus setting, shared by the fork schedule and spend gate.
// Change with utils/build_audit_activation.py and rebuild every validating node.
#define SALVIUM_LINEAGE_AUDIT_MAINNET_HEIGHT 0
#define SALVIUM_LINEAGE_AUDIT_TESTNET_HEIGHT 0
#define SALVIUM_LINEAGE_AUDIT_STAGENET_HEIGHT 0
// Fourteen days at the 120-second block target. Enrollment is accepted in
// [activation, activation + duration); each cleared output releases at C + 10.
#define SALVIUM_LINEAGE_AUDIT_DURATION_BLOCKS 10080
// Inclusive last block before the recovery scan. Mainnet starts at 154750,
// when the first SAL-to-SAL1 conversion audit opened. Earlier SAL state is
// context; SAL1 and token outputs can enroll, while legacy SAL is excluded. Zero is for isolated genesis fixtures.
#define SALVIUM_LINEAGE_AUDIT_MAINNET_OPENING_HEIGHT 154749
#define SALVIUM_LINEAGE_AUDIT_TESTNET_OPENING_HEIGHT 0
#define SALVIUM_LINEAGE_AUDIT_STAGENET_OPENING_HEIGHT 0
namespace cryptonote { namespace lineage_policy {
constexpr uint8_t fork_version = 14;
// A public output-by-output enrollment necessarily identifies the canonical
// output and, in the v2 prototype, publishes its amount and deterministic key
// image.  It also turns provenance into a consensus allow-list, which can
// recursively quarantine exchange deposits and unrelated customer funds.
//
// Keep the chain analysis available for operator review, but do not publish
// wallet evidence or use lineage as a spend/payout consensus predicate.  Any
// future privacy-preserving protocol must be introduced as a new version; v2
// must never become active by changing only the activation height below.
constexpr bool public_enrollment = false;
constexpr bool consensus_enforcement = false;
constexpr uint64_t duration_blocks = SALVIUM_LINEAGE_AUDIT_DURATION_BLOCKS;
static_assert(duration_blocks > 0, "Audit enrollment window must be nonzero");
static_assert(duration_blocks <= UINT64_MAX - 9, "Final audit clearance release height overflow");
constexpr uint64_t mainnet_height = SALVIUM_LINEAGE_AUDIT_MAINNET_HEIGHT;
constexpr uint64_t testnet_height = SALVIUM_LINEAGE_AUDIT_TESTNET_HEIGHT;
constexpr uint64_t stagenet_height = SALVIUM_LINEAGE_AUDIT_STAGENET_HEIGHT;
static_assert(mainnet_height <= UINT64_MAX - duration_blocks - 9 &&
    testnet_height <= UINT64_MAX - duration_blocks - 9 && stagenet_height <= UINT64_MAX - duration_blocks - 9,
    "Audit closing or final clearance release height overflow");
constexpr uint64_t mainnet_opening_height = SALVIUM_LINEAGE_AUDIT_MAINNET_OPENING_HEIGHT;
// The first known cross-asset SAL1 issuance must remain inside the ancestry
// audit. A later trusted root would also trust its already-spent descendants.
constexpr uint64_t mainnet_first_bad_asset_origin = 465074;
constexpr uint64_t testnet_opening_height = SALVIUM_LINEAGE_AUDIT_TESTNET_OPENING_HEIGHT;
constexpr uint64_t stagenet_opening_height = SALVIUM_LINEAGE_AUDIT_STAGENET_OPENING_HEIGHT;
static_assert(!mainnet_height || (mainnet_opening_height && mainnet_opening_height < mainnet_height), "Pin the previous mainnet audit boundary before activation");
static_assert(!mainnet_height || mainnet_opening_height < mainnet_first_bad_asset_origin,
    "The mainnet opening inventory must precede salYAHU issuance at 465074 so its descendants require ancestry proofs");
static_assert(!testnet_height || (testnet_opening_height && testnet_opening_height < testnet_height), "Pin the previous testnet audit boundary before activation");
static_assert(!stagenet_height || (stagenet_opening_height && stagenet_opening_height < stagenet_height), "Pin the previous stagenet audit boundary before activation");
static_assert(!mainnet_height || mainnet_height > 521425, "Audit fork must follow mainnet HF13");
static_assert(!testnet_height || testnet_height > 1400, "Audit fork must follow testnet HF13");
} }
