package main

import (
	"dv.com.tusach/util"
	"fmt"
	"os/exec"
	"testing"
)

func TestPackage(t *testing.T) {
	util.LoadConfig("/dev/dv/tusach/server/config-test-win.json")

	url := "http://goctruyen.com/toan-chuc-cao-thu/cao-thu-bi-truc-xuat_351604.html"
	name := "goctruyen"
	fmt.Println("executing validate command: " + util.GetParserPath() + "/" + name)
	cmd := exec.Command(util.GetParserPath()+"/"+name,
		"-configFile="+util.GetConfigFile(), "-op=v",
		"-url="+url)
	out, err := cmd.CombinedOutput()
	fmt.Println("command output: " + string(out))
	if err != nil {
		fmt.Println("Error validating url. " + err.Error())
	}

	bookPath := util.GetBookPath(9999)

	site := Goctruyen{}
	
	str, err := site.Parse(url, bookPath+"/OEBPS/chapter0001-raw.html", bookPath+"/OEBPS/chapter0001.html")
	if err != nil {
		t.Error(err)
	}
	fmt.Println(str)

}
