package=expat
$(package)_version=2.8.1
$(package)_download_path=https://github.com/libexpat/libexpat/releases/download/R_$(subst .,_,$($(package)_version))/
$(package)_file_name=$(package)-$($(package)_version).tar.bz2
$(package)_sha256_hash=f5833dd2e1cd7739ec9182804a1a29c4f0cc7c2f26b633d3a2188b7766a88ecb

define $(package)_set_vars
$(package)_config_opts=--disable-shared --without-docbook --without-tests --without-examples
$(package)_config_opts+=--enable-option-checking --without-xmlwf --with-pic
$(package)_config_opts+=--prefix=$(host_prefix)
endef

define $(package)_config_cmds
  $($(package)_autoconf)
endef

define $(package)_build_cmds
  $(MAKE)
endef

define $(package)_stage_cmds
  $(MAKE) DESTDIR=$($(package)_staging_dir) install
endef

define $(package)_postprocess_cmds
  rm -rf share lib/cmake lib/*.la
endef
