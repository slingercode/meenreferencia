package handlers

import (
	"context"
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
)

var _ctx = context.Background()

func HandleIndex(ctx echo.Context) error {
  redis := lib.RedisClient()

  noelValue, err := redis.Get(_ctx, "Noel").Int()
  if err != nil {
    log.Fatal(err)
  }

  diegoValue, err := redis.Get(_ctx, "Diego").Int()
  if err != nil {
    log.Fatal(err)
  }

  random := rand.Intn(10) + 1

  noel := structs.User {
    Key: "Noel",
    Class: "",
    Value: 0,
  }

  diego := structs.User {
    Key: "Diego",
    Class: "",
    Value: 0,
  }

  noel.Value = noelValue
  diego.Value = diegoValue

  if random <= 5 {
    noel.Class = darkClass
    diego.Class = lightClass
  } else {
    noel.Class = lightClass
    diego.Class = darkClass
  }

  return pages.Index(noel, diego).Render(ctx.Request().Context(), ctx.Response())
}
