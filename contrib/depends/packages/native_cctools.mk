package=native_cctools
$(package)_version=e79d784d667816e4b15a0abd78828f9abb0a0b99
$(package)_download_path=https://github.com/tpoechtrager/cctools-port/archive
$(package)_download_file=$($(package)_version).tar.gz
$(package)_file_name=$(package)-$($(package)_version).tar.gz
$(package)_sha256_hash=b671248580a21431cd890cb9e57a973d54a60132a257ef3a7c0c925d4052e066
$(package)_build_subdir=cctools
$(package)_patches=no-build-date.patch
$(package)_dependencies=native_libtapi

define $(package)_set_vars
$(package)_config_opts=--target=$(host) --disable-lto-support --with-libtapi=$(host_prefix)
$(package)_ldflags+=-Wl,-rpath=\\$$$$$$$$\$$$$$$$$ORIGIN/../lib
$(package)_cc=$(clang_prog)
$(package)_cxx=$(clangxx_prog)
endef

define $(package)_preprocess_cmds
  cp -f $(BASEDIR)/config.guess $(BASEDIR)/config.sub cctools && \
  patch -p1 < $($(package)_patch_dir)/no-build-date.patch
endef

define $(package)_config_cmds
  $($(package)_autoconf)
endef

define $(package)_build_cmds
  $(MAKE)
endef

define $(package)_stage_cmds
  $(MAKE) DESTDIR=$($(package)_staging_dir) install && \
  cp $($(package)_extract_dir)/cctools/misc/install_name_tool $($(package)_staging_prefix_dir)/bin/
endef
