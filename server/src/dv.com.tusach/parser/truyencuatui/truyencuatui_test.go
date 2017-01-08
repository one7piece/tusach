package main

import (
	"fmt"
	"os/exec"
	"testing"

	"dv.com.tusach/util"
)

func TestPackage(t *testing.T) {
	util.LoadConfig("/dev/dv/tusach/server/config-test-win.json")

	url := "http://truyencuatui.net/truyen/ho-phach-chi-kiem/chuong-1-nguoi-trong-mong/1003688.html"
	name := "truyencuatui"
	logger.Debug("executing validate command: " + util.GetParserPath() + "/" + name)
	cmd := exec.Command(util.GetParserPath()+"/"+name,
		"-configFile="+util.GetConfigFile(), "-op=v",
		"-url="+url)
	out, err := cmd.CombinedOutput()
	logger.Debug("command output: " + string(out))
	if err != nil {
		logger.Debug("Error validating url. " + err.Error())
	}

	bookPath := util.GetBookPath(9999)

	site := Truyencuatui{}

	str, err := site.Parse(url, bookPath+"/OEBPS/chapter0001-raw.html", bookPath+"/OEBPS/chapter0001.html")
	if err != nil {
		t.Error(err)
	}
	fmt.Println(str)
	fmt.Println(str)
}
