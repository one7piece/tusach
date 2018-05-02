package main

import (
	"bytes"

	"dv.com.tusach/parser"
	"dv.com.tusach/util"
	//"errors"
	"encoding/json"
	"fmt"
	"io/ioutil"
	"os"
	"strconv"
	"strings"

	"dv.com.tusach/logger"
	"github.com/PuerkitoBio/goquery"
)

func main() {
	site := Truyencv{}
	str, err := parser.Execute(site)
	if err != nil {
		fmt.Fprintln(os.Stderr, err.Error())
		os.Exit(1)
	} else {
		fmt.Println(str)
		fmt.Println(str)
	}
}

type Truyencv struct {
}

func (p Truyencv) Validate(url string) (string, error) {
	validated := 0
	if strings.Contains(url, "truyencv") {
		validated = 1
	}

	m := map[string]string{"validated": strconv.Itoa(validated)}
	m["batchSize"] = "50"
	m["batchDelaySec"] = "10"
	m["url"] = "https://truyencv.vn"
	json, _ := json.Marshal(m)
	return "\nparser-output:" + string(json) + "\n", nil
}

func (p Truyencv) Parse(chapterUrl string, inputFile string, outputFile string) (string, error) {
	return parser.DefaultParse(p, chapterUrl, inputFile, outputFile, 10, 2)
}

func (p Truyencv) GetChapterHtml(rawHtml string, chapterTitle *string) (string, error) {
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
	elm := doc.Find("div[id='js-truyencv-content']").First()
	if elm != nil {
		html, err := elm.Html()
		if err == nil {
			logger.Debugf("page html: %s", html)
			buffer.WriteString(html)
		}
	}

	elm = doc.Find("h2[class='title']").First()
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
	logger.Debugf("chapter title: ", *chapterTitle)
	return chapterHtml, nil
}

func (p Truyencv) GetNextPageUrl(rawHtml string, html string) (string, error) {
	doc, err := goquery.NewDocumentFromReader(strings.NewReader(rawHtml))
	if err != nil {
		return "", err
	}
	nextPageUrl := ""
	doc.Find("a").Each(func(i int, s *goquery.Selection) {
		title, _ := s.Attr("title")
		if strings.HasSuffix(title, "Sau") {
			link, _ := s.Attr("href")
			nextPageUrl = link
			return
		}
	})
	return nextPageUrl, nil
}
