/*
*** BROWSER ***

-> Objeto window representa o escopo global do browser.Da para acessar pelo this ou pela chamada do objeto window;
-> Toda variavel com o tipo VAR ou função cai no window, variaveis do tipo let ou const não vão parar no window apesar de estarem no escopo global também;
-> Evitar mexer no window, só se for constante;
-> Uma forma para fugir do escopo global é utilizar objetos;

*** NODE ***

-> Objeto global equivale ao window no browser;
-> this a gente acessa o contexto do arquivo. Variavel/constante/função pode ser acessada por module.exports.nomeVariavel
-> Criando uma variavel sem var e sem let, cria uma variavel de tipo var no escopo global do node. NAO FAZER ISSO. Exemplo
    abc = 3;
    console.log(global.abc);
*/