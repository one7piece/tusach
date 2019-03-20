@echo off
echo generate typescript from proto using protobufjs

rem generate ts files using protobufjs
set OUT_DIR=.\client\src\typings
set EXE_DIR=.\client\node_modules\.bin
echo generate js file
rem call %EXE_DIR%\pbjs -t static-module -w default -o %OUT_DIR%\tusach.js proto\tusach_model.proto
call %EXE_DIR%\pbjs -t static-module -w es6 -o %OUT_DIR%\pbjs_tusach.js proto\tusach.proto
echo convert to typescript definition file
call %EXE_DIR%\pbts -o %OUT_DIR%\pbjs_tusach.d.ts.temp %OUT_DIR%\pbjs_tusach.js
echo import { Long } from "protobufjs/minimal"; > %OUT_DIR%\pbjs_tusach.d.ts
echo import * as $protobuf from "protobufjs/minimal"; >> %OUT_DIR%\pbjs_tusach.d.ts
type %OUT_DIR%\pbjs_tusach.d.ts.temp >> %OUT_DIR%\pbjs_tusach.d.ts
