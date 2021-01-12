@echo off
@echo off
set DART_SDK=c:\lang\flutter\bin\cache\dart-sdk
set PROTO_DIR=%~dp0
set PROTO_DIR=%PROTO_DIR:\bin\=%
set OUT_DIR=%PROTO_DIR%\generated\dart
set PATH=%PATH%;%DART_SDK%\bin;C:\Users\dvan\AppData\Roaming\Pub\Cache\bin

echo generating dart client from proto file. Ensure that you've installed and configure:
echo 1. dart sdk
echo 2. dart protoc_plugin
pause
mkdir %OUT_DIR%
.\protoc.exe -I=%PROTO_DIR% tusach.proto --dart_out=grpc:%OUT_DIR% 
