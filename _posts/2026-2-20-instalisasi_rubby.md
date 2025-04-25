---
layout: post
title: "Instalasi Ruby dan Jekyll"
date: 2025-02-20
---

Materi tentang Instalasi Ruby dan Jekyll

# 📘 Panduan Instalasi Jekyll dan Ruby

## 💎 Apa Itu Ruby & Jekyll?

- **Ruby** adalah bahasa pemrograman yang digunakan Jekyll.
- **Jekyll** adalah static site generator berbasis Ruby, populer untuk membuat blog atau dokumentasi (seperti GitHub Pages).

---

## 🔧 Persiapan Awal

### 1. Install Ruby

#### ▶ Windows

1. Download dari: [https://rubyinstaller.org](https://rubyinstaller.org)
2. Pilih versi **Ruby + DevKit**, contoh: `Ruby 3.1.4-1 (x64)`
3. Setelah instalasi:
   - Centang opsi “Run `ridk install`”
   - Pilih semua komponen (1, 2, dan 3)

#### ▶ macOS

Install via Homebrew:

/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
brew install ruby

#### ▶ Linux

sudo apt update
sudo apt install ruby-full build-essential zlib1g-dev
Tambahkan RubyGems ke PATH:
echo '# Install Ruby Gems to ~/gems' >> ~/.bashrc
echo 'export GEM_HOME="$HOME/gems"' >> ~/.bashrc
echo 'export PATH="$HOME/gems/bin:$PATH"' >> ~/.bashrc
source ~/.bashrc

🌟 Instalasi Jekyll
Setelah Ruby terinstal, jalankan:
gem install jekyll bundler

🚀 Membuat dan Menjalankan Proyek Jekyll

1. Membuat proyek baru:
   jekyll new nama-proyek
   cd nama-proyek

2. Menjalankan server lokal:
   bundle exec jekyll serve
   Buka di browser:
   http://localhost:4000

🧪 Cek Versi
ruby -v # versi Ruby
jekyll -v # versi Jekyll

---

## ✅ Kesimpulan

Instalasi Jekyll membutuhkan beberapa langkah utama, yaitu:

1. **Menginstal Ruby** – sebagai fondasi karena Jekyll dibangun dengan Ruby.
2. **Menginstal Jekyll dan Bundler** – menggunakan perintah `gem install`.
3. **Membuat dan menjalankan proyek Jekyll** – dengan `jekyll new` dan `bundle exec jekyll serve`.

Dengan mengikuti langkah-langkah ini, kamu sudah siap membangun situs statis menggunakan Jekyll di berbagai sistem operasi (Windows, macOS, atau Linux). Pastikan kamu juga melakukan pengecekan versi dan menyesuaikan jika menggunakan layanan seperti GitHub Pages.

> Selamat berkarya dengan Jekyll! 🚀