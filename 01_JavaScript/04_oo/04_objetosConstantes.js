// Pessoa -> 123 (Endereço de memória)
const pessoa = {nome: "João"}

pessoa.nome = "Pedro";

console.log(pessoa);

// pessoa -> 456 -> {...}
//pessoa = {nome: "Ana" };

Object.freeze(pessoa); // Congela o objeto, não da para alterar mais

pessoa.nome = "Maria";
pessoa.end = "Rua ABC";

delete pessoa.nome;

console.log(pessoa.nome);
console.log(pessoa);

const pessoaConstante = Object.freeze({nome : "João"});

console.log(pessoaConstante);