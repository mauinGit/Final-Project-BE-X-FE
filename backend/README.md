# Backend - Platform Online Course

Pada bagian backend mengenai course online ini. Platform ini memungkinkan siswa untuk menonton course yang disediakan oleh GDG Universitas Sriwijaya yang tersedia

Pada Platform ini juga terbagi menjadi 2 Role yaitu:
1. Admin = mengelola course (menambah, mengubah, menghapus data course dan kategori course).
2. Student (Publik) = melihat course.

## Fitur Utama GDCourse
* Manajemen Pengguna & Autentikasi: Fitur registrasi dan login pengguna dengan peran admin atau siswa. Autentikasi menggunakan JSON Web Token (JWT) sehingga setiap permintaan ke endpoint terlindung membutuhkan token yang valid. Termasuk pula fitur logout, refresh token untuk memperbarui JWT, serta reset password menggunakan token yang dikirim melalui email.

* CRUD Kursus oleh Admin: Admin dapat membuat kursus baru, melihat daftar kursus, mengedit informasi kursus, dan menghapus kursus. Setiap kursus memiliki judul, deskripsi, konten (video), serta kategori. Admin juga dapat mengelola kategori kursus (menambah, mengubah, menghapus kategori) untuk mengorganisir kursus.

* Akses Kursus oleh Siswa: Siswa (user terdaftar dengan role student) dapat melihat daftar kursus yang tersedia, melihat detail kursus, dan menonton video pembelajaran. Aplikasi juga mencatat progres belajar siswa pada suatu kursus. Siswa dapat memberikan komentar pada kursus dan berinteraksi dengan komentar (reply dan like) sebagai bagian dari forum diskusi setiap kursus.

* Dokumentasi API: Tersedia dokumentasi API endpoint dalam bentuk koleksi Postman sehingga pengembang dapat dengan mudah menguji setiap endpoint. (Silakan lihat dokumentasi Postman untuk detail penggunaan API).

## Teknologi yang Digunakan
* **Bahasa:** Golang
* **Framework:** Go Fiber
* **Database:** MySQL
* **ORM:** GORM
* **Autentikasi:** JWT

## Cara Menjalankan
Start **Kunjungi Link Repositori**
```bash
https://github.com/mauinGit/Final-Project-BE-X-FE
```

### 1.  **Clone Repositori**
    ```bash
    git clone https://github.com/mauinGit/Final-Project-BE-X-FE.git
    cd FINAL-PROJECT-BE-X-FE/backend
    ```

### 2.  **Buat File `.env`**
    Copy File `env.example` menjadi File baru bernama `.env`

### 3.  **Buat Database**
    Buat database dengan menyesuaikan pada `.env`

### 4.  **Instalasi Go Module**
    ```bash
    go mod tidy
    ```

### 5.  **Menjalakan Server**
    ```bash
    go run main.go
    ```
    Server akan berjalan di `http://localhost:8080` atau menyesuaikan pada .env

## Autentikasi (Admin/Student)
* **`POST /api/users/register`**
    Untuk registrasi user baru (akan default menjadi student)
    * **form-data:** `JSON` (`name`, `email`, `password`,`confirm_password`)

* **`POST /api/users/login`**
    Untuk login user dan mendapatkan token autentikasi.
    * **Body:** `JSON` (`email`, `password`)

* **`POST /api/users/logout`**
    Untuk logout pengguna (mengakhiri sesi JWT).
    * **Body:** Kosong

* **`POST /api/users/refresh`**
    Untuk memperbarui token akses JWT (refresh token).
    * **Body:** Kosong

* **`POST /api/users/forgot`**
    Untuk memulai proses reset password.
    * **Body:** `JSON` (`email`)

* **`POST /api/users/reset`**
    Untuk menyetel ulang password menggunakan token reset.
    * **Body:** `JSON` (`new_password`, `confirm_password`)

## Course
* **`GET /api/courses/`**
    Untuk mengambil daftar semua kursus yang tersedia.
    * **Body:** Kosong

* **`GET /api/courses/:id`**
    Untuk mengambil detail kursus berdasarkan ID.
    * **Body:** Kosong

* **`POST /api/courses/`**
    Untuk menambahkan kursus baru (hanya admin).
    * **Body:** `JSON` (`title`, `description`, `overview`, `cover`, `video_url`, `category_id`, `posted_at`)

* **`PUT /api/courses/:id`**
    Untuk menambahkan kursus baru (hanya admin). (boleh hanya salah satu diisi)
    * **Body:** `JSON` (`title`, `description`, `overview`, `cover`, `video_url`, `category_id`, `posted_at`)

* **`DELETE /api/courses/:id`**
    Untuk menghapus kursus (hanya admin).
    * **Body:** `JSON` (`title`, `description`, `overview`, `cover`, `video_url`, `category_id`, `posted_at`)

## Category
* **`GET /api/categories/`**
    Untuk mengambil daftar semua kategori kursus.
    * **Body:** Kosong

* **`GET /api/categories/:id`**
    Untuk mengambil detail kategori kursus berdasarkan ID.
    * **Body:** Kosong

* **`POST /api/categories/`**
    * **Body:** `JSON` (`name`)

* **`PUT /api/categories/:id`**
    Untuk mengubah data kategori kursus (hanya admin).
    * **Body:** Kosong

* **`DELETE /api/categories/:id`**
    Untuk menghapus kategori kursus (hanya admin).
    * **Body:** Kosong

## Contact/Feedback
* **`POST /api/contact/message`**
    Untuk mengirim pesan kontak/feedback.
    * **Body:** `JSON` (`name`, `message`)

* **`GET /api/contact/`**
    Untuk mengambil daftar pesan yang masuk (feedback).
    * **Body:** Kosong