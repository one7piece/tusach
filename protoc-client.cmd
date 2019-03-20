@echo off
echo generating typescript from proto file
echo Ensure that you've installed protoc-gen-grpc-web.exe from https://github.com/grpc/grpc-web/releases
echo and make sure that protoc-gen-grpc-web.exe is on the $PATH (eg. add $GOPATH/bin to $PATH)

set PROTO_DIR=.\proto
set OUT_DIR=.\client\src\typings
rem NOTE: plugins=grpc is required to generate correct service stub
rem protoc.exe -I=%PROTO_DIR% tusach.proto --js_out=import_style=commonjs+dts:%OUT_DIR% --grpc-web_out=import_style=commonjs+dts,mode=grpcwebtext:%OUT_DIR%
protoc.exe -I=%PROTO_DIR% tusach.proto --js_out=import_style=typescript:%OUT_DIR% --grpc-web_out=import_style=typescript,mode=grpcwebtext:%OUT_DIR%
