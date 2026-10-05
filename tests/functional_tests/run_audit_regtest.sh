#!/usr/bin/env bash
# Build in the dedicated audit directory and run an isolated fixture.
set -euo pipefail
repo_root=$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")/../.." && pwd)
cd -- "$repo_root"
if [[ $(git branch --show-current) != audit ]]; then
  echo 'Run this fixture from the audit branch.' >&2
  exit 1
fi

audit_build="$repo_root/build/audit/release"
make release-static builddir=build/audit topdir=../../.. "-j${AUDIT_BUILD_JOBS:-4}" \
  > build/audit-complex-build.log 2>&1
python3 tests/functional_tests/audit_complex_regtest.py --bin-dir "$audit_build/bin" "$@" \
  2>&1 | tee build/audit-complex-regtest.log
