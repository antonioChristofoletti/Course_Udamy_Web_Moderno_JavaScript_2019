let chainElement1 = (ctx, next) => {
    console.log("Faz o que tem que fazer no CHAIN ELEMENTO 1");

    ctx.elemento1 = "Passou aqui em!!";

    if (next)
        next();
}

let chainElement2 = (ctx, next) => {
    console.log("Faz o que tem que fazer no CHAIN ELEMENTO 2");

    ctx.elemento2 = "Passou aqui em!!";

    if (next)
        next();
}

let chainElement3 = (ctx, next) => {
    console.log("Faz o que tem que fazer no CHAIN ELEMENTO 3");

    ctx.elemento3 = "Passou aqui em!!";

    if (next) 
        next();
}

let chainExec = (ctx, ...chainElements) => {

    if (!chainElements || !ctx) return;

    let chainProcess = indice => {

        if (indice >= chainElements.length) return;

        chainElements[indice](ctx, () => { chainProcess(indice + 1); });
    };

    chainProcess(0);
}

let ctx = {};

chainExec(ctx, chainElement1, chainElement2, chainElement3)

console.log(ctx);