import './NavBar.css'
import logo from '../assets/futbol.png';
import { Link, NavLink } from "react-router-dom"
import CartWidget from '../CartWidget/CartWidget';


const Funcion = ({itemList}) =>{

  
    
    return(
         
      <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <Link to="/"><a className="navbar-brand" href="/#">CasacasFutbol!</a></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <Link to="/"><img src={logo} alt="logo" width="60" height="55" className="logo"></img> </Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav menu">
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
          
          <div className="navcarrito">
          
          
          
          <NavLink activeClassName="navLinkActive" className="pull-right" to="/cart"><CartWidget/>
          
         </NavLink>
         
                     
         
          </div>
          
        </div>
      </div>
    </nav>


        )
}

export default Funcion