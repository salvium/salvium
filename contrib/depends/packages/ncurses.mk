package=ncurses
$(package)_version=6.6
$(package)_download_path=https://ftp.gnu.org/gnu/ncurses
$(package)_file_name=$(package)-$($(package)_version).tar.gz
$(package)_sha256_hash=355b4cbbed880b0381a04c46617b7656e362585d52e9cf84a67e2009b749ff11
$(package)_patches=fallback.c gcc15-source-warnings.patch darwin-termlib-name.patch

define $(package)_set_vars
  $(package)_build_opts=CC="$($(package)_cc)"
  $(package)_config_env=cf_cv_ar_flags=""
  $(package)_config_opts=--prefix=$(host_prefix)
  $(package)_config_opts+=--disable-shared
  $(package)_config_opts+=--with-build-cc=gcc
  $(package)_config_opts+=--without-debug
  $(package)_config_opts+=--without-ada
  $(package)_config_opts+=--without-cxx-binding
  $(package)_config_opts+=--without-cxx
  $(package)_config_opts+=--without-ticlib
  $(package)_config_opts+=--without-tic
  $(package)_config_opts+=--without-progs
  $(package)_config_opts+=--without-tests
  $(package)_config_opts+=--without-tack
  $(package)_config_opts+=--without-manpages
  $(package)_config_opts+=--with-termlib=tinfo
  $(package)_config_opts+=--disable-tic-depends
  $(package)_config_opts+=--disable-big-strings
  $(package)_config_opts+=--disable-ext-colors
  $(package)_config_opts+=--enable-pc-files
  $(package)_config_opts+=--without-shared
  $(package)_config_opts+=--without-pthread
  $(package)_config_opts+=--disable-rpath
  $(package)_config_opts+=--disable-colorfgbg
  $(package)_config_opts+=--disable-ext-mouse
  $(package)_config_opts+=--disable-symlinks
  $(package)_config_opts+=--enable-warnings
  $(package)_config_opts+=--enable-assertions
  $(package)_config_opts+=--with-default-terminfo-dir=/etc/_terminfo_
  $(package)_config_opts+=--with-terminfo-dirs=/etc/_terminfo_
  $(package)_config_opts+=--enable-database
  $(package)_config_opts+=--enable-sp-funcs
  $(package)_config_opts+=--disable-term-driver
  $(package)_config_opts+=--enable-interop
  $(package)_config_opts+=--enable-widec
  $(package)_build_opts+=CFLAGS="$($(package)_cflags) $($(package)_cppflags) -fPIC"
endef

define $(package)_preprocess_cmds
  cp -f $(BASEDIR)/config.guess $(BASEDIR)/config.sub . && \
  patch -p1 < $($(package)_patch_dir)/gcc15-source-warnings.patch &&\
  patch -p1 < $($(package)_patch_dir)/darwin-termlib-name.patch &&\
  cp $($(package)_patch_dir)/fallback.c ncurses
endef

define $(package)_config_cmds
  ./configure --build=$(build) --host=$(canonical_host) \
    --prefix=$($($(package)_type)_prefix) $($(package)_config_opts) \
    CC="$($(package)_cc)" CXX="$($(package)_cxx)" \
    AR="$($(package)_ar)" ARFLAGS="$($(package)_arflags)" \
    RANLIB="$($(package)_ranlib)" NM="$($(package)_nm)" \
    CFLAGS="$($(package)_cflags)" \
    CXXFLAGS="$($(package)_cxxflags)" \
    CPPFLAGS="$($(package)_cppflags)" LDFLAGS="$($(package)_ldflags)"
endef

define $(package)_build_cmds
  $(MAKE) $($(package)_build_opts) RANLIB=: V=1
endef

define $(package)_stage_cmds
  $(MAKE) install.libs RANLIB=: DESTDIR=$($(package)_staging_dir)
endef
