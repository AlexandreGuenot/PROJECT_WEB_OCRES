import React from 'react'
import './App.css'
import { Link } from 'react-router-dom'
import Logo from './images/Logo.png' // Logo de notre DashBoard
export {
    Logo
}
 // Le Haut de la page Logo + Boutons
 
function Nav(){
    return(
        <nav>
            <img src={Logo} alt="Logo Heath.I" className="Logo"></img>
            
            <ul className="nav-links">
                <Link to="/Page_Admin">
                <button className="btn">Page Administrative</button>
                </Link>
                
                <Link  to="/Page_Principale">
                <button className="btn">Page Principale</button>
                </Link>
            </ul>
        </nav>
    );
}

export default Nav;