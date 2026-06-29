package=native_protobuf
$(package)_version=35.1
$(package)_version_protobuf_cpp=$($(package)_version)
$(package)_download_path=https://github.com/protocolbuffers/protobuf/releases/download/v$($(package)_version)/
$(package)_file_name=protobuf-$($(package)_version_protobuf_cpp).tar.gz
$(package)_sha256_hash=f0b6838e7522a8da96126d487068c959bc624926368f3024ac8fd03abd0a1ac4
$(package)_patches=gcc15-source-warnings.patch
$(package)_cxxflags=-std=c++17

define $(package)_set_vars
  $(package)_config_opts=-S . -B build
  $(package)_config_opts+=-DCMAKE_INSTALL_PREFIX=$(build_prefix)
  $(package)_config_opts+=-DCMAKE_BUILD_TYPE=Release
  $(package)_config_opts+=-DCMAKE_POSITION_INDEPENDENT_CODE=ON
  $(package)_config_opts+=-DCMAKE_CXX_STANDARD=17
  $(package)_config_opts+=-Dprotobuf_BUILD_TESTS=OFF
  $(package)_config_opts+=-Dprotobuf_BUILD_SHARED_LIBS=OFF
  $(package)_config_opts+=-Dprotobuf_FORCE_FETCH_DEPENDENCIES=ON
endef

define $(package)_preprocess_cmds
  patch -p1 < $($(package)_patch_dir)/gcc15-source-warnings.patch
endef

define $(package)_config_cmds
  cmake $($(package)_config_opts)
endef

define $(package)_build_cmds
  cmake --build build --target protoc
endef

define $(package)_stage_cmds
  install -d $($(package)_staging_prefix_dir)/bin && \
  install -m 755 build/protoc $($(package)_staging_prefix_dir)/bin/protoc
endef

define $(package)_postprocess_cmds
  rm -rf lib include share
endef
