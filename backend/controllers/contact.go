package controllers

import (
	"finalBeFe/database"
	"finalBeFe/middleware"
	"finalBeFe/model"

	"github.com/gofiber/fiber/v2"
	"github.com/golang-jwt/jwt/v5"
)

func SendMessage(c *fiber.Ctx) error {
	var contact model.Contact
	tokenString := c.Cookies("token")

	if tokenString != "" {
		token, err := jwt.Parse(tokenString, func(t *jwt.Token) (interface{}, error) {
			return []byte(middleware.GetJWTSecret()), nil
		})

		if err == nil && token.Valid {
			claims := token.Claims.(jwt.MapClaims)

			contact.Name = claims["name"].(string)
			contact.Message = c.FormValue("message")

			if contact.Message == "" {
				return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
					"error": "Message cannot be empty",
				})
			}

			if err := database.DB.Create(&contact).Error; err != nil {
				return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
					"error": "Failed to save message",
				})
			}

			return c.Status(fiber.StatusOK).JSON(fiber.Map{
				"message": "Message sent successfully (auto name from user)",
			})
		}
	}

	contact.Name = c.FormValue("name")
	contact.Message = c.FormValue("message")

	if contact.Name == "" || contact.Message == "" {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"error": "Name and message are required",
		})
	}

	if err := database.DB.Create(&contact).Error; err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"error": "Failed to save message",
		})
	}

	return c.Status(fiber.StatusOK).JSON(fiber.Map{
		"message": "Message sent successfully (guest user)",
	})
}
