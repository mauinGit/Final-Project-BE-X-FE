package model

import "gorm.io/gorm"

type Comment struct {
	gorm.Model
	CourseID   uint   `json:"course_id" gorm:"not null"`
	UserID     uint   `json:"user_id" gorm:"not null"`
	ParentID   *uint  `json:"parent_id"`
	Comment    string `json:"comment" gorm:"type:text;not null"`
	LikesCount int    `json:"likes_count" gorm:"default:0"`

	User    User          `json:"user" gorm:"foreignKey:UserID"`
	Replies []Comment     `json:"replies" gorm:"foreignKey:ParentID"`
	Likes   []CommentLike `json:"likes" gorm:"foreignKey:CommentID"`
}

type CommentLike struct {
	gorm.Model
	CommentID uint `json:"comment_id" gorm:"not null"`
	UserID    uint `json:"user_id" gorm:"not null"`
}