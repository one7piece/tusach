@echo off
echo compling protobuffer file
set SRC_DIR=.\server\src\dv.com.tusach
del %SRC_DIR%\model\tusach*.pb.go
protoc.exe -I=%SRC_DIR% --go_out=%SRC_DIR%/model --proto_path=.\proto .\proto\tusach_model.proto

rem generate ts files using protobufjs
set OUT_DIR=.\client\src\typings
set EXE_DIR=.\client\node_modules\.bin
echo generate js file
rem call %EXE_DIR%\pbjs -t static-module -w default -o %OUT_DIR%\tusach.js proto\tusach_model.proto
call %EXE_DIR%\pbjs -t static-module -w es6 -o %OUT_DIR%\tusach.js proto\tusach_model.proto
echo convert to typescript definition file
call %EXE_DIR%\pbts -o %OUT_DIR%\tusach.d.ts.temp %OUT_DIR%\tusach.js
echo import { Long } from "protobufjs/minimal"; > %OUT_DIR%\tusach.d.ts
echo import * as $protobuf from "protobufjs/minimal"; >> %OUT_DIR%\tusach.d.ts
type %OUT_DIR%\tusach.d.ts.temp >> %OUT_DIR%\tusach.d.ts


