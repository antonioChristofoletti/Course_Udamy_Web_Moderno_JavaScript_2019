/*
    novo recurso do ES2015
    Um operador que serve para extrair valores de estruturas (Objecto, array e etc)
    Ele remove mesmo, não apenas copia!!!
*/

const pessoa = {
    nome: "Ana",
    idade: 5,
    endereco:{
        logradouro: "Rua ABC",
        numero: 1000
    }
}

const { nome, idade} = pessoa;

console.log(nome, idade);

const { nome: nome_editado, idade : idade_editado} = pessoa; // Alterando o nome da variável com destructuring

console.log(nome_editado, idade_editado);

const {sobrenome, bemHumorada = true} = pessoa; // Exemplo caso o valor não seja extraido da estrutura

console.log(sobrenome, bemHumorada);

const {endereco: {logradouro, numero, cep}} = pessoa; // ATENCAO!!!!!!!! Ele NAO está criando um objeto ENDERECO, na verdade está puxando de um objeto chamado ENDERECO  que está dentro de um objecto pessoa, dai ele criará: logradouro, numero e cep

console.log(logradouro, numero, cep);

//const {objetoInexistemte : {filho1: filho1}} = pessoa; // CUIDADO AO EXTRAIR DADOS DE UM OBJETO INEXISTENTE



