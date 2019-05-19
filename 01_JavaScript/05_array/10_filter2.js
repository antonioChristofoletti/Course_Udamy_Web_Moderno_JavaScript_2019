// Exercício é implementar a função FILTER

const produtos = [
    { nome: "Notebook", preco: 2499, fragil: true },
    { nome: "IPad Pro", preco: 4199, fragil: true },
    { nome: "Copo de VIdro", preco: 12.49, fragil: true },
    { nome: "Copo de Plástico", preco: 18.99, fragil: false }
];

const isCaro = produto => produto.preco >= 500;

const isFragil = produto => produto.fragil;

// Versão do professor

Array.prototype.filter2 = function (callback) {
    let newArray = [];

    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            newArray.push(this[i]);
        }
    }

    return newArray;
}

console.log(produtos.filter2(isCaro).filter2(isFragil));

// Minha versão

Array.prototype.meuFilter = function (callback) {
    let newArray = [];

    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            newArray.push(this[i]);
        }
    }

    return newArray;
}

console.log(produtos.meuFilter(isCaro).meuFilter(isFragil));