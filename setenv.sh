#!/bin/bash
export GOPATH=/c/dev/dvan/github/tusach/server

if [ "$output_path" == "" ]; then
my_dir=$(cd `dirname $0` && pwd)
export output_path=$my_dir/dist
echo "output_path variable not set, set to default: $output_path"
fi

if [ ! -d "$output_path" ]; then 
mkdir $output_path
fi
