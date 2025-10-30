package main

import (
	"finalBeFe/config"
	"finalBeFe/database"
	"finalBeFe/routes"
	"log"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
)

func main() {
	config.ENVInit()
	database.DBInit()
	database.DBMigrate()
	app := fiber.New(fiber.Config{
		BodyLimit: 50 * 1024 * 1024,
	})

	app.Use(cors.New(cors.Config{
		AllowOrigins:     "http://localhost:8080, http://localhost:5173",
		AllowCredentials: true,
	}))
	
	app.Static("/assets", "./assets")
	routes.MainRoutes(app)

	log.Fatal(app.Listen(":8080"))
}
