package controllers

import (
	"finalBeFe/database"
	"finalBeFe/middleware"
	"finalBeFe/model"
	"time"

	"github.com/gofiber/fiber/v2"
	"github.com/golang-jwt/jwt/v5"
	"golang.org/x/crypto/bcrypt"
	"gorm.io/gorm"
)

func RegisterUser(c *fiber.Ctx) error {
	var userInput model.User

	// Ambil data dari form-data
	userInput.Name = c.FormValue("name")
	userInput.Email = c.FormValue("email")
	password := c.FormValue("password")
	confirmPassword := c.FormValue("confirm_password")

	// Validasi password
	if password != confirmPassword {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"error": "Password and Confirm Password do not match",
		})
	}

	// Hash password
	hashPassword, err := bcrypt.GenerateFromPassword([]byte(password), bcrypt.DefaultCost)
	if err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"error": "Failed to hash password",
		})
	}

	userInput.Password = string(hashPassword)
	userInput.Role = model.Role("student")

	// Simpan userInput langsung
	if err := database.DB.Create(&userInput).Error; err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"error": "Email already exists",
		})
	}

	return c.Status(fiber.StatusCreated).JSON(fiber.Map{
		"message": "User registered successfully",
		"user": fiber.Map{
			"id":    userInput.ID,
			"name":  userInput.Name,
			"email": userInput.Email,
			"role":  userInput.Role,
		},
	})
}

func LoginUser(c *fiber.Ctx) error {
	var userInput struct {
		Email    string `json:"email"`
		Password string `json:"password"`
	}

	// Parse JSON input
	if err := c.BodyParser(&userInput); err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"message": "Invalid input",
		})
	}

	// Cari user berdasarkan email
	var user model.User
	if err := database.DB.Where("email = ?", userInput.Email).First(&user).Error; err != nil {
		if err == gorm.ErrRecordNotFound {
			return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
				"message": "EMAIL atau PASSWORD salah",
			})
		}
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"message": err.Error(),
		})
	}

	// Cek password
	if err := bcrypt.CompareHashAndPassword([]byte(user.Password), []byte(userInput.Password)); err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"message": "EMAIL atau PASSWORD salah",
		})
	}

	// Buat expiry token
	expTime := time.Now().Add(1 * time.Hour)

	claims := jwt.MapClaims{
		"email": user.Email,
		"role":  user.Role,
		"exp":   expTime.Unix(),
		"iss":   "FinalBeFe",
	}

	// Generate token
	token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)
	tokenString, err := token.SignedString([]byte(middleware.GetJWTSecret()))
	if err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"message": "Token generation failed",
		})
	}

	// Set token ke cookie HttpOnly ✅
	c.Cookie(&fiber.Cookie{
		Name:     "token",
		Value:    tokenString,
		Path:     "/",
		HTTPOnly: true,
		Expires:  expTime,
	})

	return c.Status(fiber.StatusOK).JSON(fiber.Map{
		"message": "LOGIN BERHASIL",
		"token":   tokenString,
		"user": fiber.Map{
			"id":    user.ID,
			"name":  user.Name,
			"email": user.Email,
			"role":  user.Role,
		},
	})
}
