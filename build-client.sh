#!/bin/bash

# 'export' export the variable to child processes of the shell, so variables exported in setenv.sh is not visible in the
# parent script (ie. this script). Use source to execute the script commands in the current shell environment
source ./setenv.sh

echo "Building client, output_path: $output_path"
cd ./client
ng.cmd build
#ng.cmd build --prod

if [ -d "$output_path/html" ]; then
echo "clean client directory $output_path/html"
rm -rf $output_path/html/*
else 
echo "create client directory $output_path/html"
mkdir $output_path/html
fi

echo "Copying client files..."
cp -r ./dist/tusach/* $output_path/html/
cd ..

