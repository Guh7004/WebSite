function mostrarItens(categoria) {
    document.querySelectorAll('.items').forEach(cat => 
        cat.style.display = (cat.id === categoria ? 'flex' : 'none')
    );
}

// Lista para armazenar os itens do carrinho
let carrinho = [];

function adicionarAoCarrinho(nome, preco) {
    let itemExistente = carrinho.find(item => item.nome === nome);

    if (itemExistente) {
        itemExistente.quantidade++;
    } else {
        carrinho.push({ nome, preco, quantidade: 1 });
    }

    atualizarCarrinho();
}

function removerDoCarrinho(nome) {
    let item = carrinho.find(item => item.nome === nome);

    if (item) {
        item.quantidade--;

        if (item.quantidade === 0) {
            carrinho = carrinho.filter(produto => produto.nome !== nome);
        }
    }

    atualizarCarrinho();
}

function atualizarCarrinho() {
    let listaCarrinho = document.getElementById("lista-carrinho");
    let totalElement = document.getElementById("total");

    listaCarrinho.innerHTML = "";
    let total = 0;

    carrinho.forEach(item => {
        let li = document.createElement("li");
        let precoTotalItem = item.preco * item.quantidade;
        total += precoTotalItem;

        li.innerHTML = `${item.nome} (${item.quantidade}) - R$ ${precoTotalItem.toFixed(2)} 
                        <button class="remover" onclick="removerDoCarrinho('${item.nome}')">Remover</button>`;

        listaCarrinho.appendChild(li);
    });

    totalElement.innerText = `Total: R$ ${total.toFixed(2)}`;
}
