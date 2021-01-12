#!/bin/bash

# 'export' export the variable to child processes of the shell, so variables exported in setenv.sh is not visible in the
# parent script (ie. this script). Use source to execute the script commands in the current shell environment
source ./setenv.sh

echo "GOPATH: $GOPATH"
echo "compile server, output_path: $output_path"

cd $base_dir/server/src/dv.com.tusach
echo go compile for $1, output: $output_path/tusach
if [ "$1" == "arm" ]; then
env GOOS=linux GOARM=7 GOARCH=$1 go build -v -tags purego -o $output_path/tusach dv.com.tusach/app
elif [ "$1" == "arm64" ]; then
env GOOS=linux GOARCH=$1 go build -v -tags purego -o $output_path/tusach dv.com.tusach/app
elif [ "$1" == "amd64" ] || [ "$1" == "386" ]; then
env GOOS=linux GOARCH=$1 go build -v -tags purego -o $output_path/tusach dv.com.tusach/app
elif [ "$1" == "win" ]; then
env GOOS=windows GOARCH=amd64 go build -v -tags purego -o $output_path/tusach.exe dv.com.tusach/app
elif [ "$1" == "all" ]; then
echo go compile for linux AMD64
env GOOS=linux GOARCH=amd64 go build -v -tags purego -o $output_path/tusach_amd64 dv.com.tusach/app
echo go compile for linux ARM64
env GOOS=linux GOARCH=arm64 go build -v -tags purego -o $output_path/tusach_arm64 dv.com.tusach/app
echo go compile for windows
env GOOS=windows GOARCH=amd64 go build -v -tags purego -o $output_path/tusach.exe dv.com.tusach/app
else
echo 'Usage: build-server.sh [arm|arm64|amd64|win|all]' 
exit 1
fi

cd $base_dir/server
echo "copying library and configuration files..."
#if [ -d $output_path/library ]; then
#rm -rf $output_path/library
#fi
cp -r ./library $output_path/
cp ./*.json $output_path/
cp ./*.sh $output_path/
cp ./*.cmd $output_path/

if ! [ -d $output_path/library/books ]; then
mkdir $output_path/library/books
fi

if ! [ -d $output_path/oauth2 ]; then
mkdir $output_path/oauth2
fi
cp ./oauth2/* $output_path/oauth2/

if ! [ -d $output_path/envoy ]; then
mkdir $output_path/envoy
fi
cd ..
cp ./envoy/* $output_path/envoy/

