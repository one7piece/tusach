package test

import (
	"bytes"
	"fmt"
	"net/http"
	"regexp"
	"testing"

	"golang.org/x/net/html"
)

var chapterPrefixes = [...]string{"Chương", "CHƯƠNG", "chương", "Quyển", "QUYỂN", "quyển", "Hồi"}

func Test1(t *testing.T) {
	var url = "https://truyenyy.com/truyen/bien-kiem-vu-si/chuong-2.html"
	resp, err := http.Get(url)
	if err != nil {
		t.Errorf("failed to load htlm page: ", err)
		t.Fail()
	}

	var buffer bytes.Buffer
	var titleBuffer bytes.Buffer
	inside := false
	title := ""
	tagName := ""
	isHeaderTag := false

	z := html.NewTokenizer(resp.Body)
	for {
		tt := z.Next()
		if tt == html.ErrorToken {
			break
		}

		newInside := inside
		switch tt {
		case html.StartTagToken, html.SelfClosingTagToken:
			arr, _ := z.TagName()
			tagName = string(arr)
			if tagName == "h1" || tagName == "h2" || tagName == "h3" {
				isHeaderTag = true
				titleBuffer.Reset()
			}

			if tagName == "div" {
				newInside = !inside
			} else if inside {
				if tagName == "b" {
					buffer.WriteString("<b/>")
				} else if tagName == "p" {
					buffer.WriteString("<p>")
				}
			}
			if tagName == "a" {
				href := getTagAttribute(z, "href")
				fmt.Printf("inside: %+v, found link: %s\n", inside, href)
			}

		case html.EndTagToken:
			arr, _ := z.TagName()
			tagName = string(arr)
			if tagName == "h1" || tagName == "h2" || tagName == "h3" {
				isHeaderTag = false
				// check title
				title = GetChapterTitle(titleBuffer.String())
			}
			if inside && tagName == "p" {
				buffer.WriteString("</p>")
			}
			if tagName == "body" || tagName == "html" {
				break
			}

		case html.TextToken:
			text := string(z.Text())
			if inside {
				buffer.WriteString(text)
			}
			if isHeaderTag {
				titleBuffer.WriteString(text)
			}
		}

		if newInside != inside {
			if title != "" {
				fmt.Printf("inside: %+v, len: %d, title: %s\n", newInside, buffer.Len(), title)
			}
			if buffer.Len() > 5000 {
				fmt.Println("Start chapter html: ------------------------------ ")
				//fmt.Println(buffer.String())
				fmt.Println("End chapter html: ------------------------------ ")
			}
			buffer.Reset()
			inside = newInside
		}
	}
}

func getTagAttribute(z *html.Tokenizer, name string) string {
	for {
		key, val, more := z.TagAttr()
		if string(key) == name {
			return string(val)
		}
		if !more {
			break
		}
	}
	return ""
}

func GetChapterTitle(html string) string {
	title := ""
	for _, prefix := range chapterPrefixes {
		restr := "\\s*" + prefix + "\\s*\\d+"
		r, _ := regexp.Compile(restr)
		arr := r.FindStringIndex(html)
		if len(arr) >= 2 {
			title = html
			fmt.Printf("getchaptertitle: found title [%s]\n", html)
			break
		}
	}
	fmt.Printf("getchaptertitle: not a title [%s]\n", html)
	return title
}
