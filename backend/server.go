package main

import (
	"fmt"
	"net/http"
)

func main() {
	http.HandleFunc("GET /hello", getHello)
	http.HandleFunc("POST /hello", postHello)
	http.HandleFunc("/testParams/{tp1}/{tp2}", testParams)

	http.ListenAndServe(":8000", nil)
}

func getHello(w http.ResponseWriter, req *http.Request) {
	fmt.Println(w, "get hello")
	w.Write([]byte("get hello"))
}

func postHello(w http.ResponseWriter, req *http.Request) {
	fmt.Println(w, "post hello")
}

func testParams(w http.ResponseWriter, req *http.Request) {
	fmt.Println(w, req.PathValue("tp1"), req.PathValue("tp2"))
}