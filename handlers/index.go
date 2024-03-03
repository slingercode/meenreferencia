package handlers

import (
	"log"
	"math/rand"

	"github.com/labstack/echo/v4"
	"github.com/slingercode/meenreferencia.ednoesco.com/lib"
	"github.com/slingercode/meenreferencia.ednoesco.com/structs"
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
  redis := lib.RedisClient()
  values, err := redis.MGet(ctx.Request().Context(), noelKey, diegoKey).Result()
  if err != nil {
    log.Fatal(err)
  }

  if _, ok := values[0].(string); !ok {
    log.Fatal("error in conversion")
  }

  if _, ok := values[1].(string); !ok {
    log.Fatal("error in conversion")
  }

  noel := structs.User {
    Key: noelKey,
    Class: "",
    Value: values[0].(string),
  }

  diego := structs.User {
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
