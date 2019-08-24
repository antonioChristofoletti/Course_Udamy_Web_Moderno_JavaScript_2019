import React from 'react'

import './Display.css'

export default props =>
    <div className={`calculator__display ${props.otherClasses}`}>
        {props.value}
    </div>