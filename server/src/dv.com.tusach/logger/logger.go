package logger

import (
	"fmt"
	"log"
	"runtime"
	"strconv"
	"strings"

	"gopkg.in/natefinch/lumberjack.v2"
)

const (
	LevelDebug = iota
	LevelInfo
	LevelWarn
	LevelError
	LevelFatal
)

var logPrefixes []string = []string{"DBUG", "INFO", "WARN", "ERRO", "FATA"}

var logLevel = LevelInfo

func Init(level int, filename string, maxSizeMB int, maxBackups int, maxAgeDays int) {
	fmt.Printf("Initialising logger: %s, level:%d, maxSizeMB:%d, maxBackups:%d, maxAgeDays:%d\n",
		filename, level, maxSizeMB, maxBackups, maxAgeDays)

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

func getLogPrefix(logLevel int) string {
	str := "???"
	_, file, no, ok := runtime.Caller(2)
	if ok {
		tokens := strings.Split(file, "/")
		str = tokens[len(tokens)-1]
		// strip out the .go
		index := strings.LastIndex(str, ".go")
		if index != -1 {
			str = str[0:index]
		}
		// add the last package
		if len(tokens) > 1 {
			str = tokens[len(tokens)-2] + "/" + str
		}
		str += "#" + strconv.Itoa(no)
	}
	return logPrefixes[logLevel] + " - [" + str + "] "
}

func Debug(v ...interface{}) {
	if logLevel <= LevelDebug {
		log.Printf(getLogPrefix(LevelDebug)+"%v", v...)
	}
}

func Debugf(f string, v ...interface{}) {
	if logLevel <= LevelDebug {
		log.Printf(getLogPrefix(LevelDebug)+f, v...)
	}
}

func Info(v ...interface{}) {
	if logLevel <= LevelInfo {
		log.Printf(getLogPrefix(LevelInfo)+"%v", v...)
	}
}

func Infof(f string, v ...interface{}) {
	if logLevel <= LevelInfo {
		log.Printf(getLogPrefix(LevelInfo)+f, v...)
	}
}

func Warn(v ...interface{}) {
	if logLevel <= LevelWarn {
		log.Printf(getLogPrefix(LevelWarn)+"%v", v...)
	}
}

func Warnf(f string, v ...interface{}) {
	if logLevel <= LevelWarn {
		log.Printf(getLogPrefix(LevelWarn)+f, v...)
	}
}

func Error(v ...interface{}) {
	if logLevel <= LevelError {
		log.Printf(getLogPrefix(LevelError)+"%v", v...)
	}
}

func Errorf(f string, v ...interface{}) {
	if logLevel <= LevelError {
		log.Printf(getLogPrefix(LevelError)+f, v...)
	}
}
