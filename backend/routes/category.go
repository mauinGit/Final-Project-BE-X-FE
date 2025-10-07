package routes

import (
	"finalBeFe/controllers"
	"github.com/gofiber/fiber/v2"
)

func routesCategory(api fiber.Router) {
	category := api.Group("/categories")
	category.Post("/", controllers.CreateCategory)
}
