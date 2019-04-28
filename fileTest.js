const notas = [
    {
        data: '2017-10-31',
        itens: [
            { conta: '2143', valor: 200 },
            { conta: '2111', valor: 500 }
        ]
    },
    {
        data: '2017-07-12',
        itens: [
            { conta: '2222', valor: 120 },
            { conta: '2143', valor: 280 }
        ]
    }, 
    {
        data: '2017-02-02',
        itens: [
            { conta: '2143', valor: 110 },
            { conta: '2111', valor: 390 }
        ]
    },     
];

Array.prototype.flatMap = function(callbackMap){

    let resultadoMap = this.map(callbackMap);

    return resultadoMap.reduce( (newArrayFlat, subArray) => newArrayFlat.concat(subArray), []);
}


let func_trairNota = conta => conta.conta == "2111";
let func_somarValor = (somatoria, conta) => somatoria + conta.valor;

let func_calcularImposto = (somatoria, conta) => somatoria + (conta.valor * 0.15);

let somatoriaFinal = notas
                     .flatMap( nota => nota.itens)
                     .filter(func_trairNota)
                     .reduce(func_somarValor, 0);

let calculoImposto = notas
                     .flatMap( nota => nota.itens)
                     .filter(func_trairNota)
                     .reduce(func_calcularImposto, 0);

let impostoTotal = notas
                     .flatMap( nota => nota.itens)
                     .reduce(func_calcularImposto, 0);

console.log(`O resultado final é.............: ${somatoriaFinal}`);
console.log(`O imposto sobre a nota X é......: ${calculoImposto}`);
console.log(`O imposto sobre todas as notas é: ${impostoTotal}`);