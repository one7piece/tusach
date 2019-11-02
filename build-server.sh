#!/bin/bash

# 'export' export the variable to child processes of the shell, so variables exported in setenv.sh is not visible in the
# parent script (ie. this script). Use source to execute the script commands in the current shell environment
source ./setenv.sh

echo "GOPATH: $GOPATH"
echo "compile server, output_path: $output_path"

cd server
echo go compile for $1, output: $output_path/tusach
if [ "$1" == "arm" ]; then
env GOOS=linux GOARM=7 GOARCH=$1 go build -v -tags purego -o $output_path/tusach dv.com.tusach/app
elif [ "$1" == "amd64" ] || [ "$1" == "386" ]; then
env GOOS=linux GOARCH=$1 go build -v -tags purego -o $output_path/tusach dv.com.tusach/app
elif [ "$1" == "win" ]; then
env GOOS=windows GOARCH=amd64 go build -v -tags purego -o $output_path/tusach.exe dv.com.tusach/app
else 
echo 'Usage: build-server.sh [arm|amd64|386|win]'
exit 1
fi

echo "copying library and configuration files..."
#if [ -d $output_path/library ]; then
#rm -rf $output_path/library
#fi
cp -r ./library $output_path/
cp ./*.json $output_path/
cp ./*.sh $output_path/
cp ./*.cmd $output_path/

if ! [ -d $output_path/envoy ]; then
mkdir $output_path/envoy
fi
if ! [ -d $output_path/library/books ]; then
mkdir $output_path/library/books
fi
cd ..
cp ./envoy/* $output_path/envoy/
