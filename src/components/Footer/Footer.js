import React from 'react';
import "./Footer.css"
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebookSquare, faTwitterSquare, faInstagramSquare} from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
        <footer>
            <ul className="nav justify-content-center">
            <li className="nav-item">
            <Link to="/"className="nav-link active"> Inicio</Link>
            </li>
            <li className="nav-item">
            <Link to="/Clubes" className="nav-link">Clubes </Link>
            </li>
            <li className="nav-item">
            <Link to="/Selecciones" className="nav-link"> Selecciones</Link>
            </li>
            <li className="nav-item">
            <Link to="/contacto" className="nav-link"> Contacto</Link>
            </li>
            </ul>
            <div className="text-center">
                <a href="https://www.facebook.com" ><i><FontAwesomeIcon icon={faFacebookSquare}/></i></a>
                <a href="https://twitter.com"><i><FontAwesomeIcon icon={faTwitterSquare}/></i></a>
                <a href="https://www.instagram.com/"><i><FontAwesomeIcon icon={faInstagramSquare}/></i></a>
                <br/>
                <p>Desarrollado por <a href={"https://github.com/Arturogrottoli/Reactivo"} target={"_BLANK"} rel={"noreferrer"}>Arturo Grottoli</a></p>
            </div>
        </footer>
    );
}

export default Footer;