# Final-Project-BE-X-FE

Final Project Build Online Course

RESTful API untuk platform kursus online dengan fitur **User Management, Course, Category, dan Review**.

Macam - macam Fitur
### 1. User Management

Mengelola akun pengguna dengan 3 role utama:
* **Student**
* **Instructor**
* **Admin**

### 2. Course

Menyimpan dan mengelola informasi kursus online.
* Data yang disimpan: `judul`, `deskripsi`, `kategori`, `instruktur`, `cover`.
* **Instructor** → CRUD course
* **Student** → Lihat course

### 3. Category

Mengelompokkan course berdasarkan bidang tertentu (misal: Backend, Frontend, UI/UX, Machine Learning).
* Memudahkan student menemukan course sesuai minat.
* **Hanya Admin** yang bisa membuat & mengedit kategori.

### 4. Review

Memberikan feedback pada course berupa teks + rating (1–5).
* **Student** → hanya bisa review course yang diikuti
* Review bisa **dibaca semua orang**
* Student hanya bisa edit/hapus review miliknya sendiri
* Rating otomatis dihitung rata-rata untuk setiap course
