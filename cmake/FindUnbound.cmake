# Copyright (c) 2014-2023, The Monero Project
# All rights reserved.
# 
# Redistribution and use in source and binary forms, with or without modification, are
# permitted provided that the following conditions are met:
# 
# 1. Redistributions of source code must retain the above copyright notice, this list of
#    conditions and the following disclaimer.
# 
# 2. Redistributions in binary form must reproduce the above copyright notice, this list
#    of conditions and the following disclaimer in the documentation and/or other
#    materials provided with the distribution.
# 
# 3. Neither the name of the copyright holder nor the names of its contributors may be
#    used to endorse or promote products derived from this software without specific
#    prior written permission.
# 
# THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
# EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
# MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL
# THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
# SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
# PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
# INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT,
# STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF
# THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

MESSAGE(STATUS "Looking for libunbound")

FIND_PATH(UNBOUND_INCLUDE_DIR
  NAMES unbound.h
  PATH_SUFFIXES include/ include/unbound/
  PATHS "${PROJECT_SOURCE_DIR}"
  ${UNBOUND_ROOT}
  $ENV{UNBOUND_ROOT}
  /usr/local/
  /usr/
)

find_library(UNBOUND_LIBRARIES unbound)

# Native macOS packages can enable HTTP/2 and other optional dependencies.
# Their static archives require the private libraries listed by pkg-config.
if(APPLE AND STATIC AND NOT DEPENDS)
  find_package(PkgConfig REQUIRED)
  pkg_check_modules(UNBOUND_PC REQUIRED libunbound)
  foreach(_unbound_dependency IN LISTS UNBOUND_PC_STATIC_LIBRARIES)
    if(NOT _unbound_dependency STREQUAL "unbound")
      find_library(UNBOUND_${_unbound_dependency}_LIBRARY
        NAMES ${_unbound_dependency}
        HINTS ${UNBOUND_PC_STATIC_LIBRARY_DIRS}
        REQUIRED)
      list(APPEND UNBOUND_LIBRARIES ${UNBOUND_${_unbound_dependency}_LIBRARY})
    endif()
  endforeach()
  list(APPEND UNBOUND_LIBRARIES ${UNBOUND_PC_STATIC_LDFLAGS_OTHER})
endif()
