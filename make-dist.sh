#!/bin/bash

my_dir=$(cd `dirname $0` && pwd)

# 'export' export the variable to child processes of the shell, so variables exported in setenv.sh is not visible in the
# parent script (ie. this script). Use source to execute the script commands in the current shell environment
source ./setenv.sh

if [ -z "$1" ] || [ "$1" != "amd64" ] && [ "$1" != "386" ] && [ "$1" != "arm" ] && [ "$1" != "win" ]
then
echo "Usage: make-dist [amd64|386|arm|win]"
exit 1
fi

rm -rf $output_path/*

source ./build-server.sh $1

source ./build-client.sh $1

echo "Creating tar file..."
chmod +x $output_path/library/*.sh
chmod +x $output_path/*.sh
chmod +x $output_path/tusach
cd $output_path
tar -czvf $my_dir/tusach-$1.tar.gz .
