---
layout: post
title: Membuat WEB dengan menggunakan bahasa PHP
date: 2025-06-13
---

    Materi tentang membuat website menggunakan bahasa PHP

## Langkah-Langkah Membuat website menggunakan bahasa PHP :

1.  Buka XAMPP atau Laragon
2.  Jalankan "APACHE" dan "MySQL"
3.  Klik "Eksplorer" di bagian sebelah kanan
4.  Cari dan buka folder "htdocs"
5.  Buat folder baru dengan nama "Latihan"
6.  Lalu buka di Visual Studio Code dengan cara klik kanan difolder "Latihan" pilih open with code, lalu akan muncul terminal, lalu ketik "code ."
7.  Sebelum itu kita buat dulu database latihan nya, agar nanti bisa kita panggil menggunakan bahasa php
8.  Pertama kita buka dulu di Chrome atau Firefox dan web browser lainnya
9.  Lalu masuk ke web localhost/phpmyadmin/
10. Lalu pilih "SQL", ketik "CREATE DATABASE latihan"
11. Kemudian lalu pilih "SQL" lagi, ketik seperti dibawah ini :
```mysql
    CREATE TABLE Siswa(
        id int auto_increment primary key 
        nama varchar(50)
        alamat varchar(50)
        jenis_kelamin varchar(10),
        agama varchar(10),
        sekolah_asal varchar(50)
    );
```

12. Setelah itu kita kembali lagi ke Visual Studio Code buat file baru dengan nama "create.php", lalu isi dengan kode seperti dibawah ini :
```php
    <?php

    include "koneksi.php";
    
    $nama = $_POST['nama'];
    $alamat = $_POST['alamat'];
    $jenis_kelamin = $_POST['jenis_kelamin'];
    $agama = $_POST['agama'];
    $sekolah_asal = $_POST['sekolah_asal'];
    
    $sql = "INSERT INTO siswa (nama, alamat, jenis_kelamin, agama, sekolah_asal)
            VALUES ('$nama', '$alamat', '$jenis_kelamin', '$agama', '$sekolah_asal')";
    
    if (mysqli_query($koneksi, $sql)) {
        header("location: list-siswa.php");
    } else {
        echo "Error: " . $sql . "<br>" . mysqli_error($koneksi);
    }
    
    ?>
```

13. Setelah itu kita buat file "koneksi.php" untuk menarik dari file database dari "MySQL" isi seperti ini :
```php
    <?php
    
    $host = 'localhost';
    $username = 'root';
    $password = '000';
    $db_name = 'latihan';
    
    $koneksi = mysqli_connect($host, $username, $password, $db_name);
    
    if (!$koneksi){
        die("koneksi gagal: " . mysqli_connect_error());
    }
    
    ?>
```
14. Setelah itu buat file lagi dengan nama "delete.php" :
```php
    <?php
    
    include "koneksi.php";
    
    $id = $_POST['id'];
    
    $sql = "DELETE FROM siswa WHERE id=$id";
    
    if (mysqli_query($koneksi, $sql)) {
        header("location:list-siswa.php");
    } else {
        echo "Error deleting record: " . mysqli_error($koneksi);
    }
```

15. Kemudian buat lagi file dengan nama "form-daftar.php" :
```html
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Form Pendaftaran Siswa Baru | Digital Talent</title>
    </head>
    
    <body>
        <h2>Formulir Pendaftaran Siswa Baru</h2>
        <form action="create.php" method="POST">
            <table>
                <tr>
                    <td>Nama</td>
                    <td>:</td>
                    <td><input type="text" name="nama"></td>
                </tr>
                <tr>
                    <td>Alamat</td>
                    <td>:</td>
                    <td>
                        <input type="radio" name="jenis_kelamin" value="1"> Laki-laki
                        <input type="radio" name="jenis_kelamin" value="0"> Perempuan
                    </td>
                </tr>
                <tr>
                    <td>Agama</td>
                    <td>:</td>
                    <td>
                        <select name="agama">
                            <option>--Pilih Agama--</option>
                            <option>Islam</option>
                            <option>Kristen</option>
                            <option>Hindu</option>
                            <option>Buddha</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td>Sekolah Asal</td>
                    <td>:</td>
                    <td><input type="text" name="sekolah_asal"><br/></td>
                </tr>
                <tr>
                    <td colspan="2">
                    </td>
                    <td>
                        <button type="submit">Daftar</button>
                        <a href="index.php">Batal</a>
                    </td>
                </tr>
            </table>
        </form>
    </body>
    </html>
```

16. Kemudian file dengan nama "form-delete.php" :
```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Form Hapus Siswa</title>
    </head>
    <body>
    
    <?php
        include "koneksi.php";
        $id = $_GET['id'];
        $sql = "SELECT * FROM siswa WHERE id=$id";
        $result = mysqli_query($koneksi, $sql);
        $row = mysqli_fetch_assoc($result);
        ?>
    
    <h2>Apakah Anda yakin akan menghapus data berikut?</h2>
    <form action="delete.php" method="POST">
        <input type="hidden" name="id" value="<?php echo $row['id'] ?>">
        Nama : <?php echo $row['nama'] ?> <br/>
        Jenis Kelamin :
        <?php
            if ($row['jenis_kelamin'] == 1) {
                echo "Laki-laki";
            } else {
                echo 'Perempuan';
            }
            ?>
        Agama : <?php echo $row['agama'] ?> <br/>
        Sekolah Asal : <?php echo $row['sekolah_asal'] ?> <br/>
        <button type="submit">Ya</button>
        <a href="list-siswa.php">Tidak</a>
    </form>
    </body>
    </html>
```

17. Lalu file "form-edit.php" :
```html
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Form Edit Siswa</title>
    </head>
    
    <body>
    
    <?php
        include "koneksi.php";
        $id = $_GET['id'];
        $sql = "SELECT * FROM siswa WHERE id=$id";
        $result = mysqli_query($koneksi, $sql);
        $row = mysqli_fetch_assoc($result);
        ?>
    
    <h2>Formulir Edit Siswa</h2>
    <form action="update.php" method="POST">
        <input type="hidden" name="id" value="<?php echo $row['id'] ?>">
        Nama :
        <input type="text" name="nama" value="<?php echo $row['id'] ?>"> <br />
        Alamat :
        <textarea name="alamat">
            <?php echo $row['alamat'] ?>
        </textarea> <br/>
        Jenis Kelamin :
        <input type="radio" name="jenis_kelamin" value="1" <?php if ($row['jenis_kelamin'] == 1) echo "checked" ?>>
        Laki-laki
        <input type="radio" name="jenis_kelamin" value="0" <?php if ($row['jenis_kelamin'] == 0) echo "checked" ?>>
        Perempuan <br/>
        Agama :
        <select name="agama">
            <option>--Pilih Agama</option>
            <option value="Islam"></option>
            <option value="Kristen"></option>
            <option value="Hindu"></option>
            <option value="Buddha"></option>
        </select> <br/>
        Sekolah asal :
        <input type="text" name="sekolah_asal" value="<?php echo $row['sekolah_asal'] ?>">
        <br/>
        <button type="submit">Update</button>
        <a href="list-siswa.php">Batal</a>
    </form>
    </body>
    </html>
```

18. Lalu file "index.php" dengan isi :
```php
    <?php
    
    echo "<h2> Pendaftaran Siswa Baru</h2>
    
        <h1>Digital Talent</h1>
    
        <h3>Menu</h3>
    
        <li><a href='form-daftar.php'>Daftar Baru</a></li>
        <li><a href='list-siswa.php'>Pendaftaran</a></li>
        </ul>";
    
    ?>
```

19. Lalu file "list-siswa.php" dengan isi :
```html
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Daftar Siswa</title>
    </head>
    
    <body>
    <h2>Siswa yang sudah mendaftar</h2>
    
    <ul>
        <li><a href="index.php">Home</a></li>
        <li><a href="form-daftar.php">[+] Tambah Baru</a></li>
    </ul>
    
    <?php
        include "koneksi.php";
    
        $sql = "SELECT * FROM siswa";
        $result = mysqli_query($koneksi, $sql);
        ?>
    <table border="1">
        <thead>
        <tr>
            <th>No</th>
            <th>Nama</th>
            <th>Alamat</th>
            <th>Jenis Kelamin</th>
            <th>Agama</th>
            <th>Sekolah Asal</th>
            <th>Tindakan</th>
        </tr>
        </thead>
        <tbody>
        <?php
                $no = 1;
                while ($row = mysqli_fetch_assoc($result)) {
                    ?>
        <tr>
            <td><?php echo $no++; ?></td>
            <td><?php echo $row['nama']; ?></td>
            <td><?php echo $row['alamat']; ?></td>
            <td>
                <?php
                            if ($row['jenis_kelamin'] == 1) {
                                echo "Laki-laki";
                            } else {
                                echo "Perempuan";
                            }
                            ?>
            </td>
            <td><?php echo $row['agama']; ?></td>
            <td><?php echo $row['sekolah_asal']; ?></td>
            <td>
                <a href="form-edit.php?id=<?php echo $row['id']; ?>">Edit</a>
                <a href="form-delete.php?id=<?php echo $row['id']; ?>">Delete</a>
            </td>
        </tr>
        <?php
                }
            ?>
        </tbody>
    </table>
```

20. Lalu buat file "update.php" dengan isi :
```php
    <?php
    
    include "koneksi.php";
    
    $id = $_POST['id'];
    $nama = $_POST['nama'];
    $alamat = $_POST['alamat'];
    $jenis_kelamin = $_POST['jenis_kelamin'];
    $agama = $_POST['agama'];
    $sekolah_asal = $_POST['sekolah_asal'];
    
    $sql = "UPDATE siswa SET nama='$nama', alamat='$alamat', jenis_kelamin='$jenis_kelamin', agama='$agama', sekolah_asal='$sekolah_asal' WHERE id=$id";
    
    if (mysqli_query($koneksi, $sql)) {
        header("location:list-siswa.php");
    } else {
        echo "Error updating record: " . mysqli_error($koneksi);
    }
    
    ?>
```
