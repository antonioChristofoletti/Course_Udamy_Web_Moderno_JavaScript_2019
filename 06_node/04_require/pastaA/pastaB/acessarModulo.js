/*O node no windows e no MAC conseguem encontrar arquivos com o caminho não exato, por exemplo, 
problemas de letras maiusculas e minusculas, porém, no linux não, então optar por colocar o nome 100 % igual ao arquivo mesmo.
*/
const moduloA = require("../../../02_sistemasDeModulos/modeloA");
console.log(moduloA.ola);

//É possível importar as bibliotecas padrões do javaScript também
/*const http = require("http");
http.createServer((req, res) => {
    res.write("Bom dia!");
    res.end();
}).listen(8080);*/ // testar no browser

/*É possível realizar uma importação "geral", basta criar um arquivo chamado "index.js" e nele importar os demais arquivos
O node reconhece o index como geral e procura dentro dele.*/
const c = require("./pastaC");
console.log(c.ola2);