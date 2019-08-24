import React from 'react'

import './Button.css'

export default props =>
    <button className={`calculator__button ${props.otherClasses}`} onClick={e => props.click && props.click(props.value)}>
        {props.value}
    </button>