@echo off
set PROTO_DIR=%~dp0
set PROTO_DIR=%PROTO_DIR:\bin\=%
set PATH=%PATH%;%PROTO_DIR%\bin
set OUT_DIR=%PROTO_DIR%\generated\go

echo Generating go files from .proto file
echo Ensure that you've installed (via go get) the following:
echo a) protoc compiler
echo b) google.golang.org/grpc package
echo c) github.com/golang/protobuf/protoc-gen-go
rem echo Note that the env PATH should include the path of protoc-gen-go.exe (default to $GOPATH\bin)
echo proto directory: %PROTO_DIR%
pause
mkdir %OUT_DIR%
rem NOTE: plugins=grpc is required to generate correct service stub
.\protoc.exe -I=%PROTO_DIR% --go_out=plugins=grpc:%OUT_DIR% tusach.proto
