import Pessoa from './pessoa'

import './assets' // Por padrão ele vai procurar um arquivo 'index.js'

require('./modulos/moduloA')

require('./modulos/moduloB')

const atendente = new Pessoa

console.log(atendente.cumprimentar())