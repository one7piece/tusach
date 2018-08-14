package util

import (
	"errors"
	"os"
	"path/filepath"
	"strings"
	"time"

	"dv.com.tusach/logger"
)

func ExtractError(err interface{}) error {
	// find out what exactly is err
	switch x := err.(type) {
	case string:
		return errors.New(x)
	case error:
		return x
	default:
		return errors.New("Unknown error")
	}
}

func SaveFile(filename string, data []byte) error {
	logger.Info("saving file: %s", filename)
	fo, err := os.Create(filename)
	if err != nil {
		return errors.New("Error creating file " + filename + ": " + err.Error())
	}
	defer fo.Close()

	_, err = fo.Write(data)
	if err != nil {
		return err
	}
	return nil
}

func ListDir(root string, filesOnly bool) ([]string, error) {
	filenames := []string{}

	fs, err := os.Stat(root)
	if err != nil || !fs.IsDir() {
		return filenames, errors.New("Unknown or not a directory")
	}
	rootPath := strings.TrimRight(root, "/")

	filepath.Walk(root, func(path string, f os.FileInfo, _ error) error {
		//logger.Infof("walk: rootPath=%s, path=%s, filename=%s\n", rootPath, path, f.Name())
		path = strings.Replace(path, "\\", "/", -1)
		index := strings.LastIndex(path, "/")
		if (path == rootPath) || (index != -1 && path[0:index] == rootPath) {
			if !f.IsDir() || !filesOnly {
				filenames = append(filenames, f.Name())
			}
		} else {
			//logger.Debug("ignore sub directory walk: " + path)
			return filepath.SkipDir
		}
		return nil
	})
	return filenames, nil
}

func UnixTimeNow() int64 {
	return UnixTimeMS(time.Now())
}

func UnixTimeMS(t time.Time) int64 {
	return t.UnixNano() / (int64(time.Millisecond) / int64(time.Nanosecond))
}
