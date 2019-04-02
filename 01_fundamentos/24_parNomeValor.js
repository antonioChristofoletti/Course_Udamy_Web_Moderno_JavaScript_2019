/*
    Aula falando sobre contexto de variável e a questão de chave valor tanto para objeto quanto para 
    variáveis normais
*/

const saudacao = "Opa"; //contexto léxico 1

function exec(){
    const saudacao = "Falaa"; // Contexto léxico 2
    return saudacao;
}

// Objetos são grupos aninhados de pares nome/valor

const cliente = {
    nome: "Pedro",
    idade: 32,
    peso: 90,
    endereco:{
        logradouro: "Rua Muito Legal",
        numero: 123
    }
}

console.log(saudacao);

console.log(exec());

console.log(cliente);