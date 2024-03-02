package main

import (
	"github.com/labstack/echo/v4"
	"github.com/slingercode/meenreferencia.ednoesco.com/handlers"
)

func main() {
  app := echo.New()

  app.Static("/public", "public")

  // Routes
  app.GET("/", handlers.HandleIndex)
  app.POST("/api/vote", handlers.HandleVote)

  app.Logger.Fatal(app.Start(":3000"))
}
