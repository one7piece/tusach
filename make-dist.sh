#!/bin/bash
my_dir=$(cd `dirname $0` && pwd)
export runtime_path=~/runtime
export output_path=$runtime_path/tusach
if [ -z "$1" ] || [ "$1" != "amd64" ] && [ "$1" != "386" ] && [ "$1" != "arm" ] && [ "$1" != "win" ]
then
echo "Usage: make-dist [amd64|386|arm|win]"
exit 1
fi

echo "Building server, current dir: $my_dir output dir: $output_path"
rm -rf $output_path/*
cp -r ./server/library $output_path/
cp ./server/config.json $output_path/
mkdir $output_path
mkdir $output_path/library
mkdir $output_path/library/parser
if [ $? -ne 0 ]; then exit 1; fi
./build-server.sh $1
if [ $? -ne 0 ]; then exit 1; fi

if [ "$2" == "build-client" ]; then
echo "Building client..."
cd ./client
ng build
#ng build --prod
cd ..
fi
echo "Copying client files..."
rm -rf $output_path/html
mkdir $output_path/html
cp -r ./client/dist/tusach/* $output_path/html/

cd ..
echo "Creating tar file..."
chmod +x $output_path/library/make-epub.sh
cd $runtime_path
tar --exclude=tusach.ql --exclude=config.json -czvf $my_dir/tusach.tar.gz tusach
cd $my_dir
