// Coleção dinâmica de pares chave/valor

const produto = new Object();

produto.nome = "Cadeira";
produto["Marca do Produto"] = "Genérica";
produto.preco = 220;

console.log(produto);

delete produto.preco;
delete produto["Marca do Produto"];

console.log(produto);

const carro = {
    modelo: "A4",

    proprietario: {
        nome: "Raul",
        idade: 56,
        endereco: {
            logradouro: "Rua ABC",
            numero: 123
        }
    },

    condutores: [
        {
            nome: "Junior",
            idade: 19
        },
        
        {
            nome: "Ana",
            idade: 42
        }
    ],

    calcularValorSeguro: function () {
        return 1000;
    }
}

carro.proprietario.endereco.numero = 1000;

carro["proprietario"]["endereco"]["endereco"] = "Av Gigante";

console.log(carro);

delete carro.condutores;

delete carro.proprietario.endereco;

delete carro.calcularValorSeguro;

console.log(carro);

console.log(carro.condutores);

console.log(carro.condutores.legth); // Erro nessa linha