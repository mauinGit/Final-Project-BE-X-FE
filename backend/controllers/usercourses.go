package controllers

import (
	"errors"
	"strconv"
	"time"

	"finalBeFe/database"
	"finalBeFe/model"

	"github.com/gofiber/fiber/v2"
	"gorm.io/gorm"
)

func StartCourse(c *fiber.Ctx) error {
	userID, err := getUserID(c)
	if err != nil {
		return err
	}

	courseID, err := c.ParamsInt("courseID")
	if err != nil || courseID <= 0 {
		return fiber.NewError(400, "invalid course id")
	}

	var course model.Course
	if err := database.DB.First(&course, courseID).Error; err != nil {
		return fiber.NewError(404, "course tidak ditemukan")
	}

	var uc model.UserCourse
	res := database.DB.Where("user_id = ? AND course_id = ?", userID, courseID).
		First(&uc)

	if errors.Is(res.Error, gorm.ErrRecordNotFound) {
		uc = model.UserCourse{
			UserID:        userID,
			CourseID:      uint(courseID),
			Progress:      0,
			LastWatchedAt: time.Now(),
		}
		if err := database.DB.Create(&uc).Error; err != nil {
			return fiber.NewError(500, "gagal membuat progress")
		}
	}

	return c.Status(200).JSON(fiber.Map{
		"message":  "course started",
		"progress": uc.Progress,
	})
}

func UpdateProgress(c *fiber.Ctx) error {
	userID, err := getUserID(c)
	if err != nil {
		return err
	}

	courseID, err := c.ParamsInt("courseID")
	if err != nil || courseID <= 0 {
		return c.Status(400).JSON(fiber.Map{"error": "invalid course id"})
	}

	currentTime, _ := strconv.ParseFloat(c.FormValue("current_time"), 64)
	duration, _ := strconv.ParseFloat(c.FormValue("duration"), 64)

	if duration <= 0 {
		return c.Status(400).JSON(fiber.Map{"error": "invalid input"})
	}

	progress := (currentTime / duration) * 100
	if progress > 100 {
		progress = 100
	}

	database.DB.Model(&model.UserCourse{}).
		Where("user_id = ? AND course_id = ?", userID, courseID).
		Update("progress", progress)

	return c.Status(200).JSON(fiber.Map{
		"message":  "progress updated",
		"progress": progress,
	})
}

func GetMyCourses(c *fiber.Ctx) error {
	userID, err := getUserID(c)
	if err != nil {
		return err
	}

	type Row struct {
		CourseID uint      `json:"course_id"`
		Title    string    `json:"title"`
		Cover    string    `json:"cover"`
		Category string    `json:"category"`
		Progress float64   `json:"progress"` 
		PostedAt time.Time `json:"posted_at"`
	}

	var rows []Row
	err = database.DB.Table("user_courses").
		Select(`
			courses.id as course_id,
			courses.title,
			courses.cover,
			categories.name as category,
			user_courses.progress,
			courses.posted_at
		`).
		Joins("JOIN courses ON courses.id = user_courses.course_id").
		Joins("JOIN categories ON categories.id = courses.category_id").
		Where("user_courses.user_id = ?", userID).
		Order("user_courses.updated_at DESC").
		Scan(&rows).Error
	if err != nil {
		return fiber.NewError(500, "gagal mengambil daftar course user")
	}

	return c.Status(200).JSON(rows)
}
