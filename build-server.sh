#!/bin/bash
arch=linux
output_path=~/runtime/tusach
echo "GOPATH: $GOPATH"
cd server
if [ "$1" == "" ] || [ "$1" == "linux" ]; then
echo building tusach server, output: $output_path/tusach-linux
go build -v -o $output_path/tusach-linux dv.com.tusach/app
else
echo cross compile tusach server, output: $output_path/tusach-$1
env GOOS=linux GOARM=7 GOARCH=$1 go build -v -o $output_path/tusach-$1 dv.com.tusach/app
fi
cd ..
