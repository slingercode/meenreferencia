package main

import (
	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
	"github.com/slingercode/meenreferencia.ednoesco.com/cmd"
	"github.com/slingercode/meenreferencia.ednoesco.com/handlers"
)

func main() {
  app := echo.New()

  app.HideBanner = true

  app.Static("/public", "public")

  app.Use(cmd.Logger())
  app.Use(middleware.Gzip())
  app.Use(middleware.RateLimiter(middleware.NewRateLimiterMemoryStore(10)))
  app.Use(middleware.Secure())

  app.GET("/", handlers.HandleIndex)
  app.POST("/api/count", handlers.HandleCount)
  app.Any("*", handlers.HandleRedirect)

  app.Logger.Fatal(app.Start(":3000"))
}
