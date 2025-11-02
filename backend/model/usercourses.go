// model/user_course.go
package model

import (
	"time"
	"gorm.io/gorm"
)

type UserCourse struct {
	gorm.Model
	UserID        uint      `json:"user_id" gorm:"not null;index:idx_user_course,unique"`
	CourseID      uint      `json:"course_id" gorm:"not null;index:idx_user_course,unique"`
	Progress      float64   `json:"progress" gorm:"default:0"`
	LastWatchedAt time.Time `json:"last_watched_at"`
}