/*
    novo recurso do ES2015
    Um operador que serve para extrair valores de estruturas (Objecto, array e etc)
*/

function rand({min = 0, max = 1000}){
    const valor = Math.random() * (max-min) + min;

    return Math.floor(valor);
}

const objecto = {
    max : 150,
    min: 100
}

console.log(rand(objecto));

console.log(rand(objecto));