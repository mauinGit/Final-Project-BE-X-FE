package controllers

import (
	"finalBeFe/database"
	"finalBeFe/model"

	"github.com/gofiber/fiber/v2"
)

func CreateCategory(c *fiber.Ctx) error {
	var category model.Category

	if err := c.BodyParser(&category); err != nil {
		return c.Status(400).JSON(fiber.Map{
			"error": "invalid request body",
		})
	}

	if category.Name == "" {
		return c.Status(400).JSON(fiber.Map{
			"error": "category name is required",
		})
	}

	if err := database.DB.Create(&category).Error; err != nil {
		return c.Status(500).JSON(fiber.Map{
			"error": err.Error(),
		})
	}

	return c.Status(201).JSON(category)
}
