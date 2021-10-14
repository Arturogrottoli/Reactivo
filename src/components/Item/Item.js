import React from 'react';
import "./Item.css"
import { Link } from "react-router-dom";


//Probando con desestructuración

function Item({id, pictureUrl, title, description, price, stock, category}) {

    
    return (
        <div className="item">
            
            <Link to={`/${category}/${id}`}>
            <img className="picture" alt="#" src={pictureUrl}></img></Link>
            
                <div className="product">
                <p className="title">{title}</p>
                    <div className="descriptionPrice">
                    <p className="description">{description}</p>
                        <p className="price">Precio: ${price}</p>
                        
                    </div>
                    
                    
                
                
            </div>
            
        </div>
        
    );
}
 
export default Item;