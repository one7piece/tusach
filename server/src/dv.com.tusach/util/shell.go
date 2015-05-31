package util

import (
	"bytes"
	"errors"
	"log"
	"os"
	"os/exec"
	"regexp"
	"strconv"
	"strings"
	"syscall"
)

func killProcess(cmdStr string) {
	lines, err := execCmd2(exec.Command("ps"), cmdStr)
	if err != nil {
		log.Printf("Error executing ps command: %v\n", err)
		return
	}
	pid := -1
	for _, line := range lines {
		if strings.HasSuffix(line, cmdStr) {
			fields := strings.Fields(line)
			pid, _ = strconv.Atoi(strings.TrimSpace(fields[0]))
			break
		}
	}
	if pid != -1 {
		log.Printf("Found pid %d for command: %s\n", pid, cmdStr)
		process, err := os.FindProcess(pid)
		if err != nil {
			log.Printf("Could not find process with pid %d\n", pid)
			return
		}
		log.Printf("Killing process %d\n", pid)
		process.Kill()
	} else {
		log.Printf("No pid found for command: %s\n", cmdStr)
	}
}

func isProcessAlive(pid int) bool {
	process, err := os.FindProcess(pid)
	if err != nil {
		return false
	}

	err = process.Signal(syscall.Signal(0))
	log.Printf("process.Signal on pid %d returned: [%v]\n", pid, err)
	if err == nil || err.Error() == "operation not permitted" {
		return true
	}
	return false
}

func execShellCmd(cmd string) (string, error) {
	out, err := exec.Command("sh", "-c", cmd).Output()
	if err != nil {
		return "", err
	}
	return string(out), nil
}

func execCmd1(cmd *exec.Cmd) (string, error) {
	var out bytes.Buffer
	cmd.Stdout = &out

	err := cmd.Run()
	if err != nil {
		return "", err
	}

	return out.String(), nil
}

func execCmd2(cmd *exec.Cmd, rexp string) ([]string, error) {
	if rexp == "" {
		return []string{}, errors.New("Missing regular expression parameter")
	}

	str, err := execCmd1(cmd)
	if err != nil {
		return []string{}, err
	}

	result := findLines(strings.Split(str, "\n"), rexp)
	if len(result) == 0 {
		return result, errors.New("No matching output found!")
	}
	return result, nil
}

func findLines(lines []string, rexp string) []string {
	result := []string{}
	re := regexp.MustCompile(rexp)
	for _, line := range lines {
		if re.FindString(line) != "" {
			result = append(result, line)
		}
	}
	return result
}
