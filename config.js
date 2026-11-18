/* Pengaturan aplikasi. Ubah di sini, tidak perlu menyentuh file lain. */
window.APP_CONFIG = {
  name: "Bekal Umroh",
  tagline: "Persiapan, manasik, dan peta dalam satu aplikasi",
  /* Naikkan angka versi setiap kali ada pembaruan, lalu tambahkan catatannya di bagian paling atas riwayat. */
  versi: "1.2.0",
  riwayat: [
    {v: "1.2.0", tgl: "18 November 2026", isi: ["Statistik pengunjung anonim untuk pengembang (tanpa nama, email, atau cookie)"]},
    {v: "1.1.1", tgl: "18 November 2026", isi: ["Peta: Maysan Al Mashaer Hotel bisa dicari (di OpenStreetMap masih bernama Rayyana Ajyad Hotel)", "Pencarian peta lebih longgar: urutan kata dan tanda hubung tidak lagi berpengaruh"]},
    {v: "1.1.0", tgl: "18 November 2026", isi: ["Palet warna baru dan logo berlatar amber", "Kartu menu bergambar di Beranda dan Menu", "Ilustrasi latihan dengan tokoh laki-laki", "Halaman Koper dan bagasi serta Info perjalanan", "Nomor versi tampil di bawah nama aplikasi"]},
    {v: "1.0.0", tgl: "17 November 2026", isi: ["Rilis pertama: persiapan, manasik, latihan, doa, peta, kartu perjalanan, dan login Google"]}
  ],
  /* Isi dengan Client ID dari Google Cloud Console (jenis: Web application).
     Selama kosong, tombol Google tidak tampil dan pengguna masuk sebagai tamu. */
  googleClientId: "352862920731-21qfohbl9h0mjrnlhpe4r8a8s41280u7.apps.googleusercontent.com",
  /* Statistik pengunjung anonim lewat GoatCounter. Isi dengan kode akun GoatCounter,
     misalnya "bekalumroh" untuk bekalumroh.goatcounter.com. Selama kosong, tidak ada yang dihitung. */
  goatcounterKode: "",
  /* Halaman checkout Mayar untuk traktir. */
  mayarUrl: "https://abahdigital-36985.myr.id/pl/traktir-kopi-34630",
  /* Nama peninjau materi. Selama kosong, aplikasi menampilkan label "belum ditinjau". */
  peninjauIbadah: "",
  peninjauFisik: "",
  /* Ajakan traktir: muncul setelah sejumlah aksi, lalu jeda sekian hari. */
  traktirSetelahAksi: 12,
  traktirJedaHari: 7
};
