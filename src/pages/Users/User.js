// User.js
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
 

  const handleCreateOrder= (userId) =>{
    const orderData = {
      userId: userId,
      status: 'INPROGRESS', 
    };
    axios.post(`${SERVER_URL}/orders`,orderData)
    
    window.location.href = `/createOrder/${userId}`;
  }
      
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
