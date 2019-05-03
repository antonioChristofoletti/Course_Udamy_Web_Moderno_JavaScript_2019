// testando a implementação do chain of responsability

const middleware1 = (ctx, next) => {
    console.log("Faz o que tem que ser feito na função 1");
    ctx.funcao1 = "PASSOU";
    next();
};

const middleware2 = (ctx, next) => {
    console.log("Faz o que tem que ser feito na função 2");
    ctx.funcao2 = "PASSOU";
    next();
};

const middleware3 = (ctx) => {
    console.log("Faz o que tem que ser feito na função 3 ");
    ctx.funcao3 = "PASSOU";
};

const exec = (ctx, ...middlewares) => {

    if (middlewares.length == 0) return;

    const execPasso = (indice) => {

        if (indice > middlewares.length) return;

        middlewares[indice](ctx, () => execPasso(indice + 1));
    };

    execPasso(0);
};

let ctx = {};

exec(ctx, middleware1, middleware2, middleware3);