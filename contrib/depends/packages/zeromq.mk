package=zeromq
$(package)_version=4.3.5
$(package)_download_path=https://github.com/zeromq/libzmq/releases/download/v$($(package)_version)/
$(package)_file_name=$(package)-$($(package)_version).tar.gz
$(package)_sha256_hash=6653ef5910f17954861fe72332e68b03ca6e4d9c7160eb3a8de5a5a913bfab43
# zmq 4.3.5: src/proxy.cpp:502 uses `stats_proxy stats = {0};`, which triggers
# -Wmissing-braces on clang 16+. libzmq enables -Werror, so the build fails.
# Fixed upstream in later libzmq releases; carried here as a patch for 4.3.5.
$(package)_patches=fix-missing-braces.patch

define $(package)_set_vars
  $(package)_config_opts=--without-docs --disable-shared --without-libsodium --disable-curve --disable-libbsd --disable-libunwind --with-cv-impl=pthread
  $(package)_config_opts_linux=--with-pic
  $(package)_config_opts_freebsd=--with-pic
  $(package)_cxxflags=-std=c++11
endef

define $(package)_config_cmds
  patch -p1 < $($(package)_patch_dir)/fix-missing-braces.patch &&\
  $($(package)_autoconf) AR_FLAGS=$($(package)_arflags)
endef

define $(package)_build_cmds
  $(MAKE) src/libzmq.la
endef

define $(package)_stage_cmds
  mkdir -p $($(package)_staging_prefix_dir)/lib/pkgconfig \
           $($(package)_staging_prefix_dir)/include &&\
  cp src/.libs/libzmq.a $($(package)_staging_prefix_dir)/lib/ &&\
  cp include/zmq.h include/zmq_utils.h $($(package)_staging_prefix_dir)/include/ &&\
  cp src/libzmq.pc $($(package)_staging_prefix_dir)/lib/pkgconfig/
endef

define $(package)_postprocess_cmds
  rm -rf bin share &&\
  rm -f lib/*.la
endef
