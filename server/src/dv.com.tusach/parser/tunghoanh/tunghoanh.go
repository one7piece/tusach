package main

import (
	"bytes"
	"dv.com.tusach/parser"
	"dv.com.tusach/util"
	"errors"
	"fmt"
	"github.com/PuerkitoBio/goquery"
	//"golang.org/x/net/html"
	"encoding/json"
	"io/ioutil"
	//"log"
	"dv.com.tusach/logger"
	"os"
	"strconv"
	"strings"
)

func main() {
	var configFile string
	var op string
	var url string
	var inputFile string
	var outputFile string

	err := parser.ReadArgs(&configFile, &op, &url, &inputFile, &outputFile)
	if err != nil {
		fmt.Fprintln(os.Stderr, err.Error())
		os.Exit(1)
	}

	// load configuration
	util.LoadConfig(configFile)

	if op == "v" {
		logger.Debug(Validate(url))
	} else {
		str, err := Parse(url, inputFile, outputFile)
		if err != nil {
			fmt.Fprintln(os.Stderr, err.Error())
			os.Exit(1)
		} else {
			fmt.Println(str)
			fmt.Println(str)
		}
	}
}

func Validate(url string) (string, error) {
	validated := 0
	if strings.Contains(url, "tunghoanh") {
		validated = 1
	}

	m := map[string]string{"validated": strconv.Itoa(validated)}
	m["batchSize"] = "50"
	m["batchDelaySec"] = "10"
	m["url"] = "http://tunghoanh.com"
	json, _ := json.Marshal(m)
	return "\nparser-output:" + string(json) + "\n", nil
}

func Parse(chapterUrl string, inputFile string, outputFile string) (string, error) {
	// load the request
	headers := map[string]string{}
	form := map[string]string{}
	responseBytes, err := parser.ExecuteRequest("GET", chapterUrl, 10, 2, headers, form)
	if err != nil {
		return "", err
	}
	rawHtml := string(responseBytes)
	// save raw file
	err = util.SaveFile(inputFile, responseBytes)
	if err != nil {
		return "", errors.New("Error saving file: " + inputFile + ". " + err.Error())
	}

	chapterTitle := ""
	html, err := getChapterHtml(rawHtml, &chapterTitle)
	if err != nil {
		return "", errors.New("Error parsing chapter content from: " + inputFile + ". " + err.Error())
	}
	if html == "" {
		return "", errors.New("Error parsing chapter content from: " + inputFile + ". No data.")
	}

	nextPageUrl, err := getNextPageUrl(rawHtml, html)
	if err != nil {
		return "", errors.New("Error parsing nextPageUrl from: " + inputFile + ". " + err.Error())
	}

	// write to file
	err = util.SaveFile(outputFile, []byte(html))
	if err != nil {
		return "", errors.New("Error writing to file: " + outputFile + ". " + err.Error())
	}

	m := map[string]string{"chapterTitle": chapterTitle, "nextPageUrl": nextPageUrl}
	json, _ := json.Marshal(m)
	return "\nparser-output:" + string(json) + "\n", nil
}

func getChapterHtml(rawHtml string, chapterTitle *string) (string, error) {
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
	doc.Find("div#chapter_content").Each(func(i int, s *goquery.Selection) {
		s.Find("p, br, span:not([style*=\"font-size: 0\"], [style*=\"font-size: 1.\"])").Each(func(i int, s *goquery.Selection) {
			if len(s.Nodes) == 1 && len(s.Nodes[0].Attr) == 0 {
				if s.Nodes[0].Data == "p" {
					buffer.WriteString("<br/><br/>")
				} else {
					buffer.WriteString("<br/>")
				}
			} else {
				//logger.Infof("\nnode: ---'%s'---\n", s.Text())
				buffer.WriteString(s.Text())
			}
		})
		nodeHtml, err := s.Html()
		if err == nil {
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
	//logger.Debug("chapter title: ", *chapterTitle)
	return chapterHtml, nil
}

func getNextPageUrl(rawHtml string, html string) (string, error) {
	doc, err := goquery.NewDocumentFromReader(strings.NewReader(rawHtml))
	if err != nil {
		return "", err
	}
	nextPageUrl := ""
	doc.Find("body").Find("a").Each(func(i int, s *goquery.Selection) {
		clazz, _ := s.Attr("class")
		if clazz == "next" {
			link, _ := s.Attr("href")
			nextPageUrl = link
			return
		}
	})
	if nextPageUrl != "" && !strings.HasPrefix(nextPageUrl, "http://") {
		if strings.HasPrefix(nextPageUrl, "/") {
			nextPageUrl = "http://tunghoanh.com" + nextPageUrl
		} else {
			nextPageUrl = "http://tunghoanh.com/" + nextPageUrl
		}
	}
	return nextPageUrl, nil
}
