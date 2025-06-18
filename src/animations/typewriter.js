import Typed from "typed.js";

export class TypewriterEffect {
  constructor(elementId, text) {
    this.element = document.getElementById(elementId);
    this.text = text;
    this.typed = null;
  }

  init() {
    if (!this.element) return;

    const options = {
      strings: [this.text],
      typeSpeed: 50,
      backSpeed: 0,
      loop: false,
      showCursor: true,
      cursorChar: "|",
      onComplete: (self) => {
        // Removendo o cursor após completar
        setTimeout(() => {
          const cursor = document.querySelector(".typed-cursor");
          if (cursor) {
            cursor.style.opacity = "0";
            setTimeout(() => cursor.remove(), 500);
          }
        }, 1000);
      },
    };

    this.typed = new Typed(this.element, options);
  }

  destroy() {
    if (this.typed) {
      this.typed.destroy();
    }
  }
}
