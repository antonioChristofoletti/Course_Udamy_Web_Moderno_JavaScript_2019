/*
    Callback ou também conhecido como padrão de projetos Observer nada mais é do que 
    passar uma função para uma outra função, sendo que a função parametro será invocada em determinado
    momento em um disparo de evento
*/


const fabricantes = ["Mercendes", "Audi", "BMW"];

function imprimir(nome, indice){
    console.log(`${indice + 1}. ${nome}`);
}


fabricantes.forEach(imprimir);

fabricantes.forEach(function(a){
    console.log(a);
});


fabricantes.forEach((a) => console.log(a));