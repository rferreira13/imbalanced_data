(function () {
  function applyLink() {
    try {
      // Em MkDocs Material, o site_name aparece dentro de ".md-header__topic .md-ellipsis"
      var el = document.querySelector(".md-header__topic .md-ellipsis");
      if (!el) return;

      var nome = "Rafael Marinho Ferreira";
      var url = "https://www.linkedin.com/in/rafael-ferreira-data-scientist/";

      var before = document.createTextNode("Estudos de ");
      var after = document.createTextNode(" em dados desbalanceados");

      var a = document.createElement("a");
      a.href = url;
      a.target = "_blank";
      a.rel = "noopener";
      a.textContent = nome;
      // opcionalmente, preserve o estilo do cabeçalho
      a.style.textDecoration = "none";

      // Substitui o conteúdo atual
      el.textContent = "";
      el.appendChild(before);
      el.appendChild(a);
      el.appendChild(after);
    } catch (e) {
      // Silencioso para não quebrar o build/execução
      console && console.debug && console.debug("brand-linkedin error:", e);
    }
  }

  // Executa quando o DOM estiver pronto, e também após trocas de página (instant navigation)
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", applyLink);
  } else {
    applyLink();
  }
  // MkDocs Material pode trocar conteúdo sem recarregar a página inteira
  document.addEventListener("DOMContentSwitch", applyLink);
})();
