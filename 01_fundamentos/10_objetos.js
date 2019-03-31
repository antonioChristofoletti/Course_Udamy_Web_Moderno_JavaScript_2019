// Objeto em javascript é uma coleção de chave e valores. Pode armazenar até função

const prod1 = {};

prod1.nome = "Celular Ultra Mega";
prod1.preco = 4988.90;
prod1["Desconto Legal"] = 0.40; // Evitar atributos com espaços

console.log(prod1);

const prod2 = {
    nome: "Camisa Polo",
    preco: 79.90,
    obj:{
        blabla: 1,
        
        obj:{
            blabla: 1
        }
    }
}

console.log(prod2);