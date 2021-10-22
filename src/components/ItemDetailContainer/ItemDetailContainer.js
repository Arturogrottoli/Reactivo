import React, {useState, useEffect} from 'react';
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom";
import { only} from '../../Firebase/Firebase'


const ItemDetailContainer = () => {

    const [producto, setProducto] = useState([])
    const [loading, setLoading] = useState(true)
    const { id }= useParams()
    
   

       useEffect(() => {
           const item = only(id)
               item.then((data)=>{
                  setProducto(data.data())
                  setLoading(false)               
               }) 
            },[id])

  
          
       return (
        <>
            {loading ? <h1>Cargando...</h1> :
            <ItemDetail  id={producto.id} title={producto.title} detail={producto.detail} price={producto.price} stock={producto.stock} category={producto.category} pictureUrl={producto.pictureUrl} />
            
             }
        </>
    )
}

export default ItemDetailContainer