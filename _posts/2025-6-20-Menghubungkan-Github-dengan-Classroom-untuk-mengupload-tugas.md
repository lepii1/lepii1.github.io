---
layout: post
title: Github dan Classroom
date: 2025-06-20
---

    Menggunakan Github dengan Classroom untuk mengupload tugas

## Langkah-Langkah Membuatnya :

1.  Buka web browser, lalu buka website <a href="Github.com">Github.com</a>, setelah itu login, jika belum mempunyai akun bisa di daftarkan terlebih dahulu
2.  Kemudian klik link yang dikirim oleh dosen
3.  Ketika diklik jika dimintai untuk login maka login, setelah itu klik "Authorize"
4.  Kemudian klik "Accept this assignment"
5.  Setelah itu maka akan terbentuk repository untuk uploud tugas-tugas praktikum
6.  Setelah itu copy file "SSH" di tab "Code"
7.  Lalu buka folder kampus atau folder apapun difile explor, kemudian klik kanan, pilih "Open With Code", maka akan muncul sebuah terminal
8.  Kemudian paste ssh yang sudah kita copy di github tadi, atau ketik seperti ini : 
```
    git@github.com:JTIK-PNL/php-crud-lepii1.git
```
9. Kemudian klik enter, tunggu sampai selesai maka akan terbentuk sebuah folder
10. Buka foldernya lalu paste praktikum-praktikum yang sudah dibuat 
11. Lalu kembali lagi ke terminal yang sudah dibuka tadi, ketik :
```
    git add .
    git commit -m "initial commit" 
    git push
```
12. Setelah itu semua praktikum sudah di push ke repository github classroomnya.