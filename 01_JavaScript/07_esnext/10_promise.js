function getTurma(letraTurma) {
    return new Promise((resolve, reject) => {
        try {
            const http = require('http');

            let url = `http://files.cod3r.com.br/curso-js/turma${letraTurma}.json`;

            http.get(url, res => {
                let retorno = "";
                res.on('data', dados => {
                    retorno += dados;
                });

                res.on('close', () => {
                    resolve(JSON.parse(retorno));
                });
            });
        } catch (e) {
            reject(`Erro ao retornar a turma. Erro: ${e}`);
        }
    })
}

let meuRetorno = [];

getTurma(A)
    .then()

Promise.all([getTurma('A'), getTurma('B'), getTurma('C')])
    .then(turmas => [].concat(...turmas))
    .then(alunos => alunos.forEach(aluno => console.log(aluno.nome)));

getTurma('A').then((turma) => {

    turma.map(a => a.turma = 'A');

    meuRetorno = meuRetorno.concat(turma);

    getTurma('B').then((turma) => {

        turma.map(a => a.turma = 'B');

        meuRetorno = meuRetorno.concat(turma);

        getTurma('C').then((turma) => {

            turma.map(a => a.turma = 'C');

            meuRetorno = meuRetorno.concat(turma);

            meuRetorno.forEach(a => console.log(`Aluno: ${a.nome} - Turma: ${a.turma}`));
        });
    });
});
