package routes

import (
	"finalBeFe/controllers"
	"finalBeFe/middleware"

	"github.com/gofiber/fiber/v2"
)

func routesCategory(api fiber.Router) {
	category := api.Group("/categories")

	category.Get("/", controllers.GetAllCategory)
	category.Get("/:id", controllers.GetCategoryByID)

	category.Use(middleware.AdminOnly())
	category.Post("/", controllers.CreateCategory)
	category.Put("/:id", controllers.UpdateCategory)
	category.Delete("/:id", controllers.DeleteCategory)
}
