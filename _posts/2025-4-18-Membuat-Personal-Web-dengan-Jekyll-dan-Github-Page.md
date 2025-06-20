---
layout: post
title: "Membuat Personal Web dengan Jekyll dan Github Page"
date: 2025-04-18
---

    Materi Tentang Membuat Personal Web dengan Jekyll dan Github Page

## Langkah-Langkah Membuat Personal Web

---

Untuk membuat personal web dengan Jekyll dan publish di GitHub Page ikuti langkah
langkah berikut ini:

- Buat akun di GitHub dengan username sesuai nama masing-masing.
- Buat repository baru dengan nama username dan github.io.Contoh: username github = Lepi, maka nama repositorinya Lepii.github.io.
- Clone repository tersebut ke lokal.
- Masuk ke dalam folder repository tersebut kemudian install Jekyll dengan perintah berikut melalui terminal.

```
    gem install jekyll bundler
```

- Jalankan perintah bundle init untuk inisialisasi folder terebut sebagai proyek 
jekyll seperti perintah berikut ini. Hasil dari perintah tersebut adalah file baru
dengan nama Gemfile.

```
    bundle init
```

- Edit file Gemfile menggunakan IDE dan tambahkan kode berikut.

```
    gem "jekyll"
```

- Buat file baru dengan nama index.html, kemudian isi dengan kode berikut.

```html
    <!DOCTYPE html>
     <html lang="en">
      <head>
        <meta charset="UTF-8">
        <title>Home</title>
      </head>
      <body>
        <h1>Hello World!</h1>
      </body>
    </html>
```

- Jalankan jekyll build untuk build web yang telah dibuat sehingga menhasilkan
directory _site.

```
    jekyll build
```

- Kemudian jalankan perintah jekyll serve untuk menjalankan web yang telah
dibuat di web browser dengan alamat http://localhost:4000.

```
    jekyll serve
```

- Jira web telah berhasil dibuka, edit file Gemfile.lock dengan menambahkan
platform linux pada bagian platform seperti pada gambar berikut.

```
    PLATFORMS
      x86_64-linux
```

- Selanjutnya push repositori ke GitHub dengan perintah-perintah berikut.

```
    git add .
    git commit -m "first publish"
    git push
```

- Buat GitHub Actions untuk CI/CD agar web otomatis publish.

>Note : Ketika menjalankan jekyll dalam tahap pengembangan, gunakan perintah
jekyll serve–livereload agar ketika ada perubahan web browser langsung
menampilkan hasil perubahannya. Apabila dalam menjalankan jekyll terjadi
error karena port konflik jalankan menggunakan–host dan–port.

Bahan Bacaan:
- [Install Jekyll dan Ruby dai MacOS](https://jekyllrb.com/docs/installation/macos/)
- [Instal Jekyll dan Ruby di Ubuntu](https://jekyllrb.com/docs/installation/ubuntu/)
- [Git Handbook](https://docs.github.com/en/get-started/using-git/about-git)
- [Markdown Guide](https://www.markdownguide.org/)
- [GitHub](https://github.com/)