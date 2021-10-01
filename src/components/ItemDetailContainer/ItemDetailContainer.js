import React, {useState, useEffect} from 'react';
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom";
import Data from "../../Data/Data.js"




const ItemDetailContainer = () => {

    const [producto, setProducto] = useState([])
    const [loading, setLoading] = useState(true)
    const { id }= useParams()
   
    
        useEffect(() => {
             const productos = () =>{
                return new Promise((resolve, reject)=>{
                    setTimeout(()=>{
                        resolve(Data)
                    },2000)
                })
            }
            productos().then((items)=>{
                const producto = items.find(producto => producto.id === parseInt(id))
                setProducto(producto)
                setLoading(false)
            })
        },[id])
          
       return (
        <>
            {loading ? <h1>Cargando...</h1> :
            <ItemDetail  title={producto.title} detail={producto.detail} price={producto.price} stock={producto.stock} category={producto.category} pictureUrl={producto.pictureUrl} />
            
             }
        </>
    )
}

export default ItemDetailContainer   