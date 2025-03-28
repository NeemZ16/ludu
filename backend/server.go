package main

import (
	"fmt"
	"net/http"
)

func hello(w http.ResponseWriter, req *http.Request) {
	setDefaultHeaders(w)
	fmt.Fprintln(w, req.Body)
	fmt.Println("REQUEST BODY:", req.Body)
	w.Write([]byte("hello friend\n"))
	w.WriteHeader(http.StatusOK)
}

func main() {
	http.HandleFunc("/hello", hello)
	http.HandleFunc("/login", login)
	http.HandleFunc("/register", register)
	http.HandleFunc("/forgot-pwd", forgotPwd)
	http.HandleFunc("/reset-pwd", resetPwd)
	
	http.ListenAndServe(":8000", nil)
}