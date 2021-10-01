import React from 'react';
import "./Item.css"
import ItemCount from "../ItemCount/ItemCount"
import { Link } from "react-router-dom";


//Probando con desestructuración

function Item({id, pictureUrl, title, description, price, stock, category}) {

    
    return (
        <div className="item">
            <Link to={`/${category}/${id}`}>
            <img className="picture" alt="#" src={pictureUrl}></img>
            <div>
                <div className="product">
                <p className="title">{title}</p>
                    <div className="descriptionPrice">
                    <p className="description">{description}</p>
                        <p className="price">${price}</p>
                    </div>
                    <ItemCount stock={stock} />
                    
                </div>
                
            </div>
            </Link>
        </div>
        
    );
}
 
export default Item;