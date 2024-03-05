package handlers

import (
	"fmt"
	"net/http"

	"github.com/labstack/echo/v4"
	"github.com/slingercode/meenreferencia.ednoesco.com/cmd"
)

func HandleCount(ctx echo.Context) error {
  redis := cmd.RedisClient()

  key := ctx.FormValue("key")

  count := redis.Incr(ctx.Request().Context(), key).Val()
  
  return ctx.String(http.StatusOK, fmt.Sprint(count))
}
