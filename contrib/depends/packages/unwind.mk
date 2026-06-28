package=unwind
$(package)_version=1.6.2
$(package)_download_path=https://download.savannah.nongnu.org/releases/libunwind
$(package)_file_name=lib$(package)-$($(package)_version).tar.gz
$(package)_sha256_hash=4a6aec666991fb45d0889c44aede8ad6eb108071c3554fcdff671f9c94794976
$(package)_patches=fix_obj_order.patch

define $(package)_preprocess_cmds
  patch -p0 < $($(package)_patch_dir)/fix_obj_order.patch
endef

define $(package)_config_cmds
  cp -f $(BASEDIR)/config.guess config/config.guess &&\
  cp -f $(BASEDIR)/config.sub config/config.sub &&\
  $($(package)_autoconf) --disable-shared --enable-static --disable-tests --disable-documentation AR_FLAGS=$($(package)_arflags)
endef

define $(package)_build_cmds
  $(MAKE)
endef

define $(package)_stage_cmds
  $(MAKE) DESTDIR=$($(package)_staging_dir) install
endef

define $(package)_postprocess_cmds
  rm lib/*.la
endef
