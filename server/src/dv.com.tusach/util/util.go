package util

import (
	"errors"
	"os"
	"path/filepath"
	"strings"
	"time"

	"dv.com.tusach/logger"
	"github.com/golang/protobuf/ptypes"
	tspb "github.com/golang/protobuf/ptypes/timestamp"
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

func TimestampNow() (*tspb.Timestamp) {
	return ptypes.TimestampNow()
}

func UnixTimeNow() int64 {
	return Time2UnixTime(time.Now())
}

func Timestamp2UnixTime(t *tspb.Timestamp) int64 {
	return int64(t.GetNanos()/1000000)
}

func Time2UnixTime(t time.Time) int64 {
	return t.UnixNano() / (int64(time.Millisecond) / int64(time.Nanosecond))
}

func String2Timestamp(str string) (*tspb.Timestamp, error) {
	t, err := time.Parse(time.RFC3339, str)
	if err != nil {
		return nil, err
	}
	return ptypes.TimestampProto(t)
}

func Timestamp2String(t *tspb.Timestamp) string {
	return ptypes.TimestampString(t)
}

func String2Time(str string) (time.Time, error) {
	return time.Parse(time.RFC3339, str)
}

func Time2String(t time.Time) (string, error) {
	buffer, err := t.MarshalText()
	return string(buffer), err
}
