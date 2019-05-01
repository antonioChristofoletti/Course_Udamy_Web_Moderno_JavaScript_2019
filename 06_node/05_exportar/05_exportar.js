console.log(module.exports === this);
console.log(module.exports === exports);

this.a = 1;
exports.b = 2;
module.exports.c = 3;

exports = null;

console.log(module.exports);

/*
    O exports aponta para o module.exports asism como o this
    Logo, não há diferença de qual utilizar
*/


this.minhaFuncao = function(x){
    return x;
}

exports.minhaFuncao = function(x){
    return x;
}

module.exports.minhaFuncao = function(x){
    return x;
}