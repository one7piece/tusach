package util

import (
	"encoding/json"
	"errors"
	"fmt"
	"os"
	"path/filepath"
	"runtime"

	"dv.com.tusach/logger"
)

type OAuthUserResource struct {
	Name         string `json:name`
	ClientID     string `json:clientID`
	ClientSecret string `json:clientSecret`
	Endpoint     string `json:endpoint`
	Redirect     string `json:redirect`
	Scope        string `json:scope`
}

type OAuthServiceResource struct {
	Email      string   `json:client_email`
	PrivateKey string   `json:private_key`
	Scopes     []string `json:scopes`
}

type Configuration struct {
	ServerPath        string   `json:serverPath`
	LibraryPath       string   `json:libraryPath`
	DBFilename        string   `json:dbFilename`
	ServerBindAddress string   `json:serverBindAddress`
	ServerBindPort    int      `json:serverBindPort`
	GrpcBindPort      int      `json:grpcBindPort`
	MaxActionBooks    int      `json:maxActiveBooks`
	ProxyURL          string   `json:proxyURL`
	ProxyUsername     string   `json:proxyUsername`
	ProxyPassword     string   `json:proxyPassword`
	LogLevel          string   `json:logLevel`
	LogFile           string   `json:logFile`
	LogMaxSizeMB      int      `json:logMaxSizeMB`
	LogMaxBackups     int      `json:logMaxBackups`
	CreateEpubCmd     string   `json:createEpubCmd`
	UpdateEpubCmd     string   `json:updateEpubCmd`
	ExtractEpubCmd    string   `json:extractEpubCmd`
	SslKey            string   `json:sslKey`
	SslCert           string   `json:sslCert`
	CheckPermission   string   `json:checkPermission`
	OAuthServiceFile  string   `json:oAuthServiceFile`
	OAuthUserFiles    []string `json:oAuthUserFiles`
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

func GetOAuthUserResource(provider string) *OAuthUserResource {
	for _, f := range configuration.OAuthUserFiles {
		oauthRes := OAuthUserResource{}
		if err := ReadJsonFile(f, &oauthRes); err != nil {
			logger.Errorf("Error reading oauth file: %s. %s\n", f, err)
		} else {
			if oauthRes.Name == provider {
				return &oauthRes
			}
		}
	}

	return nil
}

func GetOAuthUserResources() []*OAuthUserResource {
	arr := []*OAuthUserResource{}
	for _, f := range configuration.OAuthUserFiles {
		oauthRes := OAuthUserResource{}
		if err := ReadJsonFile(f, &oauthRes); err != nil {
			logger.Errorf("Error reading oauth file: %s. %s\n", f, err)
		} else {
			arr = append(arr, &oauthRes)
		}
	}

	return arr
}

func LoadConfig(filename string) {
	configFile = getAbsolutePath(filename)
	fmt.Printf("Reading configuration file: %s\n", configFile)
	if !IsExist(configFile) {
		panic(errors.New("Could not find configuration file: " + configFile))
	}
	f, err := os.Open(configFile)
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
	configuration.ServerPath = getAbsolutePath(configuration.ServerPath)

	if configuration.DBFilename == "" {
		panic("Missing config parameter: dbFilename")
	}
	configuration.DBFilename = getAbsolutePath(configuration.DBFilename)

	if configuration.LibraryPath == "" {
		panic("Missing config parameter: libraryPath")
	}
	configuration.LibraryPath = getAbsolutePath(configuration.LibraryPath)

	if _, err := os.Stat(GetParserFile()); os.IsNotExist(err) {
		panic("Parser file " + GetParserFile() + " does not exists")
	}

	if configuration.CreateEpubCmd == "" {
		if runtime.GOOS == "windows" {
			configuration.CreateEpubCmd = filepath.Join(configuration.LibraryPath, "create-epub.cmd")
		} else {
			configuration.CreateEpubCmd = filepath.Join(configuration.LibraryPath, "create-epub.sh")
		}
	}
	if configuration.UpdateEpubCmd == "" {
		if runtime.GOOS == "windows" {
			configuration.UpdateEpubCmd = filepath.Join(configuration.LibraryPath, "update-epub.cmd")
		} else {
			configuration.UpdateEpubCmd = filepath.Join(configuration.LibraryPath, "update-epub.sh")
		}
	}
	if configuration.ExtractEpubCmd == "" {
		if runtime.GOOS == "windows" {
			configuration.ExtractEpubCmd = filepath.Join(configuration.LibraryPath, "extract-epub.cmd")
		} else {
			configuration.ExtractEpubCmd = filepath.Join(configuration.LibraryPath, "extract-epub.sh")
		}
	}
	configuration.CreateEpubCmd = getAbsolutePath(configuration.CreateEpubCmd)
	configuration.UpdateEpubCmd = getAbsolutePath(configuration.UpdateEpubCmd)
	configuration.ExtractEpubCmd = getAbsolutePath(configuration.ExtractEpubCmd)

	if !IsExist(configuration.CreateEpubCmd) {
		panic("File " + configuration.CreateEpubCmd + " does not exists")
	}
	if !IsExist(configuration.UpdateEpubCmd) {
		panic("File " + configuration.UpdateEpubCmd + " does not exists")
	}
	if !IsExist(configuration.ExtractEpubCmd) {
		panic("File " + configuration.ExtractEpubCmd + " does not exists")
	}
	if configuration.ServerBindPort == 0 {
		panic("Missing config parameter: ServerBindPort")
	}
	if configuration.GrpcBindPort == 0 {
		panic("Missing config parameter: GrpcBindPort")
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

	fmt.Printf("loaded configuration file: %v\n", configuration)

	logger.Init(level, configuration.LogFile, configuration.LogMaxSizeMB, configuration.LogMaxBackups, 30)
}

func getAbsolutePath(path string) string {
	abPath, err := filepath.Abs(path)
	if err != nil {
		panic(err)
	}
	return abPath
}
