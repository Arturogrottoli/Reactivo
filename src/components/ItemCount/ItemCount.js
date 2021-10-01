import { useState } from "react";
import "./ItemCount.css";


const ItemCount = (props) => {

    const [stock, setStock] = useState(props.stock)  
    const [unidades, setUnidades] = useState(0)
    
    
     const suma=()=>{
            if(stock===0){
                alert('No hay mas stock!')
            }else{
                setUnidades(unidades+1)
                setStock(stock-1)
            }
        }
    const resta=()=>{
            if(unidades===0){
                alert('La opcion no es valida')
            }else{
                setUnidades(unidades-1)
                setStock(stock+1)
            }
        }
    


    return (
        <div className="itemCount">
            <div className="itemCountBtn">
                <p className="stock">{stock}</p>
                <button className="btn btn-danger" disabled={stock === '0'} onClick={resta}>-</button>
                
                <button className="btn btn-success" disabled={stock === '0'} onClick={suma}>+</button>
            </div>
            <button className="btn btn-dark "   onClick={() => props.onAdd({unidades})}>Agregar al carrito {unidades} unidades</button>
            
        </div>
    );
}
 
export default ItemCount;