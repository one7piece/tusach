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
		str, err := Parse(inputFile, outputFile)
		if err != nil {
			fmt.Fprintln(os.Stderr, err.Error())
			os.Exit(1)
		} else {
			fmt.Println(str)
		}
	}
}

func Validate(url string) (string, error) {
	if strings.Contains(url, "truyen2.hixx") {
		return "\n***validated=true", nil
	}
	return "\n***validated=false", nil
}

func Parse(inputFile string, outputFile string) (string, error) {
	data, err := ioutil.ReadFile(inputFile)
	if err != nil {
		return "", errors.New("Error reading file: " + inputFile + ". " + err.Error())
	}
	rawHtml := string(data)
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

	chapterHtml := ""
	textStr := buffer.String()
	if textStr != "" {
		*chapterTitle = parser.GetChapterTitle(textStr)

		templateHtml := string(template)
		index := strings.Index(templateHtml, "</body>")
		chapterHtml = templateHtml[0:index] + textStr + "</body></html>"
	}
	//fmt.Println("chapter title: ", *chapterTitle)
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
