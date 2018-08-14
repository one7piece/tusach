package persistence

import (
	"fmt"
	"reflect"
	"strings"
	"time"
	"unicode"
	"unicode/utf8"

	"dv.com.tusach/logger"
	"dv.com.tusach/model"
	"dv.com.tusach/util"
)

type Persistence interface {
	InitDB()
	CloseDB()
	GetSystemInfo(forceReload bool) (model.SystemInfo, error)
	SaveSystemInfo(info model.SystemInfo)
	LoadUsers() ([]model.User, error)
	SaveUser(user model.User) error
	DeleteUser(userName string) error
	LoadBooks() ([]model.Book, error)
	LoadBook(id int) (model.Book, error)
	SaveBook(book model.Book) (retId int, retErr error)
	DeleteBook(bookId int) error
	LoadChapters(bookId int) ([]model.Chapter, error)
	SaveChapter(chapter model.Chapter) error
}

func GetBookPath(bookId int) string {
	return util.GetConfiguration().LibraryPath + "/books/" + fmt.Sprintf("%08d", bookId)
}

func GetBookEpubFilename(book model.Book) string {
	return util.GetConfiguration().LibraryPath + "/books/" + fmt.Sprintf("%08d", book.Id) + "-" + strings.Replace(book.Title, " ", "-", -1) + ".epub"
}

func GetChapterFilename(chapter model.Chapter) string {
	return util.GetConfiguration().LibraryPath + "/books/" + fmt.Sprintf("%08d/OEBPS/chapter%04d.html", chapter.BookId, chapter.ChapterNo)
}

func GetRawChapterFilename(chapter model.Chapter) string {
	return util.GetConfiguration().LibraryPath + "/books/" + fmt.Sprintf("%08d/OEBPS/chapter%04d-raw.html", chapter.BookId, chapter.ChapterNo)
}

func isPersistentField(tableType reflect.Type, fieldName string) bool {
	field, found := tableType.FieldByName(fieldName)
	if !found {
		return false
	}

	if field.Tag.Get("persist") == "false" {
		return false
	}
	return true
}

func field2db(fieldType reflect.Type, fieldValue interface{}) interface{} {
	var result interface{}
	if fieldType == reflect.TypeOf(time.Time{}) {
		result, _ = fromDateTime(fieldValue.(time.Time))
	} else if fieldType.Kind() == reflect.Int {
		result = fieldValue.(int)
	} else if fieldType.Kind() == reflect.Bool {
		if fieldValue.(bool) {
			result = 1
		} else {
			result = 0
		}
	} else {
		result = fieldValue.(string)
	}
	return result
}

func db2field(fieldType reflect.Type, dbValue interface{}) interface{} {
	var result interface{}
	//strValue := dbValue.(string)
	if fieldType == reflect.TypeOf(time.Time{}) {
		result, _ = toDateTime(dbValue.(string))
	} else if fieldType.Kind() == reflect.Int {
		//result, _ = strconv.Atoi(strValue)
		result = toInt(dbValue)
	} else if fieldType.Kind() == reflect.Bool {
		//n, _ := strconv.Atoi(strValue)
		n := toInt(dbValue)
		if n == 0 {
			result = false
		} else {
			result = true
		}
	} else {
		//result = strValue
		result = dbValue.(string)
	}
	return result
}

func toInt(val interface{}) int {
	switch val.(type) {
	case int32:
		return val.(int)
	case int64:
		return int(val.(int64))
	default:
		return val.(int)
	}
}

func toDateTime(str string) (time.Time, error) {
	return time.Parse(time.RFC3339, str)
}

func fromDateTime(t time.Time) (string, error) {
	buffer, err := t.MarshalText()
	return string(buffer), err
}

func lowerInitial(s string) string {
	if s == "" {
		return s
	}
	r, n := utf8.DecodeRuneInString(s)
	logger.Infof("DecodeRuneInString(%s) -> r=%+v, n=%d\n", s, r, n)
	return string(unicode.ToLower(r)) + s[n:]
}
