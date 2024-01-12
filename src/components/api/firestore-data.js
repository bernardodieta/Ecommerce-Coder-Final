import {db} from "../../config/firebase.js"
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";


function FirestoreData() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const data = await getDocs(collection(db, "products"));
      setData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getData();
  }, []);

  return { data };
}



export default FirestoreData