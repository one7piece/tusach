# note: for cross compile, do not use go install
set GOOS=linux
set GOARCH=arm
set GOARM=7

set home_path=.\
set parser_ipath=%home_path%\server\src\dv.com.tusach/parser
set parser_opath=%home_path%\dist\library\parser
if NOT EXIST %parser_opath% (
mkdir %parser_opath%
)

set parsers=truyenyy truyencv webtruyen goctruyen tunghoanh vnthuquan truyenfull truyenhixx truyencuatui
for %%p IN (%parsers%) do (
  echo building parser: %%p
	go build -v -o %parser_opath%\%%p %parser_ipath%\%%p\%%p.go
)

