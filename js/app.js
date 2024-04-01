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


const nome = document.getElementById('inputName')
const apresentacao = document.querySelector('.apresentacao')
const contentMain = document.querySelector('.content-main')

const logar = () => {
    if(nome.value === ""){
      alert('Preencha o seu nome, por favor.')
    }else{
      contentMain.classList.remove('lgg')
      apresentacao.classList.add('lgg')
      localStorage.setItem("nomeUsuario", nome.value);
    }
    
}
const nomeSalvo = localStorage.getItem("nomeUsuario");

const verificarNome = () => {
    if(nomeSalvo){
      contentMain.classList.remove('lgg')
      apresentacao.classList.add('lgg')
    }
}

