// scripts.js
window.addEventListener("load", () => {
  const header = `
    <header class="cabecalho">
      <!-- Conteúdo do cabeçalho -->
    </header>
  `;

  const footer = `
    <footer>
      <!-- Conteúdo do rodapé -->
    </footer>
  `;

  document.getElementById("header").innerHTML = header;
  document.getElementById("footer").innerHTML = footer;
});
