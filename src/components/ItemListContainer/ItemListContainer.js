import ItemCount from '../ItemCount/ItemCount'
import ItemList from '../ItemList/ItemList'


const ItemListContainer = (props) =>{

    
 
    return (
        <>
            
            <br/>
            <h2>{props.titulo}¿Cual combo querés?</h2>
            
            <ItemList/>
            
        </>
    )
}


export default ItemListContainer