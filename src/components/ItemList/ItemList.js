import React, {useState, useEffect } from 'react';
import Item from "../Item/Item.js";
import "./ItemList.css"
import { useParams } from 'react-router';
import { allItems, itemCat } from "../../Firebase/Firebase"
import Loading from '../Loading/Loading.js';


//funcion que mapea los items 

const ItemList = () => {
    
    
    const [productos, setProductos] = useState([])
    const [cargando, setCargando] = useState(true)
    const {category} = useParams()
    

    //Levanto todo mediante Firebase

      useEffect(() => {
          if(category != null){
              const items=itemCat(category)
              items.then((data)=>{
                  const itemsAux=[]
                  data.forEach(item => {
                      itemsAux.push({id:item.id, title:item.data().title, description:item.data().description, price:item.data().price, stock:item.data().stock, pictureUrl:item.data().pictureUrl, detail:item.data().detail, category:item.data().category})
                  });
                  
                  setProductos(itemsAux)
                  setCargando(false)
              })
            }else{
                const items=allItems()
              items.then((data)=>{
                  const itemsAux=[]
                  data.forEach(item => {
                      itemsAux.push({id:item.id, title:item.data().title, description:item.data().description, price:item.data().price, stock:item.data().stock, pictureUrl:item.data().pictureUrl, detail:item.data().detail, category:item.data().category})
                  });
                  
                  setProductos(itemsAux)
                  setCargando(false)
            })
        }
    },[category] )             


        
    return (
        <>
        
        <div className="itemList">
            
                
                {cargando ? <Loading/> :
                productos.map((producto) => (

                    //saco todos los valores desde el data

                    <Item key={producto.id}  pictureUrl={producto.pictureUrl} id={producto.id} title={producto.title} description={producto.description} price={producto.price} category={producto.category} stock={producto.stock}/>
                ))
            }
        </div>
        </>
    );
}
 
export default ItemList;