import ItemList from '../ItemList/ItemList'
import "./ItemListContainer.css";

const ItemListContainer = (props) =>{

     
    return (
        <>
            <br/>
            <h2 className="titleContainer">¿Que camiseta querés?</h2>
            <ItemList/>
            
        </>
    )
}


export default ItemListContainer