package main

import (
	"dv.com.tusach/maker"
	"dv.com.tusach/util"
	"fmt"
	//"os/exec"
	"testing"
)

func TestPackage(t *testing.T) {
	util.LoadConfig("/home/dvan/dev/gtusach/server/tusach-config.json")

	url := "http://truyen2.hixx.info/truyen/truyen-kiem-hiep/327272/Nhat-Nguyet-Duong-Khong/Chuong-2-Bi-tu.html"
	site := maker.GetBookSite(url)
	data, err := site.ExecuteRequest(url)
	if err != nil {
		t.Error(err)
	} else {
		util.SaveFile(util.GetConfiguration().LibraryPath+"/test-raw.html", data)
	}

	str, err := Parse(util.GetConfiguration().LibraryPath+"/test-raw.html", util.GetConfiguration().LibraryPath+"/test-filter.html")
	if err != nil {
		t.Error(err)
	}
	fmt.Println(str)
	fmt.Println(str)

}
