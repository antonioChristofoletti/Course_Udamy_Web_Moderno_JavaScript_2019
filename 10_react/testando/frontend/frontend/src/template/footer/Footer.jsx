import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare, faFacebookSquare, faTwitterSquare, faInstagram} from '@fortawesome/free-brands-svg-icons'

import './Footer.scss'

export default props =>
    <footer className="footer">
        <div className="footer__item">
            <h1 className="footer__item__title">Developed By</h1>
            <a href="https://github.com/antonioChristofoletti" target="_black" className="footer__item__subtitle"><FontAwesomeIcon  icon={faGithubSquare} size="sm"/> Antonio Lucas Christofoletti.</a>
        </div>

        <div className="footer__item">
            <h1 className="footer__item__title">Social Medias</h1>
            <a href="https://www.facebook.com/" target="_black" className="footer__item__subtitle"><FontAwesomeIcon  icon={faFacebookSquare} size="sm"/> Facebook.</a>
            <a href="https://twitter.com/" target="_black" className="footer__item__subtitle"><FontAwesomeIcon  icon={faTwitterSquare} size="sm"/> Twitter.</a>
            <a href="https://www.instagram.com/" target="_black" className="footer__item__subtitle"><FontAwesomeIcon  icon={faInstagram} size="sm"/> Instagram.</a>
        </div>
    </footer>