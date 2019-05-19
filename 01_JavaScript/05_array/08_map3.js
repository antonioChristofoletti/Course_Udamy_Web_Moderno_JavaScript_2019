// Exercício é implementar a funcao MAP

const carrinho = [
    ' { "nome": "borracha", "preco": 3.45 }',
    ' { "nome": "caderno", "preco": 13.90 }',
    ' { "nome": "Kit de Lapis", "preco": 41.22 }',
    ' { "nome": "Caneta", "preco": 7.50 }'
]

// Versão do professor

Array.prototype.map2 = function(callback){
    const newArray = [];

    for(let i=0; i < this.length;i++){
        newArray.push(callback(this[i], i, this));
    }

    return newArray;
}

const paraObjeto = json => JSON.parse(json);

const apenasPreco = produto => produto.preco;

const resultado = carrinho.map2(paraObjeto).map2(apenasPreco);

console.log(resultado);

// Minha versão

Array.prototype.minhaMap = function (callback) {
    let array = [];

    for(let i = 0; i < this.length; i++) {

        let valorTransformar = this[i];

        let valorTransformado = callback(valorTransformar);

        array.push(valorTransformado);
    }

    return array;
}

const func_atrair_valores = e => {
    let produto = JSON.parse(e);

    return produto.preco;
}

let valoresProdutos = carrinho.minhaMap(func_atrair_valores);

console.log(valoresProdutos);