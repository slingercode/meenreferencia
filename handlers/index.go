package handlers

import (
	"math/rand"
	"net/http"

	"github.com/labstack/echo/v4"
	"github.com/slingercode/meenreferencia.ednoesco.com/cmd"
	"github.com/slingercode/meenreferencia.ednoesco.com/templates/pages"
)

const (
  darkClass  = "bg-black text-white"
  lightClass = "bg-white text-black"
  noelKey = "Noel"
  diegoKey = "Diego"
  RANDOM_NUMBERS = 10
  RANDOM_NUMBER_VALIDATION = 5
)

func HandleIndex(ctx echo.Context) error {
  redis := cmd.RedisClient()
  values, err := redis.MGet(ctx.Request().Context(), noelKey, diegoKey).Result()
  if err != nil {
    return ctx.String(http.StatusInternalServerError, "Error obtaining redis data")
  }

  if _, ok := values[0].(string); !ok {
    return ctx.String(http.StatusInternalServerError, "Error converting redis data")
  }

  if _, ok := values[1].(string); !ok {
    return ctx.String(http.StatusInternalServerError, "Error converting redis data")
  }

  noel := cmd.User {
    Key: noelKey,
    Class: "",
    Value: values[0].(string),
  }

  diego := cmd.User {
    Key: diegoKey,
    Class: "",
    Value: values[1].(string),
  }

  random := rand.Intn(RANDOM_NUMBERS) + 1

  if random <= RANDOM_NUMBER_VALIDATION {
    noel.Class = darkClass
    diego.Class = lightClass
  } else {
    noel.Class = lightClass
    diego.Class = darkClass
  }

  return pages.Index(noel, diego).Render(ctx.Request().Context(), ctx.Response())
}
