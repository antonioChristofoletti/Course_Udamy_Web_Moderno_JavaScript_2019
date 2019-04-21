function pokemon(){
    this.primeiroNome = "Pika",

    this.darSobrenome = function (sobreNome){
        console.log(`${this.primeiroNome + sobreNome}`);
    }
}

let meuPokemon = new pokemon();

console.log(meuPokemon);

//1##
let funcaoDarSobreNome = meuPokemon.darSobrenome;

funcaoDarSobreNome("chu");

//2##

funcaoDarSobreNome = meuPokemon.darSobrenome.bind(meuPokemon);

funcaoDarSobreNome("chu");

//3##

meuPokemon.darSobrenome.call(meuPokemon, "chu");

//4##

meuPokemon.darSobrenome.call(meuPokemon, ["chu"]);