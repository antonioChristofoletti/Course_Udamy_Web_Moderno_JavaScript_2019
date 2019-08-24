import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptopMedical } from '@fortawesome/free-solid-svg-icons'

import './Logo.scss'

export default props =>
    <div className="logo">
        <a href="#"><FontAwesomeIcon icon={faLaptopMedical} size="2x" /></a>
    </div>