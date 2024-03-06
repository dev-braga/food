
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
const btnAddCarrinho = document.querySelector('.btnAdd')
const carroTotal = document.querySelector('.carro-total')
const cardapio = document.querySelector('.cardapio-container')
const listPratosHTML = document.querySelector('.listPratos') 
const btnPedir = document.querySelector('.btn-pedir')
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
        "image": "/assets/estrogonofeFrango.png",
        "titulo": "Estrogonofe de Frango",
        "texto": "Experimente nosso estrogonofe de frango com os melhores ingredientes",
        "preco": 14.99
    },
    {
        "id": 1,
        "image": "/assets/estrogonofecarne.png",
        "titulo": "Estrogonofe de Carne",
        "texto": "Experimente nosso estrogonofe de frango com os melhores ingredientes",
        "preco": 14.99
    },
    {
        "id": 2,
        "image": "/assets/lasanha.png",
        "titulo": "Lasanha",
        "texto": "Experimente nosso estrogonofe de frango com os melhores ingredientes",
        "preco": 14.99
    },
    {
        "id": 3,
        "image": "/assets/frangoparmegiana.png",
        "titulo": "Parmegiana de Frango",
        "texto": "Experimente nosso estrogonofe de frango com os melhores ingredientes",
        "preco": 15.99
    },
    {
        "id": 4,
        "image": "/assets/filemionaparmegiana.png",
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
                    <button class="btnAdd" onclick="addAoCarrinho(${key})">
                       Adicionar ao Carrinho
                    </button>
                </div>
            </div>
        `;

        listPratosHTML.appendChild(novoPrato);
    });

    btnPedir.disabled = true; // Desabilitando botão caso o carrinho esteja vazio.
};



const addAoCarrinho = (key) => {
    // Verificar se já existe o produto no carrinho
    if(listaDePratos[key] == null){
        listaDePratos[key] = JSON.parse(JSON.stringify(pratos[key]))
        listaDePratos[key].qtd = 1
    }

    // Salvar no localStorage
    salvarNoLocalStorage();
    
    reloadPrato()
}
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
                <h4>${value.titulo}</h4>
                
                <div class="carro-item-quantia">
                    <button class="btnPlus" onclick="changeQuantidade(${key}, ${value.qtd - 1})">-</button>
                    <span class="qtd">${value.qtd}</span>
                    <button class="btnMinos" onclick="changeQuantidade(${key}, ${value.qtd + 1})">+</button>
                    <span class="carro-item-preco">R$ ${value.preco.toLocaleString()}</span>
                </div>

                </div>
            </div>
            `;
            carroBody.appendChild(novoPrato)
        }
        qtdNotificacaoCarrinho.innerText = count
        carroTotal.innerText = "R$ " + totalPrice.toLocaleString()
    })
}

const changeQuantidade = (key, qtd) => {
    if(qtd == 0){
        delete listaDePratos[key]
        qtdNotificacaoCarrinho.innerText = 0
        carroTotal.innerText = "R$ " + 0
        if(listaDePratos.length == "" ||listaDePratos.length < 1 ){
            hideCarro()
        }
    }else{
        listaDePratos[key].qtd = qtd
        listaDePratos[key].preco = qtd * pratos[key].preco
    }
    reloadPrato()
}

carroLimpar.addEventListener('click', (key, qtd) => {
    carroBody.innerHTML = ""
    listaDePratos.length = 0
    qtdNotificacaoCarrinho.innerText = 0
    carroTotal.innerText = "R$ " + 0
    carroBody.innerHTML = `
    <div class="carro-vazio" style="display: block;">Seu carro está vazio.</div>`
    document.querySelector('.btn-pedir').disabled = true // Desabilitar botão caso o array esteja vazio.
    hideCarro()
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