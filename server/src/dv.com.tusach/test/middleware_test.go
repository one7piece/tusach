package test

import (
	"net/http"
	"testing"
)

type MyHandlerFunc func(http.ResponseWriter, *http.Request) bool

// ServeHTTP calls f(w, r).
//func (f HandlerFunc) ServeHTTP(w ResponseWriter, r *Request) {
//	f(w, r)
//}

//type Handler interface {
//	ServeHTTP(ResponseWriter, *Request)
//}

type middleware func(next http.HandlerFunc) http.HandlerFunc

func f1(w http.ResponseWriter, r *http.Request) bool {
	println("f1 called")
	return false
}

func f2(w http.ResponseWriter, r *http.Request) bool {
	println("f2 called")
	return true
}

func f3(w http.ResponseWriter, r *http.Request) {
	println("f3 called")
}

func process(s string, f http.HandlerFunc) {
	println("process: " + s)
	f(nil, nil)
}

func chain(arr ...MyHandlerFunc) middleware {
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

func Test_middleware1(t *testing.T) {
	a := chain(f1, f2, nil)
	//var h http.Handler
	process("/tusach", a(f3))
	//process("", h.ServeHTTP)
}
