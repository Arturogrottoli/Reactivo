import React, {useState, useEffect} from 'react';
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom";
//import data from '../../Data/Data';
// import { db } from "../../Firebase/Firebase"
import { only, getFirestore, doc, getDoc} from '../../Firebase/Firebase'


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

            

        // useEffect(()=>{
    //     getDoc(doc(db,'items',id)).then((QuerySnapshot)=>{
    //         const product={id: QuerySnapshot.id, ... QuerySnapshot.data()}
    //         setProducto(product)
    //     }).catch((error)=>{console.log("error searching intems", error)})
    // },[id])
    
        //    useEffect(() => {
        //         const productos = () =>{
        //            return new Promise((resolve, reject)=>{
        //                setTimeout(()=>{
        //                    resolve(data)
        //                },2000)
        //            })
        //        }
        //        productos().then((items)=>{
        //            const producto = items.find(producto => producto.id === parseInt(id))
        //            setProducto(producto)
        //            setLoading(false)
        //        })
        //    },[id])
          
       return (
        <>
            {loading ? <h1>Cargando...</h1> :
            <ItemDetail  id={producto.id} title={producto.title} detail={producto.detail} price={producto.price} stock={producto.stock} category={producto.category} pictureUrl={producto.pictureUrl} />
            
             }
        </>
    )
}

export default ItemDetailContainer