// SELETORES
let carro = document.querySelector(".carro");
let qtd = document.querySelector(".qtd")

const carroBtn = document.querySelector('.cart')
const carroCounter = document.querySelector('.counter-cart')
const carroClose = document.querySelector('.carro-close')
const carroOverlay = document.querySelector('.carro-overlay')
const carroLimpar = document.querySelector('.carro-limpar')
const carroPedir = document.querySelector('.carro-pedir')
const carroBody = document.querySelector('.carro-body')
const btnAddCarrinho = document.querySelector('.btn-add-carrinho')

const cardapio = document.querySelector('.cardapio-container')
let listaDePratos = []

// Event Listeners 

const setupListeners = () => {

    // Evento do carrinho
    carroBtn.addEventListener('click', showCarro);
    carroOverlay.addEventListener('click', showCarro)
    carroClose.addEventListener('click', hideCarro)
    
}

const adicionarAoHTML = () => {
    
}

const initApp = () => {
    fetch('js/cardapio.json')
    .then( res => res.json())
    .then( data => {
        listaDePratos = data;
        adicionarAoHTML()
    })
}

const showCarro = () => {
    carro.classList.add('show')
    carroOverlay.classList.add('show')
}
const hideCarro = () => {
    carro.classList.remove('show')
    carroOverlay.classList.remove('show')
}

initApp()
setupListeners()