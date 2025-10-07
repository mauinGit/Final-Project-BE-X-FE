package model

import (
	"time"

	"gorm.io/gorm"
)

type Course struct {
	gorm.Model
	Title       string 		`json:"title"        	gorm:"not null"`
	Description string 		`json:"description"`
	Cover       string 		`json:"cover"		  	gorm:"not null"`
	VideoURL    string 		`json:"video_url"		gorm:"not null"`
	CategoryID  uint   		`json:"category_id"`
	PostedAt    time.Time 	`json:"posted_at"    	gorm:"autoCreateTime"`
	Category    Category 	`json:"category"     	gorm:"constraint:OnUpdate:CASCADE,OnDelete:SET NULL;"`
}
