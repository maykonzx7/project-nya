export function renderFooter() {
  const footer = document.createElement("footer");
  footer.className =
    "w-full py-16 bg-gradient-to-t from-rose-50 to-rose-100 text-center text-rose-900 font-serif relative overflow-hidden";

  footer.innerHTML = `
    <!-- Efeito de círculos decorativos -->
    <div class="absolute inset-0 opacity-10 pointer-events-none">
      <div class="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-rose-300"></div>
      <div class="absolute -bottom-16 -right-16 w-80 h-80 rounded-full bg-rose-200"></div>
    </div>
    
    <div class="container mx-auto relative z-10">
      <!-- Cabeçalho com marca -->
      <div class="mb-12">
        <div class="flex justify-center mb-8">
          <div class="w-24 h-1 bg-rose-300 rounded-full"></div>
        </div>
        
        <div class="text-5xl font-light mb-6 tracking-wider">
          <span class="inline-block transform rotate-12">🌸</span>
          <span class="font-bold italic mx-4 text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-rose-800">Cantinho da Nyiii</span>
          <span class="inline-block transform -rotate-12">🌸</span>
        </div>
        
        <p class="text-lg max-w-2xl mx-auto mb-10 text-rose-700">
          Onde a nostalgia encontra a magia da infância. Relembre os momentos mais especiais
        </p>
      </div>
      
      <!-- Seção única com GitHub -->
      <div class="mb-16">
        <h3 class="text-xl font-semibold mb-6 relative pb-2 after:absolute after:bottom-0 after:left-1/3 after:w-1/3 after:h-0.5 after:bg-rose-300">
          Desenvolvido pra madame Nyiii.
        </h3>
        
        <div class="flex justify-center">
          <a href="https://github.com/maykonzx7" 
             target="_blank" 
             class="github-link w-20 h-20 rounded-full flex items-center justify-center bg-rose-200 text-rose-700 transition-all duration-500 hover:bg-rose-300 hover:shadow-lg hover:shadow-rose-200/50 transform hover:scale-110 group">
             
            <svg class="w-10 h-10 group-hover:rotate-[360deg] transition-transform duration-700" 
                 fill="currentColor" 
                 viewBox="0 0 24 24">
              <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z"/>
            </svg>
          </a>
        </div>
        
        <p class="mt-6 text-rose-700">
          Acesse nosso repositório no GitHub
        </p>
      </div>
      
      <!-- Rodapé inferior -->
      <div class="border-t border-rose-200 pt-8">
        <p class="text-sm text-rose-700">
          &copy; ${new Date().getFullYear()} Cantinho da Nyiii - Todos os direitos reservados<br>
          Feito <span class="text-rose-600"></span> por 
          <a href="https://github.com/maykonzx7" 
             target="_blank" 
             class="font-semibold hover:underline hover:text-rose-800 transition-colors">
            colaz
          </a>
        </p>
      </div>
    </div>
    
    <!-- Botão de voltar ao topo -->
    <button id="backToTop" 
            class="fixed bottom-8 right-8 bg-white text-rose-700 p-3 rounded-full shadow-md transition-all opacity-0 transform translate-y-10 border border-rose-200 hover:bg-rose-50 hover:text-rose-900 hover:shadow-lg">
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"></path>
      </svg>
    </button>
  `;

  document.body.appendChild(footer);

  // Animação de voltar ao topo
  const backToTop = document.getElementById("backToTop");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      backToTop.classList.remove("opacity-0", "translate-y-10");
      backToTop.classList.add("opacity-100", "translate-y-0");
    } else {
      backToTop.classList.remove("opacity-100", "translate-y-0");
      backToTop.classList.add("opacity-0", "translate-y-10");
    }
  });

  backToTop.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}
