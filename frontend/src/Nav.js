import React from 'react'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import Logo from './images/logo_healthi.png' // Logo de notre DashBoard
export {
    Logo
}
// Le Haut de la page Logo + Boutons

function Nav() {
    return (
        <nav>
            <img src={Logo} alt="Logo Health.I" className="Logo"></img>

            <ul className="nav-links">
                <Link to="/Page_Admin">
                    <button className="btn-custom">Page Administrative</button>
                </Link>

                <Link to="/">
                    <button className="btn-custom">Page Principale</button>
                </Link>
            </ul>
        </nav>
    );
}

export default Nav;