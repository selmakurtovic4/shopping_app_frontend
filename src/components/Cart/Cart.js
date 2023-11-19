// Cart.js

import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './Cart.css';

const Cart = () => {
  const [orderName, setOrderName] = useState('New Order');
  const [hidden, setHidden] = useState(false);
  const navigate = useNavigate();
  const { userId } = useParams();

  const handleSaveOrder = () => {
    // Implement logic to save the order
    console.log('Order saved:', orderName);
    navigate(`/orders/${userId}`); // Navigate to the user's orders
  };

  const handleCancelOrder = () => {
    // Implement logic to cancel the order
    console.log('Order canceled');
    navigate(`/orders/${userId}`); // Navigate to the user's orders
  };

  const handleHideCart = () => {
    setHidden(true);
  };

  return (
    <div className={`cart-container ${hidden ? 'hidden' : ''}`}>
      <div className="cart-header">
        <h2>{orderName}</h2>
      </div>
      <div className="cart-footer">
        <button onClick={handleSaveOrder}>Save Order</button>
        <button onClick={handleCancelOrder}>Cancel Order</button>
        <button onClick={handleHideCart}>Hide Cart</button>
      </div>
    </div>
  );
};

export default Cart;
