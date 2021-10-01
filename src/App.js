import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar.js';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min"
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';
import {BrowserRouter ,  Switch, Route} from "react-router-dom";
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemList from './components/ItemList/ItemList';

const App = () => {
  
  
  return (
    <BrowserRouter>
    <div className="App">
      <header className="App-header">
      <NavBar/> 
      </header>
      <Switch>
      <Route exact path="/">
          <ItemListContainer />
      </Route>
      <Route path="/:category" exact>
          <ItemList />
      </Route>
      <Route path="/:category/:id" exact>
          <ItemDetailContainer />
      </Route>
      <Route path="/cart">
         
      </Route>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
