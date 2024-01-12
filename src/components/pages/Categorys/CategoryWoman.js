import React, { useState } from 'react'
import FirestoreDataByCategory from "../../api/firestore-dataCategory.js"
import '../Home/Home.css'
import ProductDetail from './ProductDetail.js';

function CategoryWomen() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const { data } = FirestoreDataByCategory('women')



  const handleClick = (product) => {
    setSelectedProduct(product);
}

if (!data) {
    return <div>Loading...</div>;
}
if (selectedProduct) {
    return <ProductDetail product={selectedProduct} />;
}

  return (
    <div className='home-container'>
      {data.map((item, index) => (
        <div key={index} className='product-card'>
          <h2>{item.title.substring(0, 30) + '...'}</h2>
          <img src={item.image} alt="" />
          <p>{item.price}</p>
          <button className='btn-comprar' onClick={() => handleClick(item)}>Buy</button>
          
        </div>
      ))}
    </div>
  )
}



export default CategoryWomen