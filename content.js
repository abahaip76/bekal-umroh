/* Materi aplikasi. Setiap dalil punya status: "ok" = nomor sudah dicocokkan dengan sumber,
   "cek" = nomor hadits perlu dicocokkan lagi oleh peninjau sebelum rilis. */
window.MATERI = {
  checklist: [
    {id:"dok", judul:"Dokumen", butir:[
      "Paspor masih berlaku lama (umumnya minimal 6 bulan, pastikan ke travel)",
      "Visa umrah sudah terbit",
      "Tiket pesawat pergi dan pulang",
      "Bukti pesan hotel Makkah dan Madinah",
      "Bukti vaksin sesuai ketentuan terbaru (tanyakan ke travel)",
      "Fotokopi paspor dan visa, disimpan terpisah dari aslinya",
      "Foto paspor dan visa tersimpan di HP",
      "Pas foto cadangan",
      "Kartu perjalanan di aplikasi ini sudah diisi"]},
    {id:"trv", judul:"Travel dan perizinan", butir:[
      "Izin travel sudah dicek di kanal resmi pemerintah",
      "Jadwal dan rute penerbangan jelas",
      "Nama dan nomor pembimbing atau muthawif dicatat",
      "Nama dan alamat hotel dicatat",
      "Aplikasi Nusuk terpasang dan akunnya aktif",
      "Izin Raudhah sudah dipesan, atau sudah tahu cara memesannya"]},
    {id:"kpr", judul:"Koper dan perlengkapan", butir:[
      "Pakaian ihram: dua set kain untuk pria, pakaian longgar untuk wanita",
      "Sabuk ihram",
      "Sandal nyaman yang sudah dipakai latihan jalan",
      "Kantong sandal",
      "Obat rutin cukup untuk seluruh perjalanan, ditambah cadangan",
      "Obat umum: pereda nyeri, obat maag, obat diare, plester",
      "Masker dan pembersih tangan",
      "Botol minum",
      "Payung lipat dan kacamata hitam",
      "Pelembap bibir dan kulit tanpa wewangian",
      "Adaptor steker dan power bank",
      "Tas kecil untuk paspor dan HP"]},
    {id:"sht", judul:"Kesehatan", butir:[
      "Periksa ke dokter, terutama bila ada penyakit kronis",
      "Ringkasan riwayat penyakit dan daftar obat sudah ditulis",
      "Program latihan jalan sudah dimulai",
      "Alas kaki sudah diuji untuk jalan jauh",
      "Asuransi perjalanan, bila ada"]},
    {id:"kom", judul:"Komunikasi dan uang", butir:[
      "Paket roaming, eSIM, atau rencana beli SIM lokal",
      "Riyal tunai secukupnya",
      "Kartu debit sudah aktif untuk luar negeri",
      "Nomor darurat keluarga tersimpan",
      "Hotel sudah dipilih di menu Peta"]},
    {id:"ilm", judul:"Ilmu", butir:[
      "Seluruh langkah manasik sudah dibaca",
      "Talbiyah sudah hafal",
      "Larangan ihram sudah dipahami",
      "Sudah tahu apa yang dilakukan bila tersesat",
      "Sudah ikut manasik dari travel"]}
  ],

  manasik: [
    {id:"siap", judul:"Bersiap sebelum miqat", ringkas:"Mandi, memakai pakaian ihram",
     kerjakan:["Mandi dan bersihkan badan sebelum berihram.","Pria memakai dua helai kain ihram tanpa pakaian berjahit yang membentuk badan. Wanita memakai pakaian biasa yang menutup aurat.","Wewangian hanya dipakai di badan sebelum niat, tidak di kain ihram."],
     catatan:"Kalau naik pesawat langsung ke Jeddah, pakaian ihram dipakai sebelum pesawat melintasi miqat. Awak kabin biasanya mengumumkannya.",
     dalil:[{t:"Urutan ibadah Nabi dalam hadits Jabir", r:"HR. Muslim no. 1218", s:"ok"}]},
    {id:"niat", judul:"Niat dan talbiyah di miqat", ringkas:"Mulai ihram, lalu bertalbiyah",
     kerjakan:["Di miqat, niatkan umrah lalu ucapkan niatnya.","Perbanyak talbiyah sepanjang jalan. Pria mengeraskan suara, wanita cukup terdengar oleh dirinya."],
     baca:[
      {ar:"لَبَّيْكَ عُمْرَةً", lt:"Labbaika 'umratan", id:"Aku memenuhi panggilan-Mu untuk umrah.", lb:"Niat"},
      {ar:"لَبَّيْكَ اللَّهُمَّ لَبَّيْكَ، لَبَّيْكَ لَا شَرِيكَ لَكَ لَبَّيْكَ، إِنَّ الْحَمْدَ وَالنِّعْمَةَ لَكَ وَالْمُلْكَ، لَا شَرِيكَ لَكَ", lt:"Labbaik Allahumma labbaik, labbaika laa syariika laka labbaik, innal hamda wan ni'mata laka wal mulk, laa syariika lak", id:"Aku penuhi panggilan-Mu ya Allah, aku penuhi panggilan-Mu. Tiada sekutu bagi-Mu. Segala puji, nikmat, dan kerajaan milik-Mu, tiada sekutu bagi-Mu.", lb:"Talbiyah"},
      {ar:"اللَّهُمَّ مَحِلِّي حَيْثُ حَبَسْتَنِي", lt:"Allahumma mahillii haitsu habastanii", id:"Ya Allah, tempat tahallulku adalah di mana Engkau menahanku.", lb:"Syarat, bagi yang khawatir terhalang sakit"}],
     catatan:"Sejak niat, larangan ihram berlaku. Lihat kartu Larangan ihram di bawah daftar langkah.",
     dalil:[{t:"Lafaz talbiyah", r:"HR. Bukhari no. 1549, Muslim no. 1184", s:"ok"},{t:"Lafaz syarat (hadits Dhuba'ah)", r:"HR. Bukhari no. 5089, Muslim no. 1207", s:"cek"},{t:"Lafaz niat umrah", r:"Rujukan perlu dipastikan peninjau", s:"cek"}]},
    {id:"masuk", judul:"Masuk Masjidil Haram", ringkas:"Kaki kanan, doa masuk masjid",
     kerjakan:["Masuk dengan kaki kanan dan baca doa masuk masjid.","Tidak ada doa khusus yang sahih dari Nabi saat pertama melihat Ka'bah. Berdoalah dengan doa apa saja."],
     baca:[{ar:"اللَّهُمَّ افْتَحْ لِي أَبْوَابَ رَحْمَتِكَ", lt:"Allahummaftah lii abwaaba rahmatik", id:"Ya Allah, bukakanlah untukku pintu-pintu rahmat-Mu.", lb:"Doa masuk masjid"}],
     dalil:[{t:"Doa masuk masjid", r:"HR. Muslim no. 713", s:"cek"}]},
    {id:"tawaf", judul:"Tawaf tujuh putaran", ringkas:"Mulai dan selesai di Hajar Aswad",
     kerjakan:["Talbiyah berhenti saat mulai tawaf.","Pria membuka bahu kanan selama tawaf ini (idhtiba').","Mulai dari garis sejajar Hajar Aswad. Kalau tidak bisa menyentuhnya, cukup beri isyarat tangan sambil bertakbir. Tidak perlu berdesakan.","Ka'bah selalu di sebelah kiri. Pria berjalan cepat pada tiga putaran pertama bila lapang.","Usap Rukun Yamani bila mudah, tanpa mencium dan tanpa isyarat bila tidak terjangkau.","Di antara Rukun Yamani dan Hajar Aswad, baca doa di bawah. Di bagian lain, bebas berdzikir, berdoa, atau membaca Al-Qur'an."],
     baca:[
      {ar:"اللهُ أَكْبَرُ", lt:"Allahu akbar", id:"Allah Mahabesar.", lb:"Tiap sejajar Hajar Aswad"},
      {ar:"رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ", lt:"Rabbanaa aatinaa fid dunyaa hasanah wa fil aakhirati hasanah wa qinaa 'adzaaban naar", id:"Ya Rabb kami, berilah kami kebaikan di dunia dan kebaikan di akhirat, dan lindungilah kami dari azab neraka.", lb:"Antara Rukun Yamani dan Hajar Aswad"}],
     catatan:"Tidak ada doa khusus untuk tiap putaran. Buku doa putaran pertama sampai ketujuh tidak punya dasar riwayat dari Nabi. Boleh berhenti sejenak bila lelah, lalu lanjut dari tempat berhenti.",
     dalil:[{t:"Doa di antara dua rukun", r:"HR. Abu Dawud no. 1892, dinilai hasan oleh Al-Albani", s:"ok"},{t:"Takbir tiap sejajar Hajar Aswad", r:"HR. Bukhari", s:"cek"},{t:"Tidak ada doa khusus tiap putaran", r:"Majmu' Fatawa Ibnu Utsaimin 22/336", s:"ok"},{t:"Berjalan cepat tiga putaran pertama", r:"HR. Muslim no. 1218", s:"ok"}]},
    {id:"maqam", judul:"Salat dua rakaat setelah tawaf", ringkas:"Di belakang Maqam Ibrahim bila lapang",
     kerjakan:["Tutup kembali bahu kanan.","Menuju Maqam Ibrahim sambil membaca ayat di bawah.","Salat dua rakaat di belakangnya. Kalau padat, salat di mana saja di dalam masjid.","Rakaat pertama membaca Al-Kafirun, rakaat kedua Al-Ikhlas.","Minum air Zamzam dan berdoa sesuai hajat."],
     baca:[{ar:"وَاتَّخِذُوا مِنْ مَقَامِ إِبْرَاهِيمَ مُصَلًّى", lt:"Wattakhidzuu min maqaami Ibraahiima mushallaa", id:"Dan jadikanlah sebagian Maqam Ibrahim sebagai tempat salat. (QS. Al-Baqarah: 125)", lb:"Saat menuju Maqam Ibrahim"}],
     dalil:[{t:"Ayat, salat dua rakaat, dan surat yang dibaca", r:"HR. Muslim no. 1218", s:"ok"}]},
    {id:"sai", judul:"Sa'i tujuh kali", ringkas:"Dari Shafa, selesai di Marwah",
     kerjakan:["Saat mendekati Shafa untuk pertama kali, baca ayat dan kalimat di bawah. Ini hanya dibaca sekali di awal.","Naik ke Shafa, menghadap Ka'bah, angkat tangan, bertakbir, lalu baca dzikir di bawah tiga kali. Berdoalah di sela-selanya.","Berjalan ke Marwah. Pria berlari kecil di antara dua lampu hijau, wanita berjalan biasa.","Di Marwah lakukan seperti di Shafa, tanpa membaca ayat.","Shafa ke Marwah dihitung satu. Marwah ke Shafa dihitung dua. Hitungan ketujuh selesai di Marwah."],
     baca:[
      {ar:"إِنَّ الصَّفَا وَالْمَرْوَةَ مِنْ شَعَائِرِ اللَّهِ", lt:"Innash shafaa wal marwata min sya'aa-irillaah", id:"Sesungguhnya Shafa dan Marwah termasuk syiar Allah. (QS. Al-Baqarah: 158)", lb:"Saat mendekati Shafa, sekali saja"},
      {ar:"أَبْدَأُ بِمَا بَدَأَ اللَّهُ بِهِ", lt:"Abda-u bimaa bada-allaahu bih", id:"Aku memulai dengan apa yang Allah mulai.", lb:"Lanjutannya"},
      {ar:"لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ، لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ، أَنْجَزَ وَعْدَهُ، وَنَصَرَ عَبْدَهُ، وَهَزَمَ الْأَحْزَابَ وَحْدَهُ", lt:"Laa ilaaha illallaahu wahdahu laa syariika lah, lahul mulku wa lahul hamdu wa huwa 'alaa kulli syai-in qadiir. Laa ilaaha illallaahu wahdah, anjaza wa'dah, wa nashara 'abdah, wa hazamal ahzaaba wahdah", id:"Tiada sesembahan yang berhak disembah selain Allah semata, tiada sekutu bagi-Nya. Milik-Nya kerajaan dan pujian, dan Dia Mahakuasa atas segala sesuatu. Tiada sesembahan selain Allah semata, yang menepati janji-Nya, menolong hamba-Nya, dan mengalahkan pasukan sekutu sendirian.", lb:"Dzikir di Shafa dan Marwah, tiga kali"}],
     catatan:"Tidak ada doa khusus untuk tiap lintasan. Boleh istirahat di tengah sa'i, dan boleh memakai kursi roda bila tidak mampu berjalan.",
     dalil:[{t:"Seluruh tata cara di Shafa dan Marwah", r:"HR. Muslim no. 1218", s:"ok"}]},
    {id:"tahallul", judul:"Tahallul", ringkas:"Cukur atau memendekkan rambut",
     kerjakan:["Pria mencukur habis atau memendekkan seluruh rambut. Mencukur habis lebih utama.","Wanita memotong ujung rambut kira-kira seruas jari.","Setelah ini umrah selesai dan seluruh larangan ihram tidak berlaku lagi."],
     dalil:[{t:"Doa Nabi untuk yang mencukur habis", r:"HR. Bukhari no. 1727, Muslim no. 1301", s:"cek"},{t:"Wanita cukup memendekkan", r:"HR. Abu Dawud no. 1984", s:"cek"}]}
  ],

  larangan: {
    semua:["Memakai wewangian di badan atau pakaian","Memotong rambut atau kuku","Berburu hewan darat","Melamar, menikah, atau menikahkan","Bercumbu dan berhubungan suami istri"],
    pria:["Memakai pakaian berjahit yang membentuk badan, seperti kemeja, celana, atau kaus kaki","Menutup kepala dengan peci, topi, atau sejenisnya"],
    wanita:["Memakai cadar yang diikat di wajah","Memakai sarung tangan"]
  },

  doa: [
    {lb:"Naik kendaraan", ar:"سُبْحَانَ الَّذِي سَخَّرَ لَنَا هَذَا وَمَا كُنَّا لَهُ مُقْرِنِينَ وَإِنَّا إِلَى رَبِّنَا لَمُنْقَلِبُونَ", lt:"Subhaanalladzii sakhkhara lanaa haadzaa wa maa kunnaa lahu muqriniin, wa innaa ilaa rabbinaa lamunqalibuun", id:"Mahasuci Allah yang menundukkan kendaraan ini untuk kami, padahal kami tidak mampu menguasainya. Dan kepada Rabb kami, kami akan kembali. (QS. Az-Zukhruf: 13-14)", r:"HR. Muslim no. 1342", s:"cek"},
    {lb:"Singgah di suatu tempat", ar:"أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ", lt:"A'uudzu bikalimaatillaahit taammaati min syarri maa khalaq", id:"Aku berlindung dengan kalimat-kalimat Allah yang sempurna dari kejahatan makhluk-Nya.", r:"HR. Muslim no. 2708", s:"cek"},
    {lb:"Keluar masjid", ar:"اللَّهُمَّ إِنِّي أَسْأَلُكَ مِنْ فَضْلِكَ", lt:"Allahumma innii as-aluka min fadhlik", id:"Ya Allah, aku memohon karunia-Mu.", r:"HR. Muslim no. 713", s:"cek"},
    {lb:"Salam di makam Nabi dan dua sahabatnya", ar:"السَّلَامُ عَلَيْكَ يَا رَسُولَ اللَّهِ، السَّلَامُ عَلَيْكَ يَا أَبَا بَكْرٍ، السَّلَامُ عَلَيْكَ يَا عُمَرُ", lt:"Assalaamu 'alaika yaa Rasuulallaah, assalaamu 'alaika yaa Abaa Bakr, assalaamu 'alaika yaa 'Umar", id:"Salam untukmu wahai Rasulullah, salam untukmu wahai Abu Bakar, salam untukmu wahai Umar.", r:"Mengikuti amalan Ibnu Umar, riwayat sahabat", s:"cek"},
    {lb:"Ziarah kubur, misalnya di Baqi", ar:"السَّلَامُ عَلَيْكُمْ أَهْلَ الدِّيَارِ مِنَ الْمُؤْمِنِينَ وَالْمُسْلِمِينَ، وَإِنَّا إِنْ شَاءَ اللَّهُ بِكُمْ لَاحِقُونَ، نَسْأَلُ اللَّهَ لَنَا وَلَكُمُ الْعَافِيَةَ", lt:"Assalaamu 'alaikum ahlad diyaari minal mu'miniina wal muslimiin, wa innaa in syaa-allaahu bikum laahiquun, nas-alullaaha lanaa wa lakumul 'aafiyah", id:"Salam untuk kalian wahai penghuni kubur dari kaum mukminin dan muslimin. Kami insya Allah akan menyusul kalian. Kami memohon keselamatan kepada Allah untuk kami dan kalian.", r:"HR. Muslim no. 975", s:"cek"},
    {lb:"Pulang dari safar", ar:"آيِبُونَ تَائِبُونَ عَابِدُونَ لِرَبِّنَا حَامِدُونَ", lt:"Aayibuuna taa-ibuuna 'aabiduuna lirabbinaa haamiduun", id:"Kami kembali, bertobat, beribadah, dan memuji Rabb kami.", r:"HR. Bukhari no. 1797, Muslim no. 1344", s:"cek"}
  ],
  madinah: ["Ziarah ke Madinah bukan bagian dari umrah. Umrah sudah selesai dengan tahallul di Makkah.","Salat di Masjid Nabawi punya keutamaan besar. Niatkan safar ke Madinah untuk salat di masjidnya.","Raudhah hanya bisa dimasuki dengan izin di aplikasi Nusuk atau tasreh rombongan, dan gratis.","Salat di Masjid Quba dianjurkan. Datang dalam keadaan sudah berwudu dari penginapan."],

  /* Program latihan: susunan umum dari anjuran jalan kaki 30 menit sehari dan latihan
     penguatan serta keseimbangan sederhana. Belum ditinjau tenaga medis. */
  latihan: {
    gerakan: [
      {n:"Duduk-berdiri dari kursi", c:"Duduk di kursi kokoh, berdiri tegak tanpa bantuan tangan bila mampu, lalu duduk perlahan."},
      {n:"Jinjit berpegangan", c:"Pegang sandaran kursi atau tembok, angkat tumit setinggi mungkin, tahan sebentar, turunkan perlahan."},
      {n:"Angkat kaki ke samping", c:"Berdiri berpegangan, angkat satu kaki lurus ke samping, turunkan perlahan. Ganti kaki."},
      {n:"Berdiri satu kaki", c:"Berpegangan pada kursi, angkat satu kaki dan tahan. Lepas pegangan hanya bila sudah mantap."},
      {n:"Regang betis di tembok", c:"Dua tangan di tembok, satu kaki ke belakang dengan tumit menapak, condongkan badan. Tahan, lalu ganti kaki."}
    ],
    minggu: [
      {jalan:"15 sampai 20 menit, langkah santai", set:"1 set", rep:"8 kali tiap gerakan, tahan 10 detik untuk berdiri satu kaki dan regang betis", khusus:"Hari ke-7: jalan 30 menit tanpa terburu-buru."},
      {jalan:"25 sampai 30 menit", set:"2 set", rep:"8 sampai 10 kali, tahan 15 detik", khusus:"Hari ke-14: jalan 45 menit, boleh berhenti minum."},
      {jalan:"30 sampai 40 menit, selipkan berdiri diam 5 menit di tengah", set:"2 set", rep:"10 sampai 12 kali, tahan 20 detik", khusus:"Hari ke-21: jalan 60 menit dengan alas kaki yang akan dibawa."},
      {jalan:"40 sampai 45 menit, selipkan berdiri diam 10 menit", set:"2 sampai 3 set", rep:"12 kali, tahan 20 sampai 30 detik", khusus:"Hari ke-26: jalan panjang sesuai target dari hotel Anda. Tiga hari terakhir cukup jalan ringan 20 menit."}
    ],
    berhenti:["Nyeri atau rasa tertekan di dada","Sesak napas yang tidak biasa","Pusing, pandangan gelap, atau hampir pingsan","Nyeri sendi yang tajam atau bengkak"],
    konsul:["Penyakit jantung atau pernah serangan jantung","Tekanan darah tinggi yang belum terkontrol","Diabetes dengan luka di kaki atau kesemutan berat","Cedera lutut, pinggul, atau pinggang yang sedang kambuh","Usia 60 tahun ke atas dan sudah lama tidak berolahraga"]
  },

  darurat: [
    {judul:"Tersesat atau terpisah dari rombongan", langkah:["Berhenti dan menepi. Jangan terus berjalan sambil panik.","Lihat nomor pintu atau nomor toilet terdekat. Catat atau foto.","Buka menu Peta, cari nomor itu, lalu lihat arah ke hotel Anda.","Cari petugas berseragam atau pos jamaah tersesat, lalu tunjukkan Kartu perjalanan.","Kalau baterai hampir habis, tunggu di titik kumpul yang sudah disepakati rombongan."]},
    {judul:"Sakit atau sangat lelah", langkah:["Istirahat dulu. Ibadah boleh ditunda sampai badan pulih.","Minum air dan cari tempat teduh.","Hubungi pembimbing. Minta diantar ke pos kesehatan atau klinik terdekat.","Tunjukkan catatan riwayat penyakit dan obat di Kartu perjalanan.","Nyeri dada, sesak berat, atau pingsan adalah keadaan gawat. Minta tolong orang terdekat memanggil petugas saat itu juga."]},
    {judul:"Datang haid", langkah:["Niat ihram, talbiyah, dzikir, dan doa tetap boleh dikerjakan.","Tawaf menunggu sampai suci. Sa'i dikerjakan setelah tawaf.","Kalau jadwal pulang mepet, tanyakan jalan keluarnya kepada pembimbing sebelum mengambil keputusan sendiri."]},
    {judul:"Paspor atau barang hilang", langkah:["Segera kabari pembimbing dan pihak travel.","Tunjukkan fotokopi atau foto paspor yang tersimpan terpisah.","Travel akan mengurus laporan dan dokumen pengganti lewat perwakilan Indonesia."]},
    {judul:"HP hilang atau mati", langkah:["Kartu perjalanan versi cetak di tas kecil jadi pegangan. Cetak sebelum berangkat.","Kembali ke hotel dengan menunjukkan kartu itu kepada petugas atau sopir taksi resmi."]}
  ]
};
