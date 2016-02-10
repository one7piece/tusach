#!/bin/sh
if [$1 = ""]; then
echo "Usage: build-server.sh <output-file>" 
exit
fi
pushd `dirname $0` > /dev/null
export MYDIR=`pwd`
popd > /dev/null
echo "GOPATH: $GOPATH"
echo Script Dir: $MYDIR

echo building tusach server, output: $1
cd $MYDIR/src
go build -o $1 dv.com.tusach/app/webserver.go
