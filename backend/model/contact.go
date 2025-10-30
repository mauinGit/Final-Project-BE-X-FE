package model

import "gorm.io/gorm"

type Contact struct {
    gorm.Model
    Name    string `json:"name"`
    Message string `json:"message"`
}