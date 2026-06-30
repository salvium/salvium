package=native_libtapi
$(package)_version=593d29141bf176d24021208c75af54a2ef23c38b
$(package)_download_path=https://github.com/tpoechtrager/apple-libtapi/archive
$(package)_download_file=$($(package)_version).tar.gz
$(package)_file_name=$(package)-$($(package)_version).tar.gz
$(package)_sha256_hash=dbad2a41f2351b052367db1fe251bebe43ee9ca5815e46b725c4bc71c339186f

define $(package)_build_cmds
  CC=$(clang_prog) CXX=$(clangxx_prog) INSTALLPREFIX=$($(package)_staging_prefix_dir) ./build.sh
endef

define $(package)_stage_cmds
  ./install.sh
endef
