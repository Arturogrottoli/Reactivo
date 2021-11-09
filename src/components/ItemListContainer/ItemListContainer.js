import ItemList from '../ItemList/ItemList'
import "./ItemListContainer.css";

const ItemListContainer = (props) =>{

     
    return (
        <>
            <br/>
            <h2 className="titleContainer">¿Qué camiseta querés?</h2>
            <ItemList/>
            
        </>
    )
}


export default ItemListContainer