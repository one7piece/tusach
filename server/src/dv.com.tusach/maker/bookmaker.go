package maker

import (
	"bytes"
	"dv.com.tusach/util"
	"encoding/json"
	"errors"
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
	"os"
	"os/exec"
	"regexp"
	"strconv"
	"strings"
	"time"
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

func GetBookSite(url string) BookSite {
	site := BookSite{}
	if url == "" {
		log.Println("Parameter url is empty")
		return site
	}
	// get list of parsers
	names, err := util.ListDir(util.GetParserPath(), true)
	if err != nil {
		log.Println("Error reading parser directory. " + err.Error())
		return site
	}
	for _, name := range names {
		// call parser to check url support
		log.Println("executing validate command: " + util.GetParserPath() + "/" + name)
		cmd := exec.Command(util.GetParserPath()+"/"+name,
			"-configFile="+util.GetConfigFile(), "-op=v",
			"-url="+url)
		out, err := cmd.CombinedOutput()
		str := string(out)
		log.Println("validate command output: ", str)
		if err != nil {
			log.Println("Error validating url. " + err.Error())
			return site
		}

		lines := strings.Split(str, "\n")
		var m map[string]string
		for _, line := range lines {
			if strings.HasPrefix(line, "parser-output:") {
				jsonstr := line[len("parser-output:"):]
				//log.Printf("Found json: %s\n", jsonstr)
				json.Unmarshal([]byte(jsonstr), &m)
				//log.Printf("%v, validated: %s\n", m, m["validated"])
				break
			}
		}
		//log.Printf("validated: %s\n", m["validated"])
		if m["validated"] == "1" {
			site.Parser = name
			site.BatchSize, _ = strconv.Atoi(m["batchSsize"])
			site.BatchDelaySec, _ = strconv.Atoi(m["batchDelaySec"])
			break
		}
	}

	log.Printf("Found book site:[%v] for url:%s\n", site, url)
	return site
}

func CreateBook(eventChannel util.EventChannel, book Book, site BookSite) {
	var numPagesLoaded = 0
	var aborted = false
	var errorMsg = ""

	em := util.CreateEventManager(eventChannel, 1)
	c := make(chan string)
	sink := EventSink{internalChannel: c, bookId: book.ID}
	em.StartListening(sink)

	go func() {
		log.Printf("start monitoring book: %d-%s\n", book.ID, book.Title)
		for {
			msg, more := <-c
			log.Printf("Received message: %s for book: %d, more:%v\n", msg, book.ID, more)
			if msg == "abort" {
				aborted = true
				break
			}
			if !more {
				break
			}
		}
		log.Printf("stop monitoring book: %d-%s\n", book.ID, book.Title)
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

		// load page
		log.Println("Loading page: ", url)
		rawHtml, err := site.ExecuteRequest(url)
		if err != nil {
			errorMsg = "Failed to load from url: " + url + ". " + err.Error()
			break
		}

		newChapterNo := book.CurrentPageNo + 1
		if book.CurrentPageUrl == url {
			newChapterNo = book.CurrentPageNo
		}

		newChapter := Chapter{BookId: book.ID, ChapterNo: newChapterNo}
		nextPageUrl, err := parse(site.Parser, rawHtml, &newChapter)
		if err != nil {
			errorMsg = err.Error()
			log.Println("Error parsing chapter. " + errorMsg)
			break
		}
		if newChapter.Title == "" {
			newChapter.Title = "Chapter " + strconv.Itoa(newChapter.ChapterNo)
		}
		log.Printf("completed chapter: %d:%s, nextPageUrl:%s\n", newChapter.ChapterNo, newChapter.Title, nextPageUrl)

		// save the chapter
		err = SaveChapter(newChapter)
		if err != nil {
			errorMsg = err.Error()
			log.Println("Error saving chapter. " + errorMsg)
			break
		}
		book.CurrentPageNo = newChapterNo
		book.CurrentPageUrl = url
		numPagesLoaded++

		// check for no more pages
		if nextPageUrl == "" {
			log.Println("No more next page url found.")
			break
		} else {
			_, err := saveBook(em, book, false)
			if err != nil {
				errorMsg = err.Error()
				break
			}
		}

		if nextPageUrl == url {
			log.Println("Internal error. next page url is same as current page url: ", url)
			break
		}
		url = nextPageUrl
	}

	book.ErrorMsg = errorMsg
	if book.ErrorMsg != "" {
		book.Status = STATUS_ERROR
		log.Println(book.ErrorMsg)
	} else if aborted {
		book.Status = STATUS_ABORTED
	} else {
		book.Status = STATUS_COMPLETED
	}

	chapters, err := LoadChapters(book.ID)
	if err != nil {
		errorMsg = fmt.Sprintf("Error loading chapters for book: %d. %s", book.ID, err.Error())
		log.Println(errorMsg)
		book.ErrorMsg = errorMsg
		book.Status = STATUS_ERROR
	} else {
		err = makeEpub(book, chapters)
		if err != nil {
			errorMsg = fmt.Sprintf("Error creating epub for book: %d. %s", book.ID, err.Error())
			log.Println(errorMsg)
			book.ErrorMsg = errorMsg
			book.Status = STATUS_ERROR
			book.EpubCreated = false
		} else {
			book.EpubCreated = true
		}
	}

	saveBook(em, book, true)
}

func saveBook(manager *util.EventManager, book Book, done bool) (int, error) {
	id, err := SaveBook(book)
	// notify channel
	if done {
		manager.Push(util.EventData{Name: "book.done", Data: strconv.Itoa(book.ID)})
	} else {
		manager.Push(util.EventData{Name: "book.update", Data: strconv.Itoa(book.ID)})
	}
	return id, err
}

func makeEpub(book Book, chapters []Chapter) error {
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
	log.Println("epub command output: ", str)
	if err != nil {
		return errors.New("Error creating epub file. " + err.Error())
	}
	str = string(out)
	log.Println("epub command output: ", str)

	if _, err := os.Stat(epubFile); os.IsNotExist(err) {
		return errors.New("Error creating epub file: " + epubFile)
	} else {
		log.Println("Created epub file: " + epubFile)
	}

	return nil
}

func parse(parser string, rawHtml []byte, chapter *Chapter) (string, error) {
	var nextPageUrl = ""

	// write to raw html file
	rawFilename := util.GetRawChapterFilename(chapter.BookId, chapter.ChapterNo)
	err := util.SaveFile(rawFilename, rawHtml)
	if err != nil {
		return "", err
	}

	filename := util.GetChapterFilename(chapter.BookId, chapter.ChapterNo)

	// call parser to parse chapter html
	log.Println("executing parser command: ", parser)
	cmd := exec.Command(util.GetParserPath()+"/"+parser,
		"-configFile="+util.GetConfigFile(), "-op=p",
		"-inputFile="+rawFilename, "-outputFile="+filename)
	out, err := cmd.CombinedOutput()
	if err != nil {
		return "", errors.New("Error parsing html file. " + err.Error())
	}
	str := string(out)
	log.Println("parser command output: ", str)

	found := false
	// extract the nextPageUrl & chapterTitle
	lines := strings.Split(str, "\n")
	var m map[string]string
	for _, line := range lines {
		if strings.HasPrefix(line, "parser-output:") {
			json.Unmarshal([]byte(line[len("parser-output:"):]), &m)
			break
		}
	}
	nextPageUrl, found = m["nextPageUrl"]
	chapter.Title, _ = m["chapterTitle"]
	if !found {
		return "", errors.New(str)
	}

	os.Remove(rawFilename)

	return nextPageUrl, nil
}

func (site BookSite) ExecuteRequest(url string) ([]byte, error) {
	var result []byte

	var timeout time.Duration
	if site.TimeoutSec > 0 {
		timeout = time.Duration(time.Duration(site.TimeoutSec) * time.Second)
	} else {
		timeout = time.Duration(10 * time.Second)
	}
	client := http.Client{Timeout: timeout}
	req, err := http.NewRequest("GET", url, nil)
	if err != nil {
		return result, err
	}
	req.Header.Add("User-Agent", "Mozilla/5.0 (Windows; U; Windows NT 6.1; en-US; rv:1.9.2.2) Gecko/20100316 Firefox/3.6.2")
	if site.Referer != "" {
		req.Header.Add("Referer", site.Referer)
	}
	if site.Cookie != "" {
		req.Header.Add("Cookie", site.Cookie)
	}

	var n int
	if site.NumTries > 0 {
		n = site.NumTries
	} else {
		n = 1
	}
	for i := 0; i < n; i++ {
		log.Printf("Attempt#%d to load from %s\n", (i + 1), url)
		resp, err := client.Do(req)
		defer resp.Body.Close()
		if err == nil {
			result, err = ioutil.ReadAll(resp.Body)
		}
		resp.Body.Close()
		if result != nil {
			break
		}
	}
	if result == nil || len(result) == 0 {
		return result, errors.New("No html data loaded")
	}
	return result, err
}

func GetUrl(target string, request string) string {
	url := strings.TrimRight(target, "/") + "/" + strings.TrimLeft(request, "/")
	if !strings.HasPrefix(url, "http://") {
		url = "http://" + url
	}
	return url
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
