package persistence

import (
	"database/sql"
	"errors"
	"os"
	"reflect"
	"sort"
	"strconv"
	"strings"

	"github.com/golang/protobuf/ptypes"

	"dv.com.tusach/logger"
	"dv.com.tusach/model"
	"dv.com.tusach/util"
	_ "github.com/cznic/ql/driver"
)

type Ql struct {
	db   *sql.DB
	info model.SystemInfo
}

func (ql *Ql) InitDB() {
	ql.db = nil
	logger.Infof("opening database %s\n", util.GetConfiguration().DBFilename)
	_db, err := sql.Open("ql", util.GetConfiguration().DBFilename)
	if err != nil {
		logger.Error("failed to open databse: " + util.GetConfiguration().DBFilename + ": " + err.Error())
		panic(err)
	}
	ql.db = _db

	// create table systeminfo, datetime store as TEXT (ISO8601 string)
	err = ql.createTable("systeminfo", reflect.TypeOf(model.SystemInfo{}))
	if err != nil {
		panic(err)
	}
	err = ql.createTable("user", reflect.TypeOf(model.User{}))
	if err != nil {
		panic(err)
	}
	err = ql.createTable("book", reflect.TypeOf(model.Book{}))
	if err != nil {
		panic(err)
	}
	err = ql.createTable("chapter", reflect.TypeOf(model.Chapter{}))
	if err != nil {
		panic(err)
	}
}

func (ql *Ql) CloseDB() {
	if ql.db != nil {
		ql.db.Close()
	}
}

func (ql *Ql) createTable(tableName string, tableType reflect.Type) error {
	stmt := "create table if not exists " + tableName + " ("
	for i := 0; i < tableType.NumField(); i++ {
		field := tableType.Field(i)
		persist := isPersistentField(tableType, field.Name)
		if persist {
			colName := field.Name
			//logger.Infof("parsing field: %s:%s\n", field.Name, field.Type.Name())
			var colType string
			switch field.Type.Kind() {
			case reflect.Int64:
				colType = "int64"
			case reflect.Int32:
				colType = "int32"
			case reflect.Int16:
				colType = "int16"
			case reflect.Int:
				colType = "int"
			case reflect.Bool:
				colType = "int"
			default:
				colType = "string"
			}
			if i > 0 {
				stmt += ", "
			}
			stmt += colName + " " + colType
		}
	}
	stmt += ")"

	tx, err := ql.db.Begin()
	if err != nil {
		logger.Errorf("failed to start transaction: %v", err)
		return err
	}
	defer func() {
		if err == nil {
			tx.Commit()
		} else {
			tx.Rollback()
		}
	}()

	logger.Infof("executing creating table query: %s\n", stmt)
	_, err = tx.Exec(stmt)
	if err != nil {
		logger.Errorf("failed to create table: %s\n", err)
		return err
	}
	return nil
}

func (ql *Ql) GetSystemInfo(forceReload bool) (model.SystemInfo, error) {
	if forceReload {
		records, err := ql.loadRecords(reflect.TypeOf(model.SystemInfo{}), "systeminfo", "", nil)
		if err != nil {
			return model.SystemInfo{}, err
		}
		if len(records) > 0 {
			ql.info = records[0].(model.SystemInfo)
			logger.Infof("Found systeminfo: %+v\n", ql.info)
		} else {
			logger.Errorf("No systeminfo found\n")
		}
	}
	return ql.info, nil
}

func (ql *Ql) SaveSystemInfo(info model.SystemInfo) {
	logger.Debugf("save systemInfo=%v", info)
	records, err := ql.loadRecords(reflect.TypeOf(model.SystemInfo{}), "systeminfo", "", nil)
	if err != nil {
		logger.Errorf("Failed to load systeminfo", err)
		panic(err)
	}
	if len(records) == 0 {
		// insert
		err = ql.insertRecord("systeminfo", reflect.ValueOf(info))
	} else {
		// update
		err = ql.updateRecord("systeminfo", reflect.ValueOf(info), []string{})
	}
	if err != nil {
		logger.Errorf("Failed to save systeminfo", err)
		panic(err)
	}
	ql.info.SystemUpTime = info.SystemUpTime
	ql.info.BookLastUpdatedTime = info.BookLastUpdatedTime
}

func (ql *Ql) LoadUsers() ([]model.User, error) {
	records, err := ql.loadRecords(reflect.TypeOf(model.User{}), "user", "", nil)
	if err != nil {
		return []model.User{}, err
	}
	users := []model.User{}
	for i := 0; i < len(records); i++ {
		user := records[i].(model.User)
		users = append(users, user)
		logger.Infof("Found user: %+v\n", user)
	}
	if len(users) == 0 {
		logger.Infof("No users found\n")
	}
	return users, nil
}

func (ql *Ql) SaveUser(user model.User) error {
	args := []interface{}{user.Name}
	records, err := ql.loadRecords(reflect.TypeOf(model.User{}), "user", "Name=$1", args)
	if err != nil {
		return err
	}
	if len(records) == 0 {
		// insert
		ql.insertRecord("user", reflect.ValueOf(user))
	} else {
		// update
		ql.updateRecord("user", reflect.ValueOf(user), []string{"Name"})
	}
	return nil
}

func (ql *Ql) DeleteUser(userName string) error {
	args := []interface{}{userName}
	err := ql.deleteRecords("user", "Name=$1", args)
	return err
}

func (ql *Ql) LoadBook(id int) (model.Book, error) {
	args := []interface{}{id}
	records, err := ql.loadRecords(reflect.TypeOf(model.Book{}), "book", "ID=$1", args)
	if err != nil {
		return model.Book{}, err
	}
	if len(records) > 0 {
		return records[0].(model.Book), nil
	}
	return model.Book{}, nil
}

func (ql *Ql) LoadBooks() ([]model.Book, error) {
	records, err := ql.loadRecords(reflect.TypeOf(model.Book{}), "book", "", nil)
	if err != nil {
		return []model.Book{}, err
	}
	books := []model.Book{}
	for i := 0; i < len(records); i++ {
		book := records[i].(model.Book)
		books = append(books, book)
		logger.Infof("Found book: %+v\n", book)
	}
	if len(books) == 0 {
		logger.Infof("No books found\n")
	}
	return books, nil
}

func (ql *Ql) SaveBook(book model.Book) (retId int, retErr error) {
	logger.Infof("Saving book: %v", book)
	var newBookId = 0
	// TODO need locking here
	if book.ID == 0 {
		rows, retErr := ql.db.Query("SELECT max(ID) FROM book")
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
		book.ID = int32(newBookId)
		retErr = ql.insertRecord("book", reflect.ValueOf(book))
	} else {
		// update
		//args := []interface{}{book.ID}
		retErr = ql.updateRecord("book", reflect.ValueOf(book), []string{"ID"})
	}

	ql.info.BookLastUpdatedTime = book.LastUpdatedTime
	ql.SaveSystemInfo(ql.info)

	return int(book.ID), retErr
}

func (ql *Ql) DeleteBook(bookId int) error {
	logger.Infof("Deleting book ID=" + strconv.Itoa(bookId))
	// TODO need locking here

	// delete all chapters of book
	args := []interface{}{bookId}
	err := ql.deleteRecords("chapter", "BookId=int32($1)", args)
	if err != nil {
		return err
	}

	// remove book
	err = ql.deleteRecords("book", "ID=int32($1)", args)

	// remove files
	err = os.RemoveAll(GetBookPath(bookId))

	ql.info.BookLastUpdatedTime = ptypes.TimestampNow()
	ql.SaveSystemInfo(ql.info)

	return err
}

func (ql *Ql) LoadChapters(bookId int) ([]model.Chapter, error) {
	var records []interface{}
	var err error
	if bookId > 0 {
		args := []interface{}{bookId}
		records, err = ql.loadRecords(reflect.TypeOf(model.Chapter{}), "chapter", "BookId=$1", args)
	} else {
		records, err = ql.loadRecords(reflect.TypeOf(model.Chapter{}), "chapter", "", nil)
	}
	if err != nil {
		return []model.Chapter{}, err
	}

	chapters := []model.Chapter{}
	for i := 0; i < len(records); i++ {
		chapter := records[i].(model.Chapter)
		chapters = append(chapters, chapter)
		//logger.Infof("Found chapter: %+v\n", chapter)
	}
	if len(chapters) == 0 {
		logger.Infof("No chapter found\n")
	} else {
		// sort chapters by ChapterNo
		sort.Sort(model.ByChapterNo(chapters))
	}

	// TODO verify chapter html/images from file system

	return chapters, nil
}

func (ql *Ql) SaveChapter(chapter model.Chapter) error {
	/*
		filepath := util.GetChapterFilename(chapter.BookId, chapter.ChapterNo)
		err := ioutil.WriteFile(filepath, chapter.Html, 0777)
		if err != nil {
			logger.Infof("error writing chapter file: ", filepath, err)
			return err
		}
	*/
	args := []interface{}{chapter.BookId, chapter.ChapterNo}
	records, err := ql.loadRecords(reflect.TypeOf(model.Chapter{}), "chapter", "BookId=$1 and ChapterNo=$2", args)
	if err != nil {
		return err
	}
	if len(records) == 0 {
		// save record
		err = ql.insertRecord("chapter", reflect.ValueOf(chapter))
	} else {
		// save record
		err = ql.updateRecord("chapter", reflect.ValueOf(chapter), []string{"BookId", "ChapterNo"})
	}

	return err
}

func (ql *Ql) loadRecords(tableType reflect.Type, tableName string, whereStr string, args []interface{}) ([]interface{}, error) {
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
	logger.Debugf("executing query: %s\n", query)
	rows, err := ql.db.Query(query, args...)
	if err != nil {
		logger.Errorf("Error executing query. ", err)
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
				//logger.Infof("scan col field: %s=%v\n", field.Name, colval)
				v, err := db2field(field.Name, field.Type, colval)
				if err != nil {
					return records, err
				}
				recordValue.FieldByName(field.Name).Set(reflect.ValueOf(v))
			}
		}
		records = append(records, recordValue.Interface())
	}
	return records, nil
}

func (ql *Ql) insertRecord(tableName string, value reflect.Value) error {
	logger.Debugf("insertRecord: table:%s, value:%v", tableName, value)

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
			v, err := field2db(value.Type().Field(i).Name, value.Type().Field(i).Type, value.Field(i).Interface())
			if err != nil {
				logger.Errorf("failed to convert field value to db record.", err)
				return err
			}
			valueStr += createParamVariableStr(v, i+1)
			logger.Debugf("field %s -> value: %v (%s)", value.Type().Field(i).Name, v, reflect.TypeOf(v))
			params = append(params, v)
		}
	}

	tx, err := ql.db.Begin()
	if err != nil {
		logger.Errorf("failed to start transaction.", err)
		return err
	}
	defer func() {
		if err == nil {
			logger.Info("insertRecord() - commiting transaction")
			tx.Commit()
		} else {
			logger.Info("insertRecord() - rolling back transaction")
			tx.Rollback()
		}
	}()

	insertStr := "INSERT INTO " + tableName + "(" + nameStr + ") values(" + valueStr + ")"
	logger.Debugf("executing insert: ", insertStr)
	pstmt, err := tx.Prepare(insertStr)
	if err != nil {
		logger.Errorf("failed to prepare insert.", err)
		return err
	}
	defer pstmt.Close()

	_, err = pstmt.Exec(params...)
	if err != nil {
		logger.Errorf("failed to execute insert.", err)
		return err
	}
	return err
}

func createParamVariableStr(pValue interface{}, pIndex int) string {
	// driver only receive value of the following types: int64, float64, bool, string, []byte, time.Time
	// need to explicit conversion for other types such as int, int32, int64 etc.
	valueStr := "$" + strconv.Itoa(pIndex)
	if reflect.TypeOf(pValue).Kind() == reflect.Int {
		valueStr = "int($" + strconv.Itoa(pIndex) + ")"
	} else if reflect.TypeOf(pValue).Kind() == reflect.Int16 {
		valueStr = "int16($" + strconv.Itoa(pIndex) + ")"
	} else if reflect.TypeOf(pValue).Kind() == reflect.Int32 {
		valueStr = "int32($" + strconv.Itoa(pIndex) + ")"
	}
	return valueStr
}

func (ql *Ql) updateRecord(tableName string, value reflect.Value, filterFields []string) error {
	logger.Debugf("updateRecord table:%s, value:%v", tableName, value)

	updateStr := "UPDATE " + tableName + " SET "
	params := []interface{}{}
	for i := 0; i < value.NumField(); i++ {
		persist := isPersistentField(value.Type(), value.Type().Field(i).Name)
		if persist {
			if i > 0 {
				updateStr += ","
			}
			//updateStr += value.Type().Field(i).Name + "=$" + strconv.Itoa(i+1)

			v, err := field2db(value.Type().Field(i).Name, value.Type().Field(i).Type, value.Field(i).Interface())
			if err != nil {
				return err
			}
			updateStr += value.Type().Field(i).Name + "=" + createParamVariableStr(v, i+1)
			params = append(params, v)
		}
	}
	whereStr := ""
	if len(filterFields) > 0 {
		for _, name := range filterFields {
			field, found := value.Type().FieldByName(name)
			if !found {
				return errors.New("Field " + name + " does not exist in table " + tableName)
			}
			if whereStr != "" {
				whereStr += " AND "
			}
			v, err := field2db(name, field.Type, value.FieldByName(name).Interface())
			if err != nil {
				return err
			}
			whereStr += name + "=" + createParamVariableStr(v, len(params)+1)
			params = append(params, v)
		}
	}

	if whereStr != "" {
		updateStr += " WHERE " + whereStr
	}

	tx, err := ql.db.Begin()
	if err != nil {
		logger.Errorf("failed to start transaction.", err)
		return err
	}

	logger.Debugf("executing update: ", updateStr)

	defer func() {
		if err == nil {
			logger.Info("updateRecord() - commiting transaction")
			tx.Commit()
		} else {
			logger.Info("updateRecord() - rolling back transaction")
			tx.Rollback()
		}
	}()

	pstmt, err := tx.Prepare(updateStr)
	if err != nil {
		logger.Errorf("failed to prepare update.", err)
		return err
	}
	defer pstmt.Close()

	_, err = pstmt.Exec(params...)
	if err != nil {
		logger.Errorf("failed to execute update.", err)
		return err
	}

	return nil
}

func (ql *Ql) deleteRecords(tableName string, whereStr string, whereArgs []interface{}) error {
	if whereStr == "" {
		return errors.New("Missing where string!")
	}

	tx, err := ql.db.Begin()
	if err != nil {
		logger.Errorf("failed to start transaction.", err)
		return err
	}

	defer func() {
		if err == nil {
			logger.Info("deleteRecords() - commiting transaction")
			tx.Commit()
		} else {
			logger.Info("deleteRecords() - rolling back transaction")
			tx.Rollback()
		}
	}()

	deleteStr := "DELETE FROM " + tableName
	if whereStr != "all" {
		deleteStr += " WHERE " + whereStr
	}

	pstmt, err := tx.Prepare(deleteStr)
	if err != nil {
		logger.Errorf("failed to prepare delete.", err)
		return err
	}
	defer pstmt.Close()

	logger.Debugf("executing delete: ", deleteStr)
	_, err = pstmt.Exec(whereArgs...)
	if err != nil {
		logger.Errorf("failed to execute delete.", err)
		return err
	}

	return nil
}
