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
let pedido = 1 // Incrementar o número de pedidos.
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
        "image": "https://i1.sndcdn.com/artworks-9JxiPFC5YMiYG7Mc-vgIfTA-t500x500.jpg",
        "titulo": "Estrogonofe de Frango",
        "texto": "Experimente nosso estrogonofe de frango com os melhores ingredientes",
        "preco": 14.99
    },
    {
        "id": 1,
        "image": "https://avatars.mds.yandex.net/i?id=c00750407a85221d661657e33f4f5520-5870067-images-thumbs&n=13",
        "titulo": "Estrogonofe de Carne",
        "texto": "Experimente nosso estrogonofe de carne com os melhores ingredientes",
        "preco": 14.99
    },
    {
        "id": 2,
        "image": "https://avatars.mds.yandex.net/i?id=8d78123db6a77e2b836d9cd74fd182ff-5242761-images-thumbs&n=13",
        "titulo": "Lasanha à bolonhesa",
        "texto": "Experimente nossa Lasanha com os melhores ingredientes",
        "preco": 14.99
    },
    {
        "id": 3,
        "image": "https://avatars.mds.yandex.net/i?id=2a0000017a1ac3c18f1acf160024bf8e413b-4253510-images-thumbs&n=13",
        "titulo": "Parmegiana de Frango",
        "texto": "Experimente nossa Parmegiana de Frango com os melhores ingredientes",
        "preco": 15.99
    },
    {
        "id": 4,
        "image": "https://i.pinimg.com/originals/4c/9f/00/4c9f002ffeeb47cd4edb654ac7d77d44.jpg",
        "titulo": "Parmegiana de Filemignon",
        "texto": "Experimente nosso Parmegiana de Filemignon com os melhores ingredientes",
        "preco": 15.99
    },
    {
        "id": 5,
        "image": "./assets/FIT.jpg",
        "titulo": "Fitness",
        "texto": "Experimente nossa Comida Fitness com os melhores ingredientes",
        "preco": 13.99
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
        
        <div class="products-section-body">
            <div class="products-section">
                <ul id="items-list" class="items-list">
                    <li class="item">
                        <div class="item-content">
                            <div class="item-left-side">
                                <div class="title">${value.titulo}</div>
                                <div class="description">${value.texto}</div>
                                <div class="prices-container">
                                    <div class="to-price">
                                        <span class="price-description">A partir de</span>
                                        <span class="price-value">R$&nbsp;${value.preco.toLocaleString()}</span>
                                    </div>
                                </div>
                                <button type="button" 
                            data-key="${key}" class="btnAdd" data-bs-toggle="modal" data-bs-target="#ModalAcompanhamento${key}">
                            <i class="bi bi-plus ico-btn"></i>
                            </button>
                                <div class="amount-wrapper js-amount-wrapper is-hidden"></div>
                            </div>
                            <div class="item-right-side">
                                <img width="130" height="130" alt="Pratos Executivos:" src="${value.image}">
                                <div class="js-loading-img-placeholder lazyloading-placeholder lazy-loading-done"></div>
                            </div>
                        </div>
                    </li>
                </ul>
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
                    <div class="img-dialog">
                        <img src="${value.image}" class="img-fluid"/>
                    </div>

                    <p>${value.titulo}</p>

                    <div id="item-properties" class="item-properties">
                        <div class="property">
                            <p class="title">Chegou a hora de você escolher o seu acompanhamento:</p>
                            <p class="description">Escolha no máximo 1 opção.</p>
                            <p class="errors"></p>
                        </div>

                        <div class="options">
                            <ul class="item-properties-list">
                                <li>
                                    <div>
                                        <img src="/img/item_image_placeholder.png" class="option-cover-photo--placeholder">
                                        <span class="span-checkbox">
                                            <span class="name">Arroz</span>
                                            <span class="formatted-price" data-price="44.9">- Sem custo adiconal</span>
                                        </span>
                                    </div>
                                    <label class="mdl-radio" for="item-acompanhamento">
                                        <input id="item-acompanhamento" type="radio" class="item-acompanhamento-radio" name="item-acompanhamento" value="Arroz">
                                    </label>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <button 
                        class="btn btn-success btn-modal" 
                        data-bs-dismiss="modal"
                        onclick="addAoCarrinho(${key})"
                        > Adicionar ao carrinho</button>
                    <button 
                        class="btn btn-light btn-modal" 
                        onclick="showCarro()"
                        data-bs-dismiss="modal"
                    >Ir para o carrinho   <i class="bi bi-cart4"></i></button>
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
    //salvarNoFirebase()
    // Verificar se já existe o produto no carrinho
    const existingIndex = listaDePratos.findIndex(item => item && item.id === pratos[key].id);


    if (existingIndex !== -1) {
        // Item já está no carrinho, incrementar a quantidade
        listaDePratos[existingIndex].qtd += 1;
        listaDePratos[existingIndex].preco = pratos[key].preco * listaDePratos[existingIndex].qtd;
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


// Função para salvar no Firebase
const salvarNoFirebase = () => {
    db.ref('carrinho').set(listaDePratos);
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
                <a class="btnExcluirItems" onclick="excluirItemsCarrinho(${key})"><b>Excluir <i class="bi bi-trash3"></i></b></a>
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
    const btnAdd = document.querySelector(`.btnAdd[data-key="${key}"]`);
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

    btnPedir.addEventListener('click', () => {
        pedido++;

        const msgTitle = '*Segue abaixo as informações do pedido:*\n\n';
        const nmrPedido = `*N° Pedido:* ${pedido}\n`
        const nomeCliente = '*Nome:* Bruno Braga\n\n'
        const pd = '*_-- PEDIDOS --_*\n' 

        const mensagem = listaDePratos.map((value) => {
            
            return `> *Prato:* ${value.titulo}, *Valor:* R$ ${value.preco.toLocaleString()}, *Quantidade:* ${value.qtd}
            `
        }).join('\n');
        
        const redirecionamento = `https://wa.me/5571982877132?text=
                ${encodeURIComponent(msgTitle + nmrPedido + nomeCliente + pd + mensagem)}`;
        
        // Finalmente abrir o link do whatsapp
        window.open(redirecionamento, '_blank')
    });
    
})


initApp()
setupListeners()


function selectRadio(liElement) {
    // Encontra o input de rádio dentro do elemento <li> clicado
    const radioInput = liElement.querySelector('.item-acompanhamento-radio');
    // Marca o rádio se não estiver marcado
    if (!radioInput.checked) {
        radioInput.checked = true;
    }
}