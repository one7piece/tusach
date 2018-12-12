package persistence

import (
	"fmt"
	"path/filepath"
	"reflect"
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
	path := util.GetConfiguration().LibraryPath + "/books/" + fmt.Sprintf("%08d", bookId)
	return filepath.FromSlash(path)
}

func GetBookEpubFilename(book model.Book) string {
	path := util.GetConfiguration().LibraryPath + "/books/" + fmt.Sprintf("%08d", book.ID) + "-" + strings.Replace(book.Title, " ", "-", -1) + ".epub"
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
	if field.Tag.Get("protobuf") == "" {
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
