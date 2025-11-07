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
		BodyLimit: 200 * 1024 * 1024,
	})

	app.Use(cors.New(cors.Config{
		AllowOrigins:     "http://localhost:5173",
		AllowMethods:     "GET,POST,PUT,DELETE,PATCH,OPTIONS",
		AllowHeaders:     "Origin, Content-Type, Accept, Authorization",
		AllowCredentials: true,
	}))
	
	app.Static("/assets", "./assets")
	routes.MainRoutes(app)

	log.Fatal(app.Listen(":8080"))
}
