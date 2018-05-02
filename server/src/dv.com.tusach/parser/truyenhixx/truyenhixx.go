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
	if strings.Contains(url, "truyen2.hixx") {
		validated = 1
	}

	m := map[string]string{"validated": strconv.Itoa(validated)}
	m["batchSize"] = "50"
	m["batchDelaySec"] = "10"
	m["url"] = "http://truyen2.hixx.info"
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
	*chapterTitle = ""
	var buffer bytes.Buffer
	doc.Find("body").Find("td").Each(func(i int, td *goquery.Selection) {
		clazz, _ := td.Attr("class")
		if clazz == "chi_tiet" {
			td.Contents().Each(func(i int, s *goquery.Selection) {
				if s.Text() != "" {
					buffer.WriteString("<br/>")
					buffer.WriteString(s.Text())
				}
			})
		}

	})

	index := strings.Index(rawHtml, "class=\"chi_tiet\"")
	if index > 200 {
		*chapterTitle = parser.GetChapterTitle(rawHtml[index-200:])
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

func getIndexOf(source string, search string, offset int) int {
	index := strings.Index(source[offset:], search)
	if index != -1 {
		index = index + offset
	}
	return index
}

func getNextPageUrl(rawHtml string, html string) (string, error) {
	var buf bytes.Buffer
	index := getIndexOf(rawHtml, "function page_next()", 0)
	if index != -1 {
		index1 := getIndexOf(rawHtml, "http://", index)
		index2 := getIndexOf(rawHtml, "}", index)
		if index1 != -1 && index1 < index2 {
			for j := index1; j < index2; j++ {
				c := rawHtml[j]
				if c != '+' && c != '\'' && c != ' ' && c != ';' {
					buf.WriteByte(c)
				}
				if c == ';' {
					break
				}
			}
		}
	}
	nextPageUrl := buf.String()

	return nextPageUrl, nil
}
