package parser

import (
	"bytes"

	"dv.com.tusach/util"
	//"errors"
	"encoding/json"
	"io/ioutil"
	"strconv"
	"strings"

	"dv.com.tusach/logger"
	"github.com/PuerkitoBio/goquery"
)

// default parser
type DefaultParser struct {
}

func New() (p DefaultParser) {
	site := DefaultParser{}
	return site
}

func (p DefaultParser) Validate(url string) (string, error) {
	validated := 1
	m := map[string]string{"validated": strconv.Itoa(validated)}
	m["batchSize"] = "50"
	m["batchDelaySec"] = "10"
	m["url"] = url
	json, _ := json.Marshal(m)
	return "\nparser-output:" + string(json) + "\n", nil
}

func (p DefaultParser) Parse(chapterUrl string, inputFile string, outputFile string) (string, error) {
	return DefaultParse(p, chapterUrl, inputFile, outputFile, 10, 2)
}

func (p DefaultParser) GetRequestHeader(chapterUrl string) map[string]string {
	headers := map[string]string{}
	headers["referer"] = chapterUrl
	return headers
}

func (p DefaultParser) GetChapterHtml(rawHtml string, chapterTitle *string) (string, error) {
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

	doc.Find("div").Each(func(i int, s *goquery.Selection) {
		var elm = s.Find("div").First()
		if elm == nil {
			html, err := s.Html()
			logger.Infof("found inner div: %s", html)
			if err == nil && len(html) > 1000 {
				logger.Debugf("page html: %s", html)
				buffer.WriteString(html)
			}
		}
	})
	var elm = doc.Find("h1[class='title']").First()
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

func (p DefaultParser) GetNextPageUrl(rawHtml string, html string) (string, error) {
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
