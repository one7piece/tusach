package test

import (
	"database/sql"
	"fmt"
	"os"
	"reflect"
	"testing"

	"dv.com.tusach/logger"
	"dv.com.tusach/persistence"
	_ "github.com/cznic/ql/driver"
)

const FILENAME = "./ql_test.db"

func TestGL(t *testing.T) {
	fmt.Println("TestGL...")
	db, err := sql.Open("ql", FILENAME)
	if err != nil {
		t.Error("failed to open databse: ql_test.db. " + err.Error())
	}
	defer func() {
		logger.Info("Closing database")
		db.Close()
		os.Remove(FILENAME)
	}()

	// test create table
	createTable(db, "systeminfo", reflect.TypeOf(persistence.SystemInfo{}))

	query := "SELECT * FROM systeminfo"
	logger.Infof("executing query: %s\n", query)
	rows, err := db.Query(query)
	if err != nil {
		logger.Errorf("Error executing query. ", err)
		return
	}
	defer rows.Close()
}

func createTable(db *sql.DB, tableName string, tableType reflect.Type) {
	tx, err := db.Begin()
	if err != nil {
		logger.Infof("failed to start transaction.", err)
		return
	}
	defer func() {
		if err == nil {
			tx.Commit()
		} else {
			tx.Rollback()
		}
	}()

	stmt := "create table if not exists " + tableName + " ("
	for i := 0; i < tableType.NumField(); i++ {
		field := tableType.Field(i)
		persist := true
		if persist {
			colName := field.Name
			//logger.Infof("parsing field: %s:%s\n", field.Name, field.Type.Name())
			var colType string
			switch field.Type.Kind() {
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
	logger.Infof("executing creating table query: %s\n", stmt)
	_, err = tx.Exec(stmt)
	if err != nil {
		logger.Infof("failed to create table: %s\n", err)
	}
}
