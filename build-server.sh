#!/bin/bash
arch=linux
echo "GOPATH: $GOPATH"
cd server
if [ "$1" == "" ] || [ "$1" == "linux" ]; then
echo building tusach server, output: dist/tusach-linux
go build -v -o ../dist/tusach-linux dv.com.tusach/app
else
echo cross compile tusach server, output: dist/tusach-$1
env GOOS=linux GOARCH=$1 go build -v -o ../dist/tusach-$1 dv.com.tusach/app
fi
cd ..
