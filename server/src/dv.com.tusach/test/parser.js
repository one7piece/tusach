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

var tagValue = getTagAttribute("dvan");
logInfo("executing script..." + tagValue);

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
