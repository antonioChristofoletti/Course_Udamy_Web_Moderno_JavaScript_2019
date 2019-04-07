/*
    ### PARTE 1
    Em JavaScript o this pode variar, tudo dependente do local, no qual a função foi invocada.
    Função do tipo arrow guarda o contexto do this
*/

const pessoa = {
    saudacao: "Bom dia!",
    falar(){
        console.log(this.saudacao);
    }
}

pessoa.falar();
const falar = pessoa.falar;
falar(); // conflito entre paradigmas: funcional e OO

const falarDePessoa = pessoa.falar.bind(pessoa);
falarDePessoa();