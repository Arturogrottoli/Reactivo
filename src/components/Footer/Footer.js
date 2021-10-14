import React from 'react';
import "./Footer.css"
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/free-brands-svg-icons'

function Footer() {
    return (
        <footer>
            <ul className="nav justify-content-center">
            <li className="nav-item">
            <Link to="/"> <a className="nav-link active" aria-current="page" href="">Inicio</a></Link>
            </li>
            <li className="nav-item">
            <Link to="/Clubes"><a className="nav-link" href="">Clubes</a> </Link>
            </li>
            <li className="nav-item">
            <Link to="/Selecciones"> <a className="nav-link" href="">Selecciones</a> </Link>
            </li>
            <li className="nav-item">
            <Link to="/contacto"> <a className="nav-link" href="">Contacto</a></Link>
            </li>
            </ul>
            <div className="text-center">
                <a href="https://www.facebook.com" target={"_BLANK"} rel={"noreferrer"}><i className="fab fa-facebook-square"></i></a>
                <a href="https://twitter.com"><i className="fab fa-twitter-square" target={"_BLANK"} rel={"noreferrer"}></i></a>
                <a href="https://www.instagram.com/"><i className="fab fa-instagram" target={"_BLANK"} rel={"noreferrer"}></i></a>
                <br/>
                <p>Desarrollado por <a href={"https://github.com/Arturogrottoli/Coderhouse-React"} target={"_BLANK"} rel={"noreferrer"}>Arturo Grottoli</a></p>
            </div>
        </footer>
    );
}

export default Footer;