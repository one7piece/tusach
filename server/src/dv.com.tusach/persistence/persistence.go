package persistence

import (
	"bytes"
	"errors"
	"fmt"
	"io/ioutil"
	"os"
	"os/exec"
	"path/filepath"
	"reflect"
	"strconv"
	"strings"
	"time"
	"unicode"
	"unicode/utf8"

	"dv.com.tusach/logger"
	"dv.com.tusach/model"
	"dv.com.tusach/util"
	tspb "github.com/golang/protobuf/ptypes/timestamp"
)

var TimestampPtrType = reflect.TypeOf(util.TimestampNow())
var TimestampType = reflect.TypeOf(*util.TimestampNow())

type Persistence interface {
	InitDB()
	CloseDB()
	GetSystemInfo() model.SystemInfo
	SaveSystemInfo(info model.SystemInfo)
	GetUsers() []model.User
	SaveUser(user model.User) error
	DeleteUser(userName string) error
	GetBooks(includeDeleted bool) []model.Book
	GetBook(id int32) *model.Book
	SaveBook(book *model.Book) (retId int, retErr error)
	DeleteBook(bookId int32) error
	SaveChapter(chapter model.Chapter) error
	GetChapters(bookId int32) ([]model.Chapter, error)
}

// remove the book file, called when book is deleted
func RemoveBookDir(book model.Book) error {
	dirPath := GetBookPath(int(book.ID))
	logger.Infof("Deleting book dir: ", dirPath)
	err := os.RemoveAll(dirPath)
	if err != nil {
		logger.Errorf("Error deleting directory: %s. %s", dirPath, err.Error())
		return err
	}
	return nil
}

// initialise the book directory, called before book is created/resumed to prepare the
// epub files
func InitBookDir(book model.Book) error {
	logger.Infof("InitBookDir: %d - %s", book.ID, book.Title)
	// create book dir
	dirPath := GetBookPath(int(book.ID))
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
		_, retErr := util.CopyTree(path, dirPath)
		if retErr != nil {
			panic("Error copying epub directory: " + path + ". " + retErr.Error())
		}
	}
	// extract content.opf & toc.ncx from .epub file
	epubFile := GetBookEpubFilename(book)
	if util.IsExist(epubFile) {
		// epub file exists, extract toc.ncx and content.opf from epub file
		logger.Info("extracting toc.ncx & content.opf from " + epubFile)
		cmd := exec.Command(util.GetConfiguration().ExtractEpubCmd, epubFile, dirPath, "OEBPS/content.opf", "OEBPS/toc.ncx")
		out, err := cmd.CombinedOutput()
		logger.Infof("command output: %s", string(out))
		if err != nil {
			logger.Errorf("Error extracting epub file: %s ", err.Error())
			return errors.New("Error extracting epub file: " + err.Error())
		}
	}

	logger.Info("initialising toc.ncx & content.opf")
	// initialise toc.cnx and content.opf files
	tocFile := filepath.Join(dirPath, "/OEBPS/toc.ncx")
	data, err := ioutil.ReadFile(tocFile)
	if err != nil {
		return errors.New("Failed to open file: " + tocFile + ". " + err.Error())
	}
	str := string(data)
	// replace book.title & book.author
	str = strings.Replace(str, "{book.title}", book.Title, -1)
	str = strings.Replace(str, "{book.author}", book.Author, -1)
	err = util.SaveFile(tocFile, []byte(str))
	if err != nil {
		return err
	}

	contentFile := filepath.Join(dirPath, "/OEBPS/content.opf")
	data, err = ioutil.ReadFile(contentFile)
	if err != nil {
		return errors.New("Failed to open file: " + contentFile + ". " + err.Error())
	}
	str = string(data)
	// replace book.title & book.author
	str = strings.Replace(str, "{book.title}", book.Title, -1)
	str = strings.Replace(str, "{book.author}", book.Author, -1)
	err = util.SaveFile(contentFile, []byte(str))
	if err != nil {
		return err
	}

	if !util.IsExist(epubFile) {
		// create epub file
		logger.Infof("Creating epub file: %s", epubFile)
		cmd := exec.Command(util.GetConfiguration().CreateEpubCmd, epubFile, dirPath)
		out, err := cmd.CombinedOutput()
		logger.Infof("command output: %s", string(out))
		if err != nil {
			logger.Errorf("Error creating epub file: %s ", err.Error())
			return errors.New("Error creating epub file: " + err.Error())
		}
	}

	return nil
}

// write chapter information into epub toc/content files
func WriteChapter(book model.Book, chapter model.Chapter) error {
	chapterFilePath := GetChapterFilename(chapter)
	logger.Infof("Write chapter file: %s(%s)", chapterFilePath, chapter.Title)
	// check that file exists
	if !util.IsExist(chapterFilePath) {
		return errors.New("Could not find chapter html file: " + chapterFilePath)
	}
	err := UpdateTOCFile(book, chapter)
	if err != nil {
		return err
	}
	err = UpdateContentFile(book, chapter)
	if err != nil {
		return err
	}

	// update the epub file
	bookDir := GetBookPath(int(book.ID))
	epubFile := GetBookEpubFilename(book)
	logger.Infof("WriteChapter - update epub file: %s with new chappter: %s", epubFile, chapterFilePath)
	cmd := exec.Command(util.GetConfiguration().UpdateEpubCmd, epubFile, bookDir,
		"OEBPS/content.opf", "OEBPS/toc.ncx", "OEBPS/"+filepath.Base(chapterFilePath))
	out, err := cmd.CombinedOutput()
	logger.Infof("command output: %s", string(out))
	if err != nil {
		logger.Errorf("Error updating epub file: %s ", err.Error())
		return errors.New("Error updating epub file: " + err.Error())
	}

	return nil
}

func UpdateContentFile(book model.Book, chapter model.Chapter) error {
	chapterFilePath := GetChapterFilename(chapter)
	bookDir := GetBookPath(int(book.ID))
	contentFile := filepath.Join(bookDir, "/OEBPS/content.opf")
	data, err := ioutil.ReadFile(contentFile)
	if err != nil {
		return errors.New("Failed to open file: " + contentFile + ". " + err.Error())
	}

	chapterFilename := filepath.Base(chapterFilePath)
	found := false
	lines := util.SplitByNewLine(string(data))
	for i := 0; i < len(lines); i++ {
		line := strings.TrimSpace(lines[i])
		if strings.Contains(line, "id=\""+chapterFilename+"\"") &&
			strings.Contains(line, "href=\""+chapterFilename+"\"") {
			found = true
			break
		}
	}

	var buffer bytes.Buffer
	if !found {
		logger.Infof("Update CONTENT file for new chapter %s(%s)", chapterFilePath, chapter.Title)
		// add chapter opf:item before the </opf:manifest> element
		// add chapter opf:item before the </opf:spine> element
		itemLine := fmt.Sprintf("<opf:item id=\"%s\" href=\"%s\" media-type=\"application/xhtml+xml\" />", chapterFilename, chapterFilename)
		itemrefLine := fmt.Sprintf("<opf:itemref idref=\"%s\" />", chapterFilename)
		for i := 0; i < len(lines); i++ {
			if strings.Contains(lines[i], "</opf:manifest>") {
				buffer.WriteString(itemLine + "\n")
			} else if strings.Contains(lines[i], "</opf:spine>") {
				buffer.WriteString(itemrefLine + "\n")
			}
			buffer.WriteString(lines[i] + "\n")
		}

		err = util.SaveFile(contentFile, buffer.Bytes())
		if err != nil {
			return err
		}
	} else {
		logger.Infof("CONTENT file already contains chapter %s(%s)", chapterFilePath, chapter.Title)
	}
	return nil
}

func UpdateTOCFile(book model.Book, chapter model.Chapter) error {
	chapterFilePath := GetChapterFilename(chapter)
	bookDir := GetBookPath(int(book.ID))
	// open toc file
	tocFile := filepath.Join(bookDir, "/OEBPS/toc.ncx")
	data, err := ioutil.ReadFile(tocFile)
	if err != nil {
		return errors.New("Failed to open file: " + tocFile + ". " + err.Error())
	}

	found := false
	lines := util.SplitByNewLine(string(data))
	for i := 0; i < len(lines); i++ {
		line := strings.TrimSpace(lines[i])
		if strings.Contains(line, "navPoint-"+strconv.Itoa(int(chapter.ChapterNo))) &&
			strings.Contains(line, "playOrder=\""+strconv.Itoa(int(chapter.ChapterNo))+"\"") {
			found = true
			break
		}
	}

	var buffer bytes.Buffer
	if !found {
		logger.Infof("Update TOC file for new chapter %s(%s)", chapterFilePath, chapter.Title)
		chapterFilename := filepath.Base(chapterFilePath)
		newLines := []string{
			fmt.Sprintf("<navPoint id=\"navPoint-%d\" playOrder=\"%d\" class=\"chapter\">", chapter.ChapterNo, chapter.ChapterNo),
			fmt.Sprintf("<navLabel><text>%s</text></navLabel>", chapter.Title),
			fmt.Sprintf("<content src=\"%s\"/>", chapterFilename),
			"</navPoint>"}
		// add chapter before the </navMap> element
		for i := 0; i < len(lines); i++ {
			if strings.Contains(lines[i], "</navMap>") {
				for j := 0; j < len(newLines); j++ {
					buffer.WriteString(newLines[j] + "\n")
				}
			}
			buffer.WriteString(lines[i] + "\n")
		}
		err = util.SaveFile(tocFile, buffer.Bytes())
		if err != nil {
			return err
		}
	} else {
		logger.Infof("TOC file already contains chapter %s(%s)", chapterFilePath, chapter.Title)
	}
	return nil
}

func GetBookPath(bookId int) string {
	path := util.GetConfiguration().LibraryPath + "/books/" + fmt.Sprintf("%08d", bookId)
	return filepath.FromSlash(path)
}

func GetBookEpubFilename(book model.Book) string {
	path := util.GetConfiguration().LibraryPath + "/books/" + fmt.Sprintf("%08d", book.ID) + "-" + strings.Replace(book.Title, " ", "-", -1) + ".epub"
	return filepath.FromSlash(path)
}

func GetBookMetaFilename(book model.Book) string {
	path := util.GetConfiguration().LibraryPath + "/books/" + fmt.Sprintf("%08d", book.ID) + "-" + strings.Replace(book.Title, " ", "-", -1) + ".json"
	return filepath.FromSlash(path)
}

func GetChapterFilename(chapter model.Chapter) string {
	path := util.GetConfiguration().LibraryPath + "/books/" + fmt.Sprintf("%08d/OEBPS/chapter%04d.html", chapter.BookId, chapter.ChapterNo)
	return filepath.FromSlash(path)
}

func GetRawChapterFilename(chapter model.Chapter) string {
	path := util.GetConfiguration().LibraryPath + "/books/" + fmt.Sprintf("%08d/OEBPS/chapter%04d-raw.html", chapter.BookId, chapter.ChapterNo)
	return filepath.FromSlash(path)
}

func isPersistentField(tableType reflect.Type, fieldName string) bool {
	field, found := tableType.FieldByName(fieldName)
	if !found {
		return false
	}
	protobufTag, _ := field.Tag.Lookup("protobuf")
	persistTag, _ := field.Tag.Lookup("persist")
	logger.Debugf("tag:protobuf: %s, tag:persist: %s", protobufTag, persistTag)
	if field.Tag.Get("protobuf") == "" && field.Tag.Get("persist") == "" {
		return false
	}

	if field.Type.Kind() != reflect.Bool &&
		field.Type.Kind() != reflect.Int &&
		field.Type.Kind() != reflect.Int8 &&
		field.Type.Kind() != reflect.Int16 &&
		field.Type.Kind() != reflect.Int32 &&
		field.Type.Kind() != reflect.Int64 &&
		field.Type.Kind() != reflect.Uint &&
		field.Type.Kind() != reflect.Uint16 &&
		field.Type.Kind() != reflect.Uint32 &&
		field.Type.Kind() != reflect.Uint64 &&
		field.Type.Kind() != reflect.Float32 &&
		field.Type.Kind() != reflect.Float64 &&
		field.Type.Kind() != reflect.String &&
		field.Type != TimestampPtrType &&
		field.Type != TimestampType {
		return false
	}
	return true
}

func field2db(fieldName string, fieldType reflect.Type, fieldValue interface{}) (interface{}, error) {
	logger.Debugf("field2db() - name:%s, type:%v, value:%v(%s)", fieldName, fieldType, fieldValue, reflect.TypeOf(fieldValue).Name())
	var result interface{}
	var err error
	if fieldType == reflect.TypeOf(time.Time{}) {
		result, _ = util.Time2String(fieldValue.(time.Time))
	} else if fieldType == reflect.TypeOf(&tspb.Timestamp{}) {
		result = util.Timestamp2String(fieldValue.(*tspb.Timestamp))
	} else if fieldType == reflect.TypeOf(model.BookStatusType_NONE) {
		result = fieldValue.(model.BookStatusType)
	} else if fieldType.Kind() == reflect.Int64 {
		result = fieldValue.(int64)
	} else if fieldType.Kind() == reflect.Int32 {
		result = fieldValue.(int32)
	} else if fieldType.Kind() == reflect.Int16 {
		result = fieldValue.(int16)
	} else if fieldType.Kind() == reflect.Int {
		result = fieldValue.(int)
	} else if fieldType.Kind() == reflect.Bool {
		if fieldValue.(bool) {
			result = 1
		} else {
			result = 0
		}
	} else if fieldType.Kind() == reflect.String {
		result = fieldValue.(string)
	} else {
		err = fmt.Errorf("field2db - Unknown field type: %v, field value: %v", fieldType.Kind(), fieldValue)
	}
	return result, err
}

func db2field(fieldName string, fieldType reflect.Type, dbValue interface{}) (interface{}, error) {
	logger.Debugf("db2field() - name:%s, type:%v, value:%v", fieldName, fieldType, dbValue)
	var result interface{}
	var err error
	var num int64
	if fieldType == reflect.TypeOf(time.Time{}) {
		result, _ = util.String2Time(dbValue.(string))
	} else if fieldType == reflect.TypeOf(&tspb.Timestamp{}) {
		result, _ = util.String2Timestamp(dbValue.(string))
	} else if fieldType == reflect.TypeOf(model.BookStatusType_NONE) {
		num = dbValue.(int64)
		result = model.BookStatusType(num)
	} else if fieldType.Kind() == reflect.Int64 {
		num = dbValue.(int64)
		result = num
	} else if fieldType.Kind() == reflect.Int32 {
		num = dbValue.(int64)
		result = int32(num)
	} else if fieldType.Kind() == reflect.Int16 {
		num = dbValue.(int64)
		result = int16(num)
	} else if fieldType.Kind() == reflect.Int {
		num = dbValue.(int64)
		result = int(num)
	} else if fieldType.Kind() == reflect.Bool {
		n := dbValue.(int64)
		if n == 0 {
			result = false
		} else {
			result = true
		}
	} else if fieldType.Kind() == reflect.String {
		result = dbValue.(string)
	} else {
		err = fmt.Errorf("db2field - Unknown field type: %v, field value: %v", fieldType.Kind(), dbValue)
	}
	return result, err
}

func lowerInitial(s string) string {
	if s == "" {
		return s
	}
	r, n := utf8.DecodeRuneInString(s)
	logger.Infof("DecodeRuneInString(%s) -> r=%+v, n=%d\n", s, r, n)
	return string(unicode.ToLower(r)) + s[n:]
}
