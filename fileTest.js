function funcaoTeste() {
    this.meuValor = "Y";

    this.veredito = () => {
        //console.log(this.meuValor);
    };
}

let meuObjeto = new funcaoTeste().veredito;

console.log(meuObjeto());