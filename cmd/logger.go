package cmd

import (
	"fmt"
	"time"

	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
)

func Logger() echo.MiddlewareFunc {
  return middleware.RequestLoggerWithConfig(middleware.RequestLoggerConfig{
    LogStatus: true,
    LogURI:    true,
    LogProtocol: true,
    LogMethod: true,
    LogUserAgent: true,
    LogRemoteIP: true,
    LogValuesFunc: func(ctx echo.Context, value middleware.RequestLoggerValues) error {
      fmt.Printf("[%s] [%s] %s: (%d) %s\n", time.Now().Format(time.RFC3339), value.Protocol, value.Method, value.Status, value.URI)
      fmt.Printf("%s (%s)\n", value.UserAgent, value.RemoteIP)
      fmt.Println("---")
      return nil
    },
  })
}
