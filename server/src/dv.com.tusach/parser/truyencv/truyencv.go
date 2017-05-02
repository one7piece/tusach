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
	doc.Find("body").Find("div").Each(func(i int, td *goquery.Selection) {
		clazz, _ := td.Attr("class")
		if clazz == "chapter" {
			td.Contents().Each(func(i int, s *goquery.Selection) {
				if s.Text() != "" {
					buffer.WriteString("<br/>")
					buffer.WriteString(s.Text())
				}
			})
		}
	})

	index := strings.Index(rawHtml, "id=\"readstory\"")
	if index > 200 {
		*chapterTitle = parser.GetChapterTitle(rawHtml[index:])
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
