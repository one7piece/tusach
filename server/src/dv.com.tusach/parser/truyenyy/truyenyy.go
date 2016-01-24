package main

import (
	//"bytes"
	"dv.com.tusach/parser"
	"dv.com.tusach/util"
	//"errors"
	"fmt"
	"github.com/PuerkitoBio/goquery"
	"encoding/json"
	"io/ioutil"
	"strconv"
	"os"
	"strings"
)

func main() {
	site := Truyenyy{}
	str, err := parser.Execute(site)
	if err != nil {
		fmt.Fprintln(os.Stderr, err.Error())
		os.Exit(1)
	} else {
		fmt.Println(str)
	}
}

type Truyenyy struct {
}

func (p Truyenyy) Validate(url string) (string, error) {
	validated := 0
	if strings.Contains(url, "Truyenyy") {
		validated = 1
	}

	m := map[string]string{"validated": strconv.Itoa(validated)}
	m["batchSize"] = "50"
	m["batchDelaySec"] = "10"
	m["url"] = "http://truyenyy.com"
	json, _ := json.Marshal(m)
	return "\nparser-output:" + string(json) + "\n", nil
}

func (p Truyenyy) Parse(chapterUrl string, inputFile string, outputFile string) (string, error) {
	return parser.DefaultParse(p, chapterUrl, inputFile, outputFile, 10, 2)
}

func (p Truyenyy) GetChapterHtml(rawHtml string, chapterTitle *string) (string, error) {
	template, err := ioutil.ReadFile(util.GetConfiguration().LibraryPath + "/template.html")
	if err != nil {
		return "", err
	}

	doc, err := goquery.NewDocumentFromReader(strings.NewReader(rawHtml))
	if err != nil {
		return "", err
	}
	textStr := ""
	*chapterTitle = ""
	//var buffer bytes.Buffer
	doc.Find("div#id_noidung_chuong").Each(func(i int, s *goquery.Selection) {
		textStr, _ = s.Html()
	})

	chapterHtml := ""
	if textStr != "" {
		templateHtml := string(template)
		index := strings.Index(templateHtml, "</body>")
		chapterHtml = templateHtml[0:index] + textStr + "</body></html>"
	}
	//fmt.Println("chapter title: ", *chapterTitle)
	return chapterHtml, nil
}

func (p Truyenyy) GetNextPageUrl(rawHtml string, html string) (string, error) {
	doc, err := goquery.NewDocumentFromReader(strings.NewReader(rawHtml))
	if err != nil {
		return "", err
	}
	nextPageUrl := ""
	doc.Find("body").Find("a").Each(func(i int, s *goquery.Selection) {
		rel, _ := s.Attr("rel")
		if rel == "next" {
			link, _ := s.Attr("href")
			nextPageUrl = link
			return
		}
	})
	if nextPageUrl != "" {
		if strings.HasPrefix(nextPageUrl, "showthread") {
			nextPageUrl = "forum/" + nextPageUrl
		} else if strings.HasPrefix(nextPageUrl, "/showthread") {
			nextPageUrl = "/forum" + nextPageUrl
		}
	}
	if !strings.HasPrefix(nextPageUrl, "http://www.tangthuvien.vn") {
		if strings.HasPrefix(nextPageUrl, "/") {
			nextPageUrl = "http://www.tangthuvien.vn" + nextPageUrl
		} else {
			nextPageUrl = "http://www.tangthuvien.vn/" + nextPageUrl
		}
	}
	return nextPageUrl, nil
}
