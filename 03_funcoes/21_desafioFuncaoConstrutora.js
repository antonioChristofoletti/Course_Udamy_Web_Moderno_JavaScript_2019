//Isso aqui é uma função construtura
//O class nada mais é do que uma função construtura no final
function Pessoa(nome){
    this.nome = nome;

    this.falar = function(){
        console.log(`Meu nome é ${this.nome}`);
    }
}

const p1 = new Pessoa("João");

p1.falar();