// SELETORES
const selectors = {
    carroBtn: document.querySelector('.cart'),
    carroCounter: document.querySelector('.counter-cart'),
    carroClose: document.querySelector('.carro-close'),
    carro: document.querySelector('.carro'),
    carroOverlay: document.querySelector('.carro-overlay'),
    carroLimpar: document.querySelector('.carro-limpar'),
    carroPedir: document.querySelector('.carro-pedir'),
    carroBody: document.querySelector('.carro-body'),
    btnAddCarrinho: document.querySelector('.btn-add-carrinho')
}

// Event Listeners 

const setupListeners = () => {
    document.addEventListener('DOMContentLoaded', initStore)

    // Evento dos produtos
    selectors.btnAddCarrinho.addEventListener('click', addCarrinho);
    
    // Evento do carrinho
    selectors.carroBtn.addEventListener('click', showCarro);
    selectors.carroOverlay.addEventListener('click', showCarro)
    selectors.carroClose.addEventListener('click', hideCarro)
}
const initStore = () => {

}

const showCarro = () => {
    selectors.carro.classList.add('show')
    selectors.carroOverlay.classList.add('show')
}
const hideCarro = () => {
    selectors.carro.classList.remove('show')
    selectors.carroOverlay.classList.remove('show')
}

const addCarrinho = (e) => {
    console.log(e.target)
}

setupListeners()