package model

import "time"

type Course struct {
	ID           int      	`gorm:"primaryKey" json:"id"`
	Title        string    	`json:"title"`
	Description  string    	`json:"description"`
	Cover        string    	`json:"cover"`
	CategoryID   int      	`json:"category_id"`
	CreatedAt    time.Time 	`json:"created_at"`
	UpdatedAt    time.Time 	`json:"updated_at"`
}
