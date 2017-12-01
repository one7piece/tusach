package logger

import (
	"fmt"
	"log"

	"github.com/natefinch/lumberjack"
)

const (
	LevelDebug = iota
	LevelInfo
	LevelWarn
	LevelError
	LevelFatal
)

var logLevel = LevelInfo

func Init(level int, filename string, maxSizeMB int, maxBackups int, maxAgeDays int) {
	fmt.Printf("Initialising logger: %s, level:%d, maxSizeMB:%d, maxBackups:%d, maxAgeDays:%d", filename, level, maxSizeMB, maxBackups, maxAgeDays)

	logLevel = level
	if filename != "" {
		log.SetOutput(&lumberjack.Logger{
			Filename:   filename,
			MaxSize:    maxSizeMB, // megabytes
			MaxBackups: maxBackups,
			MaxAge:     maxAgeDays, //days
		})
	}
}

func Debug(v ...interface{}) {
	if logLevel <= LevelDebug {
		log.Printf("DBUG - %v", v)
	}
}

func Debugf(f string, v ...interface{}) {
	if logLevel <= LevelDebug {
		log.Printf("DBUG - "+f, v)
	}
}

func Info(v ...interface{}) {
	if logLevel <= LevelInfo {
		log.Printf("INFO - %v", v)
	}
}

func Infof(f string, v ...interface{}) {
	if logLevel <= LevelInfo {
		log.Printf("INFO - "+f, v)
	}
}

func Warn(v ...interface{}) {
	if logLevel <= LevelWarn {
		log.Printf("WARN - %v", v)
	}
}

func Warnf(f string, v ...interface{}) {
	if logLevel <= LevelWarn {
		log.Printf("WARN - "+f, v)
	}
}

func Error(v ...interface{}) {
	if logLevel <= LevelError {
		log.Printf("ERRO - %v", v)
	}
}

func Errorf(f string, v ...interface{}) {
	if logLevel <= LevelError {
		log.Printf("ERRO - "+f, v)
	}
}
