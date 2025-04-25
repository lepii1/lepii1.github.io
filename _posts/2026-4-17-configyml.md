---
layout: post
title: "Config YML"
date: 2025-04-17
---

Materi tentang link dan lists pada HTML

Materi pengenalan tentang file konfigurasi `.yml` (YAML), sering digunakan dalam proyek web seperti Jekyll, GitHub Actions, dan banyak tools lainnya.

# ⚙️ Apa Itu File YML?

**YML (atau YAML)** adalah singkatan dari **YAML Ain’t Markup Language**, yaitu format file konfigurasi yang digunakan untuk menyimpan data dengan struktur yang rapi dan mudah dibaca manusia.

Biasanya digunakan untuk mengatur **setting**, **data konfigurasi**, atau **pipeline deployment** di berbagai aplikasi dan framework.

---

## 🧩 Ciri Khas Format YML

- Berbasis indentasi (menggunakan spasi, **bukan tab**)
- Tidak menggunakan tanda kurung `{}` atau `[]`
- Menggunakan tanda `:` untuk memisahkan key dan value
- Mendukung struktur **array**, **object**, dan **nested data**

---

## 📘 Contoh Dasar Config `.yml`

title: My Blog
description: Belajar Web Development
author: Zaki
theme: minima


Pada contoh di atas:
- `title`, `description`, `author`, dan `theme` adalah **key**
- Setelah tanda `:` adalah **value**

---

## 🧱 Nested (Data Bertingkat)

user:
  name: Zaki
  email: zaki@example.com


Struktur ini artinya ada object `user` yang punya 2 properti: `name` dan `email`.

---

## 📚 Contoh Array/List dalam YML


skills:
  - HTML
  - CSS
  - JavaScript
  - Python


List ini berisi beberapa item dalam satu key `skills`.

---

## 🔧 Contoh pada `_config.yml` Jekyll

Dalam proyek Jekyll (seperti website portofolio), file `config.yml` biasanya berisi pengaturan berikut:

title: Home
baseurl: ""  
url: "https://m-zakifahrezi.github.io/"

sass:
  sass_dir: _sass
  style: compressed

theme: null


- `baseurl` biasanya dibiarkan `/` jika di-root.
- `url` adalah alamat web GitHub Pages-mu.
- `plugins` bisa ditambahkan sesuai fitur yang ingin kamu aktifkan.

---

## ⚠️ Tips Penting Menggunakan YML

- Gunakan **spasi 2** atau **4** secara konsisten untuk indentasi.
- Hindari tab, karena bisa menyebabkan error parsing.
- Periksa ulang posisi key dan value, karena satu kesalahan kecil bisa bikin konfigurasi gagal terbaca.

---

## ✅ Kesimpulan

- `.yml` adalah file konfigurasi penting yang digunakan di banyak proyek modern.
- Strukturnya mudah dibaca dan ditulis, tapi sangat sensitif terhadap indentasi.
- Memahami YML akan sangat membantu saat bekerja dengan Jekyll, GitHub Actions, Netlify, dan tools lainnya.

> 💡 Pastikan kamu memahami cara menulis key-value, array, dan nested structure dalam YML agar konfigurasi website-mu berjalan lancar!