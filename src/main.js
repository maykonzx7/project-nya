import "./style.css";
import "./styles/components.css";
import "./styles/animations.css";
import { HeroSection } from "./components/Hero";
import { renderBookSection } from "./components/BookSection";
import { renderChildhoodSection } from "./components/ChildhoodSection";
import { renderFooter } from "./components/Footer";

// Configuração global para controle de scroll
if (history.scrollRestoration) {
  history.scrollRestoration = "manual";
}

// Forçar scroll top ao carregar a página
window.addEventListener("load", () => {
  window.scrollTo(0, 0);

  // Adiciona classe ao body para controle de animações
  document.body.classList.add("loaded");
});

// Estrutura principal da aplicação
document.querySelector("#app").innerHTML = `
  <main class="w-full min-h-screen">
    <section id="hero" class="relative w-full min-h-screen flex items-center justify-center overflow-hidden"></section>
    <section id="book-section" class="section-highlight py-16"></section>
    <section id="ChildhoodSection" class="section-highlight py-16"></section>
    <section id="Footer" class="section-highlight py-16">
    <!-- Adicione outras seções aqui -->
  </main>
`;

// Quando o DOM estiver pronto, inicializa os componentes
document.addEventListener("DOMContentLoaded", () => {
  const hero = new HeroSection();

  // Garante que o BookSection e o MusicSection sejam renderizados após o Hero
  setTimeout(() => {
    renderBookSection();
    renderChildhoodSection();
    renderFooter();
  }, 100);

  // Limpeza ao sair da página
  window.addEventListener("beforeunload", () => {
    hero.destroy();
  });
});
