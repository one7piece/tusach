@echo off
echo generating typescript from proto file using google grpc-web
echo Ensure that you've installed protoc-gen-grpc-web.exe from https://github.com/grpc/grpc-web/releases
echo and make sure that protoc-gen-grpc-web.exe is on the $PATH (eg. add $GOPATH/bin to $PATH)

set PROTO_DIR=.\proto
set OUT_DIR=.\client\src\typings

rem generate commonjs
rem protoc.exe -I=%PROTO_DIR% tusach.proto --js_out=import_style=commonjs:%OUT_DIR% --grpc-web_out=import_style=commonjs,mode=grpcwebtext:%OUT_DIR%

rem NOTE: plugins=grpc is required to generate correct service stub  
rem and --js_out=import_style=common.js:
protoc.exe -I=%PROTO_DIR% tusach.proto --js_out=import_style=commonjs:%OUT_DIR% --grpc-web_out=import_style=typescript,mode=grpcwebtext:%OUT_DIR%
