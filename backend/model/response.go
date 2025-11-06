package model

type CourseResponse struct {
	ID 			uint   `json:"id"`
	Title       string `json:"title"`
	Description string `json:"description"`
	Cover       string `json:"cover"`
	VideoURL    string `json:"video_url"`
}

type CategoryResponse struct {
	ID 		uint             `json:"id"`
	Name    string           `json:"name"`
	Courses []CourseResponse `json:"courses"`
}
