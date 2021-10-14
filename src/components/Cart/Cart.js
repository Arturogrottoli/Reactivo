import React, {useContext} from "react";
import  {useState, useEffect } from "react";
import { Context } from '../Context/CartContext'
import "./Cart.css";


const Cart = () => {
    const {cart, total, remove, clear} =useContext(Context)

      
    const [ name, setName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ lastName, setLastName ] = useState("");
    const [ phone, setPhone ] = useState("");

       if(cart.lenght===0){
         return(
            <h1>No hay elementos agregados al carrito</h1>

         )}
         
         return(
            <>
            
            <div className={"row"}>
            <div className={"col-lg-6 p-5"}>
            <h2>Cantidad de items en carrito: <span className="badge badge-primary badge-pill">ver</span></h2>
            {cart.map((item)=>
            <div className="container">
            <div className="item-cart">
                
               <img className="picture-card" alt="#" src={item.pictureUrl} ></img>
               <div className="product">
               <p>Remera: {item.title}</p>
               <p>Precio: ${item.price}</p>
               <p>Cantidad: {item.cantidad}</p>
               <h5>Subtotal: ${item.subTotal}</h5>
               <button type="button" className="btn btn-danger" onClick={()=>remove(item.id, item.cantidad, item.price)}>Eliminar producto</button>
               </div>
               
               
           </div> 
           </div>
            
            )}</div>
             
             <div className={"col-lg-6 p-5"}>
                    <h2>Datos Personales:</h2>
                    <form >
                        <div className="row">
                            <div className="col p-3">
                                <input required={true} onChange={(e) => setName(e.target.value)} type="text"
                                       className="form-control" id="name" placeholder="Nombre"/>
                            </div>

                            <div className="col-6 p-3">
                                <input required={true} onChange={(e) => setLastName(e.target.value)} type="text"
                                       className="form-control" id="lastname" placeholder="Apellido"/>
                            </div>
                            </div>
                            
                            <div className="row">
                            <div className="col-6 p-3">
                                <input required={true} type="number" onChange={(e) => setPhone(e.target.value)}
                                       className="form-control" id="phone" placeholder="Telefono"/>
                            </div>
                        
                        
                            <div className="col-6 p-3">
                                <input required={true} onChange={(e) => setEmail(e.target.value)} type="email" className="form-control"
                                       id="email" placeholder="Email"/>
                            </div>
                            
                        </div>
                        <div className="text-right pt-4">
                        <h2>Total del carrito:$ {total}</h2>
                        <button type="button" className="btn btn-danger mx-4" onClick={()=>clear()} >Vaciar carrito</button>
                        <button type="submit" className="btn btn-success mt-auto">Confirmar compra</button>
                         </div>
                    </form>
                </div>
           
                </div>
               
           </>
    )
      
}
export default Cart;