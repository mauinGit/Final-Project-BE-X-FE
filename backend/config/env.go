package config

import (
	"fmt"

	"github.com/joho/godotenv"
)

func ENVInit() {
	if err := godotenv.Load(); err != nil {
		panic("Failed to load .env file")
	}

	fmt.Println("Success loaded .env file")
}
