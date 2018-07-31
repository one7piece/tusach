#!/bin/bash

output_path=~/runtime/tusach
if [ -z "$1" ] || [ "$1" != "linux" ] && [ "$1" != "arm" ] 
then
echo "Usage: make-dist [linux|arm]"
exit 1
fi

echo "Building server..."
rm -rf $output_path/*
cp -r ./server/library $output_path/
cp ./server/config.json $output_path/
mkdir $output_path/library/parser
cp ./server/src/dv.com.tusach/parser/parser.js $output_path/library/parser/
if [ $? -ne 0 ]; then exit 1; fi
./build-server.sh $1
if [ $? -ne 0 ]; then exit 1; fi

echo "Building client..."
./make-client.sh 

echo "Creating tar file..."
chmod +x $output_path/library/make-epub.sh
tar -czvf tusach.tar.gz $output_path --exclude=tusach-linux --exclude=tusach.ql --exclude=config.json

