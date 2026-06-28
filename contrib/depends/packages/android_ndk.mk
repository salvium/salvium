package=android_ndk
$(package)_version=29
$(package)_download_path=https://dl.google.com/android/repository/
$(package)_file_name=android-ndk-r$($(package)_version)-linux.zip
$(package)_sha256_hash=4abbbcdc842f3d4879206e9695d52709603e52dd68d3c1fff04b3b5e7a308ecf

define $(package)_set_vars
$(package)_target_arm=armv7a-linux-androideabi
$(package)_target_aarch64=aarch64-linux-android
$(package)_target_i686=i686-linux-android
$(package)_target_x86_64=x86_64-linux-android
endef

define $(package)_extract_cmds
  echo $($(package)_sha256_hash) $($(1)_source_dir)/$($(package)_file_name) | sha256sum -c &&\
  unzip -q $($(1)_source_dir)/$($(package)_file_name)
endef

define $(package)_stage_cmds
  mkdir -p $($(package)_staging_dir)/$(host_prefix)/native &&\
  cp -a android-ndk-r$($(package)_version)/toolchains/llvm/prebuilt/linux-x86_64/* \
        $($(package)_staging_dir)/$(host_prefix)/native/ &&\
  cd $($(package)_staging_dir)/$(host_prefix)/native/bin &&\
  ln -sf $($(package)_target_$(host_arch))$(ANDROID_API)-clang $(host_toolchain)clang &&\
  ln -sf $($(package)_target_$(host_arch))$(ANDROID_API)-clang++ $(host_toolchain)clang++ &&\
  ln -sf llvm-ar $(host_toolchain)ar &&\
  ln -sf llvm-nm $(host_toolchain)nm &&\
  ln -sf llvm-ranlib $(host_toolchain)ranlib &&\
  ln -sf llvm-strip $(host_toolchain)strip
endef
