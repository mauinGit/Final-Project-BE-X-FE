package utils

import (
	"fmt"
	"os"
	"path/filepath"
	"strings"
	"time"

	"github.com/gofiber/fiber/v2"
)

func SaveFile(c *fiber.Ctx, fieldName string, isCover bool) (string, error) {
    // cek apakah form-nya benar-benar dikirim
    form, err := c.MultipartForm()
    if err != nil {
        return "", fmt.Errorf("failed to parse multipart form: %v", err)
    }

    // print semua file yang dikirim
    fmt.Println("FILES RECEIVED:", form.File)

    file, err := c.FormFile(fieldName)
    if err != nil {
        return "", fmt.Errorf("error finding file with key '%s': %v", fieldName, err)
    }

    ext := strings.ToLower(filepath.Ext(file.Filename))
    allowedExt := map[string]bool{
        ".png":  true,
        ".jpg":  true,
        ".jpeg": true,
    }
    if !isCover {
        allowedExt[".pdf"] = true
        allowedExt[".mp4"] = true
        allowedExt[".mov"] = true
    }

    if !allowedExt[ext] {
        return "", fmt.Errorf("invalid file type: %s", ext)
    }

    newFilename := fmt.Sprintf("%d%s", time.Now().UnixNano(), ext)

    saveDir := "./assets/videos/"
    publicPath := "/assets/videos/"
    if isCover {
        saveDir = "./assets/covers/"
        publicPath = "/assets/covers/"
    }

    // pastikan folder ada
    if _, err := os.Stat(saveDir); os.IsNotExist(err) {
        os.MkdirAll(saveDir, os.ModePerm)
    }

    savePath := filepath.Join(saveDir, newFilename)
    if err := c.SaveFile(file, savePath); err != nil {
        return "", fmt.Errorf("failed to save file: %v", err)
    }

    baseURL := os.Getenv("BASE_URL")
    fullURL := fmt.Sprintf("%s%s%s", baseURL, publicPath, newFilename)

    return fullURL, nil
}
