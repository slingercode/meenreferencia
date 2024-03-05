package handlers

import (
	"net/http"

	"github.com/labstack/echo/v4"
)

func HandleRedirect(ctx echo.Context) error {
  return ctx.Redirect(http.StatusMovedPermanently, "/")
}
