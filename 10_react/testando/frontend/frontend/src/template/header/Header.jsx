import React from 'react'

import { Link } from 'react-router-dom'

import './Header.scss'

import Logo from '../../components/logo/Logo'

export default props =>
    <header className="header pl-3">
        <Logo />

        <Link to="/">
            <a className="header__title ml-3" href="#">Health Beta System</a>
        </Link>

    </header>