package controllers

import (
	"finalBeFe/database"
	"finalBeFe/middleware"
	"finalBeFe/model"
	"fmt"
	"time"

	"github.com/gofiber/fiber/v2"
	"github.com/golang-jwt/jwt/v5"
	"github.com/google/uuid"
	"golang.org/x/crypto/bcrypt"
	"gorm.io/gorm"
)

func RegisterUser(c *fiber.Ctx) error {
	var userInput model.User

	userInput.Name = c.FormValue("name")
	userInput.Email = c.FormValue("email")
	password := c.FormValue("password")
	confirmPassword := c.FormValue("confirm_password")

	if password != confirmPassword {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"error": "Password and Confirm Password do not match",
		})
	}

	hashPassword, err := bcrypt.GenerateFromPassword([]byte(password), bcrypt.DefaultCost)
	if err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"error": "Failed to hash password",
		})
	}

	userInput.Password = string(hashPassword)
	userInput.Role = model.Role("student")

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

	if err := c.BodyParser(&userInput); err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"message": "Invalid input",
		})
	}

	var user model.User
	if err := database.DB.Where("email = ?", userInput.Email).First(&user).Error; err != nil {
		if err == gorm.ErrRecordNotFound {
			return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
				"message": "wrong email or password",
			})
		}
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"message": err.Error(),
		})
	}

	if err := bcrypt.CompareHashAndPassword([]byte(user.Password), []byte(userInput.Password)); err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"message": "wrong email or password",
		})
	}

	accessExp := time.Now().Add(1 * time.Hour)
	accessClaims := jwt.MapClaims{
		"id":    user.ID,
		"email": user.Email,
		"name":  user.Name,
		"role":  user.Role,
		"exp":   accessExp.Unix(),
		"iss":   "FinalBeFe",
	}
	accessToken := jwt.NewWithClaims(jwt.SigningMethodHS256, accessClaims)
	accessTokenString, err := accessToken.SignedString([]byte(middleware.GetJWTSecret()))
	if err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"message": "Failed to generate access token",
		})
	}

	refreshExp := time.Now().Add(7 * 24 * time.Hour)
	refreshClaims := jwt.MapClaims{
		"email": user.Email,
		"exp":   refreshExp.Unix(),
	}
	refreshToken := jwt.NewWithClaims(jwt.SigningMethodHS256, refreshClaims)
	refreshTokenString, err := refreshToken.SignedString([]byte(middleware.GetJWTSecret()))
	if err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"message": "Failed to generate refresh token",
		})
	}

	refreshData := model.RefreshToken{
		UserID: user.ID,
		Token:  refreshTokenString,
		Expiry: refreshExp,
	}

	database.DB.Where("user_id = ?", user.ID).Delete(&model.RefreshToken{})
	if err := database.DB.Create(&refreshData).Error; err != nil {
		fmt.Println("Error save token:", err)
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"message": err.Error(),
		})
	}

	c.Cookie(&fiber.Cookie{
		Name:     "token",
		Value:    accessTokenString,
		Path:     "/",
		HTTPOnly: true,
		Expires:  accessExp,
	})
	
	c.Cookie(&fiber.Cookie{
		Name:     "refresh_token",
		Value:    refreshTokenString,
		Path:     "/",
		HTTPOnly: true,
		Expires:  refreshExp,
	})

	return c.Status(fiber.StatusOK).JSON(fiber.Map{
		"message": "login successfully",
		"user": fiber.Map{
			"id":    user.ID,
			"name":  user.Name,
			"email": user.Email,
			"role":  user.Role,
		},
	})
}

func LogoutUser(c *fiber.Ctx) error {
	refreshToken := c.Cookies("refresh_token")

	if refreshToken != "" {
		database.DB.Where("token = ?", refreshToken).Delete(&model.RefreshToken{})
	}

	c.Cookie(&fiber.Cookie{
		Name:     "token",
		Value:    "",
		Path:     "/",
		HTTPOnly: true,
		Expires:  time.Now().Add(-time.Hour),
	})

	c.Cookie(&fiber.Cookie{
		Name:     "refresh_token",
		Value:    "",
		Path:     "/",
		HTTPOnly: true,
		Expires:  time.Now().Add(-time.Hour),
	})

	return c.Status(fiber.StatusOK).JSON(fiber.Map{
		"message": "Logout successful",
	})
}

func RefreshAccessToken(c *fiber.Ctx) error {
	refreshToken := c.Cookies("refresh_token")
	if refreshToken == "" {
		return c.Status(fiber.StatusUnauthorized).JSON(fiber.Map{
			"error": "Missing refresh token",
		})
	}

	token, err := jwt.Parse(refreshToken, func(t *jwt.Token) (interface{}, error) {
		return []byte(middleware.GetJWTSecret()), nil
	})
	if err != nil || !token.Valid {
		return c.Status(fiber.StatusUnauthorized).JSON(fiber.Map{
			"error": "Invalid refresh token",
		})
	}

	claims := token.Claims.(jwt.MapClaims)
	email := claims["email"].(string)

	// Cek apakah token masih valid di database
	var stored model.RefreshToken
	if err := database.DB.Where("token = ?", refreshToken).First(&stored).Error; err != nil {
		return c.Status(fiber.StatusUnauthorized).JSON(fiber.Map{
			"error": "Refresh token revoked or not found",
		})
	}

	if time.Now().After(stored.Expiry) {
		return c.Status(fiber.StatusUnauthorized).JSON(fiber.Map{
			"error": "Refresh token expired",
		})
	}

	// Generate access token baru
	newAccessExp := time.Now().Add(1 * time.Hour)
	newClaims := jwt.MapClaims{
		"email": email,
		"exp":   newAccessExp.Unix(),
		"iss":   "FinalBeFe",
	}
	newAccessToken := jwt.NewWithClaims(jwt.SigningMethodHS256, newClaims)
	newAccessTokenString, _ := newAccessToken.SignedString([]byte(middleware.GetJWTSecret()))

	c.Cookie(&fiber.Cookie{
		Name:     "token",
		Value:    newAccessTokenString,
		Path:     "/",
		HTTPOnly: true,
		Expires:  newAccessExp,
	})

	return c.JSON(fiber.Map{
		"message": "Access token refreshed successfully",
	})
}

func ForgotPassword(c *fiber.Ctx) error {
	email := c.FormValue("email")

	var user model.User
	if err := database.DB.Where("email = ?", email).First(&user).Error; err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"error": "Email not found",
		})
	}

	token := uuid.New().String()
	expires := time.Now().Add(15 * time.Minute)

	reset := model.PasswordResetToken{
		Email:     email,
		Token:     token,
		ExpiresAt: expires,
	}

	database.DB.Create(&reset)

	return c.Status(fiber.StatusOK).JSON(fiber.Map{
		"message": "Reset token generated successfully",
		"token":   token,
	})
}

func ResetPassword(c *fiber.Ctx) error {
	token := c.FormValue("token")
	newPassword := c.FormValue("new_password")
	confirmPassword := c.FormValue("confirm_password")

	if newPassword != confirmPassword {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"error": "Password and confirm password do not match",
		})
	}

	var reset model.PasswordResetToken
	if err := database.DB.Where("token = ?", token).First(&reset).Error; err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"error": "Invalid or expired token",
		})
	}

	if time.Now().After(reset.ExpiresAt) {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"error": "Token has expired",
		})
	}

	hash, err := bcrypt.GenerateFromPassword([]byte(newPassword), bcrypt.DefaultCost)
	if err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"error": "Failed to hash password",
		})
	}

	if err := database.DB.Model(&model.User{}).
		Where("email = ?", reset.Email).
		Update("password", string(hash)).Error; err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"error": "Failed to update password",
		})
	}

	database.DB.Delete(&reset)

	return c.Status(fiber.StatusOK).JSON(fiber.Map{
		"message": "Password has been reset successfully",
	})
}
