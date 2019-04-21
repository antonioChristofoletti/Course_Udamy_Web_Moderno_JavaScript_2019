function getMamifero(){

    return {
        nome: "Mamifero",
        amamentar(){
            console.log("Por leite....");
        }
    }
}

function getHumano(protocoloRef){
    return {
        sobrenome: "Christofoletti",
        __proto__: protocoloRef
    }
}

console.log(getHumano(getMamifero()).nome);