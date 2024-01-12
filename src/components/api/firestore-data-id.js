import {db} from "../../config/firebase.js"
import { doc, getDoc } from "firebase/firestore";

async function getOrderById(orderId) {
  const docRef = doc(db, "orders", orderId);
  const docSnap = await getDoc(docRef);
  //console.log(docSnap)
  if (docSnap.exists()) {
    return docSnap.data();
    
  } else {
    console.log("No such document!");
    return null;
  }
}

export default getOrderById;