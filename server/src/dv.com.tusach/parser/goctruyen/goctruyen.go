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
	site := Goctruyen{}
	str, err := parser.Execute(site)
	if err != nil {
		fmt.Fprintln(os.Stderr, err.Error())
		os.Exit(1)
	} else {
		fmt.Println(str)
		fmt.Println(str)
	}
}

type Goctruyen struct {
}

func (p Goctruyen) Validate(url string) (string, error) {
	validated := 0
	if strings.Contains(url, "goctruyen") {
		validated = 1
	}

	m := map[string]string{"validated": strconv.Itoa(validated)}
	m["batchSize"] = "50"
	m["batchDelaySec"] = "10"
	m["url"] = "http://goctruyen.com"
	json, _ := json.Marshal(m)
	return "\nparser-output:" + string(json) + "\n", nil
}

func (p Goctruyen) Parse(chapterUrl string, inputFile string, outputFile string) (string, error) {
	return parser.DefaultParse(p, chapterUrl, inputFile, outputFile, 10, 2)
}

func (p Goctruyen) GetChapterHtml(rawHtml string, chapterTitle *string) (string, error) {
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
	doc.Find("div").Each(func(i int, sel *goquery.Selection) {
		clazz, _ := sel.Attr("class")
		if clazz == "content" {
			sel.Find("div[class='author']").Each(func(i int, sel2 *goquery.Selection) {
				*chapterTitle = sel2.Find("h3").First().Text()
				parser.ExtractNodeContents(sel2, &buffer)
			})
			sel.Find("p[class='detailcontent']").Each(func(i int, sel2 *goquery.Selection) {
				html, _ := sel2.Html()
				logger.Debug("Html\n" + html)
				buffer.WriteString(html)
			})

			return
		}
	})

	if *chapterTitle == "" {
		index := strings.Index(rawHtml, "class=\"detailcontent\"")
		if index > 200 {
			*chapterTitle = parser.GetChapterTitle(rawHtml[index-200:])
		}
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

func (p Goctruyen) GetNextPageUrl(rawHtml string, html string) (string, error) {
	doc, err := goquery.NewDocumentFromReader(strings.NewReader(rawHtml))
	if err != nil {
		return "", err
	}
	nextPageUrl := ""
	doc.Find("a").Each(func(i int, s *goquery.Selection) {
		id, _ := s.Attr("id")
		if id == "nextchap" {
			link, _ := s.Attr("href")
			nextPageUrl = link
			return
		}
	})
	return nextPageUrl, nil
}
