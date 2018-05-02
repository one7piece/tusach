package util

import (
	"encoding/json"
	"fmt"
	"os"
	"path/filepath"
	"strings"

	"dv.com.tusach/logger"
)

type Configuration struct {
	ServerPath        string `json:serverPath`
	LibraryPath       string `json:libraryPath`
	DBFilename        string `json:dbFilename`
	ServerBindAddress string `json:serverBindAddress`
	ServerBindPort    int    `json:serverBindPort`
	MaxActionBooks    int    `json:maxActiveBooks`
	ProxyURL          string `json:proxyURL`
	ProxyUsername     string `json:proxyUsername`
	ProxyPassword     string `json:proxyPassword`
	LogLevel          string `json:logLevel`
	LogFile           string `json:logFile`
	LogMaxSizeMB      int    `json:logMaxSizeMB`
	LogMaxBackups     int    `json:logMaxBackups`
}

var configFile string
var configuration Configuration

func GetConfigFile() string {
	return configFile
}

func GetConfiguration() Configuration {
	return configuration
}

func GetEpubPath() string {
	return configuration.LibraryPath + "/epub"
}

func GetBookPath(bookId int) string {
	return configuration.LibraryPath + "/books/" + fmt.Sprintf("%08d", bookId)
}

func GetBookEpubFilename(bookId int, title string) string {
	return configuration.LibraryPath + "/books/" + fmt.Sprintf("%08d", bookId) + "-" + strings.Replace(title, " ", "-", -1) + ".epub"
}

func GetChapterFilename(bookId int, chapterNo int) string {
	return configuration.LibraryPath + "/books/" + fmt.Sprintf("%08d/OEBPS/chapter%04d.html", bookId, chapterNo)
}

func GetRawChapterFilename(bookId int, chapterNo int) string {
	return configuration.LibraryPath + "/books/" + fmt.Sprintf("%08d/OEBPS/chapter%04d-raw.html", bookId, chapterNo)
}

func GetParserPath() string {
	return configuration.LibraryPath + "/parser"
}

func LoadConfig(filename string) {
	configFile = filename
	f, err := os.Open(filename)
	if err != nil {
		panic(err)
	}
	defer func() {
		if err := f.Close(); err != nil {
			panic(err)
		}
	}()

	decoder := json.NewDecoder(f)
	err = decoder.Decode(&configuration)
	if err != nil {
		panic(err)
	}
	if configuration.ServerPath == "" {
		panic("Missing config parameter: serverPath")
	}
	if configuration.DBFilename == "" {
		panic("Missing config parameter: dbFilename")
	}
	if configuration.LibraryPath == "" {
		panic("Missing config parameter: libraryPath")
	}
	if configuration.ServerBindPort == 0 {
		panic("Missing config parameter: ServerBindPort")
	}
	if configuration.MaxActionBooks == 0 {
		configuration.MaxActionBooks = 2
	}

	if configuration.LogFile == "" {
		// default to the parent of the server path
		configuration.LogFile = filepath.Dir(configuration.ServerPath)
	}
	if configuration.LogLevel == "" {
		configuration.LogLevel = "info"
	}
	level := logger.LevelInfo
	if configuration.LogLevel == "debug" {
		level = 0
	} else if configuration.LogLevel == "warn" {
		level = 2
	} else if configuration.LogLevel == "error" {
		level = 3
	}
	if configuration.LogMaxSizeMB == 0 {
		configuration.LogMaxSizeMB = 10
	}
	if configuration.LogMaxBackups == 0 {
		configuration.LogMaxBackups = 10
	}
	logger.Init(level, configuration.LogFile, configuration.LogMaxSizeMB, configuration.LogMaxBackups, 30)
}
