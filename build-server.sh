#!/bin/bash

# 'export' export the variable to child processes of the shell, so variables exported in setenv.sh is not visible in the
# parent script (ie. this script). Use source to execute the script commands in the current shell environment
source ./setenv.sh

echo "GOPATH: $GOPATH"
echo "compile server, output_path: $output_path"

if [ "$1" == "clean" ]; then
echo "clean up output path: $output_path"
rm -rI $output_path/*
fi

cd $base_dir/server/src/dv.com.tusach
echo go compile for arm64, output: $output_path/tusach_arm64
env GOOS=linux GOARCH=arm64 go build -v -tags purego -o $output_path/tusach_arm64 dv.com.tusach/app
echo go compile for amd64, output: $output_path/tusach_amd64
env GOOS=linux GOARCH=amd64 go build -v -tags purego -o $output_path/tusach_amd64 dv.com.tusach/app

cd $base_dir/server
echo "copying library and configuration files..."
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

if ! [ -d $output_path/log ]; then
mkdir $output_path/log
fi
