import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Cart.css';
import config from '../../config.json';

const SERVER_URL = config.SERVER_URL;

const Cart = ({ orderId }) => {
  const [order, setOrder] = useState(null);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    // Fetch the order details when the component mounts
    const fetchOrder = async () => {
      try {

        const response = await axios.get(`${SERVER_URL}/orders/${orderId}`);
        if (response.status === 200) {
          // Set the order data in the state
          console.log(response)
          setOrder(response.data);
        } else {
          console.error('Invalid response status:', response.status);
        }
      } catch (error) {
        console.error('Error fetching order:', error.message);
      }
    };

    fetchOrder(); 
  }, [orderId]); 

  
const handleSaveOrder = async (orderId) => {
  try {

    await axios.put(`${SERVER_URL}/orders/${orderId}`, { status: 'FINISHED' });
    setHidden(true);
  
  } catch (error) {
    console.error('Error saving order:', error);
    
  }
};

  const handleHideCart = () => {
    setHidden(true);
  };

  return (
    <div className={`cart-container ${hidden ? 'hidden' : ''}`}>
      <div className="cart-header">
        <h2>{orderId}</h2>
      </div>
      <div className="cart-content">
        {/* Display order details here */}
        {order && (
          <div>
            <p>Order Status: {order.status}</p>
      
          </div>
        )}
      </div>
      <div className="cart-footer">
        <button onClick={()=>handleSaveOrder(orderId)}>Save Order</button>
        <button onClick={handleHideCart}>Hide Cart</button>
      </div>
    </div>
  );
};

export default Cart;





  
 
