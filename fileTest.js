function Pokemon(tipo = "Normal"){
    this.retornaEstrutura = function(){
        console.log(tipo);
    }
}

charmander = new Pokemon();

charmander.retornaEstrutura();

console.log(charmander);