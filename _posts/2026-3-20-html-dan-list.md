---
layout: post
title: "HTML: Link dan List"
date: 2025-03-20
---

Materi tentang link dan lists pada HTML

Materi dasar tentang penggunaan link dan list dalam HTML.

# 🔗 Belajar Link & List pada HTML

## 🔗 Apa Itu Link di HTML?

**Link (tautan)** digunakan untuk menghubungkan satu halaman ke halaman lain, baik di dalam website yang sama maupun ke luar website.

### 📌 Tag yang Digunakan:
- `<a>`: Anchor tag untuk membuat hyperlink

### ✅ Contoh Penggunaan Link


<!-- Link ke halaman lain -->
<a href="about.html">Tentang Kami</a>

<!-- Link ke situs luar -->
<a href="https://www.google.com" target="_blank">Cari di Google</a>

<!-- Link ke bagian tertentu di halaman -->
<a href="#kontak">Lompat ke bagian kontak</a>

<!-- Elemen target -->
<h2 id="kontak">Kontak Kami</h2>


---

## 🧾 Apa Itu List di HTML?

**List** digunakan untuk menampilkan item-item dalam bentuk daftar.

### 📌 Jenis List di HTML:

| Jenis | Tag | Deskripsi |
|-------|-----|-----------|
| Ordered List | `<ol>` | Daftar berurutan (dengan angka) |
| Unordered List | `<ul>` | Daftar tak berurutan (dengan bullet) |
| Description List | `<dl>` | Daftar definisi/keterangan |

---

### ✅ Contoh Ordered List


<ol>
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
</ol>


### ✅ Contoh Unordered List


<ul>
  <li>Blog</li>
  <li>Galeri</li>
  <li>Kontak</li>
</ul>


### ✅ Contoh Description List


<dl>
  <dt>HTML</dt>
  <dd>Bahasa markup untuk web</dd>

  <dt>CSS</dt>
  <dd>Bahasa untuk desain tampilan</dd>
</dl>


---

## 🎯 Tips Penggunaan Link & List

- Gunakan `target="_blank"` untuk membuka link di tab baru.
- Tambahkan `title` pada tag `<a>` untuk memberi informasi tambahan saat hover.
- Gunakan list untuk menyusun menu navigasi.
- Nesting list di dalam list untuk membuat submenu atau daftar berjenjang.

---

## ✅ Kesimpulan

- **Link (`<a>`)** penting untuk menghubungkan halaman dan membuat situs web mudah dinavigasi.
- **List (`<ul>`, `<ol>`, `<dl>`)** membantu menampilkan informasi dalam bentuk yang rapi dan terstruktur.
- Keduanya merupakan elemen HTML dasar yang sering digunakan dalam berbagai layout dan konten situs.

> 💡 Kuasai tag `<a>`, `<ul>`, `<ol>`, dan `<li>` agar kamu bisa membangun struktur navigasi dan konten yang baik dalam halaman web!