package routes

import (
	"github.com/gofiber/fiber/v2"
	"finalBeFe/controllers"
)

func routesUser(api fiber.Router) {
	user := api.Group("/users")
	user.Post("/register", controllers.RegisterUser)
	user.Post("/login", controllers.LoginUser)
}
