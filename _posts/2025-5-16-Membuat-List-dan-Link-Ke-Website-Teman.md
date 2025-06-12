---
layout: post
title: "Laporan 5"
date: 2025-05-16
---

        Membuat List dan Link ke Website Teman

## Langkah-Langkah Membuat List dan Link ke website Teman

---


Pada tahap ini kita akan membuat link dengan HTML dan Markdown untuk ter
hubung dengan website-website teman sekelas.

- Pastikan commit yang dilokal dan di GitHub sudah sama, jika belum lakukan
git pull.
- Ubah file index.html menjadi seperti berikut ini.

```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Home</title>
    </head>
    <body>
        <h1>Nama : Ahmad Aulia Fahlevi</h1>
        <p>Perkenalkan nama saya Ahmad Aulia Fahlevi, Sekarang saya belajar di Politeknik Negeri Lhokseumawe 
            di Jurusan TIK(Teknik Informasi dan Komputer) di prodi TI(Teknik Informatika) di kelas TI-1C,
            hobi saya olahraga dan saya juga atlit Taekwondo Profesional dan juga saya suka sepedaan,
            Cita-cita saya untuk saat ini belum ada yang pasti hal yang pertama saya ingin lakukan adalah
            membahagiakan orang tua saya, Terima Kasih.</p>
        <ul>
            <li><a href="https://faizul-abrar.github.io/" target="_blank">Faizul Abrar</a></li>
            <li><a href="https://hamizan18.github.io/" target="_blank">Hamizan Putra Zulia</a></li>
            <li><a href="https://ilhamdienar.github.io/" target="_blank">Ilham Syahdienar</a></li>
            <li><a href="https://imamnawawi1c.github.io/" target="_blank">Imam Nawawi</a></li>
            <li><a href="https://irfandi8.github.io/" target="_blank">Irfandi</a></li>
            <li><a href="https://fyou00.github.io/" target="_blank">Muhammad Fathurrahman</a></li>
        </ul>
    </body>
    </html>
```

- Pada elemen ```<h1>```, ```<p>```, dan ```<li>``` sesuaikan dengan data pribadi dan kelas 
masing-masing.
- Buat file baru di direktori root dengan nama friends.md dan isi dengan kode
berikut.

```html
    ---
    layout: default
    title: Friends
    ---
    # Friends page

    Berikut teman-teman saya di kelas:
    -[Faizul Abrar](https://faizul-abrar.github.io/)
    -[Hamizan Putra Zulia](https://hamizan18.github.io/)
    -[Ilham Syahdienar](https://ilhamdienar.github.io/)
    -[Imam Nawawi](https://imamnawawi1c.github.io/)
    -[Irfandi](https://irfandi8.github.io/)
    -[Muhammad Fathurrahman](https://fyou00.github.io/)
    - .....
```

- Pada bagian link sesuaikan dengan link yang telah dibuat pada index.html.
- Jika semua sudah benar dan selesai publish ke github masing-masing.

Bahan Bacaan:
- [W3Schools Online Web Tutorials](https://www.w3schools.com/html/)