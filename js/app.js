import { QUESTIONS, INDICATORS } from "./questions.js";
import { REWARDS, POINTS_PER_CORRECT } from "./rewards.js";
import { RANGKUMAN } from "./rangkuman.js";
import { sfx, setMuted, isMuted } from "./audio.js";
import { burst } from "./confetti.js";

// ---------- penyimpanan lokal ----------
const STORE_KEY = "pkn_kuromi_keroppi_v1";
const store = loadStore();

function loadStore() {
  try {
    return JSON.parse(localStorage.getItem(STORE_KEY)) || { points: 0, best: 0, name: "", redeemed: [] };
  } catch {
    return { points: 0, best: 0, name: "", redeemed: [] };
  }
}
function saveStore() {
  try { localStorage.setItem(STORE_KEY, JSON.stringify(store)); } catch { /* abaikan */ }
}

// ---------- util DOM ----------
const $ = (id) => document.getElementById(id);
const screens = {
  start: $("screen-start"),
  quiz: $("screen-quiz"),
  result: $("screen-result"),
};
function show(name) {
  Object.values(screens).forEach((s) => s.classList.remove("is-active"));
  screens[name].classList.add("is-active");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// acak urutan array (Fisher–Yates) — supaya soal tidak monoton
function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ---------- state kuis ----------
let order = [];          // urutan soal sesi ini
let idx = 0;             // soal ke berapa
let correct = 0;         // jumlah benar
let earnedPoints = 0;    // poin sesi ini
let locked = false;      // cegah klik ganda
let wrongQuestions = []; // soal yang dijawab salah (untuk mode ulangi)
let answers = [];        // rekam tiap jawaban: { tag, ok } untuk rincian per materi
let reviewMode = false;  // true = sedang mengulang soal yang salah (latihan, tanpa poin)

// Susun 1 soal ACAK dari TIAP indikator (sesuai kisi-kisi) lalu diacak urutannya.
function buildExam() {
  const picked = INDICATORS.map((ind) => {
    const pool = QUESTIONS.filter((q) => q.tag === ind);
    return pool.length ? pool[Math.floor(Math.random() * pool.length)] : null;
  }).filter(Boolean);
  return shuffle(picked);
}

// ---------- START ----------
const nameInput = $("player-name");
nameInput.value = store.name || "";
renderBestLine();

function renderBestLine() {
  const el = $("best-line");
  if (store.best > 0) {
    el.textContent = `🏅 Nilai terbaikmu: ${store.best} · Poin tersimpan: ${store.points} 🪙`;
  } else {
    el.textContent = "Ayo kerjakan dan kumpulkan poin pertamamu! 🪙";
  }
}

$("btn-start").addEventListener("click", () => {
  sfx.start();
  store.name = nameInput.value.trim();
  saveStore();
  startQuiz();
});

nameInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") $("btn-start").click();
});

// ---------- mulai kuis ----------
function startQuiz() {
  reviewMode = false;
  // 1 soal acak per indikator -> selalu 20 soal lengkap sesuai kisi-kisi
  order = buildExam();
  beginSession();
}

// ---------- mulai mode ulangi soal yang salah ----------
function startReview() {
  if (!pendingReview.length) return;
  reviewMode = true;
  order = shuffle(pendingReview);
  beginSession();
}

// `order` harus sudah diisi sebelum memanggil fungsi ini.
function beginSession() {
  idx = 0;
  correct = 0;
  earnedPoints = 0;
  wrongQuestions = [];
  answers = [];
  $("q-total").textContent = order.length;
  $("live-score").textContent = "0";
  show("quiz");
  renderQuestion();
}

function renderQuestion() {
  locked = false;
  const q = order[idx];
  $("q-current").textContent = idx + 1;
  $("q-mascot").textContent = q.emoji;
  $("q-tag").textContent = q.tag;
  $("q-text").textContent = q.text;
  $("progress-bar").style.width = `${(idx / order.length) * 100}%`;
  $("feedback").textContent = "";
  $("feedback").className = "feedback";
  $("btn-next").hidden = true;

  const optionsEl = $("options");
  optionsEl.innerHTML = "";

  // acak posisi pilihan jawaban juga, tapi tetap tahu mana yang benar
  const opts = q.options.map((text, i) => ({ text, isCorrect: i === q.answer }));
  const shuffled = shuffle(opts);
  const labels = ["A", "B", "C", "D"];

  shuffled.forEach((opt, i) => {
    const btn = document.createElement("button");
    btn.className = "option";
    btn.innerHTML = `<span class="option__key">${labels[i]}</span><span class="option__txt">${opt.text}</span>`;
    btn.addEventListener("click", () => choose(btn, opt, q));
    optionsEl.appendChild(btn);
  });
}

function choose(btn, opt, q) {
  if (locked) return;
  locked = true;
  sfx.click();

  const allBtns = [...document.querySelectorAll(".option")];
  allBtns.forEach((b) => (b.disabled = true));

  const fb = $("feedback");
  // rekam detail jawaban (untuk rincian per materi & pembahasan)
  answers.push({
    no: idx + 1,
    tag: q.tag,
    question: q.text,
    chosen: opt.text,
    correct: q.options[q.answer],
    ok: opt.isCorrect,
  });

  if (opt.isCorrect) {
    btn.classList.add("option--correct");
    correct++;
    earnedPoints += POINTS_PER_CORRECT;
    $("live-score").textContent = String(correct); // jumlah benar sejauh ini
    sfx.correct();
    burst(70, 0.5, 0.3);
    fb.classList.add("feedback--good");
    fb.textContent = q.why;
  } else {
    btn.classList.add("option--wrong");
    wrongQuestions.push(q); // simpan untuk mode "ulangi soal yang salah"
    // tandai jawaban benar supaya anak belajar
    allBtns.forEach((b) => {
      const txt = b.querySelector(".option__txt").textContent;
      if (txt === q.options[q.answer]) b.classList.add("option--correct");
    });
    sfx.wrong();
    fb.classList.add("feedback--bad");
    fb.textContent = `Belum tepat ya. Yang benar: "${q.options[q.answer]}". Semangat! 💪`;
  }

  const nextBtn = $("btn-next");
  nextBtn.hidden = false;
  nextBtn.textContent = idx === order.length - 1 ? "Lihat Hasil 🎉" : "Lanjut ➡️";
}

$("btn-next").addEventListener("click", () => {
  sfx.click();
  idx++;
  if (idx < order.length) {
    renderQuestion();
  } else {
    finishQuiz();
  }
});

// ---------- selesai ----------
function finishQuiz() {
  $("progress-bar").style.width = "100%";
  const total = order.length;
  const nilai = Math.round((correct / total) * 100);
  // soal yang masih salah sesi ini (disalin sebelum sesi berikutnya reset)
  const stillWrong = wrongQuestions.slice();

  // teks hasil
  let title, sub, mascot;
  if (reviewMode) {
    // mode latihan ulang — tanpa poin & tanpa ubah nilai terbaik
    if (stillWrong.length === 0) {
      title = "Mantap! Semua Betul! 🌟"; sub = "Soal yang tadi salah sekarang sudah kamu kuasai!"; mascot = "🏆";
    } else {
      title = "Hampir Bisa! 💪"; sub = "Masih ada yang perlu diulang sebentar lagi ya."; mascot = "🌱";
    }
  } else {
    // ujian penuh — simpan poin & nilai terbaik
    store.points += earnedPoints;
    if (nilai > store.best) store.best = nilai;
    saveStore();
    if (nilai === 100) { title = "Sempurna! 🌟"; sub = "Wah, semua benar! Kamu juara sejati!"; mascot = "👑"; }
    else if (nilai >= 80) { title = "Hebat Sekali! 🎉"; sub = "Kamu pintar banget, sedikit lagi sempurna!"; mascot = "🏆"; }
    else if (nilai >= 60) { title = "Bagus! 💜"; sub = "Kerja bagus! Yuk ulangi yang belum tepat."; mascot = "💜"; }
    else { title = "Semangat Ya! 💪"; sub = "Ulangi soal yang salah, pasti besok bisa lebih baik!"; mascot = "🌱"; }
  }

  $("result-title").textContent = title;
  $("result-sub").textContent = `${store.name ? store.name + ", " : ""}${sub}`;
  $("result-mascot").textContent = mascot;
  $("final-correct").textContent = `${correct}/${total}`;
  $("final-score").textContent = nilai;
  $("final-points").textContent = reviewMode ? "—" : `+${earnedPoints}`;
  $("final-points").parentElement.title = reviewMode ? "Mode latihan tidak menambah poin" : "";

  // bintang
  const starCount = nilai >= 90 ? 3 : nilai >= 70 ? 2 : nilai >= 50 ? 1 : 0;
  const stars = $("stars").children;
  for (let i = 0; i < stars.length; i++) {
    stars[i].style.opacity = i < starCount ? "1" : "0.2";
    stars[i].style.transform = i < starCount ? "scale(1.15)" : "scale(0.9)";
  }

  // tombol "ulangi soal yang salah" — hanya muncul jika masih ada yang salah
  pendingReview = stillWrong;
  const reviewBtn = $("btn-review");
  if (stillWrong.length > 0) {
    reviewBtn.hidden = false;
    reviewBtn.textContent = `🔁 Ulangi ${stillWrong.length} Soal yang Salah`;
  } else {
    reviewBtn.hidden = true;
  }

  renderBreakdown(); // menghitung lastWrongTags

  // simpan ringkasan hasil untuk dibagikan ke WhatsApp
  const okTags = [...new Set(answers.filter((a) => a.ok).map((a) => a.tag))]
    .filter((t) => !lastWrongTags.includes(t));
  lastResult = {
    nilai, correct, total, earnedPoints, reviewMode,
    okTags, wrongTags: lastWrongTags.slice(),
  };
  lastAnswers = answers.slice(); // snapshot detail jawaban untuk pembahasan

  renderRewards();
  show("result");
  sfx.finish();
  if (nilai >= 60) {
    burst(140, 0.5, 0.25);
    setTimeout(() => burst(90, 0.25, 0.3), 250);
    setTimeout(() => burst(90, 0.75, 0.3), 450);
  }
}

// soal yang menunggu untuk diulang (diset saat finishQuiz)
let pendingReview = [];

// ---------- rincian hasil per materi ----------
function renderBreakdown() {
  const list = $("breakdown-list");
  const hint = $("breakdown-hint");
  list.innerHTML = "";

  // urutkan sesuai kisi-kisi untuk ujian penuh; mode latihan ikut urutan dikerjakan
  const rows = reviewMode
    ? answers.slice()
    : answers.slice().sort((a, b) => INDICATORS.indexOf(a.tag) - INDICATORS.indexOf(b.tag));

  rows.forEach((a) => {
    const item = document.createElement("div");
    item.className = "bd-item " + (a.ok ? "bd-item--ok" : "bd-item--no");
    item.innerHTML = `<span class="bd-item__mark">${a.ok ? "✓" : "✗"}</span><span class="bd-item__tag">${a.tag}</span>`;
    list.appendChild(item);
  });

  const wrongTags = [...new Set(rows.filter((a) => !a.ok).map((a) => a.tag))];
  lastWrongTags = wrongTags; // untuk disorot di rangkuman
  if (wrongTags.length === 0) {
    hint.textContent = "🌟 Semua materi sudah dikuasai. Keren banget!";
    hint.className = "breakdown__hint breakdown__hint--ok";
  } else {
    hint.textContent = "📌 Yuk pelajari lagi malam ini: " + wrongTags.join(", ") + ".";
    hint.className = "breakdown__hint breakdown__hint--no";
  }
}

// ---------- reward ----------
function renderRewards() {
  $("wallet-points").textContent = store.points;
  const grid = $("rewards-grid");
  grid.innerHTML = "";

  REWARDS.forEach((r) => {
    const can = store.points >= r.cost;
    const card = document.createElement("div");
    card.className = "reward" + (can ? " reward--ready" : " reward--locked");
    card.innerHTML = `
      <div class="reward__icon">${r.icon}</div>
      <div class="reward__name">${r.name}</div>
      <div class="reward__cost">${r.cost} 🪙</div>
      <button class="reward__btn" ${can ? "" : "disabled"}>${can ? "Tukar" : "🔒 Kurang " + (r.cost - store.points)}</button>
    `;
    card.querySelector(".reward__btn").addEventListener("click", () => redeem(r));
    grid.appendChild(card);
  });
}

function redeem(r) {
  if (store.points < r.cost) return;
  store.points -= r.cost;
  store.redeemed = store.redeemed || [];
  store.redeemed.push({ id: r.id, name: r.name });
  saveStore();
  sfx.reward();
  burst(80, 0.5, 0.4);
  showToast(`🎉 Yeay! Kamu menukar: ${r.icon} ${r.name}! Tunjukkan ke Ayah/Bunda ya 💜`);
  renderRewards();
  renderBestLine();
}

// ---------- toast ----------
let toastTimer = null;
function showToast(msg) {
  const t = $("toast");
  t.textContent = msg;
  t.classList.add("toast--show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove("toast--show"), 3500);
}

// ---------- tombol hasil ----------
$("btn-review").addEventListener("click", () => { sfx.start(); startReview(); });
$("btn-retry").addEventListener("click", () => { sfx.click(); startQuiz(); });
$("btn-home").addEventListener("click", () => {
  sfx.click();
  renderBestLine();
  show("start");
});

// ---------- rangkuman materi (lembar belajar) ----------
let lastWrongTags = []; // materi yang salah pada sesi terakhir (untuk disorot)
let studyFocusTags = []; // materi yang sedang disorot di modal (untuk dibagikan)
let studyRendered = false;
let lastResult = null;   // ringkasan hasil ujian terakhir (untuk dibagikan)
let lastAnswers = [];    // detail tiap jawaban sesi terakhir (untuk pembahasan)

function renderStudyBody() {
  if (studyRendered) return; // isi statis, cukup render sekali
  const body = $("study-body");
  body.innerHTML = "";
  RANGKUMAN.forEach((m) => {
    const card = document.createElement("div");
    card.className = "study-card";
    card.dataset.tag = m.tag;
    card.innerHTML =
      `<h3 class="study-card__title">${m.icon} ${m.tag}</h3>` +
      `<ul class="study-card__list">${m.points.map((p) => `<li>${p}</li>`).join("")}</ul>`;
    body.appendChild(card);
  });
  studyRendered = true;
}

function openStudy(highlightTags = []) {
  sfx.click();
  renderStudyBody();
  studyFocusTags = highlightTags.slice();
  const set = new Set(highlightTags);
  // sorot materi yang masih salah, dan urutkan ke atas
  const body = $("study-body");
  [...body.children].forEach((card) => {
    card.classList.toggle("study-card--focus", set.has(card.dataset.tag));
  });
  $("study-modal").hidden = false;
  // gulir ke materi pertama yang perlu dipelajari (jika ada)
  if (set.size) {
    const first = [...body.children].find((c) => set.has(c.dataset.tag));
    if (first) setTimeout(() => first.scrollIntoView({ behavior: "smooth", block: "start" }), 50);
  } else {
    body.scrollTop = 0;
  }
}

function closeStudy() { sfx.click(); $("study-modal").hidden = true; }

// susun teks rangkuman untuk dibagikan ke WhatsApp
function buildShareText() {
  const focus = studyFocusTags.length ? new Set(studyFocusTags) : null;
  const items = focus ? RANGKUMAN.filter((m) => focus.has(m.tag)) : RANGKUMAN;
  const nama = store.name ? ` (${store.name})` : "";
  const header = focus
    ? `📚 Materi PKN yang perlu dipelajari${nama}:`
    : `📖 Rangkuman Materi PKN Kelas 2 SD${nama}`;
  const blocks = items.map(
    (m) => `${m.icon} *${m.tag}*\n` + m.points.map((p) => `• ${p}`).join("\n")
  );
  return `${header}\n\n${blocks.join("\n\n")}\n\n— dibuat dengan aplikasi Ujian Seru PKN 💜🐸`;
}

// kirim teks ke WhatsApp: pakai share sheet asli HP, fallback ke wa.me
function shareToWhatsApp(text) {
  if (navigator.share) {
    navigator.share({ text }).catch(() => {});
  } else {
    window.open("https://wa.me/?text=" + encodeURIComponent(text), "_blank");
  }
}

function shareWhatsApp() {
  sfx.click();
  shareToWhatsApp(buildShareText());
}

// susun teks HASIL UJIAN untuk dibagikan
function buildResultShareText() {
  const r = lastResult;
  const nama = store.name ? ` — ${store.name}` : "";
  const lines = [`🎀 Hasil Ujian PKN Kelas 2${nama} 🐸`];
  if (r.reviewMode) {
    lines.push(`📝 Latihan ulang soal yang salah`);
    lines.push(`⭐ Benar: ${r.correct}/${r.total} (nilai ${r.nilai})`);
  } else {
    lines.push(`⭐ Nilai: ${r.nilai} (${r.correct}/${r.total} benar)`);
    lines.push(`🪙 Poin didapat: +${r.earnedPoints}`);
  }
  if (r.okTags.length) lines.push(`\n✅ Dikuasai: ${r.okTags.join(", ")}`);
  if (r.wrongTags.length) lines.push(`📌 Perlu belajar lagi: ${r.wrongTags.join(", ")}`);
  else lines.push(`\n🌟 Semua materi dikuasai!`);
  lines.push(`\n— Ujian Seru PKN 💜🐸`);
  return lines.join("\n");
}

function shareResult() {
  if (!lastResult) return;
  sfx.click();
  shareToWhatsApp(buildResultShareText());
}

$("btn-share-wa").addEventListener("click", shareWhatsApp);
$("btn-share-result").addEventListener("click", shareResult);

// ---------- pembahasan jawaban (evaluasi bersama orang tua) ----------
function renderReview() {
  const body = $("review-body");
  body.innerHTML = "";

  const wrong = lastAnswers.filter((a) => !a.ok);
  // ringkasan kecil di atas
  const summary = document.createElement("p");
  summary.className = "rv-summary";
  summary.textContent = wrong.length === 0
    ? `🌟 Semua ${lastAnswers.length} soal dijawab benar. Hebat!`
    : `Ada ${wrong.length} soal yang masih salah dari ${lastAnswers.length} soal.`;
  body.appendChild(summary);

  // daftar soal yang salah (fokus evaluasi)
  wrong.forEach((a) => {
    const card = document.createElement("div");
    card.className = "rv-card";
    card.innerHTML =
      `<div class="rv-card__head"><span class="rv-no">No. ${a.no}</span>` +
      `<span class="rv-tag">${a.tag}</span></div>` +
      `<p class="rv-q">${a.question}</p>` +
      `<p class="rv-line rv-line--wrong">❌ Jawabanmu: ${a.chosen}</p>` +
      `<p class="rv-line rv-line--right">✅ Seharusnya: ${a.correct}</p>`;
    body.appendChild(card);
  });

  if (wrong.length === 0) {
    const ok = document.createElement("div");
    ok.className = "rv-card rv-card--allok";
    ok.textContent = "Tidak ada soal yang perlu dibahas. Pertahankan ya! 💜🐸";
    body.appendChild(ok);
  }
}

function openReview() {
  if (!lastAnswers.length) return;
  sfx.click();
  renderReview();
  $("review-modal").hidden = false;
  $("review-body").scrollTop = 0;
}
function closeReview() { sfx.click(); $("review-modal").hidden = true; }

// teks pembahasan (soal salah) untuk dibagikan ke WhatsApp
function buildReviewShareText() {
  const nama = store.name ? ` — ${store.name}` : "";
  const wrong = lastAnswers.filter((a) => !a.ok);
  const head = `📄 Pembahasan Ujian PKN Kelas 2${nama} 🐸`;
  if (wrong.length === 0) {
    return `${head}\n\n🌟 Semua soal dijawab benar. Hebat!\n\n— Ujian Seru PKN 💜`;
  }
  const blocks = wrong.map(
    (a) => `*No. ${a.no} — ${a.tag}*\n${a.question}\n❌ Jawab: ${a.chosen}\n✅ Benar: ${a.correct}`
  );
  return `${head}\n\nSoal yang masih salah:\n\n${blocks.join("\n\n")}\n\n— Ujian Seru PKN 💜🐸`;
}
function shareReview() { sfx.click(); shareToWhatsApp(buildReviewShareText()); }

$("btn-open-review").addEventListener("click", openReview);
$("btn-review-close").addEventListener("click", closeReview);
$("review-backdrop").addEventListener("click", closeReview);
$("btn-share-review").addEventListener("click", shareReview);
$("btn-study-start").addEventListener("click", () => openStudy());
$("btn-study-result").addEventListener("click", () => openStudy(lastWrongTags));
$("btn-study-close").addEventListener("click", closeStudy);
$("study-backdrop").addEventListener("click", closeStudy);
document.addEventListener("keydown", (e) => {
  if (e.key !== "Escape") return;
  if (!$("study-modal").hidden) closeStudy();
  if (!$("review-modal").hidden) closeReview();
});

// ---------- mute ----------
const muteBtn = $("btn-mute");
muteBtn.addEventListener("click", () => {
  const m = !isMuted();
  setMuted(m);
  muteBtn.textContent = m ? "🔇" : "🔊";
});
