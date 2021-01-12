#!/bin/bash

my_dir=$(cd `dirname $0` && pwd)

# 'export' export the variable to child processes of the shell, so variables exported in setenv.sh is not visible in the
# parent script (ie. this script). Use source to execute the script commands in the current shell environment
source ./setenv.sh

if [ -z "$1" ] || [ "$1" != "amd64" ] && [ "$1" != "arm" ] && [ "$1" != "win" ] && [ "$1" != "arm64" ] && [ "$1" != "all" ]
then
echo "Usage: make-dist [amd64|arm|arm64|win|all]"
exit 1
fi

if ! [ -d ./server/library.bak ]; then
mkdir ./server/library.bak
fi
# backup books
cp -r $output_path/library/books ./server/library.bak/

rm -rf $output_path/*

source ./build-server.sh $1

source ./build-client.sh

echo "Creating tar file..."
chmod +x $output_path/library/*.sh
chmod +x $output_path/*.sh
chmod +x $output_path/tusach_*
cd $output_path
# tar -czvf $my_dir/tusach-$1.tar.gz .
