package main

import (
	"dv.com.tusach/util"
	"fmt"
	"os/exec"
	"testing"
)

func TestPackage(t *testing.T) {
	util.LoadConfig("/home/dvan/vshared/dv/tusach/server/tusach-config.json")

	url := "http://www.tangthuvien.vn/forum/showthread.php?t=60126"
	name := "tangthuvien"
	fmt.Println("executing validate command: " + util.GetParserPath() + "/" + name)
	cmd := exec.Command(util.GetParserPath()+"/"+name,
		"-configFile="+util.GetConfigFile(), "-op=v",
		"-url="+url)
	out, err := cmd.CombinedOutput()
	fmt.Println("command output: " + string(out))
	if err != nil {
		fmt.Println("Error validating url. " + err.Error())
		return
	}

	bookPath := util.GetBookPath(3)
	/*
		url := "http://www.tangthuvien.vn/forum/showthread.php?t=60126"
		site := maker.GetBookSite(url)
		data, err := site.ExecuteRequest(url)
		if err != nil {
			t.Error(err)
		} else {
			util.SaveFile(bookPath+"/OEBPS/chapter0001-raw.html", data)
		}
	*/

	str, err := Parse(bookPath+"/OEBPS/chapter0001-raw.html", bookPath+"/OEBPS/chapter0001.html")
	if err != nil {
		t.Error(err)
	}
	fmt.Println(str)

}
