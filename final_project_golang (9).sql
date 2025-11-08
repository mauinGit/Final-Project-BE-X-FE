-- phpMyAdmin SQL Dump
-- version 5.2.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3307
-- Waktu pembuatan: 08 Nov 2025 pada 16.22
-- Versi server: 10.11.11-MariaDB-log
-- Versi PHP: 8.3.20

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `final_project_golang`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `categories`
--

CREATE TABLE `categories` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `created_at` datetime(3) DEFAULT NULL,
  `updated_at` datetime(3) DEFAULT NULL,
  `deleted_at` datetime(3) DEFAULT NULL,
  `name` longtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data untuk tabel `categories`
--

INSERT INTO `categories` (`id`, `created_at`, `updated_at`, `deleted_at`, `name`) VALUES
(1, '2025-10-07 07:03:09.300', '2025-10-07 07:03:09.300', NULL, 'UI/UX Design'),
(2, '2025-10-09 13:49:58.482', '2025-10-09 13:49:58.482', NULL, 'Back End Development'),
(3, '2025-11-06 17:44:07.847', '2025-11-06 17:44:07.847', NULL, 'Machine Learning'),
(4, '2025-11-08 18:44:22.407', '2025-11-08 18:44:22.407', NULL, 'Mobile Development'),
(5, '2025-11-08 18:44:46.016', '2025-11-08 18:44:46.016', NULL, 'Front End Development'),
(6, '2025-11-08 18:45:04.233', '2025-11-08 18:45:04.233', NULL, 'Cyber Security'),
(7, '2025-11-08 18:47:37.876', '2025-11-08 18:47:37.876', NULL, 'Game Development');

-- --------------------------------------------------------

--
-- Struktur dari tabel `comments`
--

CREATE TABLE `comments` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `created_at` datetime(3) DEFAULT NULL,
  `updated_at` datetime(3) DEFAULT NULL,
  `deleted_at` datetime(3) DEFAULT NULL,
  `course_id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `parent_id` bigint(20) UNSIGNED DEFAULT NULL,
  `comment` text NOT NULL,
  `likes_count` bigint(20) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data untuk tabel `comments`
--

INSERT INTO `comments` (`id`, `created_at`, `updated_at`, `deleted_at`, `course_id`, `user_id`, `parent_id`, `comment`, `likes_count`) VALUES
(1, '2025-11-08 20:50:45.329', '2025-11-08 20:50:45.329', NULL, 12, 8, NULL, 'Alamak bang bagus amat', 0);

-- --------------------------------------------------------

--
-- Struktur dari tabel `comment_likes`
--

CREATE TABLE `comment_likes` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `created_at` datetime(3) DEFAULT NULL,
  `updated_at` datetime(3) DEFAULT NULL,
  `deleted_at` datetime(3) DEFAULT NULL,
  `comment_id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `contacts`
--

CREATE TABLE `contacts` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `created_at` datetime(3) DEFAULT NULL,
  `updated_at` datetime(3) DEFAULT NULL,
  `deleted_at` datetime(3) DEFAULT NULL,
  `name` longtext DEFAULT NULL,
  `message` longtext DEFAULT NULL,
  `email` longtext DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data untuk tabel `contacts`
--

INSERT INTO `contacts` (`id`, `created_at`, `updated_at`, `deleted_at`, `name`, `message`, `email`) VALUES
(1, '2025-10-30 17:41:54.266', '2025-10-30 17:41:54.266', NULL, 'Amir', 'Halo, saya tertarik dengan kursusnya', NULL),
(2, '2025-10-30 17:44:54.300', '2025-10-30 17:44:54.300', NULL, 'Maulana Adiatma', 'Halo, disini aku ingin melakuakn pengaduan', 'maulana@gmail.com'),
(3, '2025-11-08 20:13:30.733', '2025-11-08 20:13:30.733', NULL, 'Nabila Ayu', 'Infokan Course Selanjutnya adminn request Front end 100 course', NULL),
(5, '2025-11-08 20:27:25.846', '2025-11-08 20:27:25.846', NULL, 'Admin GDCourse', 'Sudah bagus banget rawrr', 'AdminGDCourse@gmail.com'),
(6, '2025-11-08 20:33:47.807', '2025-11-08 20:33:47.807', NULL, 'Izuku ', 'Infokan Next Course', 'Izuku@gmail.com'),
(7, '2025-11-08 20:57:53.252', '2025-11-08 20:57:53.252', NULL, 'Maulana Adi atma', 'tes', NULL),
(8, '2025-11-08 21:01:05.326', '2025-11-08 21:01:05.326', NULL, 'Maulana Adiatma', 'bang bagus course nya otw regist', NULL),
(9, '2025-11-08 21:04:54.454', '2025-11-08 21:04:54.454', NULL, 'Ahmad Kasim', 'gelok bagus\r\n', 'ahmadkasim@gmail.com'),
(10, '2025-11-08 22:06:33.655', '2025-11-08 22:06:33.655', NULL, 'Maulana Adiatma', 'bagus bang kedepannya banyakin course nya lagi', NULL);

-- --------------------------------------------------------

--
-- Struktur dari tabel `courses`
--

CREATE TABLE `courses` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `created_at` datetime(3) DEFAULT NULL,
  `updated_at` datetime(3) DEFAULT NULL,
  `deleted_at` datetime(3) DEFAULT NULL,
  `title` longtext DEFAULT NULL,
  `description` longtext DEFAULT NULL,
  `cover` longtext DEFAULT NULL,
  `video_url` longtext DEFAULT NULL,
  `category_id` bigint(20) UNSIGNED DEFAULT NULL,
  `posted_at` datetime(3) DEFAULT NULL,
  `overview` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data untuk tabel `courses`
--

INSERT INTO `courses` (`id`, `created_at`, `updated_at`, `deleted_at`, `title`, `description`, `cover`, `video_url`, `category_id`, `posted_at`, `overview`) VALUES
(8, '2025-11-08 19:19:36.128', '2025-11-08 19:28:30.823', NULL, 'Apa Itu Machine Learning?', 'Machine Learning merupakan sebuah cabang penting dari kecerdasan buatan (Artificial Intelligence) yang memungkinkan komputer untuk belajar dari data tanpa diprogram secara eksplisit.\r\n\r\n1. Konsep dasar Machine Learning: bagaimana mesin \"belajar\" dari data\r\n\r\n2. Perbedaan antara supervised dan unsupervised learning\r\n\r\n3. Contoh nyata penerapan ML dalam kehidupan sehari-hari, seperti rekomendasi produk, deteksi spam, dan pengenalan wajah', 'http://localhost:8080/assets/covers/1762604376119424100.png', 'http://localhost:8080/assets/videos/1762604376121814900.mp4', 3, '2025-11-08 19:19:36.128', 'Machine Learning merupakan sebuah cabang penting dari kecerdasan buatan (Artificial Intelligence) yang memungkinkan komputer untuk belajar dari data tanpa diprogram secara eksplisit.\r\n\r\n1. Konsep dasar Machine Learning: bagaimana mesin \"belajar\" dari data\r\n\r\n2. Perbedaan antara supervised dan unsupervised learning\r\n\r\n3. Contoh nyata penerapan ML dalam kehidupan sehari-hari, seperti rekomendasi produk, deteksi spam, dan pengenalan wajah'),
(9, '2025-11-08 19:32:50.210', '2025-11-08 19:32:50.210', NULL, 'Basic UI/UX Design', 'Dasar-dasar User Interface (UI) dan User Experience (UX) dalam dunia desain digital dan memahami elemen utama dalam merancang tampilan dan pengalaman pengguna aplikasi atau website yang efektif dan menarik.\r\n\r\n1. Apa itu UI dan UX, serta bagaimana keduanya saling melengkapi\r\n\r\n2. Prinsip dasar desain antarmuka yang estetis, modern, dan responsif\r\n\r\n3. Alur desain UX: mulai dari riset pengguna, pembuatan wireframe, hingga prototyping', 'http://localhost:8080/assets/covers/1762605170194795000.png', 'http://localhost:8080/assets/videos/1762605170202964900.mp4', 1, '2025-11-08 19:32:50.210', 'Dasar-dasar User Interface (UI) dan User Experience (UX) dalam dunia desain digital dan memahami elemen utama dalam merancang tampilan dan pengalaman pengguna aplikasi atau website yang efektif dan menarik.\r\n\r\n1. Apa itu UI dan UX, serta bagaimana keduanya saling melengkapi\r\n\r\n2. Prinsip dasar desain antarmuka yang estetis, modern, dan responsif\r\n\r\n3. Alur desain UX: mulai dari riset pengguna, pembuatan wireframe, hingga prototyping'),
(10, '2025-11-08 19:36:27.827', '2025-11-08 19:36:27.827', NULL, 'A Beginners Guide to Game Developer', 'Untuk memulai perjalanan di dunia pengembangan game. Tanpa memerlukan pengalaman pemrograman atau desain sebelumnya, materi ini akan membimbing Anda memahami konsep dasar hingga proses pembuatan game sederhana yang interaktif dan menarik.\r\n\r\n1. Apa itu game development dan elemen-elemen penting dalam sebuah game\r\n\r\n2.Alur kerja pengembangan game: konsep, desain, implementasi, hingga testing\r\n\r\n3. Pengenalan tools populer seperti Unity dan Unreal Engine\r\n\r\n4. Dasar-dasar pemrograman game menggunakan bahasa yang umum digunakan (misalnya C# untuk Unity)', 'http://localhost:8080/assets/covers/1762605387778336300.png', 'http://localhost:8080/assets/videos/1762605387779727200.mp4', 7, '2025-11-08 19:36:27.827', 'Untuk memulai perjalanan di dunia pengembangan game. Tanpa memerlukan pengalaman pemrograman atau desain sebelumnya, materi ini akan membimbing Anda memahami konsep dasar hingga proses pembuatan game sederhana yang interaktif dan menarik.\r\n\r\n1. Apa itu game development dan elemen-elemen penting dalam sebuah game\r\n\r\n2.Alur kerja pengembangan game: konsep, desain, implementasi, hingga testing\r\n\r\n3. Pengenalan tools populer seperti Unity dan Unreal Engine\r\n\r\n4. Dasar-dasar pemrograman game menggunakan bahasa yang umum digunakan (misalnya C# untuk Unity)'),
(11, '2025-11-08 19:57:19.287', '2025-11-08 19:57:19.287', NULL, 'Roadmap Mobile Developmen', 'panduan menyeluruh bagi siapa saja yang ingin memulai karier sebagai Mobile Developer. Course ini menyajikan roadmap langkah demi langkah, mulai dari dasar pemrograman hingga membuat aplikasi mobile yang siap digunakan pada platform Android maupun iOS.', 'http://localhost:8080/assets/covers/1762606639254964200.png', 'http://localhost:8080/assets/videos/1762606639255624700.mp4', 4, '2025-11-08 19:57:19.287', 'panduan menyeluruh bagi siapa saja yang ingin memulai karier sebagai Mobile Developer. Course ini menyajikan roadmap langkah demi langkah, mulai dari dasar pemrograman hingga membuat aplikasi mobile yang siap digunakan pada platform Android maupun iOS.'),
(12, '2025-11-08 20:01:54.518', '2025-11-08 20:01:54.518', NULL, 'Pengenalan Golang', 'Pengenalan dasar mengenai Golang (Go), bahasa pemrograman modern yang dikembangkan oleh Google. Anda akan mempelajari sintaks dasar, cara kerja Go, serta bagaimana membangun program sederhana menggunakan bahasa yang dikenal efisien, cepat, dan cocok untuk backend serta sistem berskala besar.', 'http://localhost:8080/assets/covers/1762606914507518700.png', 'http://localhost:8080/assets/videos/1762606914508088500.mp4', 2, '2025-11-08 20:01:54.518', 'Pengenalan dasar mengenai Golang (Go), bahasa pemrograman modern yang dikembangkan oleh Google. Anda akan mempelajari sintaks dasar, cara kerja Go, serta bagaimana membangun program sederhana menggunakan bahasa yang dikenal efisien, cepat, dan cocok untuk backend serta sistem berskala besar.'),
(13, '2025-11-08 20:08:20.866', '2025-11-08 22:10:51.918', '2025-11-08 22:11:02.612', 'EasyWay React', 'Memahami React.js dengan cara yang mudah, terstruktur, dan menyenangkan. React adalah salah satu library JavaScript terpopuler untuk membangun antarmuka pengguna (UI) modern, cepat, dan dinamis, khususnya untuk aplikasi web berbasis komponen.', 'http://localhost:8080/assets/covers/1762607300810253900.png', 'http://localhost:8080/assets/videos/1762607300810809500.mp4', 5, '2025-11-08 20:08:20.866', 'Memahami React.js dengan cara yang mudah, terstruktur, dan menyenangkan. React adalah salah satu library JavaScript terpopuler untuk membangun antarmuka pengguna (UI) modern, cepat, dan dinamis, khususnya untuk aplikasi web berbasis komponen.'),
(14, '2025-11-08 22:13:01.572', '2025-11-08 22:13:01.572', NULL, 'apa itu cyber', 'tes', 'http://localhost:8080/assets/covers/1762614781562431800.png', 'http://localhost:8080/assets/videos/1762614781564052600.mp4', 6, '2025-11-08 22:13:01.572', 'tes');

-- --------------------------------------------------------

--
-- Struktur dari tabel `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `created_at` datetime(3) DEFAULT NULL,
  `updated_at` datetime(3) DEFAULT NULL,
  `deleted_at` datetime(3) DEFAULT NULL,
  `email` longtext DEFAULT NULL,
  `token` longtext DEFAULT NULL,
  `expires_at` datetime(3) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data untuk tabel `password_reset_tokens`
--

INSERT INTO `password_reset_tokens` (`id`, `created_at`, `updated_at`, `deleted_at`, `email`, `token`, `expires_at`) VALUES
(1, '2025-10-30 16:21:49.003', '2025-10-30 16:21:49.003', '2025-10-30 16:23:40.251', 'maulana@gmail.com', '77ef7605-0748-4d7a-b14d-1124b6f51c44', '2025-10-30 16:36:49.003');

-- --------------------------------------------------------

--
-- Struktur dari tabel `refresh_tokens`
--

CREATE TABLE `refresh_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `created_at` datetime(3) DEFAULT NULL,
  `updated_at` datetime(3) DEFAULT NULL,
  `deleted_at` datetime(3) DEFAULT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `token` longtext DEFAULT NULL,
  `expiry` datetime(3) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data untuk tabel `refresh_tokens`
--

INSERT INTO `refresh_tokens` (`id`, `created_at`, `updated_at`, `deleted_at`, `user_id`, `token`, `expiry`) VALUES
(1, '2025-10-30 09:42:45.409', '2025-10-30 09:42:45.409', NULL, 3, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRhaXZhQGdtYWlsLmNvbSIsImV4cCI6MTc2MjM5Njk2NX0.0Lhs66htabLYcVZdcul2vGe3diycmcaR0iRtqS9oeKc', '2025-11-06 09:42:45.408'),
(2, '2025-10-30 09:42:51.590', '2025-10-30 09:42:51.590', '2025-10-30 10:05:37.640', 3, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRhaXZhQGdtYWlsLmNvbSIsImV4cCI6MTc2MjM5Njk3MX0.RzmQ7ijmAjb4DxmIQSDoGWOCarwWmD_ApboqPgzKvWs', '2025-11-06 09:42:51.589'),
(3, '2025-10-30 16:24:00.825', '2025-10-30 16:24:00.825', '2025-10-30 16:24:05.939', 2, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1hdWxhbmFAZ21haWwuY29tIiwiZXhwIjoxNzYyNDIxMDQwfQ.xiPIvrrljUujZSyGOerilgMqOYwqrrjGwAfI1oPEOuo', '2025-11-06 16:24:00.825'),
(4, '2025-10-30 17:42:05.954', '2025-10-30 17:42:05.954', '2025-10-31 10:38:55.470', 2, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1hdWxhbmFAZ21haWwuY29tIiwiZXhwIjoxNzYyNDI1NzI1fQ.e0jlPDDZHzq6FwQXJq-Y5WuYAWZ_71FXvnKfA9ROkLE', '2025-11-06 17:42:05.953'),
(5, '2025-10-30 17:44:33.217', '2025-10-30 17:44:33.217', '2025-10-30 17:44:36.848', 2, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1hdWxhbmFAZ21haWwuY29tIiwiZXhwIjoxNzYyNDI1ODczfQ.uUa4IAHpyVbe0RQYnWSKPqhVJOptmzeGz2NoCq0LuXQ', '2025-11-06 17:44:33.217'),
(6, '2025-10-30 17:44:40.044', '2025-10-30 17:44:40.044', '2025-10-31 10:38:55.470', 2, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1hdWxhbmFAZ21haWwuY29tIiwiZXhwIjoxNzYyNDI1ODgwfQ.E9OwRE_3cj1OGvKJYLrxAg6Esr23xtCuDgoBEOdogA4', '2025-11-06 17:44:40.042'),
(7, '2025-10-31 10:38:55.558', '2025-10-31 10:38:55.558', '2025-11-02 10:33:52.879', 2, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1hdWxhbmFAZ21haWwuY29tIiwiZXhwIjoxNzYyNDg2NzM1fQ.x_xwBVQbU7YjmDN1Py6ciepXyYBWuh-N5S7GmLwLQEI', '2025-11-07 10:38:55.469'),
(8, '2025-10-31 13:34:26.567', '2025-10-31 13:34:26.567', NULL, 6, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImZpbGxhaEBnbWFpbC5jb20iLCJleHAiOjE3NjI0OTcyNjZ9.-xMjisPvL-u7QqNnB_s---nQIo-4UC9E5HgarY4lae4', '2025-11-07 13:34:26.559'),
(9, '2025-10-31 13:39:50.865', '2025-10-31 13:39:50.865', NULL, 7, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFuaW1lQGdtYWlsLmNvbSIsImV4cCI6MTc2MjQ5NzU5MH0.qxOhxBlm6jmHmktRoEFA8vzrnoFQAl8vflICGRZ3vBs', '2025-11-07 13:39:50.864'),
(10, '2025-11-02 10:33:52.894', '2025-11-02 10:33:52.894', '2025-11-02 10:38:35.283', 2, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1hdWxhbmFAZ21haWwuY29tIiwiZXhwIjoxNzYyNjU5MjMyfQ.K-NkyiMES3RnqTAqDOmz-oTd2cIiNra7Oa4iEbybpqw', '2025-11-09 10:33:52.878'),
(11, '2025-11-02 10:38:35.292', '2025-11-02 10:38:35.292', '2025-11-02 10:43:48.452', 2, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1hdWxhbmFAZ21haWwuY29tIiwiZXhwIjoxNzYyNjU5NTE1fQ.-1r6p3odnMABN0O6giX7_MCzrrnKu7uyuou651BkKkc', '2025-11-09 10:38:35.282'),
(12, '2025-11-02 10:43:48.462', '2025-11-02 10:43:48.462', '2025-11-02 10:52:10.482', 2, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1hdWxhbmFAZ21haWwuY29tIiwiZXhwIjoxNzYyNjU5ODI4fQ.1r0vafA7cgE6eKO5cC4Ugrsgp5m0VnDIv3kvNtQx0Hg', '2025-11-09 10:43:48.450'),
(13, '2025-11-02 10:52:10.489', '2025-11-02 10:52:10.489', '2025-11-02 11:03:45.297', 2, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1hdWxhbmFAZ21haWwuY29tIiwiZXhwIjoxNzYyNjYwMzMwfQ.Jc7MtVYDwObHeo6h2Gf_8NgRqzCGBE8eWCAwkECs2NA', '2025-11-09 10:52:10.481'),
(14, '2025-11-02 11:04:08.394', '2025-11-02 11:04:08.394', '2025-11-02 21:04:18.584', 2, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1hdWxhbmFAZ21haWwuY29tIiwiZXhwIjoxNzYyNjYxMDQ4fQ.vkG-SW64CuftULqqICRAvefeh53pem-nSth2QtiJfBo', '2025-11-09 11:04:08.392'),
(15, '2025-11-02 21:04:18.604', '2025-11-02 21:04:18.604', '2025-11-02 21:06:13.611', 2, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1hdWxhbmFAZ21haWwuY29tIiwiZXhwIjoxNzYyNjk3MDU4fQ.asgOzyTRbKsb9f3SdV73PlatKvHdPBlTnQNW7XdR4_U', '2025-11-09 21:04:18.582'),
(16, '2025-11-02 21:06:13.619', '2025-11-02 21:06:13.619', '2025-11-06 22:51:49.029', 2, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1hdWxhbmFAZ21haWwuY29tIiwiZXhwIjoxNzYyNjk3MTczfQ.81GBxATe-T2Vyb0x4NoilQIy4nw2b0Yi2M4_mbTXBtk', '2025-11-09 21:06:13.610'),
(17, '2025-11-02 21:16:30.270', '2025-11-02 21:16:30.270', '2025-11-06 17:51:29.167', 8, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Ikl6dWt1QGdtYWlsLmNvbSIsImV4cCI6MTc2MjY5Nzc5MH0.DrZGKYOd-Qr0Dp94h310SzkNxZD_HOrnGsZt7iAyym8', '2025-11-09 21:16:30.267'),
(18, '2025-11-06 17:36:23.482', '2025-11-06 17:36:23.482', '2025-11-06 17:54:47.562', 9, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IkFkbWluR0RDb3Vyc2VAZ21haWwuY29tIiwiZXhwIjoxNzYzMDMwMTgzfQ.8nIDEhyI_kfgmVzLd6mGXiUkLp6KP8R7NGEGThrdfrY', '2025-11-13 17:36:23.478'),
(19, '2025-11-06 17:51:29.188', '2025-11-06 17:51:29.188', '2025-11-06 19:31:12.440', 8, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Ikl6dWt1QGdtYWlsLmNvbSIsImV4cCI6MTc2MzAzMTA4OX0.zMS8CVfSPe16PLyUb6bTto1iNTIalabYlTwSjy-AWWQ', '2025-11-13 17:51:29.160'),
(20, '2025-11-06 17:54:47.574', '2025-11-06 17:54:47.574', '2025-11-06 19:15:31.592', 9, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IkFkbWluR0RDb3Vyc2VAZ21haWwuY29tIiwiZXhwIjoxNzYzMDMxMjg3fQ.IKJN9T_nhK3-aDfhkqoI8xyR4p34EanBErMlHTYB6R8', '2025-11-13 17:54:47.560'),
(21, '2025-11-06 19:15:31.601', '2025-11-06 19:15:31.601', '2025-11-07 10:32:20.941', 9, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IkFkbWluR0RDb3Vyc2VAZ21haWwuY29tIiwiZXhwIjoxNzYzMDM2MTMxfQ.JNWK5eEmcm4e82KYDygFO9NvgYWkqNDpdxEt-p78TQo', '2025-11-13 19:15:31.590'),
(22, '2025-11-06 19:31:12.447', '2025-11-06 19:31:12.447', '2025-11-07 07:23:52.836', 8, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Ikl6dWt1QGdtYWlsLmNvbSIsImV4cCI6MTc2MzAzNzA3Mn0.uqNdyxp5hlvMdyL5AnSnswYuxcM3SQMSMQ45a3lSWZM', '2025-11-13 19:31:12.439'),
(23, '2025-11-06 22:51:49.041', '2025-11-06 22:51:49.041', '2025-11-07 07:23:17.165', 2, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1hdWxhbmFAZ21haWwuY29tIiwiZXhwIjoxNzYzMDQ5MTA5fQ.8rT40swObVAGj10KY7DabRh2xR2cB64jgkOhvN3lafc', '2025-11-13 22:51:49.027'),
(24, '2025-11-07 07:23:17.175', '2025-11-07 07:23:17.175', '2025-11-07 07:23:33.475', 2, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1hdWxhbmFAZ21haWwuY29tIiwiZXhwIjoxNzYzMDc5Nzk3fQ.XoOJLOH3jLqCSZvg3qCerbSdRh0VQikW1tTWZW4I76o', '2025-11-14 07:23:17.164'),
(25, '2025-11-07 07:23:52.863', '2025-11-07 07:23:52.863', '2025-11-07 07:33:54.389', 8, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Ikl6dWt1QGdtYWlsLmNvbSIsImV4cCI6MTc2MzA3OTgzMn0.wlSfKS9H8-guoJ4QYrVtIPxt81DzFwrkf5khbR9nJCs', '2025-11-14 07:23:52.835'),
(26, '2025-11-07 07:33:54.394', '2025-11-07 07:33:54.394', '2025-11-07 07:49:58.781', 8, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Ikl6dWt1QGdtYWlsLmNvbSIsImV4cCI6MTc2MzA4MDQzNH0.GVUOxFgASsACjPB8Tkcg1sg1qISItmDGpZipyCawWeg', '2025-11-14 07:33:54.388'),
(27, '2025-11-07 07:49:58.916', '2025-11-07 07:49:58.916', '2025-11-07 07:52:26.956', 8, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Ikl6dWt1QGdtYWlsLmNvbSIsImV4cCI6MTc2MzA4MTM5OH0.0O5_74uWJgxx-oc86pHX7yZSaVb0kqztl3KJ-DGg_34', '2025-11-14 07:49:58.780'),
(28, '2025-11-07 07:52:26.964', '2025-11-07 07:52:26.964', '2025-11-07 08:04:19.834', 8, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Ikl6dWt1QGdtYWlsLmNvbSIsImV4cCI6MTc2MzA4MTU0Nn0.YxNRFbkoGUnJhS3uXkXTxy5qat2i-DYRY0DMzhx2vJY', '2025-11-14 07:52:26.954'),
(29, '2025-11-07 08:04:19.839', '2025-11-07 08:04:19.839', '2025-11-07 08:11:44.518', 8, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Ikl6dWt1QGdtYWlsLmNvbSIsImV4cCI6MTc2MzA4MjI1OX0.zUzl3A21XWHnAwz49iUQZNPgUsS5Tk9_3AolbnSeRr8', '2025-11-14 08:04:19.834'),
(30, '2025-11-07 08:11:58.313', '2025-11-07 08:11:58.313', '2025-11-07 08:19:31.769', 8, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Ikl6dWt1QGdtYWlsLmNvbSIsImV4cCI6MTc2MzA4MjcxOH0.pbHqVrGZ-gPvNqhhQeWhnLjyNwX2P2L8rxcczpBybiI', '2025-11-14 08:11:58.310'),
(31, '2025-11-07 08:19:31.797', '2025-11-07 08:19:31.797', '2025-11-07 08:19:38.756', 8, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Ikl6dWt1QGdtYWlsLmNvbSIsImV4cCI6MTc2MzA4MzE3MX0.rqHpPCGcyf5XWM59ibLbtfggIjqPEGf6gCfe_oaavvo', '2025-11-14 08:19:31.768'),
(32, '2025-11-07 08:19:44.385', '2025-11-07 08:19:44.385', '2025-11-07 08:20:30.286', 8, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Ikl6dWt1QGdtYWlsLmNvbSIsImV4cCI6MTc2MzA4MzE4NH0.gBWWbk4faQt3CgYMAoKCxAwFhBlx-81bO1lstAw0BFY', '2025-11-14 08:19:44.382'),
(33, '2025-11-07 08:20:42.136', '2025-11-07 08:20:42.136', '2025-11-07 08:24:59.245', 8, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Ikl6dWt1QGdtYWlsLmNvbSIsImV4cCI6MTc2MzA4MzI0Mn0.m7Wa0eHi9CCZXAPU1a3X1Iyzk-GzJa-30NUDWcqyzAU', '2025-11-14 08:20:42.134'),
(34, '2025-11-07 08:24:59.276', '2025-11-07 08:24:59.276', '2025-11-07 10:27:34.989', 8, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Ikl6dWt1QGdtYWlsLmNvbSIsImV4cCI6MTc2MzA4MzQ5OX0.qSJbkZSISlEHVsboJCMgbcBnsVYnK1RkReWKirB5xu4', '2025-11-14 08:24:59.243'),
(35, '2025-11-07 10:27:34.995', '2025-11-07 10:27:34.995', '2025-11-07 10:31:33.378', 8, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Ikl6dWt1QGdtYWlsLmNvbSIsImV4cCI6MTc2MzA5MDg1NH0.o-N9df9uydCjqElYNSqYHMn-cx3fvZF54jwkPaCHNIM', '2025-11-14 10:27:34.988'),
(36, '2025-11-07 10:31:33.389', '2025-11-07 10:31:33.389', '2025-11-07 18:11:01.215', 8, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Ikl6dWt1QGdtYWlsLmNvbSIsImV4cCI6MTc2MzA5MTA5M30.kfE_JcFZf-uUcZGkVXM89XWxsTBfSD9NDaV1GDEe9xw', '2025-11-14 10:31:33.376'),
(37, '2025-11-07 10:32:20.945', '2025-11-07 10:32:20.945', '2025-11-07 18:13:02.519', 9, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IkFkbWluR0RDb3Vyc2VAZ21haWwuY29tIiwiZXhwIjoxNzYzMDkxMTQwfQ.tHjTPdokkIg2ByBJF8dIGoUMB1pQvK2I5zEOhC1N6sA', '2025-11-14 10:32:20.940'),
(38, '2025-11-07 18:11:01.221', '2025-11-07 18:11:01.221', '2025-11-07 18:12:52.209', 8, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Ikl6dWt1QGdtYWlsLmNvbSIsImV4cCI6MTc2MzExODY2MX0.tSwgDJHMN5mDS4Whao7CjZlWwvhm-iMTwP9gBmOd1bc', '2025-11-14 18:11:01.214'),
(39, '2025-11-07 18:13:02.527', '2025-11-07 18:13:02.527', '2025-11-07 18:19:24.858', 9, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IkFkbWluR0RDb3Vyc2VAZ21haWwuY29tIiwiZXhwIjoxNzYzMTE4NzgyfQ.IZIgUD3nulGdZP_EI9qL8fTvgk50qZeCao4EslS1sE0', '2025-11-14 18:13:02.518'),
(40, '2025-11-07 18:15:31.205', '2025-11-07 18:15:31.205', '2025-11-07 18:19:41.558', 8, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Ikl6dWt1QGdtYWlsLmNvbSIsImV4cCI6MTc2MzExODkzMX0.2lwpEIY7Hj6Seqx3Vk7IGMwmWDawY0Cg0kCazZJrN7M', '2025-11-14 18:15:31.200'),
(41, '2025-11-07 18:19:24.870', '2025-11-07 18:19:24.870', '2025-11-07 22:15:14.988', 9, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IkFkbWluR0RDb3Vyc2VAZ21haWwuY29tIiwiZXhwIjoxNzYzMTE5MTY0fQ.rGoXfCgNVXff6WNAfCqffx3_rVW97owo4Lfjbc116PE', '2025-11-14 18:19:24.857'),
(42, '2025-11-07 18:19:41.571', '2025-11-07 18:19:41.571', '2025-11-07 19:17:02.164', 8, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Ikl6dWt1QGdtYWlsLmNvbSIsImV4cCI6MTc2MzExOTE4MX0.5GlD0jjJcwxFtGgb1SENiLy_sNsIT8kM6XiRr0pHVlc', '2025-11-14 18:19:41.556'),
(43, '2025-11-07 19:17:23.091', '2025-11-07 19:17:23.091', '2025-11-07 22:08:55.973', 8, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Ikl6dWt1QGdtYWlsLmNvbSIsImV4cCI6MTc2MzEyMjY0M30.9hbYziG-qcH2mfd9rzzaq0ImhdaRcNrXv3gP6uzM748', '2025-11-14 19:17:23.089'),
(44, '2025-11-07 22:08:55.979', '2025-11-07 22:08:55.979', '2025-11-07 22:15:05.508', 8, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Ikl6dWt1QGdtYWlsLmNvbSIsImV4cCI6MTc2MzEzMjkzNX0.jCuRBxytz1VPEFJdBDxsIRLSYs2IpF7JoTQuVB0tw5c', '2025-11-14 22:08:55.973'),
(45, '2025-11-07 22:15:14.995', '2025-11-07 22:15:14.995', '2025-11-08 18:43:31.546', 9, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IkFkbWluR0RDb3Vyc2VAZ21haWwuY29tIiwiZXhwIjoxNzYzMTMzMzE0fQ.wMnPKgGlX0opN4uAMMeZGyevMb1fxSodd5QKPU5Feag', '2025-11-14 22:15:14.987'),
(46, '2025-11-07 22:15:46.252', '2025-11-07 22:15:46.252', '2025-11-08 07:08:08.392', 8, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Ikl6dWt1QGdtYWlsLmNvbSIsImV4cCI6MTc2MzEzMzM0Nn0.MzqQii_Mu23g2LaImgIk9akg_FjFsQlG7YkviMQSd-Y', '2025-11-14 22:15:46.249'),
(47, '2025-11-08 07:08:08.422', '2025-11-08 07:08:08.422', '2025-11-08 07:09:50.264', 8, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Ikl6dWt1QGdtYWlsLmNvbSIsImV4cCI6MTc2MzE2NTI4OH0.dtF08Vz30oxq1FodIQjJKugT4KZpvJ-9MDydza6Cp88', '2025-11-15 07:08:08.391'),
(48, '2025-11-08 07:09:53.707', '2025-11-08 07:09:53.707', '2025-11-08 09:48:51.999', 8, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Ikl6dWt1QGdtYWlsLmNvbSIsImV4cCI6MTc2MzE2NTM5M30.n2VPXBqBuKmjlhaXFDBHne0AW_8v_ohjyCBBDOVYbL4', '2025-11-15 07:09:53.704'),
(49, '2025-11-08 09:48:52.067', '2025-11-08 09:48:52.067', '2025-11-08 09:49:17.646', 8, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Ikl6dWt1QGdtYWlsLmNvbSIsImV4cCI6MTc2MzE3NDkzMX0.ieQPnVB2lljbGXkqzyZhdg274vKTptKMUwaqa2E4Zoo', '2025-11-15 09:48:51.998'),
(50, '2025-11-08 09:54:10.727', '2025-11-08 09:54:10.727', '2025-11-08 19:15:05.388', 8, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Ikl6dWt1QGdtYWlsLmNvbSIsImV4cCI6MTc2MzE3NTI1MH0.tbBvb4mrvl0tWC-5SrHMZZHA1EdefExDpFqs4bWS4Mw', '2025-11-15 09:54:10.725'),
(51, '2025-11-08 18:43:31.562', '2025-11-08 18:43:31.562', '2025-11-08 18:44:16.559', 9, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IkFkbWluR0RDb3Vyc2VAZ21haWwuY29tIiwiZXhwIjoxNzYzMjA3MDExfQ.UbOGGxhz4pd8Htoln9dAj9VE7KIP845mpl7Ksg2395I', '2025-11-15 18:43:31.544'),
(52, '2025-11-08 18:44:16.568', '2025-11-08 18:44:16.568', '2025-11-08 19:06:05.097', 9, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IkFkbWluR0RDb3Vyc2VAZ21haWwuY29tIiwiZXhwIjoxNzYzMjA3MDU2fQ.hDG3v5ArXVHDrpjgTJffWzTkmi-fsS2uPdemSU3oPlU', '2025-11-15 18:44:16.558'),
(53, '2025-11-08 19:06:05.108', '2025-11-08 19:06:05.108', '2025-11-08 19:17:04.173', 9, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IkFkbWluR0RDb3Vyc2VAZ21haWwuY29tIiwiZXhwIjoxNzYzMjA4MzY1fQ.jzUeKOMXV37HBMYllgxWf2qzxz5lFedzCdtP99IThos', '2025-11-15 19:06:05.096'),
(54, '2025-11-08 19:15:05.397', '2025-11-08 19:15:05.397', '2025-11-08 19:15:39.077', 8, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Ikl6dWt1QGdtYWlsLmNvbSIsImV4cCI6MTc2MzIwODkwNX0.wU0zwugUhgVsd-ar6i_9EVoL-rp_KaoiBQ-XoiTAdsk', '2025-11-15 19:15:05.387'),
(55, '2025-11-08 19:15:55.161', '2025-11-08 19:15:55.161', '2025-11-08 19:16:55.268', 8, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Ikl6dWt1QGdtYWlsLmNvbSIsImV4cCI6MTc2MzIwODk1NX0.wsBuh2GQ828zO5p_ZVDoZmYVLfTVdouffxW7L5kk3p8', '2025-11-15 19:15:55.159'),
(56, '2025-11-08 19:17:04.182', '2025-11-08 19:17:04.182', '2025-11-08 19:28:07.919', 9, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IkFkbWluR0RDb3Vyc2VAZ21haWwuY29tIiwiZXhwIjoxNzYzMjA5MDI0fQ.4ijsMvKd5jiiH_JzG-ukR1v2v3QQ3N2T9Z1JYuxET9k', '2025-11-15 19:17:04.172'),
(57, '2025-11-08 19:22:21.019', '2025-11-08 19:22:21.019', '2025-11-08 19:25:20.061', 8, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Ikl6dWt1QGdtYWlsLmNvbSIsImV4cCI6MTc2MzIwOTM0MX0.nVrLWLnqs0uKHE495oUFFFTySHM3_eXKUfgJdAuijAw', '2025-11-15 19:22:21.015'),
(58, '2025-11-08 19:26:44.313', '2025-11-08 19:26:44.313', '2025-11-08 19:27:59.009', 8, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Ikl6dWt1QGdtYWlsLmNvbSIsImV4cCI6MTc2MzIwOTYwNH0.Kr77Q9ToXBmumiuTzQNimKz50kWAVyLKVr5eD0MpAlY', '2025-11-15 19:26:44.312'),
(59, '2025-11-08 19:28:07.926', '2025-11-08 19:28:07.926', '2025-11-08 21:05:34.560', 9, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IkFkbWluR0RDb3Vyc2VAZ21haWwuY29tIiwiZXhwIjoxNzYzMjA5Njg3fQ.EDdSvLmO93eiqHRV04EKnIUw6b1Tlvgmnzu9vlzk6xk', '2025-11-15 19:28:07.917'),
(60, '2025-11-08 20:27:52.602', '2025-11-08 20:27:52.602', '2025-11-08 20:31:12.546', 8, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Ikl6dWt1QGdtYWlsLmNvbSIsImV4cCI6MTc2MzIxMzI3Mn0.SciccZ0g9YVj0xhj1N2i0YxIrRm9eihKne9NoI6m29w', '2025-11-15 20:27:52.600'),
(61, '2025-11-08 20:31:19.062', '2025-11-08 20:31:19.062', '2025-11-08 20:34:14.832', 8, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Ikl6dWt1QGdtYWlsLmNvbSIsImV4cCI6MTc2MzIxMzQ3OX0.Ylxvo39FZxRnSf8fhb8FO_vogS0l80GhqByA9Dv0LnI', '2025-11-15 20:31:19.059'),
(62, '2025-11-08 20:43:35.194', '2025-11-08 20:43:35.194', '2025-11-08 20:48:12.028', 10, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFobWFka2FzaW1AZ21haWwuY29tIiwiZXhwIjoxNzYzMjE0MjE1fQ.TE64QOSt6fEFn60YBlu5HJPXjisO-IpIa5qLuGla17k', '2025-11-15 20:43:35.192'),
(63, '2025-11-08 20:50:26.553', '2025-11-08 20:50:26.553', '2025-11-08 20:57:15.857', 8, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Ikl6dWt1QGdtYWlsLmNvbSIsImV4cCI6MTc2MzIxNDYyNn0.-5VzuOGeVLWmPJpTQiPmcmlySEoUu_UV6etMfzfX1ns', '2025-11-15 20:50:26.550'),
(64, '2025-11-08 21:01:52.123', '2025-11-08 21:01:52.123', '2025-11-08 21:05:16.468', 10, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFobWFka2FzaW1AZ21haWwuY29tIiwiZXhwIjoxNzYzMjE1MzEyfQ.Irr4pc2jDjFvq_BxmTy6FGKiv1E6lin4GeJHS81pTeo', '2025-11-15 21:01:52.121'),
(65, '2025-11-08 21:05:34.569', '2025-11-08 21:05:34.569', '2025-11-08 22:09:15.510', 9, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IkFkbWluR0RDb3Vyc2VAZ21haWwuY29tIiwiZXhwIjoxNzYzMjE1NTM0fQ.FCWUW4Opuu4Cqmvj1qo7xjhGFLm2Zh9yGupmPwpFXH4', '2025-11-15 21:05:34.559'),
(66, '2025-11-08 21:47:07.033', '2025-11-08 21:47:07.033', '2025-11-08 21:47:10.082', 8, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Ikl6dWt1QGdtYWlsLmNvbSIsImV4cCI6MTc2MzIxODAyN30.uufnlNIlugeypuY-RYPmp62QbjRdD254R4iiAkRMUWw', '2025-11-15 21:47:07.030'),
(67, '2025-11-08 22:07:24.180', '2025-11-08 22:07:24.180', '2025-11-08 22:09:05.416', 11, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFobWFkc29icmlAZ21haWwuY29tIiwiZXhwIjoxNzYzMjE5MjQ0fQ.FMAiaklkTW3YKOlK-lOi7ko1QG44TCeMC6d4MopdgbY', '2025-11-15 22:07:24.177'),
(68, '2025-11-08 22:09:15.525', '2025-11-08 22:09:15.525', NULL, 9, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IkFkbWluR0RDb3Vyc2VAZ21haWwuY29tIiwiZXhwIjoxNzYzMjE5MzU1fQ.iwjpsWi-2nSohI6H_YZCrbeSen3tIkuEKAHThHNVSZo', '2025-11-15 22:09:15.510');

-- --------------------------------------------------------

--
-- Struktur dari tabel `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `created_at` datetime(3) DEFAULT NULL,
  `updated_at` datetime(3) DEFAULT NULL,
  `deleted_at` datetime(3) DEFAULT NULL,
  `name` longtext DEFAULT NULL,
  `email` varchar(191) DEFAULT NULL,
  `password` longtext DEFAULT NULL,
  `confirm_password` longtext DEFAULT NULL,
  `role` enum('admin','student') DEFAULT 'student'
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data untuk tabel `users`
--

INSERT INTO `users` (`id`, `created_at`, `updated_at`, `deleted_at`, `name`, `email`, `password`, `confirm_password`, `role`) VALUES
(1, '2025-10-29 21:58:44.350', '2025-10-29 21:58:44.350', NULL, '', '', '$2a$10$P3JF/Ry660FKayFhwd9.COoERp2Kps3uYcnOznizEvTknMzysimqe', '', 'student'),
(2, '2025-10-29 23:47:49.351', '2025-10-30 16:23:40.229', NULL, 'Maulana Adiatma', 'maulana@gmail.com', '$2a$10$5l28xgy/qb3pKpiZ2YvHJuN/u6lWEo4RPPmAdyeF/h8.hoeYtrVAm', '', 'admin'),
(3, '2025-10-30 09:42:15.284', '2025-10-30 09:42:15.284', NULL, 'Daiva Averde Radhilah', 'daiva@gmail.com', '$2a$10$vNDrVlfqz31ZBWQO6MJeTuUbmQM.xG3z.C7qFAo8s5TxQAOvoROPm', NULL, 'student'),
(5, '2025-10-31 13:30:52.128', '2025-10-31 13:30:52.128', NULL, 'Ikhsan Nur Saputra', 'ikhsan@gmail.com', '$2a$10$2bRfF0fjer7eouuM9SIW1eLPZwPFHygvKYlJa76GvR6rPEkHyRA.e', NULL, 'student'),
(6, '2025-10-31 13:33:32.429', '2025-10-31 13:33:32.429', NULL, 'Muhammad Fillah Attaqy', 'fillah@gmail.com', '$2a$10$Ktv4.eAWl.PzFybSRQTM0.9fKqpnEG0yavARMWQPytOy6iavwuwdq', NULL, 'student'),
(7, '2025-10-31 13:39:00.552', '2025-10-31 13:39:00.552', NULL, 'Anime ku bagus', 'anime@gmail.com', '$2a$10$vf6TUIVPYiEhDL0n4USEpeBF3nB0TOD9JngE5AWPSVsxnHFT8sitK', NULL, 'student'),
(8, '2025-11-02 21:16:18.846', '2025-11-02 21:16:18.846', NULL, 'Izuku ', 'Izuku@gmail.com', '$2a$10$HHYgv7IcP4Fv9RHLcQGHJulq4IR2poXKD3/vodJlnJkLzvL5Qv3uO', NULL, 'student'),
(9, '2025-11-04 20:14:38.230', '2025-11-04 20:14:38.230', NULL, 'Admin GDCourse', 'AdminGDCourse@gmail.com', '$2a$10$jR/m1h24dK6LKagY19PhB.U4ugBU74D46wh5pUM/nMxi0.gZpNctG', NULL, 'admin'),
(10, '2025-11-08 20:43:11.706', '2025-11-08 20:43:11.706', NULL, 'Ahmad Kasim', 'ahmadkasim@gmail.com', '$2a$10$Opxeh3voziDIEg5n2XQ2KeWxSdJro6uT7r9vjYdhjD7RLSNzuU5la', NULL, 'student'),
(11, '2025-11-08 22:07:08.482', '2025-11-08 22:07:08.482', NULL, 'Ahmad Sobri', 'ahmadsobri@gmail.com', '$2a$10$PP4KdMlZ5dscLsqpR19pg.tU46PLxwLE8SQ3CUe2mh7FTFZhz.lbO', NULL, 'student');

-- --------------------------------------------------------

--
-- Struktur dari tabel `user_courses`
--

CREATE TABLE `user_courses` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `created_at` datetime(3) DEFAULT NULL,
  `updated_at` datetime(3) DEFAULT NULL,
  `deleted_at` datetime(3) DEFAULT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `course_id` bigint(20) UNSIGNED NOT NULL,
  `progress` double DEFAULT 0,
  `last_watched_at` datetime(3) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data untuk tabel `user_courses`
--

INSERT INTO `user_courses` (`id`, `created_at`, `updated_at`, `deleted_at`, `user_id`, `course_id`, `progress`, `last_watched_at`) VALUES
(1, '2025-11-02 10:38:38.741', '2025-11-02 10:38:38.741', NULL, 1, 1, 0, '2025-11-02 10:38:38.740'),
(2, '2025-11-02 10:52:21.284', '2025-11-02 10:53:17.252', NULL, 2, 1, 32, '2025-11-02 10:52:21.284'),
(3, '2025-11-02 10:53:40.953', '2025-11-02 10:53:40.953', NULL, 2, 2, 0, '2025-11-02 10:53:40.952'),
(4, '2025-11-07 08:42:37.662', '2025-11-07 08:44:07.551', NULL, 8, 7, 0.612272546630186, '2025-11-07 08:42:37.658'),
(6, '2025-11-07 08:51:06.501', '2025-11-08 09:55:17.118', NULL, 8, 2, 5.954279617729322, '2025-11-07 08:51:06.499'),
(7, '2025-11-07 18:20:36.844', '2025-11-07 18:23:25.592', NULL, 8, 3, 25.00913371288045, '2025-11-07 18:20:36.843'),
(9, '2025-11-07 18:21:28.127', '2025-11-07 22:20:56.366', NULL, 8, 1, 100, '2025-11-07 18:21:28.126'),
(11, '2025-11-08 19:22:23.686', '2025-11-08 19:27:00.015', NULL, 8, 8, 40.79346217105264, '2025-11-08 19:22:23.685'),
(12, '2025-11-08 20:28:25.966', '2025-11-08 20:50:54.809', NULL, 8, 12, 13.36643160807477, '2025-11-08 20:28:25.966'),
(13, '2025-11-08 20:28:37.668', '2025-11-08 20:28:44.851', NULL, 8, 11, 13.264770340759016, '2025-11-08 20:28:37.667'),
(14, '2025-11-08 20:28:50.672', '2025-11-08 20:29:54.424', NULL, 8, 10, 92.7291690909091, '2025-11-08 20:28:50.671'),
(15, '2025-11-08 20:30:25.382', '2025-11-08 20:30:54.617', NULL, 8, 9, 81.26020182291667, '2025-11-08 20:30:25.381'),
(17, '2025-11-08 21:02:39.497', '2025-11-08 21:03:07.277', NULL, 10, 8, 5.287207474441574, '2025-11-08 21:02:39.496'),
(18, '2025-11-08 22:07:59.900', '2025-11-08 22:08:30.636', NULL, 11, 12, 88.86875696563827, '2025-11-08 22:07:59.900');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `idx_categories_name` (`name`) USING HASH,
  ADD KEY `idx_categories_deleted_at` (`deleted_at`);

--
-- Indeks untuk tabel `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idx_comments_deleted_at` (`deleted_at`),
  ADD KEY `fk_comments_user` (`user_id`),
  ADD KEY `fk_comments_replies` (`parent_id`);

--
-- Indeks untuk tabel `comment_likes`
--
ALTER TABLE `comment_likes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idx_comment_likes_deleted_at` (`deleted_at`),
  ADD KEY `fk_comments_likes` (`comment_id`);

--
-- Indeks untuk tabel `contacts`
--
ALTER TABLE `contacts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idx_contacts_deleted_at` (`deleted_at`);

--
-- Indeks untuk tabel `courses`
--
ALTER TABLE `courses`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idx_courses_deleted_at` (`deleted_at`),
  ADD KEY `fk_categories_courses` (`category_id`);

--
-- Indeks untuk tabel `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idx_password_reset_tokens_deleted_at` (`deleted_at`);

--
-- Indeks untuk tabel `refresh_tokens`
--
ALTER TABLE `refresh_tokens`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idx_refresh_tokens_deleted_at` (`deleted_at`),
  ADD KEY `fk_users_refresh_tokens` (`user_id`);

--
-- Indeks untuk tabel `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `idx_users_email` (`email`),
  ADD KEY `idx_users_deleted_at` (`deleted_at`);

--
-- Indeks untuk tabel `user_courses`
--
ALTER TABLE `user_courses`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `idx_user_course` (`user_id`,`course_id`),
  ADD KEY `idx_user_courses_deleted_at` (`deleted_at`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `categories`
--
ALTER TABLE `categories`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT untuk tabel `comments`
--
ALTER TABLE `comments`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT untuk tabel `comment_likes`
--
ALTER TABLE `comment_likes`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `contacts`
--
ALTER TABLE `contacts`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT untuk tabel `courses`
--
ALTER TABLE `courses`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT untuk tabel `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT untuk tabel `refresh_tokens`
--
ALTER TABLE `refresh_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=69;

--
-- AUTO_INCREMENT untuk tabel `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT untuk tabel `user_courses`
--
ALTER TABLE `user_courses`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- Ketidakleluasaan untuk tabel pelimpahan (Dumped Tables)
--

--
-- Ketidakleluasaan untuk tabel `comments`
--
ALTER TABLE `comments`
  ADD CONSTRAINT `fk_comments_replies` FOREIGN KEY (`parent_id`) REFERENCES `comments` (`id`),
  ADD CONSTRAINT `fk_comments_user` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Ketidakleluasaan untuk tabel `comment_likes`
--
ALTER TABLE `comment_likes`
  ADD CONSTRAINT `fk_comments_likes` FOREIGN KEY (`comment_id`) REFERENCES `comments` (`id`);

--
-- Ketidakleluasaan untuk tabel `courses`
--
ALTER TABLE `courses`
  ADD CONSTRAINT `fk_categories_courses` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`);

--
-- Ketidakleluasaan untuk tabel `refresh_tokens`
--
ALTER TABLE `refresh_tokens`
  ADD CONSTRAINT `fk_users_refresh_tokens` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
