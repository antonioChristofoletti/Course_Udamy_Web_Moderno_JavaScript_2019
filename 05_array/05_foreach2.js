/*Criando o foreach manualmente, a minha implementação*/

Array.prototype.meuForeach = (arrayParametro, funcao) => {
    for (let i = 0; i < arrayParametro.length; i++) {
        funcao(arrayParametro[i], i, arrayParametro);
    }
}

let alunos = ["Antonio", "Lucas", "Ana"];

alunos.meuForeach(alunos, nome => {
    console.log(`Nome Aluno: ${nome}`);
});

Array.prototype.meuForeach2 = function (funcao) {
    for (let i = 0; i < this.length; i++) {
        funcao(this[i], i, this);
    }
}

alunos.meuForeach2(nome => {
    console.log(`Nome Aluno: ${nome}`);
});


/*Criando o foreach manualmente, implementação do professor*/

Array.prototype.forEach2 = function(callback){
    for(let i = 0; i < this.length; i++){
        callback(this[i], i, this);
    }
}

const aprovados = ["Agatha", "Aldo", "Daniel", "Raquel"];

aprovados.forEach2(function(nome, indice){
    console.log(`${indice + 1}) ${nome}`);
});