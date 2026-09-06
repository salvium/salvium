#!/usr/bin/env bash
set -euo pipefail

# Install Salvium dependencies shared by release, release-static, debug,
# test/sanitizer, coverage, fuzz, and cross-build targets.
#
# The filename intentionally matches the requested spelling:
# install-depenencies.sh

SUDO=""
if [ "$(id -u)" -ne 0 ]; then
  if ! command -v sudo >/dev/null 2>&1; then
    echo "error: sudo is required when this script is not run as root." >&2
    exit 1
  fi
  SUDO="sudo"
fi

usage() {
  cat <<EOF
Usage: ./install-depenencies.sh [mode]

Options:
  --native       Install dependencies for the current Linux build.
                 This is the default and covers dynamic/static release,
                 debug, test/sanitizer, coverage, and fuzz source builds.
  --windows      Also install MinGW tools for Windows x64/x86 releases.
  --linux-i686   Also install multilib tools for Linux 32-bit releases.
  --linux-cross  Also install ARM/RISC-V/ppc64le/s390x Linux cross tools.
  --minimal      Alias for --native.
  --native-only  Alias for --native.
  -h, --help     Show this help.

Notes:
  Every mode installs the common headers and static archives needed by all
  build types, including ICU, zlib, zstd, and jitterentropy for Salchat and
  static OpenSSL linkage. Cross modes then add their target toolchains.
  Ubuntu cannot install every cross toolchain together on some releases.
  In particular, gcc-multilib/g++-multilib can conflict with several
  architecture cross-compilers. Use one cross mode at a time.
EOF
}

MODE="native"
while [ "$#" -gt 0 ]; do
  case "$1" in
    --minimal|--native-only|--native)
      MODE="native"
      ;;
    --windows|--windows-cross)
      MODE="windows"
      ;;
    --linux-i686|--i686|--x86)
      MODE="linux-i686"
      ;;
    --linux-cross)
      MODE="linux-cross"
      ;;
    -h|--help)
      usage
      exit 0
      ;;
    *)
      echo "error: unknown argument: $1" >&2
      usage >&2
      exit 1
      ;;
  esac
  shift
done

have_command() {
  command -v "$1" >/dev/null 2>&1
}

install_apt() {
  local packages=(
    build-essential
    gcc-16
    g++-16
    cmake
    pkg-config
    git
    curl
    ca-certificates
    gnupg
    software-properties-common
    zip
    unzip
    python3
    ccache
    doxygen
    graphviz
    gperf
    afl++
    bison
    flex
    autoconf
    automake
    libtool
    gettext
    bc
    libicu-dev
    libssl-dev
    zlib1g-dev
    libzstd-dev
    libjitterentropy3-dev
    libzmq3-dev
    libunbound-dev
    libsodium-dev
    libunwind8-dev
    liblzma-dev
    libreadline-dev
    libexpat1-dev
    libpgm-dev
    qttools5-dev-tools
    libhidapi-dev
    libusb-1.0-0-dev
    libprotobuf-dev
    protobuf-compiler
    libudev-dev
    libboost-chrono-dev
    libboost-date-time-dev
    libboost-filesystem-dev
    libboost-locale-dev
    libboost-program-options-dev
    libboost-regex-dev
    libboost-serialization-dev
    libboost-system-dev
    libboost-thread-dev
  )

  local windows_packages=(
    gcc-mingw-w64-x86-64
    g++-mingw-w64-x86-64
    gcc-mingw-w64-i686
    g++-mingw-w64-i686
  )

  local linux_i686_packages=(
    gcc-multilib
    g++-multilib
  )

  local linux_cross_packages=(
    gcc-aarch64-linux-gnu
    g++-aarch64-linux-gnu
    gcc-arm-linux-gnueabihf
    g++-arm-linux-gnueabihf
    gcc-riscv64-linux-gnu
    g++-riscv64-linux-gnu
    gcc-powerpc64le-linux-gnu
    g++-powerpc64le-linux-gnu
    gcc-s390x-linux-gnu
    g++-s390x-linux-gnu
  )

  $SUDO apt-get update
  if ! apt-cache show gcc-16 >/dev/null 2>&1 ||
      ! apt-cache show g++-16 >/dev/null 2>&1; then
    local distro_id=""
    if [ -r /etc/os-release ]; then
      distro_id="$(. /etc/os-release && printf '%s' "${ID:-}")"
    fi
    if [ "${distro_id}" != "ubuntu" ]; then
      echo "error: this distribution does not currently provide gcc-16/g++-16." >&2
      echo "Enable a trusted GCC 16 package repository for this distribution, then rerun this installer." >&2
      exit 1
    fi
    $SUDO apt-get install -y ca-certificates gnupg software-properties-common
    $SUDO add-apt-repository -y ppa:ubuntu-toolchain-r/test
    local toolchain_keyring="/etc/apt/trusted.gpg.d/ubuntu-toolchain-r-ubuntu-test.gpg"
    if [ ! -r "${toolchain_keyring}" ] ||
        ! gpg --show-keys --with-colons "${toolchain_keyring}" 2>/dev/null |
          grep -Fq 'fpr:::::::::C8EC952E2A0E1FBDC5090F6A2C277A0A352154E5:'; then
      echo "error: Ubuntu Toolchain PPA signing-key fingerprint verification failed." >&2
      exit 1
    fi
    $SUDO apt-get update
  fi
  $SUDO apt-get install -y "${packages[@]}"
  gcc-16 -dumpfullversion | grep -Eq '^16([.]|$)'
  g++-16 -dumpfullversion | grep -Eq '^16([.]|$)'

  case "${MODE}" in
    native)
      ;;
    windows)
      $SUDO apt-get install -y "${windows_packages[@]}"
      set_mingw_posix_alternative x86_64-w64-mingw32
      set_mingw_posix_alternative i686-w64-mingw32
      ;;
    linux-i686)
      $SUDO apt-get install -y "${linux_i686_packages[@]}"
      ;;
    linux-cross)
      $SUDO apt-get install -y "${linux_cross_packages[@]}"
      ;;
  esac
}

set_mingw_posix_alternative() {
  local triplet="$1"
  local gcc_path="/usr/bin/${triplet}-gcc-posix"
  local gxx_path="/usr/bin/${triplet}-g++-posix"

  if [ -x "${gcc_path}" ]; then
    $SUDO update-alternatives --set "${triplet}-gcc" "${gcc_path}" || true
  fi

  if [ -x "${gxx_path}" ]; then
    $SUDO update-alternatives --set "${triplet}-g++" "${gxx_path}" || true
  fi
}

install_pacman() {
  local packages=(
    base-devel
    cmake
    pkgconf
    git
    curl
    zip
    unzip
    python
    ccache
    doxygen
    graphviz
    gperf
    afl++
    bison
    flex
    autoconf
    automake
    libtool
    gettext
    bc
    boost
    icu
    openssl
    zlib
    zstd
    jitterentropy
    zeromq
    unbound
    libsodium
    libunwind
    xz
    readline
    expat
    qt5-tools
    hidapi
    libusb
    protobuf
    systemd
  )

  local windows_packages=(
    mingw-w64-gcc
  )

  local linux_cross_packages=(
    aarch64-linux-gnu-gcc
    arm-linux-gnueabihf-gcc
    riscv64-linux-gnu-gcc
  )

  $SUDO pacman -Syu --needed --noconfirm
  $SUDO pacman -S --needed --noconfirm "${packages[@]}"

  case "${MODE}" in
    native|linux-i686)
      ;;
    windows)
      $SUDO pacman -S --needed --noconfirm "${windows_packages[@]}"
      ;;
    linux-cross)
      $SUDO pacman -S --needed --noconfirm "${linux_cross_packages[@]}"
      ;;
  esac
}

install_dnf() {
  local packages=(
    gcc
    gcc-c++
    make
    cmake
    pkgconf-pkg-config
    git
    curl
    zip
    unzip
    python3
    ccache
    doxygen
    graphviz
    gperf
    american-fuzzy-lop
    bison
    flex
    autoconf
    automake
    libtool
    gettext
    bc
    libicu-devel
    openssl-devel
    zlib-devel
    libzstd-devel
    jitterentropy-devel
    zeromq-devel
    unbound-devel
    libsodium-devel
    libunwind-devel
    xz-devel
    readline-devel
    expat-devel
    qt5-linguist
    hidapi-devel
    libusbx-devel
    protobuf-devel
    protobuf-compiler
    systemd-devel
    boost-devel
  )

  local windows_packages=(
    mingw64-gcc
    mingw64-gcc-c++
    mingw32-gcc
    mingw32-gcc-c++
  )

  $SUDO dnf install -y "${packages[@]}"

  case "${MODE}" in
    native|linux-i686|linux-cross)
      ;;
    windows)
      $SUDO dnf install -y "${windows_packages[@]}"
      ;;
  esac
}

install_zypper() {
  local packages=(
    patterns-devel-C-C++-devel_C_C++
    cmake
    pkgconf
    git
    curl
    zip
    unzip
    python3
    ccache
    doxygen
    graphviz
    gperf
    afl
    bison
    flex
    autoconf
    automake
    libtool
    gettext-tools
    bc
    libicu-devel
    libopenssl-devel
    zlib-devel
    libzstd-devel
    jitterentropy-devel
    zeromq-devel
    unbound-devel
    libsodium-devel
    libunwind-devel
    xz-devel
    readline-devel
    libexpat-devel
    libqt5-qttools
    hidapi-devel
    libusb-1_0-devel
    protobuf-devel
    systemd-devel
    libboost_chrono-devel
    libboost_date_time-devel
    libboost_filesystem-devel
    libboost_locale-devel
    libboost_program_options-devel
    libboost_regex-devel
    libboost_serialization-devel
    libboost_system-devel
    libboost_thread-devel
  )

  local windows_packages=(
    mingw64-cross-gcc
    mingw64-cross-gcc-c++
    mingw32-cross-gcc
    mingw32-cross-gcc-c++
  )

  $SUDO zypper --non-interactive install "${packages[@]}"

  case "${MODE}" in
    native|linux-i686|linux-cross)
      ;;
    windows)
      $SUDO zypper --non-interactive install "${windows_packages[@]}"
      ;;
  esac
}

if have_command apt-get; then
  install_apt
elif have_command pacman; then
  install_pacman
elif have_command dnf; then
  install_dnf
elif have_command zypper; then
  install_zypper
else
  echo "error: unsupported package manager." >&2
  echo "Supported Linux package managers: apt-get, pacman, dnf, zypper." >&2
  exit 1
fi

echo "Dependency installation complete."
echo "Native dependencies cover make release-static, release/debug, tests, sanitizers, coverage, and fuzz source builds."
echo "You can now retry the requested make target."
