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

func main() {
	site := Webtruyen{}
	str, err := parser.Execute(site)
	if err != nil {
		fmt.Fprintln(os.Stderr, err.Error())
		os.Exit(1)
	} else {
		fmt.Println(str)
	}
}

type Webtruyen struct {
}

func (p Webtruyen) Validate(url string) (string, error) {
	validated := 0
	if strings.Contains(url, "webtruyen") {
		validated = 1
	}

	m := map[string]string{"validated": strconv.Itoa(validated)}
	m["batchSize"] = "50"
	m["batchDelaySec"] = "10"
	m["url"] = "http://webtruyen.com"
	json, _ := json.Marshal(m)
	return "\nparser-output:" + string(json) + "\n", nil
}

func (p Webtruyen) Parse(chapterUrl string, inputFile string, outputFile string) (string, error) {
	return parser.DefaultParse(p, chapterUrl, inputFile, outputFile, 10, 2)
}

func (p Webtruyen) GetChapterHtml(rawHtml string, chapterTitle *string) (string, error) {
	template, err := ioutil.ReadFile(util.GetConfiguration().LibraryPath + "/template.html")
	if err != nil {
		return "", err
	}

	doc, err := goquery.NewDocumentFromReader(strings.NewReader(rawHtml))
	if err != nil {
		return "", err
	}

	*chapterTitle = ""
	elm := doc.Find("h3[class='detailchapter']").First()
	if elm != nil {
		*chapterTitle = elm.Text()
	}

	var buffer bytes.Buffer
	elm = doc.Find("div[id='content']").First()
	if elm != nil {
		html, err := elm.Html()
		if err == nil {
			logger.Debugf("page html: %s" + html)
			buffer.WriteString(html)
		}
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

func (p Webtruyen) GetNextPageUrl(rawHtml string, html string) (string, error) {
	doc, err := goquery.NewDocumentFromReader(strings.NewReader(rawHtml))
	if err != nil {
		return "", err
	}
	nextPageUrl := ""
	elm := doc.Find("a[id='nextchap']").First()
	if elm != nil {
		link, _ := elm.Attr("href")
		nextPageUrl = link
	}
	return nextPageUrl, nil
}
