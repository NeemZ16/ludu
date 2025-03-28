package main

import (
	"net/http"
	// "encoding/json"
)

/*
paths: /login, /register, /forgot-pwd, /reset-pwd
*/

func login(w http.ResponseWriter, req *http.Request) {
	setDefaultHeaders(w)
}

func register(w http.ResponseWriter, req *http.Request) {
	setDefaultHeaders(w)

}

func forgotPwd(w http.ResponseWriter, req *http.Request) {
	setDefaultHeaders(w)

}

func resetPwd(w http.ResponseWriter, req *http.Request) {
	setDefaultHeaders(w)

}