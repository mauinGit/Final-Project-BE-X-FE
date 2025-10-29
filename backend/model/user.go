package model

import (
	"gorm.io/gorm"
)

type User struct {
	gorm.Model
	Name            string `json:"name"`
	Email           string `json:"email"`
	Password        string `json:"password"`
	ConfirmPassword string `json:"confirm_password"`
	Role     		Role   `gorm:"type:ENUM('admin','student');default:'student'" json:"role"`
}
