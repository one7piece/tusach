package util

import (
	"encoding/json"
	"errors"
	"io/ioutil"
	"os"
	"os/exec"
	"path/filepath"
	"runtime"
	"strings"
	"time"

	"dv.com.tusach/logger"
	"github.com/golang/protobuf/ptypes"
	tspb "github.com/golang/protobuf/ptypes/timestamp"
)

func SplitByNewLine(str string) []string {
	return strings.Split(strings.Replace(str, "\r\n", "\n", -1), "\n")
}

func ContainsString(list []string, a string) bool {
	for _, item := range list {
		if a == item {
			return true
		}
	}
	return false
}

func IsExist(path string) bool {
	if _, err := os.Stat(path); !os.IsNotExist(err) {
		return true
	}
	return false
}

func IsDir(path string) bool {
	if f, err := os.Stat(path); !os.IsNotExist(err) {
		return f.IsDir()
	}
	return false
}

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
	logger.Info("saving file: %s, #bytes:%d", filename, len(data))
	fo, err := os.Create(filename)
	if err != nil {
		return errors.New("Error creating file " + filename + ": " + err.Error())
	}
	defer fo.Close()

	//err := ioutil.WriteFile(filepath, chapter.Html, 0777)

	_, err = fo.Write(data)
	if err != nil {
		return err
	}
	return nil
}

func ReadDir(path string, filesOnly bool) ([]string, error) {
	filenames := []string{}

	files, err := ioutil.ReadDir(path)
	if err != nil {
		return filenames, err
	}

	for _, f := range files {
		if !f.IsDir() || !filesOnly {
			filenames = append(filenames, f.Name())
		}
	}
	return filenames, nil
}

func CopyTree(fromPath string, toPath string) (string, error) {
	if !IsExist(fromPath) {
		return "Invalid source path: " + fromPath, errors.New("Invalid source path: " + fromPath)
	}
	if !IsExist(toPath) {
		return "Invalid dest path: " + toPath, errors.New("Invalid dest path: " + toPath)
	}

	var cmd *exec.Cmd
	if runtime.GOOS == "windows" {
		destPath := filepath.Join(toPath, filepath.Base(fromPath))
		if IsDir(fromPath) {
			cmd = exec.Command("robocopy", fromPath, destPath,
				"/MIR", "/nfl", "/ndl", "/njh", "/njs", "/nc", "/ns", "/np")
		} else {
			cmd = exec.Command("copy", "/Y", fromPath, destPath)
		}
		out, _ := cmd.CombinedOutput()
		return string(out), nil
	} else {
		if IsDir(fromPath) {
			cmd = exec.Command("cp", "-rf", fromPath, toPath)
		} else {
			cmd = exec.Command("cp", "-f", fromPath, toPath)
		}
		out, err := cmd.CombinedOutput()
		if err != nil {
			logger.Errorf("Error copying directory %s to %s: %v", fromPath, toPath, err)
		}
		return string(out), err
	}
}

func TimestampNow() *tspb.Timestamp {
	return ptypes.TimestampNow()
}

func UnixTimeNow() int64 {
	return Time2UnixTime(time.Now())
}

func Timestamp2UnixTime(t *tspb.Timestamp) int64 {
	return int64(t.GetSeconds()*1000 + int64(t.GetNanos())/1000000)
}

func Time2UnixTime(t time.Time) int64 {
	return t.UnixNano() / 1000000
}

func UnixTime2Time(n int64) time.Time {
	return time.Unix(n/1000, (n%1000)*1000000)
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

func Time2String(t time.Time) string {
	buffer, _ := t.MarshalText()
	return string(buffer)
}

func ReadJsonFile(filename string, dest interface{}) error {
	bytes, err := ioutil.ReadFile(filename)
	if err != nil {
		return err
	}
	return json.Unmarshal(bytes, dest)
}

func WriteJsonFile(filename string, source interface{}) error {
	bytes, err := json.MarshalIndent(source, "", "  ")
	if err != nil {
		return err
	}
	logger.Debugf("write to %s: [%s]", filename, string(bytes))
	return ioutil.WriteFile(filename, bytes, 0644)
}
