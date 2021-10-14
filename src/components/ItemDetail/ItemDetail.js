import React, {useState, useContext} from "react"
import ItemCount from "../ItemCount/ItemCount"
import "./ItemDetail.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min"
import {Link} from "react-router-dom";
import {Context} from '../Context/CartContext'


//Desarrolla la vista de un item de tipo pictureUrl, title, description, price

function ItemDetail({id, pictureUrl, title, description, price, stock, detail}){

    
    const [buy, setBuy] = useState(false)
    
    const {onAdd} = useContext(Context)

    const OnAddOriginal = (props) => {
        
        
        setBuy(true)
        onAdd({id,title,price, pictureUrl},props.unidades)
        
       }

        return <>

        
        <div className="container">
        <div className="container-detail">                        
        <img className="image-detail" src={pictureUrl} alt={title}/></div>                               
        <div className="container-detail">
        <h2 className="product-title">{title}</h2>
        <p className="product-description">{detail}</p>
        <h4 className="price">Precio: <span>${price}</span></h4>
        
        {!buy ? <ItemCount stock = {stock} onAdd={OnAddOriginal} /> : <Link to="/Cart"> <button type="button" className="btn btn-dark">Confirmar e ir al carrito</button></Link>}
        </div>
    </div>
        
    
    </>
}


 
export default ItemDetail;