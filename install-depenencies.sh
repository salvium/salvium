#!/usr/bin/env bash
set -euo pipefail

# Install Salvium build/release dependencies.
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
                 This is the default and fixes missing tools like gperf.
  --windows      Also install MinGW tools for Windows x64/x86 releases.
  --linux-i686   Also install multilib tools for Linux 32-bit releases.
  --linux-cross  Also install ARM/RISC-V/ppc64le/s390x Linux cross tools.
  --minimal      Alias for --native.
  --native-only  Alias for --native.
  -h, --help     Show this help.

Notes:
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
    cmake
    pkg-config
    git
    curl
    ca-certificates
    zip
    unzip
    python3
    ccache
    doxygen
    graphviz
    gperf
    bison
    flex
    autoconf
    automake
    libtool
    gettext
    bc
    libssl-dev
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
  $SUDO apt-get install -y "${packages[@]}"

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
    bison
    flex
    autoconf
    automake
    libtool
    gettext
    bc
    boost
    openssl
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
    bison
    flex
    autoconf
    automake
    libtool
    gettext
    bc
    openssl-devel
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
    bison
    flex
    autoconf
    automake
    libtool
    gettext-tools
    bc
    libopenssl-devel
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
echo "You can now retry: ./make_releases.sh"
