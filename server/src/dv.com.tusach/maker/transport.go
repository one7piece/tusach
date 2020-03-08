package maker

import (
	"io"
	"io/ioutil"
	"os"
	"strconv"

	"net/http"
	"net/url"
	"strings"
	"time"

	"dv.com.tusach/logger"
	"dv.com.tusach/util"
)

type Transport struct {
}

type Request struct {
	Method   string
	Url      string
	Header   map[string]string
	Formdata map[string]string
	Cookies  map[string]string
}

type Response struct {
	Url     string
	Status  int
	Body    []byte
	Header  http.Header
	Cookies map[string]string
}

func (t *Transport) init(timeout time.Duration) (*http.Client, error) {
	proxyURL := util.GetConfiguration().ProxyURL
	if proxyURL == "" {
		os.Setenv("HTTP_PROXY", "")
	} else {
		username := util.GetConfiguration().ProxyUsername
		password := util.GetConfiguration().ProxyPassword
		if username != "" && password != "" {
			// update url to include username/password
			index := strings.Index(proxyURL, "/")
			proxyURL = string(proxyURL[0:index]) + "//" + username + "@" + password + string(proxyURL[index+2])
		}
		logger.Info("Using proxy URL: " + proxyURL)
		os.Setenv("HTTP_PROXY", proxyURL)
	}
	return &http.Client{Timeout: timeout}, nil
}

func (t *Transport) Send(request Request, timeoutSec int, numTries int) (Response, error) {
	response := Response{}
	response.Url = request.Url

	var timeout time.Duration
	if timeoutSec > 0 {
		timeout = time.Duration(time.Duration(timeoutSec) * time.Second)
	} else {
		timeout = time.Duration(10 * time.Second)
	}

	client, err := t.init(timeout)
	if err != nil {
		return response, err
	}

	var requestBody io.Reader
	contentLength := 0
	if request.Formdata != nil {
		form := url.Values{}
		for key, value := range request.Formdata {
			logger.Infof("add formdata %s=%s\n", key, value)
			form.Add(key, value)
		}
		bodyStr := form.Encode()
		contentLength = len(bodyStr)
		requestBody = strings.NewReader(bodyStr)
	}
	httpReq, err := http.NewRequest(request.Method, request.Url, requestBody)
	if err != nil {
		return response, err
	}

	// set cookies
	for name, value := range request.Cookies {
		httpReq.AddCookie(&http.Cookie{Name: name, Value: value})
	}
	// set headers
	for key, value := range request.Header {
		httpReq.Header.Add(key, value)
	}
	httpReq.Header.Add("Content-Length", strconv.Itoa(contentLength))

	_, hasUserAgent := request.Header["User-Agent"]
	if !hasUserAgent {
		httpReq.Header.Add("User-Agent", "Mozilla/5.0 (Windows; U; Windows NT 6.1; en-US; rv:1.9.2.2) Gecko/20100316 Firefox/3.6.2")
	}

	var n int
	if numTries > 0 {
		n = numTries
	} else {
		n = 1
	}

	var httpResp *http.Response
	for i := 0; i < n; i++ {
		logger.Debugf("Attempt %d of %d to send request: %v, headers:%v\n", (i + 1), n, httpReq.URL, httpReq.Header)
		httpResp, err = client.Do(httpReq)
		if err != nil {
			logger.Errorf("Error loading from %s. %s\n", request.Url, err.Error())
		} else {
			logger.Debugf("Received response status: %s, headers: %v, cookies: %v\n", httpResp.Status, httpResp.Header, httpResp.Cookies())
			response.Cookies = make(map[string]string)
			for _, cookie := range httpResp.Cookies() {
				response.Cookies[cookie.Name] = cookie.Value
			}
			response.Header = httpResp.Header
			response.Status = httpResp.StatusCode
			defer httpResp.Body.Close()
			response.Body, err = ioutil.ReadAll(httpResp.Body)
			if response.Body != nil && err == nil {
				break
			}
			response.Body = nil
		}
		if i < n-1 {
			time.Sleep(30 * time.Second)
		}
	}

	if err != nil {
		return response, err
	}

	return response, nil
}
