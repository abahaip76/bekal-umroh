# Bekal Umroh

Webapp panduan umroh berbahasa Indonesia: checklist persiapan, manasik langkah demi langkah dengan doa dan dalilnya, latihan fisik, kartu perjalanan, dan peta pintu, hotel, serta toilet di Masjidil Haram dan Masjid Nabawi. Gratis dipakai.

Aplikasi ini berupa file statis. Tidak ada server dan tidak ada proses build.

## Isi

| File | Isi |
|---|---|
| `index.html` | Aplikasi utama |
| `config.js` | Pengaturan: nama aplikasi, Client ID Google, tautan traktir, nama peninjau |
| `content.js` | Seluruh materi: checklist, manasik, doa, latihan, panduan darurat |
| `peta.html` | Peta 2D dan maket 3D |
| `data.js` | Data peta dari OpenStreetMap, diambil 16 November 2026 |
| `langkah-menuju-umrah.html` | Jadwal latihan 28 hari bergambar |

## Memasang

Unggah semua file ke hosting yang memakai HTTPS, atau aktifkan GitHub Pages untuk repo ini dari branch `main`. Aplikasi langsung bisa dipakai lewat tombol "Lanjut tanpa akun".

## Login Google

1. Buat project di Google Cloud Console dan atur layar persetujuan OAuth.
2. Buat kredensial OAuth client ID berjenis Web application.
3. Isi Authorized JavaScript origins dengan alamat situs, misalnya `https://namadomain.com`.
4. Tempel Client ID ke `config.js` pada baris `googleClientId`.

Login berjalan di browser pengguna. Nama, email, dan foto profil hanya disimpan di perangkat pengguna. Karena belum ada server, catatan tidak ikut pindah saat ganti perangkat.

## Status materi

- Materi ibadah belum ditinjau pembimbing atau ustadz. Dalil berstatus `cek` di `content.js` nomor haditsnya belum dicocokkan dengan sumbernya.
- Program latihan belum ditinjau dokter atau fisioterapis.
- Setelah ditinjau, isi `peninjauIbadah` dan `peninjauFisik` di `config.js`.

Aplikasi ini alat bantu persiapan. Ia tidak menggantikan pembimbing manasik, dokter, atau petugas di lapangan.

## Sumber data

Data peta © kontributor [OpenStreetMap](https://www.openstreetmap.org/copyright), lisensi ODbL. Posisi pintu, hotel, dan toilet mengikuti data itu dan bisa berbeda dari kondisi lapangan.

## Setelah mengubah config.js atau content.js

Naikkan angka `?v=` pada baris `<script src="config.js?v=...">` dan `<script src="content.js?v=...">` di `index.html`, supaya HP pengguna tidak memakai salinan lama yang tersimpan di browser.

## Logo dan ikon

Logo ada di `ikon/logo.svg` (vektor, bisa diperbesar tanpa pecah). Versi PNG untuk ikon HP dan tab browser ada di folder yang sama, dan `manifest.webmanifest` membuat aplikasi bisa dipasang ke layar utama HP dengan ikon ini.
