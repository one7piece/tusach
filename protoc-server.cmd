@echo off
echo Generating go files from .proto file
echo Ensure that you've installed the following:
echo a) protoc compiler
echo b) google.golang.org/grpc package
echo c) github.com/golang/protobuf/protoc-gen-go
echo Note that the env PATH should include the path of protoc-gen.go.exe (default to $GOPATH\bin)
pause
set PROTO_DIR=.\proto
set GOSRC_DIR=.\server\src\dv.com.tusach
if exist %GOSRC_DIR%\model\tusach.pb.go (
  del /Q %GOSRC_DIR%\model\tusach.pb.go
)
rem NOTE: plugins=grpc is required to generate correct service stub
protoc.exe -I=%PROTO_DIR% --go_out=plugins=grpc:%GOSRC_DIR%/model tusach.proto

