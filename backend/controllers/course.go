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
	if title == "" {
		return c.Status(400).JSON(fiber.Map{
			"error": "title must required",
		})
	}

	description := c.FormValue("description")
	if description == "" {
		return c.Status(400).JSON(fiber.Map{
			"error": "description must required",
		})
	}

	overview := c.FormValue("overview")
	if overview == "" {
		return c.Status(400).JSON(fiber.Map{
			"error": "overview must required",
		})
	}

	cover, err := utils.SaveFile(c, "cover", true)
	if err != nil {
		return c.Status(400).JSON(fiber.Map{
			"error": err.Error(),
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
	course.Overview = overview
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

func GetCourse(c *fiber.Ctx) error {
	var courses []model.Course

	limit := c.Query("limit")
	query := database.DB.Model(&model.Course{}).
		Preload("Category").
		Where("posted_at <= ?", time.Now()).
		Order("posted_at DESC")

	if limit != "" {
		if limitInt, err := strconv.Atoi(limit); err == nil {
			query = query.Limit(limitInt)
		}
	}

	if err := query.Find(&courses).Error; err != nil {
		return c.Status(500).JSON(fiber.Map{
			"error": "gagal mengambil course",
		})
	}

	var response []model.CourseListResponse
	for _, course := range courses {
		response = append(response, model.CourseListResponse{
			ID:          course.ID,
			Title:       course.Title,
			Description: course.Description,
			Cover:       course.Cover,
			PostedAt:    course.PostedAt,
			Category:    course.Category.Name,
		})
	}

	return c.Status(200).JSON(fiber.Map{
		"courses": response,
	})
}

func GetCourseByID(c *fiber.Ctx) error {
	id := c.Params("id")
	var courses model.Course

	if err := database.DB.Preload("Category").First(&courses, id).Error; err != nil {
		return c.Status(404).JSON(fiber.Map{
			"error": "course tidak ditemukan",
		})
	}

	return c.Status(200).JSON(fiber.Map{
		"course": courses,
	})
}

func UpdateCourse(c *fiber.Ctx) error {
	id := c.Params("id")
	var course model.Course

	if err := database.DB.First(&course, "id = ?", id).Error; err != nil {
		return c.Status(404).JSON(fiber.Map{
			"error": "course tidak ditemukan",
		})
	}

	title := c.FormValue("title")
	description := c.FormValue("description")
	overview := c.FormValue("overview")
	categoryID := c.FormValue("category_id")

	if title != "" {
		course.Title = title
	}

	if description != "" {
		course.Description = description
	}

	if overview != "" {
		course.Overview = overview
	}

	if categoryID != "" {
		if idInt, err := strconv.Atoi(categoryID); err == nil {
			course.CategoryID = uint(idInt)
		}
	}

	if coverFile, err := c.FormFile("cover"); err == nil && coverFile != nil {
		newCover, err := utils.SaveFile(c, "cover", true)
		if err == nil {
			course.Cover = newCover
		}
	}

	if videoFile, err := c.FormFile("video_url"); err == nil && videoFile != nil {
		newVideo, err := utils.SaveFile(c, "video_url", false)
		if err == nil {
			course.VideoURL = newVideo
		}
	}

	if err := database.DB.Save(&course).Error; err != nil {
		return c.Status(500).JSON(fiber.Map{
			"error": "gagal memperbarui course",
		})
	}

	return c.Status(200).JSON(fiber.Map{
		"message": "course berhasil diperbarui",
		"course":  course,
	})
}

func DeleteCourse(c *fiber.Ctx) error {
	id := c.Params("id")
	var course model.Course

	if err := database.DB.First(&course, "id = ?", id).Error; err != nil {
		return c.Status(404).JSON(fiber.Map{
			"error": "course tidak ditemukan",
		})
	}

	if err := database.DB.Delete(&course).Error; err != nil {
		return c.Status(500).JSON(fiber.Map{
			"error": "gagal menghapus course",
		})
	}

	return c.Status(200).JSON(fiber.Map{
		"message": "course berhasil dihapus",
	})
}
