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
    const cardapio = document.querySelector('.cardapio-container');
    
    fetch("js/cardapio.json")
    .then(res => res.json())
    .then((dados) => {
        dados.pratos.forEach((prato, index) => {
            cardapio.innerHTML += `
            <div class="cardapio-cards">
                <div class="card cardapio-card" style="width: 18rem;">
                    <img src="${prato.image}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title"> ${prato.titulo} </h5>
                        <p class="card-text"> ${prato.texto} </p>
                        <h3 class="text-preco"> ${prato.preco} </h3>
                        <a class="btn btn-success btn-add-carrinho" data-index="${index}">Adicionar</a>
                    </div>
                </div>
            </div>`;
        });
        
        // Adicione um evento de clique a cada botão "Adicionar"
        const btnAddCarrinho = document.querySelectorAll('.btn-add-carrinho');
        btnAddCarrinho.forEach((btn, i) => {
            btn.addEventListener('click', (event) => {
                const index = event.target.getAttribute('data-index');
                console.log(dados.pratos[i]);
            });
        });

        // Adicione um evento de clique a cada cardapio-card
        const cards = document.querySelectorAll('.cardapio-card');
        cards.forEach((card, index) => {
            card.addEventListener('click', () => {
                const imagem = dados.pratos[index].image;
                const descricao = dados.pratos[index].descricao;
                
                // Preencha o modal com os dados do card clicado
                document.getElementById('modalImagem').src = imagem;
                document.getElementById('modalDescricao').textContent = descricao;
                
                // Abra o modal usando JavaScript puro
                const detalhesModal = new bootstrap.Modal(document.getElementById('detalhesModal'));
                detalhesModal.show();
            });
        });
    });
}


renderizarContainer()
setupListeners()