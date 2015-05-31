package main

import (
	//"dv.com.tusach/maker"
	"dv.com.tusach/util"
	"fmt"
	"testing"
)

func TestPackage(t *testing.T) {
	util.LoadConfig("/home/dvan/vshared/dv/tusach/server/tusach-config.json")

	bookPath := util.GetBookPath(2)
	/*
		url := "http://tunghoanh.com/dai-de-tinh-ha/chuong-1-yfTaaab.html"
		site := maker.GetBookSite(url)
		data, err := site.ExecuteRequest(url)
		if err != nil {
			t.Error(err)
		} else {
			util.SaveFile(bookPath+"/OEBPS/chapter0002-raw.html", data)
		}
	*/
	str, err := Parse(bookPath+"/OEBPS/chapter0002-raw.html", bookPath+"/OEBPS/chapter0002.html")
	if err != nil {
		t.Error(err)
	}
	fmt.Println(str)
}
