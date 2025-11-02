package routes

import (
	"finalBeFe/controllers"
	"github.com/gofiber/fiber/v2"
)

func routesUserCourse(api fiber.Router) {
	userCourse := api.Group("/userscourses")

	userCourse.Post("/:courseID/start", controllers.StartCourse)
	userCourse.Patch("/:courseID/progress", controllers.UpdateProgress)
	userCourse.Get("/", controllers.GetMyCourses)
}
