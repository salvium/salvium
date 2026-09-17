# Copyright (c) 2014-2023, The Monero Project
#
# All rights reserved.
#
# Redistribution and use in source and binary forms, with or without modification, are
# permitted provided that the following conditions are met:
#
# 1. Redistributions of source code must retain the above copyright notice, this list of
#    conditions and the following disclaimer.
#
# 2. Redistributions in binary form must reproduce the above copyright notice, this list
#    of conditions and the following disclaimer in the documentation and/or other
#    materials provided with the distribution.
#
# 3. Neither the name of the copyright holder nor the names of its contributors may be
#    used to endorse or promote products derived from this software without specific
#    prior written permission.
#
# THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
# EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
# MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL
# THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
# SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
# PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
# INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT,
# STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF
# THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

ANDROID_STANDALONE_TOOLCHAIN_PATH ?= /usr/local/toolchain
RELEASE_CC ?= gcc-16
RELEASE_CXX ?= g++-16
# Optional focused targets for instrumented CI; ordinary releases build all.
RELEASE_STATIC_TARGETS ?=

host_system := $(shell uname -s)
windows_host := $(filter MINGW% MSYS% CYGWIN%,$(host_system))
linux_host := $(filter Linux,$(host_system))
ifneq ($(windows_host),)
  ifeq ($(origin RELEASE_CC),file)
    RELEASE_CC := gcc
  endif
  ifeq ($(origin RELEASE_CXX),file)
    RELEASE_CXX := g++
  endif
endif
native_target ?= $(if $(MINGW_CHOST),$(MINGW_CHOST),$(shell $(CC) -dumpmachine))
release_static_builddir := build/$(native_target)
release_target_arg :=
release_static_generator :=
release_static_build64 := ON
release_static_platform_args :=
release_static_compiler_check := @:
ifneq ($(windows_host),)
  ifneq ($(findstring i686,$(native_target)),)
    release_target_arg := --OS=windows-i686
    release_static_build64 := OFF
    release_static_platform_args := -D ARCH="i686" -D BUILD_TAG="win-x32"
  else ifneq ($(findstring aarch64,$(native_target)),)
    release_target_arg := --OS=windows-aarch64
    release_static_platform_args := -D ARCH="armv8-a" -D BUILD_TAG="win-arm64"
  else
    release_target_arg := --OS=windows-x86_64
    release_static_platform_args := -D ARCH="x86-64" -D BUILD_TAG="win-x64"
  endif
  release_static_generator := -G "MSYS Makefiles"
else ifneq ($(linux_host),)
  release_static_platform_args := -D CMAKE_C_COMPILER="$(RELEASE_CC)" -D CMAKE_CXX_COMPILER="$(RELEASE_CXX)"
  release_static_compiler_check := @if ! "$(RELEASE_CC)" -dumpfullversion | grep -Eq '^16([.]|$$)'; then echo "error: release-static requires GCC 16 (RELEASE_CC=$(RELEASE_CC))." >&2; exit 1; fi; if ! "$(RELEASE_CXX)" -dumpfullversion | grep -Eq '^16([.]|$$)'; then echo "error: release-static requires G++ 16 (RELEASE_CXX=$(RELEASE_CXX))." >&2; exit 1; fi
  ifneq ($(findstring x86_64,$(native_target)),)
    release_static_platform_args += -D ARCH="x86-64"
  else ifneq ($(findstring i686,$(native_target)),)
    release_static_build64 := OFF
    release_static_platform_args += -D ARCH="i686"
  else ifneq ($(findstring aarch64,$(native_target)),)
    release_static_platform_args += -D ARCH="armv8-a"
  else ifneq ($(findstring arm,$(native_target)),)
    release_static_build64 := OFF
    release_static_platform_args += -D ARCH="armv7-a"
  else
    release_static_platform_args += -D ARCH="default"
  endif
endif
builddir := build/$(native_target)
topdir   := ../../..
deldirs  := $(builddir)/debug $(builddir)/release $(builddir)/fuzz

all: release-all

depends:
	cd contrib/depends && $(MAKE) HOST=$(target) && cd ../.. && mkdir -p build/$(target)/release
	cd build/$(target)/release && USE_DEVICE_TREZOR_MANDATORY=1 cmake -DCMAKE_TOOLCHAIN_FILE=$(CURDIR)/contrib/depends/$(target)/share/toolchain.cmake ../../.. && $(MAKE)

cmake-debug:
	mkdir -p $(builddir)/debug
	cd $(builddir)/debug && cmake -D CMAKE_BUILD_TYPE=Debug $(topdir)

debug: cmake-debug
	cd $(builddir)/debug && $(MAKE)

# Temporarily disable some tests:
#  * libwallet_api_tests fail (Issue #895)
debug-test:
	mkdir -p $(builddir)/debug
	cd $(builddir)/debug && cmake -D BUILD_TESTS=ON -D CMAKE_BUILD_TYPE=Debug $(topdir) &&  $(MAKE) && $(MAKE) ARGS="-E libwallet_api_tests" test

debug-test-asan:
	mkdir -p $(builddir)/debug
	cd $(builddir)/debug && cmake -D BUILD_TESTS=ON -D SANITIZE=ON -D CMAKE_BUILD_TYPE=Debug $(topdir) &&  $(MAKE) && $(MAKE) ARGS="-E libwallet_api_tests" test

debug-test-trezor:
	mkdir -p $(builddir)/debug
	cd $(builddir)/debug && cmake -D BUILD_TESTS=ON -D TREZOR_DEBUG=ON -D CMAKE_BUILD_TYPE=Debug $(topdir) &&  $(MAKE) && $(MAKE) ARGS="-E libwallet_api_tests" test

debug-all:
	mkdir -p $(builddir)/debug
	cd $(builddir)/debug && cmake -D BUILD_TESTS=ON -D BUILD_SHARED_LIBS=OFF -D CMAKE_BUILD_TYPE=Debug $(topdir) && $(MAKE)

debug-static-all:
	mkdir -p $(builddir)/debug
	cd $(builddir)/debug && cmake -D BUILD_TESTS=ON -D STATIC=ON -D CMAKE_BUILD_TYPE=Debug $(topdir) && $(MAKE)

debug-static-win64:
	mkdir -p $(builddir)/debug
	cd $(builddir)/debug && cmake -G "MSYS Makefiles" -D STATIC=ON -D ARCH="x86-64" -D BUILD_64=ON -D CMAKE_BUILD_TYPE=Debug -D BUILD_TAG="win-x64" -D CMAKE_TOOLCHAIN_FILE=$(topdir)/cmake/64-bit-toolchain.cmake -D MSYS2_FOLDER=$(shell cd ${MINGW_PREFIX}/.. && pwd -W) $(topdir) && $(MAKE)
 
debug-static-win32:
	mkdir -p $(builddir)/debug
	cd $(builddir)/debug && cmake -G "MSYS Makefiles" -D STATIC=ON -D ARCH="i686" -D BUILD_64=OFF -D CMAKE_BUILD_TYPE=Debug -D BUILD_TAG="win-x32" -D CMAKE_TOOLCHAIN_FILE=$(topdir)/cmake/32-bit-toolchain.cmake -D MSYS2_FOLDER=$(shell cd ${MINGW_PREFIX}/.. && pwd -W) $(topdir) && $(MAKE)
 
cmake-release:
	mkdir -p $(builddir)/release
	cd $(builddir)/release && cmake $(NATIVE_CMAKE_GENERATOR) -D BUILD_TESTS=OFF -D CMAKE_BUILD_TYPE=Release $(topdir)

release:
	mkdir -p $(builddir)/release
	cd $(builddir)/release && CC="$(RELEASE_CC)" CXX="$(RELEASE_CXX)" cmake $(NATIVE_CMAKE_GENERATOR) -D CMAKE_C_COMPILER="$(RELEASE_CC)" -D CMAKE_CXX_COMPILER="$(RELEASE_CXX)" -D BUILD_TESTS=OFF -D STATIC=OFF -D CMAKE_BUILD_TYPE=Release $(topdir) && $(MAKE)

release-test:
	mkdir -p $(builddir)/release
	cd $(builddir)/release && cmake -D BUILD_TESTS=ON -D CMAKE_BUILD_TYPE=Release $(topdir) && $(MAKE) && $(MAKE) test

release-all:
	mkdir -p $(builddir)/release
	cd $(builddir)/release && cmake -D BUILD_TESTS=ON -D CMAKE_BUILD_TYPE=Release $(topdir) && $(MAKE)

release-static:
	$(release_static_compiler_check)
	mkdir -p $(release_static_builddir)/release
	cd $(release_static_builddir)/release && CC="$(RELEASE_CC)" CXX="$(RELEASE_CXX)" cmake $(release_static_generator) -D CMAKE_C_COMPILER="$(RELEASE_CC)" -D CMAKE_CXX_COMPILER="$(RELEASE_CXX)" -D BUILD_TESTS=OFF -D STATIC=ON -D BUILD_64=$(release_static_build64) -D CMAKE_BUILD_TYPE=Release $(release_static_platform_args) ../../.. && $(MAKE) $(RELEASE_STATIC_TARGETS)

coverage:
	mkdir -p $(builddir)/debug
	cd $(builddir)/debug && cmake -D BUILD_TESTS=ON -D CMAKE_BUILD_TYPE=Debug -D COVERAGE=ON $(topdir) && $(MAKE) && $(MAKE) test

# Targets for specific prebuilt builds which will be advertised for updates by their build tag

release-static-linux-armv6:
	mkdir -p $(builddir)/release
	cd $(builddir)/release && cmake -D BUILD_TESTS=OFF -D ARCH="armv6zk" -D STATIC=ON -D BUILD_64=OFF -D CMAKE_BUILD_TYPE=Release -D BUILD_TAG="linux-armv6" $(topdir) && $(MAKE)

release-static-linux-armv7:
	mkdir -p $(builddir)/release
	cd $(builddir)/release && cmake -D BUILD_TESTS=OFF -D ARCH="armv7-a" -D STATIC=ON -D BUILD_64=OFF -D CMAKE_BUILD_TYPE=Release -D BUILD_TAG="linux-armv7" $(topdir) && $(MAKE)

release-static-android-armv7:
	mkdir -p $(builddir)/release/translations
	cd $(builddir)/release/translations && cmake ../../../translations && $(MAKE)
	cd $(builddir)/release && CC=arm-linux-androideabi-clang CXX=arm-linux-androideabi-clang++ cmake -D BUILD_TESTS=OFF -D ARCH="armv7-a" -D STATIC=ON -D BUILD_64=OFF -D CMAKE_BUILD_TYPE=Release -D ANDROID=true -D BUILD_TAG="android-armv7" -D CMAKE_SYSTEM_NAME="Android" -D CMAKE_ANDROID_STANDALONE_TOOLCHAIN="${ANDROID_STANDALONE_TOOLCHAIN_PATH}" -D CMAKE_ANDROID_ARM_MODE=ON -D CMAKE_ANDROID_ARCH_ABI="armeabi-v7a" ../.. && $(MAKE)

release-static-android-armv8:
	mkdir -p $(builddir)/release/translations
	cd $(builddir)/release/translations && cmake ../../../translations && $(MAKE)
	cd $(builddir)/release && CC=aarch64-linux-android-clang CXX=aarch64-linux-android-clang++ cmake -D BUILD_TESTS=OFF -D ARCH="armv8-a" -D STATIC=ON -D BUILD_64=ON -D CMAKE_BUILD_TYPE=Release -D ANDROID=true -D BUILD_TAG="android-armv8" -D CMAKE_SYSTEM_NAME="Android" -D CMAKE_ANDROID_STANDALONE_TOOLCHAIN="${ANDROID_STANDALONE_TOOLCHAIN_PATH}" -D CMAKE_ANDROID_ARCH_ABI="arm64-v8a" ../.. && $(MAKE)

release-static-linux-armv8:
	mkdir -p $(builddir)/release
	cd $(builddir)/release && cmake -D BUILD_TESTS=OFF -D ARCH="armv8-a" -D STATIC=ON -D BUILD_64=ON -D CMAKE_BUILD_TYPE=Release -D BUILD_TAG="linux-armv8" $(topdir) && $(MAKE)

release-static-linux-x86_64:
	mkdir -p $(builddir)/release
	cd $(builddir)/release && cmake -D STATIC=ON -D ARCH="x86-64" -D BUILD_64=ON -D CMAKE_BUILD_TYPE=Release -D BUILD_TAG="linux-x64" $(topdir) && $(MAKE)

release-static-freebsd-x86_64:
	mkdir -p $(builddir)/release
	cd $(builddir)/release && cmake -D STATIC=ON -D ARCH="x86-64" -D BUILD_64=ON -D CMAKE_BUILD_TYPE=Release -D BUILD_TAG="freebsd-x64" $(topdir) && $(MAKE)

release-static-mac-x86_64:
	mkdir -p $(builddir)/release
	cd $(builddir)/release && cmake -D STATIC=ON -D ARCH="x86-64" -D BUILD_64=ON -D CMAKE_BUILD_TYPE=Release -D BUILD_TAG="mac-x64" $(topdir) && $(MAKE)

release-static-linux-i686:
	mkdir -p $(builddir)/release
	cd $(builddir)/release && cmake -D STATIC=ON -D ARCH="i686" -D BUILD_64=OFF -D CMAKE_BUILD_TYPE=Release -D BUILD_TAG="linux-x86" $(topdir) && $(MAKE)

release-static-win64:
	mkdir -p $(builddir)/release
	cd $(builddir)/release && cmake -G "MSYS Makefiles" -D STATIC=ON -D ARCH="x86-64" -D BUILD_64=ON -D CMAKE_BUILD_TYPE=Release -D BUILD_TAG="win-x64" -D CMAKE_TOOLCHAIN_FILE=$(topdir)/cmake/64-bit-toolchain.cmake -D MSYS2_FOLDER=$(shell cd ${MINGW_PREFIX}/.. && pwd -W) $(topdir) && $(MAKE)

release-static-win32:
	mkdir -p $(builddir)/release
	cd $(builddir)/release && cmake -G "MSYS Makefiles" -D STATIC=ON -D ARCH="i686" -D BUILD_64=OFF -D CMAKE_BUILD_TYPE=Release -D BUILD_TAG="win-x32" -D CMAKE_TOOLCHAIN_FILE=$(topdir)/cmake/32-bit-toolchain.cmake -D MSYS2_FOLDER=$(shell cd ${MINGW_PREFIX}/.. && pwd -W) $(topdir) && $(MAKE)

fuzz:
	mkdir -p $(builddir)/fuzz
	cd $(builddir)/fuzz && cmake -D STATIC=ON -D SANITIZE=ON -D BUILD_TESTS=ON -D USE_LTO=OFF -D CMAKE_C_COMPILER=afl-gcc -D CMAKE_CXX_COMPILER=afl-g++ -D ARCH="x86-64" -D CMAKE_BUILD_TYPE=fuzz -D BUILD_TAG="linux-x64" $(topdir) && $(MAKE)

clean:
	@echo "WARNING: Back-up your wallet if it exists within ./"$(deldirs)"!" ; \
    read -r -p "This will destroy the build directory, continue (y/N)?: " CONTINUE; \
	[ $$CONTINUE = "y" ] || [ $$CONTINUE = "Y" ] || (echo "Exiting."; exit 1;)
	rm -rf $(deldirs)

clean-all:
	@echo "WARNING: Back-up your wallet if it exists within ./build!" ; \
	read -r -p "This will destroy all build directories, continue (y/N)?: " CONTINUE; \
	[ $$CONTINUE = "y" ] || [ $$CONTINUE = "Y" ] || (echo "Exiting."; exit 1;)
	rm -rf ./build

tags:
	ctags -R --sort=1 --c++-kinds=+p --fields=+iaS --extra=+q --language-force=C++ src contrib tests/gtest

.PHONY: all cmake-debug debug debug-test debug-all cmake-release release release-test release-all clean tags
