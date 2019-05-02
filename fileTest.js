const fs = require('fs');

const caminhoArquivo = __dirname + "/meuArquivo.json";

let bd = {
    port: 1455,
    host: "localhost",
    user: "sa",
    password: "123456"
};

fs.writeFile(caminhoArquivo, JSON.stringify(bd), err =>{
    if(err != null)
    {
        console.log('Erro ao criar o arquivo. Erro: ' + err);
        return;
    }

    // lendo e convertendo diretamente para Object - SINCRONO
    let lendoBD = require(caminhoArquivo);
    console.log(lendoBD);

    // apenas lendo - ASSINCRONO
    fs.readFile(caminhoArquivo, "UTF-8", (err, conteudo)  =>{
        if(err != null)
        {
            console.log('Erro ao ler o arquivo. Erro: ' + err);
            return;
        }
    
        conteudo = JSON.parse(conteudo);
    
        console.log(conteudo);
    })

    // apenas lendo - SINCRONO
    let resultado = fs.readFileSync(caminhoArquivo, "UTF-8");
    console.log(resultado);
});