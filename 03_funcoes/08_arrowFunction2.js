
/*
    Arrow function não varia o this, logo, não precisa usar bind nem a técnica SELF
*/

function Pessoa() {
    this.idade = 0;

    setInterval(() => {
        this.idade++;
        console.log(this.idade);
    }, 1000);
}

new Pessoa();