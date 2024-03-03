package handlers

import (
	"fmt"
	"net/http"

	"github.com/labstack/echo/v4"
	"github.com/slingercode/meenreferencia.ednoesco.com/lib"
)

func HandleVote(ctx echo.Context) error {
  redis := lib.RedisClient()

  key := ctx.FormValue("key")

  vote := redis.Incr(ctx.Request().Context(), key).Val()
  
  return ctx.String(http.StatusOK, fmt.Sprint(vote))
}
