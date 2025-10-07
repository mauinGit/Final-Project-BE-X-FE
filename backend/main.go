package main

import (
	"finalBeFe/config"
	"finalBeFe/database"
	"finalBeFe/routes"
	"log"

	"github.com/gofiber/fiber/v2"
)

func main() {
	config.ENVInit()
	database.DBInit()
	database.DBMigrate()
	app := fiber.New(fiber.Config{
    	BodyLimit: 50 * 1024 * 1024,
	})
	routes.MainRoutes(app)

	log.Fatal(app.Listen(":8080"))
}
