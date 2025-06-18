# 🌸 Cantinho-nya

Um site pessoal nostálgico com design minimalista, animações suaves e uma paleta de cores acolhedora.

## 🚀 Stack Tecnológica

- **Vite** - Build tool rápido e moderno
- **Vanilla JavaScript** - Controle total e performance
- **Tailwind CSS** - Estilização utilitária + CSS custom
- **GSAP** - Animações profissionais

## 📋 Pré-requisitos

- Node.js 18+ 
- npm ou yarn

## 🛠️ Configuração Inicial

### 1. Criar o projeto com Vite

```bash
npm create vite@latest cantinho-nya -- --template vanilla
cd cantinho-nya
npm install
```

### 2. Instalar Tailwind CSS

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### 3. Configurar Tailwind

Edite `tailwind.config.js`:

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'rosa-claro': '#FFF0F5', // Lavender Blush
        'cinza-suave': '#A7A7A7',
      },
      fontFamily: {
        'serif': ['Playfair Display', 'serif'],
        'sans': ['Inter', 'Roboto', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
```

### 4. Configurar CSS principal

Substitua o conteúdo de `src/style.css`:

```css
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';

/* Importar Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Inter:wght@300;400;500;600&display=swap');

/* Estilos customizados */
@layer base {
  html {
    scroll-behavior: smooth;
  }
  
  body {
    @apply bg-rosa-claro text-gray-800 font-sans;
  }
}

/* Animações customizadas */
@layer utilities {
  .text-gradient {
    background: linear-gradient(135deg, #ec4899, #be185d);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
}
```

### 5. Instalar GSAP

```bash
npm install gsap
```

### 6. Instalar bibliotecas adicionais

```bash
npm install swiper aos typed.js glightbox
```

## 📁 Estrutura do Projeto

```
cantinho-rosa-clarinho/
├── public/
│   ├── images/
│   ├── audio/
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Hero.js
│   │   ├── BookSection.js
│   │   ├── MusicSection.js
│   │   ├── ChildhoodSection.js
│   │   └── Footer.js
│   ├── animations/
│   │   ├── particles.js
│   │   ├── typewriter.js
│   │   └── scrollAnimations.js
│   ├── styles/
│   │   ├── components.css
│   │   └── animations.css
│   ├── utils/
│   │   └── helpers.js
│   ├── main.js
│   └── style.css
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
```

## 🎨 Configuração inicial do HTML

Edite `index.html`:

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Cantinho Rosa-Clarinho</title>
  <meta name="description" content="Meu cantinho pessoal cheio de literatura, música e nostalgia">
</head>
<body>
  <div id="app">
    <!-- Hero Section -->
    <section id="hero" class="min-h-screen flex items-center justify-center relative overflow-hidden">
      <canvas id="particles"></canvas>
      <div class="text-center z-10">
        <h1 id="main-title" class="text-6xl font-serif text-gradient mb-4"></h1>
        <p class="text-xl text-cinza-suave">Um cantinho especial para minhas paixões</p>
      </div>
    </section>

    <!-- Book Section -->
    <section id="books" class="py-20 px-4">
      <!-- Conteúdo será inserido via JS -->
    </section>

    <!-- Music Section -->
    <section id="music" class="py-20 px-4 bg-white">
      <!-- Conteúdo será inserido via JS -->
    </section>

    <!-- Childhood Section -->
    <section id="childhood" class="py-20 px-4">
      <!-- Conteúdo será inserido via JS -->
    </section>

    <!-- Footer -->
    <footer class="py-10 text-center bg-gray-100">
      <!-- Conteúdo será inserido via JS -->
    </footer>
  </div>

  <script type="module" src="/src/main.js"></script>
</body>
</html>
```

## 🏃‍♀️ Como executar

```bash
# Desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview do build
npm run preview
```

## 📦 Deploy

### Vercel (Recomendado)
```bash
npm install -g vercel
vercel --prod
```

### Netlify
```bash
npm run build
# Fazer upload da pasta dist/
```

## 🎯 Próximos Passos

1. **Configure os componentes** em `src/components/`
2. **Implemente as animações** com GSAP em `src/animations/`
3. **Adicione suas imagens** em `public/images/`
4. **Customize as cores** no `tailwind.config.js`
5. **Teste a responsividade** em diferentes dispositivos

## 🔧 Configurações Opcionais

### ESLint + Prettier (Recomendado)
```bash
npm install -D eslint prettier eslint-config-prettier
npx eslint --init
```

### Configurar PWA
```bash
npm install -D vite-plugin-pwa
```

## 📚 Recursos Úteis

- [Documentação Vite](https://vitejs.dev/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [GSAP Docs](https://greensock.com/docs/)
- [Swiper.js](https://swiperjs.com/)

---

**Feito com 💖 para o Cantinho Rosa-Clarinho**