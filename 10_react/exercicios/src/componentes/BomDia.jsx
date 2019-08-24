import React from 'react'

export default props => [
    <h1 key='h1'> Bom dia {props.nome} {props.idade}</h1>,
    <h2 key='h1'>Até Breve </h2>
]

/*
    import {Fragment} from 'react'
    export default props =>
    <React.Fragment>
        <h1> Bom dia {props.nome} {props.idade}</h1>
        <h2>Até Breve </h2>
    </React.Fragment>
*/