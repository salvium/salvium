#!/usr/bin/env python3
"""Reconstruct the pre-HF13 SAL1 output and poisoned-rank inventories."""

import argparse
import os
import struct
import subprocess
import tempfile


SAL1_LMDB_KEY = bytes.fromhex("314c4153")  # uint32_t 0x53414c31, little endian


def records(mdb_dump, database, table):
    process = subprocess.Popen(
        [mdb_dump, "-s", table, database],
        stdout=subprocess.PIPE,
        stderr=subprocess.PIPE,
        text=True,
    )
    assert process.stdout is not None
    in_data = False
    pending_key = None
    for line in process.stdout:
        line = line.strip()
        if not in_data:
            in_data = line == "HEADER=END"
            continue
        if line == "DATA=END":
            break
        if pending_key is None:
            pending_key = bytes.fromhex(line)
            continue
        value = bytes.fromhex(line)
        if pending_key == SAL1_LMDB_KEY:
            if len(value) != 16:
                raise RuntimeError(f"{table}: invalid record size {len(value)}")
            yield struct.unpack("<QQ", value)
        pending_key = None

    stderr = process.stderr.read() if process.stderr is not None else ""
    status = process.wait()
    if status:
        raise RuntimeError(f"mdb_dump {table} failed ({status}): {stderr.strip()}")


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--db-path", required=True)
    parser.add_argument("--legacy-refs", required=True)
    parser.add_argument("--poison-ranks", required=True)
    parser.add_argument("--mdb-dump", default="mdb_dump")
    args = parser.parse_args()

    out_dir = os.path.dirname(os.path.abspath(args.legacy_refs))
    os.makedirs(out_dir, exist_ok=True)
    raw = records(args.mdb_dump, args.db_path, "output_types_backup")
    effective = records(args.mdb_dump, args.db_path, "output_type_refs_backup")

    refs_tmp = tempfile.NamedTemporaryFile(
        mode="w", dir=out_dir, prefix=".legacy-sal1-", delete=False
    )
    poison_dir = os.path.dirname(os.path.abspath(args.poison_ranks))
    os.makedirs(poison_dir, exist_ok=True)
    poison_tmp = tempfile.NamedTemporaryFile(
        mode="w", dir=poison_dir, prefix=".poison-sal1-", delete=False
    )
    count = 0
    poisoned = 0
    try:
        poison_tmp.write("rank\traw_output_id\n")
        while True:
            try:
                raw_rank, raw_id = next(raw)
            except StopIteration:
                raw_item = None
            else:
                raw_item = (raw_rank, raw_id)
            try:
                ref_rank, ref_id = next(effective)
            except StopIteration:
                ref_item = None
            else:
                ref_item = (ref_rank, ref_id)

            if raw_item is None and ref_item is None:
                break
            if raw_item is None or ref_item is None or raw_item[0] != ref_item[0]:
                raise RuntimeError(
                    f"backup SAL1 tables diverge at raw={raw_item} effective={ref_item}"
                )
            refs_tmp.write(f"{ref_rank}\t{ref_id}\n")
            if raw_id != ref_id:
                poison_tmp.write(f"{raw_rank}\t{raw_id}\n")
                poisoned += 1
            count += 1

        if count == 0:
            raise RuntimeError("backup tables contain no SAL1 records")
        refs_tmp.flush()
        poison_tmp.flush()
        os.fsync(refs_tmp.fileno())
        os.fsync(poison_tmp.fileno())
        refs_tmp.close()
        poison_tmp.close()
        os.replace(refs_tmp.name, args.legacy_refs)
        os.replace(poison_tmp.name, args.poison_ranks)
    except BaseException:
        refs_tmp.close()
        poison_tmp.close()
        for path in (refs_tmp.name, poison_tmp.name):
            try:
                os.unlink(path)
            except FileNotFoundError:
                pass
        raise

    print(f"LEGACY_SAL1_INVENTORY refs={count} poison_ranks={poisoned}")


if __name__ == "__main__":
    main()
