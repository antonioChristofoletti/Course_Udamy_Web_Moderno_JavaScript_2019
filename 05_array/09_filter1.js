/*

    PROPÓSITO DO FILTER: Criar um novo array de acordo com a função de filtragem passada como parâmetro

*/


const produtos = [
    {nome: "Notebook", preco: 2499, fragil: true},
    {nome: "IPad Pro", preco: 4199, fragil: true},
    {nome: "Copo de VIdro", preco: 12.49, fragil: true},
    {nome: "Copo de Plástico", preco: 18.99, fragil: false}
];

console.log(produtos.filter(function(p){
    return false;
}));


const isCaro = produto => produto.preco >= 500;

const isFragil = produto => produto.fragil;

console.log(produtos.filter(isCaro).filter(isFragil));