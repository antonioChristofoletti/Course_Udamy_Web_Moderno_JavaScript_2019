// Factory Simples com parametros
function criarProduto(nome, preco){
    return {
        nome,
        preco,
        desconto: preco * 0.05
    }
}

console.log(criarProduto("Caixa de Parafuso", 10));