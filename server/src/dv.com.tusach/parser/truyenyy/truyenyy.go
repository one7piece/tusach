package main

import (
	//"bytes"
	"dv.com.tusach/logger"
	"dv.com.tusach/parser"
	"dv.com.tusach/util"
	"encoding/json"
	"fmt"
	"github.com/PuerkitoBio/goquery"
	"io/ioutil"
	"os"
	"strconv"
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
		fmt.Println(str)
	}
}

type Truyenyy struct {
}

func (p Truyenyy) Validate(url string) (string, error) {
	validated := 0
	if strings.Contains(url, "truyenyy") {
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
	elm := doc.Find("div#id_noidung_chuong").First()
	if elm != nil {
		textStr, err = elm.Html()
		if err == nil {
			logger.Debug("******* Chapter Html *******\n" + textStr)
		} else {
			return "", err
		}
	}

	elm = doc.Find("div#noidungtruyen h1").First()
	if elm != nil {
		*chapterTitle = elm.Text()
	}

	chapterHtml := ""
	if textStr != "" {
		templateHtml := string(template)
		index := strings.Index(templateHtml, "</body>")
		chapterHtml = templateHtml[0:index] + textStr + "</body></html>"
	}
	logger.Debugf("chapter title: ", *chapterTitle)
	return chapterHtml, nil
}

func (p Truyenyy) GetNextPageUrl(rawHtml string, html string) (string, error) {
	doc, err := goquery.NewDocumentFromReader(strings.NewReader(rawHtml))
	if err != nil {
		return "", err
	}
	nextPageUrl := ""
	doc.Find("body").Find(".mobi-chuyentrang a").Each(func(i int, s *goquery.Selection) {
		txt := s.Text()
		if strings.TrimSpace(txt) == "Sau" {
			link, _ := s.Attr("href")
			nextPageUrl = link
			return
		}
	})
	return nextPageUrl, nil
}
