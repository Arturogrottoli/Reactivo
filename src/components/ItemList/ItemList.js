import React, {useState, useEffect } from 'react';
import Data from "../../Data/Data.js"
import Item from "../Item/Item.js";
import "./ItemList.css"
import { useParams } from 'react-router';
import { db } from "../../Firebase/Firebase"
import { allItems, itemCat } from "../../Firebase/Firebase"


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


    //  useEffect(() => {
        
    //  const productos = () =>{
    //           return new Promise((resolve, reject)=>{
    //               setTimeout(()=>{
    //                   resolve(Data)
    //               },2000)
    //           })
    //       }
      
    //       productos().then((items)=>{
    //           if(category != null){
    //               const productosFiltrados=items.filter((producto)=>producto.category===category)
    //               setProductos(productosFiltrados)
    //               setCargando(false) 
    //           }else {
    //               setProductos(items)
    //               setCargando(false)
    //           }
            
            
    //       })
    //   },[category])
    
    return (
        <>
        
        <div className="itemList">
            
                
                {cargando ? <h1>Cargando...</h1> :
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