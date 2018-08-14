@echo off
echo compling protobuffer file
set SRC_DIR=./server/src/dv.com.tusach
protoc.exe -I=%SRC_DIR% --go_out=%SRC_DIR%/model --proto_path=./proto ./proto/tusach_model.proto

rem generate ts files using protobufjs
set OUT_DIR=.\client\ngts\src\model
echo generate js file
call pbjs -t static-module -w commonjs -o %OUT_DIR%\tusach.js proto\tusach_model.proto
echo convert to typescript definition file
call pbts -o %OUT_DIR%\tusach.d.ts %OUT_DIR%\tusach.js
