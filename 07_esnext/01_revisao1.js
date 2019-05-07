// let e const
{
    var a = 2;
    let b = 3;
    console.log(b);
}

console.log(a);

// Template String
const produto = 'iPad';

console.log(`${produto} é caro`);

// Destructuring
const [l, e, ...trans] = "Cod3r";
console.log(l, e, trans);

const [x, , y] = [1, 2, 3];
console.log(x, y);

const { idade: i, nome } = { nome: "Ana", idade: 9 };

console.log(i, nome);
