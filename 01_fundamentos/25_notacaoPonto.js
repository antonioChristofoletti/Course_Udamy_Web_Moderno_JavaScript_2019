console.log(typeof Math.ceil(6.1));

const obje1 = {};

obje1.nome = "Bola";
obje1["nome"] = "Bola 2"; // Mesma coisa da linha de cima

console.log(obje1.nome);

function Obj(nome){
    this.nome = nome;

    this.minhaFuncaoDOObjeto = function(){
        console.log("Exec...");
    }
}

const obj2 = new Obj("Cadeira");
const obj3 = new Obj("Mesa");
console.log(obj2.nome);
console.log(obj3.nome);

obj3.minhaFuncaoDOObjeto();