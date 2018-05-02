package main

import (
	_ "dv.com.tusach/maker"
	_ "dv.com.tusach/util"
	"fmt"
	"golang.org/x/net/proxy"
	"io/ioutil"
	"net/http"
	"testing"
)

func TestPackage(t *testing.T) {
	//util.LoadConfig("/home/dvan/webserver/tusach-config.json")

	proxyUrl := "proxy-nl.privateinternetaccess.com:1080"
	proxyAuth := proxy.Auth{User: "x0691959", Password: "EqGaXScxwe"}
	proxy, err := proxy.SOCKS5("tcp", proxyUrl, &proxyAuth, proxy.Direct)
	if err != nil {
		logger.Debugf("sock5 error!", err.Error())
		t.Error(err)
	}
	transport := &http.Transport{Dial: proxy.Dial}
	logger.Debug("Using proxy URL: " + proxyUrl)
	client := &http.Client{Transport: transport}
	response, err := client.Get("http://whatismyipaddress.ricmedia.com/")
	if err != nil {
		logger.Debugf("get error!", err.Error())
		t.Error(err)
	}

	defer response.Body.Close()

	body, err := ioutil.ReadAll(response.Body)
	if err != nil {
		logger.Debugf("readall error!", err.Error())
		t.Error(err)
	}
	logger.Debugf("%s\n", string(body))

	/*
			url := "http://truyenfull.vn/tien-ma-bien/chuong-1/"
			site := maker.GetBookSite(url)
			data, err := site.ExecuteRequest(url)
			if err != nil {
				t.Error(err)
			} else {
				util.SaveFile(util.GetConfiguration().LibraryPath+"/truyenfull-test-raw.html", data)
			}

			str, err := Parse(util.GetConfiguration().LibraryPath+"/truyenfull-test-raw.html", util.GetConfiguration().LibraryPath+"/truyenfull-test-filter.html")
			if err != nil {
				t.Error(err)
			}
					fmt.Println(str)
	fmt.Println(str)
	*/
}
