
const carro = document.querySelector(".carro");
const qtd = document.querySelector(".qtd")
const qtdNotificacaoCarrinho = document.querySelector('.counter-cart')

const carroBtn = document.querySelector('.cart')
const carroCounter = document.querySelector('.counter-cart')
const carroClose = document.querySelector('.carro-close')
const carroOverlay = document.querySelector('.carro-overlay')
const carroLimpar = document.querySelector('.carro-limpar')
const carroPedir = document.querySelector('.carro-pedir')
const carroBody = document.querySelector('.carro-body')
const carroTotal = document.querySelector('.carro-total')
const cardapio = document.querySelector('.cardapio-container')
const listPratosHTML = document.querySelector('.listPratos') 
const btnPedir = document.querySelector('.btn-pedir')
const btMinos = document.querySelector('.btnMinos')
const btPlus = document.querySelector('.btPlus')
let btnAdd = document.querySelector(`.btnAdd`);
// Modais
const modalEtapa1 = document.querySelector('.modal-etapa1') 
const modalEtapa2 = document.querySelector('.modal-etapa2')
// Array
const listaDePratos = []

// Event Listeners
const showCarro = () => {
    carro.classList.add('show')
    carroOverlay.classList.add('show')
}
const hideCarro = () => {
    carro.classList.remove('show')
    carroOverlay.classList.remove('show')
} 

const pratos = [
    {
        "id": 0,
        "image": "./assets/estrogonofeFrango.png",
        "titulo": "Estrogonofe de Frango",
        "texto": "Experimente nosso estrogonofe de frango com os melhores ingredientes",
        "preco": 14.99
    },
    {
        "id": 1,
        "image": "./assets/estrogonofecarne.png",
        "titulo": "Estrogonofe de Carne",
        "texto": "Experimente nosso estrogonofe de frango com os melhores ingredientes",
        "preco": 14.99
    },
    {
        "id": 2,
        "image": "./assets/lasanha.png",
        "titulo": "Lasanha",
        "texto": "Experimente nosso estrogonofe de frango com os melhores ingredientes",
        "preco": 14.99
    },
    {
        "id": 3,
        "image": "./assets/frangoparmegiana.png",
        "titulo": "Parmegiana de Frango",
        "texto": "Experimente nosso estrogonofe de frango com os melhores ingredientes",
        "preco": 15.99
    },
    {
        "id": 4,
        "image": "./assets/filemionaparmegiana.png",
        "titulo": "Parmegiana de Filemignon",
        "texto": "Experimente nosso estrogonofe de frango com os melhores ingredientes",
        "preco": 15.99
    }
]

// Função para salvar no localStorage
const salvarNoLocalStorage = () => {
    localStorage.setItem('carrinho', JSON.stringify(listaDePratos));
};

// Função para carregar do localStorage
const carregarDoLocalStorage = () => {
    const carrinhoSalvo = JSON.parse(localStorage.getItem('carrinho')) || [];
    //listaDePratos = [...carrinhoSalvo];

};

const setupListeners = () => {

    // Evento do carrinho
    carroBtn.addEventListener('click', showCarro);
    carroOverlay.addEventListener('click', showCarro)
    carroClose.addEventListener('click', hideCarro)
    
}

const initApp = () => {

    carregarDoLocalStorage();

    pratos.forEach((value, key) => {
        // Criando novo prato
        let novoPrato = document.createElement("div");
        novoPrato.classList.add("item");
         
        novoPrato.innerHTML = `
            <div class="card rounded-4">
                <img src="${value.image}" class="card-img-top" alt="">
                <div class="">
                    <h2 class="card-titulo">${value.titulo}</h2>
                    <h5 class="card-descricao">${value.texto}</h5>
                    <h3 class="card-preco">R$ ${value.preco.toLocaleString()}</h3>
                    <button type="button" 
                    data-key="${key}" class="btnAdd" onclick="addAoCarrinho(${key})"
                    data-bs-toggle="modal" data-bs-target="#ModalAcompanhamento${key}">
                      Adicionar <i class="bi bi-cart-check-fill ico-btn"></i>
                    </button>
                </div>
            </div>

            <div class="modal fade" id="ModalAcompanhamento${key}" tabindex="-1" aria-labelledby="modalAcompanhamento${key}" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <div class="dialog modal-dialog-centered">
                    <i class="bi bi-cart-check-fill ico-dialog"></i>
                    <div class="img-dialog">
                        <img src="${value.image}" style="width: 5rem;"/>
                    </div>
                    <h5>Adicionado ao carrinho</h5>
                    <p>${value.titulo}</p>
                    <button 
                    class="btn btn-light" 
                    onclick="showCarro()"
                    data-bs-dismiss="modal"
                    >Ir para o carrinho</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        `;
        listPratosHTML.appendChild(novoPrato);
        
    });
    
    btnPedir.disabled = true; // Desabilitando botão caso o carrinho esteja vazio.

};

const addAoCarrinho = (key) => {
    // Verificar se já existe o produto no carrinho
    const existingIndex = listaDePratos.findIndex(item => item && item.id === pratos[key].id);

    if (existingIndex !== -1) {
        // Item já está no carrinho, incrementar a quantidade
        listaDePratos[existingIndex].qtd += 1;
    } else {
        // Adicionar novo item ao carrinho
        const novoItem = JSON.parse(JSON.stringify(pratos[key]));
        novoItem.qtd = 1;
        listaDePratos.push(novoItem);
    }
    
    // Salvar no localStorage
    salvarNoLocalStorage();
    reloadPrato();
     

};



const reloadPrato = () => {
    carroBody.innerHTML = "";
    let count = 0;
    let totalPrice = 0;
    
    listaDePratos.forEach( (value, key) => {
        totalPrice = totalPrice + value.preco;
        count = count + value.qtd;

        if(value != null){
            let novoPrato = document.createElement("div")
            novoPrato.innerHTML = `
            <div class="carro-item">
                <img src="${value.image}" alt="">
                
                <div class="carro-item-detalhe">
                <h4><b>${value.titulo}</b></h4>
                <a class="btnExcluirItems" onclick="excluirItemsCarrinho(${key})">Excluir</a>
                <p>Quantidade</p>
                <div class="carro-item-quantia">
                    <button class="btMinos" 
                    onclick="changeQuantidade(${key}, ${value.qtd - 1}, 'btMinos')" ${value.qtd < 2 ? 'disabled' : ''}>-</button>
                    <span class="qtd">${value.qtd}</span>
                    <button class="btPlus" onclick="changeQuantidade(${key}, ${value.qtd + 1})">+</button>
                    <span class="carro-item-preco">R$ ${value.preco.toLocaleString()}</span>
                </div>

                </div>
            </div>
            `;
            carroBody.appendChild(novoPrato)
        }
        qtdNotificacaoCarrinho.innerText = count
        carroTotal.innerText = 'R$ ' + totalPrice.toLocaleString()
        
    })

}

const excluirItemsCarrinho = (key) => {
    carroBody.innerHTML = ""
    listaDePratos.splice(key, 1);

    reloadPrato()

    if(listaDePratos.length == 0){
        qtdNotificacaoCarrinho.innerText = 0
        carroTotal.innerText = "R$ " + 0
        carroBody.innerHTML = `<div class="carro-vazio" style="display: block;">Seu carro está vazio.</div>`
    }
   
}

const changeQuantidade = (key, qtd) => {

    listaDePratos[key].qtd = qtd
    listaDePratos[key].preco = qtd * pratos[key].preco
     
    reloadPrato()
}

carroLimpar.addEventListener('click', (key, qtd) => {
    carroBody.innerHTML = ""
    listaDePratos.length = 0
    qtdNotificacaoCarrinho.innerText = 0 
    carroTotal.innerText = "R$ " + 0
    carroBody.innerHTML = `<div class="carro-vazio" style="display: block;">Seu carro está vazio.</div>`
    document.querySelector('.btn-pedir').disabled = true // Desabilitar botão caso o array esteja vazio.
    // Resetar o texto do botão 'Adicionar'
    
    hideCarro()
    carregarDoLocalStorage()
})

// Botão de fazer o pedido ============
carroPedir.addEventListener('click', (key, qtd) => {

    if(listaDePratos.length < 1){
        modalEtapa1.innerHTML = 'Sem itens'
    }
    else{
        btnPedir.disabled = false
        modalEtapa1.innerHTML = '' // Limpando antes de exibir o resultado.
        listaDePratos.forEach((value, key) => {
            modalEtapa1.innerHTML += `
            <ul class="list-group list-group-flush">
                <li> Prato</li>
                <li class="list-group-item"><b>Comida:</b> ${value.titulo}</li>
                <li class="list-group-item"><b>Valor:</b> R$ ${value.preco.toLocaleString()}</li>
                <li class="list-group-item"><b>Quantidade:</b> ${value.qtd}</li>
            </ul>
        `
        })
    }
    
})



initApp()
setupListeners()
