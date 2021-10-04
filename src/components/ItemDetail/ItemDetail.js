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
        onAdd({id,title,price},props.unidades)
        
       }

        return <>
        <div className="divItem">
                <div>
                    <div>
                        <img src={pictureUrl} alt={title}/> 
                    </div>
                </div>
                
            </div>
        
        <div className="details col-md-6">
            <br/>
        <h2 className="product-title">{title}</h2>
        <p className="product-description">{detail}</p>
        <h4 className="price">Precio: <span>${price}</span></h4>
        
        {!buy ? <ItemCount stock = {stock} onAdd={OnAddOriginal} /> : <Link to="/Cart"> <button>Finalizar Compra</button></Link>}
    </div>
       
    
    </>
}


 
export default ItemDetail;