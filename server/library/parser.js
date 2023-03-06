chapterPrefixes = ["Chương", "CHƯƠNG", "chương", "Quyển", "QUYỂN", "quyển", "Hồi"];

// loginGet loginPost download downloadPart
parsingState = "";
csrfToken = "";
sessionId = "";
fullPathPrefix = "";
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
  this.fullPathPrefix = "http://" + goContext.Hostname;
  if (goContext.Chapter.ChapterUrl.indexOf("https") != -1) {
    this.fullPathPrefix = "https://" + goContext.Hostname;
  }  
  logDebug("js_downloadChapter() - " + goContext.Chapter.ChapterUrl + ", fullPathPrefix: " + fullPathPrefix + ", template: " + goContext.Template);
  chapterData = "";
  parsingState = "download";
  if (!sendRequest("GET", goContext.Chapter.ChapterUrl, 10, 1, [], [])) {
    return;
  }
  goContext.Chapter.ChapterHmtlRaw = goContext.Params["lastResponseBody"];
  goContext.Chapter.ChapterHtml = chapterData;
  var index = goContext.Template.indexOf("</body>");  
  if (goContext.Chapter.ChapterTitle == "") {
    goContext.Chapter.ChapterTitle = "Chapter " + goContext.Chapter.ChapterNo;
  }
  logInfo(">>>>>>>> chapter: " + goContext.Chapter.ChapterTitle + " <<<<<<<<<<< (" + goContext.Params["downloadSecondAttempt"] + ")");
  goContext.Chapter.ChapterHtml = "<h2>" + goContext.Chapter.ChapterTitle + "</h2>" + goContext.Chapter.ChapterHtml;
  goContext.Chapter.ChapterHtml = goContext.Template.substr(0, index) + goContext.Chapter.ChapterHtml + "</body></html>"
  logDebug(goContext.Chapter.ChapterHtml);
	if (chapterData.length < 500) {
		logError("No chapter data downloaded.");  
		goContext.Chapter.NextChapterUrl = "";
		if (goContext.Params["downloadSecondAttempt"] != "true") {
			goContext.Params["downloadSecondAttempt"] = "true";
			var url = getNextChapterURL(goContext.Chapter.ChapterUrl);
			if (url != "") {
				logInfo("download second attempt with url: " + url);  
				goContext.Chapter.ChapterUrl = url;
				js_downloadChapter();
			}
			goContext.Params["downloadSecondAttempt"] = "";
		}
	}
	logInfo(">>>>>>>> Next chapter: " + goContext.Chapter.NextChapterUrl + " <<<<<<<<<<<");  
}

function js_begin() {
  logDebug("js_begin()");
}

function js_end() {
  logDebug("js_end()")
}

function js_startTag(tagName, isSelfClosingTag) {
  try {
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
    } else if (parsingState == "download") {
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

function sendRequest(method, url, timeoutSec, numTries, headers, formdata, skipParse) {
  var status = goContext.Send(method, url, false, timeoutSec, numTries, headers, formdata);
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
  logDebug("getNextChapterURL - " + url + " downloadSecondAttempt:" 
		+ goContext.Params["downloadSecondAttempt"]
		+ " chapterUrl:" + goContext.Chapter.ChapterUrl
		+ " chapterNo:" + goContext.Chapter.ChapterNo);
		
  if (fullURL == "") {
    return "";
  }

	if (goContext.Params["downloadSecondAttempt"] == "true") {
    if (isDaoQuan()) {
      var pattern = "\/[0-9]+\/chuong\-";
      var arr = url.match(pattern);
      if (arr.length == 1) {
        var index1 = url.indexOf(arr[0]);
        var index2 = url.lastIndexOf("/chuong-");
        var n = parseInt(url.substr(index1+1, index2-index1-1), 10);
        return goContext.Chapter.ChapterUrl.substring(0, index1+1) + (n+1) + "/chuong-" + goContext.Chapter.ChapterNo;
      }		
      return "";
	  } else {
		  return "";
    }
	}

  result = "";
  if (isTruyenCuaTui()) {
		if (goContext.ParentTagValues["class"] == "next") {
      result = fullURL;
		}
	} else if (isTangThuVien() || isDaoQuan()) {																	
		var index = goContext.Chapter.ChapterUrl.lastIndexOf("/");
		if (index != -1 && goContext.Chapter.ChapterUrl.substring(index).indexOf("/chuong-") != -1) {
			var n = parseInt(goContext.Chapter.ChapterUrl.substring(index+"/chuong-".length), 10);
			result = goContext.Chapter.ChapterUrl.substring(0, index) + "/chuong-" + (n+1);
		}
  } else {
    parent1 = getParentPath(goContext.Chapter.ChapterUrl);
    parent2 = getParentPath(fullURL);          
    currentChapterNo = extractChapterNumber(goContext.Chapter.ChapterUrl);
    nextChapterNo = extractChapterNumber(fullURL);
    if (parent1 == parent2 && currentChapterNo != -1 && (nextChapterNo == currentChapterNo+1 || nextChapterNo == currentChapterNo+2)) {
      result = fullURL;
    }
    logDebug("nextChapterURL - " + result + ", currentChapterNo:" + currentChapterNo + ", nextChapterNo:" + nextChapterNo);  
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

function isTruyenCuaTui() {
  return fullPathPrefix.indexOf("truyencuatui") != -1;
}

function isTangThuVien() {
  return fullPathPrefix.indexOf("tangthuvien") != -1;
}

function isDaoQuan() {
  return fullPathPrefix.indexOf("daoquan") != -1;
}