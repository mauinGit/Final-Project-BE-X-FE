package model

type CourseResponse struct {
	Title       string `json:"title"`
	Description string `json:"description"`
	Cover       string `json:"cover"`
	VideoURL    string `json:"video_url"`
}

type CategoryResponse struct {
	Name    string           `json:"name"`
	Courses []CourseResponse `json:"courses"`
}
