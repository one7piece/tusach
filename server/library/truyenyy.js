chapterPrefixes = ["Chương", "CHƯƠNG", "chương", "Quyển", "QUYỂN", "quyển", "Hồi"];

// loginGet loginPost download
var parsingState = "";
var csrfToken = "";
var sessionId = "";

fullPathPrefix = "";
buffer = "";
titleBuffer = "";
divDepth = 0;
tagname = "";
isHeaderTag = false;
href = "";
links = [];
title = "";

logDebug("executing script...");

// methods from GO
//------------------------------------------------------------------------------
function js_downloadChapter() {
  //var index = currentChapterURL.indexOf("/", "http://..".length)
  //settings.fullPathPrefix = currentChapterURL.substr(0, index)
  logDebug("js_downloadChapter() - " + goContext.Chapter.ChapterUrl + ", sessionId:" + sessionId + ", template: " + goContext.Template);

  if (sessionId == "") {
    login();    
  }
  logInfo("js_downloadChapter() - after login, sessionId: " + sessionId);
  if (sessionId != "") {
    logInfo("first download " + goContext.Chapter.ChapterUrl);
    parsingState = "download";
    // set token & session id
    var headers = {Origin: "https://truyenyy.com/login/", Referer: "https://truyenyy.com"};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    headers["X-CSRFToken"] = csrfToken;
    var formdata = {sessionid: sessionId, next: "/"};      
    var status = goContext.Send("GET", goContext.Chapter.ChapterUrl, false, 20, 1, headers, formdata);
    parsingState = "";
    if (status == 5000) {
      logInfo("download chapter truyenyy.com failed: " + status);
      return;
    }  
    logInfo("------------------------------------------------------------------")
    logInfo("download chapter response: \n" + goContext.Params["lastResponseBody"]);
    logInfo("------------------------------------------------------------------")
  }
}

//func (loader *ContentLoader) Send(method string, url string, timeoutSec int, numTries int, header map[string]string, formdata map[string]string) {

function login() {
  //formdata = {}
  logInfo("first loginGet to truyenyy.com ...");
  csrfToken = "";
  parsingState = "loginGet"
  var status = goContext.Send("GET", "https://truyenyy.com/login/", false, 10, 1, {}, {});
  parsingState = "";
  if (status == 5000) {
    logInfo("loginGet to truyenyy.com failed: " + status);
    return false;
  }
  // send second loginGet to get cookie
  logInfo("second loginGet to truyenyy.com ...");
  csrfToken = "";
  parsingState = "loginGet"
  var status = goContext.Send("GET", "https://truyenyy.com/login/", false, 10, 1, {}, {});
  parsingState = "";
  
  if (csrfToken == "") {
    logInfo("loginGet failed to get crsfToken from response");
    return false;
  }
  logInfo("loginGet crsfToken: " + csrfToken);

  logInfo("first loginPost to truyenyy.com ...");
  var formdata = {username: "one777piece", password: "Song0vui", next: "/"};
  var headers = {Origin: "https://truyenyy.com/login/", Referer: "https://truyenyy.com"};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  headers["X-CSRFToken"] = csrfToken;
  parsingState = "loginPost";
  var status = goContext.Send("POST", "https://truyenyy.com/login/", false, 10, 1, headers, formdata);
  parsingState = "";
  if (status == 5000) {
    logInfo("loginPost to truyenyy.com failed: " + status);
    return false;
  }

  logInfo("second loginPost to truyenyy.com ...");
  parsingState = "loginPost";
  var status = goContext.Send("GET", "https://truyenyy.com/login/", false, 10, 1, headers, formdata);
  parsingState = "";
  sessionId = goContext.Cookies["truyenyy_sessionid"];
  if (sessionId && goContext.Cookies["csrftoken"]) {
    logInfo("loginPost to truyenyy.com succeeded, sessionId: " + sessionId + ", crsfToken: " + goContext.Cookies["csrftoken"]);
    return true;
  }
  sessionId = "";
  logInfo("loginPost to truyenyy.com failed, status: " + status);
  return false;
}

function js_begin(url, status) {
  logInfo("js_begin() - status:" + status + ", url:" + url)
  if (parsingState == "loginGet") {
    // extract the crsf token
  } else if (parsingState == "loginPost") {
    // extract the session id
  }
}

function js_end() {
  logInfo("js_end()")
  if (parsingState == "loginGet" || parsingState == "loginPost") {
  } else {
    logInfo(">>>>>>>> chapter: " + goContext.Chapter.chapterTitle + " <<<<<<<<<<<");
    var index = goContext.Template.indexOf("</body>");
  
    if (goContext.Chapter.ChapterTitle == "") {
      goContext.Chapter.ChapterTitle = "Chapter " + goContext.Chapter.ChapterNo;
    }
    goContext.Chapter.chapterHtml = "<h2>" + goContext.Chapter.ChapterTitle + "</h2>" + goContext.Chapter.ChapterHtml;
    goContext.Chapter.ChapterHtml = goContext.Template.substr(0, index) + goContext.Chapter.ChapterHtml + "</body></html>"
    logInfo(goContext.Chapter.ChapterHtml);
    logInfo(">>>>>>>> Next chapter: " + goContext.Chapter.NextChapterUrl + " <<<<<<<<<<<");
  }
}

function js_startTag(tagName, isSelfClosingTag) {
  //logInfo("js_startTag() - tagName:" + tagName + ", isSelfClosingTag:" + isSelfClosingTag)
  if (parsingState == "loginGet") {
    if (csrfToken != "") {
      return;
    }
    // reading the csrfmiddlewaretoken value from then input tag
    if (tagName == "input") {
      //logInfo("js_startTag() - input element, name:" + goContext.CurrentTagValues["name"] + ", value:" + goContext.CurrentTagValues["name"])
      if (goContext.CurrentTagValues["name"] == "csrfmiddlewaretoken") {
        csrfToken = goContext.CurrentTagValues["value"];
      }
    }
  } else if (parsingState == "loginPost") {
  } else {
    //logDebug("startTag: " + tagName + ", isSelfClosingTag=" + isSelfClosingTag)
    if (tagName == "h1" || tagName == "h2" || tagName == "h3") {
      isHeaderTag = true;
      titleBuffer = "";
    }

    if (tagName == "div") {
      divDepth++;
      updateChapterHTML();
      //logDebug("startTag <div>, divDepth:" + divDepth);
    } else {
      if (tagName == "br") {
        buffer += "<br/>";
      } else if (tagName == "p") {
        buffer += "<p>";
      }
    }
    if (tagName == "a") {
      href = goContext.CurrentTagValues["href"];
      if (goContext.Chapter.NextChapterUrl == "") {
        goContext.Chapter.NextChapterUrl = getNextChapterURL(href);
      }
    }
  }
}

function js_endTag(tagName) {
  if (parsingState == "loginGet" || parsingState == "loginPost") {
  } else {
    //logDebug("endTag: " + tagName + ", divDepth:" + divDepth);
    if (tagName == "h1" || tagName == "h2" || tagName == "h3") {
      isHeaderTag = false;
      // check title
      if (goContext.Chapter.ChapterTitle == "") {
        goContext.Chapter.ChapterTitle = getChapterTitle(titleBuffer);
      }
    }
    //if (divDepth > 0 && tagName == "p") {
    if (tagName == "p") {
      buffer += "</p>";
    }
    if (divDepth > 0 && tagName == "div") {    
      divDepth--;
      updateChapterHTML();
    }
    if (tagName == "a") {
      href = "";
    }
  }
}

function js_text(text) {
  if (parsingState == "loginGet" || parsingState == "loginPost") {
  } else {
    if (divDepth > 0) {
      //logDebug("found text node: " + text + "");
      buffer += text;
    } else {
      //logDebug("outside text node: " + text + "");
    }
    if (isHeaderTag) {
      titleBuffer += text;
    }
    if (href != "" && text.toLowerCase() == "next" && goContext.Chapter.NextChapterUrl == "") {
      goContext.Chapter.NextChapterUrl = getFullPath(href);
    }
  }
}
// 
//------------------------------------------------------------------------------

function updateChapterHTML() {
  if (buffer.indexOf("function") == -1 && buffer.indexOf("return") == -1) {
    //logDebug(">>>>>>>> text block " + buffer.length + " <<<<<<<<<<<");
    //logDebug(buffer);
    //logDebug(">>>>>>>> --------------- <<<<<<<<<<<");
    if (buffer.length > 2000) {
      chapterHTML += buffer
      //logDebug(">>>>>>>> chapter segment <<<<<<<<<<<");
      //logDebug(buffer);
      //logDebug(">>>>>>>> --------------- <<<<<<<<<<<");
    }
  }

  buffer = "";
}

function getNextChapterURL(url) {  
  fullURL = getFullPath(url);
  logDebug("getNextChapterURL - " + url + " [" + fullURL + "]");
  if (fullURL == "") {
    return "";
  }

  result = "";
  if (isTruyenCuaTui()) {
    logDebug("name=" + getParentTagAttribute("name") + ", class=" + getParentTagAttribute("class"));
    if (getParentTagAttribute("name") == "li" && getParentTagAttribute("class") == "next") {
      result = fullURL;
      logInfo("nextChapterURL - " + result);
    }
  } else {
    parent1 = getParentPath(currentChapterURL);
    parent2 = getParentPath(fullURL);          
    currentChapterNo = extractChapterNumber(currentChapterURL);
    nextChapterNo = extractChapterNumber(fullURL);
    //logDebug("getNextChapterURL - currentChapterNo=" + currentChapterNo + ", nextChapterNo=" + nextChapterNo)
    if (parent1 == parent2 && currentChapterNo != -1 && (nextChapterNo == currentChapterNo+1 || nextChapterNo == currentChapterNo+2)) {
      result = fullURL;
      logInfo("nextChapterURL - " + result 
        + ", currentChapterNo:" + currentChapterNo + ", nextChapterNo:" + nextChapterNo);
    }
  }
  
	return result
}

function getChapterTitle(html) {
  logDebug("getchaptertitle: html [" + html + "]");
	title = "";
	for (i=0; i<chapterPrefixes.length; i++) {
		restr = "\\s*" + chapterPrefixes[i] + "\\s*\\d+";
		re = new RegExp(restr);
		if (re.test(html)) {
			title = html;
			logDebug("getchaptertitle: found title [" + title + "]");
			break
		}
	}
	return title;
}

// site specific methods
//------------------------------------------------------------------------------

function isTruyenCuaTui(url) {
  return url.indexOf("truyencuatui") != -1;
}

function isTruyenYY(url) {
  return url.indexOf("truyenyy.com") != -1;
}

// common helper methods
//------------------------------------------------------------------------------

function extractChapterNumber(url) {
  parent = getParentPath(url);
  s = url.substr(parent+1);
  x = -1;
	buf = "";
	for (i=0; i <s.length; i++) {
		if (s[i] >= '0' && s[i] <= '9') {
			buf += s[i];
		} else if (buf.length > 0) {
			break;
		}
	}
	if (buf.length > 0) {
    x = parseInt(buf);
    if (x > 3000) {
      x = -1;
    }
	}
	return x;
}

// convert relative URL to full one
function getFullPath(url) {
  if (startsWidth(url, "http")) {
    return url;
  }

  if (startsWidth(url, "/")) {
    return fullPathPrefix + url; 
  }
  return fullPathPrefix + "/" + url;
}

function getParentPath(url) {
  // remove ending /
  if (endsWith(url, "/")) {
    url = url.substr(0, url.length-1);
  }

  index = url.lastIndexOf("/");
	if (index != -1) {
    return url.substr(0, index);
	}
  return "";
}

function startsWidth(source, str) {
  if (source.length >= str.length) {
    return (source.substr(0, str.length) == str);
  }
  return false;
}

// check if source string end with the given substring
function endsWith(source, str) {
  if (source.length >= str.length) {
    return (source.substr(source.length-str.length) == str);
  }
  return false;
}
