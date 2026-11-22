// bloom-deps:

const css = `/* Custom scrollbar styles — light mode (default) */
*::-webkit-scrollbar {
  width: 8px;
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

/* Dark mode — .dark class on any ancestor */
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

/* Dark mode — OS prefers-color-scheme: dark */
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
}

/* Firefox compatibility — light mode default */
html {
  scrollbar-width: thin;
  scrollbar-color: rgba(0, 0, 0, 0.2) transparent;
}

/* Firefox — .dark class */
.dark html {
  scrollbar-color: rgba(255, 255, 255, 0.2) transparent;
}

/* Firefox — OS prefers-color-scheme: dark */
@media (prefers-color-scheme: dark) {
  html {
    scrollbar-color: rgba(255, 255, 255, 0.2) transparent;
  }
}
`;

export default css;