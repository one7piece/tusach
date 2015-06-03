package main

import (
	//"bytes"
	"dv.com.tusach/parser"
	"dv.com.tusach/util"
	"encoding/json"
	"errors"
	"fmt"
	"github.com/PuerkitoBio/goquery"
	"io/ioutil"
	"log"
	"math/rand"
	"os"
	"strconv"
	"strings"
	"time"
)

var chapterTitlePrefixes = []string{"Hồi", "Chương"}

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

func Parse(chapterUrl string, inputFile string, outputFile string) (string, error) {
	paramIndex := strings.Index(chapterUrl, "***")
	requestParam := ""
	if paramIndex != -1 {
		requestParam = chapterUrl[paramIndex+3:]
		chapterUrl = chapterUrl[0:paramIndex]
	}
	// load the request
	rawHtml, err := executeRequest(chapterUrl, requestParam)
	if err != nil {
		return "", err
	}
	// save raw file
	err = util.SaveFile(inputFile, []byte(rawHtml))
	if err != nil {
		return "", errors.New("Error saving file: " + inputFile + ". " + err.Error())
	}

	chapterTitle := ""
	nextPageUrl := ""
	html, err := getChapterHtml(chapterUrl, requestParam, rawHtml, &chapterTitle, &nextPageUrl)
	if err != nil {
		return "", err
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

func executeRequest(chapterUrl string, requestData string) (string, error) {
	headers := map[string]string{}
	form := map[string]string{}
	responseHtml := ""
	if requestData == "" {
		response, err := parser.ExecuteRequest("GET", chapterUrl, 10, 2, headers, form)
		if err != nil {
			return "", err
		}
		responseHtml = string(response)
	} else {
		headers["Origin"] = "http://vnthuquan.net"
		headers["Accept-Encoding"] = ""
		headers["Accept-Encoding"] = "gzip, deflate"
		headers["Accept-Language"] = "en-US,en;q=0.8,vi;q=0.6"
		headers["Content-Type"] = "application/x-www-form-urlencoded"
		headers["Accept"] = "*/*"
		//headers["Referer"] = "http://vnthuquan.net/truyen/truyen.aspx?tid=2qtqv3m3237n4n1n1ntn31n343tq83a3q3m3237nvn"
		headers["Referer"] = chapterUrl
		headers["Cookie"] = "_sm_au_c=iVV7FF66fjm6RNBF0d; ASP.NET_SessionId=wf4dhb55hyoubbjz3wfwxr2f"
		headers["Proxy-Connection"] = "keep-alive"
		arr1 := strings.Split(requestData, "&")
		for _, s := range arr1 {
			arr2 := strings.Split(s, "=")
			if len(arr2) == 2 {
				form[arr2[0]] = arr2[1]
			}
		}
		r := rand.New(rand.NewSource(time.Now().UnixNano()))
		targetUrl := fmt.Sprintf("http://vnthuquan.net/truyen/chuonghoi_moi.aspx?&rand=%f", r.Float32())

		response, err := parser.ExecuteRequest("POST", targetUrl, 0, 2, headers, form)
		if err != nil {
			return "", err
		}
		responseHtml = string(response)
		log.Printf("loaded html:\n%s\n", responseHtml)

		/*
			if strings.Index(responseHtml, "<html") == -1 {
				prefix := "<html xmlns=\"http://www.w3.org/1999/xhtml\"><head><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\"/></head>"
				responseHtml = prefix + responseHtml + "</html>"
			} else {
				return "", errors.New("Invalid html page loaded")
			}
		*/
		if len(responseHtml) < 500 {
			return "", errors.New("Invalid html page loaded")
		}
	}
	if responseHtml == "" {
		return "", errors.New("No html loaded from site.")
	}

	return responseHtml, nil
}

func getChapterHtml(chapterUrl string, requestData string, rawHtml string, chapterTitle *string, nextPageUrl *string) (string, error) {
	template, err := ioutil.ReadFile(util.GetConfiguration().LibraryPath + "/template.html")
	if err != nil {
		return "", err
	}
	templateHtml := string(template)

	rawHtml2 := rawHtml
	if requestData == "" {
		// download the chapter content
		doc, err := goquery.NewDocumentFromReader(strings.NewReader(rawHtml))
		if err != nil {
			return "", err
		}
		doc.Find("div#khungchinh").Each(func(i int, s *goquery.Selection) {
			nodeHtml, err := s.Html()
			if err == nil {
				// extract the tuaid & chuong
				index1 := parser.GetIndexOf(nodeHtml, "noidung", 0)
				if index1 != -1 {
					index1 = parser.GetIndexOf(nodeHtml, "'", index1)
					index2 := -1
					if index1 != -1 {
						index2 = parser.GetIndexOf(nodeHtml, "'", index1+1)
					}
					if index2 > index1 {
						requestData = nodeHtml[index1+1 : index2]
					}
				}
			}
		})

		log.Println("found chapter request id: " + requestData)
		if requestData == "" || !strings.HasPrefix(requestData, "tuaid=") {
			return "", errors.New("Invalid or No chapter request id found")
		}

		rawHtml2, err = executeRequest(chapterUrl, requestData)
		if err != nil {
			return "", err
		}
		//util.SaveFile(util.GetConfiguration().LibraryPath+"/"+"vnthuquan-chapter-raw.html", responses)
	}

	doc, err := goquery.NewDocumentFromReader(strings.NewReader(rawHtml2))
	if err != nil {
		return "", err
	}

	nextRequestData := ""
	index1 := strings.LastIndex(rawHtml2, "onClick=\"noidung1")
	if index1 != -1 {
		index1 = parser.GetIndexOf(rawHtml2, "'", index1)
		index2 := parser.GetIndexOf(rawHtml2, "'", index1+1)
		if index1 != -1 && index2 > index1 {
			nextRequestData = rawHtml2[index1+1 : index2]
		}
	}
	if nextRequestData != "" {
		*nextPageUrl = chapterUrl + "***" + nextRequestData
	}

	//var buffer bytes.Buffer
	doc.Find("body").Each(func(i int, b *goquery.Selection) {
		b.Find("span.chutieude").Each(func(i int, s *goquery.Selection) {
			txt := s.Text()
			found := false
			for _, prefix := range chapterTitlePrefixes {
				if strings.Contains(txt, prefix) {
					found = true
					break
				}
			}
			if found {
				*chapterTitle = txt
			} else if *chapterTitle != "" {
				*chapterTitle = *chapterTitle + " " + txt
			}

		})
		/*
			b.Contents().Each(func(i int, s *goquery.Selection) {
				if s.Text() != "" {
					buffer.WriteString("<br/>")
					buffer.WriteString(s.Text())
				}
			})
		*/
	})
	*chapterTitle = strings.Replace(*chapterTitle, "\n", "", -1)
	*chapterTitle = strings.Replace(*chapterTitle, "\t", "", -1)
	*chapterTitle = strings.Replace(*chapterTitle, "  ", " ", -1)
	textStr := rawHtml2
	chapterHtml := ""
	if textStr != "" {
		index := strings.Index(templateHtml, "</body>")
		chapterHtml = templateHtml[0:index] + textStr + "</body></html>"
	}
	return chapterHtml, nil
}
