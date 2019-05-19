const porta = 3003;

const express = require('express');
const bodyParser = require('body-parser');

const bancoDeDados = require('./bancoDeDados');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/produtos', (req, rest, next) => {
    rest.send(bancoDeDados.getProdutos()); // Converte automaticamente para JSON
});

app.get('/produtos/:id', (req, rest, next) => {
    rest.send(bancoDeDados.getProduto(req.params.id));
});

app.post('/produtos', (req, rest, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    });

    rest.send(produto); // JSON
});

app.put('/produtos', (req, rest, next) => {
    const produto = bancoDeDados.salvarProduto({
        id: req.body.id,
        nome: req.body.nome,
        preco: req.body.preco
    });

    rest.send(produto); // JSON
});

app.delete('/produtos/:id', (req, rest, next) => {
    const produto = bancoDeDados.excluirProduto(req.params.id);

    rest.send(produto); // JSON
});

app.listen(porta, () => {
    console.log(`Servidor está executando na porta ${porta}.`);
});