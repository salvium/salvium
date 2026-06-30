package=protobuf
$(package)_version=$(native_$(package)_version)
$(package)_version_protobuf_cpp=$(native_$(package)_version_protobuf_cpp)
$(package)_download_path=$(native_$(package)_download_path)
$(package)_file_name=$(native_$(package)_file_name)
$(package)_sha256_hash=$(native_$(package)_sha256_hash)
$(package)_dependencies=native_$(package)
$(package)_patches=gcc15-source-warnings.patch
$(package)_cxxflags=-std=c++17
$(package)_ldflags_darwin=-framework CoreFoundation

define $(package)_set_vars
  $(package)_config_opts=-S . -B build
  $(package)_config_opts+=-DCMAKE_INSTALL_PREFIX=$(host_prefix)
  $(package)_config_opts+=-DCMAKE_BUILD_TYPE=Release
  $(package)_config_opts+=-DCMAKE_C_COMPILER="$(firstword $($(package)_cc))"
  $(package)_config_opts+=-DCMAKE_CXX_COMPILER="$(firstword $($(package)_cxx))"
  $(package)_config_opts+=-DCMAKE_AR="$($(package)_ar)"
  $(package)_config_opts+=-DCMAKE_RANLIB="$($(package)_ranlib)"
  $(package)_config_opts+=-DCMAKE_CXX_FLAGS="$(filter-out $(firstword $($(package)_cxx)),$($(package)_cxx)) $($(package)_cxxflags) $($(package)_cppflags)"
  $(package)_config_opts+=-DCMAKE_C_FLAGS="$(filter-out $(firstword $($(package)_cc)),$($(package)_cc)) $($(package)_cflags) $($(package)_cppflags)"
  $(package)_config_opts+=-DCMAKE_EXE_LINKER_FLAGS="$($(package)_ldflags)"
  $(package)_config_opts+=-DCMAKE_POSITION_INDEPENDENT_CODE=ON
  $(package)_config_opts+=-DCMAKE_CXX_STANDARD=17
  $(package)_config_opts+=-Dprotobuf_BUILD_TESTS=OFF
  $(package)_config_opts+=-Dprotobuf_BUILD_SHARED_LIBS=OFF
  $(package)_config_opts+=-Dprotobuf_BUILD_PROTOC_BINARIES=OFF
  $(package)_config_opts+=-Dprotobuf_FORCE_FETCH_DEPENDENCIES=ON
  $(package)_config_opts_mingw32+=-DCMAKE_CXX_STANDARD_LIBRARIES="-ldbghelp"
  $(package)_config_opts_mingw32+=-DCMAKE_C_STANDARD_LIBRARIES="-ldbghelp"
endef

define $(package)_preprocess_cmds
  patch -p1 < $($(package)_patch_dir)/gcc15-source-warnings.patch
endef

define $(package)_config_cmds
  cmake $($(package)_config_opts)
endef

define $(package)_build_cmds
  cmake --build build
endef

define $(package)_stage_cmds
  cmake --install build --prefix $($(package)_staging_prefix_dir)
endef
