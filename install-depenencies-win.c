#include <stdio.h>
#include <stdlib.h>

int main(void) {
  const char *script =
    "Set-StrictMode -Version Latest; "
    "$ErrorActionPreference='Stop'; "
    "Write-Host 'Installing Salvium Windows build dependencies via MSYS2...'; "
    "$msys='C:\\msys64\\usr\\bin\\bash.exe'; "
    "if (!(Test-Path $msys)) { "
    "  if (Get-Command winget -ErrorAction SilentlyContinue) { "
    "    winget install --id MSYS2.MSYS2 -e --accept-package-agreements --accept-source-agreements; "
    "  } else { "
    "    throw 'MSYS2 is not installed and winget is unavailable. Install MSYS2 from https://www.msys2.org/, then rerun this installer.'; "
    "  } "
    "} "
    "$msys='C:\\msys64\\usr\\bin\\bash.exe'; "
    "if (!(Test-Path $msys)) { throw 'MSYS2 bash was not found at C:\\msys64\\usr\\bin\\bash.exe after installation.'; } "
    "& $msys -lc 'pacman -Syu --noconfirm || true'; "
    "& $msys -lc 'pacman -S --needed --noconfirm base-devel git make zip unzip cmake pkgconf gperf bison flex autoconf automake libtool gettext-devel python ccache mingw-w64-x86_64-toolchain mingw-w64-x86_64-cmake mingw-w64-x86_64-boost mingw-w64-x86_64-openssl mingw-w64-x86_64-zeromq mingw-w64-x86_64-libsodium mingw-w64-x86_64-hidapi mingw-w64-x86_64-unbound mingw-w64-x86_64-protobuf mingw-w64-i686-toolchain mingw-w64-i686-cmake mingw-w64-i686-boost mingw-w64-i686-openssl mingw-w64-i686-zeromq mingw-w64-i686-libsodium mingw-w64-i686-hidapi mingw-w64-i686-unbound mingw-w64-i686-protobuf'; "
    "Write-Host 'Dependency installation complete. Use the MSYS2 MinGW shell to build Windows releases.'";

  char command[8192];
  int written = snprintf(
    command,
    sizeof(command),
    "powershell.exe -NoProfile -ExecutionPolicy Bypass -Command \"%s\"",
    script
  );

  if (written < 0 || written >= (int)sizeof(command)) {
    fprintf(stderr, "internal error: PowerShell command is too long\n");
    return 1;
  }

  return system(command);
}
