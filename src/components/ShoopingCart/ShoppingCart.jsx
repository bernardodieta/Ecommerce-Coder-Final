
import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { db } from "../../config/firebase.js";
import { collection, addDoc } from "firebase/firestore";
import { useNavigate } from 'react-router-dom';
import './ShoppingCart.css';

export const ShoppingCart = () => {
    const { cart, increaseQuantity, decreaseQuantity, removeFromCart } = useContext(CartContext);
    const navigate = useNavigate();
    const totalPrice = cart.reduce((total, product) => total + product.price * product.quantity, 0);

    const createOrder = async (cart) => {
        try {
          const docRef = await addDoc(collection(db, "orders"), {
            cart: cart.map((product) => ({
              id: product.id,
              title: product.title,
              price: product.price,
              image: product.image,
              quantity: product.quantity,
            })),
            total: totalPrice,
            date: new Date(),
          });
          navigate('/order-details', { state: { orderId: docRef.id } });
        } catch (e) {
          console.error("Error adding document: ", e);
        }
      };


    return (
        <div className='shoppingcart-container'>
            <div className='shoppingcart-header'>
                <h2>Shopping Cart</h2>
            </div>
            <div className='shoppingcart-product'>
                {cart.map((product, index) => (
                    <div key={index} className='product-id'>
                        <div>
                            <img src={product.image} alt="" />
                        </div>

                        <div>
                            <h3>{product.title.substring(0, 30) + '...'}</h3>
                        </div>
                        <div className='quantity-container'>
                            <button onClick={() => increaseQuantity(product.id)} className='btn-quantity'>+</button>
                            <h4>Quantity: {product.quantity}</h4>
                            <button onClick={() => decreaseQuantity(product.id)} className='btn-quantity'>-</button>
                        </div>
                        <div> <p>Price per Unit:{product.price}</p></div>

                        <button onClick={() => removeFromCart(product.id)} className='btn-pagar'>Delete</button>
                    </div>
                ))}
            </div>
            <div className='total-container'>
                <h2>Total Price: {totalPrice}</h2>
                <button onClick={() => createOrder(cart)} className='btn-pagar'>Pay</button>
            </div>

        </div>
    );
    
}