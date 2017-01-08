package parser

import (
	"dv.com.tusach/util"
	"errors"
	"flag"
	"io/ioutil"
	//"log"
	"bytes"
	"dv.com.tusach/logger"
	"encoding/json"
	"github.com/PuerkitoBio/goquery"
	"golang.org/x/net/proxy"
	"net/http"
	"net/url"
	"regexp"
	"strings"
	"time"
)

var chapterPrefixes = [...]string{"Chương", "CHƯƠNG", "chương", "Quyển", "QUYỂN", "quyển", "Hồi"}

type SiteParser interface {
	Validate(url string) (string, error)
	Parse(chapterUrl string, inputFile string, outputFile string) (string, error)
	GetChapterHtml(rawHtml string, chapterTitle *string) (string, error)
	GetNextPageUrl(rawHtml string, html string) (string, error)
}

func Execute(p SiteParser) (string, error) {
	var configFile string
	var op string
	var url string
	var inputFile string
	var outputFile string

	err := ReadArgs(&configFile, &op, &url, &inputFile, &outputFile)
	if err != nil {
		return "", err
	}

	// load configuration
	util.LoadConfig(configFile)

	if op == "v" {
		return p.Validate(url)
	} else {
		return p.Parse(url, inputFile, outputFile)
	}
}

func DefaultParse(siteParser SiteParser, chapterUrl string, inputFile string, outputFile string, timeoutSec int, numTries int) (string, error) {
	// load the request
	headers := map[string]string{}
	form := map[string]string{}
	responseBytes, err := ExecuteRequest("GET", chapterUrl, timeoutSec, numTries, headers, form)
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
	html, err := siteParser.GetChapterHtml(rawHtml, &chapterTitle)
	if err != nil {
		return "", errors.New("Error parsing chapter content from: " + inputFile + ". " + err.Error())
	}
	if html == "" {
		return "", errors.New("Error parsing chapter content from: " + inputFile + ". No data.")
	}

	nextPageUrl, err := siteParser.GetNextPageUrl(rawHtml, html)
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

func ReadArgs(configFile *string, op *string, url *string, inputFile *string, outputFile *string) error {
	flag.StringVar(configFile, "configFile", "", "configFile")
	flag.StringVar(op, "op", "", "operation")
	flag.StringVar(url, "url", "", "url")
	flag.StringVar(inputFile, "inputFile", "", "input file path")
	flag.StringVar(outputFile, "outputFile", "", "output file path")
	flag.Parse()

	if *configFile == "" {
		return errors.New("Missing argument configFile")
	}
	if *op == "" {
		return errors.New("Missing argument op")
	}
	if *op == "v" {
		if *url == "" {
			return errors.New("Missing argument url")
		}
	} else if *op == "p" {
		if *url == "" {
			return errors.New("Missing argument url")
		}
		if *inputFile == "" {
			return errors.New("Missing argument inputFile")
		}
		if *outputFile == "" {
			return errors.New("Missing argument outputFile")
		}
	} else {
		return errors.New("Invalid op value: " + *op + ". Expecting v or p")
	}

	return nil
}

func GetChapterTitle(html string) string {
	title := ""
	for _, prefix := range chapterPrefixes {
		restr := prefix + "\\s*\\d+"
		title = findChapterTitle(html, restr)
		if title != "" {
			break
		}
	}
	return title
}

func findChapterTitle(html string, restr string) string {
	title := ""
	r, _ := regexp.Compile(restr)
	arr := r.FindStringIndex(html)
	if len(arr) >= 2 {
		index0 := arr[0]
		index1 := strings.Index(html[index0:], ":")
		if index1 != -1 && index1 < 20 {
			index1 += index0
			index2 := strings.Index(html[index1:], "<")
			if index2 != -1 && index2 < 150 {
				index2 += index1
				title = html[index0:index2]
			}
		}
	}
	return title
}

func setupHttpClient(timeout time.Duration) (*http.Client, error) {
	proxyUrl := util.GetConfiguration().ProxyURL
	if proxyUrl == "" {
		return &http.Client{Timeout: timeout}, nil
	}
	logger.Info("Using proxy URL: " + proxyUrl)
	proxyAuth := proxy.Auth{User: util.GetConfiguration().ProxyUsername,
		Password: util.GetConfiguration().ProxyPassword}
	proxyDialer, err := proxy.SOCKS5("tcp", proxyUrl, &proxyAuth, proxy.Direct)
	if err != nil {
		logger.Errorf("sock5 proxy creation error! %q", err)
		return nil, err
	}
	transport := &http.Transport{Dial: proxyDialer.Dial}
	client := &http.Client{Timeout: timeout, Transport: transport}
	return client, nil
}

func ExecuteRequest(method string, targetUrl string, timeoutSec int, numTries int,
	headerMap map[string]string, formMap map[string]string) ([]byte, error) {
	var result []byte

	var timeout time.Duration
	if timeoutSec > 0 {
		timeout = time.Duration(time.Duration(timeoutSec) * time.Second)
	} else {
		timeout = time.Duration(10 * time.Second)
	}

	client, err := setupHttpClient(timeout)
	if err != nil {
		return nil, err
	}

	var req *http.Request
	if formMap != nil {
		// set form data
		form := url.Values{}
		for key, value := range formMap {
			form.Add(key, value)
		}
		req, err = http.NewRequest(method, targetUrl, strings.NewReader(form.Encode()))
	} else {
		req, err = http.NewRequest(method, targetUrl, nil)
	}
	if err != nil {
		return result, err
	}

	// set headers
	for key, value := range headerMap {
		req.Header.Add(key, value)
	}
	_, hasUserAgent := headerMap["User-Agent"]
	if !hasUserAgent {
		req.Header.Add("User-Agent", "Mozilla/5.0 (Windows; U; Windows NT 6.1; en-US; rv:1.9.2.2) Gecko/20100316 Firefox/3.6.2")
	}

	var n int
	if numTries > 0 {
		n = numTries
	} else {
		n = 1
	}
	for i := 0; i < n; i++ {
		logger.Infof("Attempt %d/%d to load from %s\n", (i + 1), n, targetUrl)
		resp, err := client.Do(req)
		if err != nil {
			logger.Errorf("Error loading from %s. %s\n", targetUrl, err.Error())
		} else {
			defer resp.Body.Close()
			result, err = ioutil.ReadAll(resp.Body)
			resp.Body.Close()
			if result != nil && err == nil {
				break
			}
			result = nil
		}
		time.Sleep(30 * time.Second)
	}

	if err != nil {
		return nil, err
	}

	if result == nil || len(result) == 0 {
		logger.Error("No html data loaded")
		return result, errors.New("No html data loaded")
	}

	return result, nil
}

func GetUrl(target string, request string) string {
	url := strings.TrimRight(target, "/") + "/" + strings.TrimLeft(request, "/")
	if !strings.HasPrefix(url, "http://") {
		url = "http://" + url
	}
	return url
}

func GetIndexOf(source string, search string, offset int) int {
	index := strings.Index(source[offset:], search)
	if index != -1 {
		index = index + offset
	}
	return index
}

func ExtractNodeContents(sel *goquery.Selection, buffer *bytes.Buffer) {
	sel.Contents().Each(func(i int, s *goquery.Selection) {
		if s.Text() != "" {
			buffer.WriteString("<br/>")
			buffer.WriteString(s.Text())
		}
	})
}
