package maker

import (
	"errors"
	"fmt"
	"io/ioutil"
	"path/filepath"
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
	ParentTagValues  map[string]string
	Cookies          map[string]string
}

func (loader *ContentLoader) Init() error {
	loader.transport = new(Transport)
	loader.Params = make(map[string]string)
	loader.CurrentTagValues = make(map[string]string)
	loader.Cookies = make(map[string]string)
	logger.Infof("init content loader, hostname: %s\n", loader.Hostname)
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
	//logger.Infof("content loader initialised, template: %s\n", loader.Template)
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
		logger.Errorf("call to js_downloadChapter return error: %v\n", err)
		return nil, err
	}

	if loader.Chapter.ChapterHtml == "" {
		return nil, errors.New("No chapter data!")
	}

	logger.Infof("successfully downloaded chapter %d/%d: %s\n", bookId, chapterNo, chapterUrl)
	logger.Infof("chapterTitle: '%s', nextChapterUrl: '%s', chapterHtml:\n", loader.Chapter.ChapterTitle, loader.Chapter.NextChapterUrl)
	//
	return loader.Chapter, nil
}

func (loader *ContentLoader) Parse(data string) int {
	// start the parsing process
	_, err := loader.engine.jsMethods[BEGIN_METHOD].Call(otto.NullValue())
	if err != nil {
		logger.Errorf("Failed to call js function %s: %s", jsMethodNames[BEGIN_METHOD], err.Error())
		return 5000
	}

	if len(data) > 0 {
		reader := strings.NewReader(data)
		z := html.NewTokenizer(reader)

		logger.Debug("parsing loop begin")
		loader.CurrentTagValues = map[string]string{}
		for {
			tt := z.Next()
			if tt == html.ErrorToken {
				break
			}
			switch tt {
			case html.StartTagToken, html.SelfClosingTagToken:
				loader.ParentTagValues = loader.CurrentTagValues
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
				_, err = loader.engine.jsMethods[START_TAG_METHOD].Call(otto.NullValue(), tagName, tt == html.SelfClosingTagToken)
				if err != nil {
					logger.Errorf("Failed to call js function %s: %s", jsMethodNames[START_TAG_METHOD], err.Error())
					return 5000
				}

			case html.EndTagToken:
				arr, _ := z.TagName()
				tagName := string(arr)
				_, err = loader.engine.jsMethods[END_TAG_METHOD].Call(otto.NullValue(), tagName)
				if err != nil {
					logger.Errorf("Failed to call js function %s: %s", jsMethodNames[END_TAG_METHOD], err.Error())
					return 5000
				}
				if tagName == "body" || tagName == "html" {
					break
				}

			case html.TextToken:
				text := string(z.Text())
				_, err = loader.engine.jsMethods[TEXT_METHOD].Call(otto.NullValue(), text)
				if err != nil {
					logger.Errorf("Failed to call js function %s: %s", jsMethodNames[TEXT_METHOD], err.Error())
					return 5000
				}
			}
		}
	}
	_, err = loader.engine.jsMethods[END_METHOD].Call(otto.NullValue())
	if err != nil {
		logger.Errorf("Failed to call js function %s: %s", jsMethodNames[END_METHOD], err.Error())
		return 5000
	}
	logger.Debug("parsing loop ends")
	return 0
}

func (loader *ContentLoader) Send(method string, url string, followRedirect bool, timeoutSec int, numTries int, header map[string]string, formdata map[string]string) int {
	// ADD to javascript
	//header["referer"] = chapterURL
	defer func() {
		if r := recover(); r != nil {
			logger.Errorf("Recover from panic! %v\n", r)
		}
	}()

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
		//logger.Debugf("found cookie: &s=%s\n", name, value)
	}
	loader.Params["lastResponseBody"] = string(response.Body)
	return status
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
