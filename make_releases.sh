#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
CONFIG_GUESS="${ROOT_DIR}/contrib/depends/config.guess"

TAG="$(git -C "${ROOT_DIR}" tag -l --points-at HEAD)"
COMMIT="$(git -C "${ROOT_DIR}" rev-parse --short=9 HEAD)"
if [ -z "${TAG}" ]; then
  TAG="${COMMIT}"
fi

RELEASE_DIR="${RELEASE_DIR:-$HOME/releases}"
REQUESTED_OS="auto"
CREATE_ZIP=1

BINARIES=(salviumd salvium-wallet-cli salvium-wallet-rpc)

cpu_count() {
  getconf _NPROCESSORS_ONLN 2>/dev/null || echo 1
}

available_memory_mib() {
  awk '/^MemAvailable:/ { printf "%d\n", $2 / 1024 }' /proc/meminfo 2>/dev/null || echo 0
}

default_jobs() {
  local cpus mem_mib mem_jobs jobs

  cpus="$(cpu_count)"
  mem_mib="$(available_memory_mib)"

  if [ "${mem_mib}" -gt 0 ]; then
    # Salvium/Monero C++ release builds can use multiple GiB per cc1plus.
    # Keep headroom so desktop systems do not collapse into swap.
    mem_jobs=$(( (mem_mib - 1024) / 3072 ))
    if [ "${mem_jobs}" -lt 1 ]; then
      mem_jobs=1
    fi
  else
    mem_jobs="${cpus}"
  fi

  jobs="${cpus}"
  if [ "${mem_jobs}" -lt "${jobs}" ]; then
    jobs="${mem_jobs}"
  fi
  if [ "${jobs}" -gt 8 ]; then
    jobs=8
  fi

  printf '%s\n' "${jobs}"
}

JOBS="${JOBS:-$(default_jobs)}"

declare -A TARGET_TRIPLET
declare -A TARGET_PACKAGE
declare -A TARGET_EXT
declare -A TARGET_ALIASES

add_target() {
  local key="$1"
  local triplet="$2"
  local package="$3"
  local ext="${4:-}"
  shift 4 || true

  TARGET_TRIPLET["${key}"]="${triplet}"
  TARGET_PACKAGE["${key}"]="${package}"
  TARGET_EXT["${key}"]="${ext}"
  TARGET_ALIASES["${key}"]="$*"
}

add_target linux-x86_64     x86_64-linux-gnu           linux-x86_64      ""  Linux-Ubuntu Linux-ARCH Linux-x64 Linuxx64 Ubuntu Ubuntu-x64 current-linux
add_target linux-i686       i686-linux-gnu             linux-i686        ""  Linux-x86 Linuxx86 Linux-x32 Linuxx32 Linux-32bit Ubuntu-x86
add_target linux-aarch64    aarch64-linux-gnu          linux-aarch64     ""  Linux-arm64 Linux-ARM64 Linux-aarch64 Linux-ARMv8 Linux-armv8
add_target linux-armv7      arm-linux-gnueabihf        linux-armv7       ""  Linux-armv7 Linux-ARMv7 Linux-armhf
add_target linux-armv6      arm-linux-gnueabihf        linux-armv6       ""  Linux-armv6 Linux-ARMv6
add_target linux-riscv64    riscv64-linux-gnu          linux-riscv64     ""  Linux-riscv64 Linux-RISC-V
add_target linux-ppc64le    powerpc64le-linux-gnu      linux-ppc64le     ""  Linux-ppc64le Linux-PowerPC64LE
add_target linux-s390x      s390x-linux-gnu            linux-s390x       ""  Linux-s390x
add_target windows-x86_64   x86_64-w64-mingw32         win64             .exe Windowsx64 Windows-x64 Windows64 Win64 win-x64
add_target windows-i686     i686-w64-mingw32           win32             .exe Windowsx32 Windows-x32 Windows32 Win32 win-x32
add_target windows-aarch64  aarch64-w64-mingw32        win-arm64         .exe Windows-arm64 Windows-ARM64 Windows-aarch64 Win-arm64
add_target macos-x86_64     x86_64-apple-darwin        macos-x86_64      ""  MacOS-x64 macOS-x86_64 Mac-x64 Darwin-x64 OSX-x64
add_target macos-aarch64    aarch64-apple-darwin       macos-arm64       ""  MacOS-arm64 macOS-aarch64 Mac-arm64 Darwin-arm64 Apple-Silicon
add_target freebsd-x86_64   x86_64-unknown-freebsd     freebsd-x86_64    ""  FreeBSD-x64 FreeBSDx64
add_target freebsd-i686     i686-unknown-freebsd       freebsd-i686      ""  FreeBSD-x86 FreeBSDx86 FreeBSD-x32
add_target freebsd-aarch64  aarch64-unknown-freebsd    freebsd-aarch64   ""  FreeBSD-arm64 FreeBSD-aarch64
add_target android-aarch64  aarch64-linux-android      android-arm64     ""  Android-arm64 Android-aarch64 Android-armv8
add_target android-armv7    arm-linux-androideabi      android-armv7     ""  Android-armv7 Android-arm
add_target android-x86_64   x86_64-linux-android       android-x86_64    ""  Android-x64 Androidx64
add_target android-i686     i686-linux-android         android-i686      ""  Android-x86 Androidx86

normalize_os() {
  printf '%s' "$1" | tr '[:upper:]_' '[:lower:]-' | tr -cd '[:alnum:]-'
}

find_target() {
  local requested normalized key alias
  requested="$1"
  normalized="$(normalize_os "${requested}")"

  for key in "${!TARGET_TRIPLET[@]}"; do
    if [ "${normalized}" = "$(normalize_os "${key}")" ]; then
      printf '%s\n' "${key}"
      return 0
    fi

    for alias in ${TARGET_ALIASES["${key}"]}; do
      if [ "${normalized}" = "$(normalize_os "${alias}")" ]; then
        printf '%s\n' "${key}"
        return 0
      fi
    done
  done

  return 1
}

detect_current_target() {
  local system machine guess
  system="$(uname -s)"
  machine="$(uname -m)"

  case "${system}:${machine}" in
    Linux:x86_64|Linux:amd64) printf '%s\n' linux-x86_64 ;;
    Linux:i386|Linux:i486|Linux:i586|Linux:i686) printf '%s\n' linux-i686 ;;
    Linux:aarch64|Linux:arm64) printf '%s\n' linux-aarch64 ;;
    Linux:armv7*|Linux:armv8l) printf '%s\n' linux-armv7 ;;
    Linux:armv6*) printf '%s\n' linux-armv6 ;;
    Linux:riscv64) printf '%s\n' linux-riscv64 ;;
    Linux:ppc64le) printf '%s\n' linux-ppc64le ;;
    Linux:s390x) printf '%s\n' linux-s390x ;;
    Darwin:x86_64) printf '%s\n' macos-x86_64 ;;
    Darwin:arm64|Darwin:aarch64) printf '%s\n' macos-aarch64 ;;
    FreeBSD:x86_64|FreeBSD:amd64) printf '%s\n' freebsd-x86_64 ;;
    FreeBSD:i386|FreeBSD:i686) printf '%s\n' freebsd-i686 ;;
    FreeBSD:aarch64|FreeBSD:arm64) printf '%s\n' freebsd-aarch64 ;;
    *)
      if [ -x "${CONFIG_GUESS}" ]; then
        guess="$("${CONFIG_GUESS}")"
        for key in "${!TARGET_TRIPLET[@]}"; do
          if [ "${guess}" = "${TARGET_TRIPLET["${key}"]}" ]; then
            printf '%s\n' "${key}"
            return 0
          fi
        done
      fi
      echo "error: could not auto-detect a release target for ${system}/${machine}." >&2
      echo "Use --OS=<target> or --list-targets." >&2
      return 1
      ;;
  esac
}

require_command() {
  if ! command -v "$1" >/dev/null 2>&1; then
    echo "error: required command '$1' was not found." >&2
    exit 1
  fi
}

require_target_tools() {
  local key="$1"
  local triplet="${TARGET_TRIPLET["${key}"]}"

  case "${key}" in
    windows-x86_64)
      require_command x86_64-w64-mingw32-gcc
      require_command x86_64-w64-mingw32-g++
      ;;
    windows-i686)
      require_command i686-w64-mingw32-gcc
      require_command i686-w64-mingw32-g++
      ;;
    windows-aarch64)
      require_command aarch64-w64-mingw32-gcc
      require_command aarch64-w64-mingw32-g++
      ;;
    linux-i686)
      require_command gcc
      require_command g++
      ;;
    linux-x86_64)
      require_command gcc
      require_command g++
      ;;
    *)
      if [[ "${triplet}" == *linux-gnu* || "${triplet}" == *linux-android* || "${triplet}" == *freebsd* ]]; then
        echo "info: ${key} may require a working ${triplet}-gcc/${triplet}-g++ cross toolchain." >&2
      fi
      ;;
  esac
}

print_help() {
  cat <<EOF
Usage: $0 [--OS=<target>|--OS=all] [-j<N>|--jobs=<N>] [--release-dir=<dir>] [--zip|--no-zip]

Defaults to the current host OS. On Ubuntu x86_64 this builds Linux x86_64,
not Windows.

Options:
  --OS=<target>       Build one release target. Alias examples:
                      Linux-Ubuntu, Linux-ARCH, Windowsx64, Windowsx32,
                      MacOS-arm64, FreeBSD-x64, Android-arm64
  --OS=all           Build every target listed by --list-targets.
  --list-targets     Show supported target keys, triplets, and aliases.
  -j<N>, --jobs=<N>  Parallel make jobs. Default: ${JOBS}
  --release-dir=<d>  Output directory. Default: ${RELEASE_DIR}
  --zip              Create a release zip archive. This is the default.
  --no-zip           Build release binaries without creating a zip archive.
  -h, --help         Show this help.
EOF
}

print_targets() {
  local key
  printf '%-18s %-28s %-16s %s\n' "Target" "Depends triplet" "Package suffix" "Aliases"
  for key in "${!TARGET_TRIPLET[@]}"; do
    printf '%-18s %-28s %-16s %s\n' \
      "${key}" \
      "${TARGET_TRIPLET["${key}"]}" \
      "${TARGET_PACKAGE["${key}"]}" \
      "${TARGET_ALIASES["${key}"]}"
  done | sort
}

build_release() {
  local key="$1"
  local triplet="${TARGET_TRIPLET["${key}"]}"
  local package="${TARGET_PACKAGE["${key}"]}"
  local ext="${TARGET_EXT["${key}"]}"
  local bin_dir="${ROOT_DIR}/build/${triplet}/release/bin"
  local archive="${RELEASE_DIR}/salvium-${TAG}-${package}.zip"
  local files=()
  local binary

  echo "==> Building ${key} (${triplet})"
  echo "==> Using ${JOBS} parallel build job(s)"
  require_target_tools "${key}"

  export CMAKE_BUILD_PARALLEL_LEVEL="${JOBS}"

  (
    cd "${ROOT_DIR}/contrib/depends"
    make HOST="${triplet}" -j"${JOBS}"
  )

  mkdir -p "${ROOT_DIR}/build/${triplet}/release"
  (
    cd "${ROOT_DIR}/build/${triplet}/release"
    USE_DEVICE_TREZOR=OFF USE_DEVICE_TREZOR_MANDATORY=1 \
      cmake -DCMAKE_TOOLCHAIN_FILE="${ROOT_DIR}/contrib/depends/${triplet}/share/toolchain.cmake" ../../..
    make -j"${JOBS}"
  )

  for binary in "${BINARIES[@]}"; do
    files+=("${binary}${ext}")
  done

  for binary in "${files[@]}"; do
    if [ ! -f "${bin_dir}/${binary}" ]; then
      echo "error: expected binary was not produced: ${bin_dir}/${binary}" >&2
      exit 1
    fi
  done

  if [ "${CREATE_ZIP}" -eq 1 ]; then
    mkdir -p "${RELEASE_DIR}"
    rm -f "${archive}"
    (
      cd "${bin_dir}"
      zip -r "${archive}" "${files[@]}"
    )
    echo "==> Wrote ${archive}"
  else
    echo "==> Built release binaries in ${bin_dir}"
  fi
}

while [ "$#" -gt 0 ]; do
  case "$1" in
    --OS=*|--os=*)
      REQUESTED_OS="${1#*=}"
      ;;
    OS=*)
      REQUESTED_OS="${1#*=}"
      ;;
    --jobs=*)
      JOBS="${1#*=}"
      ;;
    -j*)
      JOBS="${1#-j}"
      ;;
    --release-dir=*)
      RELEASE_DIR="${1#*=}"
      ;;
    --zip)
      CREATE_ZIP=1
      ;;
    --no-zip)
      CREATE_ZIP=0
      ;;
    --list-targets)
      print_targets
      exit 0
      ;;
    -h|--help)
      print_help
      exit 0
      ;;
    *)
      echo "error: unknown argument: $1" >&2
      echo "Use --help for usage." >&2
      exit 1
      ;;
  esac
  shift
done

require_command make
require_command cmake
if [ "${CREATE_ZIP}" -eq 1 ]; then
  require_command zip
fi

if ! [[ "${JOBS}" =~ ^[0-9]+$ ]] || [ "${JOBS}" -lt 1 ]; then
  echo "error: jobs must be a positive integer, got '${JOBS}'." >&2
  exit 1
fi

mkdir -p "${RELEASE_DIR}"

if [ "$(normalize_os "${REQUESTED_OS}")" = "all" ]; then
  for target in "${!TARGET_TRIPLET[@]}"; do
    build_release "${target}"
  done
elif [ "$(normalize_os "${REQUESTED_OS}")" = "auto" ] || [ -z "${REQUESTED_OS}" ]; then
  build_release "$(detect_current_target)"
else
  if ! target="$(find_target "${REQUESTED_OS}")"; then
    echo "error: unknown OS target '${REQUESTED_OS}'." >&2
    echo "Use --list-targets to see supported options." >&2
    exit 1
  fi
  build_release "${target}"
fi
