# 🎀🐸 Ujian Seru PKN — Kelas 2 SD

Web simulasi ujian (ASAT) **Pendidikan Pancasila / PKN Kelas 2 SD** dengan tema **Kuromi & Keroppi**.
Dibuat menyenangkan untuk anak: soal pilihan ganda, skor, poin reward, suara ceria, dan animasi confetti.

🔗 **Buka aplikasinya:** https://do.my.id/pkn/

> Dibuat dengan HTML + CSS + Vanilla JavaScript (ES6 module). Tanpa framework, tanpa proses build.

---

## ✨ Fitur

- **125 soal** pilihan ganda, mencakup **20 indikator** kisi-kisi (lihat tabel di bawah).
- Tiap ujian mengambil **1 soal acak per indikator → 20 soal** (persis pola ASAT). Kombinasi beda tiap main.
- Pilihan jawaban ikut diacak posisinya.
- **Skor 0–100**, bintang ⭐, dan **poin 🪙** yang tersimpan (localStorage).
- **Tukar poin jadi reward** (snack, screen time, es krim, mainan, dll) — bisa disesuaikan.
- **Rincian per materi** di layar hasil (✓/✗) → tahu materi mana yang lemah.
- **🔁 Ulangi Soal yang Salah** → fokus memperbaiki yang keliru (mode latihan, tanpa poin).
- **📖 Rangkuman Materi** → ringkasan poin kunci tiap indikator. Materi yang salah disorot otomatis.
  Hanya bisa dibuka di **Beranda** & **Hasil** — **tidak muncul saat ujian** (anti-nyontek).
- **🟢 Bagikan ke WhatsApp** rangkuman/materi yang perlu dipelajari.
- Suara on/off 🔊 dan sapaan dengan nama anak.

---

## 🧒 Alur belajar (saran untuk besok)

1. **📖 Belajar Materi Dulu** di Beranda — baca rangkuman.
2. **Mulai Main** — kerjakan 20 soal.
3. Lihat **rincian per materi** (✓/✗) di layar hasil.
4. **📖 Lihat Rangkuman** — materi yang ✗ tersorot kuning, baca & bahas bersama.
5. **🔁 Ulangi Soal yang Salah** sampai semua hijau.
6. Ulangi 2–3 ronde. Selamat belajar! 🎉

---

## 💻 Menjalankan secara lokal

Karena memakai ES6 module, file **tidak bisa** dibuka langsung (`file://`) — perlu server kecil:

```bash
# dari dalam folder proyek
python -m http.server 8000
```

Lalu buka **http://localhost:8000**.

**Buka dari HP Android** (WiFi sama): cari IP laptop (mis. `192.168.x.x`) lalu buka `http://<IP>:8000`.
Kalau terblokir, izinkan port di Windows Firewall:

```powershell
New-NetFirewallRule -DisplayName "PKN App 8000" -Direction Inbound -Protocol TCP -LocalPort 8000 -Action Allow
```

---

## 🛠️ Menyesuaikan (untuk orang tua)

| Ingin mengubah… | Edit file |
|---|---|
| Soal & jawaban | [`js/questions.js`](js/questions.js) |
| Daftar reward & harga poin | [`js/rewards.js`](js/rewards.js) |
| Poin per jawaban benar | [`js/rewards.js`](js/rewards.js) (`POINTS_PER_CORRECT`) |
| Rangkuman materi | [`js/rangkuman.js`](js/rangkuman.js) |

**Menambah soal:** salin satu blok `{ tag, emoji, text, options, answer, why }` di `questions.js`.
`tag` harus sama persis dengan salah satu nama di daftar `INDICATORS`. `answer` = nomor urut jawaban benar (mulai dari 0).

---

## 📂 Struktur

```
pkn/
├── index.html        # halaman utama
├── css/styles.css    # tema Kuromi & Keroppi
└── js/
    ├── app.js        # logika aplikasi
    ├── questions.js  # bank soal + daftar 20 indikator
    ├── rewards.js    # katalog reward
    ├── rangkuman.js  # rangkuman materi
    ├── audio.js      # efek suara (Web Audio API)
    └── confetti.js   # animasi confetti
```

---

## 📋 Kisi-kisi ASAT PKN Kelas 2

| No | Materi | Indikator Soal |
|---|---|---|
| 1 | Musyawarah | Memahami musyawarah sesuai nilai Pancasila |
| 2 | Lambang Pancasila | Mengenal semboyan pada lambang Pancasila |
| 3 | Nilai Pancasila | Mengenal perilaku sesuai nilai Pancasila |
| 4 | Manfaat Pancasila | Memahami manfaat penerapan Pancasila |
| 5 | Kewajiban di rumah | Memahami kewajiban anak di rumah |
| 6 | Peran ayah | Memahami tugas ayah dalam keluarga |
| 7 | Hak dan kewajiban | Memahami manfaat hak dan kewajiban |
| 8 | Kewajiban di sekolah | Memahami kewajiban menjaga lingkungan sekolah |
| 9 | Hidup harmonis | Memahami manfaat mematuhi hak dan kewajiban |
| 10 | Keberagaman | Memahami manfaat menghargai keberagaman |
| 11 | Persatuan | Memahami pengertian persatuan |
| 12 | Peran sekolah | Memahami peran sekolah dalam persatuan |
| 13 | Toleransi | Memahami upaya menciptakan persatuan |
| 14 | Menjaga lingkungan sekolah | Memahami cara menjaga lingkungan sekolah |
| 15 | Gotong royong | Memahami manfaat gotong royong |
| 16 | Persatuan | Memahami arti persatuan |
| 17 | Kerja kelompok | Memahami sikap kerja sama |
| 18 | Manfaat persatuan | Memahami manfaat menjaga persatuan |
| 19 | Merawat lingkungan | Memahami sikap menjaga lingkungan sekolah |
| 20 | Tujuan persatuan | Memahami tujuan persatuan |
