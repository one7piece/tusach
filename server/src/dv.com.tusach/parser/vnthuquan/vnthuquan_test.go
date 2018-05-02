package main

import (
	"dv.com.tusach/util"
	"fmt"
	//"os/exec"
	"testing"
)

func TestPackage(t *testing.T) {
	util.LoadConfig("/home/dvan/webserver/tusach-config.json")

	url := "http://vnthuquan.net/truyen/truyen.aspx?tid=2qtqv3m3237n4n1n1ntn31n343tq83a3q3m3237nvn"
	inputFile := util.GetConfiguration().LibraryPath + "/vnthuquan-test-raw.html"
	outputFile := util.GetConfiguration().LibraryPath + "/vnthuquan-test-filter.html"
	outstr, err := Parse(url, inputFile, outputFile)
	if err != nil {
		t.Error(err)
	} else {
		logger.Debug(outstr)
	}
}
