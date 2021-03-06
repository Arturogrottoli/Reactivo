import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar.js';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min"
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';
import {BrowserRouter ,  Switch, Route} from "react-router-dom";
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemList from './components/ItemList/ItemList';
import { CartFunction } from './components/Context/CartContext';
import Cart from './components/Cart/Cart.js';
import Footer from './components/Footer/Footer';
import Contacto from './components/Contacto/Contacto';
import CartFinal from './components/CartFinal/CartFinal';


const App = () => {
  
  
  return (
    <BrowserRouter>
    <CartFunction>
    <div className="App">
      <header className="App-header">
      <NavBar/> 
      </header>
      <Switch>
      <Route path="/" exact >
          <ItemListContainer />
      </Route>
      <Route path="/cart" exact>
      <Cart/>
      </Route>
      <Route path="/contacto" exact>
      <Contacto />
      </Route>
      <Route path="/cartfinal" exact>
          <CartFinal />
      </Route> 
      <Route path="/:category" exact>
          <ItemList />
      </Route>
      <Route path="/:category/:id" exact>
          <ItemDetailContainer />
      </Route>
         
      </Switch>
      <Footer/>
    </div>
    </CartFunction>
    </BrowserRouter>
  );
}

export default App;