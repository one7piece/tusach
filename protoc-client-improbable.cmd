@echo off
echo generating typescript from proto file using Improbable 'protoc-gen-ts' 
echo Ensure that you've installed the following packages:
echo 'ts-protoc-gen' (eg. npm install ts-protoc-gen), required to generate typescript files
echo 'google-protobuf' (eg. npm install --save google-protobuf)
echo '@improbable-eng/grpc-web' (eg. npm install --save @improbable-eng/grpc-web)
echo

set PROTO_DIR=.\proto
set OUT_DIR=.\client\src\typings
set PROTOC_GEN_TS_PATH=.\client\node_modules\.bin\protoc-gen-ts.cmd

protoc.exe --plugin=protoc-gen-ts=%PROTOC_GEN_TS_PATH% --js_out=import_style=commonjs,binary:%OUT_DIR% --ts_out=service=true:%OUT_DIR% -I=%PROTO_DIR% tusach.proto
