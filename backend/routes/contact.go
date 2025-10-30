package routes

import (
	"finalBeFe/controllers"

	"github.com/gofiber/fiber/v2"
)

func routesContact(api fiber.Router){
	contact := api.Group("/contact")
	contact.Post("/message", controllers.SendMessage)
}