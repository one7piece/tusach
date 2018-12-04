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
	MakeEpubCmd       string `json:makeEpubCmd`
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
	return filepath.Join(configuration.LibraryPath, "epub")
}

func GetParserPath() string {
	return filepath.Join(configuration.LibraryPath, "parser")
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
	currentDir, err := filepath.Abs(filepath.Dir(configFile))
	fmt.Printf("Current directory: %s\n", currentDir)

	if configuration.ServerPath == "" {
		panic("Missing config parameter: serverPath")
	}
	configuration.ServerPath = convert2absolute(currentDir, configuration.ServerPath)

	if configuration.DBFilename == "" {
		panic("Missing config parameter: dbFilename")
	}
	configuration.DBFilename = convert2absolute(currentDir, configuration.DBFilename)

	if configuration.LibraryPath == "" {
		panic("Missing config parameter: libraryPath")
	}
	configuration.LibraryPath = convert2absolute(currentDir, configuration.LibraryPath)

	if configuration.MakeEpubCmd == "" {
		panic("Missing config parameter: makeEpubCmd")
	}
	configuration.MakeEpubCmd = convert2absolute(currentDir, configuration.MakeEpubCmd)
	if _, err := os.Stat(configuration.MakeEpubCmd); os.IsNotExist(err) {
		panic("File " + configuration.MakeEpubCmd + " does not exists")
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
	configuration.LogFile = convert2absolute(currentDir, configuration.LogFile)

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

	fmt.Printf("ServerPath: %s\n", configuration.ServerPath)
	fmt.Printf("LibraryPath: %s\n", configuration.LibraryPath)
	fmt.Printf("MakeEpubCmd: %s\n", configuration.MakeEpubCmd)
	fmt.Printf("DBFilename: %s\n", configuration.DBFilename)
	fmt.Printf("LogFile: %s\n", configuration.LogFile)

	logger.Init(level, configuration.LogFile, configuration.LogMaxSizeMB, configuration.LogMaxBackups, 30)
}

func convert2absolute(curPath string, relPath string) string {
	newPath := relPath
	if strings.HasPrefix(relPath, "./") {
		newPath = filepath.Join(curPath, relPath[1:])
	}
	if strings.HasPrefix(relPath, "../") {
		newPath = filepath.Join(filepath.Dir(curPath), relPath[2:])
	}
	return newPath
}
