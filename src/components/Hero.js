// Hero.js - Componente da seção hero
import { gsap } from "gsap";
import { TypewriterEffect } from "../animations/typewriter";
import { ParticlesAnimation } from "../animations/particles";

export class HeroSection {
  constructor() {
    this.particles = null;
    this.typewriter = null;
    this.init();
  }

  init() {
    this.createHeroHTML();
    this.setupAnimations();
    this.setupEventListeners();
  }

  createHeroHTML() {
    const heroSection = document.getElementById("hero");
    if (!heroSection) return;

    heroSection.innerHTML = `
      <!-- Particles Canvas -->
      <canvas id="particles" class="absolute inset-0 w-full h-full z-0"></canvas>
      
      <!-- Hero Overlay -->
      <div class="hero-overlay absolute inset-0 z-10 bg-gradient-to-b from-transparent to-white/10"></div>
      
      <!-- Main Content -->
      <div class="relative z-20 text-center px-4 max-w-4xl mx-auto">
        <!-- Main Title with Typewriter Effect -->
        <h1 id="main-title" class="hero-title text-4xl md:text-6xl lg:text-7xl font-display text-gradient mb-6 opacity-0">
          <span id="typewriter"></span>
        </h1>
        
        <!-- Subtitle -->
        <p id="subtitle" class="hero-subtitle text-lg md:text-xl lg:text-2xl font-inter text-cinza-suave mb-8 opacity-0">
          Um cantinho especial para minhas paixões ✨
        </p>
        
        <!-- Decorative Elements -->
        <div id="decorative-elements" class="flex justify-center items-center gap-4 mb-12 opacity-0">
          <div class="w-12 md:w-16 h-px bg-gradient-to-r from-transparent via-pink-400 to-transparent"></div>
          <span class="text-xl md:text-2xl">🌸</span>
          <div class="w-12 md:w-16 h-px bg-gradient-to-r from-transparent via-pink-400 to-transparent"></div>
        </div>
        
        <!-- Call to Action -->
        <div id="cta-button" class="opacity-0">
          <button id="explore-btn" 
                  class="glass-effect px-6 md:px-8 py-3 md:py-4 rounded-full text-pink-600 font-medium hover:bg-pink-50 transition-all duration-300 transform hover:scale-105 shadow-lg text-sm md:text-base">
            Explore meu cantinho 💕
          </button>
        </div>
      </div>
    `;
  }

  setupAnimations() {
    // Inicializa as partículas
    this.particles = new ParticlesAnimation("particles");
    this.particles.start();

    // Inicializa o typewriter
    this.typewriter = new TypewriterEffect(
      "typewriter",
      "Bem-vinda ao Meu Cantinho Rosa-Clarinho"
    );

    // Timeline de animações com GSAP
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.to("#main-title", {
      opacity: 1,
      duration: 1,
      onComplete: () => this.typewriter.init(),
    })
      .to("#subtitle", {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.5,
      })
      .to("#decorative-elements", {
        opacity: 1,
        duration: 1,
        scale: 1,
        delay: -0.5,
      })
      .to("#cta-button", {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: -0.3,
      });
  }

  setupEventListeners() {
    const exploreBtn = document.getElementById("explore-btn");
    if (exploreBtn) {
      exploreBtn.addEventListener("click", () => {
        // Scroll suave para a próxima seção
        const nextSection = document.querySelector("#hero").nextElementSibling;
        if (nextSection) {
          nextSection.scrollIntoView({ behavior: "smooth" });
        }
      });
    }

    // Listener para redimensionamento
    window.addEventListener("resize", () => {
      if (this.particles) {
        this.particles.resize();
      }
    });
  }

  destroy() {
    if (this.particles) {
      this.particles.stop();
    }
    if (this.typewriter) {
      this.typewriter.destroy();
    }
  }
}

// Auto-initialize when imported
export default HeroSection;
