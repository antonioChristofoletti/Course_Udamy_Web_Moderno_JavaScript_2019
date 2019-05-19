// com promises

const http = require('http');

const getTurma = (letra, callback) => {
    return new Promise((resolve, reject) => {
        const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`;
        http.get(url, res => {
            let resultado = '';

            res.on('data', dados => {
                resultado += dados;
            });

            res.on('end', dados => {
                try {
                    resolve(JSON.parse(resultado));
                }
                catch (e) {
                    reject(e);
                }
            });
        });
    });
};

// Recurso do ES8
// Objetivo de simplificar o uso de promises

let nomes = [];

let obterAlunos = async () => {
    const ta = await getTurma('A');
    const tb = await getTurma('B');
    const tc = await getTurma('C');


    return [].concat(ta, tb, tc);
}; // retorna um objeto AsyncFunction

obterAlunos()
    .then(alunos => alunos.map(a => a.nome))
    .then(nomes => console.log(nomes));