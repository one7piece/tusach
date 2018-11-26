#!/bin/bash
if [ "$output_path" == "" ]; then
output_path=~/runtime/tusach
fi

echo "GOPATH: $GOPATH"
cd server
if [ "$1" == "arm" ]; then
echo cross compile tusach server, output: $output_path/tusach-$1
env GOOS=linux GOARM=7 GOARCH=$1 go build -v -tags purego -o $output_path/tusach-$1 dv.com.tusach/app
elif [ "$1" == "amd64" ] || [ "$1" == "386" ]; then
echo building tusach server, output: $output_path/tusach-linux
env GOOS=linux GOARCH=$1 go build -v -tags purego -o $output_path/tusach-linux dv.com.tusach/app
fi
cd ..
