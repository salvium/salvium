package=libiconv
$(package)_version=1.19
$(package)_download_path=https://ftp.gnu.org/gnu/libiconv
$(package)_file_name=libiconv-$($(package)_version).tar.gz
$(package)_sha256_hash=88dd96a8c0464eca144fc791ae60cd31cd8ee78321e67397e25fc095c4a19aa6

define $(package)_set_vars
  $(package)_config_opts=--disable-nls
  $(package)_config_opts+=--enable-static
  $(package)_config_opts+=--disable-shared
  $(package)_config_opts_linux=--with-pic
  $(package)_config_opts_freebsd=--with-pic
endef

define $(package)_preprocess_cmds
  cp -f $(BASEDIR)/config.guess $(BASEDIR)/config.sub build-aux/
endef

define $(package)_config_cmds
  $($(package)_autoconf) AR_FLAGS=$($(package)_arflags)
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
