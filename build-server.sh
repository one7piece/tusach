#!/bin/bash

# 'export' export the variable to child processes of the shell, so variables exported in setenv.sh is not visible in the
# parent script (ie. this script). Use source to execute the script commands in the current shell environment
source ./setenv.sh

echo "GOPATH: $GOPATH"
echo "compile server, output_path: $output_path"

cd server
if [ "$1" == "arm" ]; then
echo cross compile tusach server, output: $output_path/tusach-$1
env GOOS=linux GOARM=7 GOARCH=$1 go build -v -tags purego -o $output_path/tusach dv.com.tusach/app
elif [ "$1" == "amd64" ] || [ "$1" == "386" ]; then
echo building tusach server, output: $output_path/tusach-$1
env GOOS=linux GOARCH=$1 go build -v -tags purego -o $output_path/tusach dv.com.tusach/app
else 
echo 'Usage: build-server.sh [arm|amd64|386]'
exit 1
fi

echo "copying library and configuration files..."
if [ -d $output_path/library ]; then
rm -rf $output_path/library
fi
cp -r ./library $output_path/
cp ./*.json $output_path/
cp ./*.sh $output_path/
cp ./*.cmd $output_path/

cd ..
