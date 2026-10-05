#!/usr/bin/env bash
# Bound the entire build/test process tree, including daemon and wallet children.
set -euo pipefail

if (( $# == 0 )); then
  echo "Usage: $0 COMMAND [ARGUMENT ...]" >&2
  exit 2
fi
for program in systemd-run systemctl flock python3; do
  command -v "$program" >/dev/null || { echo "Required tool unavailable: $program" >&2; exit 1; }
done
systemctl --user show-environment >/dev/null
mkdir -p build/audit-test-work
export TMPDIR="${TMPDIR:-$PWD/build/audit-test-work}"
mkdir -p "$TMPDIR"
python3 - "$TMPDIR" <<'PY'
import shutil
import sys

directory = sys.argv[1]
free = shutil.disk_usage(directory).free
if free < 4 * 1024**3:
    sys.exit(f"Audit temporary storage has only {free / 1024**3:.1f} GiB free; "
             "set TMPDIR to a filesystem with at least 4 GiB free before launching.")
PY
exec 9>build/audit-run.lock
flock -n 9 || { echo "Another limited audit build/test is running in this workspace." >&2; exit 1; }

unit="salvium-audit-$(id -u)-$$"
cleanup() {
  # This unique unit contains only this invocation and its test services.
  systemctl --user stop "$unit.service" >/dev/null 2>&1 || true
}
trap cleanup EXIT
trap 'exit 130' INT
trap 'exit 143' TERM
systemd-run --user --unit="$unit" --wait --pipe --collect \
  --working-directory="$PWD" --setenv="TMPDIR=$TMPDIR" \
  -p MemoryMax=8G -p MemorySwapMax=0 -p CPUQuota=100% -p TasksMax=256 \
  -p Nice=15 -p IOSchedulingClass=idle -p KillMode=control-group \
  -p TimeoutStopSec=20s -- "$@" &
runner=$!
wait "$runner"
