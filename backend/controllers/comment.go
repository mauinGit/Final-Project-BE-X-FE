package controllers

import (
	"finalBeFe/database"
	"finalBeFe/model"
	"strconv"

	"github.com/gofiber/fiber/v2"
	"gorm.io/gorm"
)

func CreateComment(c *fiber.Ctx) error {
	courseIDParam := c.Params("courseID")
	courseID, err := strconv.Atoi(courseIDParam)
	if err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{"error": "invalid course ID"})
	}

	var commentInput struct {
		Comment string `json:"comment"`
	}

	if err := c.BodyParser(&commentInput); err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{"error": "invalid input"})
	}

	user_id := c.Locals("user_id").(uint) // ambil dari JWT middleware

	comment := model.Comment{
		CourseID: uint(courseID),
		UserID:   user_id,
		Comment:  commentInput.Comment,
	}

	if err := database.DB.Create(&comment).Error; err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{"error": "failed to add comment"})
	}

	return c.Status(fiber.StatusCreated).JSON(comment)
}

func CreateCommentReply(c *fiber.Ctx) error {
	commentIDParam := c.Params("commentID")
	parentID, err := strconv.Atoi(commentIDParam)
	if err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{"error": "invalid comment ID"})
	}

	var replyInput struct {
		Comment string `json:"comment"`
	}

	if err := c.BodyParser(&replyInput); err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{"error": "invalid input"})
	}

	// Get parent comment
	var parentComment model.Comment
	if err := database.DB.First(&parentComment, parentID).Error; err != nil {
		return c.Status(fiber.StatusNotFound).JSON(fiber.Map{"error": "parent comment not found"})
	}

	user_id := c.Locals("user_id").(uint)

	reply := model.Comment{
		CourseID: parentComment.CourseID,
		UserID:   user_id,
		ParentID: &parentComment.ID,
		Comment:  replyInput.Comment,
	}

	if err := database.DB.Create(&reply).Error; err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{"error": "failed to add reply"})
	}

	return c.Status(fiber.StatusCreated).JSON(reply)
}

func GetCommentsByCourse(c *fiber.Ctx) error {
	courseIDParam := c.Params("courseID")
	courseID, err := strconv.Atoi(courseIDParam)
	if err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{"error": "invalid course ID"})
	}

	var comments []model.Comment
	if err := database.DB.
		Preload("User").
		Preload("Replies").
		Preload("Replies.User").
		Where("course_id = ? AND parent_id IS NULL", courseID).
		Order("created_at DESC").
		Find(&comments).Error; err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{"error": "failed to fetch comments"})
	}

	return c.JSON(comments)
}

func EditComment(c *fiber.Ctx) error {
	commentIDParam := c.Params("commentID")
	commentID, err := strconv.Atoi(commentIDParam)
	if err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{"error": "invalid comment ID"})
	}

	var commentInput struct {
		Comment string `json:"comment"`
	}

	if err := c.BodyParser(&commentInput); err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{"error": "invalid input"})
	}

	userID := c.Locals("user_id").(uint)

	var comment model.Comment
	if err := database.DB.First(&comment, commentID).Error; err != nil {
		return c.Status(fiber.StatusNotFound).JSON(fiber.Map{"error": "comment not found"})
	}

	// Check user ownership
	if comment.UserID != userID {
		return c.Status(fiber.StatusForbidden).JSON(fiber.Map{"error": "you can only edit your own comments"})
	}

	// Update comment text
	comment.Comment = commentInput.Comment
	if err := database.DB.Save(&comment).Error; err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{"error": "failed to update comment"})
	}

	return c.JSON(fiber.Map{"message": "comment updated successfully", "comment": comment})
}

func DeleteComment(c *fiber.Ctx) error {
	commentIDParam := c.Params("commentID")
	commentID, err := strconv.Atoi(commentIDParam)
	if err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{"error": "invalid comment ID"})
	}

	userID := c.Locals("user_id").(uint)
	userRole := c.Locals("role").(string) // If you pass role via JWT, for example

	var comment model.Comment
	if err := database.DB.First(&comment, commentID).Error; err != nil {
		return c.Status(fiber.StatusNotFound).JSON(fiber.Map{"error": "comment not found"})
	}

	// Check user ownership or admin access
	if comment.UserID != userID && userRole != "admin" {
		return c.Status(fiber.StatusForbidden).JSON(fiber.Map{"error": "you are not allowed to delete this comment"})
	}

	// Delete comment
	if err := database.DB.Delete(&comment).Error; err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{"error": "failed to delete comment"})
	}

	return c.JSON(fiber.Map{"message": "comment deleted successfully"})
}

func ToggleCommentLike(c *fiber.Ctx) error {
	commentIDParam := c.Params("commentID")
	commentID, err := strconv.Atoi(commentIDParam)
	if err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{"error": "invalid comment ID"})
	}

	user_id := c.Locals("user_id").(uint)

	var existingLike model.CommentLike
	err = database.DB.Where("comment_id = ? AND user_id = ?", commentID, user_id).First(&existingLike).Error

	if err == nil {
		database.DB.Delete(&existingLike)
		database.DB.Model(&model.Comment{}).Where("id = ?", commentID).Update("likes_count", gorm.Expr("likes_count - 1"))
		return c.JSON(fiber.Map{"message": "unliked"})
	}

	newLike := model.CommentLike{
		CommentID: uint(commentID),
		UserID:    user_id,
	}
	if err := database.DB.Create(&newLike).Error; err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{"error": "failed to like comment"})
	}

	database.DB.Model(&model.Comment{}).Where("id = ?", commentID).Update("likes_count", gorm.Expr("likes_count + 1"))
	return c.JSON(fiber.Map{"message": "liked"})
}
