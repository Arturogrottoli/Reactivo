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
            <Link to="/"> <a className="nav-link active" aria-current="page" href="/#">Inicio</a></Link>
            </li>
            <li className="nav-item">
            <Link to="/Clubes"><a className="nav-link" href="/#">Clubes</a> </Link>
            </li>
            <li className="nav-item">
            <Link to="/Selecciones"> <a className="nav-link" href="/#">Selecciones</a> </Link>
            </li>
            <li className="nav-item">
            <Link to="/contacto"> <a className="nav-link" href="/#">Contacto</a></Link>
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