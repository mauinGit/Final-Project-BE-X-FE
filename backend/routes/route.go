package routes

import "github.com/gofiber/fiber/v2"

func MainRoutes(app *fiber.App) {
	api := app.Group("/api")
	routesCourse(api)
	routesCategory(api)
}
