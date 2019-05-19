/*

Node é um ambiente de execução de código javaScript no server side

Ele é formado por duas partes:

*** Interpretador V8 de Código JavaScript do Google

*** LIBUV (Trata os processos assincronos: Banco de dados, arquivo e etc...)

Como funciona

1. Aplicação manda a requisição
2. O interpretador V8 interpreta
3. Caso a requisição precise, ela vai parar na Pilha de Eventos
4. Depois o Event Loop vai tratar a requisição e vai delegar para uma thread worker
5. Enquanto isso o Event Loop vai continuar fazendo outras coisas
6. Quando a thread worker acabar o serviço dela, ela retorna o resultado para o Event Loop
7. Event loop finaliza a operação e continua executando

*/