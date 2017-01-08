package util

import (
	"dv.com.tusach/logger"
	"errors"
	"os"
	"path/filepath"
	"strings"
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
	logger.Info("saving file: ", filename)
	fo, err := os.Create(filename)
	if err != nil {
		return err
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
