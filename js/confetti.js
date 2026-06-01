// Confetti lucu tanpa library. Warna ungu (Kuromi) & hijau (Keroppi) + pink.
const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");
let pieces = [];
let running = false;

const COLORS = ["#b388ff", "#7c4dff", "#80e27e", "#43c463", "#ff9ed8", "#ffd166", "#ffffff"];

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener("resize", resize);
resize();

function rnd(a, b) { return a + Math.random() * (b - a); }

export function burst(count = 90, originX = 0.5, originY = 0.35) {
  const ox = canvas.width * originX;
  const oy = canvas.height * originY;
  for (let i = 0; i < count; i++) {
    pieces.push({
      x: ox, y: oy,
      vx: rnd(-6, 6),
      vy: rnd(-12, -3),
      g: rnd(0.18, 0.32),
      size: rnd(6, 12),
      rot: rnd(0, Math.PI * 2),
      vr: rnd(-0.25, 0.25),
      color: COLORS[(Math.random() * COLORS.length) | 0],
      life: rnd(70, 130),
      shape: Math.random() < 0.4 ? "circle" : "rect",
    });
  }
  if (!running) { running = true; requestAnimationFrame(loop); }
}

function loop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  pieces = pieces.filter((p) => p.life > 0 && p.y < canvas.height + 40);
  for (const p of pieces) {
    p.vy += p.g;
    p.x += p.vx;
    p.y += p.vy;
    p.rot += p.vr;
    p.life--;
    ctx.save();
    ctx.translate(p.x, p.y);
    ctx.rotate(p.rot);
    ctx.fillStyle = p.color;
    ctx.globalAlpha = Math.max(0, Math.min(1, p.life / 40));
    if (p.shape === "circle") {
      ctx.beginPath();
      ctx.arc(0, 0, p.size / 2, 0, Math.PI * 2);
      ctx.fill();
    } else {
      ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
    }
    ctx.restore();
  }
  if (pieces.length > 0) {
    requestAnimationFrame(loop);
  } else {
    running = false;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
}
