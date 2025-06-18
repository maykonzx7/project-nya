import "../styles/book-animations.css";
import { gsap } from "gsap";

const livros = [
  {
    titulo: "Helena",
    capa: "/public/images/HelenaLivro.jpg",
    trecho: "“A felicidade é como a pluma que o vento vai levando pelo ar...”",
    destaque: true,
    cor: "#fbcfe8",
  },
  {
    titulo: "Helena",
    capa: "/public/images/HelenaLivro.jpg",
    trecho: "“A felicidade é como a pluma que o vento vai levando pelo ar...”",
    destaque: true,
    cor: "#fbcfe8",
  },
  {
    titulo: "Helena",
    capa: "/public/images/HelenaLivro.jpg",
    trecho: "“A felicidade é como a pluma que o vento vai levando pelo ar...”",
    destaque: true,
    cor: "#fbcfe8",
  },
  // Adicione mais livros conforme necessário
];

export function renderBookSection(containerId = "book-section") {
  let container = document.getElementById(containerId);
  if (!container) {
    container = document.createElement("section");
    container.id = containerId;
    container.className = "py-16 bg-white flex flex-col items-center";
    document.body.appendChild(container);
  }

  container.innerHTML = `
    <div class="relative w-full max-w-7xl mx-auto px-4">
      <h2 class="text-4xl md:text-5xl font-serif text-center mb-16 relative z-10">
        <span class="bg-clip-text text-transparent bg-gradient-to-r from-rose-700 to-pink-600">Livros que Amo</span>
        <div class="w-24 h-1 bg-gradient-to-r from-rose-300 to-pink-300 mx-auto mt-4 rounded-full"></div>
      </h2>
      
      <div class="flex flex-wrap justify-center gap-10 relative z-20">
        ${livros
          .map(
            (livro, idx) => `
          <div class="book-card w-64 h-96 relative" data-id="${idx}">
            <div class="book-3d-container w-full h-full relative transform-style-3d">
              <!-- Frente do livro (capa) -->
              <div class="book-front absolute w-full h-full rounded-xl overflow-hidden shadow-2xl border-4 border-white z-20 backface-hidden">
                <!-- Overlay de gradiente para destaque -->
                <div class="absolute inset-0 bg-gradient-to-b from-rose-100/30 to-white/50"></div>
                
                <!-- Botão estrela para flip -->
                <button class="absolute -top-3 -right-3 w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-600 rounded-full flex items-center justify-center rotate-12 shadow-lg z-20 flip-btn" aria-label="Ver trecho">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </button>
                
                <!-- Moldura da capa (ocupando toda área) -->
                <div class="absolute inset-0 rounded-lg overflow-hidden">
                  <img src="${livro.capa}" alt="Capa do livro ${livro.titulo}" class="w-full h-full object-cover" />
                </div>
                
                <!-- Overlay para título -->
                <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-5 pt-10">
                  <h3 class="text-xl font-bold text-white text-center drop-shadow-md">${livro.titulo}</h3>
                </div>
              </div>
              
              <!-- Verso do livro (trecho) -->
              <div class="book-back absolute w-full h-full rounded-xl overflow-hidden bg-gradient-to-br from-rose-50 to-pink-100 border-4 border-white shadow-2xl z-10 backface-hidden transform-rotate-y-180">
                <!-- Textura de papel -->
                <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC45Ii8+PHBhdGggZD0iTTAgMEwxMDAgMTAwIiBzdHJva2U9IiNmZmQ3ZDciIHN0cm9rZS13aWR0aD0iMC41IiBzdHJva2Utb3BhY2l0eT0iMC4zIi8+PC9zdmc+')]"></div>
                
                <!-- Conteúdo do verso -->
                <div class="relative z-10 h-full flex flex-col p-6">
                  <!-- Botão de voltar -->
                  <div class="absolute top-4 right-4">
                    <button class="flip-back-btn w-12 h-12 rounded-full bg-rose-100 flex items-center justify-center shadow-md hover:bg-rose-200 transition-colors" aria-label="Fechar trecho">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-rose-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                  
                  <!-- Trecho -->
                  <div class="flex-1 flex items-center justify-center p-4">
                    <p class="text-rose-800 text-lg italic text-center leading-relaxed font-serif">${livro.trecho}</p>
                  </div>
                  
                  <!-- Título no verso -->
                  <div class="text-center mt-2">
                    <span class="text-rose-700 font-medium">— ${livro.titulo}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        `
          )
          .join("")}
      </div>
    </div>
  `;

  // Adicionar estilos dinâmicos para 3D
  const style = document.createElement('style');
  style.textContent = `
    .transform-style-3d {
      transform-style: preserve-3d;
    }
    .backface-hidden {
      backface-visibility: hidden;
    }
    .transform-rotate-y-180 {
      transform: rotateY(180deg);
    }
    .book-card.flipped .book-3d-container {
      transform: rotateY(180deg);
    }
    .book-3d-container {
      transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
      width: 100%;
      height: 100%;
      position: relative;
    }
    
    /* Efeito pulsante para estrela */
    .flip-btn {
      animation: pulse-star 2s infinite;
      cursor: pointer;
      transition: transform 0.3s;
    }
    
    .flip-btn:hover {
      transform: scale(1.1) rotate(15deg);
      animation: none;
    }
    
    @keyframes pulse-star {
      0% { transform: scale(1); }
      50% { transform: scale(1.1); }
      100% { transform: scale(1); }
    }
  `;
  document.head.appendChild(style);

  // Configurar eventos de flip
  const flipButtons = container.querySelectorAll('.flip-btn');
  const flipBackButtons = container.querySelectorAll('.flip-back-btn');
  const bookCards = container.querySelectorAll('.book-card');

  flipButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const card = btn.closest('.book-card');
      card.classList.add('flipped');
      
      // Feedback visual
      gsap.to(btn, {
        scale: 1.2,
        duration: 0.2,
        yoyo: true,
        repeat: 1
      });
    });
  });

  flipBackButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const card = btn.closest('.book-card');
      card.classList.remove('flipped');
    });
  });

  // Fechar livro ao clicar fora
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.book-card')) {
      bookCards.forEach(card => {
        card.classList.remove('flipped');
      });
    }
  });

  // Efeito de levitação ao passar o mouse
  bookCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      if (!card.classList.contains('flipped')) {
        gsap.to(card, {
          y: -15,
          duration: 0.5,
          ease: "power2.out"
        });
      }
    });
    
    card.addEventListener('mouseleave', () => {
      gsap.to(card, {
        y: 0,
        duration: 0.7,
        ease: "elastic.out(1, 0.5)"
      });
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderBookSection();
});