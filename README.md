* {
  box-sizing: border-box;
}

:root {
  --sky-top: #7dc6ff;
  --sky-mid: #cdeefe;
  --sky-bottom: #fbe7b2;
  --panel: rgba(15, 23, 42, 0.7);
  --panel-soft: rgba(255, 255, 255, 0.12);
  --text: #f8fafc;
  --text-muted: #dbeafe;
  --accent: #ff7cbf;
  --accent-strong: #ff4fa3;
  --secondary: #7c8cff;
  --gold: #f7d06b;
  --shadow: rgba(15, 23, 42, 0.38);
}

html, body {
  margin: 0;
  min-height: 100%;
  font-family: "Plus Jakarta Sans", "Segoe UI", sans-serif;
  background: #0a1020;
  color: var(--text);
  overflow-x: hidden;
}

body {
  min-height: 100vh;
  position: relative;
  background: linear-gradient(180deg, var(--sky-top) 0%, var(--sky-mid) 35%, var(--sky-bottom) 100%);
  transition: background 1s ease;
}

body.high-contrast {
  --accent: #ffd166;
  --secondary: #85c7ff;
  filter: contrast(1.12);
}

body.reduced-motion *, body.reduced-motion *::before, body.reduced-motion *::after {
  animation-duration: 0.01ms !important;
  animation-iteration-count: 1 !important;
  transition-duration: 0.01ms !important;
  scroll-behavior: auto !important;
}

#particleCanvas {
  position: fixed;
  inset: 0;
  width: 100vw;
  height: 100vh;
  z-index: 0;
  pointer-events: none;
  opacity: 0.75;
}

.world-container {
  position: relative;
  z-index: 1;
  min-height: 100vh;
  padding: 3rem 1.5rem 5rem;
  overflow: hidden;
}

.sky-background {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, #9fe2ff 0%, #d8efff 30%, #f8d99a 100%);
  transition: background 1.2s ease;
}

.parallax-layer {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.far-mountains {
  background: linear-gradient(180deg, rgba(106, 123, 166, 0.18), rgba(106, 123, 166, 0.32)),
    radial-gradient(circle at 20% 35%, rgba(48, 64, 89, 0.4), transparent 30%),
    radial-gradient(circle at 80% 40%, rgba(48, 64, 89, 0.4), transparent 28%);
  opacity: 0.9;
}

.clouds {
  background: radial-gradient(circle at 10% 20%, rgba(255,255,255,0.6) 0%, transparent 15%),
    radial-gradient(circle at 30% 25%, rgba(255,255,255,0.45) 0%, transparent 20%),
    radial-gradient(circle at 65% 20%, rgba(255,255,255,0.55) 0%, transparent 15%),
    radial-gradient(circle at 85% 24%, rgba(255,255,255,0.45) 0%, transparent 18%);
  filter: blur(2px);
  opacity: 0.9;
}

.foreground-flora {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 22vh;
  background: linear-gradient(180deg, rgba(24, 121, 89, 0.55), rgba(8, 85, 57, 0.85)),
    repeating-linear-gradient(90deg, rgba(255,255,255,0.06) 0, rgba(255,255,255,0.06) 8px, transparent 8px, transparent 22px);
  clip-path: polygon(0 18%, 5% 16%, 12% 20%, 18% 16%, 24% 20%, 30% 17%, 38% 22%, 46% 18%, 54% 22%, 62% 17%, 70% 21%, 78% 18%, 85% 24%, 100% 18%, 100% 100%, 0 100%);
  filter: drop-shadow(0 -10px 18px rgba(7, 30, 18, 0.45));
}

.world-main {
  position: relative;
  max-width: 1180px;
  height: 72vh;
  min-height: 640px;
  margin: 2rem auto 0;
  border-radius: 32px;
  background: rgba(130, 183, 216, 0.08);
  box-shadow: inset 0 0 40px rgba(255,255,255,0.08), 0 30px 60px rgba(15, 23, 42, 0.2);
  overflow: hidden;
}

.memory-tree,
.rich-nest-container,
.rabbit-sanctuary,
.investigation-desk,
.mine-entrance,
.sky-wishes-zone {
  position: absolute;
  cursor: pointer;
  transition: transform 0.22s ease, filter 0.22s ease;
}

.memory-tree:hover,
.rich-nest-container:hover,
.rabbit-sanctuary:hover,
.investigation-desk:hover,
.mine-entrance:hover,
.sky-wishes-zone:hover {
  transform: translateY(-4px) scale(1.01);
  filter: brightness(1.08);
}

.memory-tree {
  left: 50%;
  top: 11%;
  transform: translateX(-50%);
  width: 180px;
  height: 260px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
}

.tree-trunk {
  position: absolute;
  bottom: 0;
  width: 30px;
  height: 120px;
  background: linear-gradient(180deg, #8c5f3c, #5d3a1a);
  border-radius: 14px;
  box-shadow: 0 10px 12px rgba(77, 53, 30, 0.3);
}

.tree-foliage {
  position: absolute;
  bottom: 90px;
  width: 160px;
  height: 110px;
}

.leaf {
  position: absolute;
  width: 58px;
  height: 58px;
  background: radial-gradient(circle at 30% 30%, #95f7b0, #2ea44f 60%, #1d6a3b 100%);
  border-radius: 50% 0 50% 0;
  box-shadow: 0 0 20px rgba(90, 255, 180, 0.35);
}

.leaf:nth-child(1) { left: 8px; top: 8px; transform: rotate(-12deg); }
.leaf:nth-child(2) { left: 52px; top: 0; }
.leaf:nth-child(3) { right: 10px; top: 18px; transform: rotate(12deg); }

.tree-label,
.nest-label,
.sanctuary-label,
.desk-label,
.mine-label,
.wishes-label {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(15, 23, 42, 0.6);
  border: 1px solid rgba(255,255,255,0.2);
  border-radius: 999px;
  padding: 0.45rem 0.8rem;
  font-size: 0.7rem;
  letter-spacing: 0.04em;
  color: var(--text);
  backdrop-filter: blur(10px);
  white-space: nowrap;
}

.tree-label { bottom: -18px; }

.rich-nest-container {
  left: 10%;
  bottom: 18%;
  width: 230px;
  height: 180px;
}

.nest {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: flex-end;
  justify-content: center;
}

.nest-base {
  position: absolute;
  bottom: 16px;
  width: 150px;
  height: 42px;
  background: linear-gradient(180deg, #8d5d31, #6c4227);
  border-radius: 0 0 18px 18px;
  box-shadow: inset 0 -6px 0 rgba(0,0,0,0.15);
}

.richarlyson {
  position: absolute;
  bottom: 50px;
  width: 90px;
  height: 90px;
  animation: floaty 2.6s ease-in-out infinite;
}

.richarlyson .body {
  position: absolute;
  left: 18px;
  bottom: 10px;
  width: 54px;
  height: 48px;
  background: linear-gradient(135deg, #f4d0a1, #d7a86d);
  border-radius: 50% 50% 48% 52%;
}

.richarlyson .head {
  position: absolute;
  left: 28px;
  bottom: 48px;
  width: 36px;
  height: 36px;
  background: linear-gradient(135deg, #f8d7ac, #e2b37a);
  border-radius: 50%;
}

.richarlyson .eye {
  position: absolute;
  left: 40px;
  bottom: 60px;
  width: 7px;
  height: 7px;
  background: #111827;
  border-radius: 50%;
}

.richarlyson .beak {
  position: absolute;
  left: 47px;
  bottom: 54px;
  width: 12px;
  height: 8px;
  background: #f59e0b;
  clip-path: polygon(0 50%, 100% 0, 100% 100%);
}

.nest-label { bottom: -18px; }

.rabbit-sanctuary {
  right: 10%;
  bottom: 18%;
  width: 240px;
  height: 190px;
}

.sanctuary-base {
  position: absolute;
  left: 18px;
  right: 18px;
  bottom: 18px;
  height: 62px;
  background: linear-gradient(180deg, #8bb678, #5d8d4d);
  border-radius: 16px 16px 22px 22px;
}

.rabbit {
  position: absolute;
  bottom: 60px;
  width: 26px;
  height: 36px;
  background: linear-gradient(180deg, #f8f1ef, #d4c8c1);
  border-radius: 50% 50% 45% 45%;
  box-shadow: 0 0 14px rgba(255,255,255,0.3);
  animation: bounce 2s ease-in-out infinite;
}

.rabbit::before,
.rabbit::after {
  content: "";
  position: absolute;
  width: 12px;
  height: 12px;
  background: #e7d8d2;
  border-radius: 50%;
  top: -10px;
}

.rabbit::before { left: -2px; }
.rabbit::after { right: -2px; }

.rabbit-1 { left: 18px; animation-delay: 0.1s; }
.rabbit-2 { left: 68px; animation-delay: 0.4s; }
.rabbit-3 { left: 118px; animation-delay: 0.7s; }
.rabbit-4 { left: 168px; animation-delay: 1s; }

.sanctuary-label { bottom: -18px; }

.investigation-desk {
  left: 12%;
  bottom: 4%;
  width: 200px;
  height: 120px;
}

.desk-base {
  position: absolute;
  inset: auto 12px 0 12px;
  height: 74px;
  background: linear-gradient(180deg, #b6885d, #7c532f);
  border-radius: 18px 18px 12px 12px;
  box-shadow: inset 0 -10px 0 rgba(0,0,0,0.12);
}

.desk-base::before {
  content: "";
  position: absolute;
  inset: 12px 18px 18px;
  background: linear-gradient(180deg, rgba(255,255,255,0.18), rgba(0,0,0,0.08));
  border-radius: 12px;
}

.desk-label { bottom: -16px; }

.mine-entrance {
  right: 15%;
  bottom: 4%;
  width: 220px;
  height: 120px;
}

.mine-frame {
  position: absolute;
  inset: auto 8px 0 8px;
  height: 76px;
  background: linear-gradient(180deg, #556074, #283244);
  border-radius: 20px 20px 14px 14px;
  box-shadow: inset 0 -10px 0 rgba(0,0,0,0.18);
}

.mine-frame::before {
  content: "";
  position: absolute;
  inset: 14px 18px 18px;
  border: 2px solid rgba(255,255,255,0.15);
  border-radius: 10px;
}

.mine-label { bottom: -18px; }

.sky-wishes-zone {
  right: 42%;
  top: 9%;
  width: 180px;
  height: 120px;
}

.stars-container {
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background: radial-gradient(circle at 50% 30%, rgba(255,255,255,0.18), transparent 62%);
}

#wishes-label { display: none; }

.ui-controls {
  position: fixed;
  right: 1.2rem;
  top: 1rem;
  z-index: 10;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.btn-control {
  width: 54px;
  height: 54px;
  border-radius: 18px;
  border: 1px solid rgba(255,255,255,0.22);
  background: rgba(15, 23, 42, 0.42);
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  box-shadow: 0 18px 28px rgba(15, 23, 42, 0.2);
  transition: transform 0.2s ease, background 0.2s ease;
}

.btn-control:hover {
  transform: translateY(-2px) scale(1.04);
  background: rgba(28, 41, 62, 0.7);
}

.modal {
  position: fixed;
  inset: 0;
  display: none;
  align-items: center;
  justify-content: center;
  background: rgba(2, 6, 23, 0.45);
  backdrop-filter: blur(6px);
  z-index: 50;
}

.modal.show {
  display: flex;
}

.modal-content {
  position: relative;
  width: min(820px, 92vw);
  max-height: 84vh;
  overflow: auto;
  padding: 1.5rem 1.2rem 1.2rem;
  border-radius: 28px;
  background: linear-gradient(180deg, rgba(15, 23, 42, 0.95), rgba(20, 29, 54, 0.88));
  border: 1px solid rgba(255,255,255,0.12);
  box-shadow: 0 30px 60px rgba(15, 23, 42, 0.55);
}

.modal-close {
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 42px;
  height: 42px;
  border-radius: 50%;
  border: none;
  font-size: 1.5rem;
  background: rgba(255,255,255,0.08);
  color: white;
  cursor: pointer;
}

.letter-paper {
  background: linear-gradient(180deg, #f9f4dc, #f3e7bf);
  color: #3b2f2d;
  border-radius: 24px;
  padding: 2rem 1.8rem;
  border: 1px solid rgba(120, 79, 23, 0.2);
  box-shadow: inset 0 0 0 1px rgba(255,255,255,0.4);
}

.letter-header {
  text-align: center;
  font-size: 2.2rem;
  margin-bottom: 0.8rem;
}

.letter-title {
  font-family: "Cinzel", serif;
  font-size: clamp(2rem, 4vw, 3rem);
  text-align: center;
  margin-bottom: 1rem;
}

.letter-body {
  font-family: "Georgia", serif;
  font-size: 1.08rem;
  line-height: 1.9;
  text-align: justify;
}

.letter-body p {
  margin: 0 0 1.1rem;
}

.letter-signature {
  text-align: right;
  font-weight: 700;
  font-size: 1.1rem;
  margin-top: 1.5rem;
}

.signature {
  font-family: "Cinzel", serif;
  font-size: 1.5rem;
  letter-spacing: 0.08em;
}

.achievements-list,
.inventory-grid,
.mine-blocks-grid,
.investigation-board,
.rabbit-interaction-area {
  display: grid;
  gap: 1rem;
}

.achievements-list {
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  margin-top: 1rem;
}

.achievement-item {
  display: flex;
  align-items: center;
  gap: 0.9rem;
  padding: 1rem;
  border-radius: 18px;
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.08);
}

.achievement-item.unlocked {
  background: rgba(94, 234, 212, 0.08);
  border-color: rgba(94, 234, 212, 0.32);
}

.achievement-icon {
  width: 52px;
  height: 52px;
  display: grid;
  place-items: center;
  border-radius: 14px;
  background: rgba(124, 140, 255, 0.18);
  font-size: 1.5rem;
}

.achievement-item h3 {
  margin: 0 0 0.2rem;
  font-size: 1rem;
}

.achievement-item p {
  margin: 0;
  color: rgba(226, 232, 240, 0.8);
  font-size: 0.82rem;
}

.inventory-grid {
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  margin-top: 1rem;
}

.inventory-item {
  display: grid;
  place-items: center;
  gap: 0.4rem;
  padding: 1rem 0.5rem;
  background: rgba(255, 255, 255, 0.04);
  border-radius: 14px;
  border: 1px solid rgba(255,255,255,0.12);
}

.mine-blocks-grid {
  grid-template-columns: repeat(4, minmax(100px, 1fr));
  margin-top: 1rem;
}

.mine-block {
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.12);
  color: white;
  border-radius: 14px;
  padding: 1rem 0.6rem;
  display: grid;
  place-items: center;
  gap: 0.35rem;
  cursor: pointer;
  transition: transform 0.2s ease, opacity 0.2s ease;
}

.mine-block:hover {
  transform: translateY(-3px);
}

.mine-block.mined {
  opacity: 0.55;
  filter: grayscale(0.5);
}

.investigation-board {
  grid-template-columns: 1.2fr 1fr;
  margin-top: 1rem;
}

.investigation-note {
  padding: 0.8rem 0.9rem;
  background: rgba(255,255,255,0.04);
  border-left: 3px solid #fb7185;
  border-radius: 12px;
  margin-bottom: 0.5rem;
}

.puzzle-item {
  display: grid;
  gap: 0.45rem;
  margin-bottom: 0.8rem;
  padding: 0.8rem;
  background: rgba(255,255,255,0.04);
  border-radius: 12px;
}

.puzzle-item input {
  border-radius: 10px;
  border: 1px solid rgba(255,255,255,0.12);
  background: rgba(15, 23, 42, 0.65);
  color: white;
  padding: 0.7rem 0.8rem;
}

.puzzle-item.success {
  border: 1px solid rgba(74, 222, 128, 0.7);
}

.nest-interaction {
  display: grid;
  place-items: center;
  gap: 1rem;
  margin-top: 1rem;
}

.nest-actions {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.75rem;
}

.nest-btn {
  border: none;
  border-radius: 12px;
  background: linear-gradient(135deg, rgba(124, 140, 255, 0.8), rgba(255, 124, 191, 0.75));
  color: white;
  padding: 0.7rem 1rem;
  cursor: pointer;
}

.affection-meter {
  width: min(420px, 85vw);
  height: 18px;
  background: rgba(255,255,255,0.08);
  border-radius: 999px;
  overflow: hidden;
  border: 1px solid rgba(255,255,255,0.12);
}

.affection-fill {
  width: 0%;
  height: 100%;
  background: linear-gradient(90deg, #ff9bd7, #facc15, #34d399);
  transition: width 0.3s ease;
}

.rabbit-interaction-area {
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  margin-top: 1rem;
}

.rabbit-card {
  display: grid;
  gap: 0.25rem;
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.12);
  border-radius: 18px;
  color: white;
  padding: 1rem 0.8rem;
  text-align: center;
  cursor: pointer;
}

.rabbit-emoji {
  font-size: 2rem;
}

.rabbit-info {
  margin-top: 1rem;
  text-align: center;
  color: rgba(226, 232, 240, 0.8);
}

.toast-container {
  position: fixed;
  right: 1rem;
  bottom: 1rem;
  display: grid;
  gap: 0.7rem;
  z-index: 100;
}

.toast {
  min-width: 220px;
  max-width: 320px;
  padding: 0.8rem 1rem;
  border-radius: 12px;
  background: rgba(15, 23, 42, 0.9);
  box-shadow: 0 18px 36px rgba(15, 23, 42, 0.35);
  border: 1px solid rgba(255,255,255,0.12);
  opacity: 0;
  transform: translateY(16px);
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.toast.visible {
  opacity: 1;
  transform: translateY(0);
}

.intro-banner {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 80;
  width: min(620px, 88vw);
  padding: 1.4rem 1.6rem;
  border-radius: 26px;
  text-align: center;
  background: rgba(17, 24, 39, 0.7);
  border: 1px solid rgba(255,255,255,0.14);
  box-shadow: 0 25px 50px rgba(15, 23, 42, 0.4);
  backdrop-filter: blur(10px);
  display: grid;
  gap: 0.35rem;
  transition: opacity 0.9s ease, transform 0.9s ease;
}

.intro-banner.hidden {
  opacity: 0;
  transform: translate(-50%, -48%);
  pointer-events: none;
}

.intro-banner span {
  font-weight: 800;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  font-size: 0.72rem;
  color: #c7d2fe;
}

.intro-banner strong {
  font-family: "Cinzel", serif;
  font-size: clamp(1.8rem, 4vw, 3rem);
  color: white;
}

.intro-banner small {
  color: rgba(226, 232, 240, 0.8);
  line-height: 1.5;
}

.photo-mode .ui-controls,
.photo-mode .modal,
.photo-mode .intro-banner,
.photo-mode .toast-container {
  display: none !important;
}

@keyframes floaty {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
}

@keyframes bounce {
  0%, 100% { transform: translateY(0) scale(1); }
  50% { transform: translateY(-8px) scale(1.04); }
}

.burst-dot {
  position: absolute;
  width: 9px;
  height: 9px;
  border-radius: 50%;
  opacity: 0.8;
  pointer-events: none;
  animation: burst 0.6s ease-out forwards;
}

@keyframes burst {
  0% {
    transform: translate(0, 0) scale(0.7);
    opacity: 1;
  }
  100% {
    transform: translate(var(--dx), var(--dy)) scale(0.1);
    opacity: 0;
  }
}

@media (max-width: 900px) {
  .world-main {
    min-height: 560px;
    height: 62vh;
  }

  .rich-nest-container { left: 2%; }
  .rabbit-sanctuary { right: 2%; }
  .memory-tree { top: 8%; }
  .sky-wishes-zone { right: 36%; }
}

@media (max-width: 640px) {
  .ui-controls {
    right: 0.8rem;
    top: 0.8rem;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-end;
    max-width: 180px;
  }

  .btn-control {
    width: 46px;
    height: 46px;
    font-size: 1.2rem;
  }

  .world-main {
    height: 78vh;
    min-height: 520px;
  }

  .memory-tree {
    left: 50%;
    width: 130px;
    height: 200px;
  }

  .rich-nest-container,
  .rabbit-sanctuary,
  .investigation-desk,
  .mine-entrance,
  .sky-wishes-zone {
    transform: scale(0.82);
    transform-origin: center;
  }

  .investigation-board {
    grid-template-columns: 1fr;
  }

  .mine-blocks-grid {
    grid-template-columns: repeat(2, minmax(90px, 1fr));
  }
}
