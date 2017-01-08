#!/bin/bash
if [$1 = ""]; then
echo "Usage: build-server.sh <output-file>" 
exit
fi
echo "GOPATH: $GOPATH"
echo building tusach server, output: $1
go build -v -o $1 dv.com.tusach/app
