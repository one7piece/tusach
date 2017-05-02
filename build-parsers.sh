#!/bin/bash

echo "GOPATH: $GOPATH"
export parser_ipath=/home/dvan/dev/tusach/server/src/dv.com.tusach/parser
export parser_opath=/home/dvan/dev/tusach/dist/library/parser
if [ ! -d "$parser_opath" ]; then
mkdir $parser_opath
fi

declare -a parsers=("truyenyy" "truyencv" "webtruyen" "goctruyen" "tunghoanh" "vnthuquan" "truyenfull" "truyenhixx" "truyencuatui")

arch=linux
if [ "$1" == "" ] || [ "$1" == "linux" ]; then
echo "building tusach parsers for linux"
for p in "${parsers[@]}"
do
  echo building parser: $p
  go build -o $parser_opath/$p $parser_ipath/$p/$p.go
done
else
echo "cross compile tusach parsers for $1"
for p in "${parsers[@]}"
do
  echo building parser: $p
  env GOOS=linux GOARCH=$1 go build -o $parser_opath/$p $parser_ipath/$p/$p.go
done

fi
