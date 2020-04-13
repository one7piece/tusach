#!/bin/bash
#export GOPATH=/c/dev/GO:/c/dev/dvan/github/tusach/server:/mnt/c/dev/tusach/server

if [ "$output_path" == "" ]; then
export base_dir=$(cd `dirname $0` && pwd)
export output_path=$base_dir/dist
echo "output_path variable not set, set to default: $output_path"
fi

if [ ! -d "$output_path" ]; then 
mkdir $output_path
fi
