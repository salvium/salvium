#!/usr/bin/env python3
"""Live curses dashboard for utils/full_chain_audit.sh."""

import argparse
import collections
import curses
import os
import re
import signal
import textwrap
import time


BLOCK_STEP_LABELS = collections.OrderedDict([
    ("block_blob_parse_and_prepare", "Block parse"),
    ("previous_block_link", "Previous link"),
    ("hard_fork_version", "Hard fork"),
    ("timestamp_median_rule", "Timestamp"),
    ("pow_difficulty_calculation", "Difficulty"),
    ("difficulty_and_proof_of_work", "Proof of work"),
    ("checkpoint", "Checkpoint"),
    ("miner_transaction_prevalidation", "Miner precheck"),
    ("protocol_transaction_prevalidation", "Protocol precheck"),
    ("miner_transaction_rules", "Miner rules"),
    ("miner_reward_fees_weight_and_generated_supply", "Reward/supply"),
    ("protocol_transaction_rules", "Protocol rules"),
    ("protocol_transaction_validation", "Protocol validation"),
    ("database_commit_key_image_uniqueness", "DB/key images"),
])

TX_STEP_LABELS = collections.OrderedDict([
    ("parsing_semantics_ringct_balance_and_range_proofs", "Parse/range proof"),
    ("transaction_type_consensus_rules", "TX rules"),
    ("minimum_fee", "Minimum fee"),
    ("inputs_ring_signature_key_image_and_commitments", "Ring/input crypto"),
    ("type_and_version", "Type/version"),
    ("cleartext_confidential_amount_policy", "Cleartext policy"),
])

ANSI_ESCAPE = re.compile(r"\x1b(?:\[[0-?]*[ -/]*[@-~]|\][^\x07]*(?:\x07|\x1b\\))")
EXPORT_PROGRESS = re.compile(r"(?:block|Block) (?:height: )?\d+\s*/\s*\d+")


def field(line, name, default="-"):
    match = re.search(r"(?:^| )" + re.escape(name) + r"=(<[^>]*>|\"[^\"]*\"|[^ ]+)", line)
    return match.group(1) if match else default


def represented_on_dashboard(line):
    """Return true when consuming this line updates a value visible above the log."""
    if EXPORT_PROGRESS.search(line):
        return True
    if re.search(r"SOURCE_CHAIN .*audit_target=\d+", line):
        return True
    if re.search(r"Resume snapshot: .*passed_transactions=\d+", line):
        return True
    if re.search(r"PHASE[ =]\d/4", line):
        # Phase banners belong in the chronological log as section headers,
        # even though the current phase is also shown on the dashboard.
        return False
    if "Building one-block audit importer" in line or "Exporting canonical chain" in line:
        return True
    return line.startswith((
        "AUDIT_BLOCK ",
        "AUDIT_POW ",
        "AUDIT_TX ",
        "AUDIT_CRYPTO_FINDING ",
        "ASSET_FLOW_SUMMARY ",
        "ASSET_FLOW_FINDING ",
        "ASSET_FLOW_TROUBLE_OUTPUT ",
        "ASSET_FLOW_DESCENDANT_REFERENCE ",
        "OUTPUT_AUDIT_PROGRESS ",
        "OUTPUT_AUDIT_SUMMARY ",
        "INDEPENDENT_CHAIN_PROGRESS ",
        "INDEPENDENT_CHAIN_SUMMARY ",
        "INDEPENDENT_CHAIN_FINDING ",
        "FORENSIC_PROGRESS ",
        "FORENSIC_SUMMARY ",
        "FORENSIC_OVERFLOW ",
        "FORENSIC_DUPLICATE_KEY_IMAGE ",
        "FORENSIC_MATCH ",
        "SUPPLY_AUDIT_SUMMARY ",
        "AFTEREFFECT_SUMMARY ",
        "TABLE_COUNTS ",
    ))


class AuditState:
    def __init__(self, target, resume_tip, initial_txs, accepted_opening=-1):
        self.target = target
        self.accepted_opening = accepted_opening
        self.height = -1
        self.completed_height = resume_tip
        self.block_hash = "-"
        self.block_txs = set()
        self.block_tx_total = "-"
        self.total_txs = initial_txs
        self.run_txs = 0
        self.chain_tx_total = "-"
        self.tx_type_counts = collections.Counter()
        self.current_tx = "-"
        self.current_type = "-"
        self.current_inputs = "-"
        self.current_outputs = "-"
        self.current_ring_members = "-"
        self.current_min_ring_size = "-"
        self.current_max_ring_size = "-"
        self.current_fee = "-"
        self.current_weight = "-"
        self.expected_difficulty = "-"
        self.pow_hash = "-"
        self.completed_heights = set()
        self.pow_heights = set()
        self.blocks_completed = 0
        self.pow_passed = 0
        self.findings = 0
        self.failures = 0
        self.issue_classes = collections.Counter()
        self.latest_findings = collections.deque(maxlen=100)
        self.forensic_values = {}
        self.active_forensic_test = "-"
        self.forensic_stage = "-"
        self.forensic_position = "-"
        self.forensic_target = "-"
        self.show_dashboard_duplicates = False
        self.log_scroll = 0
        self.block_checks = {key: "-" for key in BLOCK_STEP_LABELS}
        self.tx_checks = {key: "-" for key in TX_STEP_LABELS}
        self.started = time.monotonic()
        self.last_activity = time.monotonic()
        self.phase = "STARTING"

    def reset_block(self, height):
        if height == self.height:
            return
        self.height = height
        self.block_hash = "-"
        self.block_txs.clear()
        self.block_tx_total = "-"
        self.block_checks = {key: "-" for key in BLOCK_STEP_LABELS}
        self.tx_checks = {key: "-" for key in TX_STEP_LABELS}

    def consume(self, line):
        self.last_activity = time.monotonic()
        source = re.search(r"SOURCE_CHAIN .*audit_target=(\d+)", line)
        if source:
            self.target = int(source.group(1))
            opening = field(line, "accepted_opening")
            if opening.isdigit():
                self.accepted_opening = int(opening)
            chain_tx_total = field(line, "block_txs")
            if chain_tx_total.isdigit():
                self.chain_tx_total = int(chain_tx_total)
        resume = re.search(
            r"Resume snapshot: (?:passed_blocks|context_and_verified_blocks)=(\d+) "
            r"(?:passed_transactions|recorded_transactions)=(\d+)", line)
        if resume:
            self.completed_height = int(resume.group(1)) - 1
            self.total_txs = int(resume.group(2))
        export = re.search(r"(?:block|Block) (?:height: )?(\d+)\s*/\s*(\d+)", line)
        if export:
            self.phase = "EXPORT"
            self.height = int(export.group(1))
            self.target = int(export.group(2))
        phase = re.search(r"PHASE[ =](\d/4)", line)
        if phase:
            self.phase = "PHASE " + phase.group(1)
        if "Building one-block audit importer" in line:
            self.phase = "BUILD"
        elif "Exporting canonical chain" in line:
            self.phase = "EXPORT"
        elif line.startswith(("AUDIT_BLOCK ", "AUDIT_POW ", "AUDIT_TX ")):
            self.phase = "PHASE 1/4"
        elif line.startswith("ASSET_FLOW_"):
            self.phase = "ASSET FLOW"
        elif line.startswith(("FORENSIC_", "OUTPUT_AUDIT_", "SUPPLY_AUDIT_", "AFTEREFFECT_")):
            self.phase = "FORENSICS"
        elif line.startswith(("INDEPENDENT_CHAIN_", "BLOCK_FORENSIC_RECORD", "ISSUANCE_EDGE")):
            self.phase = "INDEPENDENT ISSUANCE"
        elif line.startswith("TABLE_COUNTS"):
            self.phase = "LMDB INVARIANTS"
        if line.startswith("AUDIT_BLOCK "):
            height = int(field(line, "height", "-1"))
            self.reset_block(height)
            step = field(line, "step")
            status = field(line, "status")
            tx_total = field(line, "tx_total")
            if tx_total.isdigit():
                self.block_tx_total = int(tx_total)
            if step in self.block_checks:
                self.block_checks[step] = status
            if step == "COMPLETE" and status == "PASS":
                self.completed_height = max(self.completed_height, height)
                self.completed_heights.add(height)
                self.blocks_completed = len(self.completed_heights)
        elif line.startswith("AUDIT_POW "):
            height = int(field(line, "height", "-1"))
            self.reset_block(height)
            stage = field(line, "stage")
            self.expected_difficulty = field(line, "expected_difficulty", self.expected_difficulty)
            self.block_hash = field(line, "block_hash", self.block_hash)
            self.pow_hash = field(line, "pow_hash", self.pow_hash)
            if stage == "target_comparison" and field(line, "status") == "PASS":
                self.pow_heights.add(height)
                self.pow_passed = len(self.pow_heights)
        elif line.startswith("AUDIT_TX "):
            height = int(field(line, "height", "-1"))
            self.reset_block(height)
            tx_hash = field(line, "tx")
            self.current_tx = tx_hash
            if tx_hash not in self.block_txs and field(line, "step") == "parsing_semantics_ringct_balance_and_range_proofs":
                self.block_txs.add(tx_hash)
                self.total_txs += 1
                self.run_txs += 1
                self.tx_type_counts[field(line, "type", "UNKNOWN")] += 1
            step = field(line, "step")
            if step in self.tx_checks:
                self.tx_checks[step] = field(line, "status")
            if step == "summary":
                self.current_type = field(line, "type")
                self.current_inputs = field(line, "inputs")
                self.current_outputs = field(line, "outputs")
                self.current_ring_members = field(line, "ring_members")
                self.current_min_ring_size = field(line, "min_ring_size")
                self.current_max_ring_size = field(line, "max_ring_size")
                self.current_fee = field(line, "fee")
                self.current_weight = field(line, "weight")
        elif line.startswith((
            "AUDIT_CRYPTO_FINDING ",
            "ASSET_FLOW_FINDING ",
            "ASSET_FLOW_LINEAGE_CANDIDATE ",
            "FORENSIC_OVERFLOW ",
            "FORENSIC_DUPLICATE_KEY_IMAGE ",
            "FORENSIC_MATCH ",
            "INDEPENDENT_CHAIN_FINDING ",
        )):
            self.findings += 1
            issue_class = field(line, "class", field(line, "status", "FINDING"))
            self.issue_classes[issue_class] += 1
            self.latest_findings.append(line)
        elif line.startswith("ASSET_FLOW_TROUBLE_OUTPUT "):
            self.issue_classes["TROUBLE_OUTPUT"] += 1
            self.latest_findings.append(line)
        elif line.startswith("ASSET_FLOW_DESCENDANT_REFERENCE "):
            spend_status = field(line, "parent_confidence", "REFERENCE")
            self.issue_classes[
                "PROVEN_DESCENDANT" if spend_status == "DESCENDANT_PROVEN"
                else "POSSIBLE_RING_REFERENCE"
            ] += 1
            self.latest_findings.append(line)
        elif line.startswith("ASSET_FLOW_BLACKLIST_PROPOSAL "):
            self.issue_classes["PROPOSED_BLACKLIST"] += 1
            self.latest_findings.append(line)
        elif line.startswith("OUTPUT_RECORD_CHECK ") and " status=FAIL" in line:
            # These records include preserved legacy representation
            # differences (for example asset_index_match=no). The launcher
            # evaluates the aggregate summary and fails the phase if a
            # structural invariant is broken, so do not present each
            # reportable record as an audit-process failure.
            self.findings += 1
            self.issue_classes["OUTPUT_RECORD_MISMATCH"] += 1
            self.latest_findings.append(line)

        if ((" status=FAIL" in line
             and not line.startswith("OUTPUT_RECORD_CHECK "))
                or "Block verification failed" in line):
            self.failures += 1
            if line not in self.latest_findings:
                self.latest_findings.append(line)

        if line.startswith("ASSET_FLOW_PROGRESS "):
            self.active_forensic_test = field(line, "test", field(line, "stage"))
            self.forensic_stage = field(line, "stage", self.forensic_stage)
            height = field(line, "height")
            target = field(line, "target")
            output_id = field(line, "output_id")
            if height.isdigit():
                self.forensic_position = height
            self.forensic_target = target
            if height.isdigit():
                self.height = int(height)
            elif output_id.isdigit():
                self.forensic_position = f"output:{output_id}"
                self.forensic_target = "database-end"
        elif line.startswith("INDEPENDENT_CHAIN_PROGRESS "):
            self.active_forensic_test = "INDEPENDENT_ISSUANCE_AND_AUTHORIZATION"
            self.forensic_stage = "CHAIN_DERIVED"
            self.forensic_position = field(line, "height", self.forensic_position)
            self.forensic_target = field(line, "target", self.forensic_target)
            if str(self.forensic_position).isdigit():
                self.height = int(self.forensic_position)
        elif line.startswith("ASSET_FLOW_STAGE "):
            self.active_forensic_test = field(line, "name", field(line, "stage"))
            self.forensic_stage = field(line, "stage", self.forensic_stage)
        elif line.startswith("OUTPUT_AUDIT_PROGRESS "):
            self.active_forensic_test = "OUTPUT_RECORD_INTEGRITY"
        elif line.startswith("FORENSIC_PROGRESS "):
            self.active_forensic_test = "CHAIN_TX_KEY_IMAGE_SUPPLY"

        if line.startswith((
            "ASSET_FLOW_PROGRESS ",
            "ASSET_FLOW_SUMMARY ",
            "ASSET_FLOW_BLACKLIST_SUMMARY ",
            "INDEPENDENT_CHAIN_PROGRESS ",
            "INDEPENDENT_CHAIN_SUMMARY ",
            "OUTPUT_AUDIT_PROGRESS ",
            "OUTPUT_AUDIT_SUMMARY ",
            "FORENSIC_PROGRESS ",
            "FORENSIC_SUMMARY ",
            "SUPPLY_AUDIT_SUMMARY ",
            "AFTEREFFECT_SUMMARY ",
            "TABLE_COUNTS ",
        )):
            prefix = line.split(" ", 1)[0]
            values = {}
            for match in re.finditer(r"(?:^| )([A-Za-z0-9_]+)=([^ ]+)", line):
                values[match.group(1)] = match.group(2)
            self.forensic_values[prefix] = values


def metric(values, key, default="-"):
    return values.get(key, default)


def clipped(text, width):
    if width <= 0:
        return ""
    return text if len(text) <= width else text[:max(0, width - 1)] + "…"


def wrapped_rows(lines, width):
    """Expand logical log records into terminal-width display rows."""
    if width <= 0:
        return []
    rows = []
    for line in lines:
        parts = textwrap.wrap(
            str(line),
            width=width,
            replace_whitespace=False,
            drop_whitespace=True,
            break_long_words=True,
            break_on_hyphens=False,
        )
        rows.extend((part, str(line)) for part in (parts or [""]))
    return rows


def reverse_log_with_phase_banners(lines):
    """Reverse phase blocks while leaving each banner above its reversed details."""
    groups = []
    current = []
    for line in lines:
        if re.search(r"(?:^| )PHASE[ =]\d/4", line):
            if current:
                groups.append(current)
            current = [line]
        else:
            current.append(line)
    if current:
        groups.append(current)

    ordered = []
    for group in reversed(groups):
        if group and re.search(r"(?:^| )PHASE[ =]\d/4", group[0]):
            ordered.append(group[0])
            ordered.extend(reversed(group[1:]))
        else:
            ordered.extend(reversed(group))
    return ordered


def put(window, row, col, text, style=0):
    height, width = window.getmaxyx()
    if row < 0 or row >= height or col >= width:
        return
    try:
        window.addstr(row, col, clipped(str(text), width - col - 1), style)
    except curses.error:
        pass


def status_style(status):
    if status == "PASS":
        return curses.color_pair(2)
    if status in ("FAIL", "INVALID_CURVE_POINT"):
        return curses.color_pair(3) | curses.A_BOLD
    if status == "RUNNING":
        return curses.color_pair(4)
    return curses.color_pair(1)


def render(screen, state, logs, process_alive):
    screen.erase()
    rows, cols = screen.getmaxyx()
    dashboard_rows = min(19, max(10, rows - 4))
    elapsed = max(1, int(time.monotonic() - state.started))
    completed = max(0, state.completed_height - state.accepted_opening, state.blocks_completed)
    percent = (
        min(100.0, 100.0 * completed / max(1, state.target - state.accepted_opening))
        if state.target >= 0 else 0.0
    )
    rate = 60.0 * state.blocks_completed / elapsed
    quiet_seconds = max(0.0, time.monotonic() - state.last_activity)
    if quiet_seconds < 1.0:
        activity_age = f"{quiet_seconds * 1000:.0f}ms"
    elif quiet_seconds < 10.0:
        activity_age = f"{quiet_seconds:.1f}s"
    else:
        activity_age = f"{int(quiet_seconds)}s"

    put(screen, 0, 0, " SALVIUM FULL-CHAIN FORENSIC AUDIT ", curses.A_REVERSE | curses.A_BOLD)
    put(screen, 0, 39, f"{state.phase} — " + ("RUNNING" if process_alive else "FINISHED"),
        curses.color_pair(2 if process_alive else 4) | curses.A_BOLD)
    if (state.phase == "ASSET FLOW" and
            str(state.forensic_position).isdigit() and
            str(state.forensic_target).isdigit()):
        scan_percent = 100.0 * max(0, int(state.forensic_position) - state.accepted_opening) / max(
            1, int(state.forensic_target) - state.accepted_opening)
        put(screen, 1, 0, f"Asset scan: {state.forensic_position} / {state.forensic_target}  "
                          f"Progress: {scan_percent:7.3f}%  Pass: {state.forensic_stage}")
    else:
        put(screen, 1, 0, f"Block checking: {state.height} / {state.target}  Progress: {percent:7.3f}%")
    put(screen, 1, 60, f"Last activity: {activity_age}")
    total_blocks = state.target - state.accepted_opening if state.target >= 0 else "-"
    verification_counts = (
        f"Blocks verified this run: {state.blocks_completed}  "
        f"PoW checked this run: {state.pow_passed}"
    )
    rate_text = f"Rate: {rate:.1f} blocks/min"
    put(screen, 2, 0, verification_counts)
    rate_col = cols - len(rate_text) - 1
    if rate_col > len(verification_counts) + 2:
        put(screen, 2, rate_col, rate_text)
    put(screen, 3, 0, f"Block TXs checked: {len(state.block_txs)}/{state.block_tx_total}  "
                       f"TXs checked this run: {state.run_txs}")
    put(screen, 4, 0, f"Findings/failures: {state.findings}/{state.failures}",
        curses.color_pair(3) if state.findings or state.failures else 0)
    put(screen, 5, 0, f"Current TX: {state.current_tx}")
    put(screen, 6, 0, f"Type={state.current_type} inputs={state.current_inputs} outputs={state.current_outputs} "
                        f"ring_members_total={state.current_ring_members} "
                        f"ring_size_per_input={state.current_min_ring_size}-{state.current_max_ring_size} "
                        f"fee={state.current_fee} weight={state.current_weight}")
    put(screen, 7, 0, f"Block hash={state.block_hash} difficulty={state.expected_difficulty}")
    put(screen, 8, 0, f"PoW hash={state.pow_hash}")
    forensic_dashboard = state.phase in (
        "ASSET FLOW", "INDEPENDENT ISSUANCE", "FORENSICS", "LMDB INVARIANTS", "PHASE 2/4", "PHASE 3/4", "PHASE 4/4"
    )
    if forensic_dashboard:
        asset = state.forensic_values.get("ASSET_FLOW_SUMMARY", {})
        if not asset:
            asset = state.forensic_values.get("ASSET_FLOW_PROGRESS", {})
        output = state.forensic_values.get("OUTPUT_AUDIT_SUMMARY", {})
        forensic = state.forensic_values.get("FORENSIC_SUMMARY", {})
        supply = state.forensic_values.get("SUPPLY_AUDIT_SUMMARY", {})
        aftereffect = state.forensic_values.get("AFTEREFFECT_SUMMARY", {})
        put(screen, 9, 0, "FORENSIC STATUS", curses.A_BOLD | curses.A_UNDERLINE)
        put(screen, 9, 22, f"Active test: {state.active_forensic_test}", curses.color_pair(4))
        put(screen, 10, 0, f"Pass={state.forensic_stage} position={state.forensic_position} "
                           f"target={state.forensic_target} txs={metric(asset, 'txs')} "
                           f"last_update={activity_age}")
        put(screen, 11, 0, f"Issues={state.findings} failures={state.failures} "
                          f"asset_findings={metric(asset, 'findings')} "
                          f"trouble_outputs={metric(asset, 'trouble_outputs')} "
                          f"ring_refs={metric(asset, 'later_ring_references')} "
                          f"proven_descendants={metric(asset, 'proven_descendant_references')}",
            curses.color_pair(3) if state.findings or state.failures else 0)
        put(screen, 12, 0, "Issue classes: " + ", ".join(
            f"{name}:{count}" for name, count in state.issue_classes.most_common(4)))
        put(screen, 13, 0, f"Outputs: records={metric(output, 'records')} "
                           f"parent_missing={metric(output, 'parent_missing')} "
                           f"index_invalid={metric(output, 'index_invalid')} "
                           f"asset_mismatch={metric(output, 'asset_mismatches')} "
                           f"commitment_mismatch={metric(output, 'db_commitment_mismatches')}")
        put(screen, 14, 0, f"Cleartext: txs={metric(forensic, 'cleartext_txs')} "
                           f"amount_mismatch={metric(output, 'clear_amount_mismatches')} "
                           f"serialized_substitutions={metric(output, 'serialized_db_commitment_substitutions')} "
                           f"malformed_substitutions={metric(output, 'malformed_cleartext_commitment_substitutions')}")
        put(screen, 15, 0, f"Integrity: duplicate_key_images={metric(forensic, 'duplicate_key_images')} "
                           f"overflows={metric(forensic, 'arithmetic_overflows')} "
                           f"broken_links={metric(forensic, 'broken_block_links')} "
                           f"missing_txs={metric(forensic, 'missing_block_transactions')}")
        put(screen, 16, 0, f"Supply: decreases={metric(supply, 'generated_supply_decreases')} "
                           f"over_cap={metric(supply, 'generated_supply_exceeds_cap')} "
                           f"reward_replay={metric(supply, 'consensus_reward_replay')} "
                           f"stored_generated={metric(supply, 'stored_final_generated')}")
        put(screen, 17, 0, f"Aftereffects: candidates={metric(aftereffect, 'candidate_transactions')} "
                           f"outputs={metric(aftereffect, 'candidate_outputs')} "
                           f"references={metric(aftereffect, 'later_ring_references')} "
                           f"poison_analysis={metric(aftereffect, 'legacy_poison_analysis')}")
        put(screen, 18, 0, "LATEST FINDINGS", curses.A_BOLD | curses.A_UNDERLINE)
        latest_rows = max(0, dashboard_rows - 19)
        findings = wrapped_rows(list(state.latest_findings), max(1, cols - 1))
        if latest_rows:
            for index, (finding, _) in enumerate(findings[-latest_rows:]):
                put(screen, 19 + index, 0, finding, curses.color_pair(3))
    else:
        put(screen, 9, 0, "BLOCK CHECKS", curses.A_BOLD | curses.A_UNDERLINE)

        check_row = 10
        items = list(BLOCK_STEP_LABELS.items())
        columns = 3 if cols >= 84 else 2
        column_width = max(25, cols // columns)
        for index, (step, label) in enumerate(items):
            row = check_row + index // columns
            col = (index % columns) * column_width
            status = state.block_checks[step]
            put(screen, row, col, f"{label:<20} {status:<7}", status_style(status))

        tx_row = check_row + (len(items) + columns - 1) // columns
        if tx_row < dashboard_rows - 1:
            put(screen, tx_row, 0, "TX CHECKS", curses.A_BOLD | curses.A_UNDERLINE)
            tx_row += 1
            for index, (step, label) in enumerate(TX_STEP_LABELS.items()):
                col = (index % columns) * column_width
                row = tx_row + index // columns
                status = state.tx_checks[step]
                put(screen, row, col, f"{label:<20} {status:<7}", status_style(status))

    separator = min(dashboard_rows, rows - 2)
    if state.show_dashboard_duplicates:
        visible_logs = list(logs)
        log_title = " LIVE LOG — including values already displayed above "
    else:
        visible_logs = [line for line in logs if not represented_on_dashboard(line)]
        log_title = " LIVE LOG — dashboard duplicates hidden; full raw log preserved on disk "
    visible_logs = wrapped_rows(
        reverse_log_with_phase_banners(visible_logs), max(1, cols - 1))
    visible = max(1, rows - separator - 2)
    max_scroll = max(0, len(visible_logs) - visible)
    state.log_scroll = min(state.log_scroll, max_scroll)
    start = state.log_scroll
    end = min(len(visible_logs), start + visible)
    if state.log_scroll:
        log_title = (f" LIVE LOG — SCROLLED {state.log_scroll} lines from live; "
                     "End returns to live ")
    put(screen, separator, 0, log_title, curses.A_REVERSE)
    # The newest phase is first and details are reverse-chronological, but the
    # phase banner remains above its own block instead of falling below it.
    for index, (line, logical_line) in enumerate(visible_logs[start:end]):
        style = 0
        if ("FAIL" in logical_line or "INVALID" in logical_line or
                "verification failed" in logical_line):
            style = curses.color_pair(3)
        elif "PASS" in logical_line:
            style = curses.color_pair(2)
        put(screen, separator + 1 + index, 0, line, style)
    quit_action = "close" if not process_alive else "stop"
    put(screen, rows - 1, 0, f"↑/↓ PgUp/PgDn Home/End: scroll   l: duplicates   q: {quit_action}",
        curses.A_REVERSE)
    screen.refresh()


def process_alive(pid):
    try:
        with open(f"/proc/{pid}/stat", "r", encoding="ascii") as proc_stat:
            if proc_stat.read().split()[2] == "Z":
                return False
        os.kill(pid, 0)
        return True
    except (FileNotFoundError, ProcessLookupError):
        return False
    except PermissionError:
        return True


def consume_available(stream, pending, state, logs):
    # Read a bounded chunk so a multi-gigabyte, rapidly growing trace cannot
    # monopolize the curses loop and prevent key handling (especially `q`).
    data = stream.read(1024 * 1024)
    if not data:
        return pending
    pending += data.decode("utf-8", errors="replace")
    parts = re.split(r"[\r\n]+", pending)
    pending = parts.pop() if parts else ""
    for line in parts:
        line = ANSI_ESCAPE.sub("", line)
        # Progress writers often emit cursor/control padding around carriage
        # returns. It is display noise, not a real log record.
        line = "".join(char for char in line if char == "\t" or char.isprintable()).strip()
        if not line:
            continue
        state.consume(line)
        logs.append(line)
        if state.log_scroll and (
                state.show_dashboard_duplicates or not represented_on_dashboard(line)):
            state.log_scroll += 1
    return pending


def run(screen, args):
    try:
        curses.curs_set(0)
    except curses.error:
        # Some perfectly usable terminals do not expose cursor visibility
        # controls.  This is cosmetic and must never stop an audit.
        pass
    try:
        curses.use_default_colors()
        curses.init_pair(1, curses.COLOR_WHITE, -1)
        curses.init_pair(2, curses.COLOR_GREEN, -1)
        curses.init_pair(3, curses.COLOR_RED, -1)
        curses.init_pair(4, curses.COLOR_YELLOW, -1)
    except curses.error:
        # Monochrome/minimal TERM implementations can still render the full
        # dashboard and must not prevent the worker from running.
        pass
    screen.nodelay(True)
    screen.timeout(200)

    state = AuditState(args.target, args.resume_tip, args.initial_txs, args.accepted_opening)
    # Large enough to retain detailed end reports and lineage records for
    # interactive review without retaining multi-million-line verbose passes.
    logs = collections.deque(maxlen=50000)
    pending = ""
    worker_finished = False
    with open(args.log, "rb", buffering=0) as stream:
        stream.seek(args.start_offset)
        while True:
            pending = consume_available(stream, pending, state, logs)

            alive = process_alive(args.pid)

            render(screen, state, logs, alive)
            key = screen.getch()
            if key in (ord("l"), ord("L")):
                state.show_dashboard_duplicates = not state.show_dashboard_duplicates
                state.log_scroll = 0
            elif key == curses.KEY_UP:
                state.log_scroll += 1
            elif key == curses.KEY_DOWN:
                state.log_scroll = max(0, state.log_scroll - 1)
            elif key == curses.KEY_PPAGE:
                state.log_scroll += max(1, screen.getmaxyx()[0] // 2)
            elif key == curses.KEY_NPAGE:
                state.log_scroll = max(
                    0, state.log_scroll - max(1, screen.getmaxyx()[0] // 2))
            elif key == curses.KEY_HOME:
                state.log_scroll = len(logs)
            elif key == curses.KEY_END:
                state.log_scroll = 0
            if key in (ord("q"), ord("Q")):
                if alive:
                    if args.process_group:
                        os.killpg(args.pid, signal.SIGTERM)
                    else:
                        os.kill(args.pid, signal.SIGTERM)
                    return 130
                return 0
            if not alive and not worker_finished:
                time.sleep(0.25)
                pending = consume_available(stream, pending, state, logs)
                if pending:
                    final_line = ANSI_ESCAPE.sub("", pending)
                    final_line = "".join(
                        char for char in final_line
                        if char == "\t" or char.isprintable()).strip()
                    if final_line:
                        state.consume(final_line)
                        logs.append(final_line)
                pending = ""
                worker_finished = True
                render(screen, state, logs, False)
                time.sleep(0.5)
                return 0


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--log", required=True)
    parser.add_argument("--pid", required=True, type=int)
    parser.add_argument("--target", required=True, type=int)
    parser.add_argument("--resume-tip", required=True, type=int)
    parser.add_argument("--initial-txs", default=0, type=int)
    parser.add_argument("--accepted-opening", default=-1, type=int)
    parser.add_argument("--start-offset", default=0, type=int)
    parser.add_argument("--process-group", action="store_true")
    args = parser.parse_args()
    return curses.wrapper(run, args)


if __name__ == "__main__":
    raise SystemExit(main())
