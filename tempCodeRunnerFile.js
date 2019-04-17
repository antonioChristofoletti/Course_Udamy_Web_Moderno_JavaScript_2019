//Factory Function
function getCarro(nome, marca, velocidadeMaxima = 150) {
    return {
        nome,
        marca,
        velocidadeMaxima
    }
}

console.log(getCarro("Ferrari V1", "Ferrari", 300));

// Class
class ClassCarro {
    constructor(nome, marca, velocidadeMaxima = 150) {
        this.nome = nome;
        this.marca = marca;
        this.velocidadeMaxima = velocidadeMaxima;
    }
}

console.log(new ClassCarro("Ferrari V1", "Ferrari", 300));

// Constructor Function
function FunctionCarro(nome, marca, velocidadeMaxima = 150) {
    this.nome = nome;
    this.marca = marca;
    this.velocidadeMaxima = velocidadeMaxima;
}

console.log(new FunctionCarro("Ferrari V1", "Ferrari"));