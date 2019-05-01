/*

    Iniciar o package.json: npm init ou npm init -y
    O AXIOS é um client http ou seja, serve para consumir conteudo pelo protocolo HTTP

*/

const url = "http://files.cod3r.com.br/curso-js/funcionarios.json";

const axios = require("axios");

axios.get(url).then(response => {
    const funcionarios = response.data;
});


//Exercício encontrar uma chinesa, mulher e que possua o menor salário


// Minha resolução

axios.get(url).then(response => {
    const funcionarios = response.data;

    let func_filtrarFuncionarios = funci => funci.genero == 'F' && funci.pais == 'China';

    let func_descobrirFuncionariosMenorSalario = (funcionariosMenoresSalarios, funci) => {
        if (funcionariosMenoresSalarios == null) {
            funcionariosMenoresSalarios = [funci];
            return funcionariosMenoresSalarios;
        }

        if (funci.salario == funcionariosMenoresSalarios[0].salario)
            funcionariosMenoresSalarios.push(funci);

        if (funci.salario < funcionariosMenoresSalarios[0].salario)
            funcionariosMenoresSalarios = [funci];

        return funcionariosMenoresSalarios;
    };

    let resultFuncionariosMenoresSalarios = funcionarios.filter(func_filtrarFuncionarios)
                                                        .reduce(func_descobrirFuncionariosMenorSalario, null);

    if (resultFuncionariosMenoresSalarios.length == 0)
        console.log("Nenhum funcionário foi encontrado");

    if (resultFuncionariosMenoresSalarios.length >= 1)
    {
        console.log("O(s) funcionário(s) encontrados foram:")
        resultFuncionariosMenoresSalarios.forEach(funcionarios => {
            console.log(`Nome: ${resultFuncionariosMenoresSalarios[0].nome}`);
        });
    }
});

