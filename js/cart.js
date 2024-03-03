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
    btnAddCarrinho: document.querySelector('.btn-add-carrinho'),

}

// Event Listeners 

const setupListeners = () => {
    document.addEventListener('DOMContentLoaded', initStore)

    // Evento dos produtos
    
    
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

const renderizarContainer = () => {
    const cardapio = document.querySelector('.cardapio-container')
    fetch("js/cardapio.json")
    .then( res => res.json())
    .then((dados) => {
        dados.pratos.map((prato) => {
            cardapio.innerHTML += `
            <div class="cardapio-cards">
            <div class="card" style="width: 18rem;">
            <img src="${prato.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${prato.titulo}</h5>
                <p class="card-text">${prato.texto}</p>
                <h3 class="text-preco">${prato.preco}</h3>
                <a class="btn btn-success btn-add-carrinho">Adicionar</a>
            </div>
            </div>
        </div>  
            ` 
        })
    })
}

renderizarContainer()
setupListeners()