package logger

import (
	"gopkg.in/natefinch/lumberjack.v2"
	"log"
)

const (
	LevelDebug = iota
	LevelInfo
	LevelWarn
	LevelError
	LevelFatal
)

var threshold = LevelInfo

func Init(level int, filename string) {
	threshold = level
	if filename != "" {
		log.SetOutput(&lumberjack.Logger{
			Filename:   filename,
			MaxSize:    100, // megabytes
			MaxBackups: 10,
			MaxAge:     28, //days
		})
	}
}

func Debug(v ...interface{}) {
	if threshold <= LevelDebug {
		log.Printf("DEBUG - %v", v)
	}
}

func Debugf(f string, v ...interface{}) {
	if threshold <= LevelDebug {
		log.Printf("DEBUG - "+f, v)
	}
}

func Info(v ...interface{}) {
	if threshold <= LevelInfo {
		log.Printf("INFO - %v", v)
	}
}

func Infof(f string, v ...interface{}) {
	if threshold <= LevelInfo {
		log.Printf("INFO - "+f, v)
	}
}

func Warn(v ...interface{}) {
	if threshold <= LevelWarn {
		log.Printf("WARN - %v", v)
	}
}

func Warnf(f string, v ...interface{}) {
	if threshold <= LevelWarn {
		log.Printf("WARN - "+f, v)
	}
}

func Error(v ...interface{}) {
	if threshold <= LevelError {
		log.Printf("ERROR - %v", v)
	}
}

func Errorf(f string, v ...interface{}) {
	if threshold <= LevelError {
		log.Printf("ERROR - "+f, v)
	}
}
