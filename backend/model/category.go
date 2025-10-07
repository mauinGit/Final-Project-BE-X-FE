package model

import "gorm.io/gorm"

type Category struct {
	gorm.Model
	Name    string   `json:"name" gorm:"uniqueIndex;not null"`
	Courses []Course `json:"courses"`
}
