package maker

import (
	"bytes"
	"errors"
	"fmt"
	"io/ioutil"
	"os"
	"os/exec"
	"path/filepath"
	"regexp"
	"strconv"
	"strings"

	"dv.com.tusach/logger"
	"dv.com.tusach/model"
	"dv.com.tusach/persistence"
	"dv.com.tusach/util"
	"github.com/robertkrimen/otto"
)

type BookMaker struct {
	DB persistence.Persistence
}

type ScriptEngine struct {
	jsVM       *otto.Otto
	script     *otto.Script
	beginFn    otto.Value
	endFn      otto.Value
	startTagFn otto.Value
	endTagFn   otto.Value
	textFn     otto.Value
}

func Compile(scriptData []byte) (*ScriptEngine, error) {
	if scriptData == nil {
		return nil, errors.New("missing argument")
	}
	engine := new(ScriptEngine)
	engine.jsVM = otto.New()
	logger.Infof("Compiling script...\n")
	script, err := engine.jsVM.Compile("", scriptData)
	if err != nil {
		logger.Errorf("Error compiling script: %s", err)
		return nil, err
	}
	engine.script = script
	// check if this is needed
	//engine.jsVM.Run(engine.script)

	engine.jsVM.Set("logDebug", func(call otto.FunctionCall) otto.Value {
		logger.Debug(call.Argument(0).String())
		return otto.Value{}
	})

	engine.jsVM.Set("logInfo", func(call otto.FunctionCall) otto.Value {
		logger.Info(call.Argument(0).String())
		return otto.Value{}
	})

	engine.jsVM.Set("logError", func(call otto.FunctionCall) otto.Value {
		logger.Error(call.Argument(0).String())
		return otto.Value{}
	})

	logger.Info("script compiled succesffuly!")
	return engine, nil
}

func (bookMaker BookMaker) GetBookSites() []string {
	return []string{"www.truyencuatui.net"}
}

func (bookMaker BookMaker) CreateBook(engine *ScriptEngine, book *model.Book) error {
	var numPagesLoaded = 0
	var err error

	url := book.CurrentPageUrl
	if url == "" {
		url = book.StartPageUrl
	}

	// TODO set loader configuration

	for {
		if book.Status == model.BookStatusType_ABORTED || book.MaxNumPages > 0 && book.MaxNumPages <= book.CurrentPageNo {
			break
		}

		newChapterNo := book.CurrentPageNo + 1
		if book.CurrentPageUrl == url {
			newChapterNo = book.CurrentPageNo
		}
		newChapter := model.Chapter{BookId: book.ID, ChapterNo: newChapterNo}
		nextPageUrl, err := bookMaker.CreateChapter(engine, url, &newChapter)

		if err != nil {
			logger.Errorf("%s - Failed to load chapter %d: %s", book.Title, newChapterNo, err)
			break
		}

		if newChapter.Title == "" {
			newChapter.Title = "model.Chapter " + strconv.Itoa(int(newChapter.ChapterNo))
		}
		logger.Infof("%s - Completed chapter: %d (%s), nextPageUrl: %s\n", book.Title, newChapter.ChapterNo, newChapter.Title, nextPageUrl)

		err = bookMaker.SaveChapter(*book, newChapter)
		if err != nil {
			logger.Errorf("%s - Failed to save chapter %d: %s", book.Title, newChapterNo, err)
			break
		}

		book.CurrentPageNo = newChapterNo
		book.CurrentPageUrl = url
		numPagesLoaded++

		_, err = bookMaker.SaveBook(book)
		if err != nil {
			logger.Errorf("%s - Failed to save book to DB: %s", book.Title, err)
			return err
		}

		// check for no more pages
		if nextPageUrl == "" {
			logger.Info("No more next page url found.")
			break
		}

		if nextPageUrl == url {
			logger.Errorf("Internal error. next page url is same as current page url: %s", url)
			break
		}
		url = nextPageUrl
	}

	if err != nil {
		book.Status = model.BookStatusType_ERROR
		book.ErrorMsg = err.Error()
	} else if book.Status != model.BookStatusType_ABORTED {
		book.Status = model.BookStatusType_COMPLETED
	}
	book.EpubCreated = util.IsExist(persistence.GetBookEpubFilename(*book))
	bookMaker.SaveBook(book)

	return err
}

func (bookMaker BookMaker) SaveChapter(book model.Book, chapter model.Chapter) error {
	logger.Infof("%s - Saving chapter: %s", book.Title, chapter.Title)
	var err error
	// check that the file exists
	filepath := persistence.GetChapterFilename(chapter)
	if !util.IsExist(filepath) {
		return errors.New("Chapter file: " + filepath + " does not exists!")
	}
	defer func() {
		if err == nil {
			// remove the html file
			os.Remove(filepath)
		}
	}()

	// update the DB
	err = bookMaker.DB.SaveChapter(chapter)
	if err != nil {
		return errors.New("Error saving to DB: " + err.Error())
	}

	// update epub file
	chapters, err := bookMaker.DB.LoadChapters(int(book.ID))
	if err != nil {
		err = errors.New("Error loading chapters from DB: " + err.Error())
	} else {
		if len(chapters) == 0 {
			err = errors.New("No chapters loaded from DB!")
		} else {
			err = bookMaker.SaveEpub(book, persistence.GetBookEpubFilename(book), chapters)
			if err != nil {
				err = errors.New("Error writing epub file: " + err.Error())
			}
		}
	}
	return err
}

func (bookMaker BookMaker) CreateChapter(engine *ScriptEngine, chapterUrl string, chapter *model.Chapter) (string, error) {
	rawFilename := persistence.GetRawChapterFilename(*chapter)
	filename := persistence.GetChapterFilename(*chapter)

	chapterTitle, nextChapterURL, err := bookMaker.Parse(engine, chapterUrl, rawFilename, filename, 10, 2)
	if err != nil {
		return "", err
	}
	chapter.Title = chapterTitle
	os.Remove(rawFilename)

	return nextChapterURL, nil
}

func (bookMaker BookMaker) SaveBook(book *model.Book) (retId int, retErr error) {
	book.LastUpdatedTime = util.TimestampNow()
	id, err := bookMaker.DB.SaveBook(*book)
	if err == nil {
		defer func() {
			if err := recover(); err != nil {
				logger.Infof("Recover from panic: %s\n", err)
				if id > 0 {
					bookMaker.DB.DeleteBook(id)
					// remove files
					os.RemoveAll(persistence.GetBookPath(id))
				}
				retErr = util.ExtractError(err)
				retId = 0
			}
		}()

		// create book dir
		dirPath := persistence.GetBookPath(id)
		logger.Infof("Creating book dir: ", dirPath)
		os.MkdirAll(dirPath, 0777)
		if _, err := os.Stat(dirPath); os.IsNotExist(err) {
			panic("Error creating directory: " + dirPath)
		}
		files, err := ioutil.ReadDir(util.GetEpubPath())
		if err != nil {
			panic("Error reading directory: " + util.GetEpubPath() + ". " + err.Error())
		}
		for _, file := range files {
			path := filepath.Join(util.GetEpubPath(), file.Name())
			out, retErr := util.CopyDir(path, dirPath)
			if retErr != nil {
				panic("Error copying epub template file: " + path + ". " + string(out))
			}
		}

		if book.ID <= 0 {
			book.ID = int32(id)
			logger.Infof("created book - %v", book)
		} else {
			logger.Infof("updated book - %v", book)
		}
		util.GetEventManager().Push(util.EventData{Channel: "BOOK-CHANNEL", Type: "update", Data: book})
	}
	return id, err
}

func (bookMaker BookMaker) SaveEpub(book model.Book, epubFile string, chapters []model.Chapter) error {
	if book.CurrentPageNo == 0 {
		return errors.New("Book has no chapters")
	}
	// validate chapter html files
	for i := 0; i < len(chapters); i++ {
		chapter := chapters[i]
		filename := persistence.GetChapterFilename(chapter)
		if _, err := os.Stat(filename); os.IsNotExist(err) {
			return errors.New("Missing chapter file: " + filename)
		}
	}

	// update toc.ncx file
	tocFile := filepath.Join(persistence.GetBookPath(int(book.ID)), "/OEBPS/toc.ncx")
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
		filepath := persistence.GetChapterFilename(chapter)
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
	contentFile := filepath.Join(persistence.GetBookPath(int(book.ID)), "/OEBPS/content.opf")
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
		filepath := persistence.GetChapterFilename(chapter)
		index := strings.LastIndex(filepath, "/")
		filename := filepath[index+1:]
		buffer.WriteString(fmt.Sprintf("<opf:item id=\"%s\" href=\"%s\" media-type=\"application/xhtml+xml\" />\n", filename, filename))
	}
	buffer.WriteString("</opf:manifest>\n")
	buffer.WriteString("<opf:spine toc=\"ncx\">\n")
	for i := 0; i < len(chapters); i++ {
		chapter := chapters[i]
		filepath := persistence.GetChapterFilename(chapter)
		index := strings.LastIndex(filepath, "/")
		filename := filepath[index+1:]
		buffer.WriteString(fmt.Sprintf("<opf:itemref idref=\"%s\" />\n", filename))
	}
	buffer.WriteString("</opf:spine>\n</opf:package>")

	err = util.SaveFile(contentFile, buffer.Bytes())
	if err != nil {
		return err
	}

	epubCmd := util.GetConfiguration().MakeEpubCmd
	if util.IsExist(epubFile) {
		epubCmd = util.GetConfiguration().UpdateEpubCmd
	}
	logger.Infof("Executing epub command: %s %s %s", epubCmd, epubFile, persistence.GetBookPath(int(book.ID)))
	// zip the epub file
	cmd := exec.Command(util.GetConfiguration().MakeEpubCmd, epubFile, persistence.GetBookPath(int(book.ID)))
	out, err := cmd.CombinedOutput()
	str = string(out)
	logger.Infof("epub command output: %s", str)
	if err != nil {
		logger.Errorf("Error creating epub file. " + err.Error())
		return errors.New("Error creating epub file. " + err.Error())
	}
	//str = string(out)
	//logger.Infof("epub command output: %s", str)

	if !util.IsExist(epubFile) {
		logger.Error("Error creating epub file. " + epubFile)
		return errors.New("Error creating epub file: " + epubFile)
	}

	logger.Info("Created epub file: " + epubFile)
	return nil
}
