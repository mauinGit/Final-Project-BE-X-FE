package model

import (
	"gorm.io/gorm"
	"time"
)

type User struct {
	gorm.Model
	Name     string `json:"name"`
	Email    string `gorm:"uniqueIndex;size:191" json:"email"`
	Password string `json:"-"`
	Role     Role   `gorm:"type:ENUM('admin','student');default:'student'" json:"role"`
	RefreshTokens []RefreshToken `gorm:"foreignKey:UserID"`
}

type RefreshToken struct {
	gorm.Model
	UserID uint
	Token  string
	Expiry time.Time
}
