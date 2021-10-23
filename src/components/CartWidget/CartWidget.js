import React, {useContext} from "react";
import { Context } from '../Context/CartContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import "./CartWidget.css";

const CartWidget = () =>{
    const {unidades} = useContext(Context)
    return (
        <>
        <i ><FontAwesomeIcon icon={faShoppingCart}/><span className="badge badge-danger m-1">{unidades}</span></i>
        
        </>
    )
}


export default CartWidget




