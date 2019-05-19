// Exercício é retornar os preços dos produtos em um array

const carrinho = [
    ' { "nome": "borracha", "preco": 3.45 }',
    ' { "nome": "caderno", "preco": 13.90 }',
    ' { "nome": "Kit de Lapis", "preco": 41.22 }',
    ' { "nome": "Caneta", "preco": 7.50 }'
]

// Versão do professor

const paraObjeto = json => JSON.parse(json);

const apenasPreco = produto => produto.preco;

const resultado = carrinho.map(paraObjeto).map(apenasPreco);

console.log(resultado);

// Minha versão

const func_atrair_valores = e => {
    let produto = JSON.parse(e);

    return produto.preco;
}

let valoresProdutos = carrinho.map(func_atrair_valores);

console.log(valoresProdutos);