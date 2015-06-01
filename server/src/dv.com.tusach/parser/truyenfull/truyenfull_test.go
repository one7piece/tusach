package main

import (
	"dv.com.tusach/maker"
	"dv.com.tusach/util"
	"fmt"
	//"os/exec"
	"testing"
)

func TestPackage(t *testing.T) {
	util.LoadConfig("/home/dvan/webserver/tusach-config.json")

	url := "http://truyenfull.vn/tien-ma-bien/chuong-1/"
	site := maker.GetBookSite(url)
	data, err := site.ExecuteRequest(url)
	if err != nil {
		t.Error(err)
	} else {
		util.SaveFile(util.GetConfiguration().LibraryPath+"/truyenfull-test-raw.html", data)
	}

	str, err := Parse(util.GetConfiguration().LibraryPath+"/truyenfull-test-raw.html", util.GetConfiguration().LibraryPath+"/truyenfull-test-filter.html")
	if err != nil {
		t.Error(err)
	}
	fmt.Println(str)

}
