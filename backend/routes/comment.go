package routes

import (
	"finalBeFe/controllers"
	"finalBeFe/middleware"

	"github.com/gofiber/fiber/v2"
)

func routesCommentar(api fiber.Router) {
	comment := api.Group("/comments")

	comment.Use(middleware.AuthRequired())

	comment.Post("/courses/:courseID", controllers.CreateComment)
	comment.Post("/:commentID/reply", controllers.CreateCommentReply)
	comment.Put("/:commentID", controllers.EditComment)
	comment.Delete("/:commentID", controllers.DeleteComment)
	comment.Post("/:commentID/like", controllers.ToggleCommentLike)
}
