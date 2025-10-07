package controllers

import (
	"finalBeFe/database"
	"finalBeFe/model"
	"finalBeFe/utils"
	"strconv"
	"time"

	"github.com/gofiber/fiber/v2"
)

func CreateCourse(c *fiber.Ctx) error {
	var course model.Course

	title := c.FormValue("title")
	description := c.FormValue("description")

	cover, err := utils.SaveFile(c, "cover", true)
	if err != nil {
		return c.Status(400).JSON(fiber.Map{
			"error": err.Error(), // biar tahu error detail-nya
		})
	}

	video, err := utils.SaveFile(c, "video_url", false)
	if err != nil {
		return c.Status(400).JSON(fiber.Map{
			"error": "failed to upload video file",
		})
	}
	categoryIDStr := c.FormValue("category_id")
	categoryID, err := strconv.ParseUint(categoryIDStr, 10, 32)
	if err != nil {
		return c.Status(400).JSON(fiber.Map{
			"error": "invalid category_id",
		})
	}

	if postedAtStr := c.FormValue("posted_at"); postedAtStr != "" {
		t, err := time.Parse(time.RFC3339, postedAtStr)
		if err != nil {
			return c.Status(400).JSON(fiber.Map{
				"error": "Invalid posted_at format. Use ISO 8601 (RFC3339)",
			})
		}
		course.PostedAt = t
	}

	course.Title = title
	course.Description = description
	course.Cover = cover
	course.VideoURL = video
	course.CategoryID = uint(categoryID)

	if err := database.DB.Create(&course).Error; err != nil {
		return c.Status(500).JSON(fiber.Map{
			"error": "Failed to create course",
		})
	}

	return c.Status(fiber.StatusOK).JSON(fiber.Map{
		"message": "Course created successfully",
	})
}
