chapterPrefixes = ["Chương", "CHƯƠNG", "chương", "Quyển", "QUYỂN", "quyển", "Hồi"];

var chapterHTML;
var chapterTitle = "";
var nextChapterURL = "";

buffer = "";
titleBuffer = "";
inside = false;
tagname = "";
isHeaderTag = false;
href = "";
links = [];
title = "";
currentChapterURL = "";
templateHTML = "";

logInfo("executing script...");

function begin(template, url) {
  currentChapterURL = url;
  templateHTML = template;
  console.log("begin() - " + url + ", template: " + template);
}

function end() {
  logInfo("end() - chapterTitle=" + chapterTitle + ", nextChapterURL=" + nextChapterURL);
}

function startTag(tagName, isSelfClosingTag) {
  if (tagName == "h1" || tagName == "h2" || tagName == "h3") {
    isHeaderTag = true;
    titleBuffer = "";
  }

  if (tagName == "div") {
    inside = true;
    buffer = "";
    //logInfo("startTag <div>, inside:" + inside);
  } else if (inside) {
    if (tagName == "b") {
      buffer += "<b/>";
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

function endTag(tagName) {
  if (tagName == "h1" || tagName == "h2" || tagName == "h3") {
    isHeaderTag = false;
    // check title
    if (chapterTitle == "") {
      chapterTitle = getChapterTitle(titleBuffer);
    }
  }
  if (inside && tagName == "p") {
    buffer += "</p>";
  }
  if (inside && tagName == "div") {
    //logInfo("endTag <div>, inside:" + inside);
    if (buffer.length > 5000) {
      index = templateHTML.indexOf("</body>");
      chapterHTML = templateHTML.substr(0, index) + buffer + "</body></html>"
      logInfo(">>>>>>>> Start chapter: " + chapterTitle + " <<<<<<<<<<<");
      logInfo(chapterHTML);
      logInfo(">>>>>>>> Next chapter: " + nextChapterURL + " <<<<<<<<<<<");
    }
    buffer = "";
    inside = false;
  }
  if (tagName == "a") {
    href = "";
  }
}

function text(text) {
  //logInfo("found text node: " + text);
  if (inside) {
    buffer += text;
  }
  if (isHeaderTag) {
    titleBuffer += text;
  }
  if (href != "" && text.toLowerCase() == "next" && nextChapterURL == "") {
    nextChapterURL = createFullChapterURL(href);
  }
}

function getNextChapterURL(url) {
  logInfo("getNextChapterURL - " + currentChapterURL + " --/-- " + url);
  fullURL = createFullChapterURL(url);
  if (fullURL == "") {
    return "";
  }
  result = "";
  currentChapterNo = extractChapterNumber(currentChapterURL);
  nextChapterNo = extractChapterNumber(fullURL);
  if (currentChapterNo != -1 && nextChapterNo == currentChapterNo+1) {
    result = fullURL;
  }
  
	if (result) {
    logInfo("isNextChapterURL - " + currentChapterURL + "/" + url + " -> " + result 
      + ", currentChapterNo:" + currentChapterNo + ", nextChapterNo:" + nextChapterNo);
	}
	return result
}

function getChapterTitle(html) {
  logInfo("getchaptertitle: html [" + html + "]");
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

function createFullChapterURL(url) {
  if (!startsWidth(url, "http")) {
    parent1 = getParentPath(currentChapterURL);
    parent2 = getParentPath(url);
    if (endsWith(parent1, parent2)) {
      return parent1 + "/" + url.substr(parent2.length+1);
    }
  }
  return "";
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
