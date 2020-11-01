import React from 'react'
import './App.css'
import { Link } from 'react-router-dom'
import Logo from './images/Logo.png'

export {
    Logo
}

function Nav(){
    return(
        <nav>
            <img src={Logo} className="Logo"></img>
            
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