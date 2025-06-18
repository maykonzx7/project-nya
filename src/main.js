import "./style.css";
import "./styles/components.css";
import "./styles/animations.css";
import { HeroSection } from "./components/Hero";
import javascriptLogo from "./javascript.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "./counter.js";

document.querySelector("#app").innerHTML = `
  <main class="w-full min-h-screen">
    <section id="hero" class="relative w-full min-h-screen flex items-center justify-center overflow-hidden"></section>
    <!-- Outras seções serão adicionadas aqui -->
  </main>
`;

setupCounter(document.querySelector("#counter"));

// Inicializa a seção Hero
document.addEventListener("DOMContentLoaded", () => {
  new HeroSection();
});
