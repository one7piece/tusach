package parser

import (
	"errors"
	"flag"
	//"fmt"
	"regexp"
	"strings"
)

var chapterPrefixes = [...]string{"Chương", "CHƯƠNG", "chương", "Quyển", "QUYỂN", "quyển"}

func ReadArgs(configFile *string, op *string, url *string, inputFile *string, outputFile *string) error {
	flag.StringVar(configFile, "configFile", "", "configFile")
	flag.StringVar(op, "op", "", "operation")
	flag.StringVar(url, "url", "", "url")
	flag.StringVar(inputFile, "inputFile", "", "input file path")
	flag.StringVar(outputFile, "outputFile", "", "output file path")
	flag.Parse()

	if *configFile == "" {
		return errors.New("Missing argument configFile")
	}
	if *op == "" {
		return errors.New("Missing argument op")
	}
	if *op == "v" {
		if *url == "" {
			return errors.New("Missing argument url")
		}
	} else if *op == "p" {
		if *inputFile == "" {
			return errors.New("Missing argument inputFile")
		}
		if *outputFile == "" {
			return errors.New("Missing argument outputFile")
		}
	} else {
		return errors.New("Invalid op value: " + *op + ". Expecting v or p")
	}

	return nil
}

func GetChapterTitle(html string) string {
	title := ""
	for _, prefix := range chapterPrefixes {
		restr := prefix + "\\s*\\d+"
		title = findChapterTitle(html, restr)
		if title != "" {
			break
		}
	}
	return title
}

func findChapterTitle(html string, restr string) string {
	title := ""
	r, _ := regexp.Compile(restr)
	arr := r.FindStringIndex(html)
	if len(arr) >= 2 {
		index0 := arr[0]
		//fmt.Println("index0=", index0)
		index1 := strings.Index(html[index0:], ":")
		if index1 != -1 && index1 < 20 {
			index1 += index0
			//fmt.Println("index1=", index1)
			index2 := strings.Index(html[index1:], "<")
			//fmt.Println("index2=", index2)
			if index2 != -1 && index2 < 150 {
				index2 += index1
				title = html[index0:index2]
			}
		}
	}
	//fmt.Println("Found chapter title: ", title)
	return title
}
