package rest

import (
	"net/http"

	"dv.com.tusach/logger"
)

type middleware func(next http.HandlerFunc) http.HandlerFunc

func chain(arr ...http.HandlerFunc) middleware {
	return func(final http.HandlerFunc) http.HandlerFunc {
		return func(w http.ResponseWriter, r *http.Request) {
			for _, mw := range arr {
				mw(w, r)
			}
			final(w, r)
		}
	}
}

func recoverWrap(w http.ResponseWriter, r *http.Request) {
	defer func() {
		if err := recover(); err != nil {
			logger.Errorf("Recover from panic: %s\n", err)
		}
	}()
}

func traceWrap(w http.ResponseWriter, r *http.Request) {
	logger.Infof("received request: %s, host:%s, URL:%s, body:%s", r.Method, r.Host, r.URL.Path, r.Body)
}

func enableCors(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE")
	w.Header().Set("Access-Control-Allow-Headers", "Accept, Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization")
}
