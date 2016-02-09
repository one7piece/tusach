#!/bin/sh
export parser_ipath=~/home/pi/dev/tusach/server/src/dv.com.tusach/parser
export parser_opath=~/home/pi/webserver/library/parser

go build -o $parser_opath/truyenyy $parser_ipath/truyenyy/truyenyy.go
<<<<<<< HEAD
go build -o $parser_opath/truyencv $parser_ipath/truyencv/truyencv.go
go build -o $parser_opath/webtruyen $parser_ipath/webtruyen/webtruyen.go
go build -o $parser_opath/goctruyen $parser_ipath/goctruyen/goctruyen.go
go build -o $parser_opath/tunghoanh $parser_ipath/tunghoanh/tunghoanh.go
go build -o $parser_opath/vnthuquan $parser_ipath/vnthuquan/vnthuquan.go
go build -o $parser_opath/truyenfull $parser_ipath/truyenfull/truyenfull.go
go build -o $parser_opath/truyenhixx $parser_ipath/truyenhixx/truyenhixx.go
=======
>>>>>>> b0baa12f8f8d4cfe708655934c26a653ca1a8603
