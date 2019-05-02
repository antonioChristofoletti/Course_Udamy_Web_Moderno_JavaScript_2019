/*

    Por padrão um módulo no node utiliza do padrão singleton, só tem uma instancia por módulo, porém, 
    se usar uma factory na referencia module.exports ai terá uma instancia por chamada

*/

const contadorA = require("./instanciaUnica");

const contadorB = require("./instanciaUnica");

const contadorC = require("./instanciaNova")();

const contadorD = require("./instanciaNova")();

contadorA.inc();
contadorB.inc();

console.log(contadorB.valor);

contadorC.inc();
contadorC.inc();

console.log(contadorC.valor, contadorD.valor);