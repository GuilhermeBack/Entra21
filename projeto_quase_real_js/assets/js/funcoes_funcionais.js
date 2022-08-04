const vetorProduto =
    [
        {
            "produto": "Produto 01",
            "preco": 3.65,
            "descricao": "Lorem ipsum!",
            "em_stoque": true,
            "img": "assets/img/img001.jpg"
        },
        {
            "produto": "Produto 02",
            "preco": 100.00,
            "descricao": "Lorem ipsum! Not ipusum!",
            "em_stoque": false,
            "img": "assets/img/img002.jpg"
        },
        {
            "produto": "Produto 03",
            "preco": 0.90,
            "descricao": "Lorem ipsum! Not ipusum! Outro ipusum!",
            "em_stoque": true,
            "img": "assets/img/img003.jpg"
        },
        {
            "produto": "Produto 04",
            "preco": 7.90,
            "descricao": "Not ipusum! Outro ipusum!",
            "em_stoque": false,
            "img": "assets/img/img004.jpg"
        },
        {
            "produto": "Produto 05",
            "preco": 43.65,
            "descricao": "Lorem ipsum!",
            "em_stoque": true,
            "img": "assets/img/img005.jpg"
        },
        {
            "produto": "Produto 06",
            "preco": 170.00,
            "descricao": "Lorem ipsum! Not ipusum!",
            "em_stoque": false,
            "img": "assets/img/img006.jpg"
        },
        {
            "produto": "Produto 07",
            "preco": 25.90,
            "descricao": "Lorem ipsum! Not ipusum! Outro ipusum!",
            "em_stoque": true,
            "img": "assets/img/img007.jpg"
        },
        {
            "produto": "Produto 08",
            "preco": 17.90,
            "descricao": "Not ipusum! Outro ipusum!",
            "em_stoque": false,
            "img": "assets/img/img008.jpg"
        }
    ]
/**
 * filter, map, reduce
 * filter utilizado para filtrar itens em um array
 * map faz o mapeamento e executa a função.
 * reduce serve para tirar a média entre os valores dos elementos
 * length - retorna a quantidade de itens no vetor
 */
const produtos_em_stoque = (elemento) => {
    return elemento.em_stoque === true;
}
console.log(produtos_em_stoque);
/**
 * map: utilizado para transformar um valor em outro de todos os itens
 */
const converterDolar = (elemento) => {
    const newElemento = { ...elemento };
    newElemento.preco = newElemento.preco / 5.43;
    return newElemento;
}
const produtos_em_dolar = vetorProduto.map(converterDolar);
console.log('map:', produtos_em_dolar);

const retornaNomeProduto = (elemento) => {
    return elemento.produto + " - - - " +
        elemento.preco;
}

const nomesProdutos = vetorProduto.map(retornaNomeProduto)
console.log(nomesProdutos)

//Reduce - fazer um calculo com todos os elementos retornando um único valor 

const somaPrecos = (totalizador, elemento) => {
    return totalizador + elemento.preco;
}
const media_preco = vetorProduto.reduce(somaPrecos, 0);
console.log('reduce:', media_preco)
console.log('reduce + length: media', media_preco / vetorProduto.length)

const divListaProdutos =
    document.getElementById("lista-produtos");

/**
 * for(valor of vetor)
 * for(indice in vetor) **chave
 */

const exibirProdutos = (vetor) => {
    divListaProdutos.innerText = "";
    for (let elemento of vetor) {
        const divProduto = `
        <div class="produto">
        <h1>${elemento.produto}</h1>
        <p>${elemento.descricao}</p>
        <h5>R$ ${elemento.preco}</h5>
        </div> 
        `;
        divListaProdutos.innerHTML += divProduto;
    }
}

exibirProdutos(vetorProduto);
let estadoFiltroEstoque = false;
const btnFiltraApenasEstoque = document.getElementById('filtro01');
btnFiltraApenasEstoque.onclick = () => {
    estadoFiltroEstoque = !estadoFiltroEstoque;
    if (estadoFiltroEstoque) {
        const vetorFiltrado = vetorProduto.filter(produtos_em_stoque);
        exibirProdutos(vetorFiltrado);
    }
    else {
        exibirProdutos(vetorProduto)
    }
}

const btnreset = document.getElementById('reset');
btnreset.onclick = () => {
    exibirProdutos(vetorProduto)
    estadoFiltroEstoque = false;
}
/** mostrar a média dos preços dos produtos exibidos em tela
 * botão para exibir o preço em dolar
*/

    const btndolar = document.getElementById('dolar');
    btndolar.onclick = () => {
        estadoFiltroEstoque = !estadoFiltroEstoque;
        if (estadoFiltroEstoque) {
            const dolar = vetorProduto.map(converterDolar);
            exibirProdutos(dolar);
        }
        else {
            exibirProdutos(vetorProduto)
        }
    }


