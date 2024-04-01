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
      nomeCliente.innerHTML = `<p>Bem vindo(a), <b>${nome.value}</b>. Temos um cardápio incrível esperando por você.</p>`
    }
    
}
const nomeSalvo = localStorage.getItem("nomeUsuario");
const nomeCliente = document.querySelector('.txt-saudacao')

const verificarNome = () => {
    if(nomeSalvo){
      contentMain.classList.remove('lgg')
      apresentacao.classList.add('lgg')
      nomeCliente.innerHTML = `<p>Bem vindo(a), <b>${nomeSalvo}</b>. Temos um cardápio incrível esperando por você.</p>`
    }else{
      contentMain.classList.add('lgg')
      apresentacao.classList.remove('lgg')
    }
    
}


