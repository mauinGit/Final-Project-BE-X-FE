package controllers

import (
	"strconv"
	"github.com/gofiber/fiber/v2"
)

func getUserID(c *fiber.Ctx) (uint, error) {
	if v := c.Locals("userID"); v != nil {
		if id, ok := v.(uint); ok {
			return id, nil
		}
	}
	if qs := c.Query("user_id"); qs != "" {
		n, err := strconv.Atoi(qs)
		return uint(n), err
	}
	return 0, fiber.NewError(fiber.StatusUnauthorized, "user_id tidak ditemukan")
}
