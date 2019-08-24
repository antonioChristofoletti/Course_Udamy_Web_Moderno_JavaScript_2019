import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'

import './index.css'

import Calculator from './components/calculator/Calculator'

ReactDOM.render(<Calculator />, document.getElementById('root'))

serviceWorker.unregister()