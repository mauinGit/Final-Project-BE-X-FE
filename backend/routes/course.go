package routes

import (
	"github.com/gofiber/fiber/v2"
	"finalBeFe/controllers"
)

func routesCourse(api fiber.Router) {
	course := api.Group("/courses")
	course.Post("/", controllers.CreateCourse)
	course.Get("/", controllers.GetCourse)
	course.Get("/:id", controllers.GetCourseByID)
	course.Put("/:id", controllers.UpdateCourse)
	course.Delete("/:id", controllers.DeleteCourse)
}
