
/*
    Como dito anteriormente, função com function acaba pegando o escopo do contexto, no qual ela foi executada.
    Pode pegar o global/window e isso pode ser um problema, CUIDADO!!!!!!!!!!!!!

    Já a arrow é muito mais estável, só aponta para o escopo no qual ela foi criada, não muda de jeito nenhum

*/


let comparaComThis = function (param){
    console.log(this === param);
};

comparaComThis(global);

const obj = {};

comparaComThis = comparaComThis.bind(obj);

comparaComThis(global);
comparaComThis(obj);

let comparaComThisArrow = (param) => console.log(this === param);

comparaComThisArrow(global);

comparaComThisArrow(module.exports);

comparaComThisArrow = comparaComThisArrow.bind(bj); // Não vai funcionar. Arrow Function não muda nunca

comparaComThisArrow(obj);

comparaComThisArrow(module.exports);