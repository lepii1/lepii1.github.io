---
layout: post
title: "Layout dan Navigasi"
date: 2025-03-13
---

Materi tentang Layout dan Navigasi

Panduan dasar tentang layout dan navigasi dalam pengembangan web.

# 🧭 Belajar Layout & Navigasi Web

## 🧱 Apa Itu Layout?

**Layout** adalah cara menyusun elemen-elemen di halaman web agar tampilannya rapi, terstruktur, dan mudah dibaca oleh pengguna.

Layout penting untuk:
- Meningkatkan pengalaman pengguna (UX)
- Menyampaikan informasi dengan jelas
- Menyesuaikan tampilan di berbagai perangkat (responsif)

### 📐 Contoh Struktur Layout Umum


<header>
  <nav>Menu Navigasi</nav>
</header>

<main>
  <section>Konten Utama</section>
  <aside>Sidebar</aside>
</main>

<footer>
  Hak Cipta &copy; 2025
</footer>

---

## 📑 Jenis Layout Populer

| Jenis Layout | Keterangan |
|--------------|------------|
| **Single Column** | Umum untuk blog dan mobile |
| **Two Column** | Konten dan sidebar |
| **Three Column** | Navigasi, konten, dan sidebar |
| **Grid Layout** | Digunakan untuk galeri dan aplikasi modern |

---

## 🔗 Apa Itu Navigasi?

**Navigasi** adalah cara pengguna berpindah dari satu halaman atau bagian ke bagian lain dalam situs web.

Navigasi yang baik memudahkan pengguna menemukan informasi dengan cepat.

### 📌 Contoh Navigasi Sederhana


<nav>
  <ul>
    <li><a href="/">Beranda</a></li>
    <li><a href="/tentang">Tentang</a></li>
    <li><a href="/kontak">Kontak</a></li>
  </ul>
</nav>

---

## 🎯 Tips Membuat Navigasi yang Efektif

- Gunakan menu horizontal di bagian atas
- Tambahkan menu di bagian footer sebagai alternatif
- Gunakan warna atau gaya untuk menandai halaman aktif
- Navigasi harus konsisten di semua halaman
- Responsif: bisa diakses di perangkat mobile

---

## 🧰 Tools & CSS Terkait

- Gunakan **Flexbox** atau **CSS Grid** untuk layout modern:
  

/* Contoh layout dua kolom dengan Flexbox */
.container {
  display: flex;
}

aside {
  width: 30%;
}

section {
  width: 70%;
}

---

## ✅ Kesimpulan

- **Layout** adalah kerangka visual dari halaman web, membantu menyusun konten agar mudah dipahami dan enak dilihat.
- **Navigasi** adalah peta situs web, memandu pengguna menjelajahi isi situs dengan mudah dan efisien.
- Tata letak dan navigasi yang baik akan meningkatkan kenyamanan dan pengalaman pengguna.
- Gunakan teknik seperti **Flexbox** atau **Grid CSS** untuk menciptakan layout modern dan responsif.
- Selalu utamakan **kesederhanaan dan konsistensi** dalam desain navigasi dan layout.

> 💡 Layout membentuk struktur, navigasi menggerakkan pengguna — keduanya kunci dari web yang baik!