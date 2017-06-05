package main

import (
	"fmt"
	"os/exec"
	"testing"

	"dv.com.tusach/logger"
	"dv.com.tusach/util"
)

func TestPackage(t *testing.T) {
	util.LoadConfig("/home/dvan/dev/tusach/dist/config.json")

	url := "http://truyencv.com/ho-phach-chi-kiem/chuong-1387/"
	name := "truyencv"
	logger.Info("executing validate command: " + util.GetParserPath() + "/" + name)
	cmd := exec.Command(util.GetParserPath()+"/"+name,
		"-configFile="+util.GetConfigFile(), "-op=v",
		"-url="+url)
	out, err := cmd.CombinedOutput()
	logger.Info("command output: " + string(out))
	if err != nil {
		logger.Info("Error validating url. " + err.Error())
	}

	bookPath := util.GetBookPath(9999)

	site := Truyencv{}

	str, err := site.Parse(url, bookPath+"/OEBPS/chapter0001-raw.html", bookPath+"/OEBPS/chapter0001.html")
	if err != nil {
		t.Error(err)
	}
	fmt.Println(str)
	fmt.Println(str)

}
