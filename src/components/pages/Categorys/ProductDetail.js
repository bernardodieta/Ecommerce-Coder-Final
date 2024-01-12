import React, { useState } from 'react';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext.js';
import { Link } from 'react-router-dom';
import './ProductDetail.css';
import { useEffect } from 'react';



function ProductDetail({ product }) {
    const { addToCart } = useContext(CartContext);
    const [isAdded, setIsAdded] = useState(false);

    const handleAddToCart = (product) => {
        addToCart(product);
        setIsAdded(true);
    }

    
    useEffect(() => {
        if (isAdded) {
            const timer = setTimeout(() => {
                setIsAdded(false);
            }, 5000);

            return () => clearTimeout(timer);
        }
    }, [isAdded])



    return (
        <div className='detail-container'>
            <div className='product-content'>

                <img src={product.image} alt="" />

            </div>
            <div className='product-description'>

                <h2>{product.title}</h2>
                < h4>Product Description</h4>
                <div >{product.description}</div>
                <h3>Price: ${product.price}</h3> <button className='btn-add' onClick={() => handleAddToCart(product)}>Add to Cart</button>
                {isAdded && <p>Product added to cart successfully!</p>}
                <Link to="/"><button className='btn-add'>Back</button></Link>

            </div>
        </div>
    );
}

export default ProductDetail;