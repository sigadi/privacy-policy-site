# Privacy Policy Website

Website ini digunakan untuk menampilkan halaman **Privacy Policy** untuk berbagai aplikasi dalam satu repository.

Website dibuat menggunakan **Next.js (App Router)** dan dirancang agar setiap aplikasi memiliki URL privacy policy sendiri.

Contoh URL hasil deploy:

```
https://username.github.io/privacy-policy-site/apps/kataku
```

---

# Struktur Project

```
privacy-policy-site
│
├── app
│   ├── page.tsx
│   │
│   └── apps
│       └── [slug]
│           └── page.tsx
│
├── content
│   └── apps
│       ├── kataku
│       │   └── privacy-policy.md
│       │
│       └── contoh-aplikasi
│           └── privacy-policy.md
```

Folder **content/apps** berisi semua privacy policy untuk setiap aplikasi.

---

# Menambahkan Privacy Policy Baru

Untuk menambahkan privacy policy aplikasi baru, ikuti langkah berikut.

## 1. Buat Folder Aplikasi

Masuk ke folder:

```
content/apps
```

Buat folder baru dengan nama aplikasi (slug).

Contoh:

```
content/apps/aplikasi-baru
```

---

## 2. Buat File Privacy Policy

Di dalam folder aplikasi tersebut, buat file:

```
privacy-policy.md
```

Contoh struktur:

```
content/apps/aplikasi-baru/privacy-policy.md
```

---

## 3. Isi Privacy Policy

Contoh isi file:

```
# Privacy Policy - Aplikasi Baru

Last updated: 2026

Aplikasi Baru adalah aplikasi yang dibuat untuk membantu pengguna belajar sesuatu.

## Information Collection

Aplikasi ini tidak mengumpulkan informasi pribadi pengguna.

## Third Party Services

Aplikasi ini dapat menggunakan layanan pihak ketiga seperti:

- Google Play Services

## Contact

Jika ada pertanyaan silakan hubungi:

developer@email.com
```

---

## 4. Jalankan Website Secara Lokal

Jalankan server development:

```
npm run dev
```

Buka di browser:

```
http://localhost:3000/apps/aplikasi-baru
```

Jika halaman muncul, berarti privacy policy berhasil ditambahkan.

---

# Menambahkan Aplikasi ke Halaman Utama

Buka file:

```
app/page.tsx
```

Tambahkan aplikasi pada daftar:

```
const apps = [
  { slug: "kataku", name: "Kataku App" },
  { slug: "aplikasi-baru", name: "Aplikasi Baru" }
]
```

---

# Build Website

Untuk membuat versi static website:

```
npm run build
```

Hasil build akan berada di folder:

```
/out
```

Folder ini dapat di-deploy ke **GitHub Pages**.

---

# Tujuan Project

Project ini dibuat untuk:

* menyediakan halaman Privacy Policy untuk berbagai aplikasi
* mempermudah pengelolaan banyak aplikasi dalam satu repository
* memenuhi persyaratan halaman privacy policy pada Google Play
* membuat URL yang rapi dan mudah diakses

Contoh URL:

```
/apps/kataku
/apps/aplikasi-baru
```

---

# Lisensi

Project ini bebas digunakan dan dimodifikasi sesuai kebutuhan.
