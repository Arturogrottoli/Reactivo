import React, {useState} from "react";

const Context = React.createContext()

const CartFunction = ({ children }) => {

    const [cart, setCart] = useState([])
    const [unidades,setUnidades] = useState(0)
    const [total, setTotal]= useState(0) 

    

    const onAdd = (producto, cantidad) => {
        const itemExist = cart.find(item=>item.id===producto.id) 

        
        if(!itemExist){
            setCart([...cart, {id:producto.id,  title:producto.title, pictureUrl:producto.pictureUrl, price:producto.price, cantidad:cantidad, subTotal:producto.price*cantidad } ])
            setUnidades(unidades+1)
            setTotal(total+(producto.price*cantidad))
            console.log(setCart)
        } 
        //si existe no puede estar repetido
         else {
             const cartAux=cart.map((item)=>{
              if(item.id===producto.id){
                   item.cantidad+=cantidad
                   item.subtotal+=(producto.price*cantidad)
              }
              return item
         })
         setCart(cartAux)
         console.log(cartAux)
         setTotal(total+producto.price*cantidad)
      }
 }

     const remove=(id, cantidad, price)=>{
     const nuevoCarrito=cart.filter((item)=>item.id!==id)
     setCart(nuevoCarrito)
     setTotal(total-(cantidad*price))
     setUnidades(cantidad)
     }

         

     const clear=()=>{
         setCart([])
         setTotal(0)
         setUnidades(1)
     }


    return <Context.Provider value={{cart,unidades, total, onAdd, remove, clear }}>
           { children }
          </Context.Provider>
    }


export {CartFunction, Context}