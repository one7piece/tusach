package test

import (
	"io/ioutil"
	"testing"

	"dv.com.tusach/logger"
	"dv.com.tusach/maker"
	"dv.com.tusach/util"
)

type Parser_Test struct {
	configFile string
	parserFile string
}

func TestParser(t *testing.T) {
	logger.Info("TestParser starting...")

	o := Parser_Test{configFile: "config-test.json", parserFile: "../../../library/parser.js"}

	o.setup(t)
	defer func() {
		o.cleanup(t)
	}()

	o.testParser(t, "https://truyenyy.com/truyen/doc-sam-thien-nhai/chuong-1.html", "truyenyy-DocSamThienNhai")
	//o.testParser(t, "https://bachngocsach.com/reader/binh-thien-sach-convert/rlwz", "bachngocsach-BinhThienSach")
	//o.testParser(t, "http://truyencv.com/dai-dao-trieu-thien/chuong-1/", "truyencv-DaiDaoTrieuThien")
	//o.testParser(t, "http://truyenfull.vn/toan-chuc-cao-thu/chuong-1/", "truyenfull-ToanChucCaoThu")
	//o.testParser(t, "http://truyencuatui.net/truyen/trach-thien-ky/quyen-i-dong-hoc-thieu-nien-chuong-1-ta-doi-y/317713.html", "truyencuatui-TrachThienKy")
}

func (o Parser_Test) setup(t *testing.T) {
	// set configuration
	util.LoadConfig(o.configFile)
}

func (o Parser_Test) cleanup(t *testing.T) {
	logger.Info("clean up...")
}

func (o Parser_Test) testParser(t *testing.T, chapterURL string, title string) {
	bookMaker := maker.BookMaker{}

	data, err := ioutil.ReadFile(o.parserFile)
	if err != nil {
		t.Errorf("Failed to load %s: %s\n", o.parserFile, err)
		t.FailNow()
	}
	engine, err := bookMaker.Compile(data)
	if err != nil {
		t.Errorf("Error compiling parser.js: %s\n", err.Error())
		t.FailNow()
	}

	prefix := util.GetConfiguration().LibraryPath + "/" + title
	chapterTitle, nextChapterURL, err := bookMaker.Parse(engine, chapterURL, prefix+"_raw.html", prefix+".html", 10, 1)
	if err != nil {
		t.Errorf("Failed to parse %s - %s\n", chapterURL, err)
		t.FailNow()
	}
	t.Logf("chapterTitle: %s", chapterTitle)
	t.Logf("nextChapterURL: %s", nextChapterURL)
}
