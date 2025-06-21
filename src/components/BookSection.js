import "../styles/book-animations.css";
import { gsap } from "gsap";

const livros = [
  {
    titulo: "Helena",
    capa: "/images/HelenaLivro.jpg",
    trecho: "“A felicidade é como a pluma que o vento vai levando pelo ar...”",
    destaque: true,
    cor: "#fbcfe8",
  },
  {
    titulo: "Esaú e Jacó",
    capa: "/images/EsauJaco.jpg",
    trecho: "“Tudo é incerto neste mundo, e a harmonia é uma esperança.”",
    destaque: true,
    cor: "#fbcfe8",
  },
  {
    titulo: "O Quinze",
    capa: "/images/OQuinze.jpg",
    trecho: "“A seca é uma personagem viva, que entra, impera e destrói.”",
    destaque: true,
    cor: "#fbcfe8",
  },
  // Adicione mais livros conforme necessário
];

// Função auxiliar para fechar todos os livros abertos
function closeAllBooks() {
  document.querySelectorAll(".book-card.flipped").forEach((card) => {
    card.classList.remove("flipped");
  });
}

export function renderBookSection(containerId = "book-section") {
  const container =
    document.getElementById(containerId) || document.createElement("section");
  container.id = containerId;
  container.className = "py-16 bg-white flex flex-col items-center";

  if (!document.getElementById(containerId)) {
    document.body.appendChild(container);
  }

  container.innerHTML = `
    <div class="relative w-full max-w-7xl mx-auto px-4">
      <h2 class="text-4xl md:text-5xl font-serif text-center mb-16 relative z-10">
        <span class="bg-clip-text text-transparent bg-gradient-to-r from-rose-700 to-pink-600">
          Livros que Amo
        </span>
        <div class="w-24 h-1 bg-gradient-to-r from-rose-300 to-pink-300 mx-auto mt-4 rounded-full" 
             aria-hidden="true"></div>
      </h2>
      
      <div class="flex flex-wrap justify-center gap-10 relative z-20">
        ${livros
          .map(
            (livro, idx) => `
          <div class="book-card w-64 h-96 relative" 
               data-id="${idx}"
               aria-label="Livro ${livro.titulo}">
            <div class="book-3d-container w-full h-full relative">
              <!-- Frente do livro -->
              <div class="book-front absolute w-full h-full rounded-xl overflow-hidden shadow-2xl border-4 border-white z-20">
                <div class="absolute inset-0 bg-gradient-to-b from-rose-100/30 to-white/50" 
                     aria-hidden="true"></div>
                
                <button class="flip-btn absolute -top-3 -right-3 w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-600 rounded-full flex items-center justify-center rotate-12 shadow-lg z-20" 
                        aria-label="Ver trecho do livro ${livro.titulo}">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </button>
                
                <div class="absolute inset-0 rounded-lg overflow-hidden">
                  <img src="${livro.capa}" 
                       alt="Capa do livro ${livro.titulo}" 
                       class="w-full h-full object-cover"
                       loading="lazy">
                </div>
                
                <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-5 pt-10">
                  <h3 class="text-xl font-bold text-white text-center drop-shadow-md">${livro.titulo}</h3>
                </div>
              </div>
              
              <!-- Verso do livro -->
              <div class="book-back absolute w-full h-full rounded-xl overflow-hidden bg-gradient-to-br from-rose-50 to-pink-100 border-4 border-white shadow-2xl z-10">
                <div class="absolute inset-0 bg-paper-texture" aria-hidden="true"></div>
                
                <div class="relative z-10 h-full flex flex-col p-6">
                  <div class="absolute top-4 right-4">
                    <button class="flip-back-btn w-12 h-12 rounded-full bg-rose-100 flex items-center justify-center shadow-md hover:bg-rose-200 transition-colors" 
                            aria-label="Fechar trecho">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-rose-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                  
                  <div class="flex-1 flex items-center justify-center p-4">
                    <p class="text-rose-800 text-lg italic text-center leading-relaxed font-serif">
                      ${livro.trecho}
                    </p>
                  </div>
                  
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

  // Configurar eventos
  setupBookEvents(container);
}

function setupBookEvents(container) {
  let hoverTimeout;
  const flipButtons = container.querySelectorAll(".flip-btn");
  const flipBackButtons = container.querySelectorAll(".flip-back-btn");
  const bookCards = container.querySelectorAll(".book-card");

  const flipBook = (card, show) => {
    gsap.to(card.querySelector(".book-3d-container"), {
      rotationY: show ? 180 : 0,
      duration: 0.8,
      ease: "power3.out",
      onStart: () => {
        if (show) {
          card.classList.add("flipped");
          card.style.zIndex = "10";
        }
      },
      onComplete: () => {
        if (!show) {
          card.classList.remove("flipped");
          card.style.zIndex = "";
        }
      },
    });
  };

  // Eventos para botões de flip
  flipButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation(); // Impede propagação para o card
      const card = btn.closest(".book-card");
      closeAllBooks();
      flipBook(card, true);
    });

    btn.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        const card = btn.closest(".book-card");
        closeAllBooks();
        flipBook(card, true);
      }
    });
  });

  // Eventos para botões de voltar
  flipBackButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation(); // Impede propagação para o card
      const card = btn.closest(".book-card");
      flipBook(card, false);
    });

    btn.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        const card = btn.closest(".book-card");
        flipBook(card, false);
      }
    });
  });

  // Evento de clique no card principal
  bookCards.forEach((card) => {
    card.addEventListener("click", function (e) {
      // Ignora cliques nos botões específicos
      if (e.target.closest(".flip-btn") || e.target.closest(".flip-back-btn")) {
        return;
      }

      // Alterna estado do card
      if (card.classList.contains("flipped")) {
        flipBook(card, false);
      } else {
        closeAllBooks();
        flipBook(card, true);
      }
    });
  });

  // Fechar ao clicar fora
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".book-card")) {
      closeAllBooks();
    }
  });

  // Efeito hover (mantido)
  bookCards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      clearTimeout(hoverTimeout);
      if (!card.classList.contains("flipped")) {
        hoverTimeout = setTimeout(() => {
          gsap.to(card, {
            y: -15,
            duration: 0.5,
            ease: "power2.out",
          });
        }, 50);
      }
    });

    card.addEventListener("mouseleave", () => {
      clearTimeout(hoverTimeout);
      gsap.to(card, {
        y: 0,
        duration: 0.7,
        ease: "elastic.out(1, 0.5)",
      });
    });
  });
}
