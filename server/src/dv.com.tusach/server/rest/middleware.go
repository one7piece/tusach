package rest

import (
	"context"
	"net/http"

	"dv.com.tusach/logger"
)

type middleware func(next http.HandlerFunc) http.HandlerFunc
type HandlerFuncEx func(http.ResponseWriter, *http.Request) (*context.Context, bool)

func chain(arr ...HandlerFuncEx) middleware {
	return func(final http.HandlerFunc) http.HandlerFunc {
		return func(w http.ResponseWriter, r *http.Request) {
			aborted := false
			ctxRequest := r
			for _, mw := range arr {
				if mw != nil {
					ctx, cont := mw(w, ctxRequest)
					if !cont {
						aborted = true
						break
					}
					if ctx != nil {
						ctxRequest = ctxRequest.WithContext(*ctx)
					}
				}
			}
			if !aborted {
				final(w, r)
			}
		}
	}
}

func recoverWrap(w http.ResponseWriter, r *http.Request) (*context.Context, bool) {
	defer func() {
		if err := recover(); err != nil {
			logger.Errorf("Recover from panic: %s\n", err)
		}
	}()
	return nil, true
}

func traceWrap(w http.ResponseWriter, r *http.Request) (*context.Context, bool) {
	logger.Infof("received request: %s, host:%s, URL:%s, body:%s", r.Method, r.Host, r.URL.Path, r.Body)
	return nil, true
}

func enableCors(w http.ResponseWriter, r *http.Request) (*context.Context, bool) {
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Credentials", "true")
	w.Header().Set("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE")
	w.Header().Set("Access-Control-Allow-Headers", "Accept, Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization")
	return nil, true
}
