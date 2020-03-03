package test

import (
	"errors"
	"fmt"
	"io/ioutil"
	"testing"

	"dv.com.tusach/logger"
	"dv.com.tusach/util"
	"github.com/robertkrimen/otto"
	"golang.org/x/net/html"
)

var scriptSrc = `
function sayHello(arg1, arg2) {
	log("***executing script...");
	log("***sayHello: " + arg1);
	var cfg = configuration;
	log("cfg: " + cfg);
	log("arg2: " + arg2);

	var str = '';
	for (var property in cfg) {
		str += property + ': ' + str[property]+'; ';
	}	
	log("properties: " + str);
	log("***config parser path: " + cfg.ServerPath);
}
`

func TestOtto1(t *testing.T) {
	t.Log("\nTestGoQuery...\n")
	util.LoadConfig("c:/dev/dvan/github/tusach/server/config.json")
	config := util.GetConfiguration()
	//t.Log("configuration: %+v", config)

	vm := otto.New()
	// set a go function
	vm.Set("log", func(call otto.FunctionCall) otto.Value {
		t.Log(call.Argument(0).String())
		//logger.Info(call.Argument(0).String())
		return otto.Value{}
	})

	jsConfig, err := vm.ToValue(config)
	if err != nil {
		t.Error("Error during ToValue: ", err)
	}

	err = vm.Set("configuration", jsConfig)
	if err != nil {
		t.Error("Error during Set: ", err)
	}

	t.Log("Compiling script...")
	script, err := vm.Compile("", scriptSrc)
	if err != nil {
		t.Error("Error compiling script: ", err)
	}
	t.Log("Running script...")
	vm.Run(script)
	// get sayHello function handle
	fn, _ := vm.Get("sayHello")
	retVal, err := fn.Call(otto.NullValue(), "Dung", jsConfig)
	if err != nil {
		t.Error("Failed to call js function: ", err)
	}
	t.Log("returned value: ", retVal)

}

var srcScript2 = `
chapterPrefixes = ["Chương", "CHƯƠNG", "chương", "Quyển", "QUYỂN", "quyển", "Hồi"];

var chapterHTML;
var chapterTitle;
var nextChapterURL;

buffer = "";
titleBuffer = "";
inside = false;
tagname = "";
isHeaderTag = false;
links = [];
title = "";
chapterURL = "";
templateHTML = "";

logInfo("executing script...");

function begin(template, url) {
  chapterURL = url;
  templateHTML = template;
  logInfo("begin() - " + url + ", template: " + template);
}

function end() {
}

function startTag(tagName, isSelfClosingTag) {
  if (tagName == "h1" || tagName == "h2" || tagName == "h3") {
    isHeaderTag = true;
    titleBuffer = "";
  }

  if (tagName == "div") {
    inside = !inside;
  } else if (inside) {
    if (tagName == "b") {
      buffer += "<b/>";
    } else if (tagName == "p") {
      buffer += "<p>";
    }
  }
  if (tagName == "a") {
    href = getTagAttribute("href");
    if (isNextChapterURL(chapterURL, href)) {
      links.push(href);
    }
  }

}

function endTag(tagName) {
  if (tagName == "h1" || tagName == "h2" || tagName == "h3") {
    isHeaderTag = false;
    // check title
    if (chapterHTML == "") {
      title = getChapterTitle(titleBuffer);
    }
  }
  if (inside && tagName == "p") {
    buffer.push("</p>");
  }
  if (inside && buffer.length > 5000) {
    index = templateHTML.indexOf("</body>");
    chapterHTML = templateHTML.substr(0, index) + buffer + "</body></html>"
    chapterTitle = title
    if (links.length > 0) {
      nextChapterURL = links[0]
    }
    logInfo(">>>>>>>> Start chapter: " + chapterTitle + " <<<<<<<<<<<");
    logInfo(chapterHTML);
    logInfo(">>>>>>>> Next chapter: " + nextChapterURL + " <<<<<<<<<<<");
  }
}

function text(text) {
  if (inside) {
    buffer += text;
    logInfo("found text node: " + text);
  }
  if (isHeaderTag) {
    titleBuffer += text;
  }
}

function isNextChapterURL(currentChapterURL, url) {
	result = false;
	index0 = currentChapterURL.lastIndex("/");
	currentChapterNo = -1;
	if (index0 != -1) {
		currentChapterNo = extractChapterNumber(currentChapterURL.substr(index0));
	}
	index1 = url.lastIndex("/");
	nextChapterNo = -1;
	if (index1 != -1) {
		nextChapterNo = extractChapterNumber(url.substr(index1));
	}
	if (currentChapterNo != -1 && nextChapterNo == currentChapterNo+1) {
		result = true;
	}
	if (result) {
		logInfo("isNextChapterURL - " + url + " -> " + result);
	}
	return result
}

function getChapterTitle(html) {
	title = "";
	for (i=0; i<chapterPrefixes.length; i++) {
		restr = "\\s*" + chapterPrefixes[i] + "\\s*\\d+";
		re = new RegExp(restr);
		if (re.test(html)) {
			title = html;
			logInfo("getchaptertitle: found title [" + title + "]");
			break
		}
	}
	return title;
}

function extractChapterNumber(s) {
	x = -1;
	buf = "";
	for (i=0; i <s.length; i++) {
		if (s[i] >= 0x30 && s[i] <= 0x39) {
			buf += s[i];
		} else if (buf.length > 0) {
			break;
		}
	}
	if (buf.length > 0) {
		x = parseInt(buf);
	}
	return x;
}
`

func getTagAttribute(z *html.Tokenizer, name string) string {
	return "tagAttr:" + name
}
func TestOtto2(t *testing.T) {
	//util.LoadConfig("c:/dev/dvan/github/tusach/server/config.json")
	//config := util.GetConfiguration()

	data, err := ioutil.ReadFile("./parser.js")
	if err != nil {
		t.Error("Failed to load js: ", err)
	}
	engine, err := Compile(t, "", data)

	//engine, err := Compile(t, srcScript2)
	if err != nil {
		t.Error("Failed to compile js: ", err)
	}

	engine.jsVM.Set("getTagAttribute", func(call otto.FunctionCall) otto.Value {
		s := getTagAttribute(nil, call.Argument(0).String())
		val, _ := engine.jsVM.ToValue(s)
		return val
	})

	if _, err = engine.jsVM.Run(engine.script); err != nil {
		t.Error("Failed to run js: ", err)
	}
	url := "http://truyencuatui.com"
	template := "<html><body></body></html>"
	if _, err = engine.jsVM.Call(`begin`, nil, template, url); err != nil {
		t.Error("Failed to call function begin: ", err)
	}

}

type ScriptEngine struct {
	jsVM   *otto.Otto
	script *otto.Script
}

func Compile(t *testing.T, scriptFile string, scriptData []byte) (*ScriptEngine, error) {
	if scriptData == nil && scriptFile == "" {
		return nil, errors.New("Missing argument!")
	}
	engine := new(ScriptEngine)
	engine.jsVM = otto.New()

	engine.jsVM.Set("logInfo", func(call otto.FunctionCall) otto.Value {
		fmt.Println("invoked logInfo: " + call.Argument(0).String())
		logger.Info(call.Argument(0).String())
		return otto.Value{}
	})

	engine.jsVM.Set("logError", func(call otto.FunctionCall) otto.Value {
		logger.Error(call.Argument(0).String())
		return otto.Value{}
	})

	logger.Infof("Compiling script ...")
	script, err := engine.jsVM.Compile(scriptFile, scriptData)
	if err != nil {
		logger.Errorf("Error compiling script: %s", err)
		return nil, err
	}
	engine.script = script
	logger.Info("script compiled succesffuly!")
	return engine, nil
}
