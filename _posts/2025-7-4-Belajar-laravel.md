---
layout: post
title: Belajar Laravel
date: 2025-07-04
---

# 🚀 Langkah Membuat Aplikasi Laravel CRUD Siswa

Berikut adalah panduan step-by-step untuk membuat aplikasi CRUD data siswa menggunakan Laravel dan Breeze.

---

## ✅ Bagian 1: Instalasi Laravel dan Breeze

### 1. Buat Proyek Laravel Baru

Jalankan perintah berikut di terminal:

```bash
composer create-project --prefer-dist laravel/laravel laratih
```

### 2. Tambahkan Breeze ke Proyek

Install Laravel Breeze untuk autentikasi dasar:

```bash
composer require laravel/breeze --dev
```

### 3. Pasang Breeze ke Proyek

Setelah Breeze berhasil diinstal, jalankan:

```bash
php artisan breeze:install
```

### 4. Install Dependency Frontend

Pasang semua paket frontend menggunakan npm:

```bash
npm install
```

### 5. Compile Aset Frontend

Jalankan:

```bash
npm run dev
```

Langkah ini akan meng-compile file CSS dan JS default Breeze agar tampilan login/register bekerja.

---

## ✅ Bagian 2: Setup Model dan Database

### 6. Buat Model + Migration Siswa

```bash
php artisan make:model Siswa -m
```

### 7. Buat Controller Resource

```bash
php artisan make:controller SiswaController --resource --model=Siswa
```

### 8. Edit File Migration `create_siswas_table`

Buka file migration di `database/migrations/` (cari file yang seperti ini (nama file mirip xxxx_xx_xx_create_siswas_table.php) lalu isi seperti berikut:

```php
Schema::create('siswas', function (Blueprint $table) {
    $table->id();
    $table->string('nama', 100);
    $table->text('alamat');
    $table->string('agama');
    $table->boolean('jenis_kelamin'); // 1 untuk laki-laki, 0 untuk perempuan
    $table->string('asal_sekolah');
    $table->timestamps();
});
```

### 9. Atur Koneksi Database

Edit file `.env` dan sesuaikan dengan konfigurasi database lokal:

```dotenv
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=latihan
DB_USERNAME=root
DB_PASSWORD=
```

### 10. Jalankan Migrasi

```bash
php artisan migrate
```

---

## ✅ Bagian 3: Menambahkan CRUD Data Siswa

### 11. Buat Folder dan File View

Buat folder `siswa` di dalam `resources/views`, lalu buat file:

```plaintext
resources/views/siswa/index.blade.php
```

### 12. Isi View `index.blade.php` (awal)

```blade
<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            {{ __('Dashboard') }}
        </h2>
    </x-slot>

    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                <div class="p-6 text-gray-900">
                    {{-- Ganti bagian ini dengan table siswa --}}
                </div>
            </div>
        </div>
    </div>
</x-app-layout>
```

---

## ✅ Bagian 4: Routing dan Controller

### 13. Tambahkan Route Resource di `web.php`

```php
use App\Http\Controllers\SiswaController;

Route::resource('siswa', SiswaController::class);
```

### 14. Isi Method `index()` di `SiswaController`

```php
public function index()
{
    $siswas = Siswa::all();
    return view('siswa.index', compact('siswas'));
}
```

---

## ✅ Bagian 5: Navigasi dan Tabel Data

### 15. Tambahkan Link Navigasi ke Siswa (opsional)

Edit `resources/views/layouts/navigation.blade.php`:

```blade
<x-nav-link :href="route('siswa.index')" :active="request()->routeIs('siswa.*')">
    {{ __('Siswa') }}
</x-nav-link>
```

### 16. Tampilkan Tabel Data di `index.blade.php`

Gantikan bagian isi sebelumnya (`{{ __("You're logged in index page!") }}`) dengan:

```blade
<table class="w-full border border-gray-300 mt-4">
    <thead>
        <tr class="bg-gray-200">
            <th class="border px-4 py-2">No</th>
            <th class="border px-4 py-2">Nama</th>
            <th class="border px-4 py-2">Alamat</th>
            <th class="border px-4 py-2">Agama</th>
            <th class="border px-4 py-2">Jenis Kelamin</th>
            <th class="border px-4 py-2">Asal Sekolah</th>
            <th class="border px-4 py-2">Aksi</th>
        </tr>
    </thead>
    <tbody>
        @foreach($siswas as $index => $siswa)
            <tr>
                <td class="border px-4 py-2">{{ $index + 1 }}</td>
                <td class="border px-4 py-2">{{ $siswa->nama }}</td>
                <td class="border px-4 py-2">{{ $siswa->alamat }}</td>
                <td class="border px-4 py-2">{{ $siswa->agama }}</td>
                <td class="border px-4 py-2">
                    {{ $siswa->jenis_kelamin ? 'Laki-laki' : 'Perempuan' }}
                </td>
                <td class="border px-4 py-2">{{ $siswa->asal_sekolah }}</td>
                <td class="border px-4 py-2">
                    <a href="#" class="text-blue-500">Edit</a> |
                    <a href="#" class="text-red-500">Delete</a>
                </td>
            </tr>
        @endforeach
    </tbody>
</table>
```

---

# ✅ CRUD Data Siswa (Create, Edit, Delete + SweetAlert)

---

## ✅ 17. Buat View Tambah dan Edit

### ➕ `create.blade.php` – Form Tambah Data Siswa

Buat di:

```
resources/views/siswa/create.blade.php
```

```blade
<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            Tambah Data Siswa
        </h2>
    </x-slot>

    <div class="py-6 px-6">
        <form action="{{ route('siswa.store') }}" method="POST">
            @csrf
            <div>
                <label>Nama</label>
                <input type="text" name="nama" class="border rounded w-full" required>
            </div>
            <div>
                <label>Alamat</label>
                <textarea name="alamat" class="border rounded w-full" required></textarea>
            </div>
            <div>
                <label>Agama</label>
                <input type="text" name="agama" class="border rounded w-full" required>
            </div>
            <div>
                <label>Jenis Kelamin</label>
                <select name="jenis_kelamin" class="border rounded w-full" required>
                    <option value="1">Laki-laki</option>
                    <option value="0">Perempuan</option>
                </select>
            </div>
            <div>
                <label>Asal Sekolah</label>
                <input type="text" name="asal_sekolah" class="border rounded w-full" required>
            </div>
            <button type="submit" class="mt-4 bg-indigo-600 text-white px-4 py-2 rounded">Simpan</button>
        </form>
    </div>
</x-app-layout>
```

---

### 🛠 `edit.blade.php` – Form Edit Data

```blade
<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            Edit Data Siswa
        </h2>
    </x-slot>

    <div class="py-6 px-6">
        <form action="{{ route('siswa.update', $siswa->id) }}" method="POST">
            @csrf
            @method('PUT')
            <input type="text" name="nama" value="{{ $siswa->nama }}" class="w-full border rounded mb-2" required>
            <textarea name="alamat" class="w-full border rounded mb-2" required>{{ $siswa->alamat }}</textarea>
            <input type="text" name="agama" value="{{ $siswa->agama }}" class="w-full border rounded mb-2" required>
            <select name="jenis_kelamin" class="w-full border rounded mb-2" required>
                <option value="1" {{ $siswa->jenis_kelamin ? 'selected' : '' }}>Laki-laki</option>
                <option value="0" {{ !$siswa->jenis_kelamin ? 'selected' : '' }}>Perempuan</option>
            </select>
            <input type="text" name="asal_sekolah" value="{{ $siswa->asal_sekolah }}" class="w-full border rounded mb-2" required>
            <button type="submit" class="bg-indigo-600 text-white px-4 py-2 rounded">Update</button>
        </form>
    </div>
</x-app-layout>
```

---

## ✅ 18. Lengkapi Controller

Buka `SiswaController.php` dan lengkapi seperti berikut:

```php
use App\Models\Siswa;
use Illuminate\Http\Request;

public function create()
{
    return view('siswa.create');
}

public function store(Request $request)
{
    $validated = $request->validate([
        'nama' => 'required',
        'alamat' => 'required',
        'agama' => 'required',
        'jenis_kelamin' => 'required|boolean',
        'asal_sekolah' => 'required',
    ]);

    Siswa::create($validated);

    return redirect()->route('siswa.index')->with('success', 'Data siswa berhasil ditambahkan!');
}

public function edit($id)
{
    $siswa = Siswa::findOrFail($id);
    return view('siswa.edit', compact('siswa'));
}

public function update(Request $request, $id)
{
    $validated = $request->validate([
        'nama' => 'required',
        'alamat' => 'required',
        'agama' => 'required',
        'jenis_kelamin' => 'required|boolean',
        'asal_sekolah' => 'required',
    ]);

    Siswa::where('id', $id)->update($validated);

    return redirect()->route('siswa.index')->with('success', 'Data siswa berhasil diperbarui!');
}

public function destroy($id)
{
    Siswa::destroy($id);

    return redirect()->route('siswa.index')->with('success', 'Data siswa berhasil dihapus!');
}
```

---

## ✅ 19. Tampilkan Tombol Aksi di Tabel

Update file `index.blade.php`, bagian tabel `Action`:

```blade
<td class="border px-4 py-2">
    <a href="{{ route('siswa.edit', $siswa->id) }}" class="text-blue-500">Edit</a>
    <form action="{{ route('siswa.destroy', $siswa->id) }}" method="POST" class="inline delete-form">
        @csrf
        @method('DELETE')
        <button type="submit" class="text-red-500">Hapus</button>
    </form>
</td>
```

---

## ✅ 20. Tambahkan SweetAlert Konfirmasi & Notifikasi

Di bawah halaman (`index.blade.php`), tambahkan:

```blade
<script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>

@if(session('success'))
<script>
    Swal.fire({
        icon: 'success',
        title: 'Berhasil',
        text: '{{ session('success') }}',
        timer: 2000,
        showConfirmButton: false
    });
</script>
@endif

<script>
    document.querySelectorAll('.delete-form').forEach(form => {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            Swal.fire({
                title: 'Yakin ingin menghapus?',
                text: "Data tidak bisa dikembalikan.",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#d33',
                cancelButtonColor: '#3085d6',
                confirmButtonText: 'Ya, hapus!',
                cancelButtonText: 'Batal'
            }).then((result) => {
                if (result.isConfirmed) {
                    form.submit();
                }
            });
        });
    });
</script>
```

---
Siap! Berikut versi **lebih santai** dan **naratif lengkap** dari semua proses yang telah kamu lakukan — mulai dari setup project Laravel, instalasi Breeze, sampai fitur CRUD + notifikasi:

---

## 🎯 Proyek Laravel: CRUD Siswa + Notifikasi

Setelah mengikuti seluruh langkah dari awal, sekarang kita udah berhasil bikin sebuah aplikasi Laravel yang cukup lengkap. Aplikasinya bukan cuma bisa login dan register aja, tapi juga udah mendukung fitur **CRUD data siswa** yang terintegrasi dengan autentikasi dari **Laravel Breeze**.

---

### 🚧 Proses Singkat yang Kita Lalui

1. **Mulai dari awal**: Kita buat project baru pakai Laravel dengan command `composer create-project`, lalu lanjut install Breeze buat urusan login-register biar cepat dan ringan.
2. **Install frontend**: Setelah itu, kita compile aset CSS dan JS pakai `npm install` dan `npm run dev`.
3. **Setup database**: Kita juga sudah atur `.env` dan bikin tabel siswa lengkap dengan field seperti nama, alamat, agama, jenis kelamin, dan asal sekolah.
4. **Model & Controller**: Dibuat otomatis pakai Artisan, jadi tinggal fokus ke logika controller dan isi form-nya di blade.
5. **Routing & View**: Kita daftarkan route resource untuk `siswa`, dan tampilkan datanya di view blade.
6. **Form tambah & edit**: Kita buat file `create.blade.php` dan `edit.blade.php` untuk menangani input user.
7. **Aksi hapus**: Kita tambahkan fitur delete data lengkap dengan konfirmasi sebelum hapus.
8. **SweetAlert2**: Semua aksi seperti tambah, edit, dan hapus sekarang muncul notifikasi interaktif yang lebih modern dan user-friendly.

---

### 🎉 Hasil Akhir yang Sudah Jadi

✅ Aplikasi bisa digunakan untuk menambahkan, mengedit, dan menghapus data siswa <br>
✅ Tersedia notifikasi sukses saat data berhasil ditambah, diubah, atau dihapus <br>
✅ Ada popup konfirmasi sebelum menghapus data agar lebih aman <br>
✅ Seluruh fitur terhubung langsung dengan autentikasi Laravel Breeze <br>
✅ Tampilan sederhana, rapi, dan siap dikembangkan lebih lanjut

---