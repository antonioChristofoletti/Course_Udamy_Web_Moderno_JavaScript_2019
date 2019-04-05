/*
    novo recurso do ES2015
    Um operador que serve para extrair valores de estruturas (Objecto, array e etc)
*/

function rand( [min = 0, max = 1000] ){

    //Faz a inversão caso o MINIMO seja maior que o MAXIMO
    if(min > max)
        [min, max] = [max, min];

    const valor = Math.random() * (max-min) + min;

    return Math.floor(valor);
}

const meuVetor = [50, 100];

console.log(rand(meuVetor));