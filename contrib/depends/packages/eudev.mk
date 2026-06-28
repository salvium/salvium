package=eudev
$(package)_version=3.2.14
$(package)_download_path=https://github.com/eudev-project/eudev/releases/download/v$($(package)_version)/
$(package)_file_name=$(package)-$($(package)_version).tar.gz
$(package)_sha256_hash=8da4319102f24abbf7fff5ce9c416af848df163b29590e666d334cc1927f006f
$(package)_patches=gcc15-const-correctness.patch

define $(package)_set_vars
  $(package)_config_opts=--disable-hwdb --disable-manpages --disable-shared
endef

define $(package)_config_cmds
  $($(package)_autoconf) AR_FLAGS=$($(package)_arflags)
endef

define $(package)_build_cmds
  $(MAKE)
endef

define $(package)_preprocess_cmds
  patch -p1 < $($(package)_patch_dir)/gcc15-const-correctness.patch &&\
  cd $($(package)_build_subdir); autoreconf -f -i
endef

define $(package)_stage_cmds
  mkdir -p $($(package)_staging_prefix_dir)/lib/pkgconfig \
           $($(package)_staging_prefix_dir)/include/libudev &&\
  cp src/libudev/.libs/libudev.a $($(package)_staging_prefix_dir)/lib/ &&\
  cp src/libudev/libudev.h $($(package)_staging_prefix_dir)/include/ &&\
  cp src/libudev/libudev.pc $($(package)_staging_prefix_dir)/lib/pkgconfig/
endef

define $(package)_postprocess_cmds
  rm -f lib/*.la
endef
