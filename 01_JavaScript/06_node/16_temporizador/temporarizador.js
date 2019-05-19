const schedule = require('node-schedule');

// Agendado tarefa modelo 1 
const tarefa1 = schedule.scheduleJob('*/5 * 12 * * 6', function(){ // segundo minuto hora 'dia do mes' mes 'dia da semana'
    console.log('Executando Tarefa 1', new Date().getSeconds());
});

// Cancelando a tarefa de modulo 1 para executar a tarefa de modulo 2
setTimeout(function(){
    tarefa1.cancel();
    console.log('Cancelando Tarefa 1!');
}, 20000); // 20 segundos

// Agendado tarefa modelo 2
const regra = new schedule.RecurrenceRule();

regra.dayOfWeek = [new schedule.Range(1,6)];

regra.hour = 12;

regra.second = 30;

const tarefa = schedule.scheduleJob(regra, function(){
    console.log('Executando tarefa 2!', new Date().getSeconds());
})