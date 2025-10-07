package routes

import (
	"github.com/gofiber/fiber/v2"
	"finalBeFe/controllers"
)

func routesCourse(api fiber.Router) {
	course := api.Group("/courses")
	course.Post("/", controllers.CreateCourse)
}
