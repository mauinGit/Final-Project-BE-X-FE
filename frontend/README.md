### Dokumentasi Website GDCourse - FrontEnd Development


## 🛠️ Tech Stack
Terdapat beberapa tech stack yang digunakan dalam sisi FrontEnd Development, yaitu:
- Library React (UI Library)
- Tailwind CSS (Utility first CSS framework)
- Framer Motion (Animation library)
- React Icons (Icon libraries)
- @mui/material (Material UI components)
- React Hot Toast (Toast notification)


## 📁 Project Structure
Dalam struktur proyek FrontEnd Development terdapat 4 folder yang masing-masing isi folder tersebut mempunyai fungsi atau kegunaan yang berbeda-beda.

src/
├── pages/
│   ├── publics/          # Public pages (Dapat diakses tanpa login/signup)
│   │   ├── Home.jsx
│   │   ├── Courses.jsx
│   │   ├── Contact.jsx
│   │   ├── Login.jsx
│   │   ├── SignUp.jsx
│   │   ├── ForgotPass.jsx
│   │   ├── ResetPass.jsx
│   │   └── SuccesResetPass.jsx
│   │
│   ├── admin/            # Admin dashboard pages
│   │   ├── Overview.jsx
│   │   ├── Courses.jsx
│   │   ├── Contact.jsx
│   │   ├── AddCourse.jsx
│   │   └── EditCourse.jsx
│   │
│   └── students/         # Student dashboard pages
│       ├── Dashboard.jsx
│       ├── Courses.jsx
│       ├── MyCourses.jsx       
│       └── CourseDetail.jsx
│
├── components/
│   ├── admin/           # Admin-specific components
│   │   ├── SidebarAdmin.jsx
│   │   ├── TopbarAdmin.jsx
│   │   ├── TableCourse.jsx
│   │   ├── TableContact.jsx
│   │   ├── AdminInfo.jsx
│   │   └── DropDownLong.jsx
│   │
│   ├── students/        # Student-specific components
│   │   ├── SideBarStudent.jsx
│   │   ├── TopBar.jsx
│   │   ├── DropdownCourse.jsx
│   │   └── StudentInfo.jsx
│   │
│   ├── courses/         # Course-related components
│   │   ├── CourseCard.jsx
│   │   ├── CourseList.jsx
│   │   ├── CourseFilter.jsx
│   │   ├── RecomendedCourse.jsx
│   │   └── CourseComment.jsx
│   │
│   ├── ProtectedRoute.jsx   # Common components
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── SearchBar.jsx
│   ├── Testimonials.jsx
│   └── Faq.jsx
│
├── hooks/               # Custom React hooks
│   ├── useAuth.js
│   ├── useCategory.js
│   ├── useContact.js
│   ├── useCourse.js
│   └── useUserCourse.js
│
├── service/             # API service layer
│   ├── auth.js
│   ├── category.js
│   ├── contact.js
│   ├── course.js
│   └── userCourse.js
│
├── App.jsx              
└── main.jsx    


## 🔄 Application Flow
Terdapat 2 role dalam sistem GDCourse, yaitu Admin dan Student. Masing-masing role memiliki fitur dan alur atau akses yang berbeda.

- 👩‍🎓 Student
1. Mendaftar akun baru (default role: student). 
2. Login ke sistem menggunakan email & password.  
3. Melihat daftar course berdasarkan kategori.  
4. Mengikuti course dan mengakses materi di dalamnya.  
5. Memberikan review atau komentar setelah menyelesaikan course.

- 🛠️ Admin
1. Login dengan role admin.  
2. Mengelola seluruh data course dan contact.    
3. Membuat course baru dengan informasi lengkap (judul, deskripsi, kategori, cover, dan video course).
4. Mengedit atau menghapus course yang sudah dibuat.
5. Melihat data contact / feedback dari pengguna.


### 🧩 Components Architecture
1. Admin Components --> Mengelola dashboard, data course, kategori, dan contact.
2. Course Components --> Menampilkan list course, detail, card, dan recomended course.
3. Student Components --> Dashboard dan informasi akun student.
4. Common Components --> Navbar, Footer, ProtectedRoute, SearchBar, Testimonials, dan Faq.


### 🪝 Custom Hooks
1. useAuth --> Untuk autentikasi user, login, logout, forgot password, reset password dan verifikasi token.
2. useCategory --> Mengambil dan mengelola data kategori course.
3. useContact --> Mengelola form contact / feedback user.
4. useCourse --> CRUD data course dan integrasi dengan API backend.
5. useUserCourse --> Mengatur progres video course yang ditonton student. 


### 🔌 API Integration
- File .env menyimpan konfigurasi base URL untuk semua request dan diimport ke semua file service yang membutuhkan url API (const API_URL = import.meta.env.VITE_API_URL;).
- Struktur Service:
1. auth.js --> Login, register, logout, refresh token, reset password.
2. category.js --> CRUD categories.
3. course.js --> CRUD course.
4. userCourse.js --> Start Course, Update Progress, GetUserCourse.
5. contact.js --> Submit & fetch contact messages.


### 🚀 Setup & Installation
1. Clone repository (git clone <repository_url>) dan cd frontend
2. Install depedencies (npm install)
3. Buat file .env (VITE_API_URL=YOUR_BASE_URL)
4. Run development server (npm run dev)
5. Buka browser dan ketikkan http://localhost:5173
