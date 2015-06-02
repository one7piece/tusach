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
	"log"
	"math/rand"
	"os"
	"strconv"
	"strings"
	"time"
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
	validated := 0
	if strings.Contains(url, "vnthuquan.net") {
		validated = 1
	}

	m := map[string]string{"validated": strconv.Itoa(validated)}
	m["batchSize"] = "50"
	m["batchDelaySec"] = "10"
	m["url"] = "http://vnthuquan.net"
	json, _ := json.Marshal(m)
	return "\nparser-output:" + string(json) + "\n", nil
}

func Parse(inputFile string, outputFile string) (string, error) {
	data, err := ioutil.ReadFile(inputFile)
	if err != nil {
		return "", errors.New("Error reading file: " + inputFile + ". " + err.Error())
	}
	rawHtml := string(data)
	chapterTitle := ""
	nextPageUrl := ""
	html, err := getChapterHtml(rawHtml, &chapterTitle, &nextPageUrl)
	if err != nil {
		return "", errors.New("Error parsing chapter content from: " + inputFile + ". " + err.Error())
	}
	if html == "" {
		return "", errors.New("Error parsing chapter content from: " + inputFile + ". No data.")
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

func getChapterHtml(rawHtml string, chapterTitle *string, nextPageUrl *string) (string, error) {
	template, err := ioutil.ReadFile(util.GetConfiguration().LibraryPath + "/template.html")
	if err != nil {
		return "", err
	}
	templateHtml := string(template)

	doc, err := goquery.NewDocumentFromReader(strings.NewReader(rawHtml))
	if err != nil {
		return "", err
	}

	requestData := ""
	doc.Find("div#khungchinh").Each(func(i int, s *goquery.Selection) {
		nodeHtml, err := s.Html()
		if err == nil {
			// extract the tuaid & chuong
			index1 := strings.Index(nodeHtml, "noidung")
			if index1 != -1 {
				index1 = strings.Index(nodeHtml[index1:], "'")
				index2 := -1
				if index1 != -1 {
					index2 = strings.Index(nodeHtml[index1+1:], "'")
				}
				if index2 > index1 {
					requestData = nodeHtml[index1+1 : index2]
				}
			}
		}
	})

	log.Println("found request data: " + requestData)
	rawHtml2 := ""
	if requestData != "" {
		headers := map[string]string{}
		headers["Origin"] = "http://vnthuquan.net"
		headers["Accept-Encoding"] = ""
		headers["Accept-Encoding"] = "gzip, deflate"
		headers["Accept-Language"] = "en-US,en;q=0.8,vi;q=0.6"
		headers["Content-Type"] = "application/x-www-form-urlencoded"
		headers["Accept"] = "*/*"
		headers["Referer"] = "http://vnthuquan.net/truyen/truyen.aspx?tid=2qtqv3m3237n4n1n1ntn31n343tq83a3q3m3237nvn"
		headers["Cookie"] = "_sm_au_c=iVV7FF66fjm6RNBF0d; ASP.NET_SessionId=wf4dhb55hyoubbjz3wfwxr2f"
		headers["Proxy-Connection"] = "keep-alive"
		form := map[string]string{}
		arr1 := strings.Split(requestData, "&")
		for _, s := range arr1 {
			arr2 := strings.Split(s, "=")
			if len(arr2) == 2 {
				form[arr2[0]] = arr2[1]
			}
		}
		r := rand.New(rand.NewSource(time.Now().UnixNano()))
		targetUrl := fmt.Sprintf("http://vnthuquan.net/truyen/chuonghoi_moi.aspx?&rand=%f", r.Float32)

		responses, err := parser.ExecuteRequest("POST", targetUrl, 0, 2, headers, form)
		if err != nil {
			return "", err
		}
		rawHtml2 = string(responses)
		// add the html header
		if strings.Index(rawHtml2, "<html>") == -1 {
			prefix := "<html xmlns=\"http://www.w3.org/1999/xhtml\"><head><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\"/></head>"
			rawHtml2 = prefix + rawHtml2 + "</html>"
		}
		util.SaveFile(util.GetConfiguration().LibraryPath+"/"+"vnthuquan-chapter-raw.html", responses)
	}

	if rawHtml2 == "" {
		return "", nil
	}

	doc, err = goquery.NewDocumentFromReader(strings.NewReader(rawHtml2))
	if err != nil {
		return "", err
	}

	//index := strings.Index(rawHtml2, "onClick=\"noidung1")

	var buffer bytes.Buffer
	doc.Find("body").Each(func(i int, b *goquery.Selection) {

		b.Find("span.chutieude").Each(func(i int, s *goquery.Selection) {
			if s.Text() != "" {
				if *chapterTitle != "" {
					*chapterTitle = *chapterTitle + " " + s.Text()
				} else {
					*chapterTitle = *chapterTitle + s.Text()
				}
			}
		})

		b.Contents().Each(func(i int, s *goquery.Selection) {
			if s.Text() != "" {
				buffer.WriteString("<br/>")
				buffer.WriteString(s.Text())
			}
		})
	})

	chapterHtml := ""
	textStr := buffer.String()
	if textStr != "" {
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
	doc, err := goquery.NewDocumentFromReader(strings.NewReader(rawHtml))
	if err != nil {
		return "", err
	}
	nextPageUrl := ""
	doc.Find("a#next_chap").Each(func(i int, a *goquery.Selection) {
		nextPageUrl, _ = a.Attr("href")
	})
	if !strings.HasPrefix(nextPageUrl, "http://") {
		nextPageUrl = ""
	}
	return nextPageUrl, nil
}
