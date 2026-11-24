// bloom-deps:

const scrollbarCSS = `
/* ===== Custom Scrollbar Styles ===== */

/* Light mode base styles */
* {
  scrollbar-width: thin;
}

*::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

*::-webkit-scrollbar-track {
  background: transparent;
}

*::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.2);
  border-radius: 4px;
}

*::-webkit-scrollbar-thumb:hover {
  background: rgba(0, 0, 0, 0.4);
}

html {
  scrollbar-width: thin;
  scrollbar-color: rgba(0, 0, 0, 0.2) transparent;
}

/* Dark mode — class-driven (.dark ancestor) */
.dark *::-webkit-scrollbar-track {
  background: transparent;
}

.dark *::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.2);
  border-radius: 4px;
}

.dark *::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 255, 255, 0.4);
}

.dark html,
html.dark {
  scrollbar-color: rgba(255, 255, 255, 0.2) transparent;
}

/* Dark mode — system/OS-driven (prefers-color-scheme: dark) */
@media (prefers-color-scheme: dark) {
  *::-webkit-scrollbar-track {
    background: transparent;
  }

  *::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.2);
    border-radius: 4px;
  }

  *::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 0.4);
  }

  html {
    scrollbar-color: rgba(255, 255, 255, 0.2) transparent;
  }
}
`;

export default scrollbarCSS;