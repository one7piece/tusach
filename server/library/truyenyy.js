chapterPrefixes = ["Chương", "CHƯƠNG", "chương", "Quyển", "QUYỂN", "quyển", "Hồi"];
chapContentPrefix = "/web-api/novel/chapter-content-get/";

// loginGet loginPost download downloadPart
parsingState = "";
csrfToken = "";
sessionId = "";
fullPathPrefix = "https://truyenyy.vn";
originUrl = "https://truyenyy.vn";
loginUrl = "https://truyenyy.vn/login/";
refererUrl = "https://truyenyy.vn/login/";
buffer = "";
titleBuffer = "";
divDepth = 0;
tagname = "";
isHeaderTag = false;
href = "";
chapterData = "";
nextTextIsValid = true;

logDebug("executing script...");

// methods from GO
//------------------------------------------------------------------------------
function js_downloadChapter() {
  logDebug("js_downloadChapter() - " + goContext.Chapter.ChapterUrl + ", sessionId:" + sessionId + ", template: " + goContext.Template);

  if (sessionId == "") {
    login();    
  }
  logInfo("js_downloadChapter() - after login, sessionId: " + sessionId);
  if (sessionId != "") {
    chapterData = "";
    logDebug("first download " + goContext.Chapter.ChapterUrl);
    // set token & session id
    var headers = {Origin: originUrl, Referer: refererUrl};
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    headers["X-CSRFToken"] = csrfToken;
    var formdata = {sessionid: sessionId, next: "/"};      
    parsingState = "download";
    if (!sendRequest("GET", goContext.Chapter.ChapterUrl, 20, 1, headers, formdata)) {
      return;
    }
    var str = goContext.Params["lastResponseBody"];
    logDebug("raw chapter response body:\n" + str);
    if (str.indexOf(chapContentPrefix, 0) != -1) {
      downloadParts(headers, formdata);
    } else if (str.indexOf("Mua Chương Này") != -1 && str.indexOf("id=\"btn_buy\"") != -1) {
      var pattern = "/account/vip/chapter/buy/api/\",{chap_id:'";
      var index = str.indexOf(pattern);
      var index2 = str.indexOf("'}", index+pattern.length);
      if (index != -1 && index2 != -1) {
        var chapterId = str.substring(index+pattern.length, index2);
        logInfo("Need to buy chuong " + goContext.Chapter.ChapterNo + ", chap_id:'" + chapterId + "'");
        formdata = {chap_id: chapterId}
        headers = {Referer: goContext.Chapter.ChapterUrl};
        headers["Content-Type"] = "application/x-www-form-urlencoded";
        headers["X-CSRFToken"] = goContext.Cookies["csrftoken"];    
        //parsingState = "buy";
        if (!sendRequest("POST", getFullPath("/account/vip/chapter/buy/api/"), 20, 1, headers, formdata)) {
          return;
        }    
        formdata = {sessionid: sessionId, next: "/"};      
        headers["X-CSRFToken"] = csrfToken;
        headers["Referer"] = refererUrl;
        parsingState = "download";
        if (!sendRequest("GET", goContext.Chapter.ChapterUrl, 20, 1, headers, formdata)) {
          return;
        }
        str = goContext.Params["lastResponseBody"];
        if (str.indexOf(chapContentPrefix, 0) != -1) {
          downloadParts(headers, formdata);
        } else {
          logError("Failed to buy chapter " + goContext.Chapter.ChapterNo);
          return;
        }
      }
    } else {
      goContext.Chapter.ChapterHmtlRaw = goContext.Params["lastResponseBody"];
      goContext.Chapter.ChapterHtml = chapterData;
    }

    if (goContext.Chapter.ChapterHtml.length > 1000) {
      var index = goContext.Template.indexOf("</body>");  
      if (goContext.Chapter.ChapterTitle == "") {
        goContext.Chapter.ChapterTitle = "Chapter " + goContext.Chapter.ChapterNo;
      }
      logInfo(">>>>>>>> chapter: " + goContext.Chapter.ChapterTitle + " <<<<<<<<<<<");
      goContext.Chapter.ChapterHtml = "<h2>" + goContext.Chapter.ChapterTitle + "</h2>" + goContext.Chapter.ChapterHtml;
      goContext.Chapter.ChapterHtml = goContext.Template.substr(0, index) + goContext.Chapter.ChapterHtml + "</body></html>"
      logInfo(goContext.Chapter.ChapterHtml);
      logInfo(">>>>>>>> Next chapter: " + goContext.Chapter.NextChapterUrl + " <<<<<<<<<<<");
    } else {
      logInfo(">>>>>>>> chapter: " + goContext.Chapter.ChapterTitle + " <<<<<<<<<<<");
      logInfo("Discard invalid chapter data: " + goContext.Chapter.ChapterHtml);
      goContext.Chapter.ChapterHtml = "";
      goContext.Chapter.NextChapterUrl = "";
    }
  }
}

function downloadParts(headers, formdata) {
  var index = 0;
  chapterParts = {};
  var str = goContext.Params["lastResponseBody"];
  var index = str.indexOf(chapContentPrefix, 0);
  if (index == -1) {
    logError("Could not find chapter pattern: " + chapContentPrefix);
    return;
  }
  var index2 = str.indexOf("?chap_id=", index+1);
  var index3 = str.indexOf("&part=", index+1);
  if (!(index3 > index2 && index3-index < 200)) {
    logError("Could not find chapter markers: ?chap_id and &part");
    return;
  }
  var chapterId = str.substring(index2+"?chap_id=".length, index3);
  for (var partNo=0; partNo<10; partNo++) {
    var partHolder = "id=\"vip-content-placeholder";
    if (partNo > 0) {
      partHolder += "-" + partNo;
    }
    partHolder += "\"";
    if (str.indexOf(partHolder) == -1) {
      break;
    }

    var url = fullPathPrefix+str.substring(index, index3) + "&part=" + partNo;
    logDebug("downloading chapter: " + url);
    formdata = {chapter_id: chapterId, part: partNo};      
    parsingState = "downloadPart";
    if (!sendRequest("GET", url, 20, 1, headers, formdata, false, true)) {
      goContext.Chapter.ChapterHtml = "";
      return;
    }
    chapterData = "";
    if (goContext.Params["lastResponseBody"]) {
      logDebug("---------------------------------------------------------------");
      logDebug("loaded chapter part#" + partNo + ": \n" + goContext.Params["lastResponseBody"]);
      logDebug("---------------------------------------------------------------");
      var json = JSON.parse(goContext.Params["lastResponseBody"])
      unmangleChapterData(json.content);
    }
    goContext.Chapter.ChapterHmtlRaw += goContext.Params["lastResponseBody"]; 
    goContext.Chapter.ChapterHtml += chapterData;
  }
}

function login() {
  //formdata = {}
  logInfo("sending loginGet to truyenyy.vn ...");
  csrfToken = "";
  parsingState = "loginGet"
  if (!sendRequest("GET", loginUrl, 20, 1, {}, {}, false)) {
    return;
  }
/*
  // send second loginGet to get cookie
  logInfo("second loginGet to truyenyy.vn ...");
  csrfToken = "";
  parsingState = "loginGet"
  if (!sendRequest("GET", loginUrl, 20, 1, {}, {}, false)) {
    return;
  }  
*/	
  if (csrfToken == "") {
    logError("loginGet failed to get crsfToken from response");
    return false;
  }
  logInfo("loginGet x-crsfToken: " + csrfToken);

  logInfo("sending loginPost to truyenyy.vn ...");
  var formdata = {username: "one777piece", password: "Song0vui", next: ""};
  var headers = {Origin: originUrl, Referer: refererUrl};
  headers["Content-Type"] = "application/x-www-form-urlencoded";
  headers["X-CSRFToken"] = csrfToken;
  
  parsingState = "loginPost";
  if (!sendRequest("POST", loginUrl, 20, 1, headers, formdata, false)) {
    return;
  }  
/*
  logInfo("second loginPost (GET) to truyenyy.vn ...");
  parsingState = "loginPost";
  if (!sendRequest("GET", loginUrl, 20, 1, headers, formdata, true)) {
    return;
  }  
*/
  sessionId = goContext.Cookies["truyenyy_sessionid"];
  if (sessionId && sessionId != "") {
    logInfo("loginPost to truyenyy.vn succeeded, truyenyy_sessionid=" + sessionId);
    return true;
  }
  sessionId = "";
  logError("loginPost to truyenyy.vn failed, no truyenyy_sessionid cookie found");
  return false;
}

function js_begin() {
  logDebug("js_begin()");
}

function js_end() {
  logDebug("js_end()")
}

function js_startTag(tagName, isSelfClosingTag) {
  try {
    //logDebug("js_startTag() - tagName:" + tagName + ", isSelfClosingTag:" + isSelfClosingTag);
    if (parsingState == "loginGet") {
      if (csrfToken != "") {
        return;
      }
      // reading the csrfmiddlewaretoken value from then input tag
      if (tagName == "input") {
        logDebug("js_startTag() - input element, name:" + goContext.CurrentTagValues["name"] + ", value:" + goContext.CurrentTagValues["name"]);
        if (goContext.CurrentTagValues["name"] == "csrfmiddlewaretoken") {
          csrfToken = goContext.CurrentTagValues["value"];
        }
      }
    } else if (parsingState == "loginPost") {
    } else if (parsingState == "download") {
      //logDebug("startTag: " + tagName + ", isSelfClosingTag=" + isSelfClosingTag);
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
    } else if (parsingState == "downloadPart") {
      if (tagName == "br") {
        buffer += "<br/>";
      } else if (tagName == "p") {
        buffer += "<p>";
      }
    } else if (parsingState == "unmangle") {
      if (tagName == "br") {
        buffer += "<br/>";
      } else if (tagName == "p") {
        buffer += "<p>";
        nextTextIsValid = false;
      }
    }
  } catch (ex) {
    logError(ex);
    throw ex;
  }
}

function js_endTag(tagName) {
  if (parsingState == "loginGet" || parsingState == "loginPost") {
  } else if (parsingState == "download") {
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
  } else if (parsingState == "downloadPart") {
    if (tagName == "p") {
      buffer += "</p>";
    }
  } else if (parsingState == "unmangle") {
    if (tagName == "p") {
      buffer += "</p>";
    }
  }
}

function js_text(text) {
  if (parsingState == "loginGet" || parsingState == "loginPost") {
  } else if (parsingState == "download") {
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
  } else if (parsingState == "unmangle") {
    if (text.indexOf("display") != -1) {
      nextTextIsValid = false;
    } else if (text.length > 50) {
      nextTextIsValid = true;
    }
    logDebug("js_text [" + text + "] " + nextTextIsValid);
    if (nextTextIsValid || text.trim().length == 0) {
      buffer += text;
      nextTextIsValid = false;
    } else {
      nextTextIsValid = true;
    }
  }
}
// 
//------------------------------------------------------------------------------

function sendRequest(method, url, timeoutSec, numTries, headers, formdata, followRedirect, skipParse) {	
  var status = goContext.Send(method, url, (followRedirect === true ? true : false), timeoutSec, numTries, headers, formdata);
  if (status != 200 && status != 301 && status != 302) {
    logError("Failed to send request: " + url + ", response status:" + status);
    return false;
  }
  if (skipParse !== true) {
    if (goContext.Parse(goContext.Params["lastResponseBody"]) != 0) {
      logError("Failed to parse response, status:" + status);
      return false;
    }
  }
  return true;
}

function unmangleChapterData(data) {
  nextTextIsValid = false;
  parsingState = "unmangle";
  buffer = "";
  goContext.Parse(data);
  chapterData = buffer
}

function updateChapterHTML() {
  if (buffer.indexOf("function") == -1 && buffer.indexOf("return") == -1) {
    //logDebug(">>>>>>>> text block " + buffer.length + " <<<<<<<<<<<");
    //logDebug(buffer);
    //logDebug(">>>>>>>> --------------- <<<<<<<<<<<");
    if (buffer.length > 2000) {
      chapterData += buffer
      //logDebug(">>>>>>>> chapter segment <<<<<<<<<<<");
      //logDebug(buffer);
      //logDebug(">>>>>>>> --------------- <<<<<<<<<<<");
    }
  }

  buffer = "";
}

function getNextChapterURL(url) {  
  if (!url) {
    return "";
  }
  fullURL = getFullPath(url);
  //logDebug("getNextChapterURL - " + url + " [" + fullURL + "]");
  if (fullURL == "") {
    return "";
  }

  result = "";
  parent1 = getParentPath(goContext.Chapter.ChapterUrl);
  parent2 = getParentPath(fullURL);          
  currentChapterNo = extractChapterNumber(goContext.Chapter.ChapterUrl);
  nextChapterNo = extractChapterNumber(fullURL);
  if (parent1 == parent2 && currentChapterNo != -1 && (nextChapterNo == currentChapterNo+1 || nextChapterNo == currentChapterNo+2)) {
    result = fullURL;
  }
  //logInfo("nextChapterURL - " + result + ", currentChapterNo:" + currentChapterNo + ", nextChapterNo:" + nextChapterNo);
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
  if (startsWith(url, "http")) {
    return url;
  }

  if (startsWith(url, "/")) {
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

function startsWith(source, str) {
  if (source && str && source.length >= str.length) {
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
