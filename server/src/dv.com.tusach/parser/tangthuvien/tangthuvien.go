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
	site := Tangthuvien{}
	str, err := parser.Execute(site)
	if err != nil {
		fmt.Fprintln(os.Stderr, err.Error())
		os.Exit(1)
	} else {
		fmt.Println(str)
		fmt.Println(str)
	}
}

type Tangthuvien struct {
}

func (p Tangthuvien) Validate(url string) (string, error) {
	validated := 0
	if strings.Contains(url, "tangthuvien") {
		validated = 1
	}

	m := map[string]string{"validated": strconv.Itoa(validated)}
	m["batchSize"] = "50"
	m["batchDelaySec"] = "10"
	m["url"] = "http://tangthuvien.com"
	json, _ := json.Marshal(m)
	return "\nparser-output:" + string(json) + "\n", nil
}

func (p Tangthuvien) Parse(chapterUrl string, inputFile string, outputFile string) (string, error) {
	return parser.DefaultParse(p, chapterUrl, inputFile, outputFile, 10, 2)
}

func (p Tangthuvien) GetChapterHtml(rawHtml string, chapterTitle *string) (string, error) {
	template, err := ioutil.ReadFile(util.GetConfiguration().LibraryPath + "/template.html")
	if err != nil {
		return "", err
	}

	doc, err := goquery.NewDocumentFromReader(strings.NewReader(rawHtml))
	if err != nil {
		return "", err
	}
	title1 := ""
	*chapterTitle = ""
	var buffer bytes.Buffer
	doc.Find("div[id*=\"post_message_\"]").Each(func(i int, s *goquery.Selection) {
		nodeHtml, err := s.Html()
		if err == nil {
			buffer.WriteString("<br>")
			nodeText := s.Text()
			// replace \n with <br>
			nodeText = strings.Replace(nodeText, "\n", "<br>", -1)
			buffer.WriteString(nodeText)
			buffer.WriteString("<br><br><br>")
			// add new page
			str := parser.GetChapterTitle(nodeHtml)
			if str != "" {
				if title1 == "" {
					title1 = str
					*chapterTitle = title1
				} else {
					*chapterTitle = title1 + "/" + str
				}
			}
		}
	})

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

func (p Tangthuvien) GetNextPageUrl(rawHtml string, html string) (string, error) {
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
