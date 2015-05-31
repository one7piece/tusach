package maker

import (
	"database/sql"
	"dv.com.tusach/util"
	"errors"
	_ "github.com/mattn/go-sqlite3"
	"io/ioutil"
	"log"
	"os"
	"os/exec"
	"reflect"
	"sort"
	"strings"
	"time"
	"unicode"
	"unicode/utf8"
)

var db *sql.DB

func InitDB() {
	db = nil
	log.Printf("opening database %s\n", util.GetConfiguration().DBFilename)
	_db, err := sql.Open("sqlite3", util.GetConfiguration().DBFilename)
	if err != nil {
		log.Fatal("failed to open databse: " + util.GetConfiguration().DBFilename)
		panic(err)
	}
	db = _db

	// create table systeminfo, datetime store as TEXT (ISO8601 string)
	createTable("systeminfo", reflect.TypeOf(SystemInfo{}))
	createTable("user", reflect.TypeOf(User{}))
	createTable("book", reflect.TypeOf(Book{}))
	createTable("chapter", reflect.TypeOf(Chapter{}))
}

func CloseDB() {
	if db != nil {
		db.Close()
	}
}

func createTable(tableName string, tableType reflect.Type) {
	stmt := "create table if not exists " + tableName + " ("
	for i := 0; i < tableType.NumField(); i++ {
		field := tableType.Field(i)
		persist := isPersistentField(tableType, field.Name)
		if persist {
			colName := field.Name
			//log.Printf("parsing field: %s:%s\n", field.Name, field.Type.Name())
			var colType string
			switch field.Type.Kind() {
			case reflect.Int:
				colType = "int"
			case reflect.Bool:
				colType = "int"
			default:
				colType = "text"
			}
			if i > 0 {
				stmt += ", "
			}
			stmt += colName + " " + colType
		}
	}
	stmt += ")"
	log.Printf("executing creating table query: %s\n", stmt)
	_, err := db.Exec(stmt)
	if err != nil {
		log.Printf("failed to create table: %s\n", err)
	}
}

func LoadSystemInfo() (SystemInfo, error) {
	records, err := loadRecords(reflect.TypeOf(SystemInfo{}), "systeminfo", "", nil)
	if err != nil {
		return SystemInfo{}, err
	}
	if len(records) > 0 {
		info := records[0].(SystemInfo)
		log.Printf("Found systeminfo: %+v\n", info)
		return info, nil
	}
	log.Printf("No systeminfo found\n")
	return SystemInfo{}, nil
}

func SaveSystemInfo(info SystemInfo) error {
	records, err := loadRecords(reflect.TypeOf(SystemInfo{}), "systeminfo", "", nil)
	if err != nil {
		return err
	}
	if len(records) == 0 {
		// insert
		insertRecord("systeminfo", reflect.ValueOf(info))
	} else {
		// update
		updateRecord("systeminfo", reflect.ValueOf(info), "", nil)
	}
	return nil
}

func LoadUsers() ([]User, error) {
	records, err := loadRecords(reflect.TypeOf(User{}), "user", "", nil)
	if err != nil {
		return []User{}, err
	}
	users := []User{}
	for i := 0; i < len(records); i++ {
		user := records[i].(User)
		users = append(users, user)
		log.Printf("Found user: %+v\n", user)
	}
	if len(users) == 0 {
		log.Printf("No users found\n")
	}
	return users, nil
}

func SaveUser(user User) error {
	args := []interface{}{user.Name}
	records, err := loadRecords(reflect.TypeOf(User{}), "user", "Name=?", args)
	if err != nil {
		return err
	}
	if len(records) == 0 {
		// insert
		insertRecord("user", reflect.ValueOf(user))
	} else {
		// update
		updateRecord("user", reflect.ValueOf(user), "Name=?", args)
	}
	return nil
}

func DeleteUser(userName string) error {
	args := []interface{}{userName}
	err := deleteRecords("user", "Name=?", args)
	return err
}

func LoadBook(id int) (Book, error) {
	args := []interface{}{id}
	records, err := loadRecords(reflect.TypeOf(Book{}), "book", "ID=?", args)
	if err != nil {
		return Book{}, err
	}
	if len(records) > 0 {
		return records[0].(Book), nil
	}
	return Book{}, nil
}

func LoadBooks() ([]Book, error) {
	records, err := loadRecords(reflect.TypeOf(Book{}), "book", "", nil)
	if err != nil {
		return []Book{}, err
	}
	books := []Book{}
	for i := 0; i < len(records); i++ {
		book := records[i].(Book)
		books = append(books, book)
		log.Printf("Found book: %+v\n", book)
	}
	if len(books) == 0 {
		log.Printf("No books found\n")
	}
	return books, nil
}

func SaveBook(book Book) (retId int, retErr error) {

	var newBookId = 0
	defer func() {
		if err := recover(); err != nil {
			//log.Printf("Recover from panic: %s\n", err)
			if newBookId > 0 {
				DeleteBook(newBookId)
			}
			retErr = util.ExtractError(err)
			/*
				// find out what exactly is err
				switch x := err.(type) {
				case string:
					retErr = errors.New(x)
				case error:
					retErr = x
				default:
					retErr = errors.New("Unknow panic")
				}
			*/
			retId = 0
		}
	}()

	// TODO need locking here

	if book.ID == 0 {
		rows, retErr := db.Query("SELECT max(ID) FROM book")
		if retErr != nil {
			return 0, retErr
		}
		defer rows.Close()

		if rows.Next() {
			var maxId int
			rows.Scan(&maxId)
			newBookId = maxId + 1
		}
		rows.Close()

		if newBookId == 0 {
			newBookId = 1
		}
		// insert
		book.ID = newBookId
		retErr = insertRecord("book", reflect.ValueOf(book))
		if retErr == nil {
			// create book dir
			dirPath := util.GetBookPath(book.ID)
			log.Println("Creating book dir: ", dirPath)
			os.MkdirAll(dirPath, 0777)
			if _, err := os.Stat(dirPath); os.IsNotExist(err) {
				panic("Error creating directory: " + dirPath)
			}
			files, err := ioutil.ReadDir(util.GetEpubPath())
			if err != nil {
				panic("Error reading directory: " + util.GetEpubPath() + ". " + err.Error())
			}
			for _, file := range files {
				cmd := exec.Command("cp", "-rf", util.GetEpubPath()+"/"+file.Name(), dirPath)
				out, retErr := cmd.CombinedOutput()
				if retErr != nil {
					panic("Error copying epub template file: " + util.GetEpubPath() + "/" + file.Name() + ". " + string(out))
				}
			}
		}
	} else {
		// update
		args := []interface{}{book.ID}
		retErr = updateRecord("book", reflect.ValueOf(book), "ID=?", args)
	}

	return book.ID, retErr
}

func DeleteBook(bookId int) error {
	log.Println("Deleting book: ", bookId)
	// TODO need locking here

	// delete all chapters of book
	args := []interface{}{bookId}
	err := deleteRecords("chapter", "bookId=?", args)
	if err != nil {
		return err
	}

	// remove book
	args = []interface{}{bookId}
	err = deleteRecords("book", "ID=?", args)

	// remove files
	err = os.RemoveAll(util.GetBookPath(bookId))

	return err
}

func LoadChapters(bookId int) ([]Chapter, error) {
	var records []interface{}
	var err error
	if bookId > 0 {
		args := []interface{}{bookId}
		records, err = loadRecords(reflect.TypeOf(Chapter{}), "chapter", "BookId=?", args)
	} else {
		records, err = loadRecords(reflect.TypeOf(Chapter{}), "chapter", "", nil)
	}
	if err != nil {
		return []Chapter{}, err
	}

	chapters := []Chapter{}
	for i := 0; i < len(records); i++ {
		chapter := records[i].(Chapter)
		chapters = append(chapters, chapter)
		//log.Printf("Found chapter: %+v\n", chapter)
	}
	if len(chapters) == 0 {
		log.Printf("No chapter found\n")
	} else {
		// sort chapters by ChapterNo
		sort.Sort(ByChapterNo(chapters))
	}

	// TODO verify chapter html/images from file system

	return chapters, nil
}

func SaveChapter(chapter Chapter) error {
	/*
		filepath := util.GetChapterFilename(chapter.BookId, chapter.ChapterNo)
		err := ioutil.WriteFile(filepath, chapter.Html, 0777)
		if err != nil {
			log.Println("error writing chapter file: ", filepath, err)
			return err
		}
	*/
	args := []interface{}{chapter.BookId, chapter.ChapterNo}
	records, err := loadRecords(reflect.TypeOf(Chapter{}), "chapter", "BookId=? and ChapterNo=?", args)
	if err != nil {
		return err
	}
	if len(records) == 0 {
		// save record
		err = insertRecord("chapter", reflect.ValueOf(chapter))
	} else {
		// save record
		err = updateRecord("chapter", reflect.ValueOf(chapter), "BookId=? and ChapterNo=?", args)
	}

	return err
}

func loadRecords(tableType reflect.Type, tableName string, whereStr string, args []interface{}) ([]interface{}, error) {
	fieldNames := []string{}
	for i := 0; i < tableType.NumField(); i++ {
		field := tableType.Field(i)
		persist := isPersistentField(tableType, field.Name)
		if persist {
			fieldNames = append(fieldNames, field.Name)
		}
	}

	query := "SELECT " + strings.Join(fieldNames, ",") + " FROM " + tableName
	if whereStr != "" {
		query += " WHERE " + whereStr
	}
	log.Printf("executing query: %s\n", query)
	rows, err := db.Query(query, args...)
	if err != nil {
		log.Fatal("Error executing query. ", err)
		return nil, err
	}
	defer rows.Close()

	records := []interface{}{}
	colValues := make([]interface{}, len(fieldNames))
	colValuePtrs := make([]interface{}, len(fieldNames))

	for rows.Next() {
		// create object of type tableType
		recordValue := reflect.New(tableType).Elem()
		for i := 0; i < len(fieldNames); i++ {
			colValuePtrs[i] = &colValues[i] // store address of value
		}
		rows.Scan(colValuePtrs...)

		for i := 0; i < tableType.NumField(); i++ {
			field := tableType.Field(i)
			if isPersistentField(tableType, field.Name) {
				var colval interface{}
				// colValues hold array of bytes
				byteArr, ok := colValues[i].([]byte)
				if ok {
					colval = string(byteArr)
				} else {
					colval = colValues[i]
				}
				//log.Printf("scan col field: %s=%v\n", field.Name, colval)
				v := db2field(field.Type, colval)
				recordValue.FieldByName(field.Name).Set(reflect.ValueOf(v))
			}
		}
		records = append(records, recordValue.Interface())
	}
	return records, nil
}

func insertRecord(tableName string, value reflect.Value) error {
	tx, err := db.Begin()
	if err != nil {
		log.Println("failed to start transaction.", err)
		return err
	}

	nameStr := ""
	valueStr := ""
	params := []interface{}{}
	for i := 0; i < value.NumField(); i++ {
		persist := isPersistentField(value.Type(), value.Type().Field(i).Name)
		if persist {
			if len(nameStr) > 0 {
				nameStr += ","
			}
			nameStr += value.Type().Field(i).Name
			if len(valueStr) > 0 {
				valueStr += ","
			}
			valueStr += "?"
			v := field2db(value.Type().Field(i).Type, value.Field(i).Interface())
			params = append(params, v)
		}
	}

	insertStr := "INSERT INTO " + tableName + "(" + nameStr + ") values(" + valueStr + ")"

	pstmt, err := tx.Prepare(insertStr)
	if err != nil {
		log.Println("failed to prepare insert.", err)
		return err
	}
	defer pstmt.Close()

	log.Println("executing insert: ", insertStr)
	_, err = pstmt.Exec(params...)
	if err != nil {
		log.Println("failed to execute insert.", err)
		return err
	}

	tx.Commit()
	return nil
}

func updateRecord(tableName string, value reflect.Value, whereStr string, whereArgs []interface{}) error {
	tx, err := db.Begin()
	if err != nil {
		log.Println("failed to start transaction.", err)
		return err
	}

	updateStr := "UPDATE " + tableName + " SET "
	params := []interface{}{}
	for i := 0; i < value.NumField(); i++ {
		persist := isPersistentField(value.Type(), value.Type().Field(i).Name)
		if persist {
			if i > 0 {
				updateStr += ","
			}
			updateStr += value.Type().Field(i).Name + "=?"

			v := field2db(value.Type().Field(i).Type, value.Field(i).Interface())
			params = append(params, v)
		}
	}
	if whereStr != "" {
		updateStr += " WHERE " + whereStr
		params = append(params, whereArgs...)
	}

	pstmt, err := tx.Prepare(updateStr)
	if err != nil {
		log.Println("failed to prepare update.", err)
		return err
	}
	defer pstmt.Close()

	log.Println("executing update: ", updateStr)
	_, err = pstmt.Exec(params...)
	if err != nil {
		log.Println("failed to execute update.", err)
		return err
	}

	tx.Commit()
	return nil
}

func deleteRecords(tableName string, whereStr string, whereArgs []interface{}) error {
	if whereStr == "" {
		return errors.New("Missing where string!")
	}

	tx, err := db.Begin()
	if err != nil {
		log.Println("failed to start transaction.", err)
		return err
	}

	deleteStr := "DELETE FROM " + tableName
	if whereStr != "all" {
		deleteStr += " WHERE " + whereStr
	}

	pstmt, err := tx.Prepare(deleteStr)
	if err != nil {
		log.Println("failed to prepare delete.", err)
		return err
	}
	defer pstmt.Close()

	log.Println("executing delete: ", deleteStr)
	_, err = pstmt.Exec(whereArgs...)
	if err != nil {
		log.Println("failed to execute delete.", err)
		return err
	}

	tx.Commit()
	return nil
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
	log.Printf("DecodeRuneInString(%s) -> r=%+v, n=%d\n", s, r, n)
	return string(unicode.ToLower(r)) + s[n:]
}
