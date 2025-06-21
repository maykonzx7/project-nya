// ChildhoodSectionVanilla.js
// Versão Vanilla JS do ChildhoodSection para integração com main.js

export function renderChildhoodSection() {
  const section = document.getElementById("ChildhoodSection");
  if (!section) return;

  section.innerHTML = `
    <div class="relative z-10 max-w-6xl mx-auto">
      <h2 class="text-4xl md:text-6xl font-bold text-center mb-16 text-orange-900 font-serif" data-aos="fade-down">
        Nostalgia da Infância
      </h2>
      <div class="mb-24 bg-white rounded-2xl shadow-xl p-6 md:p-8 flex flex-col md:flex-row items-center border-2 border-orange-200" data-aos="fade-right">
        <div class="md:w-2/5 mb-6 md:mb-0 flex justify-center">
          <div class="relative">
            <div class="bg-gray-200 border-2 border-dashed rounded-xl w-64 h-64 md:w-80 md:h-80 flex items-center justify-center text-orange-500">
              <img src="/images/cocorico-capa.jpg" alt="Cocoricó" class="object-cover w-full h-full rounded-xl" />
            </div>
            <div class="absolute -bottom-4 -right-4 bg-yellow-400 text-orange-900 px-4 py-2 rounded-full font-bold rotate-3">
              Cocoricó!
            </div>
          </div>
        </div>
        <div class="md:w-3/5 md:pl-10">
          <h3 class="text-3xl font-bold mb-4 text-orange-800">Cocoricó</h3>
          <p class="text-lg mb-6 text-orange-900 leading-relaxed">
            A fazenda mais amada do Brasil! Júlio, Lúcia, Alípio, e todos os animais ensinando sobre amizade e aprendizado.
          </p>
          <div class="grid grid-cols-2 gap-4 mb-6">
            <div class="flex items-center bg-orange-50 p-3 rounded-lg border border-orange-200"><div class="w-10 h-10 rounded-full bg-orange-200 mr-3 flex items-center justify-center"><span class="text-orange-700">J</span></div><span class="font-medium text-orange-900">Júlio</span></div>
            <div class="flex items-center bg-orange-50 p-3 rounded-lg border border-orange-200"><div class="w-10 h-10 rounded-full bg-orange-200 mr-3 flex items-center justify-center"><span class="text-orange-700">L</span></div><span class="font-medium text-orange-900">Lúcia</span></div>
            <div class="flex items-center bg-orange-50 p-3 rounded-lg border border-orange-200"><div class="w-10 h-10 rounded-full bg-orange-200 mr-3 flex items-center justify-center"><span class="text-orange-700">A</span></div><span class="font-medium text-orange-900">Alípio</span></div>
            <div class="flex items-center bg-orange-50 p-3 rounded-lg border border-orange-200"><div class="w-10 h-10 rounded-full bg-orange-200 mr-3 flex items-center justify-center"><span class="text-orange-700">V</span></div><span class="font-medium text-orange-900">Vovó</span></div>
          </div>
          <button id="btn-cocorico" class="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-full transition-all transform hover:scale-105 shadow-lg hover:shadow-xl">
            Relembrar Episódios
          </button>
        </div>
      </div>
      <div class="mb-24 bg-white rounded-2xl shadow-xl p-6 md:p-8 flex flex-col md:flex-row-reverse items-center border-2 border-purple-200" data-aos="fade-left">
        <div class="md:w-2/5 mb-6 md:mb-0 flex justify-center">
          <div class="relative">
            <div class="bg-gray-200 border-2 border-dashed rounded-xl w-64 h-64 md:w-80 md:h-80 flex items-center justify-center text-purple-500">
             <img src="/images/castelo_ra_tim_bum.jpg" alt="Cocoricó" class="object-cover w-full h-full rounded-xl" />
            </div>
            <div class="absolute -bottom-4 -left-4 bg-purple-500 text-white px-4 py-2 rounded-full font-bold -rotate-3">
              Rá-Tim-Bum!
            </div>
          </div>
        </div>
        <div class="md:w-3/5 md:pr-10">
          <h3 class="text-3xl font-bold mb-4 text-purple-800">Castelo Rá-Tim-Bum</h3>
          <p class="text-lg mb-6 text-purple-900 leading-relaxed">
            O castelo mágico que marcou gerações! Nino, Pedro, Biba e Zequinha em aventuras inesquecíveis com o Professor Abobrinha.
          </p>
          <div class="mb-6 p-4 bg-purple-50 rounded-xl border border-purple-200">
            <h4 class="font-bold text-purple-700 mb-2">Personagens Inesquecíveis:</h4>
            <div class="flex flex-wrap gap-2">
              <span class="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">Nino</span>
              <span class="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">Morgana</span>
              <span class="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">Dr. Victor</span>
              <span class="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">Caipora</span>
              <span class="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">ETs</span>
              <span class="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">Gato Pintado</span>
            </div>
          </div>
          <button id="btn-castelo" class="px-6 py-3 bg-purple-500 hover:bg-purple-600 text-white font-bold rounded-full transition-all transform hover:scale-105 shadow-lg hover:shadow-xl">
            Visitar o Castelo
          </button>
        </div>
      </div>
      
      <!-- Coragem o Cão Covarde -->
      <div class="mb-24 bg-white rounded-2xl shadow-xl p-6 md:p-8 flex flex-col md:flex-row items-center border-2 border-indigo-200" data-aos="fade-right">
        <div class="md:w-2/5 mb-6 md:mb-0 flex justify-center">
          <div class="relative">
            <div class="bg-gray-200 border-2 border-dashed rounded-xl w-64 h-64 md:w-80 md:h-80 flex items-center justify-center text-indigo-500">
              <img src="/images/Coragem.jpg" alt="Coragem o Cão Covarde" class="object-cover w-full h-full rounded-xl" />
            </div>
            <div class="absolute -bottom-4 -right-4 bg-indigo-500 text-white px-4 py-2 rounded-full font-bold rotate-3">
              Aaahhh!
            </div>
          </div>
        </div>
        <div class="md:w-3/5 md:pl-10">
          <h3 class="text-3xl font-bold mb-4 text-indigo-800">Coragem, o Cão Covarde</h3>
          <p class="text-lg mb-6 text-indigo-900 leading-relaxed">
            O cachorrinho mais corajoso (e medroso) do mundo! Em uma casa no meio do nada, Coragem enfrenta monstros para proteger sua dona Muriel.
          </p>
          <div class="mb-6 p-4 bg-indigo-50 rounded-xl border border-indigo-200">
            <h4 class="font-bold text-indigo-700 mb-2">Personagens Memoráveis:</h4>
            <div class="flex flex-wrap gap-2">
              <span class="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">Coragem</span>
              <span class="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">Muriel</span>
              <span class="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">Eustácio</span>
              <span class="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">Katz</span>
              <span class="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">Le Quack</span>
              <span class="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">Computer</span>
            </div>
          </div>
          <button id="btn-coragem" class="px-6 py-3 bg-indigo-500 hover:bg-indigo-600 text-white font-bold rounded-full transition-all transform hover:scale-105 shadow-lg hover:shadow-xl">
            Relembrar o Medo
          </button>
        </div>
      </div>
      
  

      <!-- Os Sete Monstrinhos -->
      <div class="mb-24 bg-white rounded-2xl shadow-xl p-6 md:p-8 flex flex-col md:flex-row-reverse items-center border-2 border-emerald-200" data-aos="fade-left">
        <div class="md:w-2/5 mb-6 md:mb-0 flex justify-center">
          <div class="relative">
            <div class="bg-gray-200 border-2 border-dashed rounded-xl w-64 h-64 md:w-80 md:h-80 flex items-center justify-center text-emerald-500">
              <img src="/images/SeteMonstrinhos.jpg" alt="Os Sete Monstrinhos" class="object-cover w-full h-full rounded-xl" />
            </div>
            <div class="absolute -bottom-4 -left-4 bg-emerald-500 text-white px-4 py-2 rounded-full font-bold -rotate-3">
              Grrrr!
            </div>
          </div>
        </div>
        <div class="md:w-3/5 md:pr-10">
          <h3 class="text-3xl font-bold mb-4 text-emerald-800">Os Sete Monstrinhos</h3>
          <p class="text-lg mb-6 text-emerald-900 leading-relaxed">
            A família mais monstruosa da TV! Sete irmãos com personalidades únicas e suas aventuras com Mãe, Belinda e Maria.
          </p>
          <div class="mb-6">
            <h4 class="font-bold text-emerald-700 mb-3 text-lg">Personagens Principais:</h4>
            <div class="grid grid-cols-2 md:grid-cols-5 gap-3">
              <div class="flex flex-col items-center bg-emerald-50 p-3 rounded-lg border border-emerald-200">
                <div class="w-12 h-12 rounded-full bg-emerald-200 mb-2 flex items-center justify-center">
                  <span class="text-emerald-700 font-bold">1</span>
                </div>
                <span class="font-medium text-emerald-900 text-sm">Uma</span>
              </div>
              <div class="flex flex-col items-center bg-emerald-50 p-3 rounded-lg border border-emerald-200">
                <div class="w-12 h-12 rounded-full bg-emerald-200 mb-2 flex items-center justify-center">
                  <span class="text-emerald-700 font-bold">2</span>
                </div>
                <span class="font-medium text-emerald-900 text-sm">Dois</span>
              </div>
              <div class="flex flex-col items-center bg-emerald-50 p-3 rounded-lg border border-emerald-200">
                <div class="w-12 h-12 rounded-full bg-emerald-200 mb-2 flex items-center justify-center">
                  <span class="text-emerald-700 font-bold">3</span>
                </div>
                <span class="font-medium text-emerald-900 text-sm">Três</span>
              </div>
              <div class="flex flex-col items-center bg-emerald-50 p-3 rounded-lg border border-emerald-200">
                <div class="w-12 h-12 rounded-full bg-emerald-200 mb-2 flex items-center justify-center">
                  <span class="text-emerald-700 font-bold">4</span>
                </div>
                <span class="font-medium text-emerald-900 text-sm">Quatro</span>
              </div>
              <div class="flex flex-col items-center bg-emerald-50 p-3 rounded-lg border border-emerald-200">
                <div class="w-12 h-12 rounded-full bg-emerald-200 mb-2 flex items-center justify-center">
                  <span class="text-emerald-700 font-bold">5</span>
                </div>
                <span class="font-medium text-emerald-900 text-sm">Cinco</span>
              </div>
              <div class="flex flex-col items-center bg-emerald-50 p-3 rounded-lg border border-emerald-200">
                <div class="w-12 h-12 rounded-full bg-emerald-200 mb-2 flex items-center justify-center">
                  <span class="text-emerald-700 font-bold">6</span>
                </div>
                <span class="font-medium text-emerald-900 text-sm">Seis</span>
              </div>
              <div class="flex flex-col items-center bg-emerald-50 p-3 rounded-lg border border-emerald-200">
                <div class="w-12 h-12 rounded-full bg-emerald-200 mb-2 flex items-center justify-center">
                  <span class="text-emerald-700 font-bold">7</span>
                </div>
                <span class="font-medium text-emerald-900 text-sm">Sete</span>
              </div>
              <div class="flex flex-col items-center bg-emerald-50 p-3 rounded-lg border border-emerald-200">
                <div class="w-12 h-12 rounded-full bg-emerald-200 mb-2 flex items-center justify-center">
                  <span class="text-emerald-700 font-bold">M</span>
                </div>
                <span class="font-medium text-emerald-900 text-sm">Mãe</span>
              </div>
              <div class="flex flex-col items-center bg-emerald-50 p-3 rounded-lg border border-emerald-200">
                <div class="w-12 h-12 rounded-full bg-emerald-200 mb-2 flex items-center justify-center">
                  <span class="text-emerald-700 font-bold">B</span>
                </div>
                <span class="font-medium text-emerald-900 text-sm">Belinda</span>
              </div>
              <div class="flex flex-col items-center bg-emerald-50 p-3 rounded-lg border border-emerald-200">
                <div class="w-12 h-12 rounded-full bg-emerald-200 mb-2 flex items-center justify-center">
                  <span class="text-emerald-700 font-bold">M</span>
                </div>
                <span class="font-medium text-emerald-900 text-sm">Maria</span>
              </div>
            </div>
          </div>
          <button id="btn-monstrinhos" class="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-full transition-all transform hover:scale-105 shadow-lg hover:shadow-xl">
            Visitar a Casa Monstro
          </button>
        </div>
      </div>

      
      <!-- As Trigêmeas -->
      <div class="mb-24 bg-white rounded-2xl shadow-xl p-6 md:p-8 flex flex-col md:flex-row items-center border-2 border-pink-200" data-aos="fade-right">
        <div class="md:w-2/5 mb-6 md:mb-0 flex justify-center">
          <div class="relative">
            <div class="bg-gray-200 border-2 border-dashed rounded-xl w-64 h-64 md:w-80 md:h-80 flex items-center justify-center text-pink-500">
              <img src="/images/AsTrigemeas.jpg" alt="As Trigêmeas" class="object-cover w-full h-full rounded-xl" />
            </div>
            <div class="absolute -bottom-4 -right-4 bg-pink-400 text-white px-4 py-2 rounded-full font-bold rotate-3">
              Olá!
            </div>
          </div>
        </div>
        <div class="md:w-3/5 md:pl-10">
          <h3 class="text-3xl font-bold mb-4 text-pink-800">As Trigêmeas</h3>
          <p class="text-lg mb-6 text-pink-900 leading-relaxed">
            As irmãs mais travessas da animação! Elena, Helena e Lena sempre aprontando confusões e aprendendo lições valiosas.
          </p>
          <div class="mb-6 p-4 bg-pink-50 rounded-xl border border-pink-200">
            <h4 class="font-bold text-pink-700 mb-2">Aventuras Memoráveis:</h4>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div class="flex items-start">
                <span class="bg-pink-100 text-pink-800 rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-0.5">✓</span>
                <span class="text-pink-900">As Trigêmeas e o Alienígena</span>
              </div>
              <div class="flex items-start">
                <span class="bg-pink-100 text-pink-800 rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-0.5">✓</span>
                <span class="text-pink-900">As Trigêmeas e o Gato</span>
              </div>
              <div class="flex items-start">
                <span class="bg-pink-100 text-pink-800 rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-0.5">✓</span>
                <span class="text-pink-900">As Trigêmeas e o Super-Herói</span>
              </div>
              <div class="flex items-start">
                <span class="bg-pink-100 text-pink-800 rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-0.5">✓</span>
                <span class="text-pink-900">As Trigêmeas e o Castelo Assombrado</span>
              </div>
            </div>
          </div>
          <button id="btn-trigemeas" class="px-6 py-3 bg-pink-500 hover:bg-pink-600 text-white font-bold rounded-full transition-all transform hover:scale-105 shadow-lg hover:shadow-xl">
            Relembrar Aventuras
          </button>
        </div>
      </div>
      
      <div class="mt-20 text-center">
        <h3 class="text-3xl font-bold mb-6 text-orange-900" data-aos="fade-up">
          Qual é a sua melhor lembrança?
        </h3>
        <div class="max-w-2xl mx-auto bg-yellow-100 p-8 rounded-2xl border-2 border-orange-300 border-dashed">
          <p class="mb-6 text-orange-800 text-lg">
            "Lembra quando o Júlio descobria coisas novas na fazenda? Ou quando o Nino resolvia mistérios no castelo? E quando Coragem enfrentava monstros?"
          </p>
          <button id="btn-whatsapp" class="px-8 py-4 bg-gradient-to-r from-orange-400 to-purple-500 text-white font-bold text-xl rounded-full hover:scale-105 transition-transform shadow-lg" data-aos="zoom-in">
            Compartilhar Sua Memória
          </button>
        </div>
      </div>
    </div>
  `;

  // Redirecionamento dos botões
  setTimeout(() => {
    const btnCocorico = document.getElementById("btn-cocorico");
    if (btnCocorico) {
      btnCocorico.addEventListener("click", () => {
        window.open(
          "https://www.youtube.com/@TVCultura/search?query=cocoric%C3%B3",
          "_blank"
        );
      });
    }
    const btnCastelo = document.getElementById("btn-castelo");
    if (btnCastelo) {
      btnCastelo.addEventListener("click", () => {
        window.open("https://libreflix.org/i/castelo-ratimbum", "_blank");
      });
    }
    const btnCoragem = document.getElementById("btn-coragem");
    if (btnCoragem) {
      btnCoragem.addEventListener("click", () => {
        window.open(
          "https://youtu.be/6o6iXEpq1rU?si=fxg5t4fYs68GLvrC",
          "_blank"
        );
      });
    }
    const btnMonstrinhos = document.getElementById("btn-monstrinhos");
    if (btnMonstrinhos) {
      btnMonstrinhos.addEventListener("click", () => {
        window.open("https://youtube.com/playlist?list=PLt0FwbawIpaVwfn0BJv5ThvDIyCNqtkLm&si=jZP81Q5gLKukDBL8", "_blank");
      });
    }
    const btnTrigemeas = document.getElementById("btn-trigemeas");
    if (btnTrigemeas) {
      btnTrigemeas.addEventListener("click", () => {
        window.open(
          "https://youtube.com/playlist?list=PLnV6v55SvHzsnFeos5livB7EskyZwlKqH&si=SzwSqKzejYT8sE5t",
          "_blank"
        );
      });
    }
    const btnWhatsapp = document.getElementById("btn-whatsapp");
    if (btnWhatsapp) {
      btnWhatsapp.addEventListener("click", () => {
        const mensagem = encodeURIComponent(
          "Quero compartilhar uma lembrança!"
        );
        window.open(`https://wa.me/5587981541408?text=${mensagem}`, "_blank");
      });
    }
  }, 100);
}
