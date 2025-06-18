import { gsap } from "gsap";

// particles animation
export class ParticlesAnimation {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas.getContext("2d");
    this.particles = [];
    this.isAnimating = false;
    this.particleCount = 50;

    this.setupCanvas();
    this.createParticles();
  }

  setupCanvas() {
    if (!this.canvas) return;

    // Configuração do canvas para tela cheia
    const resizeCanvas = () => {
      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
  }

  createParticles() {
    this.particles = [];

    for (let i = 0; i < this.particleCount; i++) {
      this.particles.push({
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height,
        size: Math.random() * 3 + 1,
        speedX: Math.random() * 1 - 0.5,
        speedY: Math.random() * 1 + 0.5,
        opacity: Math.random() * 0.5 + 0.3,
      });
    }
  }

  animate() {
    if (!this.canvas || !this.ctx) return;

    // Limpa o canvas
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    // Atualiza e desenha cada partícula
    this.particles.forEach((particle) => {
      // Movimento
      particle.x += particle.speedX;
      particle.y -= particle.speedY;

      // Verifica os limites da tela
      if (particle.y < -10) {
        particle.y = this.canvas.height + 10;
        particle.x = Math.random() * this.canvas.width;
      }
      if (particle.x < -10) particle.x = this.canvas.width + 10;
      if (particle.x > this.canvas.width + 10) particle.x = -10;

      // Desenha a partícula
      this.ctx.beginPath();
      this.ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      this.ctx.fillStyle = `rgba(255, 192, 203, ${particle.opacity})`;
      this.ctx.fill();
    });

    if (this.isAnimating) {
      requestAnimationFrame(() => this.animate());
    }
  }

  start() {
    if (!this.isAnimating) {
      this.isAnimating = true;
      this.animate();
    }
  }

  stop() {
    this.isAnimating = false;
  }

  resize() {
    this.setupCanvas();
    this.createParticles();
  }
}
