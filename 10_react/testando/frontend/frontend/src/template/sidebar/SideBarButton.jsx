import React, { Component } from 'react'

import { faBars } from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import "./SideBarMenu.scss"

export default class extends Component {

    constructor(props) {
        super(props)
    }

    onClickEvent() {
        document.querySelector('.app').classList.toggle('app--show-Menu');
    }

    render() {
        return (
            <a className="aside-menu--button" >
                <FontAwesomeIcon icon={faBars} size="3x" onClick={e => this.onClickEvent()} />
            </a>
        )
    }
}