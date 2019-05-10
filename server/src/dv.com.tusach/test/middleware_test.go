package test

import (
	"net/http"
	"testing"
)

type middleware func(next http.HandlerFunc) http.HandlerFunc

func f1(w http.ResponseWriter, r *http.Request) {
	println("f1 called")
}

func f2(w http.ResponseWriter, r *http.Request) {
	println("f2 called")
}

func f3(w http.ResponseWriter, r *http.Request) {
	println("f3 called")
}

func process(s string, f http.HandlerFunc) {
	println("process: " + s)
	f(nil, nil)
}

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

func Test(t *testing.T) {
	a := chain(f1, f2)
	process("/tusach", a(f3))
}

func mw1() middleware {
	return func(f http.HandlerFunc) http.HandlerFunc {
		return func(w http.ResponseWriter, r *http.Request) {
			// do the work
			println("calling mw1")
			// call the next in chain
			f(w, r)
		}
	}
}

func mw2() middleware {
	return func(f http.HandlerFunc) http.HandlerFunc {
		return func(w http.ResponseWriter, r *http.Request) {
			// do the work
			println("calling mw1")
			// call the next in chain
			f(w, r)
		}
	}
}

/*
func chainMiddleware(list ...middleware) middleware {
	var last := nil
	for mw := range list {
		last =
	}
	return func(final http.HandleFunc) http.HandlerFunc {
		return func(w http.Response, r *http.Request) {
			last := final
			for i:=len(mw)-1; i>=0; i-- {
				last = mw[i](last)
			}
			last(w, r)
		}
	}
}
*/
