chapterPrefixes = ["Chương", "CHƯƠNG", "chương", "Quyển", "QUYỂN", "quyển", "Hồi"];

var settings = {
  templateHTML: "",
  siteParams: {},
  siteHeaders: {}
};
var chapterData;

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
function js_downloadChapter(chapterNo, url) {
  chapterData = {
    currentChapterURL: url,
    currentChapterNo: chapterNo,
    chapterHTML: "",
    chapterTitle: "",
    nextChapterURL: ""
  };
  if (isTruyenYY(url)) {
    // need to login and authenticate
    if (!siteParams.sessionId) {
      loginTruyenYY();
    }
  }
  sendHttpRequest(chapterData.currentChapterURL);
}

function js_begin(template, chapterNo, url) {
  currentChapterNo = chapterNo;
  currentChapterURL = url;
  index = currentChapterURL.indexOf("/", "http://..".length)
  fullPathPrefix = currentChapterURL.substr(0, index)
  templateHTML = template;
  chapterHTML = "";
  logDebug("begin() - " + url + ", fullPathPrefix: " + fullPathPrefix + ", template: " + template);
}

function js_end() {
  logInfo(">>>>>>>> chapter: " + chapterTitle + " <<<<<<<<<<<");
  index = templateHTML.indexOf("</body>");

	if (chapterTitle == "") {
		chapterTitle = "Chapter " + currentChapterNo;
  }
  chapterHTML = "<h2>" + chapterTitle + "</h2>" + chapterHTML;
  chapterHTML = templateHTML.substr(0, index) + chapterHTML + "</body></html>"
  logInfo(chapterHTML);
  logInfo(">>>>>>>> Next chapter: " + nextChapterURL + " <<<<<<<<<<<");
}

function js_startTag(tagName, isSelfClosingTag) {
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
    href = getTagAttribute("href");
    if (nextChapterURL == "") {
      nextChapterURL = getNextChapterURL(href);
    }
  }
}

function js_endTag(tagName) {
  //logDebug("endTag: " + tagName + ", divDepth:" + divDepth);
  if (tagName == "h1" || tagName == "h2" || tagName == "h3") {
    isHeaderTag = false;
    // check title
    if (chapterTitle == "") {
      chapterTitle = getChapterTitle(titleBuffer);
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

function js_text(text) {
  if (divDepth > 0) {
    //logDebug("found text node: " + text + "");
    buffer += text;
  } else {
    //logDebug("outside text node: " + text + "");
  }
  if (isHeaderTag) {
    titleBuffer += text;
  }
  if (href != "" && text.toLowerCase() == "next" && nextChapterURL == "") {
    nextChapterURL = getFullPath(href);
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

function sendHttpRequest(method, url) {
  go_sendHttpRequest(method, url, settings.siteHeaders, settings.siteParams);
}

// site specific methods
//------------------------------------------------------------------------------

function isTruyenCuaTui(url) {
  return url.indexOf("truyencuatui") != -1;
}

function isTruyenYY(url) {
  return url.indexOf("truyenyy.com") != -1;
}

function loginTruyenYY() {
  // clear cache
  settings.siteHeaders = {}
  settings.siteParams = {}
  sendHttpRequest("GET", "")
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
