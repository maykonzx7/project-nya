import "./style.css";
import "./styles/components.css";
import "./styles/animations.css";
import { HeroSection } from "./components/Hero";
import { renderBookSection } from "./components/BookSection";

if (history.scrollRestoration) {
  history.scrollRestoration = "manual";
}

window.addEventListener("load", () => {
  window.scrollTo(0, 0);
});

document.querySelector("#app").innerHTML = `
  <main class="w-full min-h-screen">
    <section id="hero" class="relative w-full min-h-screen flex items-center justify-center overflow-hidden"></section>
    <section id="book-section"></section>
    <!-- Adicione outras seções aqui -->
  </main>
`;

document.addEventListener("DOMContentLoaded", () => {
  new HeroSection();

  renderBookSection();
});
