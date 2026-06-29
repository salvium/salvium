package=native_ccache
$(package)_version=4.13.6
$(package)_download_path=https://github.com/ccache/ccache/releases/download/v$($(package)_version)
$(package)_file_name=ccache-$($(package)_version)-linux-x86_64-glibc.tar.xz
$(package)_sha256_hash=508b2a1217dc6e04a23e967c7b95a0fb45d8a7e16fde9e180919698f2e2be060

define $(package)_stage_cmds
  mkdir -p $($(package)_staging_prefix_dir)/bin &&\
  cp ccache $($(package)_staging_prefix_dir)/bin/
endef

define $(package)_postprocess_cmds
  rm -rf lib include share
endef
