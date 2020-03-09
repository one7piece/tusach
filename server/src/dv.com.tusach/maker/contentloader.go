package maker

import (
	"errors"
	"fmt"
	"io/ioutil"
	"path/filepath"
	"regexp"
	"strconv"
	"strings"

	"dv.com.tusach/logger"
	"dv.com.tusach/util"
	"github.com/robertkrimen/otto"
	"golang.org/x/net/html"
)

var chapterPrefixes = [...]string{"Chương", "CHƯƠNG", "chương", "Quyển", "QUYỂN", "quyển", "Hồi"}

var jsMethodNames = [...]string{"js_downloadChapter", "js_begin", "js_end", "js_startTag", "js_endTag", "js_text"}

const (
	DOWNLOAD_CHAPTER_METHOD = iota
	BEGIN_METHOD            = iota
	END_METHOD              = iota
	START_TAG_METHOD        = iota
	END_TAG_METHOD          = iota
	TEXT_METHOD             = iota
)

type ScriptEngine struct {
	jsVM      *otto.Otto
	script    *otto.Script
	jsMethods [len(jsMethodNames)]otto.Value
}

type CurrentChapter struct {
	ChapterNo      int
	ChapterTitle   string
	ChapterUrl     string
	NextChapterUrl string
	ChapterHtml    string
	ChapterHmtlRaw string
}

type ContentLoader struct {
	Hostname         string
	Params           map[string]string
	Chapter          *CurrentChapter
	Template         string
	engine           *ScriptEngine
	transport        *Transport
	CurrentTagValues map[string]string
	Cookies          map[string]string
}

func (loader *ContentLoader) Init() error {
	loader.transport = new(Transport)
	loader.Params = make(map[string]string)
	loader.CurrentTagValues = make(map[string]string)
	loader.Cookies = make(map[string]string)

	domain := ""
	parts := strings.Split(loader.Hostname, ".")
	if len(parts) > 0 {
		if parts[0] != "www" {
			domain = parts[0]
		} else if len(parts) > 1 {
			domain = parts[1]
		}
	}
	if domain == "" {
		return errors.New("Invalid hostname: " + loader.Hostname)
	}
	// find parser file matching the domain
	var parserFile = filepath.Join(util.GetConfiguration().LibraryPath, domain+".js")
	if !util.IsExist(parserFile) {
		logger.Infof("%s not found, using default parser.js", parserFile)
		parserFile = filepath.Join(util.GetConfiguration().LibraryPath, "parser.js")
	}
	if !util.IsExist(parserFile) {
		return errors.New("Could not find parser file: " + parserFile)
	}
	logger.Infof("loading parser file %s\n", parserFile)
	data, err := ioutil.ReadFile(parserFile)
	if err != nil {
		return fmt.Errorf("Failed to read parser file %s: %w", parserFile, err)
	}
	loader.engine = new(ScriptEngine)
	loader.engine.jsVM = otto.New()
	logger.Infof("Compiling script...\n")
	script, err := loader.engine.jsVM.Compile("", data)
	if err != nil {
		return fmt.Errorf("Error compiling script: %w", err)
	}
	loader.engine.script = script
	logger.Info("script compiled succesffuly!")

	// check if this is needed
	//engine.jsVM.Run(engine.script)

	loader.engine.jsVM.Set("logDebug", func(call otto.FunctionCall) otto.Value {
		logger.Debug(call.Argument(0).String())
		return otto.Value{}
	})

	loader.engine.jsVM.Set("logInfo", func(call otto.FunctionCall) otto.Value {
		logger.Info(call.Argument(0).String())
		return otto.Value{}
	})

	loader.engine.jsVM.Set("logError", func(call otto.FunctionCall) otto.Value {
		logger.Error(call.Argument(0).String())
		return otto.Value{}
	})

	jsLoader, err := loader.engine.jsVM.ToValue(loader)
	if err != nil {
		return fmt.Errorf("Error during ToValue: %w", err)
	}
	err = loader.engine.jsVM.Set("goContext", jsLoader)
	if err != nil {
		return fmt.Errorf("Error during Set goContext: %w", err)
	}

	logger.Infof("running javascript...\n")
	_, err = loader.engine.jsVM.Run(loader.engine.script)
	if err != nil {
		return fmt.Errorf("Failed to run javascript: %w", err)
	}

	for i := 0; i < len(jsMethodNames); i++ {
		logger.Infof("getting javascript method: %s\n", jsMethodNames[i])
		loader.engine.jsMethods[i], err = loader.engine.jsVM.Get(jsMethodNames[i])
		if err != nil {
			logger.Errorf("Failed to get method: %s. %s\n", jsMethodNames[i], err)
			return fmt.Errorf("Failed to get method: %s. %w", jsMethodNames[i], err)
		}
	}

	templateFilename := util.GetConfiguration().LibraryPath + "/template.html"
	template, err := ioutil.ReadFile(templateFilename)
	if err != nil {
		return fmt.Errorf("Failed to read template file: %s. %w", templateFilename, err)
	}
	loader.Template = string(template)
	logger.Infof("content loader initialised, template: %s\n", loader.Template)
	return nil
}

func (loader *ContentLoader) DownloadChapter(bookId int, chapterNo int, chapterUrl string) (*CurrentChapter, error) {
	// create new chapter
	loader.Chapter = new(CurrentChapter)
	loader.Chapter.ChapterNo = chapterNo
	loader.Chapter.ChapterUrl = chapterUrl

	// call otto to download chapter
	loader.Params["lastResponseBody"] = ""

	logger.Infof("start downloading chapter %d/%d: %s\n", bookId, chapterNo, chapterUrl)
	if _, err := loader.engine.jsMethods[DOWNLOAD_CHAPTER_METHOD].Call(otto.NullValue()); err == nil {
		logger.Infof("call to js_downloadChapter return ok\n")
	} else {
		logger.Infof("call to js_downloadChapter return error: %v\n", err)
		return nil, err
	}

	if loader.Params["chapterHtml"] == "" {
		return nil, errors.New("No chapter data!")
	}

	logger.Infof("successfully downloaded chapter %d/%d: %s\n", bookId, chapterNo, chapterUrl)
	logger.Infof("chapterTitle: '%s', nextChapterUrl: '%s', chapterHtml:\n", loader.Chapter.ChapterTitle, loader.Params["nextChapterUrl"])
	//
	return loader.Chapter, nil
}

func (loader *ContentLoader) Send(method string, url string, followRedirect bool, timeoutSec int, numTries int, header map[string]string, formdata map[string]string) int {
	// ADD to javascript
	//header["referer"] = chapterURL

	request := Request{Method: method, Url: url, Header: header, Formdata: formdata, Cookies: loader.Cookies}
	logger.Infof("Sending request: %v\n", request)
	response, err := loader.transport.Send(request, timeoutSec, numTries, followRedirect)

	status := 0
	if err != nil {
		logger.Errorf("Failed to send request: %s\n", err)
		return 5000
	} else {
		status = response.Status
		logger.Infof("Received response status: %d, header: %v\n", response.Status, response.Header)
	}

	for name, value := range response.Cookies {
		loader.Cookies[name] = value
		logger.Infof("found cookie: &s=%s\n", name, value)
	}

	// start the parsing process
	_, err = loader.engine.jsMethods[BEGIN_METHOD].Call(otto.NullValue(), url, status)
	if err != nil {
		logger.Errorf("Failed to call js function %s: %s", jsMethodNames[BEGIN_METHOD], err.Error())
		return 5000
	}
	loader.Params["lastResponseBody"] = string(response.Body)
	if len(loader.Params["lastResponseBody"]) > 0 {
		reader := strings.NewReader(loader.Params["lastResponseBody"])
		logger.Infof("rawHTML len: %d\n", reader.Len)
		z := html.NewTokenizer(reader)

		logger.Debug("parsing loop begin")
		loader.CurrentTagValues = map[string]string{}
		//loader.parentTag = map[string]string{}

		for {
			tt := z.Next()
			if tt == html.ErrorToken {
				break
			}
			switch tt {
			case html.StartTagToken, html.SelfClosingTagToken:
				//loader.parentTag = loader.CurrentTagValues
				loader.CurrentTagValues = map[string]string{}
				for {
					key, val, more := z.TagAttr()
					loader.CurrentTagValues[string(key)] = string(val)
					//logger.Debugf("Storing tag %s->%s\n", string(key), string(val))
					if !more {
						break
					}
				}

				arr, _ := z.TagName()
				tagName := string(arr)
				//loader.CurrentTagValues["name"] = tagName
				_, err = loader.engine.jsMethods[START_TAG_METHOD].Call(otto.NullValue(), tagName, tt == html.SelfClosingTagToken)
				if err != nil {
					logger.Errorf("Failed to call js function %s: %s", jsMethodNames[START_TAG_METHOD], err.Error())
					status = 5000
					break
				}

			case html.EndTagToken:
				arr, _ := z.TagName()
				tagName := string(arr)
				_, err = loader.engine.jsMethods[END_TAG_METHOD].Call(otto.NullValue(), tagName)
				loader.CurrentTagValues = map[string]string{}
				//loader.parentTag = loader.CurrentTagValues
				if err != nil {
					logger.Errorf("Failed to call js function %s: %s", jsMethodNames[END_TAG_METHOD], err.Error())
					status = 5000
					break
				}
				if tagName == "body" || tagName == "html" {
					break
				}

			case html.TextToken:
				text := string(z.Text())
				_, err = loader.engine.jsMethods[TEXT_METHOD].Call(otto.NullValue(), text)
				if err != nil {
					logger.Errorf("Failed to call js function %s: %s", jsMethodNames[TEXT_METHOD], err.Error())
					status = 5000
					break
				}
			}
		}

		logger.Debug("parsing loop ends")
	}

	_, err = loader.engine.jsMethods[END_METHOD].Call(otto.NullValue())
	if err != nil {
		logger.Errorf("Failed to call js function %s: %s", jsMethodNames[END_METHOD], err.Error())
		return 5000
	}
	return status
}

/*
func (maker *BookMaker) parseChapterHTML(engine *ScriptEngine, chapterNo int, chapterURL string, rawHTML string, chapterTitle *string,
	nextChapterURL *string) (string, error) {

	template, err := ioutil.ReadFile(util.GetConfiguration().LibraryPath + "/template.html")
	if err != nil {
		return "", err
	}
	chapterHTML := ""
	*chapterTitle = ""
	*nextChapterURL = ""
	var parentTag map[string]string
	var CurrentTagValues map[string]string

	reader := strings.NewReader(rawHTML)
	logger.Infof("rawHTML len: %d\n", reader.Len)
	z := html.NewTokenizer(reader)

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
	_, err = beginFn.Call(otto.NullValue(), string(template), chapterNo, chapterURL)
	if err != nil {
		return "", errors.New("Failed to call js function 'begin': " + err.Error())
	}

	logger.Debug("parsing loop begin")
	for {
		tt := z.Next()
		if tt == html.ErrorToken {
			break
		}
		switch tt {
		case html.StartTagToken, html.SelfClosingTagToken:
			parentTag = CurrentTagValues
			CurrentTagValues = map[string]string{}
			for {
				key, val, more := z.TagAttr()
				CurrentTagValues[string(key)] = string(val)
				//logger.Debugf("Storing tag %s->%s\n", string(key), string(val))
				if !more {
					break
				}
			}

			arr, _ := z.TagName()
			tagName := string(arr)
			CurrentTagValues["name"] = tagName
			_, err = startTagFn.Call(otto.NullValue(), tagName, tt == html.SelfClosingTagToken)
			if err != nil {
				return "", errors.New("Failed to call js function 'startTag': " + err.Error())
			}

		case html.EndTagToken:
			arr, _ := z.TagName()
			tagName := string(arr)
			_, err = endTagFn.Call(otto.NullValue(), tagName)
			CurrentTagValues = map[string]string{}
			parentTag = CurrentTagValues
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

	logger.Debug("parsing loop ends")
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
	//logger.Infof("chapterTitle=%s, nextChapterURL=%s\n, #chapterBytes=%d", *chapterTitle, *nextChapterURL, len(chapterHTML))
	return chapterHTML, nil
}
*/

func isNextOrPrevChapterURL(currentChapterURL string, url string) bool {
	result := false
	index0 := strings.LastIndex(currentChapterURL, "/")
	currentChapterNo := -1
	if index0 != -1 {
		currentChapterNo = extractChapterNumber(currentChapterURL[index0:])
	}
	index1 := strings.LastIndex(url, "/")
	nextChapterNo := -1
	if index1 != -1 {
		nextChapterNo = extractChapterNumber(url[index1:])
	}
	if currentChapterNo != -1 && nextChapterNo == currentChapterNo+1 {
		result = true
	}
	if result {
		logger.Infof("isNextOrPrevChapterURL - %d/%d -> %s=%v", currentChapterNo, nextChapterNo, url, result)
	}
	return result
}

func getChapterTitle(html string) string {
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

func extractChapterNumber(s string) int {
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

func getURL(target string, request string) string {
	url := strings.TrimRight(target, "/") + "/" + strings.TrimLeft(request, "/")
	if !strings.HasPrefix(url, "http://") {
		url = "http://" + url
	}
	return url
}

func getIndexOf(source string, search string, offset int) int {
	index := strings.Index(source[offset:], search)
	if index != -1 {
		index = index + offset
	}
	return index
}
