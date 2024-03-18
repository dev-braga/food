let lastScrollTop = 0;

window.addEventListener("scroll", function() {
  let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScroll > lastScrollTop) {
    // Deslocamento para baixo, esconder a barra de navegação
    document.getElementById("navbar").classList.add("hidden");
  } else {
    // Deslocamento para cima, mostrar a barra de navegação
    document.getElementById("navbar").classList.remove("hidden");
  }

  lastScrollTop = currentScroll;
});
