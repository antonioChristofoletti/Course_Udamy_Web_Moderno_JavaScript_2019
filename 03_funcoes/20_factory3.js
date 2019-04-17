// CLASS VS FACTORY
// O THIS da classe varia igual a função normal, então, tormar cuidado

class Pessoa{
    constructor(nome){
        this.nome = nome;
    }

    falar(){
        console.log(`Meu nome é ${this.nome}`);
    }
}

const p1 = new Pessoa("João");

p1.falar();

const pessoa = nome =>{
    return{
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const p2 = pessoa("Maria");

p2.falar();

/* ######################## CONTEUDO EXTRA (Factory Function, Class and Constructor Function) ######################## */

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