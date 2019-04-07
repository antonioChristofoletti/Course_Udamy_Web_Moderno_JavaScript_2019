function meuTeste(valor, outraFuncao) {
    return outraFuncao(valor);
}

function outraFuncao(valor = 0) {
    return valor * 10;
}

function outraFuncaoQueSubtrai(valor = 0) {
    return valor - 10;
}


let resultado = meuTeste(5, outraFuncao);

console.log(resultado);

resultado = meuTeste(5, outraFuncaoQueSubtrai);

console.log(resultado);


// FIRST CLASS CITIZEN = Propriedade da linguagem que possibilita que um componente da linguagem exerça outros papéis

//constante, variavel, classe, objeto, método e etc...

function getValor(valor) {
    return valor * 3;
}

let func_getValor = function (valor) {
    return valor * 3;
}

func_getValor();

function processaValores(n1, n2, func){
    console.log(func(n1,n2));
}


console.log("****************");

processaValores(10,20, (numero1, numero2) => numero1 * numero2);

processaValores(10,20, (numero1, numero2) => numero1 / numero2);

processaValores(10,20, (numero1, numero2) => numero1 + numero2);

processaValores(10,20, (numero1, numero2) => numero1 - numero2);