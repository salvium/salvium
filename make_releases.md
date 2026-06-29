# make_releases.sh

`make_releases.sh` builds zipped Salvium release binaries with the repository's
`make depends` build system.

By default, it builds for the current host OS. For example, on Ubuntu x86_64 it
builds a Linux x86_64 release, not a Windows `.exe` release.

## Quick Start

```bash
./make_releases.sh
```

The release archive is written to:

```bash
~/releases
```

You can override that directory:

```bash
./make_releases.sh --release-dir=/tmp/salvium-releases
```

## Common Examples

Build for the current machine:

```bash
./make_releases.sh
```

Build and explicitly create the release zip:

```bash
./make_releases.sh --zip
```

Build release binaries without creating a zip:

```bash
./make_releases.sh --no-zip
```

Build Ubuntu or Arch Linux x86_64:

```bash
./make_releases.sh --OS=Linux-Ubuntu
./make_releases.sh --OS=Linux-ARCH
```

Build Windows:

```bash
./make_releases.sh --OS=Windowsx64
./make_releases.sh --OS=Windowsx32
```

Build macOS:

```bash
./make_releases.sh --OS=MacOS-arm64
./make_releases.sh --OS=MacOS-x64
```

Build FreeBSD:

```bash
./make_releases.sh --OS=FreeBSD-x64
```

Build Android:

```bash
./make_releases.sh --OS=Android-arm64
```

Build every configured target:

```bash
./make_releases.sh --OS=all
```

## Options

```text
--OS=<target>       Build one target.
--OS=all            Build every target listed by --list-targets.
--list-targets      Show supported target keys, depends triplets, and aliases.
-j<N>               Set parallel make jobs.
--jobs=<N>          Set parallel make jobs.
--release-dir=<dir> Set output directory.
--zip               Create the release zip archive. This is the default.
--no-zip            Build binaries without creating a zip archive.
-h, --help          Show script help.
```

## Supported Targets

Run this command for the exact list supported by your current script:

```bash
./make_releases.sh --list-targets
```

Current target keys include:

```text
linux-x86_64
linux-i686
linux-aarch64
linux-armv7
linux-armv6
linux-riscv64
linux-ppc64le
linux-s390x
windows-x86_64
windows-i686
windows-aarch64
macos-x86_64
macos-aarch64
freebsd-x86_64
freebsd-i686
freebsd-aarch64
android-aarch64
android-armv7
android-x86_64
android-i686
```

Aliases such as `Windowsx64`, `Windowsx32`, `Linux-Ubuntu`, `Linux-ARCH`,
`MacOS-arm64`, `FreeBSD-x64`, and `Android-arm64` are also accepted.

## Output Names

Archives are named with the current Git tag if `HEAD` is tagged. If there is no
tag, the short commit hash is used instead.

Examples:

```text
salvium-v1.2.3-linux-x86_64.zip
salvium-v1.2.3-win64.zip
salvium-abcdef123-macos-arm64.zip
```

Each archive contains:

```text
salviumd
salvium-wallet-cli
salvium-wallet-rpc
```

Windows archives contain the `.exe` variants.

## Prerequisites

All builds require:

```bash
make
cmake
```

Zip archive creation also requires:

```bash
zip
```

Native Linux x86_64 builds require a normal C/C++ toolchain:

```bash
sudo apt install build-essential zip
```

Windows targets require MinGW cross-compilers. On Ubuntu:

```bash
sudo apt install g++-mingw-w64-x86-64 g++-mingw-w64-i686
```

For 64-bit Windows, select POSIX alternatives if needed:

```bash
sudo update-alternatives --set x86_64-w64-mingw32-g++ /usr/bin/x86_64-w64-mingw32-g++-posix
sudo update-alternatives --set x86_64-w64-mingw32-gcc /usr/bin/x86_64-w64-mingw32-gcc-posix
```

For 32-bit Windows, select POSIX alternatives if needed:

```bash
sudo update-alternatives --set i686-w64-mingw32-g++ /usr/bin/i686-w64-mingw32-g++-posix
sudo update-alternatives --set i686-w64-mingw32-gcc /usr/bin/i686-w64-mingw32-gcc-posix
```

macOS, FreeBSD, Android, and non-native Linux architecture builds may require
additional SDKs or cross toolchains. The script lists these targets because the
depends system can identify their target triplets, but your machine still needs
the matching external build tools.

## Environment Variables

`RELEASE_DIR` sets the output directory:

```bash
RELEASE_DIR=/tmp/releases ./make_releases.sh
```

`JOBS` sets the default parallel build count:

```bash
JOBS=8 ./make_releases.sh
```

If `JOBS` or `-j` is not set, the script chooses a conservative default from
available RAM and CPU count. It assumes each C++ compiler process can need
several GiB and caps the automatic default at 8 jobs to avoid swap-heavy
`cc1plus` failures. Use `-j<N>` or `JOBS=<N>` when you want to override that
default.

Command-line options override these defaults where applicable.
