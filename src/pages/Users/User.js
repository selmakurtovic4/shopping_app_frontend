import React from 'react';
import './User.css';
import axios from 'axios';
import config from '../../config.json';

const SERVER_URL = config.SERVER_URL;

const User = ({ user, onDeleteUser }) => {
  const { id, firstName, lastName } = user;

  const handleDeleteUser = () => {
    axios.delete(`${SERVER_URL}/user/${id}`)
      .then(() => {
        onDeleteUser(id); 
      })
      .catch((error) => {
        console.error('Error deleting user:', error);
      });
  };
  const handleGetOrders = (userId) => {
    window.location.href = `/orders/${userId}`;
  };
 
  const handleCreateOrder = async (userId) => {
    try {
      //console.log(userId);
      const orderData = {
        userId: userId,
        status: 'INPROGRESS',
        dateCreated: new Date(),
      };
      console.log(orderData);
      const response = await axios.post(`${SERVER_URL}/orders/`, orderData);

      if (response.status === 200) {
        const orderId = response.data.data; // Assuming the order ID is in the response
      //  setActiveOrder(orderId);
      console.log(orderId);
      window.location.href = `/products/${orderId}`;

      } else {
        console.error('Invalid response status:', response.status);
      }
    } catch (error) {
      console.error('Error creating order:', error);
    }
  };
  
  
      
  return (
    <div className="user-container">
      <h2>{`${firstName} ${lastName}`}</h2>
      <div className="user-buttons">
        <button onClick={()=>handleCreateOrder(id)}>Create New Order</button>
        <button onClick={() => handleGetOrders(id)}>See Previous Orders</button>
        <button onClick={handleDeleteUser}>Delete User</button>
      </div>
    </div>
  );
};

export default User;
