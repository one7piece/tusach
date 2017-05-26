package main

import (
	"bytes"

	"dv.com.tusach/parser"
	"dv.com.tusach/util"
	//"errors"
	"dv.com.tusach/logger"
	"encoding/json"
	"fmt"
	"github.com/PuerkitoBio/goquery"
	"io/ioutil"
	"os"
	"strconv"
	"strings"
)

var myURL = "http://truyencuatui.net"

func main() {
	site := Truyencuatui{}
	str, err := parser.Execute(site)
	if err != nil {
		fmt.Fprintln(os.Stderr, err.Error())
		os.Exit(1)
	} else {
		fmt.Println(str)
		fmt.Println(str)
	}
}

type Truyencuatui struct {
}

func (p Truyencuatui) Validate(url string) (string, error) {
	validated := 0
	if strings.Contains(url, "truyencuatui") {
		validated = 1
	}

	m := map[string]string{"validated": strconv.Itoa(validated)}
	m["batchSize"] = "50"
	m["batchDelaySec"] = "10"
	m["url"] = myURL
	json, _ := json.Marshal(m)
	return "\nparser-output:" + string(json) + "\n", nil
}

func (p Truyencuatui) Parse(chapterUrl string, inputFile string, outputFile string) (string, error) {
	return parser.DefaultParse(p, chapterUrl, inputFile, outputFile, 10, 2)
}

func (p Truyencuatui) GetChapterHtml(rawHtml string, chapterTitle *string) (string, error) {
	template, err := ioutil.ReadFile(util.GetConfiguration().LibraryPath + "/template.html")
	if err != nil {
		return "", err
	}

	doc, err := goquery.NewDocumentFromReader(strings.NewReader(rawHtml))
	if err != nil {
		return "", err
	}

	*chapterTitle = ""
	var buffer bytes.Buffer
	elm := doc.Find("div[class='content chapter-content']").First()
	if elm != nil {
		html, err := elm.Html()
		if err == nil {
			logger.Debugf("page html: %s", html)
			buffer.WriteString(html)
		}
	}

	elm = doc.Find("h1[class='title']").First()
	if elm != nil {
		*chapterTitle = elm.Text()
	}

	chapterHtml := ""
	textStr := buffer.String()
	if textStr != "" {
		templateHtml := string(template)
		index := strings.Index(templateHtml, "</body>")
		chapterHtml = templateHtml[0:index] + textStr + "</body></html>"
	}
	logger.Infof("chapter title: %s", *chapterTitle)
	return chapterHtml, nil
}

func (p Truyencuatui) GetNextPageUrl(rawHtml string, html string) (string, error) {
	doc, err := goquery.NewDocumentFromReader(strings.NewReader(rawHtml))
	if err != nil {
		return "", err
	}
	nextPageUrl := ""
	doc.Find("li[class='next']").Each(func(i int, s *goquery.Selection) {
		elm := s.Find("a").First()
		if elm != nil {
			nextPageUrl, _ = elm.Attr("href")
		}
		return
	})
	if !strings.HasPrefix(nextPageUrl, "http://") {
		if strings.HasPrefix(nextPageUrl, "/") {
			nextPageUrl = myURL + nextPageUrl
		} else {
			nextPageUrl = myURL + "/" + nextPageUrl
		}
	}
	return nextPageUrl, nil
}