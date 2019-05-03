const porta = 3003;

const express = require('express');

const app = express();

app.get('/produtos', (req, rest, next) => {
    rest.send({ nome: 'nootbook', preco: 123.45 }); // Converte automaticamente para JSON
});

app.listen(porta, () => {
    console.log(`Servidor está executando na porta ${porta}.`);
});