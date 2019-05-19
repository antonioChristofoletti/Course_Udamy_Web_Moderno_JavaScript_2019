/*
    A função compreende o contexto, no qual ela foi criada, esse contexto não é perdido
*/

const valor = "Global";

function minhaFuncao(){
    console.log(valor);
}

function exec(){
    const valor = "Local";
    minhaFuncao();
}

exec();