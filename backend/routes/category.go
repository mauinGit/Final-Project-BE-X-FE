package routes

import (
	"finalBeFe/controllers"
	"github.com/gofiber/fiber/v2"
)

func routesCategory(api fiber.Router) {
	category := api.Group("/categories")
	category.Post("/", controllers.CreateCategory)
	category.Get("/", controllers.GetAllCategory)
	category.Put("/:id", controllers.UpdateCategory)
	category.Delete("/:id", controllers.DeleteCategory)
	category.Get("/:id", controllers.GetCategoryByID)
}
