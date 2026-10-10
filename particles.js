class ParticleSystem {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.particles = [];
    this.resize();
    this.populate();
    this.animate = this.animate.bind(this);
    window.addEventListener("resize", () => this.resize());
  }

  resize() {
    const ratio = window.devicePixelRatio || 1;
    this.canvas.width = window.innerWidth * ratio;
    this.canvas.height = window.innerHeight * ratio;
    this.ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
    this.canvas.style.width = window.innerWidth + "px";
    this.canvas.style.height = window.innerHeight + "px";
  }

  populate() {
    const count = Math.min(120, Math.max(50, Math.floor(window.innerWidth / 18)));
    this.particles = Array.from({ length: count }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      radius: Math.random() * 2.5 + 1,
      dx: (Math.random() - 0.5) * 0.5,
      dy: (Math.random() - 0.5) * 0.5,
      alpha: Math.random() * 0.8 + 0.2,
      twinkle: Math.random() * Math.PI * 2
    }));
  }

  animate() {
    const { ctx, canvas } = this;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const pointer = window.pointer || { x: window.innerWidth / 2, y: window.innerHeight / 2 };

    this.particles.forEach((particle) => {
      particle.twinkle += 0.04;
      const glow = 0.5 + Math.sin(particle.twinkle) * 0.5;
      const dx = pointer.x - particle.x;
      const dy = pointer.y - particle.y;
      const distance = Math.hypot(dx, dy) || 1;

      if (distance < 140) {
        particle.x += (dx / distance) * 0.15;
        particle.y += (dy / distance) * 0.15;
      }

      particle.x += particle.dx;
      particle.y += particle.dy;

      if (particle.x < 0 || particle.x > window.innerWidth) particle.x = Math.random() * window.innerWidth;
      if (particle.y < 0 || particle.y > window.innerHeight) particle.y = Math.random() * window.innerHeight;

      ctx.beginPath();
      ctx.fillStyle = `rgba(255, 234, 150, ${particle.alpha * glow})`;
      ctx.arc(particle.x, particle.y, particle.radius + glow * 1.8, 0, Math.PI * 2);
      ctx.fill();
    });

    requestAnimationFrame(this.animate);
  }

  start() {
    requestAnimationFrame(this.animate);
  }
}

window.ParticleSystem = ParticleSystem;
