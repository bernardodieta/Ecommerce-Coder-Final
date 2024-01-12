import {db} from "../../config/firebase.js"
import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";

function FirestoreDataByCategory(category) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const q = query(collection(db, "products"), where("category", "==", category));
      const data = await getDocs(q);
      setData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getData();
  }, [category]);

  return { data };
}

export default FirestoreDataByCategory