package main

import (
	"dv.com.tusach/util"
	"fmt"
	"os/exec"
	"testing"
)

func TestPackage(t *testing.T) {
	util.LoadConfig("/dev/dv/tusach/server/config-test-win.json")

	url := "http://www.lsb-thuquan.eu/index.php/kiem-than-tam-tac-gia-thuy-bach-van-134324220.html?page=2&ipp=10"
	name := "luongsonbac"
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

	site := Luongsonbac{}

	str, err := site.Parse(url, bookPath+"/OEBPS/chapter0001-raw.html", bookPath+"/OEBPS/chapter0001.html")
	if err != nil {
		t.Error(err)
	}
	fmt.Println(str)
}
