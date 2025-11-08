package routes

import (
	"finalBeFe/controllers"
	"finalBeFe/middleware"

	"github.com/gofiber/fiber/v2"
)

func routesCourse(api fiber.Router) {
	course := api.Group("/courses")

	course.Get("/", controllers.GetCourse)
	course.Get("/:id", controllers.GetCourseByID)
	course.Get("/:id/comments", controllers.GetCommentsByCourse)

	course.Use(middleware.AdminOnly())
	course.Post("/", controllers.CreateCourse)
	course.Put("/:id", controllers.UpdateCourse)
	course.Delete("/:id", controllers.DeleteCourse)
}
