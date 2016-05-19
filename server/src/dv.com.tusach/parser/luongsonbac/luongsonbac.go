package main

import (
	"bytes"
	"dv.com.tusach/parser"
	"dv.com.tusach/util"
	//"errors"
	"encoding/json"
	"fmt"
	"github.com/PuerkitoBio/goquery"
	"io/ioutil"
	"os"
	"strconv"
	"strings"
)

func main() {
	site := Luongsonbac{}
	str, err := parser.Execute(site)
	if err != nil {
		fmt.Fprintln(os.Stderr, err.Error())
		os.Exit(1)
	} else {
		fmt.Println(str)
	}
}

type Luongsonbac struct {
}

func (p Luongsonbac) Validate(url string) (string, error) {
	validated := 0
	if strings.Contains(url, "lsb-thuquan") {
		validated = 1
	}

	m := map[string]string{"validated": strconv.Itoa(validated)}
	m["batchSize"] = "50"
	m["batchDelaySec"] = "10"
	m["url"] = "http://www.lsb-thuquan.eu"
	json, _ := json.Marshal(m)
	return "\nparser-output:" + string(json) + "\n", nil
}

func (p Luongsonbac) Parse(chapterUrl string, inputFile string, outputFile string) (string, error) {
	return parser.DefaultParse(p, chapterUrl, inputFile, outputFile, 10, 2)
}

func (p Luongsonbac) GetChapterHtml(rawHtml string, chapterTitle *string) (string, error) {
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
	doc.Find("td[class='alt1']").Each(func(i int, sel *goquery.Selection) {
		sel.Find("div[class='maincontent']").Each(func(i int, sel2 *goquery.Selection) {
			html, _ := sel.Html()
			fmt.Println("Html\n" + html);
			buffer.WriteString(html)
			buffer.WriteString("<br><br><br>")
			// add new page
			str := parser.GetChapterTitle(html)
			if str != "" {
				if title1 == "" {
					title1 = str
					*chapterTitle = title1
				} else {
					*chapterTitle = title1 + "/" + str
				}
			}
			return;
		})
	})

	chapterHtml := ""
	textStr := buffer.String()
	if textStr != "" {
		templateHtml := string(template)
		index := strings.Index(templateHtml, "</body>")
		chapterHtml = templateHtml[0:index] + textStr + "</body></html>"
	}
	//fmt.Println("chapter title: ", *chapterTitle)
	return chapterHtml, nil
}

func (p Luongsonbac) GetNextPageUrl(rawHtml string, html string) (string, error) {
	doc, err := goquery.NewDocumentFromReader(strings.NewReader(rawHtml))
	if err != nil {
		return "", err
	}
	nextPageUrl := ""
	doc.Find("a").Each(func(i int, s *goquery.Selection) {
		if strings.TrimSpace(s.Text()) == "»" {
			link, _ := s.Attr("href")
			nextPageUrl = link
			return
		}
	})
	return nextPageUrl, nil
}
