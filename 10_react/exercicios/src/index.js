import React from 'react'
import ReactDOM from 'react-dom'

import BomDia from './componentes/BomDia'
import Multi from './componentes/Multiplos'
import Saudacao from './componentes/Saudacao'

import Pai from './componentes/Pai'
import Filho from './componentes/Filho'

const elemento = <h1>React 2</h1>

ReactDOM.render(
    /*<div>
        <Multi.BoaTarde nome="Ana"/>
        <Multi.BoaNoite nome="Bia"/>
    </div>*/
    /*<Saudacao tipo="Bom dia" nome="Antonio" />*/
    <Pai nome="Paulo" sobrenome="Silva">
        <Filho nome="Pedro"/>
        <Filho nome="Ana" />
        <Filho nome="Carla" />
    </Pai>
    , document.getElementById('root'))