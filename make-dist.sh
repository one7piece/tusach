#!/bin/bash

if [ -z "$1" ] || [ "$1" != "linux" ] && [ "$1" != "arm" ] 
then
echo "Usage: make-dist [linux|arm]"
exit 1
fi

echo "Building server..."
rm -rf ./dist/*
cp -r ./server/library ./dist/
cp ./server/config.json ./dist/
if [ $? -ne 0 ]; then exit 1; fi
./build-server.sh $1
if [ $? -ne 0 ]; then exit 1; fi
./build-parsers.sh $1
if [ $? -ne 0 ]; then exit 1; fi

echo "Building client..."
./make-client.sh 

echo "Creating tar file..."
chmod +x dist/library/make-epub.sh
chmod +x dist/library/parser/*
tar -czvf tusach.tar.gz dist --exclude=tusach-linux --exclude=tusach.ql

