package controllers

import (
	"finalBeFe/database"
	"finalBeFe/model"

	"github.com/gofiber/fiber/v2"
)

func CreateCategory(c *fiber.Ctx) error {
	var category model.Category

	if err := c.BodyParser(&category); err != nil {
		return c.Status(400).JSON(fiber.Map{
			"error": "invalid request body",
		})
	}

	if category.Name == "" {
		return c.Status(400).JSON(fiber.Map{
			"error": "category name is required",
		})
	}

	if err := database.DB.Create(&category).Error; err != nil {
		return c.Status(500).JSON(fiber.Map{
			"error": err.Error(),
		})
	}

	return c.Status(201).JSON(category)
}

func GetAllCategory(c *fiber.Ctx) error {
	var categories []model.Category

	if err := database.DB.Preload("Courses").Find(&categories).Error; err != nil {
		return c.Status(500).JSON(fiber.Map{
			"error": "gagal mengambil data kategori",
		})
	}

	var response []model.CategoryResponse

	for _, cat := range categories {
		var courseList []model.CourseResponse
		for _, course := range cat.Courses {
			courseList = append(courseList, model.CourseResponse{
				Title:       course.Title,
				Description: course.Description,
				Cover:       course.Cover,
				VideoURL:    course.VideoURL,
			})
		}

		response = append(response, model.CategoryResponse{
			Name:    cat.Name,
			Courses: courseList,
		})
	}

	return c.Status(200).JSON(fiber.Map{
		"category": response,
	})
}

func GetCategoryByID(c *fiber.Ctx) error {
	id := c.Params("id")
	var category model.Category

	if err := database.DB.Preload("Courses").First(&category, "id = ?", id).Error; err != nil {
		return c.Status(404).JSON(fiber.Map{
			"error": "kategori tidak ditemukan",
		})
	}

	var courseList []model.CourseResponse
	for _, course := range category.Courses {
		courseList = append(courseList, model.CourseResponse{
			Title:       course.Title,
			Description: course.Description,
			Cover:       course.Cover,
			VideoURL:    course.VideoURL,
		})
	}

	response := model.CategoryResponse{
		Name:    category.Name,
		Courses: courseList,
	}

	return c.Status(200).JSON(response)
}

func UpdateCategory(c *fiber.Ctx) error {
	id := c.Params("id")
	var category model.Category

	if err := database.DB.First(&category, "id = ?", id).Error; err != nil {
		return c.Status(404).JSON(fiber.Map{
			"error": "kategori tidak ditemukan",
		})
	}

	var input struct {
		Name string `json:"name"`
	}

	if err := c.BodyParser(&input); err != nil {
		return c.Status(400).JSON(fiber.Map{
			"error": "format input tidak valid",
		})
	}

	category.Name = input.Name

	if err := database.DB.Save(&category).Error; err != nil {
		return c.Status(500).JSON(fiber.Map{
			"error": "gagal memperbarui kategori",
		})
	}

	return c.Status(200).JSON(fiber.Map{
		"message":  "kategori berhasil diperbarui",
		"category": category,
	})
}


func DeleteCategory(c *fiber.Ctx) error {
	id := c.Params("id")
	var category model.Category

	if err := database.DB.First(&category, "id = ?", id).Error; err != nil {
		return c.Status(404).JSON(fiber.Map{
			"error": "kategori tidak ditemukan",
		})
	}

	if err := database.DB.Delete(&category).Error; err != nil {
		return c.Status(500).JSON(fiber.Map{
			"error": "gagal menghapus kategori",
		})
	}

	return c.Status(200).JSON(fiber.Map{
		"message": "kategori berhasil dihapus",
	})
}
