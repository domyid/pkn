// Suara ceria sederhana memakai Web Audio API (tanpa file audio).
let ctx = null;
let muted = false;

function ac() {
  if (!ctx) {
    const AC = window.AudioContext || window.webkitAudioContext;
    ctx = AC ? new AC() : null;
  }
  if (ctx && ctx.state === "suspended") ctx.resume();
  return ctx;
}

export function setMuted(v) { muted = v; }
export function isMuted() { return muted; }

// mainkan deret nada
function play(notes, type = "sine", gain = 0.18) {
  if (muted) return;
  const c = ac();
  if (!c) return;
  let t = c.currentTime;
  notes.forEach(({ f, d }) => {
    const osc = c.createOscillator();
    const g = c.createGain();
    osc.type = type;
    osc.frequency.value = f;
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(gain, t + 0.02);
    g.gain.exponentialRampToValueAtTime(0.0001, t + d);
    osc.connect(g).connect(c.destination);
    osc.start(t);
    osc.stop(t + d + 0.02);
    t += d;
  });
}

export const sfx = {
  correct() { play([{ f: 660, d: 0.12 }, { f: 880, d: 0.12 }, { f: 1175, d: 0.2 }], "triangle"); },
  wrong()   { play([{ f: 300, d: 0.16 }, { f: 220, d: 0.24 }], "sine", 0.14); },
  click()   { play([{ f: 520, d: 0.07 }], "square", 0.1); },
  start()   { play([{ f: 523, d: 0.1 }, { f: 659, d: 0.1 }, { f: 784, d: 0.16 }], "triangle"); },
  reward()  { play([{ f: 784, d: 0.1 }, { f: 988, d: 0.1 }, { f: 1319, d: 0.1 }, { f: 1568, d: 0.22 }], "triangle"); },
  finish()  { play([{ f: 523, d: 0.12 }, { f: 659, d: 0.12 }, { f: 784, d: 0.12 }, { f: 1047, d: 0.28 }], "triangle"); },
};
