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
      "Tas kecil untuk paspor dan HP",
      "Sajadah lipat dan tas serut kecil untuk sandal",
      "Botol semprot untuk wudu",
      "Peralatan mandi dan handuk kecil",
      "Plastik untuk baju kotor",
      "Charger HP dan kabelnya",
      "Kacamata baca atau minus, bila memakai",
      "Mushaf kecil dan buku doa dan dzikir",
      "Pulpen untuk mengisi formulir",
      "Pria: peci atau kopiah, dan tas selempang untuk dokumen",
      "Wanita: hijab segi empat, legging, kaus kaki, manset tangan, dan pembalut",
      "Pakaian hangat (jaket, sweater, syal, sarung tangan) bila berangkat di musim dingin",
      "Makanan kering dari rumah secukupnya, misalnya sambal kemasan atau abon"
    ]},
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
      "Hotel sudah dipilih di menu Peta",
      "Kartu debit atau kredit berlogo Visa atau Mastercard",
      "Sudah bergabung di grup WhatsApp rombongan",
      "Earphone, dan aplikasi yang diminta travel untuk mendengar penjelasan pembimbing"
    ]},
    {id:"ilm", judul:"Ilmu", butir:[
      "Seluruh langkah manasik sudah dibaca",
      "Talbiyah sudah hafal",
      "Larangan ihram sudah dipahami",
      "Sudah tahu apa yang dilakukan bila tersesat",
      "Sudah ikut manasik dari travel",
      "Sudah membaca halaman Koper dan bagasi serta Info perjalanan di aplikasi ini"
    ]}
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

  koper: {
    ihram: [
      "Umrah dulu (mendarat di Jeddah lalu langsung ke Makkah): pakaian ihram masuk tas kabin. Pakai di hotel transit atau bandara sebelum terbang, lalu niat di pesawat sebelum melewati miqat.",
      "Madinah dulu: pakaian ihram boleh masuk koper bagasi. Ihram dipakai di hotel Madinah dan niat di miqat Bir Ali (Dzul Hulaifah) saat bus menuju Makkah.",
      "Tanyakan rute rombongan Anda ke travel, karena ini menentukan di mana pakaian ihram disimpan."
    ],
    tas: [
      {judul:"Tas selempang", ket:"Selalu menempel di badan, termasuk saat di pesawat dan bandara", butir:["Paspor","KTP","ID card dari travel","Kartu ATM atau kartu kredit","Dompet berisi riyal","HP","Pulpen","Kacamata"]},
      {judul:"Tas kabin atau ransel", ket:"Umumnya maksimal 7 kg. Cek angka pasti di tiket Anda", butir:["Pakaian ihram, bila umrah dulu","Pakaian ganti untuk hari keberangkatan","Obat rutin dan vitamin","Power bank","Charger HP dan adaptor colokan kaki tiga","Buku doa dan dzikir","Botol semprot untuk wudu","Peralatan mandi ukuran kecil, cairan di bawah 100 ml","Kaus kaki dan jaket, dipakai di pesawat yang dingin","Plastik untuk baju kotor"]},
      {judul:"Koper bagasi", ket:"Umumnya 20 sampai 23 kg, tergantung maskapai dan paket", butir:["Pakaian ibadah secukupnya (gamis, baju koko)","Pakaian dalam dan pakaian tidur","Sajadah, botol lipat, dan tas serut","Sandal dan sepatu cadangan","Jaket atau sweater tambahan","Handuk kecil","Sisa peralatan mandi ukuran besar","Makanan kering dari rumah"]}
    ],
    pria: ["Kain ihram dua lembar dan sabuk ihram","Peci atau kopiah"],
    wanita: ["Pakaian longgar yang menutup aurat untuk ihram (tidak ada warna khusus), legging, dan kaus kaki","Hijab segi empat","Manset tangan","Pembalut, walau sedang tidak jadwal haid"],
    aturan: [
      ["Cairan di bawah 100 ml per wadah","ya","ya",""],
      ["Cairan di atas 100 ml","tidak","ya",""],
      ["Gunting kuku, pisau kecil, benda tajam","tidak","ya",""],
      ["Parfum atau semprotan ukuran besar","tidak","ya","Ingat, wewangian tidak dipakai selama ihram"],
      ["Power bank (maksimal 20.000 mAh)","ya","tidak","Dilarang di bagasi. Banyak maskapai juga melarang memakainya selama terbang, ikuti arahan awak kabin"],
      ["Uang dan perhiasan","ya","sebaiknya tidak","Rawan hilang bila di bagasi"],
      ["HP, laptop, tablet","ya","sebaiknya tidak","Mudah rusak dan rawan hilang"],
      ["Pakaian","ya","ya",""],
      ["Obat pribadi","ya","ya","Obat rutin selalu di kabin, bawa resep atau surat dokter"],
      ["Makanan kering yang tidak berbau","ya","ya",""],
      ["Air zamzam","tidak","tidak","Jangan dimasukkan ke koper. Biasanya disediakan atau dibeli dalam galon 5 liter di bandara saat pulang. Tanyakan ke travel"]
    ],
    tips: [
      "Beri tanda khusus pada koper, misalnya pita atau stiker nama, supaya mudah dikenali di antara koper rombongan yang seragam.",
      "Sebagian travel menjemput koper ke rumah beberapa hari sebelum berangkat. Sisakan pakaian untuk hari-hari itu dan untuk perjalanan ke bandara di tas kabin.",
      "Timbang koper di rumah. Kelebihan bagasi dikenai biaya di bandara.",
      "Sisakan ruang di koper untuk oleh-oleh saat pulang."
    ]
  },
  info: {
    waktu: "Waktu Arab Saudi 4 jam lebih lambat dari WIB, 5 jam dari WITA, dan 6 jam dari WIT. Saudi tidak memakai jam musim panas, jadi selisihnya tetap sepanjang tahun. Contoh: pukul 12.00 WIB sama dengan pukul 08.00 di Makkah.",
    uang: [
      "Mata uangnya riyal Saudi (SAR). Kursnya naik turun, jadi cek kurs hari itu sebelum menukar.",
      "Bawa riyal tunai secukupnya untuk jajan, sedekah, dan oleh-oleh. Toko besar menerima kartu berlogo Visa atau Mastercard.",
      "Simpan uang di dua tempat, sebagian di tas selempang dan sebagian di hotel."
    ],
    cuaca: [
      {musim:"Desember sampai Februari", bulan:[12,1,2], mk:"siang sekitar 30°C, malam sekitar 19°C", md:"siang sekitar 24°C, malam bisa 11 sampai 13°C", saran:"Madinah dingin di malam dan subuh hari. Bawa jaket, kaus kaki, syal, dan sarung tangan."},
      {musim:"Maret sampai Mei", bulan:[3,4,5], mk:"siang 33 sampai 40°C, malam 22 sampai 28°C", md:"siang 28 sampai 38°C, malam 16 sampai 25°C", saran:"Mulai panas. Bawa payung dan kacamata hitam, banyak minum."},
      {musim:"Juni sampai Agustus", bulan:[6,7,8], mk:"siang 42 sampai 45°C, malam sekitar 30°C", md:"siang sekitar 42°C, malam sekitar 29°C", saran:"Sangat panas. Hindari berjalan di luar pada siang hari, minum sedikit-sedikit tapi sering, dan pilih waktu tawaf malam hari."},
      {musim:"September sampai November", bulan:[9,10,11], mk:"siang 33 sampai 40°C, malam 23 sampai 29°C", md:"siang 28 sampai 39°C, malam 16 sampai 26°C", saran:"Panas di awal, mulai sejuk di akhir November. Siapkan jaket tipis."}
    ],
    hp: [
      "Paket roaming umroh, eSIM, atau rencana membeli SIM lokal setibanya di sana.",
      "Aplikasi Nusuk terpasang dan akunnya aktif. Izin masuk Raudhah dipesan lewat aplikasi ini atau lewat rombongan.",
      "Masuk grup WhatsApp rombongan. Pengumuman jadwal dan titik kumpul biasanya dikirim di sana.",
      "Earphone, ditambah aplikasi yang diminta travel (misalnya Zoom) bila pembimbing menjelaskan lewat HP saat di dalam masjid.",
      "Simpan nomor tour leader, muthawif, dan kantor travel. Isi juga di Kartu perjalanan."
    ],
    adab: [
      "Selalu kenakan ID card dari travel selama di Tanah Suci. Isinya nama, rombongan, dan nomor yang bisa dihubungi petugas.",
      "Pakai seragam rombongan saat berangkat dan pulang supaya mudah dikenali di bandara.",
      "Wanita yang ke Raudhah memakai pakaian longgar dan tertutup, tanpa wewangian. Rombongan biasanya menentukan warna seragamnya.",
      "Benda tajam, bahan mudah terbakar, dan yang sejenisnya dilarang dibawa ke kabin pesawat."
    ]
  },
  /* Miqat: lima tempat mulai ihram. Jarak ke Makkah dibulatkan karena sumber berbeda-beda. */
  miqat: {
    pengantar:"Miqat adalah batas tempat jamaah umrah mulai berihram. Pakaian ihram boleh dipakai lebih awal, tetapi niat diucapkan di miqat atau saat sejajar dengannya.",
    daftar:[
      {n:"Dzul Hulaifah (Bir Ali)", untuk:"Penduduk Madinah dan yang datang lewat Madinah", jarak:"±420–450 km", ket:"Jamaah yang ke Madinah lebih dulu berniat di sini saat bus menuju Makkah."},
      {n:"Al-Juhfah", untuk:"Dari arah Syam, Mesir, dan Afrika Utara", jarak:"±180–190 km", ket:"Kini jamaah biasanya berihram di Rabigh, sedikit sebelum Juhfah."},
      {n:"Qarnul Manazil (As-Sail al-Kabir)", untuk:"Dari Najd, Riyadh, dan Thaif", jarak:"±75–80 km", ket:"Miqat terdekat ke Makkah."},
      {n:"Yalamlam (As-Sa'diyah)", untuk:"Dari Yaman dan arah selatan", jarak:"±90–100 km", ket:"Pesawat dari Indonesia ke Jeddah biasanya melintasi garis sejajar miqat di sisi selatan atau timur. Awak kabin mengumumkan saatnya."},
      {n:"Dzatu 'Irq", untuk:"Dari Irak dan arah timur laut", jarak:"±90–110 km", ket:"Ditetapkan oleh Umar bin Khattab, dan ada riwayat dari Aisyah bahwa Nabi juga menetapkannya."}
    ],
    catatan:[
      "Jangan melewati miqat tanpa berihram bila berniat umrah. Bila terlanjur, segera tanyakan pembimbing.",
      "Orang yang tinggal di dalam batas miqat berihram dari tempat tinggalnya.",
      "Untuk umrah yang dimulai dari Makkah, jamaah keluar dulu ke tanah halal, misalnya Tan'im (Masjid Aisyah), lalu berniat di sana.",
      "Ada ulama yang membolehkan niat di Bandara Jeddah bagi jamaah yang mendarat di sana. Bila travel Anda memakai pendapat ini, ikuti arahan pembimbing."
    ],
    dalil:[
      {t:"Empat miqat yang ditetapkan Nabi", r:"HR. Bukhari no. 1524, Muslim no. 1181", s:"ok"},
      {t:"Dzatu 'Irq ditetapkan Umar", r:"HR. Bukhari no. 1531", s:"ok"},
      {t:"Dzatu 'Irq untuk penduduk Irak (riwayat Aisyah)", r:"HR. Abu Dawud no. 1739, An-Nasa'i", s:"ok"},
      {t:"Umrah Aisyah dari Tan'im", r:"HR. Bukhari no. 1784", s:"cek"}
    ]
  },

  /* Templat agenda perjalanan. Kegiatan umum tanpa nama travel; jamaah mengubahnya
     sesuai itinerary masing-masing. go: rute di aplikasi yang relevan. */
  agenda: {
    berangkat:[{t:"Kumpul di bandara sesuai jadwal travel"},{t:"Pastikan paspor, tiket, dan Kartu perjalanan ada di tas kecil", go:"kartu"}],
    tibaMd:[{t:"Tiba di Madinah, check-in hotel, lalu istirahat"},{t:"Salat pertama di Masjid Nabawi. Masuk dengan kaki kanan dan baca doa masuk masjid", go:"doa"}],
    tibaMkUdara:[{t:"Pakai ihram sebelum naik pesawat atau di pesawat", go:"manasik/siap"},{t:"Niat umrah dan talbiyah saat pesawat melintasi miqat (awak kabin mengumumkan)", go:"manasik/niat"},{t:"Tiba di Jeddah, lanjut ke Makkah, check-in hotel"},{t:"Umrah: tawaf, salat dua rakaat, sa'i, tahallul. Bila tiba larut, ikuti jadwal pembimbing", go:"manasik", umrah:true}],
    md:[{t:"Salat lima waktu berjamaah di Masjid Nabawi"}],
    mdZiarah:[{t:"Ziarah Madinah bersama rombongan (Quba, Uhud, dan lainnya sesuai jadwal travel)", go:"peta"}],
    mdRaudhah:[{t:"Masuk Raudhah sesuai jadwal izin di aplikasi Nusuk atau tasreh rombongan", go:"doa"}],
    mdAkhir:[{t:"Siapkan pakaian ihram dan sandal di tas kabin untuk besok", go:"koper"}],
    keMk:[{t:"Mandi sunnah dan pakai pakaian ihram di hotel", go:"manasik/siap"},{t:"Check-out, berangkat ke Makkah"},{t:"Niat umrah dan talbiyah di miqat Bir Ali", go:"manasik/niat"},{t:"Check-in hotel di Makkah, istirahat sejenak"},{t:"Umrah: tawaf, salat dua rakaat, sa'i, tahallul", go:"manasik", umrah:true}],
    mk:[{t:"Salat lima waktu berjamaah di Masjidil Haram"},{t:"Perbanyak tawaf sunnah di luar waktu padat"}],
    mkZiarah:[{t:"Ziarah Makkah bersama rombongan sesuai jadwal travel", go:"peta"}],
    wada:[{t:"Tawaf wada (perpisahan) sebelum meninggalkan Makkah. Ikuti arahan pembimbing", go:"manasik/tawaf"}],
    keMd:[{t:"Check-out, perjalanan ke Madinah"},{t:"Check-in hotel di Madinah, salat di Masjid Nabawi"}],
    pulang:[{t:"Check-out dan timbang ulang koper", go:"koper"},{t:"Menuju bandara, penerbangan pulang"}]
  },

  belanjaSaran:["Kurma","Sajadah","Tasbih","Peci atau kopiah","Mukena","Al-Qur'an saku","Kacang dan cokelat","Minyak wangi tanpa alkohol"],

  darurat: [
    {judul:"Tersesat atau terpisah dari rombongan", langkah:["Berhenti dan menepi. Jangan terus berjalan sambil panik.","Lihat nomor pintu atau nomor toilet terdekat. Catat atau foto.","Buka menu Peta, cari nomor itu, lalu lihat arah ke hotel Anda.","Telepon tour leader atau muthawif, atau tulis posisi Anda di grup WhatsApp rombongan.","Cari petugas berseragam atau pos jamaah tersesat, lalu tunjukkan Kartu perjalanan dan ID card dari travel.","Kalau baterai hampir habis, tunggu di titik kumpul yang sudah disepakati rombongan."]},
    {judul:"Sakit atau sangat lelah", langkah:["Istirahat dulu. Ibadah boleh ditunda sampai badan pulih.","Minum air dan cari tempat teduh.","Hubungi pembimbing. Minta diantar ke pos kesehatan atau klinik terdekat.","Tunjukkan catatan riwayat penyakit dan obat di Kartu perjalanan.","Nyeri dada, sesak berat, atau pingsan adalah keadaan gawat. Minta tolong orang terdekat memanggil petugas saat itu juga."]},
    {judul:"Datang haid", langkah:["Niat ihram, talbiyah, dzikir, dan doa tetap boleh dikerjakan.","Tawaf menunggu sampai suci. Sa'i dikerjakan setelah tawaf.","Kalau jadwal pulang mepet, tanyakan jalan keluarnya kepada pembimbing sebelum mengambil keputusan sendiri."]},
    {judul:"Paspor atau barang hilang", langkah:["Segera kabari pembimbing dan pihak travel.","Tunjukkan fotokopi atau foto paspor yang tersimpan terpisah.","Travel akan mengurus laporan dan dokumen pengganti lewat perwakilan Indonesia."]},
    {judul:"HP hilang atau mati", langkah:["Kartu perjalanan versi cetak di tas kecil jadi pegangan. Cetak sebelum berangkat.","Kembali ke hotel dengan menunjukkan kartu itu kepada petugas atau sopir taksi resmi."]}
  ]
};
