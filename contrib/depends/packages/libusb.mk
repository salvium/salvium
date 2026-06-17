package=libusb
$(package)_version=1.0.30
$(package)_download_path=https://github.com/libusb/libusb/releases/download/v$($(package)_version)
$(package)_file_name=$(package)-$($(package)_version).tar.bz2
$(package)_sha256_hash=fea36f34f9156400209595e300840767ab1a385ede1dc7ee893015aea9c6dbaf

define $(package)_preprocess_cmds
  cp -f $(BASEDIR)/config.guess $(BASEDIR)/config.sub . && \
  autoreconf -i
endef

define $(package)_set_vars
  $(package)_config_opts=--disable-shared
  $(package)_config_opts_linux=--with-pic --disable-udev
  $(package)_config_opts_mingw32=--disable-udev
  $(package)_config_opts_darwin=--disable-udev
  $(package)_config_opts_freebsd=--with-pic --disable-udev
endef

define $(package)_config_cmds
  $($(package)_autoconf) AR_FLAGS=$($(package)_arflags)
endef

define $(package)_build_cmds
  $(MAKE)
endef

define $(package)_stage_cmds
  mkdir -p $($(package)_staging_prefix_dir)/lib/pkgconfig \
           $($(package)_staging_prefix_dir)/include/libusb-1.0 &&\
  cp libusb/.libs/libusb-1.0.a $($(package)_staging_prefix_dir)/lib/ &&\
  cp libusb/libusb.h $($(package)_staging_prefix_dir)/include/libusb-1.0/ &&\
  cp libusb-1.0.pc $($(package)_staging_prefix_dir)/lib/pkgconfig/
endef

define $(package)_postprocess_cmds
  cp -f lib/libusb-1.0.a lib/libusb.a
endef
