package maker

import (
	"bytes"
	"encoding/json"
	"errors"
	"fmt"
	"io/ioutil"
	"os"
	"os/exec"
	"regexp"
	"strconv"
	"strings"

	"dv.com.tusach/logger"
	"dv.com.tusach/util"
)

type BookSite struct {
	Parser        string
	Referer       string
	Cookie        string
	NumTries      int
	TimeoutSec    int
	BatchSize     int
	BatchDelaySec int
}

type HttpService interface {
	ExecuteRequest(url string) []byte
}

type BookMaker struct {
	DB Persistence
}

func (bookMaker BookMaker) GetBookSites() []string {
	sites := []string{}
	// get list of parsers
	names, err := util.ListDir(util.GetParserPath(), true)
	if err != nil {
		logger.Error("Error reading parser directory. " + err.Error())
		return sites
	}
	for _, name := range names {
		// call parser to check url support
		logger.Debug("executing validate command: " + util.GetParserPath() + "/" + name)
		cmd := exec.Command(util.GetParserPath()+"/"+name,
			"-configFile="+util.GetConfigFile(), "-op=v",
			"-url=http://dummy.com")
		out, err := cmd.CombinedOutput()
		str := string(out)
		logger.Debugf("validate command output: %s", str)
		if err != nil {
			logger.Error("Error checking url. " + err.Error())
			return sites
		}

		lines := strings.Split(str, "\n")
		var m map[string]string
		for _, line := range lines {
			if strings.HasPrefix(line, "parser-output:") {
				jsonstr := line[len("parser-output:"):]
				//logger.Debugf("Found json: %s\n", jsonstr)
				json.Unmarshal([]byte(jsonstr), &m)
				//logger.Debugf("%v, validated: %s\n", m, m["validated"])
				break
			}
		}
		if m["url"] != "" {
			sites = append(sites, m["url"])
		}
	}

	logger.Debugf("Found book sites: [%v]\n", sites)
	return sites
}

func (bookMaker BookMaker) GetBookSite(url string) BookSite {
	site := BookSite{Parser: ""}
	if url == "" {
		logger.Warn("Parameter url is empty")
		return site
	}
	// get list of parsers
	names, err := util.ListDir(util.GetParserPath(), true)
	if err != nil {
		logger.Error("Error reading parser directory. " + err.Error())
		return site
	}
	for _, name := range names {
		// call parser to check url support
		cmd := exec.Command(util.GetParserPath()+"/"+name,
			"-configFile="+util.GetConfigFile(), "-op=v",
			"-url="+url)
		out, err := cmd.CombinedOutput()
		str := string(out)
		//logger.Infof("validate command output: ", str)
		if err != nil {
			logger.Error("Error validating url. " + err.Error())
			return site
		}

		lines := strings.Split(str, "\n")
		var m map[string]string
		for _, line := range lines {
			if strings.HasPrefix(line, "parser-output:") {
				jsonstr := line[len("parser-output:"):]
				//logger.Infof("Found json: %s\n", jsonstr)
				json.Unmarshal([]byte(jsonstr), &m)
				//logger.Infof("%v, validated: %s\n", m, m["validated"])
				break
			}
		}
		//logger.Infof("validated: %s\n", m["validated"])
		if m["validated"] == "1" {
			site.Parser = name
			site.BatchSize, _ = strconv.Atoi(m["batchSsize"])
			site.BatchDelaySec, _ = strconv.Atoi(m["batchDelaySec"])
			site.NumTries = 2
			break
		}
	}
	if site.Parser == "" {
		logger.Errorf("No book site found for url: %s\n", url)
	} else {
		logger.Infof("Found book site:[%v] for url:%s\n", site, url)
	}
	return site
}

func (bookMaker BookMaker) CreateBook(eventChannel util.EventChannel, book Book, site BookSite) {
	var numPagesLoaded = 0
	var aborted = false
	var errorMsg = ""

	em := util.CreateEventManager(eventChannel, 1)
	c := make(chan string)
	sink := EventSink{internalChannel: c, bookId: book.ID}
	em.StartListening(sink)

	go func() {
		logger.Infof("start monitoring book: %d-%s\n", book.ID, book.Title)
		for {
			msg, more := <-c
			logger.Debugf("Received message: %s for book: %d, more:%v\n", msg, book.ID, more)
			if msg == "abort" {
				aborted = true
				break
			}
			if !more {
				break
			}
		}
		logger.Infof("stop monitoring book: %d-%s\n", book.ID, book.Title)
	}()

	url := book.CurrentPageUrl
	if url == "" {
		url = book.StartPageUrl
	}

	// TODO set loader configuration

	for {
		if aborted || book.MaxNumPages > 0 && book.MaxNumPages <= book.CurrentPageNo {
			break
		}

		newChapterNo := book.CurrentPageNo + 1
		if book.CurrentPageUrl == url {
			newChapterNo = book.CurrentPageNo
		}
		newChapter := Chapter{BookId: book.ID, ChapterNo: newChapterNo}
		nextPageUrl, err := bookMaker.CreateChapter(site.Parser, url, &newChapter)

		if err != nil {
			errorMsg = err.Error()
			break
		}

		if newChapter.Title == "" {
			newChapter.Title = "Chapter " + strconv.Itoa(newChapter.ChapterNo)
		}
		logger.Infof("completed chapter: %d:%s, nextPageUrl:%s\n", newChapter.ChapterNo, newChapter.Title, nextPageUrl)

		// save the chapter
		err = bookMaker.DB.SaveChapter(newChapter)
		if err != nil {
			errorMsg = err.Error()
			logger.Error("Error saving chapter. " + errorMsg)
			break
		}
		book.CurrentPageNo = newChapterNo
		book.CurrentPageUrl = url
		numPagesLoaded++

		// check for no more pages
		if nextPageUrl == "" {
			logger.Info("No more next page url found.")
			break
		} else {
			_, err := bookMaker.saveBook(em, book, false)
			if err != nil {
				errorMsg = err.Error()
				break
			}
		}

		if nextPageUrl == url {
			logger.Errorf("Internal error. next page url is same as current page url: %s", url)
			break
		}
		url = nextPageUrl
	}

	book.ErrorMsg = errorMsg
	if book.ErrorMsg != "" {
		book.Status = STATUS_ERROR
		logger.Error(book.ErrorMsg)
	} else if aborted {
		book.Status = STATUS_ABORTED
	} else {
		book.Status = STATUS_COMPLETED
	}

	chapters, err := bookMaker.DB.LoadChapters(book.ID)
	if err != nil {
		errorMsg = fmt.Sprintf("Error loading chapters for book: %d. %s", book.ID, err.Error())
		logger.Error(errorMsg)
		book.ErrorMsg = errorMsg
		book.Status = STATUS_ERROR
	} else {
		err = bookMaker.MakeEpub(book, chapters)
		if err != nil {
			errorMsg = fmt.Sprintf("Error creating epub for book: %d. %s", book.ID, err.Error())
			logger.Error(errorMsg)
			book.ErrorMsg = errorMsg
			book.Status = STATUS_ERROR
			book.EpubCreated = false
		} else {
			book.EpubCreated = true
		}
	}

	bookMaker.saveBook(em, book, true)
}

func (bookMaker BookMaker) saveBook(manager *util.EventManager, book Book, done bool) (int, error) {
	id, err := bookMaker.DB.SaveBook(book)
	// notify channel
	if done {
		manager.Push(util.EventData{Name: "book.done", Data: strconv.Itoa(book.ID)})
	} else {
		manager.Push(util.EventData{Name: "book.update", Data: strconv.Itoa(book.ID)})
	}
	return id, err
}

func (bookMaker BookMaker) MakeEpub(book Book, chapters []Chapter) error {
	if book.CurrentPageNo == 0 {
		return errors.New("Book has no chapters")
	}
	// validate chapter html files
	for i := 0; i < len(chapters); i++ {
		chapter := chapters[i]
		filename := util.GetChapterFilename(book.ID, chapter.ChapterNo)
		if _, err := os.Stat(filename); os.IsNotExist(err) {
			return errors.New("Missing chapter file: " + filename)
		}
	}

	// update toc.ncx file
	tocFile := util.GetBookPath(book.ID) + "/OEBPS/toc.ncx"
	data, err := ioutil.ReadFile(tocFile)
	if err != nil {
		return errors.New("Failed to open file: " + tocFile + ". " + err.Error())
	}
	str := string(data)
	index := strings.Index(str, "</head>")
	if index == -1 {
		return errors.New("Cannot find </head> in " + tocFile + ". ")
	}

	var buffer bytes.Buffer
	buffer.WriteString(str[0 : index+len("</head>")])
	// add <docTitle>
	buffer.WriteString("<docTitle><text>" + book.Title + "</text></docTitle>\n")
	// add <docAuthor>
	buffer.WriteString("<docAuthor><text>" + book.Author + "</text></docAuthor>\n")
	buffer.WriteString("<navMap>\n")
	// add all <navPoint>
	for i := 0; i < len(chapters); i++ {
		chapter := chapters[i]
		filepath := util.GetChapterFilename(book.ID, chapter.ChapterNo)
		index := strings.LastIndex(filepath, "/")
		filename := filepath[index+1:]
		buffer.WriteString(fmt.Sprintf("<navPoint id=\"navPoint-%d\" playOrder=\"%d\" class=\"chapter\">\n", chapter.ChapterNo, chapter.ChapterNo))

		buffer.WriteString(fmt.Sprintf("<navLabel><text>%s</text></navLabel>\n", chapter.Title))
		buffer.WriteString(fmt.Sprintf("<content src=\"%s\"/>\n", filename))

		buffer.WriteString("</navPoint>\n")
	}
	buffer.WriteString("</navMap></ncx>")
	err = util.SaveFile(tocFile, buffer.Bytes())
	if err != nil {
		return err
	}

	// update content.opf
	contentFile := util.GetBookPath(book.ID) + "/OEBPS/content.opf"
	data, err = ioutil.ReadFile(contentFile)
	if err != nil {
		return errors.New("Failed to open file: " + contentFile + ". " + err.Error())
	}
	str = string(data)
	buffer.Reset()
	index = strings.Index(str, "<opf:item id=\"chapter")
	if index == -1 {
		index = strings.Index(str, "</opf:manifest>")
	}
	if index == -1 {
		return errors.New("Cannot find </opf:manifest> in " + contentFile + ". ")
	}
	str = str[0:index]
	// replace title
	re, _ := regexp.Compile("(<dc:title>.+</dc:title>)")
	str = re.ReplaceAllString(str, "<dc:title>"+book.Title+"</dc:title>")
	// replace creator
	re, _ = regexp.Compile("(<dc:creator.+</dc:creator>)")
	str = re.ReplaceAllString(str, "<dc:creator opf:role=\"aut\">"+book.Author+"</dc:creator>")

	buffer.WriteString(str)

	// write opf:items
	for i := 0; i < len(chapters); i++ {
		chapter := chapters[i]
		filepath := util.GetChapterFilename(book.ID, chapter.ChapterNo)
		index := strings.LastIndex(filepath, "/")
		filename := filepath[index+1:]
		buffer.WriteString(fmt.Sprintf("<opf:item id=\"%s\" href=\"%s\" media-type=\"application/xhtml+xml\" />\n", filename, filename))
	}
	buffer.WriteString("</opf:manifest>\n")
	buffer.WriteString("<opf:spine toc=\"ncx\">\n")
	for i := 0; i < len(chapters); i++ {
		chapter := chapters[i]
		filepath := util.GetChapterFilename(book.ID, chapter.ChapterNo)
		index := strings.LastIndex(filepath, "/")
		filename := filepath[index+1:]
		buffer.WriteString(fmt.Sprintf("<opf:itemref idref=\"%s\" />\n", filename))
	}
	buffer.WriteString("</opf:spine>\n</opf:package>")

	err = util.SaveFile(contentFile, buffer.Bytes())
	if err != nil {
		return err
	}

	epubFile := util.GetBookEpubFilename(book.ID, book.Title)
	// delete existing epub
	os.Remove(epubFile)

	// zip the epub file
	cmd := exec.Command(util.GetConfiguration().LibraryPath+"/make-epub.sh", epubFile, util.GetBookPath(book.ID))
	out, err := cmd.CombinedOutput()
	str = string(out)
	logger.Infof("epub command output: %s", str)
	if err != nil {
		logger.Errorf("Error creating epub file. " + err.Error())
		return errors.New("Error creating epub file. " + err.Error())
	}
	str = string(out)
	logger.Infof("epub command output: %s", str)

	if _, err := os.Stat(epubFile); os.IsNotExist(err) {
		logger.Error("Error creating epub file. " + epubFile)
		return errors.New("Error creating epub file: " + epubFile)
	} else {
		logger.Info("Created epub file: " + epubFile)
	}

	return nil
}

func (bookMaker BookMaker) CreateChapter(parser string, chapterUrl string, chapter *Chapter) (string, error) {
	var nextPageUrl = ""

	rawFilename := util.GetRawChapterFilename(chapter.BookId, chapter.ChapterNo)
	filename := util.GetChapterFilename(chapter.BookId, chapter.ChapterNo)

	// call parser to create chapter html
	logger.Infof("Calling parser: %s to create chapter: %s\n", parser, chapterUrl)

	cmd := exec.Command(util.GetParserPath()+"/"+parser,
		"-configFile="+util.GetConfigFile(), "-op=p", "-url="+chapterUrl,
		"-inputFile="+rawFilename, "-outputFile="+filename)
	out, err := cmd.CombinedOutput()
	outStr := ""
	if out != nil {
		outStr = string(out)
	}
	if err != nil {
		logger.Error("Error executing parser command: " + err.Error() + ". command out: " + outStr)
		return "", errors.New("Error executing parser command: " + err.Error())
	}

	// extract the nextPageUrl & chapterTitle
	var m map[string]string
	index := strings.LastIndex(outStr, "parser-output:")
	if index != -1 {
		json.Unmarshal([]byte(outStr[index+len("parser-output:"):]), &m)
	}
	nextPageUrl, found := m["nextPageUrl"]
	if !found {
		return "", errors.New("Invalid parser output: " + outStr)
	}
	chapter.Title, _ = m["chapterTitle"]

	os.Remove(rawFilename)

	return nextPageUrl, nil
}

type EventSink struct {
	internalChannel chan string
	bookId          int
}

func (sink EventSink) HandleEvent(event util.EventData) {
	if event.Name == "book.abort" {
		bookId := event.Data.(int)
		if bookId == sink.bookId {
			sink.internalChannel <- "abort"
			close(sink.internalChannel)
		}
	}
}
