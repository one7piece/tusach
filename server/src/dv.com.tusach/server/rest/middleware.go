package rest

import (
	"net/http"

	"dv.com.tusach/logger"
)

type middleware func(next http.HandlerFunc) http.HandlerFunc
type HandlerFuncEx func(http.ResponseWriter, *http.Request) bool

func chain(arr ...HandlerFuncEx) middleware {
	return func(final http.HandlerFunc) http.HandlerFunc {
		return func(w http.ResponseWriter, r *http.Request) {
			aborted := false
			for _, mw := range arr {
				if mw != nil {
					if !mw(w, r) {
						aborted = true
						break
					}
				}
			}
			if !aborted {
				final(w, r)
			}
		}
	}
}

func recoverWrap(w http.ResponseWriter, r *http.Request) bool {
	defer func() {
		if err := recover(); err != nil {
			logger.Errorf("Recover from panic: %s\n", err)
		}
	}()
	return true
}

func traceWrap(w http.ResponseWriter, r *http.Request) bool {
	logger.Infof("received request: %s, host:%s, URL:%s, body:%s", r.Method, r.Host, r.URL.Path, r.Body)
	return true
}

func enableCors(w http.ResponseWriter, r *http.Request) bool {
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE")
	w.Header().Set("Access-Control-Allow-Headers", "Accept, Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization")
	return true
}
