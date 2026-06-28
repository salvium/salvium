package=sodium
$(package)_version=1.0.22
$(package)_download_path=https://download.libsodium.org/libsodium/releases/
$(package)_file_name=libsodium-$($(package)_version).tar.gz
$(package)_sha256_hash=adbdd8f16149e81ac6078a03aca6fc03b592b89ef7b5ed83841c086191be3349
$(package)_patches=disable-glibc-getrandom-getentropy.patch fix-whitespace.patch

define $(package)_set_vars
$(package)_config_opts=--enable-static --disable-shared
$(package)_config_opts+=--prefix=$(host_prefix)
endef

define $(package)_preprocess_cmds
  patch -p1 < $($(package)_patch_dir)/disable-glibc-getrandom-getentropy.patch &&\
  patch -p1 < $($(package)_patch_dir)/fix-whitespace.patch
endef

define $(package)_config_cmds
  $($(package)_autoconf) AR_FLAGS=$($(package)_arflags)
endef

define $(package)_build_cmds
  $(MAKE)
endef

define $(package)_stage_cmds
  mkdir -p $($(package)_staging_prefix_dir)/lib/pkgconfig \
           $($(package)_staging_prefix_dir)/include/sodium &&\
  cp src/libsodium/.libs/libsodium.a $($(package)_staging_prefix_dir)/lib/ &&\
  cp libsodium.pc $($(package)_staging_prefix_dir)/lib/pkgconfig/ &&\
  cp src/libsodium/include/sodium.h $($(package)_staging_prefix_dir)/include/ &&\
  cp src/libsodium/include/sodium/*.h $($(package)_staging_prefix_dir)/include/sodium/
endef

define $(package)_postprocess_cmds
  rm -f lib/*.la
endef
