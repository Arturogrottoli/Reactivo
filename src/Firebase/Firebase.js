
import { initializeApp } from "firebase/app";
import { doc, getFirestore} from  "firebase/firestore"
import { collection, getDocs, where, query, getDoc } from "@firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyCBwxYXSTrRrH-GUiSjf9bIB7XmDdbDa7U",
    authDomain: "coder-ecommerce-307f8.firebaseapp.com",
    projectId: "coder-ecommerce-307f8",
    storageBucket: "coder-ecommerce-307f8.appspot.com",
    messagingSenderId: "309753748442",
    appId: "1:309753748442:web:5ab61b495c4af69f3a7ee3"
  };

  

 

// Data Base de Firebase

initializeApp(firebaseConfig);
  const db = getFirestore()


//Funcion para traer todos los items

export const allItems = () =>{
  const query = getDocs(collection(db, 'items'))
  return query
}


export const itemCat = (category) =>{
  const q = collection(db, 'items')
  const q2 = query(q, where('category', '==', category))
  const q3 = getDocs(q2)
  return q3
}

export const only = (id) =>{
  const q = doc(db, 'items', id)
  const q2 = getDoc(q)
  return q2
}