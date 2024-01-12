import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import getOrderById from '../api/firestore-data-id.js';
import './order.css'


export const OrderDetails = () => {
 
    const location = useLocation();
    const [order, setOrder] = useState(null);
    const orderId = location.state?.orderId;
    
    useEffect(() => {
        if (orderId) {
            //console.log(orderId)
            getOrderById(orderId).then(orderData => {
                if (orderData) {
                    setOrder(orderData);
                } else {
                    console.log("No such document!");
                }
            }).catch(error => {
                console.error("Error getting document:", error);
            });
        }
    }, [orderId]);

    if (!order) {
        return <div>No order details available</div>;
    }
   


    return (
        <div className='order-container'>
            <h3>Your purchase order has been generated correctly</h3>
            <h2>Your order number is: <p>{orderId}</p> </h2>
            <p>You have purchased the following products:</p>
            <div className='order-card-container'> {order.cart.map((product, index) => (
                <div key={index} className='order-card'>
                    <h2>{product.title}</h2>    
                    <img src={product.image} alt="asd" />
                    <p>Quantity: {product.quantity}</p>

                </div>
            ))}</div>
           
        </div>
    );
};