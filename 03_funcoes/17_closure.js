/*
    Closure é o escopo criado quando uma função é declarada
    Esse escopo permite a função acessar e manipular variáveis externas a função
    A FUNCAO SEMPRE LEMBRA-SE DAS SUAS ORIGENS
*/

// Contexto léxico em ação!

const x = "Global";

function fora(){
    const x = "Local";
    
    function dentro(){
        return x;
    }

    return dentro;
}

const minhaFuncao = fora();

console.log(minhaFuncao());