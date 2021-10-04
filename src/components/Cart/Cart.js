import React, {useContext} from "react";
import { Context } from '../Context/CartContext'
import ItemCount from "../ItemCount/ItemCount";


const Cart = () => {
    const {cart, total, remove, clear} =useContext(Context)

    
       if(cart.lenght===0){
         return(
            <h1>No hay elementos agregados al carrito</h1>

         )}

         return(
            <>
            {cart.map((item)=>
            <div>
               <h3>Nombre: {item.title}</h3>
               <h4>Precio: ${item.price}</h4>
               <h4>Cantidad: {item.cantidad}</h4>
               <h5>Subtotal: ${item.subTotal}</h5>
               <button onClick={()=>remove(item.id, item.cantidad, item.price)}>Eliminar producto</button>
            </div>)}

           
         
           <h2>Total del carrito: {total}</h2>
           <button onClick={()=>clear()} >Vaciar carrito</button>
           </>
    )
      
}
export default Cart;

