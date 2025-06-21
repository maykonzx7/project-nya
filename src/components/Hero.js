// Hero.js - Versão corrigida
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollToPlugin);
import { ParticlesAnimation } from "../animations/particles";

export class HeroSection {
  constructor() {
    this.particles = null;
    this.floatingElements = [];
    this.isAnimationComplete = false;
    this.typewriterText = "Bem-vindo ao Cantinho da Nyiii";

    // Garante que a página comece no topo
    window.scrollTo(0, 0);

    this.init();
  }

  init() {
    // Verifica se a animação já foi completada em algum momento anterior
    const completed = sessionStorage.getItem("heroAnimationCompleted");
    if (completed) {
      this.isAnimationComplete = true;
      this.createHeroHTML();
      this.setupStaticContent();
    } else {
      this.createHeroHTML();
      this.setupAnimations();
      this.setupEventListeners();
      this.setupFloatingDecorations();
      this.disableScroll();
    }
  }

  setupStaticContent() {
    // Versão estática sem animações
    const typewriterElement = document.getElementById("typewriter");
    if (typewriterElement) {
      typewriterElement.textContent = this.typewriterText;
    }

    this.enableCTA();
    this.particles = new ParticlesAnimation("particles", {
      /* config */
    });
    this.particles.start();
  }

  onTypewriterComplete() {
    this.isAnimationComplete = true;
    this.enableScroll();
    this.enableCTA();
    this.playCompletionEffects();

    // Marca como completado para recargas
    sessionStorage.setItem("heroAnimationCompleted", "true");
  }

  createHeroHTML() {
    const heroSection = document.getElementById("hero");
    if (!heroSection) return;

    heroSection.innerHTML = `
      <!-- Background Layers -->
      <div class="absolute inset-0 overflow-hidden z-0">
        <!-- Gradientes sutis -->
        <div class="absolute inset-0 bg-gradient-to-br from-rose-50/30 via-pink-50/10 to-rose-100/5"></div>
        
        <!-- Light Reflections -->
        <div class="absolute top-[20%] left-[15%] w-80 h-80 bg-rose-200/10 rounded-full"></div>
        <div class="absolute bottom-[30%] right-[15%] w-64 h-64 bg-pink-200/10 rounded-full"></div>
        
        <!-- Particles Canvas -->
        <canvas id="particles" class="absolute inset-0 w-full h-full z-1"></canvas>
      </div>
      
      <!-- Hero Overlay -->
      <div class="absolute inset-0 z-10 bg-gradient-to-b from-transparent to-white/20"></div>
      
      <!-- Main Content -->
      <div class="relative z-20 text-center px-4 max-w-4xl mx-auto py-12 md:py-24">
        <!-- Main Title -->
        <h1 id="main-title" class="hero-title text-4xl md:text-6xl lg:text-7xl font-bold text-center mb-6 opacity-0">
          <span id="typewriter" class="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-rose-700 to-pink-600"></span>
        </h1>
        
        <!-- Subtitle -->
        <p id="subtitle" class="text-lg md:text-xl lg:text-2xl font-medium text-rose-800/90 mb-8 opacity-0">
          Uma página com algumas das coisas que mais gosto.
        </p>
        
        <!-- Decorative Elements com animações detalhadas -->
        <div id="decorative-elements" class="flex justify-center items-center gap-4 mb-12 opacity-0">
          <div id="line-left" class="w-12 md:w-16 h-px bg-gradient-to-r from-transparent via-rose-400 to-transparent"></div>
          <span id="flower" class="text-xl md:text-2xl text-rose-500 relative">
            🌸
            <!-- Efeito de pétalas -->
            <span class="absolute inset-0 flex justify-center items-center">
              <span class="absolute w-full h-full bg-rose-300/20 rounded-full animate-ping-slow opacity-0"></span>
              <span class="absolute w-[150%] h-[150%] bg-rose-200/15 rounded-full animate-ping-slower opacity-0"></span>
            </span>
          </span>
          <div id="line-right" class="w-12 md:w-16 h-px bg-gradient-to-r from-transparent via-rose-400 to-transparent"></div>
        </div>
        
        <!-- Call to Action (inicialmente desabilitado) -->
        <div id="cta-button" class="opacity-0">
          <button id="explore-btn" 
                  class="px-8 py-4 rounded-full font-bold text-rose-50 transition-all duration-300 transform text-md relative z-10
                         bg-gradient-to-r from-rose-500 to-pink-500
                         shadow-rose-300/60 cursor-not-allowed opacity-80"
                  disabled>
            <span class="relative z-10 flex items-center justify-center gap-2">
              <span id="cta-spinner" class="inline-block w-4 h-4 border-2 border-rose-100 border-t-transparent rounded-full animate-spin mr-2"></span>
              Carregando...
            </span>
          </button>
        </div>
      </div>
      
      <!-- Floating Decorations -->
      <div id="floating-decorations" class="absolute inset-0 overflow-hidden pointer-events-none z-5"></div>
    `;
  }

  setupFloatingDecorations() {
    const container = document.getElementById("floating-decorations");
    if (!container) return;

    const decorations = ["🌸", "🌺", "🌷", "💮", "🪷", "💐"];
    const colors = ["text-rose-200", "text-pink-200", "text-rose-300"];

    for (let i = 0; i < 10; i++) {
      const decor = document.createElement("div");
      decor.className = `floating-element absolute text-2xl ${
        colors[Math.floor(Math.random() * colors.length)]
      }`;
      decor.innerHTML =
        decorations[Math.floor(Math.random() * decorations.length)];

      // Posições aleatórias
      const posX = Math.random() * 100;
      const posY = Math.random() * 100;

      gsap.set(decor, {
        x: `${posX}vw`,
        y: `${posY}vh`,
        scale: 0.5 + Math.random() * 0.8,
        rotation: Math.random() * 360,
        opacity: 0.4 + Math.random() * 0.4,
      });

      container.appendChild(decor);
      this.floatingElements.push(decor);

      // Animação flutuante detalhada
      gsap.to(decor, {
        y: `+=${15 - Math.random() * 30}`,
        x: `+=${10 - Math.random() * 20}`,
        rotation: `+=${45 - Math.random() * 90}`,
        duration: 6 + Math.random() * 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }
  }

  setupAnimations() {
    // Partículas
    this.particles = new ParticlesAnimation("particles", {
      density: 10,
      colors: ["#fbcfe8", "#f9a8d4", "#f472b6", "#fb7185"],
      shapes: ["heart", "circle", "star"],
      size: [2, 6],
      movement: {
        speed: 0.8,
        direction: "both",
        randomness: 0.7,
      },
      twinkle: true,
      connect: true,
      connectColor: "#fecdd3",
    });
    this.particles.start();

    // Timeline principal
    const tl = gsap.timeline({
      defaults: {
        ease: "expo.out",
        duration: 1.2,
      },
    });

    tl.to("#main-title", {
      opacity: 1,
      y: 0,
      onComplete: () => this.startTypewriter(),
    })
      .to(
        "#subtitle",
        {
          opacity: 1,
          y: 0,
          delay: 0.3,
        },
        "-=0.8"
      )
      .to(
        "#decorative-elements",
        {
          opacity: 1,
          onComplete: () => {
            this.animateFlower();
            this.animateLines();
          },
        },
        "-=0.7"
      )
      .to(
        "#cta-button",
        {
          opacity: 1,
          y: 0,
        },
        "-=0.5"
      );
  }

  startTypewriter() {
    const typewriterElement = document.getElementById("typewriter");
    if (!typewriterElement) return;

    const text = this.typewriterText;
    const speed = 80;
    let i = 0;

    typewriterElement.textContent = "";

    const type = () => {
      if (i < text.length) {
        typewriterElement.textContent += text.charAt(i);
        i++;
        setTimeout(type, speed);
      } else {
        this.onTypewriterComplete();
      }
    };

    type();
  }

  onTypewriterComplete() {
    this.isAnimationComplete = true;
    this.enableScroll();
    this.enableCTA();
    this.playCompletionEffects();
  }

  animateFlower() {
    // Animação para a flor
    gsap.to("#flower", {
      duration: 2,
      scale: 1.1,
      rotate: 5,
      yoyo: true,
      repeat: -1,
      ease: "sine.inOut",
    });

    // Efeito de pétalas
    const petals = document.querySelectorAll("#flower > span > span");
    if (petals.length > 0) {
      gsap.to(petals[0], {
        duration: 3,
        scale: 1.5,
        opacity: 0.4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(petals[1], {
        duration: 4,
        scale: 2,
        opacity: 0.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }
  }

  animateLines() {
    // Animação ondulatória para as linhas
    gsap.to("#line-left, #line-right", {
      duration: 2,
      scaleX: 1.2,
      transformOrigin: "center center",
      yoyo: true,
      repeat: -1,
      stagger: 0.3,
      ease: "sine.inOut",
    });
  }

  playCompletionEffects() {
    // Efeitos especiais ao completar animação
    gsap.to("#flower", {
      scale: 1.3,
      duration: 0.5,
      yoyo: true,
      repeat: 1,
    });

    gsap.to(".floating-element", {
      scale: 1.2,
      duration: 0.8,
      yoyo: true,
      repeat: 1,
      stagger: 0.05,
    });

    // Confete de partículas
    if (this.particles) {
      this.particles.createBurst({
        x: window.innerWidth / 2,
        y: 100,
        count: 30,
        size: [4, 8],
        shapes: ["heart", "star"],
      });
    }
  }

  setupEventListeners() {
    const exploreBtn = document.getElementById("explore-btn");
    if (exploreBtn) {
      exploreBtn.addEventListener("click", () => {
        if (!this.isAnimationComplete) return;

        gsap.to(exploreBtn, {
          scale: 0.95,
          duration: 0.2,
          yoyo: true,
          repeat: 1,
        });

        // Direciona para a seção de livros
        const bookSection = document.getElementById("book-section");
        if (bookSection) {
          // Adiciona classe temporária para destaque
          bookSection.classList.add("section-highlight");

          gsap.to(window, {
            scrollTo: {
              y: bookSection,
              offsetY: 20, // Espaço acima da seção
              autoKill: true,
            },
            duration: 1.6,
            ease: "expo.out",
            onComplete: () => {
              // Destaque sutil na seção de livros
              gsap.to(bookSection, {
                duration: 1,
                boxShadow: "0 0 40px rgba(219, 39, 119, 0.3)",
                yoyo: true,
                repeat: 1,
                onComplete: () => {
                  // Remove o destaque após a animação
                  bookSection.classList.remove("section-highlight");
                },
              });
            },
          });
        }
      });
    }
  }

  disableScroll() {
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
  }

  enableScroll() {
    document.body.style.overflow = "";
    document.documentElement.style.overflow = "";
  }

  enableCTA() {
    const exploreBtn = document.getElementById("explore-btn");
    if (exploreBtn) {
      exploreBtn.innerHTML = `
        <span class="relative z-10 flex items-center justify-center gap-2">
          Explore comigo!
          <span class="text-xl"></span>
        </span>
      `;
      exploreBtn.disabled = false;
      exploreBtn.classList.remove("cursor-not-allowed", "opacity-80");
      exploreBtn.classList.add(
        "hover:scale-[1.03]",
        "hover:from-rose-600",
        "hover:to-pink-600",
        "hover:shadow-rose-400/60"
      );

      // Animação de destaque
      gsap.to(exploreBtn, {
        "box-shadow": "0 0 30px rgba(251, 113, 133, 0.6)",
        duration: 1,
        repeat: 3,
        yoyo: true,
      });

      // Garante que o event listener seja adicionado após o botão ser re-renderizado
      this.setupEventListeners();
    }
  }

  destroy() {
    if (this.particles) this.particles.stop();

    this.floatingElements.forEach((el) => {
      gsap.killTweensOf(el);
      if (el.parentNode) el.parentNode.removeChild(el);
    });
    this.floatingElements = [];

    this.enableScroll();
  }
}

export default HeroSection;
