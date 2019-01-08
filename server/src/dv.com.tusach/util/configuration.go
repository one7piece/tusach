package util

import (
	"encoding/json"
	"fmt"
	"os"
	"path/filepath"
	"runtime"

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
	MakeEpubCmd       string
	UpdateEpubCmd     string
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

func GetParserFile() string {
	return filepath.Join(configuration.LibraryPath, "parser.js")
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
	if err != nil {
		panic(err)
	}
	fmt.Printf("HOME directory: %s, current directory: %s\n", os.Getenv("HOME"), currentDir)

	if os.Getenv("HOME") != currentDir {
		fmt.Printf("Change HOME directory to %s\n", currentDir)
		os.Chdir(currentDir)
	}

	if configuration.ServerPath == "" {
		panic("Missing config parameter: serverPath")
	}
	configuration.ServerPath, err = filepath.Abs(configuration.ServerPath)

	if configuration.DBFilename == "" {
		panic("Missing config parameter: dbFilename")
	}
	configuration.DBFilename, err = filepath.Abs(configuration.DBFilename)
	if err != nil {
		panic(err)
	}

	if configuration.LibraryPath == "" {
		panic("Missing config parameter: libraryPath")
	}
	configuration.LibraryPath, err = filepath.Abs(configuration.LibraryPath)
	if err != nil {
		panic(err)
	}
	if _, err := os.Stat(GetParserFile()); os.IsNotExist(err) {
		panic("Parser file " + GetParserFile() + " does not exists")
	}

	configuration.MakeEpubCmd = filepath.Join(configuration.LibraryPath, "create-epub.sh")
	configuration.UpdateEpubCmd = filepath.Join(configuration.LibraryPath, "update-epub.sh")
	if runtime.GOOS == "windows" {
		configuration.MakeEpubCmd = filepath.Join(configuration.LibraryPath, "create-epub.cmd")
		configuration.UpdateEpubCmd = filepath.Join(configuration.LibraryPath, "update-epub.cmd")
	}

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
	configuration.LogFile, err = filepath.Abs(configuration.LogFile)
	if err != nil {
		panic(err)
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

	fmt.Printf("ServerPath: %s\n", configuration.ServerPath)
	fmt.Printf("LibraryPath: %s\n", configuration.LibraryPath)
	fmt.Printf("MakeEpubCmd: %s, UpdateEpubCmd: %s\n", configuration.MakeEpubCmd, configuration.UpdateEpubCmd)
	fmt.Printf("DBFilename: %s\n", configuration.DBFilename)
	fmt.Printf("LogFile: %s\n", configuration.LogFile)

	logger.Init(level, configuration.LogFile, configuration.LogMaxSizeMB, configuration.LogMaxBackups, 30)
}
