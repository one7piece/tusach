package parser

import (
	"errors"
	"flag"
	"io/ioutil"
	"log"
	"net/http"
	"net/url"
	"regexp"
	"strings"
	"time"
)

var chapterPrefixes = [...]string{"Chương", "CHƯƠNG", "chương", "Quyển", "QUYỂN", "quyển"}

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
		//fmt.Println("index0=", index0)
		index1 := strings.Index(html[index0:], ":")
		if index1 != -1 && index1 < 20 {
			index1 += index0
			//fmt.Println("index1=", index1)
			index2 := strings.Index(html[index1:], "<")
			//fmt.Println("index2=", index2)
			if index2 != -1 && index2 < 150 {
				index2 += index1
				title = html[index0:index2]
			}
		}
	}
	//fmt.Println("Found chapter title: ", title)
	return title
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

	client := http.Client{Timeout: timeout}
	var req *http.Request
	var err error
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
		log.Printf("Attempt#%d to load from %s\n", (i + 1), targetUrl)
		resp, err := client.Do(req)
		if err != nil {
			log.Printf("Error loading from %s. %s\n", targetUrl, err.Error())
			return nil, err
		}
		defer resp.Body.Close()
		if err == nil {
			result, err = ioutil.ReadAll(resp.Body)
		}
		resp.Body.Close()
		if result != nil {
			break
		}
	}
	if result == nil || len(result) == 0 {
		return result, errors.New("No html data loaded")
	}
	return result, err
}

func GetUrl(target string, request string) string {
	url := strings.TrimRight(target, "/") + "/" + strings.TrimLeft(request, "/")
	if !strings.HasPrefix(url, "http://") {
		url = "http://" + url
	}
	return url
}
