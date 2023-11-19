// Order.js
import React from 'react';
import './Order.css'; // Add your styling if needed
import axios from 'axios';
import config from '../../config.json';

const SERVER_URL = config.SERVER_URL;

const Order = ({ order, onDeleteOrder }) => {
  const { id, userId, dateCreated } = order;

  const handleDeleteOrder = () => {
    axios.delete(`${SERVER_URL}/orders/${id}`)
      .then(() => {
        onDeleteOrder(id); 
      })
      .catch((error) => {
        console.error('Error deleting order:', error);
      });
  };

  return (
    <div className="order-container">
      <h2>Order ID: {id}</h2>
      <p>User ID: {userId}</p>
      <p>Date Created: {dateCreated}</p>
      <div className="order-buttons">
        <button>View Details</button>
        <button onClick={handleDeleteOrder}>Delete Order</button>
      </div>
    </div>
  );
};

export default Order;
