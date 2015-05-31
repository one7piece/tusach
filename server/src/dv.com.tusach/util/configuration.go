package util

import (
	"encoding/json"
	"fmt"
	"os"
	"strings"
)

type Configuration struct {
	ServerPath        string `json:serverPath`
	LibraryPath       string `json:libraryPath`
	DBFilename        string `json:dbFilename`
	ServerBindAddress string `json:serverBindAddress`
	ServerBindPort    int    `json:serverBindPort`
	MaxActionBooks    int    `json:maxActiveBooks`
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
}
