#!/bin/bash

# Get the git information
TAG=`git tag -l --points-at HEAD`
COMMIT=`git rev-parse --short=9 HEAD`

# Build the 64-bit Windows release
USE_DEVICE_TREZOR=OFF make depends target=x86_64-w64-mingw32 -j12
pushd ./build/x86_64-w64-mingw32/release/bin > /dev/null
zip -ur ~/releases/salvium-${TAG}-win64.zip salviumd.exe salvium-wallet-cli.exe salvium-wallet-rpc.exe
popd > /dev/null

# Build the 64-bit Apple Silicon release
USE_DEVICE_TREZOR=OFF make depends target=aarch64-apple-darwin -j12
pushd ./build/aarch64-apple-darwin/release/bin > /dev/null
zip -ur ~/releases/salvium-${TAG}-macos-arm64.zip salviumd salvium-wallet-cli salvium-wallet-rpc
popd > /dev/null

# Build the 64-bit MacOS Intel Silicon release
USE_DEVICE_TREZOR=OFF make depends target=x86_64-apple-darwin -j12
pushd ./build/x86_64-apple-darwin/release/bin > /dev/null
zip -ur ~/releases/salvium-${TAG}-macos-x86_64.zip salviumd salvium-wallet-cli salvium-wallet-rpc
popd > /dev/null

# Build the 64-bit Linux release
USE_DEVICE_TREZOR=OFF make depends target=x86_64-linux-gnu -j12
pushd ./build/x86_64-linux-gnu/release/bin > /dev/null
zip -ur ~/releases/salvium-${TAG}-linux-x86_64.zip salviumd salvium-wallet-cli salvium-wallet-rpc
popd > /dev/null

# Finish
