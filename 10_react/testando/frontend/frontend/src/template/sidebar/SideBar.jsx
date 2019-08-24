import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faHome, faProcedures, faCalendarAlt, faUserCircle } from '@fortawesome/free-solid-svg-icons'

import { Link } from 'react-router-dom'

import './SideBar.scss'

export default props =>
    <aside className="aside-menu">
        <div className="aside-menu__item">
            <FontAwesomeIcon icon={faHome} size="lg" />
            <Link to='/' className="aside-menu__item__title">Home</Link>
        </div>
        <div className="aside-menu__item">
            <FontAwesomeIcon icon={faProcedures} size="lg" />
            <a className="aside-menu__item__title" href="/myPacients">My Pacients</a>
        </div>
        <div className="aside-menu__item">
            <FontAwesomeIcon icon={faCalendarAlt} size="lg" />
            <a className="aside-menu__item__title" href="/myAppointments">My Appointments</a>
        </div>
        <div className="aside-menu__item">
            <FontAwesomeIcon icon={faUserCircle} size="lg" />
            <a className="aside-menu__item__title" href="/myAccount">My Account</a>
        </div>
    </aside>