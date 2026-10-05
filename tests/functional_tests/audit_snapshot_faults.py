"""Offline fault injection into copies of the disposable integration-test LMDB.

This module does not start daemons. Original chain files are read-only sources
for the native --copy-db mode. These are corruption fixtures, not chains accepted
by current consensus; stale block indexes are intentionally retained as further
invalidity. The owner-round regression resumes an isolated fixture explicitly
to test wallet and daemon handling of already stored historical bad funds.
"""
import ctypes
import ctypes.util
import json
import os
from pathlib import Path
import secrets
import subprocess
import sys


class Value(ctypes.Structure):
    _fields_ = [("size", ctypes.c_size_t), ("data", ctypes.c_void_p)]


def replace_block(directory, height, transform):
    library = ctypes.util.find_library("lmdb")
    if not library:
        raise RuntimeError("liblmdb is required for isolated snapshot fault tests")
    lmdb = ctypes.CDLL(library)
    pointer = ctypes.c_void_p
    signatures = {
        "mdb_env_create": [ctypes.POINTER(pointer)],
        "mdb_env_set_maxdbs": [pointer, ctypes.c_uint],
        "mdb_env_set_mapsize": [pointer, ctypes.c_size_t],
        "mdb_env_open": [pointer, ctypes.c_char_p, ctypes.c_uint, ctypes.c_uint],
        "mdb_txn_begin": [pointer, pointer, ctypes.c_uint, ctypes.POINTER(pointer)],
        "mdb_dbi_open": [pointer, ctypes.c_char_p, ctypes.c_uint, ctypes.POINTER(ctypes.c_uint)],
        "mdb_get": [pointer, ctypes.c_uint, ctypes.POINTER(Value), ctypes.POINTER(Value)],
        "mdb_put": [pointer, ctypes.c_uint, ctypes.POINTER(Value), ctypes.POINTER(Value), ctypes.c_uint],
        "mdb_txn_commit": [pointer],
        "mdb_txn_abort": [pointer],
        "mdb_env_close": [pointer],
    }
    for name, args in signatures.items():
        getattr(lmdb, name).argtypes = args
        getattr(lmdb, name).restype = None if name in ("mdb_txn_abort", "mdb_env_close") else ctypes.c_int
    lmdb.mdb_strerror.argtypes = [ctypes.c_int]
    lmdb.mdb_strerror.restype = ctypes.c_char_p

    def check(code):
        if code:
            raise RuntimeError(lmdb.mdb_strerror(code).decode())

    env, txn = pointer(), pointer()
    check(lmdb.mdb_env_create(ctypes.byref(env)))
    try:
        check(lmdb.mdb_env_set_maxdbs(env, 128))
        check(lmdb.mdb_env_set_mapsize(env, max(512 * 1024**2, (directory / "data.mdb").stat().st_size * 2)))
        check(lmdb.mdb_env_open(env, os.fsencode(directory), 0, 0o600))
        check(lmdb.mdb_txn_begin(env, None, 0, ctypes.byref(txn)))
        dbi = ctypes.c_uint()
        check(lmdb.mdb_dbi_open(txn, b"blocks", 0, ctypes.byref(dbi)))
        key_buffer = ctypes.create_string_buffer(height.to_bytes(8, sys.byteorder))
        key = Value(8, ctypes.cast(key_buffer, pointer))
        value = Value()
        check(lmdb.mdb_get(txn, dbi, ctypes.byref(key), ctypes.byref(value)))
        original = ctypes.string_at(value.data, value.size)
        modified, evidence = transform(original)
        assert modified != original
        value_buffer = ctypes.create_string_buffer(modified)
        replacement = Value(len(modified), ctypes.cast(value_buffer, pointer))
        check(lmdb.mdb_put(txn, dbi, ctypes.byref(key), ctypes.byref(replacement), 0))
        commit_txn, txn = txn, pointer()
        check(lmdb.mdb_txn_commit(commit_txn))
        return evidence
    finally:
        if txn:
            lmdb.mdb_txn_abort(txn)
        lmdb.mdb_env_close(env)


def test_snapshot_faults(chain, reader_type, encode):
    height = chain.tip()
    source = chain.root / "chain/fake/lmdb"
    good = chain.state["sal1_totals"]["good_unspent_atomic"]
    cases = []
    for case in ("excess_miner_issuance", "unauthorized_protocol_issuance"):
        directory = chain.root / f"fault-{case}-{secrets.token_hex(4)}" / "lmdb"
        directory.mkdir(parents=True)
        assert directory.resolve().is_relative_to(chain.root.resolve())
        assert directory.resolve() != source.resolve()
        subprocess.run([str(chain.binaries / "salvium-blockchain-verification"),
            "--db-path", str(source), "--copy-db", str(directory)], check=True, timeout=180)

        def damage(original):
            reader = reader_type(original)
            assert 10 <= reader.integer() < 255
            reader.integer()
            reader.integer()
            reader.pos += 36
            miner, protocol = reader.coinbase(), reader.coinbase()
            assert miner["outputs"] and not protocol["outputs"]
            start, end, out_end, amount = miner["outputs"][0]
            if case == "excess_miner_issuance":
                excess = 100_000_000
                blob = original[:start] + encode(amount + excess) + original[end:]
                return blob, {"good_unspent_atomic": good - amount,
                    "bad_unspent_atomic": amount + excess, "bad_output_count": 1,
                    "excess_issuance_atomic": excess, "reason": "MINER_REWARD_MISMATCH"}
            fake_amount = 5 * 100_000_000
            fake_output = encode(fake_amount) + original[end:out_end]
            insert = protocol["count_start"]
            blob = original[:insert] + b"\x01" + fake_output + original[insert + 1:]
            return blob, {"good_unspent_atomic": good, "bad_unspent_atomic": fake_amount,
                "bad_output_count": 1, "excess_issuance_atomic": fake_amount,
                "reason": "UNAUTHORIZED_PROTOCOL_OUTPUT"}

        evidence = replace_block(directory, height, damage)
        log = directory.parent / "audit.log"
        env = dict(os.environ, SALVIUM_FULL_FORENSIC_SCAN="1", SALVIUM_INDEPENDENT_FORENSICS_ONLY="1")
        with log.open("w") as output:
            run = subprocess.run([str(chain.binaries / "salvium-blockchain-verification"),
                "--db-path", str(directory), "--no-asset-flow-forensic"],
                env=env, stdout=output, stderr=subprocess.STDOUT, timeout=180)
        assert run.returncode == 0, "audit failed to complete; rejection must come from a concrete finding"
        lines = log.read_text().splitlines()
        summary = next(line for line in lines if line.startswith("INDEPENDENT_CHAIN_SUMMARY "))
        assert summary.endswith("status=FINDING") and "issuance_match=no " in summary, summary
        assert any(line.startswith(f"INDEPENDENT_CHAIN_FINDING height={height} ") for line in lines)
        evidence.update(case=case, snapshot_height=height, status="BAD_FUNDS", verified_as_good=False,
            locked_good_stake_principal_atomic=chain.state["sal1_totals"]["good_locked_stake_principal_atomic"],
            native_audit_summary=summary, database=str(directory),
            scope="deliberately damaged offline copy; no daemon or wallet accepts this snapshot")
        (directory.parent / "sal1-totals.json").write_text(json.dumps(evidence, indent=2) + "\n")
        cases.append(evidence)
        chain.progress(f"Offline snapshot audit rejected {case}; {evidence['bad_unspent_atomic']} atomic SAL1 marked bad")
    return cases
