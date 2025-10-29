package middleware

import (
	"github.com/gofiber/fiber/v2"
	"github.com/golang-jwt/jwt/v5"
)

func AdminOnly() fiber.Handler {
	return func(c *fiber.Ctx) error {
		// Ambil token dari Cookie dulu
		tokenString := c.Cookies("token")

		// Jika tidak ada, cek Authorization Header
		if tokenString == "" {
			authHeader := c.Get("Authorization")
			if len(authHeader) > 7 && authHeader[:7] == "Bearer " {
				tokenString = authHeader[7:]
			}
		}

		if tokenString == "" {
			return c.Status(fiber.StatusUnauthorized).JSON(fiber.Map{
				"error": "Unauthorized - missing token",
			})
		}

		token, err := jwt.Parse(tokenString, func(t *jwt.Token) (interface{}, error) {
			return []byte(GetJWTSecret()), nil
		})

		if err != nil || !token.Valid {
			return c.Status(fiber.StatusUnauthorized).JSON(fiber.Map{
				"error": "Unauthorized - invalid token",
			})
		}

		claims := token.Claims.(jwt.MapClaims)

		// ✅ Check role disini
		if claims["role"] != "admin" {
			return c.Status(fiber.StatusForbidden).JSON(fiber.Map{
				"error": "Forbidden - Admin Only",
			})
		}

		return c.Next()
	}
}

func GetJWTSecret() string {
	return "SECRET_KEY"
}
