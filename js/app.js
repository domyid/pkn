import { QUESTIONS } from "./questions.js";
import { REWARDS, POINTS_PER_CORRECT } from "./rewards.js";
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
let order = [];        // urutan soal (acak)
let idx = 0;           // soal ke berapa
let correct = 0;       // jumlah benar
let earnedPoints = 0;  // poin sesi ini
let locked = false;    // cegah klik ganda

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
  order = shuffle(QUESTIONS);
  idx = 0;
  correct = 0;
  earnedPoints = 0;
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

  if (opt.isCorrect) {
    btn.classList.add("option--correct");
    correct++;
    earnedPoints += POINTS_PER_CORRECT;
    $("live-score").textContent = String(correct * 5); // nilai live: tiap benar 5 poin nilai (maks 100)
    sfx.correct();
    burst(70, 0.5, 0.3);
    fb.classList.add("feedback--good");
    fb.textContent = q.why;
  } else {
    btn.classList.add("option--wrong");
    // tandai jawaban benar supaya anak belajar
    allBtns.forEach((b) => {
      const txt = b.querySelector(".option__txt").textContent;
      if (txt === q.options[q.answer]) b.classList.add("option--correct");
    });
    sfx.wrong();
    fb.classList.add("feedback--bad");
    fb.textContent = "Belum tepat ya. Jawaban yang benar sudah ditandai hijau. Semangat! 💪";
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

  // simpan poin & best
  store.points += earnedPoints;
  if (nilai > store.best) store.best = nilai;
  saveStore();

  // teks hasil
  let title, sub, mascot;
  if (nilai === 100) { title = "Sempurna! 🌟"; sub = "Wah, semua benar! Kamu juara sejati!"; mascot = "👑"; }
  else if (nilai >= 80) { title = "Hebat Sekali! 🎉"; sub = "Kamu pintar banget, sedikit lagi sempurna!"; mascot = "🏆"; }
  else if (nilai >= 60) { title = "Bagus! 💜"; sub = "Kerja bagus! Yuk pelajari lagi yang belum tepat."; mascot = "💜"; }
  else { title = "Semangat Ya! 💪"; sub = "Belajar lagi sebentar, pasti besok bisa lebih baik!"; mascot = "🌱"; }

  $("result-title").textContent = title;
  $("result-sub").textContent = `${store.name ? store.name + ", " : ""}${sub}`;
  $("result-mascot").textContent = mascot;
  $("final-correct").textContent = `${correct}/${total}`;
  $("final-score").textContent = nilai;
  $("final-points").textContent = `+${earnedPoints}`;

  // bintang
  const starCount = nilai >= 90 ? 3 : nilai >= 70 ? 2 : nilai >= 50 ? 1 : 0;
  const stars = $("stars").children;
  for (let i = 0; i < stars.length; i++) {
    stars[i].style.opacity = i < starCount ? "1" : "0.2";
    stars[i].style.transform = i < starCount ? "scale(1.15)" : "scale(0.9)";
  }

  renderRewards();
  show("result");
  sfx.finish();
  if (nilai >= 60) {
    burst(140, 0.5, 0.25);
    setTimeout(() => burst(90, 0.25, 0.3), 250);
    setTimeout(() => burst(90, 0.75, 0.3), 450);
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
$("btn-retry").addEventListener("click", () => { sfx.click(); startQuiz(); });
$("btn-home").addEventListener("click", () => {
  sfx.click();
  renderBestLine();
  show("start");
});

// ---------- mute ----------
const muteBtn = $("btn-mute");
muteBtn.addEventListener("click", () => {
  const m = !isMuted();
  setMuted(m);
  muteBtn.textContent = m ? "🔇" : "🔊";
});
