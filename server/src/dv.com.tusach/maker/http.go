package maker

import (
	"errors"
	"io/ioutil"
	"os"

	"net/http"
	"net/url"
	"strings"
	"time"

	"dv.com.tusach/logger"
	"dv.com.tusach/util"
)

func setupHTTPClient(timeout time.Duration) (*http.Client, error) {
	proxyURL := util.GetConfiguration().ProxyURL
	os.Setenv("HTTP_PROXY", proxyURL)
	//if proxyURL == "" {
	//return &http.Client{Timeout: timeout}, nil
	//}
	return &http.Client{Timeout: timeout}, nil

	/*
		logger.Info("Using proxy URL: " + proxyURL)
		proxyAuth := proxy.Auth{User: util.GetConfiguration().ProxyUsername,
			Password: util.GetConfiguration().ProxyPassword}
		proxyDialer, err := proxy.SOCKS5("tcp", proxyURL, &proxyAuth, proxy.Direct)
		if err != nil {
			logger.Errorf("sock5 proxy creation error! %q", err)
			return nil, err
		}
		transport := &http.Transport{Dial: proxyDialer.Dial}
		client := &http.Client{Timeout: timeout, Transport: transport}
		return client, nil
	*/
}

func executeHTTPRequest(method string, targetURL string, timeoutSec int, numTries int,
	headerMap map[string]string, formMap map[string]string) ([]byte, error) {

	var result []byte

	var timeout time.Duration
	if timeoutSec > 0 {
		timeout = time.Duration(time.Duration(timeoutSec) * time.Second)
	} else {
		timeout = time.Duration(10 * time.Second)
	}

	client, err := setupHTTPClient(timeout)
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
		req, err = http.NewRequest(method, targetURL, strings.NewReader(form.Encode()))
	} else {
		req, err = http.NewRequest(method, targetURL, nil)
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
	var resp *http.Response
	for i := 0; i < n; i++ {
		logger.Infof("Attempt %d of %d to load from %s\n", (i + 1), n, targetURL)
		resp, err = client.Do(req)
		if err != nil {
			logger.Errorf("Error loading from %s. %s\n", targetURL, err.Error())
		} else {
			defer resp.Body.Close()
			result, err = ioutil.ReadAll(resp.Body)
			resp.Body.Close()
			if result != nil && err == nil {
				break
			}
			result = nil
		}
		if i < n-1 {
			time.Sleep(30 * time.Second)
		}
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
