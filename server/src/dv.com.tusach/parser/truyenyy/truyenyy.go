package main

import (
	"bytes"
	"dv.com.tusach/parser"
	"dv.com.tusach/util"
	"errors"
	"fmt"
	"github.com/PuerkitoBio/goquery"
	//"golang.org/x/net/html"
	"io/ioutil"
	"os"
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
		fmt.Println(Validate(url))
	} else {
		str, err := Parse(url, inputFile, outputFile)
		if err != nil {
			fmt.Fprintln(os.Stderr, err.Error())
			os.Exit(1)
		} else {
			fmt.Println(str)
		}
	}
}

func Validate(url string) (string, error) {
	validated := 0
	if strings.Contains(url, "truyenyy.com") {
		validated = 1
	}

	m := map[string]string{"validated": strconv.Itoa(validated)}
	m["batchSize"] = "20"
	m["batchDelaySec"] = "10"
	m["url"] = "http://truyenyy.com"
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
	if err != nil || html == "" {
		return "", errors.New("Error parsing chapter content from: " + inputFile + ". " + err.Error())
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

	str := fmt.Sprintf("\n***chapterTitle=%s\n***nextPageUrl=%s\n", chapterTitle, nextPageUrl)

	return str, nil
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
	textStr := ""
	*chapterTitle = ""
	var buffer bytes.Buffer
	doc.Find("div#id_noidung_chuong").Each(func(i int, s *goquery.Selection) {
		textStr, _ := s.Html()
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

func getNextPageUrl(rawHtml string, html string) (string, error) {
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
