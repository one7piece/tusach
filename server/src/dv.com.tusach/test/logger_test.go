package test

import (
	"testing"

	"dv.com.tusach/logger"
)

func TestLogger(t *testing.T) {
	logger.Infof("Testing logger, hello: %d, %s\n", 1, "Dung")
}
