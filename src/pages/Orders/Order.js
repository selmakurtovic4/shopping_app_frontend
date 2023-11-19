// Order.js
import React from 'react';
import './Order.css'; // Add your styling if needed
import axios from 'axios';
import config from '../../config.json';

const SERVER_URL = config.SERVER_URL;

const Order = ({ order, onDeleteOrder }) => {
  const { id, userId, dateCreated, status } = order;

  const handleDeleteOrder = () => {
    axios.delete(`${SERVER_URL}/orders/${id}`)
      .then(() => {
        onDeleteOrder(id); 
      })
      .catch((error) => {
        console.error('Error deleting order:', error);
      });
  };
   
  const handleContinueOrder = () => {
    window.location.href = `/products/${id}`;
  };
  return (
    <div className="order-container">
      <h2>Your Cart:</h2>
      <h2>Order ID: {id}</h2>
      <p>User ID: {userId}</p>
      <p>Date Created: {dateCreated}</p>
      <p>Status: {status}</p>
      <div className="order-buttons">
      {status === 'INPROGRESS' && <button  onClick={()=>handleContinueOrder()} >Continue Order</button>}
        <button onClick={handleDeleteOrder}>Delete Order</button>
      </div>
    </div>
  );
};

export default Order;
