const BODY_MOTION_DEFAULTS = {
  transform: "translate3d(0,0,0)",
  transition: "transform 250ms ease"
};

function applySceneTheme() {
  const root = document.documentElement;
  root.style.setProperty("--sky-top", "#e6f4ff");
  root.style.setProperty("--sky-mid", "#b9ddff");
  root.style.setProperty("--sky-bottom", "#fce7a5");
}

function createParticleBurst(x, y, color = "rgba(255,255,255,0.8)") {
  const container = document.getElementById("worldContainer");
  if (!container) return;

  for (let i = 0; i < 12; i += 1) {
    const dot = document.createElement("span");
    dot.className = "burst-dot";
    dot.style.left = `${x}px`;
    dot.style.top = `${y}px`;
    dot.style.background = color;
    dot.style.setProperty("--dx", `${(Math.random() - 0.5) * 100}px`);
    dot.style.setProperty("--dy", `${(Math.random() - 0.5) * 100}px`);
    container.appendChild(dot);
    setTimeout(() => dot.remove(), 600);
  }
}

function bindBurstInteractions() {
  document.addEventListener("click", (event) => {
    const target = event.target;
    if (target.closest(".mine-block") || target.closest(".rabbit-card") || target.closest(".nest-btn")) {
      createParticleBurst(event.clientX, event.clientY, "rgba(255, 207, 95, 0.9)");
    }
  });
}

window.addEventListener("DOMContentLoaded", () => {
  applySceneTheme();
  bindBurstInteractions();

  const particleCanvas = document.getElementById("particleCanvas");
  if (particleCanvas) {
    const system = new ParticleSystem(particleCanvas);
    system.start();
  }
});
