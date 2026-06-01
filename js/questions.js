// =====================================================================
//  BANK SOAL — Simulasi ASAT PKN / Pendidikan Pancasila Kelas 2 SD
//  Disusun sesuai 20 indikator kisi-kisi di README.md.
//  Materi mengacu pada Kurikulum Merdeka (Pendidikan Pancasila Kelas II).
//
//  Setiap indikator punya beberapa variasi soal. Saat ujian, aplikasi
//  mengambil 1 soal ACAK dari TIAP indikator -> selalu 20 soal, lengkap
//  sesuai kisi-kisi, tetapi variatif setiap kali dimainkan.
//
//  Struktur soal: { tag, emoji, text, options[4], answer(index benar), why }
//  INDICATORS = urutan 20 indikator (judul materi) sesuai README.
// =====================================================================

// Urutan 20 indikator persis kisi-kisi README.md.
// (No.11 "Persatuan" = pengertian; No.16 "Arti Persatuan" = makna/contoh.)
export const INDICATORS = [
  "Musyawarah",
  "Lambang Pancasila",
  "Nilai Pancasila",
  "Manfaat Pancasila",
  "Kewajiban di Rumah",
  "Peran Ayah",
  "Hak dan Kewajiban",
  "Kewajiban di Sekolah",
  "Hidup Harmonis",
  "Keberagaman",
  "Persatuan",
  "Peran Sekolah",
  "Toleransi",
  "Menjaga Lingkungan Sekolah",
  "Gotong Royong",
  "Arti Persatuan",
  "Kerja Kelompok",
  "Manfaat Persatuan",
  "Merawat Lingkungan",
  "Tujuan Persatuan",
];

export const QUESTIONS = [
  // ============ 1. MUSYAWARAH ============
  {
    tag: "Musyawarah", emoji: "💜",
    text: "Keluarga ingin memilih tempat liburan. Cara terbaik memutuskannya adalah…",
    options: ["Bertengkar", "Musyawarah bersama", "Ikut mau Ayah saja", "Diundi diam-diam"],
    answer: 1,
    why: "Hebat! Musyawarah artinya berunding bersama supaya semua senang. 💜",
  },
  {
    tag: "Musyawarah", emoji: "🗣️",
    text: "Saat teman sekelompok berbeda pendapat, sebaiknya diselesaikan dengan…",
    options: ["Marah-marah", "Musyawarah", "Diam saja", "Berkelahi"],
    answer: 1,
    why: "Betul! Perbedaan pendapat diselesaikan dengan musyawarah. 🗣️",
  },
  {
    tag: "Musyawarah", emoji: "🤝",
    text: "Hasil keputusan musyawarah sebaiknya kita…",
    options: ["Laksanakan bersama", "Lupakan", "Tolak", "Ejek"],
    answer: 0,
    why: "Tepat! Hasil musyawarah harus dilaksanakan bersama. 🤝",
  },
  {
    tag: "Musyawarah", emoji: "💬",
    text: "Sikap yang baik saat musyawarah adalah…",
    options: ["Memotong bicara teman", "Menghargai pendapat teman", "Memaksa pendapat sendiri", "Tidak mau dengar"],
    answer: 1,
    why: "Pintar! Saat musyawarah kita menghargai pendapat teman. 💬",
  },
  {
    tag: "Musyawarah", emoji: "✅",
    text: "Musyawarah dilakukan untuk mencapai kesepakatan bersama yang disebut…",
    options: ["Mufakat", "Pertengkaran", "Hadiah", "Lomba"],
    answer: 0,
    why: "Benar! Kesepakatan bersama dalam musyawarah disebut mufakat. ✅",
  },
  {
    tag: "Musyawarah", emoji: "🧑‍🏫",
    text: "Memilih ketua kelas sebaiknya dilakukan dengan cara…",
    options: ["Musyawarah", "Berebut", "Dipilih guru diam-diam", "Bertengkar"],
    answer: 0,
    why: "Tepat! Ketua kelas dipilih lewat musyawarah. 🧑‍🏫",
  },

  // ============ 2. LAMBANG PANCASILA ============
  {
    tag: "Lambang Pancasila", emoji: "🦅",
    text: "Semboyan yang tertulis pada pita burung Garuda adalah…",
    options: ["Bhinneka Tunggal Ika", "Maju Terus", "Rajin Pangkal Pandai", "Hemat Pangkal Kaya"],
    answer: 0,
    why: "Betul! 'Bhinneka Tunggal Ika' artinya berbeda-beda tetapi tetap satu. 🦅",
  },
  {
    tag: "Lambang Pancasila", emoji: "📜",
    text: "Bhinneka Tunggal Ika artinya…",
    options: ["Berbeda-beda tetapi tetap satu", "Hidup harus kaya", "Rajin belajar", "Selalu menang"],
    answer: 0,
    why: "Yes! Walau berbeda-beda, kita tetap satu Indonesia. 📜",
  },
  {
    tag: "Lambang Pancasila", emoji: "🇮🇩",
    text: "Lambang negara Indonesia adalah…",
    options: ["Burung Garuda Pancasila", "Harimau", "Naga", "Elang botak"],
    answer: 0,
    why: "Benar! Lambang negara kita adalah Garuda Pancasila. 🇮🇩",
  },
  {
    tag: "Lambang Pancasila", emoji: "🔢",
    text: "Pancasila memiliki sila sebanyak…",
    options: ["3 sila", "4 sila", "5 sila", "6 sila"],
    answer: 2,
    why: "Tepat! Pancasila terdiri dari 5 sila. ⭐",
  },
  {
    tag: "Lambang Pancasila", emoji: "📖",
    text: "Dasar negara Indonesia adalah…",
    options: ["Pancasila", "Lagu daerah", "Bendera", "Uang"],
    answer: 0,
    why: "Betul! Dasar negara kita adalah Pancasila. 📖",
  },
  {
    tag: "Lambang Pancasila", emoji: "⭐",
    text: "Lambang sila pertama Pancasila (Ketuhanan Yang Maha Esa) adalah…",
    options: ["Bintang", "Rantai", "Padi", "Banteng"],
    answer: 0,
    why: "Yes! Bintang melambangkan sila pertama. ⭐",
  },
  {
    tag: "Lambang Pancasila", emoji: "⛓️",
    text: "Lambang sila kedua (Kemanusiaan yang adil dan beradab) adalah…",
    options: ["Pohon", "Rantai", "Bintang", "Kapas"],
    answer: 1,
    why: "Benar! Rantai melambangkan sila kedua. ⛓️",
  },
  {
    tag: "Lambang Pancasila", emoji: "🌳",
    text: "Lambang sila ketiga (Persatuan Indonesia) adalah pohon…",
    options: ["Beringin", "Kelapa", "Mangga", "Pisang"],
    answer: 0,
    why: "Betul! Pohon beringin melambangkan persatuan. 🌳",
  },
  {
    tag: "Lambang Pancasila", emoji: "🐃",
    text: "Lambang sila keempat (Kerakyatan) adalah kepala…",
    options: ["Banteng", "Kuda", "Singa", "Kambing"],
    answer: 0,
    why: "Tepat! Kepala banteng melambangkan sila keempat. 🐃",
  },
  {
    tag: "Lambang Pancasila", emoji: "🌾",
    text: "Lambang sila kelima (Keadilan sosial) adalah…",
    options: ["Padi dan kapas", "Bintang", "Rantai", "Pohon beringin"],
    answer: 0,
    why: "Hebat! Padi dan kapas melambangkan keadilan. 🌾",
  },
  {
    tag: "Lambang Pancasila", emoji: "🙏",
    text: "Bunyi sila pertama Pancasila adalah…",
    options: ["Ketuhanan Yang Maha Esa", "Persatuan Indonesia", "Keadilan sosial", "Kemanusiaan yang adil"],
    answer: 0,
    why: "Benar! Sila pertama: Ketuhanan Yang Maha Esa. 🙏",
  },

  // ============ 3. NILAI PANCASILA (perilaku sesuai sila) ============
  {
    tag: "Nilai Pancasila", emoji: "🙏",
    text: "Berdoa sebelum belajar adalah pengamalan Pancasila sila ke…",
    options: ["Pertama", "Kedua", "Ketiga", "Kelima"],
    answer: 0,
    why: "Yes! Beribadah dan berdoa adalah sila pertama. 🙏",
  },
  {
    tag: "Nilai Pancasila", emoji: "🤗",
    text: "Menolong teman yang terjatuh adalah pengamalan sila ke…",
    options: ["Pertama", "Kedua", "Keempat", "Kelima"],
    answer: 1,
    why: "Benar! Saling menolong sesama = sila kedua (kemanusiaan). 🤗",
  },
  {
    tag: "Nilai Pancasila", emoji: "🗳️",
    text: "Memilih ketua kelas dengan musyawarah adalah pengamalan sila ke…",
    options: ["Pertama", "Kedua", "Keempat", "Kelima"],
    answer: 2,
    why: "Tepat! Musyawarah memilih pemimpin = sila keempat. 🗳️",
  },
  {
    tag: "Nilai Pancasila", emoji: "⚖️",
    text: "Berbagi dengan adil dan tidak pilih kasih adalah pengamalan sila ke…",
    options: ["Kelima", "Pertama", "Kedua", "Ketiga"],
    answer: 0,
    why: "Hebat! Berlaku adil kepada semua = sila kelima. ⚖️",
  },
  {
    tag: "Nilai Pancasila", emoji: "🕌",
    text: "Menghormati teman yang sedang beribadah adalah pengamalan sila ke…",
    options: ["Pertama", "Ketiga", "Keempat", "Kelima"],
    answer: 0,
    why: "Betul! Menghormati ibadah orang lain = sila pertama. 🕌",
  },
  {
    tag: "Nilai Pancasila", emoji: "🤸",
    text: "Bermain bersama semua teman tanpa membeda-bedakan adalah pengamalan sila ke…",
    options: ["Ketiga", "Pertama", "Kedua", "Kelima"],
    answer: 0,
    why: "Yes! Bersatu dan rukun dengan semua teman = sila ketiga. 🤸",
  },

  // ============ 4. MANFAAT PANCASILA ============
  {
    tag: "Manfaat Pancasila", emoji: "🕊️",
    text: "Jika semua orang mengamalkan Pancasila, kehidupan menjadi…",
    options: ["Ramai bertengkar", "Rukun dan damai", "Sepi sekali", "Banyak musuh"],
    answer: 1,
    why: "Benar! Pancasila membuat hidup rukun dan damai. 🕊️",
  },
  {
    tag: "Manfaat Pancasila", emoji: "🛡️",
    text: "Manfaat mengamalkan Pancasila bagi bangsa Indonesia adalah…",
    options: ["Mudah bertengkar", "Tetap bersatu", "Saling bermusuhan", "Mudah pecah"],
    answer: 1,
    why: "Tepat! Pancasila membuat bangsa tetap bersatu. 🛡️",
  },
  {
    tag: "Manfaat Pancasila", emoji: "😊",
    text: "Masyarakat yang mengamalkan Pancasila akan hidup dengan…",
    options: ["Aman dan tenteram", "Takut", "Ribut", "Kacau"],
    answer: 0,
    why: "Yes! Hidup jadi aman dan tenteram. 😊",
  },
  {
    tag: "Manfaat Pancasila", emoji: "🏫",
    text: "Mengamalkan Pancasila di sekolah membuat suasana belajar menjadi…",
    options: ["Nyaman dan menyenangkan", "Ribut", "Menakutkan", "Membosankan"],
    answer: 0,
    why: "Benar! Belajar jadi nyaman bila Pancasila diamalkan. 🏫",
  },
  {
    tag: "Manfaat Pancasila", emoji: "🤝",
    text: "Salah satu manfaat menerapkan Pancasila dalam pertemanan adalah…",
    options: ["Memiliki banyak teman dan rukun", "Sering bertengkar", "Dijauhi teman", "Suka bermusuhan"],
    answer: 0,
    why: "Tepat! Pancasila membuat kita rukun dan punya banyak teman. 🤝",
  },

  // ============ 5. KEWAJIBAN DI RUMAH ============
  {
    tag: "Kewajiban di Rumah", emoji: "🏠",
    text: "Salah satu kewajiban anak di rumah adalah…",
    options: ["Main terus", "Merapikan tempat tidur sendiri", "Menyuruh adik kerja", "Tidur seharian"],
    answer: 1,
    why: "Pintar! Merapikan tempat tidur itu tugas yang baik. 🛏️",
  },
  {
    tag: "Kewajiban di Rumah", emoji: "🧺",
    text: "Setelah selesai bermain, sebaiknya mainan kita…",
    options: ["Biarkan berserakan", "Rapikan kembali", "Buang semua", "Sembunyikan"],
    answer: 1,
    why: "Benar! Mainan dirapikan kembali setelah dipakai. 🧺",
  },
  {
    tag: "Kewajiban di Rumah", emoji: "📚",
    text: "Kewajiban anak setiap hari di rumah selain bermain adalah…",
    options: ["Belajar", "Tidur terus", "Menonton TV seharian", "Bermalas-malasan"],
    answer: 0,
    why: "Tepat! Belajar adalah kewajiban anak di rumah. 📚",
  },
  {
    tag: "Kewajiban di Rumah", emoji: "🤱",
    text: "Sikap anak yang baik kepada orang tua di rumah adalah…",
    options: ["Membantu pekerjaan rumah", "Membantah", "Malas-malasan", "Mengabaikan"],
    answer: 0,
    why: "Hebat! Anak yang baik suka membantu orang tua. 🤱",
  },
  {
    tag: "Kewajiban di Rumah", emoji: "👋",
    text: "Sebelum berangkat ke sekolah, sebaiknya anak…",
    options: ["Berpamitan kepada orang tua", "Pergi diam-diam", "Marah-marah", "Membanting pintu"],
    answer: 0,
    why: "Benar! Kita berpamitan dulu kepada orang tua. 👋",
  },

  // ============ 6. PERAN AYAH ============
  {
    tag: "Peran Ayah", emoji: "👨",
    text: "Tugas utama seorang ayah dalam keluarga biasanya…",
    options: ["Mencari nafkah", "Bermain game", "Tidur saja", "Jalan-jalan terus"],
    answer: 0,
    why: "Tepat! Ayah bekerja mencari nafkah untuk keluarga. 👨‍👧",
  },
  {
    tag: "Peran Ayah", emoji: "👨‍👩‍👧",
    text: "Ayah dalam keluarga disebut sebagai…",
    options: ["Kepala keluarga", "Tamu", "Tetangga", "Pembantu"],
    answer: 0,
    why: "Benar! Ayah adalah kepala keluarga. 👨‍👩‍👧",
  },
  {
    tag: "Peran Ayah", emoji: "🛡️",
    text: "Selain bekerja, ayah juga bertugas…",
    options: ["Melindungi keluarga", "Membiarkan anak", "Bermalas-malasan", "Pergi terus"],
    answer: 0,
    why: "Tepat! Ayah melindungi dan membimbing keluarga. 🛡️",
  },
  {
    tag: "Peran Ayah", emoji: "❤️",
    text: "Sikap kita sebagai anak kepada ayah seharusnya…",
    options: ["Menghormati dan menyayangi", "Membentak", "Tidak peduli", "Melawan"],
    answer: 0,
    why: "Benar! Kita harus menghormati dan menyayangi ayah. ❤️",
  },

  // ============ 7. HAK DAN KEWAJIBAN ============
  {
    tag: "Hak dan Kewajiban", emoji: "⚖️",
    text: "Jika hak dan kewajiban dilakukan seimbang, hidup menjadi…",
    options: ["Tertib dan bahagia", "Berantakan", "Sedih", "Sendirian"],
    answer: 0,
    why: "Betul! Seimbang itu membuat hidup tertib dan bahagia. ⚖️",
  },
  {
    tag: "Hak dan Kewajiban", emoji: "🎁",
    text: "Sesuatu yang berhak kita terima disebut…",
    options: ["Hak", "Kewajiban", "Hukuman", "Larangan"],
    answer: 0,
    why: "Benar! Hak adalah sesuatu yang berhak kita terima. 🎁",
  },
  {
    tag: "Hak dan Kewajiban", emoji: "✅",
    text: "Sesuatu yang harus kita kerjakan disebut…",
    options: ["Kewajiban", "Hak", "Hadiah", "Mainan"],
    answer: 0,
    why: "Tepat! Kewajiban adalah hal yang harus kita lakukan. ✅",
  },
  {
    tag: "Hak dan Kewajiban", emoji: "❤️",
    text: "Contoh hak anak di rumah adalah…",
    options: ["Mendapat kasih sayang", "Mencari nafkah", "Membayar listrik", "Memasak sendiri"],
    answer: 0,
    why: "Yes! Anak berhak mendapat kasih sayang. ❤️",
  },
  {
    tag: "Hak dan Kewajiban", emoji: "📒",
    text: "Contoh kewajiban anak adalah…",
    options: ["Belajar dengan giat", "Mendapat uang jajan", "Mendapat mainan", "Mendapat hadiah"],
    answer: 0,
    why: "Benar! Belajar dengan giat adalah kewajiban anak. 📒",
  },

  // ============ 8. KEWAJIBAN DI SEKOLAH ============
  {
    tag: "Kewajiban di Sekolah", emoji: "🏫",
    text: "Menjaga kebersihan sekolah dilakukan dengan…",
    options: ["Membuang sampah sembarangan", "Mencoret tembok", "Membuang sampah di tempatnya", "Membiarkan kotor"],
    answer: 2,
    why: "Hore! Buang sampah pada tempatnya membuat sekolah bersih. 🧹",
  },
  {
    tag: "Kewajiban di Sekolah", emoji: "⏰",
    text: "Kewajiban siswa saat berangkat ke sekolah adalah…",
    options: ["Datang tepat waktu", "Datang terlambat", "Bolos", "Pulang lagi"],
    answer: 0,
    why: "Benar! Siswa wajib datang tepat waktu. ⏰",
  },
  {
    tag: "Kewajiban di Sekolah", emoji: "👂",
    text: "Saat guru menjelaskan pelajaran, kita harus…",
    options: ["Mengobrol", "Memperhatikan", "Tidur", "Bermain"],
    answer: 1,
    why: "Tepat! Kita memperhatikan saat guru mengajar. 👂",
  },
  {
    tag: "Kewajiban di Sekolah", emoji: "📝",
    text: "Kewajiban siswa terhadap tugas dari guru adalah…",
    options: ["Mengerjakannya", "Membuangnya", "Mengabaikannya", "Menyontek"],
    answer: 0,
    why: "Benar! Tugas dari guru wajib dikerjakan. 📝",
  },
  {
    tag: "Kewajiban di Sekolah", emoji: "📏",
    text: "Terhadap tata tertib sekolah, siswa wajib…",
    options: ["Menaatinya", "Melanggarnya", "Mengabaikannya", "Menertawakannya"],
    answer: 0,
    why: "Tepat! Tata tertib sekolah harus ditaati. 📏",
  },

  // ============ 9. HIDUP HARMONIS ============
  {
    tag: "Hidup Harmonis", emoji: "🤝",
    text: "Kalau semua mematuhi hak dan kewajiban, suasana menjadi…",
    options: ["Harmonis dan rukun", "Penuh marah", "Berisik", "Menakutkan"],
    answer: 0,
    why: "Yes! Mematuhi aturan membuat hidup harmonis. 🤝",
  },
  {
    tag: "Hidup Harmonis", emoji: "🏡",
    text: "Agar keluarga hidup harmonis, anggota keluarga harus saling…",
    options: ["Menyayangi", "Membenci", "Bertengkar", "Cuek"],
    answer: 0,
    why: "Betul! Saling menyayangi membuat keluarga harmonis. 🏡",
  },
  {
    tag: "Hidup Harmonis", emoji: "🏘️",
    text: "Agar hidup rukun dengan tetangga, kita sebaiknya…",
    options: ["Saling membantu", "Saling mengejek", "Ribut", "Tidak menyapa"],
    answer: 0,
    why: "Tepat! Saling membantu membuat tetangga rukun. 🏘️",
  },
  {
    tag: "Hidup Harmonis", emoji: "😌",
    text: "Manfaat hidup rukun dan harmonis adalah suasana menjadi…",
    options: ["Tenang dan nyaman", "Tegang", "Menakutkan", "Sedih"],
    answer: 0,
    why: "Benar! Hidup harmonis membuat suasana tenang dan nyaman. 😌",
  },

  // ============ 10. KEBERAGAMAN ============
  {
    tag: "Keberagaman", emoji: "🌈",
    text: "Saat punya teman yang berbeda-beda, sebaiknya kita…",
    options: ["Mengejek", "Saling menghargai", "Menjauhi", "Memilih-milih teman"],
    answer: 1,
    why: "Benar! Menghargai keberagaman membuat kita rukun. 🌈",
  },
  {
    tag: "Keberagaman", emoji: "🧑‍🤝‍🧑",
    text: "Terhadap teman yang berbeda suku dan agama, kita harus…",
    options: ["Tetap berteman baik", "Memusuhi", "Menjauhi", "Mengejek"],
    answer: 0,
    why: "Tepat! Kita tetap berteman baik walau berbeda. 🧑‍🤝‍🧑",
  },
  {
    tag: "Keberagaman", emoji: "🗺️",
    text: "Indonesia memiliki banyak suku dan budaya, maka kita harus…",
    options: ["Saling menghormati", "Saling mengejek", "Bertengkar", "Memilih satu saja"],
    answer: 0,
    why: "Benar! Keberagaman Indonesia harus kita hormati. 🗺️",
  },
  {
    tag: "Keberagaman", emoji: "😀",
    text: "Manfaat menghargai keberagaman teman adalah…",
    options: ["Hidup rukun", "Banyak musuh", "Sering bertengkar", "Dijauhi teman"],
    answer: 0,
    why: "Yes! Menghargai perbedaan membuat hidup rukun. 😀",
  },
  {
    tag: "Keberagaman", emoji: "👧",
    text: "Keberagaman fisik teman dapat dilihat dari…",
    options: ["Warna kulit dan tinggi badan", "Nilai ujian", "Jumlah mainan", "Merek tas"],
    answer: 0,
    why: "Benar! Keberagaman fisik terlihat dari kulit, rambut, dan tinggi badan. 👧",
  },

  // ============ 11. PERSATUAN (pengertian) ============
  {
    tag: "Persatuan", emoji: "🧩",
    text: "Persatuan artinya…",
    options: ["Bercerai-berai", "Bersatu menjadi satu", "Saling menjauh", "Sendiri-sendiri"],
    answer: 1,
    why: "Tepat! Persatuan berarti bersatu menjadi satu. 🧩",
  },
  {
    tag: "Persatuan", emoji: "💪",
    text: "Lengkapi: 'Bersatu kita teguh, bercerai kita…'",
    options: ["Runtuh", "Kuat", "Senang", "Kaya"],
    answer: 0,
    why: "Benar! Bersatu kita teguh, bercerai kita runtuh. 💪",
  },
  {
    tag: "Persatuan", emoji: "🤝",
    text: "Dengan bersatu, kita menjadi…",
    options: ["Lemah", "Kuat", "Takut", "Sendiri"],
    answer: 1,
    why: "Tepat! Bersatu membuat kita kuat. 🤝",
  },
  {
    tag: "Persatuan", emoji: "🧷",
    text: "Lawan dari kata bersatu adalah…",
    options: ["Bercerai-berai", "Berkumpul", "Bersama", "Rukun"],
    answer: 0,
    why: "Benar! Lawan bersatu adalah bercerai-berai. 🧷",
  },

  // ============ 12. PERAN SEKOLAH ============
  {
    tag: "Peran Sekolah", emoji: "📚",
    text: "Di sekolah kita diajarkan untuk…",
    options: ["Bertengkar", "Hidup bersatu dan saling menghormati", "Menang sendiri", "Pelit berbagi"],
    answer: 1,
    why: "Hebat! Sekolah mengajarkan hidup bersatu. 📚",
  },
  {
    tag: "Peran Sekolah", emoji: "🧑‍🏫",
    text: "Di sekolah sebaiknya kita berteman dengan…",
    options: ["Semua teman", "Yang kaya saja", "Yang sesuku saja", "Tidak ada"],
    answer: 0,
    why: "Benar! Kita berteman dengan semua tanpa membeda-bedakan. 🧑‍🏫",
  },
  {
    tag: "Peran Sekolah", emoji: "🚩",
    text: "Upacara bendera di sekolah memupuk rasa…",
    options: ["Cinta tanah air", "Malas", "Takut", "Marah"],
    answer: 0,
    why: "Tepat! Upacara menumbuhkan rasa cinta tanah air dan persatuan. 🚩",
  },
  {
    tag: "Peran Sekolah", emoji: "🏫",
    text: "Belajar bersama di sekolah melatih kita untuk hidup…",
    options: ["Rukun dan bersatu", "Bermusuhan", "Sendiri-sendiri", "Sombong"],
    answer: 0,
    why: "Benar! Sekolah melatih kita hidup rukun dan bersatu. 🏫",
  },

  // ============ 13. TOLERANSI ============
  {
    tag: "Toleransi", emoji: "💞",
    text: "Saat teman beribadah dengan cara berbeda, sikap kita…",
    options: ["Mengganggu", "Menghormati", "Menertawakan", "Memaksa ikut kita"],
    answer: 1,
    why: "Betul! Menghormati teman = toleransi yang baik. 💞",
  },
  {
    tag: "Toleransi", emoji: "🌙",
    text: "Saat teman sedang berpuasa, sebaiknya kita…",
    options: ["Tidak mengganggunya", "Mengejeknya", "Memaksanya makan", "Menakutinya"],
    answer: 0,
    why: "Tepat! Kita menghormati teman yang berpuasa. 🌙",
  },
  {
    tag: "Toleransi", emoji: "🤲",
    text: "Toleransi artinya sikap saling…",
    options: ["Menghormati perbedaan", "Bermusuhan", "Mengejek", "Memaksa"],
    answer: 0,
    why: "Benar! Toleransi = saling menghormati perbedaan. 🤲",
  },
  {
    tag: "Toleransi", emoji: "🎉",
    text: "Saat teman merayakan hari besar agamanya, kita sebaiknya…",
    options: ["Menghormatinya", "Mengganggunya", "Marah", "Mengejeknya"],
    answer: 0,
    why: "Tepat! Kita menghormati teman yang merayakan hari besarnya. 🎉",
  },
  {
    tag: "Toleransi", emoji: "🕊️",
    text: "Menerima dan menghargai perbedaan disebut sikap…",
    options: ["Toleransi", "Sombong", "Egois", "Iri"],
    answer: 0,
    why: "Benar! Menerima perbedaan disebut toleransi. 🕊️",
  },

  // ============ 14. MENJAGA LINGKUNGAN SEKOLAH ============
  {
    tag: "Menjaga Lingkungan Sekolah", emoji: "🌱",
    text: "Cara menjaga lingkungan sekolah misalnya…",
    options: ["Menginjak tanaman", "Piket dan menyiram tanaman", "Membuang sampah di laci", "Mencoret meja"],
    answer: 1,
    why: "Pintar! Piket dan merawat tanaman menjaga sekolah. 🌱",
  },
  {
    tag: "Menjaga Lingkungan Sekolah", emoji: "🚮",
    text: "Saat melihat sampah di lantai kelas, sebaiknya kita…",
    options: ["Membiarkannya", "Memungut dan membuangnya", "Menendangnya", "Menutupinya"],
    answer: 1,
    why: "Hebat! Sampah dipungut lalu dibuang ke tempatnya. 🚮",
  },
  {
    tag: "Menjaga Lingkungan Sekolah", emoji: "🧽",
    text: "Agar kelas selalu bersih, setiap hari kita perlu…",
    options: ["Piket menyapu", "Membiarkan kotor", "Mencoret papan", "Membuang sampah sembarangan"],
    answer: 0,
    why: "Benar! Piket menyapu membuat kelas bersih. 🧽",
  },
  {
    tag: "Menjaga Lingkungan Sekolah", emoji: "🗑️",
    text: "Sampah di sekolah sebaiknya dibuang ke…",
    options: ["Tempat sampah", "Kolong meja", "Halaman", "Selokan"],
    answer: 0,
    why: "Tepat! Sampah dibuang ke tempat sampah. 🗑️",
  },

  // ============ 15. GOTONG ROYONG ============
  {
    tag: "Gotong Royong", emoji: "🧹",
    text: "Manfaat gotong royong adalah pekerjaan menjadi…",
    options: ["Lebih cepat selesai", "Makin berat", "Tidak selesai", "Membosankan"],
    answer: 0,
    why: "Yes! Gotong royong membuat pekerjaan cepat selesai. 🧹",
  },
  {
    tag: "Gotong Royong", emoji: "👷",
    text: "Membersihkan kelas bersama-sama disebut…",
    options: ["Gotong royong", "Bermain", "Bertengkar", "Belajar sendiri"],
    answer: 0,
    why: "Benar! Bekerja bersama-sama disebut gotong royong. 👷",
  },
  {
    tag: "Gotong Royong", emoji: "🪶",
    text: "Pekerjaan berat jika dikerjakan bergotong royong akan terasa…",
    options: ["Ringan", "Makin berat", "Sulit", "Lama sekali"],
    answer: 0,
    why: "Tepat! Gotong royong membuat pekerjaan berat jadi ringan. 🪶",
  },
  {
    tag: "Gotong Royong", emoji: "🤝",
    text: "Gotong royong berarti mengerjakan sesuatu secara…",
    options: ["Bersama-sama", "Sendiri", "Diam-diam", "Berebut"],
    answer: 0,
    why: "Benar! Gotong royong = bekerja bersama-sama. 🤝",
  },

  // ============ 16. ARTI PERSATUAN (makna & contoh) ============
  {
    tag: "Arti Persatuan", emoji: "🌳",
    text: "Simbol persatuan dalam Pancasila adalah pohon…",
    options: ["Beringin", "Mangga", "Kelapa", "Jati"],
    answer: 0,
    why: "Benar! Pohon beringin adalah simbol persatuan. 🌳",
  },
  {
    tag: "Arti Persatuan", emoji: "🧒",
    text: "Contoh sikap persatuan di kelas adalah…",
    options: ["Bermain dengan semua teman", "Bertengkar", "Memilih-milih teman", "Mengejek teman"],
    answer: 0,
    why: "Tepat! Bermain dengan semua teman menunjukkan persatuan. 🧒",
  },
  {
    tag: "Arti Persatuan", emoji: "🕊️",
    text: "Persatuan ditunjukkan dengan hidup…",
    options: ["Rukun dan damai bersama", "Bermusuhan", "Sendiri-sendiri", "Saling iri"],
    answer: 0,
    why: "Benar! Persatuan berarti hidup rukun dan damai bersama. 🕊️",
  },
  {
    tag: "Arti Persatuan", emoji: "🚫",
    text: "Untuk menjaga persatuan, kita tidak boleh…",
    options: ["Bertengkar dan bermusuhan", "Saling membantu", "Hidup rukun", "Bekerja sama"],
    answer: 0,
    why: "Tepat! Menjaga persatuan berarti tidak bertengkar. 🚫",
  },

  // ============ 17. KERJA KELOMPOK ============
  {
    tag: "Kerja Kelompok", emoji: "👫",
    text: "Saat mengerjakan tugas kelompok kita harus…",
    options: ["Bekerja sama", "Diam saja", "Main sendiri", "Menyontek teman"],
    answer: 0,
    why: "Hore! Kerja kelompok harus bekerja sama. 👫",
  },
  {
    tag: "Kerja Kelompok", emoji: "🙋",
    text: "Saat teman sekelompok kesulitan, sebaiknya kita…",
    options: ["Membantunya", "Menertawakannya", "Membiarkannya", "Memarahinya"],
    answer: 0,
    why: "Benar! Teman yang kesulitan kita bantu. 🙋",
  },
  {
    tag: "Kerja Kelompok", emoji: "🚫",
    text: "Dalam kerja kelompok, sikap yang tidak boleh dilakukan adalah…",
    options: ["Menang sendiri", "Berbagi tugas", "Mendengarkan teman", "Bekerja sama"],
    answer: 0,
    why: "Tepat! Dalam kelompok kita tidak boleh menang sendiri. 🚫",
  },
  {
    tag: "Kerja Kelompok", emoji: "📋",
    text: "Agar tugas kelompok cepat selesai, pekerjaan sebaiknya…",
    options: ["Dibagi bersama", "Dikerjakan satu orang", "Dibiarkan", "Diberikan ke guru"],
    answer: 0,
    why: "Benar! Tugas dibagi bersama agar cepat selesai. 📋",
  },

  // ============ 18. MANFAAT PERSATUAN ============
  {
    tag: "Manfaat Persatuan", emoji: "💪",
    text: "Manfaat menjaga persatuan adalah negara menjadi…",
    options: ["Lemah", "Kuat dan aman", "Mudah pecah", "Sepi"],
    answer: 1,
    why: "Tepat! Bersatu membuat negara kuat dan aman. 💪",
  },
  {
    tag: "Manfaat Persatuan", emoji: "🔗",
    text: "Jika rakyat bersatu, bangsa kita tidak akan mudah…",
    options: ["Dipecah belah", "Bahagia", "Maju", "Kuat"],
    answer: 0,
    why: "Benar! Bersatu membuat kita tidak mudah dipecah belah. 🔗",
  },
  {
    tag: "Manfaat Persatuan", emoji: "🏗️",
    text: "Dengan persatuan, pekerjaan bersama menjadi lebih…",
    options: ["Mudah", "Sulit", "Lama", "Berat"],
    answer: 0,
    why: "Tepat! Persatuan membuat pekerjaan lebih mudah. 🏗️",
  },
  {
    tag: "Manfaat Persatuan", emoji: "🏫",
    text: "Manfaat menjaga persatuan di sekolah adalah belajar menjadi…",
    options: ["Nyaman dan menyenangkan", "Menegangkan", "Menakutkan", "Membosankan"],
    answer: 0,
    why: "Benar! Persatuan membuat suasana belajar nyaman. 🏫",
  },

  // ============ 19. MERAWAT LINGKUNGAN ============
  {
    tag: "Merawat Lingkungan", emoji: "✏️",
    text: "Sikap yang benar terhadap dinding sekolah adalah…",
    options: ["Mencoret-coret", "Menjaganya tetap bersih", "Menempel permen karet", "Memukulnya"],
    answer: 1,
    why: "Benar! Dinding sekolah harus dijaga bersih. ✨",
  },
  {
    tag: "Merawat Lingkungan", emoji: "💧",
    text: "Agar tanaman di sekolah tetap subur, kita harus…",
    options: ["Menyiramnya", "Mencabutnya", "Menginjaknya", "Membiarkannya kering"],
    answer: 0,
    why: "Tepat! Tanaman disiram agar tetap subur. 💧",
  },
  {
    tag: "Merawat Lingkungan", emoji: "🌳",
    text: "Membuang sampah sembarangan membuat lingkungan menjadi…",
    options: ["Kotor", "Bersih", "Indah", "Sehat"],
    answer: 0,
    why: "Benar! Maka kita tidak boleh membuang sampah sembarangan. 🌳",
  },
  {
    tag: "Merawat Lingkungan", emoji: "🌼",
    text: "Lingkungan sekolah yang dirawat dengan baik akan menjadi…",
    options: ["Sehat dan nyaman", "Kotor", "Bau", "Berantakan"],
    answer: 0,
    why: "Tepat! Lingkungan yang dirawat menjadi sehat dan nyaman. 🌼",
  },

  // ============ 20. TUJUAN PERSATUAN ============
  {
    tag: "Tujuan Persatuan", emoji: "🇮🇩",
    text: "Tujuan persatuan adalah supaya kita…",
    options: ["Mudah dipecah belah", "Hidup rukun dan tidak mudah dipecah", "Saling bermusuhan", "Berpisah"],
    answer: 1,
    why: "Hebat sekali! Persatuan membuat kita rukun dan kuat. 🇮🇩",
  },
  {
    tag: "Tujuan Persatuan", emoji: "🌟",
    text: "Dengan bersatu, cita-cita bangsa akan lebih mudah…",
    options: ["Tercapai", "Gagal", "Hilang", "Terlupakan"],
    answer: 0,
    why: "Benar! Bersatu membuat cita-cita bangsa mudah tercapai. 🌟",
  },
  {
    tag: "Tujuan Persatuan", emoji: "☮️",
    text: "Persatuan bertujuan agar negara menjadi…",
    options: ["Aman dan damai", "Penuh perang", "Berantakan", "Terpecah"],
    answer: 0,
    why: "Tepat! Tujuan persatuan adalah negara aman dan damai. ☮️",
  },
  {
    tag: "Tujuan Persatuan", emoji: "😊",
    text: "Dengan menjaga persatuan, hidup bersama menjadi lebih…",
    options: ["Tenang dan bahagia", "Menakutkan", "Susah", "Ribut"],
    answer: 0,
    why: "Benar! Persatuan membuat hidup tenang dan bahagia. 😊",
  },

  // =====================================================================
  //  TAMBAHAN VARIASI — agar tiap indikator punya minimal 6 soal.
  //  (Posisi tidak memengaruhi ujian karena soal dipilih berdasarkan tag.)
  // =====================================================================

  // + Manfaat Pancasila
  {
    tag: "Manfaat Pancasila", emoji: "🤝",
    text: "Mengamalkan Pancasila membuat kita suka saling…",
    options: ["Tolong-menolong", "Bermusuhan", "Mengejek", "Bertengkar"],
    answer: 0,
    why: "Benar! Pancasila membuat kita saling tolong-menolong. 🤝",
  },
  // + Kewajiban di Rumah
  {
    tag: "Kewajiban di Rumah", emoji: "🧼",
    text: "Sebelum makan di rumah, sebaiknya kita…",
    options: ["Mencuci tangan", "Bermain HP", "Tidur dulu", "Berlari-lari"],
    answer: 0,
    why: "Tepat! Mencuci tangan sebelum makan menjaga kebersihan. 🧼",
  },
  // + Hak dan Kewajiban
  {
    tag: "Hak dan Kewajiban", emoji: "💪",
    text: "Kewajiban sebaiknya kita lakukan dengan…",
    options: ["Penuh tanggung jawab", "Terpaksa", "Malas", "Marah-marah"],
    answer: 0,
    why: "Benar! Kewajiban dikerjakan dengan penuh tanggung jawab. 💪",
  },
  // + Kewajiban di Sekolah
  {
    tag: "Kewajiban di Sekolah", emoji: "👕",
    text: "Saat bersekolah, kita wajib memakai seragam dengan…",
    options: ["Rapi", "Kotor", "Sobek", "Terbalik"],
    answer: 0,
    why: "Tepat! Seragam dipakai dengan rapi. 👕",
  },
  // + Keberagaman
  {
    tag: "Keberagaman", emoji: "🗣️",
    text: "Teman kita berasal dari daerah yang berbeda-beda. Sikap kita sebaiknya…",
    options: ["Berteman dengan semua", "Mengejek bahasanya", "Menjauhinya", "Memilih yang sedaerah saja"],
    answer: 0,
    why: "Benar! Kita berteman dengan semua walau beda daerah. 🗣️",
  },
  // + Toleransi
  {
    tag: "Toleransi", emoji: "🙏",
    text: "Sikap toleransi terhadap teman yang berbeda agama adalah…",
    options: ["Tetap berteman baik", "Memaksa pindah agama", "Mengejeknya", "Tidak mau bicara"],
    answer: 0,
    why: "Tepat! Toleransi = tetap berteman baik walau beda agama. 🙏",
  },

  // ++ Peran Ayah
  {
    tag: "Peran Ayah", emoji: "💼",
    text: "Ayah pergi bekerja setiap hari untuk…",
    options: ["Memenuhi kebutuhan keluarga", "Bermain saja", "Jalan-jalan", "Bersantai"],
    answer: 0,
    why: "Benar! Ayah bekerja untuk memenuhi kebutuhan keluarga. 💼",
  },
  {
    tag: "Peran Ayah", emoji: "🤗",
    text: "Saat ayah pulang bekerja dengan lelah, sebaiknya kita…",
    options: ["Menyambut dengan senyum", "Mengabaikannya", "Minta uang terus", "Marah"],
    answer: 0,
    why: "Tepat! Kita menyambut ayah dengan senyum dan sayang. 🤗",
  },

  // ++ Hidup Harmonis
  {
    tag: "Hidup Harmonis", emoji: "🙇",
    text: "Agar tetap rukun, jika berbuat salah kepada teman kita sebaiknya…",
    options: ["Meminta maaf", "Menyalahkan teman", "Marah", "Diam saja"],
    answer: 0,
    why: "Benar! Meminta maaf menjaga kerukunan. 🙇",
  },
  {
    tag: "Hidup Harmonis", emoji: "🏡",
    text: "Keluarga yang hidup harmonis akan terasa…",
    options: ["Bahagia dan tenteram", "Menyeramkan", "Selalu sepi", "Penuh pertengkaran"],
    answer: 0,
    why: "Tepat! Keluarga harmonis terasa bahagia dan tenteram. 🏡",
  },

  // ++ Peran Sekolah
  {
    tag: "Peran Sekolah", emoji: "🧹",
    text: "Mengikuti kerja bakti di sekolah memupuk rasa…",
    options: ["Kebersamaan", "Permusuhan", "Malas", "Egois"],
    answer: 0,
    why: "Benar! Kerja bakti menumbuhkan rasa kebersamaan. 🧹",
  },
  {
    tag: "Peran Sekolah", emoji: "🤝",
    text: "Di sekolah kita belajar menghargai teman yang berbeda agar tercipta…",
    options: ["Persatuan", "Pertengkaran", "Perpecahan", "Permusuhan"],
    answer: 0,
    why: "Tepat! Saling menghargai menciptakan persatuan. 🤝",
  },

  // ++ Menjaga Lingkungan Sekolah
  {
    tag: "Menjaga Lingkungan Sekolah", emoji: "🍂",
    text: "Agar halaman sekolah bersih, daun-daun yang berserakan sebaiknya…",
    options: ["Disapu dan dibuang", "Dibiarkan", "Diinjak-injak", "Ditendang"],
    answer: 0,
    why: "Benar! Daun yang berserakan disapu lalu dibuang. 🍂",
  },
  {
    tag: "Menjaga Lingkungan Sekolah", emoji: "🍱",
    text: "Setelah jajan di kantin, bungkus makanan kita buang ke…",
    options: ["Tempat sampah", "Bawah meja", "Halaman", "Selokan"],
    answer: 0,
    why: "Tepat! Bungkus makanan dibuang ke tempat sampah. 🍱",
  },

  // ++ Gotong Royong
  {
    tag: "Gotong Royong", emoji: "🏘️",
    text: "Membersihkan lingkungan bersama warga di sekitar rumah disebut…",
    options: ["Gotong royong", "Bermain", "Bertengkar", "Berlomba"],
    answer: 0,
    why: "Benar! Bekerja bersama warga disebut gotong royong / kerja bakti. 🏘️",
  },
  {
    tag: "Gotong Royong", emoji: "🙋",
    text: "Saat teman sedang bergotong royong, sikap kita sebaiknya…",
    options: ["Ikut membantu", "Menonton saja", "Pergi bermain", "Tidur"],
    answer: 0,
    why: "Tepat! Kita ikut membantu saat gotong royong. 🙋",
  },

  // ++ Arti Persatuan
  {
    tag: "Arti Persatuan", emoji: "🧒",
    text: "Bermain bersama tanpa membeda-bedakan teman adalah contoh sikap…",
    options: ["Persatuan", "Permusuhan", "Sombong", "Egois"],
    answer: 0,
    why: "Benar! Bermain bersama semua menunjukkan persatuan. 🧒",
  },
  {
    tag: "Arti Persatuan", emoji: "💪",
    text: "Kalimat 'bersatu kita teguh' menunjukkan pentingnya…",
    options: ["Persatuan", "Pertengkaran", "Perpecahan", "Kemalasan"],
    answer: 0,
    why: "Tepat! Kalimat itu menunjukkan pentingnya persatuan. 💪",
  },

  // ++ Kerja Kelompok
  {
    tag: "Kerja Kelompok", emoji: "💬",
    text: "Saat anggota kelompok berbeda pendapat, sebaiknya…",
    options: ["Dimusyawarahkan", "Bertengkar", "Berebut", "Saling marah"],
    answer: 0,
    why: "Benar! Perbedaan pendapat dimusyawarahkan. 💬",
  },
  {
    tag: "Kerja Kelompok", emoji: "🎁",
    text: "Hasil kerja kelompok adalah milik…",
    options: ["Bersama", "Satu orang", "Ketua saja", "Guru"],
    answer: 0,
    why: "Tepat! Hasil kerja kelompok milik bersama. 🎁",
  },

  // ++ Manfaat Persatuan
  {
    tag: "Manfaat Persatuan", emoji: "🏡",
    text: "Jika warga bersatu, lingkungan menjadi…",
    options: ["Aman dan damai", "Ribut", "Berbahaya", "Kotor"],
    answer: 0,
    why: "Benar! Warga yang bersatu membuat lingkungan aman dan damai. 🏡",
  },
  {
    tag: "Manfaat Persatuan", emoji: "🧠",
    text: "Dengan persatuan, masalah lebih mudah…",
    options: ["Diselesaikan bersama", "Diperbesar", "Diabaikan", "Dilupakan"],
    answer: 0,
    why: "Tepat! Persatuan membuat masalah mudah diselesaikan bersama. 🧠",
  },

  // ++ Merawat Lingkungan
  {
    tag: "Merawat Lingkungan", emoji: "🌳",
    text: "Agar udara di sekolah segar, sebaiknya kita…",
    options: ["Menanam dan merawat tanaman", "Menebang pohon", "Membakar sampah", "Mencabut bunga"],
    answer: 0,
    why: "Benar! Menanam dan merawat tanaman membuat udara segar. 🌳",
  },
  {
    tag: "Merawat Lingkungan", emoji: "🚰",
    text: "Melihat keran air menyala padahal tidak dipakai, sebaiknya kita…",
    options: ["Mematikannya", "Membiarkannya", "Menambah airnya", "Bermain air"],
    answer: 0,
    why: "Tepat! Mematikan keran berarti hemat air dan merawat lingkungan. 🚰",
  },

  // ++ Tujuan Persatuan
  {
    tag: "Tujuan Persatuan", emoji: "🛡️",
    text: "Salah satu tujuan menjaga persatuan adalah menghindari…",
    options: ["Perpecahan", "Kebahagiaan", "Kerukunan", "Kedamaian"],
    answer: 0,
    why: "Benar! Persatuan menghindarkan kita dari perpecahan. 🛡️",
  },
  {
    tag: "Tujuan Persatuan", emoji: "🚀",
    text: "Dengan bersatu, bangsa Indonesia menjadi…",
    options: ["Kuat dan maju", "Lemah", "Terpecah", "Mundur"],
    answer: 0,
    why: "Tepat! Bersatu membuat bangsa kuat dan maju. 🚀",
  },

  // ++ Persatuan (pengertian)
  {
    tag: "Persatuan", emoji: "🚫",
    text: "Hidup bersatu berarti tidak suka…",
    options: ["Bertengkar", "Menolong", "Berbagi", "Bekerja sama"],
    answer: 0,
    why: "Benar! Orang yang bersatu tidak suka bertengkar. 🚫",
  },
  {
    tag: "Persatuan", emoji: "🧑‍🤝‍🧑",
    text: "Teman-teman yang bekerja sama dengan kompak menunjukkan adanya…",
    options: ["Persatuan", "Permusuhan", "Perpecahan", "Pertengkaran"],
    answer: 0,
    why: "Tepat! Bekerja kompak menunjukkan persatuan. 🧑‍🤝‍🧑",
  },
];
