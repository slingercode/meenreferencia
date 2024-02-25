package main

import (
	"errors"
	"fmt"
	"html/template"
	"net/http"
	"os"
)

func main() {
  http.HandleFunc("/", func(writer http.ResponseWriter, request *http.Request) {
    templ, error := template.New("Test").Parse(`{{define "T"}}Hello {{.}}!{{end}}`)
    if error != nil {
      http.Error(writer, error.Error(), http.StatusInternalServerError)
    }

    error = templ.ExecuteTemplate(writer, "T", "<h1>ASDF</h1>")
    if error != nil {
      http.Error(writer, error.Error(), http.StatusInternalServerError)
    }
  })

  fmt.Println("Server listening on http://localhost:3000")

  error := http.ListenAndServe(":3000", nil)
  if errors.Is(error, http.ErrServerClosed) {
    fmt.Println("Server closed")
  } else if error != nil {
    fmt.Printf("Error detected: %s", error)
    os.Exit(1)
  }
}
