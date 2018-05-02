package maker

import (
	"errors"
	"io/ioutil"
	"strconv"

	"bytes"
	"regexp"
	"strings"

	"dv.com.tusach/logger"
	"dv.com.tusach/util"
	"github.com/robertkrimen/otto"
	"golang.org/x/net/html"
)

var chapterPrefixes = [...]string{"Chương", "CHƯƠNG", "chương", "Quyển", "QUYỂN", "quyển", "Hồi"}

func (maker BookMaker) getURL(target string, request string) string {
	url := strings.TrimRight(target, "/") + "/" + strings.TrimLeft(request, "/")
	if !strings.HasPrefix(url, "http://") {
		url = "http://" + url
	}
	return url
}

func (maker BookMaker) getIndexOf(source string, search string, offset int) int {
	index := strings.Index(source[offset:], search)
	if index != -1 {
		index = index + offset
	}
	return index
}

func (maker BookMaker) parse(engine *ScriptEngine, chapterURL string, inputFile string, outputFile string, timeoutSec int, numTries int) (chapterTitle, nextChapterURL string, err error) {
	err = nil
	chapterTitle = ""
	nextChapterURL = ""
	chapterHTML := ""

	// load the request
	headers := map[string]string{}
	headers["referer"] = chapterURL

	form := map[string]string{}
	responseBytes, err := maker.executeRequest("GET", chapterURL, timeoutSec, numTries, headers, form)
	if err != nil {
		return
	}
	rawHTML := string(responseBytes)

	// save raw file
	err = util.SaveFile(inputFile, responseBytes)
	if err != nil {
		err = errors.New("Error saving file: " + inputFile + ". " + err.Error())
		return
	}

	chapterHTML, err = maker.parseChapterHTML(engine, chapterURL, rawHTML, &chapterTitle, &nextChapterURL)
	if err != nil {
		err = errors.New("Error parsing chapter content from: " + inputFile + ". " + err.Error())
		return
	}
	if chapterHTML == "" {
		err = errors.New("Error parsing chapter content from: " + inputFile + ". No data.")
		return
	}

	// write to file
	err = util.SaveFile(outputFile, []byte(chapterHTML))
	if err != nil {
		err = errors.New("Error writing to file: " + outputFile + ". " + err.Error())
		return
	}
	return
}

func (maker BookMaker) parseChapterHTML(engine *ScriptEngine, chapterURL string, rawHTML string, chapterTitle *string,
	nextChapterURL *string) (string, error) {

	template, err := ioutil.ReadFile(util.GetConfiguration().LibraryPath + "/template.html")
	if err != nil {
		return "", err
	}
	chapterHTML := ""
	*chapterTitle = ""
	*nextChapterURL = ""

	reader := strings.NewReader(rawHTML)
	logger.Infof("rawHTML len: %d\n", reader.Len)
	z := html.NewTokenizer(reader)

	engine.jsVM.Set("getTagAttribute", func(call otto.FunctionCall) otto.Value {
		s := maker.getTagAttribute(z, call.Argument(0).String())
		val, _ := engine.jsVM.ToValue(s)
		return val
	})

	_, err = engine.jsVM.Run(engine.script)
	if err != nil {
		logger.Errorf("failed to run javascript: %s\n", err.Error())
		return "", errors.New("Failed to run javascript: " + err.Error())
	}
	//if _, err = engine.jsVM.Call(`begin`, nil, template, chapterURL); err != nil {
	//	logger.Errorf("Failed to call js function 'begin': %s\n", err.Error())
	//	return "", errors.New("Failed to call js function 'begin': " + err.Error())
	//}

	beginFn, err := engine.jsVM.Get("begin")
	if err != nil {
		logger.Errorf("Error getting function 'begin': %s", err)
		return "", err
	}
	endFn, err := engine.jsVM.Get("end")
	if err != nil {
		logger.Errorf("Error getting function 'end': %s", err)
		return "", err
	}
	startTagFn, err := engine.jsVM.Get("startTag")
	if err != nil {
		logger.Errorf("Error getting function 'startTag': %s", err)
		return "", err
	}
	endTagFn, err := engine.jsVM.Get("endTag")
	if err != nil {
		logger.Errorf("Error getting function 'endTag': %s", err)
		return "", err
	}
	textFn, err := engine.jsVM.Get("text")
	if err != nil {
		logger.Errorf("Error getting function 'text': %s", err)
		return "", err
	}
	_, err = beginFn.Call(otto.NullValue(), string(template), chapterURL)
	if err != nil {
		return "", errors.New("Failed to call js function 'begin': " + err.Error())
	}

	logger.Info("parsing loop begin")
	for {
		tt := z.Next()
		if tt == html.ErrorToken {
			break
		}
		switch tt {
		case html.StartTagToken, html.SelfClosingTagToken:
			arr, _ := z.TagName()
			tagName := string(arr)
			_, err = startTagFn.Call(otto.NullValue(), tagName, tt == html.SelfClosingTagToken)
			if err != nil {
				return "", errors.New("Failed to call js function 'startTag': " + err.Error())
			}

		case html.EndTagToken:
			arr, _ := z.TagName()
			tagName := string(arr)
			_, err = endTagFn.Call(otto.NullValue(), tagName)
			if err != nil {
				return "", errors.New("Failed to call js function 'endTag': " + err.Error())
			}
			if tagName == "body" || tagName == "html" {
				break
			}

		case html.TextToken:
			text := string(z.Text())
			_, err = textFn.Call(otto.NullValue(), text)
			if err != nil {
				return "", errors.New("Failed to call js function 'text': " + err.Error())
			}
		}
	}

	logger.Info("parsing loop ends")
	_, err = endFn.Call(otto.NullValue())
	if err != nil {
		return "", errors.New("Failed to call js function 'end': " + err.Error())
	}
	var value otto.Value
	if value, err = engine.jsVM.Get("chapterHTML"); err == nil {
		chapterHTML, err = value.ToString()
	}
	if err != nil {
		return "", errors.New("Failed to get chapterHTML: " + err.Error())
	}

	if value, err = engine.jsVM.Get("chapterTitle"); err == nil {
		*chapterTitle, err = value.ToString()
	}
	if err != nil {
		return "", errors.New("Failed to get chapterTitle: " + err.Error())
	}

	if value, err = engine.jsVM.Get("nextChapterURL"); err == nil {
		*nextChapterURL, err = value.ToString()
	}
	if err != nil {
		return "", errors.New("Failed to get nextChapterURL: " + err.Error())
	}
	logger.Infof("chapterTitle=%s, nextChapterURL=%\n, #chapterBytes=%d", *chapterTitle, *nextChapterURL, len(chapterHTML))
	return chapterHTML, nil
}

func (maker BookMaker) parseChapterHTML_BACKUP(engine *ScriptEngine, chapterURL string, rawHTML string, chapterTitle *string, nextChapterURL *string) (string, error) {
	template, err := ioutil.ReadFile(util.GetConfiguration().LibraryPath + "/template.html")
	if err != nil {
		return "", err
	}
	chapterHTML := ""
	*chapterTitle = ""
	*nextChapterURL = ""

	var buffer bytes.Buffer
	var titleBuffer bytes.Buffer
	inside := false
	tagName := ""
	isHeaderTag := false
	links := []string{}
	title := ""
	reader := strings.NewReader(rawHTML)
	logger.Infof("rawHTML len: %d\n", reader.Len)
	z := html.NewTokenizer(reader)
	for {
		tt := z.Next()
		if tt == html.ErrorToken {
			break
		}
		switch tt {
		case html.StartTagToken, html.SelfClosingTagToken:
			arr, _ := z.TagName()
			tagName = string(arr)
			if tagName == "h1" || tagName == "h2" || tagName == "h3" {
				isHeaderTag = true
				titleBuffer.Reset()
			}

			if tagName == "div" {
				inside = !inside
			} else if inside {
				if tagName == "b" {
					buffer.WriteString("<b/>")
				} else if tagName == "p" {
					buffer.WriteString("<p>")
				}
			}
			if tagName == "a" {
				href := maker.getTagAttribute(z, "href")
				if maker.isNextOrPrevChapterURL(chapterURL, href) {
					links = append(links, href)
				}
			}

		case html.EndTagToken:
			arr, _ := z.TagName()
			tagName = string(arr)
			if tagName == "h1" || tagName == "h2" || tagName == "h3" {
				isHeaderTag = false
				// check title
				title = maker.getChapterTitle(titleBuffer.String())
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
				//logger.Infof("found text node: %s\n", text)
			}
			if isHeaderTag {
				titleBuffer.WriteString(text)
			}
		}

		if !inside {
			if chapterHTML == "" && buffer.Len() > 5000 {
				textStr := buffer.String()
				if textStr != "" {
					templateHTML := string(template)
					index := strings.Index(templateHTML, "</body>")
					chapterHTML = templateHTML[0:index] + textStr + "</body></html>"
					*chapterTitle = title
					if len(links) == 2 {
						*nextChapterURL = links[1]
					}
					logger.Infof(">>>>>>>> Start chapter: %s <<<<<<<<<<<\n", *chapterTitle)
					logger.Infof(chapterHTML)
					logger.Infof(">>>>>>>> Next chapter: %s <<<<<<<<<<<\n", *nextChapterURL)
				}
				// TODO handle multiple chapters per page
				//break
			}

			buffer.Reset()
			inside = false
		}
	}

	return chapterHTML, nil
}

func (maker BookMaker) isNextOrPrevChapterURL(currentChapterURL string, url string) bool {
	result := false
	index0 := strings.LastIndex(currentChapterURL, "/")
	currentChapterNo := -1
	if index0 != -1 {
		currentChapterNo = maker.extractChapterNumber(currentChapterURL[index0:])
	}
	index1 := strings.LastIndex(url, "/")
	nextChapterNo := -1
	if index1 != -1 {
		nextChapterNo = maker.extractChapterNumber(url[index1:])
	}
	if currentChapterNo != -1 && nextChapterNo == currentChapterNo+1 {
		result = true
	}
	if result {
		logger.Infof("isNextOrPrevChapterURL - %d/%d -> %s=%v", currentChapterNo, nextChapterNo, url, result)
	}
	return result
}

func (maker BookMaker) getChapterTitle(html string) string {
	title := ""
	for _, prefix := range chapterPrefixes {
		restr := "\\s*" + prefix + "\\s*\\d+"
		r, _ := regexp.Compile(restr)
		arr := r.FindStringIndex(html)
		if len(arr) >= 2 {
			title = html
			logger.Infof("getchaptertitle: found title [%s]\n", html)
			break
		}
	}
	logger.Infof("getchaptertitle: not a title [%s]\n", html)
	return title
}

func (maker BookMaker) getTagAttribute(z *html.Tokenizer, name string) string {
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

func (maker BookMaker) extractChapterNumber(s string) int {
	x := -1
	buf := []byte{}
	for i := 0; i < len(s); i++ {
		if s[i] >= 0x30 && s[i] <= 0x39 {
			buf = append(buf, s[i])
		} else if len(buf) > 0 {
			break
		}
	}
	if len(buf) > 0 {
		x, _ = strconv.Atoi(string(buf))
	}
	return x
}
