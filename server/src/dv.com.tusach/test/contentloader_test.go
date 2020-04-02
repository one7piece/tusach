package test

import (
	"net/url"
	"testing"

	"dv.com.tusach/logger"
	"dv.com.tusach/maker"
	"dv.com.tusach/util"
)

func TestContentLoader(t *testing.T) {
	logger.Info("Starting TestContentLoader...")
	// set configuration
	util.LoadConfig("config-test.json")

	firstChapter := "https://truyenyy.com/truyen/kiem-lai-phong-hoa-hi-chu-hau-ban-dich/chuong-249.html"
	//firstChapter := "https://truyencuatui.net/truyen/long-thanh/chuong-1-long-thanh/6005936.html"
	//firstChapter := "https://truyencv.com/phuc-thien-thi/chuong-1728/"
	chapterNo := 249
	numChapters := 1
	u, err := url.Parse(firstChapter)
	if err != nil {
		t.Errorf("Invalid chapterUrl: %s", err.Error())
		t.FailNow()
	}
	t.Logf("Hostname: %s\n", u.Hostname())

	contentLoader := maker.ContentLoader{Hostname: u.Hostname()}
	err = contentLoader.Init()
	if err != nil {
		t.Errorf("Error during content loader Init: %s", err.Error())
		t.FailNow()
	}

	chapterUrl := firstChapter
	for i := chapterNo; i < chapterNo+numChapters; i++ {
		_, err = contentLoader.DownloadChapter(10, i, chapterUrl)
		if err != nil {
			t.Errorf("Failed to download chapter: %s\n", err.Error())
			t.FailNow()
		}
		if contentLoader.Chapter.NextChapterUrl == "" {
			t.Errorf("No next chapter url found \n")
			t.FailNow()
		}
		chapterUrl = contentLoader.Chapter.NextChapterUrl
	}

	//time.Sleep(120 * time.Second)
}
