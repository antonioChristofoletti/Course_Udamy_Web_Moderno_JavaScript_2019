class Pai{
    constructor(sobrenome){
        this.sobrenome = sobrenome;
    }

    getSobrenome(){
        console.log(`O seu sobrenome é: ${this.sobrenome}`)
    }
}

class Filho extends Pai{
    constructor(sobrenome, nome){
        super(sobrenome);

        this.nome = nome;
    }
}

let meuFilho = new Filho("Cunha", "Antonio");

meuFilho.getSobrenome();