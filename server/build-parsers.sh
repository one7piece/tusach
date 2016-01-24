#!/bin/sh
export parser_ipath=~/home/pi/dev/tusach/server/src/dv.com.tusach/parser
export parser_opath=~/home/pi/webserver/library/parser

go build -o $parser_opath/truyenyy $parser_ipath/truyenyy/truyenyy.go
