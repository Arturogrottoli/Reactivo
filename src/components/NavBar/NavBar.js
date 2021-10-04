import './NavBar.css'
import logo from '../assets/cerveza.png';
import { Link, NavLink } from "react-router-dom"
import CartWidget from '../CartWidget/CartWidget';


const funcion = ({itemList}) =>{

  
    
    return(
         
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <Link to="/"><a class="navbar-brand" href="">ComidaRapida!</a></Link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <Link to="/"><img src={logo} alt="logo" width="55" height="45" className="logo"></img> </Link>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
            <Link to="/"> <a class="nav-link active" aria-current="page" href="">Inicio</a></Link>
            </li>
            
            <li class="nav-item">
            
            <Link to="/Con-papas"><a class="nav-link" href="">Con-papas</a> </Link>
            </li>
            <li class="nav-item">
            
            <Link to="/Sin-papas"> <a class="nav-link" href="">Sin-papas</a> </Link>
            </li>
            <li class="nav-item">
            
            <Link to="/Us"><a class="nav-link" href="">Nosotros</a></Link> 
            </li>
            <li class="nav-item">
            
            <Link to="/Contact"> <a class="nav-link" href="">Contacto</a></Link>
            </li>
          </ul>
          <form class="d-flex">
          
          <NavLink activeClassName="navLinkActive" className="navLink" to="/cart"><CartWidget/>
          </NavLink>
         <h5 > 0 </h5>
            
          </form>
          
        </div>
      </div>
    </nav>


        )
}

export default funcion