#!/usr/bin/env bash
set -Eeuo pipefail

repo_dir=$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)
source_data_dir=${1:?Usage: full_chain_audit.sh SOURCE_DATA_DIR [TARGET_HEIGHT]}
report_interval=${REPORT_INTERVAL_SECONDS:-60}
# Scan from the first SAL-to-SAL1 conversion audit, including both rounds.
opening_height=${OPENING_HEIGHT:-154749}
if [[ ! "$opening_height" =~ ^[0-9]+$ ]]; then
  echo "FATAL: OPENING_HEIGHT must be an inclusive accepted block height."
  exit 11
fi
scan_start=$((opening_height + 1))

replay_dir=${REPLAY_DIR:-"$repo_dir/build/full-chain-replay"}
build_dir="$repo_dir/build/audit/release"
if [[ -n "${BUILD_DIR:-}" && "$(realpath -m "$BUILD_DIR")" != "$build_dir" ]]; then
  echo "FATAL: this audit launcher builds only in $build_dir; omit BUILD_DIR."
  exit 9
fi
audit_jobs=${AUDIT_JOBS:-1}
if [[ ! "$audit_jobs" =~ ^[1-9][0-9]*$ ]]; then
  echo "FATAL: AUDIT_JOBS must be a positive integer."
  exit 9
fi
raw_file="$replay_dir/blockchain.raw"
raw_complete_marker="$raw_file.complete"
verified_dir="$replay_dir/verified-every-step"
verified_db_file="$verified_dir/lmdb/data.mdb"
import_bin="$build_dir/bin/salvium-blockchain-import"
verify_bin="$build_dir/bin/salvium-blockchain-verification"
stat_bin="$build_dir/bin/salvium-lmdb-stat"
run_log="$replay_dir/every-step-import.log"
rules_log="$replay_dir/full-tx-rules.log"
forensic_log="$replay_dir/full-forensic-scan.log"
rules_partial_log="$rules_log.partial"
forensic_partial_log="$forensic_log.partial"
final_report="$replay_dir/final-audit-report.txt"
tui_bin="$repo_dir/utils/audit_tui.py"
inventory_bin="$repo_dir/utils/generate_legacy_sal1_inventory.py"
artifact_bin="$repo_dir/utils/build_forensic_artifacts.py"
artifact_dir="$replay_dir/forensic-artifacts"

mkdir -p "$replay_dir" "$verified_dir"

echo "Building one-block audit importer and matching LMDB tools..."
echo "ONE-PROGRAM FULL AUDIT: block consensus + PoW + all transaction rules + forensic output scan + inflation/supply accounting + poison aftereffects + LMDB invariants"
make -C "$repo_dir" release-static builddir=build/audit topdir=../../.. -j"$audit_jobs"

source_entries=$("$stat_bin" -s block_info "$source_data_dir/lmdb" \
  | sed -n 's/^[[:space:]]*Entries:[[:space:]]*//p' | tail -n 1) || {
    echo "FATAL: unable to read source blockchain statistics."
    exit 10
  }
if [[ ! "$source_entries" =~ ^[0-9]+$ || "$source_entries" -eq 0 ]]; then
  echo "FATAL: unable to determine the source blockchain height from $source_data_dir/lmdb"
  exit 10
fi
source_tip=$((source_entries - 1))
target_height=${2:-$source_tip}
if [[ ! "$target_height" =~ ^[0-9]+$ || "$target_height" -gt "$source_tip" || "$target_height" -lt "$scan_start" ]]; then
  echo "FATAL: requested target height '$target_height' is invalid; current source tip is $source_tip."
  exit 11
fi
source_tx_entries=$("$stat_bin" -s tx_indices "$source_data_dir/lmdb" \
  | sed -n 's/^[[:space:]]*Entries:[[:space:]]*//p' | tail -n 1)
source_block_txs=unknown
if [[ "$target_height" == "$source_tip" \
   && "$source_tx_entries" =~ ^[0-9]+$ \
   && "$source_tx_entries" -ge $((2 * source_entries)) ]]; then
  # Salvium stores both miner_tx and protocol_tx for every block. AUDIT_TX
  # counts the regular transactions stored in block.tx_hashes.
  source_block_txs=$((source_tx_entries - 2 * source_entries))
fi
echo "SOURCE_CHAIN entries=$source_entries tip=$source_tip accepted_opening=$opening_height scan_start=$scan_start audit_target=$target_height total_context_and_range_transactions=$source_block_txs"

if [[ "${AUDIT_TUI_WORKER:-0}" != 1 \
   && "${AUDIT_TUI:-1}" != 0 \
   && -t 0 && -t 1 \
   && -x "$tui_bin" ]] \
   && command -v setsid >/dev/null 2>&1 \
   && python3 -c 'import curses' >/dev/null 2>&1; then
  tui_session_log="$replay_dir/tui-session.log"
  : > "$tui_session_log"
  setsid env AUDIT_TUI_WORKER=1 AUDIT_TUI=0 \
    bash "$0" "$@" > "$tui_session_log" 2>&1 &
  tui_worker_pid=$!

  stop_tui_worker() {
    kill -TERM -- "-$tui_worker_pid" 2>/dev/null || true
    wait "$tui_worker_pid" 2>/dev/null || true
    exit 130
  }
  trap stop_tui_worker INT TERM

  set +e
  "$tui_bin" \
    --log "$tui_session_log" \
    --pid "$tui_worker_pid" \
    --target "$target_height" --accepted-opening "$opening_height" \
    --resume-tip -1 \
    --initial-txs 0 \
    --start-offset 0 \
    --process-group
  tui_status=$?
  if [[ $tui_status -ne 0 ]] && kill -0 "$tui_worker_pid" 2>/dev/null; then
    kill -TERM -- "-$tui_worker_pid" 2>/dev/null || true
  fi
  wait "$tui_worker_pid"
  worker_status=$?
  set -e
  trap - INT TERM
  if [[ $tui_status -eq 130 ]]; then
    exit 130
  fi
  exit "$worker_status"
fi

required_bins=(
  "$build_dir/bin/salvium-blockchain-export"
  "$import_bin"
  "$verify_bin"
  "$stat_bin"
)

verify_audit_build() {
  local binary
  local verifier_help
  for binary in "${required_bins[@]}"; do
    if [[ ! -x "$binary" ]]; then
      echo "BUILD_VERIFY missing_or_not_executable=$binary"
      return 1
    fi
    if strings "$binary" | grep -Fq \
        'RandomX dataset is not enabled by default. Use MONERO_RANDOMX_FULL_MEM environment variable to enable it.'; then
      echo "BUILD_VERIFY stale_randomx_opt_in=$binary"
      return 1
    fi
  done

  verifier_help=$("$verify_bin" --help 2>&1 || true)
  if ! grep -q -- '--no-asset-flow-forensic' <<<"$verifier_help"; then
    echo "BUILD_VERIFY verifier_missing_default_asset_flow_forensics=$verify_bin"
    return 1
  fi

  echo "BUILD_VERIFY status=PASS randomx_full_mem=DEFAULT asset_flow_forensics=DEFAULT"
}

if ! verify_audit_build; then
  echo "FATAL: replay executables are stale or missing required audit features after make release-static."
  exit 9
fi

"$verify_bin" --db-path "$source_data_dir/lmdb" --inspect-height "$opening_height" \
  > "$replay_dir/accepted-opening-source.log" 2>&1
opening_hash=$(sed -n 's/^INSPECT_BLOCK_HASH .* hash=//p' "$replay_dir/accepted-opening-source.log")
if [[ ! "$opening_hash" =~ ^[0-9a-f]{64}$ ]]; then
  echo "FATAL: unable to identify the accepted source opening."
  exit 11
fi
"$verify_bin" --db-path "$source_data_dir/lmdb" --inspect-height "$target_height" \
  > "$replay_dir/target-source.log" 2>&1
target_hash=$(sed -n 's/^INSPECT_BLOCK_HASH .* hash=//p' "$replay_dir/target-source.log")
if [[ ! "$target_hash" =~ ^[0-9a-f]{64}$ ]]; then
  echo "FATAL: unable to identify the requested target block."
  exit 11
fi

raw_is_complete=no
if [[ -s "$raw_file" && -f "$raw_complete_marker" ]]; then
  read -r completed_target completed_hash < "$raw_complete_marker" || true
  if [[ "$completed_target" == "$target_height" && "${completed_hash:-}" == "$target_hash" ]]; then
    raw_is_complete=yes
  fi
fi

if [[ "$raw_is_complete" != yes ]]; then
  raw_tmp="$replay_dir/blockchain.raw.partial.$$"
  if [[ -e "$raw_tmp" ]]; then
    echo "FATAL: temporary export path already exists: $raw_tmp"
    exit 12
  fi
  if [[ -e "$raw_file" ]]; then
    stale_raw="$raw_file.stale.$(date +%Y%m%dT%H%M%S)"
    echo "Preserving incomplete or wrong-height export as $stale_raw"
    mv "$raw_file" "$stale_raw"
  fi
  if [[ -e "$raw_complete_marker" ]]; then
    stale_marker="$raw_complete_marker.stale.$(date +%Y%m%dT%H%M%S)"
    mv "$raw_complete_marker" "$stale_marker"
  fi
  echo "Exporting canonical chain through height $target_height..."
  "$build_dir/bin/salvium-blockchain-export" \
    --data-dir "$source_data_dir" \
    --output-file "$raw_tmp" \
    --block-start 0 \
    --block-stop "$target_height" \
    --log-level 1
  mv "$raw_tmp" "$raw_file"
  printf '%s %s\n' "$target_height" "$target_hash" > "$raw_complete_marker"
  echo "EXPORT_COMPLETE target=$target_height file=$raw_file"
else
  echo "EXPORT_REUSE target=$target_height file=$raw_file status=COMPLETE"
fi

committed_tip() {
  local entries
  entries=$(lmdb_entries block_info)
  if [[ "$entries" =~ ^[0-9]+$ && "$entries" -gt 0 ]]; then
    printf '%s\n' "$((entries - 1))"
  fi
}

lmdb_entries() {
  local table=$1
  "$stat_bin" -s "$table" "$verified_dir/lmdb" 2>/dev/null \
    | sed -n 's/^[[:space:]]*Entries:[[:space:]]*//p' \
    | tail -n 1
}

progress_tip() {
  tail -c 131072 "$run_log" 2>/dev/null \
    | tr '\r' '\n' \
    | sed -n 's/^[[:space:]]*block \([0-9][0-9]*\) \/ [0-9][0-9]*[[:space:]]*$/\1/p' \
    | tail -n 1
}

monitor() {
  while kill -0 "$import_pid" 2>/dev/null; do
    tip=$(progress_tip || true)
    if [[ -z "$tip" ]]; then
      tip=$initial_tip
      printf '%s PHASE=1/4 PREPARING resume_tip=%s action="scanning export to resume position; no new block counted yet"\n' \
        "$(date --iso-8601=seconds)" "$initial_tip"
    fi
    if [[ -n "$tip" ]]; then
      blocks_passed=$((tip - opening_height))
      elapsed=$(( $(date +%s) - monitor_started ))
      advanced=$((tip - initial_tip))
      read -r percent rate eta < <(awk \
        -v passed="$blocks_passed" -v total="$total_blocks" \
        -v advanced="$advanced" -v elapsed="$elapsed" \
        'BEGIN {
          pct = total ? 100 * passed / total : 0;
          bpm = elapsed ? 60 * advanced / elapsed : 0;
          eta = bpm > 0 ? (total - passed) / bpm : -1;
          printf "%.3f %.1f %.1f", pct, bpm, eta;
        }')
      printf '%s PHASE=1/4 FULL_BLOCK_CONSENSUS checking_block=%s checks="PoW+difficulty,linkage+timestamp,all-tx-crypto+range-proofs,key-images,fees,STAKE+BURN+all-types,miner-reward+supply"\n' \
        "$(date --iso-8601=seconds)" "$((tip + 1))"
      printf '%s PASS blocks=%s/%s (%s%%) latest=%s rate=%s_blocks/min eta=%s_min counts="exact transaction/type/HF/input totals are produced by phases 2 and 3"\n' \
        "$(date --iso-8601=seconds)" "$blocks_passed" "$total_blocks" "$percent" \
        "$tip" "$rate" "$eta"
    else
      printf '%s committed_tip=unavailable target=%s\n' \
        "$(date --iso-8601=seconds)" "$target_height"
    fi
    sleep "$report_interval"
  done
}

cleanup() {
  if [[ -n "${monitor_pid:-}" ]]; then
    kill "$monitor_pid" 2>/dev/null || true
    wait "$monitor_pid" 2>/dev/null || true
    monitor_pid=
  fi
  if [[ -n "${log_tail_pgid:-}" ]]; then
    # The non-TUI logger is an isolated process group. Terminate the complete
    # tail|tr|grep pipeline so no child can survive and corrupt a later TUI.
    kill -TERM -- "-$log_tail_pgid" 2>/dev/null || true
    if [[ -n "${log_tail_pid:-}" ]]; then
      wait "$log_tail_pid" 2>/dev/null || true
    fi
    log_tail_pid=
    log_tail_pgid=
  fi
}

count_log_records() {
  local log_file=$1
  local pattern=$2
  if [[ ! -f "$log_file" ]]; then
    echo 0
    return
  fi
  grep -Ec "$pattern" "$log_file" || true
}

write_findings_explanation() {
  local consensus_failures asset_findings lineage_candidates
  local blacklist_proposals forensic_findings output_failures supply_failures
  local aftereffect_records

  consensus_failures=$(count_log_records "${run_log:-}" \
    'AUDIT_CRYPTO_FINDING|Block verification failed|Transaction verification failed|AUDIT_(BLOCK|POW|TX) .*status=FAIL|CONSENSUS FINDING')
  asset_findings=$(count_log_records "${rules_log:-}" '^ASSET_FLOW_FINDING')
  lineage_candidates=$(count_log_records "${rules_log:-}" '^ASSET_FLOW_LINEAGE_CANDIDATE')
  blacklist_proposals=$(count_log_records "${rules_log:-}" '^ASSET_FLOW_BLACKLIST_PROPOSAL')
  forensic_findings=$(count_log_records "${forensic_log:-}" \
    '^(INDEPENDENT_CHAIN_FINDING|BLOCK_FORENSIC_RECORD .*status=FINDING|FORENSIC_(VERIFY|TX|INPUT|BLOCK) .*status=(FAIL|FINDING))')
  output_failures=$(count_log_records "${forensic_log:-}" '^OUTPUT_RECORD_CHECK .*status=FAIL')
  supply_failures=$(count_log_records "${forensic_log:-}" '^SUPPLY_BLOCK_CHECK .*status=FAIL')
  aftereffect_records=$(count_log_records "${forensic_log:-}" \
    '^AFTEREFFECT_(CANDIDATE_OUTPUT|RING_REFERENCE|PROTOCOL_KEY_MATCH)')

  echo "FINDINGS EXPLAINED"
  echo "This section translates the audit records into conclusions. Counts are evidence records, not necessarily distinct transactions or outputs; the detailed records below are authoritative."
  printf 'Observed evidence: consensus/cryptography failures=%s; asset-flow findings=%s; lineage candidates=%s; blacklist proposals=%s; independent forensic findings=%s; output-record failures=%s; supply failures=%s; aftereffect records=%s.\n' \
    "$consensus_failures" "$asset_findings" "$lineage_candidates" \
    "$blacklist_proposals" "$forensic_findings" "$output_failures" \
    "$supply_failures" "$aftereffect_records"

  if (( consensus_failures == 0 )); then
    echo "- No consensus, proof-of-work, transaction-verification, or cryptographic failure was recorded in the importer log available to this report."
  else
    echo "- Consensus/cryptography failures were recorded. One or more blocks or transactions did not satisfy the replayed validation rules; inspect the first detailed-evidence section before treating the replay as valid."
  fi
  if (( asset_findings == 0 && lineage_candidates == 0 && blacklist_proposals == 0 )); then
    echo "- No asset-flow anomaly, tainted-lineage candidate, or blacklist proposal was recorded."
  else
    echo "- Asset-flow evidence was recorded. A finding identifies an anomalous token or conversion path; a lineage candidate identifies an output connected to that path. Only ORIGIN_CONFIRMED and DESCENDANT_PROVEN evidence can justify a blacklist proposal. DESCENDANT_POSSIBLE is review-only because ring signatures hide the real spent member."
  fi
  if (( forensic_findings == 0 && output_failures == 0 && supply_failures == 0 )); then
    echo "- The independent chain, output-index, and public supply checks recorded no failure."
  else
    echo "- Independent forensic, output-index, or supply findings were recorded. Legacy asset-index and clear-amount/commitment substitutions are preserved as findings for migration analysis; they do not mean the scan crashed. Fatal structural, authorization, duplication, overflow, and supply conditions are evaluated separately by the phase gate."
  fi
  if (( aftereffect_records == 0 )); then
    echo "- No later output, ring reference, or protocol-key match was linked to a detected origin by the aftereffect scan."
  else
    echo "- Aftereffect records show where later chain activity references or matches suspicious origins. A ring reference establishes possible membership only; it does not reveal which ring member was actually spent."
  fi
  echo "- PASS applies only to checks that ran over the reported verified range. It does not prove wallet ownership, confidential amounts, or real ring-member identity."
}

load_forensic_summaries() {
  summary=$(grep '^FORENSIC_SUMMARY ' "$forensic_log" 2>/dev/null | tail -n 1 || true)
  independent_summary=$(grep '^INDEPENDENT_CHAIN_SUMMARY ' "$forensic_log" 2>/dev/null | tail -n 1 || true)
  output_summary=$(grep '^OUTPUT_AUDIT_SUMMARY ' "$forensic_log" 2>/dev/null | tail -n 1 || true)
  supply_summary=$(grep '^SUPPLY_AUDIT_SUMMARY ' "$forensic_log" 2>/dev/null | tail -n 1 || true)
  aftereffect_summary=$(grep '^AFTEREFFECT_SUMMARY ' "$forensic_log" 2>/dev/null | tail -n 1 || true)
}

forensic_summaries_pass() {
  [[ -n "$summary" && -n "$independent_summary" \
     && -n "$output_summary" && -n "$supply_summary" \
     && -n "$aftereffect_summary" \
     && "$summary" == *"blocks=$analysis_block_count "* \
     && "$independent_summary" == *"issuance_match=yes"* \
     && "$independent_summary" == *"status=PASS"* \
     && "$summary" == *"duplicate_key_images=0"* \
     && "$summary" == *"arithmetic_overflows=0"* \
     && "$summary" == *"reconstruction_failures=0"* \
     && "$summary" == *"matched_signature_failures=0"* \
     && "$summary" == *"broken_block_links=0"* \
     && "$summary" == *"missing_block_transactions=0"* \
     && "$summary" == *"duplicate_transaction_hashes=0"* \
     && "$output_summary" == *"parent_missing=0"* \
     && "$output_summary" == *"index_invalid=0"* \
     && "$output_summary" == *"height_mismatches=0"* \
     && "$output_summary" == *"pubkey_mismatches=0"* \
     && "$output_summary" == *"asset_mismatches=0"* \
     && "$output_summary" == *"amount_index_mismatches=0"* \
     && "$output_summary" == *"db_commitment_mismatches=0"* \
     && "$supply_summary" == *"generated_supply_decreases=0"* \
     && "$supply_summary" == *"generated_supply_exceeds_cap=0"* \
     && "$supply_summary" == *"consensus_reward_replay=SEPARATE_IMPORT_REQUIRED"* ]]
}

write_detailed_audit_evidence() {
  local evidence_limit=${REPORT_EVIDENCE_LIMIT:-100}
  echo "DETAILED PASS/FAIL AND ISSUE EVIDENCE"
  echo "Legend: PASS means the named automated check completed successfully. Full evidence is retained in the replay logs; this report shows at most $evidence_limit representative records per evidence section."
  echo
  echo "CONSENSUS, POW, CRYPTOGRAPHY, AND IMPORT FAILURES"
  if [[ -f "${run_log:-}" ]]; then
    grep -m "$evidence_limit" -E 'AUDIT_CRYPTO_FINDING|ge_frombytes_vartime failed|Block verification failed|Transaction verification failed|AUDIT_(BLOCK|POW|TX) .*status=FAIL|CONSENSUS FINDING' \
      "$run_log" | sed $'s/\033\\[[0-9;]*m//g' | sort -u || true
  else
    echo "NOT RUN: importer log is unavailable."
  fi
  echo
  echo "TRANSACTION-RULES PASS/FAIL SUMMARY"
  if [[ -f "${rules_log:-}" ]]; then
    sed -n '/^=== blockchain_verification summary ===$/,/^=== end summary ===$/p' \
      "$rules_log" || true
  else
    echo "NOT RUN: transaction-rules log is unavailable."
  fi
  echo
  echo "TOKEN CREATION, CONVERSION, SAL1 TROUBLE OUTPUT, AND DESCENDANT LINEAGE"
  if [[ -f "${rules_log:-}" ]]; then
    grep -m "$evidence_limit" -E '^(ASSET_FLOW_CONFIG|ASSET_FLOW_TEST_CATALOG|ASSET_FLOW_TOKEN_CREATE|ASSET_FLOW_FINDING|ASSET_FLOW_INPUT_MEMBER|ASSET_FLOW_INPUT_RESOLUTION .*status=FAIL|ASSET_FLOW_TROUBLE_OUTPUT|ASSET_FLOW_DESCENDANT_REFERENCE|ASSET_FLOW_LINEAGE_CANDIDATE|ASSET_FLOW_BLACKLIST_PROPOSAL)' \
      "$rules_log" || true
    grep -E '^(ASSET_FLOW_BLACKLIST_SUMMARY|ASSET_FLOW_SUMMARY)' "$rules_log" | tail -n 2 || true
  else
    echo "NOT RUN: asset-flow log is unavailable."
  fi
  echo
  echo "FORENSIC, OUTPUT, SUPPLY, AND AFTEREFFECT PROBLEMS"
  if [[ -f "${forensic_log:-}" ]]; then
    grep -m "$evidence_limit" -E '^(INDEPENDENT_CHAIN_(CONFIG|FINDING)|BLOCK_FORENSIC_RECORD .*status=FINDING|ISSUANCE_EDGE|OUTPUT_RECORD_CHECK .*status=FAIL|FORENSIC_(OVERFLOW|DUPLICATE_KEY_IMAGE|MATCH).*|FORENSIC_STAKE_(DISSECTION|MEMBER).*|FORENSIC_(VERIFY|TX|INPUT|BLOCK) .*status=(FAIL|FINDING)|SUPPLY_BLOCK_CHECK .*status=FAIL|AFTEREFFECT_(CANDIDATE_OUTPUT|RING_REFERENCE|PROTOCOL_KEY_MATCH))' \
      "$forensic_log" || true
    grep -E '^(INDEPENDENT_CHAIN_SUMMARY|FORENSIC_SUMMARY|OUTPUT_AUDIT_SUMMARY|SUPPLY_AUDIT_SUMMARY|AFTEREFFECT_SUMMARY)' \
      "$forensic_log" | tail -n 5 || true
  else
    echo "NOT RUN: full forensic log is unavailable."
  fi
  echo
  echo "EVIDENCE LIMITATIONS"
  echo "Lineage confidence is ORIGIN_CONFIRMED, DESCENDANT_PROVEN, or DESCENDANT_POSSIBLE. Only confirmed origins and descendants proven because every viable ring member has that lineage are proposed for blacklisting; possible candidates remain review-only. Public chain data cannot reveal a real ring member, confidential amount, or wallet owner where the cryptography hides it."
  printf 'Complete evidence files: importer=%s transaction_rules=%s forensic=%s\n' \
    "$run_log" "$rules_log" "$forensic_log"
}

write_interrupted_report() {
  if [[ "${final_report_written:-no}" == yes ]]; then
    return
  fi
  {
    echo "SALVIUM FULL CHAIN AUDIT FINAL REPORT"
    printf 'generated_at=%s\n' "$(date --iso-8601=seconds)"
    echo "status=INCOMPLETE_OR_INTERRUPTED"
    printf 'requested_target=%s verified_tip=%s importer_exit=%s\n' \
      "${target_height:-unknown}" "${analysis_end_height:-${tip:-unknown}}" \
      "${import_status:-unknown}"
    echo
    write_findings_explanation
    echo
    write_detailed_audit_evidence
    echo
    echo "The report records all results available before the launcher stopped. Missing phases are not reported as PASS."
  } > "$final_report"
  echo "PARTIAL FINAL REPORT: $final_report"
  echo "FINAL_REPORT_BEGIN file=$final_report status=INCOMPLETE_OR_INTERRUPTED"
  sed 's/^/REPORT /' "$final_report"
  echo "FINAL_REPORT_END file=$final_report"
}
finalize_on_exit() {
  local exit_status=$?
  cleanup
  if [[ $exit_status -ne 0 ]]; then
    write_interrupted_report
  fi
}
terminate() {
  if [[ -n "${import_pid:-}" ]]; then
    kill "$import_pid" 2>/dev/null || true
    wait "$import_pid" 2>/dev/null || true
  fi
  cleanup
  exit 130
}
trap finalize_on_exit EXIT
trap terminate INT TERM

# Bind reusable replay state to this source, accepted opening and importer.
# A source-exported prefix supplies accepted context without claiming a new
# consensus/PoW audit of the earlier history.
scope_marker="$replay_dir/replay-scope.txt"
import_hash=$(sha256sum "$import_bin" | cut -d ' ' -f 1)
scope_value="$opening_height $opening_hash $target_height $target_hash $import_hash"
if [[ -e "$scope_marker" && "$(cat "$scope_marker")" != "$scope_value" ]]; then
  echo "FATAL: replay source, opening, target or importer changed; select a fresh REPLAY_DIR."
  exit 11
fi
if [[ ! -e "$scope_marker" && -e "$verified_db_file" ]]; then
  echo "FATAL: existing replay has no matching provenance; select a fresh REPLAY_DIR."
  exit 11
fi
printf '%s\n' "$scope_value" > "$scope_marker"
seed_tip=$(committed_tip || printf '%s' -1)
if (( seed_tip < opening_height )); then
  echo "ACCEPTED_CONTEXT_IMPORT through=$opening_height earlier_history=NOT_REAUDITED"
  env -u SALVIUM_AUDIT_TRACE -u SALVIUM_AUDIT_ROLLBACK_EVERY_BLOCK \
    "$import_bin" --data-dir "$verified_dir" --input-file "$raw_file" \
    --block-stop "$opening_height" --dangerous-unverified-import 1 \
    --offline --disable-dns-checkpoints --prep-blocks-threads "$audit_jobs" \
    --log-level 0 >> "$replay_dir/accepted-context-import.log" 2>&1
fi
"$verify_bin" --db-path "$verified_dir/lmdb" --inspect-height "$opening_height" \
  > "$replay_dir/accepted-opening-replay.log" 2>&1
seed_hash=$(sed -n 's/^INSPECT_BLOCK_HASH .* hash=//p' "$replay_dir/accepted-opening-replay.log")
if [[ "$seed_hash" != "$opening_hash" ]]; then
  echo "FATAL: replay opening hash does not match the accepted source."
  exit 11
fi
echo "ACCEPTED_OPENING height=$opening_height hash=$opening_hash earlier_history=NOT_REAUDITED"

echo "Starting full verification, committing one block at a time."
echo "Detailed importer log: $run_log"
cat <<'CHECKS'
Every block from scan_start through the reported verified tip is checked for:
  - parsing, block hash/linkage, hard-fork version and timestamp
  - expected difficulty, RandomX proof of work and checkpoints
  - transaction parsing/type/version and minimum fee
  - key-image/double-spend and referenced-output checks
  - ring signatures, CLSAG/T-CLSAG, RingCT balance and range proofs
  - TRANSFER, STAKE, BURN, AUDIT, ROLLUP and CREATE_TOKEN rules
  - miner/protocol transactions, block reward, fees and generated supply
After the block replay, the script also runs:
  - all-transaction rules replay with per-type and per-hard-fork counts
  - every canonical output record vs its serialized parent transaction
  - duplicate-key-image, overflow and poisoned-output forensic scan
  - generated-supply monotonicity/cap, visible issuance, fees and burns
  - poison-linked output, later-ring-reference and protocol-key aftereffects
  - independent LMDB block/transaction/output table-count invariants
CHECKS
initial_tip=$(committed_tip || printf '%s' -1)
initial_tx_entries=$(lmdb_entries tx_indices || true)
initial_txs=0
if [[ "${initial_tx_entries:-}" =~ ^[0-9]+$ \
   && "$initial_tip" =~ ^-?[0-9]+$ \
   && "$initial_tx_entries" -ge $((2 * (initial_tip + 1))) ]]; then
  initial_txs=$((initial_tx_entries - 2 * (initial_tip + 1)))
fi
initial_key_images=$(lmdb_entries spent_keys || true)
initial_outputs=$(lmdb_entries output_records || true)
total_blocks=$((target_height - opening_height))
monitor_started=$(date +%s)
printf 'Resume snapshot: context_and_verified_blocks=%s recorded_transactions=%s recorded_key_images=%s recorded_outputs=%s\n' \
  "$((initial_tip + 1))" "${initial_txs:-unavailable}" \
  "${initial_key_images:-unavailable}" "${initial_outputs:-unavailable}"

if [[ "$initial_tip" == "$target_height" ]]; then
  echo "PHASE 1/4: verified database is already at target $target_height; skipping block import and resuming report phases."
  import_status=0
else
  use_tui=no
  if [[ "${AUDIT_TUI:-1}" != 0 && -t 0 && -t 1 && -x "$tui_bin" ]] \
     && python3 -c 'import curses' >/dev/null 2>&1; then
    use_tui=yes
  fi
  run_log_offset=$(stat -c %s "$run_log" 2>/dev/null || printf '0')
  tui_initial_txs=0
  if [[ "${initial_txs:-}" =~ ^[0-9]+$ ]]; then
    tui_initial_txs=$initial_txs
  fi

  SALVIUM_AUDIT_TRACE=1 \
  SALVIUM_AUDIT_ROLLBACK_EVERY_BLOCK="${AUDIT_ROLLBACK_EVERY_BLOCK:-1}" \
  "$import_bin" \
    --data-dir "$verified_dir" \
    --input-file "$raw_file" \
    --block-stop "$target_height" \
    --fast-block-sync 0 \
    --offline \
    --disable-dns-checkpoints \
    --batch-size 1 \
    --prep-blocks-threads "$audit_jobs" \
    --show-time-stats 0 \
    --log-level 0 >> "$run_log" 2>&1 &
  import_pid=$!

  if [[ "${use_tui:-no}" == yes ]]; then
    set +e
    "$tui_bin" \
      --log "$run_log" \
      --pid "$import_pid" \
      --target "$target_height" --accepted-opening "$opening_height" \
      --resume-tip "$initial_tip" \
      --initial-txs "$tui_initial_txs" \
      --start-offset "$run_log_offset"
    tui_status=$?
    set -e
    if [[ $tui_status -eq 130 ]]; then
      terminate
    fi
  else
    setsid bash -c '
      tail -n 0 -F -- "$1" 2>/dev/null \
        | tr "\r" "\n" \
        | grep --line-buffered "^AUDIT_"
    ' audit-log-pipeline "$run_log" &
    log_tail_pid=$!
    log_tail_pgid=$log_tail_pid
    monitor &
    monitor_pid=$!
  fi

  set +e
  wait "$import_pid"
  import_status=$?
  set -e
  cleanup
fi

tip=$(committed_tip || true)
printf '%s importer_exit=%s committed_tip=%s target=%s\n' \
  "$(date --iso-8601=seconds)" "$import_status" "${tip:-unavailable}" "$target_height"

if [[ $import_status -ne 0 ]]; then
  echo "CONSENSUS FINDING: importer stopped advancing, but the audit will continue over the verified prefix."
  tail -n 80 "$run_log"
fi

replay_complete=yes
if [[ $import_status -ne 0 || "$tip" != "$target_height" ]]; then
  replay_complete=no
fi
analysis_end_height=${tip:--1}
analysis_block_count=$((analysis_end_height - opening_height))
context_and_analysis_blocks=$((analysis_end_height + 1))
if (( analysis_block_count <= 0 )); then
  echo "INCOMPLETE: no new block after the accepted opening passed consensus."
  exit 7
fi

pow_passed=0
blocks_completed=0
phase1_trace_complete=no
rollback_blocks_passed=0
rollback_trace_complete=no
if [[ -f "$run_log" ]]; then
  pow_passed=$(grep 'AUDIT_POW height=.* stage=target_comparison .* status=PASS' "$run_log" \
    | sed -n 's/.*height=\([0-9][0-9]*\).*/\1/p' | sort -n -u | wc -l || true)
  blocks_completed=$(grep 'AUDIT_BLOCK height=.* step=COMPLETE status=PASS' "$run_log" \
    | sed -n 's/.*height=\([0-9][0-9]*\).*/\1/p' | sort -n -u | wc -l || true)
  rollback_blocks_passed=$(grep 'ROLLBACK_AUDIT height=.*status=PASS' "$run_log" \
    | sed -n 's/.*height=\([0-9][0-9]*\).*/\1/p' | sort -n -u | wc -l || true)
else
  echo "PHASE 1 TRACE NOTICE: $run_log is unavailable; the committed database will be analyzed, but prior PoW/block trace coverage is not claimed."
fi
expected_rollback_blocks=$total_blocks
if [[ "$rollback_blocks_passed" == "$expected_rollback_blocks" ]] \
   && ! grep -q 'ROLLBACK_AUDIT .*status=FAIL' "$run_log" 2>/dev/null; then
  rollback_trace_complete=yes
  echo "ROLLBACK COVERAGE PASS: connect/disconnect/reconnect state restoration passed for all $rollback_blocks_passed non-genesis blocks."
else
  echo "ROLLBACK TRACE COVERAGE UNAVAILABLE: rollback_passed=$rollback_blocks_passed expected=$expected_rollback_blocks"
fi
if { [[ -f "$run_log" ]] \
     && grep -q 'AUDIT_POW .*status=FAIL\|AUDIT_POW .*SKIPPED_FULL_POW' "$run_log"; } \
   || [[ "$pow_passed" != "$total_blocks" || "$blocks_completed" != "$total_blocks" ]]; then
  echo "POW/BLOCK TRACE COVERAGE UNAVAILABLE: pow_passed=$pow_passed blocks_completed=$blocks_completed expected=$total_blocks"
  if [[ "$replay_complete" == yes ]]; then
    echo "The committed database reaches the requested target, but the append-only trace cannot substantiate a full-PoW claim for this resumed run."
  else
    echo "Expected after the recorded consensus failure; continuing forensic analysis through height $analysis_end_height."
  fi
else
  phase1_trace_complete=yes
  echo "POW COVERAGE PASS: all $pow_passed blocks in $scan_start..$target_height performed full long-hash and target checks."
  echo "SUCCESS: trace contains full PoW PASS and COMPLETE for all $total_blocks unique heights."
fi

if [[ "$replay_complete" == yes && "$phase1_trace_complete" == yes ]]; then
  echo "SUCCESS: every block in $scan_start..$target_height verified and committed; earlier history is accepted context."
elif [[ "$replay_complete" == yes ]]; then
  echo "DATABASE COMPLETE: committed tip is $target_height; historical phase-1 trace coverage is unavailable."
else
  echo "PARTIAL REPLAY: verified coverage is $scan_start..$analysis_end_height; later blocks cannot be applied safely after a rejected predecessor."
fi

echo "PHASE 2/4: transaction-rules replay through height $analysis_end_height. Checking every miner and non-miner transaction; progress and final per-type/per-HF counts follow."
reuse_rules_log=no
if [[ -s "$rules_log" ]] \
   && [[ "$rules_log" -nt "$verify_bin" ]] \
   && [[ ! -e "$verified_db_file" || "$rules_log" -nt "$verified_db_file" ]] \
   && grep -q '^Failed txs:[[:space:]]*0$' "$rules_log" \
   && grep -q "^ASSET_FLOW_SUMMARY blocks=$analysis_block_count " "$rules_log"; then
  reuse_rules_log=yes
fi
if [[ "$reuse_rules_log" == yes ]]; then
  echo "PHASE 2/4 REUSE: completed transaction-rules and asset-flow report matches $analysis_block_count verified blocks."
else
  echo "PHASE 2/4 CHECKPOINT: preserving the last completed report in $rules_log until this pass succeeds."
  : > "$rules_partial_log"
  set +e
  SALVIUM_AUDIT_TRACE=1 stdbuf -oL -eL "$verify_bin" \
    --db-path "$verified_dir/lmdb" \
    --start-height "$scan_start" \
    --end-height "$analysis_end_height" \
    --include-miner 1 \
    --stop-on-first-failure 1 \
    --progress-interval 10000 \
    --log-level 0 2>&1 | tee "$rules_partial_log"
  rules_status=${PIPESTATUS[0]}
  set -e
  # Exit 2 means the completed asset scan found bad funds. Preserve the
  # evidence and continue the remaining checks; it is not an interrupted scan.
  if [[ $rules_status -ne 0 && $rules_status -ne 2 ]]; then
    echo "PHASE 2/4 INTERRUPTED: partial output retained at $rules_partial_log; the prior completed checkpoint was not overwritten."
    exit "$rules_status"
  fi
  mv "$rules_partial_log" "$rules_log"
fi

if ! grep -q '^Failed txs:[[:space:]]*0$' "$rules_log"; then
  echo "TRANSACTION-RULES PASS FAILED. Last log lines:"
  tail -n 80 "$rules_log"
  exit 3
fi
echo "SUCCESS: full transaction-rules pass reported zero failures."

asset_flow_summary=$(grep '^ASSET_FLOW_SUMMARY ' "$rules_log" | tail -n 1 || true)
if [[ -z "$asset_flow_summary" ]]; then
  echo "ASSET-FLOW FORENSIC PASS FAILED: no ASSET_FLOW_SUMMARY was produced."
  tail -n 80 "$rules_log"
  exit 8
fi
echo "FINDING: full token/mint/conversion lineage scan completed: $asset_flow_summary"
blacklist_summary=$(grep '^ASSET_FLOW_BLACKLIST_SUMMARY ' "$rules_log" | tail -n 1 || true)
if [[ -z "$blacklist_summary" ]]; then
  echo "ASSET-FLOW FORENSIC PASS FAILED: no recursive-lineage blacklist proposal was produced."
  tail -n 80 "$rules_log"
  exit 8
fi
echo "FINDING: candidate-lineage blacklist proposal completed: $blacklist_summary"

legacy_refs="$replay_dir/legacy-sal1-refs.tsv"
poison_refs="$replay_dir/poison-legacy-ranks.tsv"
if [[ ! -s "$legacy_refs" || ! -s "$poison_refs" ]]; then
  echo "FORENSIC INVENTORY: missing legacy SAL1 inventory; rebuilding it from the preserved LMDB backup tables."
  python3 "$inventory_bin" \
    --db-path "$verified_dir/lmdb" \
    --legacy-refs "$legacy_refs" \
    --poison-ranks "$poison_refs"
fi

echo "PHASE 3/4: forensic and canonical-output scan. Checking every output record and every input for structural mismatch, commitment substitution, duplicate key images, overflow and poisoned-output references."
load_forensic_summaries
reuse_forensic_log=no
if [[ -s "$forensic_log" ]] \
   && [[ "$forensic_log" -nt "$verify_bin" ]] \
   && [[ ! -e "$verified_db_file" || "$forensic_log" -nt "$verified_db_file" ]] \
   && [[ "$forensic_log" -nt "$legacy_refs" ]] \
   && [[ "$forensic_log" -nt "$poison_refs" ]] \
   && forensic_summaries_pass; then
  reuse_forensic_log=yes
fi
if [[ "$reuse_forensic_log" == yes ]]; then
  echo "PHASE 3/4 REUSE: completed forensic scan matches $analysis_block_count verified blocks and all required pass summaries."
else
  if [[ -s "$forensic_log" ]]; then
    echo "PHASE 3/4 RESTART: prior completed forensic log is stale or contains a failed required check."
  fi
  echo "PHASE 3/4 CHECKPOINT: preserving the last completed report in $forensic_log until this pass succeeds."
  : > "$forensic_partial_log"
  set +e
  SALVIUM_LEGACY_REFS_FILE="$legacy_refs" \
  SALVIUM_POISON_RANKS_FILE="$poison_refs" \
  SALVIUM_FULL_FORENSIC_SCAN=1 SALVIUM_FORENSIC_VERBOSE=1 stdbuf -oL -eL "$verify_bin" \
    --db-path "$verified_dir/lmdb" \
    --start-height "$scan_start" --end-height "$analysis_end_height" \
    --log-level 0 2>&1 | tee "$forensic_partial_log"
  forensic_status=${PIPESTATUS[0]}
  set -e
  if [[ $forensic_status -ne 0 && $forensic_status -ne 2 ]]; then
    echo "PHASE 3/4 INTERRUPTED: partial output retained at $forensic_partial_log; the prior completed checkpoint was not overwritten."
    exit "$forensic_status"
  fi
  mv "$forensic_partial_log" "$forensic_log"
  load_forensic_summaries
fi

if ! forensic_summaries_pass; then
  echo "FORENSIC PASS FAILED or found a new duplicate/overflow. Last log lines:"
  tail -n 80 "$forensic_log"
  exit 5
fi
echo "SUCCESS: canonical output-table pass completed: $output_summary"
echo "SUCCESS: forensic pass completed: $summary"
echo "SUCCESS: supply-accounting pass completed: $supply_summary"
echo "FINDING: public aftereffect analysis completed: $aftereffect_summary"
echo "FINDING: independent issuance and authorization analysis completed: $independent_summary"

echo "PHASE 4/4: LMDB structural invariants. Comparing independently stored block, transaction and output tables."
blocks_count=$(lmdb_entries blocks)
block_info_count=$(lmdb_entries block_info)
block_heights_count=$(lmdb_entries block_heights)
hf_count=$(lmdb_entries hf_versions)
tx_index_count=$(lmdb_entries tx_indices)
tx_pruned_count=$(lmdb_entries txs_pruned)
tx_output_count=$(lmdb_entries tx_outputs)
output_record_count=$(lmdb_entries output_records)
output_tx_count=$(lmdb_entries output_txs)
output_amount_count=$(lmdb_entries output_amounts)
output_amount_ref_count=$(lmdb_entries output_amount_refs)
output_type_count=$(lmdb_entries output_types)
output_type_ref_count=$(lmdb_entries output_type_refs)
alt_count=$(lmdb_entries alt_blocks)
pool_blob_count=$(lmdb_entries txpool_blob)
pool_meta_count=$(lmdb_entries txpool_meta)

printf 'TABLE_COUNTS blocks=%s block_info=%s block_heights=%s hf_versions=%s tx_indices=%s txs_pruned=%s tx_outputs=%s output_records=%s output_txs=%s output_amounts=%s output_amount_refs=%s output_types=%s output_type_refs=%s alt_blocks=%s txpool_blob=%s txpool_meta=%s\n' \
  "$blocks_count" "$block_info_count" "$block_heights_count" "$hf_count" \
  "$tx_index_count" "$tx_pruned_count" "$tx_output_count" \
  "$output_record_count" "$output_tx_count" "$output_amount_count" \
  "$output_amount_ref_count" "$output_type_count" "$output_type_ref_count" \
  "$alt_count" "$pool_blob_count" "$pool_meta_count"

if [[ "$blocks_count" != "$context_and_analysis_blocks" \
   || "$block_info_count" != "$context_and_analysis_blocks" \
   || "$block_heights_count" != "$context_and_analysis_blocks" \
   || "$hf_count" != "$context_and_analysis_blocks" \
   || "$tx_index_count" != "$tx_pruned_count" \
   || "$tx_index_count" != "$tx_output_count" \
   || "$output_record_count" != "$output_tx_count" \
   || "$output_record_count" != "$output_amount_count" \
   || "$output_record_count" != "$output_amount_ref_count" \
   || "$output_type_count" != "$output_type_ref_count" \
   || "$alt_count" != 0 || "$pool_blob_count" != 0 || "$pool_meta_count" != 0 ]]; then
  echo "LMDB STRUCTURAL INVARIANT FAILURE"
  exit 6
fi
echo "SUCCESS: all canonical LMDB table counts agree and replay-only alt/pool tables are empty."

artifact_status=COMPLETE
artifact_input_bytes=$(
  {
    stat -c %s "$rules_log" "$forensic_log" "$run_log" 2>/dev/null || true
  } | awk '{ total += $1 } END { print total + 0 }'
)
artifact_input_limit=${FORENSIC_ARTIFACT_MAX_INPUT_BYTES:-1073741824}
if (( artifact_input_bytes > artifact_input_limit )); then
  artifact_status=SKIPPED_INPUT_TOO_LARGE
  echo "FORENSIC ARTIFACTS: skipped in-memory JSON conversion because input logs total $artifact_input_bytes bytes (limit $artifact_input_limit). Complete evidence remains in the replay logs."
else
  echo "FORENSIC ARTIFACTS: generating deterministic JSON/JSONL evidence in $artifact_dir"
  if ! python3 "$artifact_bin" \
    --forensic-log "$forensic_log" \
    --rules-log "$rules_log" \
    --import-log "$run_log" \
    --output-dir "$artifact_dir"; then
    artifact_status=FAILED
    echo "FORENSIC ARTIFACT WARNING: JSON conversion failed; continuing so the final text report and complete source logs are retained."
  fi
fi

report_status=COMPLETE
report_exit=0
if [[ "$replay_complete" != yes ]]; then
  report_status=INCOMPLETE_CONSENSUS_REPLAY
  report_exit=7
elif [[ "$phase1_trace_complete" != yes || "$rollback_trace_complete" != yes ]]; then
  report_status=INCOMPLETE_VALIDATION_TRACE
  report_exit=8
fi

{
  echo "SALVIUM FULL CHAIN AUDIT FINAL REPORT"
  printf 'generated_at=%s\n' "$(date --iso-8601=seconds)"
  printf 'accepted_opening=%s accepted_opening_hash=%s scan_start=%s earlier_history=NOT_REAUDITED\n' \
    "$opening_height" "$opening_hash" "$scan_start"
  printf 'requested_target=%s verified_tip=%s importer_exit=%s replay_complete=%s\n' \
    "$target_height" "$analysis_end_height" "$import_status" "$replay_complete"
  printf 'pow_passed=%s blocks_completed=%s expected_blocks=%s\n' \
    "$pow_passed" "$blocks_completed" "$total_blocks"
  printf 'rollback_blocks_passed=%s expected_non_genesis_blocks=%s rollback_trace_complete=%s\n' \
    "$rollback_blocks_passed" "$expected_rollback_blocks" "$rollback_trace_complete"
  printf 'forensic_artifact_status=%s input_bytes=%s\n' \
    "$artifact_status" "$artifact_input_bytes"
  echo
  echo "PHASE RESULTS"
  if [[ "$replay_complete" == yes && "$phase1_trace_complete" == yes ]]; then
    echo "PHASE 1 block consensus and full PoW: PASS ($blocks_completed/$total_blocks blocks)"
  elif [[ "$replay_complete" == yes ]]; then
    echo "PHASE 1 committed database: COMPLETE; historical consensus/PoW trace: UNAVAILABLE"
  else
    echo "PHASE 1 block consensus and full PoW: INCOMPLETE TRACE COVERAGE ($blocks_completed/$total_blocks recorded blocks)"
  fi
  if [[ "$rollback_trace_complete" == yes ]]; then
    echo "PHASE 1 rollback connect/disconnect/reconnect: PASS ($rollback_blocks_passed/$expected_rollback_blocks non-genesis blocks)"
  else
    echo "PHASE 1 rollback connect/disconnect/reconnect: TRACE UNAVAILABLE FOR THIS RESUMED RUN"
  fi
  echo "PHASE 2 transaction rules and asset flow: PASS over heights $scan_start..$analysis_end_height"
  echo "PHASE 3 output, key-image, overflow, supply, and aftereffects: PASS WITH REPORTED FINDINGS over heights $scan_start..$analysis_end_height"
  echo "PHASE 4 LMDB structural invariants: PASS for the verified database through height $analysis_end_height"
  echo
  write_findings_explanation
  echo
  write_detailed_audit_evidence
  echo
  echo "INTERPRETATION"
  echo "status=$report_status"
  if [[ "$replay_complete" != yes ]]; then
    echo "The audit continued over the verified prefix. Blocks after the first rejected block were not committed because doing so would fabricate chain state."
  elif [[ "$report_status" != COMPLETE ]]; then
    echo "The database reaches the target, but the required full consensus/PoW and rollback trace is incomplete."
  fi
  echo "Ring real-spend identity, confidential excess amount, and wallet attribution remain cryptographically unknowable from public chain data."
} > "$final_report"
final_report_written=yes

echo "FINAL REPORT: $final_report"
echo "FINAL_REPORT_BEGIN file=$final_report status=$report_status"
sed 's/^/REPORT /' "$final_report"
echo "FINAL_REPORT_END file=$final_report"
echo "ALL AUTOMATABLE AUDIT PASSES AVAILABLE FOR THE VERIFIED CHAIN PREFIX COMPLETED BY utils/full_chain_audit.sh."
echo "FINAL LIMITATION: ring real-spend identity, confidential excess amount, and wallet attribution remain cryptographically unknowable from public chain data and are reported as UNKNOWABLE, never as PASS."
exit "$report_exit"
