/*
    Em JavaScript a forma de criar objetos é a partir de funções.
    Uma classe em JavaScript internamento é uma função, servindo como um molde mesmo
    Criar um objeto literal obviamente resulta em um OBJECTO e não uma FUNÇÃO
*/

console.log(typeof Object);
console.log(typeof new Object);

const cliente = function(){};

console.log(typeof Cliente);
console.log(typeof new cliente);

class Produto {}; // ES 2015 (ES6)
console.log(typeof Produto);
console.log(typeof new Produto);