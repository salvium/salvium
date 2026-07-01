package=hidapi
$(package)_version=0.15.0
$(package)_download_path=https://github.com/libusb/hidapi/archive/refs/tags
$(package)_file_name=$(package)-$($(package)_version).tar.gz
$(package)_sha256_hash=5d84dec684c27b97b921d2f3b73218cb773cf4ea915caee317ac8fc73cef8136
$(package)_linux_dependencies=libusb eudev
$(package)_patches=missing_win_include.patch

define $(package)_set_vars
  $(package)_config_opts=-S . -B build
  $(package)_config_opts+=-DCMAKE_INSTALL_PREFIX=$(host_prefix)
  $(package)_config_opts+=-DCMAKE_BUILD_TYPE=Release
  $(package)_config_opts+=-DCMAKE_C_COMPILER="$(firstword $($(package)_cc))"
  $(package)_config_opts+=-DCMAKE_AR="$($(package)_ar)"
  $(package)_config_opts+=-DCMAKE_RANLIB="$($(package)_ranlib)"
  $(package)_config_opts+=-DCMAKE_C_FLAGS="$(filter-out $(firstword $($(package)_cc)),$($(package)_cc)) $($(package)_cflags) $($(package)_cppflags)"
  $(package)_config_opts+=-DCMAKE_EXE_LINKER_FLAGS="$($(package)_ldflags)"
  $(package)_config_opts+=-DCMAKE_POSITION_INDEPENDENT_CODE=ON
  $(package)_config_opts+=-DBUILD_SHARED_LIBS=OFF
  $(package)_config_opts+=-DHIDAPI_BUILD_HIDTEST=OFF
  $(package)_config_opts_mingw32+=-DCMAKE_SYSTEM_NAME=Windows
  $(package)_config_opts_darwin+=-DCMAKE_SYSTEM_NAME=Darwin

endef

define $(package)_preprocess_cmds
  patch -p1 < $($(package)_patch_dir)/missing_win_include.patch
endef

define $(package)_config_cmds
  cmake $($(package)_config_opts)
endef

define $(package)_build_cmds
  cmake --build build
endef

define $(package)_stage_cmds
  DESTDIR=$($(package)_staging_dir) cmake --install build
endef

define $(package)_postprocess_cmds
  rm -f lib/*.la
endef
